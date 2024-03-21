# PrintSplitsData
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/creator/PrintSplitsData.sol)


## State Variables
### printAccessControl

```solidity
PrintAccessControl public printAccessControl;
```


### symbol

```solidity
string public symbol;
```


### name

```solidity
string public name;
```


### _allCurrencies

```solidity
address[] private _allCurrencies;
```


### _designerSplits

```solidity
mapping(address => mapping(PrintLibrary.PrintType => uint256)) private _designerSplits;
```


### _fulfillerSplits

```solidity
mapping(address => mapping(PrintLibrary.PrintType => uint256)) private _fulfillerSplits;
```


### _treasurySplits

```solidity
mapping(address => mapping(PrintLibrary.PrintType => uint256)) private _treasurySplits;
```


### _fulfillerBases

```solidity
mapping(address => mapping(PrintLibrary.PrintType => uint256)) private _fulfillerBases;
```


### _currencyIndex

```solidity
mapping(address => uint256) private _currencyIndex;
```


### _currencies

```solidity
mapping(address => bool) private _currencies;
```


### _weiConversion

```solidity
mapping(address => uint256) private _weiConversion;
```


### _currencyToRate

```solidity
mapping(address => uint256) private _currencyToRate;
```


## Functions
### onlyAdmin


```solidity
modifier onlyAdmin();
```

### constructor


```solidity
constructor(address _printAccessControlAddress);
```

### setFulfillerSplit


```solidity
function setFulfillerSplit(address _address, PrintLibrary.PrintType _printType, uint256 _amount) external onlyAdmin;
```

### setFulfillerBase


```solidity
function setFulfillerBase(address _address, PrintLibrary.PrintType _printType, uint256 _amount) external onlyAdmin;
```

### setDesignerSplit


```solidity
function setDesignerSplit(address _address, PrintLibrary.PrintType _printType, uint256 _amount) external onlyAdmin;
```

### setTreasurySplit


```solidity
function setTreasurySplit(address _address, PrintLibrary.PrintType _printType, uint256 _amount) external onlyAdmin;
```

### addCurrency


```solidity
function addCurrency(address _currency, uint256 _weiAmount) external onlyAdmin;
```

### removeCurrency


```solidity
function removeCurrency(address _currency) external onlyAdmin;
```

### setOraclePriceUSD


```solidity
function setOraclePriceUSD(address _currencyAddress, uint256 _rate) public onlyAdmin;
```

### getFulfillerBase


```solidity
function getFulfillerBase(address _address, PrintLibrary.PrintType _printType) public view returns (uint256);
```

### getFulfillerSplit


```solidity
function getFulfillerSplit(address _address, PrintLibrary.PrintType _printType) public view returns (uint256);
```

### getDesignerSplit


```solidity
function getDesignerSplit(address _address, PrintLibrary.PrintType _printType) public view returns (uint256);
```

### getTreasurySplit


```solidity
function getTreasurySplit(address _address, PrintLibrary.PrintType _printType) public view returns (uint256);
```

### setPrintAccessControlAddress


```solidity
function setPrintAccessControlAddress(address _newPrintAccessControlAddress) public onlyAdmin;
```

### getIsCurrency


```solidity
function getIsCurrency(address _address) public view returns (bool);
```

### getRateByCurrency


```solidity
function getRateByCurrency(address _currency) public view returns (uint256);
```

### getWeiByCurrency


```solidity
function getWeiByCurrency(address _currency) public view returns (uint256);
```

### getAllCurrencies


```solidity
function getAllCurrencies() public view returns (address[] memory);
```

## Events
### FulfillerSplitSet

```solidity
event FulfillerSplitSet(address fulfiller, PrintLibrary.PrintType printType, uint256 split);
```

### FulfillerBaseSet

```solidity
event FulfillerBaseSet(address fulfiller, PrintLibrary.PrintType printType, uint256 split);
```

### DesignerSplitSet

```solidity
event DesignerSplitSet(address designer, PrintLibrary.PrintType printType, uint256 split);
```

### TreasurySplitSet

```solidity
event TreasurySplitSet(address treasury, PrintLibrary.PrintType printType, uint256 split);
```

### CurrencyAdded

```solidity
event CurrencyAdded(address indexed currency);
```

### CurrencyRemoved

```solidity
event CurrencyRemoved(address indexed currency);
```

### OracleUpdated

```solidity
event OracleUpdated(address indexed currency, uint256 rate);
```

## Errors
### AddressNotAdmin

```solidity
error AddressNotAdmin();
```

### ExistingCurrency

```solidity
error ExistingCurrency();
```

### CurrencyDoesntExist

```solidity
error CurrencyDoesntExist();
```

### InvalidCurrency

```solidity
error InvalidCurrency();
```

