(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[615],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var n=i(7462),o=i(7294),a=i(2263),r=i(3945),s=i(8182),d=i(2175),l=i(4866),c=i(5162),p=i(814);const h=e=>{let{children:t,fileName:i,...h}=e;const m=t,{code:u}=(0,d.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,a.Z)(),g=(0,r.format)(u,{parser:s.parsers.babel.parse,...k}),D=i?`${i}.ts`:void 0,f=i?`${i}.js`:void 0;return o.createElement(l.Z,{groupId:"ts-js-choice"},o.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(p.Z,(0,n.Z)({},h,{className:"language-ts",title:D}),m)),o.createElement(c.Z,{value:"js",label:"Javascript"},o.createElement(p.Z,(0,n.Z)({},h,{className:"language-js",title:f}),g)))}},6350:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=i(7462),o=(i(7294),i(3905)),a=i(1909);const r="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function createSimpleLightDid({\n  authentication\n}: {\n  authentication: Kilt.NewLightDidVerificationKey\n}): Kilt.DidDocument {\n  // Create a light DID from the generated authentication key.\n  const lightDID = Kilt.Did.createLightDidDocument({\n    authentication: [authentication]\n  })\n  console.log(lightDID.uri)\n\n  return lightDID\n}\n",s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function createCompleteLightDid({\n  authentication,\n  keyAgreement\n}: {\n  authentication: Kilt.NewLightDidVerificationKey\n  keyAgreement: Kilt.NewDidEncryptionKey\n}): Kilt.DidDocument {\n  // Example service for the DID.\n  const service: Kilt.DidServiceEndpoint[] = [\n    {\n      id: '#my-service',\n      type: ['KiltPublishedCredentialCollectionV1'],\n      serviceEndpoint: ['http://example.domain.org']\n    }\n  ]\n\n  // Create the KILT light DID with the information generated.\n  const lightDID = Kilt.Did.createLightDidDocument({\n    authentication: [authentication],\n    keyAgreement: [keyAgreement],\n    service\n  })\n  console.log(lightDID.uri)\n\n  return lightDID\n}\n",d={id:"light-did-creation",title:"Create a Light DID"},l=void 0,c={unversionedId:"develop/sdk/cookbook/dids/light-did-creation",id:"develop/sdk/cookbook/dids/light-did-creation",title:"Create a Light DID",description:"The creation of a light DID requires the generation of some keying material for keys that are to be used for authentication and encryption.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/01_light_did_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/light-did-creation",permalink:"/docs/develop/sdk/cookbook/dids/light-did-creation",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/01_light_did_creation.md",tags:[],version:"current",lastUpdatedAt:1694426530,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:1,frontMatter:{id:"light-did-creation",title:"Create a Light DID"},sidebar:"sdk",previous:{title:"Generate DID keys",permalink:"/docs/develop/sdk/cookbook/dids/key-generation"},next:{title:"Create a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-creation"}},p={},h=[],m={toc:h},u="wrapper";function k(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The creation of a light DID requires the generation of some keying material for keys that are to be used for authentication and encryption.\nFor the sake of ease of use, the example snippets below show how to use keys generated with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Keyring"),", provided also by the ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api")," library, to generate key pairs that are kept in memory and disappear at the end of the program execution, unless saved to some persistent storage."),(0,o.kt)("p",null,"The following is an example of how to create a light DID after creating an authentication keypair."),(0,o.kt)(a.Z,{mdxType:"TsJsBlock"},r),(0,o.kt)("p",null,"For cases in which an encryption key and some services also need to be added to a light DID:"),(0,o.kt)(a.Z,{mdxType:"TsJsBlock"},s),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In KILT, light DIDs are meant to be used in one of two cases:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"As ",(0,o.kt)("em",{parentName:"li"},"ephemeral, one-time identifiers")," when establishing new communication channels with untrusted parties."),(0,o.kt)("li",{parentName:"ol"},"As an ",(0,o.kt)("em",{parentName:"li"},"entrypoint into the KILT ecosystem"),", i.e., to obtain one's first credentials and get acquainted with KILT.")),(0,o.kt)("p",{parentName:"admonition"},"As such, light DIDs do not support updates of any sort, but they retain the same identifier until they are upgraded to full DIDs.\nThey are not intended for use in complex and/or high-security use cases.\nIn those situations, a full DID should be used.\nVisit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/full-did-creation"},"next section")," to see how to create and manage full DIDs.")))}k.isMDXComponent=!0}}]);