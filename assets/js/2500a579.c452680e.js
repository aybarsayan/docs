"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6275],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=(a(4866),a(5162),a(2635));const l={id:"join",title:"Become a Delegator"},i=void 0,s={unversionedId:"participate/staking/delegate/join",id:"participate/staking/delegate/join",title:"Become a Delegator",description:"In contrast to the rather difficult path to become a collator candidate, joining the delegator pool is rather simple.",source:"@site/docs/participate/01_staking/03_delegate/02_become.md",sourceDirName:"participate/01_staking/03_delegate",slug:"/participate/staking/delegate/join",permalink:"/docs/participate/staking/delegate/join",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/03_delegate/02_become.md",tags:[],version:"current",lastUpdatedAt:1684396814,formattedLastUpdatedAt:"May 18, 2023",sidebarPosition:2,frontMatter:{id:"join",title:"Become a Delegator"},sidebar:"staking",previous:{title:"Overview",permalink:"/docs/participate/staking/delegate/overview"},next:{title:"Adjust Your Delegation Stake",permalink:"/docs/participate/staking/delegate/adjust-stake"}},c={},u=[{value:"Happy Path",id:"happy-path",level:2},{value:"Unhappy Path",id:"unhappy-path",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In contrast to the rather difficult ",(0,r.kt)("a",{parentName:"p",href:"/docs/participate/staking/become_a_collator/overview"},"path to become a collator candidate"),", joining the delegator pool is rather simple.\nAnyone can delegate to a collator candidate by staking a minimum of 20 KILT and calling ",(0,r.kt)("inlineCode",{parentName:"p"},"parachainStaking -> joinDelegators"),"."),(0,r.kt)(o.ZP,{mdxType:"StakingTxDisclaimer"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2352).Z,width:"2004",height:"1334"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the KILT address you want to delegate from as the extrinsic submitter (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> joinDelegators")),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,r.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,r.kt)("li",{parentName:"ol"},"Select the collator account (the ",(0,r.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,r.kt)("li",{parentName:"ol"},"Choose the desired stake amount."),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.\nIn the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"s.\nSo, for instance, 1 KILT needs to be written as ",(0,r.kt)("inlineCode",{parentName:"p"},"1,000,000,000,000,000"),", while 10,000 KILT would be written as ",(0,r.kt)("inlineCode",{parentName:"p"},"10,000,000,000,000,000,000"),".")),(0,r.kt)("h2",{id:"happy-path"},"Happy Path"),(0,r.kt)("p",null,"If your chosen collator candidate has at least one empty slot in their delegation pool (out of 35 maximum slots at the time of writing), your delegation will be successful and you immediately start receiving rewards each time the collator you delegated produces a block."),(0,r.kt)("div",{className:"kilt-mermaid"},(0,r.kt)("mermaid",{value:'flowchart TD\n   A["Hold at least 20 KILT"] --\x3e |"decide on candidate"| B("Collator Candidate chosen");\n   B --\x3e |"call extrinsic joinDelegators"| C{"Can delegate to target? \\n Either \\n 1. There are empty \\n delegations or \\n 2. You delegate more \\n than another Delegator"};\n   C --\x3e |yes| D("Delegating to a Collator Candidate")\n   D --\x3e |"Collator produces block"| E("Account rewards")\n   E --\x3e |"claim"| F("Have rewards in wallet")\n    %% Styles\n    A:::unstakedFreeKilt\n    B:::preDelegationCheck\n    C:::preDelegationCheck\n    D:::activelyDelegating\n    E:::activelyDelegating\n    F:::activelyDelegating\n\n    %% StyleDef\n    classDef preDelegationCheck fill:#FFF4BD, stroke:none, color:black;\n    classDef notDelegating fill:#F1C0B9, stroke:black, color:black, stroke-width:1px;;\n    classDef unstakedFreeKilt fill:#85D2D0, stroke:black, color:black, stroke-width:1px;\n    classDef activelyDelegating fill:#94C973, stroke:#333, color:black, stroke-width:2px;\n    classDef preUnlockStaked fill:#F37970, stroke:black, color:black;'})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If your chosen collator fails to produce blocks, neither the collator itself nor their delegators receive rewards.\nThis can happen if the collator has connectivity issues or are not building blocks fast enough.")),(0,r.kt)("h2",{id:"unhappy-path"},"Unhappy Path"),(0,r.kt)("p",null,"If the delegation pool of your chosen collator candidate is full, you may still delegate to them if you stake more than the current lowest delegator stake of that pool.\nWhen that happens,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The kicked delegator will be replaced by the delegator with a higher delegation (you) immediately"),(0,r.kt)("li",{parentName:"ul"},"The kicked delegator's stake is prepared for unstaking as if they revoked the delegation (",(0,r.kt)("em",{parentName:"li"},"see ",(0,r.kt)("a",{parentName:"em",href:"#Revoking"},"revoking")),")"),(0,r.kt)("li",{parentName:"ul"},"A delegator needs to wait 7 days (in block time) to be able to unlock the stake.\nPlease note that it can take longer in real time as the block times assumes a constant block time of 12s, which is not guaranteed.")),(0,r.kt)("div",{className:"kilt-mermaid"},(0,r.kt)("mermaid",{value:'flowchart TD\n   A["Hold at least 20 KILT"] --\x3e |"Decide on candidate"| B("Collator candidate chosen");\n   B --\x3e |"Call extrinsic joinDelegators"| C{"Can delegate to target? \\n Either \\n 1. There are empty \\n delegations or \\n 2. You delegate more \\n than another delegator"};\n   C --\x3e |no| C2{"Balance locked?\\n e.g., previously delegated \\n without unlocking?"}\n   C2 --\x3e |no| A\n\n    %% Styles\n    A:::unstakedFreeKilt\n    B:::preDelegationCheck\n    C:::preDelegationCheck\n    C2:::notDelegating\n\n    %% StyleDef\n    classDef preDelegationCheck fill:#FFF4BD, stroke:none, color:black;\n    classDef notDelegating fill:#F1C0B9, stroke:black, color:black, stroke-width:1px;\n    classDef unstakedFreeKilt fill:#85D2D0, stroke:black, color:black, stroke-width:1px;'})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For now, an account can only delegate to one collator at any time!\nMoreover, you can only (re-) delegate, e.g., call ",(0,r.kt)("inlineCode",{parentName:"p"},"parachainStaking -> {joinDelegators, delegateAnotherCandidate}"),", once per staking round.")))}m.isMDXComponent=!0},2635:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={toc:[]},l="wrapper";function i(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,r.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,r.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,r.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,r.kt)("p",null,"In the Polkadot JS Apps (",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}i.isMDXComponent=!0},2352:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-joinDelegators-673f3b3d0c410b6f43d425caa29f2e27.png"}}]);