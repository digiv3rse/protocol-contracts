/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProfileSVG, ProfileSVGInterface } from "../ProfileSVG";

const _abi = [
  {
    type: "function",
    name: "getProfileSVG",
    inputs: [
      {
        name: "profileId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "blockSeed",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
] as const;

const _bytecode =
  "0x6080806040523461001a576125a99081610020823930815050f35b600080fdfe600436101561000d57600080fd5b60003560e01c63806c6aeb1461002257600080fd5b6040366003190112611d7e5760043560a081815260243560c052604060805260e06040526080519020906102a0604052600060e08190526101008190526101208190526101408190526101608190526101808190526101a08190526101c08190526101e0819052610200819052610220819052610240819052610260819052610280526103e88111611d9d5760035b6100ba81611e56565b60e0526103e88111611d835760035b6100d281611e56565b608080015260ff6003818460c81c1606166100ec81611f2d565b6100f581611f2d565b60a06080015260ff6003818460c01c16061661011081611f2d565b61011981611f2d565b60c06080015260ff6003818460281c16061661013481611f2d565b61013d81611f2d565b61016052602082901c60031661015281611e56565b61015b81611e56565b6101006080015260ff6005818460d81c16061661017781611f37565b61018081611f37565b6101a052604082901c60031661019581611e56565b61019e81611e56565b6101406080015260ff6005818460b81c1606166101ba81611f37565b6101c381611f37565b61016060800152600e60ff81818560101c160616101561160957600e60ff601084901c81169190910616610260526103e8101561028081905260405163085a768d60e31b81526004810192909252602482015260008160448173__$7855b62e8b31a9fcc7bb11a3ba5bf1044e$__5af4908115611c5c57600091600091600091611d1b575b5060078110156116095761024052600d811015611609576102205260e0516102789061027381611e56565b611e60565b9060a06080015161028881611f2d565b604051635600a86360e01b81529061029f81611f2d565b600482015260008160248173__$d126fce042c4f389b948b334953c7040b2$__5af4908115611c5c57600091611d00575b5061014051926102df84611f2d565b6040516309886cab60e31b8152936102f681611f2d565b600485015260008460248173__$878c40d00c0bba291303ba416b95520be0$__5af4938415611c5c57600094611ce3575b50610180519061033682611e56565b6101a05160ff9061034681611f37565b6101605161035381611f2d565b610100519161036183611e56565b61036a83611e56565b610375848416611e56565b604051630fc1a31360e01b81529561038c81611e56565b600487015261039a81611f37565b60248601526103a881611f2d565b60448501526103b8828216611e56565b16606483015260008260848173__$710c102e5fa4a04316d9379a7b16d25969$__5af4918215611c5c57600092611cc6575b506101c051916103f983611e56565b6101e05161040681611f37565b6101805161041381611e56565b6101a0519161042183611f37565b60405163027a46dd60e41b81529561043881611e56565b600487015261044681611f37565b602486015261045481611e56565b604485015261046281611f37565b606484015260008360848173__$a476c09d4708b06d4003108cf0b87653d0$__5af4928315611c5c57600093611ca9575b5061010051936104a285611e56565b6104ab85611e56565b6104b760ff8616611e56565b604051630956551360e41b81529460ff906104d3818316611e56565b16600486015260008560248173__$2357399676040666229e15ed3b53bacfe6$__5af4948515611c5c57600095611c8c575b506102605196600e881015611609576102805115611c855760015b604051986379aa545760e01b8a5260048a0152600281101561160957602489015260008860448173__$c34af807c6d4d03395e2cc147552cf15ab$__5af4978815611c5c57600098611c68575b50610160519061057c82611f2d565b6101005161058981611e56565b61059281611e56565b61059e60ff8216611e56565b610180516105ab81611e56565b6101a0519160ff906105bc84611f37565b60405160016219213b60e01b03198152956105d681611f2d565b60048701526105e6828216611e56565b1660248501526105f581611e56565b604484015261060381611f37565b606483015260008260848173__$6243675c480d67e48377cdf494f50c5821$__5af4918215611c5c57600092611c37575b506102805115611bfe57604051916001600160401b036102a0840190811190841117611be85760008051602061255483398151915299610f5c996104819961096b99610a1498876102a06020990160405261026681526000805160206125148339815191528982015260008051602061253483398151915260408201527f2066696c6c3d226e6f6e65223e3c706174682066696c6c3d222366666622207360608201527f74726f6b653d222342393633323622207374726f6b652d6c696e656361703d2260808201527f73717561726522207374726f6b652d6c696e656a6f696e3d22726f756e64222060a08201527f7374726f6b652d77696474683d22332e352220643d224d31332e33203839632e60c08201527f312d2e332e352d2e332e362030203220352e3520362031302031312e3320313160e08201527f2e39762e316c2d2e352e32632d3520312e382d382e3920362d31302e362031316101008201527f2e33762e31632d2e312e322d2e352e322d2e35203076306131392031392030206101208201527f3020302d31312e342d31322e3176302d2e32682e3363352d312e3820392d36206101408201527f31302e382d31312e3476305a222f3e3c706174682066696c6c3d2223666666226101608201527f207374726f6b653d222342393633323622207374726f6b652d6c696e656361706101808201527f3d2273717561726522207374726f6b652d6c696e656a6f696e3d22726f756e646101a08201527f22207374726f6b652d77696474683d22332220643d224d31392e36203132302e6101c08201527f3563302d2e322e332d2e322e342030613132203132203020302030203720372e6101e08201527f357630632e312030202e312e312030202e316c2d2e332e316131312e312031316102008201527f2e312030203020302d362e3720372e3268306330202e322d2e322e322d2e33206102208201527f3076306131322e312031322e312030203020302d372e312d372e3676302d2e316102408201527f6c2e312d2e3161313120313120302030203020362e392d372e3176305a222f3e610260820152651e17b9bb339f60d11b610280820152965b886040519d8e8c83829e51948593019101611db5565b8a0161097f825180938c8085019101611db5565b01610992825180938b8085019101611db5565b016109a5825180938a8085019101611db5565b016109b882518093898085019101611db5565b016109cb82518093888085019101611db5565b016109de82518093878085019101611db5565b016109f182518093868085019101611db5565b01610a0482518093858085019101611db5565b010103601f198101845283611e33565b604051948592600080516020612514833981519152928360208601527f30302f737667222077696474683d2232373522206865696768743d223237352260408601526f103334b6361e913737b732911f1e339f60811b60608601526f078e0c2e8d040ccd2d8d87a44eae4d8560831b6070860152610a9c815180926020608089019101611db5565b8401927b149110321e912698101834191b9abb1a189aa4183d11179f1e17b39f60211b6080850152609c84015260008051602061253483398151915260bc8401527f2066696c6c3d226e6f6e65222069643d22636f6e7461696e65722220783d223560dc840152791911103b34b2bba137bc1e9118101810191b18101a189a91101f60311b60fc84015261011692610b3d8251809360208785019101611db5565b01918201527f677265656e222063783d2230222063793d22302220723d2231222067726164696101368201527f656e745472616e73666f726d3d226d617472697828323735202d3237352033366101568201527f32203336322030203237352922206772616469656e74556e6974733d227573656101768201527f7253706163654f6e557365223e3c73746f702073746f702d636f6c6f723d22236101968201527f444646464246222f3e3c73746f70206f66667365743d2231222073746f702d636101b68201527f6f6c6f723d2223454644222f3e3c2f72616469616c4772616469656e743e3c726101d68201527f616469616c4772616469656e742069643d22707572706c65222063783d2230226101f68201527f2063793d22302220723d223122206772616469656e745472616e73666f726d3d6102168201527f226d617472697828323735202d323735203336322033363220302032373529226102368201527f206772616469656e74556e6974733d227573657253706163654f6e557365223e6102568201527f3c73746f702073746f702d636f6c6f723d2223463145344646222f3e3c73746f6102768201527f70206f66667365743d2231222073746f702d636f6c6f723d22234638463146466102968201527f222f3e3c2f72616469616c4772616469656e743e3c72616469616c47726164696102b68201527f656e742069643d22626c7565222063783d2230222063793d22302220723d22316102d68201527f22206772616469656e745472616e73666f726d3d226d617472697828323735206102f68201527f2d32373520333632203336322030203237352922206772616469656e74556e696103168201527f74733d227573657253706163654f6e557365223e3c73746f702073746f702d636103368201527f6f6c6f723d2223453645414646222f3e3c73746f70206f66667365743d2231226103568201527f2073746f702d636f6c6f723d2223454646324646222f3e3c2f72616469616c476103768201527f72616469656e743e3c72616469616c4772616469656e742069643d2279656c6c6103968201527f6f77222063783d2230222063793d22302220723d223122206772616469656e746103b68201527f5472616e73666f726d3d226d617472697828323735202d3237352033363220336103d68201527f36322030203237352922206772616469656e74556e6974733d227573657253706103f68201527f6163654f6e557365223e3c73746f702073746f702d636f6c6f723d22234646456104168201527f374135222f3e3c73746f70206f66667365743d2231222073746f702d636f6c6f6104368201527f723d2223464646324345222f3e3c2f72616469616c4772616469656e743e3c2f6104568201526a3232b3399f1e17b9bb339f60a91b61047682015203610461810184520182611e33565b60e05190610f6982611e56565b606091610f7581611e56565b80611b8e57509050610f85611fa3565b905b610ff4604760405180947f7b2274726169745f74797065223a224261636b67726f756e64222c2276616c7560208301526332911d1160e11b6040830152610fd8815180926020604486019101611db5565b810162089f4b60ea1b6044820152036027810185520183611e33565b6101005161100181611e56565b60609061100d81611e56565b80611b1057505061136f6020611021611fa3565b935b611083604160405180977f7b2274726169745f74797065223a22536b696e222c2276616c7565223a220000868301526110658151809288603e86019101611db5565b810162089f4b60ea1b603e8201526021828203018252030186611e33565b6101205161109081611f2d565b60609061109c81611f2d565b80611ad65750506110ab611fa3565b611109604160405180937f7b2274726169745f74797065223a224c656773222c2276616c7565223a220000878301526110ed8151809289603e86019101611db5565b810162089f4b60ea1b603e820152036021810184520182611e33565b6101405161111681611f2d565b60609061112281611f2d565b80611a9c575050611131611fa3565b61118f604260405180937f7b2274726169745f74797065223a2253686f6573222c2276616c7565223a220088830152611173815180928a603f86019101611db5565b810162089f4b60ea1b603f820152036022810184520182611e33565b610160516111a5906111a081611f2d565b612026565b610180516111b281611e56565b6060906111be81611e56565b806119f25750506040516111d181611e18565b6006815265486f6f64696560d01b86820152915b611243604160405180957f7b2274726169745f74797065223a22426f6479222c2276616c7565223a2200008a830152611227815180928c603e86019101611db5565b810162089f4b60ea1b603e820152036021810186520184611e33565b6101a05161125081611f37565b60609061125c81611f37565b8061197c57505061126b611fa3565b935b6112d8604760405180977f7b2274726169745f74797065223a22426f647920436f6c6f72222c2276616c758b8301526332911d1160e11b60408301526112bc815180928d604486019101611db5565b810162089f4b60ea1b6044820152036027810188520186611e33565b60405199866112f08c985180928b808c019101611db5565b8701611304825180938b8085019101611db5565b01611317825180938a8085019101611db5565b0161132a82518093898085019101611db5565b0161133d82518093888085019101611db5565b0161135082518093878085019101611db5565b0161136382518093868085019101611db5565b01038085520183611e33565b6101c05161137c81611e56565b60609061138881611e56565b806118ea57505060405161139b81611e18565b6005815264486170707960d81b6020820152915b6113f3604160405180957f7b2274726169745f74797065223a224c6f676f222c2276616c7565223a2200006020830152611227815180926020603e86019101611db5565b6101e05161140081611f37565b60609061140c81611f37565b8061187457505061141b611fa3565b925b61148a604760405180967f7b2274726169745f74797065223a224c6f676f20436f6c6f72222c2276616c7560208301526332911d1160e11b604083015261146e815180926020604486019101611db5565b810162089f4b60ea1b6044820152036027810187520185611e33565b61026051600e811015611609576060908061161f5750506040516114ad81611e18565b6009815268427562626c6567756d60b81b60208201525b6115226040805180937f7b2274726169745f74797065223a2246616365222c2276616c7565223a2200006020830152611507815180926020603e86019101611db5565b810161227d60f01b603e820152036020810184520182611e33565b61022051600d81101561160957611538906120eb565b6102405190936007821015611609576115f796611605956115e39461155e60209561239e565b9260405197856115778a975180928a808b019101611db5565b860161158b825180938a8085019101611db5565b0161159e82518093898085019101611db5565b016115b182518093888085019101611db5565b016115c482518093878085019101611db5565b016115d782518093868085019101611db5565b01038084520182611e33565b604051938493604085526040850190611dd8565b908382036020850152611dd8565b0390f35b634e487b7160e01b600052602160045260246000fd5b6001810361165257505060405161163581611e18565b600b81526a4772696e20546f6e67756560a81b60208201526114c4565b6002810361167e57505060405161166881611e18565b600481526323b934b760e11b60208201526114c4565b600381036116ab57505060405161169481611e18565b6005815264098c2eaced60db1b60208201526114c4565b600481036116d75750506040516116c181611e18565b60048152634c6f766560e01b60208201526114c4565b600581036117035750506040516116ed81611e18565b60048152634f6f707360e01b60208201526114c4565b6006810361173157505060405161171981611e18565b6006815265536c6565707960d01b60208201526114c4565b6007810361176457505060405161174781611e18565b600b81526a0a6dad2d8ca40a8cacae8d60ab1b60208201526114c4565b6008810361179157505060405161177a81611e18565b6005815264536d696c6560d81b60208201526114c4565b600981036117bf5750506040516117a781611e18565b6005815264536d69726b60d81b60208201525b6114c4565b600a81036117ed5750506040516117d581611e18565b6006815265546f6e67756560d01b60208201526114c4565b600b810361181957505060405161180381611e18565b600481526357696e6b60e01b60208201526114c4565b600c810361184b57505060405161182f81611e18565b600a815269576f7720546f6e67756560b01b60208201526114c4565b600d036117ba575060405161185f81611e18565b6003815262576f7760e81b60208201526114c4565b61187d81611f37565b6001810361189657505061188f611f81565b925b61141d565b61189f81611f37565b600281036118b157505061188f611f61565b6118ba81611f37565b600381036118cc57505061188f611fc4565b806118db600492969396611f37565b0361189157925061188f611fe5565b6118f381611e56565b6001810361192257505060405161190981611e18565b60058152641219585c9d60da1b6020820152915b6113af565b61192b81611e56565b6002810361195857505060405161194181611e18565b60048152634469476960e01b6020820152916113af565b80611967600392959395611e56565b0361191d579150611976612005565b916113af565b61198581611f37565b6001810361199e575050611997611fc4565b935b61126d565b6119a781611f37565b600281036119b9575050611997611fe5565b6119c281611f37565b600381036119d4575050611997611f81565b806119e3600492979397611f37565b03611999579350611997611f61565b6119fb81611e56565b60018103611a2a575050604051611a1181611e18565b6006815265129858dad95d60d21b86820152915b6111e5565b611a3381611e56565b60028103611a62575050604051611a4981611e18565b6007815266054616e6b746f760cc1b86820152916111e5565b80611a71600392959395611e56565b03611a25579150604051611a8481611e18565b6006815265151cda1a5c9d60d21b86820152916111e5565b611aa581611f2d565b60018103611abc575050611ab7611fe5565b611131565b80611ac8600292611f2d565b036111315750611ab7611fc4565b611adf81611f2d565b60018103611af6575050611af1611fe5565b6110ab565b80611b02600292611f2d565b036110ab5750611af1611fc4565b611b1981611e56565b60018103611b3657505061136f6020611b30611f81565b93611023565b611b3f81611e56565b60028103611b5657505061136f6020611b30611f61565b80611b65600392959395611e56565b14611b76575b602061136f91611023565b915061136f6020611b85611f41565b93915050611b6b565b611b9781611e56565b60018103611bb157509050611baa611f81565b905b610f87565b611bba81611e56565b60028103611bcd57509050611baa611f61565b80611bd9600392611e56565b03611bac579050611baa611f41565b634e487b7160e01b600052604160045260246000fd5b60209160008051602061255483398151915299610f5c996104819961096b99610a1498604051611c2d81611dfd565b6000815296610955565b611c559192503d806000833e611c4d8183611e33565b8101906124ee565b9038610634565b6040513d6000823e3d90fd5b611c7e9198503d806000833e611c4d8183611e33565b963861056d565b6000610520565b611ca29195503d806000833e611c4d8183611e33565b9338610505565b611cbf9193503d806000833e611c4d8183611e33565b9138610493565b611cdc9192503d806000833e611c4d8183611e33565b90386103ea565b611cf99194503d806000833e611c4d8183611e33565b9238610327565b611d1591503d806000833e611c4d8183611e33565b386102d0565b925050503d806000833e611d2f8183611e33565b6060828281010312611d7e5781516001600160401b038111611d7e57611d5991830190830161249d565b602082015191600d831015611d7e5760400151906007821015611d7e57919038610248565b600080fd5b60ff6003818460f01c160616611d9881611e56565b6100c9565b60ff60038360f81c0616611db081611e56565b6100b1565b60005b838110611dc85750506000910152565b8181015183820152602001611db8565b90602091611df181518092818552858086019101611db5565b601f01601f1916010190565b602081019081106001600160401b03821117611be857604052565b604081019081106001600160401b03821117611be857604052565b601f909101601f19168101906001600160401b03821190821017611be857604052565b6004111561160957565b611e6981611e56565b80611e915750604051611e7b81611e18565b600681526511b3b932b2b760d11b602082015290565b611e9a81611e56565b60018103611ec65750604051611eaf81611e18565b600781526623707572706c6560c81b602082015290565b611ecf81611e56565b60028103611ef95750604051611ee481611e18565b600581526423626c756560d81b602082015290565b80611f05600392611e56565b03611d7e57604051611f1681611e18565b60078152662379656c6c6f7760c81b602082015290565b6003111561160957565b6005111561160957565b60405190611f4e82611e18565b600482526311dbdb1960e21b6020830152565b60405190611f6e82611e18565b6004825263426c756560e01b6020830152565b60405190611f8e82611e18565b6006825265507572706c6560d01b6020830152565b60405190611fb082611e18565b600582526423b932b2b760d91b6020830152565b60405190611fd182611e18565b6005825264131a59da1d60da1b6020830152565b60405190611ff282611e18565b60048252634461726b60e01b6020830152565b6040519061201282611e18565b6005825264506561636560d81b6020830152565b60609061203281611f2d565b8061204c57505060405161204581611dfd565b6000815290565b61205581611f2d565b600181036120cc57505060405161206b81611e18565b600c81526b446f75626c6520506561636560a01b60208201525b6120c9604260405180937f7b2274726169745f74797065223a2248616e6473222c2276616c7565223a22006020830152611173815180926020603f86019101611db5565b90565b806120d8600292611f2d565b0361208557506120e6612005565b612085565b606090600d811015611609578061210a57505060405161204581611dfd565b6001810361219f57505060405161212081611e18565b60068152654265616e696560d01b60208201525b6120c9604560405180937f2c7b2274726169745f74797065223a224865616477656172222c2276616c7565602083015262111d1160e91b6040830152612184815180926020604386019101611db5565b810161227d60f01b6043820152036025810184520182611e33565b600281036121ca5750506040516121b581611e18565b600381526212185d60ea1b6020820152612134565b600381036121f75750506040516121e081611e18565b60058152644c6561667360d81b6020820152612134565b6004810361222557505060405161220d81611e18565b6006815265506c616e747360d01b6020820152612134565b6005810361225557505060405161223b81611e18565b6008815267537061726b6c657360c01b6020820152612134565b6006810361228257505060405161226b81611e18565b600581526421b937bbb760d91b6020820152612134565b600781036122b057505060405161229881611e18565b6006815265119b1bdc985b60d21b6020820152612134565b600881036122df5750506040516122c681611e18565b6007815266476c617373657360c81b6020820152612134565b6009810361230f5750506040516122f581611e18565b60088152674d757368726f6f6d60c01b6020820152612134565b600a810361234057505060405161232581611e18565b600881526704e696768746361760c41b60208201525b612134565b600b810361237057505060405161235681611e18565b600881526714185c9d1e5a185d60c21b6020820152612134565b600c0361233b575060405161238481611e18565b6008815267496365637265616d60c01b6020820152612134565b606090600781101561160957806123bd57505060405161204581611dfd565b600181036124405750506123cf611fa3565b6120c9604b60405180937f2c7b2274726169745f74797065223a22486561647765617220436f6c6f72222c602083015268113b30b63ab2911d1160b91b6040830152612425815180926020604986019101611db5565b810161227d60f01b604982015203602b810184520182611e33565b60028103612457575050612452611fc4565b6123cf565b60038103612469575050612452611fe5565b6004810361247b575050612452611f81565b6005810361248d575050612452611f61565b6006036124525750612452611f41565b81601f82011215611d7e5780516001600160401b038111611be857604051926124d0601f8301601f191660200185611e33565b81845260208284010111611d7e576120c99160208085019101611db5565b90602082820312611d7e5781516001600160401b038111611d7e576120c9920161249d56fe3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f737667222077696474683d2232313022206865696768743d22333335223c2f7376673e3c646566733e3c72616469616c4772616469656e742069643d22a2646970667358221220055f173f7d6f52e5e0fc8abf41408e0227a3d6fbaf21231672be6d3213a26dff64736f6c63430008150033";

type ProfileSVGConstructorParams =
  | [linkLibraryAddresses: ProfileSVGLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProfileSVGConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class ProfileSVG__factory extends ContractFactory {
  constructor(...args: ProfileSVGConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        ProfileSVG__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: ProfileSVGLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$7855b62e8b31a9fcc7bb11a3ba5bf1044e\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/svgs/Profile/Headwear.sol:Headwear"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$d126fce042c4f389b948b334953c7040b2\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/svgs/Profile/Legs.sol:Legs"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$878c40d00c0bba291303ba416b95520be0\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/svgs/Profile/Shoes.sol:Shoes"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$710c102e5fa4a04316d9379a7b16d25969\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/svgs/Profile/Body.sol:Body"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$a476c09d4708b06d4003108cf0b87653d0\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/svgs/Profile/Logo.sol:Logo"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$2357399676040666229e15ed3b53bacfe6\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/svgs/Profile/Head.sol:Head"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$c34af807c6d4d03395e2cc147552cf15ab\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/svgs/Profile/Face.sol:Face"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$6243675c480d67e48377cdf494f50c5821\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/svgs/Profile/Hands.sol:Hands"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ProfileSVG> {
    return super.deploy(overrides || {}) as Promise<ProfileSVG>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProfileSVG {
    return super.attach(address) as ProfileSVG;
  }
  override connect(signer: Signer): ProfileSVG__factory {
    return super.connect(signer) as ProfileSVG__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProfileSVGInterface {
    return new utils.Interface(_abi) as ProfileSVGInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProfileSVG {
    return new Contract(address, _abi, signerOrProvider) as ProfileSVG;
  }
}

export interface ProfileSVGLibraryAddresses {
  ["contracts/libraries/svgs/Profile/Headwear.sol:Headwear"]: string;
  ["contracts/libraries/svgs/Profile/Legs.sol:Legs"]: string;
  ["contracts/libraries/svgs/Profile/Shoes.sol:Shoes"]: string;
  ["contracts/libraries/svgs/Profile/Body.sol:Body"]: string;
  ["contracts/libraries/svgs/Profile/Logo.sol:Logo"]: string;
  ["contracts/libraries/svgs/Profile/Head.sol:Head"]: string;
  ["contracts/libraries/svgs/Profile/Face.sol:Face"]: string;
  ["contracts/libraries/svgs/Profile/Hands.sol:Hands"]: string;
}