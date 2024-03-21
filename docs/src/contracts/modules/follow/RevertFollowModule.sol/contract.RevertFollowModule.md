# RevertFollowModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/follow/RevertFollowModule.sol)

**Inherits:**
[DiGiModuleMetadata](/contracts/modules/DiGiModuleMetadata.sol/contract.DiGiModuleMetadata.md), [IFollowModule](/contracts/interfaces/IFollowModule.sol/interface.IFollowModule.md)

**Author:**
DiGi Protocol

This follow module rejects all follow attempts.


## Functions
### constructor


```solidity
constructor(address moduleOwner) DiGiModuleMetadata(moduleOwner);
```

### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceID) public pure override returns (bool);
```

### initializeFollowModule

Initializes a follow module for a given DiGi profile.


```solidity
function initializeFollowModule(uint256, address, bytes calldata) external pure override returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`||
|`<none>`|`address`||
|`<none>`|`bytes`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes The encoded data to be emitted from the hub.|


### processFollow

Processes a follow by rejecting it, reverting the transaction. Parameters are ignored.


```solidity
function processFollow(uint256, uint256, address, uint256, bytes calldata)
    external
    pure
    override
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`||
|`<none>`|`uint256`||
|`<none>`|`address`||
|`<none>`|`uint256`||
|`<none>`|`bytes`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


