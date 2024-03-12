// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {IDiGiHub} from 'contracts/interfaces/IDiGiHub.sol';
import {Errors} from 'contracts/libraries/constants/Errors.sol';

/**
 * @title FollowValidationLib
 * @author DiGi Protocol
 *
 * @notice A library contract that verifies that a user is following another user and reverts if not.
 */
library FollowValidationLib {
    function validateIsFollowing(address hub, uint256 followerProfileId, uint256 followedProfileId) internal view {
        if (!IDiGiHub(hub).isFollowing(followerProfileId, followedProfileId)) {
            revert Errors.NotFollowing();
        }
    }

    function validateIsFollowingOrSelf(
        address hub,
        uint256 followerProfileId,
        uint256 followedProfileId
    ) internal view {
        // We treat following yourself is always true
        if (followerProfileId == followedProfileId) {
            return;
        }
        validateIsFollowing(hub, followerProfileId, followedProfileId);
    }
}
