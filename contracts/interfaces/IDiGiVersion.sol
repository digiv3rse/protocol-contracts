// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

/**
 * @title IDiGiVersion
 * @author DiGi Protocol
 *
 * @notice This is the interface for the DiGiHub Version getters and emitter.
 * It allows to emit a DiGiHub version during an upgrade, and also to get the current version.
 */
interface IDiGiVersion {
    /**
     * @notice Returns the DiGiHub current Version.
     *
     * @return version The DiGiHub current Version.
     */
    function getVersion() external view returns (string memory);

    /**
     * @notice Returns the DiGiHub current Git Commit.
     *
     * @return gitCommit The DiGiHub current Git Commit.
     */
    function getGitCommit() external view returns (bytes20);

    /**
     * @notice Emits the DiGiHub current Version. Used in upgradeAndCall().
     */
    function emitVersion() external;
}
