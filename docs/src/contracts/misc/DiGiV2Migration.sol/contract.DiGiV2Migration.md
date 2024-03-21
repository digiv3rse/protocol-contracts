# DiGiV2Migration
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/DiGiV2Migration.sol)


## State Variables
### FEE_FOLLOW_MODULE

```solidity
address internal immutable FEE_FOLLOW_MODULE;
```


### PROFILE_FOLLOW_MODULE

```solidity
address internal immutable PROFILE_FOLLOW_MODULE;
```


### NEW_FEE_FOLLOW_MODULE

```solidity
address internal immutable NEW_FEE_FOLLOW_MODULE;
```


### digiHandles

```solidity
DiGiHandles internal immutable digiHandles;
```


### tokenHandleRegistry

```solidity
TokenHandleRegistry internal immutable tokenHandleRegistry;
```


## Functions
### constructor


```solidity
constructor(Types.MigrationParams memory migrationParams);
```

### batchMigrateProfiles


```solidity
function batchMigrateProfiles(uint256[] calldata profileIds) external;
```

### batchMigrateFollows


```solidity
function batchMigrateFollows(
    uint256 followerProfileId,
    uint256[] calldata idsOfProfileFollowed,
    uint256[] calldata followTokenIds
) external;
```

### batchMigrateFollowers


```solidity
function batchMigrateFollowers(
    uint256[] calldata followerProfileIds,
    uint256 idOfProfileFollowed,
    uint256[] calldata followTokenIds
) external;
```

### batchMigrateFollowModules


```solidity
function batchMigrateFollowModules(uint256[] calldata profileIds) external;
```

### getProfileIdByHandleHash


```solidity
function getProfileIdByHandleHash(bytes32 handleHash) external view returns (uint256);
```

### setMigrationAdmins


```solidity
function setMigrationAdmins(address[] memory migrationAdmins, bool whitelisted) external;
```

