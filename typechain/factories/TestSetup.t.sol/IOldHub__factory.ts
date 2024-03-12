/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOldHub, IOldHubInterface } from "../../TestSetup.t.sol/IOldHub";

const _abi = [
  {
    type: "function",
    name: "collect",
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
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "comment",
    inputs: [
      {
        name: "vars",
        type: "tuple",
        internalType: "struct OldCommentData",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "contentURI",
            type: "string",
            internalType: "string",
          },
          {
            name: "profileIdPointed",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pubIdPointed",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "referenceModuleData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "collectModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "collectModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "referenceModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "referenceModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createProfile",
    inputs: [
      {
        name: "createProfileParams",
        type: "tuple",
        internalType: "struct OldCreateProfileParams",
        components: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "handle",
            type: "string",
            internalType: "string",
          },
          {
            name: "imageURI",
            type: "string",
            internalType: "string",
          },
          {
            name: "followModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "followModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "followNFTURI",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "follow",
    inputs: [
      {
        name: "profileIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "datas",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getCollectNFTImpl",
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
    name: "getProfile",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct OldProfileStruct",
        components: [
          {
            name: "pubCount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "followModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "followNFT",
            type: "address",
            internalType: "address",
          },
          {
            name: "handle",
            type: "string",
            internalType: "string",
          },
          {
            name: "imageURI",
            type: "string",
            internalType: "string",
          },
          {
            name: "followNFTURI",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mirror",
    inputs: [
      {
        name: "createProfileParams",
        type: "tuple",
        internalType: "struct OldMirrorData",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pointedProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pointedPubId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "referenceModuleData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "referenceModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "referenceModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "post",
    inputs: [
      {
        name: "vars",
        type: "tuple",
        internalType: "struct OldPostData",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "contentURI",
            type: "string",
            internalType: "string",
          },
          {
            name: "collectModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "collectModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "referenceModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "referenceModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

export class IOldHub__factory {
  static readonly abi = _abi;
  static createInterface(): IOldHubInterface {
    return new utils.Interface(_abi) as IOldHubInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOldHub {
    return new Contract(address, _abi, signerOrProvider) as IOldHub;
  }
}
