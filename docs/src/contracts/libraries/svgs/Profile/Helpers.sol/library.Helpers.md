# Helpers
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Helpers.sol)


## Functions
### getVariant


```solidity
function getVariant(uint256 seed, ComponentBytes componentByte) internal pure returns (uint8);
```

### getColor


```solidity
function getColor(uint256 seed, ComponentBytes componentByte) internal pure returns (uint8);
```

## Enums
### ComponentBytes

```solidity
enum ComponentBytes {
    BACKGROUND,
    SKIN,
    FACE,
    HEAD,
    BODY,
    HANDS,
    LEGS,
    SHOES,
    LOGO,
    HEADWEAR
}
```

