# IDiGiProfiles
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/PermissionlessCreator.sol)

**Inherits:**
[IDiGiERC721](/contracts/misc/PermissionlessCreator.sol/interface.IDiGiERC721.md)


## Functions
### DANGER__disableTokenGuardian

DANGER: Triggers disabling the profile protection mechanism for the msg.sender, which will allow
transfers or approvals over profiles held by it.
Disabling the mechanism will have a timelock before it becomes effective, allowing the owner to re-enable
the protection back in case of being under attack.
The protection layer only applies to EOA wallets.


```solidity
function DANGER__disableTokenGuardian() external;
```

### enableTokenGuardian

Enables back the profile protection mechanism for the msg.sender, preventing profile transfers or
approvals (except when revoking them).
The protection layer only applies to EOA wallets.


```solidity
function enableTokenGuardian() external;
```

### getTokenGuardianDisablingTimestamp

Returns the timestamp at which the Token Guardian will become effectively disabled.


```solidity
function getTokenGuardianDisablingTimestamp(address wallet) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`wallet`|`address`|The address to check the timestamp for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The timestamp at which the Token Guardian will become effectively disabled. Zero if enabled.|


### transferFromKeepingDelegates

allows transferring of profile but keeping the delegate settings


```solidity
function transferFromKeepingDelegates(address from, address to, uint256 tokenId) external;
```

