# ActionLib
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/ActionLib.sol)


## Functions
### act


```solidity
function act(
    Types.PublicationActionParams calldata publicationActionParams,
    address transactionExecutor,
    address actorProfileOwner
) external returns (bytes memory);
```

### _isActionEnabled


```solidity
function _isActionEnabled(Types.Publication storage _publication, address actionModuleAddress)
    private
    view
    returns (bool);
```

