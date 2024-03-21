# DiGiSeaDropCollection
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/act/seadrop/DiGiSeaDropCollection.sol)

**Inherits:**
ERC721SeaDropCloneable


## State Variables
### ROYALTIES_BPS

```solidity
uint16 private constant ROYALTIES_BPS = 1_000;
```


### HUB

```solidity
address immutable HUB;
```


### SEADROP_ACTION_MODULE

```solidity
address immutable SEADROP_ACTION_MODULE;
```


### DEFAULT_SEADROP

```solidity
address immutable DEFAULT_SEADROP;
```


## Functions
### onlySeaDropActionModule


```solidity
modifier onlySeaDropActionModule();
```

### constructor


```solidity
constructor(address digiHub, address seaDropActionModule, address defaultSeaDrop);
```

### initialize


```solidity
function initialize(
    address owner,
    string calldata name,
    string calldata symbol,
    address[] calldata allowedSeaDrops,
    MultiConfigureStruct calldata config
) external onlySeaDropActionModule;
```

### _validateInitializationData


```solidity
function _validateInitializationData(address[] calldata allowedSeaDrops, MultiConfigureStruct calldata config)
    internal
    view;
```

### updateAllowedSeaDrop

Update the allowed SeaDrop contracts.
Only the owner or administrator can use this function.


```solidity
function updateAllowedSeaDrop(address[] calldata allowedSeaDrop) external virtual override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`allowedSeaDrop`|`address[]`|The allowed SeaDrop addresses.|


### updatePublicDrop

Update the public drop data for this NFT contract on SeaDrop.
Only the owner can use this function.


```solidity
function updatePublicDrop(address seaDropImpl, PublicDrop calldata publicDrop) external virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`seaDropImpl`|`address`|The allowed SeaDrop contract.|
|`publicDrop`|`PublicDrop`| The public drop data.|


### updateAllowedFeeRecipient

Update the allowed fee recipient for this NFT contract
on SeaDrop.
Only the owner can set the allowed fee recipient.


```solidity
function updateAllowedFeeRecipient(address seaDropImpl, address feeRecipient, bool allowed) external virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`seaDropImpl`|`address`| The allowed SeaDrop contract.|
|`feeRecipient`|`address`|The new fee recipient.|
|`allowed`|`bool`|     If the fee recipient is allowed.|


### updatePayer

Update the allowed payers for this NFT contract on SeaDrop.
Only the owner can use this function.


```solidity
function updatePayer(address seaDropImpl, address payer, bool allowed) external virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`seaDropImpl`|`address`|The allowed SeaDrop contract.|
|`payer`|`address`|      The payer to update.|
|`allowed`|`bool`|    Whether the payer is allowed.|


## Errors
### OnlySeaDropActionModule

```solidity
error OnlySeaDropActionModule();
```

### FeesDoNotCoverDiGiTreasury

```solidity
error FeesDoNotCoverDiGiTreasury();
```

### InvalidParams

```solidity
error InvalidParams();
```

