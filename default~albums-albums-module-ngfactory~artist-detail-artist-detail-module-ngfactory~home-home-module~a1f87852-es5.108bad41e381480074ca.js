(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0/mZ":function(t,e,s){"use strict";s.d(e,"a",function(){return a});var i=s("ztCj"),n=(s("xOws"),function(t,e,s,i){return new(s||(s=Promise))(function(n,r){function a(t){try{l(i.next(t))}catch(e){r(e)}}function o(t){try{l(i.throw(t))}catch(e){r(e)}}function l(t){t.done?n(t.value):new s(function(e){e(t.value)}).then(a,o)}l((i=i.apply(t,e||[])).next())})}),r=function(t,e){var s,i,n,r,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(s)throw new TypeError("Generator is already executing.");for(;a;)try{if(s=1,i&&(n=2&r[0]?i.return:r[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,r[1])).done)return n;switch(i=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){a.label=r[1];break}if(6===r[0]&&a.label<n[1]){a.label=n[1],n=r;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(r);break}n[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(o){r=[6,o],i=0}finally{s=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},a=function(){function t(t,e){var s=this;this.backgroundArtService=e,this.NOIMAGE="global/images/no-cover.png",this.loading=!1,this.loaded=!1,this.error=!1,this.loadingClass="loading",this.loadedClass="loaded",this.errorClass="error",this.el=t.nativeElement,setTimeout(function(){s.loadImage()},100)}return t.prototype.loadImage=function(){var t=this;if(!this.loaded&&!this.loading||this.hasClassName("always-replace")){this.loading=!0,this.addClassName(this.loadingClass);var e="art-"+this.media.name;this.media.artist&&!this.media.trackArtist?e="art-"+this.media.artist.name+"-"+this.media.name:this.media.trackArtist&&(e="art-"+this.media.trackArtist+"-"+this.media.album.name),Object(i.c)(e).then(function(e){e?t.setImage(e):t.backgroundArtService.getMediaArt(t.media).subscribe(function(e){return t.setImage(e)},function(e){t.el.style.backgroundImage="url("+t.NOIMAGE+")",t.error=!0,t.loading=!1,t.removeClassName(t.loadingClass),t.addClassName(t.errorClass)})})}},t.prototype.setImage=function(t){return n(this,void 0,void 0,function(){var e,s,a=this;return r(this,function(o){switch(o.label){case 0:return(e=localStorage.getItem("dsm"))&&(e+="/data/image-proxy?url="),this.loaded&&!this.hasClassName("always-replace")?[3,4]:t!==this.NOIMAGE&&""!==t&&t?[3,1]:(this.backgroundArtService.getMediaArtFromLastFm(this.media).subscribe(function(t){return n(a,void 0,void 0,function(){var s;return r(this,function(n){switch(n.label){case 0:return[4,this.backgroundArtService.returnImageUrlFromLastFMResponse(t)];case 1:return(t=n.sent())&&t!==this.NOIMAGE?this.el.style.backgroundImage="url("+e+encodeURIComponent(t)+")":(t||(t=this.NOIMAGE),this.el.style.backgroundImage="url("+t+")"),s={_id:"art-"+this.media.name,url:t||this.NOIMAGE},this.media.artist&&(s._id="art-"+this.media.artist.name+"-"+this.media.name),Object(i.d)(s._id,s.url),[2]}})})},function(t){return a.el.style.backgroundImage="url("+a.NOIMAGE+")"}),[3,3]);case 1:return[4,this.backgroundArtService.returnImageUrlFromLastFMResponse(t)];case 2:t=o.sent(),this.el.style.backgroundImage=t?"url("+t+")":"url("+this.NOIMAGE+")",s={_id:"art-"+this.media.name,url:t||this.NOIMAGE},this.media.artist&&(s._id="art-"+this.media.artist.name+"-"+this.media.name),Object(i.d)(s._id,s.url),o.label=3;case 3:this.loading=!1,this.toggleLoaded(!0),o.label=4;case 4:return[2]}})})},t.prototype.getPosition=function(){var t=this.el.getBoundingClientRect(),e=t.top+(window.pageYOffset-document.documentElement.clientTop);return{top:e,left:t.left+(window.pageXOffset-document.documentElement.clientLeft),bottom:e+this.el.clientHeight}},t.prototype.getLoadingContainer=function(){return this.el},t.prototype.hasClassName=function(t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(this.getLoadingContainer().className)},t.prototype.addClassName=function(t){if(!this.hasClassName(t)){var e=this.getLoadingContainer();e.className=e.className?[e.className,t].join(" "):t}},t.prototype.removeClassName=function(t){if(this.hasClassName(t)){var e=this.getLoadingContainer();e.className=e.className.replace(new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)","g"),"")}},t.prototype.toggleLoaded=function(t){this.loaded=t,t?(this.removeClassName(this.loadingClass),this.addClassName(this.loadedClass)):this.removeClassName(this.loadedClass)},t}()},UrAU:function(t,e,s){"use strict";const i=new WeakMap,n=t=>"function"==typeof t&&i.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},o={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,u=`\x3c!--${c}--\x3e`,h=new RegExp(`${c}|${u}`),d="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,a=-1,o=0;const{strings:l,values:{length:u}}=t;for(;o<u;){const t=n.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)m(e[t].name,d)&&i++;for(;i-- >0;){const e=g.exec(l[o])[2],s=e.toLowerCase()+d,i=t.getAttribute(s);t.removeAttribute(s);const n=i.split(h);this.parts.push({type:"attribute",index:a,name:e,strings:n}),o+=n.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const i=t.parentNode,n=e.split(h),r=n.length-1;for(let e=0;e<r;e++){let s,r=n[e];if(""===r)s=A();else{const t=g.exec(r);null!==t&&m(t[2],d)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-d.length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++a})}""===n[r]?(i.insertBefore(A(),t),s.push(t)):t.data=n[r],o+=r}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&a!==r||(a++,e.insertBefore(A(),t)),r=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(s.push(t),a--),o++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1}),o++}}else n.currentNode=i.pop()}for(const c of s)c.parentNode.removeChild(c)}}const m=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},f=t=>-1!==t.index,A=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class b{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,a=0,o=0,l=i.nextNode();for(;a<s.length;)if(f(n=s[a])){for(;o<n.index;)o++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));a++}else this.__parts.push(void 0),a++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}class y{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const r=g.exec(t);e+=null===r?t+(s?c:u):t.substr(0,r.index)+r[1]+r[2]+d+r[3]+c}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const v=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class w{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let i=0;i<s.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(v(t)||!_(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||v(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(A()),this.endNode=t.appendChild(A())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=A()),t.__insert(this.endNode=A())}insertAfterPart(t){t.__insert(this.startNode=A()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}const t=this.__pendingValue;t!==o&&(v(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):_(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const s=new b(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new C(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){a(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o}}class x extends w{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let E=!1;try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(ft){}class T{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture),O=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];return"."===n?new x(t,e.slice(1),s).parts:"@"===n?[new T(t,e.slice(1),i.eventContext)]:"?"===n?[new N(t,e.slice(1),s)]:new w(t,e,s).parts}handleTextExpression(t){return new C(t)}};function k(t){let e=U.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},U.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(c);return void 0===(s=e.keyString.get(i))&&(s=new p(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const U=new Map,I=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1");const R=(t,...e)=>new y(t,e,"html",O),j=133;function F(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,j,null,!1);let r=L(i),a=i[r],o=-1,l=0;const c=[];let u=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(c.push(t),null===u&&(u=t)),null!==u&&l++;void 0!==a&&a.index===o;)a.index=null!==u?-1:a.index-l,a=i[r=L(i,r)]}c.forEach(t=>t.parentNode.removeChild(t))}const M=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,j,null,!1);for(;s.nextNode();)e++;return e},L=(t,e=-1)=>{for(let s=e+1;s<t.length;s++)if(f(t[s]))return s;return-1},q=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const B=t=>e=>{const s=q(e.type,t);let i=U.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},U.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(c);if(void 0===(n=i.keyString.get(r))){const s=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(s,t),n=new p(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},G=["html","svg"],X=new Set,W=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=I.has(e),r=z&&11===e.nodeType&&!!e.host,o=r&&!X.has(i),l=o?document.createDocumentFragment():e;if(((t,e,s)=>{let i=I.get(e);void 0===i&&(a(e,e.firstChild),I.set(e,i=new C(Object.assign({templateFactory:k},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:B(i)},s)),o){const t=I.get(l);I.delete(l),((t,e,s)=>{X.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const a=document.createElement("style");for(let c=0;c<r;c++){const t=n[c];t.parentNode.removeChild(t),a.textContent+=t.textContent}(t=>{G.forEach(e=>{const s=U.get(q(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),F(t,s)})})})(t);const o=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,j,null,!1);let a=L(n),o=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(o=M(e),s.parentNode.insertBefore(e,s));-1!==a&&n[a].index===l;){if(o>0){for(;-1!==a;)n[a].index+=o,a=L(n,a);return}a=L(n,a)}}(s,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),F(s,t)}})(i,l,t.value instanceof b?t.value.template:void 0),a(e,e.firstChild),e.appendChild(l),I.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},$=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:$},J=Promise.resolve(!0),Z=1,Q=4,K=8,D=16,tt=32;let et=(()=>{class t extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=$){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.converter||H,i="function"==typeof s?s:s.fromAttribute;return i?i(t,e.type):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.converter;return(s&&s.toAttribute||H.toAttribute)(t,e.type)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|tt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=Y){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|K,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~K}}_attributeToProperty(t,e){if(this._updateState&K)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||Y;this._updateState=this._updateState|D,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~D}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i._classProperties.get(t)||Y;i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||this._updateState&D||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|Q;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(i){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(i){e(i)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&tt}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&Z}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(s){throw t=!1,s}finally{this._markUpdated()}t&&(this._updateState&Z||(this._updateState=this._updateState|Z,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}return t.finalized=!0,t})();const st="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol();class nt{constructor(t,e){if(e!==it)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(st?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const rt=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(s instanceof nt)return s.cssText;if("number"==typeof s)return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})()+t[i+1],t[0]);return new nt(s,it)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const at=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,n=e.length;i<n;i++){const n=e[i];Array.isArray(n)?t(n,s):s.push(n)}return s}(t);let ot=(()=>{class t extends et{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];return Array.isArray(t)?at(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t)):t&&e.push(t),e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?st?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}return t.finalized=!0,t.render=W,t})();var lt=s("ztCj");const ct=async({artist:t,album:e})=>{const s=new URLSearchParams;s.set("api_key","956c1818ded606576d6941de5ff793a5"),s.set("artist",t),s.set("format","json"),s.set("autoCorrect","true"),e?(s.set("method","album.getinfo"),s.set("album",e)):s.set("method","artist.getinfo");const i=await fetch(`https://ws.audioscrobbler.com/2.0/?${s}`);return await i.json()},ut=(t,e)=>e.map(e=>{const{provider:s,key:i}=e;return i?s(t[i]).catch(()=>null):s(t).catch(()=>null)}),ht=[{provider:async({artist:t,album:e})=>{const s=await ct({artist:t,album:e}),{album:{image:i}}=s;return i[i.length-1]["#text"]}}],dt=[{provider:async t=>{if(!t)throw Error("Cannot search without a proper mbid");const e=await fetch(`https://webservice.fanart.tv/v3/music/${t}&?api_key=639fca5adcf955a19f9a04f8985e9ded&format=json`);if(200===e.status){const t=await e.json(),{artistbackground:s}=t;if(s)return s[0].url}throw Error("no art found in provider fanart")},key:"mbid"},{provider:async t=>{const e=await fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${encodeURIComponent(t)}`);if(200===e.status){const t=await e.json(),{artists:s}=t;if(s)return s[0].strArtistFanart}throw Error("no art found in provider audiodb")},key:"artist"}],pt=(t,e)=>t||e;customElements.define("album-art",class extends ot{static get properties(){return{artist:{type:String},album:{type:String},art:{type:String},cache:{type:Boolean},customStore:{type:Object},_cache:{type:Object}}}static get styles(){return rt`
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      p {
        margin: 0;
      }
    `}constructor(){super(),this.art="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY/j//z8DAAj8Av6IXwbgAAAAAElFTkSuQmCC",this._cache={},this.customStore=new lt.a("album-art-db","album-art-store")}render(){return R`
      ${this.album?R`
            <img src="${this.art}" alt="${this.artist} - ${this.album}" />
          `:R`
            <img src="${this.art}" alt="${this.artist}" />
          `}
    `}async connectedCallback(){if(super.connectedCallback(),!this.artist)return;const t={artist:this.artist,album:this.album};if(this._cache[`${this.artist}-${this.album}`])return void(this.art=this._cache[`${this.artist}-${this.album}`]);const e=await this.getArt(t);this.cache=!("false"===this.getAttribute("cache")),this.cache&&e?this.art=e:this.updateArt(t)}updated(t){t.forEach(async(t,e)=>{if(this.cache=!("false"===this.getAttribute("cache")),"artist"===e){if(this._cache[`${this.artist}-${this.album}`])return void(this.art=this._cache[`${this.artist}-${this.album}`]);{const t={artist:this.artist,album:this.album},e=await this.getArt(t);this.cache&&e?this.art=e:this.updateArt(t)}}})}isEmptyArt(t){const e="https://res.cloudinary.com/jsmusicdb-com/image/fetch/";return t===e||t===`${e}null`}async getArt({artist:t,album:e}){return e?await Object(lt.c)(`${t}-${e}`,this.customStore):await Object(lt.c)(`${t}`,this.customStore)}async updateArt({artist:t,album:e}){let s="https://res.cloudinary.com/jsmusicdb-com/image/fetch/";e?(s+=await(async({artist:t,album:e})=>{const s={artist:t,album:e};return(await Promise.all(ut(s,ht))).reduce(pt)})({artist:t,album:e}),this.isEmptyArt(s)&&(s=null),s&&(this._cache[`${t}-${e}`]=s,this.cache&&Object(lt.d)(`${t}-${e}`,s,this.customStore)),this.art=s||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADrCAMAAAC/1JHnAAAANlBMVEUAAAB5eXmCgoKKioqSkpKbm5uioqKrq6uzs7O6urrCwsLIyMjPz8/W1tbc3Nzi4uLp6eny8vJV+G/uAAAAAXRSTlMAQObYZgAAAflJREFUeF7swAEJAAAAwjD7pzbHYVsEAAAAAAAAAAAAAAAAAAAAAABwdu6+NUMQigI4vmul2vf/shsUO4xyuRGDK+f8vUE/lKvZ9VGvh9aXQiuttBr3SkRY0/5KaP3P0EorrS3nvOWcy+TWkpxWX7FhbZNaazTqEr9OaM1O3UenNpe1OtWPXmayJvVzbJnFWq1ClHExfcZ/H+llDmtB6dVha9CUxQIbZrCuGNHrElMC5nGTbgVV368u1QMr3JrVGd/2TjZ9Yp1sa9EY1G6aO7FBsrXZk/qw+Q0ndhVsjaAOYXUVa82gDmKdWKs9ANszFX8r0YrlJu4jqUcVM0Kt5nj6tg9lQXmSZ92Op837YI6Vx4q0elSb56CSFYHWhmH91cBGgdYVtWYk+A+BVo/30tFoTGI5Vjx4hWR0Q7GIs9b+FF6cdaF0J3EQZUVV9VdQsap3LFVQuUVZUwfUTOeICT6h1vXCiTh8qherkWzNnVrbGVg3l1UhaRZrvLc2hcSOtXEOszZxzeFegntE7v35Tsd39b+fwfBsjWemPAvnNw5+u+I3SX5rZg/BC70h7PlhLxd79Nh7yZ5a9kqzB553G8burPAuEu+Y8e4grbTSSit/c4G/G0IrrbR+tAMHBAAAAAiC+r+6IcIiAAAAAAAAAAAAAAAAAAAAAAAOUBYM+EbO8tcAAAAASUVORK5CYII="):(s+=await(async t=>{const e=await ct({artist:t}),{artist:{mbid:s}}=e,i={mbid:s,artist:t};return(await Promise.all(ut(i,dt))).reduce(pt)})(this.artist),this.isEmptyArt(s)&&(s=null),s&&(this._cache[`${t}-${e}`]=s,this.cache&&Object(lt.d)(`${t}`,s,this.customStore)),this.art=s||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADrCAAAAACtYT4JAAAAAnRSTlMAAHaTzTgAAAN7SURBVHja7dxBTxNBGMbx/ei7ZSm1ptTQKlCIADWIoJdygIshmugBw4WL4YYcSFRjAhYSAmSUnW2BdndmvfG++/9dTCiXh93Ozrz7xCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP+zOR2HYTjVVh+0Wwnv1DQnfRWFD1XVRq2G457rjBqFWTTeyL3sqGE4pfeqVroHp8Zc/fgwE2kNG9tc8da5GTieT9O2dEVt2VTNI3PPzcf0L7CpKqvN9OK3eehgKvn5pKaojSTS9Hczas/uLda0XdbK/lhUc72ubXnqJIGWr8azmpN68pmerLVkCT40WXpJ1gVdz9Z2PzPrYbIWN3R9XTcyo5rTpqqVeC3Jupud9XLh9sNIzaE1ybqfndV0VS1OZcpapnu4TGtTqZ45ZdpL2D3iynUZ9ojp3v+gDHv/oO45061wVpfpWYlmMEH6biN+d2+2NpcOEpuBMiWamQbrebPwONAnZ/CvcOw/PAKMmFAZtZF9C0cv1SXdyPu6anu6Dt9x5FzatxIjJV2IqNbOv3/jpeHztXV3qVfFjVpyuxBPBz9tjuwRqzLDjnUh7p6b04N2xPg5Z2vw93ktKGpWF2LGfpRuBaNu5lm9mX4qbweYtU+wn0U5Y0TTkbWn6Ln2f5N2G2xyLdnfnZe/r190X9Vbc4LuYlcXomL/XXRlNTUxtQl3FyJRN26RlAvrnq8kPFHNbPJbHSF7+vy52e2k25fVVGQsxb4uxD89b9a2iCmxvwsRxt6o6fT/se8U/e8vwpY/q5mQsBL730uFqwWyJrfAEwlfV+f7xrBAVLsSP/JTe4H3yIWyrgpYnIr0A4pk7SrJqmsQSheCLoRgdCHoQohHF4IuhHx0IehCyEcXgi6EbG/oQgjuQvjv33jp0/dLY0z/247kLkSBqM0v9+fhZztVdWGHXYjPNyP74XORXQiH+UEX4jzj/Hokrwvh3x1GOzeZc4mzjqI9hT22Vd7nTX37sroQLsvpVc0fcffntNzF9oi6eOmY5x/XdPwXEiu2C3HifHmxG6m4sPbbuu1+UXMhpQtRYNDU+Ol5K7VXUbAULxTrQvTbCqbEdcfEX14Xws1WHP54s36dkL8SF+1C/BLRhSiQdduf9WJW/KndvjPfU9KFKJJ1X0kXAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQI+/Md3TUNB1jrAAAAAASUVORK5CYII="),this.requestUpdate()}}),s("/1T7"),s("0/mZ"),s.d(e,"a",function(){return mt});var mt=function(){function t(t){this.router=t}return t.prototype.select=function(){this.router.navigate(["letter",this.album.artist.letter.escapedLetter,"artist",this.album.artist.sortName,"album",this.album.sortName])},t}()},Z8Ug:function(t,e,s){"use strict";s.d(e,"a",function(){return r}),s.d(e,"b",function(){return o});var i=s("CcnG"),n=s("Ip0R"),r=(s("UrAU"),s("ZYCi"),i.ob({encapsulation:2,styles:[],data:{}}));function a(t){return i.Lb(0,[(t()(),i.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),i.Jb(1,null,["Year: ",""]))],null,function(t,e){t(e,1,0,e.component.album.year)})}function o(t){return i.Lb(0,[i.Hb(671088640,1,{backgroundArtDirective:0}),(t()(),i.qb(1,0,null,null,7,"div",[["class","panel panel-background"]],null,null,null,null,null)),(t()(),i.qb(2,0,null,null,0,"album-art",[],[[8,"album",0],[8,"artist",0]],null,null,null,null)),(t()(),i.qb(3,0,null,null,5,"div",[["class","panel-info color-type-primary-alt"]],null,null,null,null,null)),(t()(),i.qb(4,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),i.Jb(5,null,["",""])),(t()(),i.qb(6,0,null,null,2,"span",[["class","small muted"]],null,null,null,null,null)),(t()(),i.gb(16777216,null,null,1,null,a)),i.pb(8,16384,null,0,n.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(t,e){t(e,8,0,0!==e.component.album.year)},function(t,e){var s=e.component;t(e,2,0,s.album.name,s.album.artist.albumArtist||s.album.artist.name),t(e,5,0,s.album.name)})}},xOws:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var i=s("XWo6"),n=function(t,e,s,i){return new(s||(s=Promise))(function(n,r){function a(t){try{l(i.next(t))}catch(e){r(e)}}function o(t){try{l(i.throw(t))}catch(e){r(e)}}function l(t){t.done?n(t.value):new s(function(e){e(t.value)}).then(a,o)}l((i=i.apply(t,e||[])).next())})},r=function(t,e){var s,i,n,r,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(s)throw new TypeError("Generator is already executing.");for(;a;)try{if(s=1,i&&(n=2&r[0]?i.return:r[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,r[1])).done)return n;switch(i=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){a.label=r[1];break}if(6===r[0]&&a.label<n[1]){a.label=n[1],n=r;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(r);break}n[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(o){r=[6,o],i=0}finally{s=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},a=function(){function t(t){this.http=t,this.API_KEY="639fca5adcf955a19f9a04f8985e9ded",this.lastFMImageRetriever=new i.a(t)}return t.prototype.getMediaArt=function(t){var e=this.extractInfo(t);return this.lastFMImageRetriever.getMediaArt(e.artist,e.album,e.type)},t.prototype.getMediaArtFromLastFm=function(t){var e=this.extractInfo(t);return this.lastFMImageRetriever.getMediaArt(e.artist,e.album,e.type)},t.prototype.returnImageUrlFromLastFMResponse=function(t){return n(this,void 0,void 0,function(){var e;return r(this,function(s){return t.album?[2,t.album.image[t.album.image.length-1]["#text"]]:t.artist?(e=t.artist.mbid)?[2,this.getArtistURLArtFormFanart(e,t.artist)]:[2,t.artist.image[t.artist.image.length-1]["#text"]]:[2,t]})})},t.prototype.getArtistURLArtFormFanart=function(t,e){return n(this,void 0,void 0,function(){var s,i;return r(this,function(n){switch(n.label){case 0:return[4,fetch("https://webservice.fanart.tv/v3/music/"+t+"&?api_key="+this.API_KEY+"&format=json")];case 1:return 200!==(s=n.sent()).status?[3,3]:[4,s.json()];case 2:if((i=n.sent()).artistbackground)return[2,i.artistbackground[0].url];n.label=3;case 3:return[2,this.getArtistURLArtFromAudioDB(e)]}})})},t.prototype.getArtistURLArtFromAudioDB=function(t){return n(this,void 0,void 0,function(){var e,s;return r(this,function(i){switch(i.label){case 0:return[4,fetch("https://www.theaudiodb.com/api/v1/json/1/search.php?s="+encodeURIComponent(t.name))];case 1:return 200!==(e=i.sent()).status?[3,3]:[4,e.json()];case 2:if((s=i.sent())&&s.artists)return[2,s.artists[0].strArtistFanart];i.label=3;case 3:return[2,t.image[t.image.length-1]["#text"]]}})})},t.prototype.extractInfo=function(t){var e="",s="",i="artist";return t.trackArtist&&t.album.artist.isCollection?e=t.trackArtist:t.artist?(e=t.artist.albumArtist||t.artist.name,s=t.name||t.album.name,i="album"):e=t.albumArtist||t.name,{artist:e,album:s,type:i}},t}()}}]);