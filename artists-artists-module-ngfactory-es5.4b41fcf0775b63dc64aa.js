(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"q+AI":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=function(){return function(){}}(),e=u("pMnS"),s=u("BZiF"),o=u("EAnT"),r=u("ZYCi"),c=u("Ip0R"),a=u("Vmu9"),b=u("ktVm"),p=u("XtVx"),m=function(){function l(l,n,u){var t=this;this.coreService=l,this.pathService=n,this.router=u,this.letters=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(function(l){t.ngOnInit()})}return l.prototype.ngOnInit=function(){var l=this;this.pathService.announcePage("Artists"),this.letters=this.core.sortedLetters,this.letters.forEach(function(n,u){var t=l.getSize(n,u);l.cummlativeLength[u]=u>0?l.cummlativeLength[u-1]+t:t,n.sortArtistsBy("sortName","asc")})},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l.prototype.navigateToArtist=function(l){this.router.navigate(["/letter",l.letter.escapedLetter,"artist",l.sortName])},l.prototype.getSize=function(l,n){return 90*l.artists.length+49},l.prototype.toggleJumpList=function(){this.showJumpList=!this.showJumpList},l.prototype.jumpToLetter=function(l){this.showJumpList=!1;var n=this.letters.indexOf(l);window.scrollTo(0,this.cummlativeLength[n>0?n-1:0])},l}(),f=t.ob({encapsulation:2,styles:[],data:{}});function h(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,8,"li",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateToArtist(l.context.$implicit)&&t),t},null,null)),(l()(),t.qb(1,0,null,null,2,"div",[["class","image-wrapper"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"mdb-artist",[],null,null,null,s.b,s.a)),t.pb(3,49152,null,0,o.a,[r.k],{artist:[0,"artist"]},null),(l()(),t.qb(4,0,null,null,4,"div",[["class","text-wrapper"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),t.Jb(6,null,["",""])),(l()(),t.qb(7,0,null,null,1,"span",[["class","small muted color-type-secondary"]],null,null,null,null,null)),(l()(),t.Jb(8,null,["Albums: ",""]))],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,6,0,n.context.$implicit.albumArtist||n.context.$implicit.name),l(n,8,0,n.context.$implicit.albums.length)})}function g(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,1,"a",[],[[8,"id",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleJumpList()&&t),t},null,null)),(l()(),t.Jb(4,null,["",""])),(l()(),t.qb(5,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,h)),t.pb(7,278528,null,0,c.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,7,0,n.context.$implicit.artists)},function(l,n){l(n,3,0,t.ub(1,"letter_",n.context.$implicit.letter,"")),l(n,4,0,n.context.$implicit.letter)})}function v(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,g)),t.pb(2,278528,null,0,c.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.context.vsCollection)},null)}function L(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.jumpToLetter(l.context.$implicit)&&t),t},null,null)),(l()(),t.Jb(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.letter)})}function d(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,10,"div",[["class","animated-page"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,2,"div",[["class","container container-longlist"],["imageLazyLoadArea",""]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,v)),t.pb(3,737280,null,0,a.a,[t.k,t.O,t.L,t.z],{vsSize:[0,"vsSize"],vsExcess:[1,"vsExcess"],vsScrollParent:[2,"vsScrollParent"],originalCollection:[3,"originalCollection"]},null),(l()(),t.qb(4,0,null,null,6,"div",[["class","jump-list"]],null,null,null,null,null)),t.Gb(512,null,c.u,c.v,[t.s,t.t,t.k,t.D]),t.pb(6,278528,null,0,c.i,[c.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(7,{visible:0}),(l()(),t.qb(8,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,L)),t.pb(10,278528,null,0,c.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.getSize,2,"body",u.letters);var t=l(n,7,0,u.showJumpList);l(n,6,0,"jump-list",t),l(n,10,0,u.letters)},null)}function q(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-artists",[],null,null,null,d,f)),t.pb(1,245760,null,0,m,[b.a,p.a,r.k],null,null)],function(l,n){l(n,1,0)},null)}var A=t.mb("app-artists",m,q,{},{},[]),x=function(){return function(){}}(),k=u("hDf6");u.d(n,"ArtistsModuleNgFactory",function(){return w});var w=t.nb(i,[],function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[e.a,A]],[3,t.j],t.x]),t.Ab(4608,c.m,c.l,[t.u,[2,c.z]]),t.Ab(1073742336,c.b,c.b,[]),t.Ab(1073742336,r.m,r.m,[[2,r.r],[2,r.k]]),t.Ab(1073742336,x,x,[]),t.Ab(1073742336,k.a,k.a,[]),t.Ab(1073742336,i,i,[]),t.Ab(256,t.u,"en-GB",[]),t.Ab(1024,r.i,function(){return[[{path:"",component:m}]]},[])])})}}]);