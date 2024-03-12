// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ForkManagement} from 'script/helpers/ForkManagement.sol';
import 'forge-std/Script.sol';
import {IDiGiGovernable} from 'contracts/interfaces/IDiGiGovernable.sol';
import {Governance} from 'contracts/misc/access/Governance.sol';
import {DiGiV2UpgradeContract} from 'contracts/misc/DiGiV2UpgradeContract.sol';
import {ProxyAdmin} from 'contracts/misc/access/ProxyAdmin.sol';
import {TransparentUpgradeableProxy} from '@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol';
import {LibString} from 'solady/utils/LibString.sol';

contract S04_PerformV2Upgrade is Script, ForkManagement {
    // add this to be excluded from coverage report
    function testDiGiV1ToV2Upgrade() public {}

    using stdJson for string;

    bytes32 constant ADMIN_SLOT = bytes32(uint256(keccak256('eip1967.proxy.admin')) - 1);

    struct DiGiAccount {
        uint256 ownerPk;
        address owner;
        uint256 profileId;
    }

    string mnemonic;

    DiGiAccount _deployer;
    DiGiAccount _governance;
    DiGiAccount _proxyAdmin;

    IDiGiGovernable legacyDiGiHub; // We just need the `getGovernance` function
    TransparentUpgradeableProxy digiHubAsProxy;
    DiGiV2UpgradeContract digiV2UpgradeContract;
    Governance governanceContract;
    address proxyAdmin;
    ProxyAdmin proxyAdminContract;

    function loadBaseAddresses() internal override {
        address digiHubProxyAddress = json.readAddress(string(abi.encodePacked('.', targetEnv, '.DiGiHubProxy')));
        legacyDiGiHub = IDiGiGovernable(digiHubProxyAddress);
        vm.label(digiHubProxyAddress, 'DiGiHub');
        console.log('DiGi Hub Proxy: %s', address(legacyDiGiHub));
        digiHubAsProxy = TransparentUpgradeableProxy(payable(digiHubProxyAddress));

        address digiV2UpgradeContractAddress = json.readAddress(
            string(abi.encodePacked('.', targetEnv, '.DiGiV2UpgradeContract'))
        );
        digiV2UpgradeContract = DiGiV2UpgradeContract(digiV2UpgradeContractAddress);
        vm.label(digiV2UpgradeContractAddress, 'DiGiV2UpgradeContract');
        console.log('DiGi V2 Upgrade Contract: %s', address(digiV2UpgradeContract));

        address governanceContractAddress = json.readAddress(
            string(abi.encodePacked('.', targetEnv, '.GovernanceContract'))
        );
        governanceContract = Governance(governanceContractAddress);
        vm.label(governanceContractAddress, 'GovernanceContract');
        console.log('Governance Contract: %s', address(governanceContract));

        proxyAdmin = address(uint160(uint256(vm.load(digiHubProxyAddress, ADMIN_SLOT))));
        vm.label(proxyAdmin, 'ProxyAdmin');
        console.log('DiGiHubProxy Current Admin: %s', proxyAdmin);

        address proxyAdminContractAddress = json.readAddress(
            string(abi.encodePacked('.', targetEnv, '.ProxyAdminContract'))
        );
        proxyAdminContract = ProxyAdmin(proxyAdminContractAddress);
        vm.label(proxyAdminContractAddress, 'ProxyAdmin');
        console.log('Proxy Admin Contract: %s', address(proxyAdminContract));
    }

    function loadPrivateKeys() internal {
        if (isEnvSet('MNEMONIC')) {
            mnemonic = vm.envString('MNEMONIC');
        }

        if (bytes(mnemonic).length == 0) {
            revert('Missing mnemonic');
        }

        console.log('\n');

        (_deployer.owner, _deployer.ownerPk) = deriveRememberKey(mnemonic, 0);
        console.log('Deployer address: %s', address(_deployer.owner));

        (_governance.owner, _governance.ownerPk) = deriveRememberKey(mnemonic, 1);
        console.log('Governance mock owner address: %s', address(_governance.owner));

        (_proxyAdmin.owner, _proxyAdmin.ownerPk) = deriveRememberKey(mnemonic, 2);
        console.log('ProxyAdmin mock owner address: %s', address(_proxyAdmin.owner));

        console.log('\n');

        console.log('Current block:', block.number);
    }

    function run(string memory targetEnv_) external {
        targetEnv = targetEnv_;
        loadJson();
        checkNetworkParams();
        loadBaseAddresses();
        loadPrivateKeys();

        address governance = legacyDiGiHub.getGovernance();
        console.log('DiGiHub Current governance: %s', address(governance));

        require(governance == address(governanceContract), 'DiGiHub Governance should be set to GovernanceContract');

        // vm.broadcast(_governance.ownerPk);
        // legacyDiGiHub.setGovernance(address(governanceContract));
        // console.log('Changed the governance from %s to %s', address(governance), address(governanceContract));

        // vm.broadcast(_deployer.ownerPk);
        // digiHubAsProxy.changeAdmin(address(proxyAdminContract));
        // console.log('Changed the proxy admin from %s to %s', address(_deployer.owner), address(proxyAdminContract));

        console.log('proxyAdminContract owner(): %s', proxyAdminContract.owner());
        console.log('governanceContract owner(): %s', governanceContract.owner());

        if (isEnvSet('DEPLOYMENT_ENVIRONMENT')) {
            if (LibString.eq(vm.envString('DEPLOYMENT_ENVIRONMENT'), 'production')) {
                console.log('proxyAdminContract controllerContract(): %s', proxyAdminContract.controllerContract());
                console.log('governanceContract controllerContract(): %s', governanceContract.controllerContract());
                console.log('DiGiV2 Upgrade Contract PROXY_ADMIN: %s', address(digiV2UpgradeContract.PROXY_ADMIN()));
                console.log('DiGiV2 Upgrade Contract GOVERNANCE: %s', address(digiV2UpgradeContract.GOVERNANCE()));
                console.log('New Implementation: %s', digiV2UpgradeContract.newImplementation());

                console.log('This script is not allowed to run on production');
                revert();
            } else {
                console.log('DEPLOYMENT_ENVIRONMENT is not production');
                revert();
            }
        } else {
            vm.broadcast(_proxyAdmin.ownerPk);
            proxyAdminContract.setControllerContract(address(digiV2UpgradeContract));
            console.log(
                'Changed the proxyAdminContract controller contract from %s to %s',
                address(0),
                address(digiV2UpgradeContract)
            );

            vm.broadcast(_governance.ownerPk);
            governanceContract.setControllerContract(address(digiV2UpgradeContract));
            console.log(
                'Changed the governanceContract controller contract from %s to %s',
                address(0),
                address(digiV2UpgradeContract)
            );

            console.log('proxyAdminContract controllerContract(): %s', proxyAdminContract.controllerContract());
            console.log('governanceContract controllerContract(): %s', governanceContract.controllerContract());

            console.log('New Implementation: %s', digiV2UpgradeContract.newImplementation());

            console.log('DiGiV2 Upgrade Contract PROXY_ADMIN: %s', address(digiV2UpgradeContract.PROXY_ADMIN()));
            console.log('DiGiV2 Upgrade Contract GOVERNANCE: %s', address(digiV2UpgradeContract.GOVERNANCE()));

            vm.broadcast(_governance.ownerPk);
            digiV2UpgradeContract.executeDiGiV2Upgrade();
            console.log('Upgrade complete!');

            bytes32 PROXY_IMPLEMENTATION_STORAGE_SLOT = bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1);
            address hubImplAddr = address(
                uint160(uint256(vm.load(address(legacyDiGiHub), PROXY_IMPLEMENTATION_STORAGE_SLOT)))
            );
            console.log('New implementation:', hubImplAddr);
        }
    }
}
