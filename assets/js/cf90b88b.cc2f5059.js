"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[191],{5725:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return h}});var i=a(3117),r=a(102),n=a(7294),o=a(3905),s=a(7273);s.Z.initialize({startOnLoad:!0});var l=function(e){var t=e.chart;return(0,n.useEffect)((function(){s.Z.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)},c=["components"],d={id:"overview",title:"\ud83d\udc53 Overview"},u=void 0,p={unversionedId:"sdk/workshop/overview",id:"sdk/workshop/overview",title:"\ud83d\udc53 Overview",description:"In this tutorial, we'll run through the full story of a claim.",source:"@site/docs/sdk/1-workshop/02-overview.md",sourceDirName:"sdk/1-workshop",slug:"/sdk/workshop/overview",permalink:"/docs/sdk/workshop/overview",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/02-overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"overview",title:"\ud83d\udc53 Overview"},sidebar:"sdk",previous:{title:"\ud83c\udf92 Setup",permalink:"/docs/sdk/workshop/setup"},next:{title:"\ud83d\udc64 Account",permalink:"/docs/sdk/workshop/account"}},h=[],m={toc:h};function k(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we'll run through the full story of a claim."),(0,o.kt)("p",null,"To do so, three actors will be involved: a ",(0,o.kt)("span",{class:"label-role claimer"},"claimer"),", an ",(0,o.kt)("span",{class:"label-role attester"},"attester")," and a ",(0,o.kt)("span",{class:"label-role verifier"},"verifier"),". You'll be playing all three roles (unless you're in a KILT workshop and different participants are playing different roles)."),(0,o.kt)("p",null,"These three actors will be exchanging various objects; the most important one is the ",(0,o.kt)("inlineCode",{parentName:"p"},"credential"),".\nThis is how an ",(0,o.kt)("inlineCode",{parentName:"p"},"credential")," is created:"),(0,o.kt)(l,{chart:"graph TD; CTYPE --\x3e claim[claim]; claimContents --\x3e claim; claimerDidIdentifier --\x3e claim; claimerDid[claimerDid] --\x3e requestForAttestation; claim --\x3e requestForAttestation; requestForAttestation --\x3e attestation[attestation]; attesterFullDid --\x3e attestation; attestation --\x3e credential[credential]; requestForAttestatIon --\x3e credential[credential];",mdxType:"Mermaid"}),(0,o.kt)("p",null,"That's a mouthful, but don't worry - we'll dig deeper in the elements of this diagram in the next steps! For now, just keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A credential has a certain type (CTYPE);"),(0,o.kt)("li",{parentName:"ul"},"Obtaining a credential is a multiple-step process that involves a ",(0,o.kt)("span",{class:"label-role claimer"},"claimer")," - such as a citizen who makes a claim about themselves - and an ",(0,o.kt)("span",{class:"label-role attester"},"attester")," - such as a government agency that certifies this claim. A ",(0,o.kt)("span",{class:"label-role verifier"},"verifier")," - such as a government officer - will later on check the validity of the credential.")),(0,o.kt)("p",null,"OK, let's start by generating KILT identities, and then we'll go on and create a claim."))}k.isMDXComponent=!0}}]);