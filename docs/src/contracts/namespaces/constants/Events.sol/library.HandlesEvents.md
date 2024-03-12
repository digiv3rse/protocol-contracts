# HandlesEvents
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/namespaces/constants/Events.sol)


## Events
### HandleMinted

```solidity
event HandleMinted(string handle, string namespace, uint256 handleId, address to, uint256 timestamp);
```

### TokenGuardianStateChanged
*Emitted when an address' Token Guardian state change is triggered.*


```solidity
event TokenGuardianStateChanged(
    address indexed wallet, bool indexed enabled, uint256 tokenGuardianDisablingTimestamp, uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`wallet`|`address`|The address whose Token Guardian state change is being triggered.|
|`enabled`|`bool`|True if the Token Guardian is being enabled, false if it is being disabled.|
|`tokenGuardianDisablingTimestamp`|`uint256`|The UNIX timestamp when disabling the Token Guardian will take effect, if disabling it. Zero if the protection is being enabled.|
|`timestamp`|`uint256`|The UNIX timestamp of the change being triggered.|

### BatchMetadataUpdate
*Emitted when a collection's token URI is updated.*


```solidity
event BatchMetadataUpdate(uint256 fromTokenId, uint256 toTokenId);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`fromTokenId`|`uint256`|The ID of the smallest token that requires its token URI to be refreshed.|
|`toTokenId`|`uint256`|The ID of the biggest token that requires its token URI to be refreshed. Max uint256 to refresh all of them.|

