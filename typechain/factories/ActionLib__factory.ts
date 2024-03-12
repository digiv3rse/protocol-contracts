/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ActionLib, ActionLibInterface } from "../ActionLib";

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
    type: "error",
    name: "ActionNotAllowed",
    inputs: [],
  },
  {
    type: "error",
    name: "ArrayMismatch",
    inputs: [],
  },
  {
    type: "error",
    name: "Blocked",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidReferrer",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x6080806040523461001c57610bc2908161002282393081602c0152f35b600080fdfe604060808152600436101561001357600080fd5b6000803560e01c63596fecad1461002957600080fd5b307f0000000000000000000000000000000000000000000000000000000000000000146102ab57600319916060368401126102a757600435926001600160401b0384116102a35760e0846004019185360301126102a35760243561008c816102ae565b604435610098816102ae565b6044860135958335916100ab838961080f565b6024820135916100bb83856107f4565b916100f56100f160a48401946100d086610320565b6001600160a01b031660009081526008909101602052604090205460ff1690565b1590565b6102925788999282888a9360648d9998960196610112888461032a565b9290888b6084880195610125878961032a565b9490913690610133926103d4565b93369061013f926103d4565b610148936108c3565b9561015290610320565b6001600160a01b031698610166908561032a565b929093610173908661032a565b95909660c40161018291610422565b98909961018d61039d565b9c8d5260208d01528b01526001600160a01b031660608a01526001600160a01b038b1660808a015236906101c0926103d4565b60a088015236906101d0926103d4565b60c086015260e085015236906101e59261046f565b61010083015285518097818094631219cdc160e31b8252600482019061020a916105b1565b03925af193841561028d57856102519695610255575b505090600080516020610b6d8339815191529161024484519283928742928561071f565b0390a1519182918261030c565b0390f35b600080516020610b6d8339815191529392955090610284913d8091833e61027c8183610375565b8101906104a6565b93909138610220565b610667565b875163829e373360e01b8152600490fd5b8280fd5b5080fd5b80fd5b6001600160a01b038116036102bf57565b600080fd5b60005b8381106102d75750506000910152565b81810151838201526020016102c7565b90602091610300815180928185528580860191016102c4565b601f01601f1916010190565b90602061031d9281815201906102e7565b90565b3561031d816102ae565b903590601e19813603018212156102bf57018035906001600160401b0382116102bf57602001918160051b360383136102bf57565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101761039857604052565b61035f565b6040519061012082016001600160401b0381118382101761039857604052565b6001600160401b0381116103985760051b60200190565b92916103df826103bd565b916103ed6040519384610375565b829481845260208094019160051b81019283116102bf57905b8282106104135750505050565b81358152908301908301610406565b903590601e19813603018212156102bf57018035906001600160401b0382116102bf576020019181360383136102bf57565b6001600160401b03811161039857601f01601f191660200190565b92919261047b82610454565b916104896040519384610375565b8294818452818301116102bf578281602093846000960137010152565b6020818303126102bf578051906001600160401b0382116102bf570181601f820112156102bf5780516104d881610454565b926104e66040519485610375565b818452602082840101116102bf5761031d91602080850191016102c4565b90815180825260208080930193019160005b828110610524575050505090565b835185529381019392810192600101610516565b6005111561054257565b634e487b7160e01b600052602160045260246000fd5b9081518082526020808093019301916000805b83821061057a57505050505090565b90919293948551600581101561059d57815283019483019392916001019061056b565b634e487b7160e01b83526021600452602483fd5b9061031d91602081528151602082015260208201516040820152604082015160608201526105ee6060830151608083019060018060a01b03169052565b60808201516001600160a01b031660a082015260a08201519061061f610120928360c0840152610140830190610504565b9161063c60c085015193601f1994858583030160e0860152610504565b61065760e08601519161010092868683030184870152610558565b94015192828503019101526102e7565b6040513d6000823e3d90fd5b9035601e19823603018112156102bf570160208101919035906001600160401b0382116102bf578160051b360383136102bf57565b81835290916001600160fb1b0383116102bf5760209260051b809284830137010190565b9035601e19823603018112156102bf570160208101919035906001600160401b0382116102bf5781360383136102bf57565b908060209392818452848401376000828201840152601f01601f1916010190565b906107de6060936107d06107f093989796986080865280356080870152602081013560a0870152604081013560c087015261077061075f88830183610673565b60e0808a01526101608901916106a8565b6107c06107986107836080850185610673565b607f198b860381016101008d015294916106a8565b9260a08101356107a7816102ae565b6001600160a01b03166101208a015260c08101906106cc565b91888403016101408901526106fe565b9084820360208601526102e7565b6001600160a01b039096166040830152565b0152565b60005260146020526040600020602052600052604060002090565b818114159182610834575b505061082257565b60405163a5baf15160e01b8152600490fd5b90915061084b81600052601b602052604060002090565b8260005260205260ff6040600020541691821561086c575b5050388061081a565b610882919250600052601b602052604060002090565b9060005260205260ff604060002054163880610863565b80518210156108ad5760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b939290918451835103610969578451926108dc846103bd565b936108ea6040519586610375565b8085526108f9601f19916103bd565b01366020860137600095865b815181101561095f5761092f858561091d8486610899565b516109288588610899565b519061097b565b6109398288610899565b600582101561094b5752600101610905565b634e487b7160e01b8a52602160045260248afd5b5093955050505050565b60405163b7c1140d60e01b8152600490fd5b92816109cb5750506000828152600260205260409020546001600160a01b0316159182156109c1575b50506109af57600090565b604051630c22084560e31b8152600490fd5b14905038806109a4565b90929180831480610a18575b6109af576109e58484610a21565b936109ef85610538565b84156109af576109fe85610538565b60018503610a0f5761031d93610a90565b61031d93610ac2565b508184146109d7565b90610a2b916107f4565b600581015460a01c60ff1690610a4082610538565b60ff821615610a4d575090565b805490919015610a735750600401546001600160a01b0316610a6e57600390565b600290565b600491909101546001600160a01b0316610a8a5790565b50600190565b92610a9b91926107f4565b9160068301541491821592610ab3575b50506109af57565b60070154141590503880610aab565b90610acf919392936107f4565b9082825414801590610b5e575b610ae557505050565b600682015492808414801590610b50575b610b01575b50505050565b600791610b0d916107f4565b910154908115928315610b41575b508215610b32575b50506109af5738808080610afb565b60070154141590503880610b23565b60068201541415925038610b1b565b508160078401541415610af6565b508060018301541415610adc56fe61f8aa74c55cf20b1d5e4f2f6531f66747a0bbbc7696cbb2844738feb8300aada2646970667358221220908bcadd23783b43e0d666efb92f6fa55899a40b1736f1e04352edbd0fd95e6064736f6c63430008150033";

type ActionLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ActionLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ActionLib__factory extends ContractFactory {
  constructor(...args: ActionLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ActionLib> {
    return super.deploy(overrides || {}) as Promise<ActionLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ActionLib {
    return super.attach(address) as ActionLib;
  }
  override connect(signer: Signer): ActionLib__factory {
    return super.connect(signer) as ActionLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ActionLibInterface {
    return new utils.Interface(_abi) as ActionLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ActionLib {
    return new Contract(address, _abi, signerOrProvider) as ActionLib;
  }
}