# HubRestricted
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/base/HubRestricted.sol)

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

