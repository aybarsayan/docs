(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8094],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var n=i(7462),a=i(7294),o=i(2263),r=i(3945),l=i(8182),s=i(2175),d=i(5488),c=i(5162),u=i(6823);const p=e=>{let{children:t,fileName:i,...p}=e;const m=t,{code:h}=(0,s.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,o.Z)(),b=(0,r.format)(h,{parser:l.parsers.babel.parse,...k}),v=i?`${i}.ts`:void 0,f=i?`${i}.js`:void 0;return a.createElement(d.Z,{groupId:"ts-js-choice"},a.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(u.Z,(0,n.Z)({},p,{className:"language-ts",title:v}),m)),a.createElement(c.Z,{value:"js",label:"Javascript"},a.createElement(u.Z,(0,n.Z)({},p,{className:"language-js",title:f}),b)))}},3143:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(7462),a=(i(7294),i(3905)),o=i(1909);const r={id:"public-credential-revocation",title:"Revoke (and remove) Public Credentials"},l=void 0,s={unversionedId:"develop/sdk/cookbook/public_credentials/public-credential-revocation",id:"develop/sdk/cookbook/public_credentials/public-credential-revocation",title:"Revoke (and remove) Public Credentials",description:"Depending on the use cases, some credentials, as with any other type of credential, might need to be temporarily or permanently revoked.",source:"@site/docs/develop/01_sdk/02_cookbook/05_public_credentials/03_credential_revocation.md",sourceDirName:"develop/01_sdk/02_cookbook/05_public_credentials",slug:"/develop/sdk/cookbook/public_credentials/public-credential-revocation",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-revocation",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/05_public_credentials/03_credential_revocation.md",tags:[],version:"current",lastUpdatedAt:1681216738,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:3,frontMatter:{id:"public-credential-revocation",title:"Revoke (and remove) Public Credentials"},sidebar:"sdk",previous:{title:"Retrieve Public Credentials",permalink:"/docs/develop/sdk/cookbook/public_credentials/public-credential-retrieval"},next:{title:"Generate a Message",permalink:"/docs/develop/sdk/cookbook/messaging/messaging_book"}},d={},c=[{value:"Revoke and Remove a Credential",id:"revoke-and-remove-a-credential",level:2},{value:"Unrevoke a Credential",id:"unrevoke-a-credential",level:2},{value:"Reclaim the Deposit for a Credential",id:"reclaim-the-deposit-for-a-credential",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Depending on the use cases, some credentials, as with any other type of credential, might need to be temporarily or permanently revoked."),(0,a.kt)("p",null,"The KILT SDK provides different features depending on the needs of the use case."),(0,a.kt)("h2",{id:"revoke-and-remove-a-credential"},"Revoke and Remove a Credential"),(0,a.kt)("p",null,"As we have seen for ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/public_credentials/public-credential-retrieval"},"public credential retrieval"),", a credential identifier is sufficient to perform most operations on public credentials.\nThis is true also for revocation and removal."),(0,a.kt)("p",null,"Some use cases might need a revoked credential to remain on chain and marked as revoked, while other use cases might combine together revocation and removal, removing a credential whenever it is to be marked as revoked, fulfilling the same goal of marking the credential as invalid."),(0,a.kt)("p",null,"In the former case, the deposit taken at the time when the credential is created is not returned, since the credential is still on chain.\nIn the latter case, all information about the information is cleared, hence the deposit is returned to its original payer."),(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function revokeCredentialById(\n  attester: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback,\n  credentialId: Kilt.IPublicCredential['id'],\n  shouldRemove = false\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const tx = shouldRemove\n    ? api.tx.publicCredentials.remove(credentialId, null)\n    : api.tx.publicCredentials.revoke(credentialId, null)\n\n  // Same as for traditional KILT credentials\n  const authorizedAttestationTx = await Kilt.Did.authorizeTx(\n    attester,\n    tx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAttestationTx,\n    submitterAccount\n  )\n}\n"),(0,a.kt)("p",null,"Because a credential identifier can also be calculated starting from the credential itself and the information about its attester, it is also possible to revoke (and optionally remove) a credential given the credential itself."),(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function revokeCredential(\n  attester: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback,\n  credential: Kilt.IPublicCredentialInput,\n  shouldRemove = false\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const credentialId = Kilt.PublicCredential.getIdForCredential(\n    credential,\n    attester\n  )\n  const tx = shouldRemove\n    ? api.tx.publicCredentials.remove(credentialId, null)\n    : api.tx.publicCredentials.revoke(credentialId, null)\n\n  // Same as for traditional KILT credentials\n  const authorizedAttestationTx = await Kilt.Did.authorizeTx(\n    attester,\n    tx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAttestationTx,\n    submitterAccount\n  )\n}\n"),(0,a.kt)("h2",{id:"unrevoke-a-credential"},"Unrevoke a Credential"),(0,a.kt)("p",null,"For public credentials that have been revoked but not removed from chain, it is possible to un-revoke them, making them valid again."),(0,a.kt)("p",null,'For instance, a driving license can be marked as "suspended" for three years, without being completely invalidated.\nAt the end of the suspension period, it is enabled again by being unrevoked.'),(0,a.kt)("p",null,"As for revocation, both the credential ID and the whole credential can be used, since the SDK provides the primitives to always obtain the former from the latter, but here we show how the whole credential can be used to generate and submit an un-revocation transaction."),(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function unrevokeCredential(\n  attester: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback,\n  credential: Kilt.IPublicCredentialInput\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const credentialId = Kilt.PublicCredential.getIdForCredential(\n    credential,\n    attester\n  )\n  const tx = api.tx.publicCredentials.unrevoke(credentialId, null)\n\n  const authorizedAttestationTx = await Kilt.Did.authorizeTx(\n    attester,\n    tx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAttestationTx,\n    submitterAccount\n  )\n}\n"),(0,a.kt)("h2",{id:"reclaim-the-deposit-for-a-credential"},"Reclaim the Deposit for a Credential"),(0,a.kt)("p",null,"All the operations mentioned so far, always require the participation of the public credential attester, who must use their assertion key to sign all operations before they are submitted to the KILT blockchain."),(0,a.kt)("p",null,"The only operation that can be submitted directly by someone else, as with other places in the SDK, is the transaction to remove a credential and obtain the initial deposit."),(0,a.kt)("p",null,"This is, technically speaking, a different operation compared to the one to remove a credential, albeit the two yield the same result: all traces of the credential are removed from the chain and the deposit is returned to its payer.\nThe difference between the two is about who is authorized to perform the operation: while credential removal requires a DID signature by the original credential creator (a.k.a. issuer), the deposit claiming operation requires a regular transaction signature by the KILT account that paid the original deposit, with no involvement of the original attester."),(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function reclaimDeposit(\n  submitterAddress: Kilt.KiltKeyringPair,\n  credential: Kilt.IPublicCredential\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the tx to claim the deposit back.\n  const credentialId = Kilt.PublicCredential.getIdForCredential(\n    credential,\n    credential.attester\n  )\n  const depositReclaimTx = api.tx.publicCredentials.reclaimDeposit(credentialId)\n\n  // Submit the revocation tx to the KILT blockchain.\n  await Kilt.Blockchain.signAndSubmitTx(depositReclaimTx, submitterAddress)\n}\n"))}p.isMDXComponent=!0}}]);