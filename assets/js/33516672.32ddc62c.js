(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1002],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var n=i(7462),o=i(7294),a=i(2263),s=i(3945),r=i(8182),d=i(2175),l=i(5488),u=i(5162),c=i(6823);const p=e=>{let{children:t,fileName:i,...p}=e;const k=t,{code:h}=(0,d.transform)(k,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:g}}}=(0,a.Z)(),m=(0,s.format)(h,{parser:r.parsers.babel.parse,...g}),f=i?`${i}.ts`:void 0,D=i?`${i}.js`:void 0;return o.createElement(l.Z,{groupId:"ts-js-choice"},o.createElement(u.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(c.Z,(0,n.Z)({},p,{className:"language-ts",title:f}),k)),o.createElement(u.Z,{value:"js",label:"Javascript"},o.createElement(c.Z,(0,n.Z)({},p,{className:"language-js",title:D}),m)))}},6826:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=i(7462),o=(i(7294),i(3905)),a=i(1909);const s={id:"did-signature",title:"Generate and Verify a DID Signature"},r=void 0,d={unversionedId:"develop/sdk/cookbook/dids/did-signature",id:"develop/sdk/cookbook/dids/did-signature",title:"Generate and Verify a DID Signature",description:"In addition to being used to authorize chain operations, both light and full DIDs have off-chain applications.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/07_did_signature.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/did-signature",permalink:"/docs/develop/sdk/cookbook/dids/did-signature",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/07_did_signature.md",tags:[],version:"current",lastUpdatedAt:1681216738,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:7,frontMatter:{id:"did-signature",title:"Generate and Verify a DID Signature"},sidebar:"sdk",previous:{title:"Build DID Extrinsics",permalink:"/docs/develop/sdk/cookbook/dids/full-did-batch"},next:{title:"Exporting a KILT DID",permalink:"/docs/develop/sdk/cookbook/dids/did-export"}},l={},u=[],c={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to being used to authorize chain operations, both light and full DIDs have off-chain applications."),(0,o.kt)("p",null,"One such applications is generating digital signatures.\nAs a DID can have multiple keys, in addition to the signature data itself, a DID signature contains information about the signer's DID and key used, so that Verifiers have all the information needed to resolve the DID from the KILT blockchain and use the right key to verify the generated signature."),(0,o.kt)("p",null,"The snippet below shows how to generate and verify a DID signature using the KILT SDK."),(0,o.kt)(a.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\nimport { u8aToHex } from '@polkadot/util'\n\ntype KeyLookup = (parameter: {\n  didUri: Kilt.DidUri\n  keyRelationship: Kilt.VerificationKeyRelationship\n}) => Promise<{\n  key: Kilt.KiltKeyringPair\n  keyType: Kilt.VerificationKeyType\n  keyUri: Kilt.DidResourceUri\n}>\n\nexport async function generateAndVerifyDidAuthenticationSignature(\n  did: Kilt.DidDocument,\n  payload: Uint8Array,\n  keyLookup: KeyLookup\n): Promise<void> {\n  // How the key is looked up depends on where the key is stored (e.g. memory, hardware wallet, browser extension)\n  const { key, keyUri } = await keyLookup({\n    didUri: did.uri,\n    keyRelationship: 'authentication'\n  })\n\n  // Generate a signature using the key that we just looked up.\n  const signature = key.sign(payload)\n\n  // Print the generated signature object.\n  console.log('Generated signature:')\n  console.log(u8aToHex(signature))\n\n  // Verify the validity of the signature using the DID's authentication public key.\n  // It throws if the signature cannot be verified.\n  await Kilt.Did.verifyDidSignature({\n    message: payload,\n    signature,\n    keyUri,\n    expectedVerificationMethod: 'authentication'\n  })\n}\n"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Notice that the snippet above takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"DidDocument")," instance to generate the signature.\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"DidDocument")," can represent either a light or a full DID.\nThis means that both light and full DIDs can generate signatures, and the KILT SDK implements the right verification logic depending on whether the signer is a light or a full DID.")))}p.isMDXComponent=!0}}]);