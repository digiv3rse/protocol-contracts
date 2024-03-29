/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IModuleRegistry,
  IModuleRegistryInterface,
} from "../IModuleRegistry";

const _abi = [
  {
    type: "function",
    name: "getModuleTypes",
    inputs: [
      {
        name: "moduleAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isErc20CurrencyRegistered",
    inputs: [
      {
        name: "currencyAddress",
        type: "address",
        internalType: "address",
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
  {
    type: "function",
    name: "isModuleRegistered",
    inputs: [
      {
        name: "moduleAddress",
        type: "address",
        internalType: "address",
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
  {
    type: "function",
    name: "isModuleRegisteredAs",
    inputs: [
      {
        name: "moduleAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "moduleType",
        type: "uint256",
        internalType: "uint256",
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
  {
    type: "function",
    name: "registerErc20Currency",
    inputs: [
      {
        name: "currencyAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerModule",
    inputs: [
      {
        name: "moduleAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "moduleType",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifyErc20Currency",
    inputs: [
      {
        name: "currencyAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifyModule",
    inputs: [
      {
        name: "moduleAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "moduleType",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

export class IModuleRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IModuleRegistryInterface {
    return new utils.Interface(_abi) as IModuleRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IModuleRegistry {
    return new Contract(address, _abi, signerOrProvider) as IModuleRegistry;
  }
}
