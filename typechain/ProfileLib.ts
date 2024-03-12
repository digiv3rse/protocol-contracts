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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ProfileLibInterface extends utils.Interface {
  functions: {
    "isExecutorApproved(uint256,address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "isExecutorApproved"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isExecutorApproved",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "isExecutorApproved",
    data: BytesLike
  ): Result;

  events: {
    "Blocked(uint256,uint256,address,uint256)": EventFragment;
    "DelegatedExecutorsConfigApplied(uint256,uint256,uint256)": EventFragment;
    "DelegatedExecutorsConfigChanged(uint256,uint256,address[],bool[],uint256)": EventFragment;
    "FollowModuleSet(uint256,address,bytes,bytes,address,uint256)": EventFragment;
    "ProfileCreated(uint256,address,address,uint256)": EventFragment;
    "ProfileMetadataSet(uint256,string,address,uint256)": EventFragment;
    "Unblocked(uint256,uint256,address,uint256)": EventFragment;
    "Unfollowed(uint256,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Blocked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DelegatedExecutorsConfigApplied"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DelegatedExecutorsConfigChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowModuleSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileMetadataSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unblocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unfollowed"): EventFragment;
}

export interface BlockedEventObject {
  byProfileId: BigNumber;
  idOfProfileBlocked: BigNumber;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type BlockedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  BlockedEventObject
>;

export type BlockedEventFilter = TypedEventFilter<BlockedEvent>;

export interface DelegatedExecutorsConfigAppliedEventObject {
  delegatorProfileId: BigNumber;
  configNumber: BigNumber;
  timestamp: BigNumber;
}
export type DelegatedExecutorsConfigAppliedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  DelegatedExecutorsConfigAppliedEventObject
>;

export type DelegatedExecutorsConfigAppliedEventFilter =
  TypedEventFilter<DelegatedExecutorsConfigAppliedEvent>;

export interface DelegatedExecutorsConfigChangedEventObject {
  delegatorProfileId: BigNumber;
  configNumber: BigNumber;
  delegatedExecutors: string[];
  approvals: boolean[];
  timestamp: BigNumber;
}
export type DelegatedExecutorsConfigChangedEvent = TypedEvent<
  [BigNumber, BigNumber, string[], boolean[], BigNumber],
  DelegatedExecutorsConfigChangedEventObject
>;

export type DelegatedExecutorsConfigChangedEventFilter =
  TypedEventFilter<DelegatedExecutorsConfigChangedEvent>;

export interface FollowModuleSetEventObject {
  profileId: BigNumber;
  followModule: string;
  followModuleInitData: string;
  followModuleReturnData: string;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type FollowModuleSetEvent = TypedEvent<
  [BigNumber, string, string, string, string, BigNumber],
  FollowModuleSetEventObject
>;

export type FollowModuleSetEventFilter = TypedEventFilter<FollowModuleSetEvent>;

export interface ProfileCreatedEventObject {
  profileId: BigNumber;
  creator: string;
  to: string;
  timestamp: BigNumber;
}
export type ProfileCreatedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  ProfileCreatedEventObject
>;

export type ProfileCreatedEventFilter = TypedEventFilter<ProfileCreatedEvent>;

export interface ProfileMetadataSetEventObject {
  profileId: BigNumber;
  metadata: string;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type ProfileMetadataSetEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  ProfileMetadataSetEventObject
>;

export type ProfileMetadataSetEventFilter =
  TypedEventFilter<ProfileMetadataSetEvent>;

export interface UnblockedEventObject {
  byProfileId: BigNumber;
  idOfProfileUnblocked: BigNumber;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type UnblockedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  UnblockedEventObject
>;

export type UnblockedEventFilter = TypedEventFilter<UnblockedEvent>;

export interface UnfollowedEventObject {
  unfollowerProfileId: BigNumber;
  idOfProfileUnfollowed: BigNumber;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type UnfollowedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  UnfollowedEventObject
>;

export type UnfollowedEventFilter = TypedEventFilter<UnfollowedEvent>;

export interface ProfileLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProfileLibInterface;

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
    isExecutorApproved(
      delegatorProfileId: BigNumberish,
      delegatedExecutor: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  isExecutorApproved(
    delegatorProfileId: BigNumberish,
    delegatedExecutor: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    isExecutorApproved(
      delegatorProfileId: BigNumberish,
      delegatedExecutor: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Blocked(uint256,uint256,address,uint256)"(
      byProfileId?: BigNumberish | null,
      idOfProfileBlocked?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): BlockedEventFilter;
    Blocked(
      byProfileId?: BigNumberish | null,
      idOfProfileBlocked?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): BlockedEventFilter;

    "DelegatedExecutorsConfigApplied(uint256,uint256,uint256)"(
      delegatorProfileId?: BigNumberish | null,
      configNumber?: BigNumberish | null,
      timestamp?: null
    ): DelegatedExecutorsConfigAppliedEventFilter;
    DelegatedExecutorsConfigApplied(
      delegatorProfileId?: BigNumberish | null,
      configNumber?: BigNumberish | null,
      timestamp?: null
    ): DelegatedExecutorsConfigAppliedEventFilter;

    "DelegatedExecutorsConfigChanged(uint256,uint256,address[],bool[],uint256)"(
      delegatorProfileId?: BigNumberish | null,
      configNumber?: BigNumberish | null,
      delegatedExecutors?: null,
      approvals?: null,
      timestamp?: null
    ): DelegatedExecutorsConfigChangedEventFilter;
    DelegatedExecutorsConfigChanged(
      delegatorProfileId?: BigNumberish | null,
      configNumber?: BigNumberish | null,
      delegatedExecutors?: null,
      approvals?: null,
      timestamp?: null
    ): DelegatedExecutorsConfigChangedEventFilter;

    "FollowModuleSet(uint256,address,bytes,bytes,address,uint256)"(
      profileId?: BigNumberish | null,
      followModule?: null,
      followModuleInitData?: null,
      followModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): FollowModuleSetEventFilter;
    FollowModuleSet(
      profileId?: BigNumberish | null,
      followModule?: null,
      followModuleInitData?: null,
      followModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): FollowModuleSetEventFilter;

    "ProfileCreated(uint256,address,address,uint256)"(
      profileId?: BigNumberish | null,
      creator?: string | null,
      to?: string | null,
      timestamp?: null
    ): ProfileCreatedEventFilter;
    ProfileCreated(
      profileId?: BigNumberish | null,
      creator?: string | null,
      to?: string | null,
      timestamp?: null
    ): ProfileCreatedEventFilter;

    "ProfileMetadataSet(uint256,string,address,uint256)"(
      profileId?: BigNumberish | null,
      metadata?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): ProfileMetadataSetEventFilter;
    ProfileMetadataSet(
      profileId?: BigNumberish | null,
      metadata?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): ProfileMetadataSetEventFilter;

    "Unblocked(uint256,uint256,address,uint256)"(
      byProfileId?: BigNumberish | null,
      idOfProfileUnblocked?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): UnblockedEventFilter;
    Unblocked(
      byProfileId?: BigNumberish | null,
      idOfProfileUnblocked?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): UnblockedEventFilter;

    "Unfollowed(uint256,uint256,address,uint256)"(
      unfollowerProfileId?: BigNumberish | null,
      idOfProfileUnfollowed?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): UnfollowedEventFilter;
    Unfollowed(
      unfollowerProfileId?: BigNumberish | null,
      idOfProfileUnfollowed?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): UnfollowedEventFilter;
  };

  estimateGas: {
    isExecutorApproved(
      delegatorProfileId: BigNumberish,
      delegatedExecutor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isExecutorApproved(
      delegatorProfileId: BigNumberish,
      delegatedExecutor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
