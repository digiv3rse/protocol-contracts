# ImmutableOwnable
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/misc/ImmutableOwnable.sol)


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

