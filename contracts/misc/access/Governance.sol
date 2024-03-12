// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {IDiGiHub} from 'contracts/interfaces/IDiGiHub.sol';
import {ControllableByContract} from 'contracts/misc/access/ControllableByContract.sol';
import {Types} from 'contracts/libraries/constants/Types.sol';

contract Governance is ControllableByContract {
    IDiGiHub public immutable DIGI_HUB;

    constructor(address digiHubAddress_, address governanceOwner_) ControllableByContract(governanceOwner_) {
        DIGI_HUB = IDiGiHub(payable(digiHubAddress_));
    }

    ////////////////////////////////////////////////////////
    ///               ONLY GOVERNANCE OWNER              ///
    ////////////////////////////////////////////////////////

    function digiHub_setGovernance(address newGovernance) external onlyOwner {
        DIGI_HUB.setGovernance(newGovernance);
    }

    function digiHub_setEmergencyAdmin(address newEmergencyAdmin) external onlyOwner {
        DIGI_HUB.setEmergencyAdmin(newEmergencyAdmin);
    }

    function digiHub_setTreasuryParams(
        address newTreasury,
        uint16 newTreasuryFee
    ) external onlyOwnerOrControllerContract {
        DIGI_HUB.setTreasury(newTreasury);
        DIGI_HUB.setTreasuryFee(newTreasuryFee);
    }

    function digiHub_setState(Types.ProtocolState newState) external onlyOwnerOrControllerContract {
        DIGI_HUB.setState(newState);
    }

    ////////////////////////////////////////////////////////
    ///   ONLY GOVERNANCE OWNER OR CONTROLLER CONTRACT   ///
    ////////////////////////////////////////////////////////

    function digiHub_whitelistProfileCreator(
        address profileCreator,
        bool whitelist
    ) external onlyOwnerOrControllerContract {
        DIGI_HUB.whitelistProfileCreator(profileCreator, whitelist);
    }

    // This allows the governance to call anything on behalf of itself.
    // And also allows the Upgradable contract to call anything, except the DiGiHub with Governance permissions.
    function executeAsGovernance(
        address target,
        bytes calldata data
    ) external payable onlyOwnerOrControllerContract returns (bytes memory) {
        if (msg.sender == controllerContract && target == address(DIGI_HUB)) {
            revert Unauthorized();
        }
        (bool success, bytes memory returnData) = target.call{gas: gasleft(), value: msg.value}(data);

        if (!success) {
            uint256 len = returnData.length;
            assembly {
                revert(add(returnData, 32), len)
            }
        }

        return returnData;
    }
}
