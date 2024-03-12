# ILegacyFeeFollowModule
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/MigrationLib.sol)


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

