(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2417],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var i=n(7462),a=n(7294),r=n(2263),o=n(3945),l=n(8182),s=n(2175),c=n(4866),d=n(5162),m=n(814);const p=e=>{let{children:t,fileName:n,...p}=e;const u=t,{code:h}=(0,s.transform)(u,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,r.Z)(),g=(0,o.format)(h,{parser:l.parsers.babel.parse,...k}),y=n?`${n}.ts`:void 0,D=n?`${n}.js`:void 0;return a.createElement(c.Z,{groupId:"ts-js-choice"},a.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(m.Z,(0,i.Z)({},p,{className:"language-ts",title:y}),u)),a.createElement(d.Z,{value:"js",label:"Javascript"},a.createElement(m.Z,(0,i.Z)({},p,{className:"language-js",title:D}),g)))}},2100:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var i=n(7462),a=(n(7294),n(3905)),r=(n(814),n(1909)),o=n(4866),l=n(5162);const s="import * as Kilt from '@kiltprotocol/sdk-js'\nimport {\n  blake2AsU8a,\n  keyExtractPath,\n  keyFromPath,\n  mnemonicGenerate,\n  mnemonicToMiniSecret,\n  sr25519PairFromSeed\n} from '@polkadot/util-crypto'\nimport { generateAccount } from './generateAccount'\n\nfunction generateKeyAgreement(mnemonic: string) {\n  const secretKeyPair = sr25519PairFromSeed(mnemonicToMiniSecret(mnemonic))\n  const { path } = keyExtractPath('//did//keyAgreement//0')\n  const { secretKey } = keyFromPath(secretKeyPair, path, 'sr25519')\n  return Kilt.Utils.Crypto.makeEncryptionKeypairFromSeed(blake2AsU8a(secretKey))\n}\n\nexport function generateKeypairs(mnemonic = mnemonicGenerate()) {\n  const { account } = generateAccount(mnemonic)\n\n  const authentication = {\n    ...account.derive('//did//0'),\n    type: 'sr25519'\n  } as Kilt.KiltKeyringPair\n\n  const keyAgreement = generateKeyAgreement(mnemonic)\n\n  return {\n    authentication: authentication,\n    keyAgreement: keyAgreement\n  }\n}\n",c="import { config as envConfig } from 'dotenv'\n\nimport { mnemonicGenerate } from '@polkadot/util-crypto'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { generateKeypairs } from './generateKeypairs'\n\nexport function generateLightDid(mnemonic: string): Kilt.DidDocument {\n  const { authentication, keyAgreement } = generateKeypairs(mnemonic)\n  return Kilt.Did.createLightDidDocument({\n    authentication: [authentication as Kilt.NewLightDidVerificationKey],\n    keyAgreement: [keyAgreement]\n  })\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.init()\n\n      const mnemonic = mnemonicGenerate()\n      console.log('\\nsave following to .env to continue\\n')\n      console.log(`CLAIMER_DID_MNEMONIC=\"${mnemonic}\"`)\n    } catch (e) {\n      console.log('Error while setting up claimer DID')\n      throw e\n    }\n  })()\n}\n",d={id:"did",title:"DID"},m=void 0,p={unversionedId:"develop/workshop/claimer/did",id:"develop/workshop/claimer/did",title:"DID",description:"Time to make a light DID using the previously created account for the Claimer.",source:"@site/docs/develop/03_workshop/05_claimer/01_did.md",sourceDirName:"develop/03_workshop/05_claimer",slug:"/develop/workshop/claimer/did",permalink:"/docs/develop/workshop/claimer/did",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/05_claimer/01_did.md",tags:[],version:"current",lastUpdatedAt:1694426530,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:1,frontMatter:{id:"did",title:"DID"},sidebar:"workshop",previous:{title:"\ud83d\udc64 Claimer",permalink:"/docs/develop/workshop/claimer/"},next:{title:"Request an Attestation",permalink:"/docs/develop/workshop/claimer/request"}},u={},h=[{value:"Generate Keys",id:"generate-keys",level:2},{value:"Generate Light DID",id:"generate-light-did",level:2},{value:"Run",id:"run",level:2}],k={toc:h},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Time to make a light DID using the previously created account for the ",(0,a.kt)("span",{className:"label-role claimer"},"Claimer"),".\nSince a light DID is not registered on the blockchain, you don't need funds for creating one.\nRemember light DIDs can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sign attestation requests and presentation with the authentication keys"),(0,a.kt)("li",{parentName:"ul"},"Encrypt messages with the encryption keys")),(0,a.kt)("p",null,"Take a look at our ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/light-did-creation"},"DID documentation")," to learn more about DIDs and the difference between their light and full versions."),(0,a.kt)("h2",{id:"generate-keys"},"Generate Keys"),(0,a.kt)("p",null,"Similar to the Attester, the Claimer must set up the DID keys."),(0,a.kt)(r.Z,{fileName:"claimer/generateKeypairs",mdxType:"TsJsBlock"},s),(0,a.kt)("p",null,"The Claimer only needs an authentication key and an encryption key.\nHere the keys are both derived from the same seed, but they could also have two different seeds."),(0,a.kt)("h2",{id:"generate-light-did"},"Generate Light DID"),(0,a.kt)("p",null,"Once our ",(0,a.kt)("inlineCode",{parentName:"p"},"keypairs")," are generated we can create our light DID.\nBecause it's off-chain we can just create the DID object every time, we don't need to resolve them before using it.\nBut we'll still accept the ",(0,a.kt)("inlineCode",{parentName:"p"},"mnemonic")," and prompt to save it in ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," for our reference."),(0,a.kt)(r.Z,{fileName:"claimer/generateLightDid",mdxType:"TsJsBlock"},c),(0,a.kt)("p",null,"After everything is initialized, we create a mnemonic that will be used to create the light DID.\nAs you may have noticed the Claimer doesn't have an ",(0,a.kt)("inlineCode",{parentName:"p"},"account"),".\nThe Claimer doesn't need to hold funds and also doesn't need a blockchain account."),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)(o.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ts-node ./claimer/generateLightDid.ts\n"))),(0,a.kt)(l.Z,{value:"js",label:"Javascript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node ./claimer/generateLightDid.js\n")))),(0,a.kt)("p",null,"Your output will provide you with ",(0,a.kt)("inlineCode",{parentName:"p"},"CLAIMER_DID_MNEMONIC"),".\nBe sure to save it in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file, it should now look similar to this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},'WSS_ADDRESS=wss://peregrine.kilt.io\n\nATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry...\nATTESTER_ACCOUNT_ADDRESS=4ohMvUHsyeDhMVZF...\nATTESTER_DID_MNEMONIC="beyond large galaxy...\n\nCLAIMER_DID_MNEMONIC="danger awkward wrestle snap...\n')),(0,a.kt)("p",null,"Well done - You've successfully generated a light DID!"))}y.isMDXComponent=!0}}]);