(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3081],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},6793:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(7294),a=n(6823);const o=e=>{let{children:t,funcName:n="main",funcEnd:o="}",snippets:r,leadingSpaces:s=2,...l}=e;const d=t.split(/\r?\n/);let c="";if(r)c=JSON.parse(r).map((e=>Array.isArray(e)?d.slice(e[0],e[1]).map((e=>e.slice(s))).join("\n"):e)).join("\n");else if(n){let e,t;for(let i=0;i<d.length;i++)if(d[i].includes(n)){if(e=i,d[i].includes(" {"))break}else if(d[i].includes(" {")&&void 0!==e){e=i;break}for(let n=d.length-1;n>0;n--)if(d[n].includes(o)){t=n;break}c=d.slice(e+1,t).map((e=>e.slice(s))).join("\n")}return i.createElement(a.Z,l,c)}},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(7462),a=n(7294),o=n(2263),r=n(3945),s=n(8182),l=n(2175),d=n(5488),c=n(5162),p=n(6823);const u=e=>{let{children:t,fileName:n,...u}=e;const m=t,{code:h}=(0,l.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,o.Z)(),f=(0,r.format)(h,{parser:s.parsers.babel.parse,...k}),g=n?`${n}.ts`:void 0,y=n?`${n}.js`:void 0;return a.createElement(d.Z,{groupId:"ts-js-choice"},a.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(p.Z,(0,i.Z)({},u,{className:"language-ts",title:g}),m)),a.createElement(c.Z,{value:"js",label:"Javascript"},a.createElement(p.Z,(0,i.Z)({},u,{className:"language-js",title:y}),f)))}},9747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(7462),a=n(7294),o=n(2263),r=n(3945),s=n(8182),l=n(2175),d=n(5488),c=n(5162),p=n(6793);const u=e=>{let{children:t,fileName:n,...u}=e;const m=t,{code:h}=(0,l.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,o.Z)(),f=(0,r.format)(h,{parser:s.parsers.babel.parse,...k}),g=n?`${n}.ts`:void 0,y=n?`${n}.js`:void 0;return a.createElement(d.Z,{groupId:"ts-js-choice"},a.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(p.Z,(0,i.Z)({},u,{className:"language-ts",title:g}),m)),a.createElement(c.Z,{value:"js",label:"Javascript"},a.createElement(p.Z,(0,i.Z)({},u,{className:"language-js",title:y}),f)))}},1558:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var i=n(7462),a=(n(7294),n(3905)),o=n(9747),r=n(1909);const s={id:"well-known-did-config",title:"Well-Known DID Configuration"},l=void 0,d={unversionedId:"develop/dApp/well-known-did-config",id:"develop/dApp/well-known-did-config",title:"Well-Known DID Configuration",description:"The KILT support of the Well-Known DID Configuration uses unpublished specifications and will change in the future.",source:"@site/docs/develop/07_dApp/02_well-known-did-config.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/well-known-did-config",permalink:"/docs/develop/dApp/well-known-did-config",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/02_well-known-did-config.md",tags:[],version:"current",lastUpdatedAt:1676622467,formattedLastUpdatedAt:"Feb 17, 2023",sidebarPosition:2,frontMatter:{id:"well-known-did-config",title:"Well-Known DID Configuration"},sidebar:"dApp",previous:{title:"Overview",permalink:"/docs/develop/dApp/welcome"},next:{title:"Setting Up the Communication Session",permalink:"/docs/develop/dApp/session"}},c={},p=[{value:"Set up the Well-Known DID Configuration",id:"set-up-the-well-known-did-configuration",level:2},{value:"Create a DID",id:"create-a-did",level:3},{value:"Making the claim",id:"making-the-claim",level:3},{value:"Self-attesting the credential",id:"self-attesting-the-credential",level:3},{value:"Presenting the credential",id:"presenting-the-credential",level:3},{value:"Host the Presentation",id:"host-the-presentation",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"This is a working draft",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The KILT support of the ",(0,a.kt)("em",{parentName:"p"},"Well-Known DID Configuration")," uses unpublished specifications and will change in the future.")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Well-Known DID Configuration")," is implemented as a security measure when setting up the communication session between the dapp and extension.\nIt ensures that the DID the browser extension is communicating to is linked to the domain that is visited by the browser.\nThis rule is currently enforced by the KILT Wallet reference implementation (Sporran Extension), but might be relaxed in the future.\nThe implementation is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/.well-known/resources/did-configuration/"},(0,a.kt)("em",{parentName:"a"},"Well-Known DID Configuration"))," specified by the Decentralized Identity Foundation."),(0,a.kt)("p",null,"Once a communication session between a dapp and an extension is opened, the extension will query ",(0,a.kt)("inlineCode",{parentName:"p"},"<domain-name>/.well-known/did-configuration.json"),".\nThis JSON-file must contain a credential presentation that conforms to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/ctype-index/tree/main/ctypes/0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643"},"Domain Linkage CType"),"."),(0,a.kt)("h2",{id:"set-up-the-well-known-did-configuration"},"Set up the Well-Known DID Configuration"),(0,a.kt)("p",null,"For the ",(0,a.kt)("em",{parentName:"p"},"Well-Known DID Configuration")," you need to go through the following steps:"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},"Create a full DID",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You will need the ",(0,a.kt)("inlineCode",{parentName:"li"},"assertionMethodKey")," a.k.a. ",(0,a.kt)("inlineCode",{parentName:"li"},"attestationKey")," for signing the credential"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"authenticationKey")," is required for signing the transaction"))),(0,a.kt)("li",{parentName:"ol"},"Create a claim"),(0,a.kt)("li",{parentName:"ol"},"Attest the claim"),(0,a.kt)("li",{parentName:"ol"},"Create a presentation"),(0,a.kt)("li",{parentName:"ol"},"Host the presentation on your website at ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<your domain>/.well-known/did-configuration.json"))),(0,a.kt)("h3",{id:"create-a-did"},"Create a DID"),(0,a.kt)("p",null,"Your dapp needs a DID to identify itself to the extension.\nIf your dapp does not have a DID yet, follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/full-did-creation"},(0,a.kt)("em",{parentName:"a"},"create a full DID")," guide"),".\nMake sure to create the DID with an ",(0,a.kt)("inlineCode",{parentName:"p"},"assertionMethodKey")," so that you are able to issue attestations."),(0,a.kt)("h3",{id:"making-the-claim"},"Making the claim"),(0,a.kt)("p",null,"After you get a DID, you can make a claim about that DID.\nThe claim has to be based on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/ctype-index/tree/main/ctypes/0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643"},"Domain Linkage CType"),":"),(0,a.kt)(r.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport const domainLinkageCType: Kilt.ICType = {\n  $id: 'kilt:ctype:0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643',\n  $schema: 'http://kilt-protocol.org/draft-01/ctype#',\n  title: 'Domain Linkage Credential',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    origin: {\n      type: 'string'\n    }\n  },\n  type: 'object'\n}\n"),(0,a.kt)("p",null,"The credential is built from the CType, claim contents, and your dapp's unique DID:"),(0,a.kt)(o.Z,{funcEnd:"return",mdxType:"TsJsSnippet"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport type Parameter = {\n  domainLinkageCType: Kilt.ICType\n  didUri: Kilt.DidUri\n}\n\nexport function main({ domainLinkageCType, didUri }: Parameter) {\n  const claimContents: Kilt.IClaimContents = {\n    id: didUri,\n    origin: 'https://example.com'\n  }\n\n  const claim = Kilt.Claim.fromCTypeAndClaimContents(\n    domainLinkageCType,\n    claimContents,\n    didUri\n  )\n  const domainLinkageCredential = Kilt.Credential.fromClaim(claim)\n\n  return { domainLinkageCredential }\n}\n"),(0,a.kt)("p",null,"The credential isn't attested yet and is therefore not valid yet."),(0,a.kt)("h3",{id:"self-attesting-the-credential"},"Self-attesting the credential"),(0,a.kt)("p",null,"A valid credential requires an attestation.\nSince the website wants to link itself to the DID just created, it has to self-attest the domain linkage credential, i.e., write the credential attestation on chain using the same DID it is trying to link to."),(0,a.kt)("p",null,"In order to attest the credential we go through the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"calculating the claim hash"),(0,a.kt)("li",{parentName:"ol"},"creating the attest transaction"),(0,a.kt)("li",{parentName:"ol"},"authorizing the transaction with your DID"),(0,a.kt)("li",{parentName:"ol"},"paying for the transaction with a KILT account and submitting it to the chain")),(0,a.kt)(o.Z,{funcEnd:"return",mdxType:"TsJsSnippet"},"import type { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport type Parameter = {\n  api: ApiPromise\n  didUri: Kilt.DidUri\n  dappAccount: Kilt.KiltKeyringPair\n  assertionMethodKey: Kilt.KiltKeyringPair\n  domainLinkageCredential: Kilt.ICredential\n}\n\nexport async function main({\n  api,\n  didUri,\n  dappAccount,\n  assertionMethodKey,\n  domainLinkageCredential\n}: Parameter) {\n  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(\n    domainLinkageCredential,\n    didUri\n  )\n  const attestationTx = api.tx.attestation.add(claimHash, cTypeHash, null)\n\n  // We authorize the call using the attestation key of the Dapps DID.\n  const submitTx = await Kilt.Did.authorizeTx(\n    didUri,\n    attestationTx,\n    async ({ data }) => ({\n      signature: assertionMethodKey.sign(data),\n      keyType: assertionMethodKey.type\n    }),\n    dappAccount.address\n  )\n\n  // Since DIDs can not hold any balance, we pay for the transaction using our blockchain account\n  const result = await Kilt.Blockchain.signAndSubmitTx(submitTx, dappAccount)\n\n  if (result.isError) {\n    console.log('Attestation failed')\n  } else {\n    console.log('Attestation successful')\n  }\n  return result\n}\n"),(0,a.kt)("p",null,"If you want to learn more about attestations you can refer to our ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/credentials/attestation"},"concept guide")," or the ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/claiming/attestation-creation"},"cookbook"),"."),(0,a.kt)("h3",{id:"presenting-the-credential"},"Presenting the credential"),(0,a.kt)("p",null,"To use the newly attested credential, we need to derive a presentation from it to host on the dapp website."),(0,a.kt)(o.Z,{funcEnd:"return",mdxType:"TsJsSnippet"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport type Parameter = {\n  didUri: Kilt.DidUri\n  assertionMethodKey: Kilt.KiltKeyringPair\n  domainLinkageCredential: Kilt.ICredential\n}\n\nexport async function main({\n  didUri,\n  assertionMethodKey,\n  domainLinkageCredential\n}: Parameter) {\n  // We need the KeyId of the AssertionMethod Key. There is only\n  // one AssertionMethodKey and its id is stored on the blockchain.\n  const didResolveResult = await Kilt.Did.resolve(didUri)\n  if (typeof didResolveResult.document === 'undefined') {\n    throw new Error('DID must be resolvable (i.e. not deleted)')\n  }\n  const assertionMethodKeyId = didResolveResult.document.assertionMethod[0].id\n\n  const domainLinkagePresentation = await Kilt.Credential.createPresentation({\n    credential: domainLinkageCredential,\n    signCallback: async ({ data }) => ({\n      signature: assertionMethodKey.sign(data),\n      keyType: assertionMethodKey.type,\n      keyUri: `${didUri}${assertionMethodKeyId}`\n    })\n  })\n\n  return { domainLinkagePresentation }\n}\n"),(0,a.kt)("p",null,"The Well-Known DID Configuration specification requires a verifiable credential.\nFor now we have to manually convert our KILT credential into the required format."),(0,a.kt)(o.Z,{funcEnd:"return",mdxType:"TsJsSnippet"},"import type { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport type Parameter = {\n  api: ApiPromise\n  domainLinkagePresentation: Kilt.ICredentialPresentation\n}\n\nexport async function main({ api, domainLinkagePresentation }: Parameter) {\n  const credentialSubject = {\n    ...domainLinkagePresentation.claim.contents,\n    rootHash: domainLinkagePresentation.rootHash\n  }\n\n  const encodedAttestationDetails = await api.query.attestation.attestations(\n    domainLinkagePresentation.rootHash\n  )\n  const issuer = Kilt.Attestation.fromChain(\n    encodedAttestationDetails,\n    domainLinkagePresentation.claim.cTypeHash\n  ).owner\n\n  const issuanceDate = new Date().toISOString()\n\n  const claimerSignature = domainLinkagePresentation.claimerSignature\n  if (!claimerSignature) {\n    throw new Error('Claimer signature is required.')\n  }\n\n  const proof = {\n    type: 'KILTSelfSigned2020',\n    proofPurpose: 'assertionMethod',\n    verificationMethod: claimerSignature.keyUri,\n    signature: claimerSignature.signature,\n    challenge: claimerSignature.challenge\n  }\n\n  const wellKnownDidconfig = {\n    '@context': 'https://identity.foundation/.well-known/did-configuration/v1',\n    linked_dids: [\n      {\n        '@context': [\n          'https://www.w3.org/2018/credentials/v1',\n          'https://identity.foundation/.well-known/did-configuration/v1'\n        ],\n        issuer,\n        issuanceDate,\n        type: [\n          'VerifiableCredential',\n          'DomainLinkageCredential',\n          'KiltCredential2020'\n        ],\n        credentialSubject,\n        proof\n      }\n    ]\n  }\n\n  return wellKnownDidconfig\n}\n"),(0,a.kt)("h3",{id:"host-the-presentation"},"Host the Presentation"),(0,a.kt)("p",null,"Now that you generated a presentation, you need to host it in your web app, so that the extension can query the presentation.\nThe extension will make an HTTP GET request to the following URI, and your dapp must respond with the presentation."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/.well-known/did-configuration.json")),(0,a.kt)("p",null,"How the file is hosted depends on your project setup and is out of scope for this guide."))}m.isMDXComponent=!0}}]);