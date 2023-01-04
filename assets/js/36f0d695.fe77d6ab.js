(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1675],{25380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=25380,e.exports=t},51909:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var i=a(87462),n=a(67294),o=a(52263),s=a(73945),l=a(28182),r=a(12175),c=a(65488),d=a(85162),m=a(90814);const p=e=>{let{children:t,fileName:a,...p}=e;const b=t,{code:u}=(0,r.transform)(b,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,o.Z)(),w=(0,s.format)(u,{parser:l.parsers.babel.parse,...k}),f=a?`${a}.ts`:void 0,v=a?`${a}.js`:void 0;return n.createElement(c.Z,{groupId:"ts-js-choice"},n.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},n.createElement(m.Z,(0,i.Z)({},p,{className:"language-ts",title:f}),b)),n.createElement(d.Z,{value:"js",label:"Javascript"},n.createElement(m.Z,(0,i.Z)({},p,{className:"language-js",title:v}),w)))}},58837:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=a(87462),n=(a(67294),a(3905)),o=a(51909);const s={id:"web3name-claim",title:"Claim a web3name"},l=void 0,r={unversionedId:"develop/sdk/cookbook/web3names/web3name-claim",id:"develop/sdk/cookbook/web3names/web3name-claim",title:"Claim a web3name",description:"A web3name can be claimed if it currently has no owner, using the following snippet as reference.",source:"@site/docs/develop/01_sdk/02_cookbook/02_web3names/01_claim.md",sourceDirName:"develop/01_sdk/02_cookbook/02_web3names",slug:"/develop/sdk/cookbook/web3names/web3name-claim",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-claim",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/02_web3names/01_claim.md",tags:[],version:"current",lastUpdatedAt:1666946848,formattedLastUpdatedAt:"Oct 28, 2022",sidebarPosition:1,frontMatter:{id:"web3name-claim",title:"Claim a web3name"},sidebar:"sdk",previous:{title:"Delete a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-delete"},next:{title:"Query Public Credentials for a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/credential-query"}},c={},d=[],m={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A web3name can be claimed if it currently has no owner, using the following snippet as reference."),(0,n.kt)(o.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function claimWeb3Name(\n  did: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  name: Kilt.Did.Web3Name,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const web3NameClaimTx = api.tx.web3Names.claim(name)\n  const authorizedWeb3NameClaimTx = await Kilt.Did.authorizeTx(\n    did,\n    web3NameClaimTx,\n    signCallback,\n    submitterAccount.address\n  )\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedWeb3NameClaimTx,\n    submitterAccount\n  )\n}\n"),(0,n.kt)("p",null,"The claiming process requires the reservation of a deposit that is freed upon web3name release."),(0,n.kt)("p",null,"Once claimed, the web3name will start appearing whenever the DID of its owner is resolved, for instance via the ",(0,n.kt)("a",{parentName:"p",href:"https://dev.uniresolver.io/#did:kilt:4pZGzLSybfMsxB1DcpFNYmnqFv5QihbFb1zuSuuATqjRQv2g"},"Universal Resolver"),".\nFor more information about web3names and DIDs, see the official ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/spec-kilt-did/blob/main/README.md"},"KILT DID Specification"),"."))}p.isMDXComponent=!0}}]);