(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),c=(n(0),n(1348)),o={id:"components_ui_usermenu_util.settingmenuprops",title:"Interface: SettingMenuProps",sidebar_label:"SettingMenuProps",custom_edit_url:null,hide_title:!0},u={unversionedId:"docs-client/interfaces/components_ui_usermenu_util.settingmenuprops",id:"docs-client/interfaces/components_ui_usermenu_util.settingmenuprops",isDocsHomePage:!1,title:"Interface: SettingMenuProps",description:"Interface: SettingMenuProps",source:"@site/docs/docs-client/interfaces/components_ui_usermenu_util.settingmenuprops.md",slug:"/docs-client/interfaces/components_ui_usermenu_util.settingmenuprops",permalink:"/docs/docs-client/interfaces/components_ui_usermenu_util.settingmenuprops",editUrl:null,version:"current",sidebar_label:"SettingMenuProps",sidebar:"sidebar",previous:{title:"Class: default",permalink:"/docs/docs-client/classes/components_ui_usermenu_menus_avatarselectmenu.default"},next:{title:"Interface: UserMenuProps",permalink:"/docs/docs-client/interfaces/components_ui_usermenu_util.usermenuprops"}},a=[{value:"Properties",id:"properties",children:[{value:"activeMenu",id:"activemenu",children:[]},{value:"setActiveMenu",id:"setactivemenu",children:[]}]}],s={toc:a};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-settingmenuprops"},"Interface: SettingMenuProps"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/docs-client/modules/components_ui_usermenu_util"},"components/ui/UserMenu/util"),".SettingMenuProps"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"activemenu"},"activeMenu"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"activeMenu"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/ui/UserMenu/util.tsx#L35"},"packages/client-core/components/ui/UserMenu/util.tsx:35")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"setactivemenu"},"setActiveMenu"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"setActiveMenu"),": Function"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/ui/UserMenu/util.tsx#L36"},"packages/client-core/components/ui/UserMenu/util.tsx:36")))}p.isMDXComponent=!0},1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(o,".").concat(b)]||l[b]||m[b]||c;return n?i.a.createElement(f,u(u({ref:t},s),{},{components:n})):i.a.createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<c;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);