(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1208],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(7462),i=n(7294),r=n(2263),l=n(3945),o=n(8182),s=n(2175),c=n(4866),d=n(5162),m=n(814);const p=e=>{let{children:t,fileName:n,...p}=e;const u=t,{code:h}=(0,s.transform)(u,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,r.Z)(),C=(0,l.format)(h,{parser:o.parsers.babel.parse,...k}),f=n?`${n}.ts`:void 0,g=n?`${n}.js`:void 0;return i.createElement(c.Z,{groupId:"ts-js-choice"},i.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},i.createElement(m.Z,(0,a.Z)({},p,{className:"language-ts",title:f}),u)),i.createElement(d.Z,{value:"js",label:"Javascript"},i.createElement(m.Z,(0,a.Z)({},p,{className:"language-js",title:g}),C)))}},9390:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var a=n(7462),i=(n(7294),n(3905)),r=n(1909),l=n(4866),o=n(5162);const s="import * as Kilt from '@kiltprotocol/sdk-js'\n\n// Create a Claim object from light DID, CType and given content.\nexport function createClaim(\n  lightDid: Kilt.DidUri,\n  ctype: Kilt.ICType,\n  content: Kilt.IClaim['contents']\n): Kilt.IClaim {\n  const claim = Kilt.Claim.fromCTypeAndClaimContents(ctype, content, lightDid)\n\n  return claim\n}\n",c="import { config as envConfig } from 'dotenv'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { createClaim } from './createClaim'\nimport { generateLightDid } from './generateLightDid'\nimport { getCtypeSchema } from '../attester/ctypeSchema'\n\nexport function generateCredential(\n  claimerDid: Kilt.DidUri,\n  claimAttributes: Kilt.IClaim['contents']\n): Kilt.ICredential {\n  // Create claim.\n  const ctype = getCtypeSchema()\n  const claim = createClaim(claimerDid, ctype, claimAttributes)\n\n  // Create credential and request attestation.\n  console.log('Claimer -> create request')\n  return Kilt.Credential.fromClaim(claim)\n}\n\n// Don't execute if this is imported by another file.\nif (require.main === module) {\n  ;(async () => {\n    envConfig()\n\n    try {\n      await Kilt.init()\n\n      const claimerDidMnemonic = process.env.CLAIMER_DID_MNEMONIC as string\n      const claimerDid = generateLightDid(claimerDidMnemonic)\n\n      const request = generateCredential(claimerDid.uri, {\n        age: 28,\n        name: 'Max Mustermann'\n      })\n      console.log(\n        '\u26a0\ufe0f  save this to ./claimer/_credential.json for testing  \u26a0\ufe0f\\n\\n'\n      )\n      console.log(JSON.stringify(request, null, 2))\n    } catch (e) {\n      console.log('Error while building credential')\n      throw e\n    }\n  })()\n}\n",d={id:"request",title:"Request an Attestation"},m=void 0,p={unversionedId:"develop/workshop/claimer/request",id:"develop/workshop/claimer/request",title:"Request an Attestation",description:"In this section, we'll create a Claim and a Credential.",source:"@site/docs/develop/03_workshop/05_claimer/02_request.md",sourceDirName:"develop/03_workshop/05_claimer",slug:"/develop/workshop/claimer/request",permalink:"/docs/develop/workshop/claimer/request",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/05_claimer/02_request.md",tags:[],version:"current",lastUpdatedAt:1689323155,formattedLastUpdatedAt:"Jul 14, 2023",sidebarPosition:2,frontMatter:{id:"request",title:"Request an Attestation"},sidebar:"workshop",previous:{title:"DID",permalink:"/docs/develop/workshop/claimer/did"},next:{title:"\ud83e\uddfe Attestation",permalink:"/docs/develop/workshop/attestation"}},u={},h=[{value:"Create Credential",id:"create-credential",level:2},{value:"Run",id:"run",level:2}],k={toc:h},C="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(C,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we'll create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Claim")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential"),".\nBut a credential in itself has no value.\nTo become valid in the eyes of ",(0,i.kt)("span",{className:"label-role verifier"},"Verifiers"),", it needs to be attested by an entity they can trust: an ",(0,i.kt)("span",{className:"label-role attester"},"Attester"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," KILT is an open system.\nAnyone/anything can make a claim about themselves and attest it.\nBut a credential only has value if the Verifier ",(0,i.kt)("em",{parentName:"p"},"trusts")," the Attester.")),(0,i.kt)("h2",{id:"create-credential"},"Create Credential"),(0,i.kt)("p",null,"We'll use provided ",(0,i.kt)("inlineCode",{parentName:"p"},"light DID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ctype")," and ",(0,i.kt)("span",{className:"label-role claimer"},"Claimer")," provided ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," to generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Claim")," object."),(0,i.kt)("p",null,"A claim is composed of attributes that we claim to be true about us."),(0,i.kt)(r.Z,{fileName:"claimer/createClaim",mdxType:"TsJsBlock"},s),(0,i.kt)("p",null,"Since we want to receive an attestation for those claims, we build a ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential"),", which happens in the ",(0,i.kt)("inlineCode",{parentName:"p"},"generateCredential")," function below.\nThe credential contains all necessary information, so that the ",(0,i.kt)("span",{className:"label-role attester"},"Attester")," can attest it for us."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function puts it all together.\nThere we load our light DID, create a claim and finally the credential."),(0,i.kt)(r.Z,{fileName:"claimer/generateCredential",mdxType:"TsJsBlock"},c),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"Attestations")," are issued by ",(0,i.kt)("span",{className:"label-role attester"},"Attesters"),", they are written to chain which requires a deposit.\nEach new ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential")," is unique.\nWhile we're testing, we can store and reuse credentials to avoid multiple attestations.\nTo do this store the output into ",(0,i.kt)("inlineCode",{parentName:"p"},"./claimer/_credential.json"),".\nYou can also share this credential with others in the workshop to see how they get denied from fraudulent senders."),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("p",null,"Run it from command line:"),(0,i.kt)(l.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ts-node claimer/generateCredential.ts\n"))),(0,i.kt)(o.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node claimer/generateCredential.js\n")))),(0,i.kt)("p",null,"OK, you've made a claim as a ",(0,i.kt)("span",{className:"label-role claimer"},"Claimer")," and created a credential from it.\nLet's finish up our ",(0,i.kt)("span",{className:"label-role attester"},"Attester")," and get the credential attested!"))}f.isMDXComponent=!0}}]);