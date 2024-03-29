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
} from "./common";

export interface MockNonERC721RecipientInterface extends utils.Interface {
  functions: {
    "testMockNonERC721Recipient()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "testMockNonERC721Recipient"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "testMockNonERC721Recipient",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "testMockNonERC721Recipient",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockNonERC721Recipient extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockNonERC721RecipientInterface;

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
    testMockNonERC721Recipient(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  testMockNonERC721Recipient(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    testMockNonERC721Recipient(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    testMockNonERC721Recipient(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    testMockNonERC721Recipient(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
