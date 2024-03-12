/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  DefaultOperatorFiltererUpgradeable,
  DefaultOperatorFiltererUpgradeableInterface,
} from "../DefaultOperatorFiltererUpgradeable";

const _abi = [
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "OperatorNotAllowed",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
] as const;

export class DefaultOperatorFiltererUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): DefaultOperatorFiltererUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as DefaultOperatorFiltererUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefaultOperatorFiltererUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DefaultOperatorFiltererUpgradeable;
  }
}
