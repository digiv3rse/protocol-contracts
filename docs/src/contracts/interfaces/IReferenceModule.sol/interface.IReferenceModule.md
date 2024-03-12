# IReferenceModule
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/interfaces/IReferenceModule.sol)

**Author:**
DiGi Protocol

This is the standard interface for all DiGi-compatible ReferenceModules.
Reference modules allow executing some action when a publication is referenced, like:
- Rewards for mirroring/commenting/quoting a publication.
- Token-gated comments/mirrors/quotes of a publication.
- Etc.


## Functions
### initializeReferenceModule

Initializes data for the given publication being published with this Reference module.


```solidity
function initializeReferenceModule(uint256 profileId, uint256 pubId, address transactionExecutor, bytes calldata data)
    external
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile publishing the publication.|
|`pubId`|`uint256`|The associated publication's DiGiHub publication ID.|
|`transactionExecutor`|`address`|The address of the transaction executor (e.g. for any funds to transferFrom).|
|`data`|`bytes`|Arbitrary data passed from the user to be decoded by the Reference Module during initialization.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### processComment

Processes a comment being published. This includes any module logic like transferring tokens,
checking for conditions (e.g. token-gated), etc.


```solidity
function processComment(Types.ProcessCommentParams calldata processCommentParams) external returns (bytes memory);
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


```solidity
function processQuote(Types.ProcessQuoteParams calldata processQuoteParams) external returns (bytes memory);
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


```solidity
function processMirror(Types.ProcessMirrorParams calldata processMirrorParams) external returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processMirrorParams`|`Types.ProcessMirrorParams`|The parameters for processing a mirror.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


