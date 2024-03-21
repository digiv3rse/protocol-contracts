# CollectionCreator
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/creator/CollectionCreator.sol)


## State Variables
### printDesignData

```solidity
PrintDesignData public printDesignData;
```


### printAccessControl

```solidity
PrintAccessControl public printAccessControl;
```


### nftCreator

```solidity
NFTCreator public nftCreator;
```


### printSplitsData

```solidity
PrintSplitsData public printSplitsData;
```


### symbol

```solidity
string public symbol;
```


### name

```solidity
string public name;
```


### marketCreator

```solidity
address public marketCreator;
```


## Functions
### onlyAdmin


```solidity
modifier onlyAdmin();
```

### onlyDesigner


```solidity
modifier onlyDesigner();
```

### constructor


```solidity
constructor(
    address _nftCreatorAddress,
    address _printDesignDataAddress,
    address _printAccessControlAddress,
    address _printSplitsDataAddress
);
```

### createCollection


```solidity
function createCollection(PrintLibrary.MintParams memory _params) external returns (uint256);
```

### purchaseAndMintToken


```solidity
function purchaseAndMintToken(
    uint256[] memory _collectionIds,
    uint256[] memory _amounts,
    uint256[] memory _chosenIndexes,
    address _purchaserAddress,
    address _chosenCurrency
) external;
```

### removeCollection


```solidity
function removeCollection(uint256 _collectionId) public onlyDesigner;
```

### createDrop


```solidity
function createDrop(string memory _uri) public onlyDesigner;
```

### updateDrop


```solidity
function updateDrop(uint256[] memory _collectionIds, string memory _uri, uint256 _dropId) public;
```

### removeDrop


```solidity
function removeDrop(uint256 _dropId) public onlyDesigner;
```

### setPrintDesignDataAddress


```solidity
function setPrintDesignDataAddress(address _newPrintDesignDataAddress) public onlyAdmin;
```

### setPrintAccessControlAddress


```solidity
function setPrintAccessControlAddress(address _newPrintAccessControlAddress) public onlyAdmin;
```

### setPrintSplitsDataAddress


```solidity
function setPrintSplitsDataAddress(address _newPrintSplitsDataAddress) public onlyAdmin;
```

### setNFTCreatorAddress


```solidity
function setNFTCreatorAddress(address _newNFTCreatorAddress) public onlyAdmin;
```

### setMarketCreatorAddress


```solidity
function setMarketCreatorAddress(address _newMarketCreatorAddress) public onlyAdmin;
```

### _internalUpdate


```solidity
function _internalUpdate(uint256[] memory _collectionIds, string memory _uri, address _caller, uint256 _dropId)
    internal;
```

## Errors
### AddressNotMarket

```solidity
error AddressNotMarket();
```

### AddressNotDesigner

```solidity
error AddressNotDesigner();
```

### AddressNotAdmin

```solidity
error AddressNotAdmin();
```

### InvalidUpdate

```solidity
error InvalidUpdate();
```

### InvalidCurrency

```solidity
error InvalidCurrency();
```

### InvalidRemoval

```solidity
error InvalidRemoval();
```

