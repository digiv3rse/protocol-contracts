# DiGiHubStorage
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/base/DiGiHubStorage.sol)

**Author:**
DiGi Protocol

This is an abstract contract that ONLY contains storage for the DiGiHub contract. This MUST be inherited last
to preserve the DiGiHub storage layout. Adding storage variables should be done ONLY at the bottom of this contract.


## State Variables
### _lastInitializedRevision

```solidity
uint256 private _lastInitializedRevision;
```


### _state

```solidity
Types.ProtocolState internal _state;
```


### _profileCreatorWhitelisted

```solidity
mapping(address profileCreator => bool isWhitelisted) internal _profileCreatorWhitelisted;
```


### __DEPRECATED__followModuleWhitelisted

```solidity
mapping(address => bool isWhitelisted) internal __DEPRECATED__followModuleWhitelisted;
```


### __DEPRECATED__collectModuleWhitelisted

```solidity
mapping(address collectModule => bool isWhitelisted) internal __DEPRECATED__collectModuleWhitelisted;
```


### __DEPRECATED__referenceModuleWhitelisted

```solidity
mapping(address referenceModule => bool isWhitelisted) internal __DEPRECATED__referenceModuleWhitelisted;
```


### __DEPRECATED__dispatcherByProfile

```solidity
mapping(uint256 profileId => address dispatcher) internal __DEPRECATED__dispatcherByProfile;
```


### __DEPRECATED__profileIdByHandleHash

```solidity
mapping(bytes32 handleHash => uint256 profileId) internal __DEPRECATED__profileIdByHandleHash;
```


### _profiles

```solidity
mapping(uint256 profileId => Types.Profile profile) internal _profiles;
```


### _publications

```solidity
mapping(uint256 profileId => mapping(uint256 pubId => Types.Publication publication)) internal _publications;
```


### __DEPRECATED__defaultProfiles

```solidity
mapping(address userAddress => uint256 profileId) internal __DEPRECATED__defaultProfiles;
```


### _profileCounter

```solidity
uint256 internal _profileCounter;
```


### _governance

```solidity
address internal _governance;
```


### _emergencyAdmin

```solidity
address internal _emergencyAdmin;
```


### _tokenGuardianDisablingTimestamp

```solidity
mapping(address => uint256) internal _tokenGuardianDisablingTimestamp;
```


### _delegatedExecutorsConfigs

```solidity
mapping(uint256 profileId => Types.DelegatedExecutorsConfig config) internal _delegatedExecutorsConfigs;
```


### _blockedStatus

```solidity
mapping(uint256 blockerProfileId => mapping(uint256 blockedProfileId => bool isBlocked)) internal _blockedStatus;
```


### _profileRoyaltiesBps

```solidity
uint256 internal _profileRoyaltiesBps;
```


### _migrationAdminWhitelisted

```solidity
mapping(address migrationAdmin => bool allowed) internal _migrationAdminWhitelisted;
```


### _treasuryData

```solidity
Types.TreasuryData internal _treasuryData;
```


### _profileTokenURIContract

```solidity
address internal _profileTokenURIContract;
```


### _followTokenURIContract

```solidity
address internal _followTokenURIContract;
```


### _legacyCollectFollowValidationHelper

```solidity
mapping(address => uint256) internal _legacyCollectFollowValidationHelper;
```


