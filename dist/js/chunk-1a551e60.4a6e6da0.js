(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a551e60"],{"109e":function(t,e,n){
/*!
  * Bootstrap manipulator.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n()})(0,(function(){"use strict";function t(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function e(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}const n={setDataAttribute(t,n,i){t.setAttribute("data-bs-"+e(n),i)},removeDataAttribute(t,n){t.removeAttribute("data-bs-"+e(n))},getDataAttributes(e){if(!e)return{};const n={};return Object.keys(e.dataset).filter(t=>t.startsWith("bs")).forEach(i=>{let o=i.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=t(e.dataset[i])}),n},getDataAttribute(n,i){return t(n.getAttribute("data-bs-"+e(i)))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}};return n}))},"302d":function(t,e,n){
/*!
  * Bootstrap base-component.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(n("6ee1"),n("848f"),n("6a95"))})(0,(function(t,e,n){"use strict";function i(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var o=i(t),s=i(e),r=i(n);const a=1e3,c="transitionend",l=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),o=Number.parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*a):0},d=t=>{t.dispatchEvent(new Event(c))},u=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),h=t=>u(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?s["default"].findOne(t):null,f=(t,e)=>{let n=!1;const i=5,o=e+i;function s(){n=!0,t.removeEventListener(c,s)}t.addEventListener(c,s),setTimeout(()=>{n||d(t)},o)},p=t=>{"function"===typeof t&&t()},m="5.0.1";class b{constructor(t){t=h(t),t&&(this._element=t,o["default"].set(this._element,this.constructor.DATA_KEY,this))}dispose(){o["default"].remove(this._element,this.constructor.DATA_KEY),r["default"].off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(t=>{this[t]=null})}_queueCallback(t,e,n=!0){if(!n)return void p(t);const i=l(e);r["default"].one(e,"transitionend",()=>p(t)),f(e,i)}static getInstance(t){return o["default"].get(t,this.DATA_KEY)}static get VERSION(){return m}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}return b}))},"6a95":function(t,e,n){
/*!
  * Bootstrap event-handler.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n()})(0,(function(){"use strict";const t=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},e=/[^.]*(?=\..*)\.|.*/,n=/\..*/,i=/::\d+$/,o={};let s=1;const r={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function l(t,e){return e&&`${e}::${s++}`||t.uidEvent||s++}function d(t){const e=l(t);return t.uidEvent=e,o[e]=o[e]||{},o[e]}function u(t,e){return function n(i){return i.delegateTarget=t,n.oneOff&&y.off(t,i.type,e),e.apply(t,[i])}}function h(t,e,n){return function i(o){const s=t.querySelectorAll(e);for(let{target:r}=o;r&&r!==this;r=r.parentNode)for(let a=s.length;a--;)if(s[a]===r)return o.delegateTarget=r,i.oneOff&&y.off(t,o.type,e,n),n.apply(r,[o]);return null}}function f(t,e,n=null){const i=Object.keys(t);for(let o=0,s=i.length;o<s;o++){const s=t[i[o]];if(s.originalHandler===e&&s.delegationSelector===n)return s}return null}function p(t,e,n){const i="string"===typeof e,o=i?n:e;let s=_(t);const r=c.has(s);return r||(s=t),[i,o,s]}function m(t,n,i,o,s){if("string"!==typeof n||!t)return;if(i||(i=o,o=null),a.test(n)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};o?o=t(o):i=t(i)}const[r,c,m]=p(n,i,o),b=d(t),g=b[m]||(b[m]={}),_=f(g,c,r?i:null);if(_)return void(_.oneOff=_.oneOff&&s);const y=l(c,n.replace(e,"")),v=r?h(t,i,o):u(t,i);v.delegationSelector=r?i:null,v.originalHandler=c,v.oneOff=s,v.uidEvent=y,g[y]=v,t.addEventListener(m,v,r)}function b(t,e,n,i,o){const s=f(e[n],i,o);s&&(t.removeEventListener(n,s,Boolean(o)),delete e[n][s.uidEvent])}function g(t,e,n,i){const o=e[n]||{};Object.keys(o).forEach(s=>{if(s.includes(i)){const i=o[s];b(t,e,n,i.originalHandler,i.delegationSelector)}})}function _(t){return t=t.replace(n,""),r[t]||t}const y={on(t,e,n,i){m(t,e,n,i,!1)},one(t,e,n,i){m(t,e,n,i,!0)},off(t,e,n,o){if("string"!==typeof e||!t)return;const[s,r,a]=p(e,n,o),c=a!==e,l=d(t),u=e.startsWith(".");if("undefined"!==typeof r){if(!l||!l[a])return;return void b(t,l,a,r,s?n:null)}u&&Object.keys(l).forEach(n=>{g(t,l,n,e.slice(1))});const h=l[a]||{};Object.keys(h).forEach(n=>{const o=n.replace(i,"");if(!c||e.includes(o)){const e=h[n];b(t,l,a,e.originalHandler,e.delegationSelector)}})},trigger(e,n,i){if("string"!==typeof n||!e)return null;const o=t(),s=_(n),r=n!==s,a=c.has(s);let l,d=!0,u=!0,h=!1,f=null;return r&&o&&(l=o.Event(n,i),o(e).trigger(l),d=!l.isPropagationStopped(),u=!l.isImmediatePropagationStopped(),h=l.isDefaultPrevented()),a?(f=document.createEvent("HTMLEvents"),f.initEvent(s,d,!0)):f=new CustomEvent(n,{bubbles:d,cancelable:!0}),"undefined"!==typeof i&&Object.keys(i).forEach(t=>{Object.defineProperty(f,t,{get(){return i[t]}})}),h&&f.preventDefault(),u&&e.dispatchEvent(f),f.defaultPrevented&&"undefined"!==typeof l&&l.preventDefault(),f}};return y}))},"6ee1":function(t,e,n){
/*!
  * Bootstrap data.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n()})(0,(function(){"use strict";const t=new Map;var e={set(e,n,i){t.has(e)||t.set(e,new Map);const o=t.get(e);o.has(n)||0===o.size?o.set(n,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get(e,n){return t.has(e)&&t.get(e).get(n)||null},remove(e,n){if(!t.has(e))return;const i=t.get(e);i.delete(n),0===i.size&&t.delete(e)}};return e}))},"7c2b":function(t,e,n){
/*!
  * Bootstrap modal.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(n("848f"),n("6a95"),n("109e"),n("302d"))})(0,(function(t,e,n,i){"use strict";function o(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var s=o(t),r=o(e),a=o(n),c=o(i);const l=1e3,d="transitionend",u=t=>null===t||void 0===t?""+t:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),h=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),e=n&&"#"!==n?n.trim():null}return e},f=t=>{const e=h(t);return e?document.querySelector(e):null},p=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),o=Number.parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*l):0},m=t=>{t.dispatchEvent(new Event(d))},b=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),g=(t,e)=>{let n=!1;const i=5,o=e+i;function s(){n=!0,t.removeEventListener(d,s)}t.addEventListener(d,s),setTimeout(()=>{n||m(t)},o)},_=(t,e,n)=>{Object.keys(n).forEach(i=>{const o=n[i],s=e[i],r=s&&b(s)?"element":u(s);if(!new RegExp(o).test(r))throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${o}".`)})},y=t=>{if(!t)return!1;if(t.style&&t.parentNode&&t.parentNode.style){const e=getComputedStyle(t),n=getComputedStyle(t.parentNode);return"none"!==e.display&&"none"!==n.display&&"hidden"!==e.visibility}return!1},v=t=>t.offsetHeight,j=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},O=t=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()},E=()=>"rtl"===document.documentElement.dir,w=t=>{O(()=>{const e=j();if(e){const n=t.NAME,i=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=i,t.jQueryInterface)}})},k=t=>{"function"===typeof t&&t()},A=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",T=".sticky-top",D=()=>{const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)},C=(t=D())=>{S(),L("body","paddingRight",e=>e+t),L(A,"paddingRight",e=>e+t),L(T,"marginRight",e=>e-t)},S=()=>{const t=document.body.style.overflow;t&&a["default"].setDataAttribute(document.body,"overflow",t),document.body.style.overflow="hidden"},L=(t,e,n)=>{const i=D();s["default"].find(t).forEach(t=>{if(t!==document.body&&window.innerWidth>t.clientWidth+i)return;const o=t.style[e],s=window.getComputedStyle(t)[e];a["default"].setDataAttribute(t,e,o),t.style[e]=n(Number.parseFloat(s))+"px"})},N=()=>{P("body","overflow"),P("body","paddingRight"),P(A,"paddingRight"),P(T,"marginRight")},P=(t,e)=>{s["default"].find(t).forEach(t=>{const n=a["default"].getDataAttribute(t,e);"undefined"===typeof n?t.style.removeProperty(e):(a["default"].removeDataAttribute(t,e),t.style[e]=n)})},x={isVisible:!0,isAnimated:!1,rootElement:document.body,clickCallback:null},M={isVisible:"boolean",isAnimated:"boolean",rootElement:"element",clickCallback:"(function|null)"},$="backdrop",B="modal-backdrop",q="fade",R="show",I="mousedown.bs."+$;class z{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&v(this._getElement()),this._getElement().classList.add(R),this._emulateAnimation(()=>{k(t)})):k(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(R),this._emulateAnimation(()=>{this.dispose(),k(t)})):k(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=B,this._config.isAnimated&&t.classList.add(q),this._element=t}return this._element}_getConfig(t){return t={...x,..."object"===typeof t?t:{}},t.rootElement=t.rootElement||document.body,_($,t,M),t}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),r["default"].on(this._getElement(),I,()=>{k(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(r["default"].off(this._element,I),this._getElement().parentNode.removeChild(this._element),this._isAppended=!1)}_emulateAnimation(t){if(!this._config.isAnimated)return void k(t);const e=p(this._getElement());r["default"].one(this._getElement(),"transitionend",()=>k(t)),g(this._getElement(),e)}}const F="modal",H="bs.modal",Y="."+H,V=".data-api",W="Escape",K={backdrop:!0,keyboard:!0,focus:!0},U={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Q="hide"+Y,J="hidePrevented"+Y,G="hidden"+Y,Z="show"+Y,X="shown"+Y,tt="focusin"+Y,et="resize"+Y,nt="click.dismiss"+Y,it="keydown.dismiss"+Y,ot="mouseup.dismiss"+Y,st="mousedown.dismiss"+Y,rt=`click${Y}${V}`,at="modal-open",ct="fade",lt="show",dt="modal-static",ut=".modal-dialog",ht=".modal-body",ft='[data-bs-toggle="modal"]',pt='[data-bs-dismiss="modal"]';class mt extends c["default"]{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=s["default"].findOne(ut,this._element),this._backdrop=this._initializeBackDrop(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1}static get Default(){return K}static get NAME(){return F}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;this._isAnimated()&&(this._isTransitioning=!0);const e=r["default"].trigger(this._element,Z,{relatedTarget:t});this._isShown||e.defaultPrevented||(this._isShown=!0,C(),document.body.classList.add(at),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),r["default"].on(this._element,nt,pt,t=>this.hide(t)),r["default"].on(this._dialog,st,()=>{r["default"].one(this._element,ot,t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(t){if(t&&t.preventDefault(),!this._isShown||this._isTransitioning)return;const e=r["default"].trigger(this._element,Q);if(e.defaultPrevented)return;this._isShown=!1;const n=this._isAnimated();n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),r["default"].off(document,tt),this._element.classList.remove(lt),r["default"].off(this._element,nt),r["default"].off(this._dialog,st),this._queueCallback(()=>this._hideModal(),this._element,n)}dispose(){[window,this._dialog].forEach(t=>r["default"].off(t,Y)),this._backdrop.dispose(),super.dispose(),r["default"].off(document,tt)}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new z({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_getConfig(t){return t={...K,...a["default"].getDataAttributes(this._element),...t},_(F,t,U),t}_showElement(t){const e=this._isAnimated(),n=s["default"].findOne(ht,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),e&&v(this._element),this._element.classList.add(lt),this._config.focus&&this._enforceFocus();const i=()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,r["default"].trigger(this._element,X,{relatedTarget:t})};this._queueCallback(i,this._dialog,e)}_enforceFocus(){r["default"].off(document,tt),r["default"].on(document,tt,t=>{document===t.target||this._element===t.target||this._element.contains(t.target)||this._element.focus()})}_setEscapeEvent(){this._isShown?r["default"].on(this._element,it,t=>{this._config.keyboard&&t.key===W?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==W||this._triggerBackdropTransition()}):r["default"].off(this._element,it)}_setResizeEvent(){this._isShown?r["default"].on(window,et,()=>this._adjustDialog()):r["default"].off(window,et)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(at),this._resetAdjustments(),N(),r["default"].trigger(this._element,G)})}_showBackdrop(t){r["default"].on(this._element,nt,t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains(ct)}_triggerBackdropTransition(){const t=r["default"].trigger(this._element,J);if(t.defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight;e||(this._element.style.overflowY="hidden"),this._element.classList.add(dt);const n=p(this._dialog);r["default"].off(this._element,"transitionend"),r["default"].one(this._element,"transitionend",()=>{this._element.classList.remove(dt),e||(r["default"].one(this._element,"transitionend",()=>{this._element.style.overflowY=""}),g(this._element,n))}),g(this._element,n),this._element.focus()}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=D(),n=e>0;(!n&&t&&!E()||n&&!t&&E())&&(this._element.style.paddingLeft=e+"px"),(n&&!t&&!E()||!n&&t&&E())&&(this._element.style.paddingRight=e+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const n=mt.getInstance(this)||new mt(this,"object"===typeof t?t:{});if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t](e)}}))}}return r["default"].on(document,rt,ft,(function(t){const e=f(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),r["default"].one(e,Z,t=>{t.defaultPrevented||r["default"].one(e,G,()=>{y(this)&&this.focus()})});const n=mt.getInstance(e)||new mt(e);n.toggle(this)})),w(mt),mt}))},"848f":function(t,e,n){
/*!
  * Bootstrap selector-engine.js v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n()})(0,(function(){"use strict";const t=3,e={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(t=>t.matches(e))},parents(e,n){const i=[];let o=e.parentNode;while(o&&o.nodeType===Node.ELEMENT_NODE&&o.nodeType!==t)o.matches(n)&&i.push(o),o=o.parentNode;return i},prev(t,e){let n=t.previousElementSibling;while(n){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;while(n){if(n.matches(e))return[n];n=n.nextElementSibling}return[]}};return e}))},e6dc:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),o={class:"container"},s=Object(i["h"])("h1",null,"產品列表",-1),r={class:"mt-4"},a={class:"table align-middle"},c=Object(i["h"])("thead",null,[Object(i["h"])("tr",null,[Object(i["h"])("th",null,"圖片"),Object(i["h"])("th",null,"商品名稱"),Object(i["h"])("th",null,"價格"),Object(i["h"])("th")])],-1),l={style:{width:"200px"}},d={key:0,class:"h5"},u={key:1,class:"h6"},h={key:2,class:"h5"},f={class:"btn-group btn-group-sm"};function p(t,e,n,p,m,b){var g=Object(i["A"])("Loading"),_=Object(i["A"])("ProductModal");return Object(i["t"])(),Object(i["e"])(i["a"],null,[Object(i["h"])("div",o,[s,Object(i["h"])("div",r,[Object(i["h"])("table",a,[c,Object(i["h"])("tbody",null,[(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["y"])(m.products,(function(t){return Object(i["t"])(),Object(i["e"])("tr",{key:t.id},[Object(i["h"])("td",l,[t.imageUrl?(Object(i["t"])(),Object(i["e"])("div",{key:0,style:[{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(t.imageUrl,")")}]},null,4)):Object(i["f"])("",!0)]),Object(i["h"])("td",null,Object(i["D"])(t.title),1),Object(i["h"])("td",null,[t.price?Object(i["f"])("",!0):(Object(i["t"])(),Object(i["e"])("div",d,Object(i["D"])(t.origin_price)+" 元",1)),t.price?(Object(i["t"])(),Object(i["e"])("del",u,"原價 "+Object(i["D"])(b.toThousand(t.origin_price))+" 元",1)):Object(i["f"])("",!0),t.price?(Object(i["t"])(),Object(i["e"])("div",h,"現在只要 "+Object(i["D"])(b.toThousand(t.price))+" 元",1)):Object(i["f"])("",!0)]),Object(i["h"])("td",null,[Object(i["h"])("div",f,[Object(i["h"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(e){return b.pushProductPage(t)},disabled:m.loadingStatus.loadingItem===t.id||!t.is_enabled}," 查看更多 ",8,["onClick","disabled"]),Object(i["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return b.addCart(t.id)},disabled:m.loadingStatus.loadingItem===t.id||!t.is_enabled}," 加到購物車 ",8,["onClick","disabled"])])])])})),128))])])])]),Object(i["h"])(g,{active:m.isLoading},null,8,["active"]),Object(i["h"])(_,{ref:"productModalA",product:m.product,onAddToCart:b.addCart},null,8,["product","onAddToCart"])],64)}n("99af"),n("ac1f"),n("1276"),n("d3b7"),n("25f0"),n("5319"),n("a15b"),n("a4d3"),n("e01a");var m={class:"modal fade",ref:"modal",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},b={class:"modal-dialog modal-xl",role:"document"},g={class:"modal-content border-0"},_={class:"modal-header bg-dark text-white"},y={class:"modal-title",id:"exampleModalLabel"},v={class:"modal-body"},j={class:"row"},O={class:"col-sm-6"},E={class:"col-sm-6"},w={class:"badge bg-primary rounded-pill"},k={key:0,class:"h5"},A={key:1,class:"h6"},T={key:2,class:"h5"},D={class:"input-group"};function C(t,e,n,o,s,r){return Object(i["t"])(),Object(i["e"])("div",m,[Object(i["h"])("div",b,[Object(i["h"])("div",g,[Object(i["h"])("div",_,[Object(i["h"])("h5",y,[Object(i["h"])("span",null,Object(i["D"])(s.tempProduct.title),1)]),Object(i["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[1]||(e[1]=function(t){return s.qty=1})})]),Object(i["h"])("div",v,[Object(i["h"])("div",j,[Object(i["h"])("div",O,[Object(i["h"])("img",{class:"img-fluid",src:s.tempProduct.imagesUrl,alt:""},null,8,["src"])]),Object(i["h"])("div",E,[Object(i["h"])("span",w,Object(i["D"])(s.tempProduct.category),1),Object(i["h"])("p",null,"商品描述："+Object(i["D"])(s.tempProduct.description),1),Object(i["h"])("p",null,"商品內容："+Object(i["D"])(s.tempProduct.content),1),s.tempProduct.price?Object(i["f"])("",!0):(Object(i["t"])(),Object(i["e"])("div",k,Object(i["D"])(r.toThousand(s.tempProduct.origin_price))+" 元 ",1)),s.tempProduct.price?(Object(i["t"])(),Object(i["e"])("del",A,"原價 "+Object(i["D"])(r.toThousand(s.tempProduct.origin_price))+" 元",1)):Object(i["f"])("",!0),s.tempProduct.price?(Object(i["t"])(),Object(i["e"])("div",T," 現在只要 "+Object(i["D"])(r.toThousand(s.tempProduct.price))+" 元 ",1)):Object(i["f"])("",!0),Object(i["h"])("div",null,[Object(i["h"])("div",D,[Object(i["L"])(Object(i["h"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return s.qty=t}),min:"1"},null,512),[[i["G"],s.qty,void 0,{number:!0}]]),Object(i["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=function(e){return t.$emit("add-to-cart",s.tempProduct.id,s.qty)})}," 加入購物車 ")])])])])])])])],512)}var S=n("7c2b"),L=n.n(S),N={props:{product:{type:Object,default:function(){return{}}}},data:function(){return{modal:null,status:{},tempProduct:{origin_price:0,price:0},qty:1}},watch:{product:function(){this.tempProduct=this.product}},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()},toThousand:function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}},mounted:function(){this.modal=new L.a(this.$refs.modal,{keyboard:!1,backdrop:"static"})}};N.render=C;var P=N,x={data:function(){return{products:[],product:{},isLoading:!1,loadingStatus:{loadingItem:""}}},components:{ProductModal:P},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/products?page=").concat(e);this.$http.get(n).then((function(e){e.data.success?t.products=e.data.products:t.errorAlert(e.data.message),t.isLoading=!1})).catch((function(t){console.dir(t)}))},pushProductPage:function(t){this.$router.push("/product/".concat(t.id))},openProductModal:function(t){var e=this,n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/product/").concat(t.id);this.$http.get(n).then((function(t){t.data.success?(e.product=t.data.product,e.$refs.productModalA.openModal()):e.errorAlert(t.data.message)})).catch((function(t){console.dir(t)}))},addCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0,this.loadingStatus.loadingItem=t;var i={product_id:t,qty:n},o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/cart");this.$http.post(o,{data:i}).then((function(t){t.data.success?(e.isLoading=!1,e.loadingStatus.loadingItem="",e.successAlert(t.data.message)):e.errorAlert(t.data.message)})).catch((function(t){console.dir(t)}))},toThousand:function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")},successAlert:function(t){this.$swal.fire({icon:"success",title:t,showConfirmButton:!1,timer:1500})},errorAlert:function(t){this.$swal.fire({icon:"error",title:"Oops...",text:t})}},created:function(){this.getProducts()}};x.render=p;e["default"]=x}}]);
//# sourceMappingURL=chunk-1a551e60.4a6e6da0.js.map