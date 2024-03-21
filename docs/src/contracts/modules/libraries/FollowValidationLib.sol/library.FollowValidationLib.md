# FollowValidationLib
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/libraries/FollowValidationLib.sol)

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

