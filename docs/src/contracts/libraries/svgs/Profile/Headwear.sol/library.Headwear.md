# Headwear
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Headwear.sol)


## Functions
### getHeadwear


```solidity
function getHeadwear(uint256 seed, bool isGold) public pure returns (string memory, HeadwearVariants, HeadwearColors);
```

## Enums
### HeadwearVariants

```solidity
enum HeadwearVariants {
    NONE,
    BEANIE,
    HAT,
    LEAFS,
    PLANTS,
    SPARKLES,
    CROWN,
    FLORAL,
    GLASSES,
    MUSHROOM,
    NIGHTCAP,
    PARTYHAT,
    ICECREAM
}
```

### HeadwearColors

```solidity
enum HeadwearColors {
    NONE,
    GREEN,
    LIGHT,
    DARK,
    PURPLE,
    BLUE,
    GOLD
}
```

