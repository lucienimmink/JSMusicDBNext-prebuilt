(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"q+AI":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),i=function(){return function(){}}(),e=t("pMnS"),o=t("BZiF"),s=t("EAnT"),r=t("ZYCi"),c=t("Ip0R"),a=t("Vmu9"),b=t("ktVm"),p=t("XtVx"),m=function(){function l(l,n,t){var u=this;this.coreService=l,this.pathService=n,this.router=t,this.letters=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(function(l){u.ngOnInit()})}return l.prototype.ngOnInit=function(){var l=this;this.pathService.announcePage("Artists"),this.letters=this.core.sortedLetters,this.letters.forEach(function(n,t){var u=l.getSize(n,t);l.cummlativeLength[t]=t>0?l.cummlativeLength[t-1]+u:u,n.sortArtistsBy("sortName","asc")})},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l.prototype.navigateToArtist=function(l){this.router.navigate(["/letter",l.letter.escapedLetter,"artist",l.sortName])},l.prototype.getSize=function(l,n){return 90*l.artists.length+49},l.prototype.toggleJumpList=function(){this.showJumpList=!this.showJumpList},l.prototype.jumpToLetter=function(l){this.showJumpList=!1;var n=this.letters.indexOf(l);window.scrollTo(0,this.cummlativeLength[n>0?n-1:0])},l}(),f=u.mb({encapsulation:2,styles:[],data:{}});function h(l){return u.Hb(0,[(l()(),u.ob(0,0,null,null,8,"li",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.navigateToArtist(l.context.$implicit)&&u),u},null,null)),(l()(),u.ob(1,0,null,null,2,"div",[["class","image-wrapper"]],null,null,null,null,null)),(l()(),u.ob(2,0,null,null,1,"mdb-artist",[],null,null,null,o.b,o.a)),u.nb(3,49152,null,0,s.a,[r.k],{artist:[0,"artist"]},null),(l()(),u.ob(4,0,null,null,4,"div",[["class","text-wrapper"]],null,null,null,null,null)),(l()(),u.ob(5,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),u.Fb(6,null,["",""])),(l()(),u.ob(7,0,null,null,1,"span",[["class","small muted color-type-secondary"]],null,null,null,null,null)),(l()(),u.Fb(8,null,["Albums: ",""]))],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,6,0,n.context.$implicit.albumArtist||n.context.$implicit.name),l(n,8,0,n.context.$implicit.albums.length)})}function v(l){return u.Hb(0,[(l()(),u.ob(0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.ob(1,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),u.ob(2,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),u.ob(3,0,null,null,1,"a",[],[[8,"id",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.toggleJumpList()&&u),u},null,null)),(l()(),u.Fb(4,null,["",""])),(l()(),u.ob(5,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,h)),u.nb(7,278528,null,0,c.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,7,0,n.context.$implicit.artists)},function(l,n){l(n,3,0,u.qb(1,"letter_",n.context.$implicit.letter,"")),l(n,4,0,n.context.$implicit.letter)})}function g(l){return u.Hb(0,[(l()(),u.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,v)),u.nb(2,278528,null,0,c.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.context.vsCollection)},null)}function d(l){return u.Hb(0,[(l()(),u.ob(0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),u.ob(1,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.jumpToLetter(l.context.$implicit)&&u),u},null,null)),(l()(),u.Fb(2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.letter)})}function w(l){return u.Hb(0,[(l()(),u.ob(0,0,null,null,10,"div",[["class","animated-page"]],null,null,null,null,null)),(l()(),u.ob(1,0,null,null,2,"div",[["class","container container-longlist"],["imageLazyLoadArea",""]],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,g)),u.nb(3,737280,null,0,a.a,[u.k,u.O,u.L,u.D,u.z],{originalCollection:[0,"originalCollection"],vsSize:[1,"vsSize"],vsExcess:[2,"vsExcess"],vsScrollParent:[3,"vsScrollParent"]},null),(l()(),u.ob(4,0,null,null,6,"div",[["class","jump-list"]],null,null,null,null,null)),u.Cb(512,null,c.u,c.v,[u.s,u.t,u.k,u.D]),u.nb(6,278528,null,0,c.i,[c.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Ab(7,{visible:0}),(l()(),u.ob(8,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,d)),u.nb(10,278528,null,0,c.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,t.letters,t.getSize,2,"body");var u=l(n,7,0,t.showJumpList);l(n,6,0,"jump-list",u),l(n,10,0,t.letters)},null)}function L(l){return u.Hb(0,[(l()(),u.ob(0,0,null,null,1,"app-artists",[],null,null,null,w,f)),u.nb(1,245760,null,0,m,[b.a,p.a,r.k],null,null)],function(l,n){l(n,1,0)},null)}var x=u.kb("app-artists",m,L,{},{},[]),k=function(){return function(){}}(),y=t("hDf6");t.d(n,"ArtistsModuleNgFactory",function(){return O});var O=u.lb(i,[],function(l){return u.vb([u.wb(512,u.j,u.Z,[[8,[e.a,x]],[3,u.j],u.x]),u.wb(4608,c.m,c.l,[u.u,[2,c.z]]),u.wb(1073742336,c.b,c.b,[]),u.wb(1073742336,r.m,r.m,[[2,r.r],[2,r.k]]),u.wb(1073742336,k,k,[]),u.wb(1073742336,y.a,y.a,[]),u.wb(1073742336,i,i,[]),u.wb(256,u.u,"en-GB",[]),u.wb(1024,r.i,function(){return[[{path:"",component:m}]]},[])])})}}]);