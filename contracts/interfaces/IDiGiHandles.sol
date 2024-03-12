// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import {IERC721} from '@openzeppelin/contracts/token/ERC721/IERC721.sol';

/**
 * @title IDiGiHandles
 * @author DiGi Protocol
 *
 * @notice This is the interface for the DiGiHandles contract that is responsible for minting and burning handle NFTs.
 * A handle is composed of a local name and a namespace, separated by a dot.
 * Example: `satoshi.digi` is a handle composed of the local name `satoshi` and the namespace `digi`.
 */
interface IDiGiHandles is IERC721 {
    /**
     * @notice Mints a handle NFT in the given namespace.
     * @custom:permissions Only DiGiHandles contract's owner or DiGiHub.
     *
     * @param to The address to mint the handle to.
     * @param localName The local name of the handle (the part before ".digi").
     *
     * @return uint256 The ID of the handle NFT minted.
     */
    function mintHandle(address to, string calldata localName) external returns (uint256);

    /**
     * @notice Burns a handle NFT.
     * @custom:permissions Owner of Handle NFT.
     *
     * @param tokenId The ID of the handle NFT to burn.
     */
    function burn(uint256 tokenId) external;

    /**
     * @notice Gets the namespace of the contract. It's 'digi' for the DiGiHandles contract.
     *
     * @return string The namespace of the contract.
     */
    function getNamespace() external pure returns (string memory);

    /**
     * @notice Gets the hash of the namespace of the contract. It's keccak256('digi') for the DiGiHandles contract.
     *
     * @return bytes32 The hash of the namespace of the contract.
     */
    function getNamespaceHash() external pure returns (bytes32);

    /**
     * @notice Returns whether `tokenId` exists.
     *
     * Tokens start existing when they are minted (`_mint`),
     * and stop existing when they are burned (`_burn`).
     *
     * @return bool Whether the token exists.
     */
    function exists(uint256 tokenId) external view returns (bool);

    /**
     * @notice Returns the amount of tokens in circulation.
     *
     * @return uint256 The current total supply of tokens.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @notice Returns the HandleTokenURI contract address.
     *
     * @return address The HandleTokenURI contract address.
     */
    function getHandleTokenURIContract() external view returns (address);

    /**
     * @notice Sets the HandleTokenURI contract address.
     * @custom:permissions Only DiGiHandles contract's owner
     *
     * @param handleTokenURIContract The HandleTokenURI contract address to set.
     */
    function setHandleTokenURIContract(address handleTokenURIContract) external;

    /**
     * @notice DANGER: Triggers disabling the profile protection mechanism for the msg.sender, which will allow
     * transfers or approvals over profiles held by it.
     * Disabling the mechanism will have a timelock before it becomes effective, allowing the owner to re-enable
     * the protection back in case of being under attack.
     * The protection layer only applies to EOA wallets.
     */
    function DANGER__disableTokenGuardian() external;

    /**
     * @notice Enables back the profile protection mechanism for the msg.sender, preventing profile transfers or
     * approvals (except when revoking them).
     * The protection layer only applies to EOA wallets.
     */
    function enableTokenGuardian() external;

    /**
     * @notice Returns the timestamp at which the Token Guardian will become effectively disabled.
     *
     * @param wallet The address to check the timestamp for.
     *
     * @return uint256 The timestamp at which the Token Guardian will become effectively disabled.
     * Max 256-bit unsigned integer value if enabled.
     */
    function getTokenGuardianDisablingTimestamp(address wallet) external view returns (uint256);
}
