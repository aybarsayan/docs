"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5147],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},262:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={id:"treasury-proposal",title:"Open a Treasury Proposal"},i=void 0,l={unversionedId:"participate/treasury-proposal",id:"participate/treasury-proposal",title:"Open a Treasury Proposal",description:"Complete these steps to create a well-formed Treasury proposal.",source:"@site/docs/participate/03_treasury_proposal.md",sourceDirName:"participate",slug:"/participate/treasury-proposal",permalink:"/docs/participate/treasury-proposal",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/03_treasury_proposal.md",tags:[],version:"current",lastUpdatedAt:1699368097,formattedLastUpdatedAt:"Nov 7, 2023",sidebarPosition:3,frontMatter:{id:"treasury-proposal",title:"Open a Treasury Proposal"}},s={},p=[{value:"Discuss",id:"discuss",level:2},{value:"DID Sign",id:"did-sign",level:2},{value:"Example on IPFS",id:"example-on-ipfs",level:2},{value:"Deposit",id:"deposit",level:2},{value:"Create Proposal",id:"create-proposal",level:2},{value:"Submit Proposal",id:"submit-proposal",level:2},{value:"Polkassembly Details",id:"polkassembly-details",level:2},{value:"Illustration",id:"illustration",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Complete these steps to create a well-formed Treasury proposal."),(0,a.kt)("h2",{id:"discuss"},"Discuss"),(0,a.kt)("p",null,"The first step in applying for a Treasury grant is either to join the community in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/nUpqDfQ6kJ"},"Discord Treasury Channel")," to brainstorm the scope of your proposal intention or immediately open a discussion on ",(0,a.kt)("a",{parentName:"p",href:"https://kilt.polkassembly.network/discussions"},"Polkassembly"),".\nThis will help you get valuable community feedback throughout the process.\nIt also gives Council members an open and transparent way to measure community sentiment."),(0,a.kt)("p",null,"When submitting for discussion, it is best practice to include a proposal document.\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1DBb7jdgVVK09lwQPfOs6WFwbWUGKut7hMMmM_lEX0fA/edit"},"A reference document")," can be found in the KILT Protocol discussions this can be used as a template for future proposals."),(0,a.kt)("h2",{id:"did-sign"},"DID Sign"),(0,a.kt)("p",null,"The proposed document must be DID signed.\nThis requires a DID that must be associated with the proposal.\nTherefore, it requires the proposer to have a DID.\nThe signature provides integrity and accountability about the submitter, which can give more confidence to the community and council."),(0,a.kt)("p",null,"The DID Signature should be done via the ",(0,a.kt)("a",{parentName:"p",href:"https://didsign.io/"},"DIDSign")," dApp.\nThe DIDSign doesn't have a database, nor store any data by the user.\nThe following guide explains ",(0,a.kt)("a",{parentName:"p",href:"https://kilt-protocol.org/files/How-to-Guide-DIDsign.pdf"},"how to create a signature using a DID with DIDSign"),"."),(0,a.kt)("p",null,"Once the document has been signed, the signature must be made publicly available for verification.\nDepending on the services and software used, accessing the storage may require different instructions, e.g., on IPFS or as a GitHub gist or cloud provider.\nThe document should be made publicly available as well as the signature."),(0,a.kt)("h2",{id:"example-on-ipfs"},"Example on IPFS"),(0,a.kt)("p",null,"An example of how to do this via IPFS using Google Drive.\nHave a document ready for the proposal or discussion phase."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make the document publicly available to view and download.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign the PDF version of the Document in the ",(0,a.kt)("a",{parentName:"p",href:"https://didsign.io/"},"DIDSign"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the zip file and upload it to IPFS.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Following the instructions of the IPFS, pin the signature to IPFS and make it publicly available. One solution for doing is ",(0,a.kt)("a",{parentName:"p",href:"https://web3.storage/"},"web3 storage"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the documents and signature have been uploaded to IPFS, add their URL to the proposal or discussion page for verification."))),(0,a.kt)("p",null,"Please include how to verify and download the necessary documents.\nThe following is an example done by BOTLabs GmbH."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\nThe current version of the proposal document has been digitally signed with one of the DIDs that BOTLabs GmbH controls. To verify the signature:\n\n1. Download the PDF version of the Google Document linked above.\n\n2. Download the DID signature of the file from IPFS, with CID QmRcYyPcCKGDQno2m5qBSZq7dftoZKuwraF9C9M96rXR36 (e.g., ipfs.io).\n\n3. Visit didsign.io, and upload both the PDF file and the downloaded signature. The signature should verify correctly and link to the KILT tx in which the timestamp was generated.\n")),(0,a.kt)("p",null,"The example may change depending on the method of storing and creation of the document."),(0,a.kt)("p",null,"If during the discussion the document is edited it will require a new upload and should be updated accordingly."),(0,a.kt)("h2",{id:"deposit"},"Deposit"),(0,a.kt)("p",null,"A deposit of 5% of the amount requested is required in order to submit a proposal.\nIf the proposal is denied, you will lose this amount and it will go to the Treasury to fund other projects.\nThis is why it is essential to engage with the community and show how the proposed work adds value to the network."),(0,a.kt)("h2",{id:"create-proposal"},"Create Proposal"),(0,a.kt)("p",null,"To maximize your chances of success, create a full proposal document with as much information as possible to communicate the value of your work and what it will add to the network\u2019s growth and success.\nCheck out our Treasury proposal template or Polkassembly\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1NilDtFljCc6boyHkz2o2kGyFNhR6hVQSGzz7J0Xhwco/edit"},"proposal document #6")," as examples to help guide your process."),(0,a.kt)("p",null,"Multiple types of proposals can be created covering building and infrastructure, outreach and hackathons, or ",(0,a.kt)("a",{parentName:"p",href:"/docs/participate/content-creation-guidelines"},"educational content")," such as videos, blogs and translations."),(0,a.kt)("p",null,"Once your proposal document is complete, upload it so that it\u2019s accessible to the Council for review.\nDon\u2019t forget to link it when completing the Polkassembly information!"),(0,a.kt)("h2",{id:"submit-proposal"},"Submit Proposal"),(0,a.kt)("p",null,"When you have feedback from the community and are satisfied with your proposal, head to ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://spiritnet.api.onfinality.io/public-ws#/treasury"},"Polkadot.JS apps")),(0,a.kt)("p",null,"Scroll to  the \u201c+ Submit Proposal\u201d button and click.\nComplete the form:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Submit with Account: this is the account that will make the 5% deposit"),(0,a.kt)("li",{parentName:"ul"},"Beneficiary: this is the account that will receive Treasury funding if successful"),(0,a.kt)("li",{parentName:"ul"},"Value: this is the full amount of KILT being requested"),(0,a.kt)("li",{parentName:"ul"},"Click submit to complete the proposal")),(0,a.kt)("h2",{id:"polkassembly-details"},"Polkassembly Details"),(0,a.kt)("p",null,"Click the ",(0,a.kt)("a",{parentName:"p",href:"https://kilt.polkassembly.network/discussions"},"Polkassembly")," link to the right of the proposal on Polkadot.JS and connect with the account that you used to submit the proposal in order to be able to edit the proposal details."),(0,a.kt)("p",null,"Enter the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Title: a title for your project"),(0,a.kt)("li",{parentName:"ul"},"Purpose: what\u2019s your motivation behind the effort"),(0,a.kt)("li",{parentName:"ul"},"Description: a short summary about you, the project and the need for what you are proposing"),(0,a.kt)("li",{parentName:"ul"},"Full Proposal: link to the full proposal"),(0,a.kt)("li",{parentName:"ul"},"Proposal Amount: the amount requested in USD"),(0,a.kt)("li",{parentName:"ul"},"KILT Rate: the current rate of exchange in USD"),(0,a.kt)("li",{parentName:"ul"},"Amount Requested: the total amount of KILT requested"),(0,a.kt)("li",{parentName:"ul"},"Beneficiary: the beneficiary address"),(0,a.kt)("li",{parentName:"ul"},"Period: intended date of delivery if applicable"),(0,a.kt)("li",{parentName:"ul"},"Contact: email or social handle (please specify social network)"),(0,a.kt)("li",{parentName:"ul"},"Engage"),(0,a.kt)("li",{parentName:"ul"},"Share your proposal in our channels to generate support from community and showcase your project (Discord, Telegram, Element, Twitter)")),(0,a.kt)("p",null,"Click ",(0,a.kt)("a",{parentName:"p",href:"https://www.kilt.io/treasury/overview/"},"here")," to get an overview of the Treasury.\nOr click ",(0,a.kt)("a",{parentName:"p",href:"https://www.kilt.io/treasury/content-creation/"},"here")," to see the guidelines for content creation."),(0,a.kt)("h2",{id:"illustration"},"Illustration"),(0,a.kt)("p",null,"The following diagram depicts the flow of a Treasury proposal from having an idea to receiving the funds in the beneficiary address.\nWhile all nodes with yellow background represent ",(0,a.kt)("span",{style:{backgroundColor:"#FFF4BD",color:"black"}},"off-chain processes"),", the remaining ones involve ",(0,a.kt)("span",{style:{backgroundColor:"#85D2D0",color:"black"}},"on-chain activity"),"."),(0,a.kt)("div",{class:"kilt-mermaid"},(0,a.kt)("mermaid",{value:'flowchart TD\n    %% nodes\n    Proposer --\x3e |"Share contribution idea"|Discuss("Polkassembly: \\n kilt.polkassembly.network")\n    Discuss --\x3e |"Gather feedback"|Community\n    Discuss --\x3e |"Come to agreement about \\n scope and financial objective"|Council\n    Community --\x3e |"Supports proposal"|Propose("Propose to chain")\n    Council --\x3e |"Approves pre-proposal"|Propose\n    Propose --\x3e |"reserve 5% of \\n demanded amount \\n"|Deposit\n    Propose --\x3e |"On Polkassembly, \\n provide details in"|Document("Proposal document")\n    Propose ----\x3e |"Select address"|Beneficiary\n    Document --\x3e |"Start work"|Deliverables\n    Deliverables --\x3e |"Complete work"|Council_Review{"Council review"}\n    Council_Review ----\x3e Council_Approval("Council approval")\n    Council_Review -...-> Council_Rejection("Council rejection")\n    Council_Approval ----\x3e |"Receive requested \\n funds from Treasury"|Beneficiary\n    Council_Approval ----\x3e |Unreserve deposit|Deposit\n    Council_Rejection -.-> |"Slash deposit \\n to Treasury"|Deposit\n\n    %% class mapping\n    Proposer:::ofchain\n    Discuss:::ofchain\n    Community:::ofchain\n    Council:::ofchain\n    Propose:::onchain\n    Document:::ofchain\n    Deliverables:::ofchain\n    Council_Review:::ofchain\n    Council_Approval:::onchain\n    Deposit:::onchain\n    Council_Rejection:::onchain\n    Beneficiary:::onchain\n\n    %% styling classes\n    classDef ofchain fill:#FFF4BD, stroke:black, stroke-width:1px, color:black;\n    classDef onchain fill:#85D2D0, stroke:black, stroke-width:1px, color:black;'})))}d.isMDXComponent=!0}}]);