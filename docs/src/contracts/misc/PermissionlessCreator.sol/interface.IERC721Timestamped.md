# IERC721Timestamped
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/PermissionlessCreator.sol)

**Author:**
DiGi Protocol

Extension of ERC-721 including a struct for token data, which contains the owner and the mint timestamp, as
well as their associated getters.


## Functions
### mintTimestampOf

Returns the mint timestamp associated with a given NFT.


```solidity
function mintTimestampOf(uint256 tokenId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The token ID of the NFT to query the mint timestamp for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 Mint timestamp, this is stored as a uint96 but returned as a uint256 to reduce unnecessary padding.|


### tokenDataOf

Returns the token data associated with a given NFT. This allows fetching the token owner and
mint timestamp in a single call.


```solidity
function tokenDataOf(uint256 tokenId) external view returns (Types.TokenData memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The token ID of the NFT to query the token data for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Types.TokenData`|TokenData A struct containing both the owner address and the mint timestamp.|


### exists

Returns whether a token with the given token ID exists.


```solidity
function exists(uint256 tokenId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The token ID of the NFT to check existence for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the token exists.|


### totalSupply

Returns the amount of tokens in circulation.


```solidity
function totalSupply() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The current total supply of tokens.|


