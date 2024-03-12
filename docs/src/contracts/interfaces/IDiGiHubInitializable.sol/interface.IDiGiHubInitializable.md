# IDiGiHubInitializable
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/interfaces/IDiGiHubInitializable.sol)

**Author:**
DiGi Protocol

This is the interface for the DiGiHub contract, the main entry point for the DiGi Protocol.
You'll find all the events and external functions, as well as the reasoning behind them here.


## Functions
### initialize

Initializes the DiGiHub, setting the initial governance address, the name and symbol of the profiles
in the DiGiNFTBase contract, and Protocol State (Paused).

*This is assuming a proxy pattern is implemented.*


```solidity
function initialize(string calldata name, string calldata symbol, address newGovernance) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`name`|`string`|The name of the Profile NFT.|
|`symbol`|`string`|The symbol of the Profile NFT.|
|`newGovernance`|`address`|The governance address to set.|


