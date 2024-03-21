# ERC2981CollectionRoyalties
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/base/ERC2981CollectionRoyalties.sol)

**Inherits:**
IERC2981


## State Variables
### BASIS_POINTS

```solidity
uint16 internal constant BASIS_POINTS = 10000;
```


### INTERFACE_ID_ERC2981

```solidity
bytes4 internal constant INTERFACE_ID_ERC2981 = 0x2a55205a;
```


## Functions
### supportsInterface

*See [IERC165-supportsInterface](/contracts/base/DiGiProfiles.sol/abstract.DiGiProfiles.md#supportsinterface).*


```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool);
```

### setRoyalty

Changes the royalty percentage for secondary sales.


```solidity
function setRoyalty(uint256 royaltiesInBasisPoints) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`royaltiesInBasisPoints`|`uint256`|The royalty percentage (measured in basis points).|


### royaltyInfo

Called with the sale price to determine how much royalty is owed and to whom.


```solidity
function royaltyInfo(uint256 tokenId, uint256 salePrice) external view returns (address, uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the token queried for royalty information.|
|`salePrice`|`uint256`|The sale price of the token specified.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|A tuple with the address that should receive the royalties and the royalty payment amount for the given sale price.|
|`<none>`|`uint256`||


### _setRoyalty


```solidity
function _setRoyalty(uint256 royaltiesInBasisPoints) internal virtual;
```

### _getRoyaltyAmount


```solidity
function _getRoyaltyAmount(uint256, uint256 salePrice) internal view virtual returns (uint256);
```

### _storeRoyaltiesInBasisPoints


```solidity
function _storeRoyaltiesInBasisPoints(uint256 royaltiesInBasisPoints) internal virtual;
```

### _loadRoyaltiesInBasisPoints


```solidity
function _loadRoyaltiesInBasisPoints() internal view virtual returns (uint256);
```

### _beforeRoyaltiesSet


```solidity
function _beforeRoyaltiesSet(uint256 royaltiesInBasisPoints) internal view virtual;
```

### _getRoyaltiesInBasisPointsSlot


```solidity
function _getRoyaltiesInBasisPointsSlot() internal view virtual returns (uint256);
```

### _getReceiver


```solidity
function _getReceiver(uint256 tokenId) internal view virtual returns (address);
```

