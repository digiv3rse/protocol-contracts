# MarketCreator
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/creator/MarketCreator.sol)


## State Variables
### printAccessControl

```solidity
PrintAccessControl public printAccessControl;
```


### printOrderData

```solidity
PrintOrderData public printOrderData;
```


### collectionCreator

```solidity
CollectionCreator public collectionCreator;
```


### printSplitsData

```solidity
PrintSplitsData public printSplitsData;
```


### printDesignData

```solidity
PrintDesignData public printDesignData;
```


### symbol

```solidity
string public symbol;
```


### name

```solidity
string public name;
```


### fiatPKPAddress

```solidity
address public fiatPKPAddress;
```


## Functions
### onlyAdmin


```solidity
modifier onlyAdmin();
```

### constructor


```solidity
constructor(
    address _printAccessControlAddress,
    address _printSplitsDataAddress,
    address _printOrderDataAddress,
    address _collectionCreatorAddress,
    address _printDesignDataAddress,
    address _fiatPKPAddress
);
```

### setPrintAccessControlAddress


```solidity
function setPrintAccessControlAddress(address _newPrintAccessControlAddress) public onlyAdmin;
```

### setPrintOrderDataAddress


```solidity
function setPrintOrderDataAddress(address _newPrintOrderDataAddress) public onlyAdmin;
```

### setPrintDesignDataAddress


```solidity
function setPrintDesignDataAddress(address _newPrintDesignDataAddress) public onlyAdmin;
```

### setCollectionCreatorAddress


```solidity
function setCollectionCreatorAddress(address _newCollectionCreatorAddress) public onlyAdmin;
```

### setFiatPKPAddress


```solidity
function setFiatPKPAddress(address _newFiatPKPAddress) public onlyAdmin;
```

### setPrintSplitsDataAddress


```solidity
function setPrintSplitsDataAddress(address _newPrintSplitsDataAddress) public onlyAdmin;
```

### buyTokens


```solidity
function buyTokens(PrintLibrary.BuyTokensParams memory _params) external;
```

### buyTokensOnlyNFT


```solidity
function buyTokensOnlyNFT(PrintLibrary.BuyTokensOnlyNFTParams memory _params) external;
```

### _oneItem


```solidity
function _oneItem(uint256 _value) private pure returns (uint256[] memory);
```

## Errors
### InvalidAddress

```solidity
error InvalidAddress();
```

