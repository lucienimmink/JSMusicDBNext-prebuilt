(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{RmqX:function(t,s,i){"use strict";i.r(s);var c=i("ofXK"),e=i("hDf6"),n=i("tyNb"),r=i("ktVm"),a=i("XtVx"),l=i("fXoL"),b=i("EAnT"),o=i("UrAU"),u=i("cpgm");function f(t,s){1&t&&(l.Ob(0,"div",9),l.zc(1," More artists are found. Refine search for less results "),l.Nb())}function p(t,s){if(1&t&&(l.Ob(0,"div",10),l.Mb(1,"mdb-artist",11),l.Nb()),2&t){const t=s.$implicit;l.zb(1),l.gc("artist",t)}}function g(t,s){if(1&t&&(l.Ob(0,"div"),l.Ob(1,"h4"),l.zc(2," Artists "),l.Ob(3,"span",5),l.zc(4),l.Nb(),l.Nb(),l.xc(5,f,2,0,"div",6),l.Ob(6,"div",7),l.xc(7,p,2,1,"div",8),l.Nb(),l.Nb()),2&t){const t=l.ac();l.zb(4),l.Bc("(",t.artists.list.length,")"),l.zb(1),l.gc("ngIf",t.artists.overflow),l.zb(2),l.gc("ngForOf",t.artists.list)}}function h(t,s){1&t&&(l.Ob(0,"div",9),l.zc(1," More albums are found. Refine search for less results "),l.Nb())}function d(t,s){if(1&t&&(l.Ob(0,"div",13),l.Mb(1,"mdb-album",14),l.Nb()),2&t){const t=s.$implicit;l.zb(1),l.gc("album",t)}}function m(t,s){if(1&t&&(l.Ob(0,"div"),l.Ob(1,"h4"),l.zc(2," Albums "),l.Ob(3,"span",5),l.zc(4),l.Nb(),l.Nb(),l.xc(5,h,2,0,"div",6),l.Ob(6,"div",7),l.xc(7,d,2,1,"div",12),l.Nb(),l.Nb()),2&t){const t=l.ac();l.zb(4),l.Bc("(",t.albums.list.length,")"),l.zb(1),l.gc("ngIf",t.albums.overflow),l.zb(2),l.gc("ngForOf",t.albums.list)}}function O(t,s){1&t&&(l.Ob(0,"div",9),l.zc(1," More tracks are found. Refine search for less results "),l.Nb())}function v(t,s){1&t&&(l.Ob(0,"span"),l.Mb(1,"span",21),l.Nb())}function z(t,s){1&t&&(l.Ob(0,"span"),l.Mb(1,"span",22),l.Nb())}const N=function(t){return{active:t}};function y(t,s){if(1&t){const t=l.Pb();l.Ob(0,"li",17),l.Wb("click",(function(){l.rc(t);const i=s.$implicit;return l.ac(2).select(i)})),l.Ob(1,"div",18),l.xc(2,v,2,0,"span",4),l.xc(3,z,2,0,"span",4),l.zc(4),l.Mb(5,"br"),l.Ob(6,"span",19),l.zc(7),l.Nb(),l.Nb(),l.Ob(8,"div",20),l.zc(9),l.bc(10,"timeFormat"),l.Nb(),l.Nb()}if(2&t){const t=s.$implicit;l.gc("ngClass",l.jc(9,N,t.isPlaying||t.isPaused)),l.zb(2),l.gc("ngIf",!t.isPlaying&&t.isPaused),l.zb(1),l.gc("ngIf",t.isPlaying&&!t.isPaused),l.zb(1),l.Bc("",t.title," "),l.zb(3),l.Cc(" ",t.trackArtist," \u2022 ",t.album.name," "),l.zb(2),l.Bc(" ",l.cc(10,7,t.duration)," ")}}function I(t,s){if(1&t&&(l.Ob(0,"div"),l.Ob(1,"h4"),l.zc(2," Tracks "),l.Ob(3,"span",5),l.zc(4),l.Nb(),l.Nb(),l.xc(5,O,2,0,"div",6),l.Ob(6,"ol",15),l.xc(7,y,11,11,"li",16),l.Nb(),l.Nb()),2&t){const t=l.ac();l.zb(4),l.Bc("(",t.tracks.list.length,")"),l.zb(1),l.gc("ngIf",t.tracks.overflow),l.zb(2),l.gc("ngForOf",t.tracks.list)}}const k=[{path:"",component:(()=>{class t{constructor(t,s,i,c){this.pathService=t,this.coreService=s,this.router=i,this.route=c,this.MAXALLOWEDITEMS=100,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.query=decodeURIComponent(this.route.snapshot.params.query),this.route.params.subscribe(t=>{this.query=t.query,this.ngOnInit()})}ngOnInit(){this.pathService.announcePage(`Results for "${this.query}"`),this.artists=this.spliceList(this.core.searchArtist(this.query),this.MAXALLOWEDITEMS),this.albums=this.spliceList(this.core.searchAlbum(this.query),this.MAXALLOWEDITEMS),this.tracks=this.spliceList(this.core.searchTrack(this.query),this.MAXALLOWEDITEMS)}spliceList(t,s){let i=!1,c=t;return t.length>s&&(c=t.splice(0,s),i=!0),{list:c,overflow:i}}ngOnDestroy(){this.subscription.unsubscribe()}select(t){this.router.navigate(["/letter",t.album.artist.letter.escapedLetter,"artist",t.album.artist.sortName,"album",t.album.sortName])}}return t.\u0275fac=function(s){return new(s||t)(l.Lb(a.a),l.Lb(r.a),l.Lb(n.c),l.Lb(n.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["ng-component"]],decls:7,vars:3,consts:[[1,"animated-page"],[1,"container"],[1,"row"],[1,"col"],[4,"ngIf"],[1,"small","muted","color-type-secondary"],["class","alert alert-info",4,"ngIf"],[1,"media-container"],["class","artist-panel media-panel",4,"ngFor","ngForOf"],[1,"alert","alert-info"],[1,"artist-panel","media-panel"],[3,"artist"],["class","album-panel media-panel",4,"ngFor","ngForOf"],[1,"album-panel","media-panel"],[3,"album"],[1,"list-group","list-tracks"],["class","list-group-item","style","display: flex;",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"display","flex",3,"ngClass","click"],[1,"col-9","col-md-10","track-info"],[1,"small","muted"],[1,"col-3","col-md-2","text-right"],[1,"glyph","glyph-pause"],[1,"glyph","glyph-play"]],template:function(t,s){1&t&&(l.Ob(0,"div",0),l.Ob(1,"div",1),l.Ob(2,"div",2),l.Ob(3,"div",3),l.xc(4,g,8,3,"div",4),l.xc(5,m,8,3,"div",4),l.xc(6,I,8,3,"div",4),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.zb(4),l.gc("ngIf",s.artists.list&&s.artists.list.length>0),l.zb(1),l.gc("ngIf",s.albums.list&&s.albums.list.length>0),l.zb(1),l.gc("ngIf",s.tracks.list&&s.tracks.list.length>0))},directives:[c.l,c.k,b.a,o.a,c.j],pipes:[u.a],encapsulation:2}),t})()}];let L=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(s){return new(s||t)},imports:[[n.e.forChild(k)],n.e]}),t})();i.d(s,"SearchModule",(function(){return M}));let M=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(s){return new(s||t)},imports:[[c.c,L,e.a]]}),t})()}}]);