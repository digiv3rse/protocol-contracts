# IDiGiGovernable
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/interfaces/IDiGiGovernable.sol)

**Author:**
DiGi Protocol

This is the interface for the DiGi Protocol main governance functions.


## Functions
### setGovernance

Sets the privileged governance role.


```solidity
function setGovernance(address newGovernance) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newGovernance`|`address`|The new governance address to set.|


### setEmergencyAdmin

Sets the emergency admin, which is a permissioned role able to set the protocol state.


```solidity
function setEmergencyAdmin(address newEmergencyAdmin) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newEmergencyAdmin`|`address`|The new emergency admin address to set.|


### setState

Sets the protocol state to either a global pause, a publishing pause or an unpaused state.


```solidity
function setState(Types.ProtocolState newState) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newState`|`Types.ProtocolState`|The state to set. It can be one of the following: - Unpaused: The protocol is fully operational. - PublishingPaused: The protocol is paused for publishing, but it is still operational for others operations. - Paused: The protocol is paused for all operations.|


### whitelistProfileCreator

Adds or removes a profile creator from the whitelist.


```solidity
function whitelistProfileCreator(address profileCreator, bool whitelist) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileCreator`|`address`|The profile creator address to add or remove from the whitelist.|
|`whitelist`|`bool`|Whether or not the profile creator should be whitelisted.|


### setProfileTokenURIContract

Sets the profile token URI contract.


```solidity
function setProfileTokenURIContract(address profileTokenURIContract) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileTokenURIContract`|`address`|The profile token URI contract to set.|


### setFollowTokenURIContract

Sets the follow token URI contract.


```solidity
function setFollowTokenURIContract(address followTokenURIContract) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followTokenURIContract`|`address`|The follow token URI contract to set.|


### setTreasury

Sets the treasury address.


```solidity
function setTreasury(address newTreasury) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newTreasury`|`address`|The new treasury address to set.|


### setTreasuryFee

Sets the treasury fee.


```solidity
function setTreasuryFee(uint16 newTreasuryFee) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newTreasuryFee`|`uint16`|The new treasury fee to set.|


### getGovernance

Returns the currently configured governance address.


```solidity
function getGovernance() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address of the currently configured governance.|


### getState

Gets the state currently set in the protocol. It could be a global pause, a publishing pause or an
unpaused state.


```solidity
function getState() external view returns (Types.ProtocolState);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Types.ProtocolState`|Types.ProtocolState The state currently set in the protocol.|


### isProfileCreatorWhitelisted

Returns whether or not a profile creator is whitelisted.


```solidity
function isProfileCreatorWhitelisted(address profileCreator) external view returns (bool);
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
function getTreasury() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The treasury address.|


### getTreasuryFee

Returns the treasury fee.


```solidity
function getTreasuryFee() external view returns (uint16);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint16`|uint16 The treasury fee.|


### getTreasuryData

Returns the treasury address and treasury fee in a single call.


```solidity
function getTreasuryData() external view returns (address, uint16);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|tuple First, the treasury address, second, the treasury fee.|
|`<none>`|`uint16`||


### getProfileTokenURIContract

Gets the profile token URI contract.


```solidity
function getProfileTokenURIContract() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The profile token URI contract.|


### getFollowTokenURIContract

Gets the follow token URI contract.


```solidity
function getFollowTokenURIContract() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The follow token URI contract.|


