# IERC721MetaTx
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/interfaces/IERC721MetaTx.sol)

**Author:**
DiGi Protocol

Extension of ERC-721 including meta-tx signatures related functions.


## Functions
### nonces

Returns the current signature nonce of the given signer.


```solidity
function nonces(address signer) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`signer`|`address`|The address for which to query the nonce.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 The current nonce of the given signer.|


### getDomainSeparator

Returns the EIP-712 domain separator for this contract.


```solidity
function getDomainSeparator() external view returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|bytes32 The domain separator.|


