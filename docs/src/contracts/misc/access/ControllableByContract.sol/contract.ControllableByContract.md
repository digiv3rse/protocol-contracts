# ControllableByContract
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/misc/access/ControllableByContract.sol)

**Inherits:**
Ownable


## State Variables
### controllerContract

```solidity
address public controllerContract;
```


## Functions
### onlyOwnerOrControllerContract


```solidity
modifier onlyOwnerOrControllerContract();
```

### constructor


```solidity
constructor(address owner_) Ownable;
```

### clearControllerContract


```solidity
function clearControllerContract() external onlyOwnerOrControllerContract;
```

### setControllerContract


```solidity
function setControllerContract(address newControllerContract) external onlyOwner;
```

## Events
### ControllerContractUpdated

```solidity
event ControllerContractUpdated(address previousControllerContract, address newControllerContract);
```

## Errors
### Unauthorized

```solidity
error Unauthorized();
```

