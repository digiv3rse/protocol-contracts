# HeadwearHat
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Headwear/HeadwearHat.sol)


## Functions
### getHat


```solidity
function getHat(HatColors hatColor)
    internal
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getHatStyle


```solidity
function _getHatStyle(HatColors hatColor) internal pure returns (string memory);
```

### _getHatColor


```solidity
function _getHatColor(HatColors hatColor) internal pure returns (string memory, string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(HatColors hatColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### HatColors

```solidity
enum HatColors {
    GREEN,
    LIGHT,
    DARK,
    BLUE,
    PURPLE,
    GOLD
}
```

