# TokenGatedReferenceModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/reference/TokenGatedReferenceModule.sol)

**Inherits:**
[DiGiModuleMetadata](/contracts/modules/DiGiModuleMetadata.sol/contract.DiGiModuleMetadata.md), [HubRestricted](/contracts/base/HubRestricted.sol/abstract.HubRestricted.md), [IReferenceModule](/contracts/interfaces/IReferenceModule.sol/interface.IReferenceModule.md)

**Author:**
DiGi Protocol

A reference module that validates that the user who tries to reference has a required minimum balance of ERC20/ERC721 token.


## State Variables
### UINT256_BYTES

```solidity
uint256 internal constant UINT256_BYTES = 32;
```


### _gateParams

```solidity
mapping(uint256 pointedProfileId => mapping(uint256 pointedPubId => GateParams gateParams)) internal _gateParams;
```


## Functions
### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceID) public pure override returns (bool);
```

### constructor


```solidity
constructor(address hub, address moduleOwner) HubRestricted(hub) DiGiModuleMetadata(moduleOwner);
```

### initializeReferenceModule

Initializes data for the given publication being published with this Reference module.

*The gating token address and minimum balance threshold is passed during initialization in data field.*


```solidity
function initializeReferenceModule(uint256 profileId, uint256 pubId, address, bytes calldata data)
    external
    override
    onlyHub
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile publishing the publication.|
|`pubId`|`uint256`|The associated publication's DiGiHub publication ID.|
|`<none>`|`address`||
|`data`|`bytes`|Arbitrary data passed from the user to be decoded by the Reference Module during initialization.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### processComment

Processes a comment being published. This includes any module logic like transferring tokens,
checking for conditions (e.g. token-gated), etc.

*Validates that the commenting profile's owner has enough balance of the gating token.*


```solidity
function processComment(Types.ProcessCommentParams calldata processCommentParams)
    external
    view
    override
    onlyHub
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processCommentParams`|`Types.ProcessCommentParams`|The parameters for processing a comment.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|balance The ABI-encoded gate token balance of the profile trying to comment/quote/mirror.|


### processQuote

Processes a quote being published. This includes any module logic like transferring tokens,
checking for conditions (e.g. token-gated), etc.

*Validates that the commenting profile's owner has enough balance of the gating token.*


```solidity
function processQuote(Types.ProcessQuoteParams calldata processQuoteParams)
    external
    view
    override
    onlyHub
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processQuoteParams`|`Types.ProcessQuoteParams`|The parameters for processing a quote.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|balance The ABI-encoded gate token balance of the profile trying to comment/quote/mirror.|


### processMirror

Processes a mirror being published. This includes any module logic like transferring tokens,
checking for conditions (e.g. token-gated), etc.

*Validates that the mirroring profile's owner has enough balance of the gating token.*


```solidity
function processMirror(Types.ProcessMirrorParams calldata processMirrorParams)
    external
    view
    override
    onlyHub
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`processMirrorParams`|`Types.ProcessMirrorParams`|The parameters for processing a mirror.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|balance The ABI-encoded gate token balance of the profile trying to comment/quote/mirror.|


### _validateTokenBalance

*Validates the profile's owner balance of gating token. It can work with both ERC20 and ERC721 as both
interfaces shares `balanceOf` function prototype.*


```solidity
function _validateTokenBalance(uint256 profileId, uint256 pointedProfileId, uint256 pointedPubId)
    internal
    view
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The ID of the profile trying to comment/quote/mirror.|
|`pointedProfileId`|`uint256`|The ID of the pointed publication's author.|
|`pointedPubId`|`uint256`|The ID of the pointed publication.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The gate token balance of the profile trying to comment/quote/mirror.|


## Events
### TokenGatedReferencePublicationCreated

```solidity
event TokenGatedReferencePublicationCreated(
    uint256 indexed profileId, uint256 indexed pubId, address tokenAddress, uint256 minThreshold
);
```

## Errors
### NotEnoughBalance

```solidity
error NotEnoughBalance();
```

