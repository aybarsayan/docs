"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1830],{92095:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),r=n(31736),d=["components"],s={id:"full-did-batch",title:"Sign Extrinsics with a Full DID"},c=void 0,l={unversionedId:"develop/sdk/cookbook/dids/full-did-batch",id:"develop/sdk/cookbook/dids/full-did-batch",title:"Sign Extrinsics with a Full DID",description:"Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID subject.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/04_full_did_batch.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/full-did-batch",permalink:"/docs/develop/sdk/cookbook/dids/full-did-batch",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/04_full_did_batch.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"full-did-batch",title:"Sign Extrinsics with a Full DID"},sidebar:"sdk",previous:{title:"Update a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-update"},next:{title:"Generate and Verify a DID Signature",permalink:"/docs/develop/sdk/cookbook/dids/did-signature"}},u=[],p={toc:u};function h(t){var e=t.components,n=(0,i.Z)(t,d);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Full DIDs can also be used to batch multiple extrinsics that require the signature of the DID subject.\nFor instance, a batch could include the creation of two different CTypes in the same operation.\nThis would save the user the time of producing one additional block and generating one additional signature, as multiple extrinsics are batched and signed at once, and they are submitted and executed in the same block.\nFor more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_utility/pallet/struct.Pallet.html"},"official Substrate documentation"),"."),(0,a.kt)("p",null,"An example of a batched creation of two CTypes using a ",(0,a.kt)("inlineCode",{parentName:"p"},"DidBatchBuilder")," is provided below."),(0,a.kt)(r.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nfunction getRandomCType(): Kilt.CType {\n  // Random factor ensures that each created CType is unique and does not already exist on chain.\n  const randomFactor = Kilt.Utils.UUID.generate()\n  return Kilt.CType.fromSchema({\n    $schema: 'http://kilt-protocol.org/draft-01/ctype#',\n    title: `CType ${randomFactor}`,\n    properties: {\n      name: {\n        type: 'string'\n      },\n      age: {\n        type: 'integer'\n      }\n    },\n    type: 'object'\n  })\n}\n\nexport async function batchCTypeCreationExtrinsics(\n  keystore: Kilt.Did.DemoKeystore,\n  api: ApiPromise,\n  submitterAccount: KeyringPair,\n  fullDid: Kilt.Did.FullDidDetails,\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<void> {\n  // Create two random demo CTypes\n  const ctype1 = getRandomCType()\n  const ctype1CreationTx = await ctype1.getStoreTx()\n  const ctype2 = getRandomCType()\n  const ctype2CreationTx = await ctype2.getStoreTx()\n\n  // Create the DID-signed batch\n  const batch = await new Kilt.Did.DidBatchBuilder(api, fullDid)\n    .addMultipleExtrinsics([ctype1CreationTx, ctype2CreationTx])\n    .consume(keystore, submitterAccount.address)\n\n  // The authorized account submits the batch to the chain\n  await Kilt.BlockchainUtils.signAndSubmitTx(batch, submitterAccount, {\n    resolveOn\n  })\n\n  if (!(await ctype1.verifyStored()) || !(await ctype2.verifyStored())) {\n    throw 'One of the two CTypes has not been properly stored.'\n  }\n}\n"))}h.isMDXComponent=!0}}]);