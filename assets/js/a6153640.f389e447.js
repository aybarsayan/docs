"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6046],{73369:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),s=n(31736),r=["components"],l={id:"attestation-creation",title:"Attest a Claim (Issue a Credential)"},c=void 0,d={unversionedId:"develop/sdk/cookbook/claiming/attestation-creation",id:"develop/sdk/cookbook/claiming/attestation-creation",title:"Attest a Claim (Issue a Credential)",description:"Once an Attester has received a RequestForAttestation from a Claimer, they will typically verify the information in the Claim.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/attestation-creation",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-creation",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/03_attestation_creation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"attestation-creation",title:"Attest a Claim (Issue a Credential)"},sidebar:"sdk",previous:{title:"Request an Attestation",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-request"},next:{title:"Present a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-creation"}},m=[],u={toc:m};function h(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once an Attester has received a ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestForAttestation")," from a Claimer, they will typically verify the information in the Claim.\nIf the Claims correspond to truth, the Attester will proceed by attesting the root hash of the Attestation request on the KILT blockchain, timestamping the Attestation operation."),(0,a.kt)("p",null,"The result of the operation is a ",(0,a.kt)("em",{parentName:"p"},"Credential"),", which is the combination of the original Attestation request and of the Attestation details (e.g., the identity of the Attester).\nFurthemore, a deposit is reserved from the balance of the KILT account submitting the creation transaction, which is returned if and when the Attestation is removed from the chain."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"An Attester is required to have a full DID with an attestation key.\nTo see how to manage DIDs, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/full-did-update"},"DID section"),"."))),(0,a.kt)(s.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createAttestation(\n  keystore: Kilt.KeystoreSigner,\n  requestForAttestation: Kilt.IRequestForAttestation,\n  attester: Kilt.Did.FullDidDetails,\n  submitterAccount: KeyringPair,\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<Kilt.Credential> {\n  // Create an attestation object and write its root hash on the chain\n  // using the provided attester's full DID.\n  const attestation = await Kilt.Attestation.fromRequestAndDid(\n    requestForAttestation,\n    attester.uri\n  )\n  const attestationTx = await attestation\n    .getStoreTx()\n    .then((tx) =>\n      attester.authorizeExtrinsic(tx, keystore, submitterAccount.address)\n    )\n  await Kilt.BlockchainUtils.signAndSubmitTx(attestationTx, submitterAccount, {\n    resolveOn\n  })\n\n  // Return the credential, which is the combination of the original request for attestation\n  // plus the on-chain attestation info.\n  return Kilt.Credential.fromRequestAndAttestation(\n    requestForAttestation,\n    attestation\n  )\n}\n"))}h.isMDXComponent=!0}}]);