"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3039],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(83117),r=n(67294),o=n(72389),i=n(24726),l=n(86010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,h=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=p?p:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(m,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==g&&!m.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),y=v.tabGroupChoices,w=v.setTabGroupChoices,C=(0,r.useState)(g),N=C[0],T=C[1],O=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=y[h];null!=x&&x!==N&&m.some((function(e){return e.value===x}))&&T(x)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=m[n].value;a!==N&&(I(t),T(a),null!=h&&w(h,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},m.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},62048:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(9877),l=n(58215),s=["components"],u={id:"troubleshooting",title:"Troubleshooting"},c=void 0,d={unversionedId:"participate/staking/troubleshooting",id:"participate/staking/troubleshooting",title:"Troubleshooting",description:"<Tabs",source:"@site/docs/participate/01_staking/05_troubleshooting.md",sourceDirName:"participate/01_staking",slug:"/participate/staking/troubleshooting",permalink:"/docs/participate/staking/troubleshooting",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/05_troubleshooting.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"staking",previous:{title:"Unlock Unstaked Tokens",permalink:"/docs/participate/staking/unlock-unstaked"}},p=[{value:"Collator Rewards Have Stopped",id:"collator-rewards-have-stopped",children:[],level:2},{value:"Delegator Rewards Have Stopped",id:"delegator-rewards-have-stopped",children:[{value:"Why can&#39;t I Transfer Unstaked Tokens?",id:"why-cant-i-transfer-unstaked-tokens",children:[],level:3}],level:2}],h={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{groupId:"collator-delegator",defaultValue:"Collator",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Collator",label:"Collator",mdxType:"TabItem"},(0,o.kt)("p",null,"There are a few things that can be checked to make sure everything is set up correctly."),(0,o.kt)("p",null,"If, from any network explorer, e.g., the one offered by PolkadotJS Apps, the Collator's account is shown next to some of the blocks, then the Collator is correctly producing blocks and getting rewarded for it.\nIf the logs print the message that starts with a \ud83c\udf81 emoji, it indicates that the Collator setup is correct but that the blocks produced are not included by the relaychain.\nThis typically signals some issues about the node hardware or connectivity.\nIf not, it might be that the node does not produce and send blocks fast enough.\nThis can be caused by slow hardware or a slow internet connection.\nAlso, note that a high bandwidth connection can still be slow if it has a high ping!\nBandwidth and latency do not necessarily come hand in hand.\nIn this case, it is better to rule out other options before thinking to upgrade the Collator's hardware."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check that the session keys are associated with the validatorId (aka AccountId).\nThere should be a 32 Byte long public key stored in ",(0,o.kt)("inlineCode",{parentName:"li"},"session > nextKeys(your AccountId)"),"."),(0,o.kt)("li",{parentName:"ol"},"Check that the node has the corresponding private key for the public session key.\nConnect to the node and query ",(0,o.kt)("inlineCode",{parentName:"li"},"author > hasKey(<pubKey from 1.>, aura)")," to see if it returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ol"},"Check that the node is fully synced with the relaychain & parachain (best and finalized block number is equal to the one shown in the PolkadotJS Apps (",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") and on Subscan (",(0,o.kt)("a",{parentName:"li",href:"https://spiritnet.subscan.io/"},"Spiritnet"),", ",(0,o.kt)("a",{parentName:"li",href:"https://kilt-testnet.subscan.io/"},"Peregrine"),")."),(0,o.kt)("li",{parentName:"ol"},"Check that the Collator is among the selected candidates.\nIts address should included in the list returned by querying ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking > topCandidates()"),"."),(0,o.kt)("li",{parentName:"ol"},"Check that the ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking")," pallet has registered the Collator's address among the authorized authors in the ",(0,o.kt)("inlineCode",{parentName:"li"},"session"),".\nIts address should be listed when querying ",(0,o.kt)("inlineCode",{parentName:"li"},"session > validators()"),".")),(0,o.kt)("h2",{id:"collator-rewards-have-stopped"},"Collator Rewards Have Stopped"),(0,o.kt)("p",null,"If you have stopped to receive rewards, either of the following is true:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You were kicked out of the top Collator candidate list because your total stake is too low.\nSee the ",(0,o.kt)("a",{parentName:"li",href:"/docs/participate/staking/become_a_collator/join#check-your-position-in-the-collators-queue"},"section about joining")," for the necessary steps to retrieve the least staked candidate address in that list.\nYou can query their stake by going to ",(0,o.kt)("inlineCode",{parentName:"li"},"Developer -> Chain State")," calling ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking -> candidatePool(address) -> +"),"."),(0,o.kt)("li",{parentName:"ol"},"You have connectivity issues, see above for resolution tips."))),(0,o.kt)(l.Z,{value:"Delegator",label:"Delegator",mdxType:"TabItem"},(0,o.kt)("h2",{id:"delegator-rewards-have-stopped"},"Delegator Rewards Have Stopped"),(0,o.kt)("p",null,"If you have stopped to receive rewards, either"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You were kicked out of your Collator candidate's delegation pool because all current Delegators have a higher stake or"),(0,o.kt)("li",{parentName:"ol"},"Your Collator candidate stopped producing blocks, because they...",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Left the Collator candidate pool intentionally such that they don't have an associated Collator state on-chain henceforth; or"),(0,o.kt)("li",{parentName:"ol"},"Are not among the top staked candidates (of which are 30 at the time of writing 2022-05-05); or"),(0,o.kt)("li",{parentName:"ol"},"Are offline.")))),(0,o.kt)("p",null,"In case of 1. or 2i., your stake will automatically be unstaked and prepared for ",(0,o.kt)("a",{parentName:"p",href:"/docs/participate/staking/unlock-unstaked"},"unlocking"),".\nOtherwise, in case of 2ii. and 2iii., you need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/participate/staking/delegate/exit/"},"manually initiate the unlocking period")," if you don't want to or cannot delegate to another Collator candidate."))),(0,o.kt)("h3",{id:"why-cant-i-transfer-unstaked-tokens"},"Why can't I Transfer Unstaked Tokens?"),(0,o.kt)("p",null,"Staking puts a lock on your tokens which blocks them from being transferred.\nYou can still use them for participating in Governance.\nIf your funds are unstaked, you still need to wait 7 days (in block time) to ",(0,o.kt)("a",{parentName:"p",href:"/docs/participate/staking/unlock-unstaked"},"unlock tokens after unstaking them"),"."))}f.isMDXComponent=!0}}]);