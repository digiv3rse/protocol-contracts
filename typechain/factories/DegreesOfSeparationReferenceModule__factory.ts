/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DegreesOfSeparationReferenceModule,
  DegreesOfSeparationReferenceModuleInterface,
} from "../DegreesOfSeparationReferenceModule";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "hub",
        type: "address",
        internalType: "address",
      },
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
    name: "HUB",
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
    name: "MAX_DEGREES_OF_SEPARATION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getModuleConfig",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pubId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ModuleConfig",
        components: [
          {
            name: "setUp",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "commentsRestricted",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "quotesRestricted",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "mirrorsRestricted",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "degreesOfSeparation",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "sourceProfile",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "originalAuthorProfile",
            type: "uint96",
            internalType: "uint96",
          },
        ],
      },
    ],
    stateMutability: "view",
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
    name: "initializeReferenceModule",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pubId",
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
    stateMutability: "nonpayable",
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
    name: "processComment",
    inputs: [
      {
        name: "processCommentParams",
        type: "tuple",
        internalType: "struct Types.ProcessCommentParams",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pubId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "transactionExecutor",
            type: "address",
            internalType: "address",
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
            name: "data",
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
    stateMutability: "view",
  },
  {
    type: "function",
    name: "processMirror",
    inputs: [
      {
        name: "processMirrorParams",
        type: "tuple",
        internalType: "struct Types.ProcessMirrorParams",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pubId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "transactionExecutor",
            type: "address",
            internalType: "address",
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
            name: "data",
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
    stateMutability: "view",
  },
  {
    type: "function",
    name: "processQuote",
    inputs: [
      {
        name: "processQuoteParams",
        type: "tuple",
        internalType: "struct Types.ProcessQuoteParams",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pubId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "transactionExecutor",
            type: "address",
            internalType: "address",
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
            name: "data",
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
    stateMutability: "view",
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
    name: "InvalidDegreesOfSeparation",
    inputs: [],
  },
  {
    type: "error",
    name: "NotFollowing",
    inputs: [],
  },
  {
    type: "error",
    name: "NotHub",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInheritingPointedPubConfig",
    inputs: [],
  },
  {
    type: "error",
    name: "OperationDisabled",
    inputs: [],
  },
  {
    type: "error",
    name: "ProfilePathExceedsDegreesOfSeparation",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenDoesNotExist",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a0346100b857601f6200156038819003918201601f19168301916001600160401b038311848410176100bd5780849260409485528339810103126100b857610064610056602061004f846100d3565b93016100d3565b61005f336100e7565b6100e7565b60805260405161143190816200012f82396080518181816101d601528181610281015281816102e101528181610744015281816107f301528181610a6601528181610c4f0152818161121301526112c90152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036100b857565b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe608080604052600436101561001357600080fd5b60003560e01c90816301ffc9a714610e255750806303ee438c146106f657806317e91e3814610c3f5780631d86c58414610b345780634985ec1214610a56578063681591c114610908578063684816ba146107e3578063715018a61461079c5780638da5cb5b14610773578063a4c52b861461072e578063af6c13fa14610712578063ce90d52e146106f6578063ee299f5d1461016f5763f2fde38b146100b957600080fd5b3461016a57602036600319011261016a576004356001600160a01b038181169182900361016a576100e8611383565b8115610116576000548260018060a01b0319821617600055166000805160206113dc833981519152600080a3005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b600080fd5b3461016a57608036600319011261016a576001600160a01b036044358181160361016a57606435906001600160401b03821161016a573660238301121561016a576001600160401b0360048301351161016a578160040135820136602482011161016a57817f00000000000000000000000000000000000000000000000000000000000000001633036106e4578260a091031261016a57610212602483016110b3565b9161021f604482016110b3565b61022b606483016110b3565b9360848301359460ff8616860361016a5760a4840135946001600160601b038616860361016a57600260ff8816116106d257604051634f558e7960e01b81526001600160601b03871660048201526020816024817f000000000000000000000000000000000000000000000000000000000000000086165afa908115610685576000916106a3575b501561069157600060449160405192838092637385ebc960e01b8252600435600483015260243560248301527f0000000000000000000000000000000000000000000000000000000000000000165afa90811561068557600091610525575b5060c0810151600581101561050f576002036104f15780516000526002602052602060406000209101516000526020526040600020946040519561035587610eee565b549560c060ff881615918215815260ff8960081c161515602082015260ff8960101c161515604082015260ff8960181c161515606082015260ff8960201c16608082015260018060601b038960281c1660a0820152019660018060601b039060881c1687526104df5794516104db966104c7966001600160601b03909216925b604051956103e287610eee565b6001875260208701951515865260408701901515815260608701911515825260ff608088019316835260a087019360018060601b0316845260c087019460018060601b03168552600435600052600260205260406000206024356000526020526040600020965115159560ff63ff00000062ff000061ff008b549451151560081b169451151560101b169451151560181b16948160201b905160201b1695600160281b600160881b03905160281b1696600160881b600160e81b03905160881b1697169062ffffff60e81b16171717171717179055369060248160040135910161107c565b60405191829160208352602083019061100a565b0390f35b60405163016cfbc160e71b8152600490fd5b506104db956104c7956004356001600160601b0316929091906103d5565b634e487b7160e01b600052602160045260246000fd5b3d9150816000823e6105378282610f24565b602081838101031261016a578051906001600160401b03821161016a57610120828201848301031261016a57604051926001600160401b0361012085019081119085111761066f5761012084016040908152828401805186526020808201519087015201516001600160401b03811161016a57818301601f828686010101121561016a578084840101516105ca81611061565b926105d86040519485610f24565b8184528401602082848888010101011161016a57610600916020808501918787010101610fe7565b60408401526106136060838301016110d8565b60608401526106266080838301016110d8565b608084015261063960a0838301016110d8565b60a084015260c08282010151600581101561016a5760c08401520160e08181015190830152610100908101519082015287610312565b634e487b7160e01b600052604160045260246000fd5b6040513d6000823e3d90fd5b60405163677510db60e11b8152600490fd5b6106c5915060203d6020116106cb575b6106bd8183610f24565b8101906110c0565b886102b3565b503d6106b3565b604051634829bddd60e01b8152600490fd5b6040516313bd2e8360e31b8152600490fd5b3461016a57600036600319011261016a576104db6104c7610f47565b3461016a57600036600319011261016a57602060405160028152f35b3461016a57600036600319011261016a576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461016a57600036600319011261016a576000546040516001600160a01b039091168152602090f35b3461016a57600036600319011261016a576107b5611383565b600080546001600160a01b0319811682556001600160a01b03166000805160206113dc8339815191528280a3005b3461016a576107f13661102f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633036106e457606081013560005260c06020916002835260406000206080820135600052835260406000206040519061085382610eee565b5460ff81161515825260ff8160081c1615158583015260ff8160101c16151580604084015260ff8260181c161515606084015260ff82871c169283608082015260018060601b03808460281c16938460a084015260881c1695869101526108da575b604051856108c282610f09565b600082526104db60405192828493845283019061100a565b6108ff936108f76108ef6101008601866110ec565b81019061111e565b9335916111c4565b818080806108b5565b3461016a5760208060031936011261016a576001600160401b039060043582811161016a573660238201121561016a5761094c90369060248160040135910161107c565b91610955611383565b825190811161066f5760019161096b8354610eb4565b601f8111610a0d575b5080601f83116001146109ad57508192936000926109a2575b5050600019600383901b1c191690821b179055005b01519050838061098d565b90601f198316948460005282600020926000905b8782106109f6575050838596106109dd575b505050811b019055005b015160001960f88460031b161c191690558380806109d3565b8087859682949686015181550195019301906109c1565b8360005281600020601f840160051c810191838510610a4c575b601f0160051c019084905b828110610a40575050610974565b60008155018490610a32565b9091508190610a27565b3461016a57610a643661102f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633036106e457606081013560005260c060209160028352604060002060808201356000528352604060002060405190610ac682610eee565b5460ff81161515825260ff8160081c1615158583015260ff8160101c161515604083015260ff8160181c16151580606084015260ff82871c169283608082015260018060601b03808460281c16938460a084015260881c1695869101526108da57604051856108c282610f09565b3461016a57604036600319011261016a5760e0604051610b5381610eee565b60008152600060c060209282848201528260408201528260608201528260808201528260a08201520152600435600052600281526040600020602435600052815260406000209060405191610ba783610eee565b5460ff80821615159384815283810191808460081c161515835260408201818560101c161515815260608301828660181c161515815260808401918387891c16835260018060601b039788968760c060a0890198828c60281c168a52019960881c1689526040519a8b52511515908a01525115156040890152511515606088015251166080860152511660a0840152511660c0820152f35b3461016a57610c4d3661102f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633036106e45760608101356000526020906002825260406000206080820135600052825260406000209060405191610cae83610eee565b549160ff9081841615158152818460081c161515928386830152828560101c1615156040830152828560181c161515606083015260c08386881c16608084019381855260018060601b0396878960281c16918860a082019a848c5260881c169485910152610d24575b604051896108c282610f09565b610d439184358094610d3d6108ef6101008901896110ec565b936111c4565b60005260028652856040600020910135600052855260406000209260405193610d6b85610eee565b54908382161595861596878752858460081c16159081158a890152868560101c1615156040890152868560181c161515606089015286858b1c169788608082015260c085808860281c16978860a085015260881c1691015297610e1d575b508615610e0f575b5050508315610e01575b505050610def578180808080808080610d17565b60405163025ae57760e41b8152600490fd5b511614159050828080610ddb565b511614159350858080610dd1565b965088610dc9565b3461016a57602036600319011261016a576001600160e01b03196004358181169081900361016a5763d80d7bcd60e01b8114918215610e6c575b6020836040519015158152f35b6a444947495f4d4f44554c4560a81b60208501908152600b8552604085019492935090916001600160401b0385118186101761066f5760209460405251902016148280610e5f565b90600182811c92168015610ee4575b6020831014610ece57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610ec3565b60e081019081106001600160401b0382111761066f57604052565b602081019081106001600160401b0382111761066f57604052565b601f909101601f19168101906001600160401b0382119082101761066f57604052565b60405190600082600191825492610f5d84610eb4565b908184526020948181169081600014610fc75750600114610f89575b5050610f8792500383610f24565b565b600081815285812095935091905b818310610faf575050610f8793508201013880610f79565b85548884018501529485019487945091830191610f97565b915050610f8794925060ff191682840152151560051b8201013880610f79565b60005b838110610ffa5750506000910152565b8181015183820152602001610fea565b9060209161102381518092818552858086019101610fe7565b601f01601f1916010190565b6003199060208183011261016a57600435916001600160401b03831161016a57826101209203011261016a5760040190565b6001600160401b03811161066f57601f01601f191660200190565b92919261108882611061565b916110966040519384610f24565b82948184528183011161016a578281602093846000960137010152565b3590811515820361016a57565b9081602091031261016a5751801515810361016a5790565b51906001600160a01b038216820361016a57565b903590601e198136030182121561016a57018035906001600160401b03821161016a5760200191813603831361016a57565b90602090818382031261016a576001600160401b039280359084821161016a570181601f8201121561016a57803593841161066f578360051b906040519461116885840187610f24565b8552838086019282010192831161016a578301905b82821061118b575050505090565b8135815290830190830161117d565b80518210156111ae5760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b9290949194838614908115611306575b506112ff5760ff16806111f35760405163016cfbc160e71b8152600490fd5b8351906000190160ff81116112925760ff16106112ed578251156112c0577f0000000000000000000000000000000000000000000000000000000000000000918351156111ae5760208401516112499184611310565b60005b83516000198101908111611292578110156112a85761126b818561119a565b51600182018092116112925761128d90611285838761119a565b519085611310565b61124c565b634e487b7160e01b600052601160045260246000fd5b6112b990610f87949593929561119a565b5190611310565b9290610f8792507f0000000000000000000000000000000000000000000000000000000000000000611310565b60405163ec26e61b60e01b8152600490fd5b5092505050565b90508514386111d4565b91604460209260405194859384926347720ebb60e01b84526004840152602483015260018060a01b03165afa90811561068557600091611365575b501561135357565b6040516322d9eef360e21b8152600490fd5b61137d915060203d81116106cb576106bd8183610f24565b3861134b565b6000546001600160a01b0316330361139757565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220d1d55f95156250a4b307e85ae208d6fc7b4b338ea90cde2b1eb505410bad15d264736f6c63430008150033";

type DegreesOfSeparationReferenceModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DegreesOfSeparationReferenceModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DegreesOfSeparationReferenceModule__factory extends ContractFactory {
  constructor(...args: DegreesOfSeparationReferenceModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    hub: string,
    moduleOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<DegreesOfSeparationReferenceModule> {
    return super.deploy(
      hub,
      moduleOwner,
      overrides || {}
    ) as Promise<DegreesOfSeparationReferenceModule>;
  }
  override getDeployTransaction(
    hub: string,
    moduleOwner: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, moduleOwner, overrides || {});
  }
  override attach(address: string): DegreesOfSeparationReferenceModule {
    return super.attach(address) as DegreesOfSeparationReferenceModule;
  }
  override connect(
    signer: Signer
  ): DegreesOfSeparationReferenceModule__factory {
    return super.connect(signer) as DegreesOfSeparationReferenceModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DegreesOfSeparationReferenceModuleInterface {
    return new utils.Interface(
      _abi
    ) as DegreesOfSeparationReferenceModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DegreesOfSeparationReferenceModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DegreesOfSeparationReferenceModule;
  }
}
