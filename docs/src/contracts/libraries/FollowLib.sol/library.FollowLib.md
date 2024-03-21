# FollowLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/FollowLib.sol)


## Functions
### follow


```solidity
function follow(
    uint256 followerProfileId,
    address transactionExecutor,
    uint256[] calldata idsOfProfilesToFollow,
    uint256[] calldata followTokenIds,
    bytes[] calldata followModuleDatas
) external returns (uint256[] memory);
```

### unfollow


```solidity
function unfollow(uint256 unfollowerProfileId, address transactionExecutor, uint256[] calldata idsOfProfilesToUnfollow)
    external;
```

### isFollowing


```solidity
function isFollowing(uint256 followerProfileId, uint256 followedProfileId) internal view returns (bool);
```

### _deployFollowNFT

Deploys the given profile's Follow NFT contract.


```solidity
function _deployFollowNFT(uint256 profileId) private returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile which Follow NFT should be deployed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the deployed Follow NFT contract.|


### _follow


```solidity
function _follow(
    uint256 followerProfileId,
    address transactionExecutor,
    uint256 idOfProfileToFollow,
    uint256 followTokenId,
    bytes calldata followModuleData
) private returns (uint256);
```

### _processFollow


```solidity
function _processFollow(ProcessFollowParams memory processFollowParams) private returns (uint256);
```

## Structs
### ProcessFollowParams

```solidity
struct ProcessFollowParams {
    address followNFT;
    uint256 followerProfileId;
    address transactionExecutor;
    uint256 idOfProfileToFollow;
    uint256 followTokenId;
    address followModule;
    bytes followModuleData;
}
```

