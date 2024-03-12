/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC2981, IERC2981Interface } from "../IERC2981";

const _abi = [
  {
    type: "function",
    name: "royaltyInfo",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "salePrice",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "royaltyAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
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
    stateMutability: "view",
  },
] as const;

export class IERC2981__factory {
  static readonly abi = _abi;
  static createInterface(): IERC2981Interface {
    return new utils.Interface(_abi) as IERC2981Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC2981 {
    return new Contract(address, _abi, signerOrProvider) as IERC2981;
  }
}
