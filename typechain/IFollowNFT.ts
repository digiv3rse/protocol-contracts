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

export declare namespace Types {
  export type FollowDataStruct = {
    followerProfileId: BigNumberish;
    originalFollowTimestamp: BigNumberish;
    followTimestamp: BigNumberish;
    profileIdAllowedToRecover: BigNumberish;
  };

  export type FollowDataStructOutput = [
    BigNumber,
    number,
    number,
    BigNumber
  ] & {
    followerProfileId: BigNumber;
    originalFollowTimestamp: number;
    followTimestamp: number;
    profileIdAllowedToRecover: BigNumber;
  };
}

export interface IFollowNFTInterface extends utils.Interface {
  functions: {
    "approveFollow(uint256,uint256)": FunctionFragment;
    "follow(uint256,address,uint256)": FunctionFragment;
    "getFollowApproved(uint256)": FunctionFragment;
    "getFollowData(uint256)": FunctionFragment;
    "getFollowTimestamp(uint256)": FunctionFragment;
    "getFollowTokenId(uint256)": FunctionFragment;
    "getFollowerCount()": FunctionFragment;
    "getFollowerProfileId(uint256)": FunctionFragment;
    "getOriginalFollowTimestamp(uint256)": FunctionFragment;
    "getProfileIdAllowedToRecover(uint256)": FunctionFragment;
    "initialize(uint256)": FunctionFragment;
    "isFollowing(uint256)": FunctionFragment;
    "processBlock(uint256)": FunctionFragment;
    "removeFollower(uint256)": FunctionFragment;
    "unfollow(uint256)": FunctionFragment;
    "unwrap(uint256)": FunctionFragment;
    "wrap(uint256,address)": FunctionFragment;
    "wrap(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveFollow"
      | "follow"
      | "getFollowApproved"
      | "getFollowData"
      | "getFollowTimestamp"
      | "getFollowTokenId"
      | "getFollowerCount"
      | "getFollowerProfileId"
      | "getOriginalFollowTimestamp"
      | "getProfileIdAllowedToRecover"
      | "initialize"
      | "isFollowing"
      | "processBlock"
      | "removeFollower"
      | "unfollow"
      | "unwrap"
      | "wrap(uint256,address)"
      | "wrap(uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveFollow",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "follow",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFollowApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFollowData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFollowTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFollowTokenId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFollowerCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFollowerProfileId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOriginalFollowTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProfileIdAllowedToRecover",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isFollowing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "processBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFollower",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unfollow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrap(uint256,address)",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "wrap(uint256)",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveFollow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "follow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFollowApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFollowData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFollowTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFollowTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFollowerCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFollowerProfileId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOriginalFollowTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProfileIdAllowedToRecover",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isFollowing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFollower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unfollow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unwrap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrap(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrap(uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IFollowNFT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFollowNFTInterface;

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
    approveFollow(
      approvedProfileId: BigNumberish,
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    follow(
      followerProfileId: BigNumberish,
      transactionExecutor: string,
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getFollowApproved(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFollowData(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Types.FollowDataStructOutput]>;

    getFollowTimestamp(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFollowTokenId(
      followerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFollowerCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFollowerProfileId(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOriginalFollowTimestamp(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProfileIdAllowedToRecover(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      profileId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isFollowing(
      followerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    processBlock(
      followerProfileId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removeFollower(
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unfollow(
      unfollowerProfileId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unwrap(
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "wrap(uint256,address)"(
      followTokenId: BigNumberish,
      wrappedTokenReceiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "wrap(uint256)"(
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  approveFollow(
    approvedProfileId: BigNumberish,
    followTokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  follow(
    followerProfileId: BigNumberish,
    transactionExecutor: string,
    followTokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getFollowApproved(
    followTokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFollowData(
    followTokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Types.FollowDataStructOutput>;

  getFollowTimestamp(
    followTokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFollowTokenId(
    followerProfileId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFollowerCount(overrides?: CallOverrides): Promise<BigNumber>;

  getFollowerProfileId(
    followTokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOriginalFollowTimestamp(
    followTokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProfileIdAllowedToRecover(
    followTokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    profileId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isFollowing(
    followerProfileId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  processBlock(
    followerProfileId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removeFollower(
    followTokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unfollow(
    unfollowerProfileId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unwrap(
    followTokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "wrap(uint256,address)"(
    followTokenId: BigNumberish,
    wrappedTokenReceiver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "wrap(uint256)"(
    followTokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveFollow(
      approvedProfileId: BigNumberish,
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    follow(
      followerProfileId: BigNumberish,
      transactionExecutor: string,
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFollowApproved(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFollowData(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Types.FollowDataStructOutput>;

    getFollowTimestamp(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFollowTokenId(
      followerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFollowerCount(overrides?: CallOverrides): Promise<BigNumber>;

    getFollowerProfileId(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOriginalFollowTimestamp(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProfileIdAllowedToRecover(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      profileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isFollowing(
      followerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    processBlock(
      followerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeFollower(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unfollow(
      unfollowerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrap(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "wrap(uint256,address)"(
      followTokenId: BigNumberish,
      wrappedTokenReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "wrap(uint256)"(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approveFollow(
      approvedProfileId: BigNumberish,
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    follow(
      followerProfileId: BigNumberish,
      transactionExecutor: string,
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getFollowApproved(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFollowData(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFollowTimestamp(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFollowTokenId(
      followerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFollowerCount(overrides?: CallOverrides): Promise<BigNumber>;

    getFollowerProfileId(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOriginalFollowTimestamp(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProfileIdAllowedToRecover(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      profileId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isFollowing(
      followerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processBlock(
      followerProfileId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removeFollower(
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unfollow(
      unfollowerProfileId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unwrap(
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "wrap(uint256,address)"(
      followTokenId: BigNumberish,
      wrappedTokenReceiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "wrap(uint256)"(
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveFollow(
      approvedProfileId: BigNumberish,
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    follow(
      followerProfileId: BigNumberish,
      transactionExecutor: string,
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getFollowApproved(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFollowData(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFollowTimestamp(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFollowTokenId(
      followerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFollowerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFollowerProfileId(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOriginalFollowTimestamp(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProfileIdAllowedToRecover(
      followTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      profileId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isFollowing(
      followerProfileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processBlock(
      followerProfileId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removeFollower(
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unfollow(
      unfollowerProfileId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unwrap(
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "wrap(uint256,address)"(
      followTokenId: BigNumberish,
      wrappedTokenReceiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "wrap(uint256)"(
      followTokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
