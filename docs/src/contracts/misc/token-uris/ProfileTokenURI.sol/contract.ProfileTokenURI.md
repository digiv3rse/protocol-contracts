# ProfileTokenURI
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/misc/token-uris/ProfileTokenURI.sol)

**Inherits:**
[IProfileTokenURI](/contracts/interfaces/IProfileTokenURI.sol/interface.IProfileTokenURI.md)


## State Variables
### blockSeed

```solidity
bytes32 public immutable blockSeed;
```


## Functions
### constructor


```solidity
constructor();
```

### getTokenURI


```solidity
function getTokenURI(uint256 profileId, uint256 mintTimestamp) public view override returns (string memory);
```

