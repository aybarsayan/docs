"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1036],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),u=i,y=f["".concat(l,".").concat(u)]||f[u]||d[u]||o;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45406:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],s={id:"verify",title:"Verifier Verifies a Credential"},l=void 0,p={unversionedId:"develop/dApp/verifier/verify",id:"develop/dApp/verifier/verify",title:"Verifier Verifies a Credential",description:"After sending the REQUESTCREDENTIAL message to the extension, the verifier listens for a message of type SUBMITCREDENTIAL in response.",source:"@site/docs/develop/07_dApp/04_verifier/03_verifyCrendentials.md",sourceDirName:"develop/07_dApp/04_verifier",slug:"/develop/dApp/verifier/verify",permalink:"/docs/develop/dApp/verifier/verify",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/04_verifier/03_verifyCrendentials.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"verify",title:"Verifier Verifies a Credential"},sidebar:"dApp",previous:{title:"Verifier Requests a Credential",permalink:"/docs/develop/dApp/verifier/request"}},c=[],d={toc:c};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After sending the ",(0,o.kt)("inlineCode",{parentName:"p"},"REQUEST_CREDENTIAL")," message to the extension, the verifier listens for a message of type ",(0,o.kt)("inlineCode",{parentName:"p"},"SUBMIT_CREDENTIAL")," in response."),(0,o.kt)("p",null,"When a message is received, decrypt it and check that it has the expected type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Message } from '@kiltprotocol/messaging'\nimport { IEncryptedMessage, MessageBodyType } from '@kiltprotocol/types'\n\nawait session.listen(async (message: IEncryptedMessage) => {\n  const did = 'did:kilt:example'\n  const fullDid = await FullDidDetails.fromChainInfo(did)\n\n  const decryptedMessage = await Message.decrypt(\n    message,\n    encryptionKeystore,\n    fullDid\n  )\n\n  if (decryptedMessage.body.type !== MessageBodyType.SUBMIT_CREDENTIAL) {\n    throw new Error('Unexpected message type')\n  }\n\n  verify(decryptedMessage.content)\n})\n")),(0,o.kt)("p",null,"Finally the message content (the credential that was requested) can be verified using the request challenge that was previously stored on the server side. This function will return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the verification is successful."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ICredential } from '@kiltprotocol/types'\n\nfunction verify(credential: ICredential[]) {\n  const credential = Credential.fromCredential(credential[0])\n\n  return await credential.verify({ challenge: requestChallenge })\n}\n")),(0,o.kt)("p",null,"That's it! Your verifier has successfully requested and verified a credential."))}f.isMDXComponent=!0}}]);