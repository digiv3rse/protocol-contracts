# DiGiModuleMetadata
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/DiGiModuleMetadata.sol)

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

