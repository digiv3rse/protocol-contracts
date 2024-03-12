/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  S04_PerformV2Upgrade,
  S04_PerformV2UpgradeInterface,
} from "../../S04_PerformV2Upgrade.s.sol/S04_PerformV2Upgrade";

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
    name: "testDiGiV1ToV2Upgrade",
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
  "0x6080806040523461002d57600160ff1981816004541617600455600c541617600c5561281590816100338239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081637ffd1092146100505781639352fad21461005557508063f0c0adc3146100505763f8ccbf471461004b57600080fd5b610196565b6100e1565b346100ce5760203660031901126100ce576004356001600160401b0381116100ca57366023820112156100ca57806004013590826100928361017b565b916100a06040519384610158565b83835236602485830101116100ca57836100c7946024602093018386013783010152610bd8565b80f35b5080fd5b80fd5b60009103126100dc57565b600080fd5b346100dc5760003660031901126100dc57005b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161011d57604052565b6100f4565b604081019081106001600160401b0382111761011d57604052565b606081019081106001600160401b0382111761011d57604052565b601f909101601f19168101906001600160401b0382119082101761011d57604052565b6001600160401b03811161011d57601f01601f191660200190565b346100dc5760003660031901126100dc57602060ff600c54166040519015158152f35b90600182811c921680156101e9575b60208310146101d357565b634e487b7160e01b600052602260045260246000fd5b91607f16916101c8565b601f81116101ff575050565b600090600d825260208220906020601f850160051c8301941061023d575b601f0160051c01915b82811061023257505050565b818155600101610226565b909250829061021d565b601f8111610253575050565b6000906012825260208220906020601f850160051c83019410610291575b601f0160051c01915b82811061028657505050565b81815560010161027a565b9092508290610271565b601f81116102a7575050565b6000906010825260208220906020601f850160051c830194106102e5575b601f0160051c01915b8281106102da57505050565b8181556001016102ce565b90925082906102c5565b601f81116102fb575050565b600090600f825260208220906020601f850160051c83019410610339575b601f0160051c01915b82811061032e57505050565b818155600101610322565b9092508290610319565b8160011b916000199060031b1c19161790565b80519091906001600160401b03811161011d5761037d81610378600d546101b9565b6101f3565b602080601f83116001146103b2575081906103a293946000926103a7575b5050610343565b600d55565b01519050388061039b565b600d600052601f198316949091907fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5926000905b87821061041e575050836001959610610405575b505050811b01600d55565b015160001960f88460031b161c191690553880806103fa565b806001859682949686015181550195019301906103e6565b80519091906001600160401b03811161011d5761045d816104586012546101b9565b610247565b602080601f83116001146104865750819061048193946000926103a7575050610343565b601255565b6012600052601f198316949091907fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444926000905b8782106104f25750508360019596106104d9575b505050811b01601255565b015160001960f88460031b161c191690553880806104ce565b806001859682949686015181550195019301906104ba565b80519091906001600160401b03811161011d576105318161052c6010546101b9565b61029b565b602080601f831160011461055a5750819061055593946000926103a7575050610343565b601055565b6010600052601f198316949091907f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae672926000905b8782106105c65750508360019596106105ad575b505050811b01601055565b015160001960f88460031b161c191690553880806105a2565b8060018596829496860151815501950193019061058e565b80519091906001600160401b03811161011d5761060581610600600f546101b9565b6102ef565b602080601f831160011461062e5750819061062993946000926103a7575050610343565b600f55565b600f600052601f198316949091907f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802926000905b87821061069a575050836001959610610681575b505050811b01600f55565b015160001960f88460031b161c19169055388080610676565b80600185968294968601518155019501930190610662565b6001600160a01b031690565b908160209103126100dc57516001600160a01b03811681036100dc5790565b6040513d6000823e3d90fd5b604051906106f682610122565b601e82527f446947694875622043757272656e7420676f7665726e616e63653a20257300006020830152565b1561072957565b60405162461bcd60e51b815260206004820152603660248201527f4469476948756220476f7665726e616e63652073686f756c6420626520736574604482015275081d1bc811dbdd995c9b985b98d950dbdb9d1c9858dd60521b6064820152608490fd5b6040519061079a82610122565b601e82527f70726f787941646d696e436f6e7472616374206f776e657228293a20257300006020830152565b604051906107d382610122565b601e82527f676f7665726e616e6365436f6e7472616374206f776e657228293a20257300006020830152565b6040519061080c82610122565b60168252751111541313d65351539517d15395925493d39351539560521b6020830152565b6040519061083e8261013d565b604082526000805160206127c08339815191526040837f4368616e676564207468652070726f787941646d696e436f6e7472616374206360208201520152565b6040519061088b8261013d565b604082526000805160206127c08339815191526040837f4368616e6765642074686520676f7665726e616e6365436f6e7472616374206360208201520152565b604051906108d88261013d565b602b82526a747261637428293a20257360a81b6040837f70726f787941646d696e436f6e747261637420636f6e74726f6c6c6572436f6e60208201520152565b604051906109258261013d565b602b82526a747261637428293a20257360a81b6040837f676f7665726e616e6365436f6e747261637420636f6e74726f6c6c6572436f6e60208201520152565b6040519061097282610122565b60168252754e657720496d706c656d656e746174696f6e3a20257360501b6020830152565b604051906109a48261013d565b60278252664d494e3a20257360c81b6040837f446947695632205570677261646520436f6e74726163742050524f58595f414460208201520152565b604051906109ed8261013d565b602682526543453a20257360d01b6040837f446947695632205570677261646520436f6e747261637420474f5645524e414e60208201520152565b60405190610a3582610122565b60118252705570677261646520636f6d706c6574652160781b6020830152565b908160209103126100dc575190565b60405190610a7182610122565b60138252722732bb9034b6b83632b6b2b73a30ba34b7b71d60691b6020830152565b60005b838110610aa65750506000910152565b8181015183820152602001610a96565b6020818303126100dc578051906001600160401b0382116100dc570181601f820112156100dc578051610ae88161017b565b92610af66040519485610158565b818452602082840101116100dc57610b149160208085019101610a93565b90565b60405190610b2482610122565b600a825269383937b23ab1ba34b7b760b11b6020830152565b60405190610b4a8261013d565b602882526737b23ab1ba34b7b760c11b6040837f4445504c4f594d454e545f454e5649524f4e4d454e54206973206e6f7420707260208201520152565b60405190610b948261013d565b602f82526e371037b710383937b23ab1ba34b7b760891b6040837f5468697320736372697074206973206e6f7420616c6c6f77656420746f20727560208201520152565b610be190610356565b610be961244e565b610bf16125b2565b610bf9611973565b610c0161204c565b610c14610c0f601c546106b2565b6106b2565b6040805163289b3c0d60e01b815260209360049391929185908490869082905afa928315610ed85760009361144c575b50610c5683610c516106e9565b6114f8565b610c64610c0f601f546106b2565b6001600160a01b0393610c7c90851682861614610722565b610c8a610c0f6021546106b2565b83519087828881638da5cb5b60e01b948582525afa918215610ed8578892610cbd9160009161142f575b50610c5161078d565b8685518094819382525afa8015610ed857610ce391600091611412575b50610c516107c6565b610cf3610cee6107ff565b6123cb565b15610f7d5750805163f877cb1960e01b815260008180610d408782016060906020815260166020820152751111541313d65351539517d15395925493d39351539560521b60408201520190565b03816000805160206127a08339815191525afa8015610ed857610d8191600091610f5c575b50610d6e610b17565b6020815191012090602081519101201490565b15610f5157610d94610c0f6021546106b2565b815185818681635ad00e2760e11b958682525afa8015610ed857610dc391600091610f34575b50610c516108cb565b84610dd2610c0f601f546106b2565b918584518094819382525afa8015610ed857610df991600091610f17575b50610c51610918565b610e07610c0f601e546106b2565b9080516376cde41560e11b815285818681865afa908115610ed857610e3a918591600091610efa575b5016610c51610997565b80516305189e0d60e21b815285818681865afa938415610ed8578694610e6c92600091610edd575b5016610c516109e0565b51638b677b0360e01b815292839182905afa908115610ed857610e9b92600092610eab575b5050610c51610965565b6100dc610ea6610b87565b6114a1565b610eca9250803d10610ed1575b610ec28183610158565b8101906106be565b3880610e91565b503d610eb8565b6106dd565b610ef49150863d8811610ed157610ec28183610158565b38610e62565b610f119150883d8a11610ed157610ec28183610158565b38610e30565b610f2e9150863d8811610ed157610ec28183610158565b38610df0565b610f4b9150873d8911610ed157610ec28183610158565b38610dba565b6100dc610ea6610b3d565b610f77913d8091833e610f6f8183610158565b810190610ab6565b38610d65565b9392601954916000805160206127a083398151915292833b156100dc57815163f67a965b60e01b8082528482019283529160009082908190602001038183895af18015610ed8576113ff575b50610fd8610c0f6021546106b2565b610fe6610c0f601e546106b2565b90803b156100dc5783516308dfb51360e41b8082526001600160a01b03909316868201908152909160009183919082908490829060200103925af18015610ed8576113ec575b5061104b61103e610c0f601e546106b2565b611046610831565b611546565b601654853b156100dc57835183815285810191825290600090829081906020010381838a5af18015610ed8576113d9575b5061108b610c0f601f546106b2565b9061109a610c0f601e546106b2565b823b156100dc5784519182526001600160a01b0316858201908152909160009183919082908490829060200103925af18015610ed8576113c6575b506110e4610c0f601e546106b2565b6110f08161104661087e565b6110fe610c0f6021546106b2565b835188818781635ad00e2760e11b958682525afa8015610ed85761112c916000916113af5750610c516108cb565b8761113b610c0f601f546106b2565b918686518094819382525afa8015610ed857611161916000916113985750610c51610918565b8251638b677b0360e01b815287818681855afa8015610ed85761118f9160009161137b575b50610c51610965565b82516376cde41560e11b815287818681855afa918215610ed8576111c28887948b94600091611364575016610c51610997565b84516305189e0d60e21b815292839182905afa908115610ed8576111f391879160009161134d575016610c516109e0565b60165490843b156100dc5782519081528381019182529060009082908190602001038183885af18015610ed85761133a575b50611234610c0f601e546106b2565b92833b156100dc57600080948484518097819363bf78051160e01b83525af1928315610ed8576112d0948794611321575b50611271610ea6610a28565b61127f610c0f601c546106b2565b9251630667f9d760e41b81526001600160a01b039093169083019081527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6020820152919384928391829160400190565b03915afa908115610ed8576112f2936000926112f4575b505016610c51610a64565b565b6113139250803d1061131a575b61130b8183610158565b810190610a55565b38806112e7565b503d611301565b8061132e6113349261010a565b806100d1565b38611265565b8061132e6113479261010a565b38611225565b610ef49150893d8b11610ed157610ec28183610158565b610f119150853d8711610ed157610ec28183610158565b6113929150893d8b11610ed157610ec28183610158565b38611186565b610f2e9150893d8b11610ed157610ec28183610158565b610f4b91508a3d8c11610ed157610ec28183610158565b8061132e6113d39261010a565b386110d5565b8061132e6113e69261010a565b3861107c565b8061132e6113f99261010a565b3861102c565b8061132e61140c9261010a565b38610fc9565b6114299150873d8911610ed157610ec28183610158565b38610cda565b6114469150843d8611610ed157610ec28183610158565b38610cb4565b611464919350853d8711610ed157610ec28183610158565b9138610c44565b9060209161148481518092818552858086019101610a93565b601f01601f1916010190565b906020610b1492818152019061146b565b6114cf6114dd6112f29260405192839163104c13eb60e21b602084015260206024840152604483019061146b565b03601f198101835282610158565b600080916020815191016a636f6e736f6c652e6c6f675afa50565b6114dd611527916112f29360405193849263319af33360e01b602085015260406024850152606484019061146b565b6001600160a01b0391909116604483015203601f198101835282610158565b6114dd611575916112f2936040519384926307e763af60e51b602085015260606024850152608484019061146b565b600060448401526001600160a01b03909116606483015203601f198101835282610158565b60405190600082601054916115ae836101b9565b80835260209360019081811690811561161a57506001146115d8575b50506112f292500383610158565b90939150601060005281600020936000915b8183106116025750506112f2935082010138806115ca565b855488840185015294850194879450918301916115ea565b9150506112f294925060ff191682840152151560051b82010138806115ca565b604051906000826012549161164e836101b9565b80835260209360019081811690811561161a57506001146116775750506112f292500383610158565b90939150601260005281600020936000915b8183106116a15750506112f2935082010138806115ca565b85548884018501529485019487945091830191611689565b60405190600082600d54916116cd836101b9565b80835260209360019081811690811561161a57506001146116f65750506112f292500383610158565b90939150600d60005281600020936000915b8183106117205750506112f2935082010138806115ca565b85548884018501529485019487945091830191611708565b60405190600082600f549161174c836101b9565b80835260209360019081811690811561161a57506001146117755750506112f292500383610158565b90939150600f60005281600020936000915b81831061179f5750506112f2935082010138806115ca565b85548884018501529485019487945091830191611787565b601760f91b815260010190565b600d54600092916117d4826101b9565b9160019081811690811561182557506001146117ef57505050565b9091929350600d60005260209081600020906000915b85831061181457505050500190565b805485840152918301918101611805565b60ff191683525050811515909102019150565b6040519061184582610122565b601282527144694769204875622050726f78793a20257360701b6020830152565b6040519061187382610122565b601c82527b44694769205632205570677261646520436f6e74726163743a20257360201b6020830152565b604051906118ab82610122565b6017825276476f7665726e616e636520436f6e74726163743a20257360481b6020830152565b6001600160a01b039091168152604060208201819052600a9082015269283937bc3ca0b236b4b760b11b606082015260800190565b6040519061191382610122565b601e82527f4469476948756250726f78792043757272656e742041646d696e3a20257300006020830152565b6040519061194c82610122565b601882527750726f78792041646d696e20436f6e74726163743a20257360401b6020830152565b61197b61159a565b906040918251926119d1602094806119b861199f61199a8984016117b7565b6117c4565b6c2e4469476948756250726f787960981b8152600d0190565b03936119cc601f1995868101845283610158565b611ec9565b601c80546001600160a01b0319166001600160a01b03838116918217909255919590926000805160206127a08339815191529291833b156100dc578151956318caf8e360e31b98898852600097600495898280611a5a868b830160809160018060a01b031681526040602082015260076040820152662234a3b4a43ab160c91b60608201520190565b0381838c5af1918215610ed857611aac92611e91575b50611a8a611a82610c0f601c546106b2565b610c51611838565b601d80546001600160a01b0319166001600160a01b0392909216919091179055565b611afd611ab761159a565b8551906119cc82611af1611acf61199a8a84016117b7565b750b911a51da558c955c19dc98591950dbdb9d1c9858dd60521b815260160190565b03868101845283610158565b601e80546001600160a01b0319166001600160a01b03838b1616179055863b15611e7a5784518b81526001600160a01b0390911686820190815260406020820181905260159082015274111a51da558c955c19dc98591950dbdb9d1c9858dd605a1b60608201528990829081906080010381838b5af18015610ed857611e7e575b50611b98611b90610c0f601e546106b2565b610c51611866565b611bda611ba361159a565b8551906119cc82611af1611bbb61199a8a84016117b7565b720b91dbdd995c9b985b98d950dbdb9d1c9858dd606a1b815260130190565b601f80546001600160a01b0319166001600160a01b03838b1616179055863b15611e7a579088611c4b928c8751948592839283528a830160809160018060a01b0316815260406020820152601260408201527111dbdd995c9b985b98d950dbdb9d1c9858dd60721b60608201520190565b0381838b5af1908115610ed857611cce928592611e67575b50611c7d611c75610c0f601f546106b2565b610c5161189e565b8551630667f9d760e41b81526001600160a01b039091168782019081527fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036020820152909283918291604090910190565b0381895afa908115610ed857611d0a9188918a91611e4a575b5060208054919092166001600160a01b03166001600160a01b0319909116179055565b611d1482546106b2565b853b15611e465787611d32918b8651938492839283528983016118d1565b0381838a5af1928315610ed8576119cc611daf9361199a93611dd496611e33575b50611d69611d6184546106b2565b610c51611906565b611d7161159a565b92611da3611d84895196879384016117b7565b720b941c9bde1e50591b5a5b90dbdb9d1c9858dd606a1b815260130190565b03908101845283610158565b602180549682166001600160a01b03166001600160a01b031990971696909617909555565b823b15611e2f57611df3959685915196879586948593845283016118d1565b03925af18015610ed857611e1c575b506112f2611e14610c0f6021546106b2565b610c5161193f565b8061132e611e299261010a565b38611e02565b8480fd5b8061132e611e409261010a565b38611d53565b8780fd5b611e619150853d871161131a5761130b8183610158565b38611ce7565b8061132e611e749261010a565b38611c63565b8880fd5b8061132e611e8b9261010a565b38611b7e565b8061132e611e9e9261010a565b38611a70565b9091611ebb610b149360408452604084019061146b565b91602081840391015261146b565b604051631e19e65760e01b81529160209183918291611eec919060048401611ea4565b038160006000805160206127a08339815191525af1908115610ed857600091611f13575090565b610b14915060203d8111610ed157610ec28183610158565b60405190611f3882610122565b60088252674d4e454d4f4e494360c01b6020830152565b60405190611f5c82610122565b60018252600560f91b6020830152565b60405190611f7982610122565b60148252734465706c6f79657220616464726573733a20257360601b6020830152565b60405190611fa98261013d565b60218252607360f81b6040837f476f7665726e616e6365206d6f636b206f776e657220616464726573733a202560208201520152565b60405190611fec8261013d565b60218252607360f81b6040837f50726f787941646d696e206d6f636b206f776e657220616464726573733a202560208201520152565b6040519061202f82610122565b600e82526d21bab93932b73a10313637b1b59d60911b6020830152565b612057610cee611f2b565b6121c7575b6120676012546101b9565b1561218f57612077610ea6611f4f565b6120b561209361208d61208861163a565b61228d565b60135590565b601480546001600160a01b0319166001600160a01b0392909216919091179055565b6120cb6120c36014546106b2565b610c51611f6c565b6121096120e76120e16120dc61163a565b61234c565b60165590565b601780546001600160a01b0319166001600160a01b0392909216919091179055565b61211f6121176017546106b2565b610c51611f9c565b61215d61213b61213561213061163a565b61236a565b60195590565b601a80546001600160a01b0319166001600160a01b0392909216919091179055565b61217361216b601a546106b2565b610c51611fdf565b61217e610ea6611f4f565b6112f24361218a612022565b612388565b60405162461bcd60e51b815260206004820152601060248201526f4d697373696e67206d6e656d6f6e696360801b6044820152606490fd5b60405163f877cb1960e01b81526020600482015260086024820152674d4e454d4f4e494360c01b60448201526000816064816000805160206127a08339815191525afa8015610ed85761222291600091612227575b50610436565b61205c565b61223a913d8091833e610f6f8183610158565b3861221c565b9190602061225860009260408652604086019061146b565b930152565b9190602061225860019260408652604086019061146b565b9190602061225860029260408652604086019061146b565b60405190636229498b60e01b8252816122ab60209260048301612240565b0381836000805160206127a08339815191529281845afa928315610ed857600093612324575b50604051630884001960e21b815260048101849052908290829081600081602481015b03925af1918215610ed85760009261230b57505091565b6123219250803d10610ed157610ec28183610158565b91565b60009193506122f46123438492833d851161131a5761130b8183610158565b949250506122d1565b60405190636229498b60e01b8252816122ab6020926004830161225d565b60405190636229498b60e01b8252816122ab60209260048301612275565b6114dd6123b7916112f2936040519384926309710a9d60e41b602085015260406024850152606484019061146b565b90604483015203601f198101835282610158565b60006123f3916040518093819263f877cb1960e01b835260206004840152602483019061146b565b03816000805160206127a08339815191525afa908161241c575b5061241757600090565b600190565b612430903d806000833e610f6f8183610158565b503861240d565b9061244a60209282815194859201610a93565b0190565b604051636c98507360e11b81526000906000805160206127a0833981519152908281600481855afa8015610ed8576124e8926124cd6124a49286948591612520575b506124bf6040519485926020840190612437565b6e17b0b2323932b9b9b2b9973539b7b760891b8152600f0190565b03601f198101845283610158565b60405180809581946360f9bb1160e01b835260048301611490565b03915afa908115610ed857826112f29392612505575b505061050a565b61251992503d8091833e610f6f8183610158565b38806124fe565b61253491503d8087833e610f6f8183610158565b38612490565b6040519061254782610122565b6014825273052a30b933b2ba1032b73b34b937b736b2b73a1d60611b6020830152565b6040519061257782610122565b60088252672732ba3bb7b9359d60c11b6020830152565b6040519061259b82610122565b600882526721b430b4b724b21d60c11b6020830152565b6126466125bd61159a565b61260b612606604051806125ed6125d961199a602084016117b7565b672e6e6574776f726b60c01b815260080190565b0393612601601f1995868101845283610158565b61271c565b6105de565b61261361159a565b6126416040519283611da361262d61199a602084016117b7565b670b98da185a5b925960c21b815260080190565b6126ba565b61265f61265161253a565b6126596116b9565b90612778565b61267261266a61256a565b612659611738565b804603612685576112f29061218a61258e565b60405162461bcd60e51b815260206004820152600d60248201526c15dc9bdb99c818da185a5b9259609a1b6044820152606490fd5b6040516356eef15b60e11b815291602091839182916126dd919060048401611ea4565b038160006000805160206127a08339815191525af1908115610ed857600091612704575090565b610b14915060203d811161131a5761130b8183610158565b6040516309389f5960e31b8152916000918391829161273f919060048401611ea4565b0381836000805160206127a08339815191525af1908115610ed857600091612765575090565b610b14913d8091833e610f6f8183610158565b906114dd6112f2926114cf604051938492634b5c427760e01b602085015260248401611ea456fe0000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d6f6e74726f6c6c657220636f6e74726163742066726f6d20257320746f202573a2646970667358221220f06d8e00877f1747c7fad7c4556ff41853ff012d938c8dffc00eb816763d082364736f6c63430008150033";

type S04_PerformV2UpgradeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: S04_PerformV2UpgradeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class S04_PerformV2Upgrade__factory extends ContractFactory {
  constructor(...args: S04_PerformV2UpgradeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<S04_PerformV2Upgrade> {
    return super.deploy(overrides || {}) as Promise<S04_PerformV2Upgrade>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): S04_PerformV2Upgrade {
    return super.attach(address) as S04_PerformV2Upgrade;
  }
  override connect(signer: Signer): S04_PerformV2Upgrade__factory {
    return super.connect(signer) as S04_PerformV2Upgrade__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): S04_PerformV2UpgradeInterface {
    return new utils.Interface(_abi) as S04_PerformV2UpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): S04_PerformV2Upgrade {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as S04_PerformV2Upgrade;
  }
}