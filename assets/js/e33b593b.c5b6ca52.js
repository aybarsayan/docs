"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3229],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),i=a(2635);const r={id:"join",title:"Join the Collator Candidate Pool"},l=void 0,s={unversionedId:"participate/staking/become_a_collator/join",id:"participate/staking/become_a_collator/join",title:"Join the Collator Candidate Pool",description:"Before a collator can author blocks, the node needs to fully sync up with both the KILT parachain and the Polkadot Relay Chain.",source:"@site/docs/participate/01_staking/01_become_a_collator/05_join_collators.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/join",permalink:"/docs/participate/staking/become_a_collator/join",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/05_join_collators.md",tags:[],version:"current",lastUpdatedAt:1681216738,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:5,frontMatter:{id:"join",title:"Join the Collator Candidate Pool"},sidebar:"staking",previous:{title:"Set and Rotate Session Keys",permalink:"/docs/participate/staking/become_a_collator/session-keys"},next:{title:"Adjust Your Own Stake",permalink:"/docs/participate/staking/advanced_collator_section/adjust-stake"}},p={},c=[{value:"Minimum Token Requirement",id:"minimum-token-requirement",level:2},{value:"Execute the Joining Transaction",id:"execute-the-joining-transaction",level:2},{value:"Check Your Position in the Collators Queue",id:"check-your-position-in-the-collators-queue",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before a collator can author blocks, the node needs to fully sync up with both the KILT parachain and the Polkadot Relay Chain.\nDepending on the size of the blockchain states, it may take from a number of hours to few days for the node to fully synchronize.\nMore details can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#synchronize-chain-data"},"Polkadot network docs"),"."),(0,o.kt)("p",null,"After you have finished with the setup, you can finally tell the chain that you are ready to collate and join the pool of candidates."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"These steps should be followed only once your collator node has successfully ",(0,o.kt)("a",{parentName:"p",href:"/docs/participate/staking/become_a_collator/session-keys"},(0,o.kt)("strong",{parentName:"a"},"linked a session key to its address"))," and synced the parachain and relaychain states by following the previous steps.")),(0,o.kt)("h2",{id:"minimum-token-requirement"},"Minimum Token Requirement"),(0,o.kt)("p",null,"The maximum number of ",(0,o.kt)("strong",{parentName:"p"},"active")," collators is currently (2022-05-05) 16 on Peregrine and 30 on Spiritnet."),(0,o.kt)("p",null,"In order to become a collator, you must stake"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"at least ",(0,o.kt)("em",{parentName:"li"},"10,000 KILT")," tokens and"),(0,o.kt)("li",{parentName:"ul"},"at most ",(0,o.kt)("em",{parentName:"li"},"200,000 KILT")," tokens.")),(0,o.kt)("h2",{id:"execute-the-joining-transaction"},"Execute the Joining Transaction"),(0,o.kt)("p",null,"The collator must call an extrinsic ",(0,o.kt)("inlineCode",{parentName:"p"},"parachainStaking -> joinCandidates(stake)")," with the desired stake to join the candidate pool."),(0,o.kt)(i.ZP,{mdxType:"StakingTxDisclaimer"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3500).Z,width:"2002",height:"1048"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select your collator KILT address as the extrinsic submitter (the ",(0,o.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,o.kt)("li",{parentName:"ol"},"Select the following extrinsic: ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking -> joinCandidates(stake)")),(0,o.kt)("li",{parentName:"ol"},"Insert the staked KILT amount for your collator (any value between ",(0,o.kt)("inlineCode",{parentName:"li"},"10,000,000,000,000,000,000")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"20,000,000,000,000,000,0000"),")"),(0,o.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,o.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.\nIn the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"s.\nSo, for instance, 1 KILT needs to be written as ",(0,o.kt)("inlineCode",{parentName:"p"},"1,000,000,000,000,000"),", while 10,000 KILT would be written as ",(0,o.kt)("inlineCode",{parentName:"p"},"10,000,000,000,000,000,000"),".")),(0,o.kt)("h2",{id:"check-your-position-in-the-collators-queue"},"Check Your Position in the Collators Queue"),(0,o.kt)("p",null,"As a collator candidate you can check the current top candidates to see their position and the required staked amount to become an active collator, i.e., to start authoring new blocks."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3333).Z,width:"2000",height:"678"})),(0,o.kt)("p",null,"In Polkadot JS (",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer -> Chain state -> Storage")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Selected state query: ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking -> topCandidates(): ParachainStakingSetOrderedSet")),(0,o.kt)("li",{parentName:"ol"},'Execute the query by pressing the "+" button on the right side')),(0,o.kt)("p",null,"Now, you should see a window which lists collators (the ",(0,o.kt)("em",{parentName:"p"},"owner")," field) ordered by their total stake (the ",(0,o.kt)("em",{parentName:"p"},"amount")," field) from greatest to lowest."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(935).Z,width:"2006",height:"780"})),(0,o.kt)("p",null,"If a collator has enough self-stake and delegator stake it will be selected to collate.\nThe last address in the list will be the least staked candidate.\nA time period of two sessions must pass before the selected collator will be authoring blocks, e.g.,  after the remainder of the current session and the entire next one."))}u.isMDXComponent=!0},2635:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(7462),o=(a(7294),a(3905));const i={toc:[]};function r(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,o.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,o.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,o.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,o.kt)("p",null,"In the Polkadot JS Apps (",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}r.isMDXComponent=!0},3500:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-joinCandidates-15604412560816fe1f7a71aa25cc77f0.png"},3333:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-topCandidates1-a8c236ec0fb40d8718bcc057ba696434.png"},935:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-topCandidates2-bc5f6a1ad87e00230b06f5e667eb6580.png"}}]);