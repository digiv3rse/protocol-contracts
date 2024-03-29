/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface DiGiV2UpgradeContractInterface extends utils.Interface {
  functions: {
    "DIGI_HUB()": FunctionFragment;
    "GOVERNANCE()": FunctionFragment;
    "OWNER()": FunctionFragment;
    "PROXY_ADMIN()": FunctionFragment;
    "TREASURY()": FunctionFragment;
    "TREASURY_FEE()": FunctionFragment;
    "executeDiGiV2Upgrade()": FunctionFragment;
    "newImplementation()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DIGI_HUB"
      | "GOVERNANCE"
      | "OWNER"
      | "PROXY_ADMIN"
      | "TREASURY"
      | "TREASURY_FEE"
      | "executeDiGiV2Upgrade"
      | "newImplementation"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "DIGI_HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "GOVERNANCE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "OWNER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PROXY_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TREASURY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TREASURY_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeDiGiV2Upgrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newImplementation",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "DIGI_HUB", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "GOVERNANCE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OWNER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PROXY_ADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TREASURY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TREASURY_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDiGiV2Upgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newImplementation",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DiGiV2UpgradeContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DiGiV2UpgradeContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DIGI_HUB(overrides?: CallOverrides): Promise<[string]>;

    GOVERNANCE(overrides?: CallOverrides): Promise<[string]>;

    OWNER(overrides?: CallOverrides): Promise<[string]>;

    PROXY_ADMIN(overrides?: CallOverrides): Promise<[string]>;

    TREASURY(overrides?: CallOverrides): Promise<[string]>;

    TREASURY_FEE(overrides?: CallOverrides): Promise<[number]>;

    executeDiGiV2Upgrade(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    newImplementation(overrides?: CallOverrides): Promise<[string]>;
  };

  DIGI_HUB(overrides?: CallOverrides): Promise<string>;

  GOVERNANCE(overrides?: CallOverrides): Promise<string>;

  OWNER(overrides?: CallOverrides): Promise<string>;

  PROXY_ADMIN(overrides?: CallOverrides): Promise<string>;

  TREASURY(overrides?: CallOverrides): Promise<string>;

  TREASURY_FEE(overrides?: CallOverrides): Promise<number>;

  executeDiGiV2Upgrade(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  newImplementation(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DIGI_HUB(overrides?: CallOverrides): Promise<string>;

    GOVERNANCE(overrides?: CallOverrides): Promise<string>;

    OWNER(overrides?: CallOverrides): Promise<string>;

    PROXY_ADMIN(overrides?: CallOverrides): Promise<string>;

    TREASURY(overrides?: CallOverrides): Promise<string>;

    TREASURY_FEE(overrides?: CallOverrides): Promise<number>;

    executeDiGiV2Upgrade(overrides?: CallOverrides): Promise<void>;

    newImplementation(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    DIGI_HUB(overrides?: CallOverrides): Promise<BigNumber>;

    GOVERNANCE(overrides?: CallOverrides): Promise<BigNumber>;

    OWNER(overrides?: CallOverrides): Promise<BigNumber>;

    PROXY_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    TREASURY(overrides?: CallOverrides): Promise<BigNumber>;

    TREASURY_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    executeDiGiV2Upgrade(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    newImplementation(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DIGI_HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GOVERNANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PROXY_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TREASURY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TREASURY_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeDiGiV2Upgrade(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    newImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
