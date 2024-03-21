# Governance
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/misc/access/Governance.sol)

**Inherits:**
[ControllableByContract](/contracts/misc/access/ControllableByContract.sol/contract.ControllableByContract.md)


## State Variables
### DIGI_HUB

```solidity
IDiGiHub public immutable DIGI_HUB;
```


## Functions
### constructor


```solidity
constructor(address digiHubAddress_, address governanceOwner_) ControllableByContract(governanceOwner_);
```

### digiHub_setGovernance

ONLY GOVERNANCE OWNER              ///


```solidity
function digiHub_setGovernance(address newGovernance) external onlyOwner;
```

### digiHub_setEmergencyAdmin


```solidity
function digiHub_setEmergencyAdmin(address newEmergencyAdmin) external onlyOwner;
```

### digiHub_setTreasuryParams


```solidity
function digiHub_setTreasuryParams(address newTreasury, uint16 newTreasuryFee) external onlyOwnerOrControllerContract;
```

### digiHub_setState


```solidity
function digiHub_setState(Types.ProtocolState newState) external onlyOwnerOrControllerContract;
```

### digiHub_whitelistProfileCreator

ONLY GOVERNANCE OWNER OR CONTROLLER CONTRACT   ///


```solidity
function digiHub_whitelistProfileCreator(address profileCreator, bool whitelist)
    external
    onlyOwnerOrControllerContract;
```

### executeAsGovernance


```solidity
function executeAsGovernance(address target, bytes calldata data)
    external
    payable
    onlyOwnerOrControllerContract
    returns (bytes memory);
```

