# DiGiProfiles
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/base/DiGiProfiles.sol)

**Inherits:**
[DiGiBaseERC721](/contracts/base/DiGiBaseERC721.sol/abstract.DiGiBaseERC721.md), [ERC2981CollectionRoyalties](/contracts/base/ERC2981CollectionRoyalties.sol/abstract.ERC2981CollectionRoyalties.md), [IDiGiProfiles](/contracts/misc/PermissionlessCreator.sol/interface.IDiGiProfiles.md)


## State Variables
### TOKEN_GUARDIAN_COOLDOWN

```solidity
uint256 public immutable TOKEN_GUARDIAN_COOLDOWN;
```


## Functions
### constructor


```solidity
constructor(uint256 tokenGuardianCooldown);
```

### whenNotPaused


```solidity
modifier whenNotPaused();
```

### onlyProfileOwner


```solidity
modifier onlyProfileOwner(address expectedOwner, uint256 profileId);
```

### onlyEOA


```solidity
modifier onlyEOA();
```

### getTokenGuardianDisablingTimestamp

Returns the timestamp at which the Token Guardian will become effectively disabled.


```solidity
function getTokenGuardianDisablingTimestamp(address wallet) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`wallet`|`address`|The address to check the timestamp for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The timestamp at which the Token Guardian will become effectively disabled. Zero if enabled.|


### DANGER__disableTokenGuardian

DANGER: Triggers disabling the profile protection mechanism for the msg.sender, which will allow
transfers or approvals over profiles held by it.
Disabling the mechanism will have a timelock before it becomes effective, allowing the owner to re-enable
the protection back in case of being under attack.
The protection layer only applies to EOA wallets.


```solidity
function DANGER__disableTokenGuardian() external onlyEOA;
```

### enableTokenGuardian

Enables back the profile protection mechanism for the msg.sender, preventing profile transfers or
approvals (except when revoking them).
The protection layer only applies to EOA wallets.


```solidity
function enableTokenGuardian() external onlyEOA;
```

### burn

Burns a profile, this maintains the profile data struct.


```solidity
function burn(uint256 tokenId)
    public
    override(DiGiBaseERC721, IERC721Burnable)
    whenNotPaused
    onlyProfileOwner(msg.sender, tokenId);
```

### tokenURI

*Overrides the ERC721 tokenURI function to return the associated URI with a given profile.*


```solidity
function tokenURI(uint256 tokenId) public view override(DiGiBaseERC721, IERC721Metadata) returns (string memory);
```

### approve


```solidity
function approve(address to, uint256 tokenId) public override(DiGiBaseERC721, IERC721);
```

### setApprovalForAll


```solidity
function setApprovalForAll(address operator, bool approved) public override(DiGiBaseERC721, IERC721);
```

### supportsInterface

*See [IERC165-supportsInterface](/contracts/base/DiGiBaseERC721.sol/abstract.DiGiBaseERC721.md#supportsinterface).*


```solidity
function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(DiGiBaseERC721, ERC2981CollectionRoyalties, IERC165)
    returns (bool);
```

### _hasTokenGuardianEnabled


```solidity
function _hasTokenGuardianEnabled(address wallet) internal view returns (bool);
```

### _getRoyaltiesInBasisPointsSlot


```solidity
function _getRoyaltiesInBasisPointsSlot() internal pure override returns (uint256);
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
function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override whenNotPaused;
```

