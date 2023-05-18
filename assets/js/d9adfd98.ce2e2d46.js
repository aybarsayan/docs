"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),i=n(6550),l=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=l??p;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},2012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={id:"session-keys",title:"Set and Rotate Session Keys"},l=void 0,c={unversionedId:"participate/staking/become_a_collator/session-keys",id:"participate/staking/become_a_collator/session-keys",title:"Set and Rotate Session Keys",description:"As a collator, you need to link your session keys to your collator account.",source:"@site/docs/participate/01_staking/01_become_a_collator/04_session_keys.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/session-keys",permalink:"/docs/participate/staking/become_a_collator/session-keys",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/04_session_keys.md",tags:[],version:"current",lastUpdatedAt:1684396814,formattedLastUpdatedAt:"May 18, 2023",sidebarPosition:4,frontMatter:{id:"session-keys",title:"Set and Rotate Session Keys"},sidebar:"staking",previous:{title:"Set Up a Node",permalink:"/docs/participate/staking/become_a_collator/setup-node"},next:{title:"Join the Collator Candidate Pool",permalink:"/docs/participate/staking/become_a_collator/join"}},u={},p=[{value:"Generate New Session Keys",id:"generating-session-keys",level:2}],d={toc:p},h="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As a collator, you need to link your session keys to your collator account.\nOnce linked, the keys are used to identify your collator node.\nYour collator address will receive the permit to build blocks, but the session keys pass this permit to your node.\nTo check whether the account has already some session keys set, the RPC functions ",(0,r.kt)("inlineCode",{parentName:"p"},"author > hasKey(publicKey, keyType)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"author > hasSessionKeys(sessionKeys)")," can be called."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2573).Z,width:"2008",height:"748"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The session keys associate a collator node with an account on the blockchain.\nThey are hot keys that must be kept online.\nIt is recommended to change them throughout sessions.")),(0,r.kt)("h2",{id:"generating-session-keys"},"Generate New Session Keys"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that no unauthorized party is able to access the RPC endpoint of the collator.\nUse SSH forwarding for the RPC port when needing to perform some RPC operations on the node with"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"ssh -L 127.0.0.1:9944:127.0.0.1:9944 <user>@<server>\n"))),(0,r.kt)("p",null,"There are three ways to create the session keys.\nWe recommend using the curl command on the same host that the node is running or from a host that has an active SSH tunnel with it.\nThis way there is no need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--unsafe-rpc-external")," argument to the node.\nNevertheless, the session keys can also be rotated using the PolkadotJS Apps interface or by directly storing the new key in the node's keystore."),(0,r.kt)(o.Z,{defaultValue:"curl",values:[{label:"curl",value:"curl"},{label:"Apps",value:"apps"},{label:"Subkey",value:"subkey"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,r.kt)("p",null,"A collator can use the following command to rotate the session key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n')),(0,r.kt)("p",null,"The answer should look like the JSON object below.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," key is the HEX-encoded public part of the newly created session key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"jsonrpc":"2.0","result":"0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010","id":1}\n'))),(0,r.kt)(s.Z,{value:"apps",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to use the PolkadotJS Apps UI, the node WebSocket endpoint must be reachable.\nThis can be done either by publicly exposing it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," flag, which is discouraged, or by setting up an SSH tunnel for the WebSocket endpoint with ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh -L 127.0.0.1:9933:127.0.0.1:9933 <user>@<server>"),".\nIf the latter option is chosen, there is no need to have a separate SSH tunnel for RPC traffic as all the RPC operations can be performed directly from the now-accessible PolkadotJS Apps interface."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(314).Z,width:"638",height:"218"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(793).Z,width:"330",height:"544"})),(0,r.kt)("p",null,"After connecting to the node, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer -> RPC calls -> author -> rotateKeys()")," from the menu.\nThis will generate a new session key which replaces the existing one."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4595).Z,width:"1998",height:"500"}))),(0,r.kt)(s.Z,{value:"subkey",mdxType:"TabItem"},(0,r.kt)("p",null,"A keypair can be created using the ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey"},"subkey tool")," by following the steps in the tool's official documentation.\nThe generated private and public keys can then be saved within the keystore folder of the collator node to be used as session keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u276f subkey generate -n kilt\nSecret phrase `very secure private key you should not use the example private key` is account:\n  Secret seed:      0xcafe97b4b8f0adc1adeb3feef30bf2e5b9d49ddd897f268c8027c850DeadBEEF\n  Public key (hex): 0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010\n  Account ID:       0xda3861a45e0197f3ca145c2c209f9126e5053asdg03e459af4255cf8011d51010\n  SS58 Address:     4srC1aowD94H9UH9xsnfv7XV6oHU6dhCymKYZHWKsdddaP29\n")),(0,r.kt)("p",null,"The name of the file must be the ",(0,r.kt)("em",{parentName:"p"},"public")," key prepended with ",(0,r.kt)("inlineCode",{parentName:"p"},"61757261")," (HEX representation of ",(0,r.kt)("inlineCode",{parentName:"p"},"aura"),") and without the ",(0,r.kt)("inlineCode",{parentName:"p"},"0x")," prefix, while the content of the file has to be the secret phrase."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1767).Z,width:"1346",height:"137"})),(0,r.kt)("p",null,"For instance, with the keypair generated in the example, the session key file would be stored at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"./keystores/61757261da3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010"),"."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The rotation of the session key should be done periodically to ensure that your collator can remain secure and safe from attacks.\nYou can find more information about session keys in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/session-keys/#generation-and-use"},"Substrate Documentation"),".")),(0,r.kt)("p",null,"Once a new session key is generated, you must then link that key to your collator account in order to receive rewards for producing new blocks..\nThis operation is performed by submitting a signed extrinsic to the blockchain."),(0,r.kt)("p",null,"For Spiritnet, the endpoint is ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", while for Peregrine it is ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select your collator KILT address as the extrinsic submitter (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Set up the following extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"session -> setKeys(keys, proof)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keys")," -> the public session key (",(0,r.kt)("inlineCode",{parentName:"li"},"0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010")," in the example above)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proof")," -> the proof of ownership. It can be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0x00")))),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1367).Z,width:"2006",height:"838"})),(0,r.kt)("p",null,"Once the extrinsic is executed, you will have linked the new session key to your account and can start receiving rewards for producing new blocks.\nHowever, the new session key does not become effective immediately but with the start of the next session."))}m.isMDXComponent=!0},2573:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/author-hasKey-6caffb2e9451f1adac3c41d19af71c98.png"},4595:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/author-rotateKeys-05b59c348c0849e595f378b8fd0677ce.png"},314:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chain-menu-3faf84d47516433952fdf28656432cdf.png"},793:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chain-selection-2e5266e706e96d168aa43bd9924db793.png"},1767:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/session-key-file-34f900633d965771da7ad282f7dcb4ab.png"},1367:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/session-setKeys-13186e3682ebaaf4b589a81523e8a9f4.png"}}]);