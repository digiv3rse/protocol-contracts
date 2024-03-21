# HeadwearIcecream
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Headwear/HeadwearIcecream.sol)


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

