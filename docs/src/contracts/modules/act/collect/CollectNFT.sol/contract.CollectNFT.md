# CollectNFT
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/act/collect/CollectNFT.sol)

**Inherits:**
[DiGiBaseERC721](/contracts/base/DiGiBaseERC721.sol/abstract.DiGiBaseERC721.md), [ERC2981CollectionRoyalties](/contracts/base/ERC2981CollectionRoyalties.sol/abstract.ERC2981CollectionRoyalties.md), [ActionRestricted](/contracts/modules/ActionRestricted.sol/abstract.ActionRestricted.md), [ICollectNFT](/contracts/interfaces/ICollectNFT.sol/interface.ICollectNFT.md)

**Author:**
DiGi Protocol

This is the NFT contract that is minted upon collecting a given publication. It is cloned upon
the first collect for a given publication, and the token URI points to the original publication's contentURI.

*This is the CollectNFT for DiGi V2, it differs from LegacyCollectNFT that it's restricted to be called by an
action module instead of DiGiHub.*


## State Variables
### HUB

```solidity
address public immutable HUB;
```


### _profileId

```solidity
uint256 internal _profileId;
```


### _pubId

```solidity
uint256 internal _pubId;
```


### _tokenIdCounter

```solidity
uint256 internal _tokenIdCounter;
```


### _initialized

```solidity
bool private _initialized;
```


### _royaltiesInBasisPoints

```solidity
uint256 internal _royaltiesInBasisPoints;
```


## Functions
### constructor


```solidity
constructor(address hub, address actionModule) ActionRestricted(actionModule);
```

### initialize

Initializes the collect NFT, setting the feed as the privileged minter, storing the collected publication pointer
and initializing the name and symbol in the DiGiNFTBase contract.


```solidity
function initialize(uint256 profileId, uint256 pubId) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile in the hub that this Collect NFT points to.|
|`pubId`|`uint256`|The profile publication ID in the hub that this Collect NFT points to.|


### mint

Mints a collect NFT to the specified address. This can only be called by the hub and is called
upon collection.


```solidity
function mint(address to) external override onlyActionModule returns (uint256);
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
function getSourcePublicationPointer() external view override returns (uint256, uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|tuple First is the profile ID, and second is the publication ID.|
|`<none>`|`uint256`||


### tokenURI


```solidity
function tokenURI(uint256 tokenId) public view override returns (string memory);
```

### name

*See [IERC721Metadata-name](/contracts/base/DiGiBaseERC721.sol/abstract.DiGiBaseERC721.md#name).*


```solidity
function name() public view override returns (string memory);
```

### symbol

*See [IERC721Metadata-symbol](/contracts/base/DiGiBaseERC721.sol/abstract.DiGiBaseERC721.md#symbol).*


```solidity
function symbol() public pure override returns (string memory);
```

### supportsInterface

*See [IERC165-supportsInterface](/contracts/modules/act/collect/base/BaseFeeCollectModule.sol/abstract.BaseFeeCollectModule.md#supportsinterface).*


```solidity
function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(ERC2981CollectionRoyalties, DiGiBaseERC721)
    returns (bool);
```

### _getReceiver


```solidity
function _getReceiver(uint256) internal view override returns (address);
```

### _beforeRoyaltiesSet


```solidity
function _beforeRoyaltiesSet(uint256) internal view override;
```

### _getRoyaltiesInBasisPointsSlot


```solidity
function _getRoyaltiesInBasisPointsSlot() internal pure override returns (uint256);
```

