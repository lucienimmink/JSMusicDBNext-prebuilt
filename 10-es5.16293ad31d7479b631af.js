(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9/lQ":function(t,n,l){"use strict";l.r(n);var i=l("CcnG"),u=function(){return function(){}}(),e=l("pMnS"),r=l("Z8Ug"),a=l("UrAU"),s=l("ZYCi"),o=l("Ip0R"),c=l("ktVm"),b=l("XtVx"),m=function(){function t(t,n,l,i){var u=this;this.coreService=t,this.router=n,this.pathService=l,this.route=i,this.albums=[],this.sorting=[{name:"year",value:"year"},{name:"name",value:"sortName"}],this.artistName=decodeURIComponent(this.route.snapshot.params.artist),this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(function(t){u.ngOnInit()}),this.route.params.subscribe(function(t){u.artistName=decodeURIComponent(t.artist),u.ngOnInit()})}return t.prototype.ngOnInit=function(){this.artist=this.core.artists[this.artistName],this.artist&&(this.pathService.announcePath({artist:this.artist,letter:this.artist.letter}),this.albums=this.artist.sortAndReturnAlbumsBy("year","asc"))},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.prototype.onSelect=function(t){this.router.navigate(["Album",{letter:t.artist.letter.escapedLetter,artist:t.artist.sortName,album:t.sortName}])},t.prototype.onSortChange=function(t,n){this.albums=this.artist.sortAndReturnAlbumsBy(n,"asc")},t}(),p=i.mb({encapsulation:2,styles:[],data:{}});function h(t){return i.Hb(0,[(t()(),i.ob(0,0,null,null,2,"div",[["class","album-panel media-panel"]],null,null,null,null,null)),(t()(),i.ob(1,0,null,null,1,"mdb-album",[],null,null,null,r.b,r.a)),i.nb(2,49152,null,0,a.a,[s.k],{album:[0,"album"]},null)],function(t,n){t(n,2,0,n.context.$implicit)},null)}function f(t){return i.Hb(0,[(t()(),i.ob(0,0,null,null,2,"div",[["class","media-container animated-page"]],null,null,null,null,null)),(t()(),i.eb(16777216,null,null,1,null,h)),i.nb(2,278528,null,0,o.j,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,2,0,n.component.albums)},null)}function d(t){return i.Hb(0,[(t()(),i.ob(0,0,null,null,1,"app-artist-detail",[],null,null,null,f,p)),i.nb(1,245760,null,0,m,[c.a,s.k,b.a,s.a],null,null)],function(t,n){t(n,1,0)},null)}var w=i.kb("app-artist-detail",m,d,{},{},[]),v=function(){return function(){}}(),g=l("hDf6");l.d(n,"ArtistDetailModuleNgFactory",function(){return y});var y=i.lb(u,[],function(t){return i.vb([i.wb(512,i.j,i.Z,[[8,[e.a,w]],[3,i.j],i.x]),i.wb(4608,o.m,o.l,[i.u,[2,o.z]]),i.wb(1073742336,o.b,o.b,[]),i.wb(1073742336,s.m,s.m,[[2,s.r],[2,s.k]]),i.wb(1073742336,v,v,[]),i.wb(1073742336,g.a,g.a,[]),i.wb(1073742336,u,u,[]),i.wb(256,i.u,"en-GB",[]),i.wb(1024,s.i,function(){return[[{path:"",component:m}]]},[])])})}}]);