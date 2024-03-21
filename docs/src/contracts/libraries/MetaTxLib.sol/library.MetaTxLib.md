# MetaTxLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/MetaTxLib.sol)

**Author:**
DiGi Protocol
NOTE: the functions in this contract operate under the assumption that the passed signer is already validated
to either be the originator or one of their delegated executors.

*User nonces are incremented from this library as well.*


## State Variables
### EIP712_DOMAIN_VERSION

```solidity
string constant EIP712_DOMAIN_VERSION = "2";
```


### EIP712_DOMAIN_VERSION_HASH

```solidity
bytes32 constant EIP712_DOMAIN_VERSION_HASH = keccak256(bytes(EIP712_DOMAIN_VERSION));
```


### EIP1271_MAGIC_VALUE

```solidity
bytes4 constant EIP1271_MAGIC_VALUE = 0x1626ba7e;
```


### DIGI_HUB_CACHED_POLYGON_DOMAIN_SEPARATOR
*We store the domain separator and DiGiHub Proxy address as constants to save gas.
keccak256(
abi.encode(
keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),
keccak256('DiGi Protocol Profiles'), // Contract Name
keccak256('2'), // Version Hash
137, // Polygon Chain ID
address(0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d) // Verifying Contract Address - DiGiHub Address
)
);*


```solidity
bytes32 constant DIGI_HUB_CACHED_POLYGON_DOMAIN_SEPARATOR =
    0xbf9544cf7d7a0338fc4f071be35409a61e51e9caef559305410ad74e16a05f2d;
```


### DIGI_HUB_ADDRESS

```solidity
address constant DIGI_HUB_ADDRESS = 0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d;
```


### POLYGON_CHAIN_ID

```solidity
uint256 constant POLYGON_CHAIN_ID = 137;
```


## Functions
### validateSetProfileMetadataURISignature


```solidity
function validateSetProfileMetadataURISignature(
    Types.EIP712Signature calldata signature,
    uint256 profileId,
    string calldata metadataURI
) external;
```

### validateSetFollowModuleSignature


```solidity
function validateSetFollowModuleSignature(
    Types.EIP712Signature calldata signature,
    uint256 profileId,
    address followModule,
    bytes calldata followModuleInitData
) external;
```

### validateChangeDelegatedExecutorsConfigSignature


```solidity
function validateChangeDelegatedExecutorsConfigSignature(
    Types.EIP712Signature calldata signature,
    uint256 delegatorProfileId,
    address[] calldata delegatedExecutors,
    bool[] calldata approvals,
    uint64 configNumber,
    bool switchToGivenConfig
) external;
```

### validatePostSignature


```solidity
function validatePostSignature(Types.EIP712Signature calldata signature, Types.PostParams calldata postParams)
    external;
```

### validateCommentSignature


```solidity
function validateCommentSignature(Types.EIP712Signature calldata signature, Types.CommentParams calldata commentParams)
    external;
```

### validateQuoteSignature


```solidity
function validateQuoteSignature(Types.EIP712Signature calldata signature, Types.QuoteParams calldata quoteParams)
    external;
```

### validateMirrorSignature


```solidity
function validateMirrorSignature(Types.EIP712Signature calldata signature, Types.MirrorParams calldata mirrorParams)
    external;
```

### validateFollowSignature


```solidity
function validateFollowSignature(
    Types.EIP712Signature calldata signature,
    uint256 followerProfileId,
    uint256[] calldata idsOfProfilesToFollow,
    uint256[] calldata followTokenIds,
    bytes[] calldata datas
) external;
```

### validateUnfollowSignature


```solidity
function validateUnfollowSignature(
    Types.EIP712Signature calldata signature,
    uint256 unfollowerProfileId,
    uint256[] calldata idsOfProfilesToUnfollow
) external;
```

### validateSetBlockStatusSignature


```solidity
function validateSetBlockStatusSignature(
    Types.EIP712Signature calldata signature,
    uint256 byProfileId,
    uint256[] calldata idsOfProfilesToSetBlockStatus,
    bool[] calldata blockStatus
) external;
```

### validateLegacyCollectSignature


```solidity
function validateLegacyCollectSignature(
    Types.EIP712Signature calldata signature,
    Types.LegacyCollectParams calldata collectParams
) external;
```

### validateActSignature


```solidity
function validateActSignature(
    Types.EIP712Signature calldata signature,
    Types.PublicationActionParams calldata publicationActionParams
) external;
```

### incrementNonce

*This function is used to invalidate signatures by incrementing the nonce*


```solidity
function incrementNonce(uint8 increment) external;
```

### calculateDomainSeparator


```solidity
function calculateDomainSeparator() internal view returns (bytes32);
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


### _encodeUsingEip712Rules


```solidity
function _encodeUsingEip712Rules(bytes[] memory bytesArray) private pure returns (bytes32);
```

### _encodeUsingEip712Rules


```solidity
function _encodeUsingEip712Rules(bool[] memory boolArray) private pure returns (bytes32);
```

### _encodeUsingEip712Rules


```solidity
function _encodeUsingEip712Rules(address[] memory addressArray) private pure returns (bytes32);
```

### _encodeUsingEip712Rules


```solidity
function _encodeUsingEip712Rules(uint256[] memory uint256Array) private pure returns (bytes32);
```

### _encodeUsingEip712Rules


```solidity
function _encodeUsingEip712Rules(bytes32[] memory bytes32Array) private pure returns (bytes32);
```

### _encodeUsingEip712Rules


```solidity
function _encodeUsingEip712Rules(string memory stringValue) private pure returns (bytes32);
```

### _encodeUsingEip712Rules


```solidity
function _encodeUsingEip712Rules(bytes memory bytesValue) private pure returns (bytes32);
```

