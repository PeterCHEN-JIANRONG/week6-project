(function(e){function n(n){for(var r,c,a=n[0],i=n[1],d=n[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},u=[];function c(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"206d4295","chunk-2d0d63f1":"4351cbb1","chunk-2d0e5e97":"642a2f54","chunk-2d21df6b":"29939227","chunk-2d229860":"06401d37","chunk-b3588b68":"4ab4154f"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(e);var d=new Error;u=function(n){i.onerror=i.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",d.name="ChunkLoadError",d.type=r,d.request=u,t[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var p=0;p<i.length;p++)n(i[p]);var l=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0b82":function(e,n,t){},"2a37":function(e,n,t){"use strict";t("0b82")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o=t("bc3a"),u=t.n(o),c=t("2106"),a=t.n(c),i=t("5886");t("4413");function d(e,n){var t=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])(t)}t("2a37");const p={};p.render=d;var l=p,f=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),s=[{path:"/",component:function(){return t.e("chunk-2d229860").then(t.bind(null,"de8a"))},children:[{path:"products",component:function(){return t.e("chunk-b3588b68").then(t.bind(null,"e6dc"))}},{path:"about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}]},{path:"/admin",component:t.e("chunk-2d0d63f1").then(t.bind(null,"7277")),children:[{path:"products",component:function(){return t.e("chunk-2d21df6b").then(t.bind(null,"d416"))}}]},{path:"/:pathMatch(.*)*",component:t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}],b=Object(f["a"])({history:Object(f["b"])(),routes:s}),h=b,v=Object(r["c"])(l);v.use(a.a,u.a),v.use(i["a"]),v.use(h),v.mount("#app")}});
//# sourceMappingURL=app.d52c0e0d.js.map