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

export type PublicDropStruct = {
  mintPrice: BigNumberish;
  startTime: BigNumberish;
  endTime: BigNumberish;
  maxTotalMintableByWallet: BigNumberish;
  feeBps: BigNumberish;
  restrictFeeRecipients: boolean;
};

export type PublicDropStructOutput = [
  BigNumber,
  number,
  number,
  number,
  number,
  boolean
] & {
  mintPrice: BigNumber;
  startTime: number;
  endTime: number;
  maxTotalMintableByWallet: number;
  feeBps: number;
  restrictFeeRecipients: boolean;
};

export type AllowListDataStruct = {
  merkleRoot: BytesLike;
  publicKeyURIs: string[];
  allowListURI: string;
};

export type AllowListDataStructOutput = [string, string[], string] & {
  merkleRoot: string;
  publicKeyURIs: string[];
  allowListURI: string;
};

export type TokenGatedDropStageStruct = {
  mintPrice: BigNumberish;
  maxTotalMintableByWallet: BigNumberish;
  startTime: BigNumberish;
  endTime: BigNumberish;
  dropStageIndex: BigNumberish;
  maxTokenSupplyForStage: BigNumberish;
  feeBps: BigNumberish;
  restrictFeeRecipients: boolean;
};

export type TokenGatedDropStageStructOutput = [
  BigNumber,
  number,
  number,
  number,
  number,
  number,
  number,
  boolean
] & {
  mintPrice: BigNumber;
  maxTotalMintableByWallet: number;
  startTime: number;
  endTime: number;
  dropStageIndex: number;
  maxTokenSupplyForStage: number;
  feeBps: number;
  restrictFeeRecipients: boolean;
};

export type SignedMintValidationParamsStruct = {
  minMintPrice: BigNumberish;
  maxMaxTotalMintableByWallet: BigNumberish;
  minStartTime: BigNumberish;
  maxEndTime: BigNumberish;
  maxMaxTokenSupplyForStage: BigNumberish;
  minFeeBps: BigNumberish;
  maxFeeBps: BigNumberish;
};

export type SignedMintValidationParamsStructOutput = [
  BigNumber,
  number,
  number,
  number,
  number,
  number,
  number
] & {
  minMintPrice: BigNumber;
  maxMaxTotalMintableByWallet: number;
  minStartTime: number;
  maxEndTime: number;
  maxMaxTokenSupplyForStage: number;
  minFeeBps: number;
  maxFeeBps: number;
};

export declare namespace ERC721SeaDropStructsErrorsAndEvents {
  export type MultiConfigureStructStruct = {
    maxSupply: BigNumberish;
    baseURI: string;
    contractURI: string;
    seaDropImpl: string;
    publicDrop: PublicDropStruct;
    dropURI: string;
    allowListData: AllowListDataStruct;
    creatorPayoutAddress: string;
    provenanceHash: BytesLike;
    allowedFeeRecipients: string[];
    disallowedFeeRecipients: string[];
    allowedPayers: string[];
    disallowedPayers: string[];
    tokenGatedAllowedNftTokens: string[];
    tokenGatedDropStages: TokenGatedDropStageStruct[];
    disallowedTokenGatedAllowedNftTokens: string[];
    signers: string[];
    signedMintValidationParams: SignedMintValidationParamsStruct[];
    disallowedSigners: string[];
  };

  export type MultiConfigureStructStructOutput = [
    BigNumber,
    string,
    string,
    string,
    PublicDropStructOutput,
    string,
    AllowListDataStructOutput,
    string,
    string,
    string[],
    string[],
    string[],
    string[],
    string[],
    TokenGatedDropStageStructOutput[],
    string[],
    string[],
    SignedMintValidationParamsStructOutput[],
    string[]
  ] & {
    maxSupply: BigNumber;
    baseURI: string;
    contractURI: string;
    seaDropImpl: string;
    publicDrop: PublicDropStructOutput;
    dropURI: string;
    allowListData: AllowListDataStructOutput;
    creatorPayoutAddress: string;
    provenanceHash: string;
    allowedFeeRecipients: string[];
    disallowedFeeRecipients: string[];
    allowedPayers: string[];
    disallowedPayers: string[];
    tokenGatedAllowedNftTokens: string[];
    tokenGatedDropStages: TokenGatedDropStageStructOutput[];
    disallowedTokenGatedAllowedNftTokens: string[];
    signers: string[];
    signedMintValidationParams: SignedMintValidationParamsStructOutput[];
    disallowedSigners: string[];
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

export interface SeaDropMintPublicationActionInterface extends utils.Interface {
  functions: {
    "HUB()": FunctionFragment;
    "MODULE_REGISTRY()": FunctionFragment;
    "SEADROP()": FunctionFragment;
    "WMATIC()": FunctionFragment;
    "deploySeaDropCollection(address,string,string,(uint256,string,string,address,(uint80,uint48,uint48,uint16,uint16,bool),string,(bytes32,string[],string),address,bytes32,address[],address[],address[],address[],address[],(uint80,uint16,uint48,uint48,uint8,uint32,uint16,bool)[],address[],address[],(uint80,uint24,uint40,uint40,uint40,uint16,uint16)[],address[]))": FunctionFragment;
    "digiSeaDropCollectionImpl()": FunctionFragment;
    "getModuleMetadataURI()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "initializePublicationAction(uint256,uint256,address,bytes)": FunctionFragment;
    "metadataURI()": FunctionFragment;
    "owner()": FunctionFragment;
    "processPublicationAction((uint256,uint256,uint256,address,address,uint256[],uint256[],uint8[],bytes))": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rescaleFees(uint256,uint256)": FunctionFragment;
    "setDiGiSeaDropCollectionImpl(address)": FunctionFragment;
    "setModuleMetadataURI(string)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawToTreasury(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "HUB"
      | "MODULE_REGISTRY"
      | "SEADROP"
      | "WMATIC"
      | "deploySeaDropCollection"
      | "digiSeaDropCollectionImpl"
      | "getModuleMetadataURI"
      | "initialize"
      | "initializePublicationAction"
      | "metadataURI"
      | "owner"
      | "processPublicationAction"
      | "renounceOwnership"
      | "rescaleFees"
      | "setDiGiSeaDropCollectionImpl"
      | "setModuleMetadataURI"
      | "supportsInterface"
      | "transferOwnership"
      | "withdrawToTreasury"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MODULE_REGISTRY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SEADROP", values?: undefined): string;
  encodeFunctionData(functionFragment: "WMATIC", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deploySeaDropCollection",
    values: [
      string,
      string,
      string,
      ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStructStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "digiSeaDropCollectionImpl",
    values?: undefined
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
    functionFragment: "metadataURI",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processPublicationAction",
    values: [Types.ProcessActionParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescaleFees",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDiGiSeaDropCollectionImpl",
    values: [string]
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
    functionFragment: "withdrawToTreasury",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MODULE_REGISTRY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SEADROP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WMATIC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deploySeaDropCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "digiSeaDropCollectionImpl",
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
    functionFragment: "metadataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processPublicationAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescaleFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDiGiSeaDropCollectionImpl",
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
    functionFragment: "withdrawToTreasury",
    data: BytesLike
  ): Result;

  events: {
    "DiGiSeaDropCollectionDeployed(address,address,string,string,(uint256,string,string,address,(uint80,uint48,uint48,uint16,uint16,bool),string,(bytes32,string[],string),address,bytes32,address[],address[],address[],address[],address[],(uint80,uint16,uint48,uint48,uint8,uint32,uint16,bool)[],address[],address[],(uint80,uint24,uint40,uint40,uint40,uint16,uint16)[],address[]))": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SeaDropPublicationFeesRescaled(uint256,uint256,uint16)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "DiGiSeaDropCollectionDeployed"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SeaDropPublicationFeesRescaled"
  ): EventFragment;
}

export interface DiGiSeaDropCollectionDeployedEventObject {
  collectionAddress: string;
  owner: string;
  name: string;
  symbol: string;
  config: ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStructStructOutput;
}
export type DiGiSeaDropCollectionDeployedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStructStructOutput
  ],
  DiGiSeaDropCollectionDeployedEventObject
>;

export type DiGiSeaDropCollectionDeployedEventFilter =
  TypedEventFilter<DiGiSeaDropCollectionDeployedEvent>;

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

export interface SeaDropPublicationFeesRescaledEventObject {
  profileId: BigNumber;
  pubId: BigNumber;
  referrersFeeBps: number;
}
export type SeaDropPublicationFeesRescaledEvent = TypedEvent<
  [BigNumber, BigNumber, number],
  SeaDropPublicationFeesRescaledEventObject
>;

export type SeaDropPublicationFeesRescaledEventFilter =
  TypedEventFilter<SeaDropPublicationFeesRescaledEvent>;

export interface SeaDropMintPublicationAction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SeaDropMintPublicationActionInterface;

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

    MODULE_REGISTRY(overrides?: CallOverrides): Promise<[string]>;

    SEADROP(overrides?: CallOverrides): Promise<[string]>;

    WMATIC(overrides?: CallOverrides): Promise<[string]>;

    deploySeaDropCollection(
      owner: string,
      name: string,
      symbol: string,
      config: ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStructStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    digiSeaDropCollectionImpl(overrides?: CallOverrides): Promise<[string]>;

    getModuleMetadataURI(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      moduleOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initializePublicationAction(
      profileId: BigNumberish,
      pubId: BigNumberish,
      arg2: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    metadataURI(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    rescaleFees(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setDiGiSeaDropCollectionImpl(
      newDiGiSeaDropCollectionImpl: string,
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

    withdrawToTreasury(
      currency: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  HUB(overrides?: CallOverrides): Promise<string>;

  MODULE_REGISTRY(overrides?: CallOverrides): Promise<string>;

  SEADROP(overrides?: CallOverrides): Promise<string>;

  WMATIC(overrides?: CallOverrides): Promise<string>;

  deploySeaDropCollection(
    owner: string,
    name: string,
    symbol: string,
    config: ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStructStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  digiSeaDropCollectionImpl(overrides?: CallOverrides): Promise<string>;

  getModuleMetadataURI(overrides?: CallOverrides): Promise<string>;

  initialize(
    moduleOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initializePublicationAction(
    profileId: BigNumberish,
    pubId: BigNumberish,
    arg2: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  metadataURI(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  processPublicationAction(
    processActionParams: Types.ProcessActionParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  rescaleFees(
    profileId: BigNumberish,
    pubId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setDiGiSeaDropCollectionImpl(
    newDiGiSeaDropCollectionImpl: string,
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

  withdrawToTreasury(
    currency: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    HUB(overrides?: CallOverrides): Promise<string>;

    MODULE_REGISTRY(overrides?: CallOverrides): Promise<string>;

    SEADROP(overrides?: CallOverrides): Promise<string>;

    WMATIC(overrides?: CallOverrides): Promise<string>;

    deploySeaDropCollection(
      owner: string,
      name: string,
      symbol: string,
      config: ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStructStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    digiSeaDropCollectionImpl(overrides?: CallOverrides): Promise<string>;

    getModuleMetadataURI(overrides?: CallOverrides): Promise<string>;

    initialize(moduleOwner: string, overrides?: CallOverrides): Promise<void>;

    initializePublicationAction(
      profileId: BigNumberish,
      pubId: BigNumberish,
      arg2: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    metadataURI(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rescaleFees(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDiGiSeaDropCollectionImpl(
      newDiGiSeaDropCollectionImpl: string,
      overrides?: CallOverrides
    ): Promise<void>;

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

    withdrawToTreasury(
      currency: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DiGiSeaDropCollectionDeployed(address,address,string,string,(uint256,string,string,address,(uint80,uint48,uint48,uint16,uint16,bool),string,(bytes32,string[],string),address,bytes32,address[],address[],address[],address[],address[],(uint80,uint16,uint48,uint48,uint8,uint32,uint16,bool)[],address[],address[],(uint80,uint24,uint40,uint40,uint40,uint16,uint16)[],address[]))"(
      collectionAddress?: null,
      owner?: null,
      name?: null,
      symbol?: null,
      config?: null
    ): DiGiSeaDropCollectionDeployedEventFilter;
    DiGiSeaDropCollectionDeployed(
      collectionAddress?: null,
      owner?: null,
      name?: null,
      symbol?: null,
      config?: null
    ): DiGiSeaDropCollectionDeployedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SeaDropPublicationFeesRescaled(uint256,uint256,uint16)"(
      profileId?: null,
      pubId?: null,
      referrersFeeBps?: null
    ): SeaDropPublicationFeesRescaledEventFilter;
    SeaDropPublicationFeesRescaled(
      profileId?: null,
      pubId?: null,
      referrersFeeBps?: null
    ): SeaDropPublicationFeesRescaledEventFilter;
  };

  estimateGas: {
    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    MODULE_REGISTRY(overrides?: CallOverrides): Promise<BigNumber>;

    SEADROP(overrides?: CallOverrides): Promise<BigNumber>;

    WMATIC(overrides?: CallOverrides): Promise<BigNumber>;

    deploySeaDropCollection(
      owner: string,
      name: string,
      symbol: string,
      config: ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStructStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    digiSeaDropCollectionImpl(overrides?: CallOverrides): Promise<BigNumber>;

    getModuleMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      moduleOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initializePublicationAction(
      profileId: BigNumberish,
      pubId: BigNumberish,
      arg2: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    metadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    rescaleFees(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setDiGiSeaDropCollectionImpl(
      newDiGiSeaDropCollectionImpl: string,
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

    withdrawToTreasury(
      currency: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MODULE_REGISTRY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SEADROP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WMATIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deploySeaDropCollection(
      owner: string,
      name: string,
      symbol: string,
      config: ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStructStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    digiSeaDropCollectionImpl(
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
      arg2: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    metadataURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    rescaleFees(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setDiGiSeaDropCollectionImpl(
      newDiGiSeaDropCollectionImpl: string,
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

    withdrawToTreasury(
      currency: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
