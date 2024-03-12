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

export declare namespace PrintLibrary {
  export type BuyTokensParamsStruct = {
    collectionIds: BigNumberish[];
    collectionAmounts: BigNumberish[];
    collectionIndexes: BigNumberish[];
    details: string;
    buyerAddress: string;
    chosenCurrency: string;
    pkpAddress: string;
    pubId: BigNumberish;
    profileId: BigNumberish;
    buyerProfileId: BigNumberish;
    withPKP: boolean;
  };

  export type BuyTokensParamsStructOutput = [
    BigNumber[],
    BigNumber[],
    BigNumber[],
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    collectionIds: BigNumber[];
    collectionAmounts: BigNumber[];
    collectionIndexes: BigNumber[];
    details: string;
    buyerAddress: string;
    chosenCurrency: string;
    pkpAddress: string;
    pubId: BigNumber;
    profileId: BigNumber;
    buyerProfileId: BigNumber;
    withPKP: boolean;
  };

  export type BuyTokensOnlyNFTParamsStruct = {
    collectionId: BigNumberish;
    quantity: BigNumberish;
    buyerAddress: string;
    chosenCurrency: string;
    pubId: BigNumberish;
    profileId: BigNumberish;
    buyerProfileId: BigNumberish;
  };

  export type BuyTokensOnlyNFTParamsStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    collectionId: BigNumber;
    quantity: BigNumber;
    buyerAddress: string;
    chosenCurrency: string;
    pubId: BigNumber;
    profileId: BigNumber;
    buyerProfileId: BigNumber;
  };
}

export interface MarketCreatorInterface extends utils.Interface {
  functions: {
    "buyTokens((uint256[],uint256[],uint256[],string,address,address,address,uint256,uint256,uint256,bool))": FunctionFragment;
    "buyTokensOnlyNFT((uint256,uint256,address,address,uint256,uint256,uint256))": FunctionFragment;
    "collectionCreator()": FunctionFragment;
    "fiatPKPAddress()": FunctionFragment;
    "name()": FunctionFragment;
    "printAccessControl()": FunctionFragment;
    "printDesignData()": FunctionFragment;
    "printOrderData()": FunctionFragment;
    "printSplitsData()": FunctionFragment;
    "setCollectionCreatorAddress(address)": FunctionFragment;
    "setFiatPKPAddress(address)": FunctionFragment;
    "setPrintAccessControlAddress(address)": FunctionFragment;
    "setPrintDesignDataAddress(address)": FunctionFragment;
    "setPrintOrderDataAddress(address)": FunctionFragment;
    "setPrintSplitsDataAddress(address)": FunctionFragment;
    "symbol()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyTokens"
      | "buyTokensOnlyNFT"
      | "collectionCreator"
      | "fiatPKPAddress"
      | "name"
      | "printAccessControl"
      | "printDesignData"
      | "printOrderData"
      | "printSplitsData"
      | "setCollectionCreatorAddress"
      | "setFiatPKPAddress"
      | "setPrintAccessControlAddress"
      | "setPrintDesignDataAddress"
      | "setPrintOrderDataAddress"
      | "setPrintSplitsDataAddress"
      | "symbol"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyTokens",
    values: [PrintLibrary.BuyTokensParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokensOnlyNFT",
    values: [PrintLibrary.BuyTokensOnlyNFTParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "collectionCreator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fiatPKPAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "printAccessControl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "printDesignData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "printOrderData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "printSplitsData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCollectionCreatorAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFiatPKPAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrintAccessControlAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrintDesignDataAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrintOrderDataAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrintSplitsDataAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyTokensOnlyNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectionCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fiatPKPAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "printAccessControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "printDesignData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "printOrderData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "printSplitsData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCollectionCreatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFiatPKPAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrintAccessControlAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrintDesignDataAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrintOrderDataAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrintSplitsDataAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;

  events: {};
}

export interface MarketCreator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketCreatorInterface;

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
    buyTokens(
      _params: PrintLibrary.BuyTokensParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    buyTokensOnlyNFT(
      _params: PrintLibrary.BuyTokensOnlyNFTParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    collectionCreator(overrides?: CallOverrides): Promise<[string]>;

    fiatPKPAddress(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    printAccessControl(overrides?: CallOverrides): Promise<[string]>;

    printDesignData(overrides?: CallOverrides): Promise<[string]>;

    printOrderData(overrides?: CallOverrides): Promise<[string]>;

    printSplitsData(overrides?: CallOverrides): Promise<[string]>;

    setCollectionCreatorAddress(
      _newCollectionCreatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setFiatPKPAddress(
      _newFiatPKPAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPrintAccessControlAddress(
      _newPrintAccessControlAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPrintDesignDataAddress(
      _newPrintDesignDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPrintOrderDataAddress(
      _newPrintOrderDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPrintSplitsDataAddress(
      _newPrintSplitsDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;
  };

  buyTokens(
    _params: PrintLibrary.BuyTokensParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  buyTokensOnlyNFT(
    _params: PrintLibrary.BuyTokensOnlyNFTParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  collectionCreator(overrides?: CallOverrides): Promise<string>;

  fiatPKPAddress(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  printAccessControl(overrides?: CallOverrides): Promise<string>;

  printDesignData(overrides?: CallOverrides): Promise<string>;

  printOrderData(overrides?: CallOverrides): Promise<string>;

  printSplitsData(overrides?: CallOverrides): Promise<string>;

  setCollectionCreatorAddress(
    _newCollectionCreatorAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setFiatPKPAddress(
    _newFiatPKPAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPrintAccessControlAddress(
    _newPrintAccessControlAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPrintDesignDataAddress(
    _newPrintDesignDataAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPrintOrderDataAddress(
    _newPrintOrderDataAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPrintSplitsDataAddress(
    _newPrintSplitsDataAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    buyTokens(
      _params: PrintLibrary.BuyTokensParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    buyTokensOnlyNFT(
      _params: PrintLibrary.BuyTokensOnlyNFTParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    collectionCreator(overrides?: CallOverrides): Promise<string>;

    fiatPKPAddress(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    printAccessControl(overrides?: CallOverrides): Promise<string>;

    printDesignData(overrides?: CallOverrides): Promise<string>;

    printOrderData(overrides?: CallOverrides): Promise<string>;

    printSplitsData(overrides?: CallOverrides): Promise<string>;

    setCollectionCreatorAddress(
      _newCollectionCreatorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFiatPKPAddress(
      _newFiatPKPAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrintAccessControlAddress(
      _newPrintAccessControlAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrintDesignDataAddress(
      _newPrintDesignDataAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrintOrderDataAddress(
      _newPrintOrderDataAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrintSplitsDataAddress(
      _newPrintSplitsDataAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    buyTokens(
      _params: PrintLibrary.BuyTokensParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    buyTokensOnlyNFT(
      _params: PrintLibrary.BuyTokensOnlyNFTParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    collectionCreator(overrides?: CallOverrides): Promise<BigNumber>;

    fiatPKPAddress(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    printAccessControl(overrides?: CallOverrides): Promise<BigNumber>;

    printDesignData(overrides?: CallOverrides): Promise<BigNumber>;

    printOrderData(overrides?: CallOverrides): Promise<BigNumber>;

    printSplitsData(overrides?: CallOverrides): Promise<BigNumber>;

    setCollectionCreatorAddress(
      _newCollectionCreatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setFiatPKPAddress(
      _newFiatPKPAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPrintAccessControlAddress(
      _newPrintAccessControlAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPrintDesignDataAddress(
      _newPrintDesignDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPrintOrderDataAddress(
      _newPrintOrderDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPrintSplitsDataAddress(
      _newPrintSplitsDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTokens(
      _params: PrintLibrary.BuyTokensParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    buyTokensOnlyNFT(
      _params: PrintLibrary.BuyTokensOnlyNFTParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    collectionCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fiatPKPAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    printAccessControl(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    printDesignData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    printOrderData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    printSplitsData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCollectionCreatorAddress(
      _newCollectionCreatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setFiatPKPAddress(
      _newFiatPKPAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPrintAccessControlAddress(
      _newPrintAccessControlAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPrintDesignDataAddress(
      _newPrintDesignDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPrintOrderDataAddress(
      _newPrintOrderDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPrintSplitsDataAddress(
      _newPrintSplitsDataAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}