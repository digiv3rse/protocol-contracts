# IDiGiModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/interfaces/IDiGiModule.sol)

**Inherits:**
[IERC165](/contracts/misc/PermissionlessCreator.sol/interface.IERC165.md)


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

