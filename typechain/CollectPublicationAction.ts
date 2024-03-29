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

export declare namespace CollectPublicationAction {
  export type CollectDataStruct = { collectModule: string; collectNFT: string };

  export type CollectDataStructOutput = [string, string] & {
    collectModule: string;
    collectNFT: string;
  };
}

export declare namespace Types {
  export type ProcessActionParamsStruct = {
    publicationActedProfileId: BigNumberish;
    publicationActedId: BigNumberish;
    actorProfileId: BigNumberish;
    actorProfileOwner: string;
    transactionExecutor: string;
    referrerProfileIds: BigNumberish[];
    referrerPubIds: BigNumberish[];
    referrerPubTypes: BigNumberish[];
    actionModuleData: BytesLike;
  };

  export type ProcessActionParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber[],
    BigNumber[],
    number[],
    string
  ] & {
    publicationActedProfileId: BigNumber;
    publicationActedId: BigNumber;
    actorProfileId: BigNumber;
    actorProfileOwner: string;
    transactionExecutor: string;
    referrerProfileIds: BigNumber[];
    referrerPubIds: BigNumber[];
    referrerPubTypes: number[];
    actionModuleData: string;
  };
}

export interface CollectPublicationActionInterface extends utils.Interface {
  functions: {
    "COLLECT_NFT_IMPL()": FunctionFragment;
    "HUB()": FunctionFragment;
    "getCollectData(uint256,uint256)": FunctionFragment;
    "getModuleMetadataURI()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "initializePublicationAction(uint256,uint256,address,bytes)": FunctionFragment;
    "isCollectModuleRegistered(address)": FunctionFragment;
    "metadataURI()": FunctionFragment;
    "owner()": FunctionFragment;
    "processPublicationAction((uint256,uint256,uint256,address,address,uint256[],uint256[],uint8[],bytes))": FunctionFragment;
    "registerCollectModule(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setModuleMetadataURI(string)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verifyCollectModule(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "COLLECT_NFT_IMPL"
      | "HUB"
      | "getCollectData"
      | "getModuleMetadataURI"
      | "initialize"
      | "initializePublicationAction"
      | "isCollectModuleRegistered"
      | "metadataURI"
      | "owner"
      | "processPublicationAction"
      | "registerCollectModule"
      | "renounceOwnership"
      | "setModuleMetadataURI"
      | "supportsInterface"
      | "transferOwnership"
      | "verifyCollectModule"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "COLLECT_NFT_IMPL",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCollectData",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getModuleMetadataURI",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initializePublicationAction",
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isCollectModuleRegistered",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "metadataURI",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processPublicationAction",
    values: [Types.ProcessActionParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "registerCollectModule",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setModuleMetadataURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCollectModule",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "COLLECT_NFT_IMPL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCollectData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getModuleMetadataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializePublicationAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCollectModuleRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "metadataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processPublicationAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerCollectModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setModuleMetadataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCollectModule",
    data: BytesLike
  ): Result;

  events: {
    "CollectModuleRegistered(address,string,uint256)": EventFragment;
    "CollectNFTDeployed(uint256,uint256,address,uint256)": EventFragment;
    "Collected(uint256,uint256,uint256,address,bytes,bytes,address,uint256,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CollectModuleRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectNFTDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Collected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface CollectModuleRegisteredEventObject {
  collectModule: string;
  metadata: string;
  timestamp: BigNumber;
}
export type CollectModuleRegisteredEvent = TypedEvent<
  [string, string, BigNumber],
  CollectModuleRegisteredEventObject
>;

export type CollectModuleRegisteredEventFilter =
  TypedEventFilter<CollectModuleRegisteredEvent>;

export interface CollectNFTDeployedEventObject {
  profileId: BigNumber;
  pubId: BigNumber;
  collectNFT: string;
  timestamp: BigNumber;
}
export type CollectNFTDeployedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  CollectNFTDeployedEventObject
>;

export type CollectNFTDeployedEventFilter =
  TypedEventFilter<CollectNFTDeployedEvent>;

export interface CollectedEventObject {
  collectedProfileId: BigNumber;
  collectedPubId: BigNumber;
  collectorProfileId: BigNumber;
  nftRecipient: string;
  collectActionData: string;
  collectActionResult: string;
  collectNFT: string;
  tokenId: BigNumber;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type CollectedEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber
  ],
  CollectedEventObject
>;

export type CollectedEventFilter = TypedEventFilter<CollectedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface CollectPublicationAction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CollectPublicationActionInterface;

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
    COLLECT_NFT_IMPL(overrides?: CallOverrides): Promise<[string]>;

    HUB(overrides?: CallOverrides): Promise<[string]>;

    getCollectData(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[CollectPublicationAction.CollectDataStructOutput]>;

    getModuleMetadataURI(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      moduleOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initializePublicationAction(
      profileId: BigNumberish,
      pubId: BigNumberish,
      transactionExecutor: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isCollectModuleRegistered(
      collectModule: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    metadataURI(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    registerCollectModule(
      collectModule: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setModuleMetadataURI(
      _metadataURI: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    verifyCollectModule(
      collectModule: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  COLLECT_NFT_IMPL(overrides?: CallOverrides): Promise<string>;

  HUB(overrides?: CallOverrides): Promise<string>;

  getCollectData(
    profileId: BigNumberish,
    pubId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<CollectPublicationAction.CollectDataStructOutput>;

  getModuleMetadataURI(overrides?: CallOverrides): Promise<string>;

  initialize(
    moduleOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initializePublicationAction(
    profileId: BigNumberish,
    pubId: BigNumberish,
    transactionExecutor: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isCollectModuleRegistered(
    collectModule: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  metadataURI(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  processPublicationAction(
    processActionParams: Types.ProcessActionParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  registerCollectModule(
    collectModule: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setModuleMetadataURI(
    _metadataURI: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  verifyCollectModule(
    collectModule: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    COLLECT_NFT_IMPL(overrides?: CallOverrides): Promise<string>;

    HUB(overrides?: CallOverrides): Promise<string>;

    getCollectData(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<CollectPublicationAction.CollectDataStructOutput>;

    getModuleMetadataURI(overrides?: CallOverrides): Promise<string>;

    initialize(moduleOwner: string, overrides?: CallOverrides): Promise<void>;

    initializePublicationAction(
      profileId: BigNumberish,
      pubId: BigNumberish,
      transactionExecutor: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    isCollectModuleRegistered(
      collectModule: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    metadataURI(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    registerCollectModule(
      collectModule: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setModuleMetadataURI(
      _metadataURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyCollectModule(
      collectModule: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "CollectModuleRegistered(address,string,uint256)"(
      collectModule?: null,
      metadata?: null,
      timestamp?: null
    ): CollectModuleRegisteredEventFilter;
    CollectModuleRegistered(
      collectModule?: null,
      metadata?: null,
      timestamp?: null
    ): CollectModuleRegisteredEventFilter;

    "CollectNFTDeployed(uint256,uint256,address,uint256)"(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFT?: string | null,
      timestamp?: null
    ): CollectNFTDeployedEventFilter;
    CollectNFTDeployed(
      profileId?: BigNumberish | null,
      pubId?: BigNumberish | null,
      collectNFT?: string | null,
      timestamp?: null
    ): CollectNFTDeployedEventFilter;

    "Collected(uint256,uint256,uint256,address,bytes,bytes,address,uint256,address,uint256)"(
      collectedProfileId?: BigNumberish | null,
      collectedPubId?: BigNumberish | null,
      collectorProfileId?: BigNumberish | null,
      nftRecipient?: null,
      collectActionData?: null,
      collectActionResult?: null,
      collectNFT?: null,
      tokenId?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): CollectedEventFilter;
    Collected(
      collectedProfileId?: BigNumberish | null,
      collectedPubId?: BigNumberish | null,
      collectorProfileId?: BigNumberish | null,
      nftRecipient?: null,
      collectActionData?: null,
      collectActionResult?: null,
      collectNFT?: null,
      tokenId?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): CollectedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    COLLECT_NFT_IMPL(overrides?: CallOverrides): Promise<BigNumber>;

    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    getCollectData(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getModuleMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      moduleOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initializePublicationAction(
      profileId: BigNumberish,
      pubId: BigNumberish,
      transactionExecutor: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isCollectModuleRegistered(
      collectModule: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    metadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    registerCollectModule(
      collectModule: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setModuleMetadataURI(
      _metadataURI: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    verifyCollectModule(
      collectModule: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    COLLECT_NFT_IMPL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCollectData(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getModuleMetadataURI(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      moduleOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initializePublicationAction(
      profileId: BigNumberish,
      pubId: BigNumberish,
      transactionExecutor: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isCollectModuleRegistered(
      collectModule: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    metadataURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    registerCollectModule(
      collectModule: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setModuleMetadataURI(
      _metadataURI: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    verifyCollectModule(
      collectModule: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
