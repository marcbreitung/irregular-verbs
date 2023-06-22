const verbs = [
  {
    id: "98a2aa783d5cccd5ea692e5cef4e5bd6",
    infinitive: "be",
    pastSimple: "was",
    pastParticiple: "been",
  },
  {
    id: "22c88ab1c7b332e5f3d1846fbe5442dd",
    infinitive: "beat",
    pastSimple: "beat",
    pastParticiple: "beaten",
  },
  {
    id: "08bea77c8c7231b839402970f82193ea",
    infinitive: "become",
    pastSimple: "became",
    pastParticiple: "become",
  },
  {
    id: "7ce708aa4bd1dfbb7b4559ffd4c4a918",
    infinitive: "begin",
    pastSimple: "began",
    pastParticiple: "begun",
  },
  {
    id: "a25ff83d536fc285f9662c95f84a1475",
    infinitive: "bet",
    pastSimple: "bet",
    pastParticiple: "bet",
  },
  {
    id: "33a6621cd4b8319fdedda0fcc267c7d3",
    infinitive: "blow",
    pastSimple: "blew",
    pastParticiple: "blown",
  },
  {
    id: "538870700d5428dce730d0e56ff0996c",
    infinitive: "break",
    pastSimple: "broke",
    pastParticiple: "broken",
  },
  {
    id: "d6e2c6c9dc5d6a5900e94519aaafe1d1",
    infinitive: "bring",
    pastSimple: "brought",
    pastParticiple: "brought",
  },
  {
    id: "4387762f51bbeee5f5caf7cc906e1930",
    infinitive: "build",
    pastSimple: "built",
    pastParticiple: "built",
  },
  {
    id: "5376e69b8f1d75ab46c1245eb68b0c03",
    infinitive: "burst",
    pastSimple: "burst",
    pastParticiple: "burst",
  },
  {
    id: "a5c75d722a9d9441d21ad2fe4a0da6a3",
    infinitive: "buy",
    pastSimple: "bought",
    pastParticiple: "bought",
  },
  {
    id: "8476dd04026c14a386bcf3b758e4e73b",
    infinitive: "catch",
    pastSimple: "caught",
    pastParticiple: "caught",
  },
  {
    id: "4dd071f5256d1ed4a6c6a3f9cfab6b45",
    infinitive: "choose",
    pastSimple: "chose",
    pastParticiple: "chosen",
  },
  {
    id: "ad44531cbeb4b239d373d523fa833d37",
    infinitive: "come",
    pastSimple: "came",
    pastParticiple: "come",
  },
  {
    id: "37cc65848aeca53eefddfeb6515c6317",
    infinitive: "cost",
    pastSimple: "cost",
    pastParticiple: "cost",
  },
  {
    id: "30a0ec47c913f0cb313050fa2f007350",
    infinitive: "cut",
    pastSimple: "cut",
    pastParticiple: "cut",
  },
  {
    id: "798038a9b2977c54d21b15705de9207d",
    infinitive: "deal",
    pastSimple: "dealt",
    pastParticiple: "dealt",
  },
  {
    id: "54a0c8fed5b6037c6eaebb93ade4d691",
    infinitive: "do",
    pastSimple: "did",
    pastParticiple: "done",
  },
  {
    id: "0eb41dcb5b342bcac747d456be39c81e",
    infinitive: "draw",
    pastSimple: "drew",
    pastParticiple: "drawn",
  },
  {
    id: "398d4681caa3d839b31bb32432851e60",
    infinitive: "drink",
    pastSimple: "drank",
    pastParticiple: "drunk",
  },
  {
    id: "b71ab57068cab102af0031f44a5b1d0a",
    infinitive: "drive",
    pastSimple: "drove",
    pastParticiple: "driven",
  },
  {
    id: "d1f07abae8b79513b412a712d32190f1",
    infinitive: "eat",
    pastSimple: "ate",
    pastParticiple: "eaten",
  },
  {
    id: "755fc813f6a1508f7a903cef5ba896b7",
    infinitive: "fall",
    pastSimple: "fell",
    pastParticiple: "fallen",
  },
  {
    id: "77f5e9607434a22b918c7de6ac7a2d2d",
    infinitive: "feed",
    pastSimple: "fed",
    pastParticiple: "fed",
  },
  {
    id: "b5fa146d714b85acfd063cd453870b5a",
    infinitive: "feel",
    pastSimple: "felt",
    pastParticiple: "felt",
  },
  {
    id: "c4430908c3b9d08fb4d584b56a47ba5a",
    infinitive: "fight",
    pastSimple: "fought",
    pastParticiple: "fought",
  },
  {
    id: "a866499f48370a07450a0cf1dbc75f2f",
    infinitive: "find",
    pastSimple: "found",
    pastParticiple: "found",
  },
  {
    id: "14ba4fe2208b40817946068ce38f9c85",
    infinitive: "fly",
    pastSimple: "flew",
    pastParticiple: "flown",
  },
  {
    id: "da7ab679ad357832efee9ae26ef7b49a",
    infinitive: "forget",
    pastSimple: "forgot",
    pastParticiple: "forgotten",
  },
  {
    id: "58fbb21e743cf6c8e766822284b3de0d",
    infinitive: "freeze",
    pastSimple: "froze",
    pastParticiple: "frozen",
  },
  {
    id: "380d7399fede0cc62f95b6406695ee24",
    infinitive: "get",
    pastSimple: "got",
    pastParticiple: "got",
  },
  {
    id: "0e6a044cfe09cc6d5e841fe84a62071b",
    infinitive: "give",
    pastSimple: "gave",
    pastParticiple: "given",
  },
  {
    id: "51479d9d1bfcc340e8cb309731eb5664",
    infinitive: "go",
    pastSimple: "went",
    pastParticiple: "gone",
  },
  {
    id: "2e4383ddcd40749b9afec2f3f50f0028",
    infinitive: "grow",
    pastSimple: "grew",
    pastParticiple: "grown",
  },
  {
    id: "f54d41f56f887c8185e71464e3bd441c",
    infinitive: "hang",
    pastSimple: "hung",
    pastParticiple: "hung",
  },
  {
    id: "905d2584de2ca10a8ce998c92a97a18b",
    infinitive: "have",
    pastSimple: "had",
    pastParticiple: "had",
  },
  {
    id: "4240e5fa67e4d4d37d07978b3ebaa5e7",
    infinitive: "hear",
    pastSimple: "heard",
    pastParticiple: "heard",
  },
  {
    id: "274d12c7320251b617fa6fbab409fec8",
    infinitive: "hide",
    pastSimple: "hid",
    pastParticiple: "hidden",
  },
  {
    id: "0bf56ef4baef7192ba8e465068c2858f",
    infinitive: "hit",
    pastSimple: "hit",
    pastParticiple: "hit",
  },
  {
    id: "5943ea6609113a4a1e96fbbbdcf3b37c",
    infinitive: "hold",
    pastSimple: "held",
    pastParticiple: "held",
  },
  {
    id: "2cc86509970bdd5595a38ada076362d3",
    infinitive: "hurt",
    pastSimple: "hurt",
    pastParticiple: "hurt",
  },
  {
    id: "8dd1f4853151fe47a9cf65a1640563d1",
    infinitive: "keep",
    pastSimple: "kept",
    pastParticiple: "kept",
  },
  {
    id: "444729e27f0b8b2e89939a4d541ef2b3",
    infinitive: "know",
    pastSimple: "knew",
    pastParticiple: "known",
  },
  {
    id: "6f863d49ae58e85f8bbccb43148ed964",
    infinitive: "lay",
    pastSimple: "laid",
    pastParticiple: "laid",
  },
  {
    id: "879d30430ee44461a43348c7cb61a789",
    infinitive: "lead",
    pastSimple: "led",
    pastParticiple: "led",
  },
  {
    id: "251836eb8ec1752a89d431e229bdd801",
    infinitive: "leave",
    pastSimple: "left",
    pastParticiple: "left",
  },
  {
    id: "c5fb5fb6c0890963abf5f8d4e0f71e3c",
    infinitive: "lend",
    pastSimple: "lent",
    pastParticiple: "lent",
  },
  {
    id: "16363521212bd28ae10fa0bea7f657d6",
    infinitive: "let",
    pastSimple: "let",
    pastParticiple: "let",
  },
  {
    id: "95274d79f403fea9da93d4db129f27b0",
    infinitive: "lie",
    pastSimple: "lay",
    pastParticiple: "lain",
  },
  {
    id: "7db2026d061a25be449816f8471620f2",
    infinitive: "light",
    pastSimple: "lit",
    pastParticiple: "lit",
  },
  {
    id: "deb3569987040f7f6b8c90e3c19d67ab",
    infinitive: "lose",
    pastSimple: "lost",
    pastParticiple: "lost",
  },
  {
    id: "cced354a13cc3e2eede7498d0b7640f4",
    infinitive: "make",
    pastSimple: "made",
    pastParticiple: "made",
  },
  {
    id: "e02164ea666139987215f82b47b69f38",
    infinitive: "mean",
    pastSimple: "meant",
    pastParticiple: "meant",
  },
  {
    id: "1a3f41aea0e637629cc98cd27e76cec1",
    infinitive: "meet",
    pastSimple: "met",
    pastParticiple: "met",
  },
  {
    id: "da1721240c999543a379c4cde6ad8dd2",
    infinitive: "pay",
    pastSimple: "paid",
    pastParticiple: "paid",
  },
  {
    id: "fab7203193e23c958b0235e062254f8b",
    infinitive: "put",
    pastSimple: "put",
    pastParticiple: "put",
  },
  {
    id: "4a362260fbb952377e9903a2da9fff59",
    infinitive: "read",
    pastSimple: "read",
    pastParticiple: "read",
  },
  {
    id: "af32ffc54095ec31bc36d633ec51d9bb",
    infinitive: "ride",
    pastSimple: "rode",
    pastParticiple: "ridden",
  },
  {
    id: "a990ef2c8a8fc8a59f321050fbb6a715",
    infinitive: "ring",
    pastSimple: "rang",
    pastParticiple: "rung",
  },
  {
    id: "f2fd56fad67523d8330410038d3901bb",
    infinitive: "rise",
    pastSimple: "rose",
    pastParticiple: "risen",
  },
  {
    id: "bc07fd80480278075b6f107b4255e2af",
    infinitive: "run",
    pastSimple: "ran",
    pastParticiple: "run",
  },
  {
    id: "7ed0eab13d5b286c0d326add4800b154",
    infinitive: "say",
    pastSimple: "said",
    pastParticiple: "said",
  },
  {
    id: "a97d9b93005ed953be7c660d431201bd",
    infinitive: "see",
    pastSimple: "saw",
    pastParticiple: "seen",
  },
  {
    id: "9c1cced3f4c5fb9e5fd503f7a1c55ae0",
    infinitive: "sell",
    pastSimple: "sold",
    pastParticiple: "sold",
  },
  {
    id: "cf7639c4f5f0c792f04a80d60e555fb4",
    infinitive: "send",
    pastSimple: "sent",
    pastParticiple: "sent",
  },
  {
    id: "2ad0e67371c104d698cbd1bc5ef9e254",
    infinitive: "set",
    pastSimple: "set",
    pastParticiple: "set",
  },
  {
    id: "d9ad7afa42c331c12c4643133e434634",
    infinitive: "shake",
    pastSimple: "shook",
    pastParticiple: "shaken",
  },
  {
    id: "6f469d6f18871686737a69f7c61b1709",
    infinitive: "shine",
    pastSimple: "shone",
    pastParticiple: "shone",
  },
  {
    id: "6955b4a686029301fe991eff52b0fc7a",
    infinitive: "shoot",
    pastSimple: "shot",
    pastParticiple: "shot",
  },
  {
    id: "11e81ac0846d09c6c9f22044d87c96f9",
    infinitive: "show*",
    pastSimple: "showed",
    pastParticiple: "shown",
  },
  {
    id: "b922c9bf09fbee4198b498ec7cc4fa60",
    infinitive: "shut",
    pastSimple: "shut",
    pastParticiple: "shut",
  },
  {
    id: "6686aba1437d6d59cc1ce479a48fd875",
    infinitive: "sing",
    pastSimple: "sang",
    pastParticiple: "sung",
  },
  {
    id: "da1ac7a4d469a706b35dbb63dc42cc79",
    infinitive: "sink",
    pastSimple: "sank",
    pastParticiple: "sunk",
  },
  {
    id: "7aca98bc70e6de3270e0ef8c69568bfe",
    infinitive: "sit",
    pastSimple: "sat",
    pastParticiple: "sat",
  },
  {
    id: "bab0e3cf8ddda1e5a10a1df256ef17c7",
    infinitive: "sleep",
    pastSimple: "slept",
    pastParticiple: "slept",
  },
  {
    id: "1f06d487b1b0c1d109747bb910fae688",
    infinitive: "slide",
    pastSimple: "slid",
    pastParticiple: "slid",
  },
  {
    id: "976b1845d4f1b280fb8aae1dfeb2066c",
    infinitive: "speak",
    pastSimple: "spoke",
    pastParticiple: "spoken",
  },
  {
    id: "725f3eb08a44638eecc9a26d5374f1ec",
    infinitive: "spend",
    pastSimple: "spent",
    pastParticiple: "spent",
  },
  {
    id: "36cd8810377910159ce98a99a3bbb71b",
    infinitive: "spring",
    pastSimple: "sprang",
    pastParticiple: "sprung",
  },
  {
    id: "4a10281015df5f7159c6a604d7b05108",
    infinitive: "stand",
    pastSimple: "stood",
    pastParticiple: "stood",
  },
  {
    id: "03b5ccc1d47ff4675db5156bee4053ce",
    infinitive: "steal",
    pastSimple: "stole",
    pastParticiple: "stolen",
  },
  {
    id: "7afdf948723e64164b022b796eb207e5",
    infinitive: "stick",
    pastSimple: "stuck",
    pastParticiple: "stuck",
  },
  {
    id: "84182f9ec79b95ddc4ef53cb748b6836",
    infinitive: "swear",
    pastSimple: "swore",
    pastParticiple: "sworn",
  },
  {
    id: "95074c2fb6e8315513906dd7f9e76bd4",
    infinitive: "sweep",
    pastSimple: "swept",
    pastParticiple: "swept",
  },
  {
    id: "8d043a86c03170212af1d5adc169a231",
    infinitive: "swim",
    pastSimple: "swam",
    pastParticiple: "swum",
  },
  {
    id: "f0ec630a0a6bab8373cfd94eb6a70c25",
    infinitive: "swing",
    pastSimple: "swung",
    pastParticiple: "swung",
  },
  {
    id: "1787901aa89007e9e8c19563d1844b7f",
    infinitive: "take",
    pastSimple: "took",
    pastParticiple: "taken",
  },
  {
    id: "d32766ca8c55b17e36093356040a3f68",
    infinitive: "teach",
    pastSimple: "taught",
    pastParticiple: "taught",
  },
  {
    id: "48cefa7e413f6726703b32049c11c1cc",
    infinitive: "tear",
    pastSimple: "tore",
    pastParticiple: "torn",
  },
  {
    id: "cc9e869279280d214a705deb9c0e0bda",
    infinitive: "tell",
    pastSimple: "told",
    pastParticiple: "told",
  },
  {
    id: "dbf629f32f35887482d7a4e9915ecb43",
    infinitive: "think",
    pastSimple: "thought",
    pastParticiple: "thought",
  },
  {
    id: "353c38448e89afd3c1c9b0036b040d6b",
    infinitive: "throw",
    pastSimple: "threw",
    pastParticiple: "thrown",
  },
  {
    id: "072d6eb86f7e777d009baa9a46209292",
    infinitive: "understand",
    pastSimple: "understood",
    pastParticiple: "understood",
  },
  {
    id: "fc96f347d61647ecff2c3ee532480b9e",
    infinitive: "wake",
    pastSimple: "woke",
    pastParticiple: "woken",
  },
  {
    id: "071e543ce0cfdada556901611904b363",
    infinitive: "wear",
    pastSimple: "wore",
    pastParticiple: "worn",
  },
  {
    id: "8c253e72d65c9107eed055d8c17ca24d",
    infinitive: "weave",
    pastSimple: "wove",
    pastParticiple: "woven",
  },
  {
    id: "f5b44868c02946d6a82a55233d983a51",
    infinitive: "win",
    pastSimple: "won",
    pastParticiple: "won",
  },
  {
    id: "c648dd0ad0489d56cca0ffaec2fb0361",
    infinitive: "write",
    pastSimple: "wrote",
    pastParticiple: "written",
  },
];
export default verbs;