// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {IDiGiHub} from 'contracts/interfaces/IDiGiHub.sol';
import {DiGiV2Migration} from 'contracts/misc/DiGiV2Migration.sol';
import {Types} from 'contracts/libraries/constants/Types.sol';
import {ImmutableOwnable} from 'contracts/misc/ImmutableOwnable.sol';

import {IDiGiHandles} from 'contracts/interfaces/IDiGiHandles.sol';
import {ITokenHandleRegistry} from 'contracts/interfaces/ITokenHandleRegistry.sol';

/**
 * @title ProfileCreationProxy
 * @author DiGi Protocol
 *
 * @notice This is an ownable proxy contract that enforces ".digi" handle suffixes at profile creation.
 * Only the owner can create profiles.
 */
contract ProfileCreationProxy is ImmutableOwnable {
    IDiGiHandles immutable DIGI_HANDLES;
    ITokenHandleRegistry immutable TOKEN_HANDLE_REGISTRY;

    error ProfileAlreadyExists();

    constructor(
        address owner,
        address hub,
        address digiHandles,
        address tokenHandleRegistry
    ) ImmutableOwnable(owner, hub) {
        DIGI_HANDLES = IDiGiHandles(digiHandles);
        TOKEN_HANDLE_REGISTRY = ITokenHandleRegistry(tokenHandleRegistry);
    }

    function proxyCreateProfile(
        Types.CreateProfileParams calldata createProfileParams
    ) external onlyOwner returns (uint256) {
        return IDiGiHub(DIGI_HUB).createProfile(createProfileParams);
    }

    function proxyCreateProfileWithHandle(
        Types.CreateProfileParams memory createProfileParams,
        string calldata handle
    ) external onlyOwner returns (uint256, uint256) {
        // Check if DiGiHubV1 already has a profile with this handle that was not migrated yet:
        bytes32 handleHash = keccak256(bytes(string.concat(handle, '.digi')));
        if (DiGiV2Migration(DIGI_HUB).getProfileIdByHandleHash(handleHash) != 0) {
            revert ProfileAlreadyExists();
        }

        // We mint the handle & profile to this contract first, then link it to the profile
        // This will not allow to initialize follow modules that require funds from the msg.sender,
        // but we assume only simple follow modules should be set during profile creation.
        // Complex ones can be set after the profile is created.
        address destination = createProfileParams.to;
        createProfileParams.to = address(this);
        uint256 profileId = IDiGiHub(DIGI_HUB).createProfile(createProfileParams);
        uint256 handleId = DIGI_HANDLES.mintHandle(address(this), handle);

        TOKEN_HANDLE_REGISTRY.link({handleId: handleId, profileId: profileId});

        // Transfer the handle & profile to the destination
        DIGI_HANDLES.transferFrom(address(this), destination, handleId);
        IDiGiHub(DIGI_HUB).transferFrom(address(this), destination, profileId);

        return (profileId, handleId);
    }

    function proxyCreateHandle(address to, string calldata handle) external onlyOwner returns (uint256) {
        return DIGI_HANDLES.mintHandle(to, handle);
    }
}
