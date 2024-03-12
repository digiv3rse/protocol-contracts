// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import {IDiGiProtocol} from 'contracts/interfaces/IDiGiProtocol.sol';
import {IDiGiGovernable} from 'contracts/interfaces/IDiGiGovernable.sol';
import {IDiGiHubEventHooks} from 'contracts/interfaces/IDiGiHubEventHooks.sol';
import {IDiGiImplGetters} from 'contracts/interfaces/IDiGiImplGetters.sol';
import {IDiGiProfiles} from 'contracts/interfaces/IDiGiProfiles.sol';
import {IDiGiVersion} from 'contracts/interfaces/IDiGiVersion.sol';

interface IDiGiHub is
    IDiGiProfiles,
    IDiGiProtocol,
    IDiGiGovernable,
    IDiGiHubEventHooks,
    IDiGiImplGetters,
    IDiGiVersion
{}
