# DiGiModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/DiGiModule.sol)

**Inherits:**
[IDiGiModule](/contracts/modules/interfaces/IDiGiModule.sol/interface.IDiGiModule.md)


## Functions
### supportsInterface

*for now we check for keccak('DIGI_MODULE');
Override this and add the type(IModuleInterface).interfaceId for corresponding module type*


```solidity
function supportsInterface(bytes4 interfaceID) public pure virtual override returns (bool);
```

