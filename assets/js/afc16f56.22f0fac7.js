"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"peregrine-chain-setup",title:"Connect to Peregrine"},i=void 0,l={unversionedId:"develop/sdk/chain_setup/peregrine-chain-setup",id:"develop/sdk/chain_setup/peregrine-chain-setup",title:"Connect to Peregrine",description:"Before connecting to the production Spiritnet, it is recommended to test applications using its canary network Peregrine.",source:"@site/docs/develop/01_sdk/03_chain_setup/02_peregrine_setup.md",sourceDirName:"develop/01_sdk/03_chain_setup",slug:"/develop/sdk/chain_setup/peregrine-chain-setup",permalink:"/docs/develop/sdk/chain_setup/peregrine-chain-setup",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/03_chain_setup/02_peregrine_setup.md",tags:[],version:"current",lastUpdatedAt:1663313121,formattedLastUpdatedAt:"Sep 16, 2022",sidebarPosition:2,frontMatter:{id:"peregrine-chain-setup",title:"Connect to Peregrine"},sidebar:"sdk",previous:{title:"BYOB - Bring Your Own Blockchain",permalink:"/docs/develop/sdk/chain_setup/standalone-chain-setup"},next:{title:"Connect to Spiritnet",permalink:"/docs/develop/sdk/chain_setup/prod-chain-setup"}},p={},c=[{value:"Receive Funds",id:"receive-funds",level:2},{value:"Connect to the Network",id:"connect-to-the-network",level:2},{value:"Standalone vs. Parachain (Peregrine/Spiritnet)",id:"standalone-vs-parachain-peregrinespiritnet",level:2},{value:"Governance",id:"governance",level:3},{value:"Staking",id:"staking",level:3},{value:"Deployment Complexity",id:"deployment-complexity",level:3},{value:"Transaction Encoding",id:"transaction-encoding",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before connecting to the production Spiritnet, it is recommended to test applications using its canary network ",(0,r.kt)("em",{parentName:"p"},"Peregrine"),".\nIn contrast to ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/sdk/chain_setup/standalone-chain-setup"},"running your own blockchain"),", you will neither have control over the blockchain, nor have any initial funds."),(0,r.kt)("p",null,"In this section we will guide you through the process of receiving funds on Peregrine and connecting to one of the network nodes.\nAdditionally, we explain the difference between the Standalone and Parachain runtimes."),(0,r.kt)("h2",{id:"receive-funds"},"Receive Funds"),(0,r.kt)("p",null,"Since the native token of Peregrine, the ",(0,r.kt)("em",{parentName:"p"},"PILT"),", does not have any economic value, you can request 100 PILT from the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.peregrine.kilt.io"},"Peregrine faucet"),"."),(0,r.kt)("h2",{id:"connect-to-the-network"},"Connect to the Network"),(0,r.kt)("p",null,"Replace the WebSocket address of ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/sdk/chain_setup/#set-up-your-project"},"your script")," or application with ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://peregrine.kilt.io/parachain-public-ws"),"."),(0,r.kt)("p",null,"You can either use your own frontend or the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io%2Fparachain-public-ws#/explorer"},"Polkadot JS Apps")," to interact with the chain.\nMoreover, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://kilt-testnet.subscan.io/"},"Subscan")," as a chain explorer.\nFor a full list of deployments and services, take a look ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/chain/deployments"},"here"),"."),(0,r.kt)("h2",{id:"standalone-vs-parachain-peregrinespiritnet"},"Standalone vs. Parachain (Peregrine/Spiritnet)"),(0,r.kt)("p",null,"The standalone chain is very close in functionality to our parachains but there are a few fundamental differences between them."),(0,r.kt)("h3",{id:"governance"},"Governance"),(0,r.kt)("p",null,"While governance is a very important part of our parachains, it is not used in the standalone version and is replaced by the ",(0,r.kt)("strong",{parentName:"p"},"Sudo")," pallet.\nNone of the following pallets are part of the standalone chain, but they are all part of the parachain runtime:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Democracy"),(0,r.kt)("li",{parentName:"ul"},"Council"),(0,r.kt)("li",{parentName:"ul"},"TechnicalCommittee"),(0,r.kt)("li",{parentName:"ul"},"TechnicalMembership"),(0,r.kt)("li",{parentName:"ul"},"Treasury"),(0,r.kt)("li",{parentName:"ul"},"Scheduler")),(0,r.kt)("h3",{id:"staking"},"Staking"),(0,r.kt)("p",null,"Staking is part of the consensus protocol and is used to elect who is allowed to produce blocks.\nIt is important for parachains to have this election process as decentralized as possible.\nOn the other hand, for a standalone development chain it is not necessary since all nodes are most likely controlled by you or your organization."),(0,r.kt)("h3",{id:"deployment-complexity"},"Deployment Complexity"),(0,r.kt)("p",null,"Deploying a parachain is more complex than deploying a standalone chain.\nFor the standalone node, a single Docker command is sufficient.\nIn contrast, the task of spinning up a parachain can be split up in three steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setup a Relay Chain with 4 validators."),(0,r.kt)("li",{parentName:"ol"},"Start and connect your parachain node to the Relay Chain."),(0,r.kt)("li",{parentName:"ol"},"Register your parachain using the runtime WASM and the genesis state.")),(0,r.kt)("p",null,"Since these steps are not trivial to execute and take quite some time to do manually, we provide a minimal ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/local-parachain-setup"},"Docker-based setup script")," which automates them."),(0,r.kt)("h3",{id:"transaction-encoding"},"Transaction Encoding"),(0,r.kt)("p",null,"Before transactions are sent to the chain, they are encoded and signed.\nThe encoding depends on the runtime and can differ from chain to chain.\nEven the same call in the same pallet can have a different encoding for different chains, for instance the ",(0,r.kt)("inlineCode",{parentName:"p"},"vest()")," call of the ",(0,r.kt)("inlineCode",{parentName:"p"},"vesting")," pallet:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Encoding of Vesting.vest()"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Spiritnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x2900"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standalone"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x2100"))))))}d.isMDXComponent=!0}}]);