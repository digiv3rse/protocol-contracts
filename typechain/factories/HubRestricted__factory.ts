/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { HubRestricted, HubRestrictedInterface } from "../HubRestricted";

const _abi = [
  {
    type: "function",
    name: "HUB",
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
] as const;

export class HubRestricted__factory {
  static readonly abi = _abi;
  static createInterface(): HubRestrictedInterface {
    return new utils.Interface(_abi) as HubRestrictedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HubRestricted {
    return new Contract(address, _abi, signerOrProvider) as HubRestricted;
  }
}
