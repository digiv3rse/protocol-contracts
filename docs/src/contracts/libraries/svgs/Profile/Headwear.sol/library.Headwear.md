# Headwear
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Headwear.sol)


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

