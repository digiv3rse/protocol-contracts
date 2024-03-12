# FeeConfig
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/follow/FeeFollowModule.sol)

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

