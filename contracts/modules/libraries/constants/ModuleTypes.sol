// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import {Types} from 'contracts/libraries/constants/Types.sol';

/**
 * @title Types
 * @author DiGi Protocol
 *
 * @notice A standard library of data types used throughout the DiGi Protocol modules.
 */
library ModuleTypes {
    struct ProcessCollectParams {
        uint256 publicationCollectedProfileId;
        uint256 publicationCollectedId;
        uint256 collectorProfileId;
        address collectorProfileOwner;
        address transactionExecutor;
        uint256[] referrerProfileIds;
        uint256[] referrerPubIds;
        Types.PublicationType[] referrerPubTypes;
        bytes data;
    }
}
