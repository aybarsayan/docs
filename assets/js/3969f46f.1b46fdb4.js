"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2096],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),i=a(6010),o=a(2466),l=a(6550),s=a(1980),c=a(7392),d=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,i]),tabValues:i}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(f,(0,n.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},8578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>T,frontMatter:()=>w,metadata:()=>v,toc:()=>S});var n=a(7462),r=(a(7294),a(3905)),i=a(814),o=a(4866),l=a(5162),s=a(2635);const c="import * as Kilt from '@kiltprotocol/sdk-js'\nimport { Balance } from '@polkadot/types/interfaces'\n\nexport async function getUnclaimedStakingRewards(account: Kilt.KiltAddress) {\n  const api = Kilt.ConfigService.get('api')\n\n  const rewards = await api.call.staking.getUnclaimedStakingRewards<Balance>(\n    account\n  )\n  return rewards.toBigInt()\n}\n",d="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function claimCollatorStakingRewards(\n  submitterAccount: Kilt.KeyringPair\n) {\n  const api = Kilt.ConfigService.get('api')\n\n  const tx = api.tx.utility.batch([\n    // convert collator participation points into rewards\n    api.tx.parachainStaking.incrementCollatorRewards(),\n    // mint rewards for collator address\n    api.tx.parachainStaking.claimRewards()\n  ])\n\n  // boilerplate to sign and send tx to websocket\n  return new Promise((resolve, reject) =>\n    tx.signAndSend(submitterAccount, ({ status, dispatchError }) => {\n      if (status.isFinalized && !dispatchError) {\n        onSuccess(\n          submitterAccount.address,\n          status.asFinalized.toString(),\n          resolve\n        )\n      }\n      if (dispatchError) {\n        if (dispatchError.isModule) {\n          // for module errors, we have the section indexed, lookup\n          const decoded = api.registry.findMetaError(dispatchError.asModule)\n          const { docs, name, section } = decoded\n\n          const error = new Error(`${section}.${name}: ${docs.join(' ')}`)\n          onError(error, reject)\n        } else {\n          // Other, CannotLookup, BadOrigin, no extra info\n          const error = new Error(dispatchError.toString())\n          onError(error, reject)\n        }\n      }\n    })\n  )\n}\n\n// boilerplate handlers\nconst onSuccess = (\n  address: string,\n  txHash: string,\n  resolve: (res: string) => void\n) => {\n  console.log(\n    `Claimed collator staking rewards for ${address} with tx hash ${txHash}`\n  )\n  resolve(txHash)\n}\nconst onError = (error: Error, reject: (err: Error) => void) => {\n  console.error(`Failed to claim collator staking rewards due to ${error}`)\n  reject(error)\n}\n",p={toc:[{value:"Prepare claiming",id:"prepare-claiming",level:3},{value:"Claim",id:"claim",level:3},{value:"Recommendation: Batched call",id:"recommendation-batched-call",level:3}]},u="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"nested-tab"},(0,r.kt)(o.Z,{groupId:"rewards-apps-code",defaultValue:"polkadot-apps",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"polkadot-apps",label:"Polkadot Apps",attributes:{"data-value":"magenta"},mdxType:"TabItem"},(0,r.kt)("h3",{id:"prepare-claiming"},"Prepare claiming"),(0,r.kt)("p",null,"First, you need to convert your ",(0,r.kt)("em",{parentName:"p"},"reward points")," into balance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the collator account for which you want to claim the rewards.\nIt should have enough balance to cover the transaction fee which is around 0.0001 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> incrementCollatorRewards()")),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2299).Z,width:"1420",height:"467"})),(0,r.kt)("h3",{id:"claim"},"Claim"),(0,r.kt)("p",null,"Finally, you can claim your well deserved staking rewards."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the collator account for which you want to claim the rewards.\nIt should have enough balance to cover the transaction fee which is around 0.0001 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> claimRewards()")),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6201).Z,width:"1420",height:"438"})),(0,r.kt)("h3",{id:"recommendation-batched-call"},"Recommendation: Batched call"),(0,r.kt)("p",null,"We recommend to execute both extrinsics in a single batch to save on transaction fees:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the collator account for which you want to claim the rewards.\nIt should have enough balance to cover the transaction fee which is around 0.000112 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the batch extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"utility -> batch()")),(0,r.kt)("li",{parentName:"ol"},"Select the reward increment extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> incrementCollatorRewards()")),(0,r.kt)("li",{parentName:"ol"},"Press the ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," button and add the reward claiming extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> claimRewards()")),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4182).Z,width:"1421",height:"658"}))),(0,r.kt)(l.Z,{value:"polkadot-js",label:"Polkadot JS",attributes:{"data-value":"magenta"},mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-ts",mdxType:"CodeBlock"},d)))))}m.isMDXComponent=!0;const h="import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function claimDelegatorStakingRewards(\n  submitterAccount: Kilt.KeyringPair\n) {\n  const api = Kilt.ConfigService.get('api')\n\n  const tx = api.tx.utility.batch([\n    // convert delegator participation points into rewards\n    api.tx.parachainStaking.incrementDelegatorRewards(),\n    // mint rewards for delegator address\n    api.tx.parachainStaking.claimRewards()\n  ])\n\n  // boilerplate to sign and send tx to websocket\n  return new Promise((resolve, reject) =>\n    tx.signAndSend(submitterAccount, ({ status, dispatchError }) => {\n      if (status.isFinalized && !dispatchError) {\n        onSuccess(\n          submitterAccount.address,\n          status.asFinalized.toString(),\n          resolve\n        )\n      }\n      if (dispatchError) {\n        if (dispatchError.isModule) {\n          // for module errors, we have the section indexed, lookup\n          const decoded = api.registry.findMetaError(dispatchError.asModule)\n          const { docs, name, section } = decoded\n\n          const error = new Error(`${section}.${name}: ${docs.join(' ')}`)\n          onError(error, reject)\n        } else {\n          // Other, CannotLookup, BadOrigin, no extra info\n          const error = new Error(dispatchError.toString())\n          onError(error, reject)\n        }\n      }\n    })\n  )\n}\n\n// boilerplate handlers\nconst onSuccess = (\n  address: string,\n  txHash: string,\n  resolve: (res: string) => void\n) => {\n  console.log(\n    `Claimed delegator staking rewards for ${address} with tx hash ${txHash}`\n  )\n  resolve(txHash)\n}\nconst onError = (error: Error, reject: (err: Error) => void) => {\n  console.error(`Failed to claim delegator staking rewards due to ${error}`)\n  reject(error)\n}\n",k={toc:[{value:"Prepare claiming",id:"prepare-claiming",level:3},{value:"Claim",id:"claim",level:3},{value:"Recommendation: Batched call",id:"recommendation-batched-call",level:3}]},g="wrapper";function b(e){let{components:t,...s}=e;return(0,r.kt)(g,(0,n.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"nested-tab"},(0,r.kt)(o.Z,{groupId:"rewards-apps-code",defaultValue:"polkadot-apps",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"polkadot-apps",label:"Polkadot Apps",attributes:{"data-value":"magenta"},mdxType:"TabItem"},(0,r.kt)("h3",{id:"prepare-claiming"},"Prepare claiming"),(0,r.kt)("p",null,"First, you need to convert your ",(0,r.kt)("em",{parentName:"p"},"reward points")," into balance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the delegator account for which you want to claim the rewards. It should have enough balance to cover the transaction fee which is around 0.0001 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> incrementDelegatorRewards()")),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8786).Z,width:"1420",height:"459"})),(0,r.kt)("h3",{id:"claim"},"Claim"),(0,r.kt)("p",null,"Finally, you can claim your well deserved staking rewards."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the delegator account for which you want to claim the rewards. It should have enough balance to cover the transaction fee which is around 0.0001 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> claimRewards()")),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6201).Z,width:"1420",height:"438"})),(0,r.kt)("h3",{id:"recommendation-batched-call"},"Recommendation: Batched call"),(0,r.kt)("p",null,"We recommend to execute both extrinsics in a single batch to save on transaction fees:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the delegator account for which you want to claim the rewards.\nIt should have enough balance to cover the transaction fee which is around 0.000112 KILT (the ",(0,r.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,r.kt)("li",{parentName:"ol"},"Select the batch extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"utility -> batch()")),(0,r.kt)("li",{parentName:"ol"},"Select the reward increment extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> incrementDelegatorRewards()")),(0,r.kt)("li",{parentName:"ol"},"Press the ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," button and add the reward claiming extrinsic: ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking -> claimRewards()")),(0,r.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,r.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8050).Z,width:"1419",height:"649"}))),(0,r.kt)(l.Z,{value:"polkadot-js",label:"Polkadot JS",attributes:{"data-value":"magenta"},mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-ts",mdxType:"CodeBlock"},h)))))}b.isMDXComponent=!0;const w={id:"claim-rewards",title:"Claim Staking Rewards"},f=void 0,v={unversionedId:"participate/staking/claim-rewards",id:"participate/staking/claim-rewards",title:"Claim Staking Rewards",description:"Until runtime version 1.7.5 (spiritnet-10750), staking rewards were automatically minted.",source:"@site/docs/participate/01_staking/04_claim_rewards.md",sourceDirName:"participate/01_staking",slug:"/participate/staking/claim-rewards",permalink:"/docs/participate/staking/claim-rewards",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/04_claim_rewards.md",tags:[],version:"current",lastUpdatedAt:1692697628,formattedLastUpdatedAt:"Aug 22, 2023",sidebarPosition:4,frontMatter:{id:"claim-rewards",title:"Claim Staking Rewards"},sidebar:"staking",previous:{title:"Lifecycle of a Delegator",permalink:"/docs/participate/staking/delegate/lifecycle"},next:{title:"Unlock Unstaked Tokens",permalink:"/docs/participate/staking/unlock-unstaked"}},y={},S=[{value:"How to check the reward amount",id:"how-to-check-the-reward-amount",level:2},{value:"How to claim",id:"how-to-claim",level:2}],x={toc:S},N="wrapper";function T(e){let{components:t,...d}=e;return(0,r.kt)(N,(0,n.Z)({},x,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Until runtime version 1.7.5 (",(0,r.kt)("inlineCode",{parentName:"p"},"spiritnet-10750"),"), staking rewards were automatically minted.\nIn 1.8.0 (",(0,r.kt)("inlineCode",{parentName:"p"},"spiritnet-10801"),") this will change:\nHereafter, the rewards are still accounted to the collators and their delegators in each block.\nHowever, they need to be actively claimed by calling an extrinsic, similar to the pull-based approach on Polkadot.\nSince the rewards never expire, one does not need to rush to do so."),(0,r.kt)("p",null,"This change improves the scalability of our LDPoS by orders of magnitude because it removes the ",(0,r.kt)("inlineCode",{parentName:"p"},"Rewarded")," events for a collator and all their delegators in each block.\nThis reduces the number of taxable events from many thousands per year to any number a user might find suitable.\nPlease check our blogpost for more details."),(0,r.kt)("h2",{id:"how-to-check-the-reward-amount"},"How to check the reward amount"),(0,r.kt)("p",null,"Unfortunately, the amount of accumulated rewards are not directly stored on the chain but divided into multiple storage entries.\nLuckily, you can easily query your current reward status by performing a runtime API call which we created for that specific purpose.\nSince this is just a simple query, it does not cost any transaction fees."),(0,r.kt)(o.Z,{groupId:"rewards-apps-code",defaultValue:"polkadot-apps",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"polkadot-apps",label:"Polkadot Apps",mdxType:"TabItem"},(0,r.kt)("p",null,"In the Polkadot JS Apps (",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer"},"wss://peregrine.kilt.io"),") go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer -> Runtime calls"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"parachainStaking")," endpoint."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"getUnclaimedStakingRewards(account)")," call."),(0,r.kt)("li",{parentName:"ol"},"Select your KILT address (the ",(0,r.kt)("em",{parentName:"li"},"account: AccountId32")," field)"),(0,r.kt)("li",{parentName:"ol"},"Submit the runtime call (the ",(0,r.kt)("em",{parentName:"li"},"Submit Runtime call")," button). You do not need to sign or pay any fees.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6593).Z,width:"1421",height:"415"}))),(0,r.kt)(l.Z,{value:"polkadot-js",label:"Polkadot JS",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-ts",mdxType:"CodeBlock"},c))),(0,r.kt)("h2",{id:"how-to-claim"},"How to claim"),(0,r.kt)("p",null,"In order to move the staking rewards into your wallet, you need to call two different extrinsics: ",(0,r.kt)("inlineCode",{parentName:"p"},"increment{Collator, Delegator}Rewards")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"claimRewards"),".\nThis can be done sequentially or in a batch.\nTo save transaction fees, we recommend the latter ",(0,r.kt)("a",{parentName:"p",href:"#recommendation-batched-call"},"batched call"),"."),(0,r.kt)("div",{className:"kilt-mermaid"},(0,r.kt)("mermaid",{value:'\ngraph TD\nAlice("Alice holds free KILT") ---\x3e |"call joinCandidates"| C("Active Collator")\nAlice ---\x3e |"call joinDelegators"| D("Active Delegator")\nC ---\x3e |"build block"| R\nD ---\x3e |"delegated collator \\n builds block"| R("Reward counter is \\n internally increased")\nR ---\x3e |"call increment...Rewards"| R2("Rewards are \\n converted into Balance")\nR2 ---\x3e |"call claimRewards"| R3("Rewards are moved \\n into Alice\'s wallet")\n'})),(0,r.kt)(s.ZP,{mdxType:"StakingTxDisclaimer"}),(0,r.kt)(o.Z,{groupId:"collator-delegator",defaultValue:"Collator",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Collator",label:"Collator",mdxType:"TabItem"},(0,r.kt)(m,{mdxType:"ClaimRewardsCollator"})),(0,r.kt)(l.Z,{value:"Delegator",label:"Delegator",mdxType:"TabItem"},(0,r.kt)(b,{mdxType:"ClaimRewardsDelegator"}))))}T.isMDXComponent=!0},2635:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={toc:[]},o="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,r.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we outline the steps for Polkadot JS Apps.\nThe process for KILT Stakeboard is described in detail in the ",(0,r.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,r.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,r.kt)("p",null,"In the Polkadot JS Apps (",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io#/explorer"},"wss://peregrine.kilt.io"),") go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}l.isMDXComponent=!0},4182:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-batch-incrementCollatorRewards-claimRewards-cf9d1be88767ac8a9fe4e1f354fedc66.png"},8050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-batch-incrementDelegatorRewards-claimRewards-52eda11f9fc6c1f6e59e553c16830421.png"},6201:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-claimRewards-0ac5ca4fccb9cacf7299444aa349cefb.png"},6593:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-getUnclaimedStakingRewards-46b8e3d6ece765477c75ec3c40bcc2c3.png"},2299:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-incrementCollatorRewards-e604fbe81682f3a4b13b2befd28829a5.png"},8786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parachainStaking-incrementDelegatorRewards-701363b804c4b0d666abc9afc9107a0f.png"}}]);