# ModuleConfig
[Git Source](https://github.com/digiv3rse/protocol-contracts/blob/78826068117a4eb9f5d01837d2d88deb72b92ea0/contracts/modules/reference/DegreesOfSeparationReferenceModule.sol)

Struct representing the module configuration for certain publication.


```solidity
struct ModuleConfig {
    bool setUp;
    bool commentsRestricted;
    bool quotesRestricted;
    bool mirrorsRestricted;
    uint8 degreesOfSeparation;
    uint96 sourceProfile;
    uint96 originalAuthorProfile;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`setUp`|`bool`|Indicates if the publication was set up to use this module, to then allow updating params.|
|`commentsRestricted`|`bool`|Indicates if the comment operation is restricted or open to everyone.|
|`quotesRestricted`|`bool`|Indicates if the quote operation is restricted or open to everyone.|
|`mirrorsRestricted`|`bool`|Indicates if the mirror operation is restricted or open to everyone.|
|`degreesOfSeparation`|`uint8`|The max degrees of separation allowed for restricted operations.|
|`sourceProfile`|`uint96`|The ID of the profile from where the follower path should be started. Usually it will match the `originalAuthorProfile`.|
|`originalAuthorProfile`|`uint96`|Original author of the Post or Quote when the degrees restriction was first applied.|

