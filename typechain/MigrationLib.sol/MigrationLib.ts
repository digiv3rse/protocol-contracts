/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface MigrationLibInterface extends utils.Interface {
  functions: {};

  events: {
    "DelegatedExecutorsConfigApplied(uint256,uint256,uint256)": EventFragment;
    "FollowModuleSet(uint256,address,bytes,bytes,address,uint256)": EventFragment;
    "Followed(uint256,uint256,uint256,bytes,bytes,address,uint256)": EventFragment;
    "ProfileMigrated(uint256)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "DelegatedExecutorsConfigApplied"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowModuleSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Followed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileMigrated"): EventFragment;
}

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

export interface FollowedEventObject {
  followerProfileId: BigNumber;
  idOfProfileFollowed: BigNumber;
  followTokenIdAssigned: BigNumber;
  followModuleData: string;
  processFollowModuleReturnData: string;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type FollowedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, string, string, BigNumber],
  FollowedEventObject
>;

export type FollowedEventFilter = TypedEventFilter<FollowedEvent>;

export interface ProfileMigratedEventObject {
  profileId: BigNumber;
}
export type ProfileMigratedEvent = TypedEvent<
  [BigNumber],
  ProfileMigratedEventObject
>;

export type ProfileMigratedEventFilter = TypedEventFilter<ProfileMigratedEvent>;

export interface MigrationLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MigrationLibInterface;

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

  functions: {};

  callStatic: {};

  filters: {
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

    "Followed(uint256,uint256,uint256,bytes,bytes,address,uint256)"(
      followerProfileId?: BigNumberish | null,
      idOfProfileFollowed?: null,
      followTokenIdAssigned?: null,
      followModuleData?: null,
      processFollowModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): FollowedEventFilter;
    Followed(
      followerProfileId?: BigNumberish | null,
      idOfProfileFollowed?: null,
      followTokenIdAssigned?: null,
      followModuleData?: null,
      processFollowModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): FollowedEventFilter;

    "ProfileMigrated(uint256)"(
      profileId?: BigNumberish | null
    ): ProfileMigratedEventFilter;
    ProfileMigrated(
      profileId?: BigNumberish | null
    ): ProfileMigratedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
