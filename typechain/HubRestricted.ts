/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface HubRestrictedInterface extends utils.Interface {
  functions: {
    "HUB()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "HUB"): FunctionFragment;

  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;

  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;

  events: {};
}

export interface HubRestricted extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HubRestrictedInterface;

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
    HUB(overrides?: CallOverrides): Promise<[string]>;
  };

  HUB(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    HUB(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    HUB(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}