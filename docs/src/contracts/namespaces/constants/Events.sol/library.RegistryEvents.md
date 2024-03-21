# RegistryEvents
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/namespaces/constants/Events.sol)


## Events
### HandleLinked

```solidity
event HandleLinked(
    RegistryTypes.Handle handle, RegistryTypes.Token token, address transactionExecutor, uint256 timestamp
);
```

### HandleUnlinked
WARNING: If a linked handle or token is burnt, this event will not be emitted.
Indexers should also take into account token burns through ERC-721 Transfer events to track all unlink actions.
The `resolveHandle` and `resolveToken` functions will properly reflect the unlink in any case.


```solidity
event HandleUnlinked(
    RegistryTypes.Handle handle, RegistryTypes.Token token, address transactionExecutor, uint256 timestamp
);
```

### NonceUpdated
*Emitted when a signer's nonce is used and, as a consequence, the next available nonce is updated.*


```solidity
event NonceUpdated(address indexed signer, uint256 nonce, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`signer`|`address`|The signer whose next available nonce was updated.|
|`nonce`|`uint256`|The next available nonce that can be used to execute a meta-tx successfully.|
|`timestamp`|`uint256`|The UNIX timestamp of the nonce being used.|

