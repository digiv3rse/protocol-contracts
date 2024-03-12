// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {IDiGiModule} from 'contracts/modules/interfaces/IDiGiModule.sol';

abstract contract DiGiModule is IDiGiModule {
    /// @inheritdoc IDiGiModule
    function supportsInterface(bytes4 interfaceID) public pure virtual override returns (bool) {
        return interfaceID == bytes4(keccak256(abi.encodePacked('DIGI_MODULE')));
    }
}
