(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(e,t,n){"use strict";n.r(t);var s=n("ofXK"),c=n("fXoL"),i=n("3Pt+"),a=n("z6cu"),r=n("JIr8"),o=n("tk/3");let l=(()=>{class e{constructor(e){this.http=e}getRecentlyListened(e){return this.http.get("https://ws.audioscrobbler.com/2.0/",{params:{user:e,method:"user.getrecenttracks",api_key:"956c1818ded606576d6941de5ff793a5",format:"json",limit:"6"}}).pipe(Object(r.a)(this.handleError))}handleError(e){const t=e.message?e.message:e.status?`${e.status} - ${e.statusText}`:"Server error";return Object(a.a)(t)}}return e.ngInjectableDef=c.Nb({token:e,factory:function(t){return new(t||e)(c.Zb(o.a))},providedIn:null}),e})();var d=n("hDf6"),b=n("tyNb"),m=n("ztCj"),g=n("uwnU"),u=n("ufXC"),h=n("MDLy"),p=n("OgP6"),f=n("ktVm"),y=n("t083"),T=n("XtVx");class w{}var v=n("UrAU");const k=[1,"animated-page"],V=["class","container",4,"ngIf"],L=[1,"container"],I=[1,"row"],A=[1,"col"],S=["class","wrapper-home",4,"ngIf"],P=[1,"wrapper-home"],R=[1,"list-group","list-recently"],D=["class","list-group-item d-flex",3,"click",4,"ngFor","ngForOf"],C=[1,"list-group-item","d-flex",3,"click"],x=[1,"image-wrapper","col-3","col-md-2","col-lg-1"],J=["class","glyph glyph-play","aria-hidden","true",4,"ngIf"],M=["class","nowplaying-image",3,"src",4,"ngIf"],H=[1,"details-wrapper","col-6","col-md-7","col-lg-8"],$=[1,"small","muted"],j=[1,"time-wrapper","text-right","col-3"],E=[4,"ngIf"],O=[3,"ngClass",4,"ngIf"],N=["class","small muted",4,"ngIf"],F=["aria-hidden","true",1,"glyph","glyph-play"];function B(e,t){1&e&&c.Sb(0,"span",F)}const z=[1,"nowplaying-image",3,"src"];function U(e,t){if(1&e&&c.Sb(0,"img",z),2&e){const e=c.gc().$implicit;c.nc("src",e.image,c.zc)}}function X(e,t){if(1&e&&(c.Vb(0,"span"),c.Jc(1),c.hc(2,"date"),c.Tb()),2&e){const e=c.gc(2).$implicit;c.Ac(1),c.Kc(c.jc(2,1,e.date,"mediumDate"))}}function q(e,t){if(1&e&&(c.Vb(0,"span"),c.Jc(1),c.hc(2,"date"),c.Vb(3,"span",$),c.Hc(4,X,3,4,"span",E),c.Tb(),c.Tb()),2&e){const e=c.gc().$implicit;c.Ac(1),c.Lc(" ",c.jc(2,2,e.date,"shortTime")," "),c.Ac(4),c.mc("ngIf",!e.nowPlaying)}}const G=[3,"ngClass"],K=function(e){return{"now-playing":e}};function W(e,t){if(1&e&&(c.Vb(0,"span",G),c.Jc(1," Playing "),c.Tb()),2&e){const e=c.gc().$implicit;c.mc("ngClass",c.pc(1,K,e.nowPlaying))}}function Y(e,t){1&e&&(c.Vb(0,"span",$),c.Jc(1," right now "),c.Tb())}function Z(e,t){if(1&e){const e=c.Wb();c.Vb(0,"li",C),c.bc("click",function(n){c.xc(e);const s=t.$implicit;return c.gc(3).playTrack(s)}),c.Vb(1,"div",x),c.Hc(2,B,1,0,"span",J),c.Hc(3,U,1,1,"img",M),c.Tb(),c.Vb(4,"div",H),c.Jc(5),c.Sb(6,"br"),c.Vb(7,"span",$),c.Jc(8),c.Tb(),c.Tb(),c.Vb(9,"div",j),c.Hc(10,q,5,5,"span",E),c.Hc(11,W,2,3,"span",O),c.Hc(12,Y,2,0,"span",N),c.Tb(),c.Tb()}if(2&e){const e=t.$implicit;c.Ac(2),c.mc("ngIf",!0===e.nowPlaying),c.Ac(3),c.mc("ngIf",!1===e.nowPlaying),c.Ac(5),c.Mc(" ",e.artist," \u2022 ",e.title," "),c.Ac(8),c.Lc("",e.album," "),c.Ac(10),c.mc("ngIf",!e.nowPlaying),c.Ac(11),c.mc("ngIf",e.nowPlaying),c.Ac(12),c.mc("ngIf",e.nowPlaying)}}function _(e,t){if(1&e&&(c.Vb(0,"div",P),c.Vb(1,"h4"),c.Jc(2,"Recently listened"),c.Tb(),c.Vb(3,"ol",R),c.Hc(4,Z,13,8,"li",D),c.Tb(),c.Tb()),2&e){const e=c.gc(2);c.Ac(4),c.mc("ngForOf",e.recentlyListenedTracks)}}const Q=[1,"media-container","col","list-recently-added"],ee=["class","album-panel media-panel",4,"ngFor","ngForOf"],te=[1,"album-panel","media-panel"],ne=[3,"album"];function se(e,t){if(1&e&&(c.Vb(0,"div",te),c.Sb(1,"mdb-album",ne),c.Tb()),2&e){const e=t.$implicit;c.Ac(1),c.mc("album",e)}}function ce(e,t){if(1&e&&(c.Vb(0,"div",P),c.Vb(1,"h4"),c.Jc(2,"Recently added / modified"),c.Tb(),c.Vb(3,"div",I),c.Vb(4,"div",Q),c.Hc(5,se,2,1,"div",ee),c.Tb(),c.Tb(),c.Tb()),2&e){const e=c.gc(2);c.Ac(5),c.mc("ngForOf",e.recentlyAdded)}}function ie(e,t){if(1&e&&(c.Vb(0,"div",L),c.Vb(1,"div",I),c.Vb(2,"div",A),c.Hc(3,_,5,1,"div",S),c.Hc(4,ce,6,1,"div",S),c.Tb(),c.Tb(),c.Tb()),2&e){const e=c.gc();c.Ac(3),c.mc("ngIf",e.recentlyListenedTracks.length>0),c.Ac(4),c.mc("ngIf",e.recentlyAdded.length>0)}}const ae=["role","form",1,"form-horizontal",3,"ngClass","ngSubmit"],re=["lastfmForm","ngForm"],oe=[1,"form-group","row"],le=["for","name",1,"col-12","col-sm-4","col-lg-2","col-form-label"],de=[1,"col","col-sm-8","col-lg-10"],be=["type","text","id","name","placeholder","e.g. JohnDoe","required","","name","name",1,"form-control",3,"ngModel","ngModelChange"],me=["name","ngModel"],ge=["for","password",1,"col-12","col-sm-4","col-lg-2","col-form-label"],ue=["type","password","id","password","placeholder","password","required","","name","password",1,"form-control",3,"ngModel","ngModelChange"],he=["password","ngModel"],pe=[1,"col","offset-md-4","offset-lg-2"],fe=["type","submit",1,"btn","btn-primary",3,"disabled"],ye=["type","button",1,"btn","btn-link",3,"click"],Te=function(e){return{"theme-alt":e}};function we(e,t){if(1&e){const e=c.Wb();c.Vb(0,"div",L),c.Vb(1,"div",I),c.Vb(2,"div",A),c.Vb(3,"h4"),c.Jc(4,"Login to last.fm"),c.Tb(),c.Sb(5,"br"),c.Vb(6,"form",ae,re),c.bc("ngSubmit",function(t){return c.xc(e),c.gc().onSubmit()}),c.Vb(8,"div",oe),c.Vb(9,"label",le),c.Jc(10,"Username"),c.Tb(),c.Vb(11,"div",de),c.Vb(12,"input",be,me),c.bc("ngModelChange",function(t){return c.xc(e),c.gc().user.name=t}),c.Tb(),c.Tb(),c.Tb(),c.Vb(14,"div",oe),c.Vb(15,"label",ge),c.Jc(16,"Password"),c.Tb(),c.Vb(17,"div",de),c.Vb(18,"input",ue,he),c.bc("ngModelChange",function(t){return c.xc(e),c.gc().user.password=t}),c.Tb(),c.Tb(),c.Tb(),c.Vb(20,"div",oe),c.Vb(21,"div",pe),c.Vb(22,"button",fe),c.Jc(23," Login "),c.Tb(),c.Vb(24,"button",ye),c.bc("click",function(t){return c.xc(e),c.gc().skipLastfm()}),c.Jc(25," Skip "),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){const e=c.vc(7),t=c.gc();c.Ac(6),c.mc("ngClass",c.pc(4,Te,"dark"===t.theme)),c.Ac(12),c.mc("ngModel",t.user.name),c.Ac(18),c.mc("ngModel",t.user.password),c.Ac(22),c.mc("disabled",!e.form.valid)}}const ve=[{path:"",component:(()=>{class e{constructor(e,t,n,s,c,i,a,r){this.playerService=e,this.collectionService=t,this.coreService=n,this.router=s,this.recentlyListened=c,this.pathService=i,this.lastFMService=a,this.configService=r,this.recentlyListenedTracks=[],this.RECENTLYLISTENEDINTERVAL=6e4,this.newListenedTracks=[],this.loading=!0,this.recentlyAdded=[],this.user=new w,this.subscription=this.configService.mode$.subscribe(e=>{this.theme=e}),this.core=this.coreService.getCore(),this.subscription2=this.core.coreParsed$.subscribe(e=>{this.init(!0)}),this.theme=r.mode,this.pathService.announcePage("Home"),localStorage.getItem("lastfm-username")&&(this.username=localStorage.getItem("lastfm-username")),this.init()}onSubmit(){this.lastFMService.authenticate({user:this.user.name,password:this.user.password}).subscribe(e=>{localStorage.setItem("lastfm-token",e.session.key),localStorage.setItem("lastfm-username",this.user.name),this.username=this.user.name,this.startPolling()})}init(e=!1){(this.core.isCoreParsed||e)&&localStorage.getItem("lastfm-username")&&this.startPolling(),this.recentlyAdded=this.core.getLatestAdditions(14),Object(m.c)("cached-recently-listened").then(e=>{e&&this.populate(e),this.loading=!1})}ngOnDestroy(){clearInterval(this.counter),this.subscription.unsubscribe(),this.subscription2.unsubscribe()}startPolling(){this.counter||(this.counter=setInterval(()=>{this.checkRecentlyListened()},this.RECENTLYLISTENEDINTERVAL),this.checkRecentlyListened())}checkRecentlyListened(){this.newListenedTracks=[],this.loading=!0,"mdb-skipped"!==this.username?this.recentlyListened.getRecentlyListened(this.username).subscribe(e=>{Object(m.d)("cached-recently-listened",e.recenttracks.track),this.populate(e.recenttracks.track)},e=>console.error(e)):Object(m.c)("recentlyListened").then(e=>{e&&this.populate(e),this.loading=!1})}setDate(e){return e["@attr"]&&e["@attr"].nowplaying?new Date:new Date(1e3*Number(e.date.uts))}setImage(e){return e.image&&e.image[e.image.length-1]["#text"]||"/global/images/no-cover.png"}populate(e){this.newListenedTracks=[],e.forEach(e=>{const t=new g.a({});t.artist=e.artist["#text"],t.album=e.album["#text"],t.title=e.name,t.image=this.setImage(e),t.nowPlaying=!(!e["@attr"]||!e["@attr"].nowplaying),t.date=this.setDate(e),t.trackArtist=e.artist["#text"],t.isPlaying=!1,t.isPaused=!1,t.isLoved=!1,t.id=`${e.artist["#text"]}-${e.album["#text"]}-${e.name}`,this.newListenedTracks.push(t)}),this.recentlyListenedTracks!==this.newListenedTracks&&(this.recentlyListenedTracks=this.newListenedTracks),this.loading=!1}skipLastfm(){localStorage.setItem("lastfm-username","mdb-skipped"),this.username="mdb-skipped",this.startPolling()}playTrack(e){const t=this.core.getArtistByName(e.artist);if(t){const n=this.core.getAlbumByArtistAndName(t,e.album);if(n){const t=this.core.getTrackByAlbumAndName(n,e.title);t?(this.playerService.doPlayTrack(t),setTimeout(()=>{this.checkRecentlyListened()},500)):console.warn("track not found",e)}else console.warn("album not found",e)}else console.warn("artist not found",e)}}return e.ngComponentDef=c.Lb({type:e,selectors:[["app-home"]],factory:function(t){return new(t||e)(c.Rb(u.a),c.Rb(h.a),c.Rb(f.a),c.Rb(b.c),c.Rb(l),c.Rb(T.a),c.Rb(y.a),c.Rb(p.a))},consts:3,vars:2,template:function(e,t){1&e&&(c.Vb(0,"div",k),c.Hc(1,ie,5,2,"div",V),c.Hc(2,we,26,6,"div",V),c.Tb()),2&e&&(c.Ac(1),c.mc("ngIf",t.recentlyListenedTracks&&t.username),c.Ac(2),c.mc("ngIf",!t.username))},directives:[s.l,s.k,s.j,v.a,i.p,i.g,i.h,i.a,i.m,i.f,i.i],pipes:[s.e],encapsulation:2}),e})()}];let ke=(()=>{class e{}return e.ngModuleDef=c.Pb({type:e}),e.ngInjectorDef=c.Ob({factory:function(t){return new(t||e)},imports:[[b.e.forChild(ve)],b.e]}),e.ngLocaleIdDef="en-GB",e})();b.e.forChild(ve),n.d(t,"HomeModule",function(){return Ve});let Ve=(()=>{class e{}return e.ngModuleDef=c.Pb({type:e}),e.ngInjectorDef=c.Ob({factory:function(t){return new(t||e)},providers:[l],imports:[[s.c,ke,d.a,i.b]]}),e.ngLocaleIdDef="en-GB",e})()}}]);