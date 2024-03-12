# HandleSVG
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Handle/HandleSVG.sol)


## State Variables
### MAX_WIDTH

```solidity
uint256 constant MAX_WIDTH = 275;
```


## Functions
### getHandleSVG


```solidity
function getHandleSVG(string memory localName) public pure returns (string memory);
```

### getGoldHandleSVG


```solidity
function getGoldHandleSVG(string memory localName) internal pure returns (string memory);
```

### getBlackHandleSVG


```solidity
function getBlackHandleSVG(string memory localName) internal pure returns (string memory);
```

### getBaseHandleSVG


```solidity
function getBaseHandleSVG(string memory localName, FaceColors baseColor) internal pure returns (string memory);
```

### getBaseColor


```solidity
function getBaseColor(string memory localName) internal pure returns (FaceColors);
```

### getBaseBg


```solidity
function getBaseBg(FaceColors faceColor) internal pure returns (string memory);
```

### getDiGiBaseFace


```solidity
function getDiGiBaseFace(FaceColors faceColor) internal pure returns (string memory);
```

### getTextElement


```solidity
function getTextElement(string memory localName) internal pure returns (string memory);
```

### getBaseFaceColor


```solidity
function getBaseFaceColor(FaceColors faceColor) internal pure returns (string memory);
```

### getBaseGradients


```solidity
function getBaseGradients() internal pure returns (string memory);
```

### getCharWidth


```solidity
function getCharWidth(bytes1 char) internal pure returns (uint256);
```

### getWidthFromFontsize


```solidity
function getWidthFromFontsize(uint256 fontSize) internal pure returns (uint256);
```

### getFontsizeFromWidth10x


```solidity
function getFontsizeFromWidth10x(uint256 width) internal pure returns (uint256);
```

### getTextWidth


```solidity
function getTextWidth(string memory text) internal pure returns (uint256);
```

### getFittingLength


```solidity
function getFittingLength(string memory text, uint256 maxWidth) internal pure returns (uint256);
```

### splitTextToFit


```solidity
function splitTextToFit(string memory text) internal pure returns (string memory, string memory);
```

## Structs
### CharWidth

```solidity
struct CharWidth {
    bytes1 char;
    uint256 width;
}
```

## Enums
### FaceColors

```solidity
enum FaceColors {
    GREEN,
    PEACH,
    PURPLE,
    BLUE,
    GOLD,
    BLACK
}
```

