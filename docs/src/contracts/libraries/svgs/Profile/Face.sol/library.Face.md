# Face
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Face.sol)


## Functions
### getFace


```solidity
function getFace(FaceVariants faceVariant, FaceColors faceColor) external pure returns (string memory);
```

### _getStyleTag


```solidity
function _getStyleTag(FaceColors faceColor) internal pure returns (string memory);
```

## Enums
### FaceVariants

```solidity
enum FaceVariants {
    BUBBLEGUM,
    GRIN_TONGUE,
    GRIN,
    LAUGH,
    LOVE,
    OOPS,
    SLEEPY,
    SMILE_TEETH,
    SMILE,
    SMIRK,
    TONGUE,
    WINK,
    WOW_TONGUE,
    WOW
}
```

### FaceColors

```solidity
enum FaceColors {
    NORMAL,
    GOLD
}
```

