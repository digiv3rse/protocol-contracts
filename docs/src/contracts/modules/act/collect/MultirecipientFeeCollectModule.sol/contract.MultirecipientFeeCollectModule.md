# MultirecipientFeeCollectModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/act/collect/MultirecipientFeeCollectModule.sol)

**Inherits:**
[BaseFeeCollectModule](/contracts/modules/act/collect/base/BaseFeeCollectModule.sol/abstract.BaseFeeCollectModule.md), [DiGiModuleMetadata](/contracts/modules/DiGiModuleMetadata.sol/contract.DiGiModuleMetadata.md)

**Author:**
DiGi Protocol

This is a simple DiGi CollectModule implementation, allowing customization of time to collect, number of collects,
splitting collect fee across multiple recipients, and whether only followers can collect.
It is charging a fee for collect and distributing it among (one or up to five) Receivers, Referral, Treasury.


## State Variables
### _recipientsByPublicationByProfile

```solidity
mapping(uint256 => mapping(uint256 => RecipientData[])) internal _recipientsByPublicationByProfile;
```


## Functions
### constructor


```solidity
constructor(address hub, address actionModule, address moduleRegistry, address moduleOwner)
    BaseFeeCollectModule(hub, actionModule, moduleRegistry)
    DiGiModuleMetadata(moduleOwner);
```

### initializePublicationCollectModule

Initializes data for a given publication being published.


```solidity
function initializePublicationCollectModule(uint256 profileId, uint256 pubId, address, bytes calldata data)
    external
    override
    onlyActionModule
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile publishing the publication.|
|`pubId`|`uint256`|The associated publication's DiGiHub publication ID.|
|`<none>`|`address`||
|`data`|`bytes`|Arbitrary data __passed from the user!__ to be decoded.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### _validateAndStoreRecipients

*Validates the recipients array and stores them to (a separate from Base) storage.*


```solidity
function _validateAndStoreRecipients(RecipientData[] memory recipients, uint256 profileId, uint256 pubId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipients`|`RecipientData[]`|An array of recipients|
|`profileId`|`uint256`|The profile ID who is publishing the publication.|
|`pubId`|`uint256`|The associated publication's DiGiHub publication ID.|


### _transferToRecipients

*Transfers the fee to multiple recipients.*


```solidity
function _transferToRecipients(
    ModuleTypes.ProcessCollectParams calldata processCollectParams,
    address currency,
    uint256 amount
) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processCollectParams`|`ModuleTypes.ProcessCollectParams`|Parameters of the collect|
|`currency`|`address`|Currency of the transaction|
|`amount`|`uint256`|Amount to transfer to recipient(-s)|


### getPublicationData

Returns the publication data for a given publication, or an empty struct if that publication was not
initialized with this module.


```solidity
function getPublicationData(uint256 profileId, uint256 pubId)
    external
    view
    returns (MultirecipientFeeCollectProfilePublicationData memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile mapped to the publication to query.|
|`pubId`|`uint256`|The publication ID of the publication to query.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`MultirecipientFeeCollectProfilePublicationData`|The BaseProfilePublicationData struct mapped to that publication.|


### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceID) public pure override(BaseFeeCollectModule, DiGiModule) returns (bool);
```

