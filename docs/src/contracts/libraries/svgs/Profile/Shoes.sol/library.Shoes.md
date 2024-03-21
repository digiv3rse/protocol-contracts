# Shoes
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Shoes.sol)


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

