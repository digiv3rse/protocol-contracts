# DiGiModule
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/DiGiModule.sol)

**Inherits:**
[IDiGiModule](/contracts/modules/interfaces/IDiGiModule.sol/interface.IDiGiModule.md)


## Functions
### supportsInterface

*for now we check for keccak('DIGI_MODULE');
Override this and add the type(IModuleInterface).interfaceId for corresponding module type*


```solidity
function supportsInterface(bytes4 interfaceID) public pure virtual override returns (bool);
```

