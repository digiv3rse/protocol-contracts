# ProfileSVG
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/svgs/Profile/ProfileSVG.sol)


## Functions
### getProfileSVG


```solidity
function getProfileSVG(uint256 profileId, bytes32 blockSeed) public pure returns (string memory, string memory);
```

### _getSVG


```solidity
function _getSVG(ChosenElements memory chosenElements, string memory headwearSvg)
    internal
    pure
    returns (string memory);
```

### _getTraits


```solidity
function _getTraits(ChosenElements memory chosenElements) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Background.BackgroundColors backgroundColor) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Skin.SkinColors skinColor) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Legs.LegColors legColor) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Shoes.ShoeColors shoeColor) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Hands.HandsVariants handsVariant) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Body.BodyVariants bodyVariant) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Body.BodyColors bodyColor) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Logo.LogoVariants logoVariant) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Logo.LogoColors logoColor) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Face.FaceVariants faceVariant) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Headwear.HeadwearVariants headwearVariant) internal pure returns (string memory);
```

### _getTrait


```solidity
function _getTrait(Headwear.HeadwearColors headwearColor) internal pure returns (string memory);
```

### _chooseElements


```solidity
function _chooseElements(uint256 seed, bool isGold)
    internal
    pure
    returns (ChosenElements memory chosenElements, string memory headwearSvg);
```

### _generateSvgElements


```solidity
function _generateSvgElements(ChosenElements memory chosenElements, string memory headwearSvg)
    internal
    pure
    returns (string memory);
```

## Structs
### ChosenElements

```solidity
struct ChosenElements {
    Background.BackgroundColors backgroundColor;
    Skin.SkinColors skinColor;
    Legs.LegColors legColor;
    Shoes.ShoeColors shoeColor;
    Hands.HandsVariants handsVariant;
    Body.BodyVariants bodyVariant;
    Body.BodyColors bodyColor;
    Logo.LogoVariants logoVariant;
    Logo.LogoColors logoColor;
    Head.HeadColors headColor;
    Headwear.HeadwearVariants headwearVariant;
    Headwear.HeadwearColors headwearColor;
    Face.FaceVariants faceVariant;
    bool isGold;
}
```

