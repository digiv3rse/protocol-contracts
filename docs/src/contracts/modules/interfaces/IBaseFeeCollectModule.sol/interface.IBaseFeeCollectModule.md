# IBaseFeeCollectModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/interfaces/IBaseFeeCollectModule.sol)

**Inherits:**
[ICollectModule](/contracts/modules/interfaces/ICollectModule.sol/interface.ICollectModule.md)


## Functions
### getBasePublicationData

Returns the Base publication data for a given publication, or an empty struct if that publication was not
initialized with this module.


```solidity
function getBasePublicationData(uint256 profileId, uint256 pubId)
    external
    view
    returns (BaseProfilePublicationData memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile mapped to the publication to query.|
|`pubId`|`uint256`|The publication ID of the publication to query.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`BaseProfilePublicationData`|The BaseProfilePublicationData struct mapped to that publication.|


### calculateFee

Calculates and returns the collect fee of a publication.

*Override this function to use a different formula for the fee.*


```solidity
function calculateFee(ModuleTypes.ProcessCollectParams calldata processCollectParams) external view returns (uint160);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint160`|The collect fee of the specified publication.|


