"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),c=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:i,defaultValue:d,values:m,groupId:k,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,r.useState)(v),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=k){const e=y[k];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=S.indexOf(t),n=b[a].value;n!==N&&(x(t),T(n),null!=k&&w(k,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},b.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:E,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},32371:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),i=a(85162),l=a(22635);const s={id:"unlock-unstaked",title:"Unlock Unstaked Tokens"},c=void 0,u={unversionedId:"participate/staking/unlock-unstaked",id:"participate/staking/unlock-unstaked",title:"Unlock Unstaked Tokens",description:"Before you can unlock your previously staked tokens, you have to wait 7 days (in block time).",source:"@site/docs/participate/01_staking/05_unlock_unstaked.md",sourceDirName:"participate/01_staking",slug:"/participate/staking/unlock-unstaked",permalink:"/docs/participate/staking/unlock-unstaked",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/05_unlock_unstaked.md",tags:[],version:"current",lastUpdatedAt:1670340969,formattedLastUpdatedAt:"Dec 6, 2022",sidebarPosition:5,frontMatter:{id:"unlock-unstaked",title:"Unlock Unstaked Tokens"},sidebar:"staking",previous:{title:"Claim Staking Rewards",permalink:"/docs/participate/staking/claim-rewards"},next:{title:"Troubleshooting",permalink:"/docs/participate/staking/troubleshooting"}},p={},d=[],m={toc:d};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before you can unlock your previously staked tokens, you have to wait 7 days (in block time)."),(0,r.kt)(l.ZP,{mdxType:"StakingTxDisclaimer"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(54582).Z,width:"1992",height:"1196"})),(0,r.kt)(o.Z,{groupId:"collator-delegator",defaultValue:"Collator",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Collator",label:"Collator",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select any account with enough balance to cover the transaction fee, which is around 0.005 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> unlockUnstaked(target)")),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,r.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,r.kt)("li",{parentName:"ol"},"Select your collator's KILT address (the ",(0,r.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You have unstaked tokens if you have either reduced your stake without increasing it for (at least) same amount afterwards or executing your exit request."))),(0,r.kt)(i.Z,{value:"Delegator",label:"Delegator",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select any account with enough balance to cover the transaction fee, which is around 0.005 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> unlockUnstaked(target)")),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,r.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,r.kt)("li",{parentName:"ol"},"Select the KILT address you delegated from (the ",(0,r.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Even if you have not exited, reduced or removed your delegation, you can still have unstaked tokens.\nThis can happen if either of the following events occurred"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You were kicked out of your collator candidate's delegation pool because all current delegators have a higher stake"),(0,r.kt)("li",{parentName:"ul"},"Your collator candidate intentionally left the collator pool."))))))}k.isMDXComponent=!0},22635:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,r.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,r.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,r.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,r.kt)("p",null,"In the Polkadot JS Apps (",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}i.isMDXComponent=!0},54582:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-unlockUnstaked-b250815bd10f91e7aa7555e2530bb56f.png"}}]);