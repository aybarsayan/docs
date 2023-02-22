"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3110],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(7462),n=a(7294),o=a(6010),s=a(2389),l=a(7392),i=a(7094),c=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:s,defaultValue:d,values:h,groupId:m,className:f}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=h??v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:g}=(0,i.U)(),[T,O]=(0,n.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=m){const e=w[m];null!=e&&e!==T&&y.some((t=>t.value===e))&&O(e)}const D=e=>{const t=e.currentTarget,a=N.indexOf(t),r=y[a].value;r!==T&&(j(t),O(r),null!=m&&g(m,String(r)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},y.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:E,onClick:D},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,n.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function h(e){const t=(0,s.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},9741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),o=a(5488),s=a(5162);const l={id:"attester",title:"\ud83c\udfe2 Attester"},i=void 0,c={unversionedId:"develop/workshop/attester/attester",id:"develop/workshop/attester/attester",title:"\ud83c\udfe2 Attester",description:"In this section you will walk though all processes done by the Attester.",source:"@site/docs/develop/03_workshop/04_attester/index.md",sourceDirName:"develop/03_workshop/04_attester",slug:"/develop/workshop/attester/",permalink:"/docs/develop/workshop/attester/",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/04_attester/index.md",tags:[],version:"current",lastUpdatedAt:1666946848,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"attester",title:"\ud83c\udfe2 Attester"},sidebar:"workshop",previous:{title:"\ud83d\udc53 Overview",permalink:"/docs/develop/workshop/overview"},next:{title:"Account",permalink:"/docs/develop/workshop/attester/account"}},u={},p=[{value:"Folder Structure",id:"folder-structure",level:2}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section you will walk though all processes done by the ",(0,n.kt)("span",{className:"label-role attester"},"Attester"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You will ",(0,n.kt)("a",{parentName:"li",href:"/docs/develop/workshop/attester/account"},"create an account")," that is used to pay for all transactions and the storage deposits."),(0,n.kt)("li",{parentName:"ol"},"The next step is to ",(0,n.kt)("a",{parentName:"li",href:"/docs/develop/workshop/attester/did"},"create a DID"),", which is the identity that is used to create attestations.\nWhile you can always switch the KILT account and pay deposits and fees with any account you like, your DID stays the same and is the way Claimers will identify you and put trust in you."),(0,n.kt)("li",{parentName:"ol"},"Before we can attest claims, ",(0,n.kt)("a",{parentName:"li",href:"/docs/develop/workshop/attester/ctype"},"we need a CType")," which describes and gives context to what we attest."),(0,n.kt)("li",{parentName:"ol"},"Once we have a way to pay fees and deposits, have an identity and a CType ",(0,n.kt)("a",{parentName:"li",href:"/docs/develop/workshop/attestation"},"we can create attestations"),".")),(0,n.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,n.kt)("p",null,"Create the following files in the ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," folder.\nThis folders serves to mimic an ",(0,n.kt)("span",{className:"label-role attester"},"Attester")," service."),(0,n.kt)(o.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500 kilt-rocks/ # project\n  \u2514\u2500 attester/ # all attester code\n     \u251c\u2500 attestCredential.ts # issues attestations\n     \u251c\u2500 ctypeSchema.ts # create a local CType definition\n     \u251c\u2500 generateAccount.ts # functions for setting up and loading the attester's account\n     \u251c\u2500 generateCtype.ts # register the CType on chain\n     \u251c\u2500 generateDid.ts # registers the attester's on-chain DID\n     \u2514\u2500 generateKeypairs.ts # setup the keys for the attester's DID\n"))),(0,n.kt)(s.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500 kilt-rocks/ # project\n  \u2514\u2500 attester/ # all attester code\n     \u251c\u2500 attestCredential.js # issues attestations\n     \u251c\u2500 ctypeSchema.js # create a local CType definition\n     \u251c\u2500 generateAccount.js # functions for setting up and loading the attester's account\n     \u251c\u2500 generateCtype.js # register the CType on chain\n     \u251c\u2500 generateDid.js # registers the attester's on-chain DID\n     \u2514\u2500 generateKeypairs.js # setup the keys for the attester's DID\n")))))}h.isMDXComponent=!0}}]);