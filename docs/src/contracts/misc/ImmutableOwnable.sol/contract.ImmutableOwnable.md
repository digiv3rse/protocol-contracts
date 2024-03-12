# ImmutableOwnable
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/misc/ImmutableOwnable.sol)


## State Variables
### OWNER

```solidity
address public immutable OWNER;
```


### DIGI_HUB

```solidity
address public immutable DIGI_HUB;
```


## Functions
### onlyOwner


```solidity
modifier onlyOwner();
```

### onlyOwnerOrHub


```solidity
modifier onlyOwnerOrHub();
```

### constructor


```solidity
constructor(address owner, address digiHub);
```

## Errors
### OnlyOwner

```solidity
error OnlyOwner();
```

### OnlyOwnerOrHub

```solidity
error OnlyOwnerOrHub();
```

