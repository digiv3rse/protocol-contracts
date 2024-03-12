# FollowValidationLib
[Git Source](https://github.com/digiv3rse/core-contracts/blob/5454b58664fab805b6888a68ff40915d251f32f3/contracts/modules/libraries/FollowValidationLib.sol)

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

