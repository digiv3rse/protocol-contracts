# VersionedInitializable
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/base/upgradeability/VersionedInitializable.sol)

**Author:**
DiGi Protocol, inspired by Aave's implementation, which is in turn inspired by OpenZeppelin's
Initializable contract

*Helper contract to implement initializer functions. To use it, replace
the constructor with a function that has the `initializer` modifier.
WARNING: Unlike constructors, initializer functions must be manually
invoked. This applies both to deploying an Initializable contract, as well
as extending an Initializable contract via inheritance.
WARNING: When used with inheritance, manual care must be taken to not invoke
a parent initializer twice, or ensure that all initializers are idempotent,
because this is not dealt with automatically as with constructors.
This is slightly modified from [Aave's version.](https://github.com/aave/protocol-v2/blob/6a503eb0a897124d8b9d126c915ffdf3e88343a9/contracts/protocol/libraries/aave-upgradeability/VersionedInitializable.sol)*


## State Variables
### originalImpl

```solidity
address private immutable originalImpl;
```


## Functions
### initializer

*Modifier to use in the initializer function of a contract.*


```solidity
modifier initializer();
```

### constructor


```solidity
constructor();
```

### getRevision

*returns the revision number of the contract
Needs to be defined in the inherited class as a constant.*


```solidity
function getRevision() internal pure virtual returns (uint256);
```

