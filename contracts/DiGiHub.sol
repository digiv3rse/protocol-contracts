// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

// Interfaces
import {IDiGiProtocol} from 'contracts/interfaces/IDiGiProtocol.sol';
import {IFollowNFT} from 'contracts/interfaces/IFollowNFT.sol';

// Constants
import {Types} from 'contracts/libraries/constants/Types.sol';
import {Errors} from 'contracts/libraries/constants/Errors.sol';

// DiGi Hub Components
import {DiGiHubStorage} from 'contracts/base/DiGiHubStorage.sol';
import {DiGiImplGetters} from 'contracts/base/DiGiImplGetters.sol';
import {DiGiGovernable} from 'contracts/base/DiGiGovernable.sol';
import {DiGiProfiles} from 'contracts/base/DiGiProfiles.sol';
import {DiGiHubEventHooks} from 'contracts/base/DiGiHubEventHooks.sol';
import {DiGiVersion} from 'contracts/base/DiGiVersion.sol';

// Libraries
import {ActionLib} from 'contracts/libraries/ActionLib.sol';
import {LegacyCollectLib} from 'contracts/libraries/LegacyCollectLib.sol';
import {FollowLib} from 'contracts/libraries/FollowLib.sol';
import {MetaTxLib} from 'contracts/libraries/MetaTxLib.sol';
import {ProfileLib} from 'contracts/libraries/ProfileLib.sol';
import {PublicationLib} from 'contracts/libraries/PublicationLib.sol';
import {StorageLib} from 'contracts/libraries/StorageLib.sol';
import {ValidationLib} from 'contracts/libraries/ValidationLib.sol';

// DiGi Migrations V1 to V2
import {DiGiV2Migration} from 'contracts/misc/DiGiV2Migration.sol';

/**
 * @title DiGiHub
 * @author DiGi Protocol
 *
 * @notice This is the main entry point of the DiGi Protocol. It contains governance functionality as well as
 * publishing and profile interaction functionality.
 *
 * NOTE: The DiGi Protocol is unique in that frontend operators need to track a potentially overwhelming
 * number of NFT contracts and interactions at once. For that reason, we've made two quirky design decisions:
 *      1. Both Follow & Collect NFTs invoke a DiGiHub callback on transfer with the sole purpose of emitting an event.
 *      2. Almost every event in the protocol emits the current block timestamp, reducing the need to fetch it manually.
 *
 * @custom:upgradeable Transparent upgradeable proxy. In this version, without initializer.
 * See `../misc/DiGiHubInitializable.sol` for the initializable version.
 */
contract DiGiHub is
    DiGiProfiles,
    DiGiGovernable,
    DiGiV2Migration,
    DiGiImplGetters,
    DiGiHubEventHooks,
    DiGiHubStorage,
    DiGiVersion,
    IDiGiProtocol
{
    modifier onlyProfileOwnerOrDelegatedExecutor(address expectedOwnerOrDelegatedExecutor, uint256 profileId) {
        ValidationLib.validateAddressIsProfileOwnerOrDelegatedExecutor(expectedOwnerOrDelegatedExecutor, profileId);
        _;
    }

    modifier whenPublishingEnabled() {
        if (StorageLib.getState() != Types.ProtocolState.Unpaused) {
            revert Errors.PublishingPaused();
        }
        _;
    }

    constructor(
        address followNFTImpl,
        address legacyCollectNFTImpl, // We still pass the deprecated CollectNFTImpl for legacy Collects to work
        address moduleRegistry,
        uint256 tokenGuardianCooldown,
        Types.MigrationParams memory migrationParams
    )
        DiGiV2Migration(migrationParams)
        DiGiProfiles(tokenGuardianCooldown)
        DiGiImplGetters(followNFTImpl, legacyCollectNFTImpl, moduleRegistry)
    {}

    /// @inheritdoc IDiGiProtocol
    function createProfile(
        Types.CreateProfileParams calldata createProfileParams
    ) external override whenNotPaused returns (uint256) {
        ValidationLib.validateProfileCreatorWhitelisted(msg.sender);
        unchecked {
            uint256 profileId = ++_profileCounter;
            _mint(createProfileParams.to, profileId);
            ProfileLib.createProfile(createProfileParams, profileId);
            return profileId;
        }
    }

    ///////////////////////////////////////////
    ///        PROFILE OWNER FUNCTIONS      ///
    ///////////////////////////////////////////

    /// @inheritdoc IDiGiProtocol
    function setProfileMetadataURI(
        uint256 profileId,
        string calldata metadataURI
    ) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(msg.sender, profileId) {
        ProfileLib.setProfileMetadataURI(profileId, metadataURI, msg.sender);
    }

    /// @inheritdoc IDiGiProtocol
    function setProfileMetadataURIWithSig(
        uint256 profileId,
        string calldata metadataURI,
        Types.EIP712Signature calldata signature
    ) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(signature.signer, profileId) {
        MetaTxLib.validateSetProfileMetadataURISignature(signature, profileId, metadataURI);
        ProfileLib.setProfileMetadataURI(profileId, metadataURI, signature.signer);
    }

    /// @inheritdoc IDiGiProtocol
    function setFollowModule(
        uint256 profileId,
        address followModule,
        bytes calldata followModuleInitData
    ) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(msg.sender, profileId) {
        ProfileLib.setFollowModule(profileId, followModule, followModuleInitData, msg.sender);
    }

    /// @inheritdoc IDiGiProtocol
    function setFollowModuleWithSig(
        uint256 profileId,
        address followModule,
        bytes calldata followModuleInitData,
        Types.EIP712Signature calldata signature
    ) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(signature.signer, profileId) {
        MetaTxLib.validateSetFollowModuleSignature(signature, profileId, followModule, followModuleInitData);
        ProfileLib.setFollowModule(profileId, followModule, followModuleInitData, signature.signer);
    }

    /// @inheritdoc IDiGiProtocol
    function changeDelegatedExecutorsConfig(
        uint256 delegatorProfileId,
        address[] calldata delegatedExecutors,
        bool[] calldata approvals,
        uint64 configNumber,
        bool switchToGivenConfig
    ) external override whenNotPaused onlyProfileOwner(msg.sender, delegatorProfileId) {
        ProfileLib.changeGivenDelegatedExecutorsConfig(
            delegatorProfileId,
            delegatedExecutors,
            approvals,
            configNumber,
            switchToGivenConfig
        );
    }

    function changeDelegatedExecutorsConfig(
        uint256 delegatorProfileId,
        address[] calldata delegatedExecutors,
        bool[] calldata approvals
    ) external override whenNotPaused onlyProfileOwner(msg.sender, delegatorProfileId) {
        ProfileLib.changeDelegatedExecutorsConfig(delegatorProfileId, delegatedExecutors, approvals);
    }

    /// @inheritdoc IDiGiProtocol
    function changeDelegatedExecutorsConfigWithSig(
        uint256 delegatorProfileId,
        address[] calldata delegatedExecutors,
        bool[] calldata approvals,
        uint64 configNumber,
        bool switchToGivenConfig,
        Types.EIP712Signature calldata signature
    ) external override whenNotPaused onlyProfileOwner(signature.signer, delegatorProfileId) {
        MetaTxLib.validateChangeDelegatedExecutorsConfigSignature(
            signature,
            delegatorProfileId,
            delegatedExecutors,
            approvals,
            configNumber,
            switchToGivenConfig
        );
        ProfileLib.changeGivenDelegatedExecutorsConfig(
            delegatorProfileId,
            delegatedExecutors,
            approvals,
            configNumber,
            switchToGivenConfig
        );
    }

    ////////////////////////////////////////
    ///        PUBLISHING FUNCTIONS      ///
    ////////////////////////////////////////

    /// @inheritdoc IDiGiProtocol
    function post(
        Types.PostParams calldata postParams
    )
        external
        override
        whenPublishingEnabled
        onlyProfileOwnerOrDelegatedExecutor(msg.sender, postParams.profileId)
        returns (uint256)
    {
        return PublicationLib.post({postParams: postParams, transactionExecutor: msg.sender});
    }

    /// @inheritdoc IDiGiProtocol
    function postWithSig(
        Types.PostParams calldata postParams,
        Types.EIP712Signature calldata signature
    )
        external
        override
        whenPublishingEnabled
        onlyProfileOwnerOrDelegatedExecutor(signature.signer, postParams.profileId)
        returns (uint256)
    {
        MetaTxLib.validatePostSignature(signature, postParams);
        return PublicationLib.post({postParams: postParams, transactionExecutor: signature.signer});
    }

    /// @inheritdoc IDiGiProtocol
    function comment(
        Types.CommentParams calldata commentParams
    )
        external
        override
        whenPublishingEnabled
        onlyProfileOwnerOrDelegatedExecutor(msg.sender, commentParams.profileId)
        returns (uint256)
    {
        return PublicationLib.comment({commentParams: commentParams, transactionExecutor: msg.sender});
    }

    /// @inheritdoc IDiGiProtocol
    function commentWithSig(
        Types.CommentParams calldata commentParams,
        Types.EIP712Signature calldata signature
    )
        external
        override
        whenPublishingEnabled
        onlyProfileOwnerOrDelegatedExecutor(signature.signer, commentParams.profileId)
        returns (uint256)
    {
        MetaTxLib.validateCommentSignature(signature, commentParams);
        return PublicationLib.comment({commentParams: commentParams, transactionExecutor: signature.signer});
    }

    /// @inheritdoc IDiGiProtocol
    function mirror(
        Types.MirrorParams calldata mirrorParams
    )
        external
        override
        whenPublishingEnabled
        onlyProfileOwnerOrDelegatedExecutor(msg.sender, mirrorParams.profileId)
        returns (uint256)
    {
        return PublicationLib.mirror({mirrorParams: mirrorParams, transactionExecutor: msg.sender});
    }

    /// @inheritdoc IDiGiProtocol
    function mirrorWithSig(
        Types.MirrorParams calldata mirrorParams,
        Types.EIP712Signature calldata signature
    )
        external
        override
        whenPublishingEnabled
        onlyProfileOwnerOrDelegatedExecutor(signature.signer, mirrorParams.profileId)
        returns (uint256)
    {
        MetaTxLib.validateMirrorSignature(signature, mirrorParams);
        return PublicationLib.mirror({mirrorParams: mirrorParams, transactionExecutor: signature.signer});
    }

    /// @inheritdoc IDiGiProtocol
    function quote(
        Types.QuoteParams calldata quoteParams
    )
        external
        override
        whenPublishingEnabled
        onlyProfileOwnerOrDelegatedExecutor(msg.sender, quoteParams.profileId)
        returns (uint256)
    {
        return PublicationLib.quote({quoteParams: quoteParams, transactionExecutor: msg.sender});
    }

    /// @inheritdoc IDiGiProtocol
    function quoteWithSig(
        Types.QuoteParams calldata quoteParams,
        Types.EIP712Signature calldata signature
    )
        external
        override
        whenPublishingEnabled
        onlyProfileOwnerOrDelegatedExecutor(signature.signer, quoteParams.profileId)
        returns (uint256)
    {
        MetaTxLib.validateQuoteSignature(signature, quoteParams);
        return PublicationLib.quote({quoteParams: quoteParams, transactionExecutor: signature.signer});
    }

    /////////////////////////////////////////////////
    ///        PROFILE INTERACTION FUNCTIONS      ///
    /////////////////////////////////////////////////

    /// @inheritdoc IDiGiProtocol
    function follow(
        uint256 followerProfileId,
        uint256[] calldata idsOfProfilesToFollow,
        uint256[] calldata followTokenIds,
        bytes[] calldata datas
    )
        external
        override
        whenNotPaused
        onlyProfileOwnerOrDelegatedExecutor(msg.sender, followerProfileId)
        returns (uint256[] memory)
    {
        return
            FollowLib.follow({
                followerProfileId: followerProfileId,
                idsOfProfilesToFollow: idsOfProfilesToFollow,
                followTokenIds: followTokenIds,
                followModuleDatas: datas,
                transactionExecutor: msg.sender
            });
    }

    /// @inheritdoc IDiGiProtocol
    function followWithSig(
        uint256 followerProfileId,
        uint256[] calldata idsOfProfilesToFollow,
        uint256[] calldata followTokenIds,
        bytes[] calldata datas,
        Types.EIP712Signature calldata signature
    )
        external
        override
        whenNotPaused
        onlyProfileOwnerOrDelegatedExecutor(signature.signer, followerProfileId)
        returns (uint256[] memory)
    {
        MetaTxLib.validateFollowSignature(signature, followerProfileId, idsOfProfilesToFollow, followTokenIds, datas);
        return
            FollowLib.follow({
                followerProfileId: followerProfileId,
                idsOfProfilesToFollow: idsOfProfilesToFollow,
                followTokenIds: followTokenIds,
                followModuleDatas: datas,
                transactionExecutor: signature.signer
            });
    }

    /// @inheritdoc IDiGiProtocol
    function unfollow(
        uint256 unfollowerProfileId,
        uint256[] calldata idsOfProfilesToUnfollow
    ) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(msg.sender, unfollowerProfileId) {
        FollowLib.unfollow({
            unfollowerProfileId: unfollowerProfileId,
            idsOfProfilesToUnfollow: idsOfProfilesToUnfollow,
            transactionExecutor: msg.sender
        });
    }

    /// @inheritdoc IDiGiProtocol
    function unfollowWithSig(
        uint256 unfollowerProfileId,
        uint256[] calldata idsOfProfilesToUnfollow,
        Types.EIP712Signature calldata signature
    ) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(signature.signer, unfollowerProfileId) {
        MetaTxLib.validateUnfollowSignature(signature, unfollowerProfileId, idsOfProfilesToUnfollow);

        FollowLib.unfollow({
            unfollowerProfileId: unfollowerProfileId,
            idsOfProfilesToUnfollow: idsOfProfilesToUnfollow,
            transactionExecutor: signature.signer
        });
    }

    /// @inheritdoc IDiGiProtocol
    function setBlockStatus(
        uint256 byProfileId,
        uint256[] calldata idsOfProfilesToSetBlockStatus,
        bool[] calldata blockStatus
    ) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(msg.sender, byProfileId) {
        ProfileLib.setBlockStatus(byProfileId, idsOfProfilesToSetBlockStatus, blockStatus, msg.sender);
    }

    /// @inheritdoc IDiGiProtocol
    function setBlockStatusWithSig(
        uint256 byProfileId,
        uint256[] calldata idsOfProfilesToSetBlockStatus,
        bool[] calldata blockStatus,
        Types.EIP712Signature calldata signature
    ) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(signature.signer, byProfileId) {
        MetaTxLib.validateSetBlockStatusSignature(signature, byProfileId, idsOfProfilesToSetBlockStatus, blockStatus);
        ProfileLib.setBlockStatus(byProfileId, idsOfProfilesToSetBlockStatus, blockStatus, signature.signer);
    }

    /// @inheritdoc IDiGiProtocol
    function collectLegacy(
        Types.LegacyCollectParams calldata collectParams
    )
        external
        override
        whenNotPaused
        onlyProfileOwnerOrDelegatedExecutor(msg.sender, collectParams.collectorProfileId)
        returns (uint256)
    {
        return
            LegacyCollectLib.collect({
                collectParams: collectParams,
                transactionExecutor: msg.sender,
                collectorProfileOwner: ownerOf(collectParams.collectorProfileId),
                collectNFTImpl: this.getLegacyCollectNFTImpl()
            });
    }

    /// @inheritdoc IDiGiProtocol
    function collectLegacyWithSig(
        Types.LegacyCollectParams calldata collectParams,
        Types.EIP712Signature calldata signature
    )
        external
        override
        whenNotPaused
        onlyProfileOwnerOrDelegatedExecutor(signature.signer, collectParams.collectorProfileId)
        returns (uint256)
    {
        MetaTxLib.validateLegacyCollectSignature(signature, collectParams);
        return
            LegacyCollectLib.collect({
                collectParams: collectParams,
                transactionExecutor: signature.signer,
                collectorProfileOwner: ownerOf(collectParams.collectorProfileId),
                collectNFTImpl: this.getLegacyCollectNFTImpl()
            });
    }

    /// @inheritdoc IDiGiProtocol
    function act(
        Types.PublicationActionParams calldata publicationActionParams
    )
        external
        override
        whenNotPaused
        onlyProfileOwnerOrDelegatedExecutor(msg.sender, publicationActionParams.actorProfileId)
        returns (bytes memory)
    {
        return
            ActionLib.act({
                publicationActionParams: publicationActionParams,
                transactionExecutor: msg.sender,
                actorProfileOwner: ownerOf(publicationActionParams.actorProfileId)
            });
    }

    /// @inheritdoc IDiGiProtocol
    function actWithSig(
        Types.PublicationActionParams calldata publicationActionParams,
        Types.EIP712Signature calldata signature
    )
        external
        override
        whenNotPaused
        onlyProfileOwnerOrDelegatedExecutor(signature.signer, publicationActionParams.actorProfileId)
        returns (bytes memory)
    {
        MetaTxLib.validateActSignature(signature, publicationActionParams);
        return
            ActionLib.act({
                publicationActionParams: publicationActionParams,
                transactionExecutor: signature.signer,
                actorProfileOwner: ownerOf(publicationActionParams.actorProfileId)
            });
    }

    /// @inheritdoc IDiGiProtocol
    function incrementNonce(uint8 increment) external {
        MetaTxLib.incrementNonce(increment);
    }

    ///////////////////////////////////////////
    ///        EXTERNAL VIEW FUNCTIONS      ///
    ///////////////////////////////////////////

    /// @inheritdoc IDiGiProtocol
    function isFollowing(uint256 followerProfileId, uint256 followedProfileId) external view returns (bool) {
        address followNFT = _profiles[followedProfileId].followNFT;
        return followNFT != address(0) && IFollowNFT(followNFT).isFollowing(followerProfileId);
    }

    /// @inheritdoc IDiGiProtocol
    function isDelegatedExecutorApproved(
        uint256 delegatorProfileId,
        address delegatedExecutor,
        uint64 configNumber
    ) external view returns (bool) {
        return StorageLib.getDelegatedExecutorsConfig(delegatorProfileId).isApproved[configNumber][delegatedExecutor];
    }

    /// @inheritdoc IDiGiProtocol
    function isDelegatedExecutorApproved(
        uint256 delegatorProfileId,
        address delegatedExecutor
    ) external view returns (bool) {
        return ProfileLib.isExecutorApproved(delegatorProfileId, delegatedExecutor);
    }

    /// @inheritdoc IDiGiProtocol
    function getDelegatedExecutorsConfigNumber(uint256 delegatorProfileId) external view returns (uint64) {
        return StorageLib.getDelegatedExecutorsConfig(delegatorProfileId).configNumber;
    }

    /// @inheritdoc IDiGiProtocol
    function getDelegatedExecutorsPrevConfigNumber(uint256 delegatorProfileId) external view returns (uint64) {
        return StorageLib.getDelegatedExecutorsConfig(delegatorProfileId).prevConfigNumber;
    }

    /// @inheritdoc IDiGiProtocol
    function getDelegatedExecutorsMaxConfigNumberSet(uint256 delegatorProfileId) external view returns (uint64) {
        return StorageLib.getDelegatedExecutorsConfig(delegatorProfileId).maxConfigNumberSet;
    }

    /// @inheritdoc IDiGiProtocol
    function isBlocked(uint256 profileId, uint256 byProfileId) external view returns (bool) {
        return _blockedStatus[byProfileId][profileId];
    }

    /// @inheritdoc IDiGiProtocol
    function getContentURI(uint256 profileId, uint256 pubId) external view override returns (string memory) {
        // This function is used by the Collect NFTs' tokenURI function.
        return PublicationLib.getContentURI(profileId, pubId);
    }

    /// @inheritdoc IDiGiProtocol
    function getProfile(uint256 profileId) external view override returns (Types.Profile memory) {
        return _profiles[profileId];
    }

    /// @inheritdoc IDiGiProtocol
    function getPublication(
        uint256 profileId,
        uint256 pubId
    ) external pure override returns (Types.PublicationMemory memory) {
        return StorageLib.getPublicationMemory(profileId, pubId);
    }

    /// @inheritdoc IDiGiProtocol
    function isActionModuleEnabledInPublication(
        uint256 profileId,
        uint256 pubId,
        address module
    ) external view returns (bool) {
        return StorageLib.getPublication(profileId, pubId).actionModuleEnabled[module];
    }

    /// @inheritdoc IDiGiProtocol
    function getPublicationType(
        uint256 profileId,
        uint256 pubId
    ) external view override returns (Types.PublicationType) {
        return PublicationLib.getPublicationType(profileId, pubId);
    }

    function getFollowModule(uint256 profileId) external view returns (address) {
        if (__DEPRECATED__collectModuleWhitelisted[msg.sender]) {
            // Injecting DiGiHub as follow module when a DiGi V1 collect module is performing the call.
            // This is a hack to make legacy collect work when configured for followers only.
            return address(this);
        } else {
            return StorageLib.getProfile(profileId).followModule;
        }
    }

    function isFollowing(
        uint256 followedProfileId,
        address followerAddress,
        uint256 /* tokenId */
    ) external view returns (bool) {
        if (__DEPRECATED__collectModuleWhitelisted[msg.sender]) {
            // This state was pre-filled at LegacyCollectLib and it is a hack to make legacy collect work when
            // configured for followers only.
            return
                _legacyCollectFollowValidationHelper[followerAddress] == followedProfileId ||
                ProfileLib.isExecutorApproved(followedProfileId, followerAddress) ||
                ProfileLib.ownerOf(followedProfileId) == followerAddress;
        } else {
            revert Errors.ExecutorInvalid();
        }
    }
}
