function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ZutQ:function(e,t,i){"use strict";i.r(t);var r=i("ofXK"),n=i("hDf6"),a=i("tyNb"),s=i("ktVm"),c=i("XtVx"),o=i("fXoL"),u=i("Vmu9"),l=i("UrAU");function b(e,t){if(1&e){var i=o.Pb();o.Ob(0,"li",8),o.Wb("click",(function(){o.rc(i);var e=t.$implicit;return o.ac(3).navigateToAlbum(e)})),o.Ob(1,"div",11),o.Mb(2,"mdb-album",12),o.Nb(),o.Ob(3,"div",13),o.Ob(4,"span",14),o.zc(5),o.Nb(),o.Ob(6,"span",9),o.zc(7),o.Nb(),o.Nb(),o.Nb()}if(2&e){var r=t.$implicit;o.zb(2),o.gc("album",r),o.zb(3),o.Ac(r.name),o.zb(2),o.Ac(r.artist.albumArtist||r.artist.name)}}function f(e,t){if(1&e){var i=o.Pb();o.Ob(0,"div",6),o.Ob(1,"div",7),o.Ob(2,"h4"),o.Ob(3,"a",8),o.Wb("click",(function(){return o.rc(i),o.ac(2).toggleJumpList()})),o.zc(4),o.Nb(),o.zc(5," \xa0 "),o.Ob(6,"span",9),o.zc(7),o.Nb(),o.Nb(),o.Ob(8,"ul"),o.xc(9,b,8,3,"li",10),o.Nb(),o.Nb(),o.Nb()}if(2&e){var r=t.$implicit;o.zb(4),o.Ac(r.year),o.zb(3),o.Bc("(",r.albums&&r.albums.length,")"),o.zb(2),o.gc("ngForOf",r.albums)}}function m(e,t){if(1&e&&(o.Ob(0,"div"),o.xc(1,f,10,3,"div",5),o.Nb()),2&e){var i=t.vsCollection;o.zb(1),o.gc("ngForOf",i)}}function v(e,t){if(1&e){var i=o.Pb();o.Ob(0,"li"),o.Ob(1,"a",8),o.Wb("click",(function(){o.rc(i);var e=t.$implicit;return o.ac().jumpToLetter(e)})),o.zc(2),o.Nb(),o.Nb()}if(2&e){var r=t.$implicit;o.zb(2),o.Ac(r)}}var p,h,g=function(e){return{visible:e}},y=[{path:"",component:(p=function(){function e(t,i,r){var n=this;_classCallCheck(this,e),this.coreService=t,this.pathService=i,this.router=r,this.items=[],this.years=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(e){n.ngOnInit()}))}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.pathService.announcePage("Years");var t=Object.keys(this.core.years).sort((function(e,t){return parseInt(e,10)<parseInt(t,10)?1:-1})),i=[];t.forEach((function(t){"undefined"!==t&&(i.push(e.core.years[t]),e.years.push(t))})),this.items=i,this.items.forEach((function(t,i){var r=e.getSize(t,i);e.cummlativeLength[i]=i>0?{l:e.cummlativeLength[i-1].l+r,year:t.year.year}:{l:r,year:t.year.year}}))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"navigateToAlbum",value:function(e){this.router.navigate(["/letter",e.artist.letter.escapedLetter,"artist",e.artist.sortName,"album",e.sortName])}},{key:"getSize",value:function(e,t){return 90*e.albums.length+39}},{key:"toggleJumpList",value:function(){this.showJumpList=!this.showJumpList}},{key:"jumpToLetter",value:function(e){var t=this;this.showJumpList=!1,this.items.some((function(i,r){var n=!1;if(i.year===parseInt(e,10)){var a=r>0?r-1:0;0===a?window.scrollTo(0,0):window.scrollTo(0,t.cummlativeLength[a].l),n=!0}return n}))}}]),e}(),p.\u0275fac=function(e){return new(e||p)(o.Lb(s.a),o.Lb(c.a),o.Lb(a.c))},p.\u0275cmp=o.Fb({type:p,selectors:[["app-years"]],decls:6,vars:8,consts:[[1,"animated-page"],["imageLazyLoadArea","",1,"container","container-longlist"],[4,"vsFor","vsForSize","vsForScrollParent","vsForExcess"],[1,"jump-list","jump-list-years",3,"ngClass"],[4,"ngFor","ngForOf"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[3,"click"],[1,"small","muted","color-type-secondary"],[3,"click",4,"ngFor","ngForOf"],[1,"image-wrapper"],[3,"album"],[1,"text-wrapper"],[1,"text"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.xc(2,m,2,1,"div",2),o.Nb(),o.Ob(3,"div",3),o.Ob(4,"ol"),o.xc(5,v,3,1,"li",4),o.Nb(),o.Nb(),o.Nb()),2&e&&(o.zb(2),o.gc("vsFor",t.items)("vsForSize",t.getSize)("vsForScrollParent","body")("vsForExcess",2),o.zb(1),o.gc("ngClass",o.jc(6,g,t.showJumpList)),o.zb(2),o.gc("ngForOf",t.years))},directives:[u.a,r.j,r.k,l.a],encapsulation:2}),p)}],d=((h=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:h}),h.\u0275inj=o.Ib({factory:function(e){return new(e||h)},imports:[[a.e.forChild(y)],a.e]}),h);i.d(t,"YearsModule",(function(){return w}));var O,w=((O=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:O}),O.\u0275inj=o.Ib({factory:function(e){return new(e||O)},imports:[[r.c,d,n.a]]}),O)}}]);