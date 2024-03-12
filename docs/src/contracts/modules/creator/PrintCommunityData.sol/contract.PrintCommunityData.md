# PrintCommunityData
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/creator/PrintCommunityData.sol)


## State Variables
### printAccessControl

```solidity
PrintAccessControl public printAccessControl;
```


### symbol

```solidity
string public symbol;
```


### name

```solidity
string public name;
```


### communityCreator

```solidity
address public communityCreator;
```


### _communitySupply

```solidity
uint256 private _communitySupply;
```


### _communities

```solidity
mapping(uint256 => PrintLibrary.Community) private _communities;
```


### _memberProfileIdToIndex

```solidity
mapping(uint256 => mapping(uint256 => uint256)) public _memberProfileIdToIndex;
```


### _profileIdToCommunity

```solidity
mapping(uint256 => mapping(uint256 => bool)) private _profileIdToCommunity;
```


### _addressToCommunity

```solidity
mapping(address => mapping(uint256 => bool)) private _addressToCommunity;
```


## Functions
### onlyCommunityCreator


```solidity
modifier onlyCommunityCreator();
```

### onlyAdmin


```solidity
modifier onlyAdmin();
```

### constructor


```solidity
constructor(address _printAccessControlAddress, address _communityCreatorAddress);
```

### createCommunity


```solidity
function createCommunity(PrintLibrary.CreateCommunityParams memory _params) external;
```

### updateCommunity


```solidity
function updateCommunity(PrintLibrary.CreateCommunityParams memory _params, uint256 communityId)
    external
    onlyCommunityCreator;
```

### addCommunityMember


```solidity
function addCommunityMember(address _memberAddress, uint256 _communityId, uint256 _memberProfileId)
    external
    onlyCommunityCreator;
```

### removeCommunityMember


```solidity
function removeCommunityMember(address _memberAddress, uint256 _communityId, uint256 _memberProfileId)
    external
    onlyCommunityCreator;
```

### setPrintAccessControlAddress


```solidity
function setPrintAccessControlAddress(address _newPrintAccessControlAddress) public onlyAdmin;
```

### setCommunityCreatorAddress


```solidity
function setCommunityCreatorAddress(address _newCommunityCreatorAddress) public onlyAdmin;
```

### getCommunitySupply


```solidity
function getCommunitySupply() public view returns (uint256);
```

### getCommunitySteward


```solidity
function getCommunitySteward(uint256 _communityId) public view returns (address);
```

### getCommunityURI


```solidity
function getCommunityURI(uint256 _communityId) public view returns (string memory);
```

### getCommunityMembers


```solidity
function getCommunityMembers(uint256 _communityId) public view returns (PrintLibrary.CommunityMember[] memory);
```

### getCommunityValidOriginKeys


```solidity
function getCommunityValidOriginKeys(uint256 _communityId) public view returns (PrintLibrary.Origin[] memory);
```

### getCommunityValidCreatorKeys


```solidity
function getCommunityValidCreatorKeys(uint256 _communityId) public view returns (address[] memory);
```

### getCommunityValidPrintTypeKeys


```solidity
function getCommunityValidPrintTypeKeys(uint256 _communityId) public view returns (PrintLibrary.PrintType[] memory);
```

### getCommunityValid20AddressKeys


```solidity
function getCommunityValid20AddressKeys(uint256 _communityId) public view returns (address[] memory);
```

### getCommunityIsValidCreator


```solidity
function getCommunityIsValidCreator(address _creator, uint256 _communityId) public view returns (bool);
```

### getCommunityIsValidOrigin


```solidity
function getCommunityIsValidOrigin(PrintLibrary.Origin _origin, uint256 _communityId) public view returns (bool);
```

### getCommunityIsValidPrintType


```solidity
function getCommunityIsValidPrintType(PrintLibrary.PrintType _printType, uint256 _communityId)
    public
    view
    returns (bool);
```

### getCommunityValid20Threshold


```solidity
function getCommunityValid20Threshold(address _tokenAddress, uint256 _communityId) public view returns (uint256);
```

### getIsValidCommunityAddress


```solidity
function getIsValidCommunityAddress(address _memberAddress, uint256 _communityId) public view returns (bool);
```

### getIsCommunityMember


```solidity
function getIsCommunityMember(uint256 _communityId, uint256 _memberProfileId) public view returns (bool);
```

### getMemberToIndex


```solidity
function getMemberToIndex(uint256 _communityId, uint256 _memberProfileId) public view returns (uint256);
```

## Events
### CommunityCreated

```solidity
event CommunityCreated(uint256 indexed communityId, address steward, string uri);
```

### CommunityUpdated

```solidity
event CommunityUpdated(uint256 indexed communityId, address steward, string uri);
```

### CommunityMemberAdded

```solidity
event CommunityMemberAdded(uint256 indexed communityId, address memberAddress, uint256 memberProfileId);
```

### CommunityMemberRemoved

```solidity
event CommunityMemberRemoved(uint256 indexed communityId, uint256 memberProfileId);
```

## Errors
### InvalidAddress

```solidity
error InvalidAddress();
```

