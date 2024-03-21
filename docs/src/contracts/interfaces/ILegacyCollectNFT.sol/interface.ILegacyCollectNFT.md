# ILegacyCollectNFT
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/interfaces/ILegacyCollectNFT.sol)

**Author:**
DiGi Protocol

This is the interface for the DiGi V1 CollectNFT contract. Which is cloned upon the first collect for any
given publication.


## Functions
### initialize

Initializes the collect NFT, setting the feed as the privileged minter, storing the collected publication
pointer and initializing the name and symbol in the DiGiNFTBase contract.


```solidity
function initialize(uint256 profileId, uint256 pubId, string calldata name, string calldata symbol) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile in the hub that this Collect NFT points to.|
|`pubId`|`uint256`|The profile publication ID in the hub that this Collect NFT points to.|
|`name`|`string`|The name to set for this NFT.|
|`symbol`|`string`|The symbol to set for this NFT.|


### mint

Mints a collect NFT to the specified address.


```solidity
function mint(address to) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address to mint the NFT to.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 An integer representing the minted token ID.|


### getSourcePublicationPointer

Returns the source publication of this collect NFT.


```solidity
function getSourcePublicationPointer() external view returns (uint256, uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tuple First is the profile ID, and second is the publication ID.|
|`<none>`|`uint256`||


