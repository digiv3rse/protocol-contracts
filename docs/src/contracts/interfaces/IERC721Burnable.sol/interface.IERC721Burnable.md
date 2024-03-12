# IERC721Burnable
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/interfaces/IERC721Burnable.sol)

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


