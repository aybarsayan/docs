"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7694],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return o?a.createElement(m,i(i({ref:t},d),{},{components:o})):a.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5788:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const r={id:"overview",title:"Overview"},i=void 0,s={unversionedId:"participate/staking/become_a_collator/overview",id:"participate/staking/become_a_collator/overview",title:"Overview",description:"Collators are the most important members of the network as they not only maintain the state by running a KILT full node, but are also allowed to change it by building state transition proofs and sharing them with the Relay Chain validators.",source:"@site/docs/participate/01_staking/01_become_a_collator/01_overview.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/overview",permalink:"/docs/participate/staking/become_a_collator/overview",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/01_overview.md",tags:[],version:"current",lastUpdatedAt:1699352606,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview"},sidebar:"staking",next:{title:"Minimum Hardware Requirements",permalink:"/docs/participate/staking/become_a_collator/hardware-requirements"}},l={},c=[{value:"Roadmap",id:"roadmap",level:2},{value:"Join the Community",id:"join-the-community",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Collators are the most important members of the network as they not only maintain the state by running a KILT full node, but are also allowed to change it by building state transition proofs and sharing them with the Relay Chain validators.\nGenerally speaking, the latter finalize the proposed block if and only if it represents a valid state transition."),(0,n.kt)("p",null,"It is important to note that elusive collators can never get invalid blocks finalized thanks to the design security umbrella provided by the Relay Chain.\nThus, the most harm dishonest collators can do is to slow down or halt the network.\nAs long as at least one honest collator exists, the parachain is secured and fully operative.\nHowever, the block time would be slower than with a full set of honest and functioning collator nodes."),(0,n.kt)("p",null,"If you want to join the KILT network as a collator, you have to run a full node of the blockchain and set up your session keys.\nYou are also required to hold a minimum amount of  self-staked tokens to qualify for a collator seat.\nOnce you have finished the mandatory steps described throughout the following sections, you can be added to the candidate pool.\nThe candidate pool is sorted first by the total staking amount including delegations.\nIf the pool is full and the new candidate has the exact same stake amount as the last member of the pool (by total stake), the blockchain favors the candidate that has been in the pool longest.\nThus, only the collators with the highest total stake are periodically selected to be eligible block authors."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can find more information about collators and the Relay Chain-parachain-interaction in the ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-collator"},(0,n.kt)("strong",{parentName:"a"},"official Polkadot Wiki")),".")),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"We will guide you through the steps to become a collator.\nFirst, we will discuss the hardware requirements and how you could test the performance of your node.\nThen, we go over a few configuration options and show you how to set up and start a KILT collator, including how to generate your sessions keys and join the pool of collator candidates."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In case you are already collating, you could check out the advanced section.\nThere you will learn how to ",(0,n.kt)("a",{parentName:"p",href:"/docs/participate/staking/advanced_collator_section/monitoring"},(0,n.kt)("strong",{parentName:"a"},"monitor"))," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/participate/staking/advanced_collator_section/benchmarking"},(0,n.kt)("strong",{parentName:"a"},"benchmark"))," your node, ",(0,n.kt)("a",{parentName:"p",href:"/docs/participate/staking/advanced_collator_section/adjust-stake"},(0,n.kt)("strong",{parentName:"a"},"adjust your stake")),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/participate/staking/troubleshooting"},(0,n.kt)("strong",{parentName:"a"},"fix problems"))," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/participate/staking/advanced_collator_section/exit"},(0,n.kt)("strong",{parentName:"a"},"leave the network")),".")),(0,n.kt)("h2",{id:"join-the-community"},"Join the Community"),(0,n.kt)("p",null,"As a collator you are required to keep track of updates and changes to configuration.\nYou should also be accessible in case there is an issue with your node, as this affects not only your and your delegator's rewards, but also the entire network negatively.\nWe recommend joining the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/hX4pc8rdHS"},"KILT Community Discord server")," and following (at least) the ",(0,n.kt)("strong",{parentName:"p"},"collators")," and ",(0,n.kt)("strong",{parentName:"p"},"staking")," channels.\nThere, you will receive announcements about future updates and potential mandatory client upgrades.\nMoreover, the channels serve as a discussion hub for collators and delegators."),(0,n.kt)("p",null,"After joining Discord, feel free to send a DM to ",(0,n.kt)("a",{parentName:"p",href:"https://discordapp.com/users/687952993156726784"},(0,n.kt)("inlineCode",{parentName:"a"},"Dudley | KILT protocol#6222"))," or ",(0,n.kt)("a",{parentName:"p",href:"https://discordapp.com/users/w3n;williamfreude#4433"},(0,n.kt)("inlineCode",{parentName:"a"},"William | KILT Protocol#4433"))," to introduce yourself.\nOf course, you can also directly announce yourself in one of the two channels mentioned above.\nThis way, the community knows who to contact in case there are any issues with your node."))}u.isMDXComponent=!0}}]);