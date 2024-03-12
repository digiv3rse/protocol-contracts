# HubRestricted
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/base/HubRestricted.sol)

**Author:**
DiGi Protocol

This abstract contract adds a public `HUB` immutable field, as well as an `onlyHub` modifier,
to inherit from contracts that have functions restricted to be only called by the DiGi hub.


## State Variables
### HUB

```solidity
address public immutable HUB;
```


## Functions
### onlyHub


```solidity
modifier onlyHub();
```

### constructor


```solidity
constructor(address hub);
```
