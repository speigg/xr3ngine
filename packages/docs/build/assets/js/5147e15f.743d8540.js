(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),o=l(n),s=r,u=o["".concat(c,".").concat(s)]||o[s]||m[s]||b;return n?a.a.createElement(u,i(i({ref:t},p),{},{components:n})):a.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<b;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},498:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),b=(n(0),n(1348)),c={id:"redux_feed_service",title:"Module: redux/feed/service",sidebar_label:"redux/feed/service",custom_edit_url:null,hide_title:!0},i={unversionedId:"docs-client/modules/redux_feed_service",id:"docs-client/modules/redux_feed_service",isDocsHomePage:!1,title:"Module: redux/feed/service",description:"Module: redux/feed/service",source:"@site/docs/docs-client/modules/redux_feed_service.md",slug:"/docs-client/modules/redux_feed_service",permalink:"/docs/docs-client/modules/redux_feed_service",editUrl:null,version:"current",sidebar_label:"redux/feed/service",sidebar:"sidebar",previous:{title:"Module: redux/feed/selector",permalink:"/docs/docs-client/modules/redux_feed_selector"},next:{title:"Module: redux/feedBookmark/actions",permalink:"/docs/docs-client/modules/redux_feedbookmark_actions"}},d=[{value:"Functions",id:"functions",children:[{value:"addViewToFeed",id:"addviewtofeed",children:[]},{value:"createFeed",id:"createfeed",children:[]},{value:"getFeed",id:"getfeed",children:[]},{value:"getFeeds",id:"getfeeds",children:[]}]}],p={toc:d};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"module-reduxfeedservice"},"Module: redux/feed/service"),Object(b.b)("h2",{id:"functions"},"Functions"),Object(b.b)("h3",{id:"addviewtofeed"},"addViewToFeed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addViewToFeed"),"(",Object(b.b)("inlineCode",{parentName:"p"},"feedId"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"function")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"feedId")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," (",Object(b.b)("inlineCode",{parentName:"p"},"dispatch"),": ",Object(b.b)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/feed/service.ts#L70"},"packages/client-core/redux/feed/service.ts:70")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createfeed"},"createFeed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createFeed"),"(",Object(b.b)("inlineCode",{parentName:"p"},"__namedParameters"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("em",{parentName:"p"},"function")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"__namedParameters")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," (",Object(b.b)("inlineCode",{parentName:"p"},"dispatch"),": ",Object(b.b)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/feed/service.ts#L82"},"packages/client-core/redux/feed/service.ts:82")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getfeed"},"getFeed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getFeed"),"(",Object(b.b)("inlineCode",{parentName:"p"},"feedId"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"function")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"feedId")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," (",Object(b.b)("inlineCode",{parentName:"p"},"dispatch"),": ",Object(b.b)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/feed/service.ts#L57"},"packages/client-core/redux/feed/service.ts:57")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getfeeds"},"getFeeds"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getFeeds"),"(",Object(b.b)("inlineCode",{parentName:"p"},"type"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"id?"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"limit?"),": ",Object(b.b)("em",{parentName:"p"},"number"),"): ",Object(b.b)("em",{parentName:"p"},"function")),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"id?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"limit?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"number"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," (",Object(b.b)("inlineCode",{parentName:"p"},"dispatch"),": ",Object(b.b)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"getState"),": ",Object(b.b)("em",{parentName:"p"},"any"),") => ",Object(b.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/feed/service.ts#L17"},"packages/client-core/redux/feed/service.ts:17")))}l.isMDXComponent=!0}}]);