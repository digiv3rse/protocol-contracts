# CollectPublicationAction
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/act/collect/CollectPublicationAction.sol)

**Inherits:**
[DiGiModuleMetadataInitializable](/contracts/modules/DiGiModuleMetadataInitializable.sol/contract.DiGiModuleMetadataInitializable.md), [HubRestricted](/contracts/base/HubRestricted.sol/abstract.HubRestricted.md), [IPublicationActionModule](/contracts/interfaces/IPublicationActionModule.sol/interface.IPublicationActionModule.md)

**Author:**
DiGiProtocol

An Publication Action module that allows users to collect publications.


## State Variables
### COLLECT_NFT_IMPL

```solidity
address public immutable COLLECT_NFT_IMPL;
```


### _collectModuleRegistered

```solidity
mapping(address collectModule => bool isWhitelisted) internal _collectModuleRegistered;
```


### _collectDataByPub

```solidity
mapping(uint256 profileId => mapping(uint256 pubId => CollectData collectData)) internal _collectDataByPub;
```


## Functions
### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceID) public pure override returns (bool);
```

### constructor


```solidity
constructor(address hub, address collectNFTImpl, address moduleOwner)
    HubRestricted(hub)
    DiGiModuleMetadataInitializable(moduleOwner);
```

### verifyCollectModule


```solidity
function verifyCollectModule(address collectModule) public returns (bool);
```

### registerCollectModule


```solidity
function registerCollectModule(address collectModule) public returns (bool);
```

### initializePublicationAction


```solidity
function initializePublicationAction(uint256 profileId, uint256 pubId, address transactionExecutor, bytes calldata data)
    external
    override
    onlyHub
    returns (bytes memory);
```

### processPublicationAction


```solidity
function processPublicationAction(Types.ProcessActionParams calldata processActionParams)
    external
    override
    onlyHub
    returns (bytes memory);
```

### _emitCollectedEvent


```solidity
function _emitCollectedEvent(
    Types.ProcessActionParams calldata processActionParams,
    address collectNftRecipient,
    bytes memory collectData,
    bytes memory collectActionResult,
    address collectNFT,
    uint256 tokenId
) private;
```

### getCollectData


```solidity
function getCollectData(uint256 profileId, uint256 pubId) external view returns (CollectData memory);
```

### _getOrDeployCollectNFT


```solidity
function _getOrDeployCollectNFT(
    uint256 publicationCollectedProfileId,
    uint256 publicationCollectedId,
    address collectNFTImpl
) private returns (address);
```

### _processCollect


```solidity
function _processCollect(
    address collectModule,
    bytes memory collectData,
    Types.ProcessActionParams calldata processActionParams
) private returns (bytes memory);
```

### _deployCollectNFT


```solidity
function _deployCollectNFT(uint256 profileId, uint256 pubId, address collectNFTImpl) private returns (address);
```

### isCollectModuleRegistered


```solidity
function isCollectModuleRegistered(address collectModule) external view returns (bool);
```

## Events
### CollectModuleRegistered

```solidity
event CollectModuleRegistered(address collectModule, string metadata, uint256 timestamp);
```

### CollectNFTDeployed
*Emitted when a collectNFT clone is deployed using a lazy deployment pattern.*


```solidity
event CollectNFTDeployed(
    uint256 indexed profileId, uint256 indexed pubId, address indexed collectNFT, uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The publisher's profile token ID.|
|`pubId`|`uint256`|The publication associated with the newly deployed collectNFT clone's ID.|
|`collectNFT`|`address`|The address of the newly deployed collectNFT clone.|
|`timestamp`|`uint256`|The current block timestamp.|

### Collected
*Emitted upon a successful collect action.*


```solidity
event Collected(
    uint256 indexed collectedProfileId,
    uint256 indexed collectedPubId,
    uint256 indexed collectorProfileId,
    address nftRecipient,
    bytes collectActionData,
    bytes collectActionResult,
    address collectNFT,
    uint256 tokenId,
    address transactionExecutor,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`collectedProfileId`|`uint256`|The token ID of the profile that published the collected publication.|
|`collectedPubId`|`uint256`|The ID of the collected publication.|
|`collectorProfileId`|`uint256`|The token ID of the profile that collected the publication.|
|`nftRecipient`|`address`|The address that received the collect NFT.|
|`collectActionData`|`bytes`|The custom data passed to the collect module, if any.|
|`collectActionResult`|`bytes`|The data returned from the collect module's collect action. This is ABI-encoded and depends on the collect module chosen.|
|`collectNFT`|`address`|The address of the NFT collection where the minted collect NFT belongs to.|
|`tokenId`|`uint256`|The token ID of the collect NFT that was minted as a collect of the publication.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The current block timestamp.|

## Errors
### NotCollectModule

```solidity
error NotCollectModule();
```

## Structs
### CollectData

```solidity
struct CollectData {
    address collectModule;
    address collectNFT;
}
```

