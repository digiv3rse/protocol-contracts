# TokenHandleRegistry
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/namespaces/TokenHandleRegistry.sol)

**Inherits:**
[ITokenHandleRegistry](/contracts/misc/PermissionlessCreator.sol/interface.ITokenHandleRegistry.md)

**Author:**
DiGi Protocol

This contract is used to link a token with a handle.


## State Variables
### EIP712_DOMAIN_VERSION

```solidity
string constant EIP712_DOMAIN_VERSION = "1";
```


### EIP712_DOMAIN_VERSION_HASH

```solidity
bytes32 constant EIP712_DOMAIN_VERSION_HASH = keccak256(bytes(EIP712_DOMAIN_VERSION));
```


### EIP1271_MAGIC_VALUE

```solidity
bytes4 internal constant EIP1271_MAGIC_VALUE = 0x1626ba7e;
```


### DIGI_HUB

```solidity
address immutable DIGI_HUB;
```


### DIGI_HANDLES

```solidity
address immutable DIGI_HANDLES;
```


### handleToToken

```solidity
mapping(bytes32 handle => RegistryTypes.Token token) handleToToken;
```


### tokenToHandle

```solidity
mapping(bytes32 token => RegistryTypes.Handle handle) tokenToHandle;
```


### nonces

```solidity
mapping(address signer => uint256 nonce) public nonces;
```


## Functions
### constructor


```solidity
constructor(address digiHub, address digiHandles);
```

### migrationLink


```solidity
function migrationLink(uint256 handleId, uint256 profileId) external;
```

### link

Links a handle NFT with a profile NFT.
Linking means a connection between the two NFTs is created, and the handle NFT can be used to resolve the profile
NFT or vice versa.

*In the first version of the registry, the NFT contracts are hard-coded:
- Handle is hard-coded to be of the .digi namespace
- Token is hard-coded to be of the DiGi Protocol Profile
In future versions, the registry will be more flexible and allow for different namespaces and tokens, so this
function might be deprecated and replaced with a new one accepting addresses of the handle and token contracts.*


```solidity
function link(uint256 handleId, uint256 profileId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`handleId`|`uint256`|ID of the .digi namespace handle NFT|
|`profileId`|`uint256`|ID of the DiGi Protocol Profile NFT|


### linkWithSig


```solidity
function linkWithSig(uint256 handleId, uint256 profileId, Types.EIP712Signature calldata signature) external;
```

### _link


```solidity
function _link(uint256 handleId, uint256 profileId, address transactionExecutor) private;
```

### incrementNonce

This function is used to invalidate signatures by incrementing the nonce


```solidity
function incrementNonce(uint8 increment) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`increment`|`uint8`|The amount to increment the nonce by|


### _validateLinkSignature


```solidity
function _validateLinkSignature(Types.EIP712Signature calldata signature, uint256 handleId, uint256 profileId)
    internal;
```

### _validateUnlinkSignature


```solidity
function _validateUnlinkSignature(Types.EIP712Signature calldata signature, uint256 handleId, uint256 profileId)
    internal;
```

### _validateRecoveredAddress

*Wrapper for ecrecover to reduce code size, used in meta-tx specific functions.*


```solidity
function _validateRecoveredAddress(bytes32 digest, Types.EIP712Signature calldata signature) private view;
```

### _calculateDigest

*Calculates EIP712 digest based on the current DOMAIN_SEPARATOR.*


```solidity
function _calculateDigest(bytes32 hashedMessage) private view returns (bytes32);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`hashedMessage`|`bytes32`|The message hash from which the digest should be calculated.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|bytes32 A 32-byte output representing the EIP712 digest.|


### calculateDomainSeparator


```solidity
function calculateDomainSeparator() internal view returns (bytes32);
```

### unlink

Unlinks a handle NFT from a profile NFT.

*In the first version of the registry, the contracts are hard-coded:
- Handle is hard-coded to be of the .digi namespace
- Token is hard-coded to be of the DiGi Protocol Profile
In future versions, the registry will be more flexible and allow for different namespaces and tokens, so this
function might be deprecated and replaced with a new one accepting addresses of the handle and token contracts.*


```solidity
function unlink(uint256 handleId, uint256 profileId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`handleId`|`uint256`|ID of the .digi namespace handle NFT|
|`profileId`|`uint256`|ID of the DiGi Protocol Profile NFT|


### unlinkWithSig


```solidity
function unlinkWithSig(uint256 handleId, uint256 profileId, Types.EIP712Signature calldata signature) external;
```

### _unlink


```solidity
function _unlink(uint256 handleId, uint256 profileId, address transactionExecutor) private;
```

### resolve

Resolves a handle NFT to a profile NFT.

*In the first version of the registry, the contracts are hard-coded:
- Handle is hard-coded to be of the .digi namespace
- Token is hard-coded to be of the DiGi Protocol Profile
In future versions, the registry will be more flexible and allow for different namespaces and tokens, so this
function might be deprecated and replaced with a new one.*


```solidity
function resolve(uint256 handleId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`handleId`|`uint256`|ID of the .digi namespace handle NFT|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tokenId ID of the DiGi Protocol Profile NFT|


### getDefaultHandle

Gets a default handle for a profile NFT (aka reverse resolution).

*In the first version of the registry, the contracts are hard-coded:
- Handle is hard-coded to be of the .digi namespace
- Token is hard-coded to be of the DiGi Protocol Profile
In future versions, the registry will be more flexible and allow for different namespaces and tokens, so this
function might be deprecated and replaced with a new one.*


```solidity
function getDefaultHandle(uint256 profileId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|handleId ID of the .digi namespace handle NFT|


### _resolveHandleToToken

INTERNAL FUNCTIONS      ///


```solidity
function _resolveHandleToToken(RegistryTypes.Handle memory handle)
    internal
    view
    returns (RegistryTypes.Token storage);
```

### _resolveTokenToHandle


```solidity
function _resolveTokenToHandle(RegistryTypes.Token memory token) internal view returns (RegistryTypes.Handle storage);
```

### _executeLinkage


```solidity
function _executeLinkage(
    RegistryTypes.Handle memory handle,
    RegistryTypes.Token memory token,
    address transactionExecutor
) internal;
```

### _deleteTokenToHandleLinkageIfAny


```solidity
function _deleteTokenToHandleLinkageIfAny(RegistryTypes.Handle memory handle, address transactionExecutor) internal;
```

### _deleteHandleToTokenLinkageIfAny


```solidity
function _deleteHandleToTokenLinkageIfAny(RegistryTypes.Token memory token, address transactionExecutor) internal;
```

### _executeUnlinkage


```solidity
function _executeUnlinkage(
    RegistryTypes.Handle memory handle,
    RegistryTypes.Token memory token,
    address transactionExecutor
) internal;
```

### _handleHash


```solidity
function _handleHash(RegistryTypes.Handle memory handle) internal pure returns (bytes32);
```

### _tokenHash


```solidity
function _tokenHash(RegistryTypes.Token memory token) internal pure returns (bytes32);
```

### _getNonceIncrementAndEmitEvent

*This fetches a signer's current nonce and increments it so it's ready for the next meta-tx. Also emits
the `NonceUpdated` event.*


```solidity
function _getNonceIncrementAndEmitEvent(address signer) private returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`signer`|`address`|The address to get and increment the nonce for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The current nonce for the given signer prior to being incremented.|


