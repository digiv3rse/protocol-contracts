# SeaDropMintPublicationAction
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/act/seadrop/SeaDropMintPublicationAction.sol)

**Inherits:**
[DiGiModuleMetadataInitializable](/contracts/modules/DiGiModuleMetadataInitializable.sol/contract.DiGiModuleMetadataInitializable.md), [HubRestricted](/contracts/base/HubRestricted.sol/abstract.HubRestricted.md), [IPublicationActionModule](/contracts/interfaces/IPublicationActionModule.sol/interface.IPublicationActionModule.md)


## State Variables
### MAX_BPS

```solidity
uint256 constant MAX_BPS = 10_000;
```


### SEADROP

```solidity
ISeaDrop public immutable SEADROP;
```


### WMATIC

```solidity
IWMATIC public immutable WMATIC;
```


### MODULE_REGISTRY

```solidity
IModuleRegistry public immutable MODULE_REGISTRY;
```


### _collectionDataByPub

```solidity
mapping(uint256 profileId => mapping(uint256 pubId => CollectionData collectionData)) internal _collectionDataByPub;
```


### digiSeaDropCollectionImpl

```solidity
address public digiSeaDropCollectionImpl;
```


## Functions
### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceID) public pure override returns (bool);
```

### constructor


```solidity
constructor(address hub, address moduleRegistry, address seaDrop, address wmatic, address moduleOwner)
    HubRestricted(hub)
    DiGiModuleMetadataInitializable(moduleOwner);
```

### deploySeaDropCollection


```solidity
function deploySeaDropCollection(
    address owner,
    string memory name,
    string memory symbol,
    ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStruct calldata config
) external returns (address);
```

### setDiGiSeaDropCollectionImpl


```solidity
function setDiGiSeaDropCollectionImpl(address newDiGiSeaDropCollectionImpl) external;
```

### initializePublicationAction


```solidity
function initializePublicationAction(uint256 profileId, uint256 pubId, address, bytes calldata data)
    external
    override
    onlyHub
    returns (bytes memory);
```

### receive


```solidity
receive() external payable;
```

### withdrawToTreasury


```solidity
function withdrawToTreasury(address currency) external;
```

### processPublicationAction


```solidity
function processPublicationAction(Types.ProcessActionParams calldata processActionParams)
    external
    override
    onlyHub
    returns (bytes memory);
```

### rescaleFees


```solidity
function rescaleFees(uint256 profileId, uint256 pubId) public;
```

### _rescaleFees


```solidity
function _rescaleFees(uint256 profileId, uint256 pubId, uint16 digiTreasuryFeeBps, PublicDrop memory publicDrop)
    internal;
```

### _distributeFees


```solidity
function _distributeFees(
    uint256 feesToDistribute,
    uint256 mintPaymentAmount,
    address digiTreasuryAddress,
    CollectionData memory collectionData,
    Types.ProcessActionParams calldata processActionParams
) internal;
```

### _validateFees


```solidity
function _validateFees(PublicDrop memory publicDrop, uint16 digiTreasuryFeeBps, uint16 referrersFeeBps) internal pure;
```

### _validateFeesAndRescaleThemIfNecessary


```solidity
function _validateFeesAndRescaleThemIfNecessary(
    uint256 profileId,
    uint256 pubId,
    PublicDrop memory publicDrop,
    uint16 digiTreasuryFeeBps,
    uint16 referrersFeeBps
) internal;
```

## Events
### SeaDropPublicationFeesRescaled

```solidity
event SeaDropPublicationFeesRescaled(uint256 profileId, uint256 pubId, uint16 referrersFeeBps);
```

### DiGiSeaDropCollectionDeployed

```solidity
event DiGiSeaDropCollectionDeployed(
    address collectionAddress,
    address owner,
    string name,
    string symbol,
    ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStruct config
);
```

## Errors
### WrongMintPaymentAmount

```solidity
error WrongMintPaymentAmount();
```

### SeaDropFeesNotReceived

```solidity
error SeaDropFeesNotReceived();
```

### ActionModuleNotAllowedAsPayer

```solidity
error ActionModuleNotAllowedAsPayer();
```

### ActionModuleNotAllowedAsFeeRecipient

```solidity
error ActionModuleNotAllowedAsFeeRecipient();
```

### MintPriceExceedsExpectedOne

```solidity
error MintPriceExceedsExpectedOne();
```

### NotEnoughFeesSet

```solidity
error NotEnoughFeesSet();
```

### Unauthorized

```solidity
error Unauthorized();
```

## Structs
### CollectionData

```solidity
struct CollectionData {
    address nftCollectionAddress;
    uint16 referrersFeeBps;
}
```

