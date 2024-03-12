# ILegacyReferenceModule
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/interfaces/ILegacyReferenceModule.sol)

**Author:**
DiGi Protocol

This is the deprecated interface for previously DiGi-compatible ReferenceModules.


## Functions
### initializeReferenceModule

Initializes data for a given publication being published. This can only be called by the hub.


```solidity
function initializeReferenceModule(uint256 profileId, uint256 pubId, bytes calldata data)
    external
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile publishing the publication.|
|`pubId`|`uint256`|The associated publication's DiGiHub publication ID.|
|`data`|`bytes`|Arbitrary data passed from the user to be decoded.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes An ABI-encoded data encapsulating the execution's state changes. This will be emitted by the hub alongside the collect module's address and should be consumed by front ends.|


### processComment

Processes a comment action referencing a given publication. This can only be called by the hub.


```solidity
function processComment(uint256 profileId, uint256 pointedProfileId, uint256 pointedPubId, bytes calldata data)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile associated with the publication being published.|
|`pointedProfileId`|`uint256`|The profile ID of the profile associated with the publication being referenced.|
|`pointedPubId`|`uint256`|The publication ID of the publication being referenced.|
|`data`|`bytes`|Arbitrary data __passed from the commenter!__ to be decoded.|


### processMirror

Processes a mirror action referencing a given publication. This can only be called by the hub.


```solidity
function processMirror(uint256 profileId, uint256 pointedProfileId, uint256 pointedPubId, bytes calldata data)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile associated with the publication being published.|
|`pointedProfileId`|`uint256`|The profile ID of the profile associated with the publication being referenced.|
|`pointedPubId`|`uint256`|The publication ID of the publication being referenced.|
|`data`|`bytes`|Arbitrary data __passed from the mirrorer!__ to be decoded.|


