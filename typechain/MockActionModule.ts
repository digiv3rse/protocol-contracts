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

export interface MockActionModuleInterface extends utils.Interface {
  functions: {
    "getModuleMetadataURI()": FunctionFragment;
    "initializePublicationAction(uint256,uint256,address,bytes)": FunctionFragment;
    "metadataURI()": FunctionFragment;
    "owner()": FunctionFragment;
    "processPublicationAction((uint256,uint256,uint256,address,address,uint256[],uint256[],uint8[],bytes))": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setModuleMetadataURI(string)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "testMockActionModule()": FunctionFragment;
    "testMockModule()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getModuleMetadataURI"
      | "initializePublicationAction"
      | "metadataURI"
      | "owner"
      | "processPublicationAction"
      | "renounceOwnership"
      | "setModuleMetadataURI"
      | "supportsInterface"
      | "testMockActionModule"
      | "testMockModule"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getModuleMetadataURI",
    values?: undefined
  ): string;
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
    functionFragment: "setModuleMetadataURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "testMockActionModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testMockModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getModuleMetadataURI",
    data: BytesLike
  ): Result;
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
    functionFragment: "setModuleMetadataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testMockActionModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testMockModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

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

export interface MockActionModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockActionModuleInterface;

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
    getModuleMetadataURI(overrides?: CallOverrides): Promise<[string]>;

    initializePublicationAction(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    metadataURI(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

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

    testMockActionModule(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    testMockModule(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  getModuleMetadataURI(overrides?: CallOverrides): Promise<string>;

  initializePublicationAction(
    arg0: BigNumberish,
    arg1: BigNumberish,
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

  testMockActionModule(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  testMockModule(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    getModuleMetadataURI(overrides?: CallOverrides): Promise<string>;

    initializePublicationAction(
      arg0: BigNumberish,
      arg1: BigNumberish,
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

    setModuleMetadataURI(
      _metadataURI: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    testMockActionModule(overrides?: CallOverrides): Promise<void>;

    testMockModule(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
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
    getModuleMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    initializePublicationAction(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    metadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: CallOverrides
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

    testMockActionModule(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    testMockModule(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getModuleMetadataURI(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializePublicationAction(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    metadataURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processPublicationAction(
      processActionParams: Types.ProcessActionParamsStruct,
      overrides?: CallOverrides
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

    testMockActionModule(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    testMockModule(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}