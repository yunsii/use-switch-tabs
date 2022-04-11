import{R as e,d as t,S as o,C as n,Q as a,P as r,T as c,a as i,b as l,h as d,r as s}from"./vendor.ff3248b1.js";let m;const _={},p=function(e,t){if(!t)return e();if(void 0===m){const e=document.createElement("link").relList;m=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in _)return;_[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":m,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};function E(){return e.createElement("div",null,"Loading...")}console.log("[global.ts] Here is a global script."),i.render(e.createElement(e.StrictMode,null,e.createElement(l,{history:d},s({routes:[{path:"/",component:t({loader:()=>p((()=>import("./RootLayout.5a22ac18.js")),["/use-switch-tabs/assets/RootLayout.5a22ac18.js","/use-switch-tabs/assets/vendor.ff3248b1.js"]),loading:E}),routes:[{path:"/",redirect:"/welcome",exact:!0},{path:"/",component:t({loader:()=>p((()=>import("./BasicLayout.3d7cf3ee.js")),["/use-switch-tabs/assets/BasicLayout.3d7cf3ee.js","/use-switch-tabs/assets/BasicLayout.954dacba.css","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/isEqual.2255c0fe.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/button.c608983d.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/index.1d73c526.js","/use-switch-tabs/assets/index.87718197.css","/use-switch-tabs/assets/utils.0297c74c.js"]),loading:E}),routes:[{path:"/",redirect:"/welcome",exact:!0},{path:"/welcome",icon:e.createElement(o),name:"欢迎页",component:t({loader:()=>p((()=>import("./index.aeffe461.js")),["/use-switch-tabs/assets/index.aeffe461.js","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.4c09d05b.js","/use-switch-tabs/assets/index.16d51c2b.css","/use-switch-tabs/assets/CheckCircleFilled.93e437a8.js","/use-switch-tabs/assets/button.c608983d.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.19193697.js","/use-switch-tabs/assets/index.f96511d5.css","/use-switch-tabs/assets/isEqual.2255c0fe.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/utils.0297c74c.js"]),loading:E}),exact:!0},{path:"/control",icon:e.createElement(n),name:"控制台",component:t({loader:()=>p((()=>import("./index.381b938b.js")),["/use-switch-tabs/assets/index.381b938b.js","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.4c09d05b.js","/use-switch-tabs/assets/index.16d51c2b.css","/use-switch-tabs/assets/CheckCircleFilled.93e437a8.js","/use-switch-tabs/assets/button.c608983d.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/index.1d73c526.js","/use-switch-tabs/assets/index.87718197.css"]),loading:E}),exact:!0},{path:"/query",icon:e.createElement(a),name:"查询页",component:t({loader:()=>p((()=>import("./index.9a708b8a.js")),["/use-switch-tabs/assets/index.9a708b8a.js","/use-switch-tabs/assets/index.42767692.css","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/button.c608983d.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/index.19193697.js","/use-switch-tabs/assets/index.f96511d5.css","/use-switch-tabs/assets/isEqual.2255c0fe.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/CheckCircleFilled.93e437a8.js"]),loading:E}),exact:!0},{path:"/result",icon:e.createElement(n),name:"结果页",component:t({loader:()=>p((()=>import("./index.0fc94894.js")),["/use-switch-tabs/assets/index.0fc94894.js","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css"]),loading:E}),hideInMenu:!0,exact:!0},{path:"/profile",icon:e.createElement(r),name:"详情页",routes:[{path:"/profile/basic",name:"基础详情页",component:t({loader:()=>p((()=>import("./index.97881e67.js")),["/use-switch-tabs/assets/index.97881e67.js","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.19193697.js","/use-switch-tabs/assets/index.f96511d5.css","/use-switch-tabs/assets/isEqual.2255c0fe.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/button.c608983d.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/CheckCircleFilled.93e437a8.js"]),loading:E}),exact:!0},{path:"/profile/advanced",name:"高级详情页",component:t({loader:()=>p((()=>import("./index.c0ff4cf1.js")),["/use-switch-tabs/assets/index.c0ff4cf1.js","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.19193697.js","/use-switch-tabs/assets/index.f96511d5.css","/use-switch-tabs/assets/isEqual.2255c0fe.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/button.c608983d.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/CheckCircleFilled.93e437a8.js"]),loading:E}),exact:!0}]},{path:"/search",icon:e.createElement(c),name:"搜索列表",component:t({loader:()=>p((()=>import("./index.bfba324a.js")),["/use-switch-tabs/assets/index.bfba324a.js","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css","/use-switch-tabs/assets/index.19193697.js","/use-switch-tabs/assets/index.f96511d5.css","/use-switch-tabs/assets/isEqual.2255c0fe.js","/use-switch-tabs/assets/isEqual.f3402117.css","/use-switch-tabs/assets/button.c608983d.js","/use-switch-tabs/assets/button.590e57dd.css","/use-switch-tabs/assets/CheckCircleFilled.93e437a8.js"]),loading:E}),routes:[{path:"/search/projects",name:"搜索列表（项目）",component:t({loader:()=>p((()=>import("./index.9b78b36c.js")),["/use-switch-tabs/assets/index.9b78b36c.js","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css"]),loading:E}),exact:!0},{path:"/search/applications",name:"搜索列表（应用）",component:t({loader:()=>p((()=>import("./index.58cd202f.js")),["/use-switch-tabs/assets/index.58cd202f.js","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css"]),loading:E}),exact:!0}]},{path:"/dynamic/:anyStr",icon:e.createElement(c),name:"动态路由",component:t({loader:()=>p((()=>import("./index.d4b27ec6.js")),["/use-switch-tabs/assets/index.d4b27ec6.js","/use-switch-tabs/assets/index.77640ec2.js","/use-switch-tabs/assets/index.3f2e0bb5.css","/use-switch-tabs/assets/vendor.ff3248b1.js","/use-switch-tabs/assets/index.6c3e5c13.js","/use-switch-tabs/assets/index.e6435892.css"]),loading:E}),hideInMenu:!0,exact:!0}]}]}]}))),document.getElementById("root"));