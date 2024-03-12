# IModuleRegistry
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/interfaces/IModuleRegistry.sol)


## Functions
### verifyModule


```solidity
function verifyModule(address moduleAddress, uint256 moduleType) external returns (bool);
```

### registerModule


```solidity
function registerModule(address moduleAddress, uint256 moduleType) external returns (bool);
```

### getModuleTypes


```solidity
function getModuleTypes(address moduleAddress) external view returns (uint256);
```

### isModuleRegistered


```solidity
function isModuleRegistered(address moduleAddress) external view returns (bool);
```

### isModuleRegisteredAs


```solidity
function isModuleRegisteredAs(address moduleAddress, uint256 moduleType) external view returns (bool);
```

### verifyErc20Currency


```solidity
function verifyErc20Currency(address currencyAddress) external returns (bool);
```

### registerErc20Currency


```solidity
function registerErc20Currency(address currencyAddress) external returns (bool);
```

### isErc20CurrencyRegistered


```solidity
function isErc20CurrencyRegistered(address currencyAddress) external view returns (bool);
```

## Enums
### ModuleType

```solidity
enum ModuleType {
    __,
    PUBLICATION_ACTION_MODULE,
    REFERENCE_MODULE,
    FOLLOW_MODULE
}
```

