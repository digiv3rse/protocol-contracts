# ILegacyFeeFollowModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/MigrationLib.sol)


## Functions
### getProfileData


```solidity
function getProfileData(uint256 profileId) external view returns (ProfileData memory);
```

## Structs
### ProfileData

```solidity
struct ProfileData {
    address currency;
    uint256 amount;
    address recipient;
}
```

