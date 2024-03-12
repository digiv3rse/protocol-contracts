/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PrintCommunityData,
  PrintCommunityDataInterface,
} from "../PrintCommunityData";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_printAccessControlAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_communityCreatorAddress",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_memberProfileIdToIndex",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
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
    name: "addCommunityMember",
    inputs: [
      {
        name: "_memberAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_memberProfileId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "communityCreator",
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
    name: "createCommunity",
    inputs: [
      {
        name: "_params",
        type: "tuple",
        internalType: "struct PrintLibrary.CreateCommunityParams",
        components: [
          {
            name: "validCreators",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "validOrigins",
            type: "uint8[]",
            internalType: "enum PrintLibrary.Origin[]",
          },
          {
            name: "validPrintTypes",
            type: "uint8[]",
            internalType: "enum PrintLibrary.PrintType[]",
          },
          {
            name: "valid20Addresses",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "valid20Thresholds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "uri",
            type: "string",
            internalType: "string",
          },
          {
            name: "steward",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getCommunityIsValidCreator",
    inputs: [
      {
        name: "_creator",
        type: "address",
        internalType: "address",
      },
      {
        name: "_communityId",
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
    name: "getCommunityIsValidOrigin",
    inputs: [
      {
        name: "_origin",
        type: "uint8",
        internalType: "enum PrintLibrary.Origin",
      },
      {
        name: "_communityId",
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
    name: "getCommunityIsValidPrintType",
    inputs: [
      {
        name: "_printType",
        type: "uint8",
        internalType: "enum PrintLibrary.PrintType",
      },
      {
        name: "_communityId",
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
    name: "getCommunityMembers",
    inputs: [
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct PrintLibrary.CommunityMember[]",
        components: [
          {
            name: "memberAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "memberProfileId",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCommunitySteward",
    inputs: [
      {
        name: "_communityId",
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
    name: "getCommunitySupply",
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
    name: "getCommunityURI",
    inputs: [
      {
        name: "_communityId",
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
    name: "getCommunityValid20AddressKeys",
    inputs: [
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
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
    name: "getCommunityValid20Threshold",
    inputs: [
      {
        name: "_tokenAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
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
    name: "getCommunityValidCreatorKeys",
    inputs: [
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
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
    name: "getCommunityValidOriginKeys",
    inputs: [
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8[]",
        internalType: "enum PrintLibrary.Origin[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCommunityValidPrintTypeKeys",
    inputs: [
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8[]",
        internalType: "enum PrintLibrary.PrintType[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getIsCommunityMember",
    inputs: [
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_memberProfileId",
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
    name: "getIsValidCommunityAddress",
    inputs: [
      {
        name: "_memberAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_communityId",
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
    name: "getMemberToIndex",
    inputs: [
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_memberProfileId",
        type: "uint256",
        internalType: "uint256",
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
    name: "printAccessControl",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract PrintAccessControl",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeCommunityMember",
    inputs: [
      {
        name: "_memberAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_communityId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_memberProfileId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setCommunityCreatorAddress",
    inputs: [
      {
        name: "_newCommunityCreatorAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPrintAccessControlAddress",
    inputs: [
      {
        name: "_newPrintAccessControlAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "updateCommunity",
    inputs: [
      {
        name: "_params",
        type: "tuple",
        internalType: "struct PrintLibrary.CreateCommunityParams",
        components: [
          {
            name: "validCreators",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "validOrigins",
            type: "uint8[]",
            internalType: "enum PrintLibrary.Origin[]",
          },
          {
            name: "validPrintTypes",
            type: "uint8[]",
            internalType: "enum PrintLibrary.PrintType[]",
          },
          {
            name: "valid20Addresses",
            type: "address[]",
            internalType: "address[]",
          },
          {
            name: "valid20Thresholds",
            type: "uint256[]",
            internalType: "uint256[]",
          },
          {
            name: "uri",
            type: "string",
            internalType: "string",
          },
          {
            name: "steward",
            type: "address",
            internalType: "address",
          },
        ],
      },
      {
        name: "communityId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "CommunityCreated",
    inputs: [
      {
        name: "communityId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "steward",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "uri",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CommunityMemberAdded",
    inputs: [
      {
        name: "communityId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "memberAddress",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "memberProfileId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CommunityMemberRemoved",
    inputs: [
      {
        name: "communityId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "memberProfileId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CommunityUpdated",
    inputs: [
      {
        name: "communityId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "steward",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "uri",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "InvalidAddress",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x6080346200015b57601f62002d4f38819003918201601f19168301916001600160401b03831184841017620001605780849260409485528339810103126200015b576200005a6020620000528362000176565b920162000176565b60016200006881546200018b565b601f811162000129575b506006621410d160ea1b0181556002546200008d906200018b565b601f8111620000f9575b50507f5072696e74436f6d6d756e697479446174610000000000000000000000000024600255600080546001600160a01b039384166001600160a01b03199182161790915560038054929093169116179055604051612b869081620001c98239f35b600060028152601f60208220920160051c8201915b8281106200011e57505062000097565b81815583016200010e565b600082815282601f60208320930160051c8301925b8381106200014f5750505062000072565b8281550183906200013e565b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200015b57565b90600182811c92168015620001bd575b6020831014620001a757565b634e487b7160e01b600052602260045260246000fd5b91607f16916200019b56fe60808060405260048036101561001457600080fd5b60e0600035811c92836306fdde0314612408575082630919ee13146123d65782631f9d4efd1461238b57826320e9461c146122c75782632227eaee1461228c57826325fc8afa146121fb57826327467ea2146121c85782632e9e355914612178578263309b36f31461214f5782634a915db6146120da57826354897640146120b157826354bafe181461207b57826365c26d3914611bb35782637199ee4814611af1578263891d2b5a14611aaa5782638a2a0c48146112c45782639579c7f51461121a57826395d89b4114611157578263987b75ca1461110a57826398fa18971461091a5750816399a8dfeb1461075c578163a3ebff36146105dd578163c1607e871461055b578163c5bd60ed1461053e578163d535c0851461017d575063ee764e111461014157600080fd5b346101785761014f36612563565b6000526007602052604060002090600052602052602060ff604060002054166040519015158152f35b600080fd5b346101785760209081600319360112610178576001600160401b03908035828111610178576101af9036908301612664565b906101ba81546128da565b9384825584600052600594858252604060002090600b82015560a08401946009865192019180519182116105295781906101f48454612495565b601f81116104f0575b508490601f831160011461048b57600092610480575b50508160011b916000199060031b1c19161790555b60c0830180518354600090815287845260408120600a0180546001600160a01b0319166001600160a01b03938416179055909391905b8551518110156102cc576102c79083546000528885528360406000200186610287838a51612916565b511660005285526040600020600160ff1982541617905583546000528885526102c26040600020876102ba848b51612916565b511690612958565b6128da565b61025e565b508695858401949160005b865151811015610347576103429085546000528987526103108a60406000200161030a610305848c51612916565b612993565b906129a0565b600160ff1982541617905585546000528987526102c2600260406000200161033c610305848c51612916565b906129d8565b6102d7565b509194509460009460408201955b8651518110156103c6576103c190855460005289875261038f6006604060002001610389610384848c51612916565b612a1e565b90612a2b565b600160ff1982541617905585546000528987526102c260036040600020016103bb610384848c51612916565b90612a43565b610355565b5084889488946000906080606087019601915b86515181101561044057806103f261043b928551612916565b5185546000528a875260076040600020018861040f848c51612916565b5116600052875260406000205584546000528986526102c26001604060002001886102ba848c51612916565b6103d9565b507f108aee40ed5ad1a364637349675096ac7f862898b565bf3fca42cc41213110868786855493511690519061047b60405192839283612a85565b0390a2005b015190508880610213565b60008581528681209350601f198516905b878282106104da5750509084600195949392106104c1575b505050811b019055610228565b015160001960f88460031b161c191690558880806104b4565b600185968293968601518155019501930161049c565b610519908560005286600020601f85018c1c81019188861061051f575b601f018c1c01906128ff565b896101fd565b909150819061050d565b604185634e487b7160e01b6000525260246000fd5b346101785760003660031901126101785760209054604051908152f35b346101785760209081600319360112610178573560005260058152604060002090604051908181845491828152019360005281600020916000905b8282106105bd576105b9856105ad81890382612500565b604051918291826125a3565b0390f35b83546001600160a01b031686529485019460019384019390910190610596565b34610178576105eb366128b0565b600354919390916001600160a01b0391908216330361074d578160405194610612866124cf565b16938481526020928382019085825287600052600585526008604060002001805490600160401b821015610738579061065091600182018155612af5565b939093610724575183546001600160a01b03191691161782555160019182015560008481526007845260408082208883528552808220805460ff19908116851790915587835260088087528284208a8552875282842080549092169094179055600585529020015460001981019190821161070f5750917f9fe922953be54f91646180c5c408baf612dfbf493f115d665cdcf064d8dde6fb939160409382600052600682528460002087600052825284600020558351928352820152a2005b601190634e487b7160e01b6000525260246000fd5b600085634e487b7160e01b82525260246000fd5b604186634e487b7160e01b6000525260246000fd5b60405163e6c4247b60e01b8152fd5b346101785761076a366128b0565b60035491926001600160a01b0392831633036109095783600052602092600584526040600020836000526006855260406000208660005285526008604060002054910190815490600019918281019081116108f4576107d36107cd899286612af5565b50612b11565b858151166107e18487612af5565b5080546001600160a01b031916909117905501805160016108028487612af5565b50015551600052600687526040600020886000528752604060002055815480156108df5701906108328282612af5565b9890986108cb57506000600189827f59289caa7585e2541fc6678f307b73995e29e07615380ad3163869696e3b6c7e9a9b5501555582600052600684526040600020866000528452600060408120558260005260078452604060002086600052845260406000209160ff1992838154169055166000526008835260406000208560005283526040600020908154169055604051908152a2005b600090634e487b7160e01b82525260246000fd5b603189634e487b7160e01b6000525260246000fd5b60118a634e487b7160e01b6000525260246000fd5b60405163e6c4247b60e01b81528590fd5b3461017857602091826003193601126101785735600052600582528160026040600020019160405190819283918186549485815201908196600052826000209460005b81601f820110610e975784610a7b975493838310610e7b575b838310610e5c575b838310610e3d575b838310610e1e575b838310610e00575b838310610de1575b838310610dc2575b838310610da3575b838310610d84575b838310610d65575b838310610d46575b838310610d27575b838310610d08575b838310610ce9575b838310610cca575b838310610cab575b838310610c8c575b838310610c6d575b838310610c4e575b838310610c2f575b838310610c10575b838310610bf1575b838310610bd2575b838310610bb3575b838310610b94575b838310610b75575b838310610b56575b838310610b37575b838310610b1a575b50828210610afd575b828210610ae0575b5010610aca575b5090509392930383612500565b604051928392818401908285525180915260408401929160005b828110610aa457505050500390f35b9193839550908082610aba6001948397516128a3565b0195019101918594939192610a95565b81610ad79160f81c6128a3565b01859087610a6e565b84610af46001939660ff8760f01c166128a3565b01930184610a67565b84610b116001939660ff8760e81c166128a3565b01930184610a5f565b94610b2d8160ff87600196991c166128a3565b019301848b610a56565b91948181610b4d60019360ff8960d81c166128a3565b01950191610a4e565b91948181610b6c60019360ff8960d01c166128a3565b01950191610a46565b91948181610b8b60019360ff8960c81c166128a3565b01950191610a3e565b91948181610baa60019360ff8960c01c166128a3565b01950191610a36565b91948181610bc960019360ff8960b81c166128a3565b01950191610a2e565b91948181610be860019360ff8960b01c166128a3565b01950191610a26565b91948181610c0760019360ff8960a81c166128a3565b01950191610a1e565b91948181610c2660019360ff8960a01c166128a3565b01950191610a16565b91948181610c4560019360ff8960981c166128a3565b01950191610a0e565b91948181610c6460019360ff8960901c166128a3565b01950191610a06565b91948181610c8360019360ff8960881c166128a3565b019501916109fe565b91948181610ca260019360ff8960801c166128a3565b019501916109f6565b91948181610cc160019360ff8960781c166128a3565b019501916109ee565b91948181610ce060019360ff8960701c166128a3565b019501916109e6565b91948181610cff60019360ff8960681c166128a3565b019501916109de565b91948181610d1e60019360ff8960601c166128a3565b019501916109d6565b91948181610d3d60019360ff8960581c166128a3565b019501916109ce565b91948181610d5c60019360ff8960501c166128a3565b019501916109c6565b91948181610d7b60019360ff8960481c166128a3565b019501916109be565b91948181610d9a60019360ff8960401c166128a3565b019501916109b6565b91948181610db960019360ff8960381c166128a3565b019501916109ae565b91948181610dd860019360ff8960301c166128a3565b019501916109a6565b91948181610df760019360ff8960281c166128a3565b0195019161099e565b91948181610e1560019360ff89851c166128a3565b01950191610996565b91948181610e3460019360ff8960181c166128a3565b0195019161098e565b91948181610e5360019360ff8960101c166128a3565b01950191610986565b91948181610e7260019360ff8960081c166128a3565b0195019161097e565b91948181610e8e60019360ff89166128a3565b01950191610976565b919395945091600161040087926110f888546110ea60ff610eba858285166128a3565b610ecb888601828560081c166128a3565b610edd60408601828560101c166128a3565b61107c8b61103487610fec8c610fa46060610eff8186018a8d60181c166128a3565b610f126080938a8d868901921c166128a3565b888b61018060a097610f2b898201858560281c166128a3565b610f4f60c09b610f428d8401878760301c166128a3565b8201858560381c166128a3565b610f626101008201858560401c166128a3565b610f756101208201858560481c166128a3565b610f886101408201858560501c166128a3565b610f9b6101608201858560581c166128a3565b01921c166128a3565b610fb76101a08c01888b60681c166128a3565b610fca6101c08c01888b60701c166128a3565b610fdd6101e08c01888b60781c166128a3565b86896102008d01921c166128a3565b610fff6102208a01868960881c166128a3565b6110126102408a01868960901c166128a3565b6110256102608a01868960981c166128a3565b84876102808b01921c166128a3565b6110476102a08801848760a81c166128a3565b61105a6102c08801848760b01c166128a3565b61106d6102e08801848760b81c166128a3565b82856103008901921c166128a3565b61108f6103208601828560c81c166128a3565b6110a26103408601828560d01c166128a3565b6110b56103608601828560d81c166128a3565b6110c76103808601848d1c83166128a3565b6110da6103a08601828560e81c166128a3565b6103c08501908360f01c166128a3565b6103e083019060f81c6128a3565b0195019101918694929593919561095d565b34610178576040366003190112610178576001600160a01b0361112b612579565b1660005260086020526040600020602435600052602052602060ff604060002054166040519015158152f35b3461017857600036600319011261017857604051600060018281549261117c84612495565b928383526020948582821691826000146111fa5750506001146111bb575b506111a792500383612500565b6105b9604051928284938452830190612523565b8491508060005281600020906000915b8583106111e25750506111a793508201018561119a565b805483890185015287945086939092019181016111cb565b60ff1916858201526111a795151560051b850101925087915061119a9050565b503461017857602036600319011261017857611234612579565b600054604051630935e01b60e21b8152338185015290926001600160a01b0392916020816024818789165afa9081156112b85760009161128a575b501561074d57506001600160a01b0319909216911617600055005b6112ab915060203d81116112b1575b6112a38183612500565b810190612b38565b8561126f565b503d611299565b6040513d6000823e3d90fd5b3461017857602091826003193601126101785735600052600582528160036040600020019160405190819283918186549485815201908196600052826000209460005b81601f820110611837578461142497549383831061181b575b8383106117fc575b8383106117dd575b8383106117be575b8383106117a0575b838310611781575b838310611762575b838310611743575b838310611724575b838310611705575b8383106116e6575b8383106116c7575b8383106116a8575b838310611689575b83831061166a575b83831061164b575b83831061162c575b83831061160d575b8383106115ee575b8383106115cf575b8383106115b0575b838310611591575b838310611572575b838310611553575b838310611534575b838310611515575b8383106114f6575b8383106114d7575b8383106114ba575b5082821061149d575b828210611480575b5010611473575090509392930383612500565b604051928392818401908285525180915260408401929160005b82811061144d57505050500390f35b9193839550908082611463600194839751612880565b019501910191859493919261143e565b81610ad79160f81c612880565b846114946001939660ff8760f01c16612880565b01930184611411565b846114b16001939660ff8760e81c16612880565b01930184611409565b946114cd8160ff87600196991c16612880565b019301848b611400565b919481816114ed60019360ff8960d81c16612880565b019501916113f8565b9194818161150c60019360ff8960d01c16612880565b019501916113f0565b9194818161152b60019360ff8960c81c16612880565b019501916113e8565b9194818161154a60019360ff8960c01c16612880565b019501916113e0565b9194818161156960019360ff8960b81c16612880565b019501916113d8565b9194818161158860019360ff8960b01c16612880565b019501916113d0565b919481816115a760019360ff8960a81c16612880565b019501916113c8565b919481816115c660019360ff8960a01c16612880565b019501916113c0565b919481816115e560019360ff8960981c16612880565b019501916113b8565b9194818161160460019360ff8960901c16612880565b019501916113b0565b9194818161162360019360ff8960881c16612880565b019501916113a8565b9194818161164260019360ff8960801c16612880565b019501916113a0565b9194818161166160019360ff8960781c16612880565b01950191611398565b9194818161168060019360ff8960701c16612880565b01950191611390565b9194818161169f60019360ff8960681c16612880565b01950191611388565b919481816116be60019360ff8960601c16612880565b01950191611380565b919481816116dd60019360ff8960581c16612880565b01950191611378565b919481816116fc60019360ff8960501c16612880565b01950191611370565b9194818161171b60019360ff8960481c16612880565b01950191611368565b9194818161173a60019360ff8960401c16612880565b01950191611360565b9194818161175960019360ff8960381c16612880565b01950191611358565b9194818161177860019360ff8960301c16612880565b01950191611350565b9194818161179760019360ff8960281c16612880565b01950191611348565b919481816117b560019360ff89851c16612880565b01950191611340565b919481816117d460019360ff8960181c16612880565b01950191611338565b919481816117f360019360ff8960101c16612880565b01950191611330565b9194818161181260019360ff8960081c16612880565b01950191611328565b9194818161182e60019360ff8916612880565b01950191611320565b91939594509160016104008792611a988854611a8a60ff61185a85828516612880565b61186b888601828560081c16612880565b61187d60408601828560101c16612880565b611a1c8b6119d48761198c8c611944606061189f8186018a8d60181c16612880565b6118b26080938a8d868901921c16612880565b888b61018060a0976118cb898201858560281c16612880565b6118ef60c09b6118e28d8401878760301c16612880565b8201858560381c16612880565b6119026101008201858560401c16612880565b6119156101208201858560481c16612880565b6119286101408201858560501c16612880565b61193b6101608201858560581c16612880565b01921c16612880565b6119576101a08c01888b60681c16612880565b61196a6101c08c01888b60701c16612880565b61197d6101e08c01888b60781c16612880565b86896102008d01921c16612880565b61199f6102208a01868960881c16612880565b6119b26102408a01868960901c16612880565b6119c56102608a01868960981c16612880565b84876102808b01921c16612880565b6119e76102a08801848760a81c16612880565b6119fa6102c08801848760b01c16612880565b611a0d6102e08801848760b81c16612880565b82856103008901921c16612880565b611a2f6103208601828560c81c16612880565b611a426103408601828560d01c16612880565b611a556103608601828560d81c16612880565b611a676103808601848d1c8316612880565b611a7a6103a08601828560e81c16612880565b6103c08501908360f01c16612880565b6103e083019060f81c612880565b01950191019186949295939195611307565b5034610178576040366003190112610178573560058110156101785760ff611ae56020926024356000526005845260056040600020016129a0565b54166040519015158152f35b503461017857602090816003193601126101785735600052600581526008604060002001908154611b21816125e7565b90611b2f6040519283612500565b8082528282018094600052836000206000915b838310611b965760408051878152865181890181905289928201908960005b828110611b6e5784840385f35b855180516001600160a01b031685528201518483015294810194604090930192600101611b61565b600286600192611ba585612b11565b815201920192019190611b42565b5034610178576040366003190112610178576001600160401b0390803582811161017857611be49036908301612664565b9060039260018060a01b03845416330361206b57602435600052600560205260406000209060a08401519060098301918051918211610529578190611c298454612495565b601f811161202e575b50602090601f8311600114611fc957600092611fbe575b50508160011b9160001990881b1c19161790555b60c083018051600a830180546001600160a01b0319166001600160a01b03929092169190911790559360005b8254811015611cd05780611ca0611ccb9285612940565b905490841b1c6001600160a01b0316600090815284860160205260409020805460ff191690556128da565b611c89565b5091909360005b6002860154811015611d1b5780611d0960ff611cf9611d169460028b016129b8565b905490881b1c16600589016129a0565b805460ff191690556128da565b611cd7565b50909260005b83860154811015611d565780611d0960ff611d41611d5194888b016129b8565b905490881b1c1660068901612a2b565b611d21565b50909260005b6001860154811015611da35780611d79611d9e9260018901612940565b905490861b1c6001600160a01b031660009081526007880160205260408120556128da565b611d5c565b508493611daf85612aaa565b60028501805460008255611dc291612ad0565b848401805460008255611dd491612ad0565b611de060018601612aaa565b60005b83518051821015611e4457611e3f91906001600160a01b0390611e07908390612916565b51166000528387016020526040600020600160ff198254161790556102c260018060a01b03611e37838851612916565b511688612958565b611de3565b868660208701858860005b83518051821015611ea15790611e77611e6e61030583611e9c95612916565b600589016129a0565b600160ff198254161790556102c2611e93610305838851612916565b600289016129d8565b611e4f565b509193925060408101915060005b82518051821015611f005790611ed7611ece61038483611efb95612916565b60068901612a2b565b600160ff198254161790556102c2611ef3610384838751612916565b868901612a43565b611eaf565b868660608501608086018660005b835151811015611f755780611f27611f70928551612916565b5185516001600160a01b0390611f3e908490612916565b5116600052600788016020526040600020556102c260018060a01b03611f65838851612916565b511660018901612958565b611f0e565b50835160a09190910151604051602435927faa004ad71d0b6b5c581dd42a9b387ff14954d263fa1a8d367c2218a7953b01b292829161047b91906001600160a01b031683612a85565b015190508780611c49565b6000858152602081209350601f198516905b8181106120165750908460019594939210611ffe575b505050811b019055611c5d565b0151600019838a1b60f8161c19169055878080611ff1565b92936020600181928786015181550195019301611fdb565b61205b90856000526020600020601f850160051c81019160208610612061575b601f0160051c01906128ff565b88611c32565b909150819061204e565b5060405163e6c4247b60e01b8152fd5b503461017857602036600319011261017857356000526005602052602060018060a01b03600a6040600020015416604051908152f35b34610178576000366003190112610178576000546040516001600160a01b039091168152602090f35b5034610178576020908160031936011261017857356000526005815260018060406000200191604051918282855491828152019460005282600020926000905b828210612131576105b9866105ad818a0382612500565b84546001600160a01b0316875295860195938301939083019061211a565b34610178576000366003190112610178576003546040516001600160a01b039091168152602090f35b503461017857604036600319011261017857612192612579565b9060243560005260056020526040600020019060018060a01b0316600052602052602060ff604060002054166040519015158152f35b34610178576121d636612563565b9060005260066020526040600020906000526020526020604060002054604051908152f35b503461017857602036600319011261017857612215612579565b600054604051630935e01b60e21b815233818501526001600160a01b0393916020908290602490829088165afa9081156112b85760009161226e575b501561074d57501660018060a01b03196003541617600355600080f35b612286915060203d81116112b1576112a38183612500565b84612251565b5034610178576040366003190112610178573560078110156101785760ff611ae5602092602435600052600584526006604060002001612a2b565b503461017857602090816003193601126101785735600052600581526009604060002001906040519182600082546122fe81612495565b9384845260019186838216918260001461236957505060011461232a575b50506111a792500383612500565b85925060005281600020906000915b8583106123515750506111a79350820101858061231c565b80548389018501528794508693909201918101612339565b92509350506111a794915060ff191682840152151560051b820101858061231c565b34610178576040366003190112610178576123a4612579565b602435600052600560205260076040600020019060018060a01b03166000526020526020604060002054604051908152f35b34610178576123e436612563565b60005260066020526040600020906000526020526020604060002054604051908152f35b346101785760003660031901126101785760025460008261242883612495565b918282526020936001908582821691826000146111fa57505060011461245557506111a792500383612500565b849150600260005281600020906000915b85831061247d5750506111a793508201018561119a565b80548389018501528794508693909201918101612466565b90600182811c921680156124c5575b60208310146124af57565b634e487b7160e01b600052602260045260246000fd5b91607f16916124a4565b604081019081106001600160401b038211176124ea57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b038211908210176124ea57604052565b919082519283825260005b84811061254f575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161252e565b6040906003190112610178576004359060243590565b600435906001600160a01b038216820361017857565b35906001600160a01b038216820361017857565b6020908160408183019282815285518094520193019160005b8281106125ca575050505090565b83516001600160a01b0316855293810193928101926001016125bc565b6001600160401b0381116124ea5760051b60200190565b9080601f83011215610178576020908235612618816125e7565b936126266040519586612500565b818552838086019260051b820101928311610178578301905b82821061264d575050505090565b8380916126598461258f565b81520191019061263f565b919060e0838203126101785760408051916001600160401b0360e08401818111858210176124ea5783528395803582811161017857836126a59183016125fe565b85526020928382013583811161017857820181601f82011215610178578035906126ce826125e7565b906126db88519283612500565b82825286820187600594851b83010191858311610178578801905b82821061286957505050858801528583013584811161017857830182601f8201121561017857803590612728826125e7565b9161273589519384612500565b8083528780840191851b83010191858311610178578801905b8282106128515750505086880152606083013584811161017857826127749185016125fe565b6060880152608083013584811161017857830182601f82011215610178578035918661279f846125e7565b936127ac8a519586612500565b808552818501921b830101918483116101785787809101915b8383106128415750505050608087015260a08201358381116101785782019481601f870112156101785785359384116124ea57519061280d601f8501601f1916860183612500565b838252848487010111610178576000848460c0979561283c97899701838601378301015260a08601520161258f565b910152565b82358152918101918891016127c5565b8135600781101561017857815290880190880161274e565b8135858110156101785781529088019088016126f6565b90600782101561288d5752565b634e487b7160e01b600052602160045260246000fd5b90600582101561288d5752565b6060906003190112610178576004356001600160a01b038116810361017857906024359060443590565b60001981146128e95760010190565b634e487b7160e01b600052601160045260246000fd5b81811061290a575050565b600081556001016128ff565b805182101561292a5760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b805482101561292a5760005260206000200190600090565b8054600160401b8110156124ea5761297591600182018155612940565b60018060a09493941b038084549260031b9316831b921b1916179055565b51600581101561288d5790565b90600581101561288d57600052602052604060002090565b919091805483101561292a57600052601f60206000208360051c01921690565b8054600160401b8110156124ea576129f5916001820181556129b8565b9091600581101561288d57612a1a9183549060ff809160031b9316831b921b19161790565b9055565b51600781101561288d5790565b90600781101561288d57600052602052604060002090565b8054600160401b8110156124ea57612a60916001820181556129b8565b9091600781101561288d57612a1a9183549060ff809160031b9316831b921b19161790565b6001600160a01b039091168152604060208201819052612aa792910190612523565b90565b80546000825580612ab9575050565b612ace916000526020600020908101906128ff565b565b9080612ada575050565b612ace91600052601f6020600020910160051c8101906128ff565b805482101561292a5760005260206000209060011b0190600090565b90604051612b1e816124cf565b82546001600160a01b031681526001909201546020830152565b9081602091031261017857518015158103610178579056fea2646970667358221220907456a79dad0919290c39d89dfcd929f1b0ac4043d5073b395792d60156bb8364736f6c63430008150033";

type PrintCommunityDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrintCommunityDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrintCommunityData__factory extends ContractFactory {
  constructor(...args: PrintCommunityDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _printAccessControlAddress: string,
    _communityCreatorAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<PrintCommunityData> {
    return super.deploy(
      _printAccessControlAddress,
      _communityCreatorAddress,
      overrides || {}
    ) as Promise<PrintCommunityData>;
  }
  override getDeployTransaction(
    _printAccessControlAddress: string,
    _communityCreatorAddress: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _printAccessControlAddress,
      _communityCreatorAddress,
      overrides || {}
    );
  }
  override attach(address: string): PrintCommunityData {
    return super.attach(address) as PrintCommunityData;
  }
  override connect(signer: Signer): PrintCommunityData__factory {
    return super.connect(signer) as PrintCommunityData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrintCommunityDataInterface {
    return new utils.Interface(_abi) as PrintCommunityDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PrintCommunityData {
    return new Contract(address, _abi, signerOrProvider) as PrintCommunityData;
  }
}
