(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[779],{5380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5380,e.exports=t},1909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var o=n(7462),i=n(7294),a=n(2263),r=n(3945),s=n(8182),c=n(2175),p=n(4866),l=n(5162),d=n(814);const y=e=>{let{children:t,fileName:n,...y}=e;const m=t,{code:h}=(0,c.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,a.Z)(),u=(0,r.format)(h,{parser:s.parsers.babel.parse,...k}),T=n?`${n}.ts`:void 0,C=n?`${n}.js`:void 0;return i.createElement(p.Z,{groupId:"ts-js-choice"},i.createElement(l.Z,{value:"ts",label:"Typescript",default:!0},i.createElement(d.Z,(0,o.Z)({},y,{className:"language-ts",title:T}),m)),i.createElement(l.Z,{value:"js",label:"Javascript"},i.createElement(d.Z,(0,o.Z)({},y,{className:"language-js",title:C}),u)))}},1465:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>l,toc:()=>y});var o=n(7462),i=(n(7294),n(3905)),a=n(1909);const r="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createDriversLicenseCType(\n  creator: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback\n): Promise<Kilt.ICType> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Create a new CType definition.\n  const ctype = Kilt.CType.fromProperties(`Drivers License by ${creator}`, {\n    name: {\n      type: 'string'\n    },\n    age: {\n      type: 'integer'\n    },\n    id: {\n      type: 'string'\n    }\n  })\n\n  // Generate a creation tx.\n  const encodedCtype = Kilt.CType.toChain(ctype)\n  const ctypeCreationTx = api.tx.ctype.add(encodedCtype)\n  // Sign it with the right DID key.\n  const authorizedCtypeCreationTx = await Kilt.Did.authorizeTx(\n    creator,\n    ctypeCreationTx,\n    signCallback,\n    submitterAccount.address\n  )\n  // Submit the creation tx to the KILT blockchain\n  // using the KILT account specified in the creation operation.\n  await Kilt.Blockchain.signAndSubmitTx(\n    authorizedCtypeCreationTx,\n    submitterAccount\n  )\n\n  return ctype\n}\n",s="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function fetchCType(\n  ctypeId: Kilt.ICType['$id']\n): Promise<Kilt.CType.ICTypeDetails> {\n  // Example CType ID: kilt:ctype:0x329a2a5861ea63c250763e5e4c4d4a18fe4470a31e541365c7fb831e5432b940\n  return Kilt.CType.fetchFromChain(ctypeId)\n}\n",c={id:"ctype-creation",title:"Create a CType"},p=void 0,l={unversionedId:"develop/sdk/cookbook/claiming/ctype-creation",id:"develop/sdk/cookbook/claiming/ctype-creation",title:"Create a CType",description:"Every KILT credential has to conform to a CType.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/01_ctype_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/ctype-creation",permalink:"/docs/develop/sdk/cookbook/claiming/ctype-creation",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/01_ctype_creation.md",tags:[],version:"current",lastUpdatedAt:1684843281,formattedLastUpdatedAt:"May 23, 2023",sidebarPosition:1,frontMatter:{id:"ctype-creation",title:"Create a CType"},sidebar:"sdk",previous:{title:"Unlink an Account From a KILT DID",permalink:"/docs/develop/sdk/cookbook/account_linking/account-unlink"},next:{title:"Request an Attestation",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-request"}},d={},y=[{value:"Retrieve a CType from its ID",id:"retrieve-a-ctype-from-its-id",level:2}],m={toc:y},h="wrapper";function k(e){let{components:t,...c}=e;return(0,i.kt)(h,(0,o.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every KILT credential has to conform to a CType.\nA CType describes which properties a credential has and what type these properties have.\nCTypes must be registered on the Spiritnet blockchain.\nTo learn more about CTypes, see the ",(0,i.kt)("a",{target:"_blank",href:n(6502).Z},"CType concept section")),(0,i.kt)("p",null,"The creation of a CType in KILT involves two steps: the definition of a CType and the anchoring of its hash on the KILT blockchain."),(0,i.kt)("admonition",{title:"DID required",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The creator of a CType is required to have a full DID with an attestation key.\nTo see how to manage DIDs, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/full-did-update"},"DID section"),".")),(0,i.kt)("admonition",{title:"CTypes are unique",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The creation of a new CType requires the CType hash to be unique.\nBefore writing a new CType, Attesters should check whether there is already an existing CType which matches their requirements."),(0,i.kt)("p",{parentName:"admonition"},"Visit our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/ctype-index"},"CType index repository")," for a non-exhaustive list of existing CTypes.")),(0,i.kt)("p",null,"The following snippets show how to create a CType:"),(0,i.kt)(a.Z,{mdxType:"TsJsBlock"},r),(0,i.kt)("h2",{id:"retrieve-a-ctype-from-its-id"},"Retrieve a CType from its ID"),(0,i.kt)("p",null,"CTypes can be queried directly from any KILT archive nodes.\nThe following example shows how to query a CType using the SDK:"),(0,i.kt)(a.Z,{mdxType:"TsJsBlock"},s))}k.isMDXComponent=!0},6502:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/files/02_ctypes-e515bcb3ee2c97e25be615f542b0f1d7.md"}}]);