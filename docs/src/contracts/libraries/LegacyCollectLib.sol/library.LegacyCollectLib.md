# LegacyCollectLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/LegacyCollectLib.sol)

**Author:**
DiGi Protocol

Library containing the logic for legacy collect operation.


## Functions
### collect


```solidity
function collect(
    Types.LegacyCollectParams calldata collectParams,
    address transactionExecutor,
    address collectorProfileOwner,
    address collectNFTImpl
) external returns (uint256);
```

### _getOrDeployCollectNFT


```solidity
function _getOrDeployCollectNFT(
    Types.Publication storage _collectedPublication,
    uint256 publicationCollectedProfileId,
    uint256 publicationCollectedId,
    address collectNFTImpl
) private returns (address);
```

### _deployCollectNFT

Deploys the given profile's Collect NFT contract.


```solidity
function _deployCollectNFT(uint256 profileId, uint256 pubId, address collectNFTImpl) private returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile which Collect NFT should be deployed.|
|`pubId`|`uint256`|The publication ID of the publication being collected, which Collect NFT should be deployed.|
|`collectNFTImpl`|`address`|The address of the Collect NFT implementation that should be used for the deployment.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the deployed Collect NFT contract.|


### _prefillLegacyCollectFollowValidationHelper


```solidity
function _prefillLegacyCollectFollowValidationHelper(uint256 profileId, uint256 collectorProfileId, address collector)
    private;
```

## Events
### CollectedLegacy
*Emitted upon a successful legacy collect action.*


```solidity
event CollectedLegacy(
    uint256 indexed publicationCollectedProfileId,
    uint256 indexed publicationCollectedId,
    uint256 indexed collectorProfileId,
    address transactionExecutor,
    uint256 referrerProfileId,
    uint256 referrerPubId,
    address collectModule,
    bytes collectModuleData,
    uint256 tokenId,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`publicationCollectedProfileId`|`uint256`|The profile ID of the publication being collected.|
|`publicationCollectedId`|`uint256`|The publication ID of the publication being collected.|
|`collectorProfileId`|`uint256`|The profile ID of the profile that collected the publication.|
|`transactionExecutor`|`address`|The address of the account that executed the collect transaction.|
|`referrerProfileId`|`uint256`|The profile ID of the referrer, if any. Zero if no referrer.|
|`referrerPubId`|`uint256`|The publication ID of the referrer, if any. Zero if no referrer.|
|`collectModule`|`address`|The address of the collect module that was used to collect the publication.|
|`collectModuleData`|`bytes`|The data passed to the collect module's collect action. This is ABI-encoded and depends on the collect module chosen.|
|`tokenId`|`uint256`|The token ID of the collect NFT that was minted as a collect of the publication.|
|`timestamp`|`uint256`|The current block timestamp.|

