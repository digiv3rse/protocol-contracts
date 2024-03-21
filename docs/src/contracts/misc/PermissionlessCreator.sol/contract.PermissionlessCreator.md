# PermissionlessCreator
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/misc/PermissionlessCreator.sol)

**Inherits:**
[ImmutableOwnable](/contracts/misc/ImmutableOwnable.sol/contract.ImmutableOwnable.md)

**Author:**
DiGi Protocol

This is an ownable public proxy contract which is open for all.


## State Variables
### DIGI_HANDLES

```solidity
IDiGiHandles public immutable DIGI_HANDLES;
```


### TOKEN_HANDLE_REGISTRY

```solidity
ITokenHandleRegistry public immutable TOKEN_HANDLE_REGISTRY;
```


### _profileCreationCost

```solidity
uint128 private _profileCreationCost;
```


### _handleCreationCost

```solidity
uint128 private _handleCreationCost;
```


### _handleLengthMin

```solidity
uint8 private _handleLengthMin;
```


### _credits

```solidity
mapping(address => uint256) internal _credits;
```


### _isCreditProvider

```solidity
mapping(address => bool) internal _isCreditProvider;
```


### _isUntrusted

```solidity
mapping(address => bool) internal _isUntrusted;
```


### _profileCreatorUsingCredits

```solidity
mapping(uint256 => address) internal _profileCreatorUsingCredits;
```


## Functions
### onlyCreditProviders


```solidity
modifier onlyCreditProviders();
```

### constructor


```solidity
constructor(address owner, address digiHub, address digiHandles, address tokenHandleRegistry)
    ImmutableOwnable(owner, digiHub);
```

### createProfile


```solidity
function createProfile(Types.CreateProfileParams calldata createProfileParams, address[] calldata delegatedExecutors)
    external
    payable
    returns (uint256);
```

### createHandle


```solidity
function createHandle(address to, string calldata handle) external payable returns (uint256);
```

### createProfileWithHandle


```solidity
function createProfileWithHandle(
    Types.CreateProfileParams calldata createProfileParams,
    string calldata handle,
    address[] calldata delegatedExecutors
) external payable returns (uint256, uint256);
```

### createProfileUsingCredits


```solidity
function createProfileUsingCredits(
    Types.CreateProfileParams calldata createProfileParams,
    address[] calldata delegatedExecutors
) external returns (uint256);
```

### createProfileWithHandleUsingCredits


```solidity
function createProfileWithHandleUsingCredits(
    Types.CreateProfileParams calldata createProfileParams,
    string calldata handle,
    address[] calldata delegatedExecutors
) external returns (uint256, uint256);
```

### createHandleUsingCredits


```solidity
function createHandleUsingCredits(address to, string calldata handle) external returns (uint256);
```

### _createProfile


```solidity
function _createProfile(Types.CreateProfileParams calldata createProfileParams, address[] memory delegatedExecutors)
    internal
    returns (uint256);
```

### _createProfileWithHandle


```solidity
function _createProfileWithHandle(
    Types.CreateProfileParams calldata createProfileParams,
    string calldata handle,
    address[] memory delegatedExecutors
) private returns (uint256, uint256);
```

### _addDelegatesToProfile


```solidity
function _addDelegatesToProfile(uint256 profileId, address[] memory delegatedExecutors) private;
```

### _validateHandleLength


```solidity
function _validateHandleLength(string calldata handle) private view;
```

### _validatePayment


```solidity
function _validatePayment(uint256 amount) private view;
```

### _spendCredit


```solidity
function _spendCredit(address account) private;
```

### transferFromKeepingDelegates

Special function allowing to transfer a profile from one address to another, keeping the delegates.

*Requires the sender, a trusted credit-based creator, to approve the profile with this contract as spender.*


```solidity
function transferFromKeepingDelegates(address from, address to, uint256 tokenId) external;
```

### increaseCredits


```solidity
function increaseCredits(address account, uint256 amount) external onlyCreditProviders;
```

### decreaseCredits


```solidity
function decreaseCredits(address account, uint256 amount) external onlyCreditProviders;
```

### withdrawFunds


```solidity
function withdrawFunds() external onlyOwner;
```

### addCreditProvider


```solidity
function addCreditProvider(address creditProvider) external onlyOwner;
```

### removeCreditProvider


```solidity
function removeCreditProvider(address creditProvider) external onlyOwner;
```

### setProfileCreationPrice


```solidity
function setProfileCreationPrice(uint128 newPrice) external onlyOwner;
```

### setHandleCreationPrice


```solidity
function setHandleCreationPrice(uint128 newPrice) external onlyOwner;
```

### setHandleLengthMin


```solidity
function setHandleLengthMin(uint8 newMinLength) external onlyOwner;
```

### setTrustStatus


```solidity
function setTrustStatus(address targetAddress, bool setAsUntrusted) external onlyOwner;
```

### getProfileWithHandleCreationPrice


```solidity
function getProfileWithHandleCreationPrice() external view returns (uint256);
```

### getProfileCreationPrice


```solidity
function getProfileCreationPrice() external view returns (uint256);
```

### getHandleCreationPrice


```solidity
function getHandleCreationPrice() external view returns (uint256);
```

### getHandleLengthMin


```solidity
function getHandleLengthMin() external view returns (uint8);
```

### isUntrusted


```solidity
function isUntrusted(address targetAddress) external view returns (bool);
```

### isCreditProvider


```solidity
function isCreditProvider(address targetAddress) external view returns (bool);
```

### getCreditBalance


```solidity
function getCreditBalance(address targetAddress) external view returns (uint256);
```

### getProfileCreatorUsingCredits


```solidity
function getProfileCreatorUsingCredits(uint256 profileId) external view returns (address);
```

## Events
### HandleCreationPriceChanged

```solidity
event HandleCreationPriceChanged(uint256 newPrice, uint256 timestamp);
```

### ProfileCreationPriceChanged

```solidity
event ProfileCreationPriceChanged(uint256 newPrice, uint256 timestamp);
```

### HandleLengthMinChanged

```solidity
event HandleLengthMinChanged(uint8 newMinLength, uint256 timestamp);
```

### CreditBalanceChanged

```solidity
event CreditBalanceChanged(address indexed creditAddress, uint256 remainingCredits, uint256 timestamp);
```

### TrustStatusChanged

```solidity
event TrustStatusChanged(address indexed targetAddress, bool isUntrusted, uint256 timestamp);
```

### CreditProviderStatusChanged

```solidity
event CreditProviderStatusChanged(address indexed creditProvider, bool isCreditProvider, uint256 timestamp);
```

### ProfileCreatedUsingCredits

```solidity
event ProfileCreatedUsingCredits(uint256 indexed profileId, address indexed creator, uint256 timestamp);
```

### HandleCreatedUsingCredits

```solidity
event HandleCreatedUsingCredits(uint256 indexed handleId, string handle, address indexed creator, uint256 timestamp);
```

## Errors
### OnlyCreditProviders

```solidity
error OnlyCreditProviders();
```

### HandleAlreadyExists

```solidity
error HandleAlreadyExists();
```

### InvalidFunds

```solidity
error InvalidFunds();
```

### InsufficientCredits

```solidity
error InsufficientCredits();
```

### ProfileAlreadyLinked

```solidity
error ProfileAlreadyLinked();
```

### HandleLengthNotAllowed

```solidity
error HandleLengthNotAllowed();
```

### NotAllowed

```solidity
error NotAllowed();
```

