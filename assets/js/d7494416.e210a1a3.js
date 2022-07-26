"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7197],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48034:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),p=["components"],a={id:"welcome",title:"Overview"},c=void 0,l={unversionedId:"develop/dApp/welcome",id:"develop/dApp/welcome",title:"Overview",description:"This section expands on the Credential API Specification and includes code examples to help you build a decentralized application (dApp).",source:"@site/docs/develop/07_dApp/01_welcome.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/welcome",permalink:"/docs/develop/dApp/welcome",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/01_welcome.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"welcome",title:"Overview"},sidebar:"dApp",next:{title:"Setting Up the Communication Session",permalink:"/docs/develop/dApp/session"}},u=[],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section expands on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/credential-api"},"Credential API Specification")," and includes code examples to help you build a decentralized application (dApp)."),(0,i.kt)("p",null,"This documentation assumes that you already have a browser extension capable of exposing the credential API to your dApp. We suggest using Sporran:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/BTE-Trusted-Entity/sporran-extension"},"Sporran Full Version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/BTE-Trusted-Entity/sporran-extension/tree/sporran-lite"},"Sporran Lite (Credentials only)"))))}d.isMDXComponent=!0}}]);