# BaseFeeCollectModule
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/act/collect/base/BaseFeeCollectModule.sol)

**Inherits:**
[FeeModuleBase](/contracts/modules/FeeModuleBase.sol/abstract.FeeModuleBase.md), [ActionRestricted](/contracts/modules/ActionRestricted.sol/abstract.ActionRestricted.md), [IBaseFeeCollectModule](/contracts/modules/interfaces/IBaseFeeCollectModule.sol/interface.IBaseFeeCollectModule.md)

**Author:**
DiGi Protocol

This is base DiGi CollectModule implementation, allowing customization of time to collect, number of collects
and Followers-only restriction. Charges a fee for collect and distributing it among Receiver/Referrals/Treasury.

*Here we use "Base" terminology to anything that represents this base functionality (base structs,
base functions, base storage). Other collect modules can be built on top of the "Base" by inheriting from this
contract and overriding functions.
This contract is marked "abstract" as it requires you to implement initializePublicationCollectModule and
getPublicationData functions when you inherit from it. See SimpleFeeCollectModule as an example implementation.*


## State Variables
### HUB

```solidity
address immutable HUB;
```


### _dataByPublicationByProfile

```solidity
mapping(uint256 => mapping(uint256 => BaseProfilePublicationData)) internal _dataByPublicationByProfile;
```


## Functions
### constructor


```solidity
constructor(address hub, address actionModule, address moduleRegistry)
    ActionRestricted(actionModule)
    FeeModuleBase(hub, moduleRegistry);
```

### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceID) public pure virtual returns (bool);
```

### processCollect

Processes a collect by:
1. Validating that collect action meets all needed criteria
2. Processing the collect action either with or without referral


```solidity
function processCollect(ModuleTypes.ProcessCollectParams calldata processCollectParams)
    external
    virtual
    onlyActionModule
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processCollectParams`|`ModuleTypes.ProcessCollectParams`|Collect action parameters (see ModuleTypes.ProcessCollectParams struct)|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### getBasePublicationData

Returns the Base publication data for a given publication, or an empty struct if that publication was not
initialized with this module.


```solidity
function getBasePublicationData(uint256 profileId, uint256 pubId)
    public
    view
    virtual
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
function calculateFee(ModuleTypes.ProcessCollectParams calldata processCollectParams)
    public
    view
    virtual
    returns (uint160);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint160`|The collect fee of the specified publication.|


### _validateBaseInitData

*Validates the Base parameters like:
1) Is the currency whitelisted
2) Is the referralFee in valid range
3) Is the end of collects timestamp in valid range
This should be called during initializePublicationCollectModule()*


```solidity
function _validateBaseInitData(BaseFeeCollectModuleInitData memory baseInitData) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`baseInitData`|`BaseFeeCollectModuleInitData`|Module initialization data (see BaseFeeCollectModuleInitData struct)|


### _storeBasePublicationCollectParameters

*Stores the initial module parameters
This should be called during initializePublicationCollectModule()*


```solidity
function _storeBasePublicationCollectParameters(
    uint256 profileId,
    uint256 pubId,
    BaseFeeCollectModuleInitData memory baseInitData
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile publishing the publication.|
|`pubId`|`uint256`|The publication ID.|
|`baseInitData`|`BaseFeeCollectModuleInitData`|Module initialization data (see BaseFeeCollectModuleInitData struct)|


### _validateAndStoreCollect

*Validates the collect action by checking that:
1) the collector is a follower (if enabled)
2) the number of collects after the action doesn't surpass the collect limit (if enabled)
3) the current block timestamp doesn't surpass the end timestamp (if enabled)
This should be called during processCollect()*


```solidity
function _validateAndStoreCollect(ModuleTypes.ProcessCollectParams calldata processCollectParams) internal virtual;
```

### _processCollect

*Internal processing of a collect:
1. Calculation of fees
2. Validation that fees are what collector expected
3. Transfer of fees to recipient(-s) and treasury*


```solidity
function _processCollect(ModuleTypes.ProcessCollectParams calldata processCollectParams) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processCollectParams`|`ModuleTypes.ProcessCollectParams`|Parameters of the collect|


### _processCollectWithReferral

*Internal processing of a collect with a referrals (if any).
Same as _processCollect, but also includes transfer to referrals (if any):
1. Calculation of fees
2. Validation that fees are what collector expected
3. Transfer of fees to treasury, referrals (if any) and recipients*


```solidity
function _processCollectWithReferral(ModuleTypes.ProcessCollectParams calldata processCollectParams) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processCollectParams`|`ModuleTypes.ProcessCollectParams`|Parameters of the collect|


### _transferToRecipients

*Tranfers the fee to recipient(-s)
Override this to add additional functionality (e.g. multiple recipients)*


```solidity
function _transferToRecipients(
    ModuleTypes.ProcessCollectParams calldata processCollectParams,
    address currency,
    uint256 amount
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processCollectParams`|`ModuleTypes.ProcessCollectParams`|Parameters of the collect|
|`currency`|`address`|Currency of the transaction|
|`amount`|`uint256`|Amount to transfer to recipient(-s)|


### _transferToReferrals

*Tranfers the part of fee to referral(-s)
Override this to add additional functionality (e.g. different amounts to different referrals, etc)*


```solidity
function _transferToReferrals(
    ModuleTypes.ProcessCollectParams calldata processCollectParams,
    address currency,
    uint256 amount
) internal virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processCollectParams`|`ModuleTypes.ProcessCollectParams`|Parameters of the collect|
|`currency`|`address`|Currency of the transaction|
|`amount`|`uint256`|Amount of the fee after subtracting the Treasury part.|


