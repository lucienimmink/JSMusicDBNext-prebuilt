!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ZutQ:function(i,r,n){"use strict";n.r(r),n.d(r,"YearsModule",(function(){return K}));var a=n("ofXK"),c=n("hDf6"),o=n("tyNb"),s=n("ktVm"),u=n("XtVx"),b=n("fXoL"),l=n("Vmu9"),f=n("UrAU");function m(t,e){if(1&t){var i=b.Mb();b.Lb(0,"li",8),b.Sb("click",(function(){b.lc(i);var t=e.$implicit;return b.Wb(3).navigateToAlbum(t)})),b.Lb(1,"div",11),b.Jb(2,"mdb-album",12),b.Kb(),b.Lb(3,"div",13),b.Lb(4,"span",14),b.pc(5),b.Kb(),b.Lb(6,"span",9),b.pc(7),b.Kb(),b.Kb(),b.Kb()}if(2&t){var r=e.$implicit;b.xb(2),b.cc("album",r),b.xb(3),b.qc(r.name),b.xb(2),b.qc(r.artist.albumArtist||r.artist.name)}}function p(t,e){if(1&t){var i=b.Mb();b.Lb(0,"div",6),b.Lb(1,"div",7),b.Lb(2,"h4"),b.Lb(3,"a",8),b.Sb("click",(function(){return b.lc(i),b.Wb(2).toggleJumpList()})),b.pc(4),b.Kb(),b.pc(5," \xa0 "),b.Lb(6,"span",9),b.pc(7),b.Kb(),b.Kb(),b.Lb(8,"ul"),b.oc(9,m,8,3,"li",10),b.Kb(),b.Kb(),b.Kb()}if(2&t){var r=e.$implicit;b.xb(4),b.qc(r.year),b.xb(3),b.rc("(",r.albums&&r.albums.length,")"),b.xb(2),b.cc("ngForOf",r.albums)}}function v(t,e){if(1&t&&(b.Lb(0,"div"),b.oc(1,p,10,3,"div",5),b.Kb()),2&t){var i=e.vsCollection;b.xb(1),b.cc("ngForOf",i)}}function h(t,e){if(1&t){var i=b.Mb();b.Lb(0,"li"),b.Lb(1,"a",8),b.Sb("click",(function(){b.lc(i);var t=e.$implicit;return b.Wb().jumpToLetter(t)})),b.pc(2),b.Kb(),b.Kb()}if(2&t){var r=e.$implicit;b.xb(2),b.qc(r)}}var g,y,L,d=function(t){return{visible:t}},w=[{path:"",component:(g=function(){function i(e,r,n){var a=this;t(this,i),this.coreService=e,this.pathService=r,this.router=n,this.items=[],this.years=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(t){a.ngOnInit()}))}var r,n,a;return r=i,(n=[{key:"ngOnInit",value:function(){var t=this;this.pathService.announcePage("Years");var e=Object.keys(this.core.years).sort((function(t,e){return parseInt(t,10)<parseInt(e,10)?1:-1})),i=[];e.forEach((function(e){"undefined"!==e&&(i.push(t.core.years[e]),t.years.push(e))})),this.items=i,this.items.forEach((function(e,i){var r=t.getSize(e,i);t.cummlativeLength[i]=i>0?{l:t.cummlativeLength[i-1].l+r,year:e.year.year}:{l:r,year:e.year.year}}))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"navigateToAlbum",value:function(t){this.router.navigate(["/letter",t.artist.letter.escapedLetter,"artist",t.artist.sortName,"album",t.sortName])}},{key:"getSize",value:function(t,e){return 90*t.albums.length+39}},{key:"toggleJumpList",value:function(){this.showJumpList=!this.showJumpList}},{key:"jumpToLetter",value:function(t){var e=this;this.showJumpList=!1,this.items.some((function(i,r){var n=!1;if(i.year===parseInt(t,10)){var a=r>0?r-1:0;0===a?window.scrollTo(0,0):window.scrollTo(0,e.cummlativeLength[a].l),n=!0}return n}))}}])&&e(r.prototype,n),a&&e(r,a),i}(),g.\u0275fac=function(t){return new(t||g)(b.Ib(s.a),b.Ib(u.a),b.Ib(o.c))},g.\u0275cmp=b.Cb({type:g,selectors:[["app-years"]],decls:6,vars:8,consts:[[1,"animated-page"],["imageLazyLoadArea","",1,"container","container-longlist"],[4,"vsFor","vsForSize","vsForScrollParent","vsForExcess"],[1,"jump-list","jump-list-years",3,"ngClass"],[4,"ngFor","ngForOf"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[3,"click"],[1,"small","muted","color-type-secondary"],[3,"click",4,"ngFor","ngForOf"],[1,"image-wrapper"],[3,"album"],[1,"text-wrapper"],[1,"text"]],template:function(t,e){1&t&&(b.Lb(0,"div",0),b.Lb(1,"div",1),b.oc(2,v,2,1,"div",2),b.Kb(),b.Lb(3,"div",3),b.Lb(4,"ol"),b.oc(5,h,3,1,"li",4),b.Kb(),b.Kb(),b.Kb()),2&t&&(b.xb(2),b.cc("vsFor",e.items)("vsForSize",e.getSize)("vsForScrollParent","body")("vsForExcess",2),b.xb(1),b.cc("ngClass",b.fc(6,d,e.showJumpList)),b.xb(2),b.cc("ngForOf",e.years))},directives:[l.a,a.i,a.j,f.a],encapsulation:2}),g)}],F=((L=function e(){t(this,e)}).\u0275mod=b.Gb({type:L}),L.\u0275inj=b.Fb({factory:function(t){return new(t||L)},imports:[[o.e.forChild(w)],o.e]}),L),K=((y=function e(){t(this,e)}).\u0275mod=b.Gb({type:y}),y.\u0275inj=b.Fb({factory:function(t){return new(t||y)},imports:[[a.b,F,c.a]]}),y)}}])}();