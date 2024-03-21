# DiGiHub
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/DiGiHub.sol)

**Inherits:**
[DiGiProfiles](/contracts/base/DiGiProfiles.sol/abstract.DiGiProfiles.md), [DiGiGovernable](/contracts/base/DiGiGovernable.sol/abstract.DiGiGovernable.md), [DiGiV2Migration](/contracts/misc/DiGiV2Migration.sol/contract.DiGiV2Migration.md), [DiGiImplGetters](/contracts/base/DiGiImplGetters.sol/contract.DiGiImplGetters.md), [DiGiHubEventHooks](/contracts/base/DiGiHubEventHooks.sol/abstract.DiGiHubEventHooks.md), [DiGiHubStorage](/contracts/base/DiGiHubStorage.sol/abstract.DiGiHubStorage.md), [DiGiVersion](/contracts/base/DiGiVersion.sol/contract.DiGiVersion.md), [IDiGiProtocol](/contracts/misc/PermissionlessCreator.sol/interface.IDiGiProtocol.md)

**Author:**
DiGi Protocol

This is the main entry point of the DiGi Protocol. It contains governance functionality as well as
publishing and profile interaction functionality.
NOTE: The DiGi Protocol is unique in that frontend operators need to track a potentially overwhelming
number of NFT contracts and interactions at once. For that reason, we've made two quirky design decisions:
1. Both Follow & Collect NFTs invoke a DiGiHub callback on transfer with the sole purpose of emitting an event.
2. Almost every event in the protocol emits the current block timestamp, reducing the need to fetch it manually.


## Functions
### onlyProfileOwnerOrDelegatedExecutor


```solidity
modifier onlyProfileOwnerOrDelegatedExecutor(address expectedOwnerOrDelegatedExecutor, uint256 profileId);
```

### whenPublishingEnabled


```solidity
modifier whenPublishingEnabled();
```

### constructor


```solidity
constructor(
    address followNFTImpl,
    address legacyCollectNFTImpl,
    address moduleRegistry,
    uint256 tokenGuardianCooldown,
    Types.MigrationParams memory migrationParams
)
    DiGiV2Migration(migrationParams)
    DiGiProfiles(tokenGuardianCooldown)
    DiGiImplGetters(followNFTImpl, legacyCollectNFTImpl, moduleRegistry);
```

### createProfile

Creates a profile with the specified parameters, minting a Profile NFT to the given recipient.


```solidity
function createProfile(Types.CreateProfileParams calldata createProfileParams)
    external
    override
    whenNotPaused
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`createProfileParams`|`Types.CreateProfileParams`|A CreateProfileParams struct containing the needed params.|


### setProfileMetadataURI

PROFILE OWNER FUNCTIONS      ///


```solidity
function setProfileMetadataURI(uint256 profileId, string calldata metadataURI)
    external
    override
    whenNotPaused
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, profileId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to set the metadata URI for.|
|`metadataURI`|`string`|The metadata URI to set for the given profile.|


### setProfileMetadataURIWithSig


```solidity
function setProfileMetadataURIWithSig(
    uint256 profileId,
    string calldata metadataURI,
    Types.EIP712Signature calldata signature
) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(signature.signer, profileId);
```

### setFollowModule

Sets the follow module for the given profile.


```solidity
function setFollowModule(uint256 profileId, address followModule, bytes calldata followModuleInitData)
    external
    override
    whenNotPaused
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, profileId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to set the follow module for.|
|`followModule`|`address`|The follow module to set for the given profile, must be whitelisted.|
|`followModuleInitData`|`bytes`|The data to be passed to the follow module for initialization.|


### setFollowModuleWithSig


```solidity
function setFollowModuleWithSig(
    uint256 profileId,
    address followModule,
    bytes calldata followModuleInitData,
    Types.EIP712Signature calldata signature
) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(signature.signer, profileId);
```

### changeDelegatedExecutorsConfig

Changes the delegated executors configuration for the given profile. It allows setting the approvals for
delegated executors in the specified configuration, as well as switching to it.


```solidity
function changeDelegatedExecutorsConfig(
    uint256 delegatorProfileId,
    address[] calldata delegatedExecutors,
    bool[] calldata approvals,
    uint64 configNumber,
    bool switchToGivenConfig
) external override whenNotPaused onlyProfileOwner(msg.sender, delegatorProfileId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatorProfileId`|`uint256`|The ID of the profile to which the delegated executor is being changed for.|
|`delegatedExecutors`|`address[]`|The array of delegated executors to set the approval for.|
|`approvals`|`bool[]`|The array of booleans indicating the corresponding executor's new approval status.|
|`configNumber`|`uint64`|The number of the configuration where the executor approval state is being set.|
|`switchToGivenConfig`|`bool`|A boolean indicating if the configuration must be switched to the one with the given number.|


### changeDelegatedExecutorsConfig


```solidity
function changeDelegatedExecutorsConfig(
    uint256 delegatorProfileId,
    address[] calldata delegatedExecutors,
    bool[] calldata approvals
) external override whenNotPaused onlyProfileOwner(msg.sender, delegatorProfileId);
```

### changeDelegatedExecutorsConfigWithSig


```solidity
function changeDelegatedExecutorsConfigWithSig(
    uint256 delegatorProfileId,
    address[] calldata delegatedExecutors,
    bool[] calldata approvals,
    uint64 configNumber,
    bool switchToGivenConfig,
    Types.EIP712Signature calldata signature
) external override whenNotPaused onlyProfileOwner(signature.signer, delegatorProfileId);
```

### post

PUBLISHING FUNCTIONS      ///


```solidity
function post(Types.PostParams calldata postParams)
    external
    override
    whenPublishingEnabled
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, postParams.profileId)
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`postParams`|`Types.PostParams`|A PostParams struct containing the needed parameters.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 An integer representing the post's publication ID.|


### postWithSig


```solidity
function postWithSig(Types.PostParams calldata postParams, Types.EIP712Signature calldata signature)
    external
    override
    whenPublishingEnabled
    onlyProfileOwnerOrDelegatedExecutor(signature.signer, postParams.profileId)
    returns (uint256);
```

### comment

Publishes a comment on the given publication.
Comment is a type of reference publication that points to another publication.
Comments can have these types of modules initialized:
- Action modules: any number of publication actions (e.g. collect, tip, etc.)
- Reference module: a module handling the rules when referencing this comment (e.g. token-gated mirrors)
Comments can have referrers (e.g. publications or profiles that helped to discover the pointed publication).


```solidity
function comment(Types.CommentParams calldata commentParams)
    external
    override
    whenPublishingEnabled
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, commentParams.profileId)
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`commentParams`|`Types.CommentParams`|A CommentParams struct containing the needed parameters.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 An integer representing the comment's publication ID.|


### commentWithSig


```solidity
function commentWithSig(Types.CommentParams calldata commentParams, Types.EIP712Signature calldata signature)
    external
    override
    whenPublishingEnabled
    onlyProfileOwnerOrDelegatedExecutor(signature.signer, commentParams.profileId)
    returns (uint256);
```

### mirror

Publishes a mirror of the given publication.
Mirror is a type of reference publication that points to another publication but doesn't have content.
Mirrors don't have any modules initialized.
Mirrors can have referrers (e.g. publications or profiles that allowed to discover the pointed publication).
You cannot mirror a mirror, comment on a mirror, or quote a mirror.


```solidity
function mirror(Types.MirrorParams calldata mirrorParams)
    external
    override
    whenPublishingEnabled
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, mirrorParams.profileId)
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`mirrorParams`|`Types.MirrorParams`|A MirrorParams struct containing the necessary parameters.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 An integer representing the mirror's publication ID.|


### mirrorWithSig


```solidity
function mirrorWithSig(Types.MirrorParams calldata mirrorParams, Types.EIP712Signature calldata signature)
    external
    override
    whenPublishingEnabled
    onlyProfileOwnerOrDelegatedExecutor(signature.signer, mirrorParams.profileId)
    returns (uint256);
```

### quote

Publishes a quote of the given publication.
Quote is a type of reference publication similar to mirror, but it has content and modules.
Quotes can have these types of modules initialized:
- Action modules: any number of publication actions (e.g. collect, tip, etc.)
- Reference module: a module handling the rules when referencing this quote (e.g. token-gated comments on quote)
Quotes can have referrers (e.g. publications or profiles that allowed to discover the pointed publication).
Unlike mirrors, you can mirror a quote, comment on a quote, or quote a quote.


```solidity
function quote(Types.QuoteParams calldata quoteParams)
    external
    override
    whenPublishingEnabled
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, quoteParams.profileId)
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`quoteParams`|`Types.QuoteParams`|A QuoteParams struct containing the needed parameters.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 An integer representing the quote's publication ID.|


### quoteWithSig


```solidity
function quoteWithSig(Types.QuoteParams calldata quoteParams, Types.EIP712Signature calldata signature)
    external
    override
    whenPublishingEnabled
    onlyProfileOwnerOrDelegatedExecutor(signature.signer, quoteParams.profileId)
    returns (uint256);
```

### follow

PROFILE INTERACTION FUNCTIONS      ///

*Both the `idsOfProfilesToFollow`, `followTokenIds`, and `datas` arrays must be of the same length,
regardless if the profiles do not have a follow module set.*


```solidity
function follow(
    uint256 followerProfileId,
    uint256[] calldata idsOfProfilesToFollow,
    uint256[] calldata followTokenIds,
    bytes[] calldata datas
)
    external
    override
    whenNotPaused
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, followerProfileId)
    returns (uint256[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`|The ID of the profile the follows are being executed for.|
|`idsOfProfilesToFollow`|`uint256[]`|The array of IDs of profiles to follow.|
|`followTokenIds`|`uint256[]`|The array of follow token IDs to use for each follow (0 if you don't own a follow token).|
|`datas`|`bytes[]`|The arbitrary data array to pass to the follow module for each profile if needed.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256[]`|uint256[] An array of follow token IDs representing the follow tokens created for each follow.|


### followWithSig


```solidity
function followWithSig(
    uint256 followerProfileId,
    uint256[] calldata idsOfProfilesToFollow,
    uint256[] calldata followTokenIds,
    bytes[] calldata datas,
    Types.EIP712Signature calldata signature
)
    external
    override
    whenNotPaused
    onlyProfileOwnerOrDelegatedExecutor(signature.signer, followerProfileId)
    returns (uint256[] memory);
```

### unfollow

Unfollows given profiles.


```solidity
function unfollow(uint256 unfollowerProfileId, uint256[] calldata idsOfProfilesToUnfollow)
    external
    override
    whenNotPaused
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, unfollowerProfileId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`unfollowerProfileId`|`uint256`|The ID of the profile the unfollows are being executed for.|
|`idsOfProfilesToUnfollow`|`uint256[]`|The array of IDs of profiles to unfollow.|


### unfollowWithSig


```solidity
function unfollowWithSig(
    uint256 unfollowerProfileId,
    uint256[] calldata idsOfProfilesToUnfollow,
    Types.EIP712Signature calldata signature
) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(signature.signer, unfollowerProfileId);
```

### setBlockStatus

Sets the block status for the given profiles. Changing a profile's block status to `true` (i.e. blocked),
when will also force them to unfollow.
Blocked profiles cannot perform any actions with the profile that blocked them: they cannot comment or mirror
their publications, they cannot follow them, they cannot collect, tip them, etc.

*Both the `idsOfProfilesToSetBlockStatus` and `blockStatus` arrays must be of the same length.*


```solidity
function setBlockStatus(
    uint256 byProfileId,
    uint256[] calldata idsOfProfilesToSetBlockStatus,
    bool[] calldata blockStatus
) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(msg.sender, byProfileId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`byProfileId`|`uint256`|The ID of the profile that is blocking/unblocking somebody.|
|`idsOfProfilesToSetBlockStatus`|`uint256[]`|The array of IDs of profiles to set block status.|
|`blockStatus`|`bool[]`|The array of block statuses to use for each (true is blocked).|


### setBlockStatusWithSig


```solidity
function setBlockStatusWithSig(
    uint256 byProfileId,
    uint256[] calldata idsOfProfilesToSetBlockStatus,
    bool[] calldata blockStatus,
    Types.EIP712Signature calldata signature
) external override whenNotPaused onlyProfileOwnerOrDelegatedExecutor(signature.signer, byProfileId);
```

### collectLegacy

Collects a given publication via signature with the specified parameters.
Collect can have referrers (e.g. publications or profiles that allowed to discover the pointed publication).


```solidity
function collectLegacy(Types.LegacyCollectParams calldata collectParams)
    external
    override
    whenNotPaused
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, collectParams.collectorProfileId)
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`collectParams`|`Types.LegacyCollectParams`|A CollectParams struct containing the parameters.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 An integer representing the minted token ID.|


### collectLegacyWithSig


```solidity
function collectLegacyWithSig(
    Types.LegacyCollectParams calldata collectParams,
    Types.EIP712Signature calldata signature
)
    external
    override
    whenNotPaused
    onlyProfileOwnerOrDelegatedExecutor(signature.signer, collectParams.collectorProfileId)
    returns (uint256);
```

### act

Acts on a given publication with the specified parameters.
You can act on a publication except a mirror (if it has at least one action module initialized).
Actions can have referrers (e.g. publications or profiles that allowed to discover the pointed publication).


```solidity
function act(Types.PublicationActionParams calldata publicationActionParams)
    external
    override
    whenNotPaused
    onlyProfileOwnerOrDelegatedExecutor(msg.sender, publicationActionParams.actorProfileId)
    returns (bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`publicationActionParams`|`Types.PublicationActionParams`|A PublicationActionParams struct containing the parameters.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`|bytes Arbitrary data the action module returns.|


### actWithSig


```solidity
function actWithSig(
    Types.PublicationActionParams calldata publicationActionParams,
    Types.EIP712Signature calldata signature
)
    external
    override
    whenNotPaused
    onlyProfileOwnerOrDelegatedExecutor(signature.signer, publicationActionParams.actorProfileId)
    returns (bytes memory);
```

### incrementNonce

*This function is used to invalidate signatures by incrementing the nonce of the signer.*


```solidity
function incrementNonce(uint8 increment) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`increment`|`uint8`|The amount to increment the nonce by (max 255).|


### isFollowing

EXTERNAL VIEW FUNCTIONS      ///


```solidity
function isFollowing(uint256 followerProfileId, uint256 followedProfileId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`|The ID of the profile whose following state should be queried.|
|`followedProfileId`|`uint256`|The ID of the profile whose followed state should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if `followerProfileId` is following `followedProfileId`, false otherwise.|


### isDelegatedExecutorApproved

Returns whether the given address is approved as delegated executor, in the configuration with the given
number, to act on behalf of the given profile.


```solidity
function isDelegatedExecutorApproved(uint256 delegatorProfileId, address delegatedExecutor, uint64 configNumber)
    external
    view
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatorProfileId`|`uint256`|The ID of the profile to check the delegated executor approval for.|
|`delegatedExecutor`|`address`|The address to query the delegated executor approval for.|
|`configNumber`|`uint64`|The number of the configuration where the executor approval state is being queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the address is approved as a delegated executor to act on behalf of the profile in the given configuration, false otherwise.|


### isDelegatedExecutorApproved

Returns whether the given address is approved as delegated executor, in the configuration with the given
number, to act on behalf of the given profile.


```solidity
function isDelegatedExecutorApproved(uint256 delegatorProfileId, address delegatedExecutor)
    external
    view
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatorProfileId`|`uint256`|The ID of the profile to check the delegated executor approval for.|
|`delegatedExecutor`|`address`|The address to query the delegated executor approval for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the address is approved as a delegated executor to act on behalf of the profile in the given configuration, false otherwise.|


### getDelegatedExecutorsConfigNumber

Returns the current delegated executor config number for the given profile.


```solidity
function getDelegatedExecutorsConfigNumber(uint256 delegatorProfileId) external view returns (uint64);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatorProfileId`|`uint256`|The ID of the profile from which the delegated executors config number is being queried|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint64`|uint256 The current delegated executor configuration number.|


### getDelegatedExecutorsPrevConfigNumber

Returns the previous used delegated executor config number for the given profile.


```solidity
function getDelegatedExecutorsPrevConfigNumber(uint256 delegatorProfileId) external view returns (uint64);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatorProfileId`|`uint256`|The ID of the profile from which the delegated executors' previous configuration number set is being queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint64`|uint256 The delegated executor configuration number previously set. It will coincide with the current configuration set if it was never switched from the default one.|


### getDelegatedExecutorsMaxConfigNumberSet

Returns the maximum delegated executor config number for the given profile.
This is the maximum config number that was ever used by this profile.
When creating a new clean configuration, you can only use a number that is maxConfigNumber + 1.


```solidity
function getDelegatedExecutorsMaxConfigNumberSet(uint256 delegatorProfileId) external view returns (uint64);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatorProfileId`|`uint256`|The ID of the profile from which the delegated executors' maximum configuration number set is being queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint64`|uint256 The delegated executor maximum configuration number set.|


### isBlocked

Returns whether `profileId` is blocked by `byProfileId`.
See setBlockStatus() for more information on how blocking works on the platform.


```solidity
function isBlocked(uint256 profileId, uint256 byProfileId) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The ID of the profile whose blocked status should be queried.|
|`byProfileId`|`uint256`|The ID of the profile whose blocker status should be queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if `profileId` is blocked by `byProfileId`, false otherwise.|


### getContentURI

Returns the URI associated with a given publication.
This is used to store the publication's metadata, e.g.: content, images, etc.


```solidity
function getContentURI(uint256 profileId, uint256 pubId) external view override returns (string memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile that published the publication to query.|
|`pubId`|`uint256`|The publication ID of the publication to query.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|string The URI associated with a given publication.|


### getProfile

Returns the full profile struct associated with a given profile token ID.


```solidity
function getProfile(uint256 profileId) external view override returns (Types.Profile memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to query.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Types.Profile`|Profile The profile struct of the given profile.|


### getPublication

Returns the full publication struct for a given publication.


```solidity
function getPublication(uint256 profileId, uint256 pubId)
    external
    pure
    override
    returns (Types.PublicationMemory memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile that published the publication to query.|
|`pubId`|`uint256`|The publication ID of the publication to query.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Types.PublicationMemory`|Publication The publication struct associated with the queried publication.|


### isActionModuleEnabledInPublication

Returns wether a given Action Module is enabled for a given publication.


```solidity
function isActionModuleEnabledInPublication(uint256 profileId, uint256 pubId, address module)
    external
    view
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile that published the publication to query.|
|`pubId`|`uint256`|The publication ID of the publication to query.|
|`module`|`address`|The address of the Action Module to query.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool True if the Action Module is enabled for the queried publication, false if not.|


### getPublicationType

Returns the type of a given publication.
The type can be one of the following (see PublicationType enum):
- Nonexistent
- Post
- Comment
- Mirror
- Quote


```solidity
function getPublicationType(uint256 profileId, uint256 pubId) external view override returns (Types.PublicationType);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile that published the publication to query.|
|`pubId`|`uint256`|The publication ID of the publication to query.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Types.PublicationType`|PublicationType The publication type of the queried publication.|


### getFollowModule


```solidity
function getFollowModule(uint256 profileId) external view returns (address);
```

### isFollowing


```solidity
function isFollowing(uint256 followedProfileId, address followerAddress, uint256) external view returns (bool);
```

