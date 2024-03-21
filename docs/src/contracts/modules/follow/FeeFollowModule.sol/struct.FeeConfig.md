# FeeConfig
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/follow/FeeFollowModule.sol)

A struct containing the necessary data to execute follow actions on a given profile.


```solidity
struct FeeConfig {
    address currency;
    uint256 amount;
    address recipient;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`currency`|`address`|The currency associated with this profile.|
|`amount`|`uint256`|The following cost associated with this profile.|
|`recipient`|`address`|The recipient address associated with this profile.|

