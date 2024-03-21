# GateParams
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/reference/TokenGatedReferenceModule.sol)

A struct containing the necessary data to execute TokenGated references.


```solidity
struct GateParams {
    address tokenAddress;
    uint256 minThreshold;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`tokenAddress`|`address`|The address of ERC20/ERC721 token used for gating the reference|
|`minThreshold`|`uint256`|The minimum balance threshold of the gated token required to execute a reference|

