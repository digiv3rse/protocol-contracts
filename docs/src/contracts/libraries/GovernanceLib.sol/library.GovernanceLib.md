# GovernanceLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/libraries/GovernanceLib.sol)


## State Variables
### BPS_MAX

```solidity
uint16 internal constant BPS_MAX = 10000;
```


## Functions
### setGovernance

Sets the governance address.


```solidity
function setGovernance(address newGovernance) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newGovernance`|`address`|The new governance address to set.|


### setEmergencyAdmin

Sets the emergency admin address.


```solidity
function setEmergencyAdmin(address newEmergencyAdmin) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newEmergencyAdmin`|`address`|The new governance address to set.|


### initState

Sets the protocol state, only meant to be called at initialization since
this does not validate the caller.


```solidity
function initState(Types.ProtocolState newState) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newState`|`Types.ProtocolState`|The new protocol state to set.|


### setState

Sets the protocol state and validates the caller. The emergency admin can only
pause further (Unpaused => PublishingPaused => Paused). Whereas governance can set any
state.


```solidity
function setState(Types.ProtocolState newState) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newState`|`Types.ProtocolState`|The new protocol state to set.|


### _setState


```solidity
function _setState(Types.ProtocolState newState) private returns (Types.ProtocolState);
```

### whitelistProfileCreator


```solidity
function whitelistProfileCreator(address profileCreator, bool whitelist) external;
```

### setTreasury


```solidity
function setTreasury(address newTreasury) internal;
```

### setTreasuryFee


```solidity
function setTreasuryFee(uint16 newTreasuryFee) internal;
```

### setProfileTokenURIContract


```solidity
function setProfileTokenURIContract(address profileTokenURIContract) external;
```

### setFollowTokenURIContract


```solidity
function setFollowTokenURIContract(address followTokenURIContract) external;
```

