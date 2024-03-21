# IERC721Metadata
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/PermissionlessCreator.sol)

**Inherits:**
[IERC721](/contracts/misc/PermissionlessCreator.sol/interface.IERC721.md)

*See https://eips.ethereum.org/EIPS/eip-721*


## Functions
### name

*Returns the token collection name.*


```solidity
function name() external view returns (string memory);
```

### symbol

*Returns the token collection symbol.*


```solidity
function symbol() external view returns (string memory);
```

### tokenURI

*Returns the Uniform Resource Identifier (URI) for `tokenId` token.*


```solidity
function tokenURI(uint256 tokenId) external view returns (string memory);
```

