# Shoes
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Shoes.sol)


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

