(window.webpackJsonp=window.webpackJsonp||[]).push([[758],{1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,s=p["".concat(b,".").concat(u)]||p[u]||m[u]||c;return n?r.a.createElement(s,i(i({ref:t},l),{},{components:n})):r.a.createElement(s,i({ref:t},l))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var l=2;l<c;l++)b[l]=n[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},828:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=(n(0),n(1348)),b={id:"redux_channelconnection_reducers",title:"Module: redux/channelConnection/reducers",sidebar_label:"redux/channelConnection/reducers",custom_edit_url:null,hide_title:!0},i={unversionedId:"docs-client/modules/redux_channelconnection_reducers",id:"docs-client/modules/redux_channelconnection_reducers",isDocsHomePage:!1,title:"Module: redux/channelConnection/reducers",description:"Module: redux/channelConnection/reducers",source:"@site/docs/docs-client/modules/redux_channelconnection_reducers.md",slug:"/docs-client/modules/redux_channelconnection_reducers",permalink:"/docs/docs-client/modules/redux_channelconnection_reducers",editUrl:null,version:"current",sidebar_label:"redux/channelConnection/reducers",sidebar:"sidebar",previous:{title:"Module: redux/channelConnection/actions",permalink:"/docs/docs-client/modules/redux_channelconnection_actions"},next:{title:"Module: redux/channelConnection/selector",permalink:"/docs/docs-client/modules/redux_channelconnection_selector"}},o=[{value:"Variables",id:"variables",children:[{value:"initialState",id:"initialstate",children:[]}]},{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[]}]}],l={toc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-reduxchannelconnectionreducers"},"Module: redux/channelConnection/reducers"),Object(c.b)("h2",{id:"variables"},"Variables"),Object(c.b)("h3",{id:"initialstate"},"initialState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Const")," ",Object(c.b)("strong",{parentName:"p"},"initialState"),": ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"channelId")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"connected")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"boolean"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"instance")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"object"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"instance.ipAddress")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"instance.port")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"instanceProvisioned")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"boolean"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"instanceProvisioning")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"boolean"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"instanceServerConnecting")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"boolean"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"locationId")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"readyToConnect")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"boolean"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"sceneId")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"socket")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"object"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"updateNeeded")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"boolean"))))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/channelConnection/reducers.ts#L17"},"packages/client-core/redux/channelConnection/reducers.ts:17")),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"default"},"default"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Const"),Object(c.b)("strong",{parentName:"p"},"default"),"(",Object(c.b)("inlineCode",{parentName:"p"},"state?"),": ",Object(c.b)("em",{parentName:"p"},"any"),", ",Object(c.b)("inlineCode",{parentName:"p"},"action"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/docs-client/modules/redux_channelconnection_actions#channelserveraction"},Object(c.b)("em",{parentName:"a"},"ChannelServerAction")),"): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"state")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"action")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/docs-client/modules/redux_channelconnection_actions#channelserveraction"},Object(c.b)("em",{parentName:"a"},"ChannelServerAction")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/channelConnection/reducers.ts#L38"},"packages/client-core/redux/channelConnection/reducers.ts:38")))}d.isMDXComponent=!0}}]);