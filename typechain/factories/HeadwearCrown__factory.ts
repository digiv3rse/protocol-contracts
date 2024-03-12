/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HeadwearCrown, HeadwearCrownInterface } from "../HeadwearCrown";

const _abi = [
  {
    type: "function",
    name: "getCrown",
    inputs: [
      {
        name: "crownColor",
        type: "HeadwearCrown.CrownColors",
        internalType: "enum HeadwearCrown.CrownColors",
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
        type: "Headwear.HeadwearVariants",
        internalType: "enum Headwear.HeadwearVariants",
      },
      {
        name: "",
        type: "Headwear.HeadwearColors",
        internalType: "enum Headwear.HeadwearColors",
      },
    ],
    stateMutability: "pure",
  },
] as const;

const _bytecode =
  "0x6080806040523461001a576113b89081610020823930815050f35b600080fdfe604060808152600436101561001357600080fd5b600090813560e01c63882c9a431461002a57600080fd5b602080600319360112611178576004359160048310156111745782936006610054611120956111f3565b9590966100ec6059865180998982019b7a1e39ba3cb6329f1731b937bbb721b7b637b918903d903334b6361d60291b8d52610098815180928d603b8701910161117c565b8201743e9731b937bbb721b7b637b919103d903334b6361d60591b603b8201526100cb825180938d60508501910161117c565b01683e9e17b9ba3cb6329f60b91b605082015203603981018a5201886111d0565b61111b610d598651809a6101688a83019b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32308d527f30302f737667222077696474683d2232313022206865696768743d22333335228b8501526c103334b6361e913737b732911f60991b6060850152518092606d85019061117c565b81017f3c7061746820636c6173733d2263726f776e436f6c6f72312220643d224d3534606d8201527f2e342035362e34613620362030203020312d332e342038203620362030203020608d8201527f312d372e322d332e352036203620302030203120332d372e332036203620302060ad8201527f30203120372e3620322e385a6d32382e3920342e37762e31632d312e382e372d60cd8201527f34202e322d352e342d312e32613520352030203020312d2e392d352e3620352060ed8201527f3520302030203120352d322e372035203520302030203120342e3120332e386361010d8201527f2e3420322d2e3320342e372d322e3720352e375a6d32352e362d32302e33613661012d8201527f2e3920362e3920302030203120322e3520372e33632d2e3720322e342d33203461014d8201527f2e322d3620342e366c2d2e392e3161362e3920362e392030203020312d362d3461016d8201527f2e39632d2e372d322e362e342d352e3720322e372d372e3261362e3820362e3861018d8201527f20302030203120372e3720305a6d31372e372032302e34632d322e342d312d336101ad8201527f2e312d332e372d322e372d352e376135203520302030203120342e312d332e386101cd8201527f63322d2e3220342031203520322e37613520352030203020312d2e3920352e366101ed8201527f20352e3120352e312030203020312d352e3420312e32682d2e315a6d33362e3561020d8201527f2d372e366136203620302030203120332e3120372e332036203620302030203161022d8201527f2d372e3220332e3420352e3820352e382030203020312d332e342d372e39203661024d8201527f203620302030203120372e352d322e385a222f3e3c706174682066696c6c3d2261026d8201527f236666662220643d224d3133312e332039342e37613520352030203020312d3261028d8201527f2e3720352e32203520352030203020312d352e382d312e3220352e3220352e326102ad8201527f2030203020312d2e372d352e39632e382d312e3520322e362d322e3520352d326102cd8201527f2e3220322e312e322034203220342e3220345a222f3e3c7061746820636c61736102ed8201527f733d2263726f776e436f6c6f72322220643d224d3131322e38203931632d322e61030d8201527f3420322e362d352e3220342e382d372e3820372e312d322e362d322e332d352e61032d8201527f342d342e352d372e382d372e3120322e332d332e3620352e332d362e3820372e61034d8201527f382d31302e3220322e3520332e3420352e3520362e3620372e382031302e325a61036d8201527f222f3e3c706174682066696c6c3d22236666662220643d224d38372e3920393261038d8201527f2e38633120312e382e3820342e332d2e3620352e3961352e3220352e322030206103ad8201527f3020312d352e3920312e32203520352030203020312d322e372d352e322035206103cd8201527f3520302030203120342e322d342e3163322e342d2e3320342e322e37203520326103ed8201527f2e325a222f3e3c7061746820636c6173733d2263726f776e436f6c6f7231222061040d8201527f643d224d3130352e362035332e366139372e372039372e37203020302030203961042d8201527f2e362032322e3563312e3220322e3120322e3620342e3320342e3620352e382061044d8201527f3220312e3520342e3620322e3220372e3120322e332034202e3220372e382d3161046d8201527f2031312e322d3320332e342d312e3920362e352d342e3420392e352d362e382061048d8201527f332e372d332e3120372e352d362e322031312d392e362d342031342d392e32206104ad8201527f32372e352d31352e392034302e36613138372e32203138372e322030203020316104cd8201527f2d33372e3120322e35682d312e32632d31332e3320302d32342e3720302d33376104ed8201527f2e312d322e35613232392e34203232392e342030203020312d31362d34302e3661050d8201527f63332e3620332e3420372e3420362e352031312e3120392e36203320322e342061052d8201527f36203520392e3520362e3820332e34203220372e3320332e322031312e32203361054d8201527f20322e35203020352d2e3820372d322e3320322d312e3520332e352d332e372061056d8201527f342e372d352e3820342d3720372e322d313420392e362d32322e356c2e312d2e61058d8201527f386831762e385a6d32332034362e336135203520302030203020322e372d352e6105ad8201527f32203520352030203020302d342e322d342e31632d322e342d2e332d342e322e6105cd8201527f372d3520322e322d3120312e382d2e3820342e332e3720352e3920312e3420316105ed8201527f2e3620332e38203220352e3820312e325a4d31303520393863322e362d322e3361060d8201527f20352e342d342e3520372e382d372e312d322e332d332e362d352e332d362e3861062d8201527f2d372e382d31302e322d322e3520332e342d352e3520362e362d372e3820313061064d8201527f2e3220322e3420322e3620352e3220342e3820372e3820372e315a6d2d31372e61066d8201527f372e3663312e342d312e3620312e362d34202e362d352e392d2e382d312e352d61068d8201527f322e362d322e352d352d322e32613520352030203020302d342e3220342035206106ad8201527f3520302030203020322e3720352e336332202e3920342e342e3420352e392d316106cd8201527f2e325a222f3e3c70617468207374726f6b653d222330303022207374726f6b656106ed8201527f2d6c696e656361703d22726f756e6422207374726f6b652d6c696e656a6f696e8061070d8301527f3d22726f756e6422207374726f6b652d77696474683d22342220643d224d313061072d8301527f342e342035332e366139382e322039382e322030203020312d392e362032322e61074d8301527f352031382e342031382e342030203020312d342e3620352e38632d3220312e3561076d8301527f2d342e3620322e322d372e3120322e332d34202e322d372e382d312d31312e3261078d8301527f2d332d332e342d312e392d362e352d342e342d392e352d362e382d332e372d336107ad8301527f2e312d372e352d362e322d31312d392e36203420313420392e322032372e35206107cd8301527f31352e392034302e364337392e372031303820393120313038203130342e34206107ed8301527f313038222f3e3c70617468207374726f6b653d222330303022207374726f6b6561080d83015261082d8201527f3d22726f756e6422207374726f6b652d77696474683d22342220643d224d383361084d8201527f2e312037312e3761363220363220302030203020312e322d382e35733020302061086d8201527f302030682e3163322e3420312e36203620332e3620382e3820342e336d2d392e61088d8201527f392d352e33632d312e382e372d34202e322d352e342d312e32613520352030206108ad8201527f3020312d2e392d352e362035203520302030203120352d322e372035203520306108cd8201527f2030203120342e3120332e38632e3420322d2e3320342e372d322e3720352e376108ed8201527f20302030203020302030203068305a4d35312036342e3361362036203020302061090d8201527f312d372e322d332e342036203620302030203120332d372e332036203620302061092d8201527f30203120372e3620322e38203620362030203020312d332e3420385a6d35332e61094d8201527f352d31312e3561362e3920362e392030203020312d362d342e39632d2e372d3261096d8201527f2e362e342d352e3720322e372d372e3261362e3820362e38203020302031203761098d8201527f2e37203020362e3920362e3920302030203120322e3520372e34632d2e3720326109ad8201527f2e342d3320342e322d3620342e366c2d2e392e315a4d38322e392039302e36616109cd8201527f3520352030203020302d342e3220342035203520302030203020322e3720352e6109ed8201527f336332202e3920342e342e3420352e392d312e3220312e342d312e3620312e36610a0d8201527f2d34202e362d352e392d2e382d312e352d322e362d322e352d352d322e325a6d610a2d8201527f32322e312d392e38632d322e3520332e342d352e3520362e362d372e38203130610a4d8201527f2e3220322e3420322e3620352e3220342e3820372e3820372e316d2e362d3434610a6d8201527f2e356139372e372039372e3720302030203020392e362032322e3563312e3220610a8d8201527f322e3120322e3620342e3320342e3620352e38203220312e3520342e3620322e610aad8201527f3220372e3120322e332034202e3220372e382d312031312e322d3320332e342d610acd8201527f312e3920362e352d342e3420392e352d362e3820332e372d332e3120372e352d610aed8201527f362e322031312d392e362d342031342d392e322032372e352d31352e39203430610b0d8201527f2e36613138372e32203138372e322030203020312d33372e3120322e35222f3e610b2d8201527f3c70617468207374726f6b653d222330303022207374726f6b652d6c696e6563610b4d8201527f61703d22726f756e6422207374726f6b652d6c696e656a6f696e3d22726f756e610b6d8201527f6422207374726f6b652d77696474683d22342220643d224d3132352e36203633610b8d8201527f2e326133302033302030203020312d382e3720342e326d313020342e33613632610bad8201527f2036322030203020312d312e322d382e357330203020302030682d2e316d312e610bcd8201527f312d3163312e382e372034202e3220352e342d312e3261352035203020302030610bed8201527f202e392d352e36203520352030203020302d352d322e37203520352030203020610c0d8201527f302d342e3120332e38632d2e342032202e3320342e3720322e3720352e376830610c2d8201527f7630733020302030203068305a6d33322e3320322e3161362036203020302030610c4d8201527f20372e322d332e34203620362030203020302d332d372e332036203620302030610c6d8201527f20302d372e3620322e3820352e3820352e3820302030203020332e3420385a6d610c8d8201527f2d33312e392032362e3363322e312e322034203220342e322034613520352030610cad8201527f203020312d322e3720352e33203520352030203020312d352e382d312e322035610ccd8201527f2e3220352e322030203020312d2e372d352e39632e382d312e3520322e362d32610ced8201527f2e3520352d322e325a4d3130352038302e3863322e3520332e3420352e352036610d0d8201527f2e3620372e382031302e322d322e3420322e362d352e3220342e382d372e3820610d2d8201526b1b971891179f1e17b9bb339f60a11b610d4d82015203610d3981018b5201896111d0565b611346565b9361113e845197606089525180978160608b015260808a019061117c565b86015260078310156111605750830152601f01601f1916810181900360800190f35b634e487b7160e01b81526021600452602490fd5b8380fd5b8280fd5b60005b83811061118f5750506000910152565b818101518382015260200161117f565b604081019081106001600160401b038211176111ba57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b038211908210176111ba57604052565b60048110156113305780611246575060405161120e8161119f565b60078152662346344646444360c81b60208201529060405161122f8161119f565b60078152660234130443137360cc1b602082015290565b60018103611293575060405161125b8161119f565b600781526611a31ca31a232360c91b60208201529060405161127c8161119f565b600781526611a2a0a21ba32360c91b602082015290565b600281036112e057506040516112a88161119f565b600781526611a31a231b232360c91b6020820152906040516112c98161119f565b600781526611a21ca298232360c91b602082015290565b60030361132b576040516112f38161119f565b60078152662346464545393360c81b6020820152906040516113148161119f565b600781526608d19190d10cd160ca1b602082015290565b600080fd5b634e487b7160e01b600052602160045260246000fd5b6004811015611330578061135a5750600190565b600181036113685750600490565b600281036113765750600590565b60030361132b5760069056fea26469706673582212201b74ecb023192af0e6d8da0aeb7696440104ab006617cdeac47cbb22533f3a9364736f6c63430008150033";

type HeadwearCrownConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HeadwearCrownConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HeadwearCrown__factory extends ContractFactory {
  constructor(...args: HeadwearCrownConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<HeadwearCrown> {
    return super.deploy(overrides || {}) as Promise<HeadwearCrown>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HeadwearCrown {
    return super.attach(address) as HeadwearCrown;
  }
  override connect(signer: Signer): HeadwearCrown__factory {
    return super.connect(signer) as HeadwearCrown__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HeadwearCrownInterface {
    return new utils.Interface(_abi) as HeadwearCrownInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HeadwearCrown {
    return new Contract(address, _abi, signerOrProvider) as HeadwearCrown;
  }
}
