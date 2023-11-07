(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8936],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var s=n(7462),i=n(7294),r=n(2263),a=n(3945),o=n(8182),d=n(2175),l=n(4866),p=n(5162),c=n(814);const h=e=>{let{children:t,fileName:n,...h}=e;const u=t,{code:m}=(0,d.transform)(u,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:f}}}=(0,r.Z)(),v=(0,a.format)(m,{parser:o.parsers.babel.parse,...f}),g=n?`${n}.ts`:void 0,y=n?`${n}.js`:void 0;return i.createElement(l.Z,{groupId:"ts-js-choice"},i.createElement(p.Z,{value:"ts",label:"Typescript",default:!0},i.createElement(c.Z,(0,s.Z)({},h,{className:"language-ts",title:g}),u)),i.createElement(p.Z,{value:"js",label:"Javascript"},i.createElement(c.Z,(0,s.Z)({},h,{className:"language-js",title:y}),v)))}},9828:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(7462),i=(n(7294),n(3905)),r=n(1909);const a="import { randomAsHex } from '@polkadot/util-crypto'\n\n// Store somewhere in the backend.\nexport function generateRequestChallenge() {\n  return randomAsHex(24)\n}\n",o={id:"dapp-verifier",title:"Verifying a Credential"},d=void 0,l={unversionedId:"develop/dApp/dapp-verifier",id:"develop/dApp/dapp-verifier",title:"Verifying a Credential",description:"This section demonstrates how to build a basic verifier according to the Credential API Specification.",source:"@site/docs/develop/07_dApp/04_verifier.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/dapp-verifier",permalink:"/docs/develop/dApp/dapp-verifier",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/04_verifier.md",tags:[],version:"current",lastUpdatedAt:1699352606,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:4,frontMatter:{id:"dapp-verifier",title:"Verifying a Credential"},sidebar:"dApp",previous:{title:"Setting Up the Communication Session",permalink:"/docs/develop/dApp/session"}},p={},c=[{value:"Request a Credential Presentation",id:"request-a-credential-presentation",level:2},{value:"Verify the Presentation",id:"verify-the-presentation",level:2}],h={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section demonstrates how to build a basic verifier according to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/spec-ext-credential-api"},"Credential API Specification"),".\nBefore continuing, please make sure you have already set up the ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/dApp/session"},"communication session")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/dApp/well-known-did-config"},"Well-Known DID Configuration"),"."),(0,i.kt)("p",null,"This guide explains specifically how a web server can request a credential presentation from one of its visitors (the claimer).\nAfter the browser extension verified the Well-Known DID Configuration and the encrypted communication channel between the extension and the server was established, the web server can request the credential presentation.\nThis is a two step process."),(0,i.kt)("p",null,"First the server sends a message to the extension that request the presentation of a credential.\nSince we don't want to see just any credential, but expect specific content, we also require that the credential conforms to a specific ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/credentials/ctypes"},"CType"),".\nWhen the extension receives the request, it will prompt the user to select a credential that should be presented to the server.\nThe user can also choose to reject this request and not to show any presentation."),(0,i.kt)("p",null,"The second step is to verify the received credential.\nAfter the user chooses the credential, the extension will pass a response to the website which contains the credential presentation.\nThe server of that website needs to ensure that this presentation is actually valid."),(0,i.kt)("h2",{id:"request-a-credential-presentation"},"Request a Credential Presentation"),(0,i.kt)("p",null,"Before the website can request a credential, it needs the type of credential (CType) that it wants to request.\nIn this guide the website requests an email address that is owned by the DID.\nFor that it uses the Email CType.\nYou can search through existing CTypes in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/ctype-index"},"CType Index"),"."),(0,i.kt)("p",null,"  {EmailCtype}"),(0,i.kt)("p",null,"After settled on a CType, the server can build the request for the visitor.\nSince we want to ensure that the presentation of the credential is fresh, the server first has to create a random challenge.\nThe presentation must include this challenge and since it's random, the presentation must be created and signed from scratch.\nThis ensures that it's not possible to record a presentation and just send this, pretending to be the owner of the DID.\nThe challenge can be generated using the polkadot crypto utilities:"),(0,i.kt)(r.Z,{mdxType:"TsJsBlock"},a),(0,i.kt)("p",null,"With the challenge the server can construct the ",(0,i.kt)("inlineCode",{parentName:"p"},"request-credential")," message.\nThe request is sent to the light DID (",(0,i.kt)("inlineCode",{parentName:"p"},"claimerSessionDid"),") that is used to encrypt the messages (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/dApp/session"},"Session")," for more information)."),(0,i.kt)("p",null,"  {CreateRequestCredentialMessage}"),(0,i.kt)("admonition",{title:"Privacy",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The credential itself doesn't need to be issued to this DID since the light DID is only used to encrypt the messages.\nWe don't use the full DID of the claimer to establish the encrypted communication, so that the claimer first can ensure the origin of the ",(0,i.kt)("inlineCode",{parentName:"p"},"request-credential")," message.")),(0,i.kt)("p",null,"After the server has built the message object, it must encrypt the message for the claimer.\nOnce the message is encrypted the server can pass on the message to the extension."),(0,i.kt)("p",null,"  {EncryptRequestCredentialMessage}"),(0,i.kt)("h2",{id:"verify-the-presentation"},"Verify the Presentation"),(0,i.kt)("p",null,"After sending the ",(0,i.kt)("inlineCode",{parentName:"p"},"request-credential")," message to the extension, the verifier listens for a message of type ",(0,i.kt)("inlineCode",{parentName:"p"},"submit-credential")," in response."),(0,i.kt)("p",null,"After the response from the extension is received, forwarded to the server and decrypted, the verifier must check that it has the expected CType and that it contains a valid credential.\nSince everyone can run an attestation service, you need to make sure that you also verify that the attester is trusted."),(0,i.kt)("p",null,"  {DecryptCredentialMessage}"),(0,i.kt)("p",null,"That's it! Your verifier has successfully requested and verified a credential."))}m.isMDXComponent=!0}}]);