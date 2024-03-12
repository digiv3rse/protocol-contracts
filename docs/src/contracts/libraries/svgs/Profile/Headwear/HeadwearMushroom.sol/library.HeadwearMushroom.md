# HeadwearMushroom
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Headwear/HeadwearMushroom.sol)


## Functions
### getMushroom


```solidity
function getMushroom(MushroomColors mushroomColor)
    external
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getMushroomStyle


```solidity
function _getMushroomStyle(MushroomColors mushroomColor) internal pure returns (string memory);
```

### _getMushroomSparklesColors


```solidity
function _getMushroomSparklesColors(MushroomColors mushroomColor)
    internal
    pure
    returns (string memory, string memory);
```

### _getMushroomColor


```solidity
function _getMushroomColor(MushroomColors mushroomColor) internal pure returns (string memory, string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(MushroomColors mushroomColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### MushroomColors

```solidity
enum MushroomColors {
    GREEN,
    PURPLE,
    BLUE,
    GOLD
}
```

