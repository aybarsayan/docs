(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1040],{25380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=25380,e.exports=t},51909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var n=i(87462),o=i(67294),d=i(52263),a=i(73945),s=i(28182),l=i(12175),r=i(65488),c=i(85162),u=i(90814);const p=e=>{let{children:t,fileName:i,...p}=e;const m=t,{code:D}=(0,l.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:h}}}=(0,d.Z)(),k=(0,a.format)(D,{parser:s.parsers.babel.parse,...h}),f=i?`${i}.ts`:void 0,b=i?`${i}.js`:void 0;return o.createElement(r.Z,{groupId:"ts-js-choice"},o.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(u.Z,(0,n.Z)({},p,{className:"language-ts",title:f}),m)),o.createElement(c.Z,{value:"js",label:"Javascript"},o.createElement(u.Z,(0,n.Z)({},p,{className:"language-js",title:b}),k)))}},73808:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(87462),o=(i(67294),i(3905)),d=i(51909);const a={id:"full-did-delete",title:"Delete a Full DID"},s=void 0,l={unversionedId:"develop/sdk/cookbook/dids/full-did-delete",id:"develop/sdk/cookbook/dids/full-did-delete",title:"Delete a Full DID",description:"Once a DID is no longer needed, it is recommended to deactivate it by removing it from the KILT blockchain.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/07_full_did_delete.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/full-did-delete",permalink:"/docs/develop/sdk/cookbook/dids/full-did-delete",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/07_full_did_delete.md",tags:[],version:"current",lastUpdatedAt:1667486117,formattedLastUpdatedAt:"Nov 3, 2022",sidebarPosition:7,frontMatter:{id:"full-did-delete",title:"Delete a Full DID"},sidebar:"sdk",previous:{title:"Generate and Verify a DID Signature",permalink:"/docs/develop/sdk/cookbook/dids/did-signature"},next:{title:"Claim a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-claim"}},r={},c=[{value:"Claim back a DID deposit",id:"claim-back-a-did-deposit",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once a DID is no longer needed, it is recommended to deactivate it by removing it from the KILT blockchain.\nThe following snippet shows how to do it:"),(0,o.kt)(d.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function deleteFullDid(\n  submitterAccount: Kilt.KiltKeyringPair,\n  fullDid: Kilt.DidUri,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Create a DID deletion tx. We specify the number of endpoints currently stored under the DID because\n  // of the upper computation limit required by the blockchain runtime.\n  const didIdentifier = Kilt.Did.toChain(fullDid)\n  const endpointsCountForDid = await api.query.did.didEndpointsCount(\n    didIdentifier\n  )\n  const didDeletionExtrinsic = api.tx.did.delete(endpointsCountForDid)\n\n  // Sign the DID deletion tx using the DID authentication key.\n  // This results in a DID-signed tx that can be then signed and submitted to the KILT blockchain by the account\n  // authorized in this operation, Alice in this case.\n  const didSignedDeletionExtrinsic = await Kilt.Did.authorizeTx(\n    fullDid,\n    didDeletionExtrinsic,\n    signCallback,\n    submitterAccount.address\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(\n    didSignedDeletionExtrinsic,\n    submitterAccount\n  )\n}\n"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Please note that once deleted, a full DID becomes unusable and cannot be re-created anymore.\nThis means that all credentials obtained with that DID are no longer valid and must be obtained with a different DID if needed.")),(0,o.kt)("h2",{id:"claim-back-a-did-deposit"},"Claim back a DID deposit"),(0,o.kt)("p",null,"Claiming back the deposit of a DID is semantically equivalent to deactivating and deleting the DID, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require a signature by the DID subject:"),(0,o.kt)(d.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function reclaimFullDidDeposit(\n  depositPayerAccount: Kilt.KiltKeyringPair,\n  fullDid: Kilt.DidUri\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the tx to claim the deposit back.\n  // It includes the DID identifier for which the deposit needs to be returned\n  // and the count of service endpoints to provide an upper bound to the computation of the tx execution.\n  const identifier = Kilt.Did.toChain(fullDid)\n  const endpointsCountForDid = await api.query.did.didEndpointsCount(identifier)\n  const depositClaimExtrinsic = api.tx.did.reclaimDeposit(\n    identifier,\n    endpointsCountForDid\n  )\n\n  // The submission will fail if `depositPayerAccount` is not the owner of the deposit associated with the given DID identifier.\n  await Kilt.Blockchain.signAndSubmitTx(\n    depositClaimExtrinsic,\n    depositPayerAccount\n  )\n}\n"))}p.isMDXComponent=!0}}]);