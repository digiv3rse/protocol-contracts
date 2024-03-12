# ModuleRegistry
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/misc/ModuleRegistry.sol)

**Inherits:**
[IModuleRegistry](/contracts/interfaces/IModuleRegistry.sol/interface.IModuleRegistry.md)

**Author:**
DiGi Protocol

A registry for modules and currencies


## State Variables
### DIGI_MODULE_INTERFACE_ID

```solidity
bytes4 private constant DIGI_MODULE_INTERFACE_ID = bytes4(keccak256(abi.encodePacked("DIGI_MODULE")));
```


### registeredModules

```solidity
mapping(address moduleAddress => uint256 moduleTypesBitmap) internal registeredModules;
```


### registeredErc20Currencies

```solidity
mapping(address erc20CurrencyAddress => bool) internal registeredErc20Currencies;
```


## Functions
### verifyModule


```solidity
function verifyModule(address moduleAddress, uint256 moduleType) external returns (bool);
```

### registerModule


```solidity
function registerModule(address moduleAddress, uint256 moduleType) public returns (bool registrationWasPerformed);
```

### validateModuleSupportsType


```solidity
function validateModuleSupportsType(address moduleAddress, uint256 moduleType) internal view;
```

### getModuleTypes


```solidity
function getModuleTypes(address moduleAddress) public view returns (uint256);
```

### isModuleRegistered


```solidity
function isModuleRegistered(address moduleAddress) external view returns (bool);
```

### isModuleRegisteredAs


```solidity
function isModuleRegisteredAs(address moduleAddress, uint256 moduleType) public view returns (bool);
```

### verifyErc20Currency


```solidity
function verifyErc20Currency(address currencyAddress) external returns (bool);
```

### registerErc20Currency


```solidity
function registerErc20Currency(address currencyAddress) public returns (bool registrationWasPerformed);
```

### isErc20CurrencyRegistered


```solidity
function isErc20CurrencyRegistered(address currencyAddress) external view returns (bool);
```

## Events
### ModuleRegistered

```solidity
event ModuleRegistered(address indexed moduleAddress, uint256 indexed moduleType, string metadata, uint256 timestamp);
```

### erc20CurrencyRegistered

```solidity
event erc20CurrencyRegistered(
    address indexed erc20CurrencyAddress, string name, string symbol, uint8 decimals, uint256 timestamp
);
```

## Errors
### NotDiGiModule

```solidity
error NotDiGiModule();
```

### ModuleDoesNotSupportType

```solidity
error ModuleDoesNotSupportType(uint256 moduleType);
```

