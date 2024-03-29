// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {ERC2981CollectionRoyalties} from 'contracts/base/ERC2981CollectionRoyalties.sol';
import {Errors} from 'contracts/libraries/constants/Errors.sol';
import {ICollectNFT} from 'contracts/interfaces/ICollectNFT.sol';
import {IERC721} from '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import {IDiGiHub} from 'contracts/interfaces/IDiGiHub.sol';
import {DiGiBaseERC721} from 'contracts/base/DiGiBaseERC721.sol';
import {Strings} from '@openzeppelin/contracts/utils/Strings.sol';

/**
 * @title CollectNFT
 * @author DiGi Protocol
 *
 * @dev This is the Legacy CollectNFT that is used for Legacy DiGi V1 publications. The new CollectNFT was introduced in
 * DiGi V2 with the only difference that it is restricted by the Action Module instead of the DiGiHub.
 *
 * @notice This is the NFT contract that is minted upon collecting a given publication. It is cloned upon
 * the first collect for a given publication, and the token URI points to the original publication's contentURI.
 */
contract LegacyCollectNFT is DiGiBaseERC721, ERC2981CollectionRoyalties, ICollectNFT {
    using Strings for uint256;

    address public immutable HUB;

    uint256 internal _profileId;
    uint256 internal _pubId;
    uint256 internal _tokenIdCounter;

    bool private _initialized;

    uint256 internal _royaltiesInBasisPoints;

    // We create the CollectNFT with the pre-computed HUB address before deploying the hub proxy in order
    // to initialize the hub proxy at construction.
    constructor(address hub) {
        if (hub == address(0)) revert Errors.InitParamsInvalid();
        HUB = hub;
        _initialized = true;
    }

    /// @inheritdoc ICollectNFT
    function initialize(uint256 profileId, uint256 pubId) external override {
        if (_initialized) revert Errors.Initialized();
        _initialized = true;
        _setRoyalty(1000); // 10% of royalties
        _profileId = profileId;
        _pubId = pubId;
        // _name and _symbol remain uninitialized because we override the getters below
    }

    /// @inheritdoc ICollectNFT
    function mint(address to) external override returns (uint256) {
        if (msg.sender != HUB) revert Errors.NotHub();
        unchecked {
            uint256 tokenId = ++_tokenIdCounter;
            _mint(to, tokenId);
            return tokenId;
        }
    }

    /// @inheritdoc ICollectNFT
    function getSourcePublicationPointer() external view override returns (uint256, uint256) {
        return (_profileId, _pubId);
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        if (!_exists(tokenId)) revert Errors.TokenDoesNotExist();
        return IDiGiHub(HUB).getContentURI(_profileId, _pubId);
    }

    /**
     * @dev See {IERC721Metadata-name}.
     */
    function name() public view override returns (string memory) {
        return string.concat('DiGi Collect | Profile #', _profileId.toString(), ' - Publication #', _pubId.toString());
    }

    /**
     * @dev See {IERC721Metadata-symbol}.
     */
    function symbol() public pure override returns (string memory) {
        return 'DIGI-COLLECT';
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC2981CollectionRoyalties, DiGiBaseERC721)
        returns (bool)
    {
        return
            ERC2981CollectionRoyalties.supportsInterface(interfaceId) || DiGiBaseERC721.supportsInterface(interfaceId);
    }

    function _getReceiver(
        uint256 /* tokenId */
    ) internal view override returns (address) {
        if (!IDiGiHub(HUB).exists(_profileId)) {
            return address(0);
        }
        return IERC721(HUB).ownerOf(_profileId);
    }

    function _beforeRoyaltiesSet(
        uint256 /* royaltiesInBasisPoints */
    ) internal view override {
        if (IERC721(HUB).ownerOf(_profileId) != msg.sender) {
            revert Errors.NotProfileOwner();
        }
    }

    function _getRoyaltiesInBasisPointsSlot() internal pure override returns (uint256) {
        uint256 slot;
        assembly {
            slot := _royaltiesInBasisPoints.slot
        }
        return slot;
    }
}
