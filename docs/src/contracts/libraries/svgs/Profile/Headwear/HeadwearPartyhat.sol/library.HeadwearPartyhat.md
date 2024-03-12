# HeadwearPartyhat
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/svgs/Profile/Headwear/HeadwearPartyhat.sol)


## Functions
### getPartyhat


```solidity
function getPartyhat(PartyhatColors partyhatColor)
    internal
    pure
    returns (string memory, Headwear.HeadwearVariants, Headwear.HeadwearColors);
```

### _getPartyhatStyle


```solidity
function _getPartyhatStyle(PartyhatColors partyhatColor) internal pure returns (string memory);
```

### _getPartyhatColor


```solidity
function _getPartyhatColor(PartyhatColors partyhatColor) internal pure returns (string memory, string memory);
```

### _getHeadwearColor


```solidity
function _getHeadwearColor(PartyhatColors partyhatColor) internal pure returns (Headwear.HeadwearColors);
```

## Enums
### PartyhatColors

```solidity
enum PartyhatColors {
    GREEN,
    PURPLE,
    BLUE,
    GOLD
}
```

