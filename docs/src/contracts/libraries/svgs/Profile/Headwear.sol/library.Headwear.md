# Headwear
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Headwear.sol)


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

