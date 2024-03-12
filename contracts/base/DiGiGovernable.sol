// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {IDiGiGovernable} from 'contracts/interfaces/IDiGiGovernable.sol';
import {GovernanceLib} from 'contracts/libraries/GovernanceLib.sol';
import {ValidationLib} from 'contracts/libraries/ValidationLib.sol';
import {StorageLib} from 'contracts/libraries/StorageLib.sol';
import {Types} from 'contracts/libraries/constants/Types.sol';
import {Events} from 'contracts/libraries/constants/Events.sol';

abstract contract DiGiGovernable is IDiGiGovernable {
    /**
     * @dev This modifier reverts if the caller is not the configured governance address.
     */
    modifier onlyGov() {
        ValidationLib.validateCallerIsGovernance();
        _;
    }

    /////////////////////////////////
    ///        GOV FUNCTIONS      ///
    /////////////////////////////////

    /// @inheritdoc IDiGiGovernable
    function setGovernance(address newGovernance) external override onlyGov {
        GovernanceLib.setGovernance(newGovernance);
    }

    /// @inheritdoc IDiGiGovernable
    function setEmergencyAdmin(address newEmergencyAdmin) external override onlyGov {
        GovernanceLib.setEmergencyAdmin(newEmergencyAdmin);
    }

    /// @inheritdoc IDiGiGovernable
    function setState(Types.ProtocolState newState) external override {
        // Access control is handled inside the library because we need to check for both EmergencyAdmin and Governance.
        GovernanceLib.setState(newState);
    }

    /// @inheritdoc IDiGiGovernable
    function setTreasury(address newTreasury) external override onlyGov {
        GovernanceLib.setTreasury(newTreasury);
    }

    /// @inheritdoc IDiGiGovernable
    function setTreasuryFee(uint16 newTreasuryFee) external override onlyGov {
        GovernanceLib.setTreasuryFee(newTreasuryFee);
    }

    ///@inheritdoc IDiGiGovernable
    function whitelistProfileCreator(address profileCreator, bool whitelist) external override onlyGov {
        GovernanceLib.whitelistProfileCreator(profileCreator, whitelist);
    }

    function setProfileTokenURIContract(address profileTokenURIContract) external override onlyGov {
        GovernanceLib.setProfileTokenURIContract(profileTokenURIContract);
        emit Events.BatchMetadataUpdate({fromTokenId: 0, toTokenId: type(uint256).max});
    }

    function setFollowTokenURIContract(address followTokenURIContract) external override onlyGov {
        GovernanceLib.setFollowTokenURIContract(followTokenURIContract);
    }

    ///////////////////////////////////////////
    ///        EXTERNAL VIEW FUNCTIONS      ///
    ///////////////////////////////////////////

    /// @inheritdoc IDiGiGovernable
    function getGovernance() external view override returns (address) {
        return StorageLib.getGovernance();
    }

    function getProfileTokenURIContract() external view override returns (address) {
        return StorageLib.getProfileTokenURIContract();
    }

    function getFollowTokenURIContract() external view override returns (address) {
        return StorageLib.getFollowTokenURIContract();
    }

    /**
     * @notice Returns the current protocol state.
     *
     * @return ProtocolState The Protocol state, an enum, where:
     *      0: Unpaused
     *      1: PublishingPaused
     *      2: Paused
     */
    function getState() external view override returns (Types.ProtocolState) {
        return StorageLib.getState();
    }

    /// @inheritdoc IDiGiGovernable
    function isProfileCreatorWhitelisted(address profileCreator) external view override returns (bool) {
        return StorageLib.profileCreatorWhitelisted()[profileCreator];
    }

    /// @inheritdoc IDiGiGovernable
    function getTreasury() external view override returns (address) {
        return StorageLib.getTreasuryData().treasury;
    }

    /// @inheritdoc IDiGiGovernable
    function getTreasuryFee() external view override returns (uint16) {
        return StorageLib.getTreasuryData().treasuryFeeBPS;
    }

    /// @inheritdoc IDiGiGovernable
    function getTreasuryData() external view override returns (address, uint16) {
        Types.TreasuryData storage treasuryData = StorageLib.getTreasuryData();
        return (treasuryData.treasury, treasuryData.treasuryFeeBPS);
    }
}
