/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721ACloneable,
  ERC721ACloneableInterface,
} from "../../ERC721ACloneable.sol/ERC721ACloneable";

const _abi = [
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
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
    name: "getApproved",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
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
    name: "isApprovedForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
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
    name: "name",
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
    name: "ownerOf",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
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
    name: "safeTransferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "approved",
        type: "bool",
        internalType: "bool",
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
    name: "symbol",
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
    name: "tokenURI",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
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
    name: "totalSupply",
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
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ConsecutiveTransfer",
    inputs: [
      {
        name: "fromTokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "toTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "from",
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
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
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
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ApprovalCallerNotOwnerNorApproved",
    inputs: [],
  },
  {
    type: "error",
    name: "ApprovalQueryForNonexistentToken",
    inputs: [],
  },
  {
    type: "error",
    name: "BalanceQueryForZeroAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "MintERC2309QuantityExceedsLimit",
    inputs: [],
  },
  {
    type: "error",
    name: "MintToZeroAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "MintZeroQuantity",
    inputs: [],
  },
  {
    type: "error",
    name: "OwnerQueryForNonexistentToken",
    inputs: [],
  },
  {
    type: "error",
    name: "OwnershipNotInitializedForExtraData",
    inputs: [],
  },
  {
    type: "error",
    name: "TransferCallerNotOwnerNorApproved",
    inputs: [],
  },
  {
    type: "error",
    name: "TransferFromIncorrectOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "TransferToNonERC721ReceiverImplementer",
    inputs: [],
  },
  {
    type: "error",
    name: "TransferToZeroAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "URIQueryForNonexistentToken",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610c5d908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c806301ffc9a7146100f757806306fdde03146100f2578063081812fc146100ed578063095ea7b3146100e857806318160ddd146100e357806323b872dd146100de57806342842e0e146100d95780636352211e146100d457806370a08231146100cf57806395d89b41146100ca578063a22cb465146100c5578063b88d4fde146100c0578063c87b56dd146100bb5763e985e9c5146100b657600080fd5b6107ff565b610796565b61070e565b610618565b610555565b6104fb565b6104cc565b6104a4565b61048b565b610433565b610361565b6102e1565b6101d5565b610113565b6001600160e01b031981160361010e57565b600080fd5b3461010e57602036600319011261010e576020600435610132816100fc565b63ffffffff60e01b166301ffc9a760e01b8114908115610170575b811561015f575b506040519015158152f35b635b5e139f60e01b14905038610154565b6380ac58cd60e01b8114915061014d565b919082519283825260005b8481106101ad575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161018c565b9060206101d2928181520190610181565b90565b3461010e576000806003193601126102de5760405190806003549060019180831c928082169283156102d4575b60209283861085146102c057858852602088019490811561029f5750600114610246575b61024287610236818903826106d0565b604051918291826101c1565b0390f35b600360005294509192917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b83861061028e5750505091019050610236826102423880610226565b805485870152948201948101610272565b60ff191685525050505090151560051b019050610236826102423880610226565b634e487b7160e01b82526022600452602482fd5b93607f1693610202565b80fd5b3461010e57602036600319011261010e576004356102fe816108f2565b15610323576000526007602052602060018060a01b0360406000205416604051908152f35b6040516333d1c03960e21b8152600490fd5b600435906001600160a01b038216820361010e57565b602435906001600160a01b038216820361010e57565b3461010e57604036600319011261010e5761037a610335565b602435906001600160a01b038061039084610881565b16918233036103fa575b6103d1816103b2866000526007602052604060002090565b80546001600160a01b0319166001600160a01b03909216919091179055565b16907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600080a4005b82600052600860205261041c60ff61041633604060002061086a565b54161590565b1561039a576040516367d9dca160e11b8152600490fd5b3461010e57600036600319011261010e5760206001546002549003604051908152f35b606090600319011261010e576001600160a01b0390600435828116810361010e5791602435908116810361010e579060443590565b3461010e576104a261049c36610456565b9161091b565b005b3461010e576104a26104b536610456565b90604051926104c3846106b0565b60008452610ac4565b3461010e57602036600319011261010e5760206001600160a01b036104f2600435610881565b16604051908152f35b3461010e57602036600319011261010e576001600160a01b0361051c610335565b168015610543576000526006602052602060018060401b0360406000205416604051908152f35b6040516323d3ad8160e21b8152600490fd5b3461010e576000806003193601126102de5760405190806004549060019180831c9280821692831561060e575b60209283861085146102c057858852602088019490811561029f57506001146105b55761024287610236818903826106d0565b600460005294509192917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8386106105fd5750505091019050610236826102423880610226565b8054858701529482019481016105e1565b93607f1693610582565b3461010e57604036600319011261010e57610631610335565b6024359081151580920361010e5733600052600860205261065681604060002061086a565b60ff1981541660ff841617905560405191825260018060a01b0316907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176106cb57604052565b61069a565b601f909101601f19168101906001600160401b038211908210176106cb57604052565b6001600160401b0381116106cb57601f01601f191660200190565b3461010e57608036600319011261010e57610727610335565b61072f61034b565b606435916001600160401b03831161010e573660238401121561010e5782600401359161075b836106f3565b9261076960405194856106d0565b808452366024828701011161010e5760208160009260246104a29801838801378501015260443591610ac4565b3461010e57602036600319011261010e576107b26004356108f2565b156107ed5760006040516107c5816106b0565b526102426040516107d5816106b0565b60008152604051918291602083526020830190610181565b604051630a14c4b560e41b8152600490fd5b3461010e57604036600319011261010e57602060ff61084461081f610335565b61082761034b565b6001600160a01b039091166000908152600885526040902061086a565b54166040519015158152f35b6001600160a01b0316600090815260066020526040902090565b9060018060a01b0316600052602052604060002090565b80600154811061089e575b604051636f96cda160e11b8152600490fd5b60009081526005906020918083526040928383205494600160e01b8616156108c9575050505061088c565b93929190935b85156108dd57505050505090565b600019018083528185528383205495506108cf565b60015481109081610901575090565b90506000526005602052600160e01b604060002054161590565b9061092583610881565b6001600160a01b0383811692828216849003610ab35760008681526007602052604090208054909261096a6001600160a01b03881633908114908414171590565b1590565b610a6a575b8216958615610a58576109ba9361098b92610a4e575b50610850565b805460001901905561099c81610850565b805460010190556001600160a01b03164260a01b17600160e11b1790565b6109ce856000526005602052604060002090565b55600160e11b811615610a04575b507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4565b60018401610a1c816000526005602052604060002090565b5415610a29575b506109dc565b6001548114610a2357610a46906000526005602052604060002090565b553880610a23565b6000905538610985565b604051633a954ecd60e21b8152600490fd5b610a9c610966610a9533610a908b60018060a01b03166000526008602052604060002090565b61086a565b5460ff1690565b1561096f57604051632ce44b5f60e11b8152600490fd5b60405162a1148160e81b8152600490fd5b929190610ad282828661091b565b803b610adf575b50505050565b610ae893610b7e565b15610af65738808080610ad9565b6040516368d2bf6b60e11b8152600490fd5b9081602091031261010e57516101d2816100fc565b6001600160a01b0391821681529116602082015260408101919091526080606082018190526101d292910190610181565b3d15610b79573d90610b5f826106f3565b91610b6d60405193846106d0565b82523d6000602084013e565b606090565b92602091610ba7936000604051809681958294630a85bd0160e11b9a8b85523360048601610b1d565b03926001600160a01b03165af160009181610bf7575b50610be957610bca610b4e565b80519081610be4576040516368d2bf6b60e11b8152600490fd5b602001fd5b6001600160e01b0319161490565b610c1991925060203d8111610c20575b610c1181836106d0565b810190610b08565b9038610bbd565b503d610c0756fea264697066735822122080da6922ac8a86e07bc62d2a28d5f96d5544810245f4868ecac66d396923add164736f6c63430008150033";

type ERC721ACloneableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ACloneableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ACloneable__factory extends ContractFactory {
  constructor(...args: ERC721ACloneableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ERC721ACloneable> {
    return super.deploy(overrides || {}) as Promise<ERC721ACloneable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721ACloneable {
    return super.attach(address) as ERC721ACloneable;
  }
  override connect(signer: Signer): ERC721ACloneable__factory {
    return super.connect(signer) as ERC721ACloneable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ACloneableInterface {
    return new utils.Interface(_abi) as ERC721ACloneableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ACloneable {
    return new Contract(address, _abi, signerOrProvider) as ERC721ACloneable;
  }
}
