# Head
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Head.sol)


## Functions
### getHead


```solidity
function getHead(HeadColors headColor) external pure returns (string memory);
```

### _getHeadColorHex


```solidity
function _getHeadColorHex(HeadColors headColor) internal pure returns (string memory);
```

## Enums
### HeadColors

```solidity
enum HeadColors {
    GREEN,
    PURPLE,
    BLUE,
    GOLD
}
```

