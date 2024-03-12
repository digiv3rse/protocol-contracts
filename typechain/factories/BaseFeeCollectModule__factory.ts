/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  BaseFeeCollectModule,
  BaseFeeCollectModuleInterface,
} from "../BaseFeeCollectModule";

const _abi = [
  {
    type: "function",
    name: "ACTION_MODULE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "MODULE_REGISTRY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IModuleRegistry",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "calculateFee",
    inputs: [
      {
        name: "processCollectParams",
        type: "tuple",
        internalType: "struct ModuleTypes.ProcessCollectParams",
        components: [
          {
            name: "publicationCollectedProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "publicationCollectedId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "collectorProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "collectorProfileOwner",
            type: "address",
            internalType: "address",
          },
          {
            name: "transactionExecutor",
            type: "address",
            internalType: "address",
          },
          {
            name: "referrerProfileIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubTypes",
            type: "uint8[]",
            internalType: "enum Types.PublicationType[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint160",
        internalType: "uint160",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBasePublicationData",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pubId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct BaseProfilePublicationData",
        components: [
          {
            name: "amount",
            type: "uint160",
            internalType: "uint160",
          },
          {
            name: "collectLimit",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "currency",
            type: "address",
            internalType: "address",
          },
          {
            name: "currentCollects",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "recipient",
            type: "address",
            internalType: "address",
          },
          {
            name: "referralFee",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "followerOnly",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "endTimestamp",
            type: "uint72",
            internalType: "uint72",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initializePublicationCollectModule",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pubId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "transactionExecutor",
        type: "address",
        internalType: "address",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "processCollect",
    inputs: [
      {
        name: "processCollectParams",
        type: "tuple",
        internalType: "struct ModuleTypes.ProcessCollectParams",
        components: [
          {
            name: "publicationCollectedProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "publicationCollectedId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "collectorProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "collectorProfileOwner",
            type: "address",
            internalType: "address",
          },
          {
            name: "transactionExecutor",
            type: "address",
            internalType: "address",
          },
          {
            name: "referrerProfileIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubTypes",
            type: "uint8[]",
            internalType: "enum Types.PublicationType[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceID",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "error",
    name: "CollectExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "MintLimitExceeded",
    inputs: [],
  },
  {
    type: "error",
    name: "ModuleDataMismatch",
    inputs: [],
  },
  {
    type: "error",
    name: "NotActionModule",
    inputs: [],
  },
  {
    type: "error",
    name: "NotFollowing",
    inputs: [],
  },
] as const;

export class BaseFeeCollectModule__factory {
  static readonly abi = _abi;
  static createInterface(): BaseFeeCollectModuleInterface {
    return new utils.Interface(_abi) as BaseFeeCollectModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseFeeCollectModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseFeeCollectModule;
  }
}
