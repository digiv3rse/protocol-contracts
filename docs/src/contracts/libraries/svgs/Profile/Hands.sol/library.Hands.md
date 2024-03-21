# Hands
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Hands.sol)


## Functions
### getHands


```solidity
function getHands(
    HandsVariants handsVariant,
    HandsColors handsColor,
    Body.BodyVariants bodyVariant,
    Body.BodyColors bodyColor
) public pure returns (string memory);
```

### _getHandsElement


```solidity
function _getHandsElement(HandsVariants handsVariant, Body.BodyVariants bodyVariant)
    internal
    pure
    returns (string memory);
```

### _getRightHand


```solidity
function _getRightHand(Body.BodyVariants bodyVariant) internal pure returns (string memory);
```

### _getLeftHand


```solidity
function _getLeftHand(Body.BodyVariants bodyVariant) internal pure returns (string memory);
```

### _getHandsStyle


```solidity
function _getHandsStyle(HandsColors handsColor, Body.BodyVariants bodyVariant, Body.BodyColors bodyColor)
    internal
    pure
    returns (string memory);
```

### _getArmColor


```solidity
function _getArmColor(HandsColors handsColor, Body.BodyVariants bodyVariant, Body.BodyColors bodyColor)
    internal
    pure
    returns (string memory);
```

## Enums
### HandsVariants

```solidity
enum HandsVariants {
    HANDSDOWN,
    PEACEDOUBLE,
    PEACESINGLE
}
```

### HandsColors

```solidity
enum HandsColors {
    GREEN,
    PURPLE,
    BLUE,
    GOLD
}
```

