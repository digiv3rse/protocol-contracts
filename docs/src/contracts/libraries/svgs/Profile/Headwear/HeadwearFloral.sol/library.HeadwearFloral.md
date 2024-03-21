# HeadwearFloral
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Headwear/HeadwearFloral.sol)


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

