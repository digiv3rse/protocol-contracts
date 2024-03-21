# FeeFollowModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/follow/FeeFollowModule.sol)

**Inherits:**
[DiGiModuleMetadata](/contracts/modules/DiGiModuleMetadata.sol/contract.DiGiModuleMetadata.md), [FeeModuleBase](/contracts/modules/FeeModuleBase.sol/abstract.FeeModuleBase.md), [HubRestricted](/contracts/base/HubRestricted.sol/abstract.HubRestricted.md), [IFollowModule](/contracts/interfaces/IFollowModule.sol/interface.IFollowModule.md)

**Author:**
DiGi Protocol

This follow module charges a fee for every follow.


## State Variables
### _feeConfig

```solidity
mapping(uint256 profileId => FeeConfig config) internal _feeConfig;
```


## Functions
### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceID) public pure override returns (bool);
```

### constructor


```solidity
constructor(address hub, address moduleRegistry, address moduleOwner)
    FeeModuleBase(hub, moduleRegistry)
    HubRestricted(hub)
    DiGiModuleMetadata(moduleOwner);
```

### initializeFollowModule

Initializes a follow module for a given DiGi profile.


```solidity
function initializeFollowModule(uint256 profileId, address, bytes calldata data)
    external
    override
    onlyHub
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The Profile ID to initialize this follow module for.|
|`<none>`|`address`||
|`data`|`bytes`|The arbitrary data parameter, decoded into: - address currency: The currency address, must be internally whitelisted. - uint256 amount: The currency total amount to charge. - address recipient: The custom recipient address to direct earnings to.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes The encoded data to be emitted from the hub.|


### processFollow

Processes a follow by charging a fee.


```solidity
function processFollow(
    uint256,
    uint256 followTokenId,
    address transactionExecutor,
    uint256 targetProfileId,
    bytes calldata data
) external override onlyHub returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`||
|`followTokenId`|`uint256`|The Follow Token ID that is being used to follow. Zero if we are processing a new fresh follow, in this case, the follow ID assigned can be queried from the Follow NFT collection if needed.|
|`transactionExecutor`|`address`|The address of the transaction executor (e.g. for any funds to transferFrom).|
|`targetProfileId`|`uint256`|The token ID of the profile being followed.|
|`data`|`bytes`|Arbitrary data passed by the follower.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### getFeeConfig

Returns fee configuration for a given profile.


```solidity
function getFeeConfig(uint256 profileId) external view returns (FeeConfig memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to query.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`FeeConfig`|FeeConfig The FeeConfig struct mapped to that profile.|


