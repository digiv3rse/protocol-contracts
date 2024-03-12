/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BodyHoodie, BodyHoodieInterface } from "../BodyHoodie";

const _abi = [
  {
    type: "function",
    name: "getBody",
    inputs: [
      {
        name: "handsVariant",
        type: "Hands.HandsVariants",
        internalType: "enum Hands.HandsVariants",
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
  "0x6080806040523461001a576126609081610020823930815050f35b600080fdfe604060808152600436101561001357600080fd5b600090813560e01c638b80ee8d1461002a57600080fd5b60209182600319360112610099576004356003811015610095578361004f849261009c565b82519382859384528251928382860152825b84811061007f57505050828201840152601f01601f19168101030190f35b8181018301518882018801528795508201610061565b5080fd5b80fd5b60038110156125145780610e2b5750604051610b4081016001600160401b03811182821017610e1557604052610b10815260008051602061254b83398151915260208201526000805160206125ab83398151915260408201526000805160206125eb83398151915260608201527f332e342031302e342d362e3820392d31362e335a4d3135342e32203231302e3260808201527f6c2d313420362e3720342e352031372e382d32203132203320342e3820382e3560a08201527f20322e346831312e346c392e342d372e322d312e352d31332e352d31302e342d60c08201527f362e372d392d31362e335a222f3e3c7061746820636c6173733d22625374723160e08201527f22207374726f6b652d77696474683d22342220643d224d35352e39203230392e6101008201527f34632d322e3620342e332d352e3120382e362d372e372031332e356131362e326101208201527f2031362e322030203020312d3620352e382031352031352030203020302d37206101408201527f31302e312031332e362031332e3620302030203020372e342031342e3163342e6101608201527f32203220392e3520312e342031332e332d312e32222f3e3c7061746820636c616101808201527f73733d22625374723122207374726f6b652d77696474683d22322220643d224d6101a08201527f35372e38203234372e366131312e322031312e322030203020312d3520342e386101c08201527f4d3135322e32203234372e3663312e3520322e3420322e3420332e34203520346101e08201527f2e38222f3e3c7061746820636c6173733d22625374723122207374726f6b652d6102008201527f77696474683d22342220643d224d3536203235312e37613820382030203020306102208201527f20372e39203020372e3120372e3120302030203020332e372d362e354d3135346102408201527f203230392e3463322e3520342e33203520382e3620372e362031332e3520312e6102608201527f3320322e3520332e3720342e3320362e3120352e3861313520313520302030206102808201527f3120372031302e31632e3920352e362d322e322031312e362d372e342031342e6102a08201527f312d342e3220322d392e3620312e342d31332e332d312e324d3135332e3820326102c08201527f35312e37613820382030203020312d372e382030632d322e342d312e342d332e6102e08201527f392d332e332d332e382d36222f3e3c7061746820636c6173733d22626f6479436103008201527f6f6c6f72312220643d226d36382e38203138372e362032302e352d352e3668326103208201527f392e356c32302e3520352e3620313020382e322035203720352e352031312e386103408201527f20332e3720342e3220322e3920342e372d372e3720362e322d31332e3320332e6103608201527f3876386c2d3520352e362d382e3820342e322d31312e3920342e362d31322e396103808201527f20312e364839374c38342e32203235346c2d31332e362d372d362e352d352e376103a08201527f563233336c2d31342e322d332e362d362e362d362e3220352e352d372e3620356103c08201527f2e332d392e3420382e352d31332e3320362e322d352e335a222f3e3c706174686103e08201527f20636c6173733d22625374723222207374726f6b652d77696474683d223322206104008201527f643d226d36342e38203233332e3520362e372d32342e36222f3e3c70617468206104208201527f636c6173733d22625374723222207374726f6b652d77696474683d22342220646104408201527f3d224d36392e34203138372e38632d352e3620312e382d392e3720362e392d316104608201527f322e372031322e322d3320352e332d352031312e312d382e352031362e3161316104808201527f302e342031302e342030203020302d342e3920372e3363352e3320352e3720316104a08201527f3320392e312032312e3120392e322d2e3720332d312e352036203020382e36206104c08201527f312e3520322e36203420342e3420362e3520352e396136372e342036372e34206104e08201527f30203020302033342031302e34222f3e3c7061746820636c6173733d226253746105008201527f723222207374726f6b652d77696474683d22342220643d224d3134302e3320316105208201527f38372e3863352e3620312e3820392e3720362e392031322e372031322e3220336105408201527f20352e3320352031312e3120382e352031362e3120322e3620312e3620342e346105608201527f20342e33203520372e332d352e3320352e372d31332e3120392e312d32312e326105808201527f20392e322e37203320312e352036203020382e362d312e3520322e362d3420346105a08201527f2e342d362e3520352e396136362e382036362e382030203020312d33342031306105c08201527f2e34222f3e3c7061746820636c6173733d22625374723222207374726f6b652d6105e08201527f77696474683d22332220643d226d313435203233332e352d362e382d32342e366106008201527f222f3e3c7061746820636c6173733d2262537472332220643d224d35322e33206106208201527f3231392e3573322e3320322034203363312e38203120352e35203220352e35206106408201527f32222f3e3c706174682066696c6c3d2223666666222066696c6c2d6f706163696106608201527f74793d222e352220636c6173733d22625374723222207374726f6b652d7769646106808201527f74683d22332220643d224d39332e33203138322e35682d362e35732d322e37206106a08201527f392e392d342e342032332e336c2d322031362e34682e356c2d2e3220322e31616106c08201527f32203220302030203020312e3720322e326c312e352e326132203220302030206106e08201527f3020322e322d312e386c2e322d32202e352e3120322d31372e326131333620316107008201527f333620302030203120342e352d32332e335a222f3e3c7061746820636c6173736107208201527f3d2262537472332220643d226d38302e332032323120362e352e35222f3e3c706107408201527f6174682066696c6c3d2223666666222066696c6c2d6f7061636974793d222e356107608201527f2220636c6173733d22625374723222207374726f6b652d77696474683d2233226107808201527f20643d224d3131362e33203138322e3568362e3573322e3820392e3920342e346107a08201527f2032332e336c322e312031362e34682d2e356c2e3220322e31613220322030206107c08201527f3020312d312e3820322e326c2d312e352e32613220322030203020312d322e326107e08201527f2d312e386c2d2e322d322d2e352e312d322d31372e32632d312e382d31352e326108008201527f2d342e352d32332e332d342e352d32332e335a222f3e3c7061746820636c61736108208201527f733d2262537472332220643d226d3132392e33203232312d362e352e354d31356108408201527f362e38203231392e35732d322e3320322d342033632d312e3820312d352e35206108608201527f322d352e352032222f3e3c706174682066696c6c3d2223666666222066696c6c6108808201527f2d6f7061636974793d222e352220643d224d3130352e34203233352e376136386108a08201527f2036382030203020302031342e362d322e3563312d2e3220322e312e3120322e6108c08201527f37203120312e3420322e3220322e3620352e3220332e352038202e3420312e356108e08201527f2d2e3220332d312e3520332e376133392e372033392e372030203020312d31396109008201527f2e3320342e354d3130352e34203233352e376136392036392030203020312d316109208201527f342e372d322e35632d312d2e322d322e322e312d322e3820316133362e3120336109408201527f362e312030203020302d332e342038632d2e3520312e352e31203320312e34206109608201527f332e376134302034302030203020302031392e3520342e35222f3e3c706174686109808201527f20636c6173733d2262537472332220643d224d38372e37203234352e34732e346109a08201527f2d332e3220312e312d352e31632e372d322e3120322e342d352e3120322e342d6109c08201527f352e314d313233203234352e34732d2e352d332e322d312e322d352e31632d2e6109e08201527f372d322e312d322e342d352e312d322e342d352e31222f3e3c7061746820636c610a008201527f6173733d22625374723222207374726f6b652d77696474683d22332220643d22610a208201527f4d3130352e34203233352e376136382036382030203020302031342e362d322e610a408201527f3563312d2e3220322e312e3120322e37203120312e3420322e3220322e362035610a608201527f2e3220332e352038202e3420312e352d2e3220332d312e3520332e376133392e610a808201527f372033392e372030203020312d31392e3320342e354d3130352e34203233352e610aa08201527f376136392036392030203020312d31342e372d322e35632d312d2e322d322e32610ac08201527f2e312d322e3820316133362e312033362e312030203020302d332e342038632d610ae08201527f2e3520312e352e31203320312e3420332e376134302034302030203020302031610b008201526f1c971a901a171a91179f1e17b9bb339f60811b610b2082015290565b634e487b7160e01b600052604160045260246000fd5b6001810361188957506040516108e081016001600160401b03811182821017610e15576040526108a481527f3c7061746820636c6173733d22626f6479436f6c6f72312220643d226d36382e60208201527f38203138372e362032302e352d352e366832392e356c32302e3520352e36203160408201527f3020382e322035203720352e352031312e38203520342d312e3320332e382d3760608201527f2036682d31312e386c2e372031332d3520352e372d382e3820342e322d31312e60808201527f3920342e362d31322e3920312e364839374c38342e32203235346c2d31332e3660a08201527f2d372d362e352d352e3720312e322d31332e31682d31326c2d382d352e32203360c08201527f2e352d372e3520352e332d392e3420382e352d31332e3320362e322d352e335a60e08201527f222f3e3c7061746820636c6173733d22625374723222207374726f6b652d77696101008201527f6474683d22332220643d226d36342e38203233332e3520362e372d32342e36226101208201527f2f3e3c7061746820636c6173733d22625374723222207374726f6b652d7769646101408201527f74683d22342220643d224d34382e32203231362e3163332e342d3520352e362d6101608201527f31302e3820382e352d31362e3120332d352e3320372e312d31302e342031322e6101808201527f372d31322e322030203020342e352d362e332033352e352d362e337333352e346101a08201527f20362e332033352e3420362e3363352e3620312e3820392e3720362e392031326101c08201527f2e372031322e32203320352e3320352031312e3120382e352031362e316d2d396101e08201527f3520392e33632d2e3820332d332e362031332e322d322031352e3820312e34206102008201527f322e36203420342e3420362e3420352e396136372e342036372e3420302030206102208201527f302033342031302e346331312e3720302032332e382d342e322033342d31302e6102408201527f3461313820313820302030203020362e342d352e3963312e352d322e362d312e6102608201527f342d31322e382d322d31352e38222f3e3c7061746820636c6173733d226253746102808201527f723222207374726f6b652d77696474683d22332220643d226d313435203233336102a08201527f2e352d362e382d32342e36222f3e3c7061746820636c6173733d2262537472336102c08201527f2220643d224d35322e33203231392e3573322e3320322034203363312e3820316102e08201527f20352e35203220352e352032222f3e3c706174682066696c6c3d2223666666226103008201527f2066696c6c2d6f7061636974793d222e352220636c6173733d226253747232226103208201527f207374726f6b652d77696474683d22332220643d224d39332e33203138322e356103408201527f682d362e35732d322e3720392e392d342e342032332e336c2d322031362e34686103608201527f2e356c2d2e3220322e316132203220302030203020312e3720322e326c312e356103808201527f2e326132203220302030203020322e322d312e386c2e322d32202e352e3120326103a08201527f2d31372e32613133362031333620302030203120342e352d32332e335a222f3e6103c08201527f3c7061746820636c6173733d2262537472332220643d226d38302e33203232316103e08201527f20362e352e35222f3e3c706174682066696c6c3d2223666666222066696c6c2d6104008201527f6f7061636974793d222e352220636c6173733d22625374723222207374726f6b6104208201527f652d77696474683d22332220643d224d3131362e33203138322e3568362e35736104408201527f322e3820392e3920342e342032332e336c322e312031362e34682d2e356c2e326104608201527f20322e31613220322030203020312d312e3820322e326c2d312e352e326132206104808201527f322030203020312d322e322d312e386c2d2e322d322d2e352e312d322d31372e6104a08201527f32613132392e35203132392e352030203020302d342e352d32332e335a222f3e6104c08201527f3c7061746820636c6173733d2262537472332220643d226d3132392e332032326104e08201527f312d362e352e356d33342d32732d322e3320322d342033632d312e3820312d356105008201527f2e3520322d352e352032222f3e3c706174682066696c6c3d22236666662220666105208201527f696c6c2d6f7061636974793d222e352220643d224d3130352e34203233352e376105408201527f6136382036382030203020302031342e362d322e3563312d2e3220322e312e316105608201527f20322e37203161343220343220302030203120332e352038632e3420312e352d6105808201527f2e3220332d312e3520332e376133392e372033392e372030203020312d31392e6105a08201527f3320342e356d302d31342e376136392036392030203020312d31342e372d322e6105c08201527f35632d312d2e322d322e322e312d322e3820316133362e312033362e312030206105e08201527f3020302d332e3420382033203320302030203020312e3420332e3720343020346106008201527f302030203020302031392e3520342e35222f3e3c7061746820636c6173733d226106208201527f625374723222207374726f6b652d77696474683d22332220643d224d3130352e6106408201527f34203233352e376136382036382030203020302031342e362d322e3563312d2e6106608201527f3220322e312e3120322e37203161343220343220302030203120332e3520386361068082015260008051602061260b8339815191526106a082015260008051602061252b8339815191526106c08201526000805160206125cb8339815191526106e082015260008051602061256b8339815191526107008201527f2e372034302034302030203020302031392e3520342e35222f3e3c70617468206107208201527f636c6173733d2262537472332220643d224d38372e37203234352e34732e342d6107408201527f332e3220312e312d352e31632e372d322e3120322e342d352e3120322e342d356107608201527f2e316d33312e382031302e32732d2e352d332e322d312e322d352e31632d2e376107808201527f2d322e312d322e342d352e312d322e342d352e31222f3e3c7061746820636c616107a082015260008051602061258b8339815191526107c08201527f3130352e34203233352e376136382036382030203020302031342e362d322e356107e08201527f63312d2e3220322e312e3120322e37203161343220343220302030203120332e6108008201527f352038632e3420312e352d2e3220332d312e3520332e376133392e372033392e6108208201527f372030203020312d31392e3320342e356d302d31342e376136392036392030206108408201527f3020312d31342e372d322e35632d312d2e322d322e322e312d322e38203161336108608201527f362e312033362e312030203020302d332e3420382033203320302030203020316108808201527f2e3420332e372034302034302030203020302031392e3520342e35222f3e3c2f6108a08201526339bb339f60e11b6108c082015290565b60020361250f57604051610ac081016001600160401b03811182821017610e15576040527f2e372034302034302030203020302031392e3520342e35222f3e3c2f7376673e610aa080835260008051602061254b83398151915260208401526000805160206125ab83398151915260408401526000805160206125eb83398151915260608401527f332e342031302e342d362e3820392d31362e335a222f3e3c7061746820636c6160808401527f73733d22625374723122207374726f6b652d77696474683d22342220643d224d60a08401527f35352e39203230392e34632d322e3620342e332d352e3120382e362d372e372060c08401527f31332e356131362e322031362e322030203020312d3620352e3820313520313560e08401527f2030203020302d372031302e312031332e362031332e3620302030203020372e6101008401527f342031342e3163342e32203220392e3520312e342031332e332d312e32222f3e6101208401527f3c7061746820636c6173733d22625374723122207374726f6b652d77696474686101408401527f3d22322220643d224d35372e38203234372e366131312e322031312e322030206101608401527f3020312d3520342e38222f3e3c7061746820636c6173733d22625374723122206101808401527f7374726f6b652d77696474683d22342220643d224d3536203235312e376138206101a08401527f3820302030203020372e39203020372e3120372e3120302030203020332e372d6101c08401527f362e35222f3e3c7061746820636c6173733d22626f6479436f6c6f72312220646101e08401527f3d226d36382e38203138372e362032302e352d352e366832392e356c32302e356102008401527f20352e3620313020382e322035203720352e352031312e38203520342d312e336102208401527f20332e382d372036682d31312e386c2e372031332d3520352e372d382e3820346102408401527f2e322d31312e3920342e362d31322e3920312e364839374c38342e32203235346102608401527f6c2d31332e362d372d362e352d352e37563233336c2d31342e322d332e362d366102808401527f2e362d362e3220352e352d372e3620352e332d392e3420382e352d31332e33206102a08401527f362e322d352e335a222f3e3c7061746820636c6173733d2262537472322220736102c08401527f74726f6b652d77696474683d22332220643d226d36342e38203233332e3520366102e08401527f2e372d32342e36222f3e3c7061746820636c6173733d226253747232222073746103008401527f726f6b652d77696474683d22342220643d224d3136312e35203231362e31632d6103208401527f332e342d352d352e352d31302e382d382e352d31362e312d332d352e332d372d6103408401527f31302e342d31322e372d31322e32203020302d342e352d362e332d33352e342d6103608401527f362e332d333120302d33352e3520362e332d33352e3520362e332d352e3620316103808401527f2e382d392e3720362e392d31322e372031322e322d3320352e332d352031312e6103a08401527f312d382e352031362e316131302e342031302e342030203020302d342e3920376103c08401527f2e3363352e3320352e3720313320392e312032312e3120392e322d2e3720332d6103e08401527f312e352036203020382e3620312e3520322e36203420342e3420362e3520352e6104008401527f396136372e342036372e342030203020302033342031302e346331312e3720306104208401527f2032332e382d342e322033342d31302e3461313820313820302030203020362e6104408401527f342d352e3963312e352d322e362d312e342d31322e382d322d31352e38222f3e6104608401527f3c7061746820636c6173733d22625374723222207374726f6b652d77696474686104808401527f3d22332220643d226d313435203233332e352d362e382d32342e36222f3e3c706104a08401527f61746820636c6173733d2262537472332220643d224d35322e33203231392e356104c08401527f73322e3320322034203363312e38203120352e35203220352e352032222f3e3c6104e08401527f706174682066696c6c3d2223666666222066696c6c2d6f7061636974793d222e6105008401527f352220636c6173733d22625374723222207374726f6b652d77696474683d22336105208401527f2220643d224d39332e33203138322e35682d362e35732d322e3720392e392d346105408401527f2e342032332e336c2d322031362e34682e356c2d2e3220322e316132203220306105608401527f2030203020312e3720322e326c312e352e326132203220302030203020322e326105808401527f2d312e386c2e322d32202e352e3120322d31372e3261313336203133362030206105a08401527f30203120342e352d32332e335a222f3e3c7061746820636c6173733d226253746105c08401527f72332220643d226d38302e332032323120362e352e35222f3e3c7061746820666105e08401527f696c6c3d2223666666222066696c6c2d6f7061636974793d222e352220636c6161060084015260008051602061258b8339815191526106208401527f3131362e33203138322e3568362e3573322e3820392e3920342e342032332e336106408401527f6c322e312031362e34682d2e356c2e3220322e31613220322030203020312d316106608401527f2e3820322e326c2d312e352e32613220322030203020312d322e322d312e386c6106808401527f2d2e322d322d2e352e312d322d31372e32613132392e35203132392e352030206106a08401527f3020302d342e352d32332e335a222f3e3c7061746820636c6173733d226253746106c08401527f72332220643d226d3132392e33203232312d362e352e356d33342d32732d322e6106e08401527f3320322d342033632d312e3820312d352e3520322d352e352032222f3e3c70616107008401527f74682066696c6c3d2223666666222066696c6c2d6f7061636974793d222e35226107208401527f20643d224d3130352e34203233352e376136382036382030203020302031342e6107408401527f362d322e3563312d2e3220322e312e3120322e37203120312e3420322e3220326107608401527f2e3620352e3220332e352038202e3420312e352d2e3220332d312e3520332e376107808401527f6133392e372033392e372030203020312d31392e3320342e356d302d31342e376107a08401527f6136392036392030203020312d31342e372d322e35632d312d2e322d322e322e6107c08401527f312d322e3820316133362e312033362e312030203020302d332e3420382033206107e08401527f3320302030203020312e3420332e372034302034302030203020302031392e356108008401527f20342e35222f3e3c7061746820636c6173733d22625374723222207374726f6b6108208401527f652d77696474683d22332220643d224d3130352e34203233352e3761363820366108408401527f382030203020302031342e362d322e3563312d2e3220322e312e3120322e37206108608401527f3120312e3420322e3220322e3620352e3220332e352038202e3420312e352d2e6108808401527f3220332d312e3520332e376133392e372033392e372030203020312d31392e336108a08401527f20342e356d302d31342e376136392036392030203020312d31342e372d322e356108c08401527f632d312d2e322d322e322e312d322e3820316133362e312033362e31203020306108e08401527f20302d332e3420382033203320302030203020312e3420332e372034302034306109008401527f2030203020302031392e3520342e35222f3e3c7061746820636c6173733d22626109208401527f537472332220643d224d38372e37203234352e34732e342d332e3220312e312d6109408401527f352e31632e372d322e3120322e342d352e3120322e342d352e316d33312e38206109608401527f31302e32732d2e352d332e322d312e322d352e31632d2e372d322e312d322e346109808401527f2d352e312d322e342d352e31222f3e3c7061746820636c6173733d22625374726109a08401527f3222207374726f6b652d77696474683d22332220643d224d3130352e342032336109c08401527f352e376136382036382030203020302031342e362d322e3563312d2e3220322e6109e08401527f312e3120322e37203120312e3420322e3220322e3620352e3220332e35203820610a0084015260008051602061260b833981519152610a2084015260008051602061252b833981519152610a408401526000805160206125cb833981519152610a6084015260008051602061256b833981519152610a8084015282015290565b600080fd5b634e487b7160e01b600052602160045260246000fdfe3020312d31392e3320342e356d302d31342e376136392036392030203020312d3c7061746820636c6173733d2268616e6473436f6c6f722220643d226d35352e33362e312030203020302d332e3420382033203320302030203020312e34203373733d22625374723222207374726f6b652d77696474683d22332220643d224d39203230392e322031332e3920362e372d342e352031372e3820322031322d3331342e372d322e35632d312d2e322d322e322e312d322e3820316133362e312020352e382d382e3420312e344834342e346c2d392e342d372e3220312e352d312e3420312e352d2e3220332d312e3520332e376133392e372033392e37203020a26469706673582212208d20dff763d8ebfe50c61896249ab7879e6607b7806a8c45d9d1a4b5248016f264736f6c63430008150033";

type BodyHoodieConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BodyHoodieConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BodyHoodie__factory extends ContractFactory {
  constructor(...args: BodyHoodieConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<BodyHoodie> {
    return super.deploy(overrides || {}) as Promise<BodyHoodie>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BodyHoodie {
    return super.attach(address) as BodyHoodie;
  }
  override connect(signer: Signer): BodyHoodie__factory {
    return super.connect(signer) as BodyHoodie__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BodyHoodieInterface {
    return new utils.Interface(_abi) as BodyHoodieInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BodyHoodie {
    return new Contract(address, _abi, signerOrProvider) as BodyHoodie;
  }
}
