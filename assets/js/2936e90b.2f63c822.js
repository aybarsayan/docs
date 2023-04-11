(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[678],{5380:n=>{function t(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,n.exports=t},1909:(n,t,e)=>{"use strict";e.d(t,{Z:()=>h});var i=e(7462),a=e(7294),o=e(2263),c=e(3945),s=e(8182),l=e(2175),r=e(5488),d=e(5162),u=e(6823);const h=n=>{let{children:t,fileName:e,...h}=n;const k=t,{code:g}=(0,l.transform)(k,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:p}}}=(0,o.Z)(),m=(0,c.format)(g,{parser:s.parsers.babel.parse,...p}),b=e?`${e}.ts`:void 0,T=e?`${e}.js`:void 0;return a.createElement(r.Z,{groupId:"ts-js-choice"},a.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(u.Z,(0,i.Z)({},h,{className:"language-ts",title:b}),k)),a.createElement(d.Z,{value:"js",label:"Javascript"},a.createElement(u.Z,(0,i.Z)({},h,{className:"language-js",title:T}),m)))}},4867:(n,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=e(7462),a=(e(7294),e(3905)),o=e(1909),c=e(5488),s=e(5162);const l={id:"account-link",title:"Link an Account to a KILT DID"},r=void 0,d={unversionedId:"develop/sdk/cookbook/account_linking/account-link",id:"develop/sdk/cookbook/account_linking/account-link",title:"Link an Account to a KILT DID",description:"Sometimes there is the need to link a DID to an account publicly.",source:"@site/docs/develop/01_sdk/02_cookbook/03_account_linking/01_link.md",sourceDirName:"develop/01_sdk/02_cookbook/03_account_linking",slug:"/develop/sdk/cookbook/account_linking/account-link",permalink:"/docs/develop/sdk/cookbook/account_linking/account-link",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/03_account_linking/01_link.md",tags:[],version:"current",lastUpdatedAt:1681216738,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:1,frontMatter:{id:"account-link",title:"Link an Account to a KILT DID"},sidebar:"sdk",previous:{title:"Release a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-release"},next:{title:"Query the web3name of an Account",permalink:"/docs/develop/sdk/cookbook/account_linking/account-name"}},u={},h=[{value:"Linking the sender to a DID",id:"linking-the-sender-to-a-did",level:2},{value:"Linking an account to a DID",id:"linking-an-account-to-a-did",level:2}],k={toc:h};function g(n){let{components:t,...e}=n;return(0,a.kt)("wrapper",(0,i.Z)({},k,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes there is the need to link a DID to an account publicly.\nThe link makes it possible to lookup a DID for an account.\nThe other directions is also possible.\nWith a DID you can lookup a list of linked account."),(0,a.kt)("p",null,"Linking accounts can be useful when your account should have an identity.\nE.g. as a collator, you might want to provide some public information so that delegator can better decide who earned their stake."),(0,a.kt)("p",null,"An account can be linked to a DID in one of two ways.\nEither the account that sends the transaction links itself to the DID, or the sender is unrelated to the DID and a third account is linked.\nIn the latter case, a challenge needs to be signed using the third account, to prove ownership."),(0,a.kt)("p",null,"The second option is useful in cases where the account that should be linked doesn't own KILT tokens and the transaction is paid for by a third party.\nThis option also allows to link account schemes that are not native to the Spiritnet Blockchain.\nRight now the only other address scheme supported are ethereum accounts."),(0,a.kt)("admonition",{title:"Don't use linked accounts for asset transfers",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Don't use these linked accounts for asset transfers.\nSince these accounts are not limited to KILT accounts, but can be used on any chain, the recipient might not be able to access the transferred asset on other chains.\nWhen a link to an account on a different Polkadot chain is created, this account might only be usable on this specific chain."),(0,a.kt)("p",{parentName:"admonition"},"If you want transfer assets to a DID have a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/spec-KiltTransferAssetRecipientV1"},"the asset transfer service endpoint"),".")),(0,a.kt)("h2",{id:"linking-the-sender-to-a-did"},"Linking the sender to a DID"),(0,a.kt)("p",null,"Link the sender of the transaction to the DID.\nThe sender will provide the deposit and pay the fees.\nThey will also be linked to the DID."),(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function linkDidToAccount(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Authorizing the tx with the full DID and submitting it with the provided account\n  // results in the submitter's account being linked to the DID authorizing the operation.\n  const accountLinkingTx = api.tx.didLookup.associateSender()\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n"),(0,a.kt)("h2",{id:"linking-an-account-to-a-did"},"Linking an account to a DID"),(0,a.kt)("p",null,"Link another account to the DID.\nThe sender will provide the deposit and pay the fees, but will not be linked to the DID in any way.\nThe account that should be linked must sign a challenge to prove that the account agrees to be linked."),(0,a.kt)("p",null,"The proof contains the DID that the account will be linked to and an expiration date (in terms of blocks), to prevent replay attacks.\nThe proof will only be valid up until the blocknumber is reached."),(0,a.kt)("p",null,"With this option you can link addresses that are supported by the Spiritnet blockchain (Sr25519, Ed25519, Ecdsa), but also ethereum addresses."),(0,a.kt)(c.Z,{defaultValue:"substrate-link",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"substrate-link",label:"Substrate",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function linkAccountToDid(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  linkedAccount: KeyringPair & { type: 'ed25519' | 'sr25519' | 'ecdsa' },\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the parameters for the extrinsic that links account and DID.\n  // This will contain the signature of the account that will be linked to the DID\n  // and therefore signals the agreement of the account to be linked.\n  const accountLinkingParameters = await Kilt.Did.associateAccountToChainArgs(\n    linkedAccount.address,\n    did,\n    async (payload) => linkedAccount.sign(payload)\n  )\n\n  // Afterwards we build the extrinsic using the parameters from above.\n  const accountLinkingTx = await api.tx.didLookup.associateAccount(\n    ...accountLinkingParameters\n  )\n\n  // Next the DID signs the extrinsic.\n  // This signals the agreement of the DID owner to be linked to the account.\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // finally we need to submit everything to the blockchain, so that the link gets\n  // registered.\n  // This account will provide the required deposit and pay the fees.\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n")),(0,a.kt)(s.Z,{value:"eth-link",label:"Ethereum (polkadot-js)",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function linkAccountToDid(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  linkedAccount: KeyringPair & { type: 'ethereum' },\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the parameters for the extrinsic that links account and DID.\n  // This will contain the signature of the account that will be linked to the DID\n  // and therefore signals the agreement of the account to be linked.\n  const accountLinkingParameters = await Kilt.Did.associateAccountToChainArgs(\n    linkedAccount.address,\n    did,\n    async (payload) => linkedAccount.sign(payload)\n  )\n\n  // Afterwards we build the extrinsic using the parameters from above.\n  const accountLinkingTx = await api.tx.didLookup.associateAccount(\n    ...accountLinkingParameters\n  )\n\n  // Next the DID signs the extrinsic.\n  // This signals the agreement of the DID owner to be linked to the account.\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // finally we need to submit everything to the blockchain, so that the link gets\n  // registered.\n  // This account will provide the required deposit and pay the fees.\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n")),(0,a.kt)(s.Z,{value:"eth-link-web3js",label:"Ethereum (web3.js)",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import { hexToU8a, u8aToString } from '@polkadot/util'\nimport Web3 from 'web3'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function linkAccountToDid(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  linkedAccountPrivateKey: string,\n  linkedAccountAddress: string,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n  const web3 = new Web3()\n\n  const blockNo = await api.query.system.number()\n  // the challenge will be valid for 300 blocks (~1h)\n  const validTill = blockNo.addn(300)\n\n  // We build the challenge that needs to be signed by the ethereum account\n  const challenge = u8aToString(\n    await Kilt.Did.getLinkingChallenge(did, validTill)\n  )\n\n  // sign the challenge\n  const signResult = await web3.eth.accounts.sign(\n    challenge,\n    linkedAccountPrivateKey\n  )\n\n  // build the arguments for the extrinsic that links ethereum account and DID\n  const accountLinkingParameters = await Kilt.Did.getLinkingArguments(\n    linkedAccountAddress,\n    validTill,\n    hexToU8a(signResult.signature),\n    'ethereum'\n  )\n\n  // Build the actual extrinsic\n  const accountLinkingTx = await api.tx.didLookup.associateAccount(\n    ...accountLinkingParameters\n  )\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // sign and submit the extrinsic to the blockchain\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n")),(0,a.kt)(s.Z,{value:"eth-link-metamask",label:"Ethereum (MetaMask)",mdxType:"TabItem"},"Refer to the ",(0,a.kt)("a",{href:"https://docs.metamask.io/guide/signing-data.html#personal-sign"},"Metamask documentation")," for further information.",(0,a.kt)(o.Z,{mdxType:"TsJsBlock"},"import { hexToU8a, u8aToString } from '@polkadot/util'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\ntype MetamaskApi = {\n  request: (_: {\n    method: string\n    params: [string, string, string]\n  }) => Promise<string>\n}\n\ndeclare global {\n  interface Window {\n    ethereum: MetamaskApi\n  }\n}\n\nexport async function linkAccountToDid(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  linkedAccountAddress: string,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const blockNo = await api.query.system.number()\n  // the challenge will be valid for 300 blocks (~1h)\n  const validTill = blockNo.addn(300)\n\n  // We build the challenge that needs to be signed by the ethereum account\n  const challenge = u8aToString(\n    await Kilt.Did.getLinkingChallenge(did, validTill)\n  )\n\n  // sign the challenge\n  const signature = await window.ethereum.request({\n    method: 'personal_sign',\n    params: [challenge, linkedAccountAddress, '']\n  })\n\n  // build the arguments for the extrinsic that links ethereum account and DID\n  const accountLinkingParameters = await Kilt.Did.getLinkingArguments(\n    linkedAccountAddress,\n    validTill,\n    hexToU8a(signature),\n    'ethereum'\n  )\n\n  // Build the actual extrinsic\n  const accountLinkingTx = await api.tx.didLookup.associateAccount(\n    ...accountLinkingParameters\n  )\n  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(\n    did,\n    accountLinkingTx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // sign and submit the extrinsic to the blockchain\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedAccountLinkingTx,\n    submitterAccount\n  )\n}\n"))))}g.isMDXComponent=!0}}]);