// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library FollowSVG {
    uint8 private constant MAX_GOLD_TOKEN_ID = 10;

    function getFollowSVG(uint256 followTokenId) public pure returns (string memory) {
        if (followTokenId <= MAX_GOLD_TOKEN_ID) {
            return
                '<svg xmlns="http://www.w3.org/2000/svg" width="275" height="275" fill="none"><g><path fill="url(#b)" d="M0 0h275v275H0z"/><path fill="url(#c)" stroke="#B96326" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M168.9 116.8v0a1 1 0 0 1-1.8-.8v0-2.7c-1.1-37.7-58.1-37.7-59.1 0v2.7a1 1 0 0 1-1.9.8v0l-2-2C76.8 89 36.5 129.3 62.5 156.6l2 2a113.3 113.3 0 0 0 73.1 31.3s0 0 0 0 41.8 0 73.2-31.3a81 81 0 0 0 2-2c26-27.4-14.4-67.6-41.9-41.6l-2 1.9Z"/><g><path fill="#B96326" d="M127.3 152.2a1 1 0 0 0-1-1.3H125a1 1 0 0 1-1-1v-1.8c0-.6.4-1 1-1h2.8a1 1 0 0 0 1-.8l.7-3.1a1 1 0 0 0-1-1.2h-1.7a1 1 0 0 1-1-1v-2c0-.5.4-1 1-1h3.2a1 1 0 0 0 1-.7l1-4.6a1 1 0 0 1 1-.8h3a1 1 0 0 1 1 1.2l-.9 3.7a1 1 0 0 0 1 1.2h3a1 1 0 0 0 1-.7l1.2-4.6a1 1 0 0 1 1-.8h3a1 1 0 0 1 1 1.2l-1 3.7a1 1 0 0 0 1 1.2h1.8a1 1 0 0 1 1 1.3l-.5 1.8a1 1 0 0 1-1 .8H146a1 1 0 0 0-1 .7l-.7 3.1a1 1 0 0 0 1 1.3h1.8a1 1 0 0 1 1 1.2l-.5 1.9a1 1 0 0 1-1 .7h-2.8a1 1 0 0 0-1 .8l-1.3 5.5a1 1 0 0 1-1 .8h-3a1 1 0 0 1-1-1.3l1.2-4.5a1 1 0 0 0-1-1.3h-3.1a1 1 0 0 0-1 .8l-1.3 5.5a1 1 0 0 1-1 .8h-3a1 1 0 0 1-1-1.3l1.1-4.5Zm10.8-5a1 1 0 0 0 1-.8l.7-3.3a1 1 0 0 0-1-1.2h-3.2a1 1 0 0 0-1 .7l-.8 3.3a1 1 0 0 0 1 1.3h3.3Z"/></g></g><defs><radialGradient id="b" cx="0" cy="0" r="1" gradientTransform="matrix(275 -275 362 362 0 275)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE7A5"/><stop offset="1" stop-color="#FFF2CE"/></radialGradient><radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="matrix(0 83 -132 0 137.5 107.1)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFDF85"/><stop offset=".9" stop-color="#F8C944"/></radialGradient></defs></svg>';
        } else {
            return
                '<svg xmlns="http://www.w3.org/2000/svg" width="275" height="275" fill="none"><g><path fill="url(#green)" d="M0 0h275v275H0z"/><path fill="#A0D170" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" d="M168.9 116.8v0a1 1 0 0 1-1.8-.8v0-2.7c-1.1-37.7-58.1-37.7-59.1 0v2.7a1 1 0 0 1-1.9.8v0l-2-2C76.8 89 36.5 129.3 62.5 156.6l2 2a113.3 113.3 0 0 0 73.1 31.3s41.8 0 73.2-31.3a81 81 0 0 0 2-2c26-27.4-14.4-67.6-41.9-41.6l-2 1.9Z"/><g><path fill="#000" d="M127.3 152.2a1 1 0 0 0-1-1.3H125a1 1 0 0 1-1-1v-1.8c0-.6.4-1 1-1h2.8a1 1 0 0 0 1-.8l.7-3.1a1 1 0 0 0-1-1.2h-1.7a1 1 0 0 1-1-1v-2c0-.5.4-1 1-1h3.2a1 1 0 0 0 1-.7l1-4.6a1 1 0 0 1 1-.8h3a1 1 0 0 1 1 1.2l-.9 3.7a1 1 0 0 0 1 1.2h3a1 1 0 0 0 1-.7l1.2-4.6a1 1 0 0 1 1-.8h3a1 1 0 0 1 1 1.2l-1 3.7a1 1 0 0 0 1 1.2h1.8a1 1 0 0 1 1 1.3l-.5 1.8a1 1 0 0 1-1 .8H146a1 1 0 0 0-1 .7l-.7 3.1a1 1 0 0 0 1 1.3h1.8a1 1 0 0 1 1 1.2l-.5 1.9a1 1 0 0 1-1 .7h-2.8a1 1 0 0 0-1 .8l-1.3 5.5a1 1 0 0 1-1 .8h-3a1 1 0 0 1-1-1.3l1.2-4.5a1 1 0 0 0-1-1.3h-3.1a1 1 0 0 0-1 .8l-1.3 5.5a1 1 0 0 1-1 .8h-3a1 1 0 0 1-1-1.3l1.1-4.5Zm10.8-5a1 1 0 0 0 1-.8l.7-3.3a1 1 0 0 0-1-1.2h-3.2a1 1 0 0 0-1 .7l-.8 3.3a1 1 0 0 0 1 1.3h3.3Z"/></g></g><defs><radialGradient id="green" cx="0" cy="0" r="1" gradientTransform="matrix(275 -275 362 362 0 275)" gradientUnits="userSpaceOnUse"><stop stop-color="#DFFFBF"/><stop offset="1" stop-color="#EFD"/></radialGradient></defs></svg>';
        }
    }
}