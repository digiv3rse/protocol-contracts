# FollowNFT
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/FollowNFT.sol)

**Inherits:**
[HubRestricted](/contracts/base/HubRestricted.sol/abstract.HubRestricted.md), [DiGiBaseERC721](/contracts/base/DiGiBaseERC721.sol/abstract.DiGiBaseERC721.md), [ERC2981CollectionRoyalties](/contracts/base/ERC2981CollectionRoyalties.sol/abstract.ERC2981CollectionRoyalties.md), [IFollowNFT](/contracts/interfaces/IFollowNFT.sol/interface.IFollowNFT.md)


## State Variables
### FOLLOW_NFT_NAME_SUFFIX

```solidity
string constant FOLLOW_NFT_NAME_SUFFIX = "-Follower";
```


### FOLLOW_NFT_SYMBOL_SUFFIX

```solidity
string constant FOLLOW_NFT_SYMBOL_SUFFIX = "-Fl";
```


### ___DEPRECATED_SLOTS

```solidity
uint256[5] ___DEPRECATED_SLOTS;
```


### _followedProfileId

```solidity
uint256 internal _followedProfileId;
```


### _lastFollowTokenId

```solidity
uint128 internal _lastFollowTokenId;
```


### _followerCount

```solidity
uint128 internal _followerCount;
```


### _initialized

```solidity
bool private _initialized;
```


### _followDataByFollowTokenId

```solidity
mapping(uint256 => Types.FollowData) internal _followDataByFollowTokenId;
```


### _followTokenIdByFollowerProfileId

```solidity
mapping(uint256 => uint256) internal _followTokenIdByFollowerProfileId;
```


### _followApprovalByFollowTokenId

```solidity
mapping(uint256 => uint256) internal _followApprovalByFollowTokenId;
```


### _royaltiesInBasisPoints

```solidity
uint256 internal _royaltiesInBasisPoints;
```


## Functions
### whenNotPaused


```solidity
modifier whenNotPaused();
```

### constructor


```solidity
constructor(address hub) HubRestricted(hub);
```

### initialize

Initializes the follow NFT.

*Sets the targeted profile, and the token royalties.*


```solidity
function initialize(uint256 profileId) external override;
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
    override
    onlyHub
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
function unfollow(uint256 unfollowerProfileId) external override onlyHub;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`unfollowerProfileId`|`uint256`|The ID of the profile that is performing the unfollow operation.|


### removeFollower

Removes the follower from the given follow NFT.

*Only on wrapped token.*


```solidity
function removeFollower(uint256 followTokenId) external override whenNotPaused;
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
function approveFollow(uint256 followerProfileId, uint256 followTokenId) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`||
|`followTokenId`|`uint256`|The ID of the follow token to be approved for the given profile.|


### wrap

Unties the follow token from the follower's profile one, and wraps it into the ERC-721 untied follow
tokens collection. Untied follow tokens will NOT be automatically transferred with their follower profile.

*Only on unwrapped follow tokens.*


```solidity
function wrap(uint256 followTokenId, address wrappedTokenReceiver) external override whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token to untie and wrap.|
|`wrappedTokenReceiver`|`address`||


### wrap

Unties the follow token from the follower's profile one, and wraps it into the ERC-721 untied follow
tokens collection. Untied follow tokens will NOT be automatically transferred with their follower profile.

*Only on unwrapped follow tokens.*


```solidity
function wrap(uint256 followTokenId) external override whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token to untie and wrap.|


### _wrap


```solidity
function _wrap(uint256 followTokenId, address wrappedTokenReceiver) internal;
```

### unwrap

Unwraps the follow token from the ERC-721 untied follow tokens collection, and ties it to the follower's
profile token. Tokens that are tied to the follower profile will be automatically transferred with it.


```solidity
function unwrap(uint256 followTokenId) external override whenNotPaused;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token to unwrap and tie to its follower.|


### processBlock

Processes logic when the given profile is being blocked. If it was following the targeted profile,
this will make it unfollow.


```solidity
function processBlock(uint256 followerProfileId) external override onlyHub returns (bool);
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


```solidity
function getFollowerProfileId(uint256 followTokenId) external view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token whose follower should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The ID of the profile following with the given token, zero if it is not being used to follow.|


### isFollowing

Tells if the given profile is following the profile targeted in this contract.


```solidity
function isFollowing(uint256 followerProfileId) external view override returns (bool);
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
function getFollowTokenId(uint256 followerProfileId) external view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`|The ID of the profile whose follow ID should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The ID of the token being used to follow by the given follower, zero if he is not following.|


### getOriginalFollowTimestamp

Gets the original follow timestamp of the given follow token.


```solidity
function getOriginalFollowTimestamp(uint256 followTokenId) external view override returns (uint256);
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
function getFollowTimestamp(uint256 followTokenId) external view override returns (uint256);
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
function getProfileIdAllowedToRecover(uint256 followTokenId) external view override returns (uint256);
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
function getFollowData(uint256 followTokenId) external view override returns (Types.FollowData memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenId`|`uint256`|The ID of the follow token whose follow data should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Types.FollowData`|FollowData The token data associated with the given follow token.|


### getFollowApproved

Gets the ID of the profile approved to follow with the given token.


```solidity
function getFollowApproved(uint256 followTokenId) external view override returns (uint256);
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


```solidity
function getFollowerCount() external view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The count of the followers of the profile targeted in this contract.|


### burn


```solidity
function burn(uint256 followTokenId) public override whenNotPaused;
```

### supportsInterface

*See [IERC165-supportsInterface](/contracts/modules/ListenerOpenAction.sol/contract.ListenerOpenAction.md#supportsinterface).*


```solidity
function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(DiGiBaseERC721, ERC2981CollectionRoyalties)
    returns (bool);
```

### name


```solidity
function name() public view override returns (string memory);
```

### symbol


```solidity
function symbol() public view override returns (string memory);
```

### tokenURI

*This returns the follow NFT URI fetched from the hub.*


```solidity
function tokenURI(uint256 followTokenId) public view override returns (string memory);
```

### _followMintingNewToken


```solidity
function _followMintingNewToken(uint256 followerProfileId) internal returns (uint256);
```

### _followWithWrappedToken


```solidity
function _followWithWrappedToken(uint256 followerProfileId, address transactionExecutor, uint256 followTokenId)
    internal
    returns (uint256);
```

### _followWithUnwrappedTokenFromBurnedProfile


```solidity
function _followWithUnwrappedTokenFromBurnedProfile(
    uint256 followerProfileId,
    uint256 followTokenId,
    uint256 currentFollowerProfileId,
    address transactionExecutor
) internal returns (uint256);
```

### _followByRecoveringToken


```solidity
function _followByRecoveringToken(uint256 followerProfileId, uint256 followTokenId) internal returns (uint256);
```

### _replaceFollower


```solidity
function _replaceFollower(
    uint256 currentFollowerProfileId,
    uint256 newFollowerProfileId,
    uint256 followTokenId,
    address transactionExecutor
) internal;
```

### _baseFollow


```solidity
function _baseFollow(uint256 followerProfileId, uint256 followTokenId, bool isOriginalFollow) internal;
```

### _unfollowIfHasFollower


```solidity
function _unfollowIfHasFollower(uint256 followTokenId, address transactionExecutor) internal;
```

### _unfollow


```solidity
function _unfollow(uint256 unfollower, uint256 followTokenId) internal;
```

### _approveFollow


```solidity
function _approveFollow(uint256 approvedProfileId, uint256 followTokenId) internal;
```

### _beforeTokenTransfer

*Upon transfers, we clear follow approvals and emit the transfer event in the hub.*


```solidity
function _beforeTokenTransfer(address from, address to, uint256 followTokenId) internal override whenNotPaused;
```

### _getReceiver


```solidity
function _getReceiver(uint256) internal view override returns (address);
```

### _beforeRoyaltiesSet


```solidity
function _beforeRoyaltiesSet(uint256) internal view override;
```

### _isFollowTokenWrapped


```solidity
function _isFollowTokenWrapped(uint256 followTokenId) internal view returns (bool);
```

### _getRoyaltiesInBasisPointsSlot


```solidity
function _getRoyaltiesInBasisPointsSlot() internal pure override returns (uint256);
```

### tryMigrate

Migrations ///


```solidity
function tryMigrate(uint256 followerProfileId, address followerProfileOwner, uint256 followTokenId)
    external
    onlyHub
    returns (uint48);
```

## Events
### FollowApproval

```solidity
event FollowApproval(uint256 indexed followerProfileId, uint256 indexed followTokenId);
```

