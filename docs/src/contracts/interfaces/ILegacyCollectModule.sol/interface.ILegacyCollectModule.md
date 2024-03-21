# ILegacyCollectModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/interfaces/ILegacyCollectModule.sol)

**Author:**
DiGi Protocol

This is the deprecated interface for previously DiGi-compatible CollectModules.


## Functions
### initializePublicationCollectModule

Initializes data for a given publication being published. This can only be called by the hub.


```solidity
function initializePublicationCollectModule(uint256 profileId, uint256 pubId, bytes calldata data)
    external
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile publishing the publication.|
|`pubId`|`uint256`|The associated publication's DiGiHub publication ID.|
|`data`|`bytes`|Arbitrary data __passed from the user!__ to be decoded.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes An ABI-encoded encapsulating the execution's state changes. This will be emitted by the hub alongside the collect module's address and should be consumed by front ends.|


### processCollect

Processes a collect action for a given publication, this can only be called by the hub.


```solidity
function processCollect(
    uint256 referrerProfileId,
    address collector,
    uint256 profileId,
    uint256 pubId,
    bytes calldata data
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`referrerProfileId`|`uint256`|The DiGiHub profile token ID of the referrer's profile (only different in case of mirrors).|
|`collector`|`address`|The collector address.|
|`profileId`|`uint256`|The token ID of the profile associated with the publication being collected.|
|`pubId`|`uint256`|The DiGiHub publication ID associated with the publication being collected.|
|`data`|`bytes`|Arbitrary data __passed from the collector!__ to be decoded.|


