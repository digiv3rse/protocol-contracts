// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import 'test/base/BaseTest.t.sol';
import {LibString} from 'solady/utils/LibString.sol';
import {Base64} from 'solady/utils/Base64.sol';
import {HandlesErrors} from 'contracts/namespaces/constants/Errors.sol';
import {HandlesEvents} from 'contracts/namespaces/constants/Events.sol';
import {TokenGuardianTest_Default_Off, IGuardedToken} from 'test/TokenGuardian.t.sol';

contract DiGiHandlesTest is TokenGuardianTest_Default_Off {
    using stdJson for string;

    uint256 constant MAX_LOCAL_NAME_LENGTH = 26;
    uint256 uniqueHandleCounter;

    error OnlyOwner();

    function _TOKEN_GUARDIAN_COOLDOWN() internal view override returns (uint256) {
        return fork ? digiHandles.TOKEN_GUARDIAN_COOLDOWN() : HANDLE_GUARDIAN_COOLDOWN;
    }

    function _getERC721TokenAddress() internal view virtual override returns (address) {
        return address(digiHandles);
    }

    function _mintERC721(address to) internal override returns (uint256) {
        vm.prank(digiHandles.OWNER());
        uint256 handleId = digiHandles.mintHandle(
            to,
            string.concat('newminthandle', vm.toString(uniqueHandleCounter++))
        );
        return handleId;
    }

    function setUp() public override {
        super.setUp();
    }

    // NEGATIVES

    function testCannot_GetTokenURI_IfNotMinted(uint256 tokenId) public {
        vm.assume(!digiHandles.exists(tokenId));

        vm.expectRevert('ERC721: invalid token ID');
        digiHandles.tokenURI(tokenId);
    }

    function testCannot_Burn_IfNotOwnerOf(address owner, address otherAddress) public {
        vm.assume(owner != otherAddress);
        vm.assume(owner != address(0));
        vm.assume(otherAddress != address(0));
        vm.assume(!_isDiGiHubProxyAdmin(otherAddress));

        string memory handle = 'handle';

        vm.prank(digiHandles.OWNER());
        uint256 handleId = digiHandles.mintHandle(owner, handle);

        assertTrue(digiHandles.exists(handleId));
        assertEq(digiHandles.ownerOf(handleId), owner);

        vm.expectRevert(HandlesErrors.NotOwner.selector);

        vm.prank(otherAddress);
        digiHandles.burn(handleId);
    }

    function testCannot_MigrateHandle_IfNotHub(address otherAddress) public {
        vm.assume(otherAddress != address(0));
        vm.assume(otherAddress != address(hub));

        string memory handle = 'handle';

        vm.expectRevert(HandlesErrors.NotHub.selector);

        vm.prank(otherAddress);
        digiHandles.migrateHandle(otherAddress, handle);
    }

    function testCannot_MigrateHandle_WithZeroLength() public {
        vm.prank(address(hub));

        vm.expectRevert(HandlesErrors.HandleLengthInvalid.selector);
        digiHandles.migrateHandle(address(this), '');
    }

    function testCannot_MigrateHandle_WithNonUniqueLocalName() public {
        vm.prank(digiHandles.OWNER());
        digiHandles.mintHandle(address(this), 'handle');

        vm.prank(address(hub));

        vm.expectRevert('ERC721: token already minted');
        digiHandles.migrateHandle(makeAddr('ANOTHER_ADDRESS'), 'handle');
    }

    function testCannot_MigrateHandle_WithLengthMoreThanMax(uint256 randomFuzz) public {
        string memory randomHandle = _randomAlphanumericStringForMigrate(MAX_LOCAL_NAME_LENGTH + 1, randomFuzz);

        vm.prank(address(hub));

        vm.expectRevert(HandlesErrors.HandleLengthInvalid.selector);
        digiHandles.migrateHandle(address(this), randomHandle);
    }

    function testCannot_MigrateHandle_WithInvalidFirstChar(uint256 length, uint256 randomFuzz) public {
        length = bound(length, 0, MAX_LOCAL_NAME_LENGTH - 1); // we will add 1 char at the start, so length is shorter by 1

        string memory randomHandle = _randomAlphanumericStringForMigrate(length, randomFuzz);

        // handle starting with "_"
        string memory invalidUnderscoreHandle = string.concat('_', randomHandle);
        vm.prank(address(hub));
        vm.expectRevert(HandlesErrors.HandleFirstCharInvalid.selector);
        digiHandles.migrateHandle(address(this), invalidUnderscoreHandle);

        // handle starting with "-"
        string memory invalidDashHandle = string.concat('-', randomHandle);
        vm.prank(address(hub));
        vm.expectRevert(HandlesErrors.HandleFirstCharInvalid.selector);
        digiHandles.migrateHandle(address(this), invalidDashHandle);
    }

    function testCannot_MigrateHandle_WithInvalidChar(
        uint256 length,
        uint256 insertionPosition,
        uint256 randomFuzz,
        uint256 invalidCharCode
    ) public {
        length = bound(length, 1, MAX_LOCAL_NAME_LENGTH);
        insertionPosition = bound(insertionPosition, 0, length - 1);

        invalidCharCode = bound(invalidCharCode, 0x00, 0xFF);
        vm.assume(invalidCharCode != 95); // '_'
        vm.assume(invalidCharCode != 45); // '-'
        vm.assume(
            (invalidCharCode < 48 || // '0'
                invalidCharCode > 122 || // 'z'
                (invalidCharCode > 57 && invalidCharCode < 97)) // '9' and 'a'
        );

        string memory randomHandle = _randomAlphanumericStringForMigrate(length, randomFuzz);

        console.log('randomHandle:', randomHandle);
        console.log('insert position:', insertionPosition);
        console.log('invalid char code:', invalidCharCode);

        bytes memory randomHandleBytes = bytes(randomHandle);
        randomHandleBytes[insertionPosition] = bytes1(uint8(invalidCharCode));

        string memory invalidHandle = string(randomHandleBytes);

        console.log('invalidHandle', invalidHandle);

        vm.prank(address(hub));
        vm.expectRevert(HandlesErrors.HandleContainsInvalidCharacters.selector);
        digiHandles.migrateHandle(address(this), invalidHandle);
    }

    function testCannot_MintHandle_IfNotOwnerOrHubOrWhitelistedProfileCreator(address otherAddress) public {
        vm.assume(otherAddress != address(0));
        vm.assume(otherAddress != address(hub));
        vm.assume(otherAddress != digiHandles.OWNER());
        vm.assume(!hub.isProfileCreatorWhitelisted(otherAddress));
        vm.assume(!_isDiGiHubProxyAdmin(otherAddress));

        string memory handle = 'handle';

        vm.expectRevert(HandlesErrors.NotOwnerNorWhitelisted.selector);

        vm.prank(otherAddress);
        digiHandles.mintHandle(otherAddress, handle);
    }

    function testCannot_MintHandle_WithZeroLength() public {
        vm.prank(digiHandles.OWNER());

        vm.expectRevert(HandlesErrors.HandleLengthInvalid.selector);
        digiHandles.mintHandle(address(this), '');
    }

    function testCannot_MintHandle_WithNonUniqueLocalName() public {
        vm.prank(digiHandles.OWNER());
        digiHandles.mintHandle(address(this), 'handle');

        vm.prank(digiHandles.OWNER());

        vm.expectRevert('ERC721: token already minted');
        digiHandles.mintHandle(makeAddr('ANOTHER_ADDRESS'), 'handle');
    }

    function testCannot_MintHandle_WithLengthMoreThanMax(uint256 randomFuzz) public {
        string memory randomHandle = _randomAlphanumericString(MAX_LOCAL_NAME_LENGTH + 1, randomFuzz);

        vm.prank(digiHandles.OWNER());

        vm.expectRevert(HandlesErrors.HandleLengthInvalid.selector);
        digiHandles.mintHandle(address(this), randomHandle);
    }

    function testCannot_MintHandle_WithInvalidFirstChar(uint256 length, uint256 randomFuzz) public {
        length = bound(length, 0, MAX_LOCAL_NAME_LENGTH - 1); // we will add 1 char at the start, so length is shorter by 1

        string memory randomHandle = _randomAlphanumericString(length, randomFuzz);

        string memory invalidUnderscoreHandle = string.concat('_', randomHandle);

        vm.prank(digiHandles.OWNER());

        vm.expectRevert(HandlesErrors.HandleFirstCharInvalid.selector);
        digiHandles.mintHandle(address(this), invalidUnderscoreHandle);
    }

    function testCannot_MintHandle_WithInvalidChar(
        uint256 length,
        uint256 insertionPosition,
        uint256 randomFuzz,
        uint256 invalidCharCode
    ) public {
        length = bound(length, 1, MAX_LOCAL_NAME_LENGTH);
        insertionPosition = bound(insertionPosition, 0, length - 1);
        invalidCharCode = bound(invalidCharCode, 0x00, 0xFF);
        vm.assume(
            (invalidCharCode < 48 || // '0'
                invalidCharCode > 122 || // 'z'
                (invalidCharCode > 57 && invalidCharCode < 97)) && invalidCharCode != 95 // '9' and 'a' // '_'
        );

        string memory randomHandle = _randomAlphanumericString(length, randomFuzz);

        console.log('randomHandle:', randomHandle);
        console.log('insert position:', insertionPosition);
        console.log('invalid char code:', invalidCharCode);

        bytes memory randomHandleBytes = bytes(randomHandle);
        randomHandleBytes[insertionPosition] = bytes1(uint8(invalidCharCode));

        string memory invalidHandle = string(randomHandleBytes);

        console.log('invalidHandle', invalidHandle);

        vm.prank(digiHandles.OWNER());
        vm.expectRevert(HandlesErrors.HandleContainsInvalidCharacters.selector);
        digiHandles.mintHandle(address(this), invalidHandle);
    }

    // SCENARIOS

    function testName() public {
        string memory name = digiHandles.name();
        assertEq(name, 'DiGi Handles');
    }

    function testSymbol() public {
        string memory symbol = digiHandles.symbol();
        assertEq(symbol, 'LH');
    }

    function testExists(uint256 number) public {
        number = bound(number, 1, 10 ** (MAX_LOCAL_NAME_LENGTH) - 1);
        string memory numbersHandle = vm.toString(number);
        uint256 expectedTokenId = digiHandles.getTokenId(numbersHandle);
        vm.assume(!digiHandles.exists(expectedTokenId));

        vm.prank(digiHandles.OWNER());
        uint256 handleId = digiHandles.mintHandle(address(this), numbersHandle);

        assertEq(handleId, expectedTokenId);
        assertTrue(digiHandles.exists(handleId));

        digiHandles.burn(handleId);
        assertFalse(digiHandles.exists(handleId));
    }

    function testGetNamespace() public {
        string memory namespace = digiHandles.getNamespace();
        assertEq(namespace, 'digi');
    }

    function testGetNamespaceHash() public {
        string memory namespace = digiHandles.getNamespace();
        bytes32 namespaceHash = digiHandles.getNamespaceHash();
        assertEq(namespaceHash, keccak256(bytes(namespace)));
    }

    function testConstructionImmutables(address owner, address hub) public {
        DiGiHandles newDiGiHandles = new DiGiHandles(owner, hub, HANDLE_GUARDIAN_COOLDOWN);
        assertEq(newDiGiHandles.OWNER(), owner);
        assertEq(newDiGiHandles.DIGI_HUB(), hub);
        // TODO: Test HANDLE_GUARDIAN_COOLDOWN
    }

    // TODO: Should we revert if it doesn't exist?
    function testGetLocalName(uint256 number) public {
        number = bound(number, 1, 10 ** (MAX_LOCAL_NAME_LENGTH) - 1);
        string memory numbersHandle = vm.toString(number);
        uint256 expectedTokenId = digiHandles.getTokenId(numbersHandle);
        vm.assume(!digiHandles.exists(expectedTokenId));

        vm.expectRevert(HandlesErrors.DoesNotExist.selector);
        digiHandles.getLocalName(expectedTokenId);

        vm.prank(digiHandles.OWNER());
        uint256 handleId = digiHandles.mintHandle(address(this), numbersHandle);

        assertEq(handleId, expectedTokenId);

        string memory localName = digiHandles.getLocalName(handleId);
        assertEq(localName, numbersHandle);

        digiHandles.burn(handleId);

        vm.expectRevert(HandlesErrors.DoesNotExist.selector);
        digiHandles.getLocalName(expectedTokenId);
    }

    // TODO: Should we revert if it doesn't exist?
    function testGetHandle(uint256 number) public {
        number = bound(number, 1, 10 ** (MAX_LOCAL_NAME_LENGTH) - 1);
        string memory numbersHandle = vm.toString(number);
        uint256 expectedTokenId = digiHandles.getTokenId(numbersHandle);
        vm.assume(!digiHandles.exists(expectedTokenId));

        vm.expectRevert(HandlesErrors.DoesNotExist.selector);
        digiHandles.getHandle(expectedTokenId);

        vm.prank(digiHandles.OWNER());
        uint256 handleId = digiHandles.mintHandle(address(this), numbersHandle);

        assertEq(handleId, expectedTokenId);

        string memory namespacePrefix = string.concat(digiHandles.getNamespace(), '/@');
        string memory handle = digiHandles.getHandle(handleId);
        assertEq(handle, string.concat(namespacePrefix, numbersHandle));

        digiHandles.burn(handleId);

        vm.expectRevert(HandlesErrors.DoesNotExist.selector);
        digiHandles.getHandle(expectedTokenId);
    }

    function testGetTokenId(uint256 number) public {
        number = bound(number, 1, 10 ** (MAX_LOCAL_NAME_LENGTH) - 1);
        string memory numbersHandle = vm.toString(number);

        uint256 expectedTokenId = uint256(keccak256(bytes(numbersHandle)));
        assertEq(digiHandles.getTokenId(numbersHandle), expectedTokenId);
    }

    function testTokenURI() public {
        string memory handleTemplate = 'abcdefghijklmnopqrstuvwx_';

        for (uint256 length = 1; length <= bytes(handleTemplate).length; length++) {
            string memory handle = LibString.slice(handleTemplate, 0, length);
            console.log(handle);

            vm.prank(digiHandles.OWNER());
            uint256 handleId = digiHandles.mintHandle(address(this), handle);

            string memory tokenURI = digiHandles.tokenURI(handleId);

            string memory base64prefix = 'data:application/json;base64,';

            string memory decodedTokenURI = string(
                Base64.decode(LibString.slice(tokenURI, bytes(base64prefix).length))
            );

            assertEq(decodedTokenURI.readString('.name'), string.concat('@', handle));
            assertEq(decodedTokenURI.readString('.description'), string.concat('DiGi Protocol - Handle @', handle));
            assertEq(decodedTokenURI.readUint('.attributes[0].value'), handleId);
            assertEq(decodedTokenURI.readString('.attributes[1].value'), digiHandles.getNamespace());
            assertEq(decodedTokenURI.readUint('.attributes[2].value'), bytes(handle).length);
        }
    }

    function testBurn(address owner) public {
        vm.assume(owner != address(0));
        vm.assume(!_isDiGiHubProxyAdmin(owner));

        string memory handle = 'handle';

        vm.prank(digiHandles.OWNER());
        uint256 handleId = digiHandles.mintHandle(owner, handle);

        assertTrue(digiHandles.exists(handleId));
        assertEq(digiHandles.ownerOf(handleId), owner);

        vm.prank(owner);
        digiHandles.burn(handleId);

        assertFalse(digiHandles.exists(handleId));

        vm.expectRevert(HandlesErrors.DoesNotExist.selector);
        digiHandles.getLocalName(handleId);
    }

    function testMigrateHandle(address to, uint256 length, uint256 randomFuzz) public {
        _migrateHandle(to, length, randomFuzz);
    }

    function _migrateHandle(address to, uint256 length, uint256 randomFuzz) internal {
        vm.assume(to != address(0));
        length = bound(length, 1, MAX_LOCAL_NAME_LENGTH);

        string memory randomHandle = _randomAlphanumericStringForMigrate(length, randomFuzz);
        uint256 expectedHandleId = digiHandles.getTokenId(randomHandle);

        vm.expectEmit(true, true, true, true, address(digiHandles));
        emit HandlesEvents.HandleMinted(
            randomHandle,
            digiHandles.getNamespace(),
            expectedHandleId,
            to,
            block.timestamp
        );

        vm.prank(address(hub));
        uint256 handleId = digiHandles.migrateHandle(to, randomHandle);
        assertEq(handleId, expectedHandleId);
        assertEq(digiHandles.ownerOf(handleId), to);

        string memory localName = digiHandles.getLocalName(handleId);
        assertEq(localName, randomHandle);
    }

    function testMintHandle_IfOwner(address to, uint256 length, uint256 randomFuzz) public {
        _mintHandle(digiHandles.OWNER(), to, length, randomFuzz);
    }

    function testMintHandle_ifWhitelistedProfileCreator(
        address whitelistedProfileCreator,
        address to,
        uint256 length,
        uint256 randomFuzz
    ) public {
        vm.assume(whitelistedProfileCreator != address(0));
        vm.assume(whitelistedProfileCreator != address(hub));
        vm.assume(whitelistedProfileCreator != digiHandles.OWNER());
        vm.assume(!_isDiGiHubProxyAdmin(whitelistedProfileCreator));

        vm.prank(governance);
        hub.whitelistProfileCreator(whitelistedProfileCreator, true);
        _mintHandle(whitelistedProfileCreator, to, length, randomFuzz);
    }

    function _mintHandle(address minter, address to, uint256 length, uint256 randomFuzz) internal {
        vm.assume(to != address(0));
        length = bound(length, 1, MAX_LOCAL_NAME_LENGTH);

        string memory randomHandle = _randomAlphanumericString(length, randomFuzz);
        uint256 expectedHandleId = digiHandles.getTokenId(randomHandle);

        vm.expectEmit(true, true, true, true, address(digiHandles));
        emit HandlesEvents.HandleMinted(
            randomHandle,
            digiHandles.getNamespace(),
            expectedHandleId,
            to,
            block.timestamp
        );

        vm.prank(minter);
        uint256 handleId = digiHandles.mintHandle(to, randomHandle);
        assertEq(handleId, expectedHandleId);
        assertEq(digiHandles.ownerOf(handleId), to);

        string memory localName = digiHandles.getLocalName(handleId);
        assertEq(localName, randomHandle);
    }

    function _randomAlphanumericStringForMigrate(
        uint256 length,
        uint256 randomFuzz
    ) internal view returns (string memory) {
        bytes memory allowedChars = '0123456789abcdefghijklmnopqrstuvwxyz_-';
        return _randomAlphanumericString(length, randomFuzz, allowedChars);
    }

    function _randomAlphanumericString(uint256 length, uint256 randomFuzz) internal view returns (string memory) {
        bytes memory allowedChars = '0123456789abcdefghijklmnopqrstuvwxyz_';
        return _randomAlphanumericString(length, randomFuzz, allowedChars);
    }

    function _randomAlphanumericString(
        uint256 length,
        uint256 randomFuzz,
        bytes memory allowedChars
    ) internal view returns (string memory) {
        string memory str = '';
        for (uint256 i = 0; i < length; i++) {
            uint8 charCode = uint8((randomFuzz >> (i * 8)) & 0xff);
            charCode = uint8(bound(charCode, 0, allowedChars.length - 1));
            if (i == 0 && (allowedChars[charCode] == '_' || allowedChars[charCode] == '-')) {
                charCode /= 2;
            }
            string memory char = string(abi.encodePacked(allowedChars[charCode]));
            str = string.concat(str, char);
        }
        return str;
    }

    //////////////////////////////////////////////////////////
    // ERC-2981 Royalties - Scenarios
    //////////////////////////////////////////////////////////

    function testSupportsErc2981Interface() public {
        assertTrue(digiHandles.supportsInterface(bytes4(keccak256('royaltyInfo(uint256,uint256)'))));
    }

    function testDefaultRoyaltiesAreSetToZero(uint256 tokenId, uint256 salePrice) public {
        (address receiver, uint256 royalties) = digiHandles.royaltyInfo(tokenId, salePrice);

        assertEq(receiver, treasury);
        assertEq(royalties, 0);
    }

    function testSetRoyalties(uint256 royaltiesInBasisPoints, uint256 tokenId, uint256 salePrice) public {
        uint256 basisPoints = 10000;
        royaltiesInBasisPoints = bound(royaltiesInBasisPoints, 0, basisPoints);
        uint256 salePriceTimesRoyalties;
        unchecked {
            salePriceTimesRoyalties = salePrice * royaltiesInBasisPoints;
            // Fuzz prices that does not generate overflow, otherwise royaltyInfo will revert
            vm.assume(salePrice == 0 || salePriceTimesRoyalties / salePrice == royaltiesInBasisPoints);
        }

        vm.prank(digiHandles.OWNER());
        digiHandles.setRoyalty(royaltiesInBasisPoints);

        (address receiver, uint256 royalties) = digiHandles.royaltyInfo(tokenId, salePrice);

        assertEq(receiver, treasury);
        assertEq(royalties, salePriceTimesRoyalties / basisPoints);
    }

    function testTotalSupply(address to) public {
        vm.assume(to != address(0));
        uint256 currentTotalSupply = digiHandles.totalSupply();

        uint256 tokenId = _mintERC721(to);
        uint256 totalSupplyAfterMint = digiHandles.totalSupply();
        assertEq(totalSupplyAfterMint, currentTotalSupply + 1);

        vm.prank(to);
        digiHandles.burn(tokenId);

        uint256 totalSupplyAfterBurn = digiHandles.totalSupply();
        assertEq(totalSupplyAfterBurn, totalSupplyAfterMint - 1);
    }

    //////////////////////////////////////////////////////////
    // ERC-2981 Royalties - Negatives
    //////////////////////////////////////////////////////////

    function testCannotSetRoyaltiesIf_NotOwner(address nonOwnerAddress, uint256 royaltiesInBasisPoints) public {
        uint256 basisPoints = 10000;
        royaltiesInBasisPoints = bound(royaltiesInBasisPoints, 0, basisPoints);
        vm.assume(nonOwnerAddress != digiHandles.OWNER());
        vm.assume(!_isDiGiHubProxyAdmin(nonOwnerAddress));

        vm.prank(nonOwnerAddress);
        vm.expectRevert(OnlyOwner.selector);
        digiHandles.setRoyalty(royaltiesInBasisPoints);
    }

    function testCannotSetRoyaltiesIf_ExceedsBasisPoints(uint256 royaltiesInBasisPoints) public {
        uint256 basisPoints = 10000;
        vm.assume(royaltiesInBasisPoints > basisPoints);

        vm.prank(digiHandles.OWNER());
        vm.expectRevert(Errors.InvalidParameter.selector);
        digiHandles.setRoyalty(royaltiesInBasisPoints);
    }
}
