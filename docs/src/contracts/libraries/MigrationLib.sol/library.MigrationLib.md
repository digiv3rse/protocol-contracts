# MigrationLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/MigrationLib.sol)


## State Variables
### DIGI_PROTOCOL_PROFILE_ID

```solidity
uint256 internal constant DIGI_PROTOCOL_PROFILE_ID = 1;
```


### DOT_DIGI_SUFFIX_LENGTH

```solidity
uint256 internal constant DOT_DIGI_SUFFIX_LENGTH = 5;
```


## Functions
### batchMigrateProfiles

Migrates an array of profiles from V1 to V2. This function can be callable by anyone.
We would still perform the migration in batches by ourselves, but good to allow users to migrate on their own if they want to.


```solidity
function batchMigrateProfiles(
    uint256[] calldata profileIds,
    DiGiHandles digiHandles,
    TokenHandleRegistry tokenHandleRegistry
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileIds`|`uint256[]`|The array of profile IDs to migrate.|
|`digiHandles`|`DiGiHandles`||
|`tokenHandleRegistry`|`TokenHandleRegistry`||


### _migrateProfile

Migrates a profile from V1 to V2.

*We do not revert in any case, as we want to allow the migration to continue even if one profile fails
(and it usually fails if already migrated or profileNFT moved).*

*Estimated gas cost of one profile migration is around 178k gas.*


```solidity
function _migrateProfile(uint256 profileId, DiGiHandles digiHandles, TokenHandleRegistry tokenHandleRegistry) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The profile ID to migrate.|
|`digiHandles`|`DiGiHandles`||
|`tokenHandleRegistry`|`TokenHandleRegistry`||


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

### _migrateFollow


```solidity
function _migrateFollow(
    address followNFT,
    uint256 followerProfileId,
    uint256 idOfProfileFollowed,
    uint256 followTokenId
) private;
```

### batchMigrateFollowModules


```solidity
function batchMigrateFollowModules(
    uint256[] calldata profileIds,
    address legacyFeeFollowModule,
    address legacyProfileFollowModule,
    address newFeeFollowModule
) external;
```

## Events
### ProfileMigrated

```solidity
event ProfileMigrated(uint256 indexed profileId);
```

