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

export interface ListenerOpenActionInterface extends utils.Interface {
  functions: {
    "HUB()": FunctionFragment;
    "MODULE_GLOBALS()": FunctionFragment;
    "collectionCreator()": FunctionFragment;
    "getModuleMetadataURI()": FunctionFragment;
    "initializePublicationAction(uint256,uint256,address,bytes)": FunctionFragment;
    "marketCreator()": FunctionFragment;
    "printAccessControl()": FunctionFragment;
    "printCommunityData()": FunctionFragment;
    "printDesignData()": FunctionFragment;
    "printSplitsData()": FunctionFragment;
    "processPublicationAction((uint256,uint256,uint256,address,address,uint256[],uint256[],uint8[],bytes))": FunctionFragment;
    "setCollectionCreatorAddress(address)": FunctionFragment;
    "setMarketCreatorAddress(address)": FunctionFragment;
    "setPrintAccessControlAddress(address)": FunctionFragment;
    "setPrintCommunityDataAddress(address)": FunctionFragment;
    "setPrintDesignDataAddress(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "HUB"
      | "MODULE_GLOBALS"
      | "collectionCreator"
      | "getModuleMetadataURI"
      | "initializePublicationAction"
      | "marketCreator"
      | "printAccessControl"
      | "printCommunityData"
      | "printDesignData"
      | "printSplitsData"
      | "processPublicationAction"
      | "setCollectionCreatorAddress"
      | "setMarketCreatorAddress"
      | "setPrintAccessControlAddress"
      | "setPrintCommunityDataAddress"
      | "setPrintDesignDataAddress"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MODULE_GLOBALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collectionCreator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getModuleMetadataURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializePublicationAction",
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marketCreator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "printAccessControl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "printCommunityData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "printDesignData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "printSplitsData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "processPublicationAction",
    values: [Types.ProcessActionParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setCollectionCreatorAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketCreatorAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrintAccessControlAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrintCommunityDataAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrintDesignDataAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MODULE_GLOBALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectionCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getModuleMetadataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePublicationAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "printAccessControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "printCommunityData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "printDesignData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "printSplitsData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processPublicationAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCollectionCreatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketCreatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrintAccessControlAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrintCommunityDataAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrintDesignDataAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "ListenerInitialized(uint256,uint256,uint256,address,uint256)": EventFragment;
    "ListenerPurchased(address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ListenerInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListenerPurchased"): EventFragment;
}

export interface ListenerInitializedEventObject {
  collectionId: BigNumber;
  profileId: BigNumber;
  pubId: BigNumber;
  creatorAddress: string;
  numberOfCollections: BigNumber;
}
export type ListenerInitializedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, BigNumber],
  ListenerInitializedEventObject
>;

export type ListenerInitializedEventFilter =
  TypedEventFilter<ListenerInitializedEvent>;

export interface ListenerPurchasedEventObject {
  buyerAddress: string;
  collectionId: BigNumber;
  pubId: BigNumber;
  profileId: BigNumber;
  totalAmount: BigNumber;
}
export type ListenerPurchasedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  ListenerPurchasedEventObject
>;

export type ListenerPurchasedEventFilter =
  TypedEventFilter<ListenerPurchasedEvent>;

export interface ListenerOpenAction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ListenerOpenActionInterface;

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

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<[string]>;

    collectionCreator(overrides?: CallOverrides): Promise<[string]>;

    getModuleMetadataURI(overrides?: CallOverrides): Promise<[string]>;

    initializePublicationAction(
      _profileId: BigNumberish,
      _pubId: BigNumberish,
      _executor: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    marketCreator(overrides?: CallOverrides): Promise<[string]>;

    printAccessControl(overrides?: CallOverrides): Promise<[string]>;

    printCommunityData(overrides?: CallOverrides): Promise<[string]>;

    printDesignData(overrides?: CallOverrides): Promise<[string]>;

    printSplitsData(overrides?: CallOverrides): Promise<[string]>;

    processPublicationAction(
      _params: Types.ProcessActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setCollectionCreatorAddress(
      _newCollectionCreatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setMarketCreatorAddress(
      _newMarketCreatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPrintAccessControlAddress(
      _newPrintAccessControlAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPrintCommunityDataAddress(
      _newPrintCommunityDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPrintDesignDataAddress(
      _newPrintDesignDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  HUB(overrides?: CallOverrides): Promise<string>;

  MODULE_GLOBALS(overrides?: CallOverrides): Promise<string>;

  collectionCreator(overrides?: CallOverrides): Promise<string>;

  getModuleMetadataURI(overrides?: CallOverrides): Promise<string>;

  initializePublicationAction(
    _profileId: BigNumberish,
    _pubId: BigNumberish,
    _executor: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  marketCreator(overrides?: CallOverrides): Promise<string>;

  printAccessControl(overrides?: CallOverrides): Promise<string>;

  printCommunityData(overrides?: CallOverrides): Promise<string>;

  printDesignData(overrides?: CallOverrides): Promise<string>;

  printSplitsData(overrides?: CallOverrides): Promise<string>;

  processPublicationAction(
    _params: Types.ProcessActionParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setCollectionCreatorAddress(
    _newCollectionCreatorAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setMarketCreatorAddress(
    _newMarketCreatorAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPrintAccessControlAddress(
    _newPrintAccessControlAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPrintCommunityDataAddress(
    _newPrintCommunityDataAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPrintDesignDataAddress(
    _newPrintDesignDataAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    HUB(overrides?: CallOverrides): Promise<string>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<string>;

    collectionCreator(overrides?: CallOverrides): Promise<string>;

    getModuleMetadataURI(overrides?: CallOverrides): Promise<string>;

    initializePublicationAction(
      _profileId: BigNumberish,
      _pubId: BigNumberish,
      _executor: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    marketCreator(overrides?: CallOverrides): Promise<string>;

    printAccessControl(overrides?: CallOverrides): Promise<string>;

    printCommunityData(overrides?: CallOverrides): Promise<string>;

    printDesignData(overrides?: CallOverrides): Promise<string>;

    printSplitsData(overrides?: CallOverrides): Promise<string>;

    processPublicationAction(
      _params: Types.ProcessActionParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    setCollectionCreatorAddress(
      _newCollectionCreatorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMarketCreatorAddress(
      _newMarketCreatorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrintAccessControlAddress(
      _newPrintAccessControlAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrintCommunityDataAddress(
      _newPrintCommunityDataAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrintDesignDataAddress(
      _newPrintDesignDataAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ListenerInitialized(uint256,uint256,uint256,address,uint256)"(
      collectionId?: null,
      profileId?: null,
      pubId?: null,
      creatorAddress?: null,
      numberOfCollections?: null
    ): ListenerInitializedEventFilter;
    ListenerInitialized(
      collectionId?: null,
      profileId?: null,
      pubId?: null,
      creatorAddress?: null,
      numberOfCollections?: null
    ): ListenerInitializedEventFilter;

    "ListenerPurchased(address,uint256,uint256,uint256,uint256)"(
      buyerAddress?: null,
      collectionId?: null,
      pubId?: null,
      profileId?: null,
      totalAmount?: null
    ): ListenerPurchasedEventFilter;
    ListenerPurchased(
      buyerAddress?: null,
      collectionId?: null,
      pubId?: null,
      profileId?: null,
      totalAmount?: null
    ): ListenerPurchasedEventFilter;
  };

  estimateGas: {
    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<BigNumber>;

    collectionCreator(overrides?: CallOverrides): Promise<BigNumber>;

    getModuleMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    initializePublicationAction(
      _profileId: BigNumberish,
      _pubId: BigNumberish,
      _executor: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    marketCreator(overrides?: CallOverrides): Promise<BigNumber>;

    printAccessControl(overrides?: CallOverrides): Promise<BigNumber>;

    printCommunityData(overrides?: CallOverrides): Promise<BigNumber>;

    printDesignData(overrides?: CallOverrides): Promise<BigNumber>;

    printSplitsData(overrides?: CallOverrides): Promise<BigNumber>;

    processPublicationAction(
      _params: Types.ProcessActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setCollectionCreatorAddress(
      _newCollectionCreatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setMarketCreatorAddress(
      _newMarketCreatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPrintAccessControlAddress(
      _newPrintAccessControlAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPrintCommunityDataAddress(
      _newPrintCommunityDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPrintDesignDataAddress(
      _newPrintDesignDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collectionCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getModuleMetadataURI(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializePublicationAction(
      _profileId: BigNumberish,
      _pubId: BigNumberish,
      _executor: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    marketCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    printAccessControl(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    printCommunityData(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    printDesignData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    printSplitsData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processPublicationAction(
      _params: Types.ProcessActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setCollectionCreatorAddress(
      _newCollectionCreatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setMarketCreatorAddress(
      _newMarketCreatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPrintAccessControlAddress(
      _newPrintAccessControlAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPrintCommunityDataAddress(
      _newPrintCommunityDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPrintDesignDataAddress(
      _newPrintDesignDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
