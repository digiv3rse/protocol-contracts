/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOperatorFilterRegistry,
  IOperatorFilterRegistryInterface,
} from "../IOperatorFilterRegistry";

const _abi = [
  {
    type: "function",
    name: "codeHashOf",
    inputs: [
      {
        name: "addr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "copyEntriesOf",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "registrantToCopy",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "filteredCodeHashAt",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "filteredCodeHashes",
    inputs: [
      {
        name: "addr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "filteredOperatorAt",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "filteredOperators",
    inputs: [
      {
        name: "addr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isCodeHashFiltered",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "codeHash",
        type: "bytes32",
        internalType: "bytes32",
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
    name: "isCodeHashOfFiltered",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "operatorWithCode",
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
    name: "isOperatorAllowed",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
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
    name: "isOperatorFiltered",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
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
    name: "isRegistered",
    inputs: [
      {
        name: "addr",
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
    name: "register",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerAndCopyEntries",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "registrantToCopy",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerAndSubscribe",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "subscription",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "subscribe",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "registrantToSubscribe",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "subscriberAt",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "subscribers",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "subscriptionOf",
    inputs: [
      {
        name: "addr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unregister",
    inputs: [
      {
        name: "addr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unsubscribe",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "copyExistingEntries",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateCodeHash",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "codehash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "filtered",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateCodeHashes",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "codeHashes",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
      {
        name: "filtered",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateOperator",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "filtered",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateOperators",
    inputs: [
      {
        name: "registrant",
        type: "address",
        internalType: "address",
      },
      {
        name: "operators",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "filtered",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class IOperatorFilterRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IOperatorFilterRegistryInterface {
    return new utils.Interface(_abi) as IOperatorFilterRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOperatorFilterRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IOperatorFilterRegistry;
  }
}