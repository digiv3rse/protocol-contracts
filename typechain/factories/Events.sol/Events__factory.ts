/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Events, EventsInterface } from "../../Events.sol/Events";

const _abi = [
  {
    type: "event",
    name: "Acted",
    inputs: [
      {
        name: "publicationActionParams",
        type: "tuple",
        indexed: false,
        internalType: "struct Types.PublicationActionParams",
        components: [
          {
            name: "publicationActedProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "publicationActedId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "actorProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "referrerProfileIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "actionModuleAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "actionModuleData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "actionModuleReturnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BaseInitialized",
    inputs: [
      {
        name: "name",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "symbol",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BatchMetadataUpdate",
    inputs: [
      {
        name: "fromTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "toTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Blocked",
    inputs: [
      {
        name: "byProfileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "idOfProfileBlocked",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CollectNFTTransferred",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "pubId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "collectNFTId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "from",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CommentCreated",
    inputs: [
      {
        name: "commentParams",
        type: "tuple",
        indexed: false,
        internalType: "struct Types.CommentParams",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "contentURI",
            type: "string",
            internalType: "string",
          },
          {
            name: "pointedProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pointedPubId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "referrerProfileIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referenceModuleData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "actionModules",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "actionModulesInitDatas",
            type: "bytes[]",
            internalType: "bytes[]",
          },
          {
            name: "referenceModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "referenceModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "pubId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "referenceModuleReturnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "actionModulesInitReturnDatas",
        type: "bytes[]",
        indexed: false,
        internalType: "bytes[]",
      },
      {
        name: "referenceModuleInitReturnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "DelegatedExecutorsConfigApplied",
    inputs: [
      {
        name: "delegatorProfileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "configNumber",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "DelegatedExecutorsConfigChanged",
    inputs: [
      {
        name: "delegatorProfileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "configNumber",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "delegatedExecutors",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
      {
        name: "approvals",
        type: "bool[]",
        indexed: false,
        internalType: "bool[]",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EmergencyAdminSet",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "oldEmergencyAdmin",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newEmergencyAdmin",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "FollowModuleSet",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "followModule",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "followModuleInitData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "followModuleReturnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "FollowNFTDeployed",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "followNFT",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Followed",
    inputs: [
      {
        name: "followerProfileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "idOfProfileFollowed",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "followTokenIdAssigned",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "followModuleData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "processFollowModuleReturnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "GovernanceSet",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "prevGovernance",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newGovernance",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LegacyCollectNFTDeployed",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "pubId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "collectNFT",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MirrorCreated",
    inputs: [
      {
        name: "mirrorParams",
        type: "tuple",
        indexed: false,
        internalType: "struct Types.MirrorParams",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "metadataURI",
            type: "string",
            internalType: "string",
          },
          {
            name: "pointedProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pointedPubId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "referrerProfileIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referenceModuleData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "pubId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "referenceModuleReturnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NonceUpdated",
    inputs: [
      {
        name: "signer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "nonce",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PostCreated",
    inputs: [
      {
        name: "postParams",
        type: "tuple",
        indexed: false,
        internalType: "struct Types.PostParams",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "contentURI",
            type: "string",
            internalType: "string",
          },
          {
            name: "actionModules",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "actionModulesInitDatas",
            type: "bytes[]",
            internalType: "bytes[]",
          },
          {
            name: "referenceModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "referenceModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "pubId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "actionModulesInitReturnDatas",
        type: "bytes[]",
        indexed: false,
        internalType: "bytes[]",
      },
      {
        name: "referenceModuleInitReturnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProfileCreated",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProfileCreatorWhitelisted",
    inputs: [
      {
        name: "profileCreator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "whitelisted",
        type: "bool",
        indexed: true,
        internalType: "bool",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProfileMetadataSet",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "metadata",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "QuoteCreated",
    inputs: [
      {
        name: "quoteParams",
        type: "tuple",
        indexed: false,
        internalType: "struct Types.QuoteParams",
        components: [
          {
            name: "profileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "contentURI",
            type: "string",
            internalType: "string",
          },
          {
            name: "pointedProfileId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pointedPubId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "referrerProfileIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referrerPubIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "referenceModuleData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "actionModules",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "actionModulesInitDatas",
            type: "bytes[]",
            internalType: "bytes[]",
          },
          {
            name: "referenceModule",
            type: "address",
            internalType: "address",
          },
          {
            name: "referenceModuleInitData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "pubId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "referenceModuleReturnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "actionModulesInitReturnDatas",
        type: "bytes[]",
        indexed: false,
        internalType: "bytes[]",
      },
      {
        name: "referenceModuleInitReturnData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StateSet",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "prevState",
        type: "uint8",
        indexed: true,
        internalType: "enum Types.ProtocolState",
      },
      {
        name: "newState",
        type: "uint8",
        indexed: true,
        internalType: "enum Types.ProtocolState",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokenGuardianStateChanged",
    inputs: [
      {
        name: "wallet",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "enabled",
        type: "bool",
        indexed: true,
        internalType: "bool",
      },
      {
        name: "tokenGuardianDisablingTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TreasuryFeeSet",
    inputs: [
      {
        name: "prevTreasuryFee",
        type: "uint16",
        indexed: true,
        internalType: "uint16",
      },
      {
        name: "newTreasuryFee",
        type: "uint16",
        indexed: true,
        internalType: "uint16",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TreasurySet",
    inputs: [
      {
        name: "prevTreasury",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newTreasury",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unblocked",
    inputs: [
      {
        name: "byProfileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "idOfProfileUnblocked",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unfollowed",
    inputs: [
      {
        name: "unfollowerProfileId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "idOfProfileUnfollowed",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "transactionExecutor",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220ecb6b529d69e304044eaea384545847e46e9c81124f5acb27e110985eb1522b164736f6c63430008150033";

type EventsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EventsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Events__factory extends ContractFactory {
  constructor(...args: EventsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Events> {
    return super.deploy(overrides || {}) as Promise<Events>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Events {
    return super.attach(address) as Events;
  }
  override connect(signer: Signer): Events__factory {
    return super.connect(signer) as Events__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventsInterface {
    return new utils.Interface(_abi) as EventsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Events {
    return new Contract(address, _abi, signerOrProvider) as Events;
  }
}
