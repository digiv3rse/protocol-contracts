# SimpleFeeCollectModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/act/collect/SimpleFeeCollectModule.sol)

**Inherits:**
[BaseFeeCollectModule](/contracts/modules/act/collect/base/BaseFeeCollectModule.sol/abstract.BaseFeeCollectModule.md), [DiGiModuleMetadata](/contracts/modules/DiGiModuleMetadata.sol/contract.DiGiModuleMetadata.md)

**Author:**
DiGi Protocol

This is a simple DiGi CollectModule implementation, allowing customization of time to collect,
number of collects and whether only followers can collect.
You can build your own collect modules by inheriting from BaseFeeCollectModule and adding your
functionality along with getPublicationData function.


## Functions
### constructor


```solidity
constructor(address hub, address actionModule, address moduleRegistry, address moduleOwner)
    BaseFeeCollectModule(hub, actionModule, moduleRegistry)
    DiGiModuleMetadata(moduleOwner);
```

### initializePublicationCollectModule

This collect module levies a fee on collects and supports referrals. Thus, we need to decode data.


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
|`data`|`bytes`|The arbitrary data parameter, decoded into BaseFeeCollectModuleInitData struct: amount: The collecting cost associated with this publication. 0 for free collect. collectLimit: The maximum number of collects for this publication. 0 for no limit. currency: The currency associated with this publication. referralFee: The referral fee associated with this publication. followerOnly: True if only followers of publisher may collect the post. endTimestamp: The end timestamp after which collecting is impossible. 0 for no expiry. recipient: Recipient of collect fees.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|An abi encoded bytes parameter, which is the same as the passed data parameter.|


### getPublicationData

Returns the publication data for a given publication, or an empty struct if that publication was not
initialized with this module.


```solidity
function getPublicationData(uint256 profileId, uint256 pubId)
    external
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


### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceID) public pure override(BaseFeeCollectModule, DiGiModule) returns (bool);
```

