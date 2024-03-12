/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DiGiImplGetters,
  DiGiImplGettersInterface,
} from "../DiGiImplGetters";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "followNFTImpl",
        type: "address",
        internalType: "address",
      },
      {
        name: "collectNFTImpl",
        type: "address",
        internalType: "address",
      },
      {
        name: "moduleRegistry",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getFollowNFTImpl",
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
    name: "getLegacyCollectNFTImpl",
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
    name: "getModuleRegistry",
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

const _bytecode =
  "0x60e03461009157601f61020c38819003918201601f19168301916001600160401b038311848410176100965780849260609460405283398101031261009157610047816100ac565b906100606040610059602084016100ac565b92016100ac565b9160805260a05260c05260405161014b90816100c182396080518160e2015260a05181609f015260c0518160570152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036100915756fe608080604052600436101561001357600080fd5b600090813560e01c9081633502ac4b146100ce575080638f5c291c146100895763edec79521461004257600080fd5b346100865780600319360112610086576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b80fd5b50346100865780600319360112610086576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9050346101115781600319360112610111577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fdfea264697066735822122052bd38dba9d71181c78961e09185d12fe703c59529c5cbedd31be4f49dc7dd0864736f6c63430008150033";

type DiGiImplGettersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiGiImplGettersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiGiImplGetters__factory extends ContractFactory {
  constructor(...args: DiGiImplGettersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    followNFTImpl: string,
    collectNFTImpl: string,
    moduleRegistry: string,
    overrides?: Overrides & { from?: string }
  ): Promise<DiGiImplGetters> {
    return super.deploy(
      followNFTImpl,
      collectNFTImpl,
      moduleRegistry,
      overrides || {}
    ) as Promise<DiGiImplGetters>;
  }
  override getDeployTransaction(
    followNFTImpl: string,
    collectNFTImpl: string,
    moduleRegistry: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      followNFTImpl,
      collectNFTImpl,
      moduleRegistry,
      overrides || {}
    );
  }
  override attach(address: string): DiGiImplGetters {
    return super.attach(address) as DiGiImplGetters;
  }
  override connect(signer: Signer): DiGiImplGetters__factory {
    return super.connect(signer) as DiGiImplGetters__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiGiImplGettersInterface {
    return new utils.Interface(_abi) as DiGiImplGettersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiGiImplGetters {
    return new Contract(address, _abi, signerOrProvider) as DiGiImplGetters;
  }
}
