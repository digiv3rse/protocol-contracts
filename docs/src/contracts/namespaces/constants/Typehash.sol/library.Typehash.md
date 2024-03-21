# Typehash
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/namespaces/constants/Typehash.sol)


## State Variables
### EIP712_DOMAIN

```solidity
bytes32 constant EIP712_DOMAIN =
    keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)");
```


### LINK

```solidity
bytes32 constant LINK = keccak256("Link(uint256 handleId,uint256 profileId,uint256 nonce,uint256 deadline)");
```


### UNLINK

```solidity
bytes32 constant UNLINK = keccak256("Unlink(uint256 handleId,uint256 profileId,uint256 nonce,uint256 deadline)");
```


