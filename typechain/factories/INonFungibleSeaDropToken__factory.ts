/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INonFungibleSeaDropToken,
  INonFungibleSeaDropTokenInterface,
} from "../INonFungibleSeaDropToken";

const _abi = [
  {
    type: "function",
    name: "baseURI",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "contractURI",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMintStats",
    inputs: [
      {
        name: "minter",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "minterNumMinted",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "currentTotalSupply",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "maxSupply",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "maxSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mintSeaDrop",
    inputs: [
      {
        name: "minter",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "provenanceHash",
    inputs: [],
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
    name: "royaltyAddress",
    inputs: [],
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
    name: "royaltyBasisPoints",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "royaltyInfo",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "salePrice",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "royaltyAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setBaseURI",
    inputs: [
      {
        name: "tokenURI",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setContractURI",
    inputs: [
      {
        name: "newContractURI",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMaxSupply",
    inputs: [
      {
        name: "newMaxSupply",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setProvenanceHash",
    inputs: [
      {
        name: "newProvenanceHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRoyaltyInfo",
    inputs: [
      {
        name: "newInfo",
        type: "tuple",
        internalType: "struct ISeaDropTokenContractMetadata.RoyaltyInfo",
        components: [
          {
            name: "royaltyAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "royaltyBps",
            type: "uint96",
            internalType: "uint96",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
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
    name: "updateAllowList",
    inputs: [
      {
        name: "seaDropImpl",
        type: "address",
        internalType: "address",
      },
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
        name: "seaDropImpl",
        type: "address",
        internalType: "address",
      },
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
    name: "updateAllowedSeaDrop",
    inputs: [
      {
        name: "allowedSeaDrop",
        type: "address[]",
        internalType: "address[]",
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
        name: "seaDropImpl",
        type: "address",
        internalType: "address",
      },
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
        name: "seaDropImpl",
        type: "address",
        internalType: "address",
      },
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
        name: "seaDropImpl",
        type: "address",
        internalType: "address",
      },
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
        name: "seaDropImpl",
        type: "address",
        internalType: "address",
      },
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
        name: "seaDropImpl",
        type: "address",
        internalType: "address",
      },
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
        name: "seaDropImpl",
        type: "address",
        internalType: "address",
      },
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
    name: "AllowedSeaDropUpdated",
    inputs: [
      {
        name: "allowedSeaDrop",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BatchMetadataUpdate",
    inputs: [
      {
        name: "_fromTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_toTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ContractURIUpdated",
    inputs: [
      {
        name: "newContractURI",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MaxSupplyUpdated",
    inputs: [
      {
        name: "newMaxSupply",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProvenanceHashUpdated",
    inputs: [
      {
        name: "previousHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "newHash",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoyaltyInfoUpdated",
    inputs: [
      {
        name: "receiver",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "bps",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "CannotExceedMaxSupplyOfUint64",
    inputs: [
      {
        name: "newMaxSupply",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidRoyaltyBasisPoints",
    inputs: [
      {
        name: "basisPoints",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "OnlyAllowedSeaDrop",
    inputs: [],
  },
  {
    type: "error",
    name: "ProvenanceHashCannotBeSetAfterMintStarted",
    inputs: [],
  },
  {
    type: "error",
    name: "RoyaltyAddressCannotBeZeroAddress",
    inputs: [],
  },
] as const;

export class INonFungibleSeaDropToken__factory {
  static readonly abi = _abi;
  static createInterface(): INonFungibleSeaDropTokenInterface {
    return new utils.Interface(_abi) as INonFungibleSeaDropTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INonFungibleSeaDropToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as INonFungibleSeaDropToken;
  }
}
