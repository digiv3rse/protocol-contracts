/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GintoNordFontSVG,
  GintoNordFontSVGInterface,
} from "../GintoNordFontSVG";

const _abi = [
  {
    type: "function",
    name: "getFontStyle",
    inputs: [],
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
  "0x6080806040523461001a576139fb9081610020823930815050f35b600080fdfe6080600436101561000f57600080fd5b600090813560e01c63a9c820921461002657600080fd5b816003193601126139c157612f008101906001600160401b038211818310176139ad576040918252612ed681526020907f3c7374796c653e40666f6e742d666163657b666f6e742d66616d696c793a2247828201527f696e746f204e6f7264204d656469756d223b7372633a75726c28646174613a61838201527f70706c69636174696f6e2f666f6e742d776f66663b636861727365743d75746660608201527f2d383b6261736536342c64303947526741424141414141434b6741413441414160808201527f41415152514141526d614141414141414141414141414141414141414141414160a08201527f4141414142505579387941414142524141414146634141414267584b4742573260c08201527f4e745958414141414763414141416a41414141584c707a754d6659335a30494160e08201527f4141416967414141426541414141696851474961426d634764744141414369416101008201527f414142764941414134566e6a5955304764686333414141416c384141414143416101208201527f414141416741414141515a3278355a6741414359514141424d334141416c69506101408201527f62496462356f5a57466b414141637641414141445941414141324757382f6b326101608201527f686f5a57454141427a3041414141485141414143514476414e4b6147313065416101808201527f41414852514141414367414141417247397742306c7362324e684141416474416101a08201527f4141414667414141425977314c4d676d3168654841414142344d4141414149416101c08201527f41414143414230773743626d46745a5141414869774141414f764141414873376101e08201527f6b696c64467762334e30414141683341414141425141414141672f37674158586102008201527f42795a584141414348774141414172674141414d75457048582b654a786a59476102208201527f47617a766946675a574267366d4c4b594b4267634562516a50474d526778526a6102408201527f45774d48457a7344417a4d6245787351446c32415559454d445279646d4677596102608201527f46426761474b5765792f48734d4a35702b4d4b676f4d444a4e42636b794f54486102808201527f75416c4149444e77416d4a77765141486963593242675947614159426b4752676102a08201527f595179414879474d4638466f5941494330416843423542515a6c426a304753776102c08201527f5948686e694771762f2f6f534b3644415a676b63542f2f2f382f2f482f2f2f376102e08201527f582f562f2b662f372f782f77616f615369416b51315444454d4e41774d546e4d6103008201527f504d7773444b787337427963584e7738734845654c48723132415156424957456103208201527f525554467843556b7061526c5a4f586b465253566c465655316451314f4c734f6103408201527f56304141437568526970654a786a5943414b5345416730776f47426962482f396103608201527f2f2b4f794659444c56416d4d79517a427a42394a45786a4f454b6379557a45366103808201527f4d33777a474770554459777444437441656f38674b5449774d44554e66462f366103a08201527f2b5a666a4a462f6e2f2f3334696841676954474a4b59726a4a714d5431676c416103c08201527f63417178516577774141654a797456327462473863566e74554e6a4145446b726103e08201527f436264643152787149754f354a4a367a6a455668797979364934536c4b4263626104008201527f76724e4f3075457537396b765247722b6e396f76795a73364a39366e7a4c54386104208201527f74375a6c594b4f4f412b665a3779516565646d58666d584f664d516b4a4c45676104408201527f2b6a4d4a6179393051733776616f38754252524c64637568456e6a2b586f59556104608201527f53465a767252724a6756673445366342734e456a474a5147325068534f4378476104808201527f2b526f306b6d6a317455304b716847693071616a6b384c74627177672b6f47736104a08201527f676b38624e434c66437a5a6a47675172422f4a476c65415154706b4572396f336104c08201527f4768554d4178314469383275445a38574c643861394b514f57507130345661346104e08201527f7045507a714d7836744f775367736153703656413869316b6572515a415458446105008201527f6d5539484766536d7550786a6563685341636846514a6f7759566d2f48654f786105208201527f484937696953314f396a61677473326d5330476363797332785964414e542b556105408201527f6a53427139764d50506a666951526a564571616134664a5a69527644624836446105608201527f616a32346d6278484873496c6f30487778493745556b656b7875594f7a3236426105808201527f716a61373330795a49594d4f4e4a57527a453854434e796648694f5063676c6b6105a08201527f50346f2f793452575574595547706d634b6e6d61416630597a796156623579416105c08201527f43324a4332716d48416a456e4b597a527a346b68665a586465617a37395553736105e08201527f49426c64636257417a6b534936674b39736f4e78476833536a70752b6c65484b6106008201527f6d3445557661656842687a655734354b6130614562546863416269344a4e38796106208201527f7947796c636f462b576e56446834544d34416874444d656f7375614d6e574c736106408201527f4b746b6a695166414a744a5446546b6d316a375a776558316755516569764e366106608201527f6146633147664c7152356534726a77515459336b786b4f4649704a39554557376106808201527f6963454a49756a4a785969645371644e75715744686e4f3133484c75462b36746106a08201527f724a545976614f4853384d432b4b49625334716847766f3467763661785143476106c08201527f6d596272646f53594d714a56304b33754144414a416857754c52486b5a4c4a6c6106e08201527f2f4c4f476a4a4245556942674e6f707555676b614e45306a4c433171495633646107008201527f755073744a774f37354f43346671714556563364754e65672f73704e7641664e6107208201527f584d3133516d566f4b4855626179457043542b725473385a564461666e5a4a666107408201527f355a776738357138684673646d504d6734662f505648794444554c713033464c6107608201527f5a4e73477658655174754d732f45384b514c2b377559505a327363314b5943566107808201527f465669466441347437596352795472626f576d5369452b7847744b462b4774496107a08201527f6a795731416f4f5a526944544d4a62506a506c53754f57425a563466732b52366107c08201527f494751374357315759392b74427a6e30666356754673335776525a5a30354c4b6107e08201527f38673843772f70374d69792b6430566d4c7036717a4d3871724f4b69772f72376108008201527f4d5a6c7464304e737679437a7137774e4c546170494971695149755a4a7463746108208201527f376c61394d6966574a78646272346e6c31736e5668636d79362b6278656c466e6108408201527f544a4f38396839765866316c6432394b522f4466676e5964667a38492b6c676e6108608201527f387372384d2f6c6b33347833494e2f7248384976786a6551502b736677532f476108808201527f4f3544763959747258736d4d71397161483253694c522f5a776b4d4c6e4662576108a08201527f787a3857356f75756e5254567a4d4633416e75764b63744b70305533474866796108c08201527f62445a652b2f504d6c31746c674a7566546f68665773374e5444434e325276666108e08201527f7a4b6966436378376d6c35597647386864786d7557456e39574a2b33756d4c546109008201527f77765676386c2b472f376e74724d626a6c3139765532346745487a72596674796109208201527f6264624e464c756e323530364c4e2f305a466851394166786b704571744e325a6109408201527f5a643767304937663352714b753661435952586b4330587a784e6d34355472796109608201527f48436439444556756b7961435830316161685a66504370347542647a68714b796109808201527f6b3749357835397a524e74753135564d4674794e6d53456d34755737765263556109a08201527f6d57705874635769732f462f766363756651765a585a6f5859537167525033396109c08201527f7545323535396e6b70424d6c52557875754b35564b517573414a7437796e39366109e08201527f517744512b42326b474f46545473384e4d31467867744f4f384d4a636f323177610a008201527f6f754d5a4a525273475650334d71546d516a6d6d784545623935532f31554677610a208201527f71684d346d46784778354c592b463669424d72307958614d3673373667754b2b610a408201527f5573337075476b4a32786b5361784837566c4279383757353950537259725477610a608201527f56566d686a64502f6b5259354e345672586e32564a6338712b65734353597043610a808201527f76684c35326e585a366b654176396f383152334b484c5164523338626a4b5474610aa08201527f7a4f4e70776137753172703162333350367056662f4d76632f6145576936347a610ac08201527f314c3462616d75393449746e474e77616c7a7155686f6d7a6177497a51756333610ae08201527f32753263696e2b464c7a726574636f417258703432625a382f6630646b634870610b008201527f334a6c762b78704c762f7279706d6e3769506452526131596c36616353356e56610b208201527f3030344476654a43717659335458613667384c726b333078446352776a713974610b408201527f726a73775133764e716d32376a6c6235777a33384e785471314b4c77472f7165610b608201527f6c6c694c6334696948434c586677416b2b693962626d67716133414c2b717830610b808201527f4c734150514248416137657579596d5430414d2f4f414f56324166655977654d610ba08201527f6763426c396a446f4f76363250307767416f416e494d69765778592b63654164610bc08201527f6d3564356a6e4d506f47387778366c336b47665a4e35426e324c645959414365610be08201527f746b6b4c4a4f426765736b3847414f613844444a6e44344a41354442347a6838610c008201527f47336a563362514e3878646a48367272474c3066654d5859792b622b78693941610c208201527f4e6a46364d66477273592f636a5978656a486948466e6d7343666d4246744162610c408201527f356e34577541373350517a636a48364b64346133504f7a79786b7a73384e7838610c608201527f6b357638446d5636616e2f744b4d7a49346a43336e487279786b2b713978546b610c808201527f37346a59564d2b4b3246545067647550656d352f33656a417a394177755a2f67610ca08201527f634c6d663548374d774a66374b5143582b326b416c2f4166665636586c2f4e53610cc08201527f4e442f35754654502b3768557a2f4233626d684839617949535268557a345549610ce08201527f38766d6b396371726a6a557145593472386e744d485939326a326b4972582b30610d008201527f65547837723143525236412f3041414141424141482f2f774150654a7a46576d610d208201527f74776b39655a50756438462f6d47725175793549737336326f62796361324c4d610d408201527f6b32594753443735596c797a613241736249474278524c726b41426b5041454f610d608201527f494141554a493247786f476f4a4e6d6d6c6f4e715162544b644a517a62547074610d808201527f3130647373324d3231335a7a757a6d646d64376d793349544d37335a6c6b616e610da08201527f6e66637a3764625a4d662b364e6b544e4235482b6c374c3839374f7859696141610dc08201527f64433547666b41385168475372335742446d4d5563774e344549434959514957610de08201527f67552f6f4638504d2f4c654a6c5349526645417076466f444149436f4f432f47610e008201527f7a68465449524d65462b52443434486c6d5066344a532f784255446e2f394154610e208201527f362f434f6e52376537625a762b7778356f68456c36656c386c78684f63657a63610e408201527f30695a46553277596a6743526b5768427076446b616f4676555764642b32557a610e608201527f51633873497a4b3736486f70324139717956675041616f356b6c63497a4a4550610e808201527f302f776150306e515437676b46505358467873623559583649724b697a516176610ea08201527f4c567131564b52665350584a477074376c4e62705054775834634d76596a4d37610ec08201527f45664f4866447765646e716e59654e2b782f74754a4d2b63574b4d7857546859610ee08201527f634d6877736d713836737656527676474a45482b32364d50346d2f426d2f734f610f008201527f756a6a2f376e386d55456d7258675450775a2f6976777439616a687463494479610f208201527f474d715a4d7838696e6b4a464e727777616e415838574f594266774a6b583662610f408201527f6c3938514836587a534873704654386b6b4f7542614877436138446f506c436b610f608201527f512f49686737524c6776364d6d4356396b6f7938786c616d7a35566d65647931610f808201527f454c396f6d6d3359324e646c74446730315256325a314f4b786c6452436a3673610fa08201527f55767958766b657967506f765259392b314365494b47526a34456e31486a4654610fc08201527f444834524166665a696b674a72476c6b4d6b6e43723046435764593877463432610fe08201527f494f644170366c484935517649696557482b616e6859726c554535666771374b6110008201527f7872776f3761457178656e59744e54664453616a4b4b367458354471783630646110208201527f39335a58544846622f2f796f3675675947757a7347424c766e516137736e72676110408201527f384872302f732f73375173342b506a55306548687437677671704550343654366110608201527f34684558586446515845675364364a4d706c55392b4d67706471347962456a356110808201527f785563546c7a3456443044464632764b64513047696f33413646535345722f4f6110a08201527f5054332f6d4d4b4d3474374d614c553442776761454e34444d744f75664a7a636110c08201527f4f457977553267714749363545387141595063694845635458653149645466566110e08201527f515166344934456c36713178495230302b624f4533584d7a68764c6c50492b636111008201527f78435345753177656d4f4f56446d64456c4f46575641642f6443354c4e75642f6111208201527f666d78724235392f6e4155552f6639736e4a62373373434654577272655a6e6d6111408201527f397a376d78706e396f496e396741584f6741753872515a55392b4365594648656111608201527f62344d724176457a496f4135346f524f335455593267566b77676e68644369436111808201527f5975565931795a6c3038655975516748684f344d4e7863424c4555377055436e6111a08201527f59466f78694d4b4755797a536144325777524d3474744b4a385278466a6d4c416111c08201527f4736754d424b47335937617064612b33567635356d426337734d3455326467626111e08201527f61654f63304c4a376f364e6f3372643534646e504a7339754467747062476b626112008201527f72474a7a58367573727971764341315737556e4b7172386a7463766174597a536112208201527f7141763634416a374c514b6e5267506a7544494435474a44586945662b4d41476112408201527f4547647944384b4153356c695379596f6e5143554a774654304845386b4d43476112608201527f6e384247726f446f376d71703861716152315230364e784136315357317947706112808201527f7a5949654d6370506a77346175524b376a6d5631642f397a756375652f5656346112a08201527f2f6a303039455071653146614d6d694e556a6f4b634f3766486b46574569354e6112c08201527f504b6c675566536b6c494e536f477a2f494378302b495749446e4338436635416112e08201527f41596c68476e52634354433241644b6c596f7a5261724c4c504968714a3561726113008201527f516d346d4179796854415062584c67656633316e656533645a32757178366f716113208201527f6c76494e43336278522f45586d6c64516a2f77443236766d336642705075534b6113408201527f6e4f552b645962384f54543533584d332f584c5034522f5030574b6f5a75385a6113608201527f456e5677463056514964744644507153484659496865784a4b7159584171446f6113808201527f47434e5637614c5a677439536957567a72516d584359684f50774e4a443934536113a08201527f446d46644e79636f53455941776d55475947506174314f6e424e7561374d5a416113c08201527f44566979775761305a6d515a4a2f704c4b577231465877537452682b4756334a6113e08201527f565533503572372f71656338506e3378712b486d342b764d6177623850754a376114008201527f554865767436505273446753623873587538706631787a34335a7956764475716114208201527f4b7a5265596a75306c39633253757662362b726433743767416c5465433864616114408201527f7a656a6479686c4975524e41384241326c336e4569704c436e48724b726b49336114608201527f673967326974707957466a49496345646f5a615855556b616855384c51454f676114808201527f3171624d496d6f6f33387a54782b6c4a516350375877653149434549374662686114a08201527f706970774674317149667a6d757943633855595647443450494334616b6e75596114c08201527f644754575254527a6947587a35714b34466955567371587935715a724e5761316114e08201527f3572726c7054726a56706a5776576d466e55704a6a52587553324a7671527a4d6115008201527f70434a5a46636d5251384d7430784578782b74764f466b3574503976632f74666115208201527f6e452f6561572b76715735675a505437656e70627648672b74504e6f34346e536115408201527f50725470525a397a6b47616d6f47485075737636355a553146585637476d4a6c6115608201527f4c5a57466e563046426c5830663558776b2b6e496e792f78376c7638426e51546115808201527f677a6f346e4d50436d4c5a796a50637948717a30533954664a6b436d5654456a6115a08201527f374a6b7975446d43654e79386e54432f4d79394c6377522b616e566f634e4f4f6115c08201527f5a5838476d79422f486e6277782b6535666e6b4d3234642f327550666c37756a6115e08201527f76326259444b3065447a72666434657a61537431352f342f42627734615336526116008201527f4c726b63647a4e72513578356f6848534b5857313275396f35365677763472576116208201527f4c784b4c65482f4332796733472f36623474423975556556674742514a6c36446116408201527f41506d536a776645395279694757446f4d533341796649737367736e416d7a676116608201527f446a2b4177452f6b557752753643786932476b436a57634448663268444b77426116808201527f6b49547965394238626c444c7a63577a7731636251496256746b7245782f6c796116a08201527f447777576a3335415861374253566c5a58316c65357971396c717370726b575a6116c08201527f6b6c4e6f764a6d655441576732744a626e41544f5a637431704d6949437659706116e08201527f4a2f75543366317535736264785735396a65644c7165484e777a6372466e364d6117008201527f3244675863327676546a612f39322b4f43767a6b362b4f6667665852304e37716117208201527f594e72706c755737584e56317672722f49487833704f3977334f654b764c6a676117408201527f2b48333538363873476a50656533337171326d4e5a5757533156724f383446796117608201527f2b5156316a326c3734726a6d39656159353956305362425a686c7953734c72356117808201527f4c786777645a72533844726f64494543624e4d6978346c41557758576868756c6117a08201527f414379364170696a7a775051656358517051515351436a41596348354a686e6d6117c08201527f2f305a6d425252434563337737303051436d342b413574517a4d4b6b3539664f6117e08201527f677967686a526853416366394d795350744b5347634379575a6434494f4952596118008201527f6a77456e4147505261444d6268495a312b4972727134474b4869736d4b7273526118208201527f544d4c345159717a4a68616f4f4d5561514632556d6a544365616c4954352b506118408201527f72316b6c32624e2b357775735a6270707677784d426a766c316e4e2f5630726d6118608201527f74736161346e775a664f52583753573131547538586c47717a754c2f515065736118808201527f39314c7977344b38707161797371484e543358597350794a666b506c496950616118a08201527f36667a38736941707472636c6c314a6354686a646557786d695a70733657706a6118c08201527f6b5667417a70494e706576436c6c755075324e6771732b5361676e6747544d486118e08201527f51335777356f58744c2f6c34585a6c34553576576c7449726d3459576750344a6119008201527f663437706c6f45367a4171565149716653716b67494e75457968554b5831397a6119208201527f4b31536546514a4d6f615455766f444c58484e6e564e65774e5468746c5a33596119408201527f6d742f4f69497238356e322b596a51662b464c5673762b6471624a386e3979486119608201527f3933446b534b646e71394f3966324f5871414938674373646e4c386d4c536b776119808201527f657a4e744c53705258536739415751483256487976537a4655636246556374346119a08201527f364c576236615a696159456b365265516f537837414c42324e437774467951396119c08201527f644949434a554777454d6979396930734353556d52772f6d76395731372f31766119e08201527f6d674a6252753031686437586962653979366130595275446730644e472f3657611a008201527f794a78643562572b4f724d686566626b5052504839412f69484b4e6475386b6b611a208201527f2f69476d5142697449493063444438436c4932367730713668592f716469574d611a408201527f41706b495441686e556b787252537471492b484b646e7541516b746e4b6c3479611a608201527f6a50536c434d50797568374d75686e4b6b6f6a7a454767474f59793450524b45611a808201527f7a4555414b4a6b537858706149554b37656146484936586d4e48576a48493135611aa08201527f446b6c5a69736d5a73726e527232503757352b2b6d2b7669644c702f7a325558611ac08201527f2f7636485976756239516661624e35373834394d68465831646235425a6a316c611ae08201527f69766479654c422b58585653424150677a7a467a785a4d7542534267782f4a45611b008201527f717545756868304a5951307a4468797a5337595a305136564175684750775a41611b208201527f78644a356149676354424b4168546f7a3235476f314770796c57577931477957611b408201527f42446c4755705271764e6f7377414e4352584934376351364e4e2b2b31564d35611b608201527f3368313464385638656666795879386d414f39676a2b4e697872363755615468611b808201527f6e4c665a653262586e4f2f2b4c7071793375786f327352304871456866355437611ba08201527f51612f614d6e5734464651516b42454b6d356c4635466647784a673777585262611bc08201527f612f4e6e6a6a79357836425967374161466b4b554143694b446d687850596c49611be08201527f5677425942546368626442354d426444486b615363645a5975686a2f4544686e611c008201527f61775157576964314c4b444c6f46362b6d4b7149442f6e41366e315558543157611c208201527f72436e514c2b35392f4f5862736d546b3974613742316b5031375668324a6e4d611c408201527f496e6a2b54755032513656424c4c79567279552b43414869616d52552b65586b611c608201527f46454953753632744d716b3830714d693244564930364c375762636148574739611c808201527f753631724d4d3151445167696745304877493061363749706a53793053746c4d611ca08201527f61673148656c5171745a5234664d675946716d6b355649692b454532394e776e611cc08201527f6f714867494463344a524d496e3233727a53306c4a3771613363617247593552611ce08201527f6c737a316173504b63755354725462484475514e657a6c525648573535343348611d008201527f4377722f3945612b657067482b2f38616a664e75723162747661545a6f6a3165611d208201527f505039316a4e5a367a3241784f576a6d365162356e70376d695066474c725874611d408201527f75786258746e2b31624b797934497846326f69797230797a747947764d6f497a611d608201527f58674f51644e4f54346b73436d47784f636362565263733778597a38514a4353611d808201527f445261454c4d6269314141732f6d6354684e61463965794f3554437845486338611da08201527f335145696d4866464c706f70636c4b715255714577714d5462484b4353664b61611dc08201527f4b646b5779596d6d7474372b36626e645566434a446738383945337365473463611de08201527f4674505a462f6753623470626548385a4a6d374a2f4a567967623561465a7952611e008201527f33353945715264627347616c42644976474b70575a483778515255366f754e53611e208201527f6c545a4751304a522b58796c67714669516451344d6369676f35497156674c6b611e408201527f4a3575617479324857716b4b6d784b5a4f755579457848596463726f6f4b7036611e608201527f75386232364f6a4651616a546162305669354d456657676d324c663764594265611e808201527f3257326c6141376e6979704a74436e73514b556247773145352b544952417275611ea08201527f6570316a7241464d4a516b6d70744d714a61756f764439414a744f6f464d4274611ec08201527f46327445544f3879784a4749727741546277354d42456b464f516f3157765673611ee08201527f715a7562493063776d6b43367a44546f67757648724b37563554586c64582f6c611f008201527f4c54616e4e5a7831783461384c38502f2b544d75647759594334466d34486473611f208201527f52342f30506766526236634436444936425131414d4b6161696b6c7545557969611f408201527f756b49544a566f492f6454592b797333537865616b342b73383433524e695a30611f608201527f4c4d434b39685639635166646873686d4b69474e766e6c51703647564a6f7938611f808201527f516d7a4f6a746475435873506e6e6b636a4e6d77392b6a6a736a643346313544611fa08201527f36772b754b2f5533737073373841657a6b556c757a4d68685231734e306b626d611fc08201527f4532757842427963706e5235656f4a49586a5230784a65667175525a56375431611fe08201527f7134334b445746374f7a4342364c6f6a376e4669484b527642356153475269676120008201527f307438766e51594c41517970434a6e4344556559474f7966347452505351516b6120208201527f53414546467354455a514c6258306d445970455a67452f5749305357356655636120408201527f373031794536645138744278416b592b6864504b68734d436c575133724269716120608201527f524c4c79335350326750644b696c6175317963432f756e6174334e54624e4e6a6120808201527f676250486a325275474f6a74615175685a476e6c4f546b6575347161336231786120a08201527f4c354750647361417432526a346a7a5565373272733258597a374357707945496120c08201527f725a7258684e7a6d5a58385a41734959456e6c475470425a656c346e4c312b506120e08201527f3954635046444375343331567431637232396f542f516e315a766d352f7539616121008201527f4c344c50674c734466362b353534546b6e4c78562f79397a334b612f333931336121208201527f5a5058417345726b333474322f3330783946344e4c5138484e2b2f33504451356121408201527f6343542b2f302b5549686e322b6e744d2b326b416467422b77593650504550706121608201527f764e4b694c5574354149355a7a554a5732414e474b752b4652433139533670556121808201527f74764b6a4231725578475244644d5633783053623159512f415454675a4247536121a08201527f59384a6b4d726f6b68303576764778544d57377254466332705431306c7038536121c08201527f782b616952743858792b7437306c38696c5a504e2b7a4a586e786a4d36464c626121e08201527f43725358373864574a587932595450382b6a454d66477763534b6b2b7247556d6122008201527f6d6d53396e6e306e457057314d79494c70414a5a78596e49534b586a346d59536122208201527f426d6b42706f61435651624778656271315350477a43713768355533396b53396122408201527f2b4a747337542f59456e39564e393968332b3375306a58744b386748467a57366122608201527f2f767776416a6c337a64375a47336d654e4376623037593755442f353730414c6122808201527f317665624b686f4a456365744e49327a73646b705855767946656f6d48384d6c6122a08201527f376135746b52564769327243644a325241445a2f444258494a416957763870546122c08201527f4a326c3139414c7a4c49554c6f7778696d3636304d4b51764767757a366953346122e08201527f4e526c4b6d6a524d492f4e5672577466626a6d7a6655573570496a2f626c6f746123008201527f443272306a7a61344d44314d5a4b7142646534456346765a7651774564716f596123208201527f484478334d6f635463526e6330624579596c33303167706c77345251596178346123408201527f2b683067566a5168532f6d36684135526137686571626e2f544c7072553445556123608201527f5070567973515144324f5a7365664c6a57366e6d74334e2b6771706b63437a566123808201527f4f4237694f566c51656247396558727a30344f4c7a78614c2b69334871796f746123a08201527f4a516f69374e4c7445454e745435375362644d62326c704642546d463267364f6123c08201527f7573483554754f4b4859346b5879533569434a742f4c7a6f4a6149786d7170476123e08201527f30523268564c694a5335553737434469686675767070326571332f4d5a336c336124008201527f3335514743556a613935626878342b2b32624e3237634a4d3348496f33346b326124208201527f4e376a6579374249742f494e386a7a64415562743768616465494a713153796c6124408201527f6649534479577546625253343266536569394271325159364253666477454a6f6124608201527f33656571524b37536c535a317936546871666f61727851535a6d5a6b70436e746124808201527f43684d6e69587a73685267364a584731593250374a6671784278626b3733574d6124a08201527f2f6a557a6462573974396b477a3344725732506e304d4430662b3375636437706124c08201527f48366377596b30592f41546848315332626b6b4c675a385a53685a7867396b356124e08201527f497169544f57496c6e786c34644273547667614136345a564535594b527a344c6125008201527f46626230652b2f6d376b3633652b6a3638753349504873576644384d2f3943566125208201527f376b6f46337a57514b52766c4a4164636946724b5a4b4a4278736a7033434d786125408201527f4b6e39725254706b6c4f30674856355336644c6858555361414e5a3872474a736125608201527f3552424f333858772f6476486672306f553350376931662b6174642f435668586125808201527f74344c6a4943752b5a6a2b4c4b6b482f32617a6d7567587a594b333830554f666125a08201527f714c394b69437132446d4a2b6e444d54744d48346d5444746b676f714b2f426f6125c08201527f524a4f48354d324151797231524b497a42576d63706b4a68586e304d414d2f4d6125e08201527f6c76373132352f5035766676476a6d62507630776e342f6e31636a52556666676126008201527f69365a5546662b54486f4a6b50654f774a4f75433452766b545a5a32654a4d716126208201527f386b556e6245546c6c793346456d52637a4e4f664432483777644f54342f2f646126408201527f55376e2b4c4a426679417943576657454435336644635450534d4a77733479646126608201527f4748783236363250637952715878626358765a5579732f4c324d75436a6c65786126808201527f6b547933307667385a5557686e6f467a506f31337249514f53763852524563536126a08201527f7a7942696e486e306265505461467656502f42312b31466255414141454141416126c08201527f4142475a6f4762546f4e5877383839514148412b67414141414132306e7670416126e08201527f41414141446253664e4b2f38482f4c67502f41766b41414141484141494141416127008201527f4141414142346e474e675a4742672f766e7644674d446939502f67777767774d6127208201527f69414372514268644d46436741414148696346593239436b4668484d5a2f372f6127408201527f4d61524d3469784b726a5542514452614c4f65444b35416a65677243364153376127608201527f434b4335444e4b4337415463697544444c784e7a306650522b2b78737a6c774b6127808201527f657071304473716a54316f4f33755644536e7079563948536872785567584f706127a08201527f705331644877524d7676614f68475633736958794c526874417730706c51512f6127c08201527f492b4d503468635150474c7635656243647866536170324c4c6d36326e3549736127e08201527f6d2f3439366d463753554a6163587361366b55794c5146746c76526d764348386128008201527f626648684d41414141714144414175414453415149425a6747634167674369676128208201527f4c654130494433675167424d494658675961426a6747396766454343774939416128408201527f6c734366594b754174434337414d4e417973444f344e67673336446c345041676128608201527f2b67454249516a424465455649526b4248674569345361684c454141454141416128808201527f417241446b41417741414141414141674138414849416a514141414e734f46516128a08201527f4141414142346e493155335772635268512b752b73344d62463956796874494e6128c08201527f4f3770426a743274436251434732672b32347a705842304e4b626b54526154546128e08201527f5053694a6d524e357558794533374248324555744b37766b4a4b333666306d366129008201527f505a65424d585567767466484e2b762f4d6a453947443052574e61506737787a6129208201527f7667455a377a684d643476307434736f5933634b3777486471686934513363586129408201527f366638463336686e35492b42343062784c656f6c33364a65483739426e396d766129608201527f41326655352f4a4c777a7975686477727630316567665a423974624f4832382f6129808201527f686877694d616a33394c47447a487679633857634d6273466e684f2f54462b476129a08201527f33436d35442f6c6642642b6d6e3864384c336148767962634a6239474479504f6129c08201527f4837395056454a62784e73386d62684866475030372b544869586a6a612f504c6129e08201527f626430756c35486354423747416d6e756c574e6c59384f7265316246766c785a612a008201527f4654532b583278496e4d74577a466d58543534307763476950597977756e7648612a208201527f4c587173797937456f3572323072397250393253773750446f5770376f4e566d612a408201527f67767041684f6c717152377157773153724e615a4f6637596e4c685136766c54612a608201527f4f794c624e4263616c7938614b346b4831525131714830506b6e30366e4d6935612a808201527f4c56575747624b49544d7137777054444b4d3867753571486f6a657139696e6c612aa08201527f417255646b574e4b336a53796d444641556b55726571464d6863362f61396d61612ac08201527f693051633371565748364571437870613657757033766f557a70765770796b32612ae08201527f37677763674836774145797535366141757a46504a6161694e7a6f7753337876612b008201527f6e6f55476f66644e3448746b6170304a6b59444d31736c364a767a5566453062612b208201527f5377374f7a637961375768664332436776704643696a39376b536e624e654658612b408201527f31413538554a71704e6c71514f364c34335162575664492b4d4e576452516278612b608201527f46454131705062335878566d756e612f3530544a59365770496a54584f714b5a612b808201527f4367413572784b2b675a7043314a616d416c3642452b5177736243566c4c696a612ba08201527f786b522f4255384663343933412f675461485637515264496254346636594d74612bc08201527f774f7965415261376b3833324b6b36482b4e33784b5738626c696959656c3555612be08201527f6a376b4f324430777a6e496249655133624b37414a7a3078784c346733776b34612c008201527f696a7744706d66776d5a706570574e616334637a434d72433970415632673135612c208201527f7a564d5076495a4e336a45726f6374692b6f774c38585354334f4f746e475767612c408201527f4c36364f6b4a5466484548685349634f4f6434573642567061446e6565594458612c608201527f546d6f3467722b356870416659396436356e6a31553941646278566e4750686d612c808201527f3561384c2f526c50414f334a556932556a6d4650737355733031533235486930612ca08201527f676a367a426e52612b595a632b646a5a4a59566179777776526a68446c334d6b612cc08201527f355451752b352f7a6b385074514e2f626952655a366653784b52707430687a2b612ce08201527f4162637935357374664d3358427644544f39325a71344b61734d4a6539437747612d008201527f2b4f4b474574396a445677632b385a7a5a735a73745a65707a6d457830664e69612d208201527f3341766f4e307a74765773627a67324e457949494a6b4e6b4f58683733502b64612d408201527f3542626a6c71776679476e5939667a6a4337754c736c5432625966636d2b6b57612d608201527f7646466733506450566478446a71672f6b57504c736d646576702f396a465432612d808201527f2f74394c2f7a2f777431654a3947414869635932426d4149502f57786d4d4744612da08201527f43424e67417337514956654a77317962454f775641594265427a363239377459612dc08201527f4a46444d53436f4975594a425a5833633145444f3363506f424836434c707772612de08201527f503052695374704c75337771582b73357a7a2f646a6c65423443786467317a46612e008201527f6a427752476446477a2f6a705533494869364332644e637a36304f6a59354657612e208201527f794e7054576a76766b4631792f62614b414f4d7748422f556a4c4c7947716143612e408201527f6c5141365161735851665a43494e3949366c6d757164632f77414d7579706961612e608201527f594854384249704e48782f39416e6e493278734d62554e616e70356578317a75612e808201527f6969444d696247567551386731496f6931384141413d2920666f726d61742822612ea08201527f776f666622293b20666f6e742d7765696768743a6e6f726d616c3b666f6e742d612ec08201527539ba3cb6329d3737b936b0b61dbe9e17b9ba3cb6329f60511b612ee082015282519382859384528251928382860152825b84811061399757505050828201840152601f01601f19168101030190f35b8181018301518882018801528795508201613979565b634e487b7160e01b83526041600452602483fd5b5080fdfea2646970667358221220ddeb362b6f005788f013cb5b3bf8d40004e7e8dc13c1b9e9b4da66d457a1be1664736f6c63430008150033";

type GintoNordFontSVGConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GintoNordFontSVGConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GintoNordFontSVG__factory extends ContractFactory {
  constructor(...args: GintoNordFontSVGConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<GintoNordFontSVG> {
    return super.deploy(overrides || {}) as Promise<GintoNordFontSVG>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GintoNordFontSVG {
    return super.attach(address) as GintoNordFontSVG;
  }
  override connect(signer: Signer): GintoNordFontSVG__factory {
    return super.connect(signer) as GintoNordFontSVG__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GintoNordFontSVGInterface {
    return new utils.Interface(_abi) as GintoNordFontSVGInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GintoNordFontSVG {
    return new Contract(address, _abi, signerOrProvider) as GintoNordFontSVG;
  }
}