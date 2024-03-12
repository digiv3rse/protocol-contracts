// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {IDiGiHub} from 'contracts/interfaces/IDiGiHub.sol';
import {Types} from 'contracts/libraries/constants/Types.sol';
import {Errors} from 'contracts/libraries/constants/Errors.sol';

/**
 * @title MockProfileCreationProxy
 * @author DiGi Protocol
 *
 * @notice This is a proxy contract that enforces ".test" handle suffixes and adds char validations at profile creation.
 */
contract MockProfileCreationProxy {
    function testMockProfileCreationProxy() public {
        // Prevents being counted in Foundry Coverage
    }

    IDiGiHub immutable DIGI_HUB;

    constructor(IDiGiHub hub) {
        DIGI_HUB = hub;
    }

    function proxyCreateProfile(Types.CreateProfileParams memory createProfileParams) external {
        DIGI_HUB.createProfile(createProfileParams);
    }
}
