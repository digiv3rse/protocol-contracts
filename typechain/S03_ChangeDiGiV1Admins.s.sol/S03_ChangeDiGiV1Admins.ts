/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../common";

export interface S03_ChangeDiGiV1AdminsInterface extends utils.Interface {
  functions: {
    "IS_SCRIPT()": FunctionFragment;
    "run(string)": FunctionFragment;
    "testDiGiV1ChangeAdmins()": FunctionFragment;
    "testForkManagement()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_SCRIPT"
      | "run"
      | "testDiGiV1ChangeAdmins"
      | "testForkManagement"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(functionFragment: "run", values: [string]): string;
  encodeFunctionData(
    functionFragment: "testDiGiV1ChangeAdmins",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testForkManagement",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testDiGiV1ChangeAdmins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testForkManagement",
    data: BytesLike
  ): Result;

  events: {};
}

export interface S03_ChangeDiGiV1Admins extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: S03_ChangeDiGiV1AdminsInterface;

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
    IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;

    run(
      targetEnv_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    testDiGiV1ChangeAdmins(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    testForkManagement(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

  run(
    targetEnv_: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  testDiGiV1ChangeAdmins(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  testForkManagement(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

    run(targetEnv_: string, overrides?: CallOverrides): Promise<void>;

    testDiGiV1ChangeAdmins(overrides?: CallOverrides): Promise<void>;

    testForkManagement(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;

    run(
      targetEnv_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    testDiGiV1ChangeAdmins(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    testForkManagement(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    run(
      targetEnv_: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    testDiGiV1ChangeAdmins(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    testForkManagement(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
