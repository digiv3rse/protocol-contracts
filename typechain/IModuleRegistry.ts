/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface IModuleRegistryInterface extends utils.Interface {
  functions: {
    "getModuleTypes(address)": FunctionFragment;
    "isErc20CurrencyRegistered(address)": FunctionFragment;
    "isModuleRegistered(address)": FunctionFragment;
    "isModuleRegisteredAs(address,uint256)": FunctionFragment;
    "registerErc20Currency(address)": FunctionFragment;
    "registerModule(address,uint256)": FunctionFragment;
    "verifyErc20Currency(address)": FunctionFragment;
    "verifyModule(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getModuleTypes"
      | "isErc20CurrencyRegistered"
      | "isModuleRegistered"
      | "isModuleRegisteredAs"
      | "registerErc20Currency"
      | "registerModule"
      | "verifyErc20Currency"
      | "verifyModule"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getModuleTypes",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isErc20CurrencyRegistered",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isModuleRegistered",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isModuleRegisteredAs",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerErc20Currency",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerModule",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyErc20Currency",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyModule",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getModuleTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isErc20CurrencyRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isModuleRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isModuleRegisteredAs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerErc20Currency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyErc20Currency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyModule",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IModuleRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IModuleRegistryInterface;

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
    getModuleTypes(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isErc20CurrencyRegistered(
      currencyAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isModuleRegistered(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isModuleRegisteredAs(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    registerErc20Currency(
      currencyAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    registerModule(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    verifyErc20Currency(
      currencyAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    verifyModule(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  getModuleTypes(
    moduleAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isErc20CurrencyRegistered(
    currencyAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isModuleRegistered(
    moduleAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isModuleRegisteredAs(
    moduleAddress: string,
    moduleType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  registerErc20Currency(
    currencyAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  registerModule(
    moduleAddress: string,
    moduleType: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  verifyErc20Currency(
    currencyAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  verifyModule(
    moduleAddress: string,
    moduleType: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    getModuleTypes(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isErc20CurrencyRegistered(
      currencyAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isModuleRegistered(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isModuleRegisteredAs(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerErc20Currency(
      currencyAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerModule(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyErc20Currency(
      currencyAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyModule(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getModuleTypes(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isErc20CurrencyRegistered(
      currencyAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isModuleRegistered(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isModuleRegisteredAs(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerErc20Currency(
      currencyAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    registerModule(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    verifyErc20Currency(
      currencyAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    verifyModule(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getModuleTypes(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isErc20CurrencyRegistered(
      currencyAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isModuleRegistered(
      moduleAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isModuleRegisteredAs(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerErc20Currency(
      currencyAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    registerModule(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    verifyErc20Currency(
      currencyAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    verifyModule(
      moduleAddress: string,
      moduleType: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
