!function(){function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{RmqX:function(s,e,n){"use strict";n.r(e),n.d(e,"SearchModule",(function(){return S}));var c=n("ofXK"),r=n("hDf6"),a=n("tyNb"),o=n("ktVm"),l=n("XtVx"),b=n("fXoL"),u=n("EAnT"),f=n("UrAU"),p=n("cpgm");function h(t,i){1&t&&(b.Lb(0,"div",9),b.pc(1," More artists are found. Refine search for less results "),b.Kb())}function d(t,i){if(1&t&&(b.Lb(0,"div",10),b.Jb(1,"mdb-artist",11),b.Kb()),2&t){var s=i.$implicit;b.xb(1),b.cc("artist",s)}}function m(t,i){if(1&t&&(b.Lb(0,"div"),b.Lb(1,"h4"),b.pc(2," Artists "),b.Lb(3,"span",5),b.pc(4),b.Kb(),b.Kb(),b.oc(5,h,2,0,"div",6),b.Lb(6,"div",7),b.oc(7,d,2,1,"div",8),b.Kb(),b.Kb()),2&t){var s=b.Wb();b.xb(4),b.rc("(",s.artists.list.length,")"),b.xb(1),b.cc("ngIf",s.artists.overflow),b.xb(2),b.cc("ngForOf",s.artists.list)}}function v(t,i){1&t&&(b.Lb(0,"div",9),b.pc(1," More albums are found. Refine search for less results "),b.Kb())}function g(t,i){if(1&t&&(b.Lb(0,"div",13),b.Jb(1,"mdb-album",14),b.Kb()),2&t){var s=i.$implicit;b.xb(1),b.cc("album",s)}}function L(t,i){if(1&t&&(b.Lb(0,"div"),b.Lb(1,"h4"),b.pc(2," Albums "),b.Lb(3,"span",5),b.pc(4),b.Kb(),b.Kb(),b.oc(5,v,2,0,"div",6),b.Lb(6,"div",7),b.oc(7,g,2,1,"div",12),b.Kb(),b.Kb()),2&t){var s=b.Wb();b.xb(4),b.rc("(",s.albums.list.length,")"),b.xb(1),b.cc("ngIf",s.albums.overflow),b.xb(2),b.cc("ngForOf",s.albums.list)}}function y(t,i){1&t&&(b.Lb(0,"div",9),b.pc(1," More tracks are found. Refine search for less results "),b.Kb())}function K(t,i){1&t&&(b.Lb(0,"span"),b.Jb(1,"span",21),b.Kb())}function k(t,i){1&t&&(b.Lb(0,"span"),b.Jb(1,"span",22),b.Kb())}var x=function(t){return{active:t}};function I(t,i){if(1&t){var s=b.Mb();b.Lb(0,"li",17),b.Sb("click",(function(){b.lc(s);var t=i.$implicit;return b.Wb(2).select(t)})),b.Lb(1,"div",18),b.oc(2,K,2,0,"span",4),b.oc(3,k,2,0,"span",4),b.pc(4),b.Jb(5,"br"),b.Lb(6,"span",19),b.pc(7),b.Kb(),b.Kb(),b.Lb(8,"div",20),b.pc(9),b.Xb(10,"timeFormat"),b.Kb(),b.Kb()}if(2&t){var e=i.$implicit;b.cc("ngClass",b.fc(9,x,e.isPlaying||e.isPaused)),b.xb(2),b.cc("ngIf",!e.isPlaying&&e.isPaused),b.xb(1),b.cc("ngIf",e.isPlaying&&!e.isPaused),b.xb(1),b.rc("",e.title," "),b.xb(3),b.sc(" ",e.trackArtist," \u2022 ",e.album.name," "),b.xb(2),b.rc(" ",b.Yb(10,7,e.duration)," ")}}function w(t,i){if(1&t&&(b.Lb(0,"div"),b.Lb(1,"h4"),b.pc(2," Tracks "),b.Lb(3,"span",5),b.pc(4),b.Kb(),b.Kb(),b.oc(5,y,2,0,"div",6),b.Lb(6,"ol",15),b.oc(7,I,11,11,"li",16),b.Kb(),b.Kb()),2&t){var s=b.Wb();b.xb(4),b.rc("(",s.tracks.list.length,")"),b.xb(1),b.cc("ngIf",s.tracks.overflow),b.xb(2),b.cc("ngForOf",s.tracks.list)}}var A,O,M,F=[{path:"",component:(A=function(){function s(i,e,n,c){var r=this;t(this,s),this.pathService=i,this.coreService=e,this.router=n,this.route=c,this.MAXALLOWEDITEMS=100,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(t){r.ngOnInit()})),this.query=decodeURIComponent(this.route.snapshot.params.query),this.route.params.subscribe((function(t){r.query=t.query,r.ngOnInit()}))}var e,n,c;return e=s,(n=[{key:"ngOnInit",value:function(){this.pathService.announcePage('Results for "'.concat(this.query,'"')),this.artists=this.spliceList(this.core.searchArtist(this.query),this.MAXALLOWEDITEMS),this.albums=this.spliceList(this.core.searchAlbum(this.query),this.MAXALLOWEDITEMS),this.tracks=this.spliceList(this.core.searchTrack(this.query),this.MAXALLOWEDITEMS)}},{key:"spliceList",value:function(t,i){var s=!1,e=t;return t.length>i&&(e=t.splice(0,i),s=!0),{list:e,overflow:s}}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"select",value:function(t){this.router.navigate(["/letter",t.album.artist.letter.escapedLetter,"artist",t.album.artist.sortName,"album",t.album.sortName])}}])&&i(e.prototype,n),c&&i(e,c),s}(),A.\u0275fac=function(t){return new(t||A)(b.Ib(l.a),b.Ib(o.a),b.Ib(a.c),b.Ib(a.a))},A.\u0275cmp=b.Cb({type:A,selectors:[["ng-component"]],decls:7,vars:3,consts:[[1,"animated-page"],[1,"container"],[1,"row"],[1,"col"],[4,"ngIf"],[1,"small","muted","color-type-secondary"],["class","alert alert-info",4,"ngIf"],[1,"media-container"],["class","artist-panel media-panel",4,"ngFor","ngForOf"],[1,"alert","alert-info"],[1,"artist-panel","media-panel"],[3,"artist"],["class","album-panel media-panel",4,"ngFor","ngForOf"],[1,"album-panel","media-panel"],[3,"album"],[1,"list-group","list-tracks"],["class","list-group-item","style","display: flex;",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"display","flex",3,"ngClass","click"],[1,"col-9","col-md-10","track-info"],[1,"small","muted"],[1,"col-3","col-md-2","text-right"],[1,"glyph","glyph-pause"],[1,"glyph","glyph-play"]],template:function(t,i){1&t&&(b.Lb(0,"div",0),b.Lb(1,"div",1),b.Lb(2,"div",2),b.Lb(3,"div",3),b.oc(4,m,8,3,"div",4),b.oc(5,L,8,3,"div",4),b.oc(6,w,8,3,"div",4),b.Kb(),b.Kb(),b.Kb(),b.Kb()),2&t&&(b.xb(4),b.cc("ngIf",i.artists.list&&i.artists.list.length>0),b.xb(1),b.cc("ngIf",i.albums.list&&i.albums.list.length>0),b.xb(1),b.cc("ngIf",i.tracks.list&&i.tracks.list.length>0))},directives:[c.k,c.j,u.a,f.a,c.i],pipes:[p.a],encapsulation:2}),A)}],E=((M=function i(){t(this,i)}).\u0275mod=b.Gb({type:M}),M.\u0275inj=b.Fb({factory:function(t){return new(t||M)},imports:[[a.e.forChild(F)],a.e]}),M),S=((O=function i(){t(this,i)}).\u0275mod=b.Gb({type:O}),O.\u0275inj=b.Fb({factory:function(t){return new(t||O)},imports:[[c.b,E,r.a]]}),O)}}])}();