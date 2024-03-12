// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {IPublicationActionModule} from 'contracts/interfaces/IPublicationActionModule.sol';
import {IModuleRegistry} from 'contracts/interfaces/IModuleRegistry.sol';
import {HubRestricted} from 'contracts/base/HubRestricted.sol';
import {Errors} from 'contracts/libraries/constants/Errors.sol';
import {Types} from 'contracts/libraries/constants/Types.sol';
import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {IWMATIC} from 'contracts/modules/interfaces/IWMATIC.sol';
import {IERC721} from '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import {ERC721SeaDropStructsErrorsAndEvents} from '@seadrop/lib/ERC721SeaDropStructsErrorsAndEvents.sol';
import {ISeaDrop} from '@seadrop/interfaces/ISeaDrop.sol';
import {Clones} from 'openzeppelin-contracts/proxy/Clones.sol';
import {PublicDrop} from '@seadrop/lib/SeaDropStructs.sol';
import {DiGiSeaDropCollection} from './DiGiSeaDropCollection.sol';
import {IDiGiHub} from 'contracts/interfaces/IDiGiHub.sol';

import {DiGiModuleMetadataInitializable} from 'contracts/modules/DiGiModuleMetadataInitializable.sol';

/**
 * @custom:upgradeable Transparent upgradeable proxy without initializer.
 */
contract SeaDropMintPublicationAction is DiGiModuleMetadataInitializable, HubRestricted, IPublicationActionModule {
    function supportsInterface(bytes4 interfaceID) public pure override returns (bool) {
        return interfaceID == type(IPublicationActionModule).interfaceId || super.supportsInterface(interfaceID);
    }

    uint256 constant MAX_BPS = 10_000;

    ISeaDrop public immutable SEADROP;
    IWMATIC public immutable WMATIC;

    IModuleRegistry public immutable MODULE_REGISTRY;

    struct CollectionData {
        address nftCollectionAddress;
        uint16 referrersFeeBps;
    }

    error WrongMintPaymentAmount();
    error SeaDropFeesNotReceived();
    error ActionModuleNotAllowedAsPayer();
    error ActionModuleNotAllowedAsFeeRecipient();
    error MintPriceExceedsExpectedOne();
    error NotEnoughFeesSet();
    error Unauthorized();

    event SeaDropPublicationFeesRescaled(uint256 profileId, uint256 pubId, uint16 referrersFeeBps);
    event DiGiSeaDropCollectionDeployed(
        address collectionAddress,
        address owner,
        string name,
        string symbol,
        ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStruct config
    );

    mapping(uint256 profileId => mapping(uint256 pubId => CollectionData collectionData)) internal _collectionDataByPub;

    address public digiSeaDropCollectionImpl;

    constructor(
        address hub,
        address moduleRegistry,
        address seaDrop,
        address wmatic,
        address moduleOwner
    ) HubRestricted(hub) DiGiModuleMetadataInitializable(moduleOwner) {
        MODULE_REGISTRY = IModuleRegistry(moduleRegistry);
        MODULE_REGISTRY.registerErc20Currency(wmatic);
        WMATIC = IWMATIC(wmatic);
        SEADROP = ISeaDrop(seaDrop);
    }

    function deploySeaDropCollection(
        address owner,
        string memory name,
        string memory symbol,
        ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStruct calldata config
    ) external returns (address) {
        bytes32 cloneSalt = keccak256(abi.encodePacked(owner, name, symbol, blockhash(block.number), msg.sender));
        address instance = Clones.cloneDeterministic(digiSeaDropCollectionImpl, cloneSalt);
        address[] memory allowedSeaDrop = new address[](1);
        allowedSeaDrop[0] = address(SEADROP);
        DiGiSeaDropCollection(instance).initialize(owner, name, symbol, allowedSeaDrop, config);
        emit DiGiSeaDropCollectionDeployed(instance, owner, name, symbol, config);
        return instance;
    }

    function setDiGiSeaDropCollectionImpl(address newDiGiSeaDropCollectionImpl) external {
        if (msg.sender != IDiGiHub(HUB).getGovernance()) {
            revert Unauthorized();
        }
        digiSeaDropCollectionImpl = newDiGiSeaDropCollectionImpl;
    }

    function initializePublicationAction(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external override onlyHub returns (bytes memory) {
        uint16 digiTreasuryFeeBps = IDiGiHub(HUB).getTreasuryFee();
        CollectionData memory collectionData = abi.decode(data, (CollectionData));

        PublicDrop memory publicDrop = SEADROP.getPublicDrop(collectionData.nftCollectionAddress);

        // The collection should allow `address(this)` as a payer, otherwise this module won't be able to mint
        // on behalf of other addresses.
        // If `address(this)` is removed from allowed payers later on, the mint will fail.
        if (!SEADROP.getPayerIsAllowed({nftContract: collectionData.nftCollectionAddress, payer: address(this)})) {
            revert ActionModuleNotAllowedAsPayer();
        }

        // The collection should allow `address(this)` as a fee recipient, otherwise this module won't be able to
        // distribute fees among DiGi treasury and referrals after minting.
        // If `address(this)` is removed from allowed fee recipients later on, the mint will fail.
        if (
            !SEADROP.getFeeRecipientIsAllowed({
                nftContract: collectionData.nftCollectionAddress,
                feeRecipient: address(this)
            })
        ) {
            revert ActionModuleNotAllowedAsFeeRecipient();
        }

        _validateFees(publicDrop, digiTreasuryFeeBps, collectionData.referrersFeeBps);

        _collectionDataByPub[profileId][pubId] = collectionData;
        return abi.encode(publicDrop);
    }

    // Function to allow receiving MATIC native currency while minting (as a fee recipient).
    receive() external payable {}

    // A function to allow withdrawing dust, and rogue native currency,
    // and ERC20 tokens left in this contract to the treasury.
    function withdrawToTreasury(address currency) external {
        address digiTreasuryAddress = IDiGiHub(HUB).getTreasury();
        if (currency == address(0)) {
            payable(digiTreasuryAddress).transfer(address(this).balance);
        } else {
            IERC20 erc20Token = IERC20(currency);
            erc20Token.transfer(digiTreasuryAddress, erc20Token.balanceOf(address(this)));
        }
    }

    function processPublicationAction(
        Types.ProcessActionParams calldata processActionParams
    ) external override onlyHub returns (bytes memory) {
        CollectionData memory collectionData = _collectionDataByPub[processActionParams.publicationActedProfileId][
            processActionParams.publicationActedId
        ];
        (address digiTreasuryAddress, uint16 digiTreasuryFeeBps) = IDiGiHub(HUB).getTreasuryData();
        PublicDrop memory publicDrop = SEADROP.getPublicDrop(collectionData.nftCollectionAddress);

        uint256 expectedFees;
        uint256 mintPaymentAmount;
        uint256 balanceBeforeMinting;
        {
            (uint256 quantityToMint, uint256 expectedMintPrice) = abi.decode(
                processActionParams.actionModuleData,
                (uint256, uint256)
            );

            if (publicDrop.mintPrice > expectedMintPrice) {
                revert MintPriceExceedsExpectedOne();
            }

            _validateFeesAndRescaleThemIfNecessary(
                processActionParams.publicationActedProfileId,
                processActionParams.publicationActedId,
                publicDrop,
                digiTreasuryFeeBps,
                collectionData.referrersFeeBps
            );

            mintPaymentAmount = publicDrop.mintPrice * quantityToMint;
            expectedFees = (mintPaymentAmount * publicDrop.feeBps) / MAX_BPS;

            balanceBeforeMinting = address(this).balance;

            // Get the WMATIC to perform the mint payment from the transaction executor.
            WMATIC.transferFrom(processActionParams.transactionExecutor, address(this), mintPaymentAmount);
            // Unwrap WMATIC into MATIC.
            WMATIC.withdraw(mintPaymentAmount);

            // Now this module holds the mint payment amount in MATIC. Proceeds to perform the mint.
            SEADROP.mintPublic{value: mintPaymentAmount}({
                nftContract: collectionData.nftCollectionAddress,
                feeRecipient: address(this),
                minterIfNotPayer: processActionParams.actorProfileOwner,
                quantity: quantityToMint
            });
        }

        if (expectedFees > 0) {
            uint256 balanceAfterMinting = address(this).balance;

            // We expect the fees to be sent back to this contract.
            if (balanceAfterMinting != balanceBeforeMinting + expectedFees) {
                revert SeaDropFeesNotReceived();
            }

            _distributeFees(expectedFees, mintPaymentAmount, digiTreasuryAddress, collectionData, processActionParams);
        }

        return '';
    }

    function rescaleFees(uint256 profileId, uint256 pubId) public {
        uint16 digiTreasuryFeeBps = IDiGiHub(HUB).getTreasuryFee();
        PublicDrop memory publicDrop = SEADROP.getPublicDrop(
            _collectionDataByPub[profileId][pubId].nftCollectionAddress
        );
        _rescaleFees(profileId, pubId, digiTreasuryFeeBps, publicDrop);
    }

    function _rescaleFees(
        uint256 profileId,
        uint256 pubId,
        uint16 digiTreasuryFeeBps,
        PublicDrop memory publicDrop
    ) internal {
        if (publicDrop.feeBps < digiTreasuryFeeBps) {
            revert NotEnoughFeesSet();
        }
        _collectionDataByPub[profileId][pubId].referrersFeeBps = publicDrop.feeBps - digiTreasuryFeeBps;
        emit SeaDropPublicationFeesRescaled(profileId, pubId, publicDrop.feeBps - digiTreasuryFeeBps);
    }

    function _distributeFees(
        uint256 feesToDistribute,
        uint256 mintPaymentAmount,
        address digiTreasuryAddress,
        CollectionData memory collectionData,
        Types.ProcessActionParams calldata processActionParams
    ) internal {
        // Wrap MATIC back into WMATIC.
        WMATIC.deposit{value: feesToDistribute}();

        uint256 referrersCut = (mintPaymentAmount * collectionData.referrersFeeBps) / MAX_BPS;

        uint256 referrersQuantity = processActionParams.referrerProfileIds.length;
        uint256 feePerReferrer = referrersCut / referrersQuantity;

        if (feePerReferrer > 0) {
            uint256 i;
            // Execute fee payout to referrers (DiGiHub already validated them).
            while (i < referrersQuantity) {
                address referrer = IERC721(HUB).ownerOf(processActionParams.referrerProfileIds[i]);
                WMATIC.transfer(referrer, feePerReferrer);
                unchecked {
                    ++i;
                }
            }
        }

        // Because we already know that
        //     `publicDrop.feeBps >= digiTreasuryFeeBps + collectionData.referrersFeeBps`
        // then
        //     `feesToDistribute - referrersCut`
        // will be the DiGi Treasury Fee plus any fee excess.
        uint256 digiTreasuryCutPlusExcess = feesToDistribute - referrersCut;
        if (digiTreasuryCutPlusExcess > 0) {
            WMATIC.transfer(digiTreasuryAddress, digiTreasuryCutPlusExcess);
        }
    }

    function _validateFees(
        PublicDrop memory publicDrop,
        uint16 digiTreasuryFeeBps,
        uint16 referrersFeeBps
    ) internal pure {
        if (publicDrop.mintPrice > 0 && publicDrop.feeBps < digiTreasuryFeeBps + referrersFeeBps) {
            revert NotEnoughFeesSet();
        }
    }

    function _validateFeesAndRescaleThemIfNecessary(
        uint256 profileId,
        uint256 pubId,
        PublicDrop memory publicDrop,
        uint16 digiTreasuryFeeBps,
        uint16 referrersFeeBps
    ) internal {
        if (publicDrop.mintPrice > 0 && publicDrop.feeBps != digiTreasuryFeeBps + referrersFeeBps) {
            _rescaleFees(profileId, pubId, digiTreasuryFeeBps, publicDrop);
        }
    }
}
