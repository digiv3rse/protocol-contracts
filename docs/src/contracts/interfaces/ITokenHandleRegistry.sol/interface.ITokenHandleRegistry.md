# ITokenHandleRegistry
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/interfaces/ITokenHandleRegistry.sol)

**Author:**
DiGi Protocol

The interface for TokenHandleRegistry contract that is responsible for linking a handle NFT to a token NFT.
Linking means a connection between the two NFTs is created, and the handle NFT can be used to resolve the token NFT
or vice versa.
The registry is responsible for keeping track of the links between the NFTs, and for resolving them.
The first version of the registry is hard-coded to support only the .digi namespace and the DiGi Protocol Profiles.


## Functions
### migrationLink

DiGi V1 -> V2 migration function. Links a handle NFT to a profile NFT without additional checks to save
gas.
Will be called by the migration function (in MigrationLib) in DiGiHub, only for new handles being migrated.


```solidity
function migrationLink(uint256 handleId, uint256 profileId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`handleId`|`uint256`|ID of the .digi namespace handle NFT|
|`profileId`|`uint256`|ID of the DiGi Protocol Profile NFT|


### link

Links a handle NFT with a profile NFT.
Linking means a connection between the two NFTs is created, and the handle NFT can be used to resolve the profile
NFT or vice versa.

*In the first version of the registry, the NFT contracts are hard-coded:
- Handle is hard-coded to be of the .digi namespace
- Token is hard-coded to be of the DiGi Protocol Profile
In future versions, the registry will be more flexible and allow for different namespaces and tokens, so this
function might be deprecated and replaced with a new one accepting addresses of the handle and token contracts.*


```solidity
function link(uint256 handleId, uint256 profileId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`handleId`|`uint256`|ID of the .digi namespace handle NFT|
|`profileId`|`uint256`|ID of the DiGi Protocol Profile NFT|


### unlink

Unlinks a handle NFT from a profile NFT.

*In the first version of the registry, the contracts are hard-coded:
- Handle is hard-coded to be of the .digi namespace
- Token is hard-coded to be of the DiGi Protocol Profile
In future versions, the registry will be more flexible and allow for different namespaces and tokens, so this
function might be deprecated and replaced with a new one accepting addresses of the handle and token contracts.*


```solidity
function unlink(uint256 handleId, uint256 profileId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`handleId`|`uint256`|ID of the .digi namespace handle NFT|
|`profileId`|`uint256`|ID of the DiGi Protocol Profile NFT|


### resolve

Resolves a handle NFT to a profile NFT.

*In the first version of the registry, the contracts are hard-coded:
- Handle is hard-coded to be of the .digi namespace
- Token is hard-coded to be of the DiGi Protocol Profile
In future versions, the registry will be more flexible and allow for different namespaces and tokens, so this
function might be deprecated and replaced with a new one.*


```solidity
function resolve(uint256 handleId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`handleId`|`uint256`|ID of the .digi namespace handle NFT|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tokenId ID of the DiGi Protocol Profile NFT|


### getDefaultHandle

Gets a default handle for a profile NFT (aka reverse resolution).

*In the first version of the registry, the contracts are hard-coded:
- Handle is hard-coded to be of the .digi namespace
- Token is hard-coded to be of the DiGi Protocol Profile
In future versions, the registry will be more flexible and allow for different namespaces and tokens, so this
function might be deprecated and replaced with a new one.*


```solidity
function getDefaultHandle(uint256 tokenId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|ID of the DiGi Protocol Profile NFT|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|handleId ID of the .digi namespace handle NFT|


