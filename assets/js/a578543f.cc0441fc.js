"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9092],{6793:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(7294),a=s(6823);const o=e=>{let{children:t,funcName:s="main",funcEnd:o="}",snippets:i,leadingSpaces:r=2,...c}=e;const p=t.split(/\r?\n/);let l="";if(i)l=JSON.parse(i).map((e=>Array.isArray(e)?p.slice(e[0],e[1]).map((e=>e.slice(r))).join("\n"):e)).join("\n");else if(s){let e,t;for(let n=0;n<p.length;n++)if(p[n].includes(s)){if(e=n,p[n].includes(" {"))break}else if(p[n].includes(" {")&&void 0!==e){e=n;break}for(let s=p.length-1;s>0;s--)if(p[s].includes(o)){t=s;break}l=p.slice(e+1,t).map((e=>e.slice(r))).join("\n")}return n.createElement(a.Z,c,l)}},9393:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=s(7462),a=(s(7294),s(3905)),o=s(6793);const i={id:"replay_protection",title:"Protect Against Replay Attacks"},r=void 0,c={unversionedId:"develop/sdk/cookbook/messaging/replay_protection",id:"develop/sdk/cookbook/messaging/replay_protection",title:"Protect Against Replay Attacks",description:"Whenever data travels on a public network, even when encrypted or signed, the communicating parties need to make sure they never accept and process a message more than once to protect against exploits by malicious third parties (so-called replay attacks).",source:"@site/docs/develop/01_sdk/02_cookbook/06_messaging/02_replay_protection.md",sourceDirName:"develop/01_sdk/02_cookbook/06_messaging",slug:"/develop/sdk/cookbook/messaging/replay_protection",permalink:"/docs/develop/sdk/cookbook/messaging/replay_protection",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/06_messaging/02_replay_protection.md",tags:[],version:"current",lastUpdatedAt:1681216738,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:2,frontMatter:{id:"replay_protection",title:"Protect Against Replay Attacks"},sidebar:"sdk",previous:{title:"Generate a Message",permalink:"/docs/develop/sdk/cookbook/messaging/messaging_book"},next:{title:"SignCallback",permalink:"/docs/develop/sdk/cookbook/signCallback"}},p={},l=[],d={toc:l};function m(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Whenever data travels on a public network, even when encrypted or signed, the communicating parties need to make sure they never accept and process a message more than once to protect against exploits by malicious third parties (so-called replay attacks).\nWhen requesting and submitting credential presentations, vulnerabilities for replay attacks can be prevented by requesting that the Claimer sign a unique piece of data as part of the presentation, as shown in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/claiming/presentation-creation"},"Verification Cookbook section"),"."),(0,a.kt)("p",null,"However, protection against replay attacks can also happen on the message layer.\nTo help prevent these types of attacks, KILT messages are timestamped and expose a unique identifier as part of their encrypted content, which therefore cannot be tampered with.\nIt is good practice to impose limits on an acceptable range for timestamps on incoming messages and to keep a record of the ids of previous submissions, which can be purged after their acceptance range has run out.\nThis way, any resubmission is either rejected because its id is known to the recipient, or because its timestamp is too old.\nBelow you can find example code of how this could be implemented."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Define acceptance range and set up a record of past submissions:")),(0,a.kt)(o.Z,{className:"language-ts",mdxType:"SnippetBlock"},"/* eslint-disable @typescript-eslint/no-unused-vars */\n\nexport function main() {\n  const MAX_ACCEPTED_AGE = 60_000 // ms -> 1 minute\n  const MIN_ACCEPTED_AGE = -1_000 // allow for some imprecision in system time\n  const submissions = new Map<string, number>()\n}\n"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Check record for each incoming message and update if accepted:")),(0,a.kt)(o.Z,{className:"language-ts",mdxType:"SnippetBlock"},"/* eslint-disable @typescript-eslint/no-unused-vars */\n\nimport { blake2AsHex } from '@polkadot/util-crypto'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function main(\n  submissions: Map<string, number>,\n  decrypted: Kilt.IMessage,\n  MIN_ACCEPTED_AGE: number,\n  MAX_ACCEPTED_AGE: number\n) {\n  // Is messageId fresh and createdAt recent?\n  const messageId =\n    decrypted.messageId || blake2AsHex(JSON.stringify(decrypted))\n  if (\n    submissions.has(messageId) ||\n    decrypted.createdAt < Date.now() - MAX_ACCEPTED_AGE ||\n    decrypted.createdAt > Date.now() - MIN_ACCEPTED_AGE\n  ) {\n    // no -> reject message\n  } else {\n    submissions.set(messageId, decrypted.createdAt)\n    // yes -> accept & process message\n  }\n}\n"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Purge at regular intervals:")),(0,a.kt)(o.Z,{className:"language-ts",mdxType:"SnippetBlock"},"/* eslint-disable @typescript-eslint/no-unused-vars */\n\nexport function main(\n  submissions: Map<string, number>,\n  MAX_ACCEPTED_AGE: number\n) {\n  setInterval(() => {\n    const outdatedTimestamp = Date.now() - MAX_ACCEPTED_AGE\n    submissions.forEach((timestamp, hash) => {\n      if (timestamp < outdatedTimestamp) submissions.delete(hash)\n    })\n  }, 1000)\n}\n"))}m.isMDXComponent=!0}}]);