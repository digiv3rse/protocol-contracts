# ValidationLib
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/ValidationLib.sol)

**Author:**
DiGi Protocol


## Functions
### validatePointedPub


```solidity
function validatePointedPub(uint256 profileId, uint256 pubId) internal view;
```

### validateAddressIsProfileOwner


```solidity
function validateAddressIsProfileOwner(address expectedProfileOwner, uint256 profileId) internal view;
```

### validateAddressIsProfileOwnerOrDelegatedExecutor


```solidity
function validateAddressIsProfileOwnerOrDelegatedExecutor(address expectedOwnerOrDelegatedExecutor, uint256 profileId)
    internal
    view;
```

### validateAddressIsDelegatedExecutor


```solidity
function validateAddressIsDelegatedExecutor(address expectedDelegatedExecutor, uint256 delegatorProfileId)
    internal
    view;
```

### validateProfileCreatorWhitelisted


```solidity
function validateProfileCreatorWhitelisted(address profileCreator) internal view;
```

### validateNotBlocked


```solidity
function validateNotBlocked(uint256 profile, uint256 byProfile) internal view;
```

### validateNotBlocked


```solidity
function validateNotBlocked(uint256 profile, uint256 byProfile, bool unidirectionalCheck) internal view;
```

### validateProfileExists


```solidity
function validateProfileExists(uint256 profileId) internal view;
```

### validateCallerIsGovernance


```solidity
function validateCallerIsGovernance() internal view;
```

### validateReferrersAndGetReferrersPubTypes


```solidity
function validateReferrersAndGetReferrersPubTypes(
    uint256[] memory referrerProfileIds,
    uint256[] memory referrerPubIds,
    uint256 targetedProfileId,
    uint256 targetedPubId
) internal view returns (Types.PublicationType[] memory);
```

### validateLegacyCollectReferrer


```solidity
function validateLegacyCollectReferrer(
    uint256 referrerProfileId,
    uint256 referrerPubId,
    uint256 publicationCollectedProfileId,
    uint256 publicationCollectedId
) external view;
```

### _validateReferrerAndGetReferrerPubType


```solidity
function _validateReferrerAndGetReferrerPubType(
    uint256 referrerProfileId,
    uint256 referrerPubId,
    uint256 targetedProfileId,
    uint256 targetedPubId
) private view returns (Types.PublicationType);
```

### _validateReferrerAsPost


```solidity
function _validateReferrerAsPost(
    uint256 referrerProfileId,
    uint256 referrerPubId,
    uint256 targetedProfileId,
    uint256 targetedPubId
) private view;
```

### _validateReferrerAsMirrorOrCommentOrQuote

*Validates that the referrer publication and the interacted publication are linked.*


```solidity
function _validateReferrerAsMirrorOrCommentOrQuote(
    uint256 referrerProfileId,
    uint256 referrerPubId,
    uint256 targetedProfileId,
    uint256 targetedPubId
) private view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`referrerProfileId`|`uint256`|The profile id of the referrer.|
|`referrerPubId`|`uint256`|The publication id of the referrer.|
|`targetedProfileId`|`uint256`|The ID of the profile who authored the publication being acted or referenced.|
|`targetedPubId`|`uint256`|The pub ID being acted or referenced.|


