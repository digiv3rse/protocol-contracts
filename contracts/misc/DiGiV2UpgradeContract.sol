// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {ProxyAdmin} from 'contracts/misc/access/ProxyAdmin.sol';
import {Governance} from 'contracts/misc/access/Governance.sol';
import {ImmutableOwnable} from 'contracts/misc/ImmutableOwnable.sol';
import {IDiGiVersion} from 'contracts/interfaces/IDiGiVersion.sol';

contract DiGiV2UpgradeContract is ImmutableOwnable {
    ProxyAdmin public immutable PROXY_ADMIN;
    Governance public immutable GOVERNANCE;
    address public immutable newImplementation;
    address public immutable TREASURY;
    uint16 public immutable TREASURY_FEE;

    constructor(
        address proxyAdminAddress,
        address governanceAddress,
        address owner,
        address digiHub,
        address newImplementationAddress,
        address treasury,
        uint16 treasuryFee
    ) ImmutableOwnable(owner, digiHub) {
        PROXY_ADMIN = ProxyAdmin(proxyAdminAddress);
        GOVERNANCE = Governance(governanceAddress);
        newImplementation = newImplementationAddress;
        TREASURY = treasury;
        TREASURY_FEE = treasuryFee;
    }

    function executeDiGiV2Upgrade() external onlyOwner {
        // _preUpgradeChecks();
        _upgrade();
        // _postUpgradeChecks();
    }

    function _upgrade() internal {
        PROXY_ADMIN.proxy_upgradeAndCall(newImplementation, abi.encodeCall(IDiGiVersion.emitVersion, ()));
        GOVERNANCE.digiHub_setTreasuryParams(TREASURY, TREASURY_FEE);
        GOVERNANCE.clearControllerContract();
    }
}
