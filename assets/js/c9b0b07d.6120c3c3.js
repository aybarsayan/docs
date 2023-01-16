"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6370],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=d(o),f=n,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||i;return o?r.createElement(m,l(l({ref:t},u),{},{components:o})):r.createElement(m,l({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:n,l[1]=a;for(var d=2;d<i;d++)l[d]=o[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1806:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));const i={id:"troubleshoot-sdk",title:"Troubleshoot"},l=void 0,a={unversionedId:"develop/sdk/troubleshoot-sdk",id:"develop/sdk/troubleshoot-sdk",title:"Troubleshoot",description:"Solutions and workarounds for common or unresolved issues.",source:"@site/docs/develop/01_sdk/05_troubleshoot.md",sourceDirName:"develop/01_sdk",slug:"/develop/sdk/troubleshoot-sdk",permalink:"/docs/develop/sdk/troubleshoot-sdk",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/05_troubleshoot.md",tags:[],version:"current",lastUpdatedAt:1663313121,formattedLastUpdatedAt:"Sep 16, 2022",sidebarPosition:5,frontMatter:{id:"troubleshoot-sdk",title:"Troubleshoot"},sidebar:"sdk",previous:{title:"ViteJS",permalink:"/docs/develop/sdk/integrate/howto-integrate-vitejs"}},s={},d=[{value:"Webpack &lt; 5 used to include polyfills",id:"webpack--5-used-to-include-polyfills",level:2},{value:"Solution",id:"solution",level:3},{value:"<code>redeclaration of import Buffer</code>",id:"redeclaration-of-import-buffer",level:2},{value:"Solution",id:"solution-1",level:3}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Solutions and workarounds for common or unresolved issues."),(0,n.kt)("h2",{id:"webpack--5-used-to-include-polyfills"},"Webpack < 5 used to include polyfills"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ERROR in ./node_modules/cbor/lib/commented.js 3:15-32\nModule not found: Error: Can't resolve 'stream' in 'node_modules/cbor/lib'\n\nBREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.\nThis is no longer the case.\nVerify if you need this module and configure a polyfill for it.\n")),(0,n.kt)("h3",{id:"solution"},"Solution"),(0,n.kt)("p",null,"The problem occurs because a few crypto libraries inside the SDK require polyfills for node.js functions.\nYou might see the above error, when using the KILT SDK inside a ",(0,n.kt)("inlineCode",{parentName:"p"},"create-react-app"),".\nThere are two options to solve this."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Eject your create react app and configure the polyfills manually in your webpack config."),(0,n.kt)("li",{parentName:"ol"},"Use ViteJS ",(0,n.kt)("a",{parentName:"li",href:"/docs/develop/sdk/integrate/howto-integrate-vitejs"},"with our recommended configuration"))),(0,n.kt)("h2",{id:"redeclaration-of-import-buffer"},(0,n.kt)("inlineCode",{parentName:"h2"},"redeclaration of import Buffer")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Uncaught SyntaxError: redeclaration of import Buffer\n")),(0,n.kt)("h3",{id:"solution-1"},"Solution"),(0,n.kt)("p",null,"You might use ",(0,n.kt)("inlineCode",{parentName:"p"},"@polkadot/react-identicon")," to display an identicon or another library that conflict with the polyfill provided by our ViteJS configuration.\nThere is currently no better solution but to remove the dependency and try to use an alternative."),(0,n.kt)("p",null,"For ",(0,n.kt)("inlineCode",{parentName:"p"},"@polkadot/react-identicon"),", we suggest to use ",(0,n.kt)("inlineCode",{parentName:"p"},"@polkadot/ui-shared")," and implement your own react identicon.\nYou can take inspiration from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/BTE-Trusted-Entity/stakeboard/blob/8a9713f786a05487daa4bfc394c95b60820c5147/src/components/Identicon/Identicon.tsx"},"Stakeboard"),"."))}c.isMDXComponent=!0}}]);