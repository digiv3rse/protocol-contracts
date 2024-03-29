/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  S01_DeployDiGiV2Upgrade,
  S01_DeployDiGiV2UpgradeInterface,
} from "../../S01_DeployDiGiV2Upgrade.s.sol/S01_DeployDiGiV2Upgrade";

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
    name: "testArrayHelpers",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testDiGiV2UpgradeDeployment",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testForkManagement",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x6080806040523461002c57600160ff1981816004541617600455600c541617600c5560b390816100328239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c80634841c83e1460675780639708e5bd146067578063f0c0adc31460675763f8ccbf4714604657600080fd5b346063578160031936011260635760209060ff600c541615158152f35b5080fd5b346078576000366003190112607857005b600080fdfea2646970667358221220aafdfb55e3ee5bdb3d515e058e6ae5bf2194e3588c6af3f06d53f6336eb3071064736f6c63430008150033";

type S01_DeployDiGiV2UpgradeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: S01_DeployDiGiV2UpgradeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class S01_DeployDiGiV2Upgrade__factory extends ContractFactory {
  constructor(...args: S01_DeployDiGiV2UpgradeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<S01_DeployDiGiV2Upgrade> {
    return super.deploy(overrides || {}) as Promise<S01_DeployDiGiV2Upgrade>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): S01_DeployDiGiV2Upgrade {
    return super.attach(address) as S01_DeployDiGiV2Upgrade;
  }
  override connect(signer: Signer): S01_DeployDiGiV2Upgrade__factory {
    return super.connect(signer) as S01_DeployDiGiV2Upgrade__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): S01_DeployDiGiV2UpgradeInterface {
    return new utils.Interface(_abi) as S01_DeployDiGiV2UpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): S01_DeployDiGiV2Upgrade {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as S01_DeployDiGiV2Upgrade;
  }
}
