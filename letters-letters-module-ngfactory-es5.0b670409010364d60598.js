function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{uob2:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=function n(){_classCallCheck(this,n)},r=e("pMnS"),i=e("SVse"),o=e("ktVm"),c=e("XtVx"),s=function(){function n(l,e,t){var u=this;_classCallCheck(this,n),this.coreService=l,this.pathService=e,this.router=t,this.letters=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(n){u.ngOnInit()}))}return _createClass(n,[{key:"ngOnInit",value:function(){this.pathService.announcePage("Letters");var n=this.coreService.getCore();this.letters=n.sortedLetters}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"navigateToLetter",value:function(n){this.router.navigate(["/letter",n.escapedLetter])}}]),n}(),a=e("iInd"),b=t.mb({encapsulation:2,styles:[],data:{}});function f(n){return t.Jb(0,[(n()(),t.ob(0,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,1,"a",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.navigateToLetter(n.context.$implicit)&&t),t}),null,null)),(n()(),t.Hb(2,null,["",""]))],null,(function(n,l){n(l,2,0,l.context.$implicit.letter)}))}function p(n){return t.Jb(0,[(n()(),t.ob(0,0,null,null,3,"div",[["class","jump-list visible animated-page"]],null,null,null,null,null)),(n()(),t.ob(1,0,null,null,2,"ol",[],null,null,null,null,null)),(n()(),t.eb(16777216,null,null,1,null,f)),t.nb(3,278528,null,0,i.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.letters)}),null)}var h=t.kb("app-letters",s,(function(n){return t.Jb(0,[(n()(),t.ob(0,0,null,null,1,"app-letters",[],null,null,null,p,b)),t.nb(1,245760,null,0,s,[o.a,c.a,a.k],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),v=function n(){_classCallCheck(this,n)};e.d(l,"LettersModuleNgFactory",(function(){return y}));var y=t.lb(u,[],(function(n){return t.xb([t.yb(512,t.j,t.X,[[8,[r.a,h]],[3,t.j],t.v]),t.yb(4608,i.m,i.l,[t.s,[2,i.z]]),t.yb(1073742336,i.b,i.b,[]),t.yb(1073742336,a.m,a.m,[[2,a.r],[2,a.k]]),t.yb(1073742336,v,v,[]),t.yb(1073742336,u,u,[]),t.yb(256,t.s,"en-GB",[]),t.yb(1024,a.i,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);