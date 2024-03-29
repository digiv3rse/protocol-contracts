/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
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

export declare namespace Types {
  export type PublicationActionParamsStruct = {
    publicationActedProfileId: BigNumberish;
    publicationActedId: BigNumberish;
    actorProfileId: BigNumberish;
    referrerProfileIds: BigNumberish[];
    referrerPubIds: BigNumberish[];
    actionModuleAddress: string;
    actionModuleData: BytesLike;
  };

  export type PublicationActionParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber[],
    string,
    string
  ] & {
    publicationActedProfileId: BigNumber;
    publicationActedId: BigNumber;
    actorProfileId: BigNumber;
    referrerProfileIds: BigNumber[];
    referrerPubIds: BigNumber[];
    actionModuleAddress: string;
    actionModuleData: string;
  };

  export type CommentParamsStruct = {
    profileId: BigNumberish;
    contentURI: string;
    pointedProfileId: BigNumberish;
    pointedPubId: BigNumberish;
    referrerProfileIds: BigNumberish[];
    referrerPubIds: BigNumberish[];
    referenceModuleData: BytesLike;
    actionModules: string[];
    actionModulesInitDatas: BytesLike[];
    referenceModule: string;
    referenceModuleInitData: BytesLike;
  };

  export type CommentParamsStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber[],
    string,
    string[],
    string[],
    string,
    string
  ] & {
    profileId: BigNumber;
    contentURI: string;
    pointedProfileId: BigNumber;
    pointedPubId: BigNumber;
    referrerProfileIds: BigNumber[];
    referrerPubIds: BigNumber[];
    referenceModuleData: string;
    actionModules: string[];
    actionModulesInitDatas: string[];
    referenceModule: string;
    referenceModuleInitData: string;
  };

  export type MirrorParamsStruct = {
    profileId: BigNumberish;
    metadataURI: string;
    pointedProfileId: BigNumberish;
    pointedPubId: BigNumberish;
    referrerProfileIds: BigNumberish[];
    referrerPubIds: BigNumberish[];
    referenceModuleData: BytesLike;
  };

  export type MirrorParamsStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber[],
    string
  ] & {
    profileId: BigNumber;
    metadataURI: string;
    pointedProfileId: BigNumber;
    pointedPubId: BigNumber;
    referrerProfileIds: BigNumber[];
    referrerPubIds: BigNumber[];
    referenceModuleData: string;
  };

  export type PostParamsStruct = {
    profileId: BigNumberish;
    contentURI: string;
    actionModules: string[];
    actionModulesInitDatas: BytesLike[];
    referenceModule: string;
    referenceModuleInitData: BytesLike;
  };

  export type PostParamsStructOutput = [
    BigNumber,
    string,
    string[],
    string[],
    string,
    string
  ] & {
    profileId: BigNumber;
    contentURI: string;
    actionModules: string[];
    actionModulesInitDatas: string[];
    referenceModule: string;
    referenceModuleInitData: string;
  };

  export type QuoteParamsStruct = {
    profileId: BigNumberish;
    contentURI: string;
    pointedProfileId: BigNumberish;
    pointedPubId: BigNumberish;
    referrerProfileIds: BigNumberish[];
    referrerPubIds: BigNumberish[];
    referenceModuleData: BytesLike;
    actionModules: string[];
    actionModulesInitDatas: BytesLike[];
    referenceModule: string;
    referenceModuleInitData: BytesLike;
  };

  export type QuoteParamsStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber[],
    string,
    string[],
    string[],
    string,
    string
  ] & {
    profileId: BigNumber;
    contentURI: string;
    pointedProfileId: BigNumber;
    pointedPubId: BigNumber;
    referrerProfileIds: BigNumber[];
    referrerPubIds: BigNumber[];
    referenceModuleData: string;
    actionModules: string[];
    actionModulesInitDatas: string[];
    referenceModule: string;
    referenceModuleInitData: string;
  };
}

export interface EventsInterface extends utils.Interface {
  functions: {};

  events: {
    "Acted((uint256,uint256,uint256,uint256[],uint256[],address,bytes),bytes,address,uint256)": EventFragment;
    "BaseInitialized(string,string,uint256)": EventFragment;
    "BatchMetadataUpdate(uint256,uint256)": EventFragment;
    "Blocked(uint256,uint256,address,uint256)": EventFragment;
    "CollectNFTTransferred(uint256,uint256,uint256,address,address,uint256)": EventFragment;
    "CommentCreated((uint256,string,uint256,uint256,uint256[],uint256[],bytes,address[],bytes[],address,bytes),uint256,bytes,bytes[],bytes,address,uint256)": EventFragment;
    "DelegatedExecutorsConfigApplied(uint256,uint256,uint256)": EventFragment;
    "DelegatedExecutorsConfigChanged(uint256,uint256,address[],bool[],uint256)": EventFragment;
    "EmergencyAdminSet(address,address,address,uint256)": EventFragment;
    "FollowModuleSet(uint256,address,bytes,bytes,address,uint256)": EventFragment;
    "FollowNFTDeployed(uint256,address,uint256)": EventFragment;
    "Followed(uint256,uint256,uint256,bytes,bytes,address,uint256)": EventFragment;
    "GovernanceSet(address,address,address,uint256)": EventFragment;
    "LegacyCollectNFTDeployed(uint256,uint256,address,uint256)": EventFragment;
    "MirrorCreated((uint256,string,uint256,uint256,uint256[],uint256[],bytes),uint256,bytes,address,uint256)": EventFragment;
    "NonceUpdated(address,uint256,uint256)": EventFragment;
    "PostCreated((uint256,string,address[],bytes[],address,bytes),uint256,bytes[],bytes,address,uint256)": EventFragment;
    "ProfileCreated(uint256,address,address,uint256)": EventFragment;
    "ProfileCreatorWhitelisted(address,bool,uint256)": EventFragment;
    "ProfileMetadataSet(uint256,string,address,uint256)": EventFragment;
    "QuoteCreated((uint256,string,uint256,uint256,uint256[],uint256[],bytes,address[],bytes[],address,bytes),uint256,bytes,bytes[],bytes,address,uint256)": EventFragment;
    "StateSet(address,uint8,uint8,uint256)": EventFragment;
    "TokenGuardianStateChanged(address,bool,uint256,uint256)": EventFragment;
    "TreasuryFeeSet(uint16,uint16,uint256)": EventFragment;
    "TreasurySet(address,address,uint256)": EventFragment;
    "Unblocked(uint256,uint256,address,uint256)": EventFragment;
    "Unfollowed(uint256,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Acted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BaseInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BatchMetadataUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Blocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectNFTTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CommentCreated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DelegatedExecutorsConfigApplied"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DelegatedExecutorsConfigChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyAdminSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowModuleSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FollowNFTDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Followed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LegacyCollectNFTDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MirrorCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NonceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PostCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileCreatorWhitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileMetadataSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuoteCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StateSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenGuardianStateChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasuryFeeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasurySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unblocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unfollowed"): EventFragment;
}

export interface ActedEventObject {
  publicationActionParams: Types.PublicationActionParamsStructOutput;
  actionModuleReturnData: string;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type ActedEvent = TypedEvent<
  [Types.PublicationActionParamsStructOutput, string, string, BigNumber],
  ActedEventObject
>;

export type ActedEventFilter = TypedEventFilter<ActedEvent>;

export interface BaseInitializedEventObject {
  name: string;
  symbol: string;
  timestamp: BigNumber;
}
export type BaseInitializedEvent = TypedEvent<
  [string, string, BigNumber],
  BaseInitializedEventObject
>;

export type BaseInitializedEventFilter = TypedEventFilter<BaseInitializedEvent>;

export interface BatchMetadataUpdateEventObject {
  fromTokenId: BigNumber;
  toTokenId: BigNumber;
}
export type BatchMetadataUpdateEvent = TypedEvent<
  [BigNumber, BigNumber],
  BatchMetadataUpdateEventObject
>;

export type BatchMetadataUpdateEventFilter =
  TypedEventFilter<BatchMetadataUpdateEvent>;

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

export interface CollectNFTTransferredEventObject {
  profileId: BigNumber;
  pubId: BigNumber;
  collectNFTId: BigNumber;
  from: string;
  to: string;
  timestamp: BigNumber;
}
export type CollectNFTTransferredEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, string, BigNumber],
  CollectNFTTransferredEventObject
>;

export type CollectNFTTransferredEventFilter =
  TypedEventFilter<CollectNFTTransferredEvent>;

export interface CommentCreatedEventObject {
  commentParams: Types.CommentParamsStructOutput;
  pubId: BigNumber;
  referenceModuleReturnData: string;
  actionModulesInitReturnDatas: string[];
  referenceModuleInitReturnData: string;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type CommentCreatedEvent = TypedEvent<
  [
    Types.CommentParamsStructOutput,
    BigNumber,
    string,
    string[],
    string,
    string,
    BigNumber
  ],
  CommentCreatedEventObject
>;

export type CommentCreatedEventFilter = TypedEventFilter<CommentCreatedEvent>;

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

export interface EmergencyAdminSetEventObject {
  caller: string;
  oldEmergencyAdmin: string;
  newEmergencyAdmin: string;
  timestamp: BigNumber;
}
export type EmergencyAdminSetEvent = TypedEvent<
  [string, string, string, BigNumber],
  EmergencyAdminSetEventObject
>;

export type EmergencyAdminSetEventFilter =
  TypedEventFilter<EmergencyAdminSetEvent>;

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

export interface FollowNFTDeployedEventObject {
  profileId: BigNumber;
  followNFT: string;
  timestamp: BigNumber;
}
export type FollowNFTDeployedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  FollowNFTDeployedEventObject
>;

export type FollowNFTDeployedEventFilter =
  TypedEventFilter<FollowNFTDeployedEvent>;

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

export interface GovernanceSetEventObject {
  caller: string;
  prevGovernance: string;
  newGovernance: string;
  timestamp: BigNumber;
}
export type GovernanceSetEvent = TypedEvent<
  [string, string, string, BigNumber],
  GovernanceSetEventObject
>;

export type GovernanceSetEventFilter = TypedEventFilter<GovernanceSetEvent>;

export interface LegacyCollectNFTDeployedEventObject {
  profileId: BigNumber;
  pubId: BigNumber;
  collectNFT: string;
  timestamp: BigNumber;
}
export type LegacyCollectNFTDeployedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  LegacyCollectNFTDeployedEventObject
>;

export type LegacyCollectNFTDeployedEventFilter =
  TypedEventFilter<LegacyCollectNFTDeployedEvent>;

export interface MirrorCreatedEventObject {
  mirrorParams: Types.MirrorParamsStructOutput;
  pubId: BigNumber;
  referenceModuleReturnData: string;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type MirrorCreatedEvent = TypedEvent<
  [Types.MirrorParamsStructOutput, BigNumber, string, string, BigNumber],
  MirrorCreatedEventObject
>;

export type MirrorCreatedEventFilter = TypedEventFilter<MirrorCreatedEvent>;

export interface NonceUpdatedEventObject {
  signer: string;
  nonce: BigNumber;
  timestamp: BigNumber;
}
export type NonceUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  NonceUpdatedEventObject
>;

export type NonceUpdatedEventFilter = TypedEventFilter<NonceUpdatedEvent>;

export interface PostCreatedEventObject {
  postParams: Types.PostParamsStructOutput;
  pubId: BigNumber;
  actionModulesInitReturnDatas: string[];
  referenceModuleInitReturnData: string;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type PostCreatedEvent = TypedEvent<
  [
    Types.PostParamsStructOutput,
    BigNumber,
    string[],
    string,
    string,
    BigNumber
  ],
  PostCreatedEventObject
>;

export type PostCreatedEventFilter = TypedEventFilter<PostCreatedEvent>;

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

export interface ProfileCreatorWhitelistedEventObject {
  profileCreator: string;
  whitelisted: boolean;
  timestamp: BigNumber;
}
export type ProfileCreatorWhitelistedEvent = TypedEvent<
  [string, boolean, BigNumber],
  ProfileCreatorWhitelistedEventObject
>;

export type ProfileCreatorWhitelistedEventFilter =
  TypedEventFilter<ProfileCreatorWhitelistedEvent>;

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

export interface QuoteCreatedEventObject {
  quoteParams: Types.QuoteParamsStructOutput;
  pubId: BigNumber;
  referenceModuleReturnData: string;
  actionModulesInitReturnDatas: string[];
  referenceModuleInitReturnData: string;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type QuoteCreatedEvent = TypedEvent<
  [
    Types.QuoteParamsStructOutput,
    BigNumber,
    string,
    string[],
    string,
    string,
    BigNumber
  ],
  QuoteCreatedEventObject
>;

export type QuoteCreatedEventFilter = TypedEventFilter<QuoteCreatedEvent>;

export interface StateSetEventObject {
  caller: string;
  prevState: number;
  newState: number;
  timestamp: BigNumber;
}
export type StateSetEvent = TypedEvent<
  [string, number, number, BigNumber],
  StateSetEventObject
>;

export type StateSetEventFilter = TypedEventFilter<StateSetEvent>;

export interface TokenGuardianStateChangedEventObject {
  wallet: string;
  enabled: boolean;
  tokenGuardianDisablingTimestamp: BigNumber;
  timestamp: BigNumber;
}
export type TokenGuardianStateChangedEvent = TypedEvent<
  [string, boolean, BigNumber, BigNumber],
  TokenGuardianStateChangedEventObject
>;

export type TokenGuardianStateChangedEventFilter =
  TypedEventFilter<TokenGuardianStateChangedEvent>;

export interface TreasuryFeeSetEventObject {
  prevTreasuryFee: number;
  newTreasuryFee: number;
  timestamp: BigNumber;
}
export type TreasuryFeeSetEvent = TypedEvent<
  [number, number, BigNumber],
  TreasuryFeeSetEventObject
>;

export type TreasuryFeeSetEventFilter = TypedEventFilter<TreasuryFeeSetEvent>;

export interface TreasurySetEventObject {
  prevTreasury: string;
  newTreasury: string;
  timestamp: BigNumber;
}
export type TreasurySetEvent = TypedEvent<
  [string, string, BigNumber],
  TreasurySetEventObject
>;

export type TreasurySetEventFilter = TypedEventFilter<TreasurySetEvent>;

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

export interface Events extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventsInterface;

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
    "Acted((uint256,uint256,uint256,uint256[],uint256[],address,bytes),bytes,address,uint256)"(
      publicationActionParams?: null,
      actionModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): ActedEventFilter;
    Acted(
      publicationActionParams?: null,
      actionModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): ActedEventFilter;

    "BaseInitialized(string,string,uint256)"(
      name?: null,
      symbol?: null,
      timestamp?: null
    ): BaseInitializedEventFilter;
    BaseInitialized(
      name?: null,
      symbol?: null,
      timestamp?: null
    ): BaseInitializedEventFilter;

    "BatchMetadataUpdate(uint256,uint256)"(
      fromTokenId?: null,
      toTokenId?: null
    ): BatchMetadataUpdateEventFilter;
    BatchMetadataUpdate(
      fromTokenId?: null,
      toTokenId?: null
    ): BatchMetadataUpdateEventFilter;

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

    "CollectNFTTransferred(uint256,uint256,uint256,address,address,uint256)"(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFTId?: BigNumberish | null,
      from?: null,
      to?: null,
      timestamp?: null
    ): CollectNFTTransferredEventFilter;
    CollectNFTTransferred(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFTId?: BigNumberish | null,
      from?: null,
      to?: null,
      timestamp?: null
    ): CollectNFTTransferredEventFilter;

    "CommentCreated((uint256,string,uint256,uint256,uint256[],uint256[],bytes,address[],bytes[],address,bytes),uint256,bytes,bytes[],bytes,address,uint256)"(
      commentParams?: null,
      pubId?: BigNumberish | null,
      referenceModuleReturnData?: null,
      actionModulesInitReturnDatas?: null,
      referenceModuleInitReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): CommentCreatedEventFilter;
    CommentCreated(
      commentParams?: null,
      pubId?: BigNumberish | null,
      referenceModuleReturnData?: null,
      actionModulesInitReturnDatas?: null,
      referenceModuleInitReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): CommentCreatedEventFilter;

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

    "EmergencyAdminSet(address,address,address,uint256)"(
      caller?: string | null,
      oldEmergencyAdmin?: string | null,
      newEmergencyAdmin?: string | null,
      timestamp?: null
    ): EmergencyAdminSetEventFilter;
    EmergencyAdminSet(
      caller?: string | null,
      oldEmergencyAdmin?: string | null,
      newEmergencyAdmin?: string | null,
      timestamp?: null
    ): EmergencyAdminSetEventFilter;

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

    "FollowNFTDeployed(uint256,address,uint256)"(
      profileId?: BigNumberish | null,
      followNFT?: string | null,
      timestamp?: null
    ): FollowNFTDeployedEventFilter;
    FollowNFTDeployed(
      profileId?: BigNumberish | null,
      followNFT?: string | null,
      timestamp?: null
    ): FollowNFTDeployedEventFilter;

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

    "GovernanceSet(address,address,address,uint256)"(
      caller?: string | null,
      prevGovernance?: string | null,
      newGovernance?: string | null,
      timestamp?: null
    ): GovernanceSetEventFilter;
    GovernanceSet(
      caller?: string | null,
      prevGovernance?: string | null,
      newGovernance?: string | null,
      timestamp?: null
    ): GovernanceSetEventFilter;

    "LegacyCollectNFTDeployed(uint256,uint256,address,uint256)"(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFT?: string | null,
      timestamp?: null
    ): LegacyCollectNFTDeployedEventFilter;
    LegacyCollectNFTDeployed(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFT?: string | null,
      timestamp?: null
    ): LegacyCollectNFTDeployedEventFilter;

    "MirrorCreated((uint256,string,uint256,uint256,uint256[],uint256[],bytes),uint256,bytes,address,uint256)"(
      mirrorParams?: null,
      pubId?: BigNumberish | null,
      referenceModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): MirrorCreatedEventFilter;
    MirrorCreated(
      mirrorParams?: null,
      pubId?: BigNumberish | null,
      referenceModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): MirrorCreatedEventFilter;

    "NonceUpdated(address,uint256,uint256)"(
      signer?: string | null,
      nonce?: null,
      timestamp?: null
    ): NonceUpdatedEventFilter;
    NonceUpdated(
      signer?: string | null,
      nonce?: null,
      timestamp?: null
    ): NonceUpdatedEventFilter;

    "PostCreated((uint256,string,address[],bytes[],address,bytes),uint256,bytes[],bytes,address,uint256)"(
      postParams?: null,
      pubId?: BigNumberish | null,
      actionModulesInitReturnDatas?: null,
      referenceModuleInitReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): PostCreatedEventFilter;
    PostCreated(
      postParams?: null,
      pubId?: BigNumberish | null,
      actionModulesInitReturnDatas?: null,
      referenceModuleInitReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): PostCreatedEventFilter;

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

    "ProfileCreatorWhitelisted(address,bool,uint256)"(
      profileCreator?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): ProfileCreatorWhitelistedEventFilter;
    ProfileCreatorWhitelisted(
      profileCreator?: string | null,
      whitelisted?: boolean | null,
      timestamp?: null
    ): ProfileCreatorWhitelistedEventFilter;

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

    "QuoteCreated((uint256,string,uint256,uint256,uint256[],uint256[],bytes,address[],bytes[],address,bytes),uint256,bytes,bytes[],bytes,address,uint256)"(
      quoteParams?: null,
      pubId?: BigNumberish | null,
      referenceModuleReturnData?: null,
      actionModulesInitReturnDatas?: null,
      referenceModuleInitReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): QuoteCreatedEventFilter;
    QuoteCreated(
      quoteParams?: null,
      pubId?: BigNumberish | null,
      referenceModuleReturnData?: null,
      actionModulesInitReturnDatas?: null,
      referenceModuleInitReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): QuoteCreatedEventFilter;

    "StateSet(address,uint8,uint8,uint256)"(
      caller?: string | null,
      prevState?: BigNumberish | null,
      newState?: BigNumberish | null,
      timestamp?: null
    ): StateSetEventFilter;
    StateSet(
      caller?: string | null,
      prevState?: BigNumberish | null,
      newState?: BigNumberish | null,
      timestamp?: null
    ): StateSetEventFilter;

    "TokenGuardianStateChanged(address,bool,uint256,uint256)"(
      wallet?: string | null,
      enabled?: boolean | null,
      tokenGuardianDisablingTimestamp?: null,
      timestamp?: null
    ): TokenGuardianStateChangedEventFilter;
    TokenGuardianStateChanged(
      wallet?: string | null,
      enabled?: boolean | null,
      tokenGuardianDisablingTimestamp?: null,
      timestamp?: null
    ): TokenGuardianStateChangedEventFilter;

    "TreasuryFeeSet(uint16,uint16,uint256)"(
      prevTreasuryFee?: BigNumberish | null,
      newTreasuryFee?: BigNumberish | null,
      timestamp?: null
    ): TreasuryFeeSetEventFilter;
    TreasuryFeeSet(
      prevTreasuryFee?: BigNumberish | null,
      newTreasuryFee?: BigNumberish | null,
      timestamp?: null
    ): TreasuryFeeSetEventFilter;

    "TreasurySet(address,address,uint256)"(
      prevTreasury?: string | null,
      newTreasury?: string | null,
      timestamp?: null
    ): TreasurySetEventFilter;
    TreasurySet(
      prevTreasury?: string | null,
      newTreasury?: string | null,
      timestamp?: null
    ): TreasurySetEventFilter;

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

  estimateGas: {};

  populateTransaction: {};
}
