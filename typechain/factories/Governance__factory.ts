/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Governance, GovernanceInterface } from "../Governance";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "digiHubAddress_",
        type: "address",
        internalType: "address",
      },
      {
        name: "governanceOwner_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DIGI_HUB",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IDiGiHub",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "clearControllerContract",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "controllerContract",
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
    name: "digiHub_setEmergencyAdmin",
    inputs: [
      {
        name: "newEmergencyAdmin",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "digiHub_setGovernance",
    inputs: [
      {
        name: "newGovernance",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "digiHub_setState",
    inputs: [
      {
        name: "newState",
        type: "uint8",
        internalType: "enum Types.ProtocolState",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "digiHub_setTreasuryParams",
    inputs: [
      {
        name: "newTreasury",
        type: "address",
        internalType: "address",
      },
      {
        name: "newTreasuryFee",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "digiHub_whitelistProfileCreator",
    inputs: [
      {
        name: "profileCreator",
        type: "address",
        internalType: "address",
      },
      {
        name: "whitelist",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "executeAsGovernance",
    inputs: [
      {
        name: "target",
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
    stateMutability: "payable",
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
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setControllerContract",
    inputs: [
      {
        name: "newControllerContract",
        type: "address",
        internalType: "address",
      },
    ],
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
    name: "ControllerContractUpdated",
    inputs: [
      {
        name: "previousControllerContract",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newControllerContract",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
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
    name: "Unauthorized",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a0346100b157601f610ae038819003918201601f19168301916001600160401b038311848410176100b65780849260409485528339810103126100b157610063610055602061004e846100cc565b93016100cc565b61005e336100e0565b6100e0565b6001600160a01b03166080526040516109b890816101288239608051818181610126015281816101fe0152818161037f015281816103ff0152818161058d0152818161069d015261070b0152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036100b157565b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6080604052600436101561001257600080fd5b60003560e01c806310c3195b146100e7578063348e46c7146100e257806364e73c57146100dd5780636c3e2956146100d8578063715018a6146100d35780638da5cb5b146100ce5780638dfb5130146100c95780639875e5b9146100c4578063b5a01c4e146100bf578063c8a7462a146100ba578063e6fe34a5146100b5578063ee1f715f146100b05763f2fde38b146100ab57600080fd5b6107a7565b61073a565b6106f5565b610670565b610647565b610544565b6104e7565b6104be565b610475565b6103b7565b6102af565b6101d1565b346101b65760203660031901126101b65760043560038110156101b6576000805490916001600160a01b03918216331415806101a8575b6101975782917f000000000000000000000000000000000000000000000000000000000000000016803b15610193576024839260405194859384926356de96db60e01b845260048401525af1801561018e57610178575080f35b8061018561018b9261086e565b8061046a565b80f35b610886565b5050fd5b6040516282b42960e81b8152600490fd5b50816001541633141561011e565b600080fd5b600435906001600160a01b03821682036101b657565b346101b65760006020366003190112610263576101ec6101bb565b6101f46108ea565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691839190833b1561025f5760249083604051958694859363ab033ea960e01b85521660048401525af1801561018e57610256575080f35b61018b9061086e565b8280fd5b80fd5b6020808252825181830181905290939260005b82811061029b57505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610279565b60403660031901126101b6576102c36101bb565b6001600160401b0390602435908282116101b657366023830112156101b65781600401359283116101b65736602484840101116101b6576000546001600160a01b03908116331415806103a9575b6101975760015481166001600160a01b03163314908161037a575b50610197576000928392602461034b5a92604051948593849201610892565b03923491f16103586108a0565b90156103725761036e9060405191829182610266565b0390f35b602081519101fd5b8091507f000000000000000000000000000000000000000000000000000000000000000016908216143861032c565b508060015416331415610311565b346101b65760006040366003190112610263576103d26101bb565b6024359081151580920361025f5782546001600160a01b039081163314158061045c575b610197578391817f00000000000000000000000000000000000000000000000000000000000000001690813b15610458578360449260405196879586946310482a8360e11b865216600485015260248401525af1801561018e57610256575080f35b8380fd5b5080600154163314156103f6565b60009103126101b657565b346101b6576000806003193601126102635761048f6108ea565b80546001600160a01b03198116825581906001600160a01b03166000805160206109638339815191528280a380f35b346101b65760003660031901126101b6576000546040516001600160a01b039091168152602090f35b346101b65760203660031901126101b6576105006101bb565b6105086108ea565b600154600080516020610943833981519152604060018060a01b0381519481851686521693846020820152a16001600160a01b03191617600155005b346101b65760403660031901126101b65761055d6101bb565b6024359061ffff821682036101b657600080549092906001600160a01b0390811633141580610639575b610197577f0000000000000000000000000000000000000000000000000000000000000000169083823b1561026357604051630787a21360e51b81526001600160a01b039490941660048501528360248183865af192831561018e578493610626575b50813b156101935760405163a652db4960e01b815261ffff91909116600482015291908290602490829084905af1801561018e57610178575080f35b806101856106339261086e565b386105ea565b508060015416331415610587565b346101b65760003660031901126101b6576001546040516001600160a01b039091168152602090f35b346101b657600060203660031901126102635761068b6101bb565b6106936108ea565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691839190833b1561025f57602490836040519586948593630d768ce560e21b85521660048401525af1801561018e57610256575080f35b346101b65760003660031901126101b6576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346101b6576000806003193601126102635780546001600160a01b0390811633141580610799575b6101975760008051602061094383398151915260406001549281519084168152846020820152a16001600160a01b03191660015580f35b508060015416331415610762565b346101b65760203660031901126101b6576107c06101bb565b6107c86108ea565b6001600160a01b03908116801561080457600080546001600160a01b03198116831782559092166000805160206109638339815191528380a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161088157604052565b610858565b6040513d6000823e3d90fd5b908092918237016000815290565b3d156108e5576001600160401b03903d8281116108815760405192601f8201601f19908116603f01168401908111848210176108815760405282523d6000602084013e565b606090565b6000546001600160a01b031633036108fe57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfe0d8ff93c45daabccf0c67a2b31c8c7639aae955b3aa46d128cd2bb4d98a686c18be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a26469706673582212201dcbdf2976b39fac0c4a0bf34810258d775f169576777c121b19753086763f8264736f6c63430008150033";

type GovernanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Governance__factory extends ContractFactory {
  constructor(...args: GovernanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    digiHubAddress_: string,
    governanceOwner_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<Governance> {
    return super.deploy(
      digiHubAddress_,
      governanceOwner_,
      overrides || {}
    ) as Promise<Governance>;
  }
  override getDeployTransaction(
    digiHubAddress_: string,
    governanceOwner_: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      digiHubAddress_,
      governanceOwner_,
      overrides || {}
    );
  }
  override attach(address: string): Governance {
    return super.attach(address) as Governance;
  }
  override connect(signer: Signer): Governance__factory {
    return super.connect(signer) as Governance__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceInterface {
    return new utils.Interface(_abi) as GovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Governance {
    return new Contract(address, _abi, signerOrProvider) as Governance;
  }
}