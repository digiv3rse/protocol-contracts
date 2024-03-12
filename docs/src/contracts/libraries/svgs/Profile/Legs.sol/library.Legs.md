# Legs
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Legs.sol)


## Functions
### getLegs


```solidity
function getLegs(LegColors legColor) external pure returns (string memory);
```

### _getLegColorHex


```solidity
function _getLegColorHex(LegColors legColor) internal pure returns (string memory, string memory);
```

## Enums
### LegColors

```solidity
enum LegColors {
    GREEN,
    DARK,
    LIGHT
}
```

