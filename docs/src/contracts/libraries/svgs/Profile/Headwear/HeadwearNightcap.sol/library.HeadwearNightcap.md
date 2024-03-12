# HeadwearNightcap
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Headwear/HeadwearNightcap.sol)


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

