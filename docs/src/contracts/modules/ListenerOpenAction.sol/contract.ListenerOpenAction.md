# ListenerOpenAction
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/ListenerOpenAction.sol)

**Inherits:**
[HubRestricted](/contracts/base/HubRestricted.sol/abstract.HubRestricted.md), [IDiGiModule](/contracts/modules/interfaces/IDiGiModule.sol/interface.IDiGiModule.md), [IPublicationActionModule](/contracts/interfaces/IPublicationActionModule.sol/interface.IPublicationActionModule.md)


## State Variables
### marketCreator

```solidity
MarketCreator public marketCreator;
```


### collectionCreator

```solidity
CollectionCreator public collectionCreator;
```


### printAccessControl

```solidity
PrintAccessControl public printAccessControl;
```


### printSplitsData

```solidity
PrintSplitsData public printSplitsData;
```


### printDesignData

```solidity
PrintDesignData public printDesignData;
```


### printCommunityData

```solidity
PrintCommunityData public printCommunityData;
```


### _metadata

```solidity
string private _metadata;
```


### _collectionGroups

```solidity
mapping(uint256 => mapping(uint256 => uint256)) _collectionGroups;
```


### MODULE_GLOBALS

```solidity
IModuleRegistry public immutable MODULE_GLOBALS;
```


## Functions
### onlyAdmin


```solidity
modifier onlyAdmin();
```

### constructor


```solidity
constructor(
    string memory _metadataDetails,
    address _hub,
    address _moduleGlobals,
    address _printAccessControlAddress,
    address _printSplitsDataAddress,
    address _printDesignDataAddress,
    address _marketCreatorAddress,
    address _collectionCreatorAddress,
    address _printCommunityDataAddress
) HubRestricted(_hub);
```

### initializePublicationAction


```solidity
function initializePublicationAction(uint256 _profileId, uint256 _pubId, address _executor, bytes calldata _data)
    external
    override
    onlyHub
    returns (bytes memory);
```

### processPublicationAction


```solidity
function processPublicationAction(Types.ProcessActionParams calldata _params)
    external
    override
    onlyHub
    returns (bytes memory);
```

### _transferTokens


```solidity
function _transferTokens(
    uint256 _collectionId,
    uint256 _chosenIndex,
    uint256 _chosenAmount,
    address _chosenCurrency,
    address _designer,
    address _buyer
) internal returns (uint256);
```

### setPrintDesignDataAddress


```solidity
function setPrintDesignDataAddress(address _newPrintDesignDataAddress) public onlyAdmin;
```

### setPrintAccessControlAddress


```solidity
function setPrintAccessControlAddress(address _newPrintAccessControlAddress) public onlyAdmin;
```

### setPrintCommunityDataAddress


```solidity
function setPrintCommunityDataAddress(address _newPrintCommunityDataAddress) public onlyAdmin;
```

### setMarketCreatorAddress


```solidity
function setMarketCreatorAddress(address _newMarketCreatorAddress) public onlyAdmin;
```

### setCollectionCreatorAddress


```solidity
function setCollectionCreatorAddress(address _newCollectionCreatorAddress) public onlyAdmin;
```

### _configureCollection


```solidity
function _configureCollection(
    PrintLibrary.CollectionValuesParams memory _collectionCreator,
    PrintLibrary.PrintType _printType,
    uint256 _pubId,
    uint256 _profileId
) internal returns (uint256);
```

### _fillCollection


```solidity
function _fillCollection(uint256 _collectionId, uint256 _quantitiesLength) internal pure returns (uint256[] memory);
```

### _checkCommunity


```solidity
function _checkCommunity(uint256 _collectionId, uint256 _profileId) internal view returns (bool);
```

### _calculateAmount


```solidity
function _calculateAmount(address _currency, uint256 _amountInWei) internal view returns (uint256);
```

### _checkAndSend


```solidity
function _checkAndSend(
    address _currency,
    address _buyer,
    uint256[] memory _quantities,
    uint256[] memory _chosenIndexes,
    uint256 _collectionId,
    uint256 _profileId,
    bool _isVerified
) internal returns (uint256);
```

### _managePurchase


```solidity
function _managePurchase(
    Types.ProcessActionParams calldata _params,
    uint256[] memory _chosenIndexes,
    uint256[] memory _quantities,
    uint256 _collectionId,
    address _currency,
    bool _fiat
) internal returns (uint256, bool);
```

### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceId) external view override returns (bool);
```

### getModuleMetadataURI


```solidity
function getModuleMetadataURI() external view override returns (string memory);
```

## Events
### ListenerPurchased

```solidity
event ListenerPurchased(
    address buyerAddress, uint256 collectionId, uint256 pubId, uint256 profileId, uint256 totalAmount
);
```

### ListenerInitialized

```solidity
event ListenerInitialized(
    uint256 collectionId, uint256 profileId, uint256 pubId, address creatorAddress, uint256 numberOfCollections
);
```

## Errors
### CurrencyNotWhitelisted

```solidity
error CurrencyNotWhitelisted();
```

### InvalidAddress

```solidity
error InvalidAddress();
```

### InvalidAmounts

```solidity
error InvalidAmounts();
```

### InvalidCommunityMember

```solidity
error InvalidCommunityMember();
```

### ExceedAmount

```solidity
error ExceedAmount();
```

