// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import 'test/base/BaseTest.t.sol';
import 'test/DiGiBaseERC721Test.t.sol';
import {CollectPublicationAction} from 'contracts/modules/act/collect/CollectPublicationAction.sol';
import {CollectNFT} from 'contracts/modules/act/collect/CollectNFT.sol';
import {MockCollectModule} from 'test/mocks/MockCollectModule.sol';
import {Clones} from '@openzeppelin/contracts/proxy/Clones.sol';
import {Errors as ModulesErrors} from 'contracts/modules/constants/Errors.sol';

contract CollectNFTTest is BaseTest, DiGiBaseERC721Test {
    using stdJson for string;

    function testCollectNFTTest() public {
        // Prevents being counted in Foundry Coverage
    }

    CollectPublicationAction collectPublicationAction;
    address mockCollectModule;
    CollectNFT collectNFT;
    address collectNFTImpl;
    uint256 defaultPubId;
    uint256 firstCollectTokenId;

    Types.PublicationActionParams collectActionParams;

    function setUp() public override {
        super.setUp();

        // Deploy CollectPublicationAction
        if (fork && keyExists(json, string(abi.encodePacked('.', forkEnv, '.CollectNFTImpl')))) {
            collectNFTImpl = json.readAddress(string(abi.encodePacked('.', forkEnv, '.CollectNFTImpl')));
            console.log('Found CollectNFTImpl deployed at:', address(collectNFTImpl));
        }

        if (fork && keyExists(json, string(abi.encodePacked('.', forkEnv, '.CollectPublicationAction')))) {
            collectPublicationAction = CollectPublicationAction(
                json.readAddress(string(abi.encodePacked('.', forkEnv, '.CollectPublicationAction')))
            );
            console.log('Found collectPublicationAction deployed at:', address(collectPublicationAction));
        }

        // Both deployed - need to verify if they are linked
        if (collectNFTImpl != address(0) && address(collectPublicationAction) != address(0)) {
            if (CollectNFT(collectNFTImpl).ACTION_MODULE() == address(collectPublicationAction)) {
                console.log('CollectNFTImpl and CollectPublicationAction already deployed and linked');
                return;
            }
        }

        uint256 deployerNonce = vm.getNonce(deployer);

        address predictedCollectPublicationAction = computeCreateAddress(deployer, deployerNonce);
        address predictedCollectNFTImpl = computeCreateAddress(deployer, deployerNonce + 1);

        vm.startPrank(deployer);
        collectPublicationAction = new CollectPublicationAction(address(hub), predictedCollectNFTImpl, address(this));
        collectNFTImpl = address(new CollectNFT(address(hub), address(collectPublicationAction)));
        vm.stopPrank();

        assertEq(
            address(collectPublicationAction),
            predictedCollectPublicationAction,
            'CollectPublicationAction deployed address mismatch'
        );
        assertEq(collectNFTImpl, predictedCollectNFTImpl, 'CollectNFTImpl deployed address mismatch');

        vm.label(address(collectPublicationAction), 'CollectPublicationAction');
        vm.label(collectNFTImpl, 'CollectNFTImpl');

        // Deploy & Whitelist MockCollectModule
        mockCollectModule = address(new MockCollectModule(address(this)));
        collectPublicationAction.registerCollectModule(mockCollectModule);

        Types.PostParams memory postParams = _getDefaultPostParams();
        postParams.actionModules[0] = address(collectPublicationAction);
        postParams.actionModulesInitDatas[0] = abi.encode(mockCollectModule, abi.encode(true));

        vm.prank(defaultAccount.owner);
        defaultPubId = hub.post(postParams);

        collectActionParams = Types.PublicationActionParams({
            publicationActedProfileId: defaultAccount.profileId,
            publicationActedId: defaultPubId,
            actorProfileId: defaultAccount.profileId,
            referrerProfileIds: _emptyUint256Array(),
            referrerPubIds: _emptyUint256Array(),
            actionModuleAddress: address(collectPublicationAction),
            actionModuleData: abi.encode(defaultAccount.owner, abi.encode(true))
        });

        vm.prank(defaultAccount.owner);
        bytes memory result = hub.act(collectActionParams);
        console.logBytes(result);
        (, uint256 tokenId, , ) = abi.decode(result, (address, uint256, address, bytes));
        firstCollectTokenId = tokenId;

        collectNFT = CollectNFT(
            collectPublicationAction.getCollectData(defaultAccount.profileId, defaultPubId).collectNFT
        );
    }

    function _mintERC721(address to) internal virtual override returns (uint256) {
        collectActionParams.actionModuleData = abi.encode(to, abi.encode(true));
        vm.prank(defaultAccount.owner);
        bytes memory actResult = hub.act(collectActionParams);
        (, uint256 tokenId, , ) = abi.decode(actResult, (address, uint256, address, bytes));
        return tokenId;
    }

    function _burnERC721(uint256 tokenId) internal virtual override {
        collectNFT.burn(tokenId);
    }

    function _getERC721TokenAddress() internal view virtual override returns (address) {
        return address(collectNFT);
    }

    function testDoesNotSupportOtherThanTheExpectedInterfaces(uint32 interfaceId) public override {
        vm.assume(bytes4(interfaceId) != bytes4(keccak256('royaltyInfo(uint256,uint256)')));
        super.testDoesNotSupportOtherThanTheExpectedInterfaces(interfaceId);
    }

    //////////////////////////////////////////////////////////
    // ERC-2981 Royalties - Scenarios
    //////////////////////////////////////////////////////////

    function testSupportsErc2981Interface() public {
        assertTrue(collectNFT.supportsInterface(bytes4(keccak256('royaltyInfo(uint256,uint256)'))));
    }

    function testDefaultRoyaltiesAreSetTo10Percent(uint256 tokenId) public {
        uint256 salePrice = 100;
        uint256 expectedRoyalties = 10;

        (address receiver, uint256 royalties) = collectNFT.royaltyInfo(tokenId, salePrice);

        assertEq(receiver, defaultAccount.owner);
        assertEq(royalties, expectedRoyalties);
    }

    function testSetRoyalties(uint256 royaltiesInBasisPoints, uint256 tokenId, uint256 salePrice) public {
        uint256 basisPoints = 10000;
        royaltiesInBasisPoints = bound(royaltiesInBasisPoints, 0, basisPoints);
        uint256 salePriceTimesRoyalties;
        unchecked {
            salePriceTimesRoyalties = salePrice * royaltiesInBasisPoints;
            // Fuzz prices that does not generate overflow, otherwise royaltyInfo will revert
            vm.assume(salePrice == 0 || salePriceTimesRoyalties / salePrice == royaltiesInBasisPoints);
        }

        vm.prank(defaultAccount.owner);
        collectNFT.setRoyalty(royaltiesInBasisPoints);

        (address receiver, uint256 royalties) = collectNFT.royaltyInfo(tokenId, salePrice);

        assertEq(receiver, defaultAccount.owner);
        assertEq(royalties, salePriceTimesRoyalties / basisPoints);
    }

    //////////////////////////////////////////////////////////
    // ERC-2981 Royalties - Negatives
    //////////////////////////////////////////////////////////

    function testCannotSetRoyaltiesIf_NotOwnerOfProfileAuthoringCollectedPublication(
        address nonCollectionOwner,
        uint256 royaltiesInBasisPoints
    ) public {
        uint256 basisPoints = 10000;
        royaltiesInBasisPoints = bound(royaltiesInBasisPoints, 0, basisPoints);
        vm.assume(nonCollectionOwner != defaultAccount.owner);

        vm.prank(nonCollectionOwner);
        vm.expectRevert(Errors.NotProfileOwner.selector);
        collectNFT.setRoyalty(royaltiesInBasisPoints);
    }

    function testCannotSetRoyaltiesIf_ExceedsBasisPoints(uint256 royaltiesInBasisPoints) public {
        uint256 basisPoints = 10000;
        vm.assume(royaltiesInBasisPoints > basisPoints);

        vm.prank(defaultAccount.owner);
        vm.expectRevert(Errors.InvalidParameter.selector);
        collectNFT.setRoyalty(royaltiesInBasisPoints);
    }

    //

    function testCannotInitializeTwoTimes(uint256 profileId, uint256 pubId) public {
        vm.expectRevert(Errors.Initialized.selector);
        collectNFT.initialize(profileId, pubId);
    }

    function testTokenURI() public {
        vm.expectCall(address(hub), abi.encodeCall(hub.getContentURI, (defaultAccount.profileId, defaultPubId)), 1);
        collectNFT.tokenURI(firstCollectTokenId);
    }

    function testCannot_GetTokenURIIfTokenDoesNotExist(uint256 nonexistentToken) public {
        vm.assume(collectNFT.exists(nonexistentToken) == false);
        vm.expectRevert(Errors.TokenDoesNotExist.selector);
        collectNFT.tokenURI(nonexistentToken);
    }

    function testCannot_MintNotFromActionModule(address notActionModule, address to) public {
        vm.assume(notActionModule != address(collectPublicationAction));
        vm.assume(notActionModule != address(0));
        vm.expectRevert(ModulesErrors.NotActionModule.selector);
        collectNFT.mint(to);
    }

    function testGetSourcePublicationPointer(
        address hub,
        address actionModule,
        uint256 profileId,
        uint256 pubId
    ) public {
        vm.assume(profileId != 0);
        vm.assume(pubId != 0);

        // Deploys Collect NFT implementation
        collectNFTImpl = address(new CollectNFT(hub, actionModule));

        // Clones
        collectNFT = CollectNFT(Clones.clone(collectNFTImpl));

        // Initializes the clone
        collectNFT.initialize(profileId, pubId);

        (uint256 sourceProfileId, uint256 sourcePubId) = collectNFT.getSourcePublicationPointer();

        assertEq(sourceProfileId, profileId);
        assertEq(sourcePubId, pubId);
    }
}
