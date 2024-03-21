# HeadwearBeanie
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Headwear/HeadwearBeanie.sol)


## Functions
### getBeanie


```solidity
function getBeanie(BeanieColors beanieColor)
    external
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getBeanieStyle


```solidity
function _getBeanieStyle(BeanieColors beanieColor) internal pure returns (string memory);
```

### _getBeanieColor


```solidity
function _getBeanieColor(BeanieColors beanieColor) internal pure returns (string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(BeanieColors beanieColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### BeanieColors

```solidity
enum BeanieColors {
    GREEN,
    LIGHT,
    DARK,
    PURPLE,
    GOLD
}
```

