(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kez3:function(t,s,i){"use strict";i.r(s);var a=i("ofXK"),n=i("3Pt+"),l=i("hDf6"),c=i("tyNb"),r=i("ufXC"),e=i("OgP6"),o=i("ktVm"),b=i("t083"),h=i("XtVx"),p=i("KI15"),f=i("Gcu2"),u=i("fXoL"),g=i("Oz9T");function y(t,s){if(1&t){const t=u.Ob();u.Nb(0,"li",6),u.Nb(1,"a",8),u.Vb("click",(function(){return u.oc(t),u.Zb().setPlaylist("current")})),u.sc(2,"Current playlist"),u.Mb(),u.Mb()}}function d(t,s){if(1&t){const t=u.Ob();u.Nb(0,"a",8),u.Vb("click",(function(){return u.oc(t),u.Zb().setPlaylist("last.fm")})),u.sc(1,"Loved tracks on last.fm"),u.Mb()}}function m(t,s){if(1&t){const t=u.Ob();u.Nb(0,"a",8),u.Vb("click",(function(){return u.oc(t),u.Zb().setPlaylist("radio")})),u.sc(1),u.Mb()}if(2&t){const t=u.Zb();u.zb(1),u.uc("",t.playlistService.numberOfTracksInAPlaylist," tracks by preference")}}function k(t,s){if(1&t){const t=u.Ob();u.Nb(0,"li",6),u.Nb(1,"a",11),u.Vb("click",(function(){u.oc(t);const i=s.$implicit;return u.Zb().setPlaylist(i)})),u.sc(2),u.Nb(3,"a",11),u.Vb("click",(function(){u.oc(t);const i=s.$implicit;return u.Zb().removePlaylist(i)})),u.Lb(4,"span",12),u.Mb(),u.Mb(),u.Mb()}if(2&t){const t=s.$implicit;u.zb(2),u.uc("",t.name," ")}}function v(t,s){if(1&t&&(u.Nb(0,"p",17),u.sc(1),u.Mb()),2&t){const t=u.Zb(2);u.zb(1),u.uc("Tracks found: ",t.playlist.tracks.length,"")}}function N(t,s){if(1&t&&(u.Nb(0,"div",13),u.Lb(1,"br"),u.rc(2,v,2,1,"p",14),u.Nb(3,"div",15),u.Lb(4,"div",16),u.Lb(5,"div",16),u.Lb(6,"div",16),u.Lb(7,"div",16),u.Lb(8,"div",16),u.Mb(),u.Mb()),2&t){const t=u.Zb();u.zb(2),u.fc("ngIf",t.playlist&&t.playlist.tracks&&t.playlist.tracks.length>0)}}function M(t,s){if(1&t){const t=u.Ob();u.Nb(0,"a",11),u.Vb("click",(function(){u.oc(t);const s=u.Zb(2);return s.updatePlaylist(s.playlist)})),u.Lb(1,"span",22),u.Mb()}}function I(t,s){if(1&t){const t=u.Ob();u.Nb(0,"a",11),u.Vb("click",(function(){u.oc(t);const s=u.Zb(2);return s.removePlaylist(s.playlist)})),u.Lb(1,"span",23),u.Mb()}}function S(t,s){if(1&t&&u.Lb(0,"mdb-tracklist",25),2&t){const t=u.Zb(3);u.fc("playlist",t.playlist)}}function P(t,s){if(1&t&&(u.Nb(0,"div",0),u.rc(1,S,1,1,"mdb-tracklist",24),u.Mb()),2&t){const t=u.Zb(2);u.zb(1),u.fc("ngIf",!t.loading)}}function w(t,s){1&t&&(u.Nb(0,"div",0),u.Nb(1,"div",2),u.Nb(2,"div",26),u.Nb(3,"p"),u.sc(4," Unfortunately this playlist is empty :( "),u.Lb(5,"br"),u.sc(6,"Find some tracks from an "),u.Nb(7,"a",27),u.Lb(8,"span",28),u.sc(9," artist"),u.Mb(),u.sc(10,", "),u.Nb(11,"a",29),u.Lb(12,"span",30),u.sc(13," album"),u.Mb(),u.sc(14," or a "),u.Nb(15,"a",31),u.Lb(16,"span",32),u.sc(17," year"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb())}function z(t,s){if(1&t&&(u.Nb(0,"div",13),u.Nb(1,"h4",18),u.sc(2),u.Nb(3,"span",19),u.sc(4),u.Mb(),u.sc(5," \xa0 "),u.rc(6,M,2,0,"a",20),u.sc(7," \xa0 "),u.rc(8,I,2,0,"a",20),u.Mb(),u.rc(9,P,2,1,"div",21),u.rc(10,w,18,0,"div",21),u.Mb()),2&t){const t=u.Zb();u.zb(2),u.uc(" ",t.playlist.name," "),u.zb(2),u.uc("(",t.playlist.tracks.length,")"),u.zb(2),u.fc("ngIf",t.playlist.isOwn),u.zb(2),u.fc("ngIf",t.playlist.isOwn),u.zb(1),u.fc("ngIf",t.playlist&&t.playlist.tracks&&0!==t.playlist.tracks.length),u.zb(1),u.fc("ngIf",t.playlist&&t.playlist.tracks&&0===t.playlist.tracks.length)}}function A(t,s){if(1&t&&(u.Nb(0,"option"),u.sc(1),u.Mb()),2&t){const t=s.$implicit;u.zb(1),u.tc(t.name)}}const O=function(t){return{"theme-alt":t}};function L(t,s){if(1&t){const t=u.Ob();u.Nb(0,"div",13),u.Nb(1,"h4",33),u.sc(2," Select an artist as starting point "),u.Mb(),u.Nb(3,"form",34,35),u.Nb(5,"div",36),u.Nb(6,"label",37),u.sc(7,"Select an artist"),u.Mb(),u.Nb(8,"div",38),u.Nb(9,"select",39,40),u.Vb("ngModelChange",(function(s){return u.oc(t),u.Zb().startingArtistName=s}))("ngModelChange",(function(s){return u.oc(t),u.Zb().onChange(s)})),u.rc(11,A,2,1,"option",41),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb()}if(2&t){const t=u.Zb();u.zb(3),u.fc("ngClass",u.ic(3,O,"dark"===t.theme)),u.zb(6),u.fc("ngModel",t.startingArtistName),u.zb(2),u.fc("ngForOf",t.artists)}}const x=[{path:"",component:(()=>{class t{constructor(t,s,i,a,n,l,c){this.pathService=t,this.coreService=s,this.router=i,this.playerService=a,this.lastfmservice=n,this.configService=l,this.playlistService=c,this.loading=!1,this.username=localStorage.getItem("lastfm-username"),this.showStartingArtist=!1,this.ownPlaylists=[],this.artists=[];const r=this.playerService.getCurrentPlaylist();r&&(this.currentPlaylist=r.playlist,this.trackIndex=r.startIndex,this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe(t=>{this.currentPlaylist=t.playlist,this.trackIndex=t.startIndex,this.setTrack()}),this.core=this.coreService.getCore(),this.subscription2=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.theme=l.mode,this.newPlaylist=new p.a}setTrack(){this.track=this.currentPlaylist.tracks[this.trackIndex],this.track&&(this.track.position=0)}ngOnInit(){if(this.pathService.announcePage("Playlists"),this.artists=this.core.artistsList(),this.ownPlaylists=[],localStorage.getItem("customlisttest")){const t=JSON.parse(localStorage.getItem("customlisttest"));t&&t.forEach(t=>{const s=new p.a;s.name=t.name,s.isOwn=!0,t.tracks.forEach(t=>{const i=this.core.getTrackById(t);i&&i.title&&s.tracks.push(i)}),this.ownPlaylists.push(s)})}}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe()}setPlaylist(t){this.loading=!0,this.showStartingArtist=!1,"current"===t?(this.playlist=this.currentPlaylist,this.loading=!1):"last.fm"===t?this.lastfmservice.getLovedTracks(this.username).subscribe(t=>{this.playlist=this.playlistService.extractTracks(t.lovedtracks.track),this.loading=!1}):"random"===t?(this.playlist=this.playlistService.generateRandom(),this.playlist.isContinues=!0,this.playlist.type=t,this.loading=!1):"radio"===t?this.playlist=this.generateRadio():"artist"===t?this.askForStartingArtist():t instanceof p.a?(this.playlist=t,this.loading=!1):console.info("unknown playlist",t)}generateRadio(){this.lastfmservice.getTopArtists(this.username).subscribe(t=>{this.playlist=this.playlistService.extractArtists(t=t.topartists.artist),this.playlist.isContinues=!0,this.playlist.type="radio",this.loading=!1})}onChange(){const t=this.core.getArtistByName(this.startingArtistName),s=new p.a;s.name=`Artist radio for ${t.name}`,s.tracks=[this.playlistService.getRandomTrackFromList([t])],this.showStartingArtist=!1,this.playlist=s,this.getNextSimilairArtist(t,this.playlist)}getNextSimilairArtist(t,s){this.loading=!0,this.lastfmservice.getSimilairArtists(t).subscribe(t=>{t=t.similarartists.artist,this.loading=!1;const i=[];if(t.forEach(t=>{const s=this.core.getArtistByName(t.name);s&&i.push(s)}),i.length>0){const t=this.playlistService.getNextTrackForPlaylist(i,s);t&&s.tracks.length<this.playlistService.numberOfTracksInAPlaylist&&(s.tracks.push(t),this.getNextSimilairArtist(t.artist,s))}})}askForStartingArtist(){this.loading=!1,this.playlist=null,this.showStartingArtist=!0}}return t.\u0275fac=function(s){return new(s||t)(u.Kb(h.a),u.Kb(o.a),u.Kb(c.c),u.Kb(r.a),u.Kb(b.a),u.Kb(e.a),u.Kb(f.a))},t.\u0275cmp=u.Eb({type:t,selectors:[["app-playlists"]],decls:22,vars:8,consts:[[1,"animated-page"],[1,"container"],[1,"row"],[1,"col-12","col-lg-3","playlists-lg-fixed"],[1,"nav","flex-column"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["class","btn btn-link px-0",3,"click",4,"ngIf"],[1,"btn","btn-link","px-0",3,"click"],["class","nav-item",4,"ngFor","ngForOf"],["class","col-12 col-lg-9 offset-lg-3",4,"ngIf"],[3,"click"],[1,"glyph","glyph-delete"],[1,"col-12","col-lg-9","offset-lg-3"],["class","small muted",4,"ngIf"],[1,"progress-bar"],[1,"progress-circle"],[1,"small","muted"],[1,"playlists-header"],[1,"small","muted","color-type-secondary"],[3,"click",4,"ngIf"],["class","animated-page",4,"ngIf"],[1,"glyph","glyph-edit","small"],[1,"glyph","glyph-delete","small"],[3,"playlist",4,"ngIf"],[3,"playlist"],[1,"col"],["routerLink","/artists"],[1,"glyph","glyph-people"],["routerLink","/albums"],[1,"glyph","glyph-music-album"],["routerLink","/years"],[1,"glyph","glyph-calendar"],["sticky","",1,"header-seperator"],["role","form",3,"ngClass"],["sortForm","ngForm"],[1,"form-group","row"],["for","sort",1,"col-12","col-sm-3","col-form-label"],[1,"col","col-sm-9"],["name","sort","id","sort",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],[4,"ngFor","ngForOf"]],template:function(t,s){1&t&&(u.Nb(0,"div",0),u.Nb(1,"div",1),u.Nb(2,"div",2),u.Nb(3,"div",3),u.Nb(4,"h4"),u.sc(5,"Playlists"),u.Mb(),u.Nb(6,"ul",4),u.rc(7,y,3,0,"li",5),u.Nb(8,"li",6),u.rc(9,d,2,0,"a",7),u.Mb(),u.Nb(10,"li",6),u.Nb(11,"a",8),u.Vb("click",(function(){return s.setPlaylist("random")})),u.sc(12),u.Mb(),u.Mb(),u.Nb(13,"li",6),u.rc(14,m,2,1,"a",7),u.Mb(),u.Nb(15,"li",6),u.Nb(16,"a",8),u.Vb("click",(function(){return s.setPlaylist("artist")})),u.sc(17,"Artist radio"),u.Mb(),u.Mb(),u.rc(18,k,5,1,"li",9),u.Mb(),u.Mb(),u.rc(19,N,9,1,"div",10),u.rc(20,z,11,6,"div",10),u.rc(21,L,12,5,"div",10),u.Mb(),u.Mb(),u.Mb()),2&t&&(u.zb(7),u.fc("ngIf",s.currentPlaylist),u.zb(2),u.fc("ngIf",s.username&&"mdb-skipped"!==s.username),u.zb(3),u.uc("",s.playlistService.numberOfTracksInAPlaylist," random tracks"),u.zb(2),u.fc("ngIf",s.username&&"mdb-skipped"!==s.username),u.zb(4),u.fc("ngForOf",s.ownPlaylists),u.zb(1),u.fc("ngIf",s.loading),u.zb(1),u.fc("ngIf",s.playlist&&!s.loading&&!s.showStartingArtist),u.zb(1),u.fc("ngIf",s.showStartingArtist&&!s.loading&&!s.playlist))},directives:[a.k,a.j,g.a,c.d,n.m,n.d,n.e,a.i,n.k,n.c,n.f,n.g,n.l],encapsulation:2}),t})()}];let Z=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(s){return new(s||t)},imports:[[c.e.forChild(x)],c.e]}),t})();i.d(s,"PlaylistsModule",(function(){return C}));let C=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(s){return new(s||t)},imports:[[a.b,Z,l.a,n.b]]}),t})()}}]);