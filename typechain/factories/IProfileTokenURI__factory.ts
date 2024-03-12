/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IProfileTokenURI,
  IProfileTokenURIInterface,
} from "../IProfileTokenURI";

const _abi = [
  {
    type: "function",
    name: "getTokenURI",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "mintTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IProfileTokenURI__factory {
  static readonly abi = _abi;
  static createInterface(): IProfileTokenURIInterface {
    return new utils.Interface(_abi) as IProfileTokenURIInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProfileTokenURI {
    return new Contract(address, _abi, signerOrProvider) as IProfileTokenURI;
  }
}