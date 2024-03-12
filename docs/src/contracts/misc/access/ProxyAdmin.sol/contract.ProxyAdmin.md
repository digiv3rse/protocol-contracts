# ProxyAdmin
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/misc/access/ProxyAdmin.sol)

**Inherits:**
[ControllableByContract](/contracts/misc/access/ControllableByContract.sol/contract.ControllableByContract.md)


## State Variables
### DIGI_HUB_PROXY

```solidity
TransparentUpgradeableProxy public immutable DIGI_HUB_PROXY;
```


### previousImplementation

```solidity
address public previousImplementation;
```


## Functions
### constructor


```solidity
constructor(address digiHubAddress_, address previousImplementation_, address proxyAdminOwner_)
    ControllableByContract(proxyAdminOwner_);
```

### currentImplementation


```solidity
function currentImplementation() external returns (address);
```

### rollbackLastUpgrade

ONLY PROXY ADMIN OWNER              ///


```solidity
function rollbackLastUpgrade() external onlyOwner;
```

### proxy_changeAdmin


```solidity
function proxy_changeAdmin(address newAdmin) external onlyOwner;
```

### proxy_upgrade

ONLY PROXY ADMIN OWNER OR CONTROLLER CONTRACT   ///


```solidity
function proxy_upgrade(address newImplementation) external onlyOwnerOrControllerContract;
```

### proxy_upgradeAndCall


```solidity
function proxy_upgradeAndCall(address newImplementation, bytes calldata data) external onlyOwnerOrControllerContract;
```

