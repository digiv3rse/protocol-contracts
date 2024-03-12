# PrintAccessControl
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/creator/PrintAccessControl.sol)


## State Variables
### symbol

```solidity
string public symbol;
```


### name

```solidity
string public name;
```


### fiatPKPAddress

```solidity
address public fiatPKPAddress;
```


### _admins

```solidity
mapping(address => bool) private _admins;
```


### _designers

```solidity
mapping(address => bool) private _designers;
```


### _openActions

```solidity
mapping(address => bool) private _openActions;
```


### _fulfillers

```solidity
mapping(address => bool) private _fulfillers;
```


### _pkps

```solidity
mapping(address => bool) private _pkps;
```


### _communityStewards

```solidity
mapping(address => bool) private _communityStewards;
```


### _verifiedFiat

```solidity
mapping(address => mapping(uint256 => mapping(uint256 => bool))) _verifiedFiat;
```


## Functions
### onlyAdmin


```solidity
modifier onlyAdmin();
```

### pkpOrAdmin


```solidity
modifier pkpOrAdmin();
```

### constructor


```solidity
constructor();
```

### addAdmin


```solidity
function addAdmin(address _admin) external onlyAdmin;
```

### removeAdmin


```solidity
function removeAdmin(address _admin) external onlyAdmin;
```

### addDesigner


```solidity
function addDesigner(address _designer) external onlyAdmin;
```

### removeDesigner


```solidity
function removeDesigner(address _designer) external onlyAdmin;
```

### addOpenAction


```solidity
function addOpenAction(address _openAction) external onlyAdmin;
```

### removeOpenAction


```solidity
function removeOpenAction(address _openAction) external onlyAdmin;
```

### addFulfiller


```solidity
function addFulfiller(address _fulfiller) external onlyAdmin;
```

### removeFulfiller


```solidity
function removeFulfiller(address _fulfiller) external onlyAdmin;
```

### addPKP


```solidity
function addPKP(address _pkp) external onlyAdmin;
```

### removePKP


```solidity
function removePKP(address _pkp) external onlyAdmin;
```

### addCommunitySteward


```solidity
function addCommunitySteward(address _communitySteward) external onlyAdmin;
```

### removeCommunitySteward


```solidity
function removeCommunitySteward(address _communitySteward) external onlyAdmin;
```

### addVerifiedFiat


```solidity
function addVerifiedFiat(address _verified, uint256 _pubId, uint256 _profileId) external pkpOrAdmin;
```

### removeVerifiedFiat


```solidity
function removeVerifiedFiat(address _verified, uint256 _pubId, uint256 _profileId) external pkpOrAdmin;
```

### setFiatPKPAddress


```solidity
function setFiatPKPAddress(address _newFiatPKPAddress) public onlyAdmin;
```

### isAdmin


```solidity
function isAdmin(address _address) public view returns (bool);
```

### isOpenAction


```solidity
function isOpenAction(address _address) public view returns (bool);
```

### isDesigner


```solidity
function isDesigner(address _address) public view returns (bool);
```

### isFulfiller


```solidity
function isFulfiller(address _address) public view returns (bool);
```

### isPKP


```solidity
function isPKP(address _address) public view returns (bool);
```

### isCommunitySteward


```solidity
function isCommunitySteward(address _address) public view returns (bool);
```

### isVerifiedFiat


```solidity
function isVerifiedFiat(address _address, uint256 _profileId, uint256 _pubId) public view returns (bool);
```

## Events
### AdminAdded

```solidity
event AdminAdded(address indexed admin);
```

### AdminRemoved

```solidity
event AdminRemoved(address indexed admin);
```

### DesignerAdded

```solidity
event DesignerAdded(address indexed designer);
```

### DesignerRemoved

```solidity
event DesignerRemoved(address indexed designer);
```

### OpenActionAdded

```solidity
event OpenActionAdded(address indexed openAction);
```

### OpenActionRemoved

```solidity
event OpenActionRemoved(address indexed openAction);
```

### FulfillerAdded

```solidity
event FulfillerAdded(address indexed fulfiller);
```

### FulfillerRemoved

```solidity
event FulfillerRemoved(address indexed fulfiller);
```

### PKPAdded

```solidity
event PKPAdded(address indexed pkp);
```

### PKPRemoved

```solidity
event PKPRemoved(address indexed pkp);
```

### CommunityStewardAdded

```solidity
event CommunityStewardAdded(address indexed pkp);
```

### CommunityStewardRemoved

```solidity
event CommunityStewardRemoved(address indexed pkp);
```

### VerifiedFiatAdded

```solidity
event VerifiedFiatAdded(address indexed verified);
```

### VerifiedFiatRemoved

```solidity
event VerifiedFiatRemoved(address indexed verified);
```

## Errors
### AddressInvalid

```solidity
error AddressInvalid();
```

### Existing

```solidity
error Existing();
```

### CantRemoveSelf

```solidity
error CantRemoveSelf();
```

