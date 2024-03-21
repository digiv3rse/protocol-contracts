# HeadwearLeafs
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Headwear/HeadwearLeafs.sol)


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

