# DegreesOfSeparationReferenceModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/reference/DegreesOfSeparationReferenceModule.sol)

**Inherits:**
[DiGiModuleMetadata](/contracts/modules/DiGiModuleMetadata.sol/contract.DiGiModuleMetadata.md), [HubRestricted](/contracts/base/HubRestricted.sol/abstract.HubRestricted.md), [IReferenceModule](/contracts/interfaces/IReferenceModule.sol/interface.IReferenceModule.md)

**Author:**
DiGi Protocol

This reference module allows to set a degree of separation `n`, and then allows to quote/comment/mirror
only to profiles that are at most at `n` degrees of separation from the source profile, which is expected to be set
as the author of the root publication.


## State Variables
### MAX_DEGREES_OF_SEPARATION
*Because of the "Six degrees of separation" theory, in the long term, setting up 5, 6 or more degrees of
separation will be almost equivalent to turning off the restriction.
If we also take into account the gas cost of performing the validations on-chain, and the cost of off-chain
computation of the path, makes sense to only support up to 2 degrees of separation.*


```solidity
uint8 public constant MAX_DEGREES_OF_SEPARATION = 2;
```


### _moduleConfig

```solidity
mapping(uint256 profileId => mapping(uint256 pubId => ModuleConfig config)) internal _moduleConfig;
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

*The `data` param should have ABI-encoded the following information:
- bool commentsRestricted: Indicates if the comment operation is restricted or open to everyone.
- bool quotesRestricted: Indicates if the quote operation is restricted or open to everyone.
- bool mirrorsRestricted: Indicates if the mirror operation is restricted or open to everyone.
- uint8 degreesOfSeparation: The max degrees of separation allowed for restricted operations.
- uint96 sourceProfile: The ID of the profile from where the follower path should be started. Expected to be set
as the author of the root publication.*


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

*It will apply the degrees of separation restriction if the publication has `commentsRestricted` enabled.
The param `processCommentParams.data` has ABI-encoded the array of profile IDs representing the follower path
between the source profile and the profile authoring the comment.
In addition, if comments were restricted, inheritance of commenting restrictions will be enforced.*


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
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### processQuote

Processes a quote being published. This includes any module logic like transferring tokens,
checking for conditions (e.g. token-gated), etc.

*It will apply the degrees of separation restriction if the publication has `quotesRestricted` enabled.
The param `processQuoteParams.data` has ABI-encoded the array of profile IDs representing the follower path
between the source profile and the profile authoring the quote.*


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
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### processMirror

Processes a mirror being published. This includes any module logic like transferring tokens,
checking for conditions (e.g. token-gated), etc.

*It will apply the degrees of separation restriction if the publication has `mirrorsRestricted` enabled.
The param `processMirrorParams.data` has ABI-encoded the array of profile IDs representing the follower path
between the source profile and the profile authoring the mirror.*


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
|`<none>`|`bytes`|bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by indexers or UIs.|


### getModuleConfig

Gets the module configuration for the given publication.


```solidity
function getModuleConfig(uint256 profileId, uint256 pubId) external view returns (ModuleConfig memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile publishing the publication.|
|`pubId`|`uint256`|The associated publication's DiGiHub publication ID.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`ModuleConfig`|ModuleConfig The module configuration set for the given publication.|


### _validateDegreesOfSeparationRestriction

*The data has encoded an array of integers, each integer is a profile ID, the whole array represents a path
of `n` profiles.
Let's define `X --> Y` as `The owner of X is following Y`. Then, being `path[i]` the i-th profile in the path,
the following condition must be met for a given path of `n` profiles:
sourceProfile --> path[0] --> path[1] --> path[2] --> ... --> path[n-2] --> path[n-1] --> profileId*


```solidity
function _validateDegreesOfSeparationRestriction(
    uint256 sourceProfile,
    uint256 originalAuthorProfile,
    uint256 profileId,
    uint8 degreesOfSeparation,
    uint256[] memory profilePath
) internal view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sourceProfile`|`uint256`|The ID of the profile from where the follower path should be started. Most likely to be the root publication's author.|
|`originalAuthorProfile`|`uint256`||
|`profileId`|`uint256`|The ID of the publication being published's author.|
|`degreesOfSeparation`|`uint8`|The degrees of separations configured for the given publication.|
|`profilePath`|`uint256[]`|The array of profile IDs representing the follower path between the source profile and the profile authoring the new publication (it could be a comment, a quote or a mirror of the pointed one).|


### _validateCommentInheritedConfigFromPointedPub

Validates that the comment configuration is inherited from pointed publication.


```solidity
function _validateCommentInheritedConfigFromPointedPub(
    ModuleConfig memory pointedPubConfig,
    ModuleConfig memory newCommentPubConfig
) internal pure;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`pointedPubConfig`|`ModuleConfig`|The pointed publication's degrees of separation module configuration.|
|`newCommentPubConfig`|`ModuleConfig`|The comment being processed's degrees of separation module configuration.|


## Errors
### InvalidDegreesOfSeparation

```solidity
error InvalidDegreesOfSeparation();
```

### OperationDisabled

```solidity
error OperationDisabled();
```

### ProfilePathExceedsDegreesOfSeparation

```solidity
error ProfilePathExceedsDegreesOfSeparation();
```

### NotInheritingPointedPubConfig

```solidity
error NotInheritingPointedPubConfig();
```

