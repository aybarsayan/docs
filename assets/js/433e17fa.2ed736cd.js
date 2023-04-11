"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={id:"overview",title:"\ud83d\udc53 Overview"},i=void 0,s={unversionedId:"develop/workshop/overview",id:"develop/workshop/overview",title:"\ud83d\udc53 Overview",description:"In this tutorial, we'll run through the full story of a claim.",source:"@site/docs/develop/03_workshop/03_overview.md",sourceDirName:"develop/03_workshop",slug:"/develop/workshop/overview",permalink:"/docs/develop/workshop/overview",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/03_overview.md",tags:[],version:"current",lastUpdatedAt:1681216738,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:3,frontMatter:{id:"overview",title:"\ud83d\udc53 Overview"},sidebar:"workshop",previous:{title:"\ud83c\udf92 Setup",permalink:"/docs/develop/workshop/setup"},next:{title:"\ud83c\udfe2 Attester",permalink:"/docs/develop/workshop/attester/"}},l={},c=[{value:"Request an Attestation",id:"request-an-attestation",level:2},{value:"Verify an Attestation",id:"verify-an-attestation",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we'll run through the full story of a claim."),(0,n.kt)("p",null,"To do so, three actors will be involved: a ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer"),", an ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," and a ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier"),".\nYou'll be playing all three roles.\nIn the real world, these actors would be running different services, so we set up different folders to mimic this separation."),(0,n.kt)("p",null,"Both the ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier")," and the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," have to interact with the KILT blockchain.\nBut only the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," is required to own KILTs since they have to pay for storing the attestation on chain.\nThe ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier")," only needs to query the KILT blockchain to ensure that the attestation is still valid and was not revoked.\nThe ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," is not required to query the blockchain, but they might do so to check whether their credential is still valid or if the Attester has revoked it in the meantime."),(0,n.kt)("h2",{id:"request-an-attestation"},"Request an Attestation"),(0,n.kt)("p",null,"Before the ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," can attest a credential, they need to generate a ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/light-did-creation"},"light DID"),", which they can do completely off-chain.\nThe ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," has to register their DID on chain and therefore needs KILT coins."),(0,n.kt)("p",null,"After both the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," and the ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," have set up their identities, the ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," can start the attestation process by requesting an attestation from the ",(0,n.kt)("span",{className:"label-role attester"},"Attester"),"."),(0,n.kt)("mermaid",{value:"sequenceDiagram\nactor C as Claimer\nactor A as Attester\nparticipant B as KILT Blockchain\n    C->>+C: Create credential from provided claims\n    C->>+A: Transmit credential to request attestation\n    A->>A: Validate received attributes\n    A->>+B: Store attestation\n    B--\x3e>-A: Attestation hash\n    A--\x3e>-C: Attestation Hash"}),(0,n.kt)("h2",{id:"verify-an-attestation"},"Verify an Attestation"),(0,n.kt)("p",null,"The ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier")," requests a presentation from the  ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," for a specific CType.\nWithout a specific CType, the presentation is meaningless.\nThus, it is important to require this.\nWe will ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/workshop/attester/ctype"},"explain CTypes in more detail")," in a later chapter.\nA presentation is derived from a credential and does not need to contain all attributes.\nA ",(0,n.kt)("span",{className:"label-role claimer"},"Claimer")," could choose to hide their address from their passport if the ",(0,n.kt)("span",{className:"label-role verifier"},"Verifier")," is only interested in their age."),(0,n.kt)("mermaid",{value:"sequenceDiagram\nactor C as Claimer\nactor V as Verifier\nparticipant B as KILT Blockchain\n    V->>+C: Request presentation for CType\n    C->>C: Derive a presentation from a credential\n    C--\x3e>-V: submit presentation\n    V->>B: check validity of presentation"}))}d.isMDXComponent=!0}}]);