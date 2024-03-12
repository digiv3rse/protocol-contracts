/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockProfileCreationProxy,
  MockProfileCreationProxyInterface,
} from "../MockProfileCreationProxy";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "hub",
        type: "address",
        internalType: "contract IDiGiHub",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "proxyCreateProfile",
    inputs: [
      {
        name: "createProfileParams",
        type: "tuple",
        internalType: "struct Types.CreateProfileParams",
        components: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "followModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "followModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testMockProfileCreationProxy",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x60a03461006a57601f61033138819003918201601f19168301916001600160401b0383118484101761006f5780849260209460405283398101031261006a57516001600160a01b038116810361006a576080526040516102ab90816100868239608051816101670152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806004908136101561001157600080fd5b600091823560e01c806375b4ab5a1461020f5763fcaba76b1461003357600080fd5b346101e85760209160031990838236011261020b578235916001600160401b03908184116101ff5760609084360301126102075760608201828110828211176101ec5760405261008483850161025c565b82526100926024840161025c565b92858301938452604481013590828211610203570191366023840112156101ff57848301359182116101ec5786601f1993604051936100d88987601f8401160186610223565b80855236602482840101116101e85792828985819a9895966024839b99960183870137840101526040810191825260018060a01b03948580926040519a8b9963560a4db160e01b8b528a015251166024880152511660448601525160606064860152805190816084870152835b8281106101cd575050848392601f83839660a4809686010152011681010301927f0000000000000000000000000000000000000000000000000000000000000000165af180156101c257610197578280f35b813d83116101bb575b6101aa8183610223565b810103126101b85738808280f35b80fd5b503d6101a0565b6040513d85823e3d90fd5b80820188015189820160a4015289978997508b955001610145565b8280fd5b634e487b7160e01b875260418552602487fd5b8680fd5b8780fd5b8580fd5b8480fd5b83346101b857806003193601126101b85780f35b601f909101601f19168101906001600160401b0382119082101761024657604052565b634e487b7160e01b600052604160045260246000fd5b35906001600160a01b038216820361027057565b600080fdfea2646970667358221220871071759253304efd644f0b5a1d5d48dfb95ae6b339a098f05ea21a9764832964736f6c63430008150033";

type MockProfileCreationProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockProfileCreationProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockProfileCreationProxy__factory extends ContractFactory {
  constructor(...args: MockProfileCreationProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    hub: string,
    overrides?: Overrides & { from?: string }
  ): Promise<MockProfileCreationProxy> {
    return super.deploy(
      hub,
      overrides || {}
    ) as Promise<MockProfileCreationProxy>;
  }
  override getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  override attach(address: string): MockProfileCreationProxy {
    return super.attach(address) as MockProfileCreationProxy;
  }
  override connect(signer: Signer): MockProfileCreationProxy__factory {
    return super.connect(signer) as MockProfileCreationProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockProfileCreationProxyInterface {
    return new utils.Interface(_abi) as MockProfileCreationProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockProfileCreationProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockProfileCreationProxy;
  }
}
