# HeadwearPlants
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Headwear/HeadwearPlants.sol)


## Functions
### getPlants


```solidity
function getPlants(PlantsColors plantsColor)
    external
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getPlantsStyle


```solidity
function _getPlantsStyle(PlantsColors plantsColor) internal pure returns (string memory);
```

### _getPlantsColor


```solidity
function _getPlantsColor(PlantsColors plantsColor) internal pure returns (string memory, string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(PlantsColors plantsColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### PlantsColors

```solidity
enum PlantsColors {
    GREEN,
    BLUE,
    PURPLE,
    GOLD
}
```

