"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"benchmarking",title:"Benchmark Your Collator"},o=void 0,c={unversionedId:"participate/staking/advanced_collator_section/benchmarking",id:"participate/staking/advanced_collator_section/benchmarking",title:"Benchmark Your Collator",description:"To enable benchmarking, the collator must enable the benchmarking feature from a new build of the kilt-parachain.",source:"@site/docs/participate/01_staking/02_advanced_collator_section/06_benchmarking.md",sourceDirName:"participate/01_staking/02_advanced_collator_section",slug:"/participate/staking/advanced_collator_section/benchmarking",permalink:"/docs/participate/staking/advanced_collator_section/benchmarking",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/02_advanced_collator_section/06_benchmarking.md",tags:[],version:"current",lastUpdatedAt:1692697628,formattedLastUpdatedAt:"Aug 22, 2023",sidebarPosition:6,frontMatter:{id:"benchmarking",title:"Benchmark Your Collator"},sidebar:"staking",previous:{title:"Bootnodes",permalink:"/docs/participate/staking/advanced_collator_section/bootnodes"},next:{title:"Overview",permalink:"/docs/participate/staking/delegate/overview"}},l={},s=[],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To enable benchmarking, the collator must enable the benchmarking feature from a new build of the ",(0,a.kt)("inlineCode",{parentName:"p"},"kilt-parachain"),"."),(0,a.kt)("admonition",{title:"Don't use this binary for running the Collator!",type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"cargo build --release -p kilt-parachain --features=runtime-benchmarks\n"))),(0,a.kt)("p",null,"The benchmarks can be run to compare the server's hardware capabilities against the referenced hardware.\nAt the moment, we have benchmarked the Spiritnet and Peregrine runtimes on an AMD Ryzen 7 1700X with 64GB RAM and an NVMe SSD.\nAfter executing the benchmarks on a server compare the weights to the official KILT weights.\nYour weight results should at least be similar to the official ones and the lower yours are, the better."),(0,a.kt)("p",null,"The commands executed to benchmark the KILT runtimes can be found in the official benchmark files for both ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/tree/master/runtimes/spiritnet/src/weights"},"Spiritnet")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/tree/master/runtimes/peregrine/src/weights"},"Peregrine"),"."),(0,a.kt)("p",null,"Below is an example of benchmarking for the the ",(0,a.kt)("inlineCode",{parentName:"p"},"balances")," pallet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"./target/release/kilt-parachain \\\n  benchmark \\\n  --chain=spiritnet-dev \\\n  --execution=wasm \\\n  --wasm-execution=Compiled \\\n  --heap-pages=4096 \\\n  --extrinsic=* \\\n  --pallet=pallet-balances \\\n  --steps=50 \\\n  --repeat=20 \\\n  --output \\\n  ./runtimes/spiritnet/src/weights/pallet_balances.rs \\\n  --template \\\n  ./.maintain/weight-template.hbs\n")))}u.isMDXComponent=!0}}]);