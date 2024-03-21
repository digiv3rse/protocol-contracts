# DiGiModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/DiGiModule.sol)

**Inherits:**
[IDiGiModule](/contracts/modules/interfaces/IDiGiModule.sol/interface.IDiGiModule.md)


## Functions
### supportsInterface

*for now we check for keccak('DIGI_MODULE');
Override this and add the type(IModuleInterface).interfaceId for corresponding module type*


```solidity
function supportsInterface(bytes4 interfaceID) public pure virtual override returns (bool);
```

