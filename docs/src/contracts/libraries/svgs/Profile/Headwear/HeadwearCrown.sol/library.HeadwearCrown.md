# HeadwearCrown
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Headwear/HeadwearCrown.sol)


## Functions
### getCrown


```solidity
function getCrown(CrownColors crownColor)
    external
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getCrownStyle


```solidity
function _getCrownStyle(CrownColors crownColor) internal pure returns (string memory);
```

### _getCrownColor


```solidity
function _getCrownColor(CrownColors crownColor) internal pure returns (string memory, string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(CrownColors crownColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### CrownColors

```solidity
enum CrownColors {
    GREEN,
    PURPLE,
    BLUE,
    GOLD
}
```

