# DiGiImplGetters
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/base/DiGiImplGetters.sol)

**Inherits:**
[IDiGiImplGetters](/contracts/misc/PermissionlessCreator.sol/interface.IDiGiImplGetters.md)


## State Variables
### FOLLOW_NFT_IMPL

```solidity
address internal immutable FOLLOW_NFT_IMPL;
```


### __LEGACY__COLLECT_NFT_IMPL

```solidity
address internal immutable __LEGACY__COLLECT_NFT_IMPL;
```


### MODULE_REGISTRY

```solidity
address internal immutable MODULE_REGISTRY;
```


## Functions
### constructor


```solidity
constructor(address followNFTImpl, address collectNFTImpl, address moduleRegistry);
```

### getFollowNFTImpl

Returns the Follow NFT implementation address that is used for all deployed Follow NFTs.


```solidity
function getFollowNFTImpl() external view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The Follow NFT implementation address.|


### getLegacyCollectNFTImpl

Returns the Collect NFT implementation address that is used for each new deployed Collect NFT.


```solidity
function getLegacyCollectNFTImpl() external view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The Collect NFT implementation address.|


### getModuleRegistry

Returns the address of the registry that stores all modules that are used by the DiGi Protocol.


```solidity
function getModuleRegistry() external view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the Module Registry contract.|


