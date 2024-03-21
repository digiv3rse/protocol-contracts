# BaseFeeCollectModuleInitData
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/interfaces/IBaseFeeCollectModule.sol)

A struct containing the necessary data to initialize this Base Collect Module.


```solidity
struct BaseFeeCollectModuleInitData {
    uint160 amount;
    uint96 collectLimit;
    address currency;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
    address recipient;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint160`|The collecting cost associated with this publication. 0 for free collect.|
|`collectLimit`|`uint96`|The maximum number of collects for this publication. 0 for no limit.|
|`currency`|`address`|The currency associated with this publication.|
|`referralFee`|`uint16`|The referral fee associated with this publication.|
|`followerOnly`|`bool`|True if only followers of publisher may collect the post.|
|`endTimestamp`|`uint72`|The end timestamp after which collecting is impossible. 0 for no expiry.|
|`recipient`|`address`|Recipient of collect fees.|

