(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[241],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var i=n(7462),o=n(7294),a=n(2263),r=n(3945),s=n(8182),d=n(2175),c=n(4866),l=n(5162),p=n(814);const m=e=>{let{children:t,fileName:n,...m}=e;const k=t,{code:y}=(0,d.transform)(k,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:u}}}=(0,a.Z)(),g=(0,r.format)(y,{parser:s.parsers.babel.parse,...u}),h=n?`${n}.ts`:void 0,f=n?`${n}.js`:void 0;return o.createElement(c.Z,{groupId:"ts-js-choice"},o.createElement(l.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(p.Z,(0,i.Z)({},m,{className:"language-ts",title:h}),k)),o.createElement(l.Z,{value:"js",label:"Javascript"},o.createElement(p.Z,(0,i.Z)({},m,{className:"language-js",title:f}),g)))}},5053:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=n(7462),o=(n(7294),n(3905)),a=n(1909);const r="import * as Kilt from '@kiltprotocol/sdk-js'\n\nimport {\n  blake2AsU8a,\n  keyExtractPath,\n  keyFromPath,\n  mnemonicGenerate,\n  mnemonicToMiniSecret,\n  sr25519PairFromSeed\n} from '@polkadot/util-crypto'\n\n// Because there is no first-class support for this class of keys,\n// we need to use a workaround to generate a key we can use for encryption/decryption.\nfunction generateKeyAgreement(mnemonic: string): Kilt.KiltEncryptionKeypair {\n  const secretKeyPair = sr25519PairFromSeed(mnemonicToMiniSecret(mnemonic))\n  const { path } = keyExtractPath('//did//keyAgreement//0')\n  const { secretKey } = keyFromPath(secretKeyPair, path, 'sr25519')\n  return Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(blake2AsU8a(secretKey))\n}\n\nexport function generateKeypairs(mnemonic = mnemonicGenerate()): {\n  authentication: Kilt.KiltKeyringPair & {\n    type: 'sr25519'\n  }\n  keyAgreement: Kilt.KiltEncryptionKeypair\n  assertionMethod: Kilt.KiltKeyringPair\n  capabilityDelegation: Kilt.KiltKeyringPair\n} {\n  const account = Kilt.Utils.Crypto.makeKeypairFromSeed(\n    mnemonicToMiniSecret(mnemonic),\n    'sr25519'\n  )\n\n  const authentication = {\n    ...account.derive('//did//0'),\n    type: 'sr25519'\n  } as Kilt.KiltKeyringPair & {\n    type: 'sr25519'\n  }\n\n  const assertionMethod = {\n    ...account.derive('//did//assertion//0'),\n    type: 'sr25519'\n  } as Kilt.KiltKeyringPair\n\n  const capabilityDelegation = {\n    ...account.derive('//did//delegation//0'),\n    type: 'sr25519'\n  } as Kilt.KiltKeyringPair\n\n  const keyAgreement = generateKeyAgreement(mnemonic)\n\n  return {\n    authentication: authentication,\n    keyAgreement: keyAgreement,\n    assertionMethod: assertionMethod,\n    capabilityDelegation: capabilityDelegation\n  }\n}\n",s={id:"key-generation",title:"Generate DID keys"},d=void 0,c={unversionedId:"develop/sdk/cookbook/dids/key-generation",id:"develop/sdk/cookbook/dids/key-generation",title:"Generate DID keys",description:"Creating a Decentralized Identifier (DID) in the KILT network involves generating keying material for authentication and encryption.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/00_generate_keys.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/key-generation",permalink:"/docs/develop/sdk/cookbook/dids/key-generation",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/00_generate_keys.md",tags:[],version:"current",lastUpdatedAt:1692697628,formattedLastUpdatedAt:"Aug 22, 2023",sidebarPosition:0,frontMatter:{id:"key-generation",title:"Generate DID keys"},sidebar:"sdk",previous:{title:"Quickstart",permalink:"/docs/develop/sdk/quickstart"},next:{title:"Create a Light DID",permalink:"/docs/develop/sdk/cookbook/dids/light-did-creation"}},l={},p=[],m={toc:p},k="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creating a Decentralized Identifier (DID) in the KILT network involves generating keying material for authentication and encryption.\nIn this guide, we'll demonstrate how to create a set of key pairs suitable for generating a KILT DID."),(0,o.kt)("p",null,"Before we proceed, it's important to note that this example assumes the usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@kiltprotocol/sdk-js")," library along with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/util-crypto")," library for cryptographic operations.\nAdditionally, we want to emphasize the significance of securely storing keys and the mnemonic seed phrase.\nFor production use, ensure that private keys are encrypted and stored safely, while also creating a backup of the mnemonic seed phrase."),(0,o.kt)("p",null,"In the example provided, we derive different types of keys from a single account using derivation paths.\nThis approach allows us to generate various key pairs for authentication, key agreement, assertion methods, and capability delegation from one mnemonic seed phrase.\nUsing derivation paths simplifies key management, ensuring that a single mnemonic seed serves as the basis for multiple keys associated with a DID.\nThis method improves efficiency while maintaining security.\nHowever, it's essential to handle and store private keys securely to prevent unauthorized access and ensure the overall integrity and privacy of the decentralized identity system."),(0,o.kt)("p",null,"Below is an example code snippet illustrating the key pair generation for a KILT DID:"),(0,o.kt)(a.Z,{mdxType:"TsJsBlock"},r),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This example doesn't show how to store the keys.\nIt is recommended to store the keys in a secure manner, e.g. only storing the private keys encrypted on disk.\nThe mnemonic seed phrase can be used to regenerate the keys, so it is recommended to also store the mnemonic in a secure manner and create a backup of it.")))}y.isMDXComponent=!0}}]);