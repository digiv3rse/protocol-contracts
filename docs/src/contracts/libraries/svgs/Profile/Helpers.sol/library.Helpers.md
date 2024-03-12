# Helpers
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Helpers.sol)


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

