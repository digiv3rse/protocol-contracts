# Events
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/libraries/constants/Events.sol)


## Events
### BaseInitialized
*Emitted when the NFT contract's name and symbol are set at initialization.*


```solidity
event BaseInitialized(string name, string symbol, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`name`|`string`|The NFT name set.|
|`symbol`|`string`|The NFT symbol set.|
|`timestamp`|`uint256`|The current block timestamp.|

### StateSet
*Emitted when the hub state is set.*


```solidity
event StateSet(
    address indexed caller,
    Types.ProtocolState indexed prevState,
    Types.ProtocolState indexed newState,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The caller who set the state.|
|`prevState`|`Types.ProtocolState`|The previous protocol state, an enum of either `Paused`, `PublishingPaused` or `Unpaused`.|
|`newState`|`Types.ProtocolState`|The newly set state, an enum of either `Paused`, `PublishingPaused` or `Unpaused`.|
|`timestamp`|`uint256`|The current block timestamp.|

### GovernanceSet
*Emitted when the governance address is changed. We emit the caller even though it should be the previous
governance address, as we cannot guarantee this will always be the case due to upgradeability.*


```solidity
event GovernanceSet(
    address indexed caller, address indexed prevGovernance, address indexed newGovernance, uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The caller who set the governance address.|
|`prevGovernance`|`address`|The previous governance address.|
|`newGovernance`|`address`|The new governance address set.|
|`timestamp`|`uint256`|The current block timestamp.|

### EmergencyAdminSet
*Emitted when the emergency admin is changed. We emit the caller even though it should be the previous
governance address, as we cannot guarantee this will always be the case due to upgradeability.*


```solidity
event EmergencyAdminSet(
    address indexed caller, address indexed oldEmergencyAdmin, address indexed newEmergencyAdmin, uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The caller who set the emergency admin address.|
|`oldEmergencyAdmin`|`address`|The previous emergency admin address.|
|`newEmergencyAdmin`|`address`|The new emergency admin address set.|
|`timestamp`|`uint256`|The current block timestamp.|

### ProfileCreatorWhitelisted
*Emitted when a profile creator is added to or removed from the whitelist.*


```solidity
event ProfileCreatorWhitelisted(address indexed profileCreator, bool indexed whitelisted, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileCreator`|`address`|The address of the profile creator.|
|`whitelisted`|`bool`|Whether or not the profile creator is being added to the whitelist.|
|`timestamp`|`uint256`|The current block timestamp.|

### ProfileCreated
*Emitted when a profile is created.*


```solidity
event ProfileCreated(uint256 indexed profileId, address indexed creator, address indexed to, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The newly created profile's token ID.|
|`creator`|`address`|The profile creator, who created the token with the given profile ID.|
|`to`|`address`|The address receiving the profile with the given profile ID.|
|`timestamp`|`uint256`|The current block timestamp.|

### DelegatedExecutorsConfigChanged
*Emitted when a delegated executors configuration is changed.*


```solidity
event DelegatedExecutorsConfigChanged(
    uint256 indexed delegatorProfileId,
    uint256 indexed configNumber,
    address[] delegatedExecutors,
    bool[] approvals,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatorProfileId`|`uint256`|The ID of the profile for which the delegated executor was changed.|
|`configNumber`|`uint256`|The number of the configuration where the executor approval state was set.|
|`delegatedExecutors`|`address[]`|The array of delegated executors whose approval was set for.|
|`approvals`|`bool[]`|The array of booleans indicating the corresponding executor new approval status.|
|`timestamp`|`uint256`|The current block timestamp.|

### DelegatedExecutorsConfigApplied
*Emitted when a delegated executors configuration is applied.*


```solidity
event DelegatedExecutorsConfigApplied(
    uint256 indexed delegatorProfileId, uint256 indexed configNumber, uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`delegatorProfileId`|`uint256`|The ID of the profile applying the configuration.|
|`configNumber`|`uint256`|The number of the configuration applied.|
|`timestamp`|`uint256`|The current block timestamp.|

### FollowModuleSet
*Emitted when a profile's follow module is set.*


```solidity
event FollowModuleSet(
    uint256 indexed profileId,
    address followModule,
    bytes followModuleInitData,
    bytes followModuleReturnData,
    address transactionExecutor,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The profile's token ID.|
|`followModule`|`address`|The profile's newly set follow module. This CAN be the zero address.|
|`followModuleInitData`|`bytes`|The data passed to the follow module, if any.|
|`followModuleReturnData`|`bytes`|The data returned from the follow module's initialization. This is ABI-encoded and depends on the follow module chosen.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The current block timestamp.|

### PostCreated
*Emitted when a post is successfully published.*


```solidity
event PostCreated(
    Types.PostParams postParams,
    uint256 indexed pubId,
    bytes[] actionModulesInitReturnDatas,
    bytes referenceModuleInitReturnData,
    address transactionExecutor,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`postParams`|`Types.PostParams`|The parameters passed to create the post publication.|
|`pubId`|`uint256`|The publication ID assigned to the created post.|
|`actionModulesInitReturnDatas`|`bytes[]`|The data returned from the action modules' initialization for this given publication. This is ABI-encoded and depends on the action module chosen.|
|`referenceModuleInitReturnData`|`bytes`|The data returned from the reference module at initialization. This is ABI-encoded and depends on the reference module chosen.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The current block timestamp.|

### CommentCreated
*Emitted when a comment is successfully published.*


```solidity
event CommentCreated(
    Types.CommentParams commentParams,
    uint256 indexed pubId,
    bytes referenceModuleReturnData,
    bytes[] actionModulesInitReturnDatas,
    bytes referenceModuleInitReturnData,
    address transactionExecutor,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`commentParams`|`Types.CommentParams`|The parameters passed to create the comment publication.|
|`pubId`|`uint256`|The publication ID assigned to the created comment.|
|`referenceModuleReturnData`|`bytes`|The data returned by the commented publication reference module's processComment function, if the commented publication has a reference module set.|
|`actionModulesInitReturnDatas`|`bytes[]`|The data returned from the action modules' initialization for this given publication. This is ABI-encoded and depends on the action module chosen.|
|`referenceModuleInitReturnData`|`bytes`|The data returned from the reference module at initialization. This is ABI-encoded and depends on the reference module chosen.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The current block timestamp.|

### MirrorCreated
*Emitted when a mirror is successfully published.*


```solidity
event MirrorCreated(
    Types.MirrorParams mirrorParams,
    uint256 indexed pubId,
    bytes referenceModuleReturnData,
    address transactionExecutor,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`mirrorParams`|`Types.MirrorParams`|The parameters passed to create the mirror publication.|
|`pubId`|`uint256`|The publication ID assigned to the created mirror.|
|`referenceModuleReturnData`|`bytes`|The data returned by the mirrored publication reference module's processMirror function, if the mirrored publication has a reference module set.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The current block timestamp.|

### QuoteCreated
*Emitted when a quote is successfully published.*


```solidity
event QuoteCreated(
    Types.QuoteParams quoteParams,
    uint256 indexed pubId,
    bytes referenceModuleReturnData,
    bytes[] actionModulesInitReturnDatas,
    bytes referenceModuleInitReturnData,
    address transactionExecutor,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`quoteParams`|`Types.QuoteParams`|The parameters passed to create the quote publication.|
|`pubId`|`uint256`|The publication ID assigned to the created quote.|
|`referenceModuleReturnData`|`bytes`|The data returned by the quoted publication reference module's processQuote function, if the quoted publication has a reference module set.|
|`actionModulesInitReturnDatas`|`bytes[]`|The data returned from the action modules' initialization for this given publication. This is ABI-encoded and depends on the action module chosen.|
|`referenceModuleInitReturnData`|`bytes`|The data returned from the reference module at initialization. This is ABI-encoded and depends on the reference module chosen.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The current block timestamp.|

### FollowNFTDeployed
*Emitted when a followNFT clone is deployed using a lazy deployment pattern.*


```solidity
event FollowNFTDeployed(uint256 indexed profileId, address indexed followNFT, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile to which this followNFT is associated.|
|`followNFT`|`address`|The address of the newly deployed followNFT clone.|
|`timestamp`|`uint256`|The current block timestamp.|

### LegacyCollectNFTDeployed
*Emitted when a collectNFT clone is deployed using a lazy deployment pattern.*


```solidity
event LegacyCollectNFTDeployed(
    uint256 indexed profileId, uint256 indexed pubId, address indexed collectNFT, uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The publisher's profile token ID.|
|`pubId`|`uint256`|The publication associated with the newly deployed collectNFT clone's ID.|
|`collectNFT`|`address`|The address of the newly deployed collectNFT clone.|
|`timestamp`|`uint256`|The current block timestamp.|

### Acted
*Emitted upon a successful action.*


```solidity
event Acted(
    Types.PublicationActionParams publicationActionParams,
    bytes actionModuleReturnData,
    address transactionExecutor,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`publicationActionParams`|`Types.PublicationActionParams`|The parameters passed to act on a publication.|
|`actionModuleReturnData`|`bytes`|The data returned from the action modules. This is ABI-encoded and the format depends on the action module chosen.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The current block timestamp.|

### Followed
*Emitted upon a successful follow operation.*


```solidity
event Followed(
    uint256 indexed followerProfileId,
    uint256 idOfProfileFollowed,
    uint256 followTokenIdAssigned,
    bytes followModuleData,
    bytes processFollowModuleReturnData,
    address transactionExecutor,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`followerProfileId`|`uint256`|The ID of the profile that executed the follow.|
|`idOfProfileFollowed`|`uint256`|The ID of the profile that was followed.|
|`followTokenIdAssigned`|`uint256`|The ID of the follow token assigned to the follower.|
|`followModuleData`|`bytes`|The data to pass to the follow module, if any.|
|`processFollowModuleReturnData`|`bytes`|The data returned by the followed profile follow module's processFollow function, if the followed profile has a reference module set.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The timestamp of the follow operation.|

### Unfollowed
*Emitted upon a successful unfollow operation.*


```solidity
event Unfollowed(
    uint256 indexed unfollowerProfileId, uint256 idOfProfileUnfollowed, address transactionExecutor, uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`unfollowerProfileId`|`uint256`|The ID of the profile that executed the unfollow.|
|`idOfProfileUnfollowed`|`uint256`|The ID of the profile that was unfollowed.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The timestamp of the unfollow operation.|

### Blocked
*Emitted upon a successful block, through a block status setting operation.*


```solidity
event Blocked(uint256 indexed byProfileId, uint256 idOfProfileBlocked, address transactionExecutor, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`byProfileId`|`uint256`|The ID of the profile that executed the block status change.|
|`idOfProfileBlocked`|`uint256`|The ID of the profile whose block status have been set to blocked.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The timestamp of the block operation.|

### Unblocked
*Emitted upon a successful unblock, through a block status setting operation.*


```solidity
event Unblocked(
    uint256 indexed byProfileId, uint256 idOfProfileUnblocked, address transactionExecutor, uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`byProfileId`|`uint256`|The ID of the profile that executed the block status change.|
|`idOfProfileUnblocked`|`uint256`|The ID of the profile whose block status have been set to unblocked.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The timestamp of the unblock operation.|

### CollectNFTTransferred
*Emitted via callback when a collectNFT is transferred.*


```solidity
event CollectNFTTransferred(
    uint256 indexed profileId,
    uint256 indexed pubId,
    uint256 indexed collectNFTId,
    address from,
    address to,
    uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The token ID of the profile associated with the collectNFT being transferred.|
|`pubId`|`uint256`|The publication ID associated with the collectNFT being transferred.|
|`collectNFTId`|`uint256`|The collectNFT being transferred's token ID.|
|`from`|`address`|The address the collectNFT is being transferred from.|
|`to`|`address`|The address the collectNFT is being transferred to.|
|`timestamp`|`uint256`|The current block timestamp.|

### TreasurySet
Emitted when the treasury address is set.


```solidity
event TreasurySet(address indexed prevTreasury, address indexed newTreasury, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`prevTreasury`|`address`|The previous treasury address.|
|`newTreasury`|`address`|The new treasury address set.|
|`timestamp`|`uint256`|The current block timestamp.|

### TreasuryFeeSet
Emitted when the treasury fee is set.


```solidity
event TreasuryFeeSet(uint16 indexed prevTreasuryFee, uint16 indexed newTreasuryFee, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`prevTreasuryFee`|`uint16`|The previous treasury fee in BPS.|
|`newTreasuryFee`|`uint16`|The new treasury fee in BPS.|
|`timestamp`|`uint256`|The current block timestamp.|

### ProfileMetadataSet
*Emitted when the metadata associated with a profile is set in the `DiGiPeriphery`.*


```solidity
event ProfileMetadataSet(uint256 indexed profileId, string metadata, address transactionExecutor, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profileId`|`uint256`|The profile ID the metadata is set for.|
|`metadata`|`string`|The metadata set for the profile and user.|
|`transactionExecutor`|`address`|The address of the account that executed this operation.|
|`timestamp`|`uint256`|The current block timestamp.|

### TokenGuardianStateChanged
*Emitted when an address' Profile Guardian state change is triggered.*


```solidity
event TokenGuardianStateChanged(
    address indexed wallet, bool indexed enabled, uint256 tokenGuardianDisablingTimestamp, uint256 timestamp
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`wallet`|`address`|The address whose Token Guardian state change is being triggered.|
|`enabled`|`bool`|True if the Token Guardian is being enabled, false if it is being disabled.|
|`tokenGuardianDisablingTimestamp`|`uint256`|The UNIX timestamp when disabling the Token Guardian will take effect, if disabling it. Zero if the protection is being enabled.|
|`timestamp`|`uint256`|The UNIX timestamp of the change being triggered.|

### NonceUpdated
*Emitted when a signer's nonce is used and, as a consequence, the next available nonce is updated.*


```solidity
event NonceUpdated(address indexed signer, uint256 nonce, uint256 timestamp);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`signer`|`address`|The signer whose next available nonce was updated.|
|`nonce`|`uint256`|The next available nonce that can be used to execute a meta-tx successfully.|
|`timestamp`|`uint256`|The UNIX timestamp of the nonce being used.|

### BatchMetadataUpdate
*Emitted when a collection's token URI is updated.*


```solidity
event BatchMetadataUpdate(uint256 fromTokenId, uint256 toTokenId);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`fromTokenId`|`uint256`|The ID of the smallest token that requires its token URI to be refreshed.|
|`toTokenId`|`uint256`|The ID of the biggest token that requires its token URI to be refreshed. Max uint256 to refresh all of them.|

