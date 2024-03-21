# HeadwearFloral
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Headwear/HeadwearFloral.sol)


## Functions
### getFloral


```solidity
function getFloral(FloralColors floralColor)
    internal
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getFloralStyle


```solidity
function _getFloralStyle(FloralColors floralColor) internal pure returns (string memory);
```

### _getFloralColor


```solidity
function _getFloralColor(FloralColors floralColor) internal pure returns (string memory, string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(FloralColors floralColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### FloralColors

```solidity
enum FloralColors {
    GREEN,
    PURPLE,
    BLUE,
    GOLD
}
```

