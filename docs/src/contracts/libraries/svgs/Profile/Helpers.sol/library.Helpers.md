# Helpers
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Helpers.sol)


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

