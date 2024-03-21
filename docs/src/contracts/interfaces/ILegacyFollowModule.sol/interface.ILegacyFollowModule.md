# ILegacyFollowModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/interfaces/ILegacyFollowModule.sol)

**Author:**
DiGi Protocol

This is the deprecated interface for previously DiGi-compatible FollowModules.


## Functions
### initializeFollowModule

Initializes a follow module for a given DiGi profile. This can only be called by the hub contract.


```solidity
function initializeFollowModule(uint256 profileId, bytes calldata data) external returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to initialize this follow module for.|
|`data`|`bytes`|Arbitrary data passed by the profile creator.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes The encoded data to emit in the hub.|


### processFollow

Processes a given follow, this can only be called from the DiGiHub contract.


```solidity
function processFollow(address follower, uint256 profileId, bytes calldata data) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`follower`|`address`|The follower address.|
|`profileId`|`uint256`|The token ID of the profile being followed.|
|`data`|`bytes`|Arbitrary data passed by the follower.|


### followModuleTransferHook

This is a transfer hook that is called upon follow NFT transfer in `beforeTokenTransfer. This can
only be called from the DiGiHub contract.
NOTE: Special care needs to be taken here: It is possible that follow NFTs were issued before this module
was initialized if the profile's follow module was previously different. This transfer hook should take this
into consideration, especially when the module holds a state associated with individual follow NFTs.


```solidity
function followModuleTransferHook(uint256 profileId, address from, address to, uint256 followNFTTokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile associated with the follow NFT being transferred.|
|`from`|`address`|The address sending the follow NFT.|
|`to`|`address`|The address receiving the follow NFT.|
|`followNFTTokenId`|`uint256`|The token ID of the follow NFT being transferred.|


### isFollowing

This is a helper function that could be used in conjunction with specific collect modules.
NOTE: This function IS meant to replace a check on follower NFT ownership.
NOTE: It is assumed that not all collect modules are aware of the token ID to pass. In these cases,
this should receive a `followNFTTokenId` of 0, which is impossible regardless.
One example of a use case for this would be a subscription-based following system:
1. The collect module:
- Decodes a follower NFT token ID from user-passed data.
- Fetches the follow module from the hub.
- Calls `isFollowing` passing the profile ID, follower & follower token ID and checks it returned true.
2. The follow module:
- Validates the subscription status for that given NFT, reverting on an invalid subscription.


```solidity
function isFollowing(uint256 profileId, address follower, uint256 followNFTTokenId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to validate the follow for.|
|`follower`|`address`|The follower address to validate the follow for.|
|`followNFTTokenId`|`uint256`|The followNFT token ID to validate the follow for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the given address is following the given profile ID, false otherwise.|


