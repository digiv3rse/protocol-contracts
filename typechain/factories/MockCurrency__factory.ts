/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockCurrency, MockCurrencyInterface } from "../MockCurrency";

const _abi = [
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
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
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
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
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decreaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "subtractedValue",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "increaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "addedValue",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "testMockCurrency",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "transfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
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
    stateMutability: "nonpayable",
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
        name: "amount",
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
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
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
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x6080346200030d576040906001600160401b0390808301828111828210176200020d578352600881526020916743757272656e637960c01b838301528351848101818110838211176200020d578552600390818152624d435960e81b858201528351908382116200020d578254916001958684811c9416801562000302575b88851014620002ec578190601f9485811162000296575b5088908583116001146200022f5760009262000223575b505060001982861b1c191690861b1783555b80519384116200020d5760049586548681811c9116801562000202575b82821014620001ed57838111620001a2575b508092851160011462000134575093839491849260009562000128575b50501b92600019911b1c19161790555b5161095e9081620003138239f35b0151935038806200010a565b92919084601f1981168860005285600020956000905b898383106200018757505050106200016c575b50505050811b0190556200011a565b01519060f884600019921b161c19169055388080806200015d565b8587015189559097019694850194889350908101906200014a565b87600052816000208480880160051c820192848910620001e3575b0160051c019087905b828110620001d6575050620000ed565b60008155018790620001c6565b92508192620001bd565b602288634e487b7160e01b6000525260246000fd5b90607f1690620000db565b634e487b7160e01b600052604160045260246000fd5b015190503880620000ac565b90889350601f19831691876000528a6000209260005b8c8282106200027f575050841162000266575b505050811b018355620000be565b015160001983881b60f8161c1916905538808062000258565b8385015186558c9790950194938401930162000245565b90915085600052886000208580850160051c8201928b8610620002e2575b918a91869594930160051c01915b828110620002d257505062000095565b600081558594508a9101620002c2565b92508192620002b4565b634e487b7160e01b600052602260045260246000fd5b93607f16936200007e565b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461055357508163095ea7b31461052957816318160ddd1461050a57816323b872dd14610440578163313ce5671461042457816339509351146103d457816340c10f191461032357816370a08231146102ec5781637f860ce6146102d857816395d89b41146101d7578163a457c2d71461012f57508063a9059cbb146100ff5763dd62ed3e146100b457600080fd5b346100fb57806003193601126100fb57806020926100d0610656565b6100d8610671565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b50346100fb57806003193601126100fb5760209061012861011e610656565b60243590336106aa565b5160018152f35b905082346101d457826003193601126101d45761014a610656565b918360243592338152600160205281812060018060a01b0386168252602052205490828210610183576020856101288585038733610806565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b8383346100fb57816003193601126100fb57805190828454600181811c908083169283156102ce575b60209384841081146102bb5783885290811561029f5750600114610267575b505050829003601f01601f19168201926001600160401b03841183851017610254575082918261025092528261060d565b0390f35b634e487b7160e01b815260418552602490fd5b919250868652828620918387935b83851061028b575050505083010185808061021f565b805488860183015293019284908201610275565b60ff1916878501525050151560051b840101905085808061021f565b634e487b7160e01b895260228a52602489fd5b91607f1691610200565b83346101d457806003193601126101d45780f35b5050346100fb5760203660031901126100fb5760209181906001600160a01b03610314610656565b16815280845220549051908152f35b919050346103d057806003193601126103d05761033e610656565b6001600160a01b0316916024359190831561038e5750602082600080516020610909833981519152926103748795600254610687565b60025585855284835280852082815401905551908152a380f35b6020606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b8280fd5b5050346100fb57806003193601126100fb5761012860209261041d6103f7610656565b338352600186528483206001600160a01b03821684528652918490205460243590610687565b9033610806565b5050346100fb57816003193601126100fb576020905160128152f35b839150346100fb5760603660031901126100fb5761045c610656565b610464610671565b91846044359460018060a01b03841681526001602052818120338252602052205490600019820361049e575b6020866101288787876106aa565b8482106104c757509183916104bc6020969561012895033383610806565b919394819350610490565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346100fb57816003193601126100fb576020906002549051908152f35b5050346100fb57806003193601126100fb57602090610128610549610656565b6024359033610806565b849084346103d057826003193601126103d05782600354600181811c90808316928315610603575b60209384841081146102bb5783885290811561029f57506001146105ca57505050829003601f01601f19168201926001600160401b03841183851017610254575082918261025092528261060d565b91925060038652828620918387935b8385106105ef575050505083010185808061021f565b8054888601830152930192849082016105d9565b91607f169161057b565b6020808252825181830181905290939260005b82811061064257505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610620565b600435906001600160a01b038216820361066c57565b600080fd5b602435906001600160a01b038216820361066c57565b9190820180921161069457565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b039081169182156107b357169182156107625760008281528060205260408120549180831061070e5760408282600080516020610909833981519152958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b039081169182156108b757169182156108675760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220aa852330c7c3c5c00db7b2d0fb9a384ae3a0cd0e987ac6281450829fa8b5b61264736f6c63430008150033";

type MockCurrencyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockCurrencyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockCurrency__factory extends ContractFactory {
  constructor(...args: MockCurrencyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<MockCurrency> {
    return super.deploy(overrides || {}) as Promise<MockCurrency>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockCurrency {
    return super.attach(address) as MockCurrency;
  }
  override connect(signer: Signer): MockCurrency__factory {
    return super.connect(signer) as MockCurrency__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCurrencyInterface {
    return new utils.Interface(_abi) as MockCurrencyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockCurrency {
    return new Contract(address, _abi, signerOrProvider) as MockCurrency;
  }
}
