/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFollowModule,
  IFollowModuleInterface,
} from "../../MockDeprecatedCollectModuleFollowerOnly.sol/IFollowModule";

const _abi = [
  {
    type: "function",
    name: "isFollowing",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "follower",
        type: "address",
        internalType: "address",
      },
      {
        name: "followNFTTokenId",
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
] as const;

export class IFollowModule__factory {
  static readonly abi = _abi;
  static createInterface(): IFollowModuleInterface {
    return new utils.Interface(_abi) as IFollowModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFollowModule {
    return new Contract(address, _abi, signerOrProvider) as IFollowModule;
  }
}
