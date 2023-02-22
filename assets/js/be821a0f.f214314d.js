"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),o=a(6010),i=a(2389),l=a(7392),s=a(7094),c=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:i,defaultValue:d,values:m,groupId:k,className:h}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:S}=(0,s.U)(),[w,N]=(0,n.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=k){const e=v[k];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),r=f[a].value;r!==w&&(j(t),N(r),null!=k&&S(k,String(r)))},O=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:O,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},2419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),o=a(5488),i=a(5162),l=a(2635);const s={id:"adjust-stake",title:"Adjust Your Delegation Stake"},c=void 0,p={unversionedId:"participate/staking/delegate/adjust-stake",id:"participate/staking/delegate/adjust-stake",title:"Adjust Your Delegation Stake",description:"A delegator can increase and decrease their stake by calling either  parachainStaking -> delegatorStakeMore(more) or parachainStaking -> delegatorStakeLess(less).",source:"@site/docs/participate/01_staking/03_delegate/03_adjust_stake.md",sourceDirName:"participate/01_staking/03_delegate",slug:"/participate/staking/delegate/adjust-stake",permalink:"/docs/participate/staking/delegate/adjust-stake",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/03_delegate/03_adjust_stake.md",tags:[],version:"current",lastUpdatedAt:1670340969,formattedLastUpdatedAt:"Dec 6, 2022",sidebarPosition:3,frontMatter:{id:"adjust-stake",title:"Adjust Your Delegation Stake"},sidebar:"staking",previous:{title:"Become a Delegator",permalink:"/docs/participate/staking/delegate/join"},next:{title:"Leave the Set of Delegators",permalink:"/docs/participate/staking/delegate/exit"}},u={},d=[],m={toc:d};function k(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A delegator can increase and decrease their stake by calling either  ",(0,n.kt)("inlineCode",{parentName:"p"},"parachainStaking -> delegatorStakeMore(more)")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"parachainStaking -> delegatorStakeLess(less)"),".\nYour adjustment becomes effective immediately!\nIf you increase your stake, you will instantly receive higher rewards for any blocks produced by your collator; if you decreased your delegation amount, the reverse applies and you receive less rewards."),(0,n.kt)(l.ZP,{mdxType:"StakingTxDisclaimer"}),(0,n.kt)(o.Z,{groupId:"delegator-adjust-stake",defaultValue:"Stake more",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Stake more",label:"Stake more",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3498).Z,width:"2008",height:"1354"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the KILT address you want to delegate from as the extrinsic submitter (the ",(0,n.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,n.kt)("li",{parentName:"ol"},"Select the extrinsic: ",(0,n.kt)("inlineCode",{parentName:"li"},"parachainStaking -> delegatorStakeMore")),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,n.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,n.kt)("li",{parentName:"ol"},"Select the collator account (the ",(0,n.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,n.kt)("li",{parentName:"ol"},"Choose the desired amount of stake that you want to add to your current stake.\nYou can add up to your maximum available balance."),(0,n.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,n.kt)("em",{parentName:"li"},"Submit Transaction")," button)"))),(0,n.kt)(i.Z,{value:"Stake less",label:"Stake less",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1831).Z,width:"2002",height:"1356"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the KILT address you want to delegate from as the extrinsic submitter (the ",(0,n.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,n.kt)("li",{parentName:"ol"},"Select the extrinsic: ",(0,n.kt)("inlineCode",{parentName:"li"},"parachainStaking -> delegatorStakeLess")),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,n.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,n.kt)("li",{parentName:"ol"},"Select the collator account (the ",(0,n.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,n.kt)("li",{parentName:"ol"},"Choose the desired amount of stake that you want to remove from your current stake.\nYou can reduce down to the minimum delegation amount (20 KILT), e.g., any value up to the difference of your current stake and the minimum will be accepted."),(0,n.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,n.kt)("em",{parentName:"li"},"Submit Transaction")," button)")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You cannot adjust your stake if your Collator candidate is in the leaving state, e.g., they want to stop collating.\nHowever, you can still ",(0,n.kt)("a",{parentName:"p",href:"/docs/participate/staking/delegate/exit"},(0,n.kt)("strong",{parentName:"a"},"remove"))," your delegation.")))}k.isMDXComponent=!0},2635:(e,t,a)=>{a.d(t,{ZP:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={toc:[]};function i(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,n.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,n.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,n.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,n.kt)("p",null,"In the Polkadot JS Apps (",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}i.isMDXComponent=!0},1831:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/parachainStaking-delegatorStakeLess-9e054ea50c2ef11964a1faad5e87ae78.png"},3498:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/parachainStaking-delegatorStakeMore-1a73b2742fca76e1b06d51c91d97f222.png"}}]);