# ActionLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/ActionLib.sol)


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

