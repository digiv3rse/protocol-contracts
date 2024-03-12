/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILegacyCollectModule,
  ILegacyCollectModuleInterface,
} from "../ILegacyCollectModule";

const _abi = [
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
        name: "referrerProfileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "collector",
        type: "address",
        internalType: "address",
      },
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
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class ILegacyCollectModule__factory {
  static readonly abi = _abi;
  static createInterface(): ILegacyCollectModuleInterface {
    return new utils.Interface(_abi) as ILegacyCollectModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILegacyCollectModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILegacyCollectModule;
  }
}