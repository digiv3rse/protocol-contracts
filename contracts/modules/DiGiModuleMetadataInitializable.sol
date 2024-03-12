// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {DiGiModuleMetadata} from 'contracts/modules/DiGiModuleMetadata.sol';

contract DiGiModuleMetadataInitializable is DiGiModuleMetadata {
    constructor(address owner_) DiGiModuleMetadata(owner_) {}

    function initialize(address moduleOwner) external virtual {
        if (owner() != address(0) || moduleOwner == address(0)) {
            revert();
        }
        _transferOwnership(moduleOwner);
    }
}
