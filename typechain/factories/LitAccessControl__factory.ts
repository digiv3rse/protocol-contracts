/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LitAccessControl,
  LitAccessControlInterface,
} from "../LitAccessControl";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "digiHub",
        type: "address",
        internalType: "address",
      },
      {
        name: "collectPubAction",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasAccess",
    inputs: [
      {
        name: "requestorAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
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
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hasCollected",
    inputs: [
      {
        name: "requestorAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "publisherId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pubId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "collectorProfileId",
        type: "uint256",
        internalType: "uint256",
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
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isFollowing",
    inputs: [
      {
        name: "requestorAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "followerProfileId",
        type: "uint256",
        internalType: "uint256",
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
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
] as const;

const _bytecode =
  "0x60c03461008f57601f61092238819003918201601f19168301916001600160401b0383118484101761009457808492604094855283398101031261008f57610052602061004b836100aa565b92016100aa565b9060805260a05260405161086390816100bf8239608051818181610227015281816103b5015281816105080152610748015260a051816103140152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361008f5756fe6080604052600436101561001257600080fd5b6000803560e01c806309cebe76146100ea5780630efe5469146100985763a34b6ea51461003e57600080fd5b3461009557608036600319011261009557610057610134565b90606435906001600160401b03821161009557602061008b8461007d36600487016101a3565b506044359060243590610202565b6040519015158152f35b80fd5b50346100955760a0366003190112610095576100b2610134565b90608435906001600160401b03821161009557602061008b846100d836600487016101a3565b506064359060443590602435906102e1565b503461009557606036600319011261009557610104610134565b90604435906001600160401b03821161009557602061008b8461012a36600487016101a3565b5060243590610726565b600435906001600160a01b038216820361014a57565b600080fd5b601f909101601f19168101906001600160401b0382119082101761017257604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161017257601f01601f191660200190565b81601f8201121561014a578035906101ba82610188565b926101c8604051948561014f565b8284526020838301011161014a57816000926020809301838601378301015290565b9081602091031261014a5751801515810361014a5790565b6040516347720ebb60e01b8152600481018490526024810183905290926020826044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9182156102c157600092610291575b5081610280575b5015610274575050600190565b61027d91610726565b90565b61028b915083610726565b38610267565b6102b391925060203d81116102ba575b6102ab818361014f565b8101906101ea565b9038610260565b503d6102a1565b6040513d6000823e3d90fd5b51906001600160a01b038216820361014a57565b93929360018060a01b039260409283519263e833689360e01b84526004928284860152602492818487015286866044818b7f0000000000000000000000000000000000000000000000000000000000000000165afa95861561071b5790889291600097610699575b5082602080980151169182156104e6575b5050168551916370a0823160e01b928381528882168682015286818681865afa9081156104db576000916104ae575b506104a0578961039891610726565b15610493578551986331a9108f60e11b8a52848a0152848984818a7f0000000000000000000000000000000000000000000000000000000000000000165afa9384156104885760009461044a575b86869798999a50519889958694855216908301525afa9182156104405750600091610414575b509050151590565b82813d8311610439575b610428818361014f565b81010312610095575051803861040c565b503d61041e565b513d6000823e3d90fd5b93858a813d8311610481575b610460818361014f565b81010312610095575061047685969798996102cd565b9389989796506103e6565b503d610456565b86513d6000823e3d90fd5b5060009750505050505050565b506001985050505050505050565b908782813d83116104d4575b6104c4818361014f565b8101031261009557505138610389565b503d6104ba565b88513d6000823e3d90fd5b91509150865191637385ebc960e01b835285830152838201526000816044818a7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561048857908791600091610551575b5060a00151168015610493578690388061035a565b91503d8082843e610562818461014f565b82019086838303126100955782516001600160401b039384821161068357019161012093848483031261068357895194850185811082821117610687578a528351855288840151898601528984015190811161068357830181601f82011215610683578051906105d182610188565b926105de8c51948561014f565b8284528a838301011161067f5783918a91835b828110610668575050830101528884015261060e606083016102cd565b606084015261061f608083016102cd565b608084015261063060a083016102cd565b60a084015260c0820151906005821015610095575060c083015260e080820151908301526101009081015190820152869060a061053c565b8181018401518682018501528694508c93016105f1565b8380fd5b8280fd5b634e487b7160e01b8452604189528784fd5b90969192508781813d8311610714575b6106b3818361014f565b8101031261071057875191828901906001600160401b038211848310176106fe575060208a9493926106f2928b526106ea816102cd565b8452016102cd565b60208201529538610349565b634e487b7160e01b8152604188528690fd5b5080fd5b503d6106a9565b87513d6000823e3d90fd5b6040516331a9108f60e11b815260048101839052602092916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811692918583602481875afa9283156102c1576000936107f5575b50811691168114928315610799575b505050905090565b849293506044906040519485938492633f1a0f0f60e11b8452600484015260248301525afa9182156102c1576000926107d8575b505080388080610791565b6107ee9250803d106102ba576102ab818361014f565b38806107cd565b90928682813d8311610826575b61080c818361014f565b81010312610095575061081f82916102cd565b9290610782565b503d61080256fea2646970667358221220d65eb6a1979c0daff0094a4acf12d2d6d824f4358ff02ee562881167fd15da2c64736f6c63430008150033";

type LitAccessControlConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LitAccessControlConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LitAccessControl__factory extends ContractFactory {
  constructor(...args: LitAccessControlConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    digiHub: string,
    collectPubAction: string,
    overrides?: Overrides & { from?: string }
  ): Promise<LitAccessControl> {
    return super.deploy(
      digiHub,
      collectPubAction,
      overrides || {}
    ) as Promise<LitAccessControl>;
  }
  override getDeployTransaction(
    digiHub: string,
    collectPubAction: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      digiHub,
      collectPubAction,
      overrides || {}
    );
  }
  override attach(address: string): LitAccessControl {
    return super.attach(address) as LitAccessControl;
  }
  override connect(signer: Signer): LitAccessControl__factory {
    return super.connect(signer) as LitAccessControl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LitAccessControlInterface {
    return new utils.Interface(_abi) as LitAccessControlInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LitAccessControl {
    return new Contract(address, _abi, signerOrProvider) as LitAccessControl;
  }
}