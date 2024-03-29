/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DiGiV2Migration,
  DiGiV2MigrationInterface,
  Types,
} from "../DiGiV2Migration";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "migrationParams",
        type: "tuple",
        internalType: "struct Types.MigrationParams",
        components: [
          {
            name: "digiHandlesAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenHandleRegistryAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "legacyFeeFollowModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "legacyProfileFollowModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "newFeeFollowModule",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "batchMigrateFollowModules",
    inputs: [
      {
        name: "profileIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "batchMigrateFollowers",
    inputs: [
      {
        name: "followerProfileIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "idOfProfileFollowed",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "followTokenIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "batchMigrateFollows",
    inputs: [
      {
        name: "followerProfileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "idsOfProfileFollowed",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "followTokenIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "batchMigrateProfiles",
    inputs: [
      {
        name: "profileIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getProfileIdByHandleHash",
    inputs: [
      {
        name: "handleHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setMigrationAdmins",
    inputs: [
      {
        name: "migrationAdmins",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "whitelisted",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "ExecutorInvalid",
    inputs: [],
  },
  {
    type: "error",
    name: "NotGovernance",
    inputs: [],
  },
  {
    type: "error",
    name: "NotMigrationAdmin",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenDoesNotExist",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x6101203461012857601f6108a338819003918201601f19168301926001600160401b0392909183851183861017610112578160a092849260409788528339810103126101285782519160a08301908111838210176101125783526100628161012d565b82526100706020820161012d565b906020830191825261008384820161012d565b9283858201526100a8608061009a6060850161012d565b93606084019485520161012d565b60808281019182526001600160a01b0395861690529151841660a0529051831660c05251821660e05251166101009081529051610761918261014283396080518261016a015260a05182610192015260c051826101ba015260e051826103760152518161039e0152f35b634e487b7160e01b600052604160045260246000fd5b600080fd5b51906001600160a01b03821682036101285756fe6080604052600436101561001257600080fd5b6000803560e01c90816319e140701461007a575080638c28cc1d146100755780638e15512a14610070578063a72742741461006b578063ae900c00146100665763d9efd1d11461006157600080fd5b6104be565b6103d3565b610315565b610273565b610109565b346100a35760203660031901126100a35760409060043581526012602052205460805260206080f35b80fd5b9181601f840112156100d6578235916001600160401b0383116100d6576020808501948460051b0101116100d657565b600080fd5b60206003198201126100d657600435906001600160401b0382116100d657610105916004016100a6565b9091565b346100d657610117366100db565b731bb8efe7af7cb333f94fb46fb6de73812899b83391823b156100d65760405163709a16e760e11b8152608060048201529260009284928391829161016091608484019161061d565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660248401527f0000000000000000000000000000000000000000000000000000000000000000811660448401527f000000000000000000000000000000000000000000000000000000000000000016606483015203915af48015610204576101ef57005b806101fc6102029261021f565b80610612565b005b610641565b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161023257604052565b610209565b601f909101601f19168101906001600160401b0382119082101761023257604052565b801515036100d657565b602435906102718261025a565b565b346100d65760403660031901126100d6576004356001600160401b038082116100d657366023830112156100d6578160040135908111610232578060051b91602092604051926102c585830185610237565b8352602484840191830101913683116100d657602401905b8282106102f657610202846102f0610264565b906106be565b81356001600160a01b03811681036100d65781529084019084016102dd565b346100d657610323366100db565b731bb8efe7af7cb333f94fb46fb6de73812899b83391823b156100d65760405163b1ddbeb960e01b8152606060048201529260009284928391829161036c91606484019161061d565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660248401527f000000000000000000000000000000000000000000000000000000000000000016604483015203915af48015610204576101ef57005b346100d65760603660031901126100d6576001600160401b036004358181116100d6576104049036906004016100a6565b916044359081116100d65761041d9036906004016100a6565b9190600093338552601d60205261044061043c6040872060ff90541690565b1590565b6104ac578492731bb8efe7af7cb333f94fb46fb6de73812899b83391823b156104a85761048660405196879586948594622ba40360ea1b86526024359160048701610691565b03915af4801561020457610498575080f35b806101fc6104a59261021f565b80f35b8480fd5b604051631c1b2a3d60e31b8152600490fd5b346100d65760603660031901126100d657600480356001600160401b036024358181116100d6576104f290369085016100a6565b916044359081116100d65761050a90369086016100a6565b60008581526002602052604081205490959192906001600160a01b0316801561060157330361057a575b958596959495731bb8efe7af7cb333f94fb46fb6de73812899b83393843b1561057657610486916040519889978896879663d9efd1d160e01b8852870161064d565b8680fd5b604051620781fd60e01b815287810183905233602482015260208160448173a3d878ea3a10fdd20ebfdbf780683435645e7ada5af49081156102045787916105d3575b5061053457604051631a29be6960e21b81528790fd5b6105f4915060203d81116105fa575b6105ec8183610237565b81019061067c565b386105bd565b503d6105e2565b60405163677510db60e11b81528890fd5b60009103126100d657565b81835290916001600160fb1b0383116100d65760209260051b809284830137010190565b6040513d6000823e3d90fd5b9391610679959361066b92865260606020870152606086019161061d565b92604081850391015261061d565b90565b908160209103126100d657516106798161025a565b906106ab906106799694959360608452606084019161061d565b936020820152604081850391015261061d565b6017546001600160a01b03939291908416330361071957600093845b825181101561071157600190601d602084818460051b88010151168952526040872060ff1981541660ff87151516179055016106da565b505050509050565b604051632d5be4cb60e21b8152600490fdfea2646970667358221220f779226e9eb09c6ab00109ae151816f5008da79b14658c716769db43dd06e0ed64736f6c63430008150033";

type DiGiV2MigrationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiGiV2MigrationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiGiV2Migration__factory extends ContractFactory {
  constructor(...args: DiGiV2MigrationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    migrationParams: Types.MigrationParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<DiGiV2Migration> {
    return super.deploy(
      migrationParams,
      overrides || {}
    ) as Promise<DiGiV2Migration>;
  }
  override getDeployTransaction(
    migrationParams: Types.MigrationParamsStruct,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(migrationParams, overrides || {});
  }
  override attach(address: string): DiGiV2Migration {
    return super.attach(address) as DiGiV2Migration;
  }
  override connect(signer: Signer): DiGiV2Migration__factory {
    return super.connect(signer) as DiGiV2Migration__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiGiV2MigrationInterface {
    return new utils.Interface(_abi) as DiGiV2MigrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiGiV2Migration {
    return new Contract(address, _abi, signerOrProvider) as DiGiV2Migration;
  }
}
