(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{kez3:function(t,s,i){"use strict";i.r(s);var c=i("ofXK"),n=i("fXoL"),a=i("3Pt+"),l=i("hDf6"),e=i("tyNb"),r=i("ufXC"),o=i("OgP6"),b=i("ktVm"),g=i("t083"),h=i("XtVx"),p=i("KI15"),f=i("Gcu2"),u=i("Oz9T");const m=[1,"animated-page"],y=[1,"container"],d=[1,"row"],k=[1,"col-12","col-lg-3","playlists-lg-fixed"],v=[1,"nav","flex-column"],T=["class","nav-item",4,"ngIf"],S=[1,"nav-item"],A=["class","btn btn-link px-0",3,"click",4,"ngIf"],V=[1,"btn","btn-link","px-0",3,"click"],I=["class","nav-item",4,"ngFor","ngForOf"],P=["class","col-12 col-lg-9 offset-lg-3",4,"ngIf"];function w(t,s){if(1&t){const t=n.Wb();n.Vb(0,"li",S),n.Vb(1,"a",V),n.bc("click",(function(s){return n.xc(t),n.gc().setPlaylist("current")})),n.Jc(2,"Current playlist"),n.Tb(),n.Tb()}}function x(t,s){if(1&t){const t=n.Wb();n.Vb(0,"a",V),n.bc("click",(function(s){return n.xc(t),n.gc().setPlaylist("last.fm")})),n.Jc(1,"Loved tracks on last.fm"),n.Tb()}}function J(t,s){if(1&t){const t=n.Wb();n.Vb(0,"a",V),n.bc("click",(function(s){return n.xc(t),n.gc().setPlaylist("radio")})),n.Jc(1),n.Tb()}if(2&t){const t=n.gc();n.Ac(1),n.Lc("",t.playlistService.numberOfTracksInAPlaylist," tracks by preference")}}const O=[3,"click"],L=[1,"glyph","glyph-delete"];function C(t,s){if(1&t){const t=n.Wb();n.Vb(0,"li",S),n.Vb(1,"a",O),n.bc("click",(function(i){n.xc(t);const c=s.$implicit;return n.gc().setPlaylist(c)})),n.Jc(2),n.Vb(3,"a",O),n.bc("click",(function(i){n.xc(t);const c=s.$implicit;return n.gc().removePlaylist(c)})),n.Sb(4,"span",L),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=s.$implicit;n.Ac(2),n.Lc("",t.name," ")}}const H=[1,"col-12","col-lg-9","offset-lg-3"],F=["class","small muted",4,"ngIf"],N=[1,"progress-bar"],R=[1,"progress-circle"],D=[1,"small","muted"];function M(t,s){if(1&t&&(n.Vb(0,"p",D),n.Jc(1),n.Tb()),2&t){const t=n.gc(2);n.Ac(1),n.Lc("Tracks found: ",t.playlist.tracks.length,"")}}function W(t,s){if(1&t&&(n.Vb(0,"div",H),n.Sb(1,"br"),n.Hc(2,M,2,1,"p",F),n.Vb(3,"div",N),n.Sb(4,"div",R),n.Sb(5,"div",R),n.Sb(6,"div",R),n.Sb(7,"div",R),n.Sb(8,"div",R),n.Tb(),n.Tb()),2&t){const t=n.gc();n.Ac(2),n.mc("ngIf",t.playlist&&t.playlist.tracks&&t.playlist.tracks.length>0)}}const $=[1,"playlists-header"],B=[1,"small","muted","color-type-secondary"],j=[3,"click",4,"ngIf"],X=["class","animated-page",4,"ngIf"],E=[1,"glyph","glyph-edit","small"];function G(t,s){if(1&t){const t=n.Wb();n.Vb(0,"a",O),n.bc("click",(function(s){n.xc(t);const i=n.gc(2);return i.updatePlaylist(i.playlist)})),n.Sb(1,"span",E),n.Tb()}}const K=[1,"glyph","glyph-delete","small"];function z(t,s){if(1&t){const t=n.Wb();n.Vb(0,"a",O),n.bc("click",(function(s){n.xc(t);const i=n.gc(2);return i.removePlaylist(i.playlist)})),n.Sb(1,"span",K),n.Tb()}}const U=[3,"playlist",4,"ngIf"],q=[3,"playlist"];function Q(t,s){if(1&t&&n.Sb(0,"mdb-tracklist",q),2&t){const t=n.gc(3);n.mc("playlist",t.playlist)}}function Y(t,s){if(1&t&&(n.Vb(0,"div",m),n.Hc(1,Q,1,1,"mdb-tracklist",U),n.Tb()),2&t){const t=n.gc(2);n.Ac(1),n.mc("ngIf",!t.loading)}}const Z=[1,"col"],_=["routerLink","/artists"],tt=[1,"glyph","glyph-people"],st=["routerLink","/albums"],it=[1,"glyph","glyph-music-album"],ct=["routerLink","/years"],nt=[1,"glyph","glyph-calendar"];function at(t,s){1&t&&(n.Vb(0,"div",m),n.Vb(1,"div",d),n.Vb(2,"div",Z),n.Vb(3,"p"),n.Jc(4," Unfortunately this playlist is empty :( "),n.Sb(5,"br"),n.Jc(6,"Find some tracks from an "),n.Vb(7,"a",_),n.Sb(8,"span",tt),n.Jc(9," artist"),n.Tb(),n.Jc(10,", "),n.Vb(11,"a",st),n.Sb(12,"span",it),n.Jc(13," album"),n.Tb(),n.Jc(14," or a "),n.Vb(15,"a",ct),n.Sb(16,"span",nt),n.Jc(17," year"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb())}function lt(t,s){if(1&t&&(n.Vb(0,"div",H),n.Vb(1,"h4",$),n.Jc(2),n.Vb(3,"span",B),n.Jc(4),n.Tb(),n.Jc(5," \xa0 "),n.Hc(6,G,2,0,"a",j),n.Jc(7," \xa0 "),n.Hc(8,z,2,0,"a",j),n.Tb(),n.Hc(9,Y,2,1,"div",X),n.Hc(10,at,18,0,"div",X),n.Tb()),2&t){const t=n.gc();n.Ac(2),n.Lc(" ",t.playlist.name," "),n.Ac(4),n.Lc("(",t.playlist.tracks.length,")"),n.Ac(6),n.mc("ngIf",t.playlist.isOwn),n.Ac(8),n.mc("ngIf",t.playlist.isOwn),n.Ac(9),n.mc("ngIf",t.playlist&&t.playlist.tracks&&0!==t.playlist.tracks.length),n.Ac(10),n.mc("ngIf",t.playlist&&t.playlist.tracks&&0===t.playlist.tracks.length)}}const et=["sticky","",1,"header-seperator"],rt=["role","form",3,"ngClass"],ot=["sortForm","ngForm"],bt=[1,"form-group","row"],gt=["for","sort",1,"col-12","col-sm-3","col-form-label"],ht=[1,"col","col-sm-9"],pt=["name","sort","id","sort",1,"form-control",3,"ngModel","ngModelChange"],ft=["name","ngModel"],ut=[4,"ngFor","ngForOf"];function mt(t,s){if(1&t&&(n.Vb(0,"option"),n.Jc(1),n.Tb()),2&t){const t=s.$implicit;n.Ac(1),n.Kc(t.name)}}const yt=function(t){return{"theme-alt":t}};function dt(t,s){if(1&t){const t=n.Wb();n.Vb(0,"div",H),n.Vb(1,"h4",et),n.Jc(2," Select an artist as starting point "),n.Tb(),n.Vb(3,"form",rt,ot),n.Vb(5,"div",bt),n.Vb(6,"label",gt),n.Jc(7,"Select an artist"),n.Tb(),n.Vb(8,"div",ht),n.Vb(9,"select",pt,ft),n.bc("ngModelChange",(function(s){return n.xc(t),n.gc().startingArtistName=s})),n.bc("ngModelChange",(function(s){return n.xc(t),n.gc().onChange(s)})),n.Hc(11,mt,2,1,"option",ut),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=n.gc();n.Ac(3),n.mc("ngClass",n.pc(3,yt,"dark"===t.theme)),n.Ac(9),n.mc("ngModel",t.startingArtistName),n.Ac(11),n.mc("ngForOf",t.artists)}}const kt=[{path:"",component:(()=>{class t{constructor(t,s,i,c,n,a,l){this.pathService=t,this.coreService=s,this.router=i,this.playerService=c,this.lastfmservice=n,this.configService=a,this.playlistService=l,this.loading=!1,this.username=localStorage.getItem("lastfm-username"),this.showStartingArtist=!1,this.ownPlaylists=[],this.artists=[];const e=this.playerService.getCurrentPlaylist();e&&(this.currentPlaylist=e.playlist,this.trackIndex=e.startIndex,this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe(t=>{this.currentPlaylist=t.playlist,this.trackIndex=t.startIndex,this.setTrack()}),this.core=this.coreService.getCore(),this.subscription2=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.theme=a.mode,this.newPlaylist=new p.a}setTrack(){this.track=this.currentPlaylist.tracks[this.trackIndex],this.track&&(this.track.position=0)}ngOnInit(){if(this.pathService.announcePage("Playlists"),this.artists=this.core.artistsList(),this.ownPlaylists=[],localStorage.getItem("customlisttest")){const t=JSON.parse(localStorage.getItem("customlisttest"));t&&t.forEach(t=>{const s=new p.a;s.name=t.name,s.isOwn=!0,t.tracks.forEach(t=>{const i=this.core.getTrackById(t);i&&i.title&&s.tracks.push(i)}),this.ownPlaylists.push(s)})}}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe()}setPlaylist(t){this.loading=!0,this.showStartingArtist=!1,"current"===t?(this.playlist=this.currentPlaylist,this.loading=!1):"last.fm"===t?this.lastfmservice.getLovedTracks(this.username).subscribe(t=>{this.playlist=this.playlistService.extractTracks(t.lovedtracks.track),this.loading=!1}):"random"===t?(this.playlist=this.playlistService.generateRandom(),this.playlist.isContinues=!0,this.playlist.type=t,this.loading=!1):"radio"===t?this.playlist=this.generateRadio():"artist"===t?this.askForStartingArtist():t instanceof p.a?(this.playlist=t,this.loading=!1):console.info("unknown playlist",t)}generateRadio(){this.lastfmservice.getTopArtists(this.username).subscribe(t=>{this.playlist=this.playlistService.extractArtists(t=t.topartists.artist),this.playlist.isContinues=!0,this.playlist.type="radio",this.loading=!1})}onChange(){const t=this.core.getArtistByName(this.startingArtistName),s=new p.a;s.name=`Artist radio for ${t.name}`,s.tracks=[this.playlistService.getRandomTrackFromList([t])],this.showStartingArtist=!1,this.playlist=s,this.getNextSimilairArtist(t,this.playlist)}getNextSimilairArtist(t,s){this.loading=!0,this.lastfmservice.getSimilairArtists(t).subscribe(t=>{t=t.similarartists.artist,this.loading=!1;const i=[];if(t.forEach(t=>{const s=this.core.getArtistByName(t.name);s&&i.push(s)}),i.length>0){const t=this.playlistService.getNextTrackForPlaylist(i,s);t&&s.tracks.length<this.playlistService.numberOfTracksInAPlaylist&&(s.tracks.push(t),this.getNextSimilairArtist(t.artist,s))}})}askForStartingArtist(){this.loading=!1,this.playlist=null,this.showStartingArtist=!0}}return t.ngComponentDef=n.Lb({type:t,selectors:[["app-playlists"]],factory:function(s){return new(s||t)(n.Rb(h.a),n.Rb(b.a),n.Rb(e.c),n.Rb(r.a),n.Rb(g.a),n.Rb(o.a),n.Rb(f.a))},consts:22,vars:8,template:function(t,s){1&t&&(n.Vb(0,"div",m),n.Vb(1,"div",y),n.Vb(2,"div",d),n.Vb(3,"div",k),n.Vb(4,"h4"),n.Jc(5,"Playlists"),n.Tb(),n.Vb(6,"ul",v),n.Hc(7,w,3,0,"li",T),n.Vb(8,"li",S),n.Hc(9,x,2,0,"a",A),n.Tb(),n.Vb(10,"li",S),n.Vb(11,"a",V),n.bc("click",(function(t){return s.setPlaylist("random")})),n.Jc(12),n.Tb(),n.Tb(),n.Vb(13,"li",S),n.Hc(14,J,2,1,"a",A),n.Tb(),n.Vb(15,"li",S),n.Vb(16,"a",V),n.bc("click",(function(t){return s.setPlaylist("artist")})),n.Jc(17,"Artist radio"),n.Tb(),n.Tb(),n.Hc(18,C,5,1,"li",I),n.Tb(),n.Tb(),n.Hc(19,W,9,1,"div",P),n.Hc(20,lt,11,6,"div",P),n.Hc(21,dt,12,5,"div",P),n.Tb(),n.Tb(),n.Tb()),2&t&&(n.Ac(7),n.mc("ngIf",s.currentPlaylist),n.Ac(9),n.mc("ngIf",s.username&&"mdb-skipped"!==s.username),n.Ac(12),n.Lc("",s.playlistService.numberOfTracksInAPlaylist," random tracks"),n.Ac(14),n.mc("ngIf",s.username&&"mdb-skipped"!==s.username),n.Ac(18),n.mc("ngForOf",s.ownPlaylists),n.Ac(19),n.mc("ngIf",s.loading),n.Ac(20),n.mc("ngIf",s.playlist&&!s.loading&&!s.showStartingArtist),n.Ac(21),n.mc("ngIf",s.showStartingArtist&&!s.loading&&!s.playlist))},directives:[c.l,c.k,u.a,e.d,a.p,a.g,a.h,c.j,a.n,a.f,a.i,a.j,a.o],encapsulation:2}),t})()}];let vt=(()=>{class t{}return t.ngModuleDef=n.Pb({type:t}),t.ngInjectorDef=n.Ob({factory:function(s){return new(s||t)},imports:[[e.e.forChild(kt)],e.e]}),t.ngLocaleIdDef="en-GB",t})();e.e.forChild(kt),i.d(s,"PlaylistsModule",(function(){return Tt}));let Tt=(()=>{class t{}return t.ngModuleDef=n.Pb({type:t}),t.ngInjectorDef=n.Ob({factory:function(s){return new(s||t)},imports:[[c.c,vt,l.a,a.b]]}),t.ngLocaleIdDef="en-GB",t})()}}]);