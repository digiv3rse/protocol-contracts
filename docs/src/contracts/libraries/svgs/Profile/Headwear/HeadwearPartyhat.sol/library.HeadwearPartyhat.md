# HeadwearPartyhat
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/svgs/Profile/Headwear/HeadwearPartyhat.sol)


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

