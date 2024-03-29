# IDiGiVersion
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/interfaces/IDiGiVersion.sol)

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

