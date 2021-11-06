const express = require('express')

const app = express()
const port = 3500

app.post('/whitelisted', (req, res) => {
    const { address, qty } = req.query
    res.send(JSON.stringify(isWhitelisted(address, qty)
    ))
})

app.listen(port)

const tier1 = ["0xD2B066d4c2972f54C422Ec8F0E34513F75917213","0x01071DBA8095C7b29148aF1bC1daDD0Dbd50C634","0x01d8978564fDe99FC4609892ac7b605f85600803","0x020B498FCafDA46De4aefbb1497Cf00eF862d43C","0x0214a636aa84857974708D2FF92f85986ce0d732","0x02cf7c0Af382A7daEdA8d3D95fe7a76f48648364","0x03514AA2d3972fb6C761Ad6Bc29427fD1Dc04b08","0x0372eb65f115f4B79cfCC7F9Dc796E4F161Cd7F9","0x051CFf099B1cB931A78FBB546aFC9Faed9705530","0x05dF86eDE0C960C1c03DD756c02b916F94E4c632","0x061e3B5a7fa65624A9746F494Ff4cBd30929febF","0x06Ef623E6C10e397A0F2dFfa8c982125328e398c","0x070716bFfC54300cEF31C36d9e64C65187C716D7","0x075661DfeeB9c4856Ced301626DB18e6E5305f68","0x08046e2349017615d53D3977c307d39AB4eEB3CF","0x081a125805151DA19E7CfE95BCcdeafAF2E981fA","0x086f6e29884590b38ab4A6098faC628057454F1e","0x08B5bfEB412443cfc54E38656Ae88f6bDDe4920f","0x08BC8AA2cFF2f3684f9Ea96F4c7094e62E29F519","0x08E5203F1209485C3BC1B0a7a344aAb6AFdF0983","0x08E7Eb07bcD4bE629bAb1B619116a49ea141Db98","0x08F591BC375b70e0893eE86bb55D6c312b156D85","0x092E7acB2C8F13546Ccff96BC6A6005Ae9Fe5162",
"0x093C3AC61178C0c44f230065186A26abA972a6af","0x093e94741A8F96Bf44Ec92d5F0E464B109242138","0x0970Ed73b176061124cc1E7f89f8E3CfD5A897F5","0x09AF59067B159A023E41DF8721ce4ad71cd70a99","0x0a109BACD7917f5EE67a70AAC8b1A955427Fb444","0x0A5aBC4eEF196994abb9cd34fa8FE9229Ce53e4f","0x0a6b1Ce02f1c81e3246f84276a3727B2808b6be6","0x0b3bfe556e31f3c44e2004d79DE4AF01f3f362Fe","0x0Bb521bD6B2A0eb81A0750E0d78C50917323d958","0x0Bbd3c706bd4279c852c68E49325C6df76E2C032","0x0c6dD9edd0D92c4Cfeed734eEedD6Bf8b7fAf489","0x0CFA94e35AA2a31cc342b2382d94040ABde26a84","0x0cFc091C15f04FAaB4414d825D15a6a24A451F60","0x0d1d74535bCAbda2dA2CfF5A53C2B899901D423B","0x0d9D145c19E9C1a25a8F48a1Ca786c3306Ca2C4A","0x0E88CBaEeAe8D34CF6b1f160E27EC01bcBC3c8cd","0x0f244C87e578Fd3C04CDdcCc92f25ACC7BffD24a","0x0F34E9EC6971eBb89EbAB75e9fd194ac6295a194","0x0f3ed7A3519dc3B3f4A80d0922C300875A527A60","0x0fEcD389Bd9A340E85eC7d88618a3Bad4B128dF3","0x100c40D6a65b124E9cDA30a57A67A8fB124E1723","0x101A0778cda24359A096342A2Aa45eF52A6Ec1dF","0x10403C9A55e743e34d0637a2A69293e1fF0b2e07",
"0x104Be7518A497a8924BF2D3dd04f03339E9f3841","0x1058559f1c73c80337fe8A5776b43d777d2a3Fd7","0x10dB9ff48bdcb415F7F3e21Ed15385863E2744e9","0x112b4fb5ED7F26E1Cd25b5C01A89260E07723E1A","0x1160f34d8D34D3f22d602f26F6afaf73b26eBf1B","0x11A4a1668593FF9B78AB13B91848f48428560AeC","0x123e22782c13CfB74A3B792e20b409Ebcae4830a","0x12D8Be3c23A9E239fa1390fd70E5c63F5db98887","0x136fd91299Ccc80488A87B78a7460E47dc643d1b","0x13a1D15dcDfD7aA12b560461A91D5A67FF7ca8ae","0x14477894e3a908c4ff400DE1223834B3e82b08Af","0x145AF99EeE32BF04491242039F87D347dDF94603","0x147E7d6c5b88B4B6d3f2dE67BE276F65Ba64Cd6C","0x148F1700C04D97f962CeE282F41B2C588B9F96a9","0x152289A1a16403eeCFDd8F99512a1c8dc4C390bd","0x1538a7CA285373968934C1445F97921813f4FB49","0x155a3b74c26955Ca5174500A8f83947d7793bDd2","0x15e4626a5D0C89CA7123C1dD01697a8Fe888C233","0x15f883F94a1B5cD856FA3D948c6Eb013D49175c2","0x172Dd2a8014e14d01B6195c21B00149Cb5288a5a","0x1769aE3C89DDAE086F6103243F7A543c18e21416","0x1775cc97E5c05Fde8b571ef75CA52d0A9ff19025","0x1795011eA0D47f3Dbd757B77fDAa3F0366208237",
"0x17E80B4E239298C4c23F5445b5017D7d91D22FE5","0x18FE939ED87Aa527871Ca302e8E193465Feaf6aa","0x197D1109285f48984DA2c7efd237C41e28c6517e","0x198Ea7Fd903E75a0BB24E7C157eC6CC6Ccdadf66","0x1A37a10F6325e4002ddcB287ba1AF4472746f76E","0x1A67cfF1B854e7C3E37AebA4562bCA48728556fb","0x1aD7D09A7a4F2254228DF8C2F2F9f59aF5E4dd45","0x1b0ab3a43Dae236A77E11bf3923b475B8F225Eb3","0x1b0b416Ab0540bA7CA143DA93DD5BBD766ee1103","0x1bF0E77e84EDb0A8AB8E55443BE5176142143Dd6","0x1C018692175051716b07e07C85f88A810c82905B","0x1c72bDc0F2C9bc581A71cA629412FEA85457c45A","0x1C8903e8a80dadC2A9F207c39D22bc5B7e6A97d2","0x1d16F4dE6e3d0700ee9820772C0653C0F0A45ca2","0x1D4489393AbE76CF7E841F0Fcd0cd7b548945C4A","0x1D95aF8572170C7f4DD45D1DcE052D51b485D606","0x1DC93424A875394D73b0688d4F173977a68E0590","0x1F2008A4EBE69C39Bb5b94D54696C07654Ab0ca3","0x1F3A0dd591B51Ae6a67415E147c7a25437B54501","0x1fB16760EEee957f3EE7B6750A1A192BEe27b5F8","0x20108337f5b6104e95459dAba0942b1Fe0332458","0x2082Ea58009B676C1F80671822980ABce88F25c3","0x219C111F1CA6A0b931078B040E993d4E11a426c7",
"0x21e2A3181B0F1B70e094C2C7BfE9149E1df3e665","0x2220d6b8824AA95eC853F64d6DA605704114bfD1","0x22751d31E7313a61dB0c323DAC46413A72B86a48","0x229Cf942dffaC388A509a593C79f670ee752E9e4","0x22Cd6bee7D5f2d55e18A1Ee4b680c555a7B4955A","0x22ed7a936D3DEA108004E3229F3bD3D84C7225db","0x230d5C6CC6C949da5cC9019D8D9DB89B01c45537","0x232EE3d94be2274123CaE983f8Cc3E552ae0b559","0x2397A31BcA067489C6615f9cf0540fB64Ef7F3b2","0x23E9C5DD51335f0C58FdEC05F2D771ED1E391b9F","0x243FE9cde4F7840029dc954e62714D19279C6303","0x2445Ffa390419E1B265C9208023c0A30f0Fb74ab","0x24757d9AeA2086258583561141e4eC036BC28A20","0x24b30C9bf56a1E296394561345624D78e2fF3C9B","0x267767353013901a3B1999C6C84015B6e47f6DF3","0x26B79cd72D6569325c2a2789e106903a80F4e9F9","0x26d78D0dB14d2C8fa9611d826b4F72Ba4CE9eEaA","0x2759390ae89bb0Fb93eb5FD022452d928ce1168F","0x278148b6C755F8bA540c18EcE54002721bCc2B84","0x27854e62AC83E5beaFaC3727e2438CA577725D8B","0x27919F2B15FDA8dc91b7D663F570495c390e0247","0x27a48F9A9673773253E5a7636B47B27289C52eFd","0x2816B2ea90f80212dE0CEa60fEA000346f3614B8",
"0x286E14AC4cDD4a78fA80780468455E3Be6BF5E14","0x2953D07a05c71C5C4A9DB463e26Fb80749199A61","0x2A4B5Eb94Eec572C3E72f27087948ab05E2FA449","0x2B6FAbD4E7e73Bb430dAFc4d854b4d8198F03410","0x2b8485C094f73478aEf0510fAD71e7b36595F502","0x2c3f3E3f4435834556bA50581450b5F3A267fce5","0x2cCC5e98E7Ce96321752beB10eB3f8b8af5EFcf7","0x2d46EB597f8C397Bf7bcF356c677b6684B87e030","0x2De9481BAE36573Ea2A7b949260470C6C044867c","0x2e97778b97DB81b62eb64103813E019F353537cD","0x2E9Bf2a146A03d1D6ddbd1340E529FD1D08d748D","0x2Eb642535d1090Cd12dC0cC206C641076A2bDC65","0x2eCC650E73D984DB98c2d239108D2931BdAB7028","0x2EEf40759463Bb1c380915DEcc6580fB63dA9550","0x2F6546D9E18af5fa6614877f37558dF4027B27A8","0x2fEDB7ed7F4746fE281344109ec97d53f5fbdA61","0x2Ff10208250ef70d599f372A8b0986cb179e0D7f","0x30f44b4CA330e989e2Ec82529c6f8Efe5ed3113b","0x318E4BA3FB1ca449868e48c060B0Fc11Da173B8b","0x329b6FF4405B96900Faa9D792b3248fa8d04A96a","0x32E2a213D7C5407411a081FB14E31edb754cfE2f","0x332C1583A19c07591aD4EbF918E25f0E4B6B2759","0x337165ace8Bf3f685CC0A62106C118447F921E9a",
"0x338Dd3A4407Cf0eFad55e2292BBb129fffea5571","0x33B507FbB0Fb83D20759b8a32DbAaf3Db4BC5a50","0x34A92d6E5c381Be48A00DC1bd3C89f8eD20d9f94","0x34CfF560BE96097b9C2af775233cb3dDeb09a862","0x34f79702bdE52042a9b70D4cE1022BA695AD1899","0x372823Ac51420A50aEba5C4fDCDe204A6cB599b8","0x3754469Fb055400C816e4F8Ec0223912cD9FBC7B","0x375cC254D3629A277bBb55eD4598E77FAfc4F346","0x375d48cD18D06C4B580741FcBA729129425Ba8ee","0x379dBE8e796964f0DCF005bbC7B7E15e6D654d2E","0x381001af6A5B62Bf97CCf037B3442FCC0ef6455B","0x3839db47A90b81641cBd2924e959C3430f126666","0x38BA5FaF6c700660d8A61d4d1B5Ba615cb643d43","0x38C5103ABe73A79b5C02743112f1fdDa8f5295e2","0x3985527116EE6f7F2489572ada2EA1d4f4110F88","0x3a17b1497a584cF0170Fe0d9fa0979a6E0991646","0x3b261Eb849DBfceC9bA4717634953982C8e3F18A","0x3b639b923703cafb6bD7E42c6804C249d9e2C1a1","0x3bF7cFED5a692CD9945dEcaA7770a8857b0f8A0C","0x3c03f4ca78c7ccc5622a07ed7a56f5d44a3c4e6a","0x3c52B4fA783C9670DCd52D34A2B5f216d30A3b4e","0x3c58d9B53EA00dB51F31A70f103F6F4f59ACf3b9","0x3c7c4E57b883137c740D05b202166b4A11006F0C",
"0x3D72B838eF583CF6B29A58C67008f19d251Ed85D","0x3dbe3925C2a386ABbd84d22cc72A7Df56fcbbc93","0x3E4E3B5Fb2B49C21FB243a756dd480423d10a13f","0x3e76a43C658F34FE5EfC665D7546845e15388A80","0x3EAD96cD0702c6119393452c20579C3a75aB4399","0x3Ec7317E0bC2044C2Bb3419748526D68419cf20c","0x3edc863789a36f508340ea3f2Aa40674139cF5B6","0x4003b190f948ebB886C7672E7C87d3887004b557","0x401aa8968004AEAb2274B0Ab1A1Ea7BbEe1aA638","0x408ac18421b0cc06eDE75A27A68F039fd0ac2997","0x41338D84A3e14d506499aBEb455d749339E3FF5c","0x414CEb1dc2b91A1B03D35821eaf48A534A0160a6","0x4233C93649444871FdB2a5bB63ab548F41E9a71f","0x42714e3388d49e1f46874124aF451a718c67a09A","0x428e209dA85f879168fd8e91e6eBFdb809c7EA46","0x43417f81628264aDD03344fc8F951a0477309A02","0x436667b3F2715938791a3A1f1c040D274eEe2141","0x43702dbd0569b4FcaBCE7DBc53a72238ce49F693","0x439016804a0F0A9B5cBaf82461573Ca0A5e38e88","0x43c845C2ef3CdAeF5E0bA40cAc7437384bcE4A3D","0x4511Bb53674418Ba17706fbD3C3fc5ff0B41d994","0x4554c4E5A971A25aF0C29a162761D2a0CB855833","0x460af92D5E48e72847362fd8c1726b470f753027",
"0x4643AB143AC564Eb63DC36A98EAf73b2d66c2CC5","0x46718d51FeF590357e301d3Fb2f5AD8763EB3215","0x46eA085f461bfdf3b5910771221a86D413E2414f","0x482b4a4b4eE32c37E898cA8406cc955849526434","0x487FcF3eCe090719935a873b9276EfF3a4226754","0x48888147B340DfF37c5E5229C7545455f9Bf0290","0x49b4b3E8993933E3FCF376a33e5b1cc5B91aFA60","0x49fF8C1BC3549c57fe2A300F295fAe60271317C0","0x4A27E81298f1A6A8C2473A7987e59B5bC1d75eFB","0x4a36246660620b03A933BBEd0E87c469eDa61A74","0x4a95d13f06B0c80B69160a56da31dbf217abbfb3","0x4B3F2AfE70D2b75EADbe38262ed116E930B7EE62","0x4C49fC4A18A011c1582b5A1D40cf6b62Aef10F6C","0x4c77Eec016C80bc6885FC9734d010c2442aa6892","0x4C994bB3769BC98FEe5A859c5e1Ddc4D273B4814","0x4cec1074e2A72E6943a13CE16dA7589388bf94C7","0x4cF03356734f2225ba8475cbE04530E8223E5E8A","0x4D1480d245FCEa63C86bEe65b4D282f93eFd8354","0x4d795Ae16154aE957a54E2BC41ECfc0b23E8bb54","0x4De76a2D2A4deCFd68566889E63D571173F930e4","0x4e5e83891b8a88C21e29e30013F4bf4d5f85F04E","0x4E6e49EcdE2aB9EF4E6060cb046eA144997761Ba","0x4F36B8c3A98b6d45b0BFDcccd6A52e00F3045120","0x5024b970B3108a1C6E82bd0dE57D4c1DEE60C144","0x50cE34fCC20991b50b93BAC98dBb41f9902E875C","0x50d0101f6Ab28c39Ec7A4Df15AE852Ad18137036","0x51b0CdECD5773694f82b71199A80534dAc11BEA6","0x51b58094fCCeb49174a4F7d5EEfb012ba6461c51","0x51cd587FFEFa6484Caf9fe647409Ac50209735A5","0x523dA6F8221e1153aD92e3258538Bae0Be6B5729","0x525b59Ab56440F8096D04318C52CF31255ca8bE1","0x53642327262B633109588709f85d8180c001B05e","0x5378af79e6c4CeeC349361613ab1ccc03Ce79366","0x53c06428d95cbe921A1557524c4A3Bf874F37bCC","0x53dD50Fb848609e9657640da0ED0188ED7E347d5","0x541078774e1394dDD85AC81ACfF698346a8C1671","0x54A0Dd33C5a5e850910b566c7a54e9f900d186Df",
"0x54cAaC16F43CC3dd72A05D72201203DD224306A2","0x54f8B1d0096595cfCCF21c8d4263b283A630Cad1","0x551b2828465F23191b6A3A0a4695fD43485A66dd","0x559593c98BE5D03836B79B17caDcada19ae9d467","0x565B3bB666772a8ccB0285652e93d6C79597620e","0x56C03f4e9Eb2B5764908fB2C42c90783E670Af3C","0x56c22CFB1a17f26c8a7C67771745E571DF670A0C","0x5711Ffa640821DF1b70d1dCf644C8B4AE64A5c5d","0x574181330a69A4205819bD6508220aBb6Ef79B06","0x580fFb0D49fbF9B7D9c5b8e9B982899D0268457E","0x581b3d2CdCd3911d9Bbf503550C3f6C1f3c997b1","0x584589c0c16C5036AF69d12983377946Aead577E","0x58521b9dd22f8383f0ed6FE944e74316bD385abE","0x5886977245d8831eEF08DeA9e76f55fFFFaf2af8","0x58d7ec977D35E03E69DA39D4A6DcbC9f09bdbE6A","0x58f1bf336Ade2935F73E25A97e374190821722dd","0x59724469A5e6E9e644f8CF9DeA6C734105c0848F","0x5984bb82F11171cb1DC2287E2A6935c44D491538","0x5a6cc3595a4286a751704D9DCc66439b808a5B94","0x5a937A15CE7bfeB00699b2cc5aD7A07A11e15Fb6","0x5B9D3AD745b696556506283D5a0A3B7f6D85C68B","0x5C395786Afdef7a486358fdE219E6B20c68F3280","0x5c54151916d6270cD8159F4731b3170C4580f517",
"0x5C6f518E2302414E4ECE35927504c5Cf58179869","0x5C939391eAb27e2de272780AF03440d00a577dA2","0x5D107E68CdFAD584c5E8B294D7978527799bdC2f","0x5D6c52ee56C61a14F048826Dc2478deD60bb3A19","0x5d728011FBEaC3916222C102f30e4E7992b97fca","0x5D8D277Eb3D552edc661E5a8073E40eb128454fB","0x5e8943B774f81c485B388BE42b9b424460Ba0Bb7","0x5F43c162a239065EB992ED6dB4c242d01B0D217b","0x5F8711AbB4AdA83f77925C77Dcec3016855c110b","0x5fA60264f86003024943acec0d59C9cBaEfCf91d","0x6022535728AEE06C234903c41eefa731aaf77C46","0x604cb8e9907092b70B21B610dE1628FbB4186978","0x60733d5e8dCC5D381067C60e38A37458D0fcA34f","0x6159d49A01929bc6c48Bd4465AEA1F36c20A6364","0x61A19847494c517f47eB102cA664EE03605668ba","0x61D0Ea212b35721e021F56094603165A92410c19","0x61E1f1a02991EC132744B362D86181DA1839bF6C","0x62098FC80D74e078221aC170A269F708a82d5682","0x620F28e81cCD57A4Cb71502bc9f04Afb00bd8c0d","0x6246d040381c83b6Ca105050B860c3f727d0D817","0x62A7951049556437356dBb2EAd1f05927017F97e","0x639c0a8DF54E3402607Cb4df7a00D4C0b2457476","0x64f2853e3Bfcd82cdDad3CD91D47c2e4fB045a9e","0x6753C36495f5b881Ca106F398A65c00D954fb0DA","0x698Fa8dFa821489CF4B69225347F28A56E3c3129","0x6a68236A9D4B3a2216845b940Be0D50f4358Ee2c","0x6bDbBEB51367307d2DfB815eB22F91Ea032F1a78","0x6cb2aA53FC0AD8C934d24D5a93b06Da44a7ab5C7","0x6d3c3CAaBbdd645FD071e3B7b085666264CBfC99","0x6d8610a39D293E9397103f95a3E7562b8d1BE186","0x6dF71f173B77eA3903b4129e2b2BC6a72f70Dd51","0x6E9cbD42688832157A9fA3Afa013e034fA7a8EAf","0x6Ef87C487723103Cbf5412cDD491F25732f30B3e","0x6F088129C397B41A5f7DD5a3e8845E9C0a57635F","0x6f2Fd5bE14c3F26b42F5891Bf396b95BD053601A","0x6F69F79cEA418024b9E0acfD18bD8DE26f9BBE39","0x6f85A819e5a739105f652ee025d0910803cfA744",
"0x6f9f0DD29A45Bf66354b22287d0D4BAA42Da3e8f","0x6fefF91951bB5D3438c37f0Ad6f9cBb3900808Ff","0x6ff412f54e10588a2cf0442ccfb228f866ff1684","0x6Fff1Ff9aCDbb0033e638bC33C6cc6e620c2bAFb","0x702FEFD3731A908F07107F670B9980A6a35a56Cf","0x70C3d098Fe1D6d2ED401B05B3105700E9d48Bf93","0x7109A2AcfCb3524196f0d8a415f5908Ff254a5B7","0x7179CF661c2bc317ff07e11f460f74e9Bf752bc5","0x71dbcd7FFfb380387bCdd7F334176fF605Ee4fA2","0x71F356F564E12F784047F7833B25A1C713BAA6A8","0x722aE9e21C9800B8e1A9069fe1A45EB763De9898","0x7255FE6f25ecaED72E85338c131D0daA60724Ecc","0x72819EDe9E67961cf166e3F3c4A49CAF35f4e3Fd","0x728E2089F692E86CA1C18878073A1904972A855d","0x72E8CA4a28C92Fd33676f2d1333c668D04eAAB75","0x73a7CE7E5438A378A7218A326Cf54bceBF4F52Ee","0x73b3299B127f09854581ef28e743245F248BAc04","0x74B453AAa3CAc2b830c2b37386bcFeC985d79DC8","0x74df8E0dbbF3697009cDDe1d349d1Bcbf4592873","0x75604Eb2DaeBFCF9bB5f521dFBe6238fbE6660d0","0x75daf11ADeb54B89d9A15EcC58f018f2C46ea332","0x761F237533E71d3A8F299f7C32C620323a6B1c7a","0x7636Dd3007014443D4b81C7ca9a302Ad14D39A93","0x76B56bEC13cf020264Eea59A5d50E4871aE082C6","0x76dABB965845A1bd97D8F67E0428C027251Ae47C","0x77423e36686420cFACe92D57e488E954C65bcb16","0x77703e4a75caE77ab54C4C4079801e6eBE275495","0x78070B74F0c05b2bfEAd4c16565C7AA08EF26868","0x783A3C900B6316E374eC57f77138102228EC1E05","0x78b8e237da3e45567238E8531caEf990ff213F31","0x79bc472755777eb40A6675E8ccA2d5B11dD8Ad2a","0x7a251eB9930fBC79a7C49532e41E3E22ff1FDcA3","0x7a42B69E69DA1f03B4C41E93B885BCEF4a152f5a","0x7AB21AFdAD9B9233E5d53efEC0AA477A7Ad89927","0x7B5c5757c859703732FD8a8057a35e731ab55E8C","0x7ce246144bCC7B01c78143b16e6D86a45ca1637E","0x7d8e734c0121f74Cc9c719fb610ca3C808d3Ba41","0x7E4a82326dCb5f40851Dcf67b145a3ee68Fb1d19","0x7e518F35905452555FbF194829763c3099fB5baE","0x7F4f8aC04E3E274D8f0501E7B8CF2093e9d0Ed4b","0x7f8170d23f9e6e7f5C1113304f98B1c20a2bD715","0x7F8CFA0CB32aFef06D858500493C5861c8bE009C","0x80d73a8008A49Fb2fE44a2edC6121258964aa3F8","0x81159e1493d4A12b0046112F7e3421ED07f972D5","0x8131570587aAb65AD37Abee565610d5dEAb6c9fd","0x8237EbA6eA619Fc990fadDb41Fa90ACD14289Eb8","0x82b5D5366eDd9EdD67043C3F3De9B77DE76521E3","0x83443bc737af694cd26fd961bc13d5982292edac","0x83656f67BeEa8F4Df00a5089Aa82b41Bc11cdCE9","0x8376A63CAAcCC813c0b568D12F1923bAF1bC7538","0x83C6897847F461642f6D8Cf45008ce3494379193","0x83DD3e563eb987B565188305bae588D74606d124","0x8489d70AFE7B99b48dE58613B7f2A40dA526Ab99","0x84BE823A8cf733f44EC857AD7Ed36C1538FbB90D","0x850352b0C61aac1EFDe8c8a4d6C5a17f49e266f6","0x8589ff3D2Bd2a6D9516838447014cE624337D10D","0x86156e7C3E6D1Bd43c4339873C08faB0e622B0D1","0x870B901DE303326e34214B54FF0aA5564B912739","0x8770fE5c7d7789E9F24F0fd7135724AE01C4B284","0x8796F4771aDd7FA57a741A08A3bA361BeeEF5109","0x880833eBbCdC2628b7878969430a49C2Cb7F0b4e","0x891E7C767679d8b15298b267Dd4d0AD9Af1f4Efe","0x8951A87Adf50b555034B47D103875A1613B003B6","0x8968F69327DeD6f0B6D8a883678ce0cB0F0d6cf9","0x897a6D1A4e30470D9ACd5eCBb1F979cDB0F8Cdab","0x8A3D53128bF107eBB94aeBb2577FEF0c74F8B1E6","0x8a94cC6Cf58d6318Cc7834a1195C85c013C08DB9","0x8Ac0012A3A3F02b5c89e8bf4a9b7cEBca0732D02","0x8B3f14F0582FbF275BE87d265C931B4dfD5F13B7","0x8B7Ae9Db845ff3EAe47fE1070224f62E12B2aea9","0x8B7D10735B579611f357d1975a69BE60470f4dA4","0x8C8ea77E3C01f3361bB66574cF6d2883C1112b6B","0x8d3bD8c1FefDd108b59a725a3A16276E43ceE6bb","0x8E2AF953De826e92E4bB253906D216a6d82BF4D0","0x8E9Db3D3A42303a6edd2029fe1F0cA803a4f7bef","0x8F4171a5d9540EeBe4bA9D021a6364d744514865","0x901c812Ba9C4De51e6CF968ea8c74923c842b271","0x9033eFc0672fcDD0228c00b1567dF04AEC4722B6","0x90348D1FDb9b009f513c28bc1ca9547227dB5781","0x90a1AC797c65259B9Bb07afCe4c70b2522eb4014","0x90d24be3AD71D7ee82f838543Db359415EAD837e","0x90D85d48F19F26c164f23e5BaEf92D5aCD8b666d","0x917aa99A57dc6BFcB27dFEfE983A7944A2b841AE","0x92FE9bd48926594CeC6879C2777b0dC23CBEC3D6","0x933E23b955d24E28128e321e9Eb68809eBb0c87e","0x93ce07B19ca3F6B037fce437eD6b2Ef38232f062","0x93f7c76C7a4aA5A37998015F3a3A4E781F057bf6","0x93fF32014c40753A4f5590d9D320a1d7adE4F9b6","0x94A6CFb7E9206e75C4De90A4972f7CD3975B9A75","0x94BddE11f5120059eB7F1FD18dA750254716334D","0x94bf2eca7F8D4Bd7c85d5096Fb83C72CE6D3C08e","0x94E04C0a27e18f7FdCA15a541f73dd796CEA674D","0x9639D92432C57bb8f8C9D7CBdEccA9d94E91e032","0x97a0d0c33cadced64AD5A1ED8b6c809a01c1f5f4","0x98131c2ebc8B79973791e62559646CF334C4B4b7","0x9815173909f740281169b6852Fdb0CfE5f983eeD","0x98389c9e1d24686d3A0b357D2c184a3Ab09a5244","0x99547C98560C17e7d66e50B33666a221422a2F54","0x99a0857A3539b377bC54361717d29205Ae83c1de","0x9A615eE6d237fc3a9dEC97EC3998ffd5764D44AA","0x9b0726e95e72eB6f305b472828b88D2d2bDD41C7","0x9B578c1696b30b85e36f36F679242D25283910E4","0x9B8b24e3D406627984eB3782f358Ac00431Bd93a","0x9Bc27a47B4413c51f884AE4e4b9170F3A0D7f742","0x9BDEd86154dA7255e3bE244A842FAd6aee0EeDb0","0x9C3C5FEF17C6A6741185F7bD020F986c249F7628","0x9C871e25b88d94BFE97b22223e7aF01f4a85c15e","0x9d1C893f65c3F6FA85B15f2474854A252f7253C0","0x9d265dbF059bFd8156D769F2dF1d073680F6a21e","0x9D546E20CD75b62276787a1E4db2b9393633E2d6","0x9D7Ca0e378d93A1f31D073f83039d5827A0fD5bF","0x9dB96aD130Ed5A2e05BC9De773c38E1ddEddacF9","0x9E506C2867030f550BbAc30820f5ec1c755cE5eE","0x9E9b2b95C7322F1C799abAa85CC6A9244297c9bC","0x9Eb48055D03650DCc14378A96cB36244B6bCb9C3","0x9F4d3d5d136613831960788238248E63F11ff915","0x9F5EDf06515928fE3615C05cC608C168Fc4CC442","0x9f84b7003D8f4BeA56d006e6C7F7dBbC4C56e109","0x9FFb7e2313d270aD3595672c5EDB2680a390aF6D","0xa033F26964CB8b79060fc40d9287622Ea26b6F32","0xA0b29a8c89FE79d4f76cb49dEF248626455fd681","0xA0b6971Ed4F62bCb5fab2F45739F0F188b7F3529","0xa128539Ad7DE7BAcBDD368B63E7a6aF4D2D414d9","0xA1F6E60B2C65A660580671764933247562c901A4","0xA31e2EF592968606Fa82bfb918dC56E261a6c809","0xA350E05500C9a36a6f026BD84362DC2bCEa56a24","0xa369808eF2c2ad96Ff76BcaBC56CA44DB6e94998","0xA3f6232559f2b7Ae5589061001317145D57B602b","0xA43b93050c03cEC0c9E6C67ec0967d95AEac839d","0xA450fBF84a27CB42ce08D927cf050373524Fa172","0xA493a096501cf472b8826c5dc5bdB52D502728ca","0xa4F417029a414a8915Fb61C0559DFD4fa2707668","0xA566d6F2D0973cFc4981fE5F355742fA2D8A2213","0xa57255C02d1171E960aA4F5a99184e5982f33077","0xA584bEC56c09f7c1E94C7b6066142e7d9DD446Cb","0xA5F6d896E8b4d29Ac6e5D8c4B26f8d2073Ac90aE","0xA63C873239011809a175E77FdE742BBD6baBB8A0","0xa7701E136c14ddeeC170ec9737872B2886571D49","0xa77B0908F82c819946517339cC7169835d483985",
"0xa7bf9bA0054f1876a0c0845caDC1C77D0e4Dddd3","0xA7ee3c138C0493D6F29f0D8DF2247eab0E13F610","0xa8e12CA32A3d49c14918145E5E6e8c641762B220","0xA9bd6d7B7d965d761b891A6a67A068171f56e4Ba","0xAA96DAFEd5409bE6E8863d7d46813A89F0C87184","0xAA9bA40De53341100fC410c7c677BEd956b274Ac","0xaAA3159B5Bf10AC0F76da2763B09e17B77247c6c","0xAaE665095ebF1b7b64DE7E997A59B1B1DC078E04","0xAB19BC45Cc441FD87093dBDF8FB24A74AFDB73d4","0xAbB7813a2e8079ef15Fb76Ab79B929707a173771","0xabbAe6a047dC9C7D2D26A8Bc5DD4d67516c84cFd","0xAc0225253EBD8ED87c00816b444f45dB594735Ac","0xaD7772eb49a6aC61756dC9333BFDca6C081c9A08","0xaDd3bc5E867A3B5E0470640718FEB63CD684ABbC","0xaDe81aEcae5f86cBd0b27499Fc812291ff834317","0xAE29BEF6Fb6B2974ce79C9914889dB65E67B7aFF","0xae5e9a6E8DdBAeF0605523f827A6E022102C8a1F","0xaEdDcFa7368d9106170f5eE8Cc71618A50AE480C","0xaF4A5dabb5d922B4CDAA5fDf2EdDABade6895f85","0xafcbc05B070fc9408842828Da1024211e445d523","0xb03BE385F4dA2B881F0215dC780b26a6E65Fc0bD","0xb04a68660362b3C10A6745B14d383A27503C3d50","0xb1527139e8033C914be5D6B101753933C178a3C4",
"0xB1843101808F703a2BF7a17D22bE2F81B9C6198C","0xB2067ABf5F1eb2E748ccBaC4127b70C2ef90f202","0xB217967c62e1D5D7CcC080Db90B78378a1081389","0xb286c86125a0E9220454b349E530DcCa9257CeA9","0xb2cd9728B3cb57B55F9ca07B914F2342807C7bC8","0xb366e2348cA1E6D46d9124E719BE8a7cF4b1dc86","0xB37d2296F245B29Bf9586c61a24d6d8Ff6F8fC17","0xb3DC6Ff7C5BB3f1Fe7b79DEF802048EaD10F8690","0xb44fE17c28B19F13342Cf69c5B1606641D04D1F6","0xb4655f40752eBA9Aa5466caE0f5E9a0ea9241c1A","0xb4ba2Ca68DaDFB70c6cF99b166A427c3d0047A75","0xB4D03dA57197eD497Bf8Ca6592A2b51461d7514e","0xb4E8BBACDD21f41112e14ff9B7684d15bCD536Ba","0xb53467e86A7AC44ED8623f01A3772F573d2A1f1d","0xb5c6763D4E737d403897B85cB87d4C077411EB16","0xb5d28dCF2cD9E71b755E08a5eFf2e1D56a0341b0","0xb5d68f683EE58aC8299ce546d7fFC6E7511964B8","0xB611e54C933f1e20a0a3bEc952236Fc73B524B55","0xb6A77A657e340B4F22066284473BD484eB858E7D","0xB71c8a01d16483a471B883942f8B6ca99784e5a6","0xb88234C82894C95aaDE6725B4B1F02189d7D712A","0xB8E75Ec8021759919819240d62ed89028f3e4B9D","0xB8f0dD6345a7494237C0960d545B8604971BAA0A","0xB92504472fF13cf7bDfafD26A9dF38E460da0607","0xb9b2355417d03F3716b6427E6407864F0b634744","0xb9fcB903d7387acf8cFccf06d9468796501ef36d","0xBA0f56e27e753F39b2BaF43B1b2aB27134b736C6","0xba356Ff11A5A4111a6D4D0638F3c3845D0be2449","0xBA64444d6d16D3661644464140d2dEC3708Ad332","0xba779536c4AdAbC750F66053477C6BD63B5a814b","0xbA7799E08A9714b50add01942C0247090B03B6Bc","0xbBa1D8028cC2a942ea678e6fCBc17946784b1030","0xBBc143d9Dbb8FF0C21BaF6b4EBA54848C14a86C0","0xbbeF5C90c95C885f43403a2729718E53B1Ef7bd8","0xBBeFcB62D94C453cE7015E08C63Bb392f016Bb4A","0xbbF8c66D737DFCeeeeDfE9d42740B511E5f765d1","0xbD04F233877CD97b809B94870DEEfC93086Db747",
"0xBD11d88EcE929BC2006A1343Be9E74B5f5EdfB66","0xbe017be2D41f3965Aab034d71316F7662F50E9fB","0xbe1E110f4A2fD54622CD516e86b29f619ad994bF","0xBe2603A8b623F051F0C53fF2aaB2237fc81B6aEF","0xBe9bA85DBB9d2bCCbE09cd0309817a76358c2f97","0xBFbE1e648E73CC6eBa94700e1F3b8E695293D491","0xBfC816A5C69E1e3ACF391935aB010B1353cE99A5","0xc0254b8158CFCaBc6D2FDbDf7b9665999F6A1F42","0xc29d7FE198328A424B2113c91bcAA843D10e2c3c","0xC2cbf4C8B1CCB2626fF57814B7D40C9eFA46a1f4","0xc32A0F03E5dCe30Ce058f45CE34125Fe35a75f4E","0xc33C12E94E8c8463365B413a60324fe9090c520D","0xc34d9e76bA42faD271E7801b96867dB0Bc4eA957","0xc3dA39F68F3368a4dd2D933E224b4380b244F275","0xC470945C0EBb3f27E6e25226C9b60d46bca5f5A5","0xc5F796241ea6da3A15B8d3ee8ee332318B62d43b","0xc68E624a02d76FEa3bC3Ca3D8434167ee943D403","0xc6A9b7b05f9dA87bfFb345094b238Db6B18b9143","0xC89D096D9652899B3BB0151dcFc6aeC14824FC76","0xc955Ce75796eF64eB1F09e9eff4481c8968C9346","0xc9D7c5A060faADdaB852BfD81407A2fC3bAFE4e2","0xcA1bc45148F77a9ac8F0e215543Dc9DbA83E6BFB","0xca2133BC59F1cD923E4840564a7f19046530f15b","0xcb3c44718789f3eA8E3E8195dBd0a8e88Dd53469","0xCB4C8D179181Dae1Ac84E4F6FC4338a43E001172","0xCB674d66D91242a56e0CDEDCBDfCbe725C8966dB","0xCbA7dd4E7749f02c6743D7BCb27a69a721E7e2C7","0xCbC4aEE4Df008161Fff871Fd02c23780bC0baA8c","0xCBFB6feA683ceAA476B671996D83bA99e7580087","0xcc912df6dba38419bf99cfee4fb58e859b7e40ff","0xcD134fadAA176aCE4B60A74044507d88e39507Ad","0xCD278BF865F0eb81aCA047b7243ef4E98C7eEfd7","0xcD2F7ee02d898071b14037e0124Fff333aeF7166","0xcd64F879030a7a4FE081609E1A9b626BB45b09b3","0xcD7E698132a12a495CAD5a83b38FF178cA2f9AB2","0xcd890B2cc395B4C46822f1078aa7E75F75eD8A08","0xCE7171253596701d03Fc24822D1eBd843e323227","0xcf6E2ab13a419A9244435AA528c9a23dF850274B","0xcfc83e544451425f4ee8f0567dba1cc0434178e1","0xCfd0Fb3D49096B1955da12f8768121D32DAFd418","0xd03cEc7ab874FA603023C7A9FDa923Bd40464fF1","0xd1116ba9e47787F6315c59Cc10Cf2F0C20E77703","0xd1901d6caeF3F656c3b4D1C121960D742A0E2828","0xD2B066d4c2972f54C422Ec8F0E34513F75917213","0xd3022599033430bF3fDFb6D9CE41D3CdA7E20245","0xD3Bc6147De7747119743a71514aBa18E443DD37E","0xD44C79d85729acf4606a72DCBA9BB51E37ae3e0a","0xd469F7e53589Db2A9fF1Cc53b6ADD6eB4c49D1C2","0xD48d64856F08E49bf187f6aF072CAa8F5B216c38","0xd4a59AF4Dd01Aa453a7254639810E4926bEBb075","0xd4aa18a5E9C1bdEcb4F97cf31928De7936b1654C","0xd50AE9264a6c84Af066d7Fb348fcF5C2A7fAEC33","0xd57Cd5b3E876581191a9ABBD05947F0e7ab23fEf","0xD59F530a4C970982097Cf2CDf99e94BfD68CCA12","0xd638a023a43Bb04304d498E0d061dEF2837b735d","0xd67F5101ebF38ec4990b1280e21589B04299eeAc","0xD692143e4bFF0a9F1b821e0580E52a233a792490","0xD6a572E411e8e56a00C7534E8b72A4a801DbF3FB","0xD78408005339e987743e7076320b384f560aE5A3","0xD78408005339e987743e7076320b384f560aE5A3 ","0xd79a9865F5866760B77D7f82e35316662dEC6793","0xd7A481069fe91E8b8C2A44e62e128f4edB32681E","0xD7De075A083Da614cac1aA86679beBF4eb674343","0xd86DA8769BcEC982136f87c40c6194D5d7Bdf6A9","0xd8b19752290160b375c733F0C300f60D67e7f42f","0xD9c07f4Bf6d13ea68b99a19CAe1756Fa446ffdD6","0xD9E986Bd44512CD2c0De4844ef902769e2647F4a","0xDA3dCAf7E16841328Cb197d66FbccDFc00b53F0F","0xDaB92Ed473E3ac7bbc6F05cD27277d595833eC78","0xDaC1D44E544124A45DE30ac6B739945571843608","0xdAc5748E20c5d9D5E88f92B71072223d2fC6841d","0xDb11B192249b414Aa6cc1e7F1d7414eCF59C36aF","0xdb68A37014FaeaAB36f3d244f9649A6877d3b045","0xDB70E5e73305D78c60fEDB48bC7b757d3bC9C305","0xdB885e439cDE1c3639fA881E9118dF23c14DC861","0xDBb643740Ce08Ad124Dd5ca747845FE798f12624","0xdBDfEb452499797779f52CAC74829F79685b6e50","0xdBec1810335858d57a34Fee558A4dB9aA5aE881d","0xDC0040f4b2445269681dBE0195309225B061f05F","0xdc1036CB9B138A0206aa567BDE08D50b81Ee4091","0xDC9170FadBA6bd305e8e1f5bA3c26458e434c4e5","0xDD13e70E24C412Cb7B614bF90B9BB73cF187a256","0xdE17846Aaffe9e022bd0b32bA448A1F4961b0dD8","0xdfA36D75bC7dA60207ea44513C4C62E403b08f49","0xE08CE686CdE6C93e50c14508B8A0694e1a5fBb2a","0xe0F966fC88fe9E6C0fACC485d7E734c95Cbc7111","0xe14d8853cC2095F26CF0b517FBE7160B301d0dfA","0xE17011622e4A701a008ebB8E61A322051062d879","0xE1a9c45cFe28Ac8eE6EBF9fbFD84468717053f9c","0xe1D24a1e1142C287A1A4b9b6a4e6dcd292185aaB","0xe2B6488a6E8AcB789F7D997b0aCb577c06e7D2fC","0xe2eCdF7bbf1f2e19389C75E38A708872D3790128","0xe31d707c06C9D51cd50F21D4632bf0edA649732f","0xe34120df06aab11D8bD4597E39b5475A2737E2bD","0xE34B73665a0cf08117F073EaC282D044267e842E","0xE3aAB045359FaDeBdE360e2F818cFA14230fD22c","0xE3D9559f230d46d27844A71B367231b77511BdC4","0xe3D9CBca49990E66b71aECFb948e266A5792e107","0xe41266E1066295c7CDA9089d810e7BaC17D6d89E","0xe441865BF2dBDCE204ea3408E30140B09C77F4DD","0xe451C6da302847eE4c29A3940b7FD6bfA808b2F7","0xe51ff9eF0cB02a8715729dE3da80E0f438033b14","0xE52dA1186b764FdEFA2Ed05DD567bfCBa7DfD3c6","0xe54a5B116983d9B18561c5A86700Cb116Ee85f26","0xe56085F2d5a7FB4FE0A9e86E139671F8df5b91e5","0xe5919152A8880Ba3F39A1b8787B82261bBde4471","0xe5d183beB69120B978D074E8A658FDffc2B8046f","0xe5F26Ac11A92543D8E5d6f771D0B363cea6832D1","0xE6086edc254335C00FC9129ED704EF936eB2D2B9","0xE85DBB09A699c0543C363c3f6E51ef0049e3edC5","0xe8dbB00B69D67E599B60A205FFa40A4F154f5f4b","0xe90d746449bfFacCb9E1cac42BCd5B5021b78e47","0xe9159fA01a8D096baDaF537A530A51822824e76a","0xe95128d18eD6aA22263022f425B2709BceF7A980","0xE953863a6f5317b8D226AB07cbAE97f6B63a0373","0xe97e42295ce5bc50Dc8D8522c56Ba31339FC24A1","0xe990c6aFa2BB4B7DAFAca3AEa8EDDC7201624041","0xE9aB73648422dAD96FeAEa1321618456311B3648","0xe9BfD280b873FC8c9551B8315aBe61134c891f39","0xeaaEaC965449d2426F6F793770b4f3560eeB7c0F","0xEB5d7b7CD71F27b16d9DFBd4Fe16C59E3E670743","0xeBc453E098EA5Ca81E216441891c84BC4fB6e8E6","0xec1729CF062C343751e7d1E07724E7ee31510C42","0xec27e34B4edFe4FC00f384ad8E59BE4251Af4B65","0xEC5DAf644790259C160e95fec7aa3835767CB742","0xeD35Cf6243a34FDA76766313ECE08BDb18F497A6","0xEd9D7bD7F166ED5C6aA26f3d86DBA5b5b52EB3B8","0xee15BF671DbC368ab331911dB49eB099760C8584","0xeF377Af6C38c99bA903d6642B4f8e62e6630d4dC","0xEffA38b7112CdDbb16440D8F57Baaa0d8dfE894C","0xf019bF9b286A0aFf9dC870Af2c7A4170ECe77093","0xF0F225E01cf084d3C246Ad595Ab60d0D4F5b4c78","0xF22B6a0EEA36A92c6782062cef32fd0DC3E1a0bb","0xF279e571E667465DBAc98B27069cD0e4994496eb","0xf2cf1ce0e48d0F4C063451c7532A0BcC03905269","0xf2FF0E3d2673F924e98d6598f4F1DbE914e7ceBa","0xf388c5BB2eC0301309E5F8ce0147C6144582bD9D","0xF38DF4E0C9029Abd0644B9F01C0A5797656D3e7e","0xf3a0C3c142bD01E6172e494CDc638BC942240828","0xF41831d7f791A3cbeB5e19827036602aF212A051","0xf44e8ff03F794774cD67c937feC72080B05d0aed","0xf460373d2795bD703822d69748e9edA4461B1BCc","0xf492B28cF8d43B42cA0bee2205F53bA1001c3237","0xF4D52C215e217f7ff6921895127141a5136e2691","0xf51040e6104A86ec66B0ece14E09De7d24a1eC2A","0xf55F8A71e42C7864160F29fE06C3eE236949f0c6","0xf5d839676F90053908f4b456801198401b026936","0xF642CC1Bc3eD656f056c29b4d28eE8256cB89713","0xf64705E5ED0245f409eE091Cb1bbf8F1a8dC29F3","0xF653cFa85EACd26ad8b9EcaBbfADEE52e8D9fa72","0xf6711fe5aE249B9CF37956a7A801885D171d3c93","0xf72ad145372C7d5738846Bb0b70f37f669eA1748","0xf8091A1A3055C9a8a7492E7Dcc31162D000747C7","0xf8366A2cA5B0d8aF448a32c4a842c553c70043E6","0xF993D5474Cd607e26B57E1dE1556bee36De2D0e9","0xf9C6a7128408421fb2D1E50868690e05Ac52415b","0xFaf2702F09c52998ea6cff070595c2Fa06419277","0xfB0B4F890df7344429622f2dC5293F3B5024AA29","0xFb47779fb0f59750fC714ba61a7859b059Bbd3e6","0xfb82F8C838Ba2de8C8FABE225485656afce1Ed94","0xFB8625CeA73cdd67b737b94b10CBe6554aF279d4","0xfBD6AA5500a3ccD2A8311C8F2B1827ed314481d7","0xfC4740a68e256856A07074640d9B161Cfdd2e3f3","0xFD0d084154fc62768276DAcEa92F9DDa24ba9E3a","0xFD2008483EdD8C33c23a8956649f0BbC5F3c596d","0xFDD6AF85172A18A02651e63929fF2f46E4714156","0xFe410c82a226fe37F34337C3AFFb9413D13BbDF5","0xFF0453974171b04875ac09aBE794928dB1229a2f","0xff22DF18F4881813d4A7CCE759B52A87Bfe2ccd3","0x51764790B30b49358a3b2e6f30Ad77484b885b90","0x78827e75Da8c80689FCD5af11D036Cd45E414072"]
const tier2 = ["0x05E1Df6888dbefA858A6bd3BbF0229F2ADAF8E32","0x09E67Ff60d15A6ee730F9aAC94C1139FcB954fb5","0x0adD04f59aaE3199D9128C0a8D4F9Bb8a9BEd38b","0x0b1f4AdebD6BFB232a6ddf3863fDf6906F63549E","0x0F11481A11bc143385a9eF5590E47ee78234E10b","0x1100B59500DCabF3E38299ab1ec01210F56e40c8","0x15f18F120245FEBC4B2aCaA2d22FbB2f6d49aB72","0x18Ae500f5Cb72c78445a549E11306B74B254A68f","0x18cf8fB20a251742c4d06DD877Aa2CB01475731e","0x1a33a862625e5d2ccefa21e8Ae91b9626863B2E1","0x1C5e6bD4E87075B753Bc82BD3C09c9C671Fa5b3b","0x1CccFDBaD92675f7212cb264e4FdCbd8699a81dE","0x20A05967F739eDdf43c4d030A4F95C7bf331229a","0x25171C9ad854F434330B2Ccca8a971aa847E5A2D","0x272499Ac2CD43f57D478dF1B039b44F0EC91f393","0x29e613A8456dfe9F90c1fbD982c95598016241C4","0x29ec02AD8642a29BB3Cf4427bfE63d43C5e3fFa8","0x2a881F5c9bf385621f1ba9E5A26EB767886E1705","0x2bc6cfA933E7eCA4fe6040a461A264D4C04abE45","0x2Be908F0C1B7dF4680D6C1Ba61329C792d162DA5","0x2D9c71EaD15EaAC00B5DbEAb8E83e97763177bC6","0x3095E2Ed49530c9c60C45bc74EEf2647bB7A4fa2","0x30d31d5226964C6C69d545d8194CfF5485F68b3F","0x330AA0a042347313B68Be4CB629323488CF19D20","0x33A0cD8bD02F60b7e8a66B3418E03f85C65Ce80A","0x35370f1D86ed74b7Fd5dd5fC6E6901BD43bbdb22","0x36b4257e66EC6a88188F77805c3437f5781Cc801","0x3Be86667E59F8685e553Be282B097f3518EF0AAF","0x3C04430b56d01E454908EAc3D189d9a7Fbdf31cD","0x3c5FAAf770511E403fD907E6d77Ac8F5bC699CBe","0x3Eb874DA4f4c09cde7C65EcB0f5F2D078bFc0A83","0x3EeFBedBfaF3cD9d4b226B547229126F700356F9","0x3f160838563E3ffdc70146C9f2d68dB66a09c493","0x3F6F9546bFD009E14D86E82Ee3c3a9f43a3BE727","0x455055310213C3b89Cd4862Cb60c54C721978B45","0x4584e7C3d3E0C1c9DCE3A6bb5Fd08fB63a152D29","0x467a7E8D4AE0D41e70877D4A0a7931d4B5136b51","0x4B8052d0eef390b80471a73f16D89eec10725a96","0x4f8d5AFf4174C57275a9BBb8758Df4370eEF2b15","0x53Ab75Fc3C4D51134ED01EA886b30df2dCf42Da7","0x548E98F205F6c256EE406C48B994A5Aae5e222d3","0x55386bfd3544523F6A9aD543DEA82Be327BE9b09","0x56D91425Ee736C903421Ad25F2177356b80DA1f4","0x5C3086CdEC08849CdC592Eb88F9b8d2F72E3e42f","0x5fB998B8024E38867558fD5E2b87B6D13Da730f8","0x60C97D59F86935b43616b7D8aF71912978C8D6D2","0x612952a8D811B3Cd5626eBc748d5eB835Fcf724B","0x643aDf09aAF0046262aD7C88e2Bfe33885a4320E","0x661d3005506AEA3DEf4422606b1A31be9cef1d80","0x66f024c0a38efcc8cD6b951E1e3354a385061057","0x6b0CF2AAb81Aacb62696c117188eAf38A1fe10E3","0x6BDC8B887a3F7Cf422568275179d807612f39B2d","0x714EB46f4A4b1875FC17940C8Ab3374B4a4cEAe0","0x735089809100D322E469ef0f8eacEf34Ee490e2D","0x73E778Df3BfA14EBF77dEabA490aFd18150cFb69","0x7733A8945AFD4Ac21262d60E23f8cAb30dbC20B4","0x79011Da8FBec0266A3ecE5170642c1738366d5b0","0x7B4C0A5d1C47F29adf4E147E7baE5589F81e2798","0x7f710b9558117F63F1812ed4672A31e623B46456","0x81c6EF1228e621990dE76CD00dB9478bDCe4065E","0x821f6561A8f294f956EeEa1ECec116ead2dad520","0x824fd9A6Cc0CAD4Ea0914c16540E645bc13E30D8","0x82610c6078087596979bEd4BAA7D0713247AcfC0","0x8556F14CFCcDBFB15C2Bca5290Edc05fF82C6d4C","0x861884543F47687d45D631a9DBAdFAbA2B5A1eB9","0x875C50541caAaff38c55c2Ad37a680Cb25B5bC8A","0x87B4a0a66E533c8dFcEF596b773ef86E7a45f03B","0x8bFEcd3D92Acf3e51dbFcCF5649D08893f6639C4","0x8c1d1dc7Ad85382A9aaF62a13B8C005c4feEc138","0x8CAEeeD631E2F82A28E2e4568495f23e03A6BAdF","0x8e5F49AF0cB9E93b30d3650D079Cd8288b1b35fB","0x9233f294383EcD7aA3223f553DCD70aC0C2A5b84","0x9631d3C5CCEB5c28679868EdC2AFD1C74CaD358A","0x96a603254e66AcffF3b641c461270e2b37DA67Ee","0x9B0371103c98D4c3cf014880a4d0823324CF348D","0x9bbe0d3B77c5f22a8b7007C13a5D572693A268e9","0x9Bd4b05B6F3cD3778012f72C16c42Fd0490CfB3e","0x9dbd80Da6d78981F88B1406a964048857252b41b","0x9eb5b3414B197F7ee1fA7C036931741f081897D4","0x9fc22B4DbA438Df7358aF748efaDA792e9d635a5","0x9FdfdD2Bca3c9F1a1aD4021eca7cE91e004b15f3","0xa0a7b66706b7f5c178AE49486a1C98B32670C038","0xa19D41e57868311E143244B1804E638379E3600c","0xa2Cd92d6F2d3B85C2Aaa2b81d36705CA0442C753","0xA2dFA829C31B74c9Cdb073E5095C932060382841","0xA4E12ce3955FC4289dec95c5E2a696ba24A845CF","0xa51d83ac64fCA3340bF70776275a55d938133cDa","0xA88d705fe0ABf917718663ea6C527ce5168Bf1F6","0xA94608e14Be8B54AE9c360CCbb4a1d780ad2B4DE","0xaB0A7597a83528B30D182718f63e3512eeA3a48b","0xadcbdccc14d0ecd1fa0872f70870055a6cfe7d00","0xb5e1b060bB1DBCF27860a9c123307F91529B7abC","0xb71DA2A9f1CAC37Ce31896A84028879706498a57","0xb7d6b338E0D4959Ec12a09CaA08Dd9A46eb901Fe","0xB82B74e17806d00b0FBd725154021d7E141Fb628","0xB85Bb5596AC087dD1cB03A2F9947833710135C4b","0xb865070bF03fA538839982B5892D36dC65C53ADf","0xbB9AD5969E9Bd91dC319aEC5B789CE58508551c8","0xBbc6b65F6E25ADE2A97c8ff47f8adD5163849A60","0xBCdb110BEd266C068B0FBf937e4701b07727a583","0xbEcd1FF17116a055A76D59346D380482f4Ee7254","0xc0230F8106f071dc6EDaef8617C07de823c95619","0xc1a213ed85F16B89154B2a656e587d061523A054","0xc3E232444Ba5C28F3D34671CD28ff45819A8d74A","0xC48940DA77f675e133dD223B6E2dFE74575Cd717","0xC8B3d70dE9ea230872282b01C1b581e0Fabf6718","0xCC968784Db072395b1a8c4eD0309f02aFCa80a46","0xcd71315c21bab6eCe689c387fFB074696f2ec5a7","0xcE73f5b5751441ACEe8D28cf294Db1c308cF1D74","0xCeE331CF5Ec4356f4e2FE82332773a08a6a74e21","0xd0493c8435fFA3C99B85d985Fe0B1fd27744a285","0xd0e85E211469F968463c269a1db24Fd3a37961F6","0xd29E5D0cB395c311b06b68ae2c549393Ccc2f49F","0xD4E985a1eE3CA82afFB7e327C4B2F754cB79e437","0xD52AD9347024276f8b1fb18B6f3016B1A293798E","0xD59dCF7A9a48F2711eDbD7cF4B06a6b1074da605","0xD7f4b300430e332f6A64b34DC6378AcD6d002260","0xd7f80495cBDD082f11E4Dd5772351766B4e5f1F9","0xd80438E0CF0b60e41ee8B21387b724F6609b5cE4","0xdd2f6dea3a6f88b350d15c460460529785170c25","0xdEcd38ae92E72140948B005d2a7753a67EC9c76e","0xDFad138Fe6C72A856C39717DC125d6fE905FcE54","0xE0CCeabB562686211fD2D12683DFD8771921F2Ae","0xE58D7518F4015BF18dd7Bd8c204B4cAcBD7BfaCc","0xe95cF27D38e11A906FBDD5d3E6005835c0eC21CC","0xEA40869d9385a7D25a347D8e122F633A7Cd301dF","0xEA78a01834638bD40604c65216d843550C1b779B","0xEE6D9D398999Ce325ab2132ecfeee475C1F755d8","0xeed2969d7c9531ecee8e16863edcc03c2f0bc463","0xEf0aa211f3E8AEAfF7eDe0638e681B92cE6E58BA","0xf2F895008E339F8A6A72a5CDDa13976DCa6C72dd","0xF62C4AB8F8f325564928cAf33a635D0c41Faf8C6","0xf76B99a8D9ecdf00F0cf49B9923e86AFbbbf5A89","0xf81716951851EC30c83a60394E7972eB3c70c75A","0xfa0a6C42fe275b9a40444381C8011cB0330304cD","0xFA16053722a61Cc2Ec60032f7Da397FA53C94772","0xFA90554120b735E0b6FD0392893b2Cc16eD1cDDa","0xFB795e2A210fE9991124CeE987CDb00ACc7A5589","0xFC88D61121B3C5D76C5743248Fd6276CbDbE6709","0xfEFf185C58BF41ede853896c3F8456FA6F1a0D46","0xff2bEeE9a7e64B03BC390286C3953d2f98Ae87ff","0x6eb49672B26AC890219205dEBCc5f112188cB701"]
const tier3 = ["0x272499Ac2CD43f57D478dF1B039b44F0EC91f393","0x4584e7C3d3E0C1c9DCE3A6bb5Fd08fB63a152D29","0x7aa65483cfad73ff517c4be7b2a16cae10d68f0d","0x7e5541ceeb1c1b24ca847f52f9505533f1c557e0","0x7f710b9558117F63F1812ed4672A31e623B46456","0x875c50541caaaff38c55c2ad37a680cb25b5bc8a","0x96a603254e66AcffF3b641c461270e2b37DA67Ee","0x9cb8b68a63efa0edb96713239c63d9d4cf93e2b7","0xaafc1a45bf2168bee119072f8ab50c749cd52fe3","0xb7d6b338E0D4959Ec12a09CaA08Dd9A46eb901Fe","0xc48940da77f675e133dd223b6e2dfe74575cd717","0xeed2969d7c9531ecee8e16863edcc03c2f0bc463","0xf2F895008E339F8A6A72a5CDDa13976DCa6C72dd","0xff2beee9a7e64b03bc390286c3953d2f98ae87ff"]

const whitelist = {}
for (let i = 0; i < tier1.length; i++) {
    whitelist[tier1[i]] = 3
}

for (let i = 0; i < tier2.length; i++) {
    whitelist[tier2[i]] = 4
}

for (let i = 0; i < tier3.length; i++) {
    whitelist[tier3[i]] = 6
}

const isWhitelisted = (address, qty) => {
    if (!(address in whitelist)) {
        console.error('User not whitelisted')
        return {val: false, message: 'User not whitelisted'}
    }

    if (qty > whitelist[address]) {
        console.error('Quantity is over max allowed for user')
        return {val: false, message: 'Quantity is over max allowed for user'}
    }

    return {val: qty <= whitelist[address], message: 'Success'}
}