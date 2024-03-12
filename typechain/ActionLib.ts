/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
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
}

export interface ActionLibInterface extends utils.Interface {
  functions: {};

  events: {
    "Acted((uint256,uint256,uint256,uint256[],uint256[],address,bytes),bytes,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Acted"): EventFragment;
}

export interface ActedEventObject {
  publicationActionParams: Types.PublicationActionParamsStructOutput;
  actionModuleReturnData: string;
  transactionExecutor: string;
  timestamp: BigNumber;
}
export type ActedEvent = TypedEvent<
  [Types.PublicationActionParamsStructOutput, string, string, BigNumber],
  ActedEventObject
>;

export type ActedEventFilter = TypedEventFilter<ActedEvent>;

export interface ActionLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ActionLibInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "Acted((uint256,uint256,uint256,uint256[],uint256[],address,bytes),bytes,address,uint256)"(
      publicationActionParams?: null,
      actionModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): ActedEventFilter;
    Acted(
      publicationActionParams?: null,
      actionModuleReturnData?: null,
      transactionExecutor?: null,
      timestamp?: null
    ): ActedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}