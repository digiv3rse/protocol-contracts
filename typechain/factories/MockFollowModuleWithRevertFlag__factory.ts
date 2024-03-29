/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockFollowModuleWithRevertFlag,
  MockFollowModuleWithRevertFlagInterface,
} from "../MockFollowModuleWithRevertFlag";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "moduleOwner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getModuleMetadataURI",
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
  {
    type: "function",
    name: "initializeFollowModule",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
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
    name: "metadataURI",
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
  {
    type: "function",
    name: "owner",
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
    name: "processFollow",
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
        name: "",
        type: "address",
        internalType: "address",
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
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setModuleMetadataURI",
    inputs: [
      {
        name: "_metadataURI",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceID",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "testMockFollowModuleWithRevertFlag",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "MockFollowModuleReverted",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60803461007057601f61086338819003918201601f19168301916001600160401b038311848410176100755780849260209460405283398101031261007057516001600160a01b0381168103610070576100619061005c3361008b565b61008b565b60405161079090816100d38239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe60806040908082526004918236101561001757600080fd5b600091823560e01c90816301ffc9a7146104985750806303ee438c146101d5578063681591c1146102f2578063715018a6146102aa5780638a19dde11461022c5780638da5cb5b14610205578063ce90d52e146101d5578063f20bdb01146101be578063f2fde38b146101055763fa11df621461009357600080fd5b34610101576060366003190112610101576024356001600160a01b03811603610101576044356001600160401b0381116100fd576100f9936100d7913691016106b0565b50508051916100e58361057c565b825251918291602083526020830190610670565b0390f35b8280fd5b5080fd5b508290346100fd5760203660031901126100fd576001600160a01b038235818116939192908490036101ba576101396106e2565b831561016857505082546001600160a01b03198116831784551660008051602061073b8339815191528380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8480fd5b82346101d257806003193601126101d25780f35b80fd5b50346101015781600319360112610101576100f9906101f26105d0565b9051918291602083526020830190610670565b5034610101578160031936011261010157905490516001600160a01b039091168152602090f35b50346101015760a0366003190112610101576044356001600160a01b03811603610101576084356001600160401b0381116100fd57610270602091369086016106b0565b90809291810103126100fd573580151581036100fd5761029b576100f992508051916100e58361057c565b51638dcd62d360e01b81529050fd5b82346101d257806003193601126101d2576102c36106e2565b80546001600160a01b03198116825581906001600160a01b031660008051602061073b8339815191528280a380f35b50913461010157602090816003193601126100fd578035936001600160401b03918286116101ba57366023870112156101ba578581013583811161048557601f199251966103478685601f85011601896105ad565b8188523660248383010111610481578187926024889301838b01378801015261036e6106e2565b855192831161046e57506001926103858454610542565b601f8111610428575b508091601f84116001146103ca5750508394829394926103bf575b5050600019600383901b1c191690821b17905580f35b0151905038806103a9565b8392919216958486528286209286905b88821061041157505083859697106103f8575b505050811b01905580f35b015160001960f88460031b161c191690553880806103ed565b8087859682949686015181550195019301906103da565b848652818620601f850160051c810191838610610464575b601f0160051c019085905b82811061045957505061038e565b87815501859061044b565b9091508190610440565b634e487b7160e01b855260419052602484fd5b8680fd5b634e487b7160e01b865260418252602486fd5b929050346101d25760203660031901126101d2576001600160e01b0319843581811692908390036101d257637008028360e01b83149485156104e1575b60208686519015158152f35b6a444947495f4d4f44554c4560a81b60208201908152600b82529495509293919290858201906001600160401b0382118383101761052f5750602096508552519020161490388080806104d5565b634e487b7160e01b815260418852602490fd5b90600182811c92168015610572575b602083101461055c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610551565b602081019081106001600160401b0382111761059757604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101761059757604052565b604051906000826001918254926105e684610542565b9081845260209481811690816000146106505750600114610612575b5050610610925003836105ad565b565b600081815285812095935091905b81831061063857505061061093508201013880610602565b85548884018501529485019487945091830191610620565b91505061061094925060ff191682840152151560051b8201013880610602565b919082519283825260005b84811061069c575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161067b565b9181601f840112156106dd578235916001600160401b0383116106dd57602083818601950101116106dd57565b600080fd5b6000546001600160a01b031633036106f657565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220e464913618dc886f5951bab618173fdc95d6de39d29296b04fe22673831604e164736f6c63430008150033";

type MockFollowModuleWithRevertFlagConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockFollowModuleWithRevertFlagConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockFollowModuleWithRevertFlag__factory extends ContractFactory {
  constructor(...args: MockFollowModuleWithRevertFlagConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    moduleOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<MockFollowModuleWithRevertFlag> {
    return super.deploy(
      moduleOwner,
      overrides || {}
    ) as Promise<MockFollowModuleWithRevertFlag>;
  }
  override getDeployTransaction(
    moduleOwner: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(moduleOwner, overrides || {});
  }
  override attach(address: string): MockFollowModuleWithRevertFlag {
    return super.attach(address) as MockFollowModuleWithRevertFlag;
  }
  override connect(signer: Signer): MockFollowModuleWithRevertFlag__factory {
    return super.connect(signer) as MockFollowModuleWithRevertFlag__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFollowModuleWithRevertFlagInterface {
    return new utils.Interface(_abi) as MockFollowModuleWithRevertFlagInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFollowModuleWithRevertFlag {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockFollowModuleWithRevertFlag;
  }
}
