function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3r4j":function(t,e,i){"use strict";i.r(e),i.d(e,"ArtistsModule",(function(){return k}));var r=i("ofXK"),n=i("hDf6"),s=i("tyNb"),c=i("ktVm"),o=i("XtVx"),a=i("fXoL"),l=i("Vmu9"),b=i("EAnT");function u(t,e){if(1&t){var i=a.Ob();a.Nb(0,"li",10),a.Vb("click",(function(){a.oc(i);var t=e.$implicit;return a.Zb(3).navigateToArtist(t)})),a.Nb(1,"div",11),a.Lb(2,"mdb-artist",12),a.Mb(),a.Nb(3,"div",13),a.Nb(4,"span",14),a.sc(5),a.Mb(),a.Nb(6,"span",15),a.sc(7),a.Mb(),a.Mb(),a.Mb()}if(2&t){var r=e.$implicit;a.zb(2),a.fc("artist",r),a.zb(3),a.tc(r.albumArtist||r.name),a.zb(2),a.uc("Albums: ",r.albums.length,"")}}function f(t,e){if(1&t){var i=a.Ob();a.Nb(0,"div",6),a.Nb(1,"div",7),a.Nb(2,"h4"),a.Nb(3,"a",8),a.Vb("click",(function(){return a.oc(i),a.Zb(2).toggleJumpList()})),a.sc(4),a.Mb(),a.Mb(),a.Nb(5,"ul"),a.rc(6,u,8,3,"li",9),a.Mb(),a.Mb(),a.Mb()}if(2&t){var r=e.$implicit;a.zb(3),a.hc("id","letter_",r.letter,""),a.zb(1),a.tc(r.letter),a.zb(2),a.fc("ngForOf",r.artists)}}function v(t,e){if(1&t&&(a.Nb(0,"div"),a.rc(1,f,7,3,"div",5),a.Mb()),2&t){var i=e.vsCollection;a.zb(1),a.fc("ngForOf",i)}}function h(t,e){if(1&t){var i=a.Ob();a.Nb(0,"li"),a.Nb(1,"a",10),a.Vb("click",(function(){a.oc(i);var t=e.$implicit;return a.Zb().jumpToLetter(t)})),a.sc(2),a.Mb(),a.Mb()}if(2&t){var r=e.$implicit;a.zb(2),a.tc(r.letter)}}var p,m,g,d=function(t){return{visible:t}},w=[{path:"",component:(p=function(){function t(e,i,r){var n=this;_classCallCheck(this,t),this.coreService=e,this.pathService=i,this.router=r,this.letters=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(t){n.ngOnInit()}))}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.pathService.announcePage("Artists"),this.letters=this.core.sortedLetters,this.letters.forEach((function(e,i){var r=t.getSize(e,i);t.cummlativeLength[i]=i>0?t.cummlativeLength[i-1]+r:r,e.sortArtistsBy("sortName","asc")}))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"navigateToArtist",value:function(t){this.router.navigate(["/letter",t.letter.escapedLetter,"artist",t.sortName])}},{key:"getSize",value:function(t,e){return 90*t.artists.length+49}},{key:"toggleJumpList",value:function(){this.showJumpList=!this.showJumpList}},{key:"jumpToLetter",value:function(t){this.showJumpList=!1;var e=this.letters.indexOf(t);window.scrollTo(0,this.cummlativeLength[e>0?e-1:0])}}]),t}(),p.\u0275fac=function(t){return new(t||p)(a.Kb(c.a),a.Kb(o.a),a.Kb(s.c))},p.\u0275cmp=a.Eb({type:p,selectors:[["app-artists"]],decls:6,vars:8,consts:[[1,"animated-page"],["imageLazyLoadArea","",1,"container","container-longlist"],[4,"vsFor","vsForSize","vsForScrollParent","vsForExcess"],[1,"jump-list",3,"ngClass"],[4,"ngFor","ngForOf"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[3,"id","click"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"image-wrapper"],[3,"artist"],[1,"text-wrapper"],[1,"text"],[1,"small","muted","color-type-secondary"]],template:function(t,e){1&t&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.rc(2,v,2,1,"div",2),a.Mb(),a.Nb(3,"div",3),a.Nb(4,"ol"),a.rc(5,h,3,1,"li",4),a.Mb(),a.Mb(),a.Mb()),2&t&&(a.zb(2),a.fc("vsFor",e.letters)("vsForSize",e.getSize)("vsForScrollParent","body")("vsForExcess",2),a.zb(1),a.fc("ngClass",a.ic(6,d,e.showJumpList)),a.zb(2),a.fc("ngForOf",e.letters))},directives:[l.a,r.i,r.j,b.a],encapsulation:2}),p)}],y=((g=function t(){_classCallCheck(this,t)}).\u0275mod=a.Ib({type:g}),g.\u0275inj=a.Hb({factory:function(t){return new(t||g)},imports:[[s.e.forChild(w)],s.e]}),g),k=((m=function t(){_classCallCheck(this,t)}).\u0275mod=a.Ib({type:m}),m.\u0275inj=a.Hb({factory:function(t){return new(t||m)},imports:[[r.b,y,n.a]]}),m)}}]);