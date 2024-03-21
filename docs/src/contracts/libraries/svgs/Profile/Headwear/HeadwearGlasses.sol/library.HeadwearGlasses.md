# HeadwearGlasses
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Headwear/HeadwearGlasses.sol)


## Functions
### getGlasses


```solidity
function getGlasses(GlassesColors glassesColor)
    internal
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getGlassesStyle


```solidity
function _getGlassesStyle(GlassesColors glassesColor) internal pure returns (string memory);
```

### _getGlassesColor


```solidity
function _getGlassesColor(GlassesColors glassesColor) internal pure returns (string memory, string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(GlassesColors glassesColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### GlassesColors

```solidity
enum GlassesColors {
    GREEN,
    PURPLE,
    BLUE,
    GOLD
}
```

