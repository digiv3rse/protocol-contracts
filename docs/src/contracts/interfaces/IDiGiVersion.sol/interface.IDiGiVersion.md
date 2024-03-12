# IDiGiVersion
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/interfaces/IDiGiVersion.sol)

**Author:**
DiGi Protocol

This is the interface for the DiGiHub Version getters and emitter.
It allows to emit a DiGiHub version during an upgrade, and also to get the current version.


## Functions
### getVersion

Returns the DiGiHub current Version.


```solidity
function getVersion() external view returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|version The DiGiHub current Version.|


### getGitCommit

Returns the DiGiHub current Git Commit.


```solidity
function getGitCommit() external view returns (bytes20);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes20`|gitCommit The DiGiHub current Git Commit.|


### emitVersion

Emits the DiGiHub current Version. Used in upgradeAndCall().


```solidity
function emitVersion() external;
```

