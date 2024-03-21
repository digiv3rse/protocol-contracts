# Legs
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Legs.sol)


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

