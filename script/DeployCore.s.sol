// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {ForkManagement} from 'script/helpers/ForkManagement.sol';
import 'forge-std/Script.sol';
import {LibString} from 'solady/utils/LibString.sol';
import {FollowNFT} from 'contracts/FollowNFT.sol';
import {DiGiHubInitializable} from 'contracts/misc/DiGiHubInitializable.sol';
import {Types} from 'contracts/libraries/constants/Types.sol';
import {Governance} from 'contracts/misc/access/Governance.sol';
import {DiGiHandles} from 'contracts/namespaces/DiGiHandles.sol';

contract DeployCore is Script, ForkManagement {
    using stdJson for string;

    struct DiGiAccount {
        uint256 ownerPk;
        address owner;
        uint256 profileId;
    }

    DiGiAccount _deployer;

    string mnemonic;

    uint256 internal PROFILE_GUARDIAN_COOLDOWN;
    uint256 internal HANDLE_GUARDIAN_COOLDOWN;

    address digiHub;
    address legacyCollectNFTImpl;
    address followNFTImpl;
    address moduleRegistry;

    address digiHandlesAddress;
    address tokenHandleRegistryAddress;
    address legacyFeeFollowModule;
    address legacyProfileFollowModule;
    address newFeeFollowModule;
    address digiHandlesOwner;
    address digiHandlesImpl;

    address governanceContract;
    address governanceAdmin;
    address digiHubV2Impl;

    string addressesFile = 'addressesV2.txt';

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

    function loadPrivateKeys() internal {
        if (isEnvSet('MNEMONIC')) {
            mnemonic = vm.envString('MNEMONIC');
        }

        if (bytes(mnemonic).length == 0) {
            revert('Missing mnemonic');
        }

        console.log('\n');

        (_deployer.owner, _deployer.ownerPk) = deriveRememberKey(mnemonic, 0);
        console.logBytes32(bytes32(_deployer.ownerPk));
        console.log('Deployer address: %s', address(_deployer.owner));

        console.log('\n');

        console.log('Current block:', block.number);
    }

    function loadBaseAddresses() internal override {
        digiHub = json.readAddress(string(abi.encodePacked('.', targetEnv, '.DiGiHubProxy')));
        vm.label(digiHub, 'DiGiHub');
        console.log('DiGi Hub Proxy: %s', digiHub);

        legacyCollectNFTImpl = json.readAddress(string(abi.encodePacked('.', targetEnv, '.LegacyCollectNFTImpl')));
        vm.label(legacyCollectNFTImpl, 'LegacyCollectNFTImpl');
        console.log('LegacyCollectNFTImpl: %s', legacyCollectNFTImpl);

        moduleRegistry = json.readAddress(string(abi.encodePacked('.', targetEnv, '.ModuleRegistry')));
        vm.label(moduleRegistry, 'ModuleRegistry');
        console.log('ModuleRegistry: %s', moduleRegistry);

        PROFILE_GUARDIAN_COOLDOWN = json.readUint(
            string(abi.encodePacked('.', targetEnv, '.DiGiProfilesGuardianTimelock'))
        );
        console.log('PROFILE_GUARDIAN_COOLDOWN: %s', PROFILE_GUARDIAN_COOLDOWN);

        HANDLE_GUARDIAN_COOLDOWN = json.readUint(
            string(abi.encodePacked('.', targetEnv, '.DiGiHandlesGuardianTimelock'))
        );
        console.log('HANDLE_GUARDIAN_COOLDOWN: %s', HANDLE_GUARDIAN_COOLDOWN);

        digiHandlesAddress = json.readAddress(string(abi.encodePacked('.', targetEnv, '.DiGiHandles')));

        tokenHandleRegistryAddress = json.readAddress(string(abi.encodePacked('.', targetEnv, '.TokenHandleRegistry')));

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

        followModules = abi.decode(
            vm.parseJson(json, string(abi.encodePacked('.', targetEnv, '.Modules.v2.follow'))),
            (Module[])
        );

        newFeeFollowModule = findModuleHelper(followModules, 'FeeFollowModule').addy;
        vm.label(newFeeFollowModule, 'NewFeeFollowModule');
        console.log('New Fee Follow Module: %s', newFeeFollowModule);

        governanceContract = DiGiHubInitializable(digiHub).getGovernance();
        governanceAdmin = Governance(governanceContract).owner();

        digiHandlesOwner = governanceAdmin;
        vm.label(digiHandlesOwner, 'DiGiHandlesOwner');
        console.log('DiGiHandlesOwner: %s', digiHandlesOwner);
    }

    function deploy() internal {
        if (digiHub == address(0)) {
            console.log('DiGiHub not set');
            revert('DiGiHub not set');
        }

        if (digiHandlesOwner == address(0)) {
            console.log('digiHandlesOwner not set');
            revert('digiHandlesOwner not set');
        }

        if (HANDLE_GUARDIAN_COOLDOWN == 0) {
            console.log('HANDLE_GUARDIAN_COOLDOWN not set');
            revert('HANDLE_GUARDIAN_COOLDOWN not set');
        }

        vm.startBroadcast(_deployer.ownerPk);
        // Deploy FollowNFTImpl(hub)
        followNFTImpl = address(new FollowNFT(digiHub));

        // Deploy DiGiHandles(owner, hub) implementation
        digiHandlesImpl = address(new DiGiHandles(digiHandlesOwner, digiHub, HANDLE_GUARDIAN_COOLDOWN));
        vm.stopBroadcast();

        vm.writeLine(addressesFile, string.concat('FollowNFTImpl: ', vm.toString(followNFTImpl)));
        saveContractAddress('FollowNFTImpl', followNFTImpl);
        console.log('FollowNFTImpl: %s', followNFTImpl);

        vm.writeLine(addressesFile, string.concat('DiGiHandlesImpl: ', vm.toString(digiHandlesImpl)));
        saveContractAddress('DiGiHandlesImpl', digiHandlesImpl);
        console.log('DiGiHandlesImpl: %s', digiHandlesImpl);

        if (legacyCollectNFTImpl == address(0)) {
            console.log('LegacyCollectNFTImpl not set');
            revert('LegacyCollectNFTImpl not set');
        }

        if (moduleRegistry == address(0)) {
            console.log('ModuleRegistry not set');
            revert('ModuleRegistry not set');
        }

        if (PROFILE_GUARDIAN_COOLDOWN == 0) {
            console.log('PROFILE_GUARDIAN_COOLDOWN not set');
            revert('PROFILE_GUARDIAN_COOLDOWN not set');
        }

        console.log('PROFILE_GUARDIAN_COOLDOWN: %s', PROFILE_GUARDIAN_COOLDOWN);

        // Pass all the fucking shit and deploy DiGiHub V2 Impl with:
        vm.startBroadcast(_deployer.ownerPk);
        digiHubV2Impl = address(
            new DiGiHubInitializable(
                followNFTImpl,
                legacyCollectNFTImpl,
                moduleRegistry,
                PROFILE_GUARDIAN_COOLDOWN,
                Types.MigrationParams({
                    digiHandlesAddress: digiHandlesAddress,
                    tokenHandleRegistryAddress: tokenHandleRegistryAddress,
                    legacyFeeFollowModule: legacyFeeFollowModule,
                    legacyProfileFollowModule: legacyProfileFollowModule,
                    newFeeFollowModule: newFeeFollowModule
                })
            )
        );
        vm.stopBroadcast();

        console.log('"arguments": [');
        console.log('\t"%s"', followNFTImpl);
        console.log('\t"%s"', legacyCollectNFTImpl);
        console.log('\t"%s"', moduleRegistry);
        console.log('\t"%s"', PROFILE_GUARDIAN_COOLDOWN);
        console.log(
            '\t"%s"',
            string.concat(
                '(',
                vm.toString(digiHandlesAddress),
                ', ',
                vm.toString(tokenHandleRegistryAddress),
                ', ',
                vm.toString(legacyFeeFollowModule),
                ', ',
                vm.toString(legacyProfileFollowModule),
                ', ',
                vm.toString(newFeeFollowModule),
                ')'
            )
        );
        console.log(']');

        vm.writeLine(addressesFile, string.concat('DiGiHubV2Impl: ', vm.toString(digiHubV2Impl)));
        saveContractAddress('DiGiHubV2Impl', digiHubV2Impl);
        console.log('DiGiHubV2Impl: %s', digiHubV2Impl);
    }

//    function run(string memory targetEnv_) external {
//        targetEnv = targetEnv_;
//        loadJson();
//        checkNetworkParams();
//        loadBaseAddresses();
//        loadPrivateKeys();
//        deploy();
//    }
}
