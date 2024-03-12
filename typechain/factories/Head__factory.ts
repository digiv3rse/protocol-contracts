/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Head, HeadInterface } from "../Head";

const _abi = [
  {
    type: "function",
    name: "getHead",
    inputs: [
      {
        name: "headColor",
        type: "Head.HeadColors",
        internalType: "enum Head.HeadColors",
      },
    ],
    outputs: [
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
  "0x6080806040523461001a57610d559081610020823930815050f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c63956551301461002757600080fd5b602036600319011261007957600435600481101561007957610048906100f2565b6040805180926020825261006b815180928160208601526020868601910161007e565b601f01601f19168101030190f35b600080fd5b60005b8381106100915750506000910152565b8181015183820152602001610081565b600411156100ab57565b634e487b7160e01b600052602160045260246000fd5b604081019081106001600160401b038211176100dc57604052565b634e487b7160e01b600052604160045260246000fd5b6100fb816100a1565b60038103610511575060405161054081016001600160401b038111828210176100dc5760405261050d81526000805160206109208339815191526020820152600080516020610bc083398151915260408201527f2066696c6c3d226e6f6e65223e3c706174682066696c6c3d2275726c282361296060820152600080516020610cc08339815191526080820152600080516020610d0083398151915260a0820152600080516020610b4083398151915260c0820152600080516020610c6083398151915260e0820152600080516020610ac0833981519152610100820152600080516020610aa08339815191526101208201526000805160206109e0833981519152610140820152600080516020610a408339815191526101608201526000805160206109c0833981519152610180820152600080516020610b808339815191526101a0820152600080516020610a208339815191526101c0820152600080516020610ae08339815191526101e0820152600080516020610a60833981519152610200820152600080516020610c80833981519152610220820152600080516020610c00833981519152610240820152600080516020610ba08339815191526102608201526000805160206109a0833981519152610280820152600080516020610ca08339815191526102a0820152600080516020610ce08339815191526102c0820152600080516020610c208339815191526102e0820152600080516020610b00833981519152610300820152600080516020610b60833981519152610320820152600080516020610960833981519152610340820152600080516020610940833981519152610360820152600080516020610980833981519152610380820152600080516020610a008339815191526103a0820152600080516020610a808339815191526103c0820152600080516020610c408339815191526103e0820152600080516020610b20833981519152610400820152600080516020610be08339815191526104208201527f2d322e3520322e345a222f3e3c646566733e3c72616469616c4772616469656e6104408201527f742069643d2261222063783d2230222063793d22302220723d223122206772616104608201527f6469656e745472616e73666f726d3d226d6174726978283020313238202d32306104808201527f342030203130352036362922206772616469656e74556e6974733d22757365726104a08201527f53706163654f6e557365223e3c73746f702073746f702d636f6c6f723d2223466104c08201527f4644423736222f3e3c73746f70206f66667365743d2231222073746f702d636f6104e08201527f6c6f723d2223463843393434222f3e3c2f72616469616c4772616469656e743e6105008201526c1e17b232b3399f1e17b9bb339f60991b61052082015290565b60ff8161052061052f936100a1565b1661052a816100a1565b61084f565b60405180916000805160206109208339815191526020830152600080516020610bc0833981519152604083015278103334b6361e913737b732911f1e3830ba34103334b6361e9160391b606083015261059281518092602060798601910161007e565b600080516020610cc08339815191529082016079810191909152600080516020610d008339815191526099820152600080516020610b4083398151915260b9820152600080516020610c6083398151915260d9820152600080516020610ac083398151915260f9820152600080516020610aa08339815191526101198201526000805160206109e0833981519152610139820152600080516020610a408339815191526101598201526000805160206109c0833981519152610179820152600080516020610b80833981519152610199820152600080516020610a208339815191526101b9820152600080516020610ae08339815191526101d9820152600080516020610a608339815191526101f9820152600080516020610c80833981519152610219820152600080516020610c00833981519152610239820152600080516020610ba08339815191526102598201526000805160206109a0833981519152610279820152600080516020610ca0833981519152610299820152600080516020610ce08339815191526102b9820152600080516020610c208339815191526102d9820152600080516020610b008339815191526102f9820152600080516020610b60833981519152610319820152600080516020610960833981519152610339820152600080516020610940833981519152610359820152600080516020610980833981519152610379820152600080516020610a00833981519152610399820152600080516020610a808339815191526103b9820152600080516020610c408339815191526103d9820152600080516020610b208339815191526103f9820152600080516020610be0833981519152610419820152711699171a9019171a2d11179f1e17b9bb339f60711b6104398201520361042b8101825261046a01601f191681018181106001600160401b038211176100dc5760405290565b610858816100a1565b80610881575060405161086a816100c1565b60078152660234130443137360cc1b602082015290565b61088a816100a1565b600181036108b6575060405161089f816100c1565b600781526611a2a0a21ba32360c91b602082015290565b6108bf816100a1565b600281036108eb57506040516108d4816100c1565b600781526611a21ca298232360c91b602082015290565b806108f76003926100a1565b0361007957604051610908816100c1565b600781526608d18e10ce4d0d60ca1b60208201529056fe3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32303134332e33203130342e387630632d2e382e382d322e322e332d322e322d2e39696e3d22726f756e6422207374726f6b652d77696474683d22342220643d224d76302d332e33632d312e332d34362e312d37312d34362e312d37322e32203076332e332d312e352d332e352d312e392d2e332d332e342d2e332d352d2e32682d342220723d2234222066696c6c3d2223666666222066696c6c2d6f70616369742e342d322e346333312e372d33332e352d31372e352d38322e362d35312d3531332e33633020312e312d312e3420312e372d322e32203176306131343520313431203139392e332031323629222f3e3c706174682066696c6c3d2223666666226c2d322e3520322e345a222f3e3c636972636c652063783d2234222063793d222e35613520352030203020312d39203420362e3720362e372030203020302d2e352030203020302d322e342d322e34632d33332e362d33312e372d38322e382034203020302030203130352031393473353120302038392e342d33382e326c322031372e342d35312035302e396c322e3320322e34413133382e34203133382e2066696c6c2d6f7061636974793d222e352220643d224d3139352e352031313733682e31222f3e3c70617468207374726f6b653d222330303022207374726f6b203020302030203130352031393473353120302038392e342d33382e326c322e203076332e33633020312e312d312e3420312e372d322e322031613134352031652d6c696e656361703d2273717561726522207374726f6b652d6c696e656a6f793d222e3522207472616e73666f726d3d226d6174726978282d312030203020613320332030203020312d312e342d346c2e312d2e33632e382d312e3520302d30302f737667222077696474683d2232313022206865696768743d2233333522342d322e346333312e372d33332e352d31372e352d38322e362d35312d35316c2e362d312e352d312e322d322e362d322d332e372d322e356c2d312e372d2e383320322e356132392e322032392e3220302030203120372e372031302e34762e31372e342d35312035302e396c322e3320322e34413133382e34203133382e3434352030203020302d322e342d322e34632d33332e362d33312e372d38322e38332d2e376c2d312e322d32632d312d312e372d322e332d332e352d332e362d342e3161312e3820312e382030203020312d2e332d332e352032332e362032332e2220643d224d3134332e33203130342e38632d2e382e382d322e322e332d322e362030203020312031362e3620342e386331202e3720322e3220312e3520332e322d2e39762d332e33632d312e332d34362e312d37312d34362e312d37322e32a2646970667358221220459ef035318bede4e86841f69e43f761cb2746f091e94c5250bf4cb132ba5a4264736f6c63430008150033";

type HeadConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HeadConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Head__factory extends ContractFactory {
  constructor(...args: HeadConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Head> {
    return super.deploy(overrides || {}) as Promise<Head>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Head {
    return super.attach(address) as Head;
  }
  override connect(signer: Signer): Head__factory {
    return super.connect(signer) as Head__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HeadInterface {
    return new utils.Interface(_abi) as HeadInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Head {
    return new Contract(address, _abi, signerOrProvider) as Head;
  }
}