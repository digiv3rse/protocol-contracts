# FollowerOnlyReferenceModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/reference/FollowerOnlyReferenceModule.sol)

**Inherits:**
[DiGiModuleMetadata](/contracts/modules/DiGiModuleMetadata.sol/contract.DiGiModuleMetadata.md), [HubRestricted](/contracts/base/HubRestricted.sol/abstract.HubRestricted.md), [IReferenceModule](/contracts/interfaces/IReferenceModule.sol/interface.IReferenceModule.md)

**Author:**
DiGi Protocol

A simple reference module that validates that comments, quotes or mirrors originate from a profile that
follows the profile of the original publication.


## Functions
### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceID) public pure override returns (bool);
```

### constructor


```solidity
constructor(address hub, address moduleOwner) HubRestricted(hub) DiGiModuleMetadata(moduleOwner);
```

### initializeReferenceModule

Initializes data for the given publication being published with this Reference module.

*There is nothing needed at initialization.*


```solidity
function initializeReferenceModule(uint256, uint256, address, bytes calldata) external pure returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`||
|`<none>`|`uint256`||
|`<none>`|`address`||
|`<none>`|`bytes`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### processComment

Processes a comment being published. This includes any module logic like transferring tokens,
checking for conditions (e.g. token-gated), etc.

*Validates that the commenting profile is the original author or a follower of it.*


```solidity
function processComment(Types.ProcessCommentParams calldata processCommentParams)
    external
    view
    override
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processCommentParams`|`Types.ProcessCommentParams`|The parameters for processing a comment.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### processQuote

Processes a quote being published. This includes any module logic like transferring tokens,
checking for conditions (e.g. token-gated), etc.

*Validates that the quoting profile is the original author or a follower of it.*


```solidity
function processQuote(Types.ProcessQuoteParams calldata processQuoteParams)
    external
    view
    override
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processQuoteParams`|`Types.ProcessQuoteParams`|The parameters for processing a quote.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### processMirror

Processes a mirror being published. This includes any module logic like transferring tokens,
checking for conditions (e.g. token-gated), etc.

*Validates that the mirroring profile is the original author or a follower of it.*


```solidity
function processMirror(Types.ProcessMirrorParams calldata processMirrorParams)
    external
    view
    override
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processMirrorParams`|`Types.ProcessMirrorParams`|The parameters for processing a mirror.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### _performFollowerOnlyCheck


```solidity
function _performFollowerOnlyCheck(uint256 followerProfileId, uint256 followedProfileId)
    internal
    view
    returns (bytes memory);
```

