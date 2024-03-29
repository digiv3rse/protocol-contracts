/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISeaDrop, ISeaDropInterface } from "../ISeaDrop";

const _abi = [
  {
    type: "function",
    name: "getAllowListMerkleRoot",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllowedFeeRecipients",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllowedNftTokenIdIsRedeemed",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowedNftToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowedNftTokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCreatorPayoutAddress",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getFeeRecipientIsAllowed",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "feeRecipient",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPayerIsAllowed",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "payer",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPayers",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPublicDrop",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct PublicDrop",
        components: [
          {
            name: "mintPrice",
            type: "uint80",
            internalType: "uint80",
          },
          {
            name: "startTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "endTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "maxTotalMintableByWallet",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "feeBps",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "restrictFeeRecipients",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSignedMintValidationParams",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "signer",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct SignedMintValidationParams",
        components: [
          {
            name: "minMintPrice",
            type: "uint80",
            internalType: "uint80",
          },
          {
            name: "maxMaxTotalMintableByWallet",
            type: "uint24",
            internalType: "uint24",
          },
          {
            name: "minStartTime",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "maxEndTime",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "maxMaxTokenSupplyForStage",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "minFeeBps",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "maxFeeBps",
            type: "uint16",
            internalType: "uint16",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSigners",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTokenGatedAllowedTokens",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTokenGatedDrop",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowedNftToken",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct TokenGatedDropStage",
        components: [
          {
            name: "mintPrice",
            type: "uint80",
            internalType: "uint80",
          },
          {
            name: "maxTotalMintableByWallet",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "startTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "endTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "dropStageIndex",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "maxTokenSupplyForStage",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "feeBps",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "restrictFeeRecipients",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mintAllowList",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "feeRecipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "minterIfNotPayer",
        type: "address",
        internalType: "address",
      },
      {
        name: "quantity",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "mintParams",
        type: "tuple",
        internalType: "struct MintParams",
        components: [
          {
            name: "mintPrice",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "maxTotalMintableByWallet",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "startTime",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "endTime",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "dropStageIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "maxTokenSupplyForStage",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "feeBps",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "restrictFeeRecipients",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "proof",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "mintAllowedTokenHolder",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "feeRecipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "minterIfNotPayer",
        type: "address",
        internalType: "address",
      },
      {
        name: "mintParams",
        type: "tuple",
        internalType: "struct TokenGatedMintParams",
        components: [
          {
            name: "allowedNftToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "allowedNftTokenIds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "mintPublic",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "feeRecipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "minterIfNotPayer",
        type: "address",
        internalType: "address",
      },
      {
        name: "quantity",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "mintSigned",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "feeRecipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "minterIfNotPayer",
        type: "address",
        internalType: "address",
      },
      {
        name: "quantity",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "mintParams",
        type: "tuple",
        internalType: "struct MintParams",
        components: [
          {
            name: "mintPrice",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "maxTotalMintableByWallet",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "startTime",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "endTime",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "dropStageIndex",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "maxTokenSupplyForStage",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "feeBps",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "restrictFeeRecipients",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "salt",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "updateAllowList",
    inputs: [
      {
        name: "allowListData",
        type: "tuple",
        internalType: "struct AllowListData",
        components: [
          {
            name: "merkleRoot",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "publicKeyURIs",
            type: "string[]",
            internalType: "string[]",
          },
          {
            name: "allowListURI",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateAllowedFeeRecipient",
    inputs: [
      {
        name: "feeRecipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowed",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateCreatorPayoutAddress",
    inputs: [
      {
        name: "payoutAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateDropURI",
    inputs: [
      {
        name: "dropURI",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updatePayer",
    inputs: [
      {
        name: "payer",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowed",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updatePublicDrop",
    inputs: [
      {
        name: "publicDrop",
        type: "tuple",
        internalType: "struct PublicDrop",
        components: [
          {
            name: "mintPrice",
            type: "uint80",
            internalType: "uint80",
          },
          {
            name: "startTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "endTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "maxTotalMintableByWallet",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "feeBps",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "restrictFeeRecipients",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateSignedMintValidationParams",
    inputs: [
      {
        name: "signer",
        type: "address",
        internalType: "address",
      },
      {
        name: "signedMintValidationParams",
        type: "tuple",
        internalType: "struct SignedMintValidationParams",
        components: [
          {
            name: "minMintPrice",
            type: "uint80",
            internalType: "uint80",
          },
          {
            name: "maxMaxTotalMintableByWallet",
            type: "uint24",
            internalType: "uint24",
          },
          {
            name: "minStartTime",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "maxEndTime",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "maxMaxTokenSupplyForStage",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "minFeeBps",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "maxFeeBps",
            type: "uint16",
            internalType: "uint16",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateTokenGatedDrop",
    inputs: [
      {
        name: "allowedNftToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "dropStage",
        type: "tuple",
        internalType: "struct TokenGatedDropStage",
        components: [
          {
            name: "mintPrice",
            type: "uint80",
            internalType: "uint80",
          },
          {
            name: "maxTotalMintableByWallet",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "startTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "endTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "dropStageIndex",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "maxTokenSupplyForStage",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "feeBps",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "restrictFeeRecipients",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AllowListUpdated",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "previousMerkleRoot",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "newMerkleRoot",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "publicKeyURI",
        type: "string[]",
        indexed: false,
        internalType: "string[]",
      },
      {
        name: "allowListURI",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AllowedFeeRecipientUpdated",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "feeRecipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "allowed",
        type: "bool",
        indexed: true,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CreatorPayoutAddressUpdated",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newPayoutAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "DropURIUpdated",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newDropURI",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PayerUpdated",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "payer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "allowed",
        type: "bool",
        indexed: true,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PublicDropUpdated",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "publicDrop",
        type: "tuple",
        indexed: false,
        internalType: "struct PublicDrop",
        components: [
          {
            name: "mintPrice",
            type: "uint80",
            internalType: "uint80",
          },
          {
            name: "startTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "endTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "maxTotalMintableByWallet",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "feeBps",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "restrictFeeRecipients",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SeaDropMint",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "minter",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "feeRecipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "payer",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "quantityMinted",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "unitMintPrice",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "feeBps",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "dropStageIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SignedMintValidationParamsUpdated",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "signer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "signedMintValidationParams",
        type: "tuple",
        indexed: false,
        internalType: "struct SignedMintValidationParams",
        components: [
          {
            name: "minMintPrice",
            type: "uint80",
            internalType: "uint80",
          },
          {
            name: "maxMaxTotalMintableByWallet",
            type: "uint24",
            internalType: "uint24",
          },
          {
            name: "minStartTime",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "maxEndTime",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "maxMaxTokenSupplyForStage",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "minFeeBps",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "maxFeeBps",
            type: "uint16",
            internalType: "uint16",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokenGatedDropStageUpdated",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "allowedNftToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "dropStage",
        type: "tuple",
        indexed: false,
        internalType: "struct TokenGatedDropStage",
        components: [
          {
            name: "mintPrice",
            type: "uint80",
            internalType: "uint80",
          },
          {
            name: "maxTotalMintableByWallet",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "startTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "endTime",
            type: "uint48",
            internalType: "uint48",
          },
          {
            name: "dropStageIndex",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "maxTokenSupplyForStage",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "feeBps",
            type: "uint16",
            internalType: "uint16",
          },
          {
            name: "restrictFeeRecipients",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "CreatorPayoutAddressCannotBeZeroAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "DuplicateFeeRecipient",
    inputs: [],
  },
  {
    type: "error",
    name: "DuplicatePayer",
    inputs: [],
  },
  {
    type: "error",
    name: "FeeRecipientCannotBeZeroAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "FeeRecipientNotAllowed",
    inputs: [],
  },
  {
    type: "error",
    name: "FeeRecipientNotPresent",
    inputs: [],
  },
  {
    type: "error",
    name: "IncorrectPayment",
    inputs: [
      {
        name: "got",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "want",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidFeeBps",
    inputs: [
      {
        name: "feeBps",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidProof",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidSignature",
    inputs: [
      {
        name: "recoveredSigner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidSignedEndTime",
    inputs: [
      {
        name: "got",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "maximum",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidSignedFeeBps",
    inputs: [
      {
        name: "got",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minimumOrMaximum",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidSignedMaxTokenSupplyForStage",
    inputs: [
      {
        name: "got",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "maximum",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidSignedMaxTotalMintableByWallet",
    inputs: [
      {
        name: "got",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "maximum",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidSignedMintPrice",
    inputs: [
      {
        name: "got",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minimum",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidSignedStartTime",
    inputs: [
      {
        name: "got",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minimum",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "MintQuantityCannotBeZero",
    inputs: [],
  },
  {
    type: "error",
    name: "MintQuantityExceedsMaxMintedPerWallet",
    inputs: [
      {
        name: "total",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "allowed",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "MintQuantityExceedsMaxSupply",
    inputs: [
      {
        name: "total",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "maxSupply",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "MintQuantityExceedsMaxTokenSupplyForStage",
    inputs: [
      {
        name: "total",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "maxTokenSupplyForStage",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "NotActive",
    inputs: [
      {
        name: "currentTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "startTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "endTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "OnlyINonFungibleSeaDropToken",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "PayerCannotBeZeroAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "PayerNotAllowed",
    inputs: [],
  },
  {
    type: "error",
    name: "PayerNotPresent",
    inputs: [],
  },
  {
    type: "error",
    name: "SignatureAlreadyUsed",
    inputs: [],
  },
  {
    type: "error",
    name: "SignedMintsMustRestrictFeeRecipients",
    inputs: [],
  },
  {
    type: "error",
    name: "SignerCannotBeZeroAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "SignerNotPresent",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenGatedDropAllowedNftTokenCannotBeDropToken",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenGatedDropAllowedNftTokenCannotBeZeroAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenGatedDropStageNotPresent",
    inputs: [],
  },
  {
    type: "error",
    name: "TokenGatedNotTokenOwner",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowedNftToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowedNftTokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "TokenGatedTokenIdAlreadyRedeemed",
    inputs: [
      {
        name: "nftContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowedNftToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "allowedNftTokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
] as const;

export class ISeaDrop__factory {
  static readonly abi = _abi;
  static createInterface(): ISeaDropInterface {
    return new utils.Interface(_abi) as ISeaDropInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISeaDrop {
    return new Contract(address, _abi, signerOrProvider) as ISeaDrop;
  }
}
