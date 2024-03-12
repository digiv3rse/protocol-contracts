// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import 'forge-std/Test.sol';
import 'test/ERC721.t.sol';

import {IDiGiERC721} from 'contracts/interfaces/IDiGiERC721.sol';
import {IERC721Receiver} from '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
import {Errors} from 'contracts/libraries/constants/Errors.sol';
import {Typehash} from 'contracts/libraries/constants/Typehash.sol';
import {MetaTxLib} from 'contracts/libraries/MetaTxLib.sol';

import {IERC165} from '@openzeppelin/contracts/utils/introspection/IERC165.sol';
import {IERC721} from '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import {IERC721Timestamped} from 'contracts/interfaces/IERC721Timestamped.sol';
import {IERC721Burnable} from 'contracts/interfaces/IERC721Burnable.sol';
import {IERC721MetaTx} from 'contracts/interfaces/IERC721MetaTx.sol';
import {IERC721Metadata} from '@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol';

import {MockNFT} from 'test/mocks/MockNFT.sol';
import 'test/mocks/MockERC721RecipientWithRevertFlag.sol';
import 'test/mocks/MockNonERC721Recipient.sol';
import 'test/mocks/MockWrongReturnDataERC721Recipient.sol';

abstract contract DiGiBaseERC721Test is ERC721Test {
    function _burnERC721(uint256 tokenId) internal virtual;

    function _disableGuardian(address wallet) internal virtual {} // TODO: Rename to _effectivelyDisableGuardian or add some boolean/timestamp param

    function _getNotOwnerError() internal virtual returns (bytes4) {
        return Errors.NotOwnerOrApproved.selector;
    }

    function _assumeNotProxyAdmin(address /* account */) internal view virtual {}

    function _DiGiERC721() private view returns (IDiGiERC721) {
        return IDiGiERC721(_getERC721TokenAddress());
    }

    function testMint(address to) public {
        vm.assume(to != address(0));

        uint256 balanceBeforeMint = _DiGiERC721().balanceOf(to);

        uint256 tokenId = _mintERC721(to);

        uint256 balanceAfterMint = _DiGiERC721().balanceOf(to);

        assertEq(balanceAfterMint, balanceBeforeMint + 1);
        assertEq(_DiGiERC721().ownerOf(tokenId), to);
    }

    function testBurn(address owner) public {
        vm.assume(owner != address(0));
        uint256 tokenId = _mintERC721(owner);

        uint256 currentBalance = _DiGiERC721().balanceOf(owner);

        _disableGuardian(owner);

        vm.prank(owner);
        _burnERC721(tokenId);

        uint256 balanceAfterBurn = _DiGiERC721().balanceOf(owner);

        assertEq(balanceAfterBurn, currentBalance - 1);

        vm.expectRevert(Errors.TokenDoesNotExist.selector);
        _DiGiERC721().ownerOf(tokenId);
    }

    function testApprove(address owner, address to) public {
        vm.assume(owner != address(0));
        vm.assume(to != address(0));
        vm.assume(owner != to);

        uint256 tokenId = _mintERC721(owner);

        _disableGuardian(owner);

        vm.prank(owner);
        _DiGiERC721().approve(to, tokenId);

        assertEq(_DiGiERC721().getApproved(tokenId), to);
    }

    function testCannot_GetApproved_OfNonexistingToken(uint256 nonExistingTokenId) public {
        vm.assume(!_DiGiERC721().exists(nonExistingTokenId));

        vm.expectRevert(Errors.TokenDoesNotExist.selector);

        _DiGiERC721().getApproved(nonExistingTokenId);
    }

    function testApproveAll(address msgSender, address to) public {
        vm.assume(msgSender != address(0));
        vm.assume(msgSender != to);
        vm.assume(to != address(0));

        _assumeNotProxyAdmin(msgSender);

        _disableGuardian(msgSender);

        vm.prank(msgSender);
        _DiGiERC721().setApprovalForAll(to, true);

        assertTrue(_DiGiERC721().isApprovedForAll(msgSender, to));
    }

    function testCannot_ApproveForAll_IfOperatorIsTheSender(address operatorAndSender, bool approved) public {
        _assumeNotProxyAdmin(operatorAndSender);

        _disableGuardian(operatorAndSender);

        vm.expectRevert(Errors.InvalidParameter.selector);

        vm.prank(operatorAndSender);
        _DiGiERC721().setApprovalForAll(operatorAndSender, approved);
    }

    function testTransferFrom_SenderIsApproved(address owner, address approvedTo, address to) public {
        vm.assume(owner != address(0));
        vm.assume(approvedTo != address(0));
        vm.assume(owner != approvedTo);
        vm.assume(to != address(0));

        uint256 tokenId = _mintERC721(owner);

        _disableGuardian(owner);

        vm.prank(owner);
        _DiGiERC721().approve(approvedTo, tokenId);

        uint256 ownerBalanceBefore = _DiGiERC721().balanceOf(owner);
        uint256 toBalanceBefore = _DiGiERC721().balanceOf(to);

        _assumeNotProxyAdmin(approvedTo);

        _disableGuardian(approvedTo);

        vm.prank(approvedTo);
        _DiGiERC721().transferFrom(owner, to, tokenId);

        uint256 ownerBalanceAfter = _DiGiERC721().balanceOf(owner);
        uint256 toBalanceAfter = _DiGiERC721().balanceOf(to);

        assertEq(_DiGiERC721().getApproved(tokenId), address(0));
        assertEq(_DiGiERC721().ownerOf(tokenId), to);

        if (owner != to) {
            assertEq(ownerBalanceAfter, ownerBalanceBefore - 1);
            assertEq(toBalanceAfter, toBalanceBefore + 1);
        }
    }

    function testTransferFrom_SenderIsTheOwner(address owner, address to) public {
        vm.assume(owner != address(0));
        vm.assume(to != address(0));

        uint256 tokenId = _mintERC721(owner);

        uint256 ownerBalanceBefore = _DiGiERC721().balanceOf(owner);
        uint256 toBalanceBefore = _DiGiERC721().balanceOf(to);

        _disableGuardian(owner);

        vm.prank(owner);
        _DiGiERC721().transferFrom(owner, to, tokenId);

        uint256 ownerBalanceAfter = _DiGiERC721().balanceOf(owner);
        uint256 toBalanceAfter = _DiGiERC721().balanceOf(to);

        assertEq(_DiGiERC721().getApproved(tokenId), address(0));
        assertEq(_DiGiERC721().ownerOf(tokenId), to);

        if (owner != to) {
            assertEq(ownerBalanceAfter, ownerBalanceBefore - 1);
            assertEq(toBalanceAfter, toBalanceBefore + 1);
        }
    }

    function testTransferFrom_SenderIsApprovedForAll(address owner, address approvedTo, address to) public {
        vm.assume(owner != address(0));
        vm.assume(approvedTo != address(0));
        vm.assume(owner != approvedTo);
        vm.assume(to != address(0));

        uint256 tokenId = _mintERC721(owner);

        _disableGuardian(owner);

        vm.prank(owner);
        _DiGiERC721().setApprovalForAll(approvedTo, true);

        uint256 ownerBalanceBefore = _DiGiERC721().balanceOf(owner);
        uint256 toBalanceBefore = _DiGiERC721().balanceOf(to);

        _assumeNotProxyAdmin(approvedTo);

        _disableGuardian(approvedTo);

        vm.prank(approvedTo);
        _DiGiERC721().transferFrom(owner, to, tokenId);

        uint256 ownerBalanceAfter = _DiGiERC721().balanceOf(owner);
        uint256 toBalanceAfter = _DiGiERC721().balanceOf(to);

        assertEq(_DiGiERC721().ownerOf(tokenId), to);

        if (owner != to) {
            assertEq(ownerBalanceAfter, ownerBalanceBefore - 1);
            assertEq(toBalanceAfter, toBalanceBefore + 1);
        }
    }

    function testSafeTransferFromToEOA(address owner, address approvedTo, address to) public {
        vm.assume(owner != address(0));
        vm.assume(to != address(0));
        vm.assume(approvedTo != address(0));
        vm.assume(owner != approvedTo);
        vm.assume(to.code.length == 0);

        uint256 tokenId = _mintERC721(owner);

        _disableGuardian(owner);

        vm.prank(owner);
        _DiGiERC721().setApprovalForAll(approvedTo, true);

        uint256 ownerBalanceBefore = _DiGiERC721().balanceOf(owner);
        uint256 toBalanceBefore = _DiGiERC721().balanceOf(to);

        _assumeNotProxyAdmin(approvedTo);

        _disableGuardian(approvedTo);

        vm.prank(approvedTo);
        _DiGiERC721().safeTransferFrom(owner, to, tokenId);

        uint256 ownerBalanceAfter = _DiGiERC721().balanceOf(owner);
        uint256 toBalanceAfter = _DiGiERC721().balanceOf(to);

        assertEq(_DiGiERC721().getApproved(tokenId), address(0));
        assertEq(_DiGiERC721().ownerOf(tokenId), to);

        if (owner != to) {
            assertEq(ownerBalanceAfter, ownerBalanceBefore - 1);
            assertEq(toBalanceAfter, toBalanceBefore + 1);
        }
    }

    function testSafeTransferFromToERC721Recipient(address owner, address approvedTo) public {
        vm.assume(owner != address(0));
        vm.assume(approvedTo != address(0));
        vm.assume(owner != approvedTo);

        address erc721recipient = address(new MockERC721RecipientWithRevertFlag());
        vm.assume(owner != erc721recipient);

        uint256 tokenId = _mintERC721(owner);

        _disableGuardian(owner);

        vm.prank(owner);
        _DiGiERC721().setApprovalForAll(approvedTo, true);

        uint256 ownerBalanceBefore = _DiGiERC721().balanceOf(owner);
        uint256 recipientBalanceBefore = _DiGiERC721().balanceOf(erc721recipient);

        _assumeNotProxyAdmin(approvedTo);

        _disableGuardian(approvedTo);

        vm.prank(approvedTo);
        _DiGiERC721().safeTransferFrom(owner, erc721recipient, tokenId);

        uint256 ownerBalanceAfter = _DiGiERC721().balanceOf(owner);
        uint256 recipientBalanceAfter = _DiGiERC721().balanceOf(erc721recipient);

        assertEq(_DiGiERC721().getApproved(tokenId), address(0));
        assertEq(_DiGiERC721().ownerOf(tokenId), erc721recipient);

        assertEq(ownerBalanceAfter, ownerBalanceBefore - 1);
        assertEq(recipientBalanceAfter, recipientBalanceBefore + 1);
    }

    function testSafeTransferFromToERC721RecipientWithData(address owner, address approvedTo) public {
        vm.assume(owner != address(0));
        vm.assume(approvedTo != address(0));
        vm.assume(owner != approvedTo);

        address erc721recipient = address(new MockERC721RecipientWithRevertFlag());
        vm.assume(owner != erc721recipient);

        uint256 tokenId = _mintERC721(owner);

        _disableGuardian(owner);

        vm.prank(owner);
        _DiGiERC721().setApprovalForAll(approvedTo, true);

        uint256 ownerBalanceBefore = _DiGiERC721().balanceOf(owner);
        uint256 recipientBalanceBefore = _DiGiERC721().balanceOf(erc721recipient);

        _assumeNotProxyAdmin(approvedTo);

        _disableGuardian(approvedTo);

        vm.prank(approvedTo);
        _DiGiERC721().safeTransferFrom(owner, erc721recipient, tokenId, abi.encode(false));

        uint256 ownerBalanceAfter = _DiGiERC721().balanceOf(owner);
        uint256 recipientBalanceAfter = _DiGiERC721().balanceOf(erc721recipient);

        assertEq(_DiGiERC721().getApproved(tokenId), address(0));
        assertEq(_DiGiERC721().ownerOf(tokenId), erc721recipient);

        assertEq(ownerBalanceAfter, ownerBalanceBefore - 1);
        assertEq(recipientBalanceAfter, recipientBalanceBefore + 1);
    }

    function testCannotSafeTransferFrom_SenderNotOwnerOrApproved(
        address owner,
        address to,
        address otherAddress
    ) public {
        vm.assume(owner != to);
        vm.assume(owner != otherAddress);
        vm.assume(to != address(0));
        vm.assume(owner != address(0));
        vm.assume(otherAddress != address(0));
        _assumeNotProxyAdmin(otherAddress);

        uint256 tokenId = _mintERC721(owner);

        vm.expectRevert(Errors.NotOwnerOrApproved.selector);
        vm.prank(otherAddress);
        _DiGiERC721().safeTransferFrom(owner, to, tokenId);
    }

    function testCannotSafeTransferFrom_WrongFromParameter_SenderOwner(address owner, address from, address to) public {
        _assumeNotProxyAdmin(owner);
        vm.assume(owner != to);
        vm.assume(owner != from);
        vm.assume(owner != address(0));
        vm.assume(to != address(0));

        uint256 tokenId = _mintERC721(owner);

        vm.expectRevert(Errors.InvalidOwner.selector);

        vm.prank(owner);
        _DiGiERC721().safeTransferFrom(from, to, tokenId);
    }

    // Minting to address(0) is tested through the MockNFT instead of using `_DiGiERC721()._mintERC721(address(0))`
    // because on inherited test contracts like FollowNFTTest, ProfileNFTTest, etc, we cannot reach the required
    // preconditions to test it (e.g. a profile being owned by address(0), to then perform a follow or collect).
    // This test can be overriden by any future contract that can meet the needed preconditions.
    function testCannot_MintToZero(uint256 tokenId) public virtual {
        MockNFT nft = new MockNFT();

        vm.expectRevert(Errors.InvalidParameter.selector);
        nft.mint(address(0), tokenId);
    }

    function testCannot_Burn_NonOwner_NorApproved_NorApprovedForAll(address owner, address otherAddress) public {
        vm.assume(owner != address(0));
        vm.assume(otherAddress != address(0));
        vm.assume(owner != otherAddress);
        vm.assume(_DiGiERC721().isApprovedForAll(owner, otherAddress) == false);

        uint256 tokenId = _mintERC721(owner);

        vm.assume(_DiGiERC721().getApproved(tokenId) != otherAddress);

        _assumeNotProxyAdmin(otherAddress);

        vm.expectRevert(_getNotOwnerError());
        vm.prank(otherAddress);
        _burnERC721(tokenId);
    }

    function testCannot_Burn_NotMinted(uint256 tokenId) public {
        vm.assume(_DiGiERC721().exists(tokenId) == false);

        vm.expectRevert(Errors.TokenDoesNotExist.selector);
        _burnERC721(tokenId);
    }

    function testCannot_DoubleBurn(address to) public {
        vm.assume(to != address(0));

        uint256 tokenId = _mintERC721(to);

        _disableGuardian(to);

        vm.prank(to);
        _burnERC721(tokenId);

        vm.expectRevert(Errors.TokenDoesNotExist.selector);
        vm.prank(to);
        _burnERC721(tokenId);
    }

    function testCannot_Approve_NotMinted(uint256 tokenId, address to) public {
        vm.assume(to != address(0));
        vm.assume(_DiGiERC721().exists(tokenId) == false);

        vm.expectRevert(Errors.TokenDoesNotExist.selector);
        _DiGiERC721().approve(to, tokenId);
    }

    function testCannot_Approve_Unauthorized(address to, address unauthorizedCaller, address approveTo) public {
        vm.assume(to != unauthorizedCaller);
        vm.assume(to != approveTo);
        vm.assume(to != address(0));
        vm.assume(unauthorizedCaller != address(0));
        vm.assume(approveTo != unauthorizedCaller);
        vm.assume(approveTo != address(0));
        uint256 tokenId = _mintERC721(to);

        _assumeNotProxyAdmin(unauthorizedCaller);

        _disableGuardian(to);

        vm.expectRevert(Errors.NotOwnerOrApproved.selector);
        vm.prank(unauthorizedCaller);
        _DiGiERC721().approve(approveTo, tokenId);
    }

    function testCannot_Approve_ToOwner(address to) public {
        vm.assume(to != address(0));

        uint256 tokenId = _mintERC721(to);

        _disableGuardian(to);

        vm.expectRevert(Errors.InvalidParameter.selector);

        vm.prank(to);
        _DiGiERC721().approve(to, tokenId);
    }

    function testCannot_TransferFrom_NotOwner(address owner, address to, address otherAddress) public {
        vm.assume(owner != to);
        vm.assume(owner != otherAddress);
        vm.assume(to != address(0));
        vm.assume(owner != address(0));
        vm.assume(otherAddress != address(0));

        uint256 tokenId = _mintERC721(owner);

        _assumeNotProxyAdmin(otherAddress);

        vm.expectRevert(Errors.NotOwnerOrApproved.selector);
        vm.prank(otherAddress);
        _DiGiERC721().transferFrom(owner, to, tokenId);
    }

    function testCannotTransferFrom_WrongFromParameter_SenderOwner(address owner, address from, address to) public {
        _assumeNotProxyAdmin(owner);
        vm.assume(owner != to);
        vm.assume(owner != from);
        vm.assume(owner != address(0));
        vm.assume(to != address(0));

        uint256 tokenId = _mintERC721(owner);

        vm.expectRevert(Errors.InvalidOwner.selector);

        vm.prank(owner);
        _DiGiERC721().transferFrom(from, to, tokenId);
    }

    function testCannot_TransferFrom_NonexistingToken(uint256 tokenId, address from, address to) public {
        vm.assume(from != address(0));
        vm.assume(to != address(0));

        vm.assume(_DiGiERC721().exists(tokenId) == false);

        vm.expectRevert(Errors.TokenDoesNotExist.selector);
        _DiGiERC721().transferFrom(from, to, tokenId);
    }

    function testCannot_TransferFrom_ToZero(address owner) public {
        vm.assume(owner != address(0));
        uint256 tokenId = _mintERC721(owner);

        vm.expectRevert(Errors.InvalidParameter.selector);

        vm.prank(owner);
        _DiGiERC721().transferFrom(owner, address(0), tokenId);
    }

    function testCannot_SafeTransferFrom_ToNonERC721Recipient(address owner) public {
        vm.assume(owner != address(0));
        uint256 tokenId = _mintERC721(owner);

        address nonERC721Recipient = address(new MockNonERC721Recipient());

        _disableGuardian(owner);

        vm.expectRevert(Errors.NonERC721ReceiverImplementer.selector);

        vm.prank(owner);
        _DiGiERC721().safeTransferFrom(owner, nonERC721Recipient, tokenId);
    }

    function testCannot_SafeTransferFrom_ToNonERC721Recipient_WithData(address owner) public {
        vm.assume(owner != address(0));
        uint256 tokenId = _mintERC721(owner);

        address nonERC721Recipient = address(new MockNonERC721Recipient());

        _disableGuardian(owner);

        vm.expectRevert(Errors.NonERC721ReceiverImplementer.selector);

        vm.prank(owner);
        _DiGiERC721().safeTransferFrom(owner, nonERC721Recipient, tokenId, abi.encode(false));
    }

    function testCannot_SafeTransferFrom_ToRevertingERC721Recipient(address owner) public {
        vm.assume(owner != address(0));
        uint256 tokenId = _mintERC721(owner);

        address revertingERC721Recipient = address(new MockERC721RecipientWithRevertFlag());
        MockERC721RecipientWithRevertFlag(revertingERC721Recipient).revertOnNextCall();

        _disableGuardian(owner);

        vm.expectRevert(MockERC721RecipientWithRevertFlag.MockERC721RecipientReverted.selector);

        vm.prank(owner);
        _DiGiERC721().safeTransferFrom(owner, revertingERC721Recipient, tokenId);
    }

    function testCannot_SafeTransferFrom_ToRevertingERC721Recipient_WithData(address owner) public {
        vm.assume(owner != address(0));
        uint256 tokenId = _mintERC721(owner);

        address revertingERC721Recipient = address(new MockERC721RecipientWithRevertFlag());
        bytes memory shouldRevertFlag = abi.encode(true);

        _disableGuardian(owner);

        vm.expectRevert(MockERC721RecipientWithRevertFlag.MockERC721RecipientReverted.selector);

        vm.prank(owner);
        _DiGiERC721().safeTransferFrom(owner, revertingERC721Recipient, tokenId, shouldRevertFlag);
    }

    function testCannot_SafeTransferFrom_ToERC721Recipient_WithWrongReturnData(
        address owner,
        uint32 wrongReturnData
    ) public {
        vm.assume(owner != address(0));
        uint256 tokenId = _mintERC721(owner);
        vm.assume(bytes4(wrongReturnData) != IERC721Receiver.onERC721Received.selector);

        address wrongReturnDataERC721Recipient = address(
            new MockWrongReturnDataERC721Recipient(bytes4(wrongReturnData))
        );

        _disableGuardian(owner);

        vm.expectRevert(Errors.NonERC721ReceiverImplementer.selector);

        vm.prank(owner);
        _DiGiERC721().safeTransferFrom(owner, wrongReturnDataERC721Recipient, tokenId);
    }

    function testCannot_SafeTransferFrom_ToERC721Recipient_WithWrongReturnData_WithData(
        address owner,
        uint32 wrongReturnData,
        uint256 dataToEncode
    ) public {
        vm.assume(owner != address(0));
        uint256 tokenId = _mintERC721(owner);
        vm.assume(bytes4(wrongReturnData) != IERC721Receiver.onERC721Received.selector);

        address wrongReturnDataERC721Recipient = address(
            new MockWrongReturnDataERC721Recipient(bytes4(wrongReturnData))
        );

        _disableGuardian(owner);

        vm.expectRevert(Errors.NonERC721ReceiverImplementer.selector);

        vm.prank(owner);
        _DiGiERC721().safeTransferFrom(owner, wrongReturnDataERC721Recipient, tokenId, abi.encode(dataToEncode));
    }

    function testCannot_BalanceOfZeroAddress() public {
        vm.expectRevert(Errors.InvalidParameter.selector);
        _DiGiERC721().balanceOf(address(0));
    }

    function testCannot_OwnerOfUnminted(uint256 tokenId) public {
        vm.assume(_DiGiERC721().exists(tokenId) == false);

        vm.expectRevert(Errors.TokenDoesNotExist.selector);
        _DiGiERC721().ownerOf(tokenId);
    }

    //////////////////////

    function testSupportsExpectedInterfaces() public {
        assertTrue(_DiGiERC721().supportsInterface(type(IERC165).interfaceId));
        assertTrue(_DiGiERC721().supportsInterface(type(IERC721).interfaceId));
        assertTrue(_DiGiERC721().supportsInterface(type(IERC721Timestamped).interfaceId));
        assertTrue(_DiGiERC721().supportsInterface(type(IERC721Burnable).interfaceId));
        assertTrue(_DiGiERC721().supportsInterface(type(IERC721MetaTx).interfaceId));
        assertTrue(_DiGiERC721().supportsInterface(type(IERC721Metadata).interfaceId));
    }

    function testDoesNotSupportOtherThanTheExpectedInterfaces(uint32 interfaceId) public virtual {
        vm.assume(bytes4(interfaceId) != type(IERC165).interfaceId);
        vm.assume(bytes4(interfaceId) != type(IERC721).interfaceId);
        vm.assume(bytes4(interfaceId) != type(IERC721Timestamped).interfaceId);
        vm.assume(bytes4(interfaceId) != type(IERC721Burnable).interfaceId);
        vm.assume(bytes4(interfaceId) != type(IERC721MetaTx).interfaceId);
        vm.assume(bytes4(interfaceId) != type(IERC721Metadata).interfaceId);

        assertFalse(_DiGiERC721().supportsInterface(bytes4(interfaceId)));
    }

    function testGetDomainSeparator() public {
        bytes32 expectedDomainSeparator = keccak256(
            abi.encode(
                Typehash.EIP712_DOMAIN,
                keccak256(bytes(_DiGiERC721().name())),
                MetaTxLib.EIP712_DOMAIN_VERSION_HASH,
                block.chainid,
                _getERC721TokenAddress()
            )
        );
        assertEq(_DiGiERC721().getDomainSeparator(), expectedDomainSeparator);
    }

    function testCannot_getBalanceOfAddressZero() public {
        vm.expectRevert(Errors.InvalidParameter.selector);
        _DiGiERC721().balanceOf(address(0));
    }

    function testMintTimestampIsTheExpectedOne(uint32 blockTimestamp, address nftRecipient) public {
        vm.assume(nftRecipient != address(0));
        vm.assume(blockTimestamp > 0);
        vm.warp(blockTimestamp);

        uint256 tokenId = _mintERC721(nftRecipient);

        assertEq(_DiGiERC721().mintTimestampOf(tokenId), blockTimestamp);
    }

    function testCannotGetMintTimestampOf_UnexistentToken(uint256 unexistentTokenId) public {
        vm.assume(!_DiGiERC721().exists(unexistentTokenId));

        vm.expectRevert(Errors.TokenDoesNotExist.selector);
        _DiGiERC721().mintTimestampOf(unexistentTokenId);
    }

    function testCannot_GetTokenDataOf_NonexistingToken(uint256 tokenId) public {
        vm.assume(!_DiGiERC721().exists(tokenId));

        vm.expectRevert(Errors.TokenDoesNotExist.selector);
        _DiGiERC721().tokenDataOf(tokenId);
    }

    function testTotalSupply(address to) public {
        vm.assume(to != address(0));
        uint256 currentTotalSupply = _DiGiERC721().totalSupply();

        uint256 tokenId = _mintERC721(to);
        uint256 totalSupplyAfterMint = _DiGiERC721().totalSupply();
        assertEq(totalSupplyAfterMint, currentTotalSupply + 1);

        _disableGuardian(to);

        vm.prank(to);
        _burnERC721(tokenId);

        uint256 totalSupplyAfterBurn = _DiGiERC721().totalSupply();
        assertEq(totalSupplyAfterBurn, totalSupplyAfterMint - 1);
    }
}
