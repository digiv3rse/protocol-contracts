/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MetaTxLib, MetaTxLibInterface } from "../MetaTxLib";

const _abi = [
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
    type: "error",
    name: "SignatureExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "SignatureInvalid",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x6080806040523461001c5761196b90816100228239308160070152f35b600080fdfe6080604052307f00000000000000000000000000000000000000000000000000000000000000001460048036101561003657600080fd5b600091823560e01c806307f4a07d14610bcb5780632b07ff2414610ad5578063365ae23a14610a685780634710f19c146109445780636dd122591461088e5780638661e81c146107115780638989384f1461061f5780638e51a9eb1461057a578063bfc90121146104b9578063c127a833146103bf578063c28d3b0614610281578063d52da9a6146101d85763fd668e43146100d157600080fd5b6101d057366003190161010081126101d45760a0136101d0576001600160401b0360c4358181116101cc576101099036908401610da5565b9160e4359081116101c85761014b6101c09361014361013e6101346101c59861015096369101610da5565b9690933691611149565b6118cc565b93369161100c565b61182f565b61016061015b610f6d565b61170a565b6040519160208301937fbc6349761cd72874083fbb45a79c97e3ea70a4e6e0d8795a44d92139ce86dc7f855260a43560408501526060840152608083015260a082015260843560c082015260c081526101b881610ea6565b519020611542565b6111eb565b80f35b8480fd5b8380fd5b5080fd5b8280fd5b506101d057366003190160e081126101d45760a0136101d05760c435906001600160401b0382116101d45761022361013e61021c6101c0936101c595369101610da5565b3691611149565b61022e61015b610f6d565b6040519060208201927fb00eee39ac244140bd82de5ae80ce8d2c544adb7156300bd504f01ed3bb3d34a845260a43560408401526060830152608082015260843560a082015260a081526101b881610e8b565b5082906103bc57366003190161012081126101d05760a0136103bc576001600160401b0360c4358181116101d4576102bc9036908501610da5565b9160e4358181116101c8576102d49036908701610da5565b9390610104358381116103b8579161031461013e61031c9361030c61013e6103028d61032199369101610da5565b9a90963691611149565b983691611149565b9436916110ca565b61177f565b61032c61015b610f6d565b906040519360208501957f70888457871c72d32d8962de8eb9c0afb06cf9d3da14dcb7e2b03f21d8d59ef5875260a43560408701526060860152608085015260a084015260c083015260843560e083015260e08252610100820190828210908211176103a5576040525190206101c5906101c090611542565b634e487b7160e01b845260418552602484fd5b8680fd5b80fd5b83826103bc576101c56104b46103d436610dd5565b6103ea61013e61021c6060849695960184611095565b6103fd61013e61021c6080850185611095565b61040960a08401610f83565b61042061041960c0860186611063565b3691610f36565b602081519101209061043461015b88610f83565b9260405194604060208701977fd9037bff36eb09b289eaa5c7b4689aa8d198d3b3820a215a2e84b3f3d24d3f6a8952803582890152602081013560608901520135608087015260a086015260c085015260018060a01b031660e084015261010083015261012082015261014060808501358183015281526101b881610e6f565b6113a5565b506101d057366003190161010081126101d45760a0136101d05760c4356001600160a01b038116908190036101d45760e435906001600160401b0382116101cc576105106104196101c5946101c094369101610e10565b6020815191012061052261015b610f6d565b6040519160208301937fc71f698c3316d7b7810c831d68316a5fa62d68f8da6a899008857dedd663877c855260a43560408501526060840152608083015260a082015260843560c082015260c081526101b881610ea6565b506101d057366003190160e081126101d45760a0136101d05760c4356001600160401b0381116101d4576105ba6104196101c5936101c093369101610e10565b602081519101206105cc61015b610f6d565b6040519060208201927f2ec8c44df21693553f55aa1142dcbaf5b808049cd74198ebc2e45324fea475a2845260a43560408401526060830152608082015260843560a082015260a081526101b881610e8b565b83826103bc576101c56104b461063436610dd5565b6106476104196020839594950183611063565b602081519101209061066261013e61021c6080840184611095565b61067561013e61021c60a0850185611095565b61068561041960c0850185611063565b602081519101209061069961015b88610f83565b9260606040519560208701977fb7f0bf1380e1f809c3b537fdf3896f00e46bc66a95f752e8c10df3258c2e7e068952813560408901528288015260408101356080880152013560a086015260c085015260e084015261010083015261012082015261014060808501358183015281526101b881610e6f565b83826103bc576101c56104b461072636610d29565b6107396104196020839594950183611063565b602081519101209061075461013e61021c6080840184611095565b61076761013e61021c60a0850185611095565b61077761041960c0850185611063565b6020815191012061079d61079861079160e0870187611095565b3691610fae565b61187a565b6107b861031c6107b1610100880188611095565b36916110ca565b916107c66101208701610f83565b936107d8610419610140890189611063565b602081519101209560606107ee61015b8d610f83565b986040519a7f341688a2bf344a1371e46eeb31a2c4a3ce7121fea5046be28f3fd05d2ac9c76e60208d0152813560408d0152828c0152604081013560808c0152013560a08a015260c089015260e088015261010087015261012086015261014085015260018060a01b03166101608401526101808301526101a08201526101c0608084013581830152815261088281610edc565b60208151910120611542565b83826103bc576101c56104b46108a336610d6a565b6108b661041960a0839594950183611063565b602081519101206108c961015b85610f83565b60405191608060208401947ff64a5e43f4f5ae9eb49b3d42ee4e7cdd9f44c10b408cecc37015eef36014bca086528035604086015260208101356060860152604081013582860152606081013560a0860152013560c084015260e083015261010082015261012060808501358183015281526101b881610e3d565b5082906103bc57366003190161014081126101d05760a0136103bc576001600160401b0360c4358181116101d45761097f9036908501610da5565b909160e4358181116101c8576109989036908701610da5565b9361010435918383168093036103b8576101243591821515809303610a645761014b6109e6926109d86107986109e0946109d0610f6d565b9a3691610fae565b98369161100c565b9461170a565b916040519460208601967f54f4c924ea132d4a7c22f9b0c1870f7d300b7ddf2b03e47bf0f59743da53b137885260a43560408801526060870152608086015260a085015260c084015260e0830152610100608435818401528252610120820190828210908211176103a5576040525190206101c5906101c090611542565b8780fd5b506101d05760203660031901126101d0573560ff81168091036101d057610ab290338352600a6020526040832054610aa08282611197565b338552600a6020526040852055611197565b60405190815242602082015260008051602061191683398151915260403392a280f35b83826103bc576101c56104b4610aea36610d6a565b610afd6104196020839594950183611063565b60208151910120610b176107986107916040850185611095565b610b2a61031c6107b16060860186611095565b610b3660808501610f83565b610b4661041960a0870187611063565b6020815191012091610b5a61015b89610f83565b936040519560208701977f8938250adaec2654de28d18f8712c7940338dfdfe389c1e0fa2eda14401de0ee89523560408801526060870152608086015260a085015260018060a01b031660c084015260e083015261010082015261012060808501358183015281526101b881610e3d565b83826103bc576101c56104b4610be036610d29565b610bf36104196020839594950183611063565b6020815191012090610c0e61013e61021c6080840184611095565b610c2161013e61021c60a0850185611095565b610c3161041960c0850185611063565b60208151910120610c4b61079861079160e0870187611095565b610c5f61031c6107b1610100880188611095565b91610c6d6101208701610f83565b93610c7f610419610140890189611063565b60208151910120956060610c9561015b8d610f83565b986040519a7f65db8457dfdead443d4fd325b5487496f9b9ab96e163675f324745f6b614834960208d0152813560408d0152828c0152604081013560808c0152013560a08a015260c089015260e088015261010087015261012086015261014085015260018060a01b03166101608401526101808301526101a08201526101c0608084013581830152815261088281610edc565b9060031980830160c08112610d655760a013610d655760049260a435916001600160401b038311610d65578261016092030112610d6557820190565b600080fd5b9060031980830160c08112610d655760a013610d655760049260a435916001600160401b038311610d65578260c092030112610d6557820190565b9181601f84011215610d65578235916001600160401b038311610d65576020808501948460051b010111610d6557565b9060031980830160c08112610d655760a013610d655760049260a435916001600160401b038311610d65578260e092030112610d6557820190565b9181601f84011215610d65578235916001600160401b038311610d655760208381860195010111610d6557565b61014081019081106001600160401b03821117610e5957604052565b634e487b7160e01b600052604160045260246000fd5b61016081019081106001600160401b03821117610e5957604052565b60c081019081106001600160401b03821117610e5957604052565b60e081019081106001600160401b03821117610e5957604052565b608081019081106001600160401b03821117610e5957604052565b6101e081019081106001600160401b03821117610e5957604052565b601f909101601f19168101906001600160401b03821190821017610e5957604052565b6001600160401b038111610e5957601f01601f191660200190565b929192610f4282610f1b565b91610f506040519384610ef8565b829481845281830111610d65578281602093846000960137010152565b6004356001600160a01b0381168103610d655790565b356001600160a01b0381168103610d655790565b6001600160401b038111610e595760051b60200190565b9291610fb982610f97565b91610fc76040519384610ef8565b829481845260208094019160051b8101928311610d6557905b828210610fed5750505050565b81356001600160a01b0381168103610d65578152908301908301610fe0565b929161101782610f97565b916110256040519384610ef8565b829481845260208094019160051b8101928311610d6557905b82821061104b5750505050565b81358015158103610d6557815290830190830161103e565b903590601e1981360301821215610d6557018035906001600160401b038211610d6557602001918136038313610d6557565b903590601e1981360301821215610d6557018035906001600160401b038211610d6557602001918160051b36038313610d6557565b929190926110d784610f97565b916110e56040519384610ef8565b829480845260208094019060051b830192828411610d655780915b84831061110f57505050505050565b82356001600160401b038111610d6557820184601f82011215610d6557869161113e8683858095359101610f36565b815201920191611100565b929161115482610f97565b916111626040519384610ef8565b829481845260208094019160051b8101928311610d6557905b8282106111885750505050565b8135815290830190830161117b565b919082018092116111a457565b634e487b7160e01b600052601160045260246000fd5b3560ff81168103610d655790565b60005b8381106111db5750506000910152565b81810151838201526020016111cb565b6084354211611393576004356001600160a01b038181169291838103610d65573b15611315575060243560ff81168103610d6557602061128860409485518381019460443586526064358883015260ff60f81b9060f81b1660608201526041815261125581610ec1565b60648751809681958294630b135d3f60e11b9a8b855260048501528b6024850152518092816044860152858501906111c8565b601f01601f191681010301915afa90811561130a576000916112c8575b506001600160e01b031916036112b85750565b516337e8456b60e01b8152600490fd5b6020813d8211611302575b816112e060209383610ef8565b810103126101d05751906001600160e01b0319821682036103bc5750386112a5565b3d91506112d3565b83513d6000823e3d90fd5b906024359060ff8216809203610d65576080600091602093604051918252848201526044356040820152606435606082015282805260015afa15611387576000511690811591821561137c575b505061136a57565b6040516337e8456b60e01b8152600490fd5b141590503880611362565b6040513d6000823e3d90fd5b604051630819bdcd60e01b8152600490fd5b60808201354211611393576113b982610f83565b3b156114c8576040916020908161144e6113d48284016111ba565b928651908382019488820135865260608201358984015260ff60f81b9060f81b1660608301526041825261140782610ec1565b6001600160a01b039061141990610f83565b169060648851809681958294630b135d3f60e11b9b8c855260048501528c6024850152518092816044860152858501906111c8565b601f01601f191681010301915afa9182156114bd5760009261147f575b50506001600160e01b031916036112b85750565b81813d83116114b6575b6114938183610ef8565b810103126101d05751906001600160e01b0319821682036103bc5750388061146b565b503d611489565b84513d6000823e3d90fd5b6000608060209260ff6114dc8587016111ba565b6040519283521684820152604085013560408201526060850135606082015282805260015afa15611387576000516001600160a01b03908116801592909190831561152b575b50505061136a57565b61153791929350610f83565b161415388080611522565b61154a611579565b9060405190602082019261190160f01b8452602283015260428201526042815261157381610ec1565b51902090565b73db46d1dc155634fbc732f92e853b10b288ad5a1d301480611700575b6116dc57604080516306fdde0360e01b81526000908181600481305afa9081156116d2578291611659575b50805160209091012082519091818401908282106001600160401b038311176116455750600191602091855282815201601960f91b81522082519160208301937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f855283015260608201524660808201523060a082015260a0815261157381610e8b565b634e487b7160e01b81526041600452602490fd5b90503d8083833e61166a8183610ef8565b8101906020818303126101d4578051906001600160401b0382116101cc570181601f820112156101d4578051906116a082610f1b565b926116ad86519485610ef8565b828452602083830101116101cc57906116cc91602080850191016111c8565b386115c1565b83513d84823e3d90fd5b7fbf9544cf7d7a0338fc4f071be35409a61e51e9caef559305410ad74e16a05f2d90565b5060894614611596565b6001600160a01b03166000818152600a602052604090208054600181019182905591908083116111a4576040600080516020611916833981519152918151908152426020820152a290565b80518210156117695760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b908151906117a561178f83610f97565b9261179d6040519485610ef8565b808452610f97565b9260209182840194601f1980910136873760005b83518110156117e757806117cf60019286611755565b518681519101206117e08289611755565b52016117b9565b5090949150604051838194820180965190949160005b82811061181857505050506115739203908101835282610ef8565b8351875295810195879450928101926001016117fd565b60405160208181810193848382519192019360005b82811061186157505050611573925003601f198101835282610ef8565b8551151584529481019486945092810192600101611844565b60405160208181810193848382519192019360005b8281106118ac57505050611573925003601f198101835282610ef8565b85516001600160a01b03168452948101948694509281019260010161188f565b60405160208181810193848382519192019360005b8281106118fe57505050611573925003601f198101835282610ef8565b8551845294810194869450928101926001016118e156fec906270cebe7667882104effe64262a73c422ab9176a111e05ea837b021065fca26469706673582212200e56d492ea2841dfd4d56354cfe16a16824df044a3a9310e9cbd5881850d4a2364736f6c63430008150033";

type MetaTxLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetaTxLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetaTxLib__factory extends ContractFactory {
  constructor(...args: MetaTxLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<MetaTxLib> {
    return super.deploy(overrides || {}) as Promise<MetaTxLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MetaTxLib {
    return super.attach(address) as MetaTxLib;
  }
  override connect(signer: Signer): MetaTxLib__factory {
    return super.connect(signer) as MetaTxLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetaTxLibInterface {
    return new utils.Interface(_abi) as MetaTxLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetaTxLib {
    return new Contract(address, _abi, signerOrProvider) as MetaTxLib;
  }
}
