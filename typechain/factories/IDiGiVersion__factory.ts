/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDiGiVersion, IDiGiVersionInterface } from "../IDiGiVersion";

const _abi = [
  {
    type: "function",
    name: "emitVersion",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getGitCommit",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes20",
        internalType: "bytes20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getVersion",
    inputs: [],
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

export class IDiGiVersion__factory {
  static readonly abi = _abi;
  static createInterface(): IDiGiVersionInterface {
    return new utils.Interface(_abi) as IDiGiVersionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDiGiVersion {
    return new Contract(address, _abi, signerOrProvider) as IDiGiVersion;
  }
}
