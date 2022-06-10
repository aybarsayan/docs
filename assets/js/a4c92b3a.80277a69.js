(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5563],{31171:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),l=n(93456),c=["components"],r={id:"lifecycle",title:"Lifecycle of a Collator"},s=void 0,d={unversionedId:"participate/staking/advanced_collator_section/lifecycle",id:"participate/staking/advanced_collator_section/lifecycle",title:"Lifecycle of a Collator",description:"The following diagram visualizes the full lifecycle of a Collator from owning free KILT to joining the Collator candidate pool, initiating the exit, waiting for the stake to be unlockable and eventually unlocking their bond.",source:"@site/docs/participate/01_staking/02_advanced_collator_section/03_collator_lifecycle.md",sourceDirName:"participate/01_staking/02_advanced_collator_section",slug:"/participate/staking/advanced_collator_section/lifecycle",permalink:"/docs/participate/staking/advanced_collator_section/lifecycle",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/02_advanced_collator_section/03_collator_lifecycle.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"lifecycle",title:"Lifecycle of a Collator"},sidebar:"staking",previous:{title:"Leave the Collator Candidate Pool",permalink:"/docs/participate/staking/advanced_collator_section/exit"},next:{title:"Set Up Node Monitoring",permalink:"/docs/participate/staking/advanced_collator_section/monitoring"}},f=[],k={toc:f};function u(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following diagram visualizes the full lifecycle of a Collator from owning free KILT to joining the Collator candidate pool, initiating the exit, waiting for the stake to be unlockable and eventually unlocking their bond.\nIt summarizes the previous ",(0,o.kt)("a",{parentName:"p",href:"/docs/participate/staking/advanced_collator_section/exit"},"exit")," section."),(0,o.kt)("div",{className:"kilt-mermaid"},(0,o.kt)(l.Mermaid,{config:{},chart:'flowchart TD\n    A["Hold (at least) 10K KILT"] --\x3e|join_candidates| B(Candidate)\n    B ---\x3e|init_leave_candidates|I("Leaving Candidate\n(locked)")\n    I ---\x3e G{"2 Sessions (4h)\n passed?"}\n    I --\x3e|cancel_leave_candidates|B\n    G --\x3e|no|I\n    G --\x3e|yes|H("Leaving Candidate\n(unlocked)")\n    H --\x3e|execute_leave_candidates|J("Locked Balance")\n    H --\x3e|cancel_leave_candidates|B\n    J ---\x3eK{"At least 7 days\npassed?"}\n    K --\x3e|yes|L("Balance with expired lock")\n    K --\x3e|no|J\n    L --\x3e|unlock_unstaked|A\n\n    %% style assignment\n    A:::unstakedFreeKilt\n    B:::activeCollator\n    I:::leavingLocked\n    G:::leavingLocked\n    H:::leavingUnlocked\n    J:::leavingUnlocked\n    K:::leavingUnlocked\n    L:::stakedReleasableKilt\n\n    %% style definition\n    classDef leavingLocked fill:#FFF4BD,stroke:none;\n    classDef leavingUnlocked fill:#F1C0B9, stroke:black, stroke-width:1px;;\n    classDef unstakedFreeKilt fill:#85D2D0,stroke:black, stroke-width:1px;\n    classDef activeCollator fill:#94C973,stroke:#333, stroke-width:2px;\n    classDef stakedReleasableKilt fill:#F37970, stroke:black;',mdxType:"Mermaid"})))}u.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=11748}}]);