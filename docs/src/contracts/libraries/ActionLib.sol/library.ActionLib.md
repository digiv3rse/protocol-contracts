# ActionLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/ActionLib.sol)


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

