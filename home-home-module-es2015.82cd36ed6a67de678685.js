(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",(function(){return D}));var s=n("ofXK"),i=n("3Pt+"),c=n("z6cu"),a=n("JIr8"),r=n("fXoL"),o=n("tk/3");let l=(()=>{class e{constructor(e){this.http=e}getRecentlyListened(e){return this.http.get("https://ws.audioscrobbler.com/2.0/",{params:{user:e,method:"user.getrecenttracks",api_key:"956c1818ded606576d6941de5ff793a5",format:"json",limit:"6"}}).pipe(Object(a.a)(this.handleError))}handleError(e){const t=e.message?e.message:e.status?`${e.status} - ${e.statusText}`:"Server error";return Object(c.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(o.a))},e.\u0275prov=r.Eb({token:e,factory:e.\u0275fac}),e})();var b=n("hDf6"),d=n("tyNb"),m=n("ztCj"),u=n("uwnU"),p=n("ufXC"),g=n("MDLy"),h=n("OgP6"),f=n("ktVm"),L=n("t083"),y=n("XtVx");class w{}var v=n("UrAU");function k(e,t){1&e&&r.Jb(0,"span",19)}function I(e,t){if(1&e&&r.Jb(0,"img",20),2&e){const e=r.Wb().$implicit;r.dc("src",e.image,r.mc)}}function K(e,t){if(1&e&&(r.Lb(0,"span"),r.pc(1),r.Xb(2,"date"),r.Kb()),2&e){const e=r.Wb(2).$implicit;r.xb(1),r.qc(r.Zb(2,1,e.date,"mediumDate"))}}function x(e,t){if(1&e&&(r.Lb(0,"span"),r.pc(1),r.Xb(2,"date"),r.Lb(3,"span",14),r.oc(4,K,3,4,"span",16),r.Kb(),r.Kb()),2&e){const e=r.Wb().$implicit;r.xb(1),r.rc(" ",r.Zb(2,2,e.date,"shortTime")," "),r.xb(3),r.cc("ngIf",!e.nowPlaying)}}const S=function(e){return{"now-playing":e}};function T(e,t){if(1&e&&(r.Lb(0,"span",21),r.pc(1," Playing "),r.Kb()),2&e){const e=r.Wb().$implicit;r.cc("ngClass",r.fc(1,S,e.nowPlaying))}}function P(e,t){1&e&&(r.Lb(0,"span",14),r.pc(1," right now "),r.Kb())}function C(e,t){if(1&e){const e=r.Mb();r.Lb(0,"li",9),r.Sb("click",(function(){r.lc(e);const n=t.$implicit;return r.Wb(3).playTrack(n)})),r.Lb(1,"div",10),r.oc(2,k,1,0,"span",11),r.oc(3,I,1,1,"img",12),r.Kb(),r.Lb(4,"div",13),r.pc(5),r.Jb(6,"br"),r.Lb(7,"span",14),r.pc(8),r.Kb(),r.Kb(),r.Lb(9,"div",15),r.oc(10,x,5,5,"span",16),r.oc(11,T,2,3,"span",17),r.oc(12,P,2,0,"span",18),r.Kb(),r.Kb()}if(2&e){const e=t.$implicit;r.xb(2),r.cc("ngIf",!0===e.nowPlaying),r.xb(1),r.cc("ngIf",!1===e.nowPlaying),r.xb(2),r.sc(" ",e.artist," \u2022 ",e.title," "),r.xb(3),r.rc("",e.album," "),r.xb(2),r.cc("ngIf",!e.nowPlaying),r.xb(1),r.cc("ngIf",e.nowPlaying),r.xb(1),r.cc("ngIf",e.nowPlaying)}}function M(e,t){if(1&e&&(r.Lb(0,"div",6),r.Lb(1,"h4"),r.pc(2,"Recently listened"),r.Kb(),r.Lb(3,"ol",7),r.oc(4,C,13,8,"li",8),r.Kb(),r.Kb()),2&e){const e=r.Wb(2);r.xb(4),r.cc("ngForOf",e.recentlyListenedTracks)}}function A(e,t){if(1&e&&(r.Lb(0,"div",24),r.Jb(1,"mdb-album",25),r.Kb()),2&e){const e=t.$implicit;r.xb(1),r.cc("album",e)}}function E(e,t){if(1&e&&(r.Lb(0,"div",6),r.Lb(1,"h4"),r.pc(2,"Recently added / modified"),r.Kb(),r.Lb(3,"div",3),r.Lb(4,"div",22),r.oc(5,A,2,1,"div",23),r.Kb(),r.Kb(),r.Kb()),2&e){const e=r.Wb(2);r.xb(5),r.cc("ngForOf",e.recentlyAdded)}}function $(e,t){if(1&e&&(r.Lb(0,"div",2),r.Lb(1,"div",3),r.Lb(2,"div",4),r.oc(3,M,5,1,"div",5),r.oc(4,E,6,1,"div",5),r.Kb(),r.Kb(),r.Kb()),2&e){const e=r.Wb();r.xb(3),r.cc("ngIf",e.recentlyListenedTracks.length>0),r.xb(1),r.cc("ngIf",e.recentlyAdded.length>0)}}const W=function(e){return{"theme-alt":e}};function j(e,t){if(1&e){const e=r.Mb();r.Lb(0,"div",2),r.Lb(1,"div",3),r.Lb(2,"div",4),r.Lb(3,"h4"),r.pc(4,"Login to last.fm"),r.Kb(),r.Jb(5,"br"),r.Lb(6,"form",26,27),r.Sb("ngSubmit",(function(){return r.lc(e),r.Wb().onSubmit()})),r.Lb(8,"div",28),r.Lb(9,"label",29),r.pc(10,"Username"),r.Kb(),r.Lb(11,"div",30),r.Lb(12,"input",31,32),r.Sb("ngModelChange",(function(t){return r.lc(e),r.Wb().user.name=t})),r.Kb(),r.Kb(),r.Kb(),r.Lb(14,"div",28),r.Lb(15,"label",33),r.pc(16,"Password"),r.Kb(),r.Lb(17,"div",30),r.Lb(18,"input",34,35),r.Sb("ngModelChange",(function(t){return r.lc(e),r.Wb().user.password=t})),r.Kb(),r.Kb(),r.Kb(),r.Lb(20,"div",28),r.Lb(21,"div",36),r.Lb(22,"button",37),r.pc(23," Login "),r.Kb(),r.Lb(24,"button",38),r.Sb("click",(function(){return r.lc(e),r.Wb().skipLastfm()})),r.pc(25," Skip "),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Kb()}if(2&e){const e=r.jc(7),t=r.Wb();r.xb(6),r.cc("ngClass",r.fc(4,W,"dark"===t.theme)),r.xb(6),r.cc("ngModel",t.user.name),r.xb(6),r.cc("ngModel",t.user.password),r.xb(4),r.cc("disabled",!e.form.valid)}}const F=[{path:"",component:(()=>{class e{constructor(e,t,n,s,i,c,a,r){this.playerService=e,this.collectionService=t,this.coreService=n,this.router=s,this.recentlyListened=i,this.pathService=c,this.lastFMService=a,this.configService=r,this.recentlyListenedTracks=[],this.RECENTLYLISTENEDINTERVAL=6e4,this.newListenedTracks=[],this.loading=!0,this.recentlyAdded=[],this.user=new w,this.subscription=this.configService.mode$.subscribe(e=>{this.theme=e}),this.core=this.coreService.getCore(),this.subscription2=this.core.coreParsed$.subscribe(e=>{this.init(!0)}),this.theme=r.mode,this.pathService.announcePage("Home"),localStorage.getItem("lastfm-username")&&(this.username=localStorage.getItem("lastfm-username")),this.init()}onSubmit(){this.lastFMService.authenticate({user:this.user.name,password:this.user.password}).subscribe(e=>{localStorage.setItem("lastfm-token",e.session.key),localStorage.setItem("lastfm-username",this.user.name),this.username=this.user.name,this.startPolling()})}init(e=!1){(this.core.isCoreParsed||e)&&localStorage.getItem("lastfm-username")&&this.startPolling(),this.recentlyAdded=this.core.getLatestAdditions(14),Object(m.c)("cached-recently-listened").then(e=>{e&&this.populate(e),this.loading=!1})}ngOnDestroy(){clearInterval(this.counter),this.subscription.unsubscribe(),this.subscription2.unsubscribe()}startPolling(){this.counter||(this.counter=setInterval(()=>{this.checkRecentlyListened()},this.RECENTLYLISTENEDINTERVAL),this.checkRecentlyListened())}checkRecentlyListened(){this.newListenedTracks=[],this.loading=!0,"mdb-skipped"!==this.username?this.recentlyListened.getRecentlyListened(this.username).subscribe(e=>{Object(m.d)("cached-recently-listened",e.recenttracks.track),this.populate(e.recenttracks.track)},e=>console.error(e)):Object(m.c)("recentlyListened").then(e=>{e&&this.populate(e),this.loading=!1})}setDate(e){return e["@attr"]&&e["@attr"].nowplaying?new Date:new Date(1e3*Number(e.date.uts))}setImage(e){return e.image&&e.image[e.image.length-1]["#text"]||"/global/images/no-cover.png"}populate(e){this.newListenedTracks=[],e.forEach(e=>{const t=new u.a({});t.artist=e.artist["#text"],t.album=e.album["#text"],t.title=e.name,t.image=this.setImage(e),t.nowPlaying=!(!e["@attr"]||!e["@attr"].nowplaying),t.date=this.setDate(e),t.trackArtist=e.artist["#text"],t.isPlaying=!1,t.isPaused=!1,t.isLoved=!1,t.id=`${e.artist["#text"]}-${e.album["#text"]}-${e.name}`,this.newListenedTracks.push(t)}),this.recentlyListenedTracks!==this.newListenedTracks&&(this.recentlyListenedTracks=this.newListenedTracks),this.loading=!1}skipLastfm(){localStorage.setItem("lastfm-username","mdb-skipped"),this.username="mdb-skipped",this.startPolling()}playTrack(e){const t=this.core.getArtistByName(e.artist);if(t){const n=this.core.getAlbumByArtistAndName(t,e.album);if(n){const t=this.core.getTrackByAlbumAndName(n,e.title);t?(this.playerService.doPlayTrack(t),setTimeout(()=>{this.checkRecentlyListened()},500)):console.warn("track not found",e)}else console.warn("album not found",e)}else console.warn("artist not found",e)}}return e.\u0275fac=function(t){return new(t||e)(r.Ib(p.a),r.Ib(g.a),r.Ib(f.a),r.Ib(d.c),r.Ib(l),r.Ib(y.a),r.Ib(L.a),r.Ib(h.a))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-home"]],decls:3,vars:2,consts:[[1,"animated-page"],["class","container",4,"ngIf"],[1,"container"],[1,"row"],[1,"col"],["class","wrapper-home",4,"ngIf"],[1,"wrapper-home"],[1,"list-group","list-recently"],["class","list-group-item d-flex",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex",3,"click"],[1,"image-wrapper","col-3","col-md-2","col-lg-1"],["class","glyph glyph-play","aria-hidden","true",4,"ngIf"],["class","nowplaying-image",3,"src",4,"ngIf"],[1,"details-wrapper","col-6","col-md-7","col-lg-8"],[1,"small","muted"],[1,"time-wrapper","text-right","col-3"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],["class","small muted",4,"ngIf"],["aria-hidden","true",1,"glyph","glyph-play"],[1,"nowplaying-image",3,"src"],[3,"ngClass"],[1,"media-container","col","list-recently-added"],["class","album-panel media-panel",4,"ngFor","ngForOf"],[1,"album-panel","media-panel"],[3,"album"],["role","form",1,"form-horizontal",3,"ngClass","ngSubmit"],["lastfmForm","ngForm"],[1,"form-group","row"],["for","name",1,"col-12","col-sm-4","col-lg-2","col-form-label"],[1,"col","col-sm-8","col-lg-10"],["type","text","id","name","placeholder","e.g. JohnDoe","required","","name","name",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],["for","password",1,"col-12","col-sm-4","col-lg-2","col-form-label"],["type","password","id","password","placeholder","password","required","","name","password",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],[1,"col","offset-md-4","offset-lg-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-link",3,"click"]],template:function(e,t){1&e&&(r.Lb(0,"div",0),r.oc(1,$,5,2,"div",1),r.oc(2,j,26,6,"div",1),r.Kb()),2&e&&(r.xb(1),r.cc("ngIf",t.recentlyListenedTracks&&t.username),r.xb(1),r.cc("ngIf",!t.username))},directives:[s.k,s.j,s.i,v.a,i.m,i.d,i.e,i.a,i.j,i.c,i.f],pipes:[s.d],encapsulation:2}),e})()}];let R=(()=>{class e{}return e.\u0275mod=r.Gb({type:e}),e.\u0275inj=r.Fb({factory:function(t){return new(t||e)},imports:[[d.e.forChild(F)],d.e]}),e})(),D=(()=>{class e{}return e.\u0275mod=r.Gb({type:e}),e.\u0275inj=r.Fb({factory:function(t){return new(t||e)},providers:[l],imports:[[s.b,R,b.a,i.b]]}),e})()}}]);