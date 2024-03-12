# ProfileLib
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/ProfileLib.sol)


## Functions
### MODULE_REGISTRY


```solidity
function MODULE_REGISTRY() internal view returns (IModuleRegistry);
```

### ownerOf


```solidity
function ownerOf(uint256 profileId) internal view returns (address);
```

### exists


```solidity
function exists(uint256 profileId) internal view returns (bool);
```

### createProfile

Creates a profile with the given parameters to the given address. Minting happens
in the hub.


```solidity
function createProfile(Types.CreateProfileParams calldata createProfileParams, uint256 profileId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`createProfileParams`|`Types.CreateProfileParams`|The CreateProfileParams struct containing the following parameters: to: The address receiving the profile. followModule: The follow module to use, can be the zero address. followModuleInitData: The follow module initialization data, if any|
|`profileId`|`uint256`|The profile ID to associate with this profile NFT (token ID).|


### setFollowModule

Sets the follow module for a given profile.


```solidity
function setFollowModule(
    uint256 profileId,
    address followModule,
    bytes calldata followModuleInitData,
    address transactionExecutor
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The profile ID to set the follow module for.|
|`followModule`|`address`|The follow module to set for the given profile, if any.|
|`followModuleInitData`|`bytes`|The data to pass to the follow module for profile initialization.|
|`transactionExecutor`|`address`||


### setProfileMetadataURI


```solidity
function setProfileMetadataURI(uint256 profileId, string calldata metadataURI, address transactionExecutor) external;
```

### _initFollowModule


```solidity
function _initFollowModule(
    uint256 profileId,
    address transactionExecutor,
    address followModule,
    bytes memory followModuleInitData
) private returns (bytes memory);
```

### setBlockStatus


```solidity
function setBlockStatus(
    uint256 byProfileId,
    uint256[] calldata idsOfProfilesToSetBlockStatus,
    bool[] calldata blockStatus,
    address transactionExecutor
) external;
```

### switchToNewFreshDelegatedExecutorsConfig


```solidity
function switchToNewFreshDelegatedExecutorsConfig(uint256 profileId) external;
```

### changeDelegatedExecutorsConfig


```solidity
function changeDelegatedExecutorsConfig(
    uint256 delegatorProfileId,
    address[] calldata delegatedExecutors,
    bool[] calldata approvals
) external;
```

### changeGivenDelegatedExecutorsConfig


```solidity
function changeGivenDelegatedExecutorsConfig(
    uint256 delegatorProfileId,
    address[] calldata delegatedExecutors,
    bool[] calldata approvals,
    uint64 configNumber,
    bool switchToGivenConfig
) external;
```

### isExecutorApproved


```solidity
function isExecutorApproved(uint256 delegatorProfileId, address delegatedExecutor) external view returns (bool);
```

### _changeDelegatedExecutorsConfig


```solidity
function _changeDelegatedExecutorsConfig(
    Types.DelegatedExecutorsConfig storage _delegatedExecutorsConfig,
    uint256 delegatorProfileId,
    address[] memory delegatedExecutors,
    bool[] memory approvals,
    uint64 configNumber,
    bool switchToGivenConfig
) private;
```

### _prepareStorageToApplyChangesUnderGivenConfig


```solidity
function _prepareStorageToApplyChangesUnderGivenConfig(
    Types.DelegatedExecutorsConfig storage _delegatedExecutorsConfig,
    uint64 configNumber,
    bool switchToGivenConfig
) private returns (bool);
```

### _setFollowModule


```solidity
function _setFollowModule(
    uint256 profileId,
    address followModule,
    bytes calldata followModuleInitData,
    address transactionExecutor
) private;
```

