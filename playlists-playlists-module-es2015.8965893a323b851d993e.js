(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kez3:function(t,i,s){"use strict";s.r(i);var a=s("ofXK"),c=s("3Pt+"),n=s("hDf6"),l=s("tyNb"),r=s("ufXC"),e=s("OgP6"),o=s("ktVm"),b=s("t083"),g=s("XtVx"),h=s("KI15"),p=s("Gcu2"),u=s("fXoL"),f=s("Oz9T");function y(t,i){if(1&t){const t=u.Pb();u.Ob(0,"li",6),u.Ob(1,"a",8),u.Wb("click",(function(i){return u.rc(t),u.ac().setPlaylist("current")})),u.zc(2,"Current playlist"),u.Nb(),u.Nb()}}function d(t,i){if(1&t){const t=u.Pb();u.Ob(0,"a",8),u.Wb("click",(function(i){return u.rc(t),u.ac().setPlaylist("last.fm")})),u.zc(1,"Loved tracks on last.fm"),u.Nb()}}function m(t,i){if(1&t){const t=u.Pb();u.Ob(0,"a",8),u.Wb("click",(function(i){return u.rc(t),u.ac().setPlaylist("radio")})),u.zc(1),u.Nb()}if(2&t){const t=u.ac();u.zb(1),u.Bc("",t.playlistService.numberOfTracksInAPlaylist," tracks by preference")}}function k(t,i){if(1&t){const t=u.Pb();u.Ob(0,"li",6),u.Ob(1,"a",11),u.Wb("click",(function(s){u.rc(t);const a=i.$implicit;return u.ac().setPlaylist(a)})),u.zc(2),u.Ob(3,"a",11),u.Wb("click",(function(s){u.rc(t);const a=i.$implicit;return u.ac().removePlaylist(a)})),u.Mb(4,"span",12),u.Nb(),u.Nb(),u.Nb()}if(2&t){const t=i.$implicit;u.zb(2),u.Bc("",t.name," ")}}function O(t,i){if(1&t&&(u.Ob(0,"p",17),u.zc(1),u.Nb()),2&t){const t=u.ac(2);u.zb(1),u.Bc("Tracks found: ",t.playlist.tracks.length,"")}}function v(t,i){if(1&t&&(u.Ob(0,"div",13),u.Mb(1,"br"),u.xc(2,O,2,1,"p",14),u.Ob(3,"div",15),u.Mb(4,"div",16),u.Mb(5,"div",16),u.Mb(6,"div",16),u.Mb(7,"div",16),u.Mb(8,"div",16),u.Nb(),u.Nb()),2&t){const t=u.ac();u.zb(2),u.gc("ngIf",t.playlist&&t.playlist.tracks&&t.playlist.tracks.length>0)}}function N(t,i){if(1&t){const t=u.Pb();u.Ob(0,"a",11),u.Wb("click",(function(i){u.rc(t);const s=u.ac(2);return s.updatePlaylist(s.playlist)})),u.Mb(1,"span",22),u.Nb()}}function z(t,i){if(1&t){const t=u.Pb();u.Ob(0,"a",11),u.Wb("click",(function(i){u.rc(t);const s=u.ac(2);return s.removePlaylist(s.playlist)})),u.Mb(1,"span",23),u.Nb()}}function P(t,i){if(1&t&&u.Mb(0,"mdb-tracklist",25),2&t){const t=u.ac(3);u.gc("playlist",t.playlist)}}function I(t,i){if(1&t&&(u.Ob(0,"div",0),u.xc(1,P,1,1,"mdb-tracklist",24),u.Nb()),2&t){const t=u.ac(2);u.zb(1),u.gc("ngIf",!t.loading)}}function S(t,i){1&t&&(u.Ob(0,"div",0),u.Ob(1,"div",2),u.Ob(2,"div",26),u.Ob(3,"p"),u.zc(4," Unfortunately this playlist is empty :( "),u.Mb(5,"br"),u.zc(6,"Find some tracks from an "),u.Ob(7,"a",27),u.Mb(8,"span",28),u.zc(9," artist"),u.Nb(),u.zc(10,", "),u.Ob(11,"a",29),u.Mb(12,"span",30),u.zc(13," album"),u.Nb(),u.zc(14," or a "),u.Ob(15,"a",31),u.Mb(16,"span",32),u.zc(17," year"),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb())}function x(t,i){if(1&t&&(u.Ob(0,"div",13),u.Ob(1,"h4",18),u.zc(2),u.Ob(3,"span",19),u.zc(4),u.Nb(),u.zc(5," \xa0 "),u.xc(6,N,2,0,"a",20),u.zc(7," \xa0 "),u.xc(8,z,2,0,"a",20),u.Nb(),u.xc(9,I,2,1,"div",21),u.xc(10,S,18,0,"div",21),u.Nb()),2&t){const t=u.ac();u.zb(2),u.Bc(" ",t.playlist.name," "),u.zb(2),u.Bc("(",t.playlist.tracks.length,")"),u.zb(2),u.gc("ngIf",t.playlist.isOwn),u.zb(2),u.gc("ngIf",t.playlist.isOwn),u.zb(1),u.gc("ngIf",t.playlist&&t.playlist.tracks&&0!==t.playlist.tracks.length),u.zb(1),u.gc("ngIf",t.playlist&&t.playlist.tracks&&0===t.playlist.tracks.length)}}function w(t,i){if(1&t&&(u.Ob(0,"option"),u.zc(1),u.Nb()),2&t){const t=i.$implicit;u.zb(1),u.Ac(t.name)}}const A=function(t){return{"theme-alt":t}};function M(t,i){if(1&t){const t=u.Pb();u.Ob(0,"div",13),u.Ob(1,"h4",33),u.zc(2," Select an artist as starting point "),u.Nb(),u.Ob(3,"form",34,35),u.Ob(5,"div",36),u.Ob(6,"label",37),u.zc(7,"Select an artist"),u.Nb(),u.Ob(8,"div",38),u.Ob(9,"select",39,40),u.Wb("ngModelChange",(function(i){return u.rc(t),u.ac().startingArtistName=i}))("ngModelChange",(function(i){return u.rc(t),u.ac().onChange(i)})),u.xc(11,w,2,1,"option",41),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb()}if(2&t){const t=u.ac();u.zb(3),u.gc("ngClass",u.jc(3,A,"dark"===t.theme)),u.zb(6),u.gc("ngModel",t.startingArtistName),u.zb(2),u.gc("ngForOf",t.artists)}}const L=[{path:"",component:(()=>{class t{constructor(t,i,s,a,c,n,l){this.pathService=t,this.coreService=i,this.router=s,this.playerService=a,this.lastfmservice=c,this.configService=n,this.playlistService=l,this.loading=!1,this.username=localStorage.getItem("lastfm-username"),this.showStartingArtist=!1,this.ownPlaylists=[],this.artists=[];const r=this.playerService.getCurrentPlaylist();r&&(this.currentPlaylist=r.playlist,this.trackIndex=r.startIndex,this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe(t=>{this.currentPlaylist=t.playlist,this.trackIndex=t.startIndex,this.setTrack()}),this.core=this.coreService.getCore(),this.subscription2=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.theme=n.mode,this.newPlaylist=new h.a}setTrack(){this.track=this.currentPlaylist.tracks[this.trackIndex],this.track&&(this.track.position=0)}ngOnInit(){if(this.pathService.announcePage("Playlists"),this.artists=this.core.artistsList(),this.ownPlaylists=[],localStorage.getItem("customlisttest")){const t=JSON.parse(localStorage.getItem("customlisttest"));t&&t.forEach(t=>{const i=new h.a;i.name=t.name,i.isOwn=!0,t.tracks.forEach(t=>{const s=this.core.getTrackById(t);s&&s.title&&i.tracks.push(s)}),this.ownPlaylists.push(i)})}}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe()}setPlaylist(t){this.loading=!0,this.showStartingArtist=!1,"current"===t?(this.playlist=this.currentPlaylist,this.loading=!1):"last.fm"===t?this.lastfmservice.getLovedTracks(this.username).subscribe(t=>{this.playlist=this.playlistService.extractTracks(t.lovedtracks.track),this.loading=!1}):"random"===t?(this.playlist=this.playlistService.generateRandom(),this.playlist.isContinues=!0,this.playlist.type=t,this.loading=!1):"radio"===t?this.playlist=this.generateRadio():"artist"===t?this.askForStartingArtist():t instanceof h.a?(this.playlist=t,this.loading=!1):console.info("unknown playlist",t)}generateRadio(){this.lastfmservice.getTopArtists(this.username).subscribe(t=>{this.playlist=this.playlistService.extractArtists(t=t.topartists.artist),this.playlist.isContinues=!0,this.playlist.type="radio",this.loading=!1})}onChange(){const t=this.core.getArtistByName(this.startingArtistName),i=new h.a;i.name=`Artist radio for ${t.name}`,i.tracks=[this.playlistService.getRandomTrackFromList([t])],this.showStartingArtist=!1,this.playlist=i,this.getNextSimilairArtist(t,this.playlist)}getNextSimilairArtist(t,i){this.loading=!0,this.lastfmservice.getSimilairArtists(t).subscribe(t=>{t=t.similarartists.artist,this.loading=!1;const s=[];if(t.forEach(t=>{const i=this.core.getArtistByName(t.name);i&&s.push(i)}),s.length>0){const t=this.playlistService.getNextTrackForPlaylist(s,i);t&&i.tracks.length<this.playlistService.numberOfTracksInAPlaylist&&(i.tracks.push(t),this.getNextSimilairArtist(t.artist,i))}})}askForStartingArtist(){this.loading=!1,this.playlist=null,this.showStartingArtist=!0}}return t.\u0275fac=function(i){return new(i||t)(u.Lb(g.a),u.Lb(o.a),u.Lb(l.c),u.Lb(r.a),u.Lb(b.a),u.Lb(e.a),u.Lb(p.a))},t.\u0275cmp=u.Fb({type:t,selectors:[["app-playlists"]],decls:22,vars:8,consts:[[1,"animated-page"],[1,"container"],[1,"row"],[1,"col-12","col-lg-3","playlists-lg-fixed"],[1,"nav","flex-column"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["class","btn btn-link px-0",3,"click",4,"ngIf"],[1,"btn","btn-link","px-0",3,"click"],["class","nav-item",4,"ngFor","ngForOf"],["class","col-12 col-lg-9 offset-lg-3",4,"ngIf"],[3,"click"],[1,"glyph","glyph-delete"],[1,"col-12","col-lg-9","offset-lg-3"],["class","small muted",4,"ngIf"],[1,"progress-bar"],[1,"progress-circle"],[1,"small","muted"],[1,"playlists-header"],[1,"small","muted","color-type-secondary"],[3,"click",4,"ngIf"],["class","animated-page",4,"ngIf"],[1,"glyph","glyph-edit","small"],[1,"glyph","glyph-delete","small"],[3,"playlist",4,"ngIf"],[3,"playlist"],[1,"col"],["routerLink","/artists"],[1,"glyph","glyph-people"],["routerLink","/albums"],[1,"glyph","glyph-music-album"],["routerLink","/years"],[1,"glyph","glyph-calendar"],["sticky","",1,"header-seperator"],["role","form",3,"ngClass"],["sortForm","ngForm"],[1,"form-group","row"],["for","sort",1,"col-12","col-sm-3","col-form-label"],[1,"col","col-sm-9"],["name","sort","id","sort",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(u.Ob(0,"div",0),u.Ob(1,"div",1),u.Ob(2,"div",2),u.Ob(3,"div",3),u.Ob(4,"h4"),u.zc(5,"Playlists"),u.Nb(),u.Ob(6,"ul",4),u.xc(7,y,3,0,"li",5),u.Ob(8,"li",6),u.xc(9,d,2,0,"a",7),u.Nb(),u.Ob(10,"li",6),u.Ob(11,"a",8),u.Wb("click",(function(t){return i.setPlaylist("random")})),u.zc(12),u.Nb(),u.Nb(),u.Ob(13,"li",6),u.xc(14,m,2,1,"a",7),u.Nb(),u.Ob(15,"li",6),u.Ob(16,"a",8),u.Wb("click",(function(t){return i.setPlaylist("artist")})),u.zc(17,"Artist radio"),u.Nb(),u.Nb(),u.xc(18,k,5,1,"li",9),u.Nb(),u.Nb(),u.xc(19,v,9,1,"div",10),u.xc(20,x,11,6,"div",10),u.xc(21,M,12,5,"div",10),u.Nb(),u.Nb(),u.Nb()),2&t&&(u.zb(7),u.gc("ngIf",i.currentPlaylist),u.zb(2),u.gc("ngIf",i.username&&"mdb-skipped"!==i.username),u.zb(3),u.Bc("",i.playlistService.numberOfTracksInAPlaylist," random tracks"),u.zb(2),u.gc("ngIf",i.username&&"mdb-skipped"!==i.username),u.zb(4),u.gc("ngForOf",i.ownPlaylists),u.zb(1),u.gc("ngIf",i.loading),u.zb(1),u.gc("ngIf",i.playlist&&!i.loading&&!i.showStartingArtist),u.zb(1),u.gc("ngIf",i.showStartingArtist&&!i.loading&&!i.playlist))},directives:[a.l,a.k,f.a,l.d,c.p,c.g,c.h,a.j,c.n,c.f,c.i,c.j,c.o],encapsulation:2}),t})()}];let C=(()=>{class t{}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(i){return new(i||t)},imports:[[l.e.forChild(L)],l.e]}),t})();s.d(i,"PlaylistsModule",(function(){return F}));let F=(()=>{class t{}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(i){return new(i||t)},imports:[[a.c,C,n.a,c.b]]}),t})()}}]);