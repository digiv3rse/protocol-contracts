// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {Errors} from 'contracts/libraries/constants/Errors.sol';

/**
 * @title HubRestricted
 * @author DiGi Protocol
 *
 * @notice This abstract contract adds a public `HUB` immutable field, as well as an `onlyHub` modifier,
 * to inherit from contracts that have functions restricted to be only called by the DiGi hub.
 */
abstract contract HubRestricted {
    address public immutable HUB;

    modifier onlyHub() {
        if (msg.sender != HUB) {
            revert Errors.NotHub();
        }
        _;
    }

    constructor(address hub) {
        HUB = hub;
    }
}
