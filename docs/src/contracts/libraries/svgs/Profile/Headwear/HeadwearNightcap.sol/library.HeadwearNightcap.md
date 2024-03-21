# HeadwearNightcap
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Headwear/HeadwearNightcap.sol)


## Functions
### getNightcap


```solidity
function getNightcap(NightcapColors nightcapColor)
    internal
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getNightcapStyle


```solidity
function _getNightcapStyle(NightcapColors nightcapColor) internal pure returns (string memory);
```

### _getNightcapColor


```solidity
function _getNightcapColor(NightcapColors nightcapColor) internal pure returns (string memory, string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(NightcapColors nightcapColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### NightcapColors

```solidity
enum NightcapColors {
    GREEN,
    PURPLE,
    BLUE,
    GOLD
}
```

