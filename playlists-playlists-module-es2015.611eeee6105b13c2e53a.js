(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kez3:function(t,i,s){"use strict";s.r(i),s.d(i,"PlaylistsModule",(function(){return F}));var a=s("ofXK"),l=s("3Pt+"),c=s("hDf6"),n=s("tyNb"),e=s("ufXC"),r=s("OgP6"),o=s("ktVm"),b=s("t083"),p=s("XtVx"),h=s("KI15"),g=s("Gcu2"),u=s("fXoL"),f=s("Oz9T");function y(t,i){if(1&t){const t=u.Mb();u.Lb(0,"li",6),u.Lb(1,"a",8),u.Sb("click",(function(){return u.lc(t),u.Wb().setPlaylist("current")})),u.pc(2,"Current playlist"),u.Kb(),u.Kb()}}function d(t,i){if(1&t){const t=u.Mb();u.Lb(0,"a",8),u.Sb("click",(function(){return u.lc(t),u.Wb().setPlaylist("last.fm")})),u.pc(1,"Loved tracks on last.fm"),u.Kb()}}function m(t,i){if(1&t){const t=u.Mb();u.Lb(0,"a",8),u.Sb("click",(function(){return u.lc(t),u.Wb().setPlaylist("radio")})),u.pc(1),u.Kb()}if(2&t){const t=u.Wb();u.xb(1),u.rc("",t.playlistService.numberOfTracksInAPlaylist," tracks by preference")}}function k(t,i){if(1&t){const t=u.Mb();u.Lb(0,"li",6),u.Lb(1,"a",11),u.Sb("click",(function(){u.lc(t);const s=i.$implicit;return u.Wb().setPlaylist(s)})),u.pc(2),u.Lb(3,"a",11),u.Sb("click",(function(){u.lc(t);const s=i.$implicit;return u.Wb().removePlaylist(s)})),u.Jb(4,"span",12),u.Kb(),u.Kb(),u.Kb()}if(2&t){const t=i.$implicit;u.xb(2),u.rc("",t.name," ")}}function v(t,i){if(1&t&&(u.Lb(0,"p",17),u.pc(1),u.Kb()),2&t){const t=u.Wb(2);u.xb(1),u.rc("Tracks found: ",t.playlist.tracks.length,"")}}function L(t,i){if(1&t&&(u.Lb(0,"div",13),u.Jb(1,"br"),u.oc(2,v,2,1,"p",14),u.Lb(3,"div",15),u.Jb(4,"div",16),u.Jb(5,"div",16),u.Jb(6,"div",16),u.Jb(7,"div",16),u.Jb(8,"div",16),u.Kb(),u.Kb()),2&t){const t=u.Wb();u.xb(2),u.cc("ngIf",t.playlist&&t.playlist.tracks&&t.playlist.tracks.length>0)}}function K(t,i){if(1&t){const t=u.Mb();u.Lb(0,"a",11),u.Sb("click",(function(){u.lc(t);const i=u.Wb(2);return i.updatePlaylist(i.playlist)})),u.Jb(1,"span",22),u.Kb()}}function S(t,i){if(1&t){const t=u.Mb();u.Lb(0,"a",11),u.Sb("click",(function(){u.lc(t);const i=u.Wb(2);return i.removePlaylist(i.playlist)})),u.Jb(1,"span",23),u.Kb()}}function I(t,i){if(1&t&&u.Jb(0,"mdb-tracklist",25),2&t){const t=u.Wb(3);u.cc("playlist",t.playlist)}}function x(t,i){if(1&t&&(u.Lb(0,"div",0),u.oc(1,I,1,1,"mdb-tracklist",24),u.Kb()),2&t){const t=u.Wb(2);u.xb(1),u.cc("ngIf",!t.loading)}}function P(t,i){1&t&&(u.Lb(0,"div",0),u.Lb(1,"div",2),u.Lb(2,"div",26),u.Lb(3,"p"),u.pc(4," Unfortunately this playlist is empty :( "),u.Jb(5,"br"),u.pc(6,"Find some tracks from an "),u.Lb(7,"a",27),u.Jb(8,"span",28),u.pc(9," artist"),u.Kb(),u.pc(10,", "),u.Lb(11,"a",29),u.Jb(12,"span",30),u.pc(13," album"),u.Kb(),u.pc(14," or a "),u.Lb(15,"a",31),u.Jb(16,"span",32),u.pc(17," year"),u.Kb(),u.Kb(),u.Kb(),u.Kb(),u.Kb())}function w(t,i){if(1&t&&(u.Lb(0,"div",13),u.Lb(1,"h4",18),u.pc(2),u.Lb(3,"span",19),u.pc(4),u.Kb(),u.pc(5," \xa0 "),u.oc(6,K,2,0,"a",20),u.pc(7," \xa0 "),u.oc(8,S,2,0,"a",20),u.Kb(),u.oc(9,x,2,1,"div",21),u.oc(10,P,18,0,"div",21),u.Kb()),2&t){const t=u.Wb();u.xb(2),u.rc(" ",t.playlist.name," "),u.xb(2),u.rc("(",t.playlist.tracks.length,")"),u.xb(2),u.cc("ngIf",t.playlist.isOwn),u.xb(2),u.cc("ngIf",t.playlist.isOwn),u.xb(1),u.cc("ngIf",t.playlist&&t.playlist.tracks&&0!==t.playlist.tracks.length),u.xb(1),u.cc("ngIf",t.playlist&&t.playlist.tracks&&0===t.playlist.tracks.length)}}function A(t,i){if(1&t&&(u.Lb(0,"option"),u.pc(1),u.Kb()),2&t){const t=i.$implicit;u.xb(1),u.qc(t.name)}}const J=function(t){return{"theme-alt":t}};function O(t,i){if(1&t){const t=u.Mb();u.Lb(0,"div",13),u.Lb(1,"h4",33),u.pc(2," Select an artist as starting point "),u.Kb(),u.Lb(3,"form",34,35),u.Lb(5,"div",36),u.Lb(6,"label",37),u.pc(7,"Select an artist"),u.Kb(),u.Lb(8,"div",38),u.Lb(9,"select",39,40),u.Sb("ngModelChange",(function(i){return u.lc(t),u.Wb().startingArtistName=i}))("ngModelChange",(function(i){return u.lc(t),u.Wb().onChange(i)})),u.oc(11,A,2,1,"option",41),u.Kb(),u.Kb(),u.Kb(),u.Kb(),u.Kb()}if(2&t){const t=u.Wb();u.xb(3),u.cc("ngClass",u.fc(3,J,"dark"===t.theme)),u.xb(6),u.cc("ngModel",t.startingArtistName),u.xb(2),u.cc("ngForOf",t.artists)}}const W=[{path:"",component:(()=>{class t{constructor(t,i,s,a,l,c,n){this.pathService=t,this.coreService=i,this.router=s,this.playerService=a,this.lastfmservice=l,this.configService=c,this.playlistService=n,this.loading=!1,this.username=localStorage.getItem("lastfm-username"),this.showStartingArtist=!1,this.ownPlaylists=[],this.artists=[];const e=this.playerService.getCurrentPlaylist();e&&(this.currentPlaylist=e.playlist,this.trackIndex=e.startIndex,this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe(t=>{this.currentPlaylist=t.playlist,this.trackIndex=t.startIndex,this.setTrack()}),this.core=this.coreService.getCore(),this.subscription2=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.theme=c.mode,this.newPlaylist=new h.a}setTrack(){this.track=this.currentPlaylist.tracks[this.trackIndex],this.track&&(this.track.position=0)}ngOnInit(){if(this.pathService.announcePage("Playlists"),this.artists=this.core.artistsList(),this.ownPlaylists=[],localStorage.getItem("customlisttest")){const t=JSON.parse(localStorage.getItem("customlisttest"));t&&t.forEach(t=>{const i=new h.a;i.name=t.name,i.isOwn=!0,t.tracks.forEach(t=>{const s=this.core.getTrackById(t);s&&s.title&&i.tracks.push(s)}),this.ownPlaylists.push(i)})}}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe()}setPlaylist(t){this.loading=!0,this.showStartingArtist=!1,"current"===t?(this.playlist=this.currentPlaylist,this.loading=!1):"last.fm"===t?this.lastfmservice.getLovedTracks(this.username).subscribe(t=>{this.playlist=this.playlistService.extractTracks(t.lovedtracks.track),this.loading=!1}):"random"===t?(this.playlist=this.playlistService.generateRandom(),this.playlist.isContinues=!0,this.playlist.type=t,this.loading=!1):"radio"===t?this.playlist=this.generateRadio():"artist"===t?this.askForStartingArtist():t instanceof h.a?(this.playlist=t,this.loading=!1):console.info("unknown playlist",t)}generateRadio(){this.lastfmservice.getTopArtists(this.username).subscribe(t=>{this.playlist=this.playlistService.extractArtists(t=t.topartists.artist),this.playlist.isContinues=!0,this.playlist.type="radio",this.loading=!1})}onChange(){const t=this.core.getArtistByName(this.startingArtistName),i=new h.a;i.name="Artist radio for "+t.name,i.tracks=[this.playlistService.getRandomTrackFromList([t])],this.showStartingArtist=!1,this.playlist=i,this.getNextSimilairArtist(t,this.playlist)}getNextSimilairArtist(t,i){this.loading=!0,this.lastfmservice.getSimilairArtists(t).subscribe(t=>{t=t.similarartists.artist,this.loading=!1;const s=[];if(t.forEach(t=>{const i=this.core.getArtistByName(t.name);i&&s.push(i)}),s.length>0){const t=this.playlistService.getNextTrackForPlaylist(s,i);t&&i.tracks.length<this.playlistService.numberOfTracksInAPlaylist&&(i.tracks.push(t),this.getNextSimilairArtist(t.artist,i))}})}askForStartingArtist(){this.loading=!1,this.playlist=null,this.showStartingArtist=!0}}return t.\u0275fac=function(i){return new(i||t)(u.Ib(p.a),u.Ib(o.a),u.Ib(n.c),u.Ib(e.a),u.Ib(b.a),u.Ib(r.a),u.Ib(g.a))},t.\u0275cmp=u.Cb({type:t,selectors:[["app-playlists"]],decls:22,vars:8,consts:[[1,"animated-page"],[1,"container"],[1,"row"],[1,"col-12","col-lg-3","playlists-lg-fixed"],[1,"nav","flex-column"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["class","btn btn-link px-0",3,"click",4,"ngIf"],[1,"btn","btn-link","px-0",3,"click"],["class","nav-item",4,"ngFor","ngForOf"],["class","col-12 col-lg-9 offset-lg-3",4,"ngIf"],[3,"click"],[1,"glyph","glyph-delete"],[1,"col-12","col-lg-9","offset-lg-3"],["class","small muted",4,"ngIf"],[1,"progress-bar"],[1,"progress-circle"],[1,"small","muted"],[1,"playlists-header"],[1,"small","muted","color-type-secondary"],[3,"click",4,"ngIf"],["class","animated-page",4,"ngIf"],[1,"glyph","glyph-edit","small"],[1,"glyph","glyph-delete","small"],[3,"playlist",4,"ngIf"],[3,"playlist"],[1,"col"],["routerLink","/artists"],[1,"glyph","glyph-people"],["routerLink","/albums"],[1,"glyph","glyph-music-album"],["routerLink","/years"],[1,"glyph","glyph-calendar"],["sticky","",1,"header-seperator"],["role","form",3,"ngClass"],["sortForm","ngForm"],[1,"form-group","row"],["for","sort",1,"col-12","col-sm-3","col-form-label"],[1,"col","col-sm-9"],["name","sort","id","sort",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(u.Lb(0,"div",0),u.Lb(1,"div",1),u.Lb(2,"div",2),u.Lb(3,"div",3),u.Lb(4,"h4"),u.pc(5,"Playlists"),u.Kb(),u.Lb(6,"ul",4),u.oc(7,y,3,0,"li",5),u.Lb(8,"li",6),u.oc(9,d,2,0,"a",7),u.Kb(),u.Lb(10,"li",6),u.Lb(11,"a",8),u.Sb("click",(function(){return i.setPlaylist("random")})),u.pc(12),u.Kb(),u.Kb(),u.Lb(13,"li",6),u.oc(14,m,2,1,"a",7),u.Kb(),u.Lb(15,"li",6),u.Lb(16,"a",8),u.Sb("click",(function(){return i.setPlaylist("artist")})),u.pc(17,"Artist radio"),u.Kb(),u.Kb(),u.oc(18,k,5,1,"li",9),u.Kb(),u.Kb(),u.oc(19,L,9,1,"div",10),u.oc(20,w,11,6,"div",10),u.oc(21,O,12,5,"div",10),u.Kb(),u.Kb(),u.Kb()),2&t&&(u.xb(7),u.cc("ngIf",i.currentPlaylist),u.xb(2),u.cc("ngIf",i.username&&"mdb-skipped"!==i.username),u.xb(3),u.rc("",i.playlistService.numberOfTracksInAPlaylist," random tracks"),u.xb(2),u.cc("ngIf",i.username&&"mdb-skipped"!==i.username),u.xb(4),u.cc("ngForOf",i.ownPlaylists),u.xb(1),u.cc("ngIf",i.loading),u.xb(1),u.cc("ngIf",i.playlist&&!i.loading&&!i.showStartingArtist),u.xb(1),u.cc("ngIf",i.showStartingArtist&&!i.loading&&!i.playlist))},directives:[a.k,a.j,f.a,n.d,l.m,l.d,l.e,a.i,l.k,l.c,l.f,l.g,l.l],encapsulation:2}),t})()}];let C=(()=>{class t{}return t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({factory:function(i){return new(i||t)},imports:[[n.e.forChild(W)],n.e]}),t})(),F=(()=>{class t{}return t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({factory:function(i){return new(i||t)},imports:[[a.b,C,c.a,l.b]]}),t})()}}]);