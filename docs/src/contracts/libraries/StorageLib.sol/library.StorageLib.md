# StorageLib
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/StorageLib.sol)


## State Variables
### TOKEN_DATA_MAPPING_SLOT

```solidity
uint256 constant TOKEN_DATA_MAPPING_SLOT = 2;
```


### SIG_NONCES_MAPPING_SLOT

```solidity
uint256 constant SIG_NONCES_MAPPING_SLOT = 10;
```


### LAST_INITIALIZED_REVISION_SLOT

```solidity
uint256 constant LAST_INITIALIZED_REVISION_SLOT = 11;
```


### PROTOCOL_STATE_SLOT

```solidity
uint256 constant PROTOCOL_STATE_SLOT = 12;
```


### PROFILE_CREATOR_WHITELIST_MAPPING_SLOT

```solidity
uint256 constant PROFILE_CREATOR_WHITELIST_MAPPING_SLOT = 13;
```


### PROFILE_ID_BY_HANDLE_HASH_MAPPING_SLOT

```solidity
uint256 constant PROFILE_ID_BY_HANDLE_HASH_MAPPING_SLOT = 18;
```


### PROFILES_MAPPING_SLOT

```solidity
uint256 constant PROFILES_MAPPING_SLOT = 19;
```


### PUBLICATIONS_MAPPING_SLOT

```solidity
uint256 constant PUBLICATIONS_MAPPING_SLOT = 20;
```


### PROFILE_COUNTER_SLOT

```solidity
uint256 constant PROFILE_COUNTER_SLOT = 22;
```


### GOVERNANCE_SLOT

```solidity
uint256 constant GOVERNANCE_SLOT = 23;
```


### EMERGENCY_ADMIN_SLOT

```solidity
uint256 constant EMERGENCY_ADMIN_SLOT = 24;
```


### TOKEN_GUARDIAN_DISABLING_TIMESTAMP_MAPPING_SLOT
Introduced in DiGi V1.3:  ///


```solidity
uint256 constant TOKEN_GUARDIAN_DISABLING_TIMESTAMP_MAPPING_SLOT = 25;
```


### DELEGATED_EXECUTOR_CONFIG_MAPPING_SLOT
Introduced in DiGi V2:   ///


```solidity
uint256 constant DELEGATED_EXECUTOR_CONFIG_MAPPING_SLOT = 26;
```


### BLOCKED_STATUS_MAPPING_SLOT

```solidity
uint256 constant BLOCKED_STATUS_MAPPING_SLOT = 27;
```


### PROFILE_ROYALTIES_BPS_SLOT

```solidity
uint256 constant PROFILE_ROYALTIES_BPS_SLOT = 28;
```


### MIGRATION_ADMINS_WHITELISTED_MAPPING_SLOT

```solidity
uint256 constant MIGRATION_ADMINS_WHITELISTED_MAPPING_SLOT = 29;
```


### TREASURY_DATA_SLOT

```solidity
uint256 constant TREASURY_DATA_SLOT = 30;
```


### PROFILE_TOKEN_URI_CONTRACT_SLOT

```solidity
uint256 constant PROFILE_TOKEN_URI_CONTRACT_SLOT = 31;
```


### FOLLOW_TOKEN_URI_CONTRACT_SLOT

```solidity
uint256 constant FOLLOW_TOKEN_URI_CONTRACT_SLOT = 32;
```


### LEGACY_COLLECT_FOLLOW_VALIDATION_HELPER_MAPPING_SLOT

```solidity
uint256 constant LEGACY_COLLECT_FOLLOW_VALIDATION_HELPER_MAPPING_SLOT = 33;
```


## Functions
### getPublication


```solidity
function getPublication(uint256 profileId, uint256 pubId)
    internal
    pure
    returns (Types.Publication storage _publication);
```

### getPublicationMemory


```solidity
function getPublicationMemory(uint256 profileId, uint256 pubId)
    internal
    pure
    returns (Types.PublicationMemory memory);
```

### getProfile


```solidity
function getProfile(uint256 profileId) internal pure returns (Types.Profile storage _profiles);
```

### getDelegatedExecutorsConfig


```solidity
function getDelegatedExecutorsConfig(uint256 delegatorProfileId)
    internal
    pure
    returns (Types.DelegatedExecutorsConfig storage _delegatedExecutorsConfig);
```

### tokenGuardianDisablingTimestamp


```solidity
function tokenGuardianDisablingTimestamp()
    internal
    pure
    returns (mapping(address => uint256) storage _tokenGuardianDisablingTimestamp);
```

### getTokenData


```solidity
function getTokenData(uint256 tokenId) internal pure returns (Types.TokenData storage _tokenData);
```

### blockedStatus


```solidity
function blockedStatus(uint256 blockerProfileId)
    internal
    pure
    returns (mapping(uint256 => bool) storage _blockedStatus);
```

### nonces


```solidity
function nonces() internal pure returns (mapping(address => uint256) storage _nonces);
```

### profileIdByHandleHash


```solidity
function profileIdByHandleHash() internal pure returns (mapping(bytes32 => uint256) storage _profileIdByHandleHash);
```

### profileCreatorWhitelisted


```solidity
function profileCreatorWhitelisted()
    internal
    pure
    returns (mapping(address => bool) storage _profileCreatorWhitelisted);
```

### migrationAdminWhitelisted


```solidity
function migrationAdminWhitelisted()
    internal
    pure
    returns (mapping(address => bool) storage _migrationAdminWhitelisted);
```

### legacyCollectFollowValidationHelper


```solidity
function legacyCollectFollowValidationHelper()
    internal
    pure
    returns (mapping(address => uint256) storage _legacyCollectFollowValidationHelper);
```

### getGovernance


```solidity
function getGovernance() internal view returns (address _governance);
```

### setGovernance


```solidity
function setGovernance(address newGovernance) internal;
```

### getEmergencyAdmin


```solidity
function getEmergencyAdmin() internal view returns (address _emergencyAdmin);
```

### setEmergencyAdmin


```solidity
function setEmergencyAdmin(address newEmergencyAdmin) internal;
```

### getState


```solidity
function getState() internal view returns (Types.ProtocolState _state);
```

### setState


```solidity
function setState(Types.ProtocolState newState) internal;
```

### getLastInitializedRevision


```solidity
function getLastInitializedRevision() internal view returns (uint256 _lastInitializedRevision);
```

### setLastInitializedRevision


```solidity
function setLastInitializedRevision(uint256 newLastInitializedRevision) internal;
```

### getTreasuryData


```solidity
function getTreasuryData() internal pure returns (Types.TreasuryData storage _treasuryData);
```

### setProfileTokenURIContract


```solidity
function setProfileTokenURIContract(address profileTokenURIContract) internal;
```

### setFollowTokenURIContract


```solidity
function setFollowTokenURIContract(address followTokenURIContract) internal;
```

### getProfileTokenURIContract


```solidity
function getProfileTokenURIContract() internal view returns (address _profileTokenURIContract);
```

### getFollowTokenURIContract


```solidity
function getFollowTokenURIContract() internal view returns (address _followTokenURIContract);
```

