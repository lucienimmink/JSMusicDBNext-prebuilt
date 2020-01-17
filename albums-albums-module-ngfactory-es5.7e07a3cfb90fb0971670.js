function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RZ0Q:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function l(){_classCallCheck(this,l)},i=u("pMnS"),s=u("Z8Ug"),o=u("UrAU"),r=u("iInd"),c=u("SVse"),a=u("Vmu9"),b=u("ktVm"),m=u("XtVx"),p=function(){function l(n,u,t){var e=this;_classCallCheck(this,l),this.coreService=n,this.pathService=u,this.router=t,this.items=[],this.letters=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(l){e.ngOnInit()}))}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;(new Date).getTime(),this.pathService.announcePage("Albums");var n=this.core.artists;this.letters=this.core.sortedLetters;var u=Object.keys(n).sort((function(l,n){return l<n?-1:1})),t=[];u.forEach((function(n){t.push(l.core.artists[n])})),this.items=t,this.items.forEach((function(n,u){var t=l.getSize(n,u);l.cummlativeLength[u]=u>0?{l:l.cummlativeLength[u-1].l+t,letter:n.letter.letter}:{l:t,letter:n.letter.letter}}))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"navigateToAlbum",value:function(l){this.router.navigate(["/letter",l.artist.letter.escapedLetter,"artist",l.artist.sortName,"album",l.sortName])}},{key:"getSize",value:function(l,n){return 90*l.albums.length+49}},{key:"toggleJumpList",value:function(){this.showJumpList=!this.showJumpList}},{key:"jumpToLetter",value:function(l){var n=this;this.showJumpList=!1,this.items.some((function(u,t){var e=!1;return u.letter.letter===l.letter&&(window.scrollTo(0,n.cummlativeLength[t>0?t-1:0].l),e=!0),e}))}}]),l}(),f=t.mb({encapsulation:2,styles:[],data:{}});function h(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,1,"span",[["class","small muted"]],null,null,null,null,null)),(l()(),t.Hb(1,null,["Year: ",""]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.year)}))}function v(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,8,"li",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateToAlbum(l.context.$implicit)&&t),t}),null,null)),(l()(),t.ob(1,0,null,null,2,"div",[["class","image-wrapper"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,1,"mdb-album",[],null,null,null,s.b,s.a)),t.nb(3,49152,null,0,o.a,[r.k],{album:[0,"album"]},null),(l()(),t.ob(4,0,null,null,4,"div",[["class","text-wrapper"]],null,null,null,null,null)),(l()(),t.ob(5,0,null,null,1,"span",[["class","text"]],null,null,null,null,null)),(l()(),t.Hb(6,null,["",""])),(l()(),t.eb(16777216,null,null,1,null,h)),t.nb(8,16384,null,0,c.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit),l(n,8,0,n.context.$implicit.year)}),(function(l,n){l(n,6,0,n.context.$implicit.name)}))}function g(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,9,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,5,"h4",[],null,null,null,null,null)),(l()(),t.ob(3,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleJumpList()&&t),t}),null,null)),(l()(),t.Hb(4,null,["",""])),(l()(),t.Hb(-1,null,[" \xa0 "])),(l()(),t.ob(6,0,null,null,1,"span",[["class","small muted"]],null,null,null,null,null)),(l()(),t.Hb(7,null,["(",")"])),(l()(),t.ob(8,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,v)),t.nb(10,278528,null,0,c.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,10,0,n.context.$implicit.albums)}),(function(l,n){l(n,4,0,n.context.$implicit.albumArtist||n.context.$implicit.name),l(n,7,0,n.context.$implicit.albums&&n.context.$implicit.albums.length)}))}function k(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,g)),t.nb(2,278528,null,0,c.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.context.vsCollection)}),null)}function d(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.jumpToLetter(l.context.$implicit)&&t),t}),null,null)),(l()(),t.Hb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.letter)}))}function y(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,10,"div",[["class","animated-page"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,2,"div",[["class","container container-longlist"],["imageLazyLoadArea",""]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,k)),t.nb(3,737280,null,0,a.a,[t.k,t.M,t.J,t.x],{vsSize:[0,"vsSize"],vsExcess:[1,"vsExcess"],vsScrollParent:[2,"vsScrollParent"],originalCollection:[3,"originalCollection"]},null),(l()(),t.ob(4,0,null,null,6,"div",[["class","jump-list"]],null,null,null,null,null)),t.Eb(512,null,c.u,c.v,[t.q,t.r,t.k,t.B]),t.nb(6,278528,null,0,c.i,[c.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(7,{visible:0}),(l()(),t.ob(8,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,d)),t.nb(10,278528,null,0,c.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,u.getSize,2,"body",u.items);var t=l(n,7,0,u.showJumpList);l(n,6,0,"jump-list",t),l(n,10,0,u.letters)}),null)}var J=t.kb("app-albums-list",p,(function(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,1,"app-albums-list",[],null,null,null,y,f)),t.nb(1,245760,null,0,p,[b.a,m.a,r.k],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),w=function l(){_classCallCheck(this,l)},x=u("hDf6");u.d(n,"AlbumsModuleNgFactory",(function(){return C}));var C=t.lb(e,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[i.a,J]],[3,t.j],t.v]),t.yb(4608,c.m,c.l,[t.s,[2,c.z]]),t.yb(1073742336,c.b,c.b,[]),t.yb(1073742336,r.m,r.m,[[2,r.r],[2,r.k]]),t.yb(1073742336,w,w,[]),t.yb(1073742336,x.a,x.a,[]),t.yb(1073742336,e,e,[]),t.yb(256,t.s,"en-GB",[]),t.yb(1024,r.i,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);