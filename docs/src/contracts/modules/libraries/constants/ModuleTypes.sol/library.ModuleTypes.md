# ModuleTypes
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/libraries/constants/ModuleTypes.sol)

**Author:**
DiGi Protocol

A standard library of data types used throughout the DiGi Protocol modules.


## Structs
### ProcessCollectParams

```solidity
struct ProcessCollectParams {
    uint256 publicationCollectedProfileId;
    uint256 publicationCollectedId;
    uint256 collectorProfileId;
    address collectorProfileOwner;
    address transactionExecutor;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    Types.PublicationType[] referrerPubTypes;
    bytes data;
}
```

