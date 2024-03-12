// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {IDiGiHubEventHooks} from 'contracts/interfaces/IDiGiHubEventHooks.sol';
import {Errors} from 'contracts/libraries/constants/Errors.sol';
import {StorageLib} from 'contracts/libraries/StorageLib.sol';
import {Events} from 'contracts/libraries/constants/Events.sol';

abstract contract DiGiHubEventHooks is IDiGiHubEventHooks {
    /// @inheritdoc IDiGiHubEventHooks
    function emitUnfollowedEvent(
        uint256 unfollowerProfileId,
        uint256 idOfProfileUnfollowed,
        address transactionExecutor
    ) external override {
        address expectedFollowNFT = StorageLib.getProfile(idOfProfileUnfollowed).followNFT;
        if (msg.sender != expectedFollowNFT) {
            revert Errors.CallerNotFollowNFT();
        }
        emit Events.Unfollowed(unfollowerProfileId, idOfProfileUnfollowed, transactionExecutor, block.timestamp);
    }

    //////////////////////////////////////
    ///       DEPRECATED FUNCTIONS     ///
    //////////////////////////////////////

    // Deprecated in V2. Kept here just for backwards compatibility with DiGi V1 Collect NFTs.
    function emitCollectNFTTransferEvent(
        uint256 profileId,
        uint256 pubId,
        uint256 collectNFTId,
        address from,
        address to
    ) external {
        address expectedCollectNFT = StorageLib.getPublication(profileId, pubId).__DEPRECATED__collectNFT;
        if (msg.sender != expectedCollectNFT) {
            revert Errors.CallerNotCollectNFT();
        }
        emit Events.CollectNFTTransferred(profileId, pubId, collectNFTId, from, to, block.timestamp);
    }
}
