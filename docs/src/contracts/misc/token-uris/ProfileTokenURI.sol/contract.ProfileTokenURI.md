# ProfileTokenURI
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/token-uris/ProfileTokenURI.sol)

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

