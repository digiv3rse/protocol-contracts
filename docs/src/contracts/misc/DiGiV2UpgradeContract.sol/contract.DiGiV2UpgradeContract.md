# DiGiV2UpgradeContract
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/misc/DiGiV2UpgradeContract.sol)

**Inherits:**
[ImmutableOwnable](/contracts/misc/ImmutableOwnable.sol/contract.ImmutableOwnable.md)


## State Variables
### PROXY_ADMIN

```solidity
ProxyAdmin public immutable PROXY_ADMIN;
```


### GOVERNANCE

```solidity
Governance public immutable GOVERNANCE;
```


### newImplementation

```solidity
address public immutable newImplementation;
```


### TREASURY

```solidity
address public immutable TREASURY;
```


### TREASURY_FEE

```solidity
uint16 public immutable TREASURY_FEE;
```


## Functions
### constructor


```solidity
constructor(
    address proxyAdminAddress,
    address governanceAddress,
    address owner,
    address digiHub,
    address newImplementationAddress,
    address treasury,
    uint16 treasuryFee
) ImmutableOwnable(owner, digiHub);
```

### executeDiGiV2Upgrade


```solidity
function executeDiGiV2Upgrade() external onlyOwner;
```

### _upgrade


```solidity
function _upgrade() internal;
```

