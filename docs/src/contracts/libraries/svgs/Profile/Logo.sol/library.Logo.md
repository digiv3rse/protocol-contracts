# Logo
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/Logo.sol)


## Functions
### getLogo


```solidity
function getLogo(
    LogoVariants logoVariant,
    LogoColors logoColor,
    Body.BodyVariants bodyVariant,
    Body.BodyColors bodyColor
) public pure returns (string memory);
```

### getLogoHoodie


```solidity
function getLogoHoodie(LogoVariants logoVariant, LogoColors logoColor) public pure returns (string memory);
```

### getLogoTshirtTanktop


```solidity
function getLogoTshirtTanktop(LogoVariants logoVariant, LogoColors logoColor) public pure returns (string memory);
```

### getLogoJacket


```solidity
function getLogoJacket(LogoVariants logoVariant, LogoColors logoColor) public pure returns (string memory);
```

### _getLogoColor


```solidity
function _getLogoColor(LogoColors logoColor) internal pure returns (string memory);
```

## Enums
### LogoVariants

```solidity
enum LogoVariants {
    HAPPY,
    HEART,
    DIGI,
    PEACE
}
```

### LogoColors

```solidity
enum LogoColors {
    GREEN,
    PURPLE,
    BLUE,
    LIGHT,
    DARK
}
```

