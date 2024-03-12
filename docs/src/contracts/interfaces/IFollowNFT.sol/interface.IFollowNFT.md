# IFollowNFT
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/interfaces/IFollowNFT.sol)

**Author:**
DiGi Protocol

This is the interface for the FollowNFT contract, which is cloned upon the first follow for any profile.
By default the Follow tokens are tied to the follower profile, which means that they will be automatically
transferred with it.
This is achieved by them not being ERC-721 initially. However, the Follow NFT collections support converting them to
ERC-721 tokens (i.e. wrapping) natively, enabling composability with existing ERC-721-based protocols.


## Functions
### initialize

Initializes the follow NFT.

*Sets the targeted profile, and the token royalties.*


```solidity
function initialize(uint256 profileId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The ID of the profile targeted by the follow tokens minted by this collection.|


### follow

Makes the passed profile follow the profile targeted in this contract.


```solidity
function follow(uint256 followerProfileId, address transactionExecutor, uint256 followTokenId)
    external
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`|The ID of the profile acting as the follower.|
|`transactionExecutor`|`address`|The address of the transaction executor (e.g. for any funds to transferFrom).|
|`followTokenId`|`uint256`|The ID of the follow token to be used for this follow operation. Zero if a new follow token should be minted.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The ID of the token used to follow.|


### unfollow

Makes the passed profile unfollow the profile targeted in this contract.


```solidity
function unfollow(uint256 unfollowerProfileId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`unfollowerProfileId`|`uint256`|The ID of the profile that is performing the unfollow operation.|


### removeFollower

Removes the follower from the given follow NFT.

*Only on wrapped token.*


```solidity
function removeFollower(uint256 followTokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token to remove the follower from.|


### approveFollow

Approves the given profile to follow with the given wrapped token.

*Only on wrapped tokens.
It approves setting a follower on the given wrapped follow token, which lets the follow token owner to allow
a profile to follow with his token without losing its ownership. This approval is cleared on transfers, as well
as when unwrapping.*


```solidity
function approveFollow(uint256 approvedProfileId, uint256 followTokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`approvedProfileId`|`uint256`|The ID of the profile approved to follow with the given token.|
|`followTokenId`|`uint256`|The ID of the follow token to be approved for the given profile.|


### wrap

Unties the follow token from the follower's profile one, and wraps it into the ERC-721 untied follow
tokens collection. Untied follow tokens will NOT be automatically transferred with their follower profile.

*Only on unwrapped follow tokens.*


```solidity
function wrap(uint256 followTokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token to untie and wrap.|


### wrap

Unties the follow token from the follower's profile one, and wraps it into the ERC-721 untied follow
tokens collection. Untied follow tokens will NOT be automatically transferred with their follower profile.

*Only on unwrapped follow tokens.*


```solidity
function wrap(uint256 followTokenId, address wrappedTokenReceiver) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token to untie and wrap.|
|`wrappedTokenReceiver`|`address`|The address where the follow token is minted to when being wrapped as ERC-721.|


### unwrap

Unwraps the follow token from the ERC-721 untied follow tokens collection, and ties it to the follower's
profile token. Tokens that are tied to the follower profile will be automatically transferred with it.


```solidity
function unwrap(uint256 followTokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token to unwrap and tie to its follower.|


### processBlock

Processes logic when the given profile is being blocked. If it was following the targeted profile,
this will make it unfollow.


```solidity
function processBlock(uint256 followerProfileId) external returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`|The ID of the follow token to unwrap and tie.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the given profile was following and now has unfollowed, false otherwise.|


### getFollowerProfileId

GETTERS       ///

Gets the ID of the profile following with the given follow token.


```solidity
function getFollowerProfileId(uint256 followTokenId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token whose follower should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The ID of the profile following with the given token, zero if it is not being used to follow.|


### getOriginalFollowTimestamp

Gets the original follow timestamp of the given follow token.


```solidity
function getOriginalFollowTimestamp(uint256 followTokenId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token whose original follow timestamp should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The timestamp of the first follow performed with the token, zero if was not used to follow yet.|


### getFollowTimestamp

Gets the current follow timestamp of the given follow token.


```solidity
function getFollowTimestamp(uint256 followTokenId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token whose follow timestamp should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The timestamp of the current follow of the token, zero if it is not being used to follow.|


### getProfileIdAllowedToRecover

Gets the ID of the profile allowed to recover the given follow token.


```solidity
function getProfileIdAllowedToRecover(uint256 followTokenId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token whose allowed profile to recover should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The ID of the profile allowed to recover the given follow token, zero if none of them is allowed.|


### getFollowData

Gets the follow data of the given follow token.


```solidity
function getFollowData(uint256 followTokenId) external view returns (Types.FollowData memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token whose follow data should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Types.FollowData`|FollowData The token data associated with the given follow token.|


### isFollowing

Tells if the given profile is following the profile targeted in this contract.


```solidity
function isFollowing(uint256 followerProfileId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`|The ID of the profile whose following state should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|uint256 The ID of the profile set as a follower in the given token, zero if it is not being used to follow.|


### getFollowTokenId

Gets the ID of the token being used to follow by the given follower.


```solidity
function getFollowTokenId(uint256 followerProfileId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`|The ID of the profile whose follow ID should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The ID of the token being used to follow by the given follower, zero if he is not following.|


### getFollowApproved

Gets the ID of the profile approved to follow with the given token.


```solidity
function getFollowApproved(uint256 followTokenId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the token whose approved to follow should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The ID of the profile approved to follow with the given token, zero if none of them is approved.|


### getFollowerCount

Gets the count of the followers of the profile targeted in this contract.

This number might be out of sync if one of the followers burns their profile.


```solidity
function getFollowerCount() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The count of the followers of the profile targeted in this contract.|


## Errors
### AlreadyFollowing

```solidity
error AlreadyFollowing();
```

### NotFollowing

```solidity
error NotFollowing();
```

### FollowTokenDoesNotExist

```solidity
error FollowTokenDoesNotExist();
```

### AlreadyWrapped

```solidity
error AlreadyWrapped();
```

### OnlyWrappedFollowTokens

```solidity
error OnlyWrappedFollowTokens();
```

### DoesNotHavePermissions

```solidity
error DoesNotHavePermissions();
```

