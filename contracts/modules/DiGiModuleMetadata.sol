// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';
import {DiGiModule} from 'contracts/modules/DiGiModule.sol';

contract DiGiModuleMetadata is DiGiModule, Ownable {
    string public metadataURI;

    constructor(address owner_) Ownable() {
        _transferOwnership(owner_);
    }

    function setModuleMetadataURI(string memory _metadataURI) external onlyOwner {
        metadataURI = _metadataURI;
    }

    function getModuleMetadataURI() external view returns (string memory) {
        return metadataURI;
    }
}
