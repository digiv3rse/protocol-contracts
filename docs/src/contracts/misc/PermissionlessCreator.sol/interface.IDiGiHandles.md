# IDiGiHandles
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/misc/PermissionlessCreator.sol)

**Inherits:**
[IERC721](/contracts/misc/PermissionlessCreator.sol/interface.IERC721.md)

**Author:**
DiGi Protocol

This is the interface for the DiGiHandles contract that is responsible for minting and burning handle NFTs.
A handle is composed of a local name and a namespace, separated by a dot.
Example: `satoshi.digi` is a handle composed of the local name `satoshi` and the namespace `digi`.


## Functions
### mintHandle

Mints a handle NFT in the given namespace.


```solidity
function mintHandle(address to, string calldata localName) external returns (uint256);
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


### burn

Burns a handle NFT.


```solidity
function burn(uint256 tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the handle NFT to burn.|


### getNamespace

Gets the namespace of the contract. It's 'digi' for the DiGiHandles contract.


```solidity
function getNamespace() external pure returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|string The namespace of the contract.|


### getNamespaceHash

Gets the hash of the namespace of the contract. It's keccak256('digi') for the DiGiHandles contract.


```solidity
function getNamespaceHash() external pure returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|bytes32 The hash of the namespace of the contract.|


### exists

Returns whether `tokenId` exists.
Tokens start existing when they are minted (`_mint`),
and stop existing when they are burned (`_burn`).


```solidity
function exists(uint256 tokenId) external view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool Whether the token exists.|


### totalSupply

Returns the amount of tokens in circulation.


```solidity
function totalSupply() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The current total supply of tokens.|


### getHandleTokenURIContract

Returns the HandleTokenURI contract address.


```solidity
function getHandleTokenURIContract() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The HandleTokenURI contract address.|


### setHandleTokenURIContract

Sets the HandleTokenURI contract address.


```solidity
function setHandleTokenURIContract(address handleTokenURIContract) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`handleTokenURIContract`|`address`|The HandleTokenURI contract address to set.|


### DANGER__disableTokenGuardian

DANGER: Triggers disabling the profile protection mechanism for the msg.sender, which will allow
transfers or approvals over profiles held by it.
Disabling the mechanism will have a timelock before it becomes effective, allowing the owner to re-enable
the protection back in case of being under attack.
The protection layer only applies to EOA wallets.


```solidity
function DANGER__disableTokenGuardian() external;
```

### enableTokenGuardian

Enables back the profile protection mechanism for the msg.sender, preventing profile transfers or
approvals (except when revoking them).
The protection layer only applies to EOA wallets.


```solidity
function enableTokenGuardian() external;
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
|`<none>`|`uint256`|uint256 The timestamp at which the Token Guardian will become effectively disabled. Max 256-bit unsigned integer value if enabled.|


