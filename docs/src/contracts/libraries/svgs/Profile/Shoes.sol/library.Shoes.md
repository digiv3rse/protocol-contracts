# Shoes
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Shoes.sol)


## Functions
### getShoes


```solidity
function getShoes(ShoeColors shoeColor) external pure returns (string memory);
```

### _getShoeColorHex


```solidity
function _getShoeColorHex(ShoeColors shoeColor) internal pure returns (string memory, string memory);
```

## Enums
### ShoeColors

```solidity
enum ShoeColors {
    GREEN,
    DARK,
    LIGHT
}
```

