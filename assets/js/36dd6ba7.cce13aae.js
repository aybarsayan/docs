"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={id:"standalone-chain-setup",title:"BYOB - Bring Your Own Blockchain"},i=void 0,s={unversionedId:"develop/sdk/chain_setup/standalone-chain-setup",id:"develop/sdk/chain_setup/standalone-chain-setup",title:"BYOB - Bring Your Own Blockchain",description:"If you want to have full control over your blockchain deployment, e.g., if you want to reset the state repeatedly or need more funds than a faucet can provide for a single account, you will need to run your own blockchain.",source:"@site/docs/develop/01_sdk/03_chain_setup/01_standalone_setup.md",sourceDirName:"develop/01_sdk/03_chain_setup",slug:"/develop/sdk/chain_setup/standalone-chain-setup",permalink:"/docs/develop/sdk/chain_setup/standalone-chain-setup",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/03_chain_setup/01_standalone_setup.md",tags:[],version:"current",lastUpdatedAt:1699352606,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:1,frontMatter:{id:"standalone-chain-setup",title:"BYOB - Bring Your Own Blockchain"},sidebar:"sdk",previous:{title:"Chain Setup for Development",permalink:"/docs/develop/sdk/chain_setup/"},next:{title:"Connect to Peregrine",permalink:"/docs/develop/sdk/chain_setup/peregrine-chain-setup"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to have full control over your blockchain deployment, e.g., if you want to reset the state repeatedly or need more funds than a faucet can provide for a single account, you will need to run your own blockchain.\nFor this purpose, we provide a Docker image which runs in standalone mode.\nThis means that the blockchain doesn't act as a parachain but as an independent chain.\nThere is no need to run a Relay Chain and register the KILT chain as a parachain.\nThis greatly simplifies the setup."),(0,o.kt)("p",null,"You only need to start the Docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -p 9944:9944 -p 9933:9933 kiltprotocol/mashnet-node:latest --dev --ws-external --rpc-external\n")),(0,o.kt)("p",null,"You should see output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'2022-05-05 13:25:12 KILT Node\n2022-05-05 13:25:12 \u270c\ufe0f  version 1.6.2\n2022-05-05 13:25:12 \u2764\ufe0f  by KILT <info@kilt.io>, 2019-2022\n2022-05-05 13:25:12 \ud83d\udccb Chain specification: Development\n2022-05-05 13:25:12 \ud83c\udff7  Node name: subdued-chair-0035\n2022-05-05 13:25:12 \ud83d\udc64 Role: AUTHORITY\n2022-05-05 13:25:12 \ud83d\udcbe Database: RocksDb at /tmp/substrateufCNUV/chains/development/db/full\n2022-05-05 13:25:12 \u26d3  Native runtime: mashnet-node-10620 (mashnet-node-0.tx3.au4)\n2022-05-05 13:25:13 \ud83d\udd28 Initializing Genesis block/state (state: 0xb4a2\u202694b3, header-hash: 0x09fc\u20263a2b)\n2022-05-05 13:25:13 \ud83d\udc74 Loading GRANDPA authority set from genesis on what appears to be first startup.\n2022-05-05 13:25:14 Using default protocol ID "sup" because none is configured in the chain specs\n2022-05-05 13:25:14 \ud83c\udff7  Local node identity is: 12D3KooWMCqWaxXTQbmG9feCe4cMzjCzUKfm5T6VvGDmh8X5QHe9\n2022-05-05 13:25:14 \ud83d\udce6 Highest known block at #0\n2022-05-05 13:25:14 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2022-05-05 13:25:14 Listening for new connections on 0.0.0.0:9944.\n2022-05-05 13:25:19 \ud83d\udca4 Idle (0 peers), best: #0 (0x09fc\u20263a2b), finalized #0 (0x09fc\u20263a2b), \u2b07 0 \u2b06 0\n2022-05-05 13:25:20 Accepted a new tcp connection from 172.17.0.1:56636.\n2022-05-05 13:25:23 \ud83d\ude4c Starting consensus session on top of parent 0x...\n2022-05-05 13:25:23 \ud83c\udf81 Prepared block for proposing at 1 (3 ms) [hash: 0x...; parent_hash: 0x09fc\u20263a2b; extrinsics (1): [0xae1a\u20260701]]\n2022-05-05 13:25:23 \ud83d\udd16 Pre-sealed block for proposal at 1. Hash now 0x..., previously 0x....\n')),(0,o.kt)("p",null,"Congratulations!\nYou are running your own KILT blockchain. \ud83c\udf89"),(0,o.kt)("p",null,"The blockchain exposes a WebSocket endpoint on port ",(0,o.kt)("inlineCode",{parentName:"p"},"9944")," and an RPC endpoint on port ",(0,o.kt)("inlineCode",{parentName:"p"},"9933"),".\nYou can test that by calling an RPC endpoint using curl."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "system_name", "params":[]}\' http://127.0.0.1:9933/\n')),(0,o.kt)("p",null,"This should give you ",(0,o.kt)("inlineCode",{parentName:"p"},'{"jsonrpc":"2.0","result":"KILT Node","id":1}')," as a response."),(0,o.kt)("p",null,"In addition, you can also connect to the exposed WebSocket endpoints using ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/chain_setup/#set-up-your-project"},"your script"),".\nSimply replace the WebSocket address with ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://127.0.0.1:9944"),".\nPlease note that we connect to the port ",(0,o.kt)("inlineCode",{parentName:"p"},"9944")," as we are using the WebSocket protocol for our SDK and not bare HTTP."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--dev")," parameter provides a pre-funded account which you can use as a faucet, and that has the following mnemonic: ",(0,o.kt)("inlineCode",{parentName:"p"},"receive clutch item involve chaos clutch furnace arrest claw isolate okay together"),"."),(0,o.kt)("p",null,"You can create the account with the following SDK function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Creates an ed25519 key by default which is required to access the funds.\nconst devFaucet = Crypto.makeKeypairFromUri(faucetSeed)\n")),(0,o.kt)("p",null,"With the new ",(0,o.kt)("inlineCode",{parentName:"p"},"devFaucet"),", you can transfer funds to other accounts and test all the KILT features that require tx fee payment."))}d.isMDXComponent=!0}}]);