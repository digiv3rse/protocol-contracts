/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockActionModule,
  MockActionModuleInterface,
} from "../MockActionModule";

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
    name: "initializePublicationAction",
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
    name: "processPublicationAction",
    inputs: [
      {
        name: "processActionParams",
        type: "tuple",
        internalType: "struct Types.ProcessActionParams",
        components: [
          {
            name: "publicationActedProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "publicationActedId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "actorProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "actorProfileOwner",
            type: "address",
            internalType: "address",
          },
          {
            name: "transactionExecutor",
            type: "address",
            internalType: "address",
          },
          {
            name: "referrerProfileIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubTypes",
            type: "uint8[]",
            internalType: "enum Types.PublicationType[]",
          },
          {
            name: "actionModuleData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
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
    name: "testMockActionModule",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testMockModule",
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
    name: "MockActionModuleReverted",
    inputs: [],
  },
  {
    type: "error",
    name: "MockModuleReverted",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60803461007057601f61086838819003918201601f19168301916001600160401b038311848410176100755780849260209460405283398101031261007057516001600160a01b0381168103610070576100619061005c3361008b565b61008b565b60405161079590816100d38239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe608060408181526004908136101561001657600080fd5b600092833560e01c90816301ffc9a7146104565750806303ee438c146101575780630b960220146103e65780634e413e9214610283578063681591c11461028857806370b7f43214610283578063715018a61461023b5780638da5cb5b1461021357806390ce6e0814610190578063ce90d52e146101575763f2fde38b1461009d57600080fd5b34610153576020366003190112610153576001600160a01b0382358181169391929084900361014f576100ce6106b2565b83156100fd57505082546001600160a01b0319811683178455166000805160206107408339815191528380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8480fd5b8280fd5b83823461018c578160031936011261018c5761018890610175610574565b9051918291602083526020830190610614565b0390f35b5080fd5b509034610153576003199060203683011261020b576001600160401b0391813583811161020f576101208136039283011261020f57610104810135916022190182121561020f57019081013591821161020b5760240192813603841361020857506102036101889361017592369161066c565b61070a565b80fd5b8380fd5b8580fd5b83823461018c578160031936011261018c57905490516001600160a01b039091168152602090f35b83346102085780600319360112610208576102546106b2565b80546001600160a01b03198116825581906001600160a01b03166000805160206107408339815191528280a380f35b610654565b8284346102085760208060031936011261018c576001600160401b03833581811161020b573660238201121561020b576102cb903690602481880135910161066c565b936102d46106b2565b84519182116103d357506001916102eb8354610501565b601f811161038d575b5080601f831160011461032e5750839482939492610323575b5050600019600383901b1c191690821b17905580f35b01519050848061030d565b90601f198316958486528286209286905b888210610376575050838596971061035d575b505050811b01905580f35b015160001960f88460031b161c19169055848080610352565b80878596829496860151815501950193019061033f565b838552818520601f840160051c8101918385106103c9575b601f0160051c019084905b8281106103be5750506102f4565b8681550184906103b0565b90915081906103a5565b634e487b7160e01b845260419052602483fd5b509034610153576080366003190112610153576044356001600160a01b0381160361015357606435926001600160401b039182851161018c573660238601121561018c5784013591821161020857366024838601011161020857506102036101889361017592602436920161066c565b9293905034610208576020366003190112610208576001600160e01b0319843581811692908390036102085763136b0d8560e31b83149485156104a0575b60208686519015158152f35b6a444947495f4d4f44554c4560a81b60208201908152600b82529495509293919290858201906001600160401b038211838310176104ee575060209650855251902016149038808080610494565b634e487b7160e01b815260418852602490fd5b90600182811c92168015610531575b602083101461051b57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610510565b601f909101601f19168101906001600160401b0382119082101761055e57604052565b634e487b7160e01b600052604160045260246000fd5b6040519060008260019182549261058a84610501565b9081845260209481811690816000146105f457506001146105b6575b50506105b49250038361053b565b565b600081815285812095935091905b8183106105dc5750506105b4935082010138806105a6565b855488840185015294850194879450918301916105c4565b9150506105b494925060ff191682840152151560051b82010138806105a6565b919082519283825260005b848110610640575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161061f565b3461066757600036600319011261066757005b600080fd5b9192916001600160401b03821161055e5760405191610695601f8201601f19166020018461053b565b829481845281830111610667578281602093846000960137010152565b6000546001600160a01b031633036106c657565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6020818051810103126106675760208101518015908115036106675761072d5790565b60405163070dc3b560e31b8152600490fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a26469706673582212204accd69b6d1e59b2a3b6b034850130851cfc8697cb111c987309f89f535773c164736f6c63430008150033";

type MockActionModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockActionModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockActionModule__factory extends ContractFactory {
  constructor(...args: MockActionModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    moduleOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<MockActionModule> {
    return super.deploy(
      moduleOwner,
      overrides || {}
    ) as Promise<MockActionModule>;
  }
  override getDeployTransaction(
    moduleOwner: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(moduleOwner, overrides || {});
  }
  override attach(address: string): MockActionModule {
    return super.attach(address) as MockActionModule;
  }
  override connect(signer: Signer): MockActionModule__factory {
    return super.connect(signer) as MockActionModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockActionModuleInterface {
    return new utils.Interface(_abi) as MockActionModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockActionModule {
    return new Contract(address, _abi, signerOrProvider) as MockActionModule;
  }
}
