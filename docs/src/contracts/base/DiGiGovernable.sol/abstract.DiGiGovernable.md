# DiGiGovernable
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/base/DiGiGovernable.sol)

**Inherits:**
[IDiGiGovernable](/contracts/misc/PermissionlessCreator.sol/interface.IDiGiGovernable.md)


## Functions
### onlyGov

*This modifier reverts if the caller is not the configured governance address.*


```solidity
modifier onlyGov();
```

### setGovernance

GOV FUNCTIONS      ///


```solidity
function setGovernance(address newGovernance) external override onlyGov;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newGovernance`|`address`|The new governance address to set.|


### setEmergencyAdmin

Sets the emergency admin, which is a permissioned role able to set the protocol state.


```solidity
function setEmergencyAdmin(address newEmergencyAdmin) external override onlyGov;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newEmergencyAdmin`|`address`|The new emergency admin address to set.|


### setState

Sets the protocol state to either a global pause, a publishing pause or an unpaused state.


```solidity
function setState(Types.ProtocolState newState) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newState`|`Types.ProtocolState`|The state to set. It can be one of the following: - Unpaused: The protocol is fully operational. - PublishingPaused: The protocol is paused for publishing, but it is still operational for others operations. - Paused: The protocol is paused for all operations.|


### setTreasury

Sets the treasury address.


```solidity
function setTreasury(address newTreasury) external override onlyGov;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newTreasury`|`address`|The new treasury address to set.|


### setTreasuryFee

Sets the treasury fee.


```solidity
function setTreasuryFee(uint16 newTreasuryFee) external override onlyGov;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newTreasuryFee`|`uint16`|The new treasury fee to set.|


### whitelistProfileCreator

Adds or removes a profile creator from the whitelist.


```solidity
function whitelistProfileCreator(address profileCreator, bool whitelist) external override onlyGov;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileCreator`|`address`|The profile creator address to add or remove from the whitelist.|
|`whitelist`|`bool`|Whether or not the profile creator should be whitelisted.|


### setProfileTokenURIContract


```solidity
function setProfileTokenURIContract(address profileTokenURIContract) external override onlyGov;
```

### setFollowTokenURIContract


```solidity
function setFollowTokenURIContract(address followTokenURIContract) external override onlyGov;
```

### getGovernance

EXTERNAL VIEW FUNCTIONS      ///


```solidity
function getGovernance() external view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the currently configured governance.|


### getProfileTokenURIContract


```solidity
function getProfileTokenURIContract() external view override returns (address);
```

### getFollowTokenURIContract


```solidity
function getFollowTokenURIContract() external view override returns (address);
```

### getState

Returns the current protocol state.


```solidity
function getState() external view override returns (Types.ProtocolState);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Types.ProtocolState`|ProtocolState The Protocol state, an enum, where: 0: Unpaused 1: PublishingPaused 2: Paused|


### isProfileCreatorWhitelisted

Returns whether or not a profile creator is whitelisted.


```solidity
function isProfileCreatorWhitelisted(address profileCreator) external view override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileCreator`|`address`|The address of the profile creator to check.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the profile creator is whitelisted, false otherwise.|


### getTreasury

Returns the treasury address.


```solidity
function getTreasury() external view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The treasury address.|


### getTreasuryFee

Returns the treasury fee.


```solidity
function getTreasuryFee() external view override returns (uint16);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint16`|uint16 The treasury fee.|


### getTreasuryData

Returns the treasury address and treasury fee in a single call.


```solidity
function getTreasuryData() external view override returns (address, uint16);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|tuple First, the treasury address, second, the treasury fee.|
|`<none>`|`uint16`||


