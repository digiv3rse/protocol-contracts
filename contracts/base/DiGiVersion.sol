// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {IDiGiVersion} from 'contracts/interfaces/IDiGiVersion.sol';
import {Errors} from 'contracts/libraries/constants/Errors.sol';
import {TransparentUpgradeableProxy} from '@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol';

contract DiGiVersion is IDiGiVersion {
    string internal constant version = '2.0.3';

    bytes20 internal constant gitCommit = hex'3bb1438b28b69f584ab9a290f261e3452fd34ad0';

    event DiGiUpgradeVersion(address implementation, string version, bytes20 gitCommit, uint256 timestamp);

    /// @inheritdoc IDiGiVersion
    function getVersion() external pure override returns (string memory) {
        return version;
    }

    /// @inheritdoc IDiGiVersion
    function getGitCommit() external pure override returns (bytes20) {
        return gitCommit;
    }

    function emitVersion() external {
        (, bytes memory adminData) = address(this).delegatecall(abi.encodeCall(TransparentUpgradeableProxy.admin, ()));
        (, bytes memory implementationData) = address(this).delegatecall(
            abi.encodeCall(TransparentUpgradeableProxy.implementation, ())
        );
        if (msg.sender != abi.decode(adminData, (address))) {
            revert Errors.NotHub();
        }
        emit DiGiUpgradeVersion(abi.decode(implementationData, (address)), version, gitCommit, block.timestamp);
    }
}
