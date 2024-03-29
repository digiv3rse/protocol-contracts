# Body
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Body.sol)


## Functions
### getBody


```solidity
function getBody(
    BodyVariants bodyVariant,
    BodyColors bodyColor,
    Hands.HandsVariants handsVariant,
    Hands.HandsColors handsColor
) public pure returns (string memory);
```

### _getBody


```solidity
function _getBody(BodyVariants bodyVariant, Hands.HandsVariants handsVariant) internal pure returns (string memory);
```

### _getStyleTag


```solidity
function _getStyleTag(BodyVariants bodyVariant, BodyColors bodyColor, Hands.HandsColors handsColor)
    internal
    pure
    returns (string memory);
```

### getPrimaryBodyColor


```solidity
function getPrimaryBodyColor(BodyVariants bodyVariant, BodyColors bodyColor) public pure returns (string memory);
```

### getSecondaryBodyColor


```solidity
function getSecondaryBodyColor(BodyColors bodyColor) public pure returns (string memory);
```

## Enums
### BodyVariants

```solidity
enum BodyVariants {
    HOODIE,
    JACKET,
    TANKTOP,
    TSHIRT
}
```

### BodyColors

```solidity
enum BodyColors {
    GREEN,
    LIGHT,
    DARK,
    PURPLE,
    BLUE
}
```

