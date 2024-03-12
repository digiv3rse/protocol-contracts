# DiGiModuleMetadata
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/DiGiModuleMetadata.sol)

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

