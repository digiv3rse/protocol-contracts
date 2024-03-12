/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface HeadwearBeanieInterface extends utils.Interface {
  functions: {
    "getBeanie(uint8)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getBeanie"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBeanie",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getBeanie", data: BytesLike): Result;

  events: {};
}

export interface HeadwearBeanie extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HeadwearBeanieInterface;

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
    getBeanie(
      beanieColor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number, number]>;
  };

  getBeanie(
    beanieColor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, number, number]>;

  callStatic: {
    getBeanie(
      beanieColor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, number, number]>;
  };

  filters: {};

  estimateGas: {
    getBeanie(
      beanieColor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBeanie(
      beanieColor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
