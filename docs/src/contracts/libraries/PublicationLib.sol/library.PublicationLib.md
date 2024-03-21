# PublicationLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/PublicationLib.sol)


## Functions
### MODULE_REGISTRY


```solidity
function MODULE_REGISTRY() internal view returns (IModuleRegistry);
```

### post

Publishes a post to a given profile.


```solidity
function post(Types.PostParams calldata postParams, address transactionExecutor) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`postParams`|`Types.PostParams`|The PostParams struct.|
|`transactionExecutor`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The created publication's pubId.|


### comment

Publishes a comment to a given profile via signature.


```solidity
function comment(Types.CommentParams calldata commentParams, address transactionExecutor) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`commentParams`|`Types.CommentParams`|the CommentParams struct.|
|`transactionExecutor`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The created publication's pubId.|


### mirror

Publishes a mirror to a given profile.


```solidity
function mirror(Types.MirrorParams calldata mirrorParams, address transactionExecutor) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`mirrorParams`|`Types.MirrorParams`|the MirrorParams struct.|
|`transactionExecutor`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The created publication's pubId.|


### quote

Publishes a quote publication to a given profile via signature.


```solidity
function quote(Types.QuoteParams calldata quoteParams, address transactionExecutor) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`quoteParams`|`Types.QuoteParams`|the QuoteParams struct.|
|`transactionExecutor`|`address`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The created publication's pubId.|


### getPublicationType


```solidity
function getPublicationType(uint256 profileId, uint256 pubId) internal view returns (Types.PublicationType);
```

### getContentURI


```solidity
function getContentURI(uint256 profileId, uint256 pubId) external view returns (string memory);
```

### _asReferencePubParams


```solidity
function _asReferencePubParams(Types.QuoteParams calldata quoteParams)
    private
    pure
    returns (Types.ReferencePubParams calldata referencePubParams);
```

### _asReferencePubParams


```solidity
function _asReferencePubParams(Types.CommentParams calldata commentParams)
    private
    pure
    returns (Types.ReferencePubParams calldata referencePubParams);
```

### _createReferencePublication


```solidity
function _createReferencePublication(
    Types.ReferencePubParams calldata referencePubParams,
    address transactionExecutor,
    Types.PublicationType referencePubType
) private returns (uint256, bytes[] memory, bytes memory, Types.PublicationType[] memory);
```

### _fillReferencePublicationStorage


```solidity
function _fillReferencePublicationStorage(
    Types.ReferencePubParams calldata referencePubParams,
    Types.PublicationType referencePubType
) private returns (uint256, uint256);
```

### _fillRootOfPublicationInStorage


```solidity
function _fillRootOfPublicationInStorage(
    Types.Publication storage _publication,
    uint256 pointedProfileId,
    uint256 pointedPubId
) internal returns (uint256);
```

### _processCommentIfNeeded


```solidity
function _processCommentIfNeeded(
    Types.CommentParams calldata commentParams,
    uint256 pubIdAssigned,
    address transactionExecutor,
    Types.PublicationType[] memory referrerPubTypes
) private returns (bytes memory);
```

### _processQuoteIfNeeded

Equivalent to reverting with the returned error selector if
the length is not zero.


```solidity
function _processQuoteIfNeeded(
    Types.QuoteParams calldata quoteParams,
    uint256 pubIdAssigned,
    address transactionExecutor,
    Types.PublicationType[] memory referrerPubTypes
) private returns (bytes memory);
```

### _processMirrorIfNeeded

Equivalent to reverting with the returned error selector if
the length is not zero.


```solidity
function _processMirrorIfNeeded(
    Types.MirrorParams calldata mirrorParams,
    uint256 pubIdAssigned,
    address transactionExecutor,
    Types.PublicationType[] memory referrerPubTypes
) private returns (bytes memory);
```

### _initPubActionModules


```solidity
function _initPubActionModules(InitActionModuleParams memory params) private returns (bytes[] memory);
```

### _initPubReferenceModule


```solidity
function _initPubReferenceModule(InitReferenceModuleParams memory params) private returns (bytes memory);
```

## Structs
### InitActionModuleParams
Equivalent to reverting with the returned error selector if
the length is not zero.


```solidity
struct InitActionModuleParams {
    uint256 profileId;
    address transactionExecutor;
    uint256 pubId;
    address[] actionModules;
    bytes[] actionModulesInitDatas;
}
```

### InitReferenceModuleParams

```solidity
struct InitReferenceModuleParams {
    uint256 profileId;
    address transactionExecutor;
    uint256 pubId;
    address referenceModule;
    bytes referenceModuleInitData;
}
```

