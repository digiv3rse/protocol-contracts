# HeadwearGlasses
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Headwear/HeadwearGlasses.sol)


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

