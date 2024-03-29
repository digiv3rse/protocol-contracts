/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DiGiV2UpgradeContract,
  DiGiV2UpgradeContractInterface,
} from "../DiGiV2UpgradeContract";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "proxyAdminAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "governanceAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "digiHub",
        type: "address",
        internalType: "address",
      },
      {
        name: "newImplementationAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "treasury",
        type: "address",
        internalType: "address",
      },
      {
        name: "treasuryFee",
        type: "uint16",
        internalType: "uint16",
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
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "GOVERNANCE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract Governance",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "OWNER",
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
    name: "PROXY_ADMIN",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ProxyAdmin",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TREASURY",
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
    name: "TREASURY_FEE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "executeDiGiV2Upgrade",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "newImplementation",
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
    type: "error",
    name: "OnlyOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyOwnerOrHub",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x6101603461013757601f6106a538819003918201601f19168301916001600160401b0383118484101761013c5780849260e0946040528339810103126101375761004881610152565b9061005560208201610152565b9161006260408301610152565b9061006f60608401610152565b9361007c60808501610152565b9460c061008b60a08701610152565b9501519361ffff851685036101375760805260a0526001600160a01b0391821660c0521660e05261010092835261012091825261014090815260405161053e9390929084610167853960805184818161012301526104b0015260a0518460d7015260c05184818160900152610167015260e051848181610224015261046d0152518381816101b701526103e501525182818161025a015261042901525181818161028201526103ac0152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101375756fe608060408181526004918236101561001657600080fd5b600092833560e01c918263117803e31461049c5750816314627834146104585781632d2c5565146104145781638b677b03146103d05781638ce1a48314610391578163bf7805111461010657508063e6fe34a5146100c35763ed9bc82a1461007d57600080fd5b346100bf57816003193601126100bf57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b50346100bf57816003193601126100bf57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8383346100bf57816003193601126100bf576001600160a01b03907f00000000000000000000000000000000000000000000000000000000000000008216330361038257805163ac11641d60e01b60208083019190915285825281830195917f00000000000000000000000000000000000000000000000000000000000000008516916001600160401b0388118289101761036f57878552823b1561036b579187918793630e47dba960e21b8452877f0000000000000000000000000000000000000000000000000000000000000000166044830152866064830152815190816084840152855b82811061035157505080820160a401859052601f01601f191681010360640190829084905af1801561034757610333575b839450827f00000000000000000000000000000000000000000000000000000000000000001692833b1561032f578251639875e5b960e01b81527f0000000000000000000000000000000000000000000000000000000000000000909116828201527f000000000000000000000000000000000000000000000000000000000000000061ffff166024820152848160448183885af1801561032557908591610311575b5050823b1561030c57815163ee1f715f60e01b81529284918491829084905af190811561030357506102f05750f35b6102f9906104df565b6103005780f35b80fd5b513d84823e3d90fd5b505050fd5b61031a906104df565b61030c5783866102c1565b83513d87823e3d90fd5b8480fd5b92909361033f906104df565b91839061021e565b82513d86823e3d90fd5b8084018083015160a4909101528a96508b955081016101ed565b8680fd5b634e487b7160e01b875260418452602487fd5b51635fc483c560e01b81528390fd5b5050346100bf57816003193601126100bf576020905161ffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5050346100bf57816003193601126100bf57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100bf57816003193601126100bf57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100bf57816003193601126100bf57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8490346100bf57816003193601126100bf577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b6001600160401b0381116104f257604052565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220cae46047380b75bc5f71b4d76346d13d39840e83d22af47b914d441ee473fc8f64736f6c63430008150033";

type DiGiV2UpgradeContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiGiV2UpgradeContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiGiV2UpgradeContract__factory extends ContractFactory {
  constructor(...args: DiGiV2UpgradeContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    proxyAdminAddress: string,
    governanceAddress: string,
    owner: string,
    digiHub: string,
    newImplementationAddress: string,
    treasury: string,
    treasuryFee: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<DiGiV2UpgradeContract> {
    return super.deploy(
      proxyAdminAddress,
      governanceAddress,
      owner,
      digiHub,
      newImplementationAddress,
      treasury,
      treasuryFee,
      overrides || {}
    ) as Promise<DiGiV2UpgradeContract>;
  }
  override getDeployTransaction(
    proxyAdminAddress: string,
    governanceAddress: string,
    owner: string,
    digiHub: string,
    newImplementationAddress: string,
    treasury: string,
    treasuryFee: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      proxyAdminAddress,
      governanceAddress,
      owner,
      digiHub,
      newImplementationAddress,
      treasury,
      treasuryFee,
      overrides || {}
    );
  }
  override attach(address: string): DiGiV2UpgradeContract {
    return super.attach(address) as DiGiV2UpgradeContract;
  }
  override connect(signer: Signer): DiGiV2UpgradeContract__factory {
    return super.connect(signer) as DiGiV2UpgradeContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiGiV2UpgradeContractInterface {
    return new utils.Interface(_abi) as DiGiV2UpgradeContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiGiV2UpgradeContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DiGiV2UpgradeContract;
  }
}
