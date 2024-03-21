# ControllableByContract
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/misc/access/ControllableByContract.sol)

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

