"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={id:"did",title:"KILT Decentralized Identifiers (DIDs)"},o=void 0,s={unversionedId:"concepts/did",id:"concepts/did",title:"KILT Decentralized Identifiers (DIDs)",description:"A KILT decentralized identifier (DID) is a string of letters and numbers uniquely identifying each KILT user.",source:"@site/docs/concepts/02_did.md",sourceDirName:"concepts",slug:"/concepts/did",permalink:"/docs/concepts/did",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/02_did.md",tags:[],version:"current",lastUpdatedAt:1694426530,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:2,frontMatter:{id:"did",title:"KILT Decentralized Identifiers (DIDs)"},sidebar:"concepts",previous:{title:"What is KILT?",permalink:"/docs/concepts/what-is-kilt"},next:{title:"web3names",permalink:"/docs/concepts/web3names"}},l={},d=[{value:"Light DIDs",id:"light-dids",level:2},{value:"Full DIDs",id:"full-dids",level:2},{value:"Migrating a Light DID to a Full DID",id:"migrating-a-light-did-to-a-full-did",level:2},{value:"Storing a DID",id:"storing-a-did",level:2}],c={toc:d},h="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A KILT decentralized identifier (DID) is a string of letters and numbers uniquely identifying each KILT user.\nA DID can be thought of as a container of different keys that are all under the control of the same DID subject.\nFor the official W3C DID spec, please visit the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"DID Core spec page"),"; for the official KILT DID method specification, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/spec-kilt-did"},"KILT DID spec page"),"."),(0,a.kt)("p",null,"The simplest type of KILT DID is called a ",(0,a.kt)("strong",{parentName:"p"},"light DID"),", because it can be generated and used offline without any internet connection (hence any connection with the KILT blockchain at all).\nAlthough very cheap, light DIDs are not very flexible and are only suitable for low-security use cases.\nIn more complex use cases, an on-chain ",(0,a.kt)("strong",{parentName:"p"},"full DID")," is required, which allows the subject to store several different keys (and key types) and replace them over time, with the support of the KILT blockchain."),(0,a.kt)("h2",{id:"light-dids"},"Light DIDs"),(0,a.kt)("p",null,"The following is an example of a light KILT DID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS\n")),(0,a.kt)("p",null,"Beyond the standard prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"did:kilt:"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"light:")," component indicates that this DID is a light DID, hence it can be resolved and utilized offline."),(0,a.kt)("p",null,"Light DIDs optionally support the specification of an ",(0,a.kt)("strong",{parentName:"p"},"encryption key")," (of one of the supported key types) and services, which are both serialized, encoded and added at the end of the DID, like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS:z1ERkVVjngcarMbJn6YssB1PYULescQneSSEfCTJwYbzT2aK8fzH5WPsp3G4UVuLWWfsTayketnFV74YCnyboHBUvqEs6J8jdYY5dK2XeqCCs653Sf9XVH4RN2WvPrDFZXzzKf3KigvcaE7kkaEwLZvcas3U1M2ZDZCajDG71winwaRNrDtcqkJL9V6Q5yKNWRacw7hJ58d\n")),(0,a.kt)("h2",{id:"full-dids"},"Full DIDs"),(0,a.kt)("p",null,"As mentioned above, the creation of a full DID requires interaction with the KILT blockchain.\nTherefore, the DID creation operation must be submitted by a KILT address with enough funds to pay the transaction fees and the required deposit."),(0,a.kt)("p",null,"The following is an example of a full KILT DID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e\n")),(0,a.kt)("p",null,"Here, there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"light:")," component, which indicates that the DID is a full DID and that the keys associated with it must not be derived from the DID identifier, but must be retrieved from the KILT blockchain."),(0,a.kt)("p",null,"Along with an authentication key, an encryption key, and services, a full DID also supports an ",(0,a.kt)("strong",{parentName:"p"},"attestation key"),", which must be used to write CTypes and attestations on the blockchain, and a ",(0,a.kt)("strong",{parentName:"p"},"delegation key"),", which must be used to write delegations on the blockchain."),(0,a.kt)("h2",{id:"migrating-a-light-did-to-a-full-did"},"Migrating a Light DID to a Full DID"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"migration")," of a DID means that a light, off-chain DID is anchored to the KILT blockchain, supporting all the features that full DIDs provide.\nIn the current version (v1) of the KILT DID protocol, a light DID of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS")," would become a full DID of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"did:kilt:4nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS"),".\nNote that the identifier of the two DIDs, apart from the initial ",(0,a.kt)("inlineCode",{parentName:"p"},"01")," sequence of the light DID, are the same since both DIDs are derived from the same seed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Once a light DID is migrated, all the credentials collected by the light DID can only be presented using the migrated on-chain DID."),"\nThis is by design, as it is assumed that the user had valid reasons to migrate the DID, and as on-chain DIDs offer greater security guarantees.\nKILT will thus reject light DID signatures even if the original claim in the credential was generated with that off-chain DID."),(0,a.kt)("p",null,"For a detailed developer-oriented guide to KILT DIDs, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/light-did-creation"},"DID Cookbook section"),"."),(0,a.kt)("h2",{id:"storing-a-did"},"Storing a DID"),(0,a.kt)("p",null,"Storing a DID in the blockchain requires a deposit, consisting of a base deposit and an additional fee. The base deposit is a fixed amount of 4 KILT, while the additional fee is 0.05 KILT."),(0,a.kt)("p",null,"In addition to the base deposit and fee, the total deposit increases based on the storage space used by the DID. Each byte of storage occupied by the DID requires a deposit of 50 micro KILT (0.000005 KILT).\nThe overall size of the DID is determined by the inclusion of services and keys. The more services and keys in the DID, the larger the storage space required and, consequently, the higher the additional deposit."),(0,a.kt)("p",null,"When updating the DID, the deposit is automatically adjusted to match the updated size. This ensures that the deposit accurately reflects the current storage requirements of the DID, whether they increase or decrease."),(0,a.kt)("p",null,"The deposit can be reclaimed when the DID is deleted from the blockchain, allowing users to retrieve the deposited amount. However, please note that the additional fee cannot be refunded once it has been paid."))}p.isMDXComponent=!0}}]);