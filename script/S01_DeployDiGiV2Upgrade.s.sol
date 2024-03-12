// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ForkManagement} from 'script/helpers/ForkManagement.sol';
import 'forge-std/Script.sol';
import {IDiGiGovernable} from 'contracts/interfaces/IDiGiGovernable.sol';
import {DiGiHubInitializable} from 'contracts/misc/DiGiHubInitializable.sol';
import {DiGiV2UpgradeContract} from 'contracts/misc/DiGiV2UpgradeContract.sol';
import {FollowNFT} from 'contracts/FollowNFT.sol';
import {DiGiHandles} from 'contracts/namespaces/DiGiHandles.sol';
import {TokenHandleRegistry} from 'contracts/namespaces/TokenHandleRegistry.sol';
import {TransparentUpgradeableProxy} from '@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol';
import {FeeFollowModule} from 'contracts/modules/follow/FeeFollowModule.sol';
import {Governance} from 'contracts/misc/access/Governance.sol';
import {DiGiV2UpgradeContract} from 'contracts/misc/DiGiV2UpgradeContract.sol';
import {ProxyAdmin} from 'contracts/misc/access/ProxyAdmin.sol';
import {ModuleRegistry} from 'contracts/misc/ModuleRegistry.sol';
import {Types} from 'contracts/libraries/constants/Types.sol';
import {LibString} from 'solady/utils/LibString.sol';
import {LegacyCollectNFT} from 'contracts/misc/LegacyCollectNFT.sol';

import {ArrayHelpers} from 'script/helpers/ArrayHelpers.sol';

contract S01_DeployDiGiV2Upgrade is Script, ForkManagement, ArrayHelpers {
    // add this to be excluded from coverage report
    function testDiGiV2UpgradeDeployment() public {}

    using stdJson for string;

    bytes32 constant ADMIN_SLOT = bytes32(uint256(keccak256('eip1967.proxy.admin')) - 1);
    bytes32 constant PROXY_IMPLEMENTATION_STORAGE_SLOT =
        bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1);

    uint256 internal PROFILE_GUARDIAN_COOLDOWN;
    uint256 internal HANDLE_GUARDIAN_COOLDOWN;

    string mnemonic;

    // TODO: move this somewhere common
    struct DiGiAccount {
        uint256 ownerPk;
        address owner;
        uint256 profileId;
    }

    address digiHub;
    IDiGiGovernable legacyDiGiHub; // We just need the `getGovernance` function
    address legacyDiGiHubImpl;
    address digiHubV2Impl;

    IDiGiGovernable moduleGlobals; // We use `getTreasury` and `getTreasuryFee` functions

    address followNFTImpl;
    address legacyCollectNFTImpl;
    address digiHandlesImpl;
    address digiHandles;
    address tokenHandleRegistryImpl;
    address tokenHandleRegistry;
    address legacyFeeFollowModule;
    address legacyProfileFollowModule;
    address feeFollowModule;
    address moduleRegistryImpl;
    address moduleRegistry;

    DiGiAccount _deployer;
    DiGiAccount _proxyAdmin;
    DiGiAccount _governance;
    DiGiAccount _treasury;

    address treasury;
    address governance;
    address proxyAdmin;
    address digiHandlesOwner;

    uint16 treasuryFee;

    ProxyAdmin proxyAdminContract;

    function loadBaseAddresses() internal override {
        digiHub = json.readAddress(string(abi.encodePacked('.', targetEnv, '.DiGiHubProxy')));
        legacyDiGiHub = IDiGiGovernable(digiHub);
        vm.label(digiHub, 'DiGiHub');
        console.log('DiGi Hub Proxy: %s', address(legacyDiGiHub));

        legacyDiGiHubImpl = address(uint160(uint256(vm.load(digiHub, PROXY_IMPLEMENTATION_STORAGE_SLOT))));
        vm.label(legacyDiGiHubImpl, 'DiGiHubImplementation');
        console.log('Legacy DiGi Hub Impl: %s', address(legacyDiGiHubImpl));

        moduleGlobals = IDiGiGovernable(json.readAddress(string(abi.encodePacked('.', targetEnv, '.ModuleGlobals'))));
        vm.label(address(moduleGlobals), 'ModuleGlobals');
        console.log('ModuleGlobals: %s', address(moduleGlobals));

        Module[] memory followModules = abi.decode(
            vm.parseJson(json, string(abi.encodePacked('.', targetEnv, '.Modules.v1.follow'))),
            (Module[])
        );

        legacyFeeFollowModule = findModuleHelper(followModules, 'FeeFollowModule').addy;
        vm.label(legacyFeeFollowModule, 'LegacyFeeFollowModule');
        console.log('Legacy Fee Follow Module: %s', legacyFeeFollowModule);

        legacyProfileFollowModule = findModuleHelper(followModules, 'ProfileFollowModule').addy;
        vm.label(legacyProfileFollowModule, 'LegacyProfileFollowModule');
        console.log('Legacy Profile Follow Module: %s', legacyProfileFollowModule);

        console.log('\n');

        if (isEnvSet('DEPLOYMENT_ENVIRONMENT')) {
            if (LibString.eq(vm.envString('DEPLOYMENT_ENVIRONMENT'), 'production')) {} else {
                console.log('DEPLOYMENT_ENVIRONMENT is not production');
                revert();
            }
            console.log('DEPLOYMENT_ENVIRONMENT is production');
            console.log('Using governance and proxy admin from the DiGiHub to set as admins of contracts:');
            governance = legacyDiGiHub.getGovernance();
            console.log('\tReal Governance: %s', governance);

            proxyAdmin = address(uint160(uint256(vm.load(digiHub, ADMIN_SLOT))));
            console.log('\tReal ProxyAdmin: %s', proxyAdmin);

            treasury = moduleGlobals.getTreasury();
            console.log('\tReal Treasury: %s', treasury);

            treasuryFee = moduleGlobals.getTreasuryFee();
            console.log('\tReal Treasury Fee: %s', treasuryFee);
        } else {
            console.log('Using governance and proxy admin from test mnemonic:');

            (_governance.owner, _governance.ownerPk) = deriveRememberKey(mnemonic, 1);
            console.log('\tMock Governance: %s', _governance.owner);
            governance = _governance.owner;

            (_proxyAdmin.owner, _proxyAdmin.ownerPk) = deriveRememberKey(mnemonic, 2);
            console.log('\tMock ProxyAdmin: %s', _proxyAdmin.owner);
            proxyAdmin = _proxyAdmin.owner;

            (_treasury.owner, _treasury.ownerPk) = deriveRememberKey(mnemonic, 3);
            console.log('\tMock Treasury: %s', _treasury.owner);
            treasury = _treasury.owner;

            treasuryFee = 50;
            console.log('\tMock Treasury Fee: %s', treasuryFee);
        }
        console.log('\n');

        vm.label(proxyAdmin, 'ProxyAdmin');

        vm.label(governance, 'Governance');

        vm.label(treasury, 'Treasury');

        saveContractAddress('Treasury', treasury);
        saveValue('TreasuryFee', vm.toString(treasuryFee));

        PROFILE_GUARDIAN_COOLDOWN = json.readUint(
            string(abi.encodePacked('.', targetEnv, '.DiGiProfilesGuardianTimelock'))
        );
        console.log('PROFILE_GUARDIAN_COOLDOWN: %s', PROFILE_GUARDIAN_COOLDOWN);

        HANDLE_GUARDIAN_COOLDOWN = json.readUint(
            string(abi.encodePacked('.', targetEnv, '.DiGiHandlesGuardianTimelock'))
        );
        console.log('HANDLE_GUARDIAN_COOLDOWN: %s', HANDLE_GUARDIAN_COOLDOWN);

        digiHandlesOwner = legacyDiGiHub.getGovernance();
        vm.label(digiHandlesOwner, 'DiGiHandlesOwner');
        console.log('DiGiHandlesOwner: %s', digiHandlesOwner);

        console.log('Address this:', address(this));
    }

    function loadPrivateKeys() internal {
        if (isEnvSet('MNEMONIC')) {
            mnemonic = vm.envString('MNEMONIC');
        }

        if (bytes(mnemonic).length == 0) {
            revert('Missing mnemonic');
        }

        (_deployer.owner, _deployer.ownerPk) = deriveRememberKey(mnemonic, 0);
        console.log('Deployer: %s', _deployer.owner);

        console.log('Current block:', block.number);
    }

    function saveContractAddress(string memory contractName, address deployedAddress) internal {
        // console.log('Saving %s (%s) into addresses under %s environment', contractName, deployedAddress, targetEnv);
        string[] memory inputs = new string[](5);
        inputs[0] = 'node';
        inputs[1] = 'script/helpers/saveAddress.js';
        inputs[2] = targetEnv;
        inputs[3] = contractName;
        inputs[4] = vm.toString(deployedAddress);
        // bytes memory res =
        vm.ffi(inputs);
        // string memory output = abi.decode(res, (string));
        // console.log(output);
    }

    function saveValue(string memory contractName, string memory str) internal {
        // console.log('Saving %s (%s) into addresses under %s environment', contractName, deployedAddress, targetEnv);
        string[] memory inputs = new string[](5);
        inputs[0] = 'node';
        inputs[1] = 'script/helpers/saveAddress.js';
        inputs[2] = targetEnv;
        inputs[3] = contractName;
        inputs[4] = str;
        // bytes memory res =
        vm.ffi(inputs);
        // string memory output = abi.decode(res, (string));
        // console.log(output);
    }

    function deploy() internal {
        string memory addressesFile = 'addressesV2.txt';

        ///////Broadcasting transactions///////
        vm.startBroadcast(_deployer.ownerPk);

        // Deploy LegacyCollectNFTImpl
        legacyCollectNFTImpl = address(new LegacyCollectNFT(digiHub));
        vm.label(legacyCollectNFTImpl, 'LegacyCollectNFTImpl');
        saveContractAddress('LegacyCollectNFTImpl', legacyCollectNFTImpl);
        console.log('Legacy CollectNFTImpl: %s', legacyCollectNFTImpl);

        // Deploy FollowNFTImpl(hub)
        followNFTImpl = address(new FollowNFT(digiHub));
        vm.writeLine(addressesFile, string.concat('FollowNFTImpl: ', vm.toString(followNFTImpl)));
        saveContractAddress('FollowNFTImpl', followNFTImpl);
        console.log('FollowNFTImpl: %s', followNFTImpl);

        // Deploy DiGiHandles(owner, hub) implementation
        digiHandlesImpl = address(new DiGiHandles(digiHandlesOwner, digiHub, HANDLE_GUARDIAN_COOLDOWN));
        vm.writeLine(addressesFile, string.concat('DiGiHandlesImpl: ', vm.toString(digiHandlesImpl)));
        saveContractAddress('DiGiHandlesImpl', digiHandlesImpl);
        console.log('DiGiHandlesImpl: %s', digiHandlesImpl);

        // Make DiGiHandles a transparentUpgradeableProxy
        digiHandles = address(new TransparentUpgradeableProxy(digiHandlesImpl, proxyAdmin, ''));
        vm.writeLine(addressesFile, string.concat('DiGiHandles: ', vm.toString(digiHandles)));
        saveContractAddress('DiGiHandles', digiHandles);
        console.log('DiGiHandles: %s', digiHandles);

        // Deploy TokenHandleRegistry(hub, digiHandles) implementation
        tokenHandleRegistryImpl = address(new TokenHandleRegistry(digiHub, digiHandles));
        vm.writeLine(addressesFile, string.concat('TokenHandleRegistryImpl: ', vm.toString(tokenHandleRegistryImpl)));
        saveContractAddress('TokenHandleRegistryImpl', tokenHandleRegistryImpl);
        console.log('TokenHandleRegistryImpl: %s', tokenHandleRegistryImpl);

        // Make TokenHandleRegistry a transparentUpgradeableProxy
        tokenHandleRegistry = address(new TransparentUpgradeableProxy(tokenHandleRegistryImpl, proxyAdmin, ''));
        vm.writeLine(addressesFile, string.concat('TokenHandleRegistry: ', vm.toString(tokenHandleRegistry)));
        saveContractAddress('TokenHandleRegistry', tokenHandleRegistry);
        console.log('TokenHandleRegistry: %s', tokenHandleRegistry);

        // Deploy ModuleRegistry
        moduleRegistryImpl = address(new ModuleRegistry());
        vm.writeLine(addressesFile, string.concat('ModuleRegistryImpl: ', vm.toString(moduleRegistryImpl)));
        saveContractAddress('ModuleRegistryImpl', moduleRegistryImpl);
        console.log('ModuleRegistryImpl: %s', moduleRegistryImpl);

        // Make ModuleRegistry a transparentUpgradeableProxy
        moduleRegistry = address(new TransparentUpgradeableProxy(moduleRegistryImpl, proxyAdmin, ''));
        vm.writeLine(addressesFile, string.concat('ModuleRegistry: ', vm.toString(moduleRegistry)));
        saveContractAddress('ModuleRegistry', moduleRegistry);
        console.log('ModuleRegistry: %s', moduleRegistry);

        console.log('PROFILE_GUARDIAN_COOLDOWN: %s', PROFILE_GUARDIAN_COOLDOWN);

        if (governance == address(0)) {
            console.log('Governance is not set');
            revert('Governance is not set');
        }

        // Deploy new FeeFollowModule(hub, moduleRegistry)
        feeFollowModule = address(new FeeFollowModule(digiHub, moduleRegistry, governance));
        vm.writeLine(addressesFile, string.concat('FeeFollowModule: ', vm.toString(feeFollowModule)));
        saveModule('FeeFollowModule', address(feeFollowModule), 'v2', 'follow');
        console.log('FeeFollowModule: %s', feeFollowModule);

        // Pass all the fucking shit and deploy DiGiHub V2 Impl with:
        digiHubV2Impl = address(
            new DiGiHubInitializable(
                followNFTImpl,
                legacyCollectNFTImpl,
                moduleRegistry,
                PROFILE_GUARDIAN_COOLDOWN,
                Types.MigrationParams({
                    digiHandlesAddress: digiHandles,
                    tokenHandleRegistryAddress: tokenHandleRegistry,
                    legacyFeeFollowModule: legacyFeeFollowModule,
                    legacyProfileFollowModule: legacyProfileFollowModule,
                    newFeeFollowModule: feeFollowModule
                })
            )
        );

        //   "arguments": [
        //     "0x072E491679Ed6f4fF4d419Ba909D5789116f2182",
        //     "0x0000000000000000000000000000000000000000",
        //     "0x36a6aDc2cE99F3b3dcEDe8508Be7A6aCC61B5655",
        //     "300",
        //     "(0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000, 0x0000000000000000000000000000000000000000)"
        //   ],
        console.log('"arguments": [');
        console.log('\t"%s"', followNFTImpl);
        console.log('\t"%s"', legacyCollectNFTImpl);
        console.log('\t"%s"', moduleRegistry);
        console.log('\t"%s"', PROFILE_GUARDIAN_COOLDOWN);
        console.log(
            '\t"%s"',
            string.concat(
                '(',
                vm.toString(digiHandles),
                ', ',
                vm.toString(tokenHandleRegistry),
                ', ',
                vm.toString(legacyFeeFollowModule),
                ', ',
                vm.toString(legacyProfileFollowModule),
                ', ',
                vm.toString(feeFollowModule),
                ')'
            )
        );
        console.log(']');

        vm.writeLine(addressesFile, string.concat('DiGiHubV2Impl: ', vm.toString(digiHubV2Impl)));
        saveContractAddress('DiGiHubV2Impl', digiHubV2Impl);
        console.log('DiGiHubV2Impl: %s', digiHubV2Impl);

        Governance governanceContract = new Governance(address(legacyDiGiHub), governance);
        vm.writeLine(addressesFile, string.concat('GovernanceContract: ', vm.toString(address(governanceContract))));
        saveContractAddress('GovernanceContract', address(governanceContract));
        console.log('GovernanceContract: %s', address(governanceContract));
        saveContractAddress('GovernanceContractAdmin', governance);

        proxyAdminContract = new ProxyAdmin(address(legacyDiGiHub), legacyDiGiHubImpl, proxyAdmin);
        vm.writeLine(addressesFile, string.concat('ProxyAdminContract: ', vm.toString(address(proxyAdminContract))));
        saveContractAddress('ProxyAdminContract', address(proxyAdminContract));
        saveContractAddress('ProxyAdminContractAdmin', proxyAdmin);
        console.log('ProxyAdminContract: %s', address(proxyAdminContract));

        address digiV2UpgradeContract = address(
            new DiGiV2UpgradeContract({
                proxyAdminAddress: address(proxyAdminContract),
                governanceAddress: address(governanceContract),
                owner: proxyAdmin,
                digiHub: address(legacyDiGiHub),
                newImplementationAddress: digiHubV2Impl,
                treasury: treasury,
                treasuryFee: treasuryFee
            })
        );

        vm.writeLine(addressesFile, string.concat('DiGiV2UpgradeContract: ', vm.toString(digiV2UpgradeContract)));
        saveContractAddress('DiGiV2UpgradeContract', digiV2UpgradeContract);
        console.log('DiGiV2UpgradeContract: %s', digiV2UpgradeContract);
        console.log('"arguments": [');
        console.log('\t"%s"', address(proxyAdminContract));
        console.log('\t"%s"', address(governanceContract));
        console.log('\t"%s"', proxyAdmin);
        console.log('\t"%s"', address(legacyDiGiHub));
        console.log('\t"%s"', digiHubV2Impl);
        console.log('\t"%s"', treasury);
        console.log('\t"%s"', treasuryFee);
        console.log(']');

        console.log('\n');
        console.log('After running this script - change DiGiHub proxy admin and governance to:');
        console.log(
            'From: %s -> To: Governance contract: %s',
            legacyDiGiHub.getGovernance(),
            address(governanceContract)
        );
        console.log(
            'From: %s -> To: ProxyAdmin contract: %s',
            address(uint160(uint256(vm.load(digiHub, ADMIN_SLOT)))),
            address(proxyAdminContract)
        );
        console.log('\n');

        vm.stopBroadcast();
    }

    // TODO: Use from test/ContractAddresses
    struct Module {
        address addy;
        string name;
    }

    // TODO: Move this somewhere common (also in UpgradeForkTest)
    function findModuleHelper(
        Module[] memory modules,
        string memory moduleNameToFind
    ) internal pure returns (Module memory) {
        for (uint256 i = 0; i < modules.length; i++) {
            if (LibString.eq(modules[i].name, moduleNameToFind)) {
                return modules[i];
            }
        }
        revert('Module not found');
    }

    function saveModule(
        string memory moduleName,
        address moduleAddress,
        string memory digiVersion,
        string memory moduleType
    ) internal {
        // console.log('Saving %s (%s) into addresses under %s environment', moduleName, moduleAddress, targetEnv);
        string[] memory inputs = new string[](7);
        inputs[0] = 'node';
        inputs[1] = 'script/helpers/saveAddress.js';
        inputs[2] = targetEnv;
        inputs[3] = moduleName;
        inputs[4] = vm.toString(moduleAddress);
        inputs[5] = digiVersion;
        inputs[6] = moduleType;
        // bytes memory res =
        vm.ffi(inputs);
        // string memory output = abi.decode(res, (string));
        // console.log(output);
    }

    function run(string memory targetEnv_) external {
       targetEnv = targetEnv_;
        loadJson();
        checkNetworkParams();
        loadPrivateKeys();
        loadBaseAddresses();

        deploy();
    }
}
