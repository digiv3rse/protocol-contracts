# Head
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Head.sol)


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

