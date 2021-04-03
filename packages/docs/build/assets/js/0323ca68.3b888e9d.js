(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1348:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),b=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=b(r),p=n,m=u["".concat(o,".").concat(p)]||u[p]||s[p]||c;return r?a.a.createElement(m,i(i({ref:t},d),{},{components:r})):a.a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<c;d++)o[d]=r[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(1348)),o={id:"redux_dialog_service",title:"Module: redux/dialog/service",sidebar_label:"redux/dialog/service",custom_edit_url:null,hide_title:!0},i={unversionedId:"docs-client/modules/redux_dialog_service",id:"docs-client/modules/redux_dialog_service",isDocsHomePage:!1,title:"Module: redux/dialog/service",description:"Module: redux/dialog/service",source:"@site/docs/docs-client/modules/redux_dialog_service.md",slug:"/docs-client/modules/redux_dialog_service",permalink:"/docs/docs-client/modules/redux_dialog_service",editUrl:null,version:"current",sidebar_label:"redux/dialog/service",sidebar:"sidebar",previous:{title:"Module: redux/dialog/selector",permalink:"/docs/docs-client/modules/redux_dialog_selector"},next:{title:"Module: redux/feathers",permalink:"/docs/docs-client/modules/redux_feathers"}},l=[{value:"Functions",id:"functions",children:[{value:"closeDialog",id:"closedialog",children:[]},{value:"showDialog",id:"showdialog",children:[]}]}],d={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-reduxdialogservice"},"Module: redux/dialog/service"),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"closedialog"},"closeDialog"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"closeDialog"),"(): ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," (",Object(c.b)("inlineCode",{parentName:"p"},"dispatch"),": ",Object(c.b)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/dialog/service.ts#L12"},"packages/client-core/redux/dialog/service.ts:12")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"showdialog"},"showDialog"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"showDialog"),"(",Object(c.b)("inlineCode",{parentName:"p"},"content"),": ",Object(c.b)("em",{parentName:"p"},"any"),"): ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"content")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"any"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," (",Object(c.b)("inlineCode",{parentName:"p"},"dispatch"),": ",Object(c.b)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/dialog/service.ts#L7"},"packages/client-core/redux/dialog/service.ts:7")))}b.isMDXComponent=!0}}]);