(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2892],{5380:n=>{function t(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,n.exports=t},1909:(n,t,e)=>{"use strict";e.d(t,{Z:()=>u});var i=e(7462),o=e(7294),c=e(2263),a=e(3945),s=e(8182),r=e(2175),l=e(4866),d=e(5162),k=e(814);const u=n=>{let{children:t,fileName:e,...u}=n;const p=t,{code:m}=(0,r.transform)(p,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:g}}}=(0,c.Z)(),h=(0,a.format)(m,{parser:s.parsers.babel.parse,...g}),b=e?`${e}.ts`:void 0,y=e?`${e}.js`:void 0;return o.createElement(l.Z,{groupId:"ts-js-choice"},o.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(k.Z,(0,i.Z)({},u,{className:"language-ts",title:b}),p)),o.createElement(d.Z,{value:"js",label:"Javascript"},o.createElement(k.Z,(0,i.Z)({},u,{className:"language-js",title:y}),h)))}},4162:(n,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>k,toc:()=>p});var i=e(7462),o=(e(7294),e(3905)),c=e(1909);const a="import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function unlinkAccountFromDid(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  linkedAccountAddress: KeyringPair['address'],\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // The DID owner removes the link between itself and the specified account.\n  const accountUnlinkTx = api.tx.didLookup.removeAccountAssociation({\n    AccountId32: linkedAccountAddress\n  })\n  const authorizedAccountUnlinkTx = await Kilt.Did.authorizeTx(\n    did,\n    accountUnlinkTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountUnlinkTx,\n    submitterAccount\n  )\n}\n",s="import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function unlinkDidFromAccount(\n  linkOwnerAccount: KeyringPair\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // The tx does not need to be authorized by a DID, but the submitter account removes its own link.\n  const accountUnlinkTx = api.tx.didLookup.removeSenderAssociation()\n\n  await Kilt.Blockchain.signAndSubmitTx(accountUnlinkTx, linkOwnerAccount)\n}\n",r="import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function reclaimLinkDeposit(\n  submitterAddress: KeyringPair,\n  linkedAccountAddress: KeyringPair['address']\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // The tx does not need to be authorized by a DID, but the deposit payer's account claims the deposit and removes the link.\n  const accountUnlinkTx = api.tx.didLookup.reclaimDeposit({\n    AccountId32: linkedAccountAddress\n  })\n\n  await Kilt.Blockchain.signAndSubmitTx(accountUnlinkTx, submitterAddress)\n}\n",l={id:"account-unlink",title:"Unlink an Account From a KILT DID"},d=void 0,k={unversionedId:"develop/sdk/cookbook/account_linking/account-unlink",id:"develop/sdk/cookbook/account_linking/account-unlink",title:"Unlink an Account From a KILT DID",description:"Similar to the way a new account  DID link is created, removing a link can happen in one of three ways:",source:"@site/docs/develop/01_sdk/02_cookbook/03_account_linking/03_unlink.md",sourceDirName:"develop/01_sdk/02_cookbook/03_account_linking",slug:"/develop/sdk/cookbook/account_linking/account-unlink",permalink:"/docs/develop/sdk/cookbook/account_linking/account-unlink",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/03_account_linking/03_unlink.md",tags:[],version:"current",lastUpdatedAt:1686579556,formattedLastUpdatedAt:"Jun 12, 2023",sidebarPosition:3,frontMatter:{id:"account-unlink",title:"Unlink an Account From a KILT DID"},sidebar:"sdk",previous:{title:"Query the web3name of an Account",permalink:"/docs/develop/sdk/cookbook/account_linking/account-name"},next:{title:"Create a CType",permalink:"/docs/develop/sdk/cookbook/claiming/ctype-creation"}},u={},p=[],m={toc:p},g="wrapper";function h(n){let{components:t,...e}=n;return(0,o.kt)(g,(0,i.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Similar to the way a new account <-> DID link is created, removing a link can happen in one of three ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The DID owner submits a transaction indicating which account to unlink:")),(0,o.kt)(c.Z,{mdxType:"TsJsBlock"},a),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"The linked account submits a transaction indicating that the link with the DID should be removed:")),(0,o.kt)(c.Z,{mdxType:"TsJsBlock"},s),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"The deposit payer submits a transaction indicating that they want to reclaim their deposit, which in turn removes the existing link between the specified account and DID:")),(0,o.kt)(c.Z,{mdxType:"TsJsBlock"},r))}h.isMDXComponent=!0}}]);