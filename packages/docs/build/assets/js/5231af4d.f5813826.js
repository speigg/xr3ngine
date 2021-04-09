(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var c=n(0),a=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=c,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return n?a.a.createElement(m,b(b({ref:t},o),{},{components:n})):a.a.createElement(m,b({ref:t},o))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,s=new Array(r);s[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:c,s[1]=b;for(var o=2;o<r;o++)s[o]=n[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},503:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var c=n(3),a=n(7),r=(n(0),n(1348)),s={id:"redux_scenes_actions",title:"Module: redux/scenes/actions",sidebar_label:"redux/scenes/actions",custom_edit_url:null,hide_title:!0},b={unversionedId:"docs-client/modules/redux_scenes_actions",id:"docs-client/modules/redux_scenes_actions",isDocsHomePage:!1,title:"Module: redux/scenes/actions",description:"Module: redux/scenes/actions",source:"@site/docs/docs-client/modules/redux_scenes_actions.md",slug:"/docs-client/modules/redux_scenes_actions",permalink:"/docs/docs-client/modules/redux_scenes_actions",editUrl:null,version:"current",sidebar_label:"redux/scenes/actions",sidebar:"sidebar",previous:{title:"Module: redux/reducers",permalink:"/docs/docs-client/modules/redux_reducers"},next:{title:"Module: redux/scenes/reducers",permalink:"/docs/docs-client/modules/redux_scenes_reducers"}},i=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Interfaces",id:"interfaces",children:[]}]},{value:"Functions",id:"functions",children:[{value:"collectionsFetched",id:"collectionsfetched",children:[]},{value:"scenesFetchedError",id:"scenesfetchederror",children:[]},{value:"scenesFetchedSuccess",id:"scenesfetchedsuccess",children:[]},{value:"setCurrentScene",id:"setcurrentscene",children:[]}]}],o={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"module-reduxscenesactions"},"Module: redux/scenes/actions"),Object(r.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(r.b)("h3",{id:"interfaces"},"Interfaces"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/docs-client/interfaces/redux_scenes_actions.collectionsfetchedaction"},"CollectionsFetchedAction")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/docs-client/interfaces/redux_scenes_actions.publicscene"},"PublicScene")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/docs-client/interfaces/redux_scenes_actions.publicscenesstate"},"PublicScenesState")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/docs-client/interfaces/redux_scenes_actions.scenesfetchedaction"},"ScenesFetchedAction"))),Object(r.b)("h2",{id:"functions"},"Functions"),Object(r.b)("h3",{id:"collectionsfetched"},"collectionsFetched"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"collectionsFetched"),"(",Object(r.b)("inlineCode",{parentName:"p"},"collections"),": ",Object(r.b)("em",{parentName:"p"},"any"),"[]): ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.collectionsfetchedaction"},Object(r.b)("em",{parentName:"a"},"CollectionsFetchedAction"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"collections")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any"),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.collectionsfetchedaction"},Object(r.b)("em",{parentName:"a"},"CollectionsFetchedAction"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/scenes/actions.ts#L46"},"packages/client-core/redux/scenes/actions.ts:46")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"scenesfetchederror"},"scenesFetchedError"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"scenesFetchedError"),"(",Object(r.b)("inlineCode",{parentName:"p"},"err"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.scenesfetchedaction"},Object(r.b)("em",{parentName:"a"},"ScenesFetchedAction"))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"err")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.scenesfetchedaction"},Object(r.b)("em",{parentName:"a"},"ScenesFetchedAction"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/scenes/actions.ts#L39"},"packages/client-core/redux/scenes/actions.ts:39")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"scenesfetchedsuccess"},"scenesFetchedSuccess"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"scenesFetchedSuccess"),"(",Object(r.b)("inlineCode",{parentName:"p"},"scenes"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.publicscene"},Object(r.b)("em",{parentName:"a"},"PublicScene")),"[]): ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.scenesfetchedaction"},Object(r.b)("em",{parentName:"a"},"ScenesFetchedAction"))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"scenes")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/docs-client/interfaces/redux_scenes_actions.publicscene"},Object(r.b)("em",{parentName:"a"},"PublicScene")),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.scenesfetchedaction"},Object(r.b)("em",{parentName:"a"},"ScenesFetchedAction"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/scenes/actions.ts#L32"},"packages/client-core/redux/scenes/actions.ts:32")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setcurrentscene"},"setCurrentScene"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setCurrentScene"),"(",Object(r.b)("inlineCode",{parentName:"p"},"scene"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.publicscene"},Object(r.b)("em",{parentName:"a"},"PublicScene")),"): ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.scenesfetchedaction"},Object(r.b)("em",{parentName:"a"},"ScenesFetchedAction"))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"scene")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/docs-client/interfaces/redux_scenes_actions.publicscene"},Object(r.b)("em",{parentName:"a"},"PublicScene")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-client/interfaces/redux_scenes_actions.scenesfetchedaction"},Object(r.b)("em",{parentName:"a"},"ScenesFetchedAction"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/redux/scenes/actions.ts#L53"},"packages/client-core/redux/scenes/actions.ts:53")))}l.isMDXComponent=!0}}]);