# ActionRestricted
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/ActionRestricted.sol)

**Author:**
DiGi Protocol

This abstract contract adds a public `ACTION_MODULE` immutable field, and `onlyActionModule` modifier,
to inherit from contracts that have functions restricted to be only called by the Action Modules.


## State Variables
### ACTION_MODULE

```solidity
address public immutable ACTION_MODULE;
```


## Functions
### onlyActionModule


```solidity
modifier onlyActionModule();
```

### constructor


```solidity
constructor(address actionModule);
```

