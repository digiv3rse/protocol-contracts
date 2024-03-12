# DiGiHubEventHooks
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/base/DiGiHubEventHooks.sol)

**Inherits:**
[IDiGiHubEventHooks](/contracts/interfaces/IDiGiHubEventHooks.sol/interface.IDiGiHubEventHooks.md)


## Functions
### emitUnfollowedEvent

*Helper function to emit an `Unfollowed` event from the hub, to be consumed by indexers to track unfollows.*


```solidity
function emitUnfollowedEvent(uint256 unfollowerProfileId, uint256 idOfProfileUnfollowed, address transactionExecutor)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`unfollowerProfileId`|`uint256`|The ID of the profile that executed the unfollow.|
|`idOfProfileUnfollowed`|`uint256`|The ID of the profile that was unfollowed.|
|`transactionExecutor`|`address`|The address of the account executing the unfollow operation.|


### emitCollectNFTTransferEvent

DEPRECATED FUNCTIONS     ///


```solidity
function emitCollectNFTTransferEvent(uint256 profileId, uint256 pubId, uint256 collectNFTId, address from, address to)
    external;
```

