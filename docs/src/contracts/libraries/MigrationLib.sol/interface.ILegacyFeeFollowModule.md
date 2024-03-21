# ILegacyFeeFollowModule
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/MigrationLib.sol)


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

