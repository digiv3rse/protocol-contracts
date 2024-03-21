# DiGiVersion
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/base/DiGiVersion.sol)

**Inherits:**
[IDiGiVersion](/contracts/misc/PermissionlessCreator.sol/interface.IDiGiVersion.md)


## State Variables
### version

```solidity
string internal constant version = "2.0.3";
```


### gitCommit

```solidity
bytes20 internal constant gitCommit = hex"3bb1438b28b69f584ab9a290f261e3452fd34ad0";
```


## Functions
### getVersion

Returns the DiGiHub current Version.


```solidity
function getVersion() external pure override returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|version The DiGiHub current Version.|


### getGitCommit

Returns the DiGiHub current Git Commit.


```solidity
function getGitCommit() external pure override returns (bytes20);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes20`|gitCommit The DiGiHub current Git Commit.|


### emitVersion


```solidity
function emitVersion() external;
```

## Events
### DiGiUpgradeVersion

```solidity
event DiGiUpgradeVersion(address implementation, string version, bytes20 gitCommit, uint256 timestamp);
```

