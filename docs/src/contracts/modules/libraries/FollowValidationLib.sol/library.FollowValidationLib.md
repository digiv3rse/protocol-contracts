# FollowValidationLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/0d518167a484d4368bad0990424be098fe779fa4/contracts/modules/libraries/FollowValidationLib.sol)

**Author:**
DiGi Protocol

A library contract that verifies that a user is following another user and reverts if not.


## Functions
### validateIsFollowing


```solidity
function validateIsFollowing(address hub, uint256 followerProfileId, uint256 followedProfileId) internal view;
```

### validateIsFollowingOrSelf


```solidity
function validateIsFollowingOrSelf(address hub, uint256 followerProfileId, uint256 followedProfileId) internal view;
```

