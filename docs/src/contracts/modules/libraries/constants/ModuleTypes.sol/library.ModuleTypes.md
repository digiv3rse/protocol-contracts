# ModuleTypes
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/libraries/constants/ModuleTypes.sol)

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

