# IPublicationActionModule
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/interfaces/IPublicationActionModule.sol)

**Author:**
DiGi Protocol

This is the standard interface for all DiGi-compatible Publication Actions.
Publication action modules allow users to execute actions directly from a publication, like:
- Minting NFTs.
- Collecting a publication.
- Sending funds to the publication author (e.g. tipping).
- Etc.
Referrers are supported, so any publication or profile that references the publication can receive a share from the
publication's action if the action module supports it.


## Functions
### initializePublicationAction

Initializes the action module for the given publication being published with this Action module.


```solidity
function initializePublicationAction(uint256 profileId, uint256 pubId, address transactionExecutor, bytes calldata data)
    external
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The profile ID of the author publishing the content with this Publication Action.|
|`pubId`|`uint256`|The publication ID being published.|
|`transactionExecutor`|`address`|The address of the transaction executor (e.g. for any funds to transferFrom).|
|`data`|`bytes`|Arbitrary data passed from the user to be decoded by the Action Module during initialization.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### processPublicationAction

Processes the action for a given publication. This includes the action's logic and any monetary/token
operations.


```solidity
function processPublicationAction(Types.ProcessActionParams calldata processActionParams)
    external
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processActionParams`|`Types.ProcessActionParams`|The parameters needed to execute the publication action.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


