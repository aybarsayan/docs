"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[628],{6793:function(e,t,n){n(7294),n(1736)},1348:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(1736),s=(n(6793),["components"]),l={id:"ctype",title:"CType"},p=void 0,c={unversionedId:"sdk/workshop/attester/ctype",id:"sdk/workshop/attester/ctype",title:"CType",description:"A claim type (CType for short) is a KILT-specific term, but the concept is simple:",source:"@site/docs/sdk/1-workshop/03-attester/03-ctype.md",sourceDirName:"sdk/1-workshop/03-attester",slug:"/sdk/workshop/attester/ctype",permalink:"/docs/sdk/workshop/attester/ctype",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/03-attester/03-ctype.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"ctype",title:"CType"},sidebar:"sdk",previous:{title:"DID",permalink:"/docs/sdk/workshop/attester/did"},next:{title:"\ud83d\udc64 Claimer",permalink:"/docs/sdk/workshop/claimer/"}},d=[{value:"Create CType",id:"create-ctype",children:[],level:2},{value:"Get CType",id:"get-ctype",children:[],level:2},{value:"Run",id:"run",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A claim type (CType for short) is a KILT-specific term, but the concept is simple:\nA CType defines the structure of a claim.\nYou can think of it as the data model for your claim."),(0,i.kt)("p",null,"Before the ",(0,i.kt)("span",{class:"label-role attester"},"Attester")," can issue attestations, they need to decide which CType they support.\nA traffic authority will only issue drivers licenses (=> CType for drivers license) and not trade register excerpts.\nSince CTypes enable interoperability between attesters, it is highly recommended to use existing CTypes instead of creating new once.\nBut in this workshop we create our own CType."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"CType")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A CType ensures that a claim contains all required attributes.\nE.g. a drivers license has to contain a name, date of birth, the type of vehicle that can be driven by the claimer.\nThe CType is especially important since a verifier would request attestations for a specific CType (e.g. the traffic police wants to see your drivers license and not your gym membership)."),(0,i.kt)("p",{parentName:"div"},"If you want to learn more about CTypes take a look at our ",(0,i.kt)("a",{parentName:"p",href:"/docs/sdk/core-feature/ctypes"},"in depth CType documentation"),"."))),(0,i.kt)("p",null,"Creating CTypes requires an account and a full DID.\nMake sure your account holds tokes so that you can pay the fees for creating a CType."),(0,i.kt)("p",null,"For example, a very basic CType for a driver's license could look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "$id": "kilt:ctype:0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5",\n    "$schema": "http://kilt-protocol.org/draft-01/ctype#",\n    "title": "Drivers License",\n    "properties": {\n      "name": {\n        "type": "string"\n      },\n      "age": {\n        "type": "integer"\n      }\n    },\n    "type": "object"\n  },\n  "owner": "5DD7fAZKSpgctg1ZQigAYuk3ypBtr2Q9RPKJBx5UpUwQw4vB",\n  "hash": "0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5"\n}\n')),(0,i.kt)("p",null,"Let's have a look at these attributes."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schema")," > ",(0,i.kt)("inlineCode",{parentName:"td"},"$id")),(0,i.kt)("td",{parentName:"tr",align:null},"The KILT id of this CType.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schema")," > ",(0,i.kt)("inlineCode",{parentName:"td"},"$schema")),(0,i.kt)("td",{parentName:"tr",align:null},"The JSON schema on which the CType is based.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schema")," > ",(0,i.kt)("inlineCode",{parentName:"td"},"title")),(0,i.kt)("td",{parentName:"tr",align:null},"The title of the CType.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schema")," > ",(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:null},"The properties that a claim of type in ",(0,i.kt)("inlineCode",{parentName:"td"},"$schema")," should have.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"owner")),(0,i.kt)("td",{parentName:"tr",align:null},"The public address of the user who created this CType.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hash")),(0,i.kt)("td",{parentName:"tr",align:null},"Most important attribute, the hash is the CType's ",(0,i.kt)("strong",{parentName:"td"},"digital footprint"),".")))),(0,i.kt)("p",null,"A CType is stored on the KILT blockchain."),(0,i.kt)("p",null,"In a real-life setup, a user would simply retrieve an existing CType from the chain or a repository of CTypes for example via a Credential Registry's REST API."),(0,i.kt)("p",null,"In this tutorial, we'll have the ",(0,i.kt)("span",{class:"label-role attester"},"Attester")," create and attempt to store a CType on the KILT test blockchain."),(0,i.kt)("h2",{id:"create-ctype"},"Create CType"),(0,i.kt)("p",null,"Now we have our entry ready, create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"attester/ctypeSchema.js"),". Copy the following to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"CType")," from a schema:"),(0,i.kt)(o.Z,{title:"attester/ctypeSchema.js",className:"language-js",mdxType:"CodeBlock"},"import * as Kilt from '@kiltprotocol/sdk-js';\n\n// returns CTYPE from a schema\nexport function getCtypeSchema() {\n  return Kilt.CType.fromSchema({\n    $schema: 'http://kilt-protocol.org/draft-01/ctype#',\n    title: 'Drivers License',\n    properties: {\n      name: {\n        type: 'string',\n      },\n      age: {\n        type: 'integer',\n      },\n    },\n    type: 'object',\n  })\n}\n"),(0,i.kt)("h2",{id:"get-ctype"},"Get CType"),(0,i.kt)("p",null,"Create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"attester/generateCtype.js"),". We'll use this to check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"CType")," is on-chain already. If yes we'll\nreturn it, otherwise we'll store it on-chain. Remember, an account must have the require amount to pay the Angel's fee and deposit."),(0,i.kt)(o.Z,{title:"attester/generateCtype.js",className:"language-js",mdxType:"CodeBlock"},"import 'dotenv/config'\nimport { cryptoWaitReady } from '@polkadot/util-crypto'\nimport { fileURLToPath } from 'url'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { getCtypeSchema } from './ctypeSchema.js'\nimport { getAccount } from './generateAccount.js'\nimport { getFullDid } from './generateDid.js'\nimport { generateKeypairs } from './generateKeypairs.js'\n\nexport async function ensureStoredCtype() {\n  // Init\n  await cryptoWaitReady()\n  await Kilt.init({ address: process.env.WSS_ADDRESS })\n  const mnemonic = process.env.ATTESTER_MNEMONIC\n  const didIdentifier = process.env.ATTESTER_DID_ID\n\n  // Load Account\n  const account = await getAccount(mnemonic)\n\n  // Load DID\n  const keystore = new Kilt.Did.DemoKeystore()\n  await generateKeypairs(keystore, mnemonic)\n  const fullDid = await getFullDid(didIdentifier)\n\n  // get the CTYPE and see if it's stored, if yes return it\n  const ctype = getCtypeSchema()\n  const isStored = await ctype.verifyStored()\n  if (isStored) {\n    console.log('Ctype already stored. Skipping creation')\n    return ctype\n  }\n  console.log('Ctype not present. Creating it now...')\n\n  // authorize the extrinsic\n  const tx = await ctype.getStoreTx()\n  const extrinsic = await fullDid.authorizeExtrinsic(tx, keystore, account.address)\n\n  // write to chain then return ctype\n  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {\n    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,\n    reSign: true,\n  })\n\n  return ctype\n}\n\n// don't execute if this is imported by another files\nif (process.argv[1] === fileURLToPath(import.meta.url)) {\n  ensureStoredCtype()\n    .catch((e) => {\n      console.log('Error while checking on chain ctype', e)\n      process.exit(1)\n    })\n    .then(() => process.exit())\n}\n"),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("p",null,"To run it, just execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"attester/generateCtype.js")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node attester/generateCtype.js\n")),(0,i.kt)("p",null,"OK, now before we can issue credentials, we need a ",(0,i.kt)("span",{class:"label-role claimer"},"Claimer")," to request one! Let's move on!"))}h.isMDXComponent=!0}}]);