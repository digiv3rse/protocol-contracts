# Types
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/libraries/constants/Types.sol)

**Author:**
DiGi Protocol

A standard library of data types used throughout the DiGi Protocol.


## Structs
### TokenData
ERC721Timestamped storage. Contains the owner address and the mint timestamp for every NFT.
Note: Instead of the owner address in the _tokenOwners private mapping, we now store it in the
_tokenData mapping, alongside the mint timestamp.


```solidity
struct TokenData {
    address owner;
    uint96 mintTimestamp;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The token owner.|
|`mintTimestamp`|`uint96`|The mint timestamp.|

### FollowData
A struct containing token follow-related data.


```solidity
struct FollowData {
    uint160 followerProfileId;
    uint48 originalFollowTimestamp;
    uint48 followTimestamp;
    uint256 profileIdAllowedToRecover;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint160`|The ID of the profile using the token to follow.|
|`originalFollowTimestamp`|`uint48`|The timestamp of the first follow performed with the token.|
|`followTimestamp`|`uint48`|The timestamp of the current follow, if a profile is using the token to follow.|
|`profileIdAllowedToRecover`|`uint256`|The ID of the profile allowed to recover the follow ID, if any.|

### EIP712Signature
A struct containing the necessary information to reconstruct an EIP-712 typed data signature.


```solidity
struct EIP712Signature {
    address signer;
    uint8 v;
    bytes32 r;
    bytes32 s;
    uint256 deadline;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`signer`|`address`|The address of the signer. Specially needed as a parameter to support EIP-1271.|
|`v`|`uint8`|The signature's recovery parameter.|
|`r`|`bytes32`|The signature's r parameter.|
|`s`|`bytes32`|The signature's s parameter.|
|`deadline`|`uint256`|The signature's deadline.|

### Profile
A struct containing profile data.


```solidity
struct Profile {
    uint256 pubCount;
    address followModule;
    address followNFT;
    string __DEPRECATED__handle;
    string __DEPRECATED__imageURI;
    string __DEPRECATED__followNFTURI;
    string metadataURI;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`pubCount`|`uint256`|The number of publications made to this profile.|
|`followModule`|`address`|The address of the current follow module in use by this profile, can be address(0) in none.|
|`followNFT`|`address`|The address of the followNFT associated with this profile. It can be address(0) if the profile has not been followed yet, as the collection is lazy-deployed upon the first follow.|
|`__DEPRECATED__handle`|`string`|DEPRECATED in V2: handle slot, was replaced with DiGiHandles.|
|`__DEPRECATED__imageURI`|`string`|DEPRECATED in V2: The URI to be used for the profile image.|
|`__DEPRECATED__followNFTURI`|`string`|DEPRECATED in V2: The URI used for the follow NFT image.|
|`metadataURI`|`string`|MetadataURI is used to store the profile's metadata, for example: displayed name, description, interests, etc.|

### Publication
A struct containing publication data.


```solidity
struct Publication {
    uint256 pointedProfileId;
    uint256 pointedPubId;
    string contentURI;
    address referenceModule;
    address __DEPRECATED__collectModule;
    address __DEPRECATED__collectNFT;
    PublicationType pubType;
    uint256 rootProfileId;
    uint256 rootPubId;
    mapping(address => bool) actionModuleEnabled;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`pointedProfileId`|`uint256`|The profile token ID to point the publication to.|
|`pointedPubId`|`uint256`|The publication ID to point the publication to. These are used to implement the "reference" feature of the platform and is used in: - Mirrors - Comments - Quotes There are (0,0) if the publication is not pointing to any other publication (i.e. the publication is a Post).|
|`contentURI`|`string`|The URI to set for the content of publication (can be ipfs, arweave, http, etc).|
|`referenceModule`|`address`|Reference module associated with this profile, if any.|
|`__DEPRECATED__collectModule`|`address`|Collect module associated with this publication, if any. Deprecated in V2.|
|`__DEPRECATED__collectNFT`|`address`|Collect NFT associated with this publication, if any. Deprecated in V2.|
|`pubType`|`PublicationType`|The type of publication, can be Nonexistent, Post, Comment, Mirror or Quote.|
|`rootProfileId`|`uint256`|The profile ID of the root post (to determine if comments/quotes and mirrors come from it). Posts, V1 publications and publications rooted in V1 publications don't have it set.|
|`rootPubId`|`uint256`|The publication ID of the root post (to determine if comments/quotes and mirrors come from it). Posts, V1 publications and publications rooted in V1 publications don't have it set.|
|`actionModuleEnabled`|`mapping(address => bool)`|The action modules enabled in a given publication.|

### PublicationMemory

```solidity
struct PublicationMemory {
    uint256 pointedProfileId;
    uint256 pointedPubId;
    string contentURI;
    address referenceModule;
    address __DEPRECATED__collectModule;
    address __DEPRECATED__collectNFT;
    PublicationType pubType;
    uint256 rootProfileId;
    uint256 rootPubId;
}
```

### CreateProfileParams
A struct containing the parameters required for the `createProfile()` function.


```solidity
struct CreateProfileParams {
    address to;
    address followModule;
    bytes followModuleInitData;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address receiving the profile.|
|`followModule`|`address`|The follow module to use, can be the zero address.|
|`followModuleInitData`|`bytes`|The follow module initialization data, if any.|

### PostParams
A struct containing the parameters required for the `post()` function.


```solidity
struct PostParams {
    uint256 profileId;
    string contentURI;
    address[] actionModules;
    bytes[] actionModulesInitDatas;
    address referenceModule;
    bytes referenceModuleInitData;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to publish to.|
|`contentURI`|`string`|The URI to set for this new publication.|
|`actionModules`|`address[]`|The action modules to set for this new publication.|
|`actionModulesInitDatas`|`bytes[]`|The data to pass to the action modules' initialization.|
|`referenceModule`|`address`|The reference module to set for the given publication, must be whitelisted.|
|`referenceModuleInitData`|`bytes`|The data to be passed to the reference module for initialization.|

### CommentParams
A struct containing the parameters required for the `comment()` function.


```solidity
struct CommentParams {
    uint256 profileId;
    string contentURI;
    uint256 pointedProfileId;
    uint256 pointedPubId;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    bytes referenceModuleData;
    address[] actionModules;
    bytes[] actionModulesInitDatas;
    address referenceModule;
    bytes referenceModuleInitData;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to publish to.|
|`contentURI`|`string`|The URI to set for this new publication.|
|`pointedProfileId`|`uint256`|The profile token ID to point the comment to.|
|`pointedPubId`|`uint256`|The publication ID to point the comment to.|
|`referrerProfileIds`|`uint256[]`||
|`referrerPubIds`|`uint256[]`||
|`referenceModuleData`|`bytes`|The data passed to the reference module.|
|`actionModules`|`address[]`|The action modules to set for this new publication.|
|`actionModulesInitDatas`|`bytes[]`|The data to pass to the action modules' initialization.|
|`referenceModule`|`address`|The reference module to set for the given publication, must be whitelisted.|
|`referenceModuleInitData`|`bytes`|The data to be passed to the reference module for initialization.|

### QuoteParams
A struct containing the parameters required for the `quote()` function.


```solidity
struct QuoteParams {
    uint256 profileId;
    string contentURI;
    uint256 pointedProfileId;
    uint256 pointedPubId;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    bytes referenceModuleData;
    address[] actionModules;
    bytes[] actionModulesInitDatas;
    address referenceModule;
    bytes referenceModuleInitData;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to publish to.|
|`contentURI`|`string`|The URI to set for this new publication.|
|`pointedProfileId`|`uint256`|The profile token ID of the publication author that is quoted.|
|`pointedPubId`|`uint256`|The publication ID that is quoted.|
|`referrerProfileIds`|`uint256[]`||
|`referrerPubIds`|`uint256[]`||
|`referenceModuleData`|`bytes`|The data passed to the reference module.|
|`actionModules`|`address[]`|The action modules to set for this new publication.|
|`actionModulesInitDatas`|`bytes[]`|The data to pass to the action modules' initialization.|
|`referenceModule`|`address`|The reference module to set for the given publication, must be whitelisted.|
|`referenceModuleInitData`|`bytes`|The data to be passed to the reference module for initialization.|

### ReferencePubParams
A struct containing the parameters required for the `comment()` or `quote()` internal functions.


```solidity
struct ReferencePubParams {
    uint256 profileId;
    string contentURI;
    uint256 pointedProfileId;
    uint256 pointedPubId;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    bytes referenceModuleData;
    address[] actionModules;
    bytes[] actionModulesInitDatas;
    address referenceModule;
    bytes referenceModuleInitData;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to publish to.|
|`contentURI`|`string`|The URI to set for this new publication.|
|`pointedProfileId`|`uint256`|The profile token ID of the publication author that is commented on/quoted.|
|`pointedPubId`|`uint256`|The publication ID that is commented on/quoted.|
|`referrerProfileIds`|`uint256[]`||
|`referrerPubIds`|`uint256[]`||
|`referenceModuleData`|`bytes`|The data passed to the reference module.|
|`actionModules`|`address[]`|The action modules to set for this new publication.|
|`actionModulesInitDatas`|`bytes[]`|The data to pass to the action modules' initialization.|
|`referenceModule`|`address`|The reference module to set for the given publication, must be whitelisted.|
|`referenceModuleInitData`|`bytes`|The data to be passed to the reference module for initialization.|

### MirrorParams
A struct containing the parameters required for the `mirror()` function.


```solidity
struct MirrorParams {
    uint256 profileId;
    string metadataURI;
    uint256 pointedProfileId;
    uint256 pointedPubId;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    bytes referenceModuleData;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to publish to.|
|`metadataURI`|`string`|the URI containing metadata attributes to attach to this mirror publication.|
|`pointedProfileId`|`uint256`|The profile token ID to point the mirror to.|
|`pointedPubId`|`uint256`|The publication ID to point the mirror to.|
|`referrerProfileIds`|`uint256[]`||
|`referrerPubIds`|`uint256[]`||
|`referenceModuleData`|`bytes`|The data passed to the reference module.|

### LegacyCollectParams
Deprecated in V2: Will be removed after some time after upgrading to V2.

A struct containing the parameters required for the legacy `collect()` function.

*The referrer can only be a mirror of the publication being collected.*


```solidity
struct LegacyCollectParams {
    uint256 publicationCollectedProfileId;
    uint256 publicationCollectedId;
    uint256 collectorProfileId;
    uint256 referrerProfileId;
    uint256 referrerPubId;
    bytes collectModuleData;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`publicationCollectedProfileId`|`uint256`|The token ID of the profile that published the publication to collect.|
|`publicationCollectedId`|`uint256`|The publication to collect's publication ID.|
|`collectorProfileId`|`uint256`|The collector profile.|
|`referrerProfileId`|`uint256`|The ID of a profile that authored a mirror that helped discovering the collected pub.|
|`referrerPubId`|`uint256`|The ID of the mirror that helped discovering the collected pub.|
|`collectModuleData`|`bytes`|The arbitrary data to pass to the collectModule if needed.|

### PublicationActionParams
A struct containing the parameters required for the `action()` function.


```solidity
struct PublicationActionParams {
    uint256 publicationActedProfileId;
    uint256 publicationActedId;
    uint256 actorProfileId;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    address actionModuleAddress;
    bytes actionModuleData;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`publicationActedProfileId`|`uint256`|The token ID of the profile that published the publication to action.|
|`publicationActedId`|`uint256`|The publication to action's publication ID.|
|`actorProfileId`|`uint256`|The actor profile.|
|`referrerProfileIds`|`uint256[]`||
|`referrerPubIds`|`uint256[]`||
|`actionModuleAddress`|`address`||
|`actionModuleData`|`bytes`|The arbitrary data to pass to the actionModule if needed.|

### ProcessActionParams

```solidity
struct ProcessActionParams {
    uint256 publicationActedProfileId;
    uint256 publicationActedId;
    uint256 actorProfileId;
    address actorProfileOwner;
    address transactionExecutor;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    Types.PublicationType[] referrerPubTypes;
    bytes actionModuleData;
}
```

### ProcessCommentParams

```solidity
struct ProcessCommentParams {
    uint256 profileId;
    uint256 pubId;
    address transactionExecutor;
    uint256 pointedProfileId;
    uint256 pointedPubId;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    Types.PublicationType[] referrerPubTypes;
    bytes data;
}
```

### ProcessQuoteParams

```solidity
struct ProcessQuoteParams {
    uint256 profileId;
    uint256 pubId;
    address transactionExecutor;
    uint256 pointedProfileId;
    uint256 pointedPubId;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    Types.PublicationType[] referrerPubTypes;
    bytes data;
}
```

### ProcessMirrorParams

```solidity
struct ProcessMirrorParams {
    uint256 profileId;
    uint256 pubId;
    address transactionExecutor;
    uint256 pointedProfileId;
    uint256 pointedPubId;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    Types.PublicationType[] referrerPubTypes;
    bytes data;
}
```

### DelegatedExecutorsConfig
A struct containing a profile's delegated executors configuration.


```solidity
struct DelegatedExecutorsConfig {
    mapping(uint256 => mapping(address => bool)) isApproved;
    uint64 configNumber;
    uint64 prevConfigNumber;
    uint64 maxConfigNumberSet;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`isApproved`|`mapping(uint256 => mapping(address => bool))`|Tells when an address is approved as delegated executor in the given configuration number.|
|`configNumber`|`uint64`|Current configuration number in use.|
|`prevConfigNumber`|`uint64`|Previous configuration number set, before switching to the current one.|
|`maxConfigNumberSet`|`uint64`|Maximum configuration number ever used.|

### TreasuryData

```solidity
struct TreasuryData {
    address treasury;
    uint16 treasuryFeeBPS;
}
```

### MigrationParams

```solidity
struct MigrationParams {
    address digiHandlesAddress;
    address tokenHandleRegistryAddress;
    address legacyFeeFollowModule;
    address legacyProfileFollowModule;
    address newFeeFollowModule;
}
```

## Enums
### ProtocolState
An enum containing the different states the protocol can be in, limiting certain actions.


```solidity
enum ProtocolState {
    Unpaused,
    PublishingPaused,
    Paused
}
```

### PublicationType
An enum specifically used in a helper function to easily retrieve the publication type for integrations.


```solidity
enum PublicationType {
    Nonexistent,
    Post,
    Comment,
    Mirror,
    Quote
}
```

