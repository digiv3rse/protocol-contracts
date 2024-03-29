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

export declare namespace Types {
  export type TokenDataStruct = { owner: string; mintTimestamp: BigNumberish };

  export type TokenDataStructOutput = [string, BigNumber] & {
    owner: string;
    mintTimestamp: BigNumber;
  };
}

export interface IERC721TimestampedInterface extends utils.Interface {
  functions: {
    "exists(uint256)": FunctionFragment;
    "mintTimestampOf(uint256)": FunctionFragment;
    "tokenDataOf(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "exists"
      | "mintTimestampOf"
      | "tokenDataOf"
      | "totalSupply"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "exists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintTimestampOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenDataOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintTimestampOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenDataOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IERC721Timestamped extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC721TimestampedInterface;

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
    exists(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mintTimestampOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenDataOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Types.TokenDataStructOutput]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  mintTimestampOf(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenDataOf(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Types.TokenDataStructOutput>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    mintTimestampOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenDataOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Types.TokenDataStructOutput>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    exists(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintTimestampOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenDataOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    exists(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintTimestampOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenDataOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
