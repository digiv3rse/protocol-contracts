/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  S05_GovernanceActions,
  S05_GovernanceActionsInterface,
} from "../../S05_GovernanceActions.s.sol/S05_GovernanceActions";

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
    name: "testArrayHelpers",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "testDiGiV2DeployPeriphery",
    inputs: [],
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
  "0x60808060405234620000e65760018060ff1981816004541617600455600c541617600c556012548181811c91168015620000db575b6020821014620000c557601f811162000079575b7f61646472657373657356322e747874000000000000000000000000000000001e601255613e138381620000ec8239f35b6012600052601f0160051c7fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444908101905b818110620000b9575062000048565b600081558201620000aa565b634e487b7160e01b600052602260045260246000fd5b90607f169062000034565b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081639352fad214610060575080639708e5bd1461005b578063dae854121461005b578063f0c0adc31461005b5763f8ccbf471461005657600080fd5b6101a1565b61018e565b346100d95760203660031901126100d9576004356001600160401b0381116100d557366023820112156100d5578060040135908261009d83610163565b916100ab6040519384610140565b83835236602485830101116100d557836100d29460246020930183860137830101526105e9565b80f35b5080fd5b80fd5b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761010d57604052565b6100dc565b6001600160401b03811161010d57604052565b606081019081106001600160401b0382111761010d57604052565b601f909101601f19168101906001600160401b0382119082101761010d57604052565b6001600160401b03811161010d57601f01601f191660200190565b600091031261018957565b600080fd5b3461018957600036600319011261018957005b3461018957600036600319011261018957602060ff600c54166040519015158152f35b90600182811c921680156101f4575b60208310146101de57565b634e487b7160e01b600052602260045260246000fd5b91607f16916101d3565b601f811161020a575050565b600090600d825260208220906020601f850160051c83019410610248575b601f0160051c01915b82811061023d57505050565b818155600101610231565b9092508290610228565b601f811161025e575050565b6000906013825260208220906020601f850160051c8301941061029c575b601f0160051c01915b82811061029157505050565b818155600101610285565b909250829061027c565b601f81116102b2575050565b6000906010825260208220906020601f850160051c830194106102f0575b601f0160051c01915b8281106102e557505050565b8181556001016102d9565b90925082906102d0565b601f8111610306575050565b600090600f825260208220906020601f850160051c83019410610344575b601f0160051c01915b82811061033957505050565b81815560010161032d565b9092508290610324565b8160011b916000199060031b1c19161790565b80519091906001600160401b03811161010d57610388816103836013546101c4565b610252565b602080601f83116001146103bd575081906103ad93946000926103b2575b505061034e565b601355565b0151905038806103a6565b6013600052601f198316949091907f66de8ffda797e3de9c05e8fc57b3bf0ec28a930d40b0d285d93c06501cf6a090926000905b878210610429575050836001959610610410575b505050811b01601355565b015160001960f88460031b161c19169055388080610405565b806001859682949686015181550195019301906103f1565b80519091906001600160401b03811161010d57610468816104636010546101c4565b6102a6565b602080601f83116001146104915750819061048c93946000926103b257505061034e565b601055565b6010600052601f198316949091907f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae672926000905b8782106104fd5750508360019596106104e4575b505050811b01601055565b015160001960f88460031b161c191690553880806104d9565b806001859682949686015181550195019301906104c5565b80519091906001600160401b03811161010d5761053c81610537600f546101c4565b6102fa565b602080601f83116001146105655750819061056093946000926103b257505061034e565b600f55565b600f600052601f198316949091907f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802926000905b8782106105d15750508360019596106105b8575b505050811b01600f55565b015160001960f88460031b161c191690553880806105ad565b80600185968294968601518155019501930190610599565b80519091906001600160401b03811161010d576106108161060b600d546101c4565b6101fe565b602080601f83116001146106725750819061063493946000926103b257505061034e565b600d555b610640613a2c565b610648613b90565b610650610aa7565b610658611696565b610660612a8b565b610668612f1b565b61067061360e565b565b600d600052601f198316949091907fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5926000905b8782106106e15750508360019596106106c8575b505050811b01600d55610638565b015160001960f88460031b161c191690553880806106ba565b806001859682949686015181550195019301906106a6565b60405190610706826100f2565b60088252674d4e454d4f4e494360c01b6020830152565b6001600160a01b031690565b60005b83811061073c5750506000910152565b818101518382015260200161072c565b9092919261075981610163565b916107676040519384610140565b829482845282820111610189576020610670930190610729565b9080601f8301121561018957815161079b9260200161074c565b90565b906020828203126101895781516001600160401b0381116101895761079b9201610781565b6040513d6000823e3d90fd5b604051906107dc826100f2565b6016825274516901690169021aaa92922a72a10212627a1a59d160551b6020830152565b60105460009291610810826101c4565b9081815260209260019081811690816000146108745750600114610835575b50505050565b929394509060106000528360002092846000945b83861061086057505050500101903880808061082f565b805485870183015294019385908201610849565b60ff191685840152505090151560051b010191503880808061082f565b60405190600082601354916108a5836101c4565b80835260209360019081811690811561091157506001146108cf575b505061067092500383610140565b90939150601360005281600020936000915b8183106108f9575050610670935082010138806108c1565b855488840185015294850194879450918301916108e1565b91505061067094925060ff191682840152151560051b82010138806108c1565b604051906106708261094281610800565b0383610140565b60405190600082600d549161095d836101c4565b808352602093600190818116908115610911575060011461098657505061067092500383610140565b90939150600d60005281600020936000915b8183106109b0575050610670935082010138806108c1565b85548884018501529485019487945091830191610998565b60405190600082600f54916109dc836101c4565b8083526020936001908181169081156109115750600114610a0557505061067092500383610140565b90939150600f60005281600020936000915b818310610a2f575050610670935082010138806108c1565b85548884018501529485019487945091830191610a17565b60405190610a54826100f2565b60138252720a2d202d202d204445504c4f5945523a20257360681b6020830152565b60405190610a83826100f2565b60158252740a2d202d202d20474f5645524e414e43453a20257360581b6020830152565b610ab7610ab26106f9565b6139c0565b610bc2575b610ac76013546101c4565b15610b8a57610add43610ad86107cf565b610dd6565b610b1b610af9610af3610aee610891565b610cd9565b60145590565b601580546001600160a01b0319166001600160a01b0392909216919091179055565b610b36610b2960155461071d565b610b31610a47565b610e34565b610b74610b52610b4c610b47610891565b610db8565b60175590565b601880546001600160a01b0319166001600160a01b0392909216919091179055565b610670610b8260185461071d565b610b31610a76565b60405162461bcd60e51b815260206004820152601060248201526f4d697373696e67206d6e656d6f6e696360801b6044820152606490fd5b60405163f877cb1960e01b81526020600482015260086024820152674d4e454d4f4e494360c01b6044820152600081606481600080516020613d7e8339815191525afa8015610c4357610c1d91600091610c22575b50610361565b610abc565b610c3d913d8091833e610c358183610140565b81019061079e565b38610c17565b6107c3565b90816020910312610189575190565b90602091610c7081518092818552858086019101610729565b601f01601f1916010190565b91906020610c94600092604086526040860190610c57565b930152565b91906020610c94600192604086526040860190610c57565b51906001600160a01b038216820361018957565b908160209103126101895761079b90610cb1565b60405190636229498b60e01b825281610cf760209260048301610c7c565b038183600080516020613d7e8339815191529281845afa928315610c4357600093610d80575b50604051630884001960e21b815260048101849052908290829081600081602481015b03925af1918215610c4357600092610d5757505091565b610d769250803d10610d79575b610d6e8183610140565b810190610cc5565b91565b503d610d64565b6000919350610d40610da88492833d8511610db1575b610da08183610140565b810190610c48565b94925050610d1d565b503d610d96565b60405190636229498b60e01b825281610cf760209260048301610c99565b610e19610e0591610670936040519384926309710a9d60e41b6020850152604060248501526064840190610c57565b90604483015203601f198101835282610140565b600080916020815191016a636f6e736f6c652e6c6f675afa50565b610e19610e63916106709360405193849263319af33360e01b6020850152604060248501526064840190610c57565b6001600160a01b0391909116604483015203601f198101835282610140565b601760f91b815260010190565b600d5460009291610e9f826101c4565b91600190818116908115610ef05750600114610eba57505050565b9091929350600d60005260209081600020906000915b858310610edf57505050500190565b805485840152918301918101610ed0565b60ff191683525050811515909102019150565b602081830312610189578051906001600160401b03821161018957019080601f8301121561018957815161079b9260200161074c565b61079b9160408252610f4d60408301610800565b916020818403910152610c57565b604081526012549291600091610f70856101c4565b8060408301526060906001968781169081600014610fea5750600114610fa6575b505061079b9394506020818403910152610c57565b90919350601260005260209081600020966000975b828910610fd7575050505061079b939483010191849338610f91565b8054878a01860152978301978101610fbb565b60ff191684840152509495508594151560051b820101925061079b38610f91565b9060209081838203126101895782516001600160401b039384821161018957019080601f830112156101895781519380851161010d578460051b9060409081519661105887850189610140565b875285808801938601019484861161018957868101935b86851061108157505050505050505090565b84518381116101895782019084601f198389030112610189578451906110a6826100f2565b6110b18a8401610cb1565b82528583015191858311610189576110d0898c80969581960101610781565b8382015281520194019361106f565b604051906110ec826100f2565b600f82526e466565466f6c6c6f774d6f64756c6560881b6020830152565b60405190611117826100f2565b6013825272466565466f6c6c6f774d6f64756c653a20257360681b6020830152565b60405190611146826100f2565b6012825271526576657274466f6c6c6f774d6f64756c6560701b6020830152565b60405190611174826100f2565b6016825275526576657274466f6c6c6f774d6f64756c653a20257360501b6020830152565b6020616c6560f01b91600080516020613d9e83398151915281520152565b604051906111c482610125565b6022825261067060208301611199565b60a091600180841b0316815260406020820152602260408201526111fa60608201611199565b0190565b6040519061120b82610125565b60268252656c653a20257360d01b604083600080516020613d9e83398151915260208201520152565b60405190611241826100f2565b601b82527a466f6c6c6f7765724f6e6c795265666572656e63654d6f64756c6560281b6020830152565b60405190611278826100f2565b601f82527f466f6c6c6f7765724f6e6c795265666572656e63654d6f64756c653a202573006020830152565b604051906112b1826100f2565b601882527721b7b63632b1ba283ab13634b1b0ba34b7b720b1ba34b7b760411b6020830152565b604051906112e5826100f2565b601c82527b436f6c6c6563745075626c69636174696f6e416374696f6e3a20257360201b6020830152565b6040519061131d826100f2565b601682527553696d706c65466565436f6c6c6563744d6f64756c6560501b6020830152565b6040519061134f826100f2565b601a82527953696d706c65466565436f6c6c6563744d6f64756c653a20257360301b6020830152565b60405190611385826100f2565b601e8252600080516020613dbe8339815191526020830152565b604051906113ac82610125565b6022825261257360f01b6040837f4d756c7469726563697069656e74466565436f6c6c6563744d6f64756c653a2060208201520152565b604051906113f0826100f2565b60168252751111541313d65351539517d15395925493d39351539560521b6020830152565b6040519061142282610125565b603282527120636f6e74726163742061646d696e20257360701b6040837f4d6f636b20476f7665726e616e636520257320213d20476f7665726e616e636560208201520152565b6060906020815260166020820152751111541313d65351539517d15395925493d39351539560521b60408201520190565b604051906114a7826100f2565b600a825269383937b23ab1ba34b7b760b11b6020830152565b604051906114cd82610125565b602882526737b23ab1ba34b7b760c11b6040837f4445504c4f594d454e545f454e5649524f4e4d454e54206973206e6f7420707260208201520152565b60405190611517826100f2565b601282527150726f66696c6543726561746f723a20257360701b6020830152565b60405190611545826100f2565b601b82527a50726f787941646d696e436f6e747261637441646d696e3a20257360281b6020830152565b6040519061157c826100f2565b601282527144694769204875622050726f78793a20257360701b6020830152565b604051906115aa826100f2565b601082526f446947692048616e646c65733a20257360801b6020830152565b604051906115d6826100f2565b6019825278546f6b656e2048616e646c652052656769737472793a20257360381b6020830152565b6040519061160b826100f2565b60138252724d6f64756c652052656769737472793a20257360681b6020830152565b6040519061163a826100f2565b6017825276476f7665726e616e636520436f6e74726163743a20257360481b6020830152565b6040519061166d826100f2565b601a82527950726f66696c65204372656174696f6e2050726f78793a20257360301b6020830152565b6040908151602092816116d36116b56116b0878401610e82565b610e8f565b712e4d6f64756c65732e76322e666f6c6c6f7760701b815260120190565b03916116e7601f1993848101835282610140565b8151906385940ef160e01b9586835260009483611708600494858301610f39565b03938681600080516020613d7e8339815191529681885afa8015610c435761174091889161271f575b5083808251830101910161100b565b976117876117656117586117526110df565b8c61291d565b516001600160a01b031690565b602f80546001600160a01b0319166001600160a01b0392909216919091179055565b611792602f5461071d565b98853b1561271b5786516318caf8e360e31b8082526001600160a01b03909b16868201908152604060208201819052600f908201526e466565466f6c6c6f774d6f64756c6560881b60608201528990829081906080010381838b5af18015610c435761184c9261182a92611758926127c5575b5061181c611814602f5461071d565b610b3161110a565b611824611139565b9061291d565b603080546001600160a01b0319166001600160a01b0392909216919091179055565b61185760305461071d565b853b1561271b5786518a81526001600160a01b0390911685820190815260406020820181905260129082015271526576657274466f6c6c6f774d6f64756c6560701b60608201528890829081906080010381838a5af18015610c43576127b2575b506118cf6118c760305461071d565b610b31611167565b6119288787516119178161190b6118ea6116b08a8401610e82565b742e4d6f64756c65732e76322e7265666572656e636560581b815260150190565b03868101835282610140565b885180938192868352898301610f39565b0381895afa8015610c435761194d918991612798575b5084808251830101910161100b565b61198661196461175861195e6111b7565b8461291d565b603180546001600160a01b0319166001600160a01b0392909216919091179055565b61199160315461071d565b863b1561279457886119af918c8a51938492839283528a83016111d4565b0381838b5af18015610c4357611a0d926119eb9261175892612781575b506119e36119db60315461071d565b610b316111fe565b611824611234565b603280546001600160a01b0319166001600160a01b0392909216919091179055565b611a1860325461071d565b853b1561271b5786518a81526001600160a01b03909116858201908152604060208201819052601b908201527a466f6c6c6f7765724f6e6c795265666572656e63654d6f64756c6560281b60608201528890829081906080010381838a5af18015610c435761276e575b50611a99611a9160325461071d565b610b3161126b565b611acf8787516119178161190b611ab46116b08a8401610e82565b6e0b935bd91d5b195ccb9d8c8b9858dd608a1b8152600f0190565b0381895afa908115610c4357611758611aff611b2993611b07938c91612754575b5087808251830101910161100b565b6118246112a4565b602c80546001600160a01b0319166001600160a01b0392909216919091179055565b611b34602c5461071d565b853b1561271b579087611b8e928b89519485928392835289830160809160018060a01b0316815260406020820152601860408201527721b7b63632b1ba283ab13634b1b0ba34b7b720b1ba34b7b760411b60608201520190565b0381838a5af1908115610c4357611c11928992612741575b50611bbd611bb5602c5461071d565b610b316112d8565b875190611c0082611bf4611bd56116b08a8401610e82565b720b935bd91d5b195ccb9d8c8b98dbdb1b1958dd606a1b815260130190565b03868101845283610140565b885193849283928352888301610f39565b0381885afa8015610c4357611c3591889161271f575083808251830101910161100b565b611c68611c4661175861195e611310565b602d80546001600160a01b0319166001600160a01b0392909216919091179055565b611c73602d5461071d565b853b1561271b5786518a81526001600160a01b039091168582019081526040602082018190526016908201527553696d706c65466565436f6c6c6563744d6f64756c6560501b60608201528890829081906080010381838a5af18015610c4357611d2592611d039261175892612708575b50611cfb611cf3602d5461071d565b610b31611342565b611824611378565b602e80546001600160a01b0319166001600160a01b0392909216919091179055565b611d30602e5461071d565b843b1561261c5785518981526001600160a01b03909116848201908152604060208201819052601e90820152600080516020613dbe8339815191526060820152879082908190608001038183895af18015610c43576126f5575b50611da1611d99602e5461071d565b610b3161139f565b611df9611dac610931565b865190611df482611de8611dc46116b0898401610e82565b771723b7bb32b93730b731b2a1b7b73a3930b1ba20b236b4b760411b815260180190565b03858101845283610140565b6127ef565b611e04610ab26113e3565b156126bd5750845163f877cb1960e01b8152868180611e24878201611469565b0381885afa8015610c4357611e569188916126a3575b50611e4361149a565b6020815191012090602081519101201490565b15612692575b611ebf611e9d611e6a610931565b875190611df482611bf4611e826116b08a8401610e82565b6e17283937b334b632a1b932b0ba37b960891b8152600f0190565b601b80546001600160a01b0319166001600160a01b0392909216919091179055565b611eca601b5461071d565b843b1561261c5785518981526001600160a01b03909116848201908152604060208201819052600e908201526d283937b334b632a1b932b0ba37b960911b6060820152879082908190608001038183895af18015610c435761267f575b50611f3e611f36601b5461071d565b610b3161150a565b611faa611f88611f4c610931565b875190611df482611bf4611f646116b08a8401610e82565b7717283937bc3ca0b236b4b721b7b73a3930b1ba20b236b4b760411b815260180190565b601c80546001600160a01b0319166001600160a01b0392909216919091179055565b611fb5601c5461071d565b843b1561261c5785518981526001600160a01b0390911684820190815260406020820181905260179082015276283937bc3ca0b236b4b721b7b73a3930b1ba20b236b4b760491b6060820152879082908190608001038183895af18015610c435761266c575b5061203261202a601c5461071d565b610b31611538565b6120a7612085612080612043610931565b885190611df48261207461205b6116b08b8401610e82565b6c2e4469476948756250726f787960981b8152600d0190565b03878101845283610140565b61071d565b602380546001600160a01b0319166001600160a01b0392909216919091179055565b6120b561208060235461071d565b843b1561261c5785518981526001600160a01b03909116848201908152604060208201819052600790820152662234a3b4a43ab160c91b6060820152879082908190608001038183895af18015610c4357612659575b5061212561211d61208060235461071d565b610b3161156f565b612188612166612080612136610931565b885190611df48261207461214e6116b08b8401610e82565b6b2e4469476948616e646c657360a01b8152600c0190565b602680546001600160a01b0319166001600160a01b0392909216919091179055565b61219661208060265461071d565b843b1561261c5785518981526001600160a01b03909116848201908152604060208201819052600b908201526a4469476948616e646c657360a81b6060820152879082908190608001038183895af18015610c4357612646575b5061220a61220261208060265461071d565b610b3161159d565b61227561225361208061221b610931565b885190611df4826120746122336116b08b8401610e82565b732e546f6b656e48616e646c65526567697374727960601b815260140190565b602980546001600160a01b0319166001600160a01b0392909216919091179055565b61228361208060295461071d565b843b1561261c5785518981526001600160a01b0390911684820190815260406020820181905260139082015272546f6b656e48616e646c65526567697374727960681b6060820152879082908190608001038183895af18015610c4357612633575b506122ff6122f761208060295461071d565b610b316115c9565b612365612343612080612310610931565b885190611df4826120746123286116b08b8401610e82565b6e2e4d6f64756c65526567697374727960881b8152600f0190565b601f80546001600160a01b0319166001600160a01b0392909216919091179055565b612373612080601f5461071d565b843b1561261c5785518981526001600160a01b03909116848201908152604060208201819052600e908201526d4d6f64756c65526567697374727960901b6060820152879082908190608001038183895af18015610c4357612620575b506123ea6123e2612080601f5461071d565b610b316115fe565b6124546124326120806123fb610931565b885190611df4826120746124136116b08b8401610e82565b720b91dbdd995c9b985b98d950dbdb9d1c9858dd606a1b815260130190565b601a80546001600160a01b0319166001600160a01b0392909216919091179055565b612462612080601a5461071d565b843b1561261c5790866124b5928751809481928d835288830160809160018060a01b0316815260406020820152601260408201527111dbdd995c9b985b98d950dbdb9d1c9858dd60721b60608201520190565b038183895af1918215610c435761255e93611df4612080936116b09361253c96612609575b506124f46124ec612080601a5461071d565b610b3161162d565b6124fc610931565b9261253061250f8c519687938401610e82565b742e50726f66696c654372656174696f6e50726f787960581b815260150190565b03908101845283610140565b602a80546001600160a01b0319166001600160a01b0392909216919091179055565b61256c612080602a5461071d565b92823b15612605576125c39596859151968795869485938452830160809160018060a01b0316815260406020820152601460408201527350726f66696c654372656174696f6e50726f787960601b60608201520190565b03925af18015610c43576125ec575b506106706125e4612080602a5461071d565b610b31611660565b806125f96125ff92610112565b8061017e565b386125d2565b8480fd5b806125f961261692610112565b386124da565b8680fd5b806125f961262d92610112565b386123d0565b806125f961264092610112565b386122e5565b806125f961265392610112565b386121f0565b806125f961266692610112565b3861210b565b806125f961267992610112565b3861201b565b806125f961268c92610112565b38611f27565b856100d961269e6114c0565b612862565b6126b791503d808a833e610c358183610140565b38611e3a565b6126c860185461071d565b6001600160a01b03828116908216036126e2575050611e5c565b87916100d9916126f0611415565b61289e565b806125f961270292610112565b38611d8a565b806125f961271592610112565b38611ce4565b8780fd5b61273b91503d808a833e6127338183610140565b810190610f03565b38611731565b806125f961274e92610112565b38611ba6565b61276891503d808e833e6127338183610140565b38611af0565b806125f961277b92610112565b38611a82565b806125f961278e92610112565b386119cc565b8880fd5b6127ac91503d808b833e6127338183610140565b3861193e565b806125f96127bf92610112565b386118b8565b806125f96127d292610112565b38611805565b9091610f4d61079b93604084526040840190610c57565b604051631e19e65760e01b815291602091839182916128129190600484016127d8565b03816000600080516020613d7e8339815191525af1908115610c4357600091612839575090565b61079b915060203d8111610d7957610d6e8183610140565b90602061079b928181520190610c57565b612890610e196106709260405192839163104c13eb60e21b6020840152602060248401526044830190610c57565b03601f198101835282610140565b610e1990610670936128ce936040519485936307e763af60e51b6020860152606060248601526084850190610c57565b6001600160a01b0391821660448501529116606483015203601f198101835282610140565b80518210156129075760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b90916040519161292c836100f2565b6000928381526060602080920152835b82518110156129a65761296b868361295484876128f3565b510151906020815191012090602081519101201490565b6129945760001981146129805760010161293c565b634e487b7160e01b85526011600452602485fd5b929450506129a292506128f3565b5190565b60405162461bcd60e51b815260206004820152601060248201526f135bd91d5b19481b9bdd08199bdd5b9960821b6044820152606490fd5b6001600160a01b0390911681526001602082015260400190565b60405190612a0582610125565b603d82527f726567697374657265642061732070726f66696c652063726561746f720000006040837f0a2a202a202a2050726f66696c652063726561746f722070726f78792025732060208201520152565b60405190612a64826100f2565b6018825277028a880a880a88141c9bdd1bd8dbdb081d5b9c185d5cd95960421b6020830152565b612a96610ab26113e3565b15612b0a5760405163f877cb1960e01b815260008180612ab860048201611469565b0381600080516020613d7e8339815191525afa8015610c4357612ae591600091612af75750611e4361149a565b15612aec57565b61018961269e6114c0565b6126b7913d8091833e610c358183610140565b601754600080516020613d7e833981519152803b156101895760405163ce817d4760e01b81526004810192909252600091828160248183865af18015610c4357612c73575b50612b5e612080601a5461071d565b612b6c612080602a5461071d565b813b15612c6f57612b968492839260405194858094819363361f14ab60e11b8352600483016129de565b03925af18015610c4357612c5c575b50612bbf612bb7612080602a5461071d565b610b316129f8565b612bcd612080601a5461071d565b803b15612c58576040516310c3195b60e01b8152600060048201529083908290602490829084905af18015610c4357612c45575b50612c0d61269e612a57565b803b156100d5578190600460405180948193633b756e9b60e11b83525af18015610c4357612c385750565b806125f961067092610112565b806125f9612c5292610112565b38612c01565b8280fd5b806125f9612c6992610112565b38612ba5565b8380fd5b806125f9612c8092610112565b38612b4f565b90816020910312610189575180151581036101895790565b732791bca1f2de4661ed88a30c99a7a9449aa84174815260200190565b738f3cf7ad23cd3cadbd9735aff958023239c6a063815260200190565b737ceb23fd6bc0add59e62ac25578270cff1b9f619815260200190565b730d500b1d8e8ef31e21c99d1db9a6444d3adf1270815260200190565b60405190612d1f82610125565b6022825261637960f01b6040837f0a2a202a202a205553444320726567697374657265642061732063757272656e60208201520152565b906111fa60209282815194859201610729565b90610670602660405180946502aa9a2219d160d51b6020830152612d968151809260208686019101610729565b8101036006810185520183610140565b60405190612db382610125565b60218252607960f81b6040837f0a2a202a202a2044414920726567697374657265642061732063757272656e6360208201520152565b90610670602560405180946402220a49d160dd1b6020830152612e158151809260208686019101610729565b8101036005810185520183610140565b60405190612e3282610125565b6022825261637960f01b6040837f0a2a202a202a205745544820726567697374657265642061732063757272656e60208201520152565b90610670602660405180946502ba2aa241d160d51b6020830152612d968151809260208686019101610729565b60405190612ea382610125565b6024825263656e637960e01b6040837f0a2a202a202a20574d415449432072656769737465726564206173206375727260208201520152565b90610670602860405180946702ba6a0aa24a19d160c51b6020830152612f0b8151809260208686019101610729565b8101036008810185520183610140565b60145490600080516020613d7e83398151915291823b15610189576040805163ce817d4760e01b815260048082019390935290936000929091838160248183875af18015610c435761335e575b50612f77612080601f5461071d565b85518063acc3315560e01b928382526020928391818981612f998a8201612c9e565b03925af18015610c4357613341575b50612fb461269e612d12565b8651632b65311f60e11b8082529190868180612fd1888201612c9e565b0381895afa8015610c4357612fed918891613327575b50612d69565b92853b1561261c57885187818061301163619d897f60e01b988983528a8301610f5b565b0381838b5af18015610c4357613314575b50613031612080601f5461071d565b828a518092848252818b816130478c8201612cbb565b03925af18015610c43576132f7575b5061306261269e612da6565b8851838152878180613075898201612cbb565b03818a5afa8015610c43576130919189916132dd575b50612de9565b863b1561271b57876130ae918b51809381928983528a8301610f5b565b0381838b5af18015610c43576132ca575b506130ce612080601f5461071d565b828a518092848252818b816130e48c8201612cd8565b03925af18015610c43576132ad575b506130ff61269e612e25565b8851838152878180613112898201612cd8565b03818a5afa8015610c435761312e918991613293575b50612e69565b863b1561271b578761314b918b51809381928983528a8301610f5b565b0381838b5af18015610c4357613280575b508161316c612080601f5461071d565b8a519283528290818a816131818b8201612cf5565b03925af18015610c4357613252575b505061319d61269e612e96565b86519081528481806131b0868201612cf5565b0381875afa8015610c43576131cc918691613238575b50612edc565b90833b15612605576131eb918591885193849283928352868301610f5b565b038183875af18015610c4357613225575b50813b15612c58578293945180948193633b756e9b60e11b83525af18015610c4357612c385750565b806125f961323292610112565b386131fc565b61324c91503d8088833e610c358183610140565b386131c6565b8161327192903d10613279575b6132698183610140565b810190612c86565b503880613190565b503d61325f565b806125f961328d92610112565b3861315c565b6132a791503d808b833e610c358183610140565b38613128565b6132c390833d8511613279576132698183610140565b50386130f3565b806125f96132d792610112565b386130bf565b6132f191503d808b833e610c358183610140565b3861308b565b61330d90833d8511613279576132698183610140565b5038613056565b806125f961332192610112565b38613022565b61333b91503d808a833e610c358183610140565b38612fe7565b61335790823d8411613279576132698183610140565b5038612fa8565b806125f961336b92610112565b38612f68565b6001600160a01b0390911681526003602082015260400190565b6040519061339882610125565b60328252716420617320666f6c6c6f77206d6f64756c6560701b6040837f0a2a202a202a20466565466f6c6c6f774d6f64756c652072656769737465726560208201520152565b604051906133ec82610125565b60358252746572656420617320666f6c6c6f77206d6f64756c6560581b6040837f0a2a202a202a20526576657274466f6c6c6f774d6f64756c652072656769737460208201520152565b6040519061344382610125565b60348252731b98d9535bd91d5b19481c9959da5cdd195c995960621b6040837f0a2a202a202a20446567726565734f6653657061726174696f6e52656665726560208201520152565b6040519061349982610125565b602d82526c1b19481c9959da5cdd195c9959609a1b6040837f0a2a202a202a20466f6c6c6f7765724f6e6c795265666572656e63654d6f647560208201520152565b604051906134e882610125565b603b82527a7265676973746572656420617320616374696f6e206d6f64756c6560281b6040837f0a2a202a202a20436f6c6c6563745075626c69636174696f6e416374696f6e2060208201520152565b6040519061354582610125565b603a825279676973746572656420617320636f6c6c656374206d6f64756c6560301b6040837f0a2a202a202a2053696d706c65466565436f6c6c6563744d6f64756c6520726560208201520152565b60405190608082016001600160401b0381118382101761010d5760405260428252616c6560f01b6060837f0a2a202a202a204d756c7469726563697069656e74466565436f6c6c6563744d60208201527f6f64756c65207265676973746572656420617320636f6c6c656374206d6f647560408201520152565b60145490600080516020613d7e83398151915291823b15610189576040805163ce817d4760e01b815260048082019390935290936000929091838160248183875af18015610c43576139ad575b5061369961366d612080601f5461071d565b613678602f5461071d565b90875191826320d5a27760e11b9283825281898160209889968b8301613371565b03925af1918215610c43578692613990575b506136b761269e61338b565b826136e76136c9612080601f5461071d565b6136d460305461071d565b8b519586809481938883528b8301613371565b03925af1918215610c43578692613973575b5061370561269e6133df565b8261374a613717612080601f5461071d565b61372260315461071d565b8b519586809481938883528b83016001600160a01b0390911681526002602082015260400190565b03925af1918215610c43578692613956575b5061376861269e613436565b8261378561377a612080601f5461071d565b61372260325461071d565b03925af1908115610c43576137d4928492613939575b506137a761269e61348c565b6137b5612080601f5461071d565b6137c0602c5461071d565b91888b5180968195829483528a83016129de565b03925af18015610c435761391c575b506137ef61269e6134db565b613800612080612080602c5461071d565b61380b602d5461071d565b8751638e8b8c9760e01b8082526001600160a01b039092168582019081529092849184919082908a90829060200103925af1908115610c435761389d9284926138ff575b5061385b61269e613538565b61386c612080612080602c5461071d565b613877602e5461071d565b8a519283526001600160a01b03168683019081529193849283918a918391602090910190565b03925af18015610c43576138e1575b50506138b961269e613594565b813b15612c58578293945180948193633b756e9b60e11b83525af18015610c4357612c385750565b816138f792903d10613279576132698183610140565b5038806138ac565b61391590833d8511613279576132698183610140565b503861384f565b61393290823d8411613279576132698183610140565b50386137e3565b61394f90833d8511613279576132698183610140565b503861379b565b61396c90843d8611613279576132698183610140565b503861375c565b61398990843d8611613279576132698183610140565b50386136f9565b6139a690843d8611613279576132698183610140565b50386136ab565b806125f96139ba92610112565b3861365b565b60006139e8916040518093819263f877cb1960e01b8352602060048401526024830190610c57565b0381600080516020613d7e8339815191525afa9081613a11575b50613a0c57600090565b600190565b613a25903d806000833e610c358183610140565b5038613a02565b604051636c98507360e11b8152600090600080516020613d7e833981519152908281600481855afa8015610c4357613ac692613aab613a829286948591613afe575b50613a9d6040519485926020840190612d56565b6e17b0b2323932b9b9b2b9973539b7b760891b8152600f0190565b03601f198101845283610140565b60405180809581946360f9bb1160e01b835260048301612851565b03915afa908115610c4357826106709392613ae3575b5050610441565b613af792503d8091833e610c358183610140565b3880613adc565b613b1291503d8087833e610c358183610140565b38613a6e565b60405190613b25826100f2565b6014825273052a30b933b2ba1032b73b34b937b736b2b73a1d60611b6020830152565b60405190613b55826100f2565b60088252672732ba3bb7b9359d60c11b6020830152565b60405190613b79826100f2565b600882526721b430b4b724b21d60c11b6020830152565b613c24613b9b610931565b613be9613be460405180613bcb613bb76116b060208401610e82565b672e6e6574776f726b60c01b815260080190565b0393613bdf601f1995868101845283610140565b613cfa565b610515565b613bf1610931565b613c1f6040519283612530613c0b6116b060208401610e82565b670b98da185a5b925960c21b815260080190565b613c98565b613c3d613c2f613b18565b613c37610949565b90613d56565b613c50613c48613b48565b613c376109c8565b804603613c635761067090610ad8613b6c565b60405162461bcd60e51b815260206004820152600d60248201526c15dc9bdb99c818da185a5b9259609a1b6044820152606490fd5b6040516356eef15b60e11b81529160209183918291613cbb9190600484016127d8565b03816000600080516020613d7e8339815191525af1908115610c4357600091613ce2575090565b61079b915060203d8111610db157610da08183610140565b6040516309389f5960e31b81529160009183918291613d1d9190600484016127d8565b038183600080516020613d7e8339815191525af1908115610c4357600091613d43575090565b61079b913d8091833e610c358183610140565b90610e1961067092612890604051938492634b5c427760e01b6020850152602484016127d856fe0000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d446567726565734f6653657061726174696f6e5265666572656e63654d6f64754d756c7469726563697069656e74466565436f6c6c6563744d6f64756c650000a26469706673582212206e762cead2d0c7533fb4a9878000acc2aad54d77234f699765dd6271e94ce93164736f6c63430008150033";

type S05_GovernanceActionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: S05_GovernanceActionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class S05_GovernanceActions__factory extends ContractFactory {
  constructor(...args: S05_GovernanceActionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<S05_GovernanceActions> {
    return super.deploy(overrides || {}) as Promise<S05_GovernanceActions>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): S05_GovernanceActions {
    return super.attach(address) as S05_GovernanceActions;
  }
  override connect(signer: Signer): S05_GovernanceActions__factory {
    return super.connect(signer) as S05_GovernanceActions__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): S05_GovernanceActionsInterface {
    return new utils.Interface(_abi) as S05_GovernanceActionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): S05_GovernanceActions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as S05_GovernanceActions;
  }
}
