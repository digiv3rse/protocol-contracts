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
} from "../common";

export interface MockTokenHolderContractInterface extends utils.Interface {
  functions: {
    "depositNft(address,address,uint256)": FunctionFragment;
    "executeApprove(address)": FunctionFragment;
    "executeBurn()": FunctionFragment;
    "executeDisableTokenGuardian()": FunctionFragment;
    "executeEnableTokenGuardian()": FunctionFragment;
    "executeSafeTransferFrom(address)": FunctionFragment;
    "executeSetApprovalForAll(address,bool)": FunctionFragment;
    "executeTransferFrom(address)": FunctionFragment;
    "getTokenId()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "setCollection(address)": FunctionFragment;
    "testMockTokenHolderContract()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "depositNft"
      | "executeApprove"
      | "executeBurn"
      | "executeDisableTokenGuardian"
      | "executeEnableTokenGuardian"
      | "executeSafeTransferFrom"
      | "executeSetApprovalForAll"
      | "executeTransferFrom"
      | "getTokenId"
      | "onERC721Received"
      | "setCollection"
      | "testMockTokenHolderContract"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositNft",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeApprove",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBurn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeDisableTokenGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeEnableTokenGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeSafeTransferFrom",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSetApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransferFrom",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCollection",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "testMockTokenHolderContract",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "depositNft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDisableTokenGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeEnableTokenGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSafeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSetApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokenId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testMockTokenHolderContract",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockTokenHolderContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockTokenHolderContractInterface;

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
    depositNft(
      collection: string,
      from: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeApprove(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeBurn(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeDisableTokenGuardian(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeEnableTokenGuardian(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeSafeTransferFrom(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeSetApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeTransferFrom(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getTokenId(overrides?: CallOverrides): Promise<[BigNumber]>;

    onERC721Received(
      arg0: string,
      arg1: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setCollection(
      collection: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    testMockTokenHolderContract(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  depositNft(
    collection: string,
    from: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeApprove(
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeBurn(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeDisableTokenGuardian(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeEnableTokenGuardian(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeSafeTransferFrom(
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeSetApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeTransferFrom(
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getTokenId(overrides?: CallOverrides): Promise<BigNumber>;

  onERC721Received(
    arg0: string,
    arg1: string,
    tokenId: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setCollection(
    collection: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  testMockTokenHolderContract(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositNft(
      collection: string,
      from: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeApprove(to: string, overrides?: CallOverrides): Promise<void>;

    executeBurn(overrides?: CallOverrides): Promise<void>;

    executeDisableTokenGuardian(overrides?: CallOverrides): Promise<void>;

    executeEnableTokenGuardian(overrides?: CallOverrides): Promise<void>;

    executeSafeTransferFrom(
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    executeSetApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransferFrom(to: string, overrides?: CallOverrides): Promise<void>;

    getTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    setCollection(collection: string, overrides?: CallOverrides): Promise<void>;

    testMockTokenHolderContract(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    depositNft(
      collection: string,
      from: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeApprove(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeBurn(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    executeDisableTokenGuardian(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeEnableTokenGuardian(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeSafeTransferFrom(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeSetApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeTransferFrom(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getTokenId(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setCollection(
      collection: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    testMockTokenHolderContract(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositNft(
      collection: string,
      from: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeApprove(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeBurn(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeDisableTokenGuardian(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeEnableTokenGuardian(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeSafeTransferFrom(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeSetApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeTransferFrom(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setCollection(
      collection: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    testMockTokenHolderContract(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
