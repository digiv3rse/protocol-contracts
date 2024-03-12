# BaseProfilePublicationData
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/interfaces/IBaseFeeCollectModule.sol)

A struct containing the necessary data to execute collect actions on a publication.


```solidity
struct BaseProfilePublicationData {
    uint160 amount;
    uint96 collectLimit;
    address currency;
    uint96 currentCollects;
    address recipient;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint160`|The collecting cost associated with this publication. 0 for free collect.|
|`collectLimit`|`uint96`|The maximum number of collects for this publication. 0 for no limit.|
|`currency`|`address`|The currency associated with this publication.|
|`currentCollects`|`uint96`|The current number of collects for this publication.|
|`recipient`|`address`|Recipient of collect fees.|
|`referralFee`|`uint16`|The referral fee associated with this publication.|
|`followerOnly`|`bool`|True if only followers of publisher may collect the post.|
|`endTimestamp`|`uint72`|The end timestamp after which collecting is impossible. 0 for no expiry.|

