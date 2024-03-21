# ProfileCreationProxy
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/ProfileCreationProxy.sol)

**Inherits:**
[ImmutableOwnable](/contracts/misc/ImmutableOwnable.sol/contract.ImmutableOwnable.md)

**Author:**
DiGi Protocol

This is an ownable proxy contract that enforces ".digi" handle suffixes at profile creation.
Only the owner can create profiles.


## State Variables
### DIGI_HANDLES

```solidity
IDiGiHandles immutable DIGI_HANDLES;
```


### TOKEN_HANDLE_REGISTRY

```solidity
ITokenHandleRegistry immutable TOKEN_HANDLE_REGISTRY;
```


## Functions
### constructor


```solidity
constructor(address owner, address hub, address digiHandles, address tokenHandleRegistry)
    ImmutableOwnable(owner, hub);
```

### proxyCreateProfile


```solidity
function proxyCreateProfile(Types.CreateProfileParams calldata createProfileParams)
    external
    onlyOwner
    returns (uint256);
```

### proxyCreateProfileWithHandle


```solidity
function proxyCreateProfileWithHandle(Types.CreateProfileParams memory createProfileParams, string calldata handle)
    external
    onlyOwner
    returns (uint256, uint256);
```

### proxyCreateHandle


```solidity
function proxyCreateHandle(address to, string calldata handle) external onlyOwner returns (uint256);
```

## Errors
### ProfileAlreadyExists

```solidity
error ProfileAlreadyExists();
```

