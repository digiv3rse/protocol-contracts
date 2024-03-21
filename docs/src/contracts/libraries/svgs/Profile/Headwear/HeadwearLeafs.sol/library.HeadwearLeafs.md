# HeadwearLeafs
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Headwear/HeadwearLeafs.sol)


## Functions
### getLeafs


```solidity
function getLeafs(LeafsColors leafsColor)
    internal
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getLeafsStyle


```solidity
function _getLeafsStyle(LeafsColors leafsColor) internal pure returns (string memory);
```

### _getLeafsColor


```solidity
function _getLeafsColor(LeafsColors leafsColor) internal pure returns (string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(LeafsColors leafsColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### LeafsColors

```solidity
enum LeafsColors {
    GREEN,
    BLUE,
    PURPLE,
    GOLD
}
```

