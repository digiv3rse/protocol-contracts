# MultirecipientFeeCollectModuleInitData
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/act/collect/MultirecipientFeeCollectModule.sol)

A struct containing the necessary data to initialize MultirecipientFeeCollectModule.


```solidity
struct MultirecipientFeeCollectModuleInitData {
    uint160 amount;
    uint96 collectLimit;
    address currency;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
    RecipientData[] recipients;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint160`|The collecting cost associated with this publication. Cannot be 0.|
|`collectLimit`|`uint96`|The maximum number of collects for this publication. 0 for no limit.|
|`currency`|`address`|The currency associated with this publication.|
|`referralFee`|`uint16`|The referral fee associated with this publication.|
|`followerOnly`|`bool`|True if only followers of publisher may collect the post.|
|`endTimestamp`|`uint72`|The end timestamp after which collecting is impossible. 0 for no expiry.|
|`recipients`|`RecipientData[]`|Array of RecipientData items to split collect fees across multiple recipients.|

