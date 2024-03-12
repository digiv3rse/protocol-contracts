# NFTCreator
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/creator/NFTCreator.sol)

**Inherits:**
ERC721Enumerable


## State Variables
### collectionCreator

```solidity
CollectionCreator public collectionCreator;
```


### printData

```solidity
PrintDesignData public printData;
```


### printAccessControl

```solidity
PrintAccessControl public printAccessControl;
```


## Functions
### onlyAdmin


```solidity
modifier onlyAdmin();
```

### constructor


```solidity
constructor(address _printDataAddress, address _printAccessControlAddress) ERC721("NFTCreator", "NFTC");
```

### mintBatch


```solidity
function mintBatch(
    string memory _uri,
    address _purchaserAddress,
    address _chosenCurrency,
    uint256 _amount,
    uint256 _collectionId,
    uint256 _chosenIndex
) public;
```

### burnBatch


```solidity
function burnBatch(uint256[] memory _tokenIds) public;
```

### burn


```solidity
function burn(uint256 _tokenId) public;
```

### tokenURI


```solidity
function tokenURI(uint256 _tokenId) public view virtual override returns (string memory);
```

### setPrintDesignDataAddress


```solidity
function setPrintDesignDataAddress(address _newPrintDesignDataAddress) public onlyAdmin;
```

### setCollectionCreatorAddress


```solidity
function setCollectionCreatorAddress(address _newCollectionCreatorAddress) public onlyAdmin;
```

### setPrintAccessControlAddress


```solidity
function setPrintAccessControlAddress(address _newPrintAccessControlAddress) public onlyAdmin;
```

## Events
### BatchTokenMinted

```solidity
event BatchTokenMinted(address indexed to, uint256[] tokenIds);
```

## Errors
### OnlyCollectionCreator

```solidity
error OnlyCollectionCreator();
```

### AddressNotAdmin

```solidity
error AddressNotAdmin();
```

