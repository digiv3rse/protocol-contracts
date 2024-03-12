# LitAccessControl
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/misc/access/LitAccessControl.sol)

**Author:**
DiGi Protocol

This contract enables additional access control for encrypted publications on DiGi by reporting whether
an address owns or has control over a given profile.


## State Variables
### DIGI_HUB

```solidity
address internal immutable DIGI_HUB;
```


### COLLECT_PUB_ACTION

```solidity
address internal immutable COLLECT_PUB_ACTION;
```


## Functions
### constructor


```solidity
constructor(address digiHub, address collectPubAction);
```

### hasAccess

*Function used to check whether an address is the Owner or Delegated Executor of a profile.*


```solidity
function hasAccess(address requestorAddress, uint256 profileId, bytes memory) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`requestorAddress`|`address`|The address to check ownership over a profile.|
|`profileId`|`uint256`|The ID of the profile being checked for ownership. param data Optional data parameter, which may be used in future upgrades.|
|`<none>`|`bytes`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|Boolean indicating whether address owns the profile or not.|


### isFollowing

*Function used to check whether followerProfileId is following profileId and requestor is Owner/Delegated
Executor of followerProfileId.*


```solidity
function isFollowing(address requestorAddress, uint256 profileId, uint256 followerProfileId, bytes memory)
    external
    view
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`requestorAddress`|`address`|The address to check ownership over a profile.|
|`profileId`|`uint256`|The ID of the profile being followed.|
|`followerProfileId`|`uint256`|The ID of the following profile. param data Optional data parameter, which may be used in future upgrades.|
|`<none>`|`bytes`||


### hasCollected

*Function used to check whether an address owns or has collected the publication.*


```solidity
function hasCollected(
    address requestorAddress,
    uint256 publisherId,
    uint256 pubId,
    uint256 collectorProfileId,
    bytes memory
) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`requestorAddress`|`address`|The address to check if it owns the collect NFT of the publication.|
|`publisherId`|`uint256`|ID of the profile who is the publisher of the publication.|
|`pubId`|`uint256`|ID of the publication.|
|`collectorProfileId`|`uint256`|ID of the collector profile (optional, will check if the profile owner owns the NFT) param data Optional data parameter, which may be used in future upgrades.|
|`<none>`|`bytes`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|Boolean indicating whether address owns the collect NFT of the publication or not.|


### _isOwnerOrDelegatedExecutor

*Internal function used to check whether an address is the Owner or DelegatedExecutor of a profile.*


```solidity
function _isOwnerOrDelegatedExecutor(address requestorAddress, uint256 profileId) internal view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`requestorAddress`|`address`|The address to check ownership over a profile.|
|`profileId`|`uint256`|The ID of the profile being checked for ownership.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|Boolean indicating whether address owns the profile or is DelegatedExecutor of it.|


