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
  PayableOverrides,
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

export interface GovernanceInterface extends utils.Interface {
  functions: {
    "DIGI_HUB()": FunctionFragment;
    "clearControllerContract()": FunctionFragment;
    "controllerContract()": FunctionFragment;
    "digiHub_setEmergencyAdmin(address)": FunctionFragment;
    "digiHub_setGovernance(address)": FunctionFragment;
    "digiHub_setState(uint8)": FunctionFragment;
    "digiHub_setTreasuryParams(address,uint16)": FunctionFragment;
    "digiHub_whitelistProfileCreator(address,bool)": FunctionFragment;
    "executeAsGovernance(address,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setControllerContract(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DIGI_HUB"
      | "clearControllerContract"
      | "controllerContract"
      | "digiHub_setEmergencyAdmin"
      | "digiHub_setGovernance"
      | "digiHub_setState"
      | "digiHub_setTreasuryParams"
      | "digiHub_whitelistProfileCreator"
      | "executeAsGovernance"
      | "owner"
      | "renounceOwnership"
      | "setControllerContract"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "DIGI_HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "clearControllerContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controllerContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "digiHub_setEmergencyAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "digiHub_setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "digiHub_setState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "digiHub_setTreasuryParams",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "digiHub_whitelistProfileCreator",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "executeAsGovernance",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setControllerContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "DIGI_HUB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clearControllerContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "controllerContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "digiHub_setEmergencyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "digiHub_setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "digiHub_setState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "digiHub_setTreasuryParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "digiHub_whitelistProfileCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeAsGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setControllerContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ControllerContractUpdated(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ControllerContractUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ControllerContractUpdatedEventObject {
  previousControllerContract: string;
  newControllerContract: string;
}
export type ControllerContractUpdatedEvent = TypedEvent<
  [string, string],
  ControllerContractUpdatedEventObject
>;

export type ControllerContractUpdatedEventFilter =
  TypedEventFilter<ControllerContractUpdatedEvent>;

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

export interface Governance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernanceInterface;

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
    DIGI_HUB(overrides?: CallOverrides): Promise<[string]>;

    clearControllerContract(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    controllerContract(overrides?: CallOverrides): Promise<[string]>;

    digiHub_setEmergencyAdmin(
      newEmergencyAdmin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    digiHub_setGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    digiHub_setState(
      newState: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    digiHub_setTreasuryParams(
      newTreasury: string,
      newTreasuryFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    digiHub_whitelistProfileCreator(
      profileCreator: string,
      whitelist: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeAsGovernance(
      target: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setControllerContract(
      newControllerContract: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  DIGI_HUB(overrides?: CallOverrides): Promise<string>;

  clearControllerContract(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  controllerContract(overrides?: CallOverrides): Promise<string>;

  digiHub_setEmergencyAdmin(
    newEmergencyAdmin: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  digiHub_setGovernance(
    newGovernance: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  digiHub_setState(
    newState: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  digiHub_setTreasuryParams(
    newTreasury: string,
    newTreasuryFee: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  digiHub_whitelistProfileCreator(
    profileCreator: string,
    whitelist: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeAsGovernance(
    target: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setControllerContract(
    newControllerContract: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    DIGI_HUB(overrides?: CallOverrides): Promise<string>;

    clearControllerContract(overrides?: CallOverrides): Promise<void>;

    controllerContract(overrides?: CallOverrides): Promise<string>;

    digiHub_setEmergencyAdmin(
      newEmergencyAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    digiHub_setGovernance(
      newGovernance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    digiHub_setState(
      newState: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    digiHub_setTreasuryParams(
      newTreasury: string,
      newTreasuryFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    digiHub_whitelistProfileCreator(
      profileCreator: string,
      whitelist: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    executeAsGovernance(
      target: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setControllerContract(
      newControllerContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ControllerContractUpdated(address,address)"(
      previousControllerContract?: null,
      newControllerContract?: null
    ): ControllerContractUpdatedEventFilter;
    ControllerContractUpdated(
      previousControllerContract?: null,
      newControllerContract?: null
    ): ControllerContractUpdatedEventFilter;

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
    DIGI_HUB(overrides?: CallOverrides): Promise<BigNumber>;

    clearControllerContract(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    controllerContract(overrides?: CallOverrides): Promise<BigNumber>;

    digiHub_setEmergencyAdmin(
      newEmergencyAdmin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    digiHub_setGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    digiHub_setState(
      newState: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    digiHub_setTreasuryParams(
      newTreasury: string,
      newTreasuryFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    digiHub_whitelistProfileCreator(
      profileCreator: string,
      whitelist: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeAsGovernance(
      target: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setControllerContract(
      newControllerContract: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DIGI_HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    clearControllerContract(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    controllerContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    digiHub_setEmergencyAdmin(
      newEmergencyAdmin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    digiHub_setGovernance(
      newGovernance: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    digiHub_setState(
      newState: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    digiHub_setTreasuryParams(
      newTreasury: string,
      newTreasuryFee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    digiHub_whitelistProfileCreator(
      profileCreator: string,
      whitelist: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeAsGovernance(
      target: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setControllerContract(
      newControllerContract: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
