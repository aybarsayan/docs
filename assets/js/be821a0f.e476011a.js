"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[786],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(83117),r=a(67294),o=a(72389),i=a(24726),l=a(86010),s="tabItem_LplD";function u(e){var t,a,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,r.useState)(v),S=w[0],x=w[1],T=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==S&&f.some((function(e){return e.value===O}))&&x(O)}var D=function(e){var t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==S&&(j(t),x(n),null!=m&&N(m,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},f.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},22419:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(9877),l=a(58215),s=a(22635),u=["components"],c={id:"adjust-stake",title:"Adjust Your Delegation Stake"},p=void 0,d={unversionedId:"participate/staking/delegate/adjust-stake",id:"participate/staking/delegate/adjust-stake",title:"Adjust Your Delegation Stake",description:"A Delegator can increase and decrease their stake by calling either  parachainStaking -> delegatorStakeMore(more) or parachainStaking -> delegatorStakeLess(less).",source:"@site/docs/participate/01_staking/03_delegate/03_adjust_stake.md",sourceDirName:"participate/01_staking/03_delegate",slug:"/participate/staking/delegate/adjust-stake",permalink:"/docs/participate/staking/delegate/adjust-stake",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/03_delegate/03_adjust_stake.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"adjust-stake",title:"Adjust Your Delegation Stake"},sidebar:"staking",previous:{title:"Become a Delegator",permalink:"/docs/participate/staking/delegate/join"},next:{title:"Revoke Your Delegation",permalink:"/docs/participate/staking/delegate/revoke"}},m=[],k={toc:m};function h(e){var t=e.components,c=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Delegator can increase and decrease their stake by calling either  ",(0,o.kt)("inlineCode",{parentName:"p"},"parachainStaking -> delegatorStakeMore(more)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"parachainStaking -> delegatorStakeLess(less)"),".\nYour adjustment becomes effective immediately!\nIn case you increased your stake, you instantly receive higher rewards for any produced blocks of your Collator.\nHowever, if you decreased your delegation amount, the reverse applies and you receive less rewards."),(0,o.kt)(s.ZP,{mdxType:"StakingTxDisclaimer"}),(0,o.kt)(i.Z,{groupId:"delegator-adjust-stake",defaultValue:"Stake more",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Stake more",label:"Stake more",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(51795).Z,width:"2008",height:"1354"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the Delegator's KILT address as the extrinsic submitter (the ",(0,o.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,o.kt)("li",{parentName:"ol"},"Select the extrinsic: ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking -> delegatorStakeMore")),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,o.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,o.kt)("li",{parentName:"ol"},"Select the Collator account (the ",(0,o.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,o.kt)("li",{parentName:"ol"},"Choose the desired stake amount which you want to add to your current stake.\nYou can add up to your maximum available balance."),(0,o.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,o.kt)("em",{parentName:"li"},"Submit Transaction")," button)"))),(0,o.kt)(l.Z,{value:"Stake less",label:"Stake less",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(67567).Z,width:"2002",height:"1356"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the Delegator's KILT address as the extrinsic submitter (the ",(0,o.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,o.kt)("li",{parentName:"ol"},"Select the extrinsic: ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking -> delegatorStakeLess")),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,o.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,o.kt)("li",{parentName:"ol"},"Select the Collator account (the ",(0,o.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,o.kt)("li",{parentName:"ol"},"Choose the desired stake amount which you want to remove from your current stake.\nYou can reduce down to the minimum delegation amount (20 KILT), e.g., any value up to the difference of your current stake and the minimum will be accepted."),(0,o.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,o.kt)("em",{parentName:"li"},"Submit Transaction")," button)")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You cannot adjust your stake if your Collator candidate is in the leaving state, e.g., they want to stop collating.\nHowever, you can still ",(0,o.kt)("a",{parentName:"p",href:"/docs/participate/staking/delegate/revoke"},(0,o.kt)("strong",{parentName:"a"},"revoke"))," your delegation or ",(0,o.kt)("a",{parentName:"p",href:"/docs/participate/staking/delegate/exit"},(0,o.kt)("strong",{parentName:"a"},"exit")),"."))))}h.isMDXComponent=!0},22635:function(e,t,a){a.d(t,{ZP:function(){return s}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],l={toc:[]};function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,o.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we explain how to do it for the former case.\nHowever, the latter option is described in detail in the ",(0,o.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,o.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),"."))),(0,o.kt)("p",null," In Polkadot JS (",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}s.isMDXComponent=!0},67567:function(e,t,a){t.Z=a.p+"assets/images/parachainStaking-delegatorStakeLess-9e054ea50c2ef11964a1faad5e87ae78.png"},51795:function(e,t,a){t.Z=a.p+"assets/images/parachainStaking-delegatorStakeMore-1a73b2742fca76e1b06d51c91d97f222.png"}}]);