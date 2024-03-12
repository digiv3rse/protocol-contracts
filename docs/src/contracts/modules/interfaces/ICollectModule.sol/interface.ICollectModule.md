# ICollectModule
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/interfaces/ICollectModule.sol)

**Author:**
DiGi Protocol

This is the standard interface for all DiGi-compatible CollectModules.
Collect modules allow users to execute custom logic upon a collect action over a publication, like:
- Only allow the collect if the collector is following the publication author.
- Only allow the collect if the collector has made a payment to
- Allow any collect but only during the first 24 hours.
- Etc.


## Functions
### initializePublicationCollectModule

Initializes data for a given publication being published.


```solidity
function initializePublicationCollectModule(
    uint256 profileId,
    uint256 pubId,
    address transactionExecutor,
    bytes calldata data
) external returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile publishing the publication.|
|`pubId`|`uint256`|The associated publication's DiGiHub publication ID.|
|`transactionExecutor`|`address`|The owner or an approved delegated executor.|
|`data`|`bytes`|Arbitrary data __passed from the user!__ to be decoded.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### processCollect

Processes a collect action for a given publication.


```solidity
function processCollect(ModuleTypes.ProcessCollectParams calldata processCollectParams)
    external
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processCollectParams`|`ModuleTypes.ProcessCollectParams`|The parameters for the collect action.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


