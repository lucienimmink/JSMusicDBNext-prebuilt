function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{mCIM:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("tyNb"),c=n("ktVm"),o=n("XtVx"),s=n("fXoL");function a(e,t){if(1&e){var n=s.Pb();s.Ob(0,"li"),s.Ob(1,"a",2),s.Wb("click",(function(){s.rc(n);var e=t.$implicit;return s.ac().navigateToLetter(e)})),s.zc(2),s.Nb(),s.Nb()}if(2&e){var r=t.$implicit;s.zb(2),s.Ac(r.letter)}}var l,u,f=[{path:"",component:(l=function(){function e(t,n,r){var i=this;_classCallCheck(this,e),this.coreService=t,this.pathService=n,this.router=r,this.letters=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(e){i.ngOnInit()}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.pathService.announcePage("Letters");var e=this.coreService.getCore();this.letters=e.sortedLetters}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"navigateToLetter",value:function(e){this.router.navigate(["/letter",e.escapedLetter])}}]),e}(),l.\u0275fac=function(e){return new(e||l)(s.Lb(c.a),s.Lb(o.a),s.Lb(i.c))},l.\u0275cmp=s.Fb({type:l,selectors:[["app-letters"]],decls:3,vars:1,consts:[[1,"jump-list","visible","animated-page"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,t){1&e&&(s.Ob(0,"div",0),s.Ob(1,"ol"),s.xc(2,a,3,1,"li",1),s.Nb(),s.Nb()),2&e&&(s.zb(2),s.gc("ngForOf",t.letters))},directives:[r.k],encapsulation:2}),l)}],b=((u=function e(){_classCallCheck(this,e)}).\u0275mod=s.Jb({type:u}),u.\u0275inj=s.Ib({factory:function(e){return new(e||u)},imports:[[i.e.forChild(f)],i.e]}),u);n.d(t,"LettersModule",(function(){return h}));var p,h=((p=function e(){_classCallCheck(this,e)}).\u0275mod=s.Jb({type:p}),p.\u0275inj=s.Ib({factory:function(e){return new(e||p)},imports:[[r.c,b]]}),p)}}]);