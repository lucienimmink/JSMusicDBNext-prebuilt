(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{k0NY:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class s{}var i=u("pMnS"),e=u("BZiF"),r=u("EAnT"),a=u("iInd"),c=u("SVse"),o=u("Z8Ug"),b=u("UrAU"),m=u("cpgm"),p=u("ktVm"),f=u("XtVx");class h{constructor(l,n,u,t){this.pathService=l,this.coreService=n,this.router=u,this.route=t,this.MAXALLOWEDITEMS=15,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(l=>{this.ngOnInit()}),this.query=decodeURIComponent(this.route.snapshot.params.query),this.route.params.subscribe(l=>{this.query=l.query,this.ngOnInit()})}ngOnInit(){this.pathService.announcePage(`Results for "${this.query}"`),this.artists=this.spliceList(this.core.searchArtist(this.query),this.MAXALLOWEDITEMS),this.albums=this.spliceList(this.core.searchAlbum(this.query),this.MAXALLOWEDITEMS),this.tracks=this.spliceList(this.core.searchTrack(this.query),this.MAXALLOWEDITEMS)}spliceList(l,n){let u=!1,t=l;return l.length>n&&(t=l.splice(0,n),u=!0),{list:t,overflow:u}}ngOnDestroy(){this.subscription.unsubscribe()}select(l){this.router.navigate(["/letter",l.album.artist.letter.escapedLetter,"artist",l.album.artist.sortName,"album",l.album.sortName])}}var g=t.kb({encapsulation:2,styles:[],data:{}});function d(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,1,"div",[["class","alert alert-info"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" More artists are found. Refine search for less results "]))],null,null)}function v(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,2,"div",[["class","artist-panel media-panel"]],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,1,"mdb-artist",[],null,null,null,e.b,e.a)),t.lb(2,49152,null,0,r.a,[a.k],{artist:[0,"artist"]},null)],function(l,n){l(n,2,0,n.context.$implicit)},null)}function k(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,3,"h4",[],null,null,null,null,null)),(l()(),t.Db(-1,null,[" Artists "])),(l()(),t.mb(3,0,null,null,1,"span",[["class","small muted color-type-secondary"]],null,null,null,null,null)),(l()(),t.Db(4,null,["(",")"])),(l()(),t.eb(16777216,null,null,1,null,d)),t.lb(6,16384,null,0,c.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.mb(7,0,null,null,2,"div",[["class","media-container"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,v)),t.lb(9,278528,null,0,c.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,6,0,u.artists.overflow),l(n,9,0,u.artists.list)},function(l,n){l(n,4,0,n.component.artists.list.length)})}function y(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,1,"div",[["class","alert alert-info"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" More albums are found. Refine search for less results "]))],null,null)}function I(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,2,"div",[["class","album-panel media-panel"]],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,1,"mdb-album",[],null,null,null,o.b,o.a)),t.lb(2,49152,null,0,b.a,[a.k],{album:[0,"album"]},null)],function(l,n){l(n,2,0,n.context.$implicit)},null)}function M(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,3,"h4",[],null,null,null,null,null)),(l()(),t.Db(-1,null,[" Albums "])),(l()(),t.mb(3,0,null,null,1,"span",[["class","small muted color-type-secondary"]],null,null,null,null,null)),(l()(),t.Db(4,null,["(",")"])),(l()(),t.eb(16777216,null,null,1,null,y)),t.lb(6,16384,null,0,c.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.mb(7,0,null,null,2,"div",[["class","media-container"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,I)),t.lb(9,278528,null,0,c.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,6,0,u.albums.overflow),l(n,9,0,u.albums.list)},function(l,n){l(n,4,0,n.component.albums.list.length)})}function F(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,1,"div",[["class","alert alert-info"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" More tracks are found. Refine search for less results "]))],null,null)}function D(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,0,"span",[["class","glyph glyph-pause"]],null,null,null,null,null))],null,null)}function x(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,0,"span",[["class","glyph glyph-play"]],null,null,null,null,null))],null,null)}function A(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,14,"li",[["class","list-group-item"],["style","display: flex;"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.select(l.context.$implicit)&&t),t},null,null)),t.lb(1,278528,null,0,c.i,[t.q,t.r,t.k,t.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.yb(2,{active:0}),(l()(),t.mb(3,0,null,null,8,"div",[["class","col-9 col-md-10 track-info"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,D)),t.lb(5,16384,null,0,c.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,x)),t.lb(7,16384,null,0,c.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.Db(8,null,[""," "])),(l()(),t.mb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.mb(10,0,null,null,1,"span",[["class","small muted"]],null,null,null,null,null)),(l()(),t.Db(11,null,[" "," \u2022 "," "])),(l()(),t.mb(12,0,null,null,2,"div",[["class","col-3 col-md-2 text-right"]],null,null,null,null,null)),(l()(),t.Db(13,null,[" "," "])),t.zb(14,1)],function(l,n){var u=l(n,2,0,n.context.$implicit.isPlaying||n.context.$implicit.isPaused);l(n,1,0,"list-group-item",u),l(n,5,0,!n.context.$implicit.isPlaying&&n.context.$implicit.isPaused),l(n,7,0,n.context.$implicit.isPlaying&&!n.context.$implicit.isPaused)},function(l,n){l(n,8,0,n.context.$implicit.title),l(n,11,0,n.context.$implicit.trackArtist,n.context.$implicit.album.name);var u=t.Eb(n,13,0,l(n,14,0,t.wb(n.parent.parent,0),n.context.$implicit.duration));l(n,13,0,u)})}function $(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,3,"h4",[],null,null,null,null,null)),(l()(),t.Db(-1,null,[" Tracks "])),(l()(),t.mb(3,0,null,null,1,"span",[["class","small muted color-type-secondary"]],null,null,null,null,null)),(l()(),t.Db(4,null,["(",")"])),(l()(),t.eb(16777216,null,null,1,null,F)),t.lb(6,16384,null,0,c.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.mb(7,0,null,null,2,"ol",[["class","list-group list-tracks"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,A)),t.lb(9,278528,null,0,c.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,6,0,u.tracks.overflow),l(n,9,0,u.tracks.list)},function(l,n){l(n,4,0,n.component.tracks.list.length)})}function J(l){return t.Fb(0,[t.xb(0,m.a,[]),(l()(),t.mb(1,0,null,null,9,"div",[["class","animated-page"]],null,null,null,null,null)),(l()(),t.mb(2,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.mb(3,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.mb(4,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,k)),t.lb(6,16384,null,0,c.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,M)),t.lb(8,16384,null,0,c.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,$)),t.lb(10,16384,null,0,c.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,6,0,u.artists.list&&u.artists.list.length>0),l(n,8,0,u.albums.list&&u.albums.list.length>0),l(n,10,0,u.tracks.list&&u.tracks.list.length>0)},null)}function O(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,1,"ng-component",[],null,null,null,J,g)),t.lb(1,245760,null,0,h,[f.a,p.a,a.k,a.a],null,null)],function(l,n){l(n,1,0)},null)}var L=t.ib("ng-component",h,O,{},{},[]);class q{}var w=u("hDf6");u.d(n,"SearchModuleNgFactory",function(){return S});var S=t.jb(s,[],function(l){return t.tb([t.ub(512,t.j,t.Z,[[8,[i.a,L]],[3,t.j],t.v]),t.ub(4608,c.m,c.l,[t.s,[2,c.v]]),t.ub(1073742336,c.b,c.b,[]),t.ub(1073742336,a.m,a.m,[[2,a.s],[2,a.k]]),t.ub(1073742336,q,q,[]),t.ub(1073742336,w.a,w.a,[]),t.ub(1073742336,s,s,[]),t.ub(256,t.s,"en-GB",[]),t.ub(1024,a.i,function(){return[[{path:"",component:h}]]},[])])})}}]);