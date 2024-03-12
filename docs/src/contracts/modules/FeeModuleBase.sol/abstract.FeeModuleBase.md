# FeeModuleBase
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/FeeModuleBase.sol)

**Author:**
DiGi Protocol

This is an abstract contract to be inherited from by modules that require basic fee functionality.
It contains getters for module globals parameters as well as a validation function to check expected data.


## State Variables
### BPS_MAX

```solidity
uint16 internal constant BPS_MAX = 10000;
```


### HUB

```solidity
IDiGiHub private immutable HUB;
```


### MODULE_REGISTRY

```solidity
IModuleRegistry public immutable MODULE_REGISTRY;
```


## Functions
### constructor


```solidity
constructor(address hub, address moduleRegistry);
```

### _verifyErc20Currency


```solidity
function _verifyErc20Currency(address currency) internal;
```

### _treasuryData


```solidity
function _treasuryData() internal view returns (address, uint16);
```

### _validateDataIsExpected


```solidity
function _validateDataIsExpected(bytes calldata data, address currency, uint256 amount) internal pure;
```

