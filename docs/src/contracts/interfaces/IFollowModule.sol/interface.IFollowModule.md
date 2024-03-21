# IFollowModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/interfaces/IFollowModule.sol)

**Author:**
DiGi Protocol

This is the standard interface for all DiGi-compatible Follow Modules.
These are responsible for processing the follow actions and can be used to implement any kind of follow logic.
For example:
- Token-gated follows (e.g. a user must hold a certain amount of a token to follow a profile).
- Paid follows (e.g. a user must pay a certain amount of a token to follow a profile).
- Rewarding users for following a profile.
- Etc.


## Functions
### initializeFollowModule

Initializes a follow module for a given DiGi profile.


```solidity
function initializeFollowModule(uint256 profileId, address transactionExecutor, bytes calldata data)
    external
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The Profile ID to initialize this follow module for.|
|`transactionExecutor`|`address`|The address of the transaction executor (e.g. for any funds to transferFrom).|
|`data`|`bytes`|Arbitrary data passed from the user to be decoded by the Follow Module during initialization.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes The encoded data to be emitted from the hub.|


### processFollow

Processes a given follow.


```solidity
function processFollow(
    uint256 followerProfileId,
    uint256 followTokenId,
    address transactionExecutor,
    uint256 targetProfileId,
    bytes calldata data
) external returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`|The Profile ID of the follower's profile.|
|`followTokenId`|`uint256`|The Follow Token ID that is being used to follow. Zero if we are processing a new fresh follow, in this case, the follow ID assigned can be queried from the Follow NFT collection if needed.|
|`transactionExecutor`|`address`|The address of the transaction executor (e.g. for any funds to transferFrom).|
|`targetProfileId`|`uint256`|The token ID of the profile being followed.|
|`data`|`bytes`|Arbitrary data passed by the follower.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


