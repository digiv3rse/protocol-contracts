# IDiGiModule
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/interfaces/IDiGiModule.sol)

**Inherits:**
IERC165


## Functions
### supportsInterface

*for now we check for keccak('DIGI_MODULE');
Override this and add the type(IModuleInterface).interfaceId for corresponding module type*


```solidity
function supportsInterface(bytes4 interfaceID) external view returns (bool);
```

### getModuleMetadataURI

Human-readable description of the module


```solidity
function getModuleMetadataURI() external view returns (string memory);
```

