# PrintDesignData
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/creator/PrintDesignData.sol)


## State Variables
### printAccessControl

```solidity
PrintAccessControl public printAccessControl;
```


### collectionCreator

```solidity
CollectionCreator public collectionCreator;
```


### nftCreator

```solidity
NFTCreator public nftCreator;
```


### symbol

```solidity
string public symbol;
```


### name

```solidity
string public name;
```


### _collectionSupply

```solidity
uint256 private _collectionSupply;
```


### _dropSupply

```solidity
uint256 private _dropSupply;
```


### _tokenSupply

```solidity
uint256 private _tokenSupply;
```


### _collections

```solidity
mapping(uint256 => PrintLibrary.Collection) private _collections;
```


### _drops

```solidity
mapping(uint256 => PrintLibrary.Drop) private _drops;
```


### _tokens

```solidity
mapping(uint256 => PrintLibrary.Token) private _tokens;
```


### _acceptedTokens

```solidity
mapping(uint256 => mapping(address => bool)) private _acceptedTokens;
```


## Functions
### onlyCollectionCreator


```solidity
modifier onlyCollectionCreator();
```

### onlyAdmin


```solidity
modifier onlyAdmin();
```

### constructor


```solidity
constructor(address _printAccessControlAddress);
```

### setCollection


```solidity
function setCollection(PrintLibrary.Collection memory _collectionData)
    external
    onlyCollectionCreator
    returns (uint256);
```

### setCollectionMintedTokens


```solidity
function setCollectionMintedTokens(uint256 _collectionId, uint256 _mintedTokens) external onlyCollectionCreator;
```

### setCollectionTokenIds


```solidity
function setCollectionTokenIds(uint256 _collectionId, uint256[] memory _newTokenIds) external onlyCollectionCreator;
```

### modifyCollectionsInDrop


```solidity
function modifyCollectionsInDrop(uint256[] memory _collectionIds, string memory _uri, uint256 _dropId)
    external
    onlyCollectionCreator;
```

### deleteCollection


```solidity
function deleteCollection(uint256 _collectionId) external onlyCollectionCreator;
```

### createDrop


```solidity
function createDrop(string memory _uri, address _creator) external onlyCollectionCreator;
```

### deleteDrop


```solidity
function deleteDrop(uint256 _dropId) external onlyCollectionCreator;
```

### setNFT


```solidity
function setNFT(PrintLibrary.Token memory _tokenData) external;
```

### getCollectionCreator


```solidity
function getCollectionCreator(uint256 _collectionId) public view returns (address);
```

### getCollectionCommunityIds


```solidity
function getCollectionCommunityIds(uint256 _collectionId) public view returns (uint256[] memory);
```

### getCollectionAcceptedTokens


```solidity
function getCollectionAcceptedTokens(uint256 _collectionId) public view returns (address[] memory);
```

### getIsCollectionTokenAccepted


```solidity
function getIsCollectionTokenAccepted(uint256 _collectionId, address _tokenAddress) public view returns (bool);
```

### getCollectionOrigin


```solidity
function getCollectionOrigin(uint256 _collectionId) public view returns (PrintLibrary.Origin);
```

### getCollectionDropId


```solidity
function getCollectionDropId(uint256 _collectionId) public view returns (uint256);
```

### getCollectionURI


```solidity
function getCollectionURI(uint256 _collectionId) public view returns (string memory);
```

### getCollectionPrices


```solidity
function getCollectionPrices(uint256 _collectionId) public view returns (uint256[] memory);
```

### getCollectionPrintType


```solidity
function getCollectionPrintType(uint256 _collectionId) public view returns (PrintLibrary.PrintType);
```

### getCollectionFulfiller


```solidity
function getCollectionFulfiller(uint256 _collectionId) public view returns (address);
```

### getCollectionAmount


```solidity
function getCollectionAmount(uint256 _collectionId) public view returns (uint256);
```

### getCollectionUnlimited


```solidity
function getCollectionUnlimited(uint256 _collectionId) public view returns (bool);
```

### getCollectionEncrypted


```solidity
function getCollectionEncrypted(uint256 _collectionId) public view returns (bool);
```

### getCollectionTokenIds


```solidity
function getCollectionTokenIds(uint256 _collectionId) public view returns (uint256[] memory);
```

### getCollectionTokensMinted


```solidity
function getCollectionTokensMinted(uint256 _collectionId) public view returns (uint256);
```

### getCollectionProfileId


```solidity
function getCollectionProfileId(uint256 _collectionId) public view returns (uint256);
```

### getCollectionPubId


```solidity
function getCollectionPubId(uint256 _collectionId) public view returns (uint256);
```

### getCollectionSupply


```solidity
function getCollectionSupply() public view returns (uint256);
```

### getTokenSupply


```solidity
function getTokenSupply() public view returns (uint256);
```

### getDropSupply


```solidity
function getDropSupply() public view returns (uint256);
```

### getTokenCollection


```solidity
function getTokenCollection(uint256 _tokenId) public view returns (uint256);
```

### getTokenId


```solidity
function getTokenId(uint256 _tokenId) public view returns (uint256);
```

### getTokenIndex


```solidity
function getTokenIndex(uint256 _tokenId) public view returns (uint256);
```

### getTokenURI


```solidity
function getTokenURI(uint256 _tokenId) public view returns (string memory);
```

### getDropURI


```solidity
function getDropURI(uint256 _dropId) public view returns (string memory);
```

### getDropCreator


```solidity
function getDropCreator(uint256 _dropId) public view returns (address);
```

### getDropCollectionIds


```solidity
function getDropCollectionIds(uint256 _dropId) public view returns (uint256[] memory);
```

### _concatenate


```solidity
function _concatenate(uint256[] memory _originalArray, uint256[] memory _newArray)
    internal
    pure
    returns (uint256[] memory);
```

### setPrintAccessControlAddress


```solidity
function setPrintAccessControlAddress(address _newPrintAccessControlAddress) public onlyAdmin;
```

### setCollectionCreatorAddress


```solidity
function setCollectionCreatorAddress(address _newCollectionCreatorAddress) public onlyAdmin;
```

### setNFTCreatorAddress


```solidity
function setNFTCreatorAddress(address _newNFTCreatorAddress) public onlyAdmin;
```

## Events
### TokensMinted

```solidity
event TokensMinted(uint256 indexed tokenId, uint256 collectionId);
```

### CollectionCreated

```solidity
event CollectionCreated(
    uint256 indexed collectionId, uint256 pubId, uint256 profileId, string uri, uint256 amount, address owner
);
```

### DropCollectionsUpdated

```solidity
event DropCollectionsUpdated(uint256 dropId, uint256[] collectionIds, uint256[] oldCollectionIds, string uri);
```

### DropCreated

```solidity
event DropCreated(uint256 dropId, string uri, address creator);
```

### DropDeleted

```solidity
event DropDeleted(uint256 dropId);
```

### CollectionDeleted

```solidity
event CollectionDeleted(uint256 collectionId);
```

### CollectionMintedTokensSet

```solidity
event CollectionMintedTokensSet(uint256 indexed collectionId, uint256 mintedTokensAmount);
```

### CollectionTokenIdsSet

```solidity
event CollectionTokenIdsSet(uint256 indexed collectionId, uint256[] tokenIds);
```

## Errors
### InvalidAddress

```solidity
error InvalidAddress();
```

### InvalidDrop

```solidity
error InvalidDrop();
```

