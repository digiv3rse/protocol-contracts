// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {Types} from 'contracts/libraries/constants/Types.sol';
import {MigrationLib} from 'contracts/libraries/MigrationLib.sol';
import {StorageLib} from 'contracts/libraries/StorageLib.sol';
import {ValidationLib} from 'contracts/libraries/ValidationLib.sol';
import {Errors} from 'contracts/libraries/constants/Errors.sol';

// Handles
import {DiGiHandles} from 'contracts/namespaces/DiGiHandles.sol';
import {TokenHandleRegistry} from 'contracts/namespaces/TokenHandleRegistry.sol';

contract DiGiV2Migration {
    address internal immutable FEE_FOLLOW_MODULE;
    address internal immutable PROFILE_FOLLOW_MODULE;
    address internal immutable NEW_FEE_FOLLOW_MODULE;

    DiGiHandles internal immutable digiHandles;
    TokenHandleRegistry internal immutable tokenHandleRegistry;

    constructor(Types.MigrationParams memory migrationParams) {
        FEE_FOLLOW_MODULE = migrationParams.legacyFeeFollowModule;
        PROFILE_FOLLOW_MODULE = migrationParams.legacyProfileFollowModule;
        NEW_FEE_FOLLOW_MODULE = migrationParams.newFeeFollowModule;
        digiHandles = DiGiHandles(migrationParams.digiHandlesAddress);
        tokenHandleRegistry = TokenHandleRegistry(migrationParams.tokenHandleRegistryAddress);
    }

    function batchMigrateProfiles(uint256[] calldata profileIds) external {
        MigrationLib.batchMigrateProfiles(profileIds, digiHandles, tokenHandleRegistry);
    }

    // This is for public migration by themselves (so we only check the ownership of profile once)
    function batchMigrateFollows(
        uint256 followerProfileId,
        uint256[] calldata idsOfProfileFollowed,
        uint256[] calldata followTokenIds
    ) external {
        ValidationLib.validateAddressIsProfileOwnerOrDelegatedExecutor(msg.sender, followerProfileId);

        MigrationLib.batchMigrateFollows(followerProfileId, idsOfProfileFollowed, followTokenIds);
    }

    // This is for Whitelisted MigrationAdmin (so we only read the FollowNFT once)
    function batchMigrateFollowers(
        uint256[] calldata followerProfileIds,
        uint256 idOfProfileFollowed,
        uint256[] calldata followTokenIds
    ) external {
        if (!StorageLib.migrationAdminWhitelisted()[msg.sender]) {
            revert Errors.NotMigrationAdmin();
        }

        MigrationLib.batchMigrateFollowers(followerProfileIds, idOfProfileFollowed, followTokenIds);
    }

    function batchMigrateFollowModules(uint256[] calldata profileIds) external {
        MigrationLib.batchMigrateFollowModules(
            profileIds,
            FEE_FOLLOW_MODULE,
            PROFILE_FOLLOW_MODULE,
            NEW_FEE_FOLLOW_MODULE
        );
    }

    function getProfileIdByHandleHash(bytes32 handleHash) external view returns (uint256) {
        return StorageLib.profileIdByHandleHash()[handleHash];
    }

    function setMigrationAdmins(address[] memory migrationAdmins, bool whitelisted) external {
        ValidationLib.validateCallerIsGovernance();
        uint256 i;
        while (i < migrationAdmins.length) {
            StorageLib.migrationAdminWhitelisted()[migrationAdmins[i]] = whitelisted;
            unchecked {
                ++i;
            }
        }
    }
}
