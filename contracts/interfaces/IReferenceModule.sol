// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import {Types} from 'contracts/libraries/constants/Types.sol';

/**
 * @title IReferenceModule
 * @author DiGi Protocol
 *
 * @notice This is the standard interface for all DiGi-compatible ReferenceModules.
 * Reference modules allow executing some action when a publication is referenced, like:
 *  - Rewards for mirroring/commenting/quoting a publication.
 *  - Token-gated comments/mirrors/quotes of a publication.
 *  - Etc.
 */
interface IReferenceModule {
    /**
     * @notice Initializes data for the given publication being published with this Reference module.
     * @custom:permissions DiGiHub.
     *
     * @param profileId The token ID of the profile publishing the publication.
     * @param pubId The associated publication's DiGiHub publication ID.
     * @param transactionExecutor The address of the transaction executor (e.g. for any funds to transferFrom).
     * @param data Arbitrary data passed from the user to be decoded by the Reference Module during initialization.
     *
     * @return bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by
     * indexers or UIs.
     */
    function initializeReferenceModule(
        uint256 profileId,
        uint256 pubId,
        address transactionExecutor,
        bytes calldata data
    ) external returns (bytes memory);

    /**
     * @notice Processes a comment being published. This includes any module logic like transferring tokens,
     * checking for conditions (e.g. token-gated), etc.
     * @custom:permissions DiGiHub.
     *
     * @param processCommentParams The parameters for processing a comment.
     *
     * @return bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by
     * indexers or UIs.
     */
    function processComment(Types.ProcessCommentParams calldata processCommentParams) external returns (bytes memory);

    /**
     * @notice Processes a quote being published. This includes any module logic like transferring tokens,
     * checking for conditions (e.g. token-gated), etc.
     * @custom:permissions DiGiHub
     *
     * @param processQuoteParams The parameters for processing a quote.
     *
     * @return bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by
     * indexers or UIs.
     */
    function processQuote(Types.ProcessQuoteParams calldata processQuoteParams) external returns (bytes memory);

    /**
     * @notice Processes a mirror being published. This includes any module logic like transferring tokens,
     * checking for conditions (e.g. token-gated), etc.
     * @custom:permissions DiGiHub
     *
     * @param processMirrorParams The parameters for processing a mirror.
     *
     * @return bytes Any custom ABI-encoded data. This will be a DiGiHub event params that can be used by
     * indexers or UIs.
     */
    function processMirror(Types.ProcessMirrorParams calldata processMirrorParams) external returns (bytes memory);
}
