(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9/lQ":function(t,n,l){"use strict";l.r(n);var s=l("8Y7J");class a{}var u=l("pMnS"),e=l("Z8Ug"),i=l("UrAU"),r=l("iInd"),o=l("SVse"),b=l("ktVm"),c=l("XtVx");class m{constructor(t,n,l,s){this.coreService=t,this.router=n,this.pathService=l,this.route=s,this.albums=[],this.sorting=[{name:"year",value:"year"},{name:"name",value:"sortName"}],this.artistName=decodeURIComponent(this.route.snapshot.params.artist),this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.route.params.subscribe(t=>{this.artistName=decodeURIComponent(t.artist),this.ngOnInit()})}ngOnInit(){this.artist=this.core.artists[this.artistName],this.artist&&(this.pathService.announcePath({artist:this.artist,letter:this.artist.letter}),this.albums=this.artist.sortAndReturnAlbumsBy("year","asc"))}ngOnDestroy(){this.subscription.unsubscribe()}onSelect(t){this.router.navigate(["Album",{letter:t.artist.letter.escapedLetter,artist:t.artist.sortName,album:t.sortName}])}onSortChange(t,n){this.albums=this.artist.sortAndReturnAlbumsBy(n,"asc")}}var h=s.kb({encapsulation:2,styles:[],data:{}});function p(t){return s.Fb(0,[(t()(),s.mb(0,0,null,null,2,"div",[["class","album-panel media-panel"]],null,null,null,null,null)),(t()(),s.mb(1,0,null,null,1,"mdb-album",[],null,null,null,e.b,e.a)),s.lb(2,49152,null,0,i.a,[r.k],{album:[0,"album"]},null)],function(t,n){t(n,2,0,n.context.$implicit)},null)}function d(t){return s.Fb(0,[(t()(),s.mb(0,0,null,null,2,"div",[["class","media-container animated-page"]],null,null,null,null,null)),(t()(),s.eb(16777216,null,null,1,null,p)),s.lb(2,278528,null,0,o.j,[s.M,s.J,s.q],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,2,0,n.component.albums)},null)}function v(t){return s.Fb(0,[(t()(),s.mb(0,0,null,null,1,"app-artist-detail",[],null,null,null,d,h)),s.lb(1,245760,null,0,m,[b.a,r.k,c.a,r.a],null,null)],function(t,n){t(n,1,0)},null)}var f=s.ib("app-artist-detail",m,v,{},{},[]);class g{}var y=l("hDf6");l.d(n,"ArtistDetailModuleNgFactory",function(){return S});var S=s.jb(a,[],function(t){return s.tb([s.ub(512,s.j,s.Z,[[8,[u.a,f]],[3,s.j],s.v]),s.ub(4608,o.m,o.l,[s.s,[2,o.v]]),s.ub(1073742336,o.b,o.b,[]),s.ub(1073742336,r.m,r.m,[[2,r.s],[2,r.k]]),s.ub(1073742336,g,g,[]),s.ub(1073742336,y.a,y.a,[]),s.ub(1073742336,a,a,[]),s.ub(256,s.s,"en-GB",[]),s.ub(1024,r.i,function(){return[[{path:"",component:m}]]},[])])})}}]);