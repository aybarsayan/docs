"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7427],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),h=a,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return t?o.createElement(f,i(i({ref:n},l),{},{components:t})):o.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const r={id:"standalone-chain-setup",title:"BYOB - Bring Your Own Blockchain"},i=void 0,s={unversionedId:"develop/sdk/chain_setup/standalone-chain-setup",id:"develop/sdk/chain_setup/standalone-chain-setup",title:"BYOB - Bring Your Own Blockchain",description:"If you want to have full control over your blockchain deployment, e.g., if you want to reset the state repeatedly or need more funds than a faucet can provide for a single account, you will need to run your own blockchain.",source:"@site/docs/develop/01_sdk/03_chain_setup/01_standalone_setup.md",sourceDirName:"develop/01_sdk/03_chain_setup",slug:"/develop/sdk/chain_setup/standalone-chain-setup",permalink:"/docs/develop/sdk/chain_setup/standalone-chain-setup",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/03_chain_setup/01_standalone_setup.md",tags:[],version:"current",lastUpdatedAt:1663313121,formattedLastUpdatedAt:"Sep 16, 2022",sidebarPosition:1,frontMatter:{id:"standalone-chain-setup",title:"BYOB - Bring Your Own Blockchain"},sidebar:"sdk",previous:{title:"Chain Setup for Development",permalink:"/docs/develop/sdk/chain_setup/"},next:{title:"Connect to Peregrine",permalink:"/docs/develop/sdk/chain_setup/peregrine-chain-setup"}},c={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to have full control over your blockchain deployment, e.g., if you want to reset the state repeatedly or need more funds than a faucet can provide for a single account, you will need to run your own blockchain.\nFor this purpose, we provide a Docker image which runs in standalone mode.\nThis means that the blockchain doesn't act as a parachain but as an independent chain.\nThere is no need to run a Relay Chain and register the KILT chain as a parachain.\nThis greatly simplifies the setup."),(0,a.kt)("p",null,"You only need to start the Docker image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -p 9944:9944 -p 9933:9933 kiltprotocol/mashnet-node:latest --dev --ws-external --rpc-external\n")),(0,a.kt)("p",null,"You should see output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'2022-05-05 13:25:12 KILT Node\n2022-05-05 13:25:12 \u270c\ufe0f  version 1.6.2\n2022-05-05 13:25:12 \u2764\ufe0f  by KILT <info@kilt.io>, 2019-2022\n2022-05-05 13:25:12 \ud83d\udccb Chain specification: Development\n2022-05-05 13:25:12 \ud83c\udff7  Node name: subdued-chair-0035\n2022-05-05 13:25:12 \ud83d\udc64 Role: AUTHORITY\n2022-05-05 13:25:12 \ud83d\udcbe Database: RocksDb at /tmp/substrateufCNUV/chains/development/db/full\n2022-05-05 13:25:12 \u26d3  Native runtime: mashnet-node-10620 (mashnet-node-0.tx3.au4)\n2022-05-05 13:25:13 \ud83d\udd28 Initializing Genesis block/state (state: 0xb4a2\u202694b3, header-hash: 0x09fc\u20263a2b)\n2022-05-05 13:25:13 \ud83d\udc74 Loading GRANDPA authority set from genesis on what appears to be first startup.\n2022-05-05 13:25:14 Using default protocol ID "sup" because none is configured in the chain specs\n2022-05-05 13:25:14 \ud83c\udff7  Local node identity is: 12D3KooWMCqWaxXTQbmG9feCe4cMzjCzUKfm5T6VvGDmh8X5QHe9\n2022-05-05 13:25:14 \ud83d\udce6 Highest known block at #0\n2022-05-05 13:25:14 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2022-05-05 13:25:14 Listening for new connections on 0.0.0.0:9944.\n2022-05-05 13:25:19 \ud83d\udca4 Idle (0 peers), best: #0 (0x09fc\u20263a2b), finalized #0 (0x09fc\u20263a2b), \u2b07 0 \u2b06 0\n2022-05-05 13:25:20 Accepted a new tcp connection from 172.17.0.1:56636.\n2022-05-05 13:25:23 \ud83d\ude4c Starting consensus session on top of parent 0x...\n2022-05-05 13:25:23 \ud83c\udf81 Prepared block for proposing at 1 (3 ms) [hash: 0x...; parent_hash: 0x09fc\u20263a2b; extrinsics (1): [0xae1a\u20260701]]\n2022-05-05 13:25:23 \ud83d\udd16 Pre-sealed block for proposal at 1. Hash now 0x..., previously 0x....\n')),(0,a.kt)("p",null,"Congratulations!\nYou are running your own KILT blockchain. \ud83c\udf89"),(0,a.kt)("p",null,"The blockchain exposes a WebSocket endpoint on port ",(0,a.kt)("inlineCode",{parentName:"p"},"9944")," and an RPC endpoint on port ",(0,a.kt)("inlineCode",{parentName:"p"},"9933"),".\nYou can test that by calling an RPC endpoint using curl."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "system_name", "params":[]}\' http://127.0.0.1:9933/\n')),(0,a.kt)("p",null,"This should give you ",(0,a.kt)("inlineCode",{parentName:"p"},'{"jsonrpc":"2.0","result":"KILT Node","id":1}')," as a response."),(0,a.kt)("p",null,"In addition, you can also connect to the exposed WebSocket endpoints using ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/chain_setup/#set-up-your-project"},"your script"),".\nSimply replace the WebSocket address with ",(0,a.kt)("inlineCode",{parentName:"p"},"ws://127.0.0.1:9944"),".\nPlease note that we connect to the port ",(0,a.kt)("inlineCode",{parentName:"p"},"9944")," as we are using the WebSocket protocol for our SDK and not bare HTTP."))}u.isMDXComponent=!0}}]);