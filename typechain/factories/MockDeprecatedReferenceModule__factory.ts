/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockDeprecatedReferenceModule,
  MockDeprecatedReferenceModuleInterface,
} from "../MockDeprecatedReferenceModule";

const _abi = [
  {
    type: "function",
    name: "initializeReferenceModule",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
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
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "processComment",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pointedProfileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pointedPubId",
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
  {
    type: "function",
    name: "processMirror",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pointedProfileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pointedPubId",
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
  {
    type: "function",
    name: "testMockDeprecatedReferenceModule",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761021f908161001c8239f35b600080fdfe60806040818152600436101561001457600080fd5b600091823560e01c91826356014afa1461006a575050806357ba558414610065578063a2830b2e146100655763d77a14731461004f57600080fd5b3461006257806003193601126100625780f35b80fd5b6101b7565b8334610062576060366003190112610062576001600160401b03906044358281116101815761009d903690600401610185565b9080959160209687918101031261017d57600190350361012c5750825191848301908111838210176101185783949291945283815282519382859384528251928382860152825b84811061010257505050828201840152601f01601f19168101030190f35b81810183015188820188015287955082016100e4565b634e487b7160e01b82526041600452602482fd5b62461bcd60e51b815260048101859052602660248201527f4d6f636b446570726563617465645265666572656e63654d6f64756c653a20696044820152651b9d985b1a5960d21b6064820152608490fd5b8280fd5b5080fd5b9181601f840112156101b2578235916001600160401b0383116101b257602083818601950101116101b257565b600080fd5b346101b25760803660031901126101b2576064356001600160401b0381116101b2576101e7903690600401610185565b00fea2646970667358221220097acd94f5ddd47b4b5f675223488612ee41d5ebc084ab5c1f33b939488f442164736f6c63430008150033";

type MockDeprecatedReferenceModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockDeprecatedReferenceModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockDeprecatedReferenceModule__factory extends ContractFactory {
  constructor(...args: MockDeprecatedReferenceModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<MockDeprecatedReferenceModule> {
    return super.deploy(
      overrides || {}
    ) as Promise<MockDeprecatedReferenceModule>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockDeprecatedReferenceModule {
    return super.attach(address) as MockDeprecatedReferenceModule;
  }
  override connect(signer: Signer): MockDeprecatedReferenceModule__factory {
    return super.connect(signer) as MockDeprecatedReferenceModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockDeprecatedReferenceModuleInterface {
    return new utils.Interface(_abi) as MockDeprecatedReferenceModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockDeprecatedReferenceModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockDeprecatedReferenceModule;
  }
}