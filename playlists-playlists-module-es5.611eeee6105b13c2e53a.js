!function(){function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var s=0;s<i.length;s++){var a=i[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kez3:function(s,a,n){"use strict";n.r(a),n.d(a,"PlaylistsModule",(function(){return j}));var r=n("ofXK"),l=n("3Pt+"),e=n("hDf6"),c=n("tyNb"),o=n("ufXC"),b=n("OgP6"),p=n("ktVm"),u=n("t083"),f=n("XtVx"),h=n("KI15"),y=n("Gcu2"),g=n("fXoL"),m=n("Oz9T");function d(t,i){if(1&t){var s=g.Mb();g.Lb(0,"li",6),g.Lb(1,"a",8),g.Sb("click",(function(){return g.lc(s),g.Wb().setPlaylist("current")})),g.pc(2,"Current playlist"),g.Kb(),g.Kb()}}function v(t,i){if(1&t){var s=g.Mb();g.Lb(0,"a",8),g.Sb("click",(function(){return g.lc(s),g.Wb().setPlaylist("last.fm")})),g.pc(1,"Loved tracks on last.fm"),g.Kb()}}function k(t,i){if(1&t){var s=g.Mb();g.Lb(0,"a",8),g.Sb("click",(function(){return g.lc(s),g.Wb().setPlaylist("radio")})),g.pc(1),g.Kb()}if(2&t){var a=g.Wb();g.xb(1),g.rc("",a.playlistService.numberOfTracksInAPlaylist," tracks by preference")}}function L(t,i){if(1&t){var s=g.Mb();g.Lb(0,"li",6),g.Lb(1,"a",11),g.Sb("click",(function(){g.lc(s);var t=i.$implicit;return g.Wb().setPlaylist(t)})),g.pc(2),g.Lb(3,"a",11),g.Sb("click",(function(){g.lc(s);var t=i.$implicit;return g.Wb().removePlaylist(t)})),g.Jb(4,"span",12),g.Kb(),g.Kb(),g.Kb()}if(2&t){var a=i.$implicit;g.xb(2),g.rc("",a.name," ")}}function K(t,i){if(1&t&&(g.Lb(0,"p",17),g.pc(1),g.Kb()),2&t){var s=g.Wb(2);g.xb(1),g.rc("Tracks found: ",s.playlist.tracks.length,"")}}function S(t,i){if(1&t&&(g.Lb(0,"div",13),g.Jb(1,"br"),g.oc(2,K,2,1,"p",14),g.Lb(3,"div",15),g.Jb(4,"div",16),g.Jb(5,"div",16),g.Jb(6,"div",16),g.Jb(7,"div",16),g.Jb(8,"div",16),g.Kb(),g.Kb()),2&t){var s=g.Wb();g.xb(2),g.cc("ngIf",s.playlist&&s.playlist.tracks&&s.playlist.tracks.length>0)}}function I(t,i){if(1&t){var s=g.Mb();g.Lb(0,"a",11),g.Sb("click",(function(){g.lc(s);var t=g.Wb(2);return t.updatePlaylist(t.playlist)})),g.Jb(1,"span",22),g.Kb()}}function x(t,i){if(1&t){var s=g.Mb();g.Lb(0,"a",11),g.Sb("click",(function(){g.lc(s);var t=g.Wb(2);return t.removePlaylist(t.playlist)})),g.Jb(1,"span",23),g.Kb()}}function P(t,i){if(1&t&&g.Jb(0,"mdb-tracklist",25),2&t){var s=g.Wb(3);g.cc("playlist",s.playlist)}}function w(t,i){if(1&t&&(g.Lb(0,"div",0),g.oc(1,P,1,1,"mdb-tracklist",24),g.Kb()),2&t){var s=g.Wb(2);g.xb(1),g.cc("ngIf",!s.loading)}}function A(t,i){1&t&&(g.Lb(0,"div",0),g.Lb(1,"div",2),g.Lb(2,"div",26),g.Lb(3,"p"),g.pc(4," Unfortunately this playlist is empty :( "),g.Jb(5,"br"),g.pc(6,"Find some tracks from an "),g.Lb(7,"a",27),g.Jb(8,"span",28),g.pc(9," artist"),g.Kb(),g.pc(10,", "),g.Lb(11,"a",29),g.Jb(12,"span",30),g.pc(13," album"),g.Kb(),g.pc(14," or a "),g.Lb(15,"a",31),g.Jb(16,"span",32),g.pc(17," year"),g.Kb(),g.Kb(),g.Kb(),g.Kb(),g.Kb())}function J(t,i){if(1&t&&(g.Lb(0,"div",13),g.Lb(1,"h4",18),g.pc(2),g.Lb(3,"span",19),g.pc(4),g.Kb(),g.pc(5," \xa0 "),g.oc(6,I,2,0,"a",20),g.pc(7," \xa0 "),g.oc(8,x,2,0,"a",20),g.Kb(),g.oc(9,w,2,1,"div",21),g.oc(10,A,18,0,"div",21),g.Kb()),2&t){var s=g.Wb();g.xb(2),g.rc(" ",s.playlist.name," "),g.xb(2),g.rc("(",s.playlist.tracks.length,")"),g.xb(2),g.cc("ngIf",s.playlist.isOwn),g.xb(2),g.cc("ngIf",s.playlist.isOwn),g.xb(1),g.cc("ngIf",s.playlist&&s.playlist.tracks&&0!==s.playlist.tracks.length),g.xb(1),g.cc("ngIf",s.playlist&&s.playlist.tracks&&0===s.playlist.tracks.length)}}function O(t,i){if(1&t&&(g.Lb(0,"option"),g.pc(1),g.Kb()),2&t){var s=i.$implicit;g.xb(1),g.qc(s.name)}}var C=function(t){return{"theme-alt":t}};function W(t,i){if(1&t){var s=g.Mb();g.Lb(0,"div",13),g.Lb(1,"h4",33),g.pc(2," Select an artist as starting point "),g.Kb(),g.Lb(3,"form",34,35),g.Lb(5,"div",36),g.Lb(6,"label",37),g.pc(7,"Select an artist"),g.Kb(),g.Lb(8,"div",38),g.Lb(9,"select",39,40),g.Sb("ngModelChange",(function(t){return g.lc(s),g.Wb().startingArtistName=t}))("ngModelChange",(function(t){return g.lc(s),g.Wb().onChange(t)})),g.oc(11,O,2,1,"option",41),g.Kb(),g.Kb(),g.Kb(),g.Kb(),g.Kb()}if(2&t){var a=g.Wb();g.xb(3),g.cc("ngClass",g.fc(3,C,"dark"===a.theme)),g.xb(6),g.cc("ngModel",a.startingArtistName),g.xb(2),g.cc("ngForOf",a.artists)}}var F,T,M,N=[{path:"",component:(F=function(){function s(i,a,n,r,l,e,c){var o=this;t(this,s),this.pathService=i,this.coreService=a,this.router=n,this.playerService=r,this.lastfmservice=l,this.configService=e,this.playlistService=c,this.loading=!1,this.username=localStorage.getItem("lastfm-username"),this.showStartingArtist=!1,this.ownPlaylists=[],this.artists=[];var b=this.playerService.getCurrentPlaylist();b&&(this.currentPlaylist=b.playlist,this.trackIndex=b.startIndex,this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe((function(t){o.currentPlaylist=t.playlist,o.trackIndex=t.startIndex,o.setTrack()})),this.core=this.coreService.getCore(),this.subscription2=this.core.coreParsed$.subscribe((function(t){o.ngOnInit()})),this.theme=e.mode,this.newPlaylist=new h.a}var a,n,r;return a=s,(n=[{key:"setTrack",value:function(){this.track=this.currentPlaylist.tracks[this.trackIndex],this.track&&(this.track.position=0)}},{key:"ngOnInit",value:function(){var t=this;if(this.pathService.announcePage("Playlists"),this.artists=this.core.artistsList(),this.ownPlaylists=[],localStorage.getItem("customlisttest")){var i=JSON.parse(localStorage.getItem("customlisttest"));i&&i.forEach((function(i){var s=new h.a;s.name=i.name,s.isOwn=!0,i.tracks.forEach((function(i){var a=t.core.getTrackById(i);a&&a.title&&s.tracks.push(a)})),t.ownPlaylists.push(s)}))}}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe(),this.subscription2.unsubscribe()}},{key:"setPlaylist",value:function(t){var i=this;this.loading=!0,this.showStartingArtist=!1,"current"===t?(this.playlist=this.currentPlaylist,this.loading=!1):"last.fm"===t?this.lastfmservice.getLovedTracks(this.username).subscribe((function(t){i.playlist=i.playlistService.extractTracks(t.lovedtracks.track),i.loading=!1})):"random"===t?(this.playlist=this.playlistService.generateRandom(),this.playlist.isContinues=!0,this.playlist.type=t,this.loading=!1):"radio"===t?this.playlist=this.generateRadio():"artist"===t?this.askForStartingArtist():t instanceof h.a?(this.playlist=t,this.loading=!1):console.info("unknown playlist",t)}},{key:"generateRadio",value:function(){var t=this;this.lastfmservice.getTopArtists(this.username).subscribe((function(i){t.playlist=t.playlistService.extractArtists(i=i.topartists.artist),t.playlist.isContinues=!0,t.playlist.type="radio",t.loading=!1}))}},{key:"onChange",value:function(){var t=this.core.getArtistByName(this.startingArtistName),i=new h.a;i.name="Artist radio for "+t.name,i.tracks=[this.playlistService.getRandomTrackFromList([t])],this.showStartingArtist=!1,this.playlist=i,this.getNextSimilairArtist(t,this.playlist)}},{key:"getNextSimilairArtist",value:function(t,i){var s=this;this.loading=!0,this.lastfmservice.getSimilairArtists(t).subscribe((function(t){t=t.similarartists.artist,s.loading=!1;var a=[];if(t.forEach((function(t){var i=s.core.getArtistByName(t.name);i&&a.push(i)})),a.length>0){var n=s.playlistService.getNextTrackForPlaylist(a,i);n&&i.tracks.length<s.playlistService.numberOfTracksInAPlaylist&&(i.tracks.push(n),s.getNextSimilairArtist(n.artist,i))}}))}},{key:"askForStartingArtist",value:function(){this.loading=!1,this.playlist=null,this.showStartingArtist=!0}}])&&i(a.prototype,n),r&&i(a,r),s}(),F.\u0275fac=function(t){return new(t||F)(g.Ib(f.a),g.Ib(p.a),g.Ib(c.c),g.Ib(o.a),g.Ib(u.a),g.Ib(b.a),g.Ib(y.a))},F.\u0275cmp=g.Cb({type:F,selectors:[["app-playlists"]],decls:22,vars:8,consts:[[1,"animated-page"],[1,"container"],[1,"row"],[1,"col-12","col-lg-3","playlists-lg-fixed"],[1,"nav","flex-column"],["class","nav-item",4,"ngIf"],[1,"nav-item"],["class","btn btn-link px-0",3,"click",4,"ngIf"],[1,"btn","btn-link","px-0",3,"click"],["class","nav-item",4,"ngFor","ngForOf"],["class","col-12 col-lg-9 offset-lg-3",4,"ngIf"],[3,"click"],[1,"glyph","glyph-delete"],[1,"col-12","col-lg-9","offset-lg-3"],["class","small muted",4,"ngIf"],[1,"progress-bar"],[1,"progress-circle"],[1,"small","muted"],[1,"playlists-header"],[1,"small","muted","color-type-secondary"],[3,"click",4,"ngIf"],["class","animated-page",4,"ngIf"],[1,"glyph","glyph-edit","small"],[1,"glyph","glyph-delete","small"],[3,"playlist",4,"ngIf"],[3,"playlist"],[1,"col"],["routerLink","/artists"],[1,"glyph","glyph-people"],["routerLink","/albums"],[1,"glyph","glyph-music-album"],["routerLink","/years"],[1,"glyph","glyph-calendar"],["sticky","",1,"header-seperator"],["role","form",3,"ngClass"],["sortForm","ngForm"],[1,"form-group","row"],["for","sort",1,"col-12","col-sm-3","col-form-label"],[1,"col","col-sm-9"],["name","sort","id","sort",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(g.Lb(0,"div",0),g.Lb(1,"div",1),g.Lb(2,"div",2),g.Lb(3,"div",3),g.Lb(4,"h4"),g.pc(5,"Playlists"),g.Kb(),g.Lb(6,"ul",4),g.oc(7,d,3,0,"li",5),g.Lb(8,"li",6),g.oc(9,v,2,0,"a",7),g.Kb(),g.Lb(10,"li",6),g.Lb(11,"a",8),g.Sb("click",(function(){return i.setPlaylist("random")})),g.pc(12),g.Kb(),g.Kb(),g.Lb(13,"li",6),g.oc(14,k,2,1,"a",7),g.Kb(),g.Lb(15,"li",6),g.Lb(16,"a",8),g.Sb("click",(function(){return i.setPlaylist("artist")})),g.pc(17,"Artist radio"),g.Kb(),g.Kb(),g.oc(18,L,5,1,"li",9),g.Kb(),g.Kb(),g.oc(19,S,9,1,"div",10),g.oc(20,J,11,6,"div",10),g.oc(21,W,12,5,"div",10),g.Kb(),g.Kb(),g.Kb()),2&t&&(g.xb(7),g.cc("ngIf",i.currentPlaylist),g.xb(2),g.cc("ngIf",i.username&&"mdb-skipped"!==i.username),g.xb(3),g.rc("",i.playlistService.numberOfTracksInAPlaylist," random tracks"),g.xb(2),g.cc("ngIf",i.username&&"mdb-skipped"!==i.username),g.xb(4),g.cc("ngForOf",i.ownPlaylists),g.xb(1),g.cc("ngIf",i.loading),g.xb(1),g.cc("ngIf",i.playlist&&!i.loading&&!i.showStartingArtist),g.xb(1),g.cc("ngIf",i.showStartingArtist&&!i.loading&&!i.playlist))},directives:[r.k,r.j,m.a,c.d,l.m,l.d,l.e,r.i,l.k,l.c,l.f,l.g,l.l],encapsulation:2}),F)}],$=((M=function i(){t(this,i)}).\u0275mod=g.Gb({type:M}),M.\u0275inj=g.Fb({factory:function(t){return new(t||M)},imports:[[c.e.forChild(N)],c.e]}),M),j=((T=function i(){t(this,i)}).\u0275mod=g.Gb({type:T}),T.\u0275inj=g.Fb({factory:function(t){return new(t||T)},imports:[[r.b,$,e.a,l.b]]}),T)}}])}();