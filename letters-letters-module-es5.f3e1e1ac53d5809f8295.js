(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{mCIM:function(t,e,n){"use strict";n.r(e);var r=n("Valr"),i=n("TYT/"),o=n("DUip"),c=n("ktVm"),s=n("XtVx"),u=[1,"jump-list","visible","animated-page"],a=[4,"ngFor","ngForOf"],f=[3,"click"];function p(t,e){if(1&t){var n=i.Wb();i.Vb(0,"li"),i.Vb(1,"a",f),i.bc("click",function(t){i.xc(n);var r=e.$implicit;return i.gc().navigateToLetter(r)}),i.Jc(2),i.Tb(),i.Tb()}if(2&t){var r=e.$implicit;i.Ac(2),i.Kc(r.letter)}}var b=[{path:"",component:function(){function t(t,e,n){var r=this;this.coreService=t,this.pathService=e,this.router=n,this.letters=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(function(t){r.ngOnInit()})}return t.prototype.ngOnInit=function(){this.pathService.announcePage("Letters");var t=this.coreService.getCore();this.letters=t.sortedLetters},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.prototype.navigateToLetter=function(t){this.router.navigate(["/letter",t.escapedLetter])},t.ngComponentDef=i.Lb({type:t,selectors:[["app-letters"]],factory:function(e){return new(e||t)(i.Rb(c.a),i.Rb(s.a),i.Rb(o.c))},consts:3,vars:1,template:function(t,e){1&t&&(i.Vb(0,"div",u),i.Vb(1,"ol"),i.Hc(2,p,3,1,"li",a),i.Tb(),i.Tb()),2&t&&(i.Ac(2),i.mc("ngForOf",e.letters))},directives:[r.k],encapsulation:2}),t}()}],l=function(){function t(){}return t.ngModuleDef=i.Pb({type:t}),t.ngInjectorDef=i.Ob({factory:function(e){return new(e||t)},imports:[[o.e.forChild(b)],o.e]}),t.ngLocaleIdDef="en-GB",t}();o.e.forChild(b),n.d(e,"LettersModule",function(){return g});var g=function(){function t(){}return t.ngModuleDef=i.Pb({type:t}),t.ngInjectorDef=i.Ob({factory:function(e){return new(e||t)},imports:[[r.c,l]]}),t.ngLocaleIdDef="en-GB",t}()}}]);