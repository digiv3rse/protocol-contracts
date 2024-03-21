# DiGiBaseERC721
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/base/DiGiBaseERC721.sol)

**Inherits:**
ERC165, [IDiGiERC721](/contracts/misc/PermissionlessCreator.sol/interface.IDiGiERC721.md)

*Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including
the Metadata extension, but not including the Enumerable extension, which is available separately as
{ERC721Enumerable}.
Modifications:
1. Refactored _operatorApprovals setter into an internal function to allow meta-transactions.
2. Constructor replaced with an initializer.
3. Mint timestamp is now stored in a TokenData struct alongside the owner address.*


## State Variables
### _name

```solidity
string private _name;
```


### _symbol

```solidity
string private _symbol;
```


### _tokenData

```solidity
mapping(uint256 => Types.TokenData) private _tokenData;
```


### _balances

```solidity
mapping(address => uint256) private _balances;
```


### _tokenApprovals

```solidity
mapping(uint256 => address) private _tokenApprovals;
```


### _operatorApprovals

```solidity
mapping(address => mapping(address => bool)) private _operatorApprovals;
```


### __DEPRECATED__ownedTokens

```solidity
mapping(address => mapping(uint256 => uint256)) private __DEPRECATED__ownedTokens;
```


### __DEPRECATED__ownedTokensIndex

```solidity
mapping(uint256 => uint256) private __DEPRECATED__ownedTokensIndex;
```


### _totalSupply

```solidity
uint256 private _totalSupply;
```


### __DEPRECATED__allTokensIndex

```solidity
mapping(uint256 => uint256) private __DEPRECATED__allTokensIndex;
```


### _nonces

```solidity
mapping(address => uint256) private _nonces;
```


## Functions
### _initialize

*Initializes the ERC721 name and symbol.*


```solidity
function _initialize(string calldata name_, string calldata symbol_) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`name_`|`string`|The name to set.|
|`symbol_`|`string`|The symbol to set.|


### tokenURI

*Returns the Uniform Resource Identifier (URI) for `tokenId` token.*


```solidity
function tokenURI(uint256 tokenId) external view virtual returns (string memory);
```

### supportsInterface

*See [IERC165-supportsInterface](/lib/forge-std/src/mocks/MockERC721.sol/contract.MockERC721.md#supportsinterface).*


```solidity
function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool);
```

### nonces


```solidity
function nonces(address signer) public view override returns (uint256);
```

### getDomainSeparator

Returns the EIP-712 domain separator for this contract.


```solidity
function getDomainSeparator() external view virtual override returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|bytes32 The domain separator.|


### balanceOf

*See [IERC721-balanceOf](/lib/forge-std/test/StdCheats.t.sol/contract.BarERC1155.md#balanceof).*


```solidity
function balanceOf(address owner) public view virtual override returns (uint256);
```

### ownerOf

*See [IERC721-ownerOf](/lib/forge-std/test/StdCheats.t.sol/contract.BarERC721.md#ownerof).*


```solidity
function ownerOf(uint256 tokenId) public view virtual override returns (address);
```

### mintTimestampOf

*See [IERC721Timestamped-mintTimestampOf](/contracts/interfaces/IERC721Timestamped.sol/interface.IERC721Timestamped.md#minttimestampof)*


```solidity
function mintTimestampOf(uint256 tokenId) public view virtual override returns (uint256);
```

### tokenDataOf

*See [IERC721Timestamped-tokenDataOf](/contracts/interfaces/IERC721Timestamped.sol/interface.IERC721Timestamped.md#tokendataof)*


```solidity
function tokenDataOf(uint256 tokenId) public view virtual override returns (Types.TokenData memory);
```

### exists

*See [IERC721Timestamped-exists](/contracts/interfaces/IERC721Timestamped.sol/interface.IERC721Timestamped.md#exists)*


```solidity
function exists(uint256 tokenId) public view virtual override returns (bool);
```

### name

*See [IERC721Metadata-name](/lib/forge-std/src/interfaces/IERC20.sol/interface.IERC20.md#name).*


```solidity
function name() public view virtual override returns (string memory);
```

### symbol

*See [IERC721Metadata-symbol](/lib/forge-std/src/interfaces/IERC20.sol/interface.IERC20.md#symbol).*


```solidity
function symbol() public view virtual override returns (string memory);
```

### totalSupply


```solidity
function totalSupply() external view virtual override returns (uint256);
```

### approve

*See [IERC721-approve](/lib/forge-std/src/mocks/MockERC20.sol/contract.MockERC20.md#approve).*


```solidity
function approve(address to, uint256 tokenId) public virtual override;
```

### getApproved

*See [IERC721-getApproved](/lib/forge-std/src/interfaces/IERC721.sol/interface.IERC721.md#getapproved).*


```solidity
function getApproved(uint256 tokenId) public view virtual override returns (address);
```

### setApprovalForAll

*See [IERC721-setApprovalForAll](/lib/forge-std/src/mocks/MockERC721.sol/contract.MockERC721.md#setapprovalforall).*


```solidity
function setApprovalForAll(address operator, bool approved) public virtual override;
```

### isApprovedForAll

*See [IERC721-isApprovedForAll](/lib/forge-std/src/interfaces/IERC1155.sol/interface.IERC1155.md#isapprovedforall).*


```solidity
function isApprovedForAll(address owner, address operator) public view virtual override returns (bool);
```

### transferFrom

*See [IERC721-transferFrom](/lib/forge-std/src/mocks/MockERC20.sol/contract.MockERC20.md#transferfrom).*


```solidity
function transferFrom(address from, address to, uint256 tokenId) public virtual override;
```

### safeTransferFrom

*See [IERC721-safeTransferFrom](/lib/forge-std/src/mocks/MockERC721.sol/contract.MockERC721.md#safetransferfrom).*


```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) public virtual override;
```

### safeTransferFrom

*See [IERC721-safeTransferFrom](/lib/forge-std/src/mocks/MockERC721.sol/contract.MockERC721.md#safetransferfrom).*


```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public virtual override;
```

### burn

*Burns `tokenId`.
Requirements:
- The caller must own `tokenId` or be an approved operator.*


```solidity
function burn(uint256 tokenId) public virtual override;
```

### _unsafeOwnerOf

Returns the owner of the `tokenId` token.

*It is prefixed as `unsafe` as it does not revert when the token does not exist.*


```solidity
function _unsafeOwnerOf(uint256 tokenId) internal view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The token whose owner is being queried.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|address The address owning the given token, zero address if the token does not exist.|


### _safeTransfer

*Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients
are aware of the ERC721 protocol to prevent tokens from being forever locked.
`_data` is additional data, it has no specified format and it is sent in call to `to`.
This internal function is equivalent to [safeTransferFrom](/contracts/base/DiGiBaseERC721.sol/abstract.DiGiBaseERC721.md#safetransferfrom), and can be used to e.g.
implement alternative mechanisms to perform a token transfer, such as signature-based.
Requirements:
- `from` cannot be the zero address.
- `to` cannot be the zero address.
- `tokenId` token must exist and be owned by `from`.
- If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
Emits a {Transfer} event.*


```solidity
function _safeTransfer(address from, address to, uint256 tokenId, bytes memory _data) internal virtual;
```

### _exists

*Returns whether `tokenId` exists.
Tokens can be managed by their owner or approved accounts via [approve](/contracts/base/DiGiBaseERC721.sol/abstract.DiGiBaseERC721.md#approve) or {setApprovalForAll}.
Tokens start existing when they are minted (`_mint`),
and stop existing when they are burned (`_burn`).*


```solidity
function _exists(uint256 tokenId) internal view virtual returns (bool);
```

### _isApprovedOrOwner

*Returns whether `spender` is allowed to manage `tokenId`.
Requirements:
- `tokenId` must exist.*


```solidity
function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool);
```

### _mint

*Mints `tokenId` and transfers it to `to`.
WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible
Requirements:
- `tokenId` must not exist.
- `to` cannot be the zero address.
Emits a {Transfer} event.*


```solidity
function _mint(address to, uint256 tokenId) internal virtual;
```

### _burn

*Destroys `tokenId`.
The approval is cleared when the token is burned.
Requirements:
- `tokenId` must exist.
Emits a {Transfer} event.*


```solidity
function _burn(uint256 tokenId) internal virtual;
```

### _transfer

*Transfers `tokenId` from `from` to `to`.
As opposed to [transferFrom](/contracts/base/DiGiBaseERC721.sol/abstract.DiGiBaseERC721.md#transferfrom), this imposes no restrictions on msg.sender.
Requirements:
- `to` cannot be the zero address.
- `tokenId` token must be owned by `from`.
Emits a {Transfer} event.*


```solidity
function _transfer(address from, address to, uint256 tokenId) internal virtual;
```

### _approve

*Approve `to` to operate on `tokenId`
Emits a {Approval} event.*


```solidity
function _approve(address to, uint256 tokenId) internal virtual;
```

### _setOperatorApproval

*Refactored from the original OZ ERC721 implementation: approve or revoke approval from
`operator` to operate on all tokens owned by `owner`.
Emits a {ApprovalForAll} event.*


```solidity
function _setOperatorApproval(address owner, address operator, bool approved) internal virtual;
```

### _checkOnERC721Received

*Private function to invoke [IERC721Receiver-onERC721Received](/lib/forge-std/test/mocks/MockERC721.t.sol/contract.ERC721Recipient.md#onerc721received) on a target address.
The call is not executed if the target address is not a contract.*


```solidity
function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes memory _data) private returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|address representing the previous owner of the given token ID|
|`to`|`address`|target address that will receive the tokens|
|`tokenId`|`uint256`|uint256 ID of the token to be transferred|
|`_data`|`bytes`|bytes optional data to send along with the call|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool whether the call correctly returned the expected magic value|


### _beforeTokenTransfer

*Hook that is called before any token transfer. This includes minting
and burning.
Calling conditions:
- When `from` and `to` are both non-zero, ``from``'s `tokenId` will be
transferred to `to`.
- When `from` is zero, `tokenId` will be minted for `to`.
- When `to` is zero, ``from``'s `tokenId` will be burned.
- `from` and `to` are never both zero.
To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].*


```solidity
function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual;
```

