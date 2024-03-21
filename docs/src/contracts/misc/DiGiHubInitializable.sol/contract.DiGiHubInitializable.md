# DiGiHubInitializable
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/DiGiHubInitializable.sol)

**Inherits:**
[DiGiHub](/contracts/DiGiHub.sol/contract.DiGiHub.md), [VersionedInitializable](/contracts/base/upgradeability/VersionedInitializable.sol/abstract.VersionedInitializable.md), [IDiGiHubInitializable](/contracts/interfaces/IDiGiHubInitializable.sol/interface.IDiGiHubInitializable.md)

**Author:**
DiGi Protocol

Extension of DiGiHub contract that includes initialization for fresh deployments.


## State Variables
### REVISION

```solidity
uint256 internal constant REVISION = 1;
```


## Functions
### constructor


```solidity
constructor(
    address followNFTImpl,
    address collectNFTImpl,
    address moduleRegistry,
    uint256 tokenGuardianCooldown,
    Types.MigrationParams memory migrationParams
) DiGiHub(followNFTImpl, collectNFTImpl, moduleRegistry, tokenGuardianCooldown, migrationParams);
```

### initialize

Initializes the DiGiHub, setting the initial governance address, the name and symbol of the profiles
in the DiGiNFTBase contract, and Protocol State (Paused).

*This is assuming a proxy pattern is implemented.*


```solidity
function initialize(string calldata name, string calldata symbol, address newGovernance)
    external
    override
    initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`name`|`string`|The name of the Profile NFT.|
|`symbol`|`string`|The symbol of the Profile NFT.|
|`newGovernance`|`address`|The governance address to set.|


### getRevision


```solidity
function getRevision() internal pure virtual override returns (uint256);
```

