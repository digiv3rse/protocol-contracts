# ActionRestricted
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/ActionRestricted.sol)

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

