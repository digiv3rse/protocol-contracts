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

export interface KeyExistsInterface extends utils.Interface {
  functions: {
    "IS_SCRIPT()": FunctionFragment;
    "keyExists(string,string)": FunctionFragment;
    "testKeyExists()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "IS_SCRIPT" | "keyExists" | "testKeyExists"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "keyExists",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "testKeyExists",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keyExists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testKeyExists",
    data: BytesLike
  ): Result;

  events: {};
}

export interface KeyExists extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KeyExistsInterface;

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
    IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;

    keyExists(
      json: string,
      key: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    testKeyExists(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

  keyExists(
    json: string,
    key: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  testKeyExists(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

    keyExists(
      json: string,
      key: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    testKeyExists(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;

    keyExists(
      json: string,
      key: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    testKeyExists(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keyExists(
      json: string,
      key: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    testKeyExists(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}