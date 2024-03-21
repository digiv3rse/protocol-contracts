# ActionRestricted
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/ActionRestricted.sol)

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

