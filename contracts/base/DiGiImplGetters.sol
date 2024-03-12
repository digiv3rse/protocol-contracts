// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {IDiGiImplGetters} from 'contracts/interfaces/IDiGiImplGetters.sol';

contract DiGiImplGetters is IDiGiImplGetters {
    address internal immutable FOLLOW_NFT_IMPL;
    address internal immutable __LEGACY__COLLECT_NFT_IMPL;
    address internal immutable MODULE_REGISTRY;

    constructor(address followNFTImpl, address collectNFTImpl, address moduleRegistry) {
        FOLLOW_NFT_IMPL = followNFTImpl;
        __LEGACY__COLLECT_NFT_IMPL = collectNFTImpl;
        MODULE_REGISTRY = moduleRegistry;
    }

    /// @inheritdoc IDiGiImplGetters
    function getFollowNFTImpl() external view override returns (address) {
        return FOLLOW_NFT_IMPL;
    }

    /// @inheritdoc IDiGiImplGetters
    function getLegacyCollectNFTImpl() external view override returns (address) {
        return __LEGACY__COLLECT_NFT_IMPL; // LEGACY support: Used only for compatibility with V1 collectible posts.
    }

    /// @inheritdoc IDiGiImplGetters
    function getModuleRegistry() external view override returns (address) {
        return MODULE_REGISTRY;
    }
}
