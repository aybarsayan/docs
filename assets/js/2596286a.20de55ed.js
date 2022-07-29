"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4537],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20148:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var i=t(83117),o=t(80102),r=(t(67294),t(3905)),a=["components"],l={id:"well-known-did-config",title:"Well Known DID Configuration"},s=void 0,d={unversionedId:"develop/dApp/well-known-did-config",id:"develop/dApp/well-known-did-config",title:"Well Known DID Configuration",description:"The Well Known DID Configuration is implemented as a security measure when setting up the communication session between dApp and extension.",source:"@site/docs/develop/07_dApp/03_well-known-did-config.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/well-known-did-config",permalink:"/docs/develop/dApp/well-known-did-config",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/03_well-known-did-config.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"well-known-did-config",title:"Well Known DID Configuration"},sidebar:"dApp",previous:{title:"Setting Up the Communication Session",permalink:"/docs/develop/dApp/session"},next:{title:"Overview",permalink:"/docs/develop/dApp/verifier/welcome"}},c=[{value:"DApp Steps",id:"dapp-steps",children:[{value:"Attesting the Domain Linkage Credential",id:"attesting-the-domain-linkage-credential",children:[{value:"Making the claim",id:"making-the-claim",children:[],level:4},{value:"Adding the signature",id:"adding-the-signature",children:[],level:4},{value:"Self-attesting the credential",id:"self-attesting-the-credential",children:[],level:4}],level:3},{value:"Formatting the Domain Linkage Credential",id:"formatting-the-domain-linkage-credential",children:[],level:3}],level:2}],p={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Well Known DID Configuration is implemented as a security measure when setting up the communication session between dApp and extension."),(0,r.kt)("p",null,"The implementation is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/.well-known/resources/did-configuration/"},"Well Known DID Configuration")," specified by the Decentralized Identity Foundation:"),(0,r.kt)("h2",{id:"dapp-steps"},"DApp Steps"),(0,r.kt)("p",null,"Add the following URI to your dApp's root. The extension will make an HTTP GET request to this URI, and your dApp will respond with the domain configuration resource."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/.well-known/did-configuration.json")),(0,r.kt)("h3",{id:"attesting-the-domain-linkage-credential"},"Attesting the Domain Linkage Credential"),(0,r.kt)("p",null,"Upon receiving the GET request from the extension, your dApp will make a claim that contains its domain origin and DID. Then it will self-attest the claim. This self-attestation is referred to as a Domain Linkage Credential."),(0,r.kt)("h4",{id:"making-the-claim"},"Making the claim"),(0,r.kt)("p",null,"Your dApp's claim is based on the domain linkage CType, which can be created from the existing CType schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { CType } from '@kiltprotocol/core'\n\nconst domainLinkageCType = CType.fromCType({\n  schema: {\n    $schema: 'http://kilt-protocol.org/draft-01/ctype#',\n    title: 'Domain Linkage Credential',\n    properties: {\n      id: {\n        type: 'string',\n      },\n      origin: {\n        type: 'string',\n      },\n    },\n    type: 'object',\n    $id: 'kilt:ctype:0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643',\n  },\n  owner: null,\n  hash: '0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643',\n})\n")),(0,r.kt)("p",null,"The claim is built from the CType, claim contents, and your dApp's unique DID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Claim } from '@kiltprotocol/core'\n\nconst did = 'did:kilt:example'\n\nconst claimContents = {\n  id: did,\n  origin: 'https://example-dApp.com',\n}\n\nconst claim = Claim.fromCTypeAndClaimContents(\n  domainLinkageCType,\n  claimContents,\n  did\n)\n")),(0,r.kt)("h4",{id:"adding-the-signature"},"Adding the signature"),(0,r.kt)("p",null,"Your dApp creates a request for attestation based on the claim and signs the request's root hash with its assertion key. The resulting signature is then added to the request for attestation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { RequestForAttestation } from '@kiltprotocol/core'\nimport { FullDidDetails } from '@kiltprotocol/did'\nimport { Crypto } from '@kiltprotocol/utils'\n\nconst requestForAttestation = RequestForAttestation.fromClaim(claim)\n\nconst fullDid = await FullDidDetails.fromChainInfo(did)\n\nconst { signature, keyUri } = await fullDid.signPayload(\n  Crypto.coToUInt8(requestForAttestation.rootHash),\n  assertionKeystore,\n  fullDid.attestationKey.id\n)\n\nconst selfSignedRequest = await requestForAttestation.addSignature(\n  signature,\n  keyUri\n)\n")),(0,r.kt)("h4",{id:"self-attesting-the-credential"},"Self-attesting the credential"),(0,r.kt)("p",null,"Finally, your dApp creates the self-attestation and credential"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Attestation, Credential } from '@kiltprotocol/core'\n\nconst attestation = Attestation.fromRequestAndDid(selfSignedRequest, did)\n\nconst domainLinkageCredential = Credential.fromRequestAndAttestation(\n  selfSignedRequest,\n  attestation\n)\n")),(0,r.kt)("h3",{id:"formatting-the-domain-linkage-credential"},"Formatting the Domain Linkage Credential"),(0,r.kt)("p",null,"The Well Known DID Configuration specificaton requires a specific format (JSON-LD) for the domain linkage credential. Here's how you can present your credential to the extension in the expected format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const credentialSubject = {\n  ...domainLinkageCredential.request.claim.contents,\n  rootHash: domainLinkageCredential.request.rootHash,\n}\n\nconst issuer = domainLinkageCredential.attestation.owner\n\nconst issuanceDate = new Date().toISOString()\nconst expirationDate = new Date(\n  Date.now() + 1000 * 60 * 60 * 24 * 365 * 5\n).toISOString() // 5 years, for example\n\nconst claimerSignature = domainLinkageCredential.request.claimerSignature\n\nconst proof = {\n  type: 'KILTSelfSigned2020',\n  proofPurpose: 'assertionMethod',\n  verificationMethod: claimerSignature.keyUri,\n  signature: claimerSignature.signature,\n  challenge: claimerSignature.challenge,\n}\n\nreturn {\n  '@context': [\n    'https://www.w3.org/2018/credentials/v1',\n    'https://identity.foundation/.well-known/did-configuration/v1',\n  ],\n  issuer,\n  issuanceDate,\n  expirationDate,\n  type: [\n    'VerifiableCredential',\n    'DomainLinkageCredential',\n    'KiltCredential2020',\n  ],\n  credentialSubject,\n  proof,\n}\n")))}u.isMDXComponent=!0}}]);