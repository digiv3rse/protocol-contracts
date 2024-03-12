// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import {DiGiHub} from 'contracts/DiGiHub.sol';
import {Types} from 'contracts/libraries/constants/Types.sol';
import {GovernanceLib} from 'contracts/libraries/GovernanceLib.sol';
import {IDiGiHubInitializable} from 'contracts/interfaces/IDiGiHubInitializable.sol';
import {VersionedInitializable} from 'contracts/base/upgradeability/VersionedInitializable.sol';

/**
 * @title DiGiHubInitializable
 * @author DiGi Protocol
 *
 * @notice Extension of DiGiHub contract that includes initialization for fresh deployments.
 *
 * @custom:upgradeable Transparent upgradeable proxy.
 * See `../DiGiHub.sol` for the version without initalizer.
 */
contract DiGiHubInitializable is DiGiHub, VersionedInitializable, IDiGiHubInitializable {
    // Constant for upgradeability purposes, see VersionedInitializable.
    // Do not confuse it with the EIP-712 version number.
    uint256 internal constant REVISION = 1;

    constructor(
        address followNFTImpl,
        address collectNFTImpl,
        address moduleRegistry,
        uint256 tokenGuardianCooldown,
        Types.MigrationParams memory migrationParams
    ) DiGiHub(followNFTImpl, collectNFTImpl, moduleRegistry, tokenGuardianCooldown, migrationParams) {}

    /**
     * @inheritdoc IDiGiHubInitializable
     * @custom:permissions Callable once. This is expected to be atomically called during the deployment by the Proxy.
     */
    function initialize(
        string calldata name,
        string calldata symbol,
        address newGovernance
    ) external override initializer {
        super._initialize(name, symbol);
        GovernanceLib.initState(Types.ProtocolState.Paused);
        GovernanceLib.setGovernance(newGovernance);
    }

    function getRevision() internal pure virtual override returns (uint256) {
        return REVISION;
    }
}
