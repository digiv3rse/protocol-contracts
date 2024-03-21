# IDiGiVersion
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/interfaces/IDiGiVersion.sol)

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

