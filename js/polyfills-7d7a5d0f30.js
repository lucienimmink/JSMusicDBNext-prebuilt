/**
 * core-js 2.5.1
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2017 Denis Pushkarev
 */
!function(t,n,r){"use strict";!function(t){function __webpack_require__(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,__webpack_require__),e.l=!0,e.exports}var n={};__webpack_require__.m=t,__webpack_require__.c=n,__webpack_require__.d=function(t,n,r){__webpack_require__.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(t){var n=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=123)}([function(t,n,e){var i=e(2),o=e(28),u=e(12),c=e(13),f=e(18),a=function(t,n,e){var s,l,h,p,v=t&a.F,g=t&a.G,y=t&a.S,d=t&a.P,_=t&a.B,S=g?i:y?i[n]||(i[n]={}):(i[n]||{}).prototype,b=g?o:o[n]||(o[n]={}),m=b.prototype||(b.prototype={});g&&(e=n);for(s in e)h=((l=!v&&S&&S[s]!==r)?S:e)[s],p=_&&l?f(h,i):d&&"function"==typeof h?f(Function.call,h):h,S&&c(S,s,h,t&a.U),b[s]!=h&&u(b,s,p),d&&m[s]!=h&&(m[s]=h)};i.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,r){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof n&&(n=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(49)("wks"),i=r(32),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(1),i=r(89),o=r(21),u=Object.defineProperty;n.f=r(6)?Object.defineProperty:function defineProperty(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(23),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},function(t,n,r){var e=r(22);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(7),i=r(31);t.exports=r(6)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(2),i=r(12),o=r(11),u=r(32)("src"),c=Function.toString,f=(""+c).split("toString");r(28).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(a&&(o(r,u)||i(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",function toString(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,r){var e=r(0),i=r(3),o=r(22),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};t.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},function(t,n,r){var e=r(46),i=r(22);t.exports=function(t){return e(i(t))}},function(t,n,r){var e=r(47),i=r(31),o=r(15),u=r(21),c=r(11),f=r(89),a=Object.getOwnPropertyDescriptor;n.f=r(6)?a:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),f)try{return a(t,n)}catch(r){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(11),i=r(9),o=r(65)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var i=e(10);t.exports=function(t,n,e){if(i(t),n===r)return t;switch(e){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(3);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(t==r)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(0),i=r(28),o=r(3);t.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},function(t,n,e){var i=e(18),o=e(46),u=e(9),c=e(8),f=e(82);t.exports=function(t,n){var e=1==t,a=2==t,s=3==t,l=4==t,h=6==t,p=5==t||h,v=n||f;return function(n,f,g){for(var y,d,_=u(n),S=o(_),b=i(f,g,3),m=c(S.length),x=0,w=e?v(n,m):a?v(n,0):r;m>x;x++)if((p||x in S)&&(y=S[x],d=b(y,x,_),t))if(e)w[x]=d;else if(d)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:w.push(y)}else if(l)return!1;return h?-1:s||l?l:w}}},function(t,n,e){if(e(6)){var i=e(33),o=e(2),u=e(3),c=e(0),f=e(59),a=e(88),s=e(18),l=e(39),h=e(31),p=e(12),v=e(41),g=e(23),y=e(8),d=e(116),_=e(35),S=e(21),b=e(11),m=e(48),x=e(4),w=e(9),E=e(79),O=e(36),P=e(17),M=e(37).f,I=e(81),F=e(32),A=e(5),k=e(25),N=e(50),j=e(57),R=e(84),T=e(44),L=e(54),D=e(38),W=e(83),C=e(105),U=e(7),G=e(16),B=U.f,V=G.f,z=o.RangeError,q=o.TypeError,K=o.Uint8Array,J=Array.prototype,Y=a.ArrayBuffer,H=a.DataView,X=k(0),Z=k(2),$=k(3),Q=k(4),tt=k(5),nt=k(6),rt=N(!0),et=N(!1),it=R.values,ot=R.keys,ut=R.entries,ct=J.lastIndexOf,ft=J.reduce,at=J.reduceRight,st=J.join,lt=J.sort,ht=J.slice,pt=J.toString,vt=J.toLocaleString,gt=A("iterator"),yt=A("toStringTag"),dt=F("typed_constructor"),_t=F("def_constructor"),St=f.CONSTR,bt=f.TYPED,mt=f.VIEW,xt=k(1,function(t,n){return Mt(j(t,t[_t]),n)}),wt=u(function(){return 1===new K(new Uint16Array([1]).buffer)[0]}),Et=!!K&&!!K.prototype.set&&u(function(){new K(1).set({})}),Ot=function(t,n){var r=g(t);if(r<0||r%n)throw z("Wrong offset!");return r},Pt=function(t){if(x(t)&&bt in t)return t;throw q(t+" is not a typed array!")},Mt=function(t,n){if(!(x(t)&&dt in t))throw q("It is not a typed array constructor!");return new t(n)},It=function(t,n){return Ft(j(t,t[_t]),n)},Ft=function(t,n){for(var r=0,e=n.length,i=Mt(t,e);e>r;)i[r]=n[r++];return i},At=function(t,n,r){B(t,n,{get:function(){return this._d[r]}})},kt=function from(t){var n,e,i,o,u,c,f=w(t),a=arguments.length,l=a>1?arguments[1]:r,h=l!==r,p=I(f);if(p!=r&&!E(p)){for(c=p.call(f),i=[],n=0;!(u=c.next()).done;n++)i.push(u.value);f=i}for(h&&a>2&&(l=s(l,arguments[2],2)),n=0,e=y(f.length),o=Mt(this,e);e>n;n++)o[n]=h?l(f[n],n):f[n];return o},Nt=function of(){for(var t=0,n=arguments.length,r=Mt(this,n);n>t;)r[t]=arguments[t++];return r},jt=!!K&&u(function(){vt.call(new K(1))}),Rt=function toLocaleString(){return vt.apply(jt?ht.call(Pt(this)):Pt(this),arguments)},Tt={copyWithin:function copyWithin(t,n){return C.call(Pt(this),t,n,arguments.length>2?arguments[2]:r)},every:function every(t){return Q(Pt(this),t,arguments.length>1?arguments[1]:r)},fill:function fill(t){return W.apply(Pt(this),arguments)},filter:function filter(t){return It(this,Z(Pt(this),t,arguments.length>1?arguments[1]:r))},find:function find(t){return tt(Pt(this),t,arguments.length>1?arguments[1]:r)},findIndex:function findIndex(t){return nt(Pt(this),t,arguments.length>1?arguments[1]:r)},forEach:function forEach(t){X(Pt(this),t,arguments.length>1?arguments[1]:r)},indexOf:function indexOf(t){return et(Pt(this),t,arguments.length>1?arguments[1]:r)},includes:function includes(t){return rt(Pt(this),t,arguments.length>1?arguments[1]:r)},join:function join(t){return st.apply(Pt(this),arguments)},lastIndexOf:function lastIndexOf(t){return ct.apply(Pt(this),arguments)},map:function map(t){return xt(Pt(this),t,arguments.length>1?arguments[1]:r)},reduce:function reduce(t){return ft.apply(Pt(this),arguments)},reduceRight:function reduceRight(t){return at.apply(Pt(this),arguments)},reverse:function reverse(){for(var t,n=this,r=Pt(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return $(Pt(this),t,arguments.length>1?arguments[1]:r)},sort:function sort(t){return lt.call(Pt(this),t)},subarray:function subarray(t,n){var e=Pt(this),i=e.length,o=_(t,i);return new(j(e,e[_t]))(e.buffer,e.byteOffset+o*e.BYTES_PER_ELEMENT,y((n===r?i:_(n,i))-o))}},Lt=function slice(t,n){return It(this,ht.call(Pt(this),t,n))},Dt=function set(t){Pt(this);var n=Ot(arguments[1],1),r=this.length,e=w(t),i=y(e.length),o=0;if(i+n>r)throw z("Wrong length!");for(;o<i;)this[n+o]=e[o++]},Wt={entries:function entries(){return ut.call(Pt(this))},keys:function keys(){return ot.call(Pt(this))},values:function values(){return it.call(Pt(this))}},Ct=function(t,n){return x(t)&&t[bt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Ut=function getOwnPropertyDescriptor(t,n){return Ct(t,n=S(n,!0))?h(2,t[n]):V(t,n)},Gt=function defineProperty(t,n,r){return!(Ct(t,n=S(n,!0))&&x(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?B(t,n,r):(t[n]=r.value,t)};St||(G.f=Ut,U.f=Gt),c(c.S+c.F*!St,"Object",{getOwnPropertyDescriptor:Ut,defineProperty:Gt}),u(function(){pt.call({})})&&(pt=vt=function toString(){return st.call(this)});var Bt=v({},Tt);v(Bt,Wt),p(Bt,gt,Wt.values),v(Bt,{slice:Lt,set:Dt,constructor:function(){},toString:pt,toLocaleString:Rt}),At(Bt,"buffer","b"),At(Bt,"byteOffset","o"),At(Bt,"byteLength","l"),At(Bt,"length","e"),B(Bt,yt,{get:function(){return this[bt]}}),t.exports=function(t,n,e,a){var s=t+((a=!!a)?"Clamped":"")+"Array",h="get"+t,v="set"+t,g=o[s],_=g||{},S=g&&P(g),b=!g||!f.ABV,w={},E=g&&g.prototype,I=function(t,r){var e=t._d;return e.v[h](r*n+e.o,wt)},F=function(t,r,e){var i=t._d;a&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[v](r*n+i.o,e,wt)},A=function(t,n){B(t,n,{get:function(){return I(this,n)},set:function(t){return F(this,n,t)},enumerable:!0})};b?(g=e(function(t,e,i,o){l(t,g,s,"_d");var u,c,f,a,h=0,v=0;if(x(e)){if(!(e instanceof Y||"ArrayBuffer"==(a=m(e))||"SharedArrayBuffer"==a))return bt in e?Ft(g,e):kt.call(g,e);u=e,v=Ot(i,n);var _=e.byteLength;if(o===r){if(_%n)throw z("Wrong length!");if((c=_-v)<0)throw z("Wrong length!")}else if((c=y(o)*n)+v>_)throw z("Wrong length!");f=c/n}else f=d(e),u=new Y(c=f*n);for(p(t,"_d",{b:u,o:v,l:c,e:f,v:new H(u)});h<f;)A(t,h++)}),E=g.prototype=O(Bt),p(E,"constructor",g)):u(function(){g(1)})&&u(function(){new g(-1)})&&L(function(t){new g,new g(null),new g(1.5),new g(t)},!0)||(g=e(function(t,e,i,o){l(t,g,s);var u;return x(e)?e instanceof Y||"ArrayBuffer"==(u=m(e))||"SharedArrayBuffer"==u?o!==r?new _(e,Ot(i,n),o):i!==r?new _(e,Ot(i,n)):new _(e):bt in e?Ft(g,e):kt.call(g,e):new _(d(e))}),X(S!==Function.prototype?M(_).concat(M(S)):M(_),function(t){t in g||p(g,t,_[t])}),g.prototype=E,i||(E.constructor=g));var k=E[gt],N=!!k&&("values"==k.name||k.name==r),j=Wt.values;p(g,dt,!0),p(E,bt,s),p(E,mt,!0),p(E,_t,g),(a?new g(1)[yt]==s:yt in E)||B(E,yt,{get:function(){return s}}),w[s]=g,c(c.G+c.W+c.F*(g!=_),w),c(c.S,s,{BYTES_PER_ELEMENT:n}),c(c.S+c.F*u(function(){_.of.call(g,1)}),s,{from:kt,of:Nt}),"BYTES_PER_ELEMENT"in E||p(E,"BYTES_PER_ELEMENT",n),c(c.P,s,Tt),D(s),c(c.P+c.F*Et,s,{set:Dt}),c(c.P+c.F*!N,s,Wt),i||E.toString==pt||(E.toString=pt),c(c.P+c.F*u(function(){new g(1).slice()}),s,{slice:Lt}),c(c.P+c.F*(u(function(){return[1,2].toLocaleString()!=new g([1,2]).toLocaleString()})||!u(function(){E.toLocaleString.call([1,2])})),s,{toLocaleString:Rt}),T[s]=N?k:j,i||N||p(E,gt,j)}}else t.exports=function(){}},function(t,n,e){var i=e(110),o=e(0),u=e(49)("metadata"),c=u.store||(u.store=new(e(113))),f=function(t,n,e){var o=c.get(t);if(!o){if(!e)return r;c.set(t,o=new i)}var u=o.get(n);if(!u){if(!e)return r;o.set(n,u=new i)}return u};t.exports={store:c,map:f,has:function(t,n,e){var i=f(n,e,!1);return i!==r&&i.has(t)},get:function(t,n,e){var i=f(n,e,!1);return i===r?r:i.get(t)},set:function(t,n,r,e){f(r,e,!0).set(t,n)},keys:function(t,n){var r=f(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},key:function(t){return t===r||"symbol"==typeof t?t:String(t)},exp:function(t){o(o.S,"Reflect",t)}}},function(n,r){var e=n.exports={version:"2.5.1"};"number"==typeof t&&(t=e)},function(t,n,r){var e=r(32)("meta"),i=r(4),o=r(11),u=r(7).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(3)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!o(t,e)&&s(t),t}}},function(t,n,e){var i=e(5)("unscopables"),o=Array.prototype;o[i]==r&&e(12)(o,i,{}),t.exports=function(t){o[i][t]=!0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(t===r?"":t,")_",(++e+i).toString(36))}},function(t,n){t.exports=!1},function(t,n,r){var e=r(91),i=r(66);t.exports=Object.keys||function keys(t){return e(t,i)}},function(t,n,r){var e=r(23),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var i=e(1),o=e(92),u=e(66),c=e(65)("IE_PROTO"),f=function(){},a=function(){var t,n=e(63)("iframe"),r=u.length;for(n.style.display="none",e(67).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[u[r]];return a()};t.exports=Object.create||function create(t,n){var e;return null!==t?(f.prototype=i(t),e=new f,f.prototype=null,e[c]=t):e=a(),n===r?e:o(e,n)}},function(t,n,r){var e=r(91),i=r(66).concat("length","prototype");n.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},function(t,n,r){var e=r(2),i=r(7),o=r(6),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e,i){if(!(t instanceof n)||i!==r&&i in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,r){var e=r(18),i=r(103),o=r(79),u=r(1),c=r(8),f=r(81),a={},s={};(n=t.exports=function(t,n,r,l,h){var p,v,g,y,d=h?function(){return t}:f(t),_=e(r,l,n?2:1),S=0;if("function"!=typeof d)throw TypeError(t+" is not iterable!");if(o(d)){for(p=c(t.length);p>S;S++)if((y=n?_(u(v=t[S])[0],v[1]):_(t[S]))===a||y===s)return y}else for(g=d.call(t);!(v=g.next()).done;)if((y=i(g,_,v.value,n))===a||y===s)return y}).BREAK=a,n.RETURN=s},function(t,n,r){var e=r(13);t.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},function(t,n,r){var e=r(7).f,i=r(11),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var e=r(0),i=r(22),o=r(3),u=r(70),c="["+u+"]",f=RegExp("^"+c+c+"*"),a=RegExp(c+c+"*$"),s=function(t,n,r){var i={},c=o(function(){return!!u[t]()||"​"!="​"[t]()}),f=i[t]=c?n(l):u[t];r&&(i[r]=f),e(e.P+e.F*c,"String",i)},l=s.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(a,"")),t};t.exports=s},function(t,n){t.exports={}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){var e=r(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var i=e(19),o=e(5)("toStringTag"),u="Arguments"==i(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(r){}};t.exports=function(t){var n,e,f;return t===r?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:u?i(n):"Object"==(f=i(n))&&"function"==typeof n.callee?"Arguments":f}},function(t,n,r){var e=r(2),i=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(15),i=r(8),o=r(35);t.exports=function(t){return function(n,r,u){var c,f=e(n),a=i(f.length),s=o(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(19);t.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},function(t,n,e){var i=e(4),o=e(19),u=e(5)("match");t.exports=function(t){var n;return i(t)&&((n=t[u])!==r?!!n:"RegExp"==o(t))}},function(t,n,r){var e=r(5)("iterator"),i=!1;try{var o=[7][e]();o["return"]=function(){i=!0},Array.from(o,function(){throw 2})}catch(u){}t.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],c=o[e]();c.next=function(){return{done:r=!0}},o[e]=function(){return c},t(o)}catch(u){}return r}},function(t,n,r){var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var e=r(12),i=r(13),o=r(3),u=r(22),c=r(5);t.exports=function(t,n,r){var f=c(t),a=r(u,f,""[t]),s=a[0],l=a[1];o(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,s),e(RegExp.prototype,f,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},function(t,n,e){var i=e(1),o=e(10),u=e(5)("species");t.exports=function(t,n){var e,c=i(t).constructor;return c===r||(e=i(c)[u])==r?n:o(e)}},function(t,n,e){var i=e(2),o=e(0),u=e(13),c=e(41),f=e(29),a=e(40),s=e(39),l=e(4),h=e(3),p=e(54),v=e(42),g=e(69);t.exports=function(t,n,e,y,d,_){var S=i[t],b=S,m=d?"set":"add",x=b&&b.prototype,w={},E=function(t){var n=x[t];u(x,t,"delete"==t?function(t){return!(_&&!l(t))&&n.call(this,0===t?0:t)}:"has"==t?function has(t){return!(_&&!l(t))&&n.call(this,0===t?0:t)}:"get"==t?function get(t){return _&&!l(t)?r:n.call(this,0===t?0:t)}:"add"==t?function add(t){return n.call(this,0===t?0:t),this}:function set(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof b&&(_||x.forEach&&!h(function(){(new b).entries().next()}))){var O=new b,P=O[m](_?{}:-0,1)!=O,M=h(function(){O.has(1)}),I=p(function(t){new b(t)}),F=!_&&h(function(){for(var t=new b,n=5;n--;)t[m](n,n);return!t.has(-0)});I||((b=n(function(n,e){s(n,b,t);var i=g(new S,n,b);return e!=r&&a(e,d,i[m],i),i})).prototype=x,x.constructor=b),(M||F)&&(E("delete"),E("has"),d&&E("get")),(F||P)&&E(m),_&&x.clear&&delete x.clear}else b=y.getConstructor(n,t,d,m),c(b.prototype,e),f.NEED=!0;return v(b,t),w[t]=b,o(o.G+o.W+o.F*(b!=S),w),_||y.setStrong(b,t,d),b}},function(t,n,r){for(var e,i=r(2),o=r(12),u=r(32),c=u("typed_array"),f=u("view"),a=!(!i.ArrayBuffer||!i.DataView),s=a,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,f,!0)):s=!1;t.exports={ABV:a,CONSTR:s,TYPED:c,VIEW:f}},function(t,n,r){t.exports=r(33)||!r(3)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){var e=r(0);t.exports=function(t){e(e.S,t,{of:function of(){for(var t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,e){var i=e(0),o=e(10),u=e(18),c=e(40);t.exports=function(t){i(i.S,t,{from:function from(t){var n,e,i,f,a=arguments[1];return o(this),(n=a!==r)&&o(a),t==r?new this:(e=[],n?(i=0,f=u(a,arguments[2],2),c(t,!1,function(t){e.push(f(t,i++))})):c(t,!1,e.push,e),new this(e))}})}},function(t,n,r){var e=r(4),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(2),i=r(28),o=r(33),u=r(90),c=r(7).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(49)("keys"),i=r(32);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n,e){var i=e(4),o=e(1),u=function(t,n){if(o(t),!i(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(18)(Function.call,e(16).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(i){n=!0}return function setPrototypeOf(t,e){return u(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):r),check:u}},function(t,n,r){var e=r(4),i=r(68).set;t.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},function(t,n){t.exports="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var e=r(23),i=r(22);t.exports=function repeat(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==Infinity)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},function(t,n){t.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var r=Math.expm1;t.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function expm1(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n,e){var i=e(23),o=e(22);t.exports=function(t){return function(n,e){var u,c,f=String(o(n)),a=i(e),s=f.length;return a<0||a>=s?t?"":r:(u=f.charCodeAt(a))<55296||u>56319||a+1===s||(c=f.charCodeAt(a+1))<56320||c>57343?t?f.charAt(a):u:t?f.slice(a,a+2):c-56320+(u-55296<<10)+65536}}},function(t,n,r){var e=r(53),i=r(22);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){var e=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(i){}}return!0}},function(t,n,e){var i=e(33),o=e(0),u=e(13),c=e(12),f=e(11),a=e(44),s=e(78),l=e(42),h=e(17),p=e(5)("iterator"),v=!([].keys&&"next"in[].keys()),g=function(){return this};t.exports=function(t,n,e,y,d,_,S){s(e,n,y);var b,m,x,w=function(t){if(!v&&t in M)return M[t];switch(t){case"keys":return function keys(){return new e(this,t)};case"values":return function values(){return new e(this,t)}}return function entries(){return new e(this,t)}},E=n+" Iterator",O="values"==d,P=!1,M=t.prototype,I=M[p]||M["@@iterator"]||d&&M[d],F=I||w(d),A=d?O?w("entries"):F:r,k="Array"==n?M.entries||I:I;if(k&&(x=h(k.call(new t)))!==Object.prototype&&x.next&&(l(x,E,!0),i||f(x,p)||c(x,p,g)),O&&I&&"values"!==I.name&&(P=!0,F=function values(){return I.call(this)}),i&&!S||!v&&!P&&M[p]||c(M,p,F),a[n]=F,a[E]=g,d)if(b={values:O?F:w("values"),keys:_?F:w("keys"),entries:A},S)for(m in b)m in M||u(M,m,b[m]);else o(o.P+o.F*(v||P),n,b);return b}},function(t,n,r){var e=r(36),i=r(31),o=r(42),u={};r(12)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,e){var i=e(44),o=e(5)("iterator"),u=Array.prototype;t.exports=function(t){return t!==r&&(i.Array===t||u[o]===t)}},function(t,n,r){var e=r(7),i=r(31);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,e){var i=e(48),o=e(5)("iterator"),u=e(44);t.exports=e(28).getIteratorMethod=function(t){if(t!=r)return t[o]||t["@@iterator"]||u[i(t)]}},function(t,n,r){var e=r(207);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,e){var i=e(9),o=e(35),u=e(8);t.exports=function fill(t){for(var n=i(this),e=u(n.length),c=arguments.length,f=o(c>1?arguments[1]:r,e),a=c>2?arguments[2]:r,s=a===r?e:o(a,e);s>f;)n[f++]=t;return n}},function(t,n,e){var i=e(30),o=e(106),u=e(44),c=e(15);t.exports=e(77)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=r,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),u.Arguments=u.Array,i("keys"),i("values"),i("entries")},function(t,n,r){var e,i,o,u=r(18),c=r(96),f=r(67),a=r(63),s=r(2),l=s.process,h=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,g=s.Dispatch,y=0,d={},_=function(){var t=+this;if(d.hasOwnProperty(t)){var n=d[t];delete d[t],n()}},S=function(t){_.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return d[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},p=function clearImmediate(t){delete d[t]},"process"==r(19)(l)?e=function(t){l.nextTick(u(_,t,1))}:g&&g.now?e=function(t){g.now(u(_,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=S,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",S,!1)):e="onreadystatechange"in a("script")?function(t){f.appendChild(a("script")).onreadystatechange=function(){f.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,e){var i=e(2),o=e(85).set,u=i.MutationObserver||i.WebKitMutationObserver,c=i.process,f=i.Promise,a="process"==e(19)(c);t.exports=function(){var t,n,e,s=function(){var i,o;for(a&&(i=c.domain)&&i.exit();t;){o=t.fn,t=t.next;try{o()}catch(u){throw t?e():n=r,u}}n=r,i&&i.enter()};if(a)e=function(){c.nextTick(s)};else if(u){var l=!0,h=document.createTextNode("");new u(s).observe(h,{characterData:!0}),e=function(){h.data=l=!l}}else if(f&&f.resolve){var p=f.resolve();e=function(){p.then(s)}}else e=function(){o.call(i,s)};return function(i){var o={fn:i,next:r};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){function PromiseCapability(t){var n,e;this.promise=new t(function(t,i){if(n!==r||e!==r)throw TypeError("Bad Promise constructor");n=t,e=i}),this.resolve=i(n),this.reject=i(e)}var i=e(10);t.exports.f=function(t){return new PromiseCapability(t)}},function(t,n,e){function packIEEE754(t,n,r){var e,i,o,u=Array(r),c=8*r-n-1,f=(1<<c)-1,a=f>>1,s=23===n?I(2,-24)-I(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=M(t))!=t||t===O?(i=t!=t?1:0,e=f):(e=F(A(t)/k),t*(o=I(2,-e))<1&&(e--,o*=2),(t+=e+a>=1?s/o:s*I(2,1-a))*o>=2&&(e++,o/=2),e+a>=f?(i=0,e=f):e+a>=1?(i=(t*o-1)*I(2,n),e+=a):(i=t*I(2,a-1)*I(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,f=r-1,a=t[f--],s=127&a;for(a>>=7;c>0;s=256*s+t[f],f--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;c>0;e=256*e+t[f],f--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:a?-O:O;e+=I(2,n),s-=u}return(a?-1:1)*e*I(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){y(t[S],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=v(+r);if(i+n>t[j])throw E(b);var o=t[N]._b,u=i+t[R],c=o.slice(u,u+n);return e?c:c.reverse()}function set(t,n,r,e,i,o){var u=v(+r);if(u+n>t[j])throw E(b);for(var c=t[N]._b,f=u+t[R],a=e(+i),s=0;s<n;s++)c[f+s]=a[o?s:n-s-1]}var i=e(2),o=e(6),u=e(33),c=e(59),f=e(12),a=e(41),s=e(3),l=e(39),h=e(23),p=e(8),v=e(116),g=e(37).f,y=e(7).f,d=e(83),_=e(42),S="prototype",b="Wrong index!",m=i.ArrayBuffer,x=i.DataView,w=i.Math,E=i.RangeError,O=i.Infinity,P=m,M=w.abs,I=w.pow,F=w.floor,A=w.log,k=w.LN2,N=o?"_b":"buffer",j=o?"_l":"byteLength",R=o?"_o":"byteOffset";if(c.ABV){if(!s(function(){m(1)})||!s(function(){new m(-1)})||s(function(){return new m,new m(1.5),new m(NaN),"ArrayBuffer"!=m.name})){for(var T,L=(m=function ArrayBuffer(t){return l(this,m),new P(v(t))})[S]=P[S],D=g(P),W=0;D.length>W;)(T=D[W++])in m||f(m,T,P[T]);u||(L.constructor=m)}var C=new x(new m(2)),U=x[S].setInt8;C.setInt8(0,2147483648),C.setInt8(1,2147483649),!C.getInt8(0)&&C.getInt8(1)||a(x[S],{setInt8:function setInt8(t,n){U.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){U.call(this,t,n<<24>>24)}},!0)}else m=function ArrayBuffer(t){l(this,m,"ArrayBuffer");var n=v(t);this._b=d.call(Array(n),0),this[j]=n},x=function DataView(t,n,e){l(this,x,"DataView"),l(t,m,"DataView");var i=t[j],o=h(n);if(o<0||o>i)throw E("Wrong offset!");if(e=e===r?i-o:p(e),o+e>i)throw E("Wrong length!");this[N]=t,this[R]=o,this[j]=e},o&&(addGetter(m,"byteLength","_l"),addGetter(x,"buffer","_b"),addGetter(x,"byteLength","_l"),addGetter(x,"byteOffset","_o")),a(x[S],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});_(m,"ArrayBuffer"),_(x,"DataView"),f(x[S],c.VIEW,!0),n.ArrayBuffer=m,n.DataView=x},function(t,n,r){t.exports=!r(6)&&!r(3)(function(){return 7!=Object.defineProperty(r(63)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){n.f=r(5)},function(t,n,r){var e=r(11),i=r(15),o=r(50)(!1),u=r(65)("IE_PROTO");t.exports=function(t,n){var r,c=i(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~o(a,r)||a.push(r));return a}},function(t,n,r){var e=r(7),i=r(1),o=r(34);t.exports=r(6)?Object.defineProperties:function defineProperties(t,n){i(t);for(var r,u=o(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},function(t,n,r){var e=r(15),i=r(37).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(n){return u.slice()}};t.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?c(t):i(e(t))}},function(t,n,r){var e=r(34),i=r(51),o=r(47),u=r(9),c=r(46),f=Object.assign;t.exports=!f||r(3)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=f({},t)[r]||Object.keys(f({},n)).join("")!=e})?function assign(t,n){for(var r=u(t),f=arguments.length,a=1,s=i.f,l=o.f;f>a;)for(var h,p=c(arguments[a++]),v=s?e(p).concat(s(p)):e(p),g=v.length,y=0;g>y;)l.call(p,h=v[y++])&&(r[h]=p[h]);return r}:f},function(t,n,r){var e=r(10),i=r(4),o=r(96),u=[].slice,c={},f=function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]"
;c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)};t.exports=Function.bind||function bind(t){var n=e(this),r=u.call(arguments,1),c=function(){var e=r.concat(u.call(arguments));return this instanceof c?f(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(c.prototype=n.prototype),c}},function(t,n){t.exports=function(t,n,e){var i=e===r;switch(n.length){case 0:return i?t():t.call(e);case 1:return i?t(n[0]):t.call(e,n[0]);case 2:return i?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return i?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return i?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,r){var e=r(19);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n,r){var e=r(2).parseFloat,i=r(43).trim;t.exports=1/e(r(70)+"-0")!=-Infinity?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(2).parseInt,i=r(43).trim,o=r(70),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n){t.exports=Math.log1p||function log1p(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var e=r(72),i=Math.pow,o=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),f=i(2,-126),a=function(t){return t+1/o-1/o};t.exports=Math.fround||function fround(t){var n,r,i=Math.abs(t),s=e(t);return i<f?s*a(i/f/u)*f*u:(n=(1+u/o)*i,(r=n-(n-i))>c||r!=r?s*Infinity:s*r)}},function(t,n,e){var i=e(1);t.exports=function(t,n,e,o){try{return o?n(i(e)[0],e[1]):n(e)}catch(c){var u=t["return"];throw u!==r&&i(u.call(t)),c}}},function(t,n,r){var e=r(10),i=r(9),o=r(46),u=r(8);t.exports=function(t,n,r,c,f){e(n);var a=i(t),s=o(a),l=u(a.length),h=f?l-1:0,p=f?-1:1;if(r<2)for(;;){if(h in s){c=s[h],h+=p;break}if(h+=p,f?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;f?h>=0:l>h;h+=p)h in s&&(c=n(c,s[h],h,a));return c}},function(t,n,e){var i=e(9),o=e(35),u=e(8);t.exports=[].copyWithin||function copyWithin(t,n){var e=i(this),c=u(e.length),f=o(t,c),a=o(n,c),s=arguments.length>2?arguments[2]:r,l=Math.min((s===r?c:o(s,c))-a,c-f),h=1;for(a<f&&f<a+l&&(h=-1,a+=l-1,f+=l-1);l-- >0;)a in e?e[f]=e[a]:delete e[f],f+=h,a+=h;return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){r(6)&&"g"!=/./g.flags&&r(7).f(RegExp.prototype,"flags",{configurable:!0,get:r(55)})},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(n){return{e:!0,v:n}}}},function(t,n,r){var e=r(1),i=r(4),o=r(87);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,e){var i=e(111),o=e(45);t.exports=e(58)("Map",function(t){return function Map(){return t(this,arguments.length>0?arguments[0]:r)}},{get:function get(t){var n=i.getEntry(o(this,"Map"),t);return n&&n.v},set:function set(t,n){return i.def(o(this,"Map"),0===t?0:t,n)}},i,!0)},function(t,n,e){var i=e(7).f,o=e(36),u=e(41),c=e(18),f=e(39),a=e(40),s=e(77),l=e(106),h=e(38),p=e(6),v=e(29).fastKey,g=e(45),y=p?"_s":"size",d=function(t,n){var r,e=v(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,e,s){var l=t(function(t,i){f(t,l,n,"_i"),t._t=n,t._i=o(null),t._f=r,t._l=r,t[y]=0,i!=r&&a(i,e,t[s],t)});return u(l.prototype,{clear:function clear(){for(var t=g(this,n),e=t._i,i=t._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=r),delete e[i.i];t._f=t._l=r,t[y]=0},"delete":function(t){var r=g(this,n),e=d(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[y]--}return!!e},forEach:function forEach(t){g(this,n);for(var e,i=c(t,arguments.length>1?arguments[1]:r,3);e=e?e.n:this._f;)for(i(e.v,e.k,this);e&&e.r;)e=e.p},has:function has(t){return!!d(g(this,n),t)}}),p&&i(l.prototype,"size",{get:function(){return g(this,n)[y]}}),l},def:function(t,n,e){var i,o,u=d(t,n);return u?u.v=e:(t._l=u={i:o=v(n,!0),k:n,v:e,p:i=t._l,n:r,r:!1},t._f||(t._f=u),i&&(i.n=u),t[y]++,"F"!==o&&(t._i[o]=u)),t},getEntry:d,setStrong:function(t,n,e){s(t,n,function(t,e){this._t=g(t,n),this._k=e,this._l=r},function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?"keys"==n?l(0,e.k):"values"==n?l(0,e.v):l(0,[e.k,e.v]):(t._t=r,l(1))},e?"entries":"values",!e,!0),h(n)}}},function(t,n,e){var i=e(111),o=e(45);t.exports=e(58)("Set",function(t){return function Set(){return t(this,arguments.length>0?arguments[0]:r)}},{add:function add(t){return i.def(o(this,"Set"),t=0===t?0:t,t)}},i)},function(t,n,e){var i,o=e(25)(0),u=e(13),c=e(29),f=e(94),a=e(114),s=e(4),l=e(3),h=e(45),p=c.getWeak,v=Object.isExtensible,g=a.ufstore,y={},d=function(t){return function WeakMap(){return t(this,arguments.length>0?arguments[0]:r)}},_={get:function get(t){if(s(t)){var n=p(t);return!0===n?g(h(this,"WeakMap")).get(t):n?n[this._i]:r}},set:function set(t,n){return a.def(h(this,"WeakMap"),t,n)}},S=t.exports=e(58)("WeakMap",d,_,a,!0,!0);l(function(){return 7!=(new S).set((Object.freeze||Object)(y),7).get(y)})&&(f((i=a.getConstructor(d,"WeakMap")).prototype,_),c.NEED=!0,o(["delete","has","get","set"],function(t){var n=S.prototype,r=n[t];u(n,t,function(n,e){if(s(n)&&!v(n)){this._f||(this._f=new i);var o=this._f[t](n,e);return"set"==t?this:o}return r.call(this,n,e)})}))},function(t,n,e){var i=e(41),o=e(29).getWeak,u=e(1),c=e(4),f=e(39),a=e(40),s=e(25),l=e(11),h=e(45),p=s(5),v=s(6),g=0,y=function(t){return t._l||(t._l=new d)},d=function(){this.a=[]},_=function(t,n){return p(t.a,function(t){return t[0]===n})};d.prototype={get:function(t){var n=_(this,t);if(n)return n[1]},has:function(t){return!!_(this,t)},set:function(t,n){var r=_(this,t);r?r[1]=n:this.a.push([t,n])},"delete":function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,u){var s=t(function(t,i){f(t,s,n,"_i"),t._t=n,t._i=g++,t._l=r,i!=r&&a(i,e,t[u],t)});return i(s.prototype,{"delete":function(t){if(!c(t))return!1;var r=o(t);return!0===r?y(h(this,n))["delete"](t):r&&l(r,this._i)&&delete r[this._i]},has:function has(t){if(!c(t))return!1;var r=o(t);return!0===r?y(h(this,n)).has(t):r&&l(r,this._i)}}),s},def:function(t,n,r){var e=o(u(n),!0);return!0===e?y(t).set(n,r):e[t._i]=r,t},ufstore:y}},function(t,n,r){var e=r(37),i=r(51),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,e){var i=e(23),o=e(8);t.exports=function(t){if(t===r)return 0;var n=i(t),e=o(n);if(n!==e)throw RangeError("Wrong length!");return e}},function(t,n,e){function flattenIntoArray(t,n,e,a,s,l,h,p){for(var v,g,y=s,d=0,_=!!h&&c(h,p,3);d<a;){if(d in e){if(v=_?_(e[d],d,n):e[d],g=!1,o(v)&&(g=(g=v[f])!==r?!!g:i(v)),g&&l>0)y=flattenIntoArray(t,n,v,u(v.length),y,l-1)-1;else{if(y>=9007199254740991)throw TypeError();t[y]=v}y++}d++}return y}var i=e(52),o=e(4),u=e(8),c=e(18),f=e(5)("isConcatSpreadable");t.exports=flattenIntoArray},function(t,n,e){var i=e(8),o=e(71),u=e(22);t.exports=function(t,n,e,c){var f=String(u(t)),a=f.length,s=e===r?" ":String(e),l=i(n);if(l<=a||""==s)return f;var h=l-a,p=o.call(s,Math.ceil(h/s.length));return p.length>h&&(p=p.slice(0,h)),c?p+f:f+p}},function(t,n,r){var e=r(34),i=r(15),o=r(47).f;t.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),f=c.length,a=0,s=[];f>a;)o.call(u,r=c[a++])&&s.push(t?[r,u[r]]:u[r]);return s}}},function(t,n,r){var e=r(48),i=r(121);t.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(40);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n){t.exports=Math.scale||function scale(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===Infinity||t===-Infinity?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){r(124),r(126),r(127),r(128),r(129),r(130),r(131),r(132),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(142),r(143),r(144),r(145),r(146),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(219),r(84),r(220),r(221),r(222),r(107),r(223),r(224),r(225),r(226),r(227),r(110),r(112),r(113),r(228),r(229),r(230),r(231),r(232),r(233),r(234),r(235),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(247),r(248),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),t.exports=r(319)},function(t,n,e){var i=e(2),o=e(11),u=e(6),c=e(0),f=e(13),a=e(29).KEY,s=e(3),l=e(49),h=e(42),p=e(32),v=e(5),g=e(90),y=e(64),d=e(125),_=e(52),S=e(1),b=e(15),m=e(21),x=e(31),w=e(36),E=e(93),O=e(16),P=e(7),M=e(34),I=O.f,F=P.f,A=E.f,k=i.Symbol,N=i.JSON,j=N&&N.stringify,R=v("_hidden"),T=v("toPrimitive"),L={}.propertyIsEnumerable,D=l("symbol-registry"),W=l("symbols"),C=l("op-symbols"),U=Object.prototype,G="function"==typeof k,B=i.QObject,V=!B||!B.prototype||!B.prototype.findChild,z=u&&s(function(){return 7!=w(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=I(U,n);e&&delete U[n],F(t,n,r),e&&t!==U&&F(U,n,e)}:F,q=function(t){var n=W[t]=w(k.prototype);return n._k=t,n},K=G&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},J=function defineProperty(t,n,r){return t===U&&J(C,n,r),S(t),n=m(n,!0),S(r),o(W,n)?(r.enumerable?(o(t,R)&&t[R][n]&&(t[R][n]=!1),r=w(r,{enumerable:x(0,!1)})):(o(t,R)||F(t,R,x(1,{})),t[R][n]=!0),z(t,n,r)):F(t,n,r)},Y=function defineProperties(t,n){S(t);for(var r,e=d(n=b(n)),i=0,o=e.length;o>i;)J(t,r=e[i++],n[r]);return t},H=function propertyIsEnumerable(t){var n=L.call(this,t=m(t,!0));return!(this===U&&o(W,t)&&!o(C,t))&&(!(n||!o(this,t)||!o(W,t)||o(this,R)&&this[R][t])||n)},X=function getOwnPropertyDescriptor(t,n){if(t=b(t),n=m(n,!0),t!==U||!o(W,n)||o(C,n)){var r=I(t,n);return!r||!o(W,n)||o(t,R)&&t[R][n]||(r.enumerable=!0),r}},Z=function getOwnPropertyNames(t){for(var n,r=A(b(t)),e=[],i=0;r.length>i;)o(W,n=r[i++])||n==R||n==a||e.push(n);return e},$=function getOwnPropertySymbols(t){for(var n,r=t===U,e=A(r?C:b(t)),i=[],u=0;e.length>u;)!o(W,n=e[u++])||r&&!o(U,n)||i.push(W[n]);return i};G||(f((k=function Symbol(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:r),n=function(r){this===U&&n.call(C,r),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),z(this,t,x(1,r))};return u&&V&&z(U,t,{configurable:!0,set:n}),q(t)}).prototype,"toString",function toString(){return this._k}),O.f=X,P.f=J,e(37).f=E.f=Z,e(47).f=H,e(51).f=$,u&&!e(33)&&f(U,"propertyIsEnumerable",H,!0),g.f=function(t){return q(v(t))}),c(c.G+c.W+c.F*!G,{Symbol:k});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Q.length>tt;)v(Q[tt++]);for(var nt=M(v.store),rt=0;nt.length>rt;)y(nt[rt++]);c(c.S+c.F*!G,"Symbol",{"for":function(t){return o(D,t+="")?D[t]:D[t]=k(t)},keyFor:function keyFor(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var n in D)if(D[n]===t)return n},useSetter:function(){V=!0},useSimple:function(){V=!1}}),c(c.S+c.F*!G,"Object",{create:function create(t,n){return n===r?w(t):Y(w(t),n)},defineProperty:J,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),N&&c(c.S+c.F*(!G||s(function(){var t=k();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))})),"JSON",{stringify:function stringify(t){if(t!==r&&!K(t)){for(var n,e,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);return"function"==typeof(n=i[1])&&(e=n),!e&&_(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!K(n))return n}),i[1]=n,j.apply(N,i)}}}),k.prototype[T]||e(12)(k.prototype,T,k.prototype.valueOf),h(k,"Symbol"),h(Math,"Math",!0),h(i.JSON,"JSON",!0)},function(t,n,r){var e=r(34),i=r(51),o=r(47);t.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),f=o.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},function(t,n,r){var e=r(0);e(e.S+e.F*!r(6),"Object",{defineProperty:r(7).f})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(6),"Object",{defineProperties:r(92)})},function(t,n,r){var e=r(15),i=r(16).f;r(24)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(36)})},function(t,n,r){var e=r(9),i=r(17);r(24)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(34);r(24)("keys",function(){return function keys(t){return i(e(t))}})},function(t,n,r){r(24)("getOwnPropertyNames",function(){return r(93).f})},function(t,n,r){var e=r(4),i=r(29).onFreeze;r(24)("freeze",function(t){return function freeze(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(29).onFreeze;r(24)("seal",function(t){return function seal(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(29).onFreeze;r(24)("preventExtensions",function(t){return function preventExtensions(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4);r(24)("isFrozen",function(t){return function isFrozen(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4);r(24)("isSealed",function(t){return function isSealed(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4);r(24)("isExtensible",function(t){return function isExtensible(n){return!!e(n)&&(!t||t(n))}})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(94)})},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(141)})},function(t,n){t.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(68).set})},function(t,n,r){var e=r(48),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(13)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(95)})},function(t,n,r){var e=r(7).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(6)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){var e=r(4),i=r(17),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(7).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(2),i=r(11),o=r(19),u=r(69),c=r(21),f=r(3),a=r(37).f,s=r(16).f,l=r(7).f,h=r(43).trim,p=e.Number,v=p,g=p.prototype,y="Number"==o(r(36)(g)),d="trim"in String.prototype,_=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var r,e,i,o=(n=d?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,f=n.slice(2),a=0,s=f.length;a<s;a++)if((u=f.charCodeAt(a))<48||u>i)return NaN;return parseInt(f,e)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof p&&(y?f(function(){g.valueOf.call(r)}):"Number"!=o(r))?u(new v(_(n)),r,p):_(n)};for(var S,b=r(6)?a(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;b.length>m;m++)i(v,S=b[m])&&!i(p,S)&&l(p,S,s(v,S));p.prototype=g,g.constructor=p,r(13)(e,"Number",p)}},function(t,n,r){var e=r(0),i=r(23),o=r(97),u=r(71),c=1..toFixed,f=Math.floor,a=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*a[r],a[r]=e%1e7,e=f(e/1e7)},h=function(t){for(var n=6,r=0;--n>=0;)r+=a[n],a[n]=f(r/t),r=r%t*1e7},p=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==a[t]){var r=String(a[t]);n=""===n?r:n+u.call("0",7-r.length)+r}return n},v=function(t,n,r){return 0===n?r:n%2==1?v(t,n-1,r*t):v(t*t,n/2,r)},g=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(3)(function(){c.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,c,f=o(this,s),a=i(t),y="",d="0";if(a<0||a>20)throw RangeError(s);if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(y="-",f=-f),f>1e-21)if(n=g(f*v(2,69,1))-69,r=n<0?f*v(2,-n,1):f/v(2,n,1),r*=4503599627370496,(n=52-n)>0){for(l(0,r),e=a;e>=7;)l(1e7,0),e-=7;for(l(v(10,e,1),0),e=n-1;e>=23;)h(1<<23),e-=23;h(1<<e),l(1,1),h(2),d=p()}else l(0,r),l(1<<-n,0),d=p()+u.call("0",a);return d=a>0?y+((c=d.length)<=a?"0."+u.call("0",a-c)+d:d.slice(0,c-a)+"."+d.slice(c-a)):y+d}})},function(t,n,e){var i=e(0),o=e(3),u=e(97),c=1..toPrecision;i(i.P+i.F*(o(function(){return"1"!==c.call(1,r)})||!o(function(){c.call({})})),"Number",{toPrecision:function toPrecision(t){var n=u(this,"Number#toPrecision: incorrect invocation!");return t===r?c.call(n):c.call(n,t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(98)})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},function(t,n,r){var e=r(0),i=r(98),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0),i=r(99);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0),i=r(100);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(100);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){var e=r(0),i=r(99);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){var e=r(0),i=r(101),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(Infinity)==Infinity),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:asinh})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=r(72);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0),i=r(73);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(102)})},function(t,n,r){var e=r(0),i=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,o=0,u=0,c=arguments.length,f=0;u<c;)f<(r=i(arguments[u++]))?(o=o*(e=f/r)*e+1,f=r):o+=r>0?(e=r/f)*e:r;return f===Infinity?Infinity:f*Math.sqrt(o)}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(3)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=+t,e=+n,i=65535&r,o=65535&e;return 0|i*o+((65535&r>>>16)*o+i*(65535&e>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(101)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(72)})},function(t,n,r){var e=r(0),i=r(73),o=Math.exp;e(e.S+e.F*r(3)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0),i=r(73),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==Infinity?1:r==Infinity?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function trunc(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),i=r(35),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0),i=r(15),o=r(8);e(e.S,"String",{raw:function raw(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},function(t,n,r){r(43)("trim",function(t){return function trim(){return t(this,3)}})},function(t,n,r){var e=r(0),i=r(74)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},function(t,n,e){var i=e(0),o=e(8),u=e(75),c="".endsWith;i(i.P+i.F*e(76)("endsWith"),"String",{endsWith:function endsWith(t){var n=u(this,t,"endsWith"),e=arguments.length>1?arguments[1]:r,i=o(n.length),f=e===r?i:Math.min(o(e),i),a=String(t);return c?c.call(n,a,f):n.slice(f-a.length,f)===a}})},function(t,n,e){var i=e(0),o=e(75);i(i.P+i.F*e(76)("includes"),"String",{includes:function includes(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:r)}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(71)})},function(t,n,e){var i=e(0),o=e(8),u=e(75),c="".startsWith;i(i.P+i.F*e(76)("startsWith"),"String",{startsWith:function startsWith(t){var n=u(this,t,"startsWith"),e=o(Math.min(arguments.length>1?arguments[1]:r,n.length)),i=String(t);return c?c.call(n,i,e):n.slice(e,e+i.length)===i}})},function(t,n,e){var i=e(74)(!0);e(77)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:r,done:!0}:(t=i(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){r(14)("anchor",function(t){return function anchor(n){return t(this,"a","name",n)}})},function(t,n,r){r(14)("big",function(t){return function big(){return t(this,"big","","")}})},function(t,n,r){r(14)("blink",function(t){return function blink(){return t(this,"blink","","")}})},function(t,n,r){r(14)("bold",function(t){return function bold(){return t(this,"b","","")}})},function(t,n,r){r(14)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},function(t,n,r){r(14)("fontcolor",function(t){return function fontcolor(n){return t(this,"font","color",n)}})},function(t,n,r){r(14)("fontsize",function(t){return function fontsize(n){return t(this,"font","size",n)}})},function(t,n,r){r(14)("italics",function(t){return function italics(){return t(this,"i","","")}})},function(t,n,r){r(14)("link",function(t){return function link(n){return t(this,"a","href",n)}})},function(t,n,r){r(14)("small",function(t){return function small(){return t(this,"small","","")}})},function(t,n,r){r(14)("strike",function(t){return function strike(){return t(this,"strike","","")}})},function(t,n,r){r(14)("sub",function(t){return function sub(){return t(this,"sub","","")}})},function(t,n,r){r(14)("sup",function(t){return function sup(){return t(this,"sup","","")}})},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(52)})},function(t,n,e){var i=e(18),o=e(0),u=e(9),c=e(103),f=e(79),a=e(8),s=e(80),l=e(81);o(o.S+o.F*!e(54)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,e,o,h,p=u(t),v="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:r,d=y!==r,_=0,S=l(p);if(d&&(y=i(y,g>2?arguments[2]:r,2)),S==r||v==Array&&f(S))for(e=new v(n=a(p.length));n>_;_++)s(e,_,d?y(p[_],_):p[_]);else for(h=S.call(p),e=new v;!(o=h.next()).done;_++)s(e,_,d?c(h,y,[o.value,_],!0):o.value);return e.length=_,e}})},function(t,n,r){var e=r(0),i=r(80);e(e.S+e.F*r(3)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,e){var i=e(0),o=e(15),u=[].join;i(i.P+i.F*(e(46)!=Object||!e(20)(u)),"Array",{join:function join(t){return u.call(o(this),t===r?",":t)}})},function(t,n,e){var i=e(0),o=e(67),u=e(19),c=e(35),f=e(8),a=[].slice;i(i.P+i.F*e(3)(function(){o&&a.call(o)}),"Array",{slice:function slice(t,n){var e=f(this.length),i=u(this);if(n=n===r?e:n,"Array"==i)return a.call(this,t,n);for(var o=c(t,e),s=c(n,e),l=f(s-o),h=Array(l),p=0;p<l;p++)h[p]="String"==i?this.charAt(o+p):this[o+p];return h}})},function(t,n,e){var i=e(0),o=e(10),u=e(9),c=e(3),f=[].sort,a=[1,2,3];i(i.P+i.F*(c(function(){a.sort(r)})||!c(function(){a.sort(null)})||!e(20)(f)),"Array",{sort:function sort(t){return t===r?f.call(u(this)):f.call(u(this),o(t))}})},function(t,n,r){var e=r(0),i=r(25)(0),o=r(20)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},function(t,n,e){var i=e(4),o=e(52),u=e(5)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=r),i(n)&&null===(n=n[u])&&(n=r)),n===r?Array:n}},function(t,n,r){var e=r(0),i=r(25)(1);e(e.P+e.F*!r(20)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(2);e(e.P+e.F*!r(20)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(3);e(e.P+e.F*!r(20)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(25)(4);e(e.P+e.F*!r(20)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(104);e(e.P+e.F*!r(20)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){var e=r(0),i=r(104);e(e.P+e.F*!r(20)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){var e=r(0),i=r(50)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(20)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){var e=r(0),i=r(15),o=r(23),u=r(8),c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(f||!r(20)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(f)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(105)}),r(30)("copyWithin")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(83)}),r(30)("fill")},function(t,n,e){var i=e(0),o=e(25)(5),u=!0;"find"in[]&&Array(1).find(function(){u=!1}),i(i.P+i.F*u,"Array",{find:function find(t){return o(this,t,arguments.length>1?arguments[1]:r)}}),e(30)("find")},function(t,n,e){var i=e(0),o=e(25)(6),u="findIndex",c=!0;u in[]&&Array(1)[u](function(){c=!1}),i(i.P+i.F*c,"Array",{findIndex:function findIndex(t){return o(this,t,arguments.length>1?arguments[1]:r)}}),e(30)(u)},function(t,n,r){r(38)("Array")},function(t,n,e){var i=e(2),o=e(69),u=e(7).f,c=e(37).f,f=e(53),a=e(55),s=i.RegExp,l=s,h=s.prototype,p=/a/g,v=/a/g,g=new s(p)!==p;if(e(6)&&(!g||e(3)(function(){return v[e(5)("match")]=!1,s(p)!=p||s(v)==v||"/a/i"!=s(p,"i")}))){s=function RegExp(t,n){var e=this instanceof s,i=f(t),u=n===r;return!e&&i&&t.constructor===s&&u?t:o(g?new l(i&&!u?t.source:t,n):l((i=t instanceof s)?t.source:t,i&&u?a.call(t):n),e?this:h,s)};for(var y=c(l),d=0;y.length>d;)!function(t){t in s||u(s,t,{configurable:!0,get:function(){return l[t]},set:function(n){l[t]=n}})}(y[d++]);h.constructor=s,s.prototype=h,e(13)(i,"RegExp",s)}e(38)("RegExp")},function(t,n,e){e(107);var i=e(1),o=e(55),u=e(6),c=/./.toString,f=function(t){e(13)(RegExp.prototype,"toString",t,!0)};e(3)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?f(function toString(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!u&&t instanceof RegExp?o.call(t):r)}):"toString"!=c.name&&f(function toString(){return c.call(this)})},function(t,n,e){e(56)("match",1,function(t,n,e){return[function match(e){var i=t(this),o=e==r?r:e[n];return o!==r?o.call(e,i):new RegExp(e)[n](String(i))},e]})},function(t,n,e){e(56)("replace",2,function(t,n,e){return[function replace(i,o){var u=t(this),c=i==r?r:i[n];return c!==r?c.call(i,u,o):e.call(String(u),i,o)},e]})},function(t,n,e){e(56)("search",1,function(t,n,e){return[function search(e){var i=t(this),o=e==r?r:e[n];return o!==r?o.call(e,i):new RegExp(e)[n](String(i))},e]})},function(t,n,e){e(56)("split",2,function(t,n,i){var o=e(53),u=i,c=[].push,f="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[f]||2!="ab".split(/(?:ab)*/)[f]||4!=".".split(/(.?)(.?)/)[f]||".".split(/()()/)[f]>1||"".split(/.?/)[f]){var a=/()??/.exec("")[1]===r;i=function(t,n){var e=String(this);if(t===r&&0===n)return[];if(!o(t))return u.call(e,t,n);var i,s,l,h,p,v=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,d=n===r?4294967295:n>>>0,_=new RegExp(t.source,g+"g");for(a||(i=new RegExp("^"+_.source+"$(?!\\s)",g));(s=_.exec(e))&&!((l=s.index+s[0][f])>y&&(v.push(e.slice(y,s.index)),!a&&s[f]>1&&s[0].replace(i,function(){for(p=1;p<arguments[f]-2;p++)arguments[p]===r&&(s[p]=r)}),s[f]>1&&s.index<e[f]&&c.apply(v,s.slice(1)),h=s[0][f],y=l,v[f]>=d));)_.lastIndex===s.index&&_.lastIndex++;return y===e[f]?!h&&_.test("")||v.push(""):v.push(e.slice(y)),v[f]>d?v.slice(0,d):v}}else"0".split(r,0)[f]&&(i=function(t,n){return t===r&&0===n?[]:u.call(this,t,n)});return[function split(e,o){var u=t(this),c=e==r?r:e[n];return c!==r?c.call(e,u,o):i.call(String(u),e,o)},i]})},function(t,n,e){var i,o,u,c,f=e(33),a=e(2),s=e(18),l=e(48),h=e(0),p=e(4),v=e(10),g=e(39),y=e(40),d=e(57),_=e(85).set,S=e(86)(),b=e(87),m=e(108),x=e(109),w=a.TypeError,E=a.process,O=a.Promise,P="process"==l(E),M=function(){},I=o=b.f,F=!!function(){try{var t=O.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(M,M)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof n}catch(r){}}(),A=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},k=function(t,n){if(!t._n){t._n=!0;var r=t._c;S(function(){for(var e=t._v,i=1==t._s,o=0;r.length>o;)!function(n){var r,o,u=i?n.ok:n.fail,c=n.resolve,f=n.reject,a=n.domain;try{u?(i||(2==t._h&&R(t),t._h=1),!0===u?r=e:(a&&a.enter(),r=u(e),a&&a.exit()),r===n.promise?f(w("Promise-chain cycle")):(o=A(r))?o.call(r,c,f):c(r)):f(e)}catch(s){f(s)}}(r[o++]);t._c=[],t._n=!1,n&&!t._h&&N(t)})}},N=function(t){_.call(a,function(){var n,e,i,o=t._v,u=j(t);if(u&&(n=m(function(){P?E.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(i=a.console)&&i.error&&i.error("Unhandled promise rejection",o)}),t._h=P||j(t)?2:1),t._a=r,
u&&n.e)throw n.v})},j=function(t){if(1==t._h)return!1;for(var n,r=t._a||t._c,e=0;r.length>e;)if((n=r[e++]).fail||!j(n.promise))return!1;return!0},R=function(t){_.call(a,function(){var n;P?E.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},T=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),k(n,!0))},L=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw w("Promise can't be resolved itself");(n=A(t))?S(function(){var e={_w:r,_d:!1};try{n.call(t,s(L,e,1),s(T,e,1))}catch(i){T.call(e,i)}}):(r._v=t,r._s=1,k(r,!1))}catch(e){T.call({_w:r,_d:!1},e)}}};F||(O=function Promise(t){g(this,O,"Promise","_h"),v(t),i.call(this);try{t(s(L,this,1),s(T,this,1))}catch(n){T.call(this,n)}},(i=function Promise(t){this._c=[],this._a=r,this._s=0,this._d=!1,this._v=r,this._h=0,this._n=!1}).prototype=e(41)(O.prototype,{then:function then(t,n){var e=I(d(this,O));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=P?E.domain:r,this._c.push(e),this._a&&this._a.push(e),this._s&&k(this,!1),e.promise},"catch":function(t){return this.then(r,t)}}),u=function(){var t=new i;this.promise=t,this.resolve=s(L,t,1),this.reject=s(T,t,1)},b.f=I=function(t){return t===O||t===c?new u(t):o(t)}),h(h.G+h.W+h.F*!F,{Promise:O}),e(42)(O,"Promise"),e(38)("Promise"),c=e(28).Promise,h(h.S+h.F*!F,"Promise",{reject:function reject(t){var n=I(this);return(0,n.reject)(t),n.promise}}),h(h.S+h.F*(f||!F),"Promise",{resolve:function resolve(t){return x(f&&this===c?O:this,t)}}),h(h.S+h.F*!(F&&e(54)(function(t){O.all(t)["catch"](M)})),"Promise",{all:function all(t){var n=this,e=I(n),i=e.resolve,o=e.reject,u=m(function(){var e=[],u=0,c=1;y(t,!1,function(t){var f=u++,a=!1;e.push(r),c++,n.resolve(t).then(function(t){a||(a=!0,e[f]=t,--c||i(e))},o)}),--c||i(e)});return u.e&&o(u.v),e.promise},race:function race(t){var n=this,r=I(n),e=r.reject,i=m(function(){y(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,e){var i=e(114),o=e(45);e(58)("WeakSet",function(t){return function WeakSet(){return t(this,arguments.length>0?arguments[0]:r)}},{add:function add(t){return i.def(o(this,"WeakSet"),t,!0)}},i,!1,!0)},function(t,n,r){var e=r(0),i=r(10),o=r(1),u=(r(2).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!r(3)(function(){u(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=i(t),f=o(r);return u?u(e,n,f):c.call(e,n,f)}})},function(t,n,r){var e=r(0),i=r(36),o=r(10),u=r(1),c=r(4),f=r(3),a=r(95),s=(r(2).Reflect||{}).construct,l=f(function(){function F(){}return!(s(function(){},[],F)instanceof F)}),h=!f(function(){s(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function construct(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(a.apply(t,e))}var f=r.prototype,p=i(c(f)?f:Object.prototype),v=Function.apply.call(t,p,n);return c(v)?v:p}})},function(t,n,r){var e=r(7),i=r(0),o=r(1),u=r(21);i(i.S+i.F*r(3)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(i){return!1}}})},function(t,n,r){var e=r(0),i=r(16).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,e){var i=e(0),o=e(1),u=function(t){this._t=o(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};e(78)(u,"Object",function(){var t,n=this,e=n._k;do{if(n._i>=e.length)return{value:r,done:!0}}while(!((t=e[n._i++])in n._t));return{value:t,done:!1}}),i(i.S,"Reflect",{enumerate:function enumerate(t){return new u(t)}})},function(t,n,e){function get(t,n){var e,c,s=arguments.length<3?t:arguments[2];return a(t)===s?t[n]:(e=i.f(t,n))?u(e,"value")?e.value:e.get!==r?e.get.call(s):r:f(c=o(t))?get(c,n,s):void 0}var i=e(16),o=e(17),u=e(11),c=e(0),f=e(4),a=e(1);c(c.S,"Reflect",{get:get})},function(t,n,r){var e=r(16),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(0),i=r(17),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(115)})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(n){return!1}}})},function(t,n,e){function set(t,n,e){var f,h,p=arguments.length<4?t:arguments[3],v=o.f(s(t),n);if(!v){if(l(h=u(t)))return set(h,n,e,p);v=a(0)}return c(v,"value")?!(!1===v.writable||!l(p))&&(f=o.f(p,n)||a(0),f.value=e,i.f(p,n,f),!0):v.set!==r&&(v.set.call(p,e),!0)}var i=e(7),o=e(16),u=e(17),c=e(11),f=e(0),a=e(31),s=e(1),l=e(4);f(f.S,"Reflect",{set:set})},function(t,n,r){var e=r(0),i=r(68);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(r){return!1}}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){var e=r(0),i=r(9),o=r(21);e(e.P+e.F*r(3)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0),i=r(246);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){var e=r(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=Date.prototype,i=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&r(13)(e,"toString",function toString(){var t=o.call(this);return t===t?i.call(this):"Invalid Date"})},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(12)(i,e,r(249))},function(t,n,r){var e=r(1),i=r(21);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,e){var i=e(0),o=e(59),u=e(88),c=e(1),f=e(35),a=e(8),s=e(4),l=e(2).ArrayBuffer,h=e(57),p=u.ArrayBuffer,v=u.DataView,g=o.ABV&&l.isView,y=p.prototype.slice,d=o.VIEW;i(i.G+i.W+i.F*(l!==p),{ArrayBuffer:p}),i(i.S+i.F*!o.CONSTR,"ArrayBuffer",{isView:function isView(t){return g&&g(t)||s(t)&&d in t}}),i(i.P+i.U+i.F*e(3)(function(){return!new p(2).slice(1,r).byteLength}),"ArrayBuffer",{slice:function slice(t,n){if(y!==r&&n===r)return y.call(c(this),t);for(var e=c(this).byteLength,i=f(t,e),o=f(n===r?e:n,e),u=new(h(this,p))(a(o-i)),s=new v(this),l=new v(u),g=0;i<o;)l.setUint8(g++,s.getUint8(i++));return u}}),e(38)("ArrayBuffer")},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(59).ABV,{DataView:r(88).DataView})},function(t,n,r){r(26)("Int8",1,function(t){return function Int8Array(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(26)("Uint8",1,function(t){return function Uint8Array(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(26)("Uint8",1,function(t){return function Uint8ClampedArray(n,r,e){return t(this,n,r,e)}},!0)},function(t,n,r){r(26)("Int16",2,function(t){return function Int16Array(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(26)("Uint16",2,function(t){return function Uint16Array(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(26)("Int32",4,function(t){return function Int32Array(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(26)("Uint32",4,function(t){return function Uint32Array(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(26)("Float32",4,function(t){return function Float32Array(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(26)("Float64",8,function(t){return function Float64Array(n,r,e){return t(this,n,r,e)}})},function(t,n,e){var i=e(0),o=e(50)(!0);i(i.P,"Array",{includes:function includes(t){return o(this,t,arguments.length>1?arguments[1]:r)}}),e(30)("includes")},function(t,n,r){var e=r(0),i=r(117),o=r(9),u=r(8),c=r(10),f=r(82);e(e.P,"Array",{flatMap:function flatMap(t){var n,r,e=o(this);return c(t),n=u(e.length),r=f(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(30)("flatMap")},function(t,n,e){var i=e(0),o=e(117),u=e(9),c=e(8),f=e(23),a=e(82);i(i.P,"Array",{flatten:function flatten(){var t=arguments[0],n=u(this),e=c(n.length),i=a(n,0);return o(i,n,n,e,0,t===r?1:f(t)),i}}),e(30)("flatten")},function(t,n,r){var e=r(0),i=r(74)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},function(t,n,e){var i=e(0),o=e(118);i(i.P,"String",{padStart:function padStart(t){return o(this,t,arguments.length>1?arguments[1]:r,!0)}})},function(t,n,e){var i=e(0),o=e(118);i(i.P,"String",{padEnd:function padEnd(t){return o(this,t,arguments.length>1?arguments[1]:r,!1)}})},function(t,n,r){r(43)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},function(t,n,r){r(43)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},function(t,n,r){var e=r(0),i=r(22),o=r(8),u=r(53),c=r(55),f=RegExp.prototype,a=function(t,n){this._r=t,this._s=n};r(78)(a,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in f?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new a(e,n)}})},function(t,n,r){r(64)("asyncIterator")},function(t,n,r){r(64)("observable")},function(t,n,e){var i=e(0),o=e(115),u=e(15),c=e(16),f=e(80);i(i.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,e,i=u(t),a=c.f,s=o(i),l={},h=0;s.length>h;)(e=a(i,n=s[h++]))!==r&&f(l,n,e);return l}})},function(t,n,r){var e=r(0),i=r(119)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(119)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(7);r(6)&&e(e.P+r(60),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(10),u=r(7);r(6)&&e(e.P+r(60),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){var e=r(0),i=r(9),o=r(21),u=r(17),c=r(16).f;r(6)&&e(e.P+r(60),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){var e=r(0),i=r(9),o=r(21),u=r(17),c=r(16).f;r(6)&&e(e.P+r(60),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(120)("Map")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(120)("Set")})},function(t,n,r){r(61)("Map")},function(t,n,r){r(61)("Set")},function(t,n,r){r(61)("WeakMap")},function(t,n,r){r(61)("WeakSet")},function(t,n,r){r(62)("Map")},function(t,n,r){r(62)("Set")},function(t,n,r){r(62)("WeakMap")},function(t,n,r){r(62)("WeakSet")},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0),i=r(19);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function clamp(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function degrees(t){return t*i}})},function(t,n,r){var e=r(0),i=r(122),o=r(102);e(e.S,"Math",{fscale:function fscale(t,n,r,e,u){return o(i(t,n,r,e,u))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)+(e>>>0)+((i&o|(i|o)&~(i+o>>>0))>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=r>>>0;return(n>>>0)-(e>>>0)-((~i&o|~(i^o)&i-o>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function imulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,f=(u*o>>>0)+(i*o>>>16);return u*c+(f>>16)+((i*c>>>0)+(65535&f)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function radians(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(122)})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function umulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,f=(u*o>>>0)+(i*o>>>16);return u*c+(f>>>16)+((i*c>>>0)+(65535&f)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==Infinity:t>0}})},function(t,n,r){var e=r(0),i=r(28),o=r(2),u=r(57),c=r(109);e(e.P+e.R,"Promise",{"finally":function(t){var n=u(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return c(n,t()).then(function(){return r})}:t,r?function(r){return c(n,t()).then(function(){throw r})}:t)}})},function(t,n,r){var e=r(0),i=r(87),o=r(108);e(e.S,"Promise",{"try":function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){var e=r(27),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,e){var i=e(27),o=e(1),u=i.key,c=i.map,f=i.store;i.exp({deleteMetadata:function deleteMetadata(t,n){var e=arguments.length<3?r:u(arguments[2]),i=c(o(n),e,!1);if(i===r||!i["delete"](t))return!1;if(i.size)return!0;var a=f.get(n);return a["delete"](e),!!a.size||f["delete"](n)}})},function(t,n,e){var i=e(27),o=e(1),u=e(17),c=i.has,f=i.get,a=i.key,s=function(t,n,e){if(c(t,n,e))return f(t,n,e);var i=u(n);return null!==i?s(t,i,e):r};i.exp({getMetadata:function getMetadata(t,n){return s(t,o(n),arguments.length<3?r:a(arguments[2]))}})},function(t,n,e){var i=e(112),o=e(121),u=e(27),c=e(1),f=e(17),a=u.keys,s=u.key,l=function(t,n){var r=a(t,n),e=f(t);if(null===e)return r;var u=l(e,n);return u.length?r.length?o(new i(r.concat(u))):u:r};u.exp({getMetadataKeys:function getMetadataKeys(t){return l(c(t),arguments.length<2?r:s(arguments[1]))}})},function(t,n,e){var i=e(27),o=e(1),u=i.get,c=i.key;i.exp({getOwnMetadata:function getOwnMetadata(t,n){return u(t,o(n),arguments.length<3?r:c(arguments[2]))}})},function(t,n,e){var i=e(27),o=e(1),u=i.keys,c=i.key;i.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return u(o(t),arguments.length<2?r:c(arguments[1]))}})},function(t,n,e){var i=e(27),o=e(1),u=e(17),c=i.has,f=i.key,a=function(t,n,r){if(c(t,n,r))return!0;var e=u(n);return null!==e&&a(t,e,r)};i.exp({hasMetadata:function hasMetadata(t,n){return a(t,o(n),arguments.length<3?r:f(arguments[2]))}})},function(t,n,e){var i=e(27),o=e(1),u=i.has,c=i.key;i.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return u(t,o(n),arguments.length<3?r:c(arguments[2]))}})},function(t,n,e){var i=e(27),o=e(1),u=e(10),c=i.key,f=i.set;i.exp({metadata:function metadata(t,n){return function decorator(e,i){f(t,n,(i!==r?o:u)(e),c(i))}}})},function(t,n,r){var e=r(0),i=r(86)(),o=r(2).process,u="process"==r(19)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,e){var i=e(0),o=e(2),u=e(28),c=e(86)(),f=e(5)("observable"),a=e(10),s=e(1),l=e(39),h=e(41),p=e(12),v=e(40),g=v.RETURN,y=function(t){return null==t?r:a(t)},d=function(t){var n=t._c;n&&(t._c=r,n())},_=function(t){return t._o===r},S=function(t){_(t)||(t._o=r,d(t))},b=function(t,n){s(t),this._c=r,this._o=t,t=new m(this);try{var e=n(t),i=e;null!=e&&("function"==typeof e.unsubscribe?e=function(){i.unsubscribe()}:a(e),this._c=e)}catch(o){return void t.error(o)}_(this)&&d(this)};b.prototype=h({},{unsubscribe:function unsubscribe(){S(this)}});var m=function(t){this._s=t};m.prototype=h({},{next:function next(t){var n=this._s;if(!_(n)){var r=n._o;try{var e=y(r.next);if(e)return e.call(r,t)}catch(i){try{S(n)}finally{throw i}}}},error:function error(t){var n=this._s;if(_(n))throw t;var e=n._o;n._o=r;try{var i=y(e.error);if(!i)throw t;t=i.call(e,t)}catch(o){try{d(n)}finally{throw o}}return d(n),t},complete:function complete(t){var n=this._s;if(!_(n)){var e=n._o;n._o=r;try{var i=y(e.complete);t=i?i.call(e,t):r}catch(o){try{d(n)}finally{throw o}}return d(n),t}}});var x=function Observable(t){l(this,x,"Observable","_f")._f=a(t)};h(x.prototype,{subscribe:function subscribe(t){return new b(t,this._f)},forEach:function forEach(t){var n=this;return new(u.Promise||o.Promise)(function(r,e){a(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(r){e(r),i.unsubscribe()}},error:e,complete:r})})}}),h(x,{from:function from(t){var n="function"==typeof this?this:x,r=y(s(t)[f]);if(r){var e=s(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return c(function(){if(!r){try{if(v(t,!1,function(t){if(n.next(t),r)return g})===g)return}catch(e){if(r)throw e;return void n.error(e)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,r=Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:x)(function(t){var n=!1;return c(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),p(x.prototype,f,function(){return this}),i(i.G,{Observable:x}),e(38)("Observable")},function(t,n,r){var e=r(0),i=r(85);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){for(var e=r(84),i=r(34),o=r(13),u=r(2),c=r(12),f=r(44),a=r(5),s=a("iterator"),l=a("toStringTag"),h=f.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),g=0;g<v.length;g++){var y,d=v[g],_=p[d],S=u[d],b=S&&S.prototype;if(b&&(b[s]||c(b,s,h),b[l]||c(b,l,d),f[d]=h,_))for(y in e)b[y]||o(b,y,e[y],!0)}},function(t,n,r){var e=r(2),i=r(0),o=e.navigator,u=[].slice,c=!!o&&/MSIE .\./.test(o.userAgent),f=function(t){return function(n,r){var e=arguments.length>2,i=!!e&&u.call(arguments,2);return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,r)}};i(i.G+i.B+i.F*c,{setTimeout:f(e.setTimeout),setInterval:f(e.setInterval)})}]),"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):n.core=t}(1,1);
//# sourceMappingURL=shim.min.js.map
/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        return Zone;
    }());
    Zone.__symbol__ = __symbol__;
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            if (type === eventTask && options && options.isUsingGlobalCallback) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.apply(global, [self, this, arguments]);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                invoke: this.invoke,
                scheduleFn: this.scheduleFn,
                cancelFn: this.cancelFn,
                runCount: this.runCount,
                callback: this.callback
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            var showError = !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.apply(this, [e]);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var OBJECT = 'object';
    var FUNCTION = 'function';
    var CURRENT_TASK_SYMBOL = __symbol__('currentTask');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === OBJECT || typeof value === FUNCTION) {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === FUNCTION) {
                try {
                    then.apply(value, [
                        onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false))
                    ]);
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    value[CURRENT_TASK_SYMBOL] = Zone.currentTask;
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        throw new Error('Uncaught (in promise): ' + value +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === FUNCTION) {
                    handler.apply(this, [{ rejection: promise[symbolValue], promise: promise }]);
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var delegate = promise[symbolState] ?
            (typeof onFulfilled === FUNCTION) ? onFulfilled : forwardResolution :
            (typeof onRejected === FUNCTION) ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                resolvePromise(chainPromise, true, zone.run(delegate, undefined, [promise[symbolValue]]));
            }
            catch (error) {
                resolvePromise(chainPromise, false, error);
            }
        });
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                _a = [res, rej], resolve = _a[0], reject = _a[1];
                var _a;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        // check Ctor.prototype.then propertyDescritor is writable or not
        // in meteor env, writable is false, we have to make it to be true.
        var prop = Object.getOwnPropertyDescriptor(Ctor.prototype, 'then');
        if (prop && prop.writable === false && prop.configurable) {
            Object.defineProperty(Ctor.prototype, 'then', { writable: true });
        }
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == FUNCTION) {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
var zoneSymbol = Zone.__symbol__;
var _global = typeof window === 'object' && window || typeof self === 'object' && self || global;
var FUNCTION = 'function';
var UNDEFINED = 'undefined';
var REMOVE_ATTRIBUTE = 'removeAttribute';
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === FUNCTION) {
            args[i] = Zone.current.wrap(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = Object.getOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    if (typeof propertyDesc.get === FUNCTION && typeof propertyDesc.set === UNDEFINED) {
        return false;
    }
    return true;
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidently browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidently browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(typeof window !== 'undefined' && window['HTMLElement']);
var ON_PROPERTY_HANDLER_SYMBOL = zoneSymbol('onPropertyHandler');
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var listener = this[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = Object.getOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        if (target[eventNameSymbol]) {
            return wrapFn;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.apply(this);
            if (value) {
                desc.set.apply(this, [value]);
                if (typeof target[REMOVE_ATTRIBUTE] === FUNCTION) {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    Object.defineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                Object.defineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = Object.getPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && Object.getOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.callbackIndex] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.callbackIndex >= 0 && typeof args[meta.callbackIndex] === 'function') {
            var task = Zone.current.scheduleMacroTask(meta.name, args[meta.callbackIndex], meta, scheduleTask, null);
            return task;
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global, Zone, api) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Zone['__zone_symbol__originalToString'] =
        Function.prototype.toString;
    var FUNCTION = 'function';
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    Function.prototype.toString = function () {
        if (typeof this === FUNCTION) {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === FUNCTION) {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var TRUE_STR = 'true';
var FALSE_STR = 'false';
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    isUsingGlobalCallback: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var CONSTRUCTOR_NAME = 'name';
var FUNCTION_TYPE = 'function';
var OBJECT_TYPE = 'object';
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.addEventListenerFnName) || 'addEventListener';
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.removeEventListenerFnName) || 'removeEventListener';
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listenersFnName) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.removeAllFnName) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === OBJECT_TYPE && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].apply(target, [event.type, delegate_1, options]);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        var target = this || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        var target = this || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useGlobalCallback !== undefined) {
            useGlobalCallback = patchOptions.useGlobalCallback;
        }
        var validateHandler = patchOptions && patchOptions.validateHandler;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.checkDuplicate !== undefined) {
            checkDuplicate = patchOptions.checkDuplicate;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.returnTarget !== undefined) {
            returnTarget = patchOptions.returnTarget;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = Object.getPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prependEventListenerFnName) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prependEventListenerFnName)] =
                proto[patchOptions.prependEventListenerFnName];
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.apply(taskData.target, [
                taskData.eventName,
                taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback,
                taskData.options
            ]);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.apply(task.target, [
                task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback,
                task.options
            ]);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.apply(taskData.target, [taskData.eventName, task.invoke, taskData.options]);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.apply(taskData.target, [taskData.eventName, task.invoke, taskData.options]);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.apply(task.target, [task.eventName, task.invoke, task.options]);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            if ((typeOfDelegate === FUNCTION_TYPE && task.callback === delegate) ||
                (typeOfDelegate === OBJECT_TYPE && task.originalDelegate === delegate)) {
                // same callback, same capture, same event name, just return
                return true;
            }
            return false;
        };
        var compare = (patchOptions && patchOptions.compareTaskCallbackVsDelegate) ?
            patchOptions.compareTaskCallbackVsDelegate :
            compareTaskCallbackVsDelegate;
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var targetZone = Zone.current;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== FUNCTION_TYPE) {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor[CONSTRUCTOR_NAME];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    var typeOfDelegate = typeof delegate;
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        return;
                    }
                }
            }
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].apply(this, [evtName]);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].apply(this, ['removeListener']);
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].apply(this, [eventName, delegate, task.options]);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].apply(this, [eventName, delegate, task.options]);
                        }
                    }
                }
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    var NUMBER = 'number';
    var STRING = 'string';
    var FUNCTION = 'function';
    var INTERVAL = 'Interval';
    var TIMEOUT = 'Timeout';
    var NOT_SCHEDULED = 'notScheduled';
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                if (typeof data.handleId === NUMBER) {
                    // Node returns complex objects as handleIds
                    delete tasksByHandleId[data.handleId];
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        if (typeof data.handleId === NUMBER) {
            // Node returns complex objects as handleIds -> no need to keep them around. Additionally,
            // this throws an
            // exception in older node versions and has no effect there, because of the stringified key.
            tasksByHandleId[data.handleId] = task;
        }
        return task;
    }
    function clearTask(task) {
        if (typeof task.data.handleId === NUMBER) {
            // Node returns complex objects as handleIds
            delete tasksByHandleId[task.data.handleId];
        }
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === FUNCTION) {
                var zone = Zone.current;
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === INTERVAL,
                    delay: (nameSuffix === TIMEOUT || nameSuffix === INTERVAL) ? args[1] || 0 : null,
                    args: args
                };
                var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === FUNCTION &&
                    typeof handle.unref === FUNCTION) {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var task = typeof args[0] === NUMBER ? tasksByHandleId[args[0]] : args[0];
            if (task && typeof task.type === STRING) {
                if (task.state !== NOT_SCHEDULED &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
var PROTOTYPE = 'prototype';
var OBJECT = 'object';
var UNDEFINED$1 = 'undefined';
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== PROTOTYPE) {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === OBJECT && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    desc.configurable = true;
    if (!desc.configurable) {
        if (!obj[unconfigurablesKey]) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        obj[unconfigurablesKey][prop] = true;
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == UNDEFINED$1) {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = descJson.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (a, b) {
        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = Object.create(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = Array.prototype.slice.call(arguments);
                    if (propName === 'addEventListener' || propName === 'removeEventListener') {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(window, eventNames.concat(['messageerror']), ignoreProperties, Object.getPrototypeOf(window));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof window['SVGElement'] !== 'undefined') {
                patchFilteredProperties(window['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = window['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var xhrDesc = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, 'onreadystatechange');
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fakeonreadystatechange');
        Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}

var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = Zone.current.wrap(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    patchEventTarget(_global, apiTypes, { validateHandler: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                if (opts.prototype.hasOwnProperty(callback)) {
                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = Zone.current.wrap(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
                    }
                }
                else if (opts.prototype[callback]) {
                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
                }
            });
        }
        return _registerElement.apply(document, [name, opts]);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('timers', function (global, Zone, api) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global, Zone, api) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone, api) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global, Zone, api) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, callbackIndex: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone, api) {
    // Treat XMLHTTPRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    function patchXHR(window) {
        function findPendingTask(target) {
            var pendingTask = target[XHR_TASK];
            return pendingTask;
        }
        var SYMBOL_ADDEVENTLISTENER = zoneSymbol('addEventListener');
        var SYMBOL_REMOVEEVENTLISTENER = zoneSymbol('removeEventListener');
        var oriAddListener = XMLHttpRequest.prototype[SYMBOL_ADDEVENTLISTENER];
        var oriRemoveListener = XMLHttpRequest.prototype[SYMBOL_REMOVEEVENTLISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                oriAddListener = XMLHttpRequestEventTarget.prototype[SYMBOL_ADDEVENTLISTENER];
                oriRemoveListener = XMLHttpRequestEventTarget.prototype[SYMBOL_REMOVEEVENTLISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[SYMBOL_ADDEVENTLISTENER];
                oriRemoveListener = target[SYMBOL_REMOVEEVENTLISTENER];
            }
            if (listener) {
                oriRemoveListener.apply(target, [READY_STATE_CHANGE, listener]);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.apply(target, [READY_STATE_CHANGE, newListener]);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
            var zone = Zone.current;
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, isPeriodic: false, delay: null, args: args, aborted: false };
                return zone.scheduleMacroTask(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var STRING_TYPE = 'string';
        var abortNative = patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == STRING_TYPE) {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global, Zone, api) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone, api) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    // feature test for Symbol support
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var HashMap;
    (function (HashMap) {
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        HashMap.create = supportsCreate
            ? function () { return MakeDictionary(Object.create(null)); }
            : supportsProto
                ? function () { return MakeDictionary({ __proto__: null }); }
                : function () { return MakeDictionary({}); };
        HashMap.has = downLevel
            ? function (map, key) { return hasOwn.call(map, key); }
            : function (map, key) { return key in map; };
        HashMap.get = downLevel
            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
            : function (map, key) { return map[key]; };
    })(HashMap || (HashMap = {}));
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
    var Metadata = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param propertyKey (Optional) The property key to decorate.
      * @param attributes (Optional) The property descriptor for the target key.
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Example = Reflect.decorate(decoratorsArray, Example);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(Example, "staticMethod",
      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(Example.prototype, "method",
      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
      *
      */
    function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsObject(target))
                throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
            if (IsNull(attributes))
                attributes = undefined;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
        }
        else {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsConstructor(target))
                throw new TypeError();
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
    // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class Example {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param propertyKey (Optional) The property key for the target.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, Example);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
      *
      */
    function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        if (!metadataMap.delete(metadataKey))
            return false;
        if (metadataMap.size > 0)
            return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0)
            return true;
        Metadata.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                    throw new TypeError();
                target = decorated;
            }
        }
        return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                    throw new TypeError();
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
            if (!Create)
                return undefined;
            targetMetadata = new _Map();
            Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
            if (!Create)
                return undefined;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
        }
        return metadataMap;
    }
    // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
    }
    // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        return ToBoolean(metadataMap.has(MetadataKey));
    }
    // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
    }
    // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return undefined;
        return metadataMap.get(MetadataKey);
    }
    // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // 3.1.6.1 OrdinaryMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
            return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
            return ownKeys;
        if (ownKeys.length <= 0)
            return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
    function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;
        while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
                keys.length = k;
                return keys;
            }
            var nextValue = IteratorValue(next);
            try {
                keys[k] = nextValue;
            }
            catch (e) {
                try {
                    IteratorClose(iterator);
                }
                finally {
                    throw e;
                }
            }
            k++;
        }
    }
    // 6 ECMAScript Data Typ0es and Values
    // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
    function Type(x) {
        if (x === null)
            return 1 /* Null */;
        switch (typeof x) {
            case "undefined": return 0 /* Undefined */;
            case "boolean": return 2 /* Boolean */;
            case "string": return 3 /* String */;
            case "symbol": return 4 /* Symbol */;
            case "number": return 5 /* Number */;
            case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
            default: return 6 /* Object */;
        }
    }
    // 6.1.1 The Undefined Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // 6.1.2 The Null Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
    function IsNull(x) {
        return x === null;
    }
    // 6.1.5 The Symbol Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // 6.1.7 The Object Type
    // https://tc39.github.io/ecma262/#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // 7.1 Type Conversion
    // https://tc39.github.io/ecma262/#sec-type-conversion
    // 7.1.1 ToPrimitive(input [, PreferredType])
    // https://tc39.github.io/ecma262/#sec-toprimitive
    function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
            case 0 /* Undefined */: return input;
            case 1 /* Null */: return input;
            case 2 /* Boolean */: return input;
            case 3 /* String */: return input;
            case 4 /* Symbol */: return input;
            case 5 /* Number */: return input;
        }
        var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== undefined) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
                throw new TypeError();
            return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    // 7.1.1.1 OrdinaryToPrimitive(O, hint)
    // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
    function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                    return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        throw new TypeError();
    }
    // 7.1.2 ToBoolean(argument)
    // https://tc39.github.io/ecma262/2016/#sec-toboolean
    function ToBoolean(argument) {
        return !!argument;
    }
    // 7.1.12 ToString(argument)
    // https://tc39.github.io/ecma262/#sec-tostring
    function ToString(argument) {
        return "" + argument;
    }
    // 7.1.14 ToPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-topropertykey
    function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3 /* String */);
        if (IsSymbol(key))
            return key;
        return ToString(key);
    }
    // 7.2 Testing and Comparison Operations
    // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
    // 7.2.2 IsArray(argument)
    // https://tc39.github.io/ecma262/#sec-isarray
    function IsArray(argument) {
        return Array.isArray
            ? Array.isArray(argument)
            : argument instanceof Object
                ? argument instanceof Array
                : Object.prototype.toString.call(argument) === "[object Array]";
    }
    // 7.2.3 IsCallable(argument)
    // https://tc39.github.io/ecma262/#sec-iscallable
    function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === "function";
    }
    // 7.2.4 IsConstructor(argument)
    // https://tc39.github.io/ecma262/#sec-isconstructor
    function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === "function";
    }
    // 7.2.7 IsPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-ispropertykey
    function IsPropertyKey(argument) {
        switch (Type(argument)) {
            case 3 /* String */: return true;
            case 4 /* Symbol */: return true;
            default: return false;
        }
    }
    // 7.3 Operations on Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-objects
    // 7.3.9 GetMethod(V, P)
    // https://tc39.github.io/ecma262/#sec-getmethod
    function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null)
            return undefined;
        if (!IsCallable(func))
            throw new TypeError();
        return func;
    }
    // 7.4 Operations on Iterator Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
    function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
            throw new TypeError(); // from Call
        var iterator = method.call(obj);
        if (!IsObject(iterator))
            throw new TypeError();
        return iterator;
    }
    // 7.4.4 IteratorValue(iterResult)
    // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
    function IteratorValue(iterResult) {
        return iterResult.value;
    }
    // 7.4.5 IteratorStep(iterator)
    // https://tc39.github.io/ecma262/#sec-iteratorstep
    function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
    }
    // 7.4.6 IteratorClose(iterator, completion)
    // https://tc39.github.io/ecma262/#sec-iteratorclose
    function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
            f.call(iterator);
    }
    // 9.1 Ordinary Object Internal Methods and Internal Slots
    // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
    // 9.1.1.1 OrdinaryGetPrototypeOf(O)
    // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
    function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
            return proto;
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype)
            return proto;
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
        // If the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
            return proto;
        // If we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O)
            return proto;
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (function () {
            function MapIterator(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
            }
            MapIterator.prototype["@@iterator"] = function () { return this; };
            MapIterator.prototype[iteratorSymbol] = function () { return this; };
            MapIterator.prototype.next = function () {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    else {
                        this._index++;
                    }
                    return { value: result, done: false };
                }
                return { value: undefined, done: true };
            };
            MapIterator.prototype.throw = function (error) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                throw error;
            };
            MapIterator.prototype.return = function (value) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                return { value: value, done: true };
            };
            return MapIterator;
        }());
        return (function () {
            function Map() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            }
            Object.defineProperty(Map.prototype, "size", {
                get: function () { return this._keys.length; },
                enumerable: true,
                configurable: true
            });
            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
            Map.prototype.get = function (key) {
                var index = this._find(key, /*insert*/ false);
                return index >= 0 ? this._values[index] : undefined;
            };
            Map.prototype.set = function (key, value) {
                var index = this._find(key, /*insert*/ true);
                this._values[index] = value;
                return this;
            };
            Map.prototype.delete = function (key) {
                var index = this._find(key, /*insert*/ false);
                if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                        this._keys[i - 1] = this._keys[i];
                        this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (key === this._cacheKey) {
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    return true;
                }
                return false;
            };
            Map.prototype.clear = function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            };
            Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
            Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
            Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
            Map.prototype["@@iterator"] = function () { return this.entries(); };
            Map.prototype[iteratorSymbol] = function () { return this.entries(); };
            Map.prototype._find = function (key, insert) {
                if (this._cacheKey !== key) {
                    this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                }
                if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(undefined);
                }
                return this._cacheIndex;
            };
            return Map;
        }());
        function getKey(key, _) {
            return key;
        }
        function getValue(_, value) {
            return value;
        }
        function getEntry(key, value) {
            return [key, value];
        }
    }
    // naive Set shim
    function CreateSetPolyfill() {
        return (function () {
            function Set() {
                this._map = new _Map();
            }
            Object.defineProperty(Set.prototype, "size", {
                get: function () { return this._map.size; },
                enumerable: true,
                configurable: true
            });
            Set.prototype.has = function (value) { return this._map.has(value); };
            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
            Set.prototype.delete = function (value) { return this._map.delete(value); };
            Set.prototype.clear = function () { this._map.clear(); };
            Set.prototype.keys = function () { return this._map.keys(); };
            Set.prototype.values = function () { return this._map.values(); };
            Set.prototype.entries = function () { return this._map.entries(); };
            Set.prototype["@@iterator"] = function () { return this.keys(); };
            Set.prototype[iteratorSymbol] = function () { return this.keys(); };
            return Set;
        }());
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (function () {
            function WeakMap() {
                this._key = CreateUniqueKey();
            }
            WeakMap.prototype.has = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.has(table, this._key) : false;
            };
            WeakMap.prototype.get = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.get(table, this._key) : undefined;
            };
            WeakMap.prototype.set = function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            };
            WeakMap.prototype.delete = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? delete table[this._key] : false;
            };
            WeakMap.prototype.clear = function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            };
            return WeakMap;
        }());
        function CreateUniqueKey() {
            var key;
            do
                key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create)
                    return undefined;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 0xff | 0;
            return buffer;
        }
        function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                    return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                    return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
            }
            return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                    result += "-";
                if (byte < 16)
                    result += "0";
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
    }
    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
    function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
    }
    // patch global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    if (hasOwn.call(Reflect, p)) {
                        __global.Reflect[p] = Reflect[p];
                    }
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof global !== "undefined" ? global :
        typeof self !== "undefined" ? self :
            Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');
