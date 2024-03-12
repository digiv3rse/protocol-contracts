/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HeadwearMushroom,
  HeadwearMushroomInterface,
} from "../HeadwearMushroom";

const _abi = [
  {
    type: "function",
    name: "getMushroom",
    inputs: [
      {
        name: "mushroomColor",
        type: "HeadwearMushroom.MushroomColors",
        internalType: "enum HeadwearMushroom.MushroomColors",
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
  "0x6080806040523461001a576122f29081610020823930815050f35b600080fdfe604060808152600436101561001357600080fd5b600090813560e01c6345e2836f1461002a57600080fd5b6020908160031936011261203457600435600481101561203057907f3c7374796c653e2e6d757368726f6f6d436f6c6f7231207b2066696c6c3a0000936009611fdc8461019261007c60b19897612143565b9890610087846120af565b9089519b8c938c85019e8f526100a78d8251928391603e89019101612038565b8401773e9736bab9b43937b7b6a1b7b637b919103d903334b6361d60411b603e8201526100de8d8351938491605685019101612038565b01783e9736bab9b43937b7b6a9b830b935b632b9903db334b6361d60391b60568201526101158c8351938491606f85019101612038565b01681d9039ba3937b5b29d60b91b606f82015261013b825180938d607885019101612038565b017f3b207374726f6b652d6c696e656361703a20726f756e643b207374726f6b652d6078820152783634b732b537b4b71d103937bab7321dbe9e17b9ba3cb6329f60391b609882015203609181018a52018861208c565b611fd761191c8651809a61020e8a83019b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32308d527f30302f737667222077696474683d2232313022206865696768743d22333335228b8501526c103334b6361e913737b732911f60991b6060850152518092606d850190612038565b81017f3c7061746820636c6173733d226d757368726f6f6d436f6c6f72312220643d22606d8201527f4d34312e392038372e3661342e3420342e34203020312031203020382e382034608d8201527f2e3420342e3420302030203120302d382e385a222f3e3c7061746820636c617360ad8201527f733d226d757368726f6f6d537061726b6c657322207374726f6b652d7769647460cd8201527f683d22332220643d224d33372e3420393261342e3420342e342030203120312060ed8201527f382e39203020342e3420342e342030203020312d382e3920305a222f3e3c706161010d8201527f746820636c6173733d226d757368726f6f6d436f6c6f72312220643d224d313961012d8201527f2e372037332e3561382e3420382e3420302030203020342e3520332e3420313261014d8201527f2031322030203020302d372e3720382e37632d2e362d342d332e342d372e352d61016d8201527f372e312d3920332e372d312e3320362e372d342e3520372e382d382e3361323861018d8201527f20323820302030203020322e3520352e325a222f3e3c7061746820636c6173736101ad8201527f3d226d757368726f6f6d537061726b6c657322207374726f6b652d77696474686101cd8201527f3d22332e352220643d224d31372e322036382e33632d3120332e382d3420372d6101ed8201527f372e3820382e3261313220313220302030203120372e3120392031322031322061020d8201527f302030203120372e372d382e3620382e3220382e322030203020312d342e352d61022d8201527f332e34632d312d312e352d312e372d332e332d322e352d352e325a222f3e3c7061024d8201527f61746820636c6173733d226d757368726f6f6d436f6c6f72312220643d224d3161026d8201527f373820333661342e3420342e34203020312031203020382e3820342e3420342e61028d8201527f3420302030203120302d382e385a222f3e3c7061746820636c6173733d226d756102ad8201527f7368726f6f6d537061726b6c657322207374726f6b652d77696474683d2233226102cd8201527f20643d224d3137332e362034302e3461342e3420342e3420302031203120382e6102ed8201527f37203020342e3420342e342030203020312d382e3720305a222f3e3c7061746861030d8201527f20636c6173733d226d757368726f6f6d436f6c6f72312220643d224d3138382061032d8201527f38352e36633120352e3120342e3820392e3320392e352031302e352d3520312e61034d8201527f332d3920362d392e362031312e322d2e392d352e322d342e392d392e372d313061036d8201527f2d31312e3220342e382d312e3620382e372d352e372031302d31302e355a222f61038d8201527f3e3c7061746820636c6173733d226d757368726f6f6d537061726b6c657322206103ad8201527f7374726f6b652d77696474683d22332e352220643d224d3138382038352e36616103cd8201527f31362e312031362e312030203020312d31302031302e35633520312e352039206103ed8201527f3620392e392031312e322e352d352e3220342e362d392e3920392e362d31312e61040d8201527f326131332e342031332e342030203020312d392e362d31302e355a222f3e3c7061042d8201527f61746820636c6173733d226d757368726f6f6d436f6c6f72322220643d224d318061044d8301527f37382e362036396134302e372034302e372030203020312d31362e3520362e3761046d8301527f632d382e3620322d31372e3320332e322d32362e3120332e382e3920312e332061048d8301527f312e3720322e3720322e3420342e3120392e342d2e362031382e382d322e33206104ad8301527f32372e382d3520342e392d312e352031342e342d352e342031322e342d392e366104cd8301527f5a222f3e3c7061746820636c6173733d226d757368726f6f6d436f6c6f7232226104ed8301527f20643d224d3137382e36203639632d312d322e332d342d342e332d372e382d3661050d8301527f2e316136322e392036322e392030203020312d323120392e382039392e34203961052d8301527f392e342030203020312d3137203363312e3220312e3220322e3220322e35203361054d8301527f2e3220332e3820382e382d2e362031372e352d312e392032362e312d332e386161056d8301527f34302034302030203020302031362e352d362e375a222f3e3c7061746820636c61058d8301527f6173733d226d757368726f6f6d436f6c6f72312220643d224d3130342e3920356105ad8301527f322e36613339332e37203339332e372030203020302d32312e382e37632d35206105cd8301527f2e342d392e3720312d313520312e386c2d312e342e32613133382e32203133386105ed8301527f2e322030203020302d32362e34203763332d342e3120332e372d392e3720322d61060d8301527f31342e3420322d322e3320342e342d342e3620362e382d362e366c312d2e396361062d8301527f342e382d342031302e352d372e352031372e332d31306139392039392030203061064d8301527f20312033332e332d362e33762e346132312e322032312e32203020302030203261066d8301527f372e3820322e336c2e312d2e366138342038342030203020312031332e32203361068d8301527f2e386c2e322e372d2e362e33632d312e3220322e372e38203820382e372031326106ad8301527f2e3820372e3720342e372031312e3420342e372031352e3420322e33762d2e326106cd8301527f6134372034372030203020312031332e31203233632d312e312d322e322d342d6106ed8301527f342e322d372e382d366138322e332038322e332030203020302d31332e362d3461070d8301527f2e37203133392e36203133392e362030203020302d31352d332032323720323261072d8301527f372030203020302d33372e332d322e365636332035322e365a6d31392e382d3861074d8301527f2e38632e342d312e342d2e342d322e392d312e372d332e3861372e3720372e3761076d8301527f2030203020302d362e342d312e33632d312e322e332d322e3420312d322e392061078d8301527f322e332d2e342031203020322e342e3920332e326137203720302030203020336107ad8301527f20312e3863312e332e3420322e372e362034202e3320312e342d2e3320322e376107cd8301527f2d312e3220332d322e355a6d2d35322e36203063312d312e332e392d332e332d6107ed8301527f2e322d342e362d312e312d312e322d332d312e352d342e382d312d31202e342d61080d8301527f3220312d322e3820312e382d2e372e382d3120322d2e3820332e312e3320312e61082d8301527f3120312e32203220322e3320322e342031202e3420322e332e3420332e342e3161084d8301527f6135203520302030203020322e392d312e375a222f3e3c7061746820636c617361086d8301527f733d226d757368726f6f6d436f6c6f72322220643d224d3136352e352034367661088d8301527f2e31632d3420322e342d372e3720322e342d31352e342d322e332d382d342e396108ad8301527f2d31302d31302d382e372d31322e386c2e362d2e336131372e372031372e37206108cd8301527f30203020312031352e3220312e3563362e3220332e3820372e3620382e3420386108ed8301527f2e332031332e375a6d2d382e332031322e326136342e312036342e312030203061090d8301527f20312d32372e382031342e3120333320333320302030203120332e3520332e3361092d8301527f2039382039382030203020302031362e392d322e39203633203633203020302061094d8301527f302032312d392e382038322e332038322e332030203020302d31332e362d342e61096d8301527f375a222f3e3c7061746820636c6173733d226d757368726f6f6d436f6c6f723261098d8301527f2220643d224d3132392e342037322e336136342e322036342e322030203020306109ad8301527f2032372e382d3134632d352d312e342d31302d322e342d31342e312d336c2d2e6109cd8301527f382d2e316136332e382036332e382030203020312d31372e3520313463312e366109ed8301527f2e3920332e32203220342e3620332e315a222f3e3c7061746820636c6173733d610a0d8301527f226d757368726f6f6d436f6c6f72322220643d224d3132342e382036392e3161610a2d8301527f36332e372036332e372030203020302031372e352d3134632d352d2e372d392e610a4d8301527f352d312e322d31342d312e364136372e392036372e3920302030203120313137610a6d8301527f2e3520363663322e362e38203520312e3820372e3320332e315a6d332e382d34610a8d8301527f322e39762e366132312e322032312e322030203020312d32372e382d322e3356610aad8301527f323468342e3163382030203136202e352032332e3720322e315a4d3132332034610acd8301527f3063312e332031203220322e3420312e3720332e382d2e3420312e332d312e37610aed8301527f20322e322d3320322e352d312e342e332d322e3820302d342d2e336137203720610b0d8301527f30203020312d332e312d312e38632d2e382d2e382d312e332d322e312d2e392d610b2d8301527f332e322e352d312e3220312e372d3220332d322e334138203820302030203120610b4d8301527f3132332034305a222f3e3c7061746820636c6173733d226d757368726f6f6d43610b6d8301527f6f6c6f72322220643d224d3131322e3320363563312e382e3220332e352e3620610b8d8301527f352e32203120342d332e3720372e372d382031302e372d31322e352d332e372d610bad8301527f2e342d372e352d2e362d31322d2e37762e33632d312e3820342d3420372e382d610bcd8301527f362e352031312e346c322e362e355a222f3e3c7061746820636c6173733d226d610bed8301527f757368726f6f6d436f6c6f72322220643d224d3130392e372036342e35613735610c0d8301527f20373520302030203020362e362d31312e34762d2e336c2d31312e342d2e3276610c2d8301527f31312e3663312e36203020332e332e3120342e382e335a6d2d342e392d2e3368610c4d8301527f2e315635322e36632d3420302d372e3620302d31302e392e32762e3663312e38610c6d8301527f20332e39203420372e3620362e342031312e316c342e342d2e335a222f3e3c70610c8d830152610cad8201527f30302e342036342e354137342e332037342e332030203020312039342035332e610ccd8201527f34762d2e366c2d31302e392e352d2e392e36633320342e3420362e3420382e34610ced8201527f2031302e3220313220322e362d2e3820352e332d312e3320382d312e345a222f610d0d8201527f3e3c7061746820636c6173733d226d757368726f6f6d436f6c6f72322220643d610d2d8201527f224d38352036392e3163322e342d312e3320342e382d322e3420372e342d332e610d4d8201527f326137332e352037332e352030203020312d31302e322d31326c312d2e36632d610d6d8201527f352e312e342d392e3820312d31352e3220312e38762e336136332e362036332e610d8d8201527f362030203020302031372031332e375a4d37352e33203737203734203739632d610dad8201527f31322e312d2e332d31332e392d2e332d32352e372d332d352e392d312e332d31610dcd8201527f312e382d332d31362e352d362e364833316c2e322d2e3363312d322e3220332e610ded8201527f392d342e3320372e372d36682e356136332036332030203020302032312e3120610e0d8201527f31306c31342e3820345a222f3e3c7061746820636c6173733d226d757368726f610e2d8201527f6f6d436f6c6f72322220643d226d37372e342037342e382e362d2e352e372d2e610e4d8201527f382d312d312e34632d31312e342d322d31362d362d32342e362d31332e376c2d610e6d8201527f2e312d2e334138382e342038382e342030203020302033382e39203633682e35610e8d8201527f6136332036332030203020302032312e3120313063372e352032203920312e39610ead8201527f2031362e3620322e322e322d2e312e312d2e322e332d2e345a6d2d352e352d33610ecd8201527f352e36633120312e3320312e3120332e332e3220342e37613520352030203020610eed8201527f312d322e3920312e37632d312e312e332d322e332e332d332e3420302d312d2e610f0d8201527f352d322d312e342d322e332d322e352d2e322d31202e312d322e332e382d332e610f2d8201527f312e372d2e3920312e372d312e3420322e382d312e3720312e372d2e3620332e610f4d8201527f372d2e3320342e3820315a222f3e3c7061746820636c6173733d226d75736872610f6d8201527f6f6f6d436f6c6f72322220643d224d38352036392e3161363420363420302030610f8d8201527f20312d31372d31332e37762d2e336c2d312e332e32632d34202e362d3920312e610fad8201527f362d31332e3720322e38762e336136342e332036342e33203020302030203237610fcd8201527f2e3220313463312e352d312e3220332e322d322e3320342e382d332e335a4d36610fed8201527f372e342033302e33632d362e3720322e362d31322e3520362d31372e3420313061100d8201527f2e316c2d2e362d2e37632d2e332d342e3220322d382e3520352e382d31302e3661102d8201527f20332e372d3220382e362d312e38203132202e376c2e322e355a4d34322e332061104d8201527f343863312e3720342e3620312031302e322d322031342e32762e314c3339203661106d8201527f33632d332e3820312e372d362e3720332e382d372e37203620312e352d38203561108d8201527f2e372d31352031312e312d32315a6d312e322033302e36632d342e382d312e356110ad8201527f2d31342d352e332d31322e352d392e33682e376134302e352034302e352030206110cd8201527f3020302031362e3520362e3620333430203334302030203020302032342e36206110ed8201527f342e356c2d312e312032732d31342e382e322d32382e322d332e385a222f3e3c61110d8201527f70617468207374726f6b653d222330303022207374726f6b652d6c696e6563618061112d8301527f703d22726f756e6422207374726f6b652d6c696e656a6f696e3d22726f756e64908161114d8401527f22207374726f6b652d77696474683d22342220643d224d3130342e392035322e61116d8401527f3661323131203231312030203020302d35312e3320352e33632d362e3420312e61118d8401527f372d31382e3420342d32322031302e342d33203520362e3320382e3320392e386111ad8401527f20392e3520392e3120332e332032312e3520352e382033312e3120362e35222f6111cd8401527f3e3c70617468207374726f6b653d222330303022207374726f6b652d6c696e656111ed8401527f6361703d22726f756e6422207374726f6b652d6c696e656a6f696e3d22726f7561120d8401527f6e6422207374726f6b652d77696474683d22342220643d224d33312e3220363961122d8401527f63312e352d3820352e372d31352031312e312d323120322d322e3420342e342d61124d8401527f342e3720362e382d362e376c312d2e3963342e382d342031302e362d372e352061126d8401527f31372e332d31306139392039392030203020312033372e352d362e346d30203261128d8401527f382e366332322e392d2e322034352e3920312e382036362e392031302e3820336112ad8401527f203120362033203720372d392031312d32382e312031322e372d34312e3120316112cd8401527f342e386d342e312d35352e326138342038342030203020302d31332e322d332e6112ed8401527f38632d372e382d312e362d31352e382d322e322d32332e372d322e32222f3e3c61130d84015261132d83015261134d8201527f22207374726f6b652d77696474683d22342220643d224d3137382e362036396161136d8201527f34372e322034372e322030203020302d31332d32332e31222f3e3c706174682061138d8201527f7374726f6b653d222330303022207374726f6b652d6c696e656361703d22726f6113ad8201527f756e6422207374726f6b652d6c696e656a6f696e3d22726f756e6422207374726113cd8201527f6f6b652d77696474683d22332220643d224d39342035332e3463312e372034206113ed8201527f332e37203820362031312e374d38322035332e3763322e3820342e3820352e3861140d8201527f20392e3220392e332031332e324d36382035352e346137302e382037302e382061142d8201527f30203020302031372e382031342e354d35332035382e3461363720363720302061144d8201527f3020302032372e322031354d33392e342036336137372e392037372e3920302061146d8201527f3020302033382e312031332e336d2d34352e382d3763313320382e382032382e61148d8201527f3220382e382034332e362031312e32222f3e3c70617468207374726f6b653d226114ad8201527f2330303022207374726f6b652d6c696e656361703d22726f756e6422207374726114cd8201527f6f6b652d6c696e656a6f696e3d22726f756e6422207374726f6b652d776964746114ed8201527f683d22342220643d224d34322e332034372e38762e3163312e3720342e37203161150d8201527f2031302e332d322031342e336d32362e382d32332e396136203620302030203061152d8201527f2d322e3820312e37632d2e372e382d3120322d2e3820332e312e3320312e312061154d8201527f312e32203220322e3320322e342031202e3420322e332e3420332e342e31613561156d8201527f203520302030203020322e392d312e3763312d312e342e392d332e342d2e322d61158d8201527f342e372d312e312d312e322d332d312e352d342e382d315a6d2d31372e3720316115ad8201527f2e34632d2e332d342e3220322d382e3520352e382d31302e3620332e372d32206115cd8201527f382e362d312e38203132202e376d33332e352d352e336132312e322032312e326115ed8201527f2030203020302032372e3820322e334d31323320343061372e3720372e37203061160d8201527f203020302d362e342d312e33632d312e322e332d322e3420312d322e3920322e61162d8201527f332d2e342031203020322e342e3920332e32613720372030203020302033203161164d8201527f2e3863312e332e3420322e372e362034202e3320312e342d2e3320322e372d3161166d8201527f2e3220332d322e352e352d312e342d2e332d322e392d312e352d332e385a6d3161168d8201527f392d392e332d2e362e33632d312e3220322e372e38203820382e372031322e386116ad8201527f20372e3720342e372031312e3420342e372031352e3420322e33762d2e32632d6116cd8201527f2e372d352e332d322e312d31302d382e332d31332e376131372e372031372e376116ed8201527f2030203020302d31352e322d312e355a222f3e3c70617468207374726f6b653d61170d8201527f222330303022207374726f6b652d6c696e656361703d22726f756e642220737461172d8201527f726f6b652d6c696e656a6f696e3d22726f756e6422207374726f6b652d77696461174d8201527f74683d22332220643d224d3131362e332035332e31632d312e3720342e312d3361176d8201527f2e3720382d362031312e376d31382d31312e34632d322e3920352d362e31203961178d8201527f2e362d392e372031332e376d32332e372d31312e396136392e392036392e39206117ad8201527f30203020312d31382031342e376d33322e392d31312e376136372e382036372e6117cd8201527f382030203020312d32372e382031352e326d34312e352d31302e366137372e376117ed8201527f2037372e372030203020312d33392031332e356d34362e372d372e334139372e61180d8201527f382039372e38203020302031203133352038302e356d2d33302d32372e39563661182d8201527f34222f3e3c7061746820636c6173733d226d757368726f6f6d436f6c6f72312261184d8201527f20643d224d3136392e312037322e3961352e3720352e3720302031203120302061186d8201527f31312e3420352e3720352e3720302030203120302d31312e345a222f3e3c706161188d8201527f746820636c6173733d226d757368726f6f6d537061726b6c657322207374726f6118ad8201527f6b652d77696474683d22332220643d224d3136332e342037382e3661352e37206118cd8201527f352e372030203120312031312e35203020352e3720352e372030203020312d316118ed8201526e18971a90182d11179f1e17b9bb339f60891b61190d820152036118fc81018b52018961208c565b612280565b93611ffa845197606089525180978160608b015260808a0190612038565b860152600783101561201c5750830152601f01601f1916810181900360800190f35b634e487b7160e01b81526021600452602490fd5b8380fd5b8280fd5b60005b83811061204b5750506000910152565b818101518382015260200161203b565b604081019081106001600160401b0382111761207657604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101761207657604052565b600481101561212d576003810361210257506040516120cd8161205b565b600481526311b3333360e11b6020820152906040516120eb8161205b565b600781526611a11c9b19991b60c91b602082015290565b61210b90612143565b50906040516121198161205b565b60048152630233030360e41b602082015290565b634e487b7160e01b600052602160045260246000fd5b600481101561212d5780612196575060405161215e8161205b565b60078152662346344646444360c81b60208201529060405161217f8161205b565b60078152660234130443137360cc1b602082015290565b600181036121e357506040516121ab8161205b565b600781526611a31ca31a232360c91b6020820152906040516121cc8161205b565b600781526611a2a0a21ba32360c91b602082015290565b6002810361223057506040516121f88161205b565b600781526611a31a231b232360c91b6020820152906040516122198161205b565b600781526611a21ca298232360c91b602082015290565b60030361227b576040516122438161205b565b60078152662346464545393360c81b6020820152906040516122648161205b565b600781526608d19190d10cd160ca1b602082015290565b600080fd5b600481101561212d57806122945750600190565b600181036122a25750600490565b600281036122b05750600590565b60030361227b5760069056fea2646970667358221220f9b8a843689e6986715bcd7b3506ffd41936e26703c59818b80dae76baef2b5b64736f6c63430008150033";

type HeadwearMushroomConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HeadwearMushroomConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HeadwearMushroom__factory extends ContractFactory {
  constructor(...args: HeadwearMushroomConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<HeadwearMushroom> {
    return super.deploy(overrides || {}) as Promise<HeadwearMushroom>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HeadwearMushroom {
    return super.attach(address) as HeadwearMushroom;
  }
  override connect(signer: Signer): HeadwearMushroom__factory {
    return super.connect(signer) as HeadwearMushroom__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HeadwearMushroomInterface {
    return new utils.Interface(_abi) as HeadwearMushroomInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HeadwearMushroom {
    return new Contract(address, _abi, signerOrProvider) as HeadwearMushroom;
  }
}
