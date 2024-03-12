# PublicActProxy
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/misc/PublicActProxy.sol)

**Author:**
DiGiProtocol

This contract allows anyone to Act on a publication without holding a profile

*This contract holds a profile (or is a DE of that profile) and acts on behalf of the caller*


## State Variables
### HUB

```solidity
IDiGiHub public immutable HUB;
```


### COLLECT_PUBLICATION_ACTION

```solidity
CollectPublicationAction public immutable COLLECT_PUBLICATION_ACTION;
```


### __gap

```solidity
uint256[9] private __gap;
```


### _nonces

```solidity
mapping(address => uint256) private _nonces;
```


## Functions
### constructor


```solidity
constructor(address digiHub, address collectPublicationAction);
```

### publicFreeAct


```solidity
function publicFreeAct(Types.PublicationActionParams calldata publicationActionParams) external;
```

### publicCollect


```solidity
function publicCollect(Types.PublicationActionParams calldata publicationActionParams) external;
```

### publicCollectWithSig


```solidity
function publicCollectWithSig(
    Types.PublicationActionParams calldata publicationActionParams,
    Types.EIP712Signature calldata signature
) external;
```

### nonces


```solidity
function nonces(address signer) public view returns (uint256);
```

### incrementNonce


```solidity
function incrementNonce(uint8 increment) external;
```

### _publicCollect


```solidity
function _publicCollect(Types.PublicationActionParams calldata publicationActionParams, address transactionExecutor)
    internal;
```

### name


```solidity
function name() external pure returns (string memory);
```

