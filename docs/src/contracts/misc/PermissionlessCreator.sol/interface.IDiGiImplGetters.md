# IDiGiImplGetters
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/PermissionlessCreator.sol)

**Author:**
DiGi Protocol

This is the interface for the DiGiHub contract's implementation getters. These implementations will be used
for deploying each respective contract for each profile.


## Functions
### getFollowNFTImpl

Returns the Follow NFT implementation address that is used for all deployed Follow NFTs.


```solidity
function getFollowNFTImpl() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The Follow NFT implementation address.|


### getLegacyCollectNFTImpl

Returns the Collect NFT implementation address that is used for each new deployed Collect NFT.


```solidity
function getLegacyCollectNFTImpl() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The Collect NFT implementation address.|


### getModuleRegistry

Returns the address of the registry that stores all modules that are used by the DiGi Protocol.


```solidity
function getModuleRegistry() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the Module Registry contract.|


