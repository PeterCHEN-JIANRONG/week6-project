(function(e){function n(n){for(var r,u,a=n[0],i=n[1],d=n[2],l=0,f=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(n);while(f.length)f.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},c=[];function u(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4008879a","chunk-2d0d63f1":"531f82ec","chunk-2d0e5e97":"b06d816e","chunk-2d21df6b":"72a7633b","chunk-2d21e30b":"f164bcb9","chunk-2d229860":"4ffa0b91","chunk-373504d6":"eacd8e1c","chunk-5a4a21a7":"b48afcf0","chunk-1a551e60":"67124ed6","chunk-2d21de4f":"b6b788a0"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var d=new Error;c=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var p=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0b82":function(e,n,t){},"2a37":function(e,n,t){"use strict";t("0b82")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o=t("bc3a"),c=t.n(o),u=t("2106"),a=t.n(u),i=t("5886"),d=(t("4413"),t("9062")),l=t.n(d),p=(t("e40d"),t("7bb1")),f=t("3aa8"),b=t("cbdf"),h=t("9457");function s(e,n){var t=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(t)}t("2a37");const m={};m.render=s;var v=m,k=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),O=[{path:"/",component:function(){return t.e("chunk-2d229860").then(t.bind(null,"de8a"))},children:[{path:"index",component:function(){return t.e("chunk-2d21e30b").then(t.bind(null,"d504"))}},{path:"products",component:function(){return Promise.all([t.e("chunk-5a4a21a7"),t.e("chunk-1a551e60")]).then(t.bind(null,"e6dc"))}},{path:"product/:id",component:function(){return Promise.all([t.e("chunk-5a4a21a7"),t.e("chunk-2d21de4f")]).then(t.bind(null,"d2f1"))}},{path:"carts",component:function(){return t.e("chunk-373504d6").then(t.bind(null,"395d"))}},{path:"about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}]},{path:"/admin",component:t.e("chunk-2d0d63f1").then(t.bind(null,"7277")),children:[{path:"products",component:function(){return t.e("chunk-2d21df6b").then(t.bind(null,"d416"))}}]},{path:"/:pathMatch(.*)*",component:t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}],j=Object(k["a"])({history:Object(k["b"])(),routes:O}),y=j;Object(p["e"])("required",f["d"]),Object(p["e"])("email",f["a"]),Object(p["e"])("min",f["c"]),Object(p["e"])("max",f["b"]),Object(p["d"])({generateMessage:Object(b["a"])({zh_TW:h}),validateOnInput:!0}),Object(b["b"])("zh_TW");var g=Object(r["createApp"])(v);g.use(a.a,c.a),g.use(i["a"]),g.use(y),g.component("Form",p["c"]),g.component("Field",p["b"]),g.component("ErrorMessage",p["a"]),g.component("VueLoading",l.a),g.mount("#app")}});
//# sourceMappingURL=app.b781e003.js.map