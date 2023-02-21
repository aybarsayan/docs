(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8275],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var d=i(7462),n=i(7294),o=i(2263),a=i(3945),s=i(8182),l=i(2175),c=i(5488),r=i(5162),u=i(6823);const p=e=>{let{children:t,fileName:i,...p}=e;const h=t,{code:k}=(0,l.transform)(h,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:m}}}=(0,o.Z)(),D=(0,a.format)(k,{parser:s.parsers.babel.parse,...m}),f=i?`${i}.ts`:void 0,b=i?`${i}.js`:void 0;return n.createElement(c.Z,{groupId:"ts-js-choice"},n.createElement(r.Z,{value:"ts",label:"Typescript",default:!0},n.createElement(u.Z,(0,d.Z)({},p,{className:"language-ts",title:f}),h)),n.createElement(r.Z,{value:"js",label:"Javascript"},n.createElement(u.Z,(0,d.Z)({},p,{className:"language-js",title:b}),D)))}},5917:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var d=i(7462),n=(i(7294),i(3905)),o=i(1909);const a={id:"full-did-update",title:"Update a Full DID"},s=void 0,l={unversionedId:"develop/sdk/cookbook/dids/full-did-update",id:"develop/sdk/cookbook/dids/full-did-update",title:"Update a Full DID",description:"Once anchored to the KILT blockchain, a full DID can be updated.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/03_full_did_update.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/full-did-update",permalink:"/docs/develop/sdk/cookbook/dids/full-did-update",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/03_full_did_update.md",tags:[],version:"current",lastUpdatedAt:1673884454,formattedLastUpdatedAt:"Jan 16, 2023",sidebarPosition:3,frontMatter:{id:"full-did-update",title:"Update a Full DID"},sidebar:"sdk",previous:{title:"Create a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-creation"},next:{title:"Resolve a DID",permalink:"/docs/develop/sdk/cookbook/dids/did-query"}},c={},r=[],u={toc:r};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,d.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Once anchored to the KILT blockchain, a full DID can be updated.\nFor instance, the following snippet shows how to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"authorizeBatch")," function to update the authentication key ",(0,n.kt)("em",{parentName:"p"},"and")," remove a service endpoint for a full DID in the same transaction."),(0,n.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function updateFullDid(\n  newAuthKeypair: Kilt.KiltKeyringPair,\n  fullDid: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.DidDocument> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Create the tx to update the authentication key.\n  const didKeyUpdateTx = api.tx.did.setAuthenticationKey(\n    Kilt.Did.publicKeyToChain(newAuthKeypair)\n  )\n  // Create the tx to remove the service with ID `#my-service`.\n  const didServiceRemoveTx = api.tx.did.removeServiceEndpoint(\n    Kilt.Did.resourceIdToChain('#my-service')\n  )\n\n  // Create and sign the DID operation that contains the two (unsigned) txs.\n  // This results in a DID-signed tx that can be then signed and submitted to the KILT blockchain by the account\n  // authorized in this operation, Alice in this case.\n  const authorizedBatchedTxs = await Kilt.Did.authorizeBatch({\n    batchFunction: api.tx.utility.batchAll,\n    did: fullDid,\n    extrinsics: [didKeyUpdateTx, didServiceRemoveTx],\n    sign: signCallback,\n    submitter: submitterAccount.address\n  })\n\n  // Submit the DID update tx to the KILT blockchain after signing it with the authorized KILT account.\n  await Kilt.Blockchain.signAndSubmitTx(authorizedBatchedTxs, submitterAccount)\n\n  // Get the updated DID Document.\n  const encodedUpdatedDidDetails = await api.call.did.query(\n    Kilt.Did.toChain(fullDid)\n  )\n  return Kilt.Did.linkedInfoFromChain(encodedUpdatedDidDetails).document\n}\n"))}p.isMDXComponent=!0}}]);