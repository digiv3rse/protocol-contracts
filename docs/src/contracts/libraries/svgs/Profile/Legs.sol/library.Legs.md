# Legs
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Legs.sol)


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

