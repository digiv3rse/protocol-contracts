// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {DiGiModuleMetadata} from 'contracts/modules/DiGiModuleMetadata.sol';

abstract contract MockModule is DiGiModuleMetadata {
    error MockModuleReverted();

    function testMockModule() public {
        // Prevents being counted in Foundry Coverage
    }

    constructor(address moduleOwner) DiGiModuleMetadata(moduleOwner) {}

    // Reverts if the flag decoded from the data is not `true`.
    function _decodeFlagAndRevertIfFalse(bytes memory data) internal pure returns (bytes memory) {
        bool shouldItSucceed = abi.decode(data, (bool));
        if (!shouldItSucceed) {
            revert MockModuleReverted();
        }
        return data;
    }
}
