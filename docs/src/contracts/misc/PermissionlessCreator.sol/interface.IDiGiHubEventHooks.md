# IDiGiHubEventHooks
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/misc/PermissionlessCreator.sol)

**Author:**
DiGi Protocol

This is the interface for the DiGiHub contract's event hooks. As we want most of the core events to be
emitted by the DiGiHub contract, event hooks are needed for core events generated by pheripheral contracts.


## Functions
### emitUnfollowedEvent

*Helper function to emit an `Unfollowed` event from the hub, to be consumed by indexers to track unfollows.*


```solidity
function emitUnfollowedEvent(uint256 unfollowerProfileId, uint256 idOfProfileUnfollowed, address transactionExecutor)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`unfollowerProfileId`|`uint256`|The ID of the profile that executed the unfollow.|
|`idOfProfileUnfollowed`|`uint256`|The ID of the profile that was unfollowed.|
|`transactionExecutor`|`address`|The address of the account executing the unfollow operation.|


