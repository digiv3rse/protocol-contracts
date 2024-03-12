// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {IDiGiHub} from 'contracts/interfaces/IDiGiHub.sol';
import {Proxy} from '@openzeppelin/contracts/proxy/Proxy.sol';
import {Address} from '@openzeppelin/contracts/utils/Address.sol';

contract FollowNFTProxy is Proxy {
    using Address for address;
    address immutable HUB;

    constructor(bytes memory data) {
        HUB = msg.sender;
        IDiGiHub(msg.sender).getFollowNFTImpl().functionDelegateCall(data);
    }

    function _implementation() internal view override returns (address) {
        return IDiGiHub(HUB).getFollowNFTImpl();
    }
}
