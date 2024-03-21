# ImmutableOwnable
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/PermissionlessCreator.sol)


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

