/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DeployTestProfiles,
  DeployTestProfilesInterface,
} from "../../DeployTestProfiles.s.sol/DeployTestProfiles";

const _abi = [
  {
    type: "function",
    name: "IS_SCRIPT",
    inputs: [],
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
    name: "run",
    inputs: [
      {
        name: "targetEnv_",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testForkManagement",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x6080806040523461002d57600160ff1981816004541617600455600c541617600c5561197f90816100338239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c80639352fad214610077578063f0c0adc3146100635763f8ccbf471461003e57600080fd5b34610060578060031936011261006057602060ff600c54166040519015158152f35b80fd5b503461006057806003193601126100605780f35b503461006057602036600319011261006057600435906001600160401b03821161006057366023830112156100605781600401356100b481611524565b926100c26040519485611501565b8184523660248383010111610dfc57818392602460209301838701378401015281516001600160401b038111611059576100fd600d5461153f565b601f811161146c575b50602092601f82116001146113fe579282938293926113f3575b50508160011b916000199060031b1c191617600d555b604051636c98507360e11b815281816004816000805160206118aa8339815191525afa908115610be2579180916101d69382916113d9575b506101b4602f6040518361018c829551809260208086019101611579565b81016e17b0b2323932b9b9b2b9973539b7b760891b602082015203600f810184520182611501565b604051809481926360f9bb1160e01b83526020600484015260248301906116c1565b03816000805160206118aa8339815191525afa9182156110915781926113bd575b5081516001600160401b0381116110595761021360105461153f565b601f811161136c575b50602092601f82116001146112fe579282938293926112f3575b50508160011b916000199060031b1c1916176010555b6102b08161025861161f565b60405190601760f91b6020830152610295600883610278602182016117e6565b672e6e6574776f726b60c01b815203601719810185520183611501565b6040516309389f5960e31b815293849283926004840161185a565b0381836000805160206118aa8339815191525af1908115610be25782916112d9575b508051906001600160401b0382116112c55781906102f1600f5461153f565b601f811161126c575b50602090601f83116001146111f65784926111eb575b50508160011b916000199060031b1c191617600f555b61038a602061033361161f565b60405190601760f91b8383015261036f600883610352602182016117e6565b670b98da185a5b925960c21b815203601719810185520183611501565b6040516356eef15b60e11b815293849283926004840161185a565b0381856000805160206118aa8339815191525af1908115610be25782916111b9575b506040516103b9816114e6565b6014815273052a30b933b2ba1032b73b34b937b736b2b73a1d60611b60208201526040519083600d546103eb8161153f565b80855290600181169081156111955750600114611146575b50906104158361041a94930383611501565b61187f565b604051610426816114e6565b60088152672732ba3bb7b9359d60c11b60208201526040519083600f5461044c8161153f565b808552906001811690811561112257506001146110d3575b50906104158361047694930383611501565b80460361109e576104a79060405161048d816114e6565b600881526721b430b4b724b21d60c11b6020820152611735565b6040516104b3816114e6565b600881526104d2674d4e454d4f4e494360c01b9182602082015261177a565b610eee575b50601554906104e58261153f565b15610eb6576104fa6104f5611602565b6116e6565b6040519182826105098361153f565b8083529260018116908115610e975750600114610e4b575b61052d92500383611501565b60405191636229498b60e01b83526020838061055560449460406004840152858301906116c1565b85602483015203816000805160206118aa8339815191525afa928315610be2578293610e13575b50604051630884001960e21b815260048101849052602081602481866000805160206118aa8339815191525af1908115610e08578391610dc2575b506012849055601380546001600160a01b039283166001600160a01b03199182168117909255604051909291859182916105f0826114e6565b60148252734465706c6f79657220616464726573733a20257360601b602083015261064f604051809261063c602083019563319af33360e01b87526040602485015260648401906116c1565b908a83015203601f198101835282611501565b51906a636f6e736f6c652e6c6f675afa5061066b6104f5611602565b61069c60405161067a816114e6565b600e81526d21bab93932b73a10313637b1b59d60911b60208201524390611735565b739358fe2e2ec00bd24eeee491dfd3d57333a88fbb6016928354161782556000805160206118aa8339815191523b15610dbe576040519463ce817d4760e01b865260048601528385602481836000805160206118aa8339815191525af18015610db357610d9f575b8394508082541690813b15610c01576040518581868183633f8334ef60e01b9788835260646004840152606560248401525af1908115610ce0578691610d8b575b50508083541691823b15610c1957604051818152868187818360c89889600484015260c960248401525af1908115610c1d578791610d77575b505081845416803b15610c2857868091876040518094819387835261012c600484015261012d60248401525af1908115610c1d578791610d63575b505081845416803b15610c28578680918760405180948193878352610190600484015261019160248401525af1908115610c1d578791610d4f575b505081845416803b15610c285786809187604051809481938783526101f460048401526101f560248401525af1908115610c1d578791610d3b575b505081845416803b15610c28578680918760405180948193878352610258600484015261025960248401525af1908115610c1d578791610d27575b505081845416803b15610c285786809187604051809481938783526102bc60048401526102bd60248401525af1908115610c1d578791610d13575b505081845416803b15610c28578680918760405180948193878352610320600484015261032160248401525af1908115610c1d578791610cff575b505081845416803b15610c28578680918760405180948193878352610384600484015261038560248401525af1908115610c1d578791610ceb575b50508184541690813b15610c28578691868392604051948593849283526103e960048401526103f260248401525af1908115610ce0578691610ccc575b50508083541692833b15610c19576040518681878183633e731cdd60e21b998a8352600160048401528960248401525af1908115610c1d578791610cb8575b505081815416803b15610c285786809187604051809481938a8352600260048401528960248401525af1908115610c1d578791610ca4575b505081815416803b15610c285786809187604051809481938a8352600360048401528960248401525af1908115610c1d578791610c90575b505081815416803b15610c285786809187604051809481938a83526004808401528960248401525af1908115610c1d578791610c7c575b505081815416803b15610c285786809187604051809481938a8352600560048401528960248401525af1908115610c1d578791610c68575b505081815416803b15610c285786809187604051809481938a8352600660048401528960248401525af1908115610c1d578791610c54575b505081815416803b15610c285786809187604051809481938a8352600760048401528960248401525af1908115610c1d578791610c40575b505081815416803b15610c285786809187604051809481938a8352600860048401528960248401525af1908115610c1d578791610c2c575b505081815416803b15610c285786809187604051809481938a8352600960048401528960248401525af1908115610c1d578791610c05575b5050541692833b15610c015784928360405195869485938452600a600485015260248401525af18015610be257610bed575b50506000805160206118aa8339815191523b1561006057604051633b756e9b60e11b815281908181600481836000805160206118aa8339815191525af18015610be257610bd25750f35b610bdb906114bd565b6100605780f35b6040513d84823e3d90fd5b610bf6906114bd565b610060578038610b88565b8480fd5b610c0e906114bd565b610c19578538610b56565b8580fd5b6040513d89823e3d90fd5b8680fd5b610c35906114bd565b610c19578538610b1e565b610c49906114bd565b610c19578538610ae6565b610c5d906114bd565b610c19578538610aae565b610c71906114bd565b610c19578538610a76565b610c85906114bd565b610c19578538610a3e565b610c99906114bd565b610c19578538610a07565b610cad906114bd565b610c195785386109cf565b610cc1906114bd565b610c19578538610997565b610cd5906114bd565b610c01578438610958565b6040513d88823e3d90fd5b610cf4906114bd565b610c1957853861091b565b610d08906114bd565b610c195785386108e0565b610d1c906114bd565b610c195785386108a5565b610d30906114bd565b610c1957853861086a565b610d44906114bd565b610c1957853861082f565b610d58906114bd565b610c195785386107f4565b610d6c906114bd565b610c195785386107b9565b610d80906114bd565b610c1957853861077e565b610d94906114bd565b610c01578438610745565b929093610dab906114bd565b918390610704565b6040513d86823e3d90fd5b8380fd5b90506020813d602011610e00575b81610ddd60209383611501565b81010312610dfc57516001600160a01b0381168103610dfc57386105b7565b8280fd5b3d9150610dd0565b6040513d85823e3d90fd5b9092506020813d602011610e43575b81610e2f60209383611501565b81010312610e3f5751913861057c565b5080fd5b3d9150610e22565b50601583529082906000805160206118ca8339815191525b818310610e7b57505090602061052d92820101610521565b6020919350806001915483858901015201910190918492610e63565b6020925061052d94915060ff191682840152151560051b820101610521565b60405162461bcd60e51b815260206004820152601060248201526f4d697373696e67206d6e656d6f6e696360801b6044820152606490fd5b906040519163f877cb1960e01b83526020600484015260086024840152604483015280826064816000805160206118aa8339815191525afa91821561109157819261106d575b5081516001600160401b03811161105957610f5060155461153f565b601f8111611008575b50602092601f8211600114610f9a57928293829392610f8f575b50508160011b916000199060031b1c1916176015555b386104d7565b015190503880610f73565b60158352601f198216936000805160206118ca83398151915291845b868110610ff05750836001959610610fd7575b505050811b01601555610f89565b015160001960f88460031b161c19169055388080610fc9565b91926020600181928685015181550194019201610fb6565b601583526000805160206118ca833981519152601f830160051c8101916020841061104f575b601f0160051c01905b8181106110445750610f59565b838155600101611037565b909150819061102e565b634e487b7160e01b82526041600452602482fd5b61108a9192503d8084833e6110828183611501565b81019061159c565b9038610f34565b50604051903d90823e3d90fd5b60405162461bcd60e51b815260206004820152600d60248201526c15dc9bdb99c818da185a5b9259609a1b6044820152606490fd5b600f865260008051602061192a8339815191529392915085905b8082106111065750919250908201602001610415610464565b91929360018160209254838589010152019101909392916110ed565b60ff191660208087019190915291151560051b850190910191506104159050610464565b600d86526000805160206118ea8339815191529392915085905b8082106111795750919250908201602001610415610403565b9192936001816020925483858901015201910190939291611160565b60ff191660208087019190915291151560051b850190910191506104159050610403565b90506020813d6020116111e3575b816111d460209383611501565b81010312610e3f5751386103ac565b3d91506111c7565b015190503880610310565b600f855284935060008051602061192a83398151915291905b601f1984168510611251576001945083601f19811610611238575b505050811b01600f55610326565b015160001960f88460031b161c1916905538808061122a565b8181015183556020948501946001909301929091019061120f565b600f855290915060008051602061192a833981519152601f840160051c8101602085106112be575b90849392915b601f830160051c820181106112b05750506102fa565b86815585945060010161129a565b5080611294565b634e487b7160e01b83526041600452602483fd5b6112ed91503d8084833e6110828183611501565b386102d2565b015190503880610236565b60108352601f1982169360008051602061190a83398151915291845b868110611354575083600195961061133b575b505050811b0160105561024c565b015160001960f88460031b161c1916905538808061132d565b9192602060018192868501518155019401920161131a565b6010835260008051602061190a833981519152601f830160051c810191602084106113b3575b601f0160051c01905b8181106113a8575061021c565b83815560010161139b565b9091508190611392565b6113d29192503d8084833e6110828183611501565b90386101f7565b6113ed91503d8084833e6110828183611501565b3861016e565b015190503880610120565b600d8352601f198216936000805160206118ea83398151915291845b868110611454575083600195961061143b575b505050811b01600d55610136565b015160001960f88460031b161c1916905538808061142d565b9192602060018192868501518155019401920161141a565b600d83526000805160206118ea833981519152601f830160051c810191602084106114b3575b601f0160051c01905b8181106114a85750610106565b83815560010161149b565b9091508190611492565b6001600160401b0381116114d057604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176114d057604052565b601f909101601f19168101906001600160401b038211908210176114d057604052565b6001600160401b0381116114d057601f01601f191660200190565b90600182811c9216801561156f575b602083101461155957565b634e487b7160e01b600052602260045260246000fd5b91607f169161154e565b60005b83811061158c5750506000910152565b818101518382015260200161157c565b6020818303126115fd578051906001600160401b0382116115fd570181601f820112156115fd5780516115ce81611524565b926115dc6040519485611501565b818452602082840101116115fd576115fa9160208085019101611579565b90565b600080fd5b6040519061160f826114e6565b60018252600560f91b6020830152565b60405190600082601054916116338361153f565b8083526020936001908181169081156116a1575060011461165f575b505061165d92500383611501565b565b90939150601060005281600020936000915b81831061168957505061165d9350820101388061164f565b85548884018501529485019487945091830191611671565b91505061165d94925060ff191682840152151560051b820101388061164f565b906020916116da81518092818552858086019101611579565b601f01601f1916010190565b6000809160405161172281611714602082019463104c13eb60e21b86526020602484015260448301906116c1565b03601f198101835282611501565b51906a636f6e736f6c652e6c6f675afa50565b600091908291611722604051809261176660208301956309710a9d60e41b87526040602485015260648401906116c1565b90604483015203601f198101835282611501565b60006117a2916040518093819263f877cb1960e01b83526020600484015260248301906116c1565b03816000805160206118aa8339815191525afa90816117cb575b506117c657600090565b600190565b6117df903d806000833e6110828183611501565b50386117bc565b600d54600092916117f68261153f565b91600190818116908115611847575060011461181157505050565b9091929350600d60005260209081600020906000915b85831061183657505050500190565b805485840152918301918101611827565b60ff191683525050811515909102019150565b90916118716115fa936040845260408401906116c1565b9160208184039101526116c1565b6000919061171461172284936040519283916020830195634b5c427760e01b87526024840161185a56fe0000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec475d7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb51b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6728d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802a2646970667358221220f1f633cff66123c87e9feab25a9a95a5a05b4ea2b7199512720071afc1ac7f5764736f6c63430008150033";

type DeployTestProfilesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployTestProfilesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeployTestProfiles__factory extends ContractFactory {
  constructor(...args: DeployTestProfilesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<DeployTestProfiles> {
    return super.deploy(overrides || {}) as Promise<DeployTestProfiles>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployTestProfiles {
    return super.attach(address) as DeployTestProfiles;
  }
  override connect(signer: Signer): DeployTestProfiles__factory {
    return super.connect(signer) as DeployTestProfiles__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployTestProfilesInterface {
    return new utils.Interface(_abi) as DeployTestProfilesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeployTestProfiles {
    return new Contract(address, _abi, signerOrProvider) as DeployTestProfiles;
  }
}