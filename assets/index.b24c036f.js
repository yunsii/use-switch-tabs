import{R as e,d as t,S as o,C as n,P as a,T as r,a as c,b as i,h as l,r as d}from"./vendor.ab482dd2.js";let s;const m={},p=function(e,t){if(!t)return e();if(void 0===s){const e=document.createElement("link").relList;s=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in m)return;m[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":s,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};function _(){return e.createElement("div",null,"Loading...")}console.log("[global.ts] Here is a global script."),c.render(e.createElement(e.StrictMode,null,e.createElement(i,{history:l},d({routes:[{path:"/",component:t({loader:()=>p((()=>import("./BlankLayout.c60c2a6d.js")),["/use-switch-tabs/assets/BlankLayout.c60c2a6d.js","/use-switch-tabs/assets/vendor.ab482dd2.js"]),loading:_}),routes:[{path:"/",redirect:"/welcome",exact:!0},{path:"/",component:t({loader:()=>p((()=>import("./BasicLayout.cf535098.js")),["/use-switch-tabs/assets/BasicLayout.cf535098.js","/use-switch-tabs/assets/BasicLayout.954dacba.css","/use-switch-tabs/assets/index.c8112931.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ab482dd2.js","/use-switch-tabs/assets/isEqual.c4dc13e0.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/button.54fcd1c9.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/index.e9eafc52.js","/use-switch-tabs/assets/index.87718197.css","/use-switch-tabs/assets/utils.a2441ab9.js"]),loading:_}),routes:[{path:"/",redirect:"/welcome",exact:!0},{path:"/welcome",icon:e.createElement(o),name:"欢迎页",component:t({loader:()=>p((()=>import("./index.65cc75f2.js")),["/use-switch-tabs/assets/index.65cc75f2.js","/use-switch-tabs/assets/index.c8112931.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ab482dd2.js","/use-switch-tabs/assets/index.beee969b.js","/use-switch-tabs/assets/index.16d51c2b.css","/use-switch-tabs/assets/CheckCircleFilled.4f47c5ef.js","/use-switch-tabs/assets/button.54fcd1c9.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/index.640b22f9.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.07420792.js","/use-switch-tabs/assets/index.f96511d5.css","/use-switch-tabs/assets/isEqual.c4dc13e0.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/utils.a2441ab9.js"]),loading:_}),exact:!0},{path:"/control",icon:e.createElement(n),name:"控制台",component:t({loader:()=>p((()=>import("./index.794e3973.js")),["/use-switch-tabs/assets/index.794e3973.js","/use-switch-tabs/assets/index.c8112931.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ab482dd2.js","/use-switch-tabs/assets/index.640b22f9.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.beee969b.js","/use-switch-tabs/assets/index.16d51c2b.css","/use-switch-tabs/assets/CheckCircleFilled.4f47c5ef.js","/use-switch-tabs/assets/button.54fcd1c9.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/index.e9eafc52.js","/use-switch-tabs/assets/index.87718197.css"]),loading:_}),exact:!0},{path:"/profile",icon:e.createElement(a),name:"详情页",routes:[{path:"/profile/basic",name:"基础详情页",component:t({loader:()=>p((()=>import("./index.199c8dab.js")),["/use-switch-tabs/assets/index.199c8dab.js","/use-switch-tabs/assets/index.c8112931.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ab482dd2.js","/use-switch-tabs/assets/index.640b22f9.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.07420792.js","/use-switch-tabs/assets/index.f96511d5.css","/use-switch-tabs/assets/isEqual.c4dc13e0.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/button.54fcd1c9.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/CheckCircleFilled.4f47c5ef.js"]),loading:_}),exact:!0},{path:"/profile/advanced",name:"高级详情页",component:t({loader:()=>p((()=>import("./index.ab868e17.js")),["/use-switch-tabs/assets/index.ab868e17.js","/use-switch-tabs/assets/index.c8112931.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ab482dd2.js","/use-switch-tabs/assets/index.640b22f9.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.07420792.js","/use-switch-tabs/assets/index.f96511d5.css","/use-switch-tabs/assets/isEqual.c4dc13e0.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/button.54fcd1c9.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/CheckCircleFilled.4f47c5ef.js"]),loading:_}),exact:!0}]},{path:"/search",icon:e.createElement(r),name:"搜索列表",component:t({loader:()=>p((()=>import("./index.a23c6075.js")),["/use-switch-tabs/assets/index.a23c6075.js","/use-switch-tabs/assets/index.c8112931.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ab482dd2.js","/use-switch-tabs/assets/index.640b22f9.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.07420792.js","/use-switch-tabs/assets/index.f96511d5.css","/use-switch-tabs/assets/isEqual.c4dc13e0.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/button.54fcd1c9.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/CheckCircleFilled.4f47c5ef.js"]),loading:_}),routes:[{path:"/search/projects",name:"搜索列表（项目）",component:t({loader:()=>p((()=>import("./index.7b96509b.js")),["/use-switch-tabs/assets/index.7b96509b.js","/use-switch-tabs/assets/index.c8112931.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ab482dd2.js","/use-switch-tabs/assets/index.640b22f9.js","/use-switch-tabs/assets/index.e6435892.css"]),loading:_}),exact:!0},{path:"/search/applications",name:"搜索列表（应用）",component:t({loader:()=>p((()=>import("./index.beae0ca3.js")),["/use-switch-tabs/assets/index.beae0ca3.js","/use-switch-tabs/assets/index.c8112931.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ab482dd2.js","/use-switch-tabs/assets/index.640b22f9.js","/use-switch-tabs/assets/index.e6435892.css"]),loading:_}),exact:!0}]},{path:"/dynamic/:anyStr",icon:e.createElement(r),name:"动态路由",component:t({loader:()=>p((()=>import("./index.0446feb7.js")),["/use-switch-tabs/assets/index.0446feb7.js","/use-switch-tabs/assets/index.c8112931.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ab482dd2.js","/use-switch-tabs/assets/index.640b22f9.js","/use-switch-tabs/assets/index.e6435892.css"]),loading:_}),hideInMenu:!0,exact:!0}]}]}]}))),document.getElementById("root"));
