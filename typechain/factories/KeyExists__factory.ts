/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KeyExists, KeyExistsInterface } from "../KeyExists";

const _abi = [
  {
    type: "function",
    name: "IS_SCRIPT",
    inputs: [],
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
    name: "keyExists",
    inputs: [
      {
        name: "json",
        type: "string",
        internalType: "string",
      },
      {
        name: "key",
        type: "string",
        internalType: "string",
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
    name: "testKeyExists",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x6080806040523461002d57600160ff1981816004541617600455600c541617600c5561031090816100338239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c8063431e71e9146100c7578063528a683c146100635763f8ccbf471461003e57600080fd5b34610060578060031936011261006057602060ff600c54166040519015158152f35b80fd5b5034610060576040366003190112610060576001600160401b036004358181116100c35761009590369060040161012f565b916024359182116100605760206100b9846100b3366004870161012f565b906101c3565b6040519015158152f35b8280fd5b503461006057806003193601126100605780f35b601f909101601f19168101906001600160401b038211908210176100fe57604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116100fe57601f01601f191660200190565b81601f820112156101765780359061014682610114565b9261015460405194856100db565b8284526020838301011161017657816000926020809301838601378301015290565b600080fd5b60005b83811061018e5750506000910152565b818101518382015260200161017e565b906020916101b78151809281855285808601910161017b565b601f01601f1916010190565b6101e5604051916309389f5960e31b835260406004840152604483019061019e565b916003198284030160248301528180610201600095869461019e565b038183737109709ecfa91a80626ff3989d68f67f5b1dd12d5af1908161025a575b50610254573d15610251573d61023781610114565b9061024560405192836100db565b81528160203d92013e90565b90565b50600190565b3d8084833e61026981836100db565b8101906020818303126102d6578051906001600160401b0382116102d2570181601f820112156102d65780519161029f83610114565b906102ad60405192836100db565b838252602084840101116102d257906020806102cc949301910161017b565b38610222565b8480fd5b8380fdfea264697066735822122024198e3c4e90c363e30b15abb9b6b33b262cfd8d5f8136c5f57e25f1f759ea6864736f6c63430008150033";

type KeyExistsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KeyExistsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KeyExists__factory extends ContractFactory {
  constructor(...args: KeyExistsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<KeyExists> {
    return super.deploy(overrides || {}) as Promise<KeyExists>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): KeyExists {
    return super.attach(address) as KeyExists;
  }
  override connect(signer: Signer): KeyExists__factory {
    return super.connect(signer) as KeyExists__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeyExistsInterface {
    return new utils.Interface(_abi) as KeyExistsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeyExists {
    return new Contract(address, _abi, signerOrProvider) as KeyExists;
  }
}
