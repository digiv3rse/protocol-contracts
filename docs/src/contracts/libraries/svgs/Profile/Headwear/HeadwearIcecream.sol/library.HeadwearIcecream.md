# HeadwearIcecream
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Headwear/HeadwearIcecream.sol)


## Functions
### getIcecream


```solidity
function getIcecream(IcecreamColors iceCreamColor)
    external
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getIcecreamColor


```solidity
function _getIcecreamColor(IcecreamColors icecreamColor) internal pure returns (string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(IcecreamColors icecreamColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### IcecreamColors

```solidity
enum IcecreamColors {
    GREEN,
    BLUE,
    PURPLE,
    GOLD
}
```

