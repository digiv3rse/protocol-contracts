# HeadwearSparkles
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Headwear/HeadwearSparkles.sol)


## Functions
### getSparkles


```solidity
function getSparkles(SparklesColors sparklesColor)
    external
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getSparklesStyle


```solidity
function _getSparklesStyle(SparklesColors sparklesColor) internal pure returns (string memory);
```

### _getSparklesColor


```solidity
function _getSparklesColor(SparklesColors sparklesColor) internal pure returns (string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(SparklesColors sparklesColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### SparklesColors

```solidity
enum SparklesColors {
    LIGHT,
    GOLD
}
```

