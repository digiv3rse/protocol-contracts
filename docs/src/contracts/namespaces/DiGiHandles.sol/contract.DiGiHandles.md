# DiGiHandles
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/namespaces/DiGiHandles.sol)

**Inherits:**
ERC721, [ERC2981CollectionRoyalties](/contracts/base/ERC2981CollectionRoyalties.sol/abstract.ERC2981CollectionRoyalties.md), [ImmutableOwnable](/contracts/misc/ImmutableOwnable.sol/contract.ImmutableOwnable.md), [IDiGiHandles](/contracts/interfaces/IDiGiHandles.sol/interface.IDiGiHandles.md)

A handle is defined as a local name inside a namespace context. A handle is represented as the local name with its
namespace applied as a prefix, using the slash symbol as separator.
handle = namespace /@ localName
Handle and local name can be used interchangeably once you are in a context of a namespace, as it became redundant.
handle === ${localName} ; inside some namespace.


## State Variables
### MAX_LOCAL_NAME_LENGTH

```solidity
uint256 internal constant MAX_LOCAL_NAME_LENGTH = 26;
```


### NAMESPACE

```solidity
string public constant NAMESPACE = "digi";
```


### NAMESPACE_LENGTH

```solidity
uint256 internal immutable NAMESPACE_LENGTH = bytes(NAMESPACE).length;
```


### NAMESPACE_HASH

```solidity
bytes32 public constant NAMESPACE_HASH = keccak256(bytes(NAMESPACE));
```


### TOKEN_GUARDIAN_COOLDOWN

```solidity
uint256 public immutable TOKEN_GUARDIAN_COOLDOWN;
```


### GUARDIAN_ENABLED

```solidity
uint256 internal constant GUARDIAN_ENABLED = type(uint256).max;
```


### _tokenGuardianDisablingTimestamp

```solidity
mapping(address => uint256) internal _tokenGuardianDisablingTimestamp;
```


### _profileRoyaltiesBps

```solidity
uint256 internal _profileRoyaltiesBps;
```


### _totalSupply

```solidity
uint256 private _totalSupply;
```


### _localNames

```solidity
mapping(uint256 tokenId => string localName) internal _localNames;
```


### _handleTokenURIContract

```solidity
address internal _handleTokenURIContract;
```


## Functions
### onlyOwnerOrWhitelistedProfileCreator


```solidity
modifier onlyOwnerOrWhitelistedProfileCreator();
```

### onlyEOA


```solidity
modifier onlyEOA();
```

### onlyHub


```solidity
modifier onlyHub();
```

### constructor


```solidity
constructor(address owner, address digiHub, uint256 tokenGuardianCooldown)
    ERC721("", "")
    ImmutableOwnable(owner, digiHub);
```

### name


```solidity
function name() public pure override returns (string memory);
```

### symbol


```solidity
function symbol() public pure override returns (string memory);
```

### totalSupply


```solidity
function totalSupply() external view virtual override returns (uint256);
```

### setHandleTokenURIContract


```solidity
function setHandleTokenURIContract(address handleTokenURIContract) external override onlyOwner;
```

### getHandleTokenURIContract


```solidity
function getHandleTokenURIContract() external view override returns (address);
```

### tokenURI

*See [IERC721Metadata-tokenURI](/contracts/FollowNFT.sol/contract.FollowNFT.md#tokenuri).*


```solidity
function tokenURI(uint256 tokenId) public view override returns (string memory);
```

### mintHandle

Mints a handle NFT in the given namespace.


```solidity
function mintHandle(address to, string calldata localName)
    external
    onlyOwnerOrWhitelistedProfileCreator
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address to mint the handle to.|
|`localName`|`string`|The local name of the handle (the part before ".digi").|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The ID of the handle NFT minted.|


### migrateHandle


```solidity
function migrateHandle(address to, string calldata localName) external onlyHub returns (uint256);
```

### burn


```solidity
function burn(uint256 tokenId) external;
```

### DANGER__disableTokenGuardian

************************************
****  TOKEN GUARDIAN FUNCTIONS  ****
************************************


```solidity
function DANGER__disableTokenGuardian() external override onlyEOA;
```

### enableTokenGuardian


```solidity
function enableTokenGuardian() external override onlyEOA;
```

### approve


```solidity
function approve(address to, uint256 tokenId) public override(ERC721, IERC721);
```

### setApprovalForAll


```solidity
function setApprovalForAll(address operator, bool approved) public override(ERC721, IERC721);
```

### exists


```solidity
function exists(uint256 tokenId) external view override returns (bool);
```

### getNamespace


```solidity
function getNamespace() external pure returns (string memory);
```

### getNamespaceHash


```solidity
function getNamespaceHash() external pure returns (bytes32);
```

### getLocalName


```solidity
function getLocalName(uint256 tokenId) public view returns (string memory);
```

### getHandle


```solidity
function getHandle(uint256 tokenId) public view returns (string memory);
```

### getTokenId


```solidity
function getTokenId(string memory localName) public pure returns (uint256);
```

### getTokenGuardianDisablingTimestamp


```solidity
function getTokenGuardianDisablingTimestamp(address wallet) external view override returns (uint256);
```

### supportsInterface

*See [IERC165-supportsInterface](/contracts/FollowNFT.sol/contract.FollowNFT.md#supportsinterface).*


```solidity
function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(ERC2981CollectionRoyalties, ERC721, IERC165)
    returns (bool);
```

### _mintHandle

INTERNAL FUNCTIONS      ///


```solidity
function _mintHandle(address to, string calldata localName) internal returns (uint256);
```

### _validateLocalNameMigration

*This function is used to validate the local name when migrating from V1 to V2.
As in V1 we also allowed the Hyphen '-' character, we need to allow it here as well and use a separate
validation function for migration VS newly created handles.*


```solidity
function _validateLocalNameMigration(string memory localName) internal pure;
```

### _validateLocalName

*In V2 we only accept the following characters: [a-z0-9_] to be used in newly created handles.
We also disallow the first character to be an underscore '_'.*


```solidity
function _validateLocalName(string memory localName) internal pure;
```

### _isAlphaNumeric

*We only accept lowercase characters to avoid confusion.*


```solidity
function _isAlphaNumeric(bytes1 char) internal pure returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`char`|`bytes1`|The character to check.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the character is alphanumeric, false otherwise.|


### _hasTokenGuardianEnabled


```solidity
function _hasTokenGuardianEnabled(address wallet) internal view returns (bool);
```

### _getRoyaltiesInBasisPointsSlot


```solidity
function _getRoyaltiesInBasisPointsSlot() internal pure override returns (uint256 slot);
```

### _getReceiver


```solidity
function _getReceiver(uint256) internal view override returns (address);
```

### _beforeRoyaltiesSet


```solidity
function _beforeRoyaltiesSet(uint256) internal view override;
```

### _beforeTokenTransfer


```solidity
function _beforeTokenTransfer(address from, address to, uint256, uint256 batchSize) internal override;
```

