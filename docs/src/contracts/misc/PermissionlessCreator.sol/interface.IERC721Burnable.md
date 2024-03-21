# IERC721Burnable
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/misc/PermissionlessCreator.sol)

**Author:**
DiGi Protocol

Extension of ERC-721 including a function that allows the token to be burned.


## Functions
### burn

Burns an NFT, removing it from circulation and essentially destroying it.


```solidity
function burn(uint256 tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The token ID of the token to burn.|


