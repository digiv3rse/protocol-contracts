// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {TransparentUpgradeableProxy} from '@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol';
import {ControllableByContract} from 'contracts/misc/access/ControllableByContract.sol';

contract ProxyAdmin is ControllableByContract {
    TransparentUpgradeableProxy public immutable DIGI_HUB_PROXY;
    address public previousImplementation;

    constructor(
        address digiHubAddress_,
        address previousImplementation_,
        address proxyAdminOwner_
    ) ControllableByContract(proxyAdminOwner_) {
        DIGI_HUB_PROXY = TransparentUpgradeableProxy(payable(digiHubAddress_));
        previousImplementation = previousImplementation_;
    }

    function currentImplementation() external returns (address) {
        return DIGI_HUB_PROXY.implementation();
    }

    /////////////////////////////////////////////////////////
    ///               ONLY PROXY ADMIN OWNER              ///
    /////////////////////////////////////////////////////////

    function rollbackLastUpgrade() external onlyOwner {
        DIGI_HUB_PROXY.upgradeTo(previousImplementation);
    }

    function proxy_changeAdmin(address newAdmin) external onlyOwner {
        DIGI_HUB_PROXY.changeAdmin(newAdmin);
    }

    /////////////////////////////////////////////////////////
    ///   ONLY PROXY ADMIN OWNER OR CONTROLLER CONTRACT   ///
    /////////////////////////////////////////////////////////

    function proxy_upgrade(address newImplementation) external onlyOwnerOrControllerContract {
        previousImplementation = DIGI_HUB_PROXY.implementation();
        DIGI_HUB_PROXY.upgradeTo(newImplementation);
        delete controllerContract;
    }

    function proxy_upgradeAndCall(address newImplementation, bytes calldata data)
        external
        onlyOwnerOrControllerContract
    {
        previousImplementation = DIGI_HUB_PROXY.implementation();
        DIGI_HUB_PROXY.upgradeToAndCall(newImplementation, data);
        delete controllerContract;
    }
}
