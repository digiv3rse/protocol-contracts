# DiGiModuleMetadata
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/DiGiModuleMetadata.sol)

**Inherits:**
[DiGiModule](/contracts/modules/DiGiModule.sol/abstract.DiGiModule.md), Ownable


## State Variables
### metadataURI

```solidity
string public metadataURI;
```


## Functions
### constructor


```solidity
constructor(address owner_) Ownable;
```

### setModuleMetadataURI


```solidity
function setModuleMetadataURI(string memory _metadataURI) external onlyOwner;
```

### getModuleMetadataURI


```solidity
function getModuleMetadataURI() external view returns (string memory);
```

