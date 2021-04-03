(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||c;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),c=(n(0),n(1348)),i={id:"redux_chat_actions.createdmessageaction",title:"Interface: CreatedMessageAction",sidebar_label:"CreatedMessageAction",custom_edit_url:null,hide_title:!0},o={unversionedId:"docs-client/interfaces/redux_chat_actions.createdmessageaction",id:"docs-client/interfaces/redux_chat_actions.createdmessageaction",isDocsHomePage:!1,title:"Interface: CreatedMessageAction",description:"Interface: CreatedMessageAction",source:"@site/docs/docs-client/interfaces/redux_chat_actions.createdmessageaction.md",slug:"/docs-client/interfaces/redux_chat_actions.createdmessageaction",permalink:"/docs/docs-client/interfaces/redux_chat_actions.createdmessageaction",editUrl:null,version:"current",sidebar_label:"CreatedMessageAction",sidebar:"sidebar",previous:{title:"Interface: CreatedChannelAction",permalink:"/docs/docs-client/interfaces/redux_chat_actions.createdchannelaction"},next:{title:"Interface: LoadedChannelAction",permalink:"/docs/docs-client/interfaces/redux_chat_actions.loadedchannelaction"}},s=[{value:"Properties",id:"properties",children:[{value:"message",id:"message",children:[]},{value:"selfUser",id:"selfuser",children:[]},{value:"type",id:"type",children:[]}]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-createdmessageaction"},"Interface: CreatedMessageAction"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/docs-client/modules/redux_chat_actions"},"redux/chat/actions"),".CreatedMessageAction"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"message"},"message"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"message"),": Message"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/chat/actions.ts#L62"},"packages/client-core/redux/chat/actions.ts:62")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"selfuser"},"selfUser"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"selfUser"),": User"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/chat/actions.ts#L63"},"packages/client-core/redux/chat/actions.ts:63")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/chat/actions.ts#L61"},"packages/client-core/redux/chat/actions.ts:61")))}d.isMDXComponent=!0}}]);