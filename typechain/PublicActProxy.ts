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

  export type EIP712SignatureStruct = {
    signer: string;
    v: BigNumberish;
    r: BytesLike;
    s: BytesLike;
    deadline: BigNumberish;
  };

  export type EIP712SignatureStructOutput = [
    string,
    number,
    string,
    string,
    BigNumber
  ] & { signer: string; v: number; r: string; s: string; deadline: BigNumber };
}

export interface PublicActProxyInterface extends utils.Interface {
  functions: {
    "COLLECT_PUBLICATION_ACTION()": FunctionFragment;
    "HUB()": FunctionFragment;
    "incrementNonce(uint8)": FunctionFragment;
    "name()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "publicCollect((uint256,uint256,uint256,uint256[],uint256[],address,bytes))": FunctionFragment;
    "publicCollectWithSig((uint256,uint256,uint256,uint256[],uint256[],address,bytes),(address,uint8,bytes32,bytes32,uint256))": FunctionFragment;
    "publicFreeAct((uint256,uint256,uint256,uint256[],uint256[],address,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "COLLECT_PUBLICATION_ACTION"
      | "HUB"
      | "incrementNonce"
      | "name"
      | "nonces"
      | "publicCollect"
      | "publicCollectWithSig"
      | "publicFreeAct"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "COLLECT_PUBLICATION_ACTION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "incrementNonce",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "publicCollect",
    values: [Types.PublicationActionParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "publicCollectWithSig",
    values: [Types.PublicationActionParamsStruct, Types.EIP712SignatureStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "publicFreeAct",
    values: [Types.PublicationActionParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "COLLECT_PUBLICATION_ACTION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publicCollect",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicCollectWithSig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicFreeAct",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PublicActProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PublicActProxyInterface;

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
    COLLECT_PUBLICATION_ACTION(overrides?: CallOverrides): Promise<[string]>;

    HUB(overrides?: CallOverrides): Promise<[string]>;

    incrementNonce(
      increment: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nonces(signer: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    publicCollect(
      publicationActionParams: Types.PublicationActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    publicCollectWithSig(
      publicationActionParams: Types.PublicationActionParamsStruct,
      signature: Types.EIP712SignatureStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    publicFreeAct(
      publicationActionParams: Types.PublicationActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  COLLECT_PUBLICATION_ACTION(overrides?: CallOverrides): Promise<string>;

  HUB(overrides?: CallOverrides): Promise<string>;

  incrementNonce(
    increment: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nonces(signer: string, overrides?: CallOverrides): Promise<BigNumber>;

  publicCollect(
    publicationActionParams: Types.PublicationActionParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  publicCollectWithSig(
    publicationActionParams: Types.PublicationActionParamsStruct,
    signature: Types.EIP712SignatureStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  publicFreeAct(
    publicationActionParams: Types.PublicationActionParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    COLLECT_PUBLICATION_ACTION(overrides?: CallOverrides): Promise<string>;

    HUB(overrides?: CallOverrides): Promise<string>;

    incrementNonce(
      increment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    nonces(signer: string, overrides?: CallOverrides): Promise<BigNumber>;

    publicCollect(
      publicationActionParams: Types.PublicationActionParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    publicCollectWithSig(
      publicationActionParams: Types.PublicationActionParamsStruct,
      signature: Types.EIP712SignatureStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    publicFreeAct(
      publicationActionParams: Types.PublicationActionParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    COLLECT_PUBLICATION_ACTION(overrides?: CallOverrides): Promise<BigNumber>;

    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    incrementNonce(
      increment: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(signer: string, overrides?: CallOverrides): Promise<BigNumber>;

    publicCollect(
      publicationActionParams: Types.PublicationActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    publicCollectWithSig(
      publicationActionParams: Types.PublicationActionParamsStruct,
      signature: Types.EIP712SignatureStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    publicFreeAct(
      publicationActionParams: Types.PublicationActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    COLLECT_PUBLICATION_ACTION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    incrementNonce(
      increment: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      signer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    publicCollect(
      publicationActionParams: Types.PublicationActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    publicCollectWithSig(
      publicationActionParams: Types.PublicationActionParamsStruct,
      signature: Types.EIP712SignatureStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    publicFreeAct(
      publicationActionParams: Types.PublicationActionParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
