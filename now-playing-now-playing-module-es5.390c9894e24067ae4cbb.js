function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{YxDV:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),s=i("3Pt+"),o=i("hDf6"),a=i("tyNb"),r=i("z6cu"),c=(i("hR/0"),i("ufXC")),l=i("1gFc"),u=i("ktVm"),d=i("t083"),b=i("XtVx"),h=i("fXoL"),g=i("tk/3"),m=i("Oz9T"),p=i("cpgm");function f(e,t){1&e&&h.Lb(0,"canvas")}function v(e,t){if(1&e){var i=h.Ob();h.Nb(0,"div",34),h.rc(1,f,1,0,"canvas",35),h.Nb(2,"div",36),h.Vb("swipeleft",(function(){return h.oc(i),h.Zb(2).next()}))("swiperight",(function(){return h.oc(i),h.Zb(2).prev()})),h.Lb(3,"album-art",37),h.Mb(),h.Nb(4,"div",38),h.Vb("swipeleft",(function(){return h.oc(i),h.Zb(2).next()}))("swiperight",(function(){return h.oc(i),h.Zb(2).prev()})),h.Mb(),h.Mb()}if(2&e){var n=h.Zb(2);h.zb(1),h.fc("ngIf",n.showVisualisation),h.zb(2),h.fc("artist",n.track.trackArtist)("album",n.track.album.name)}}var y=function(e){return{width:e}},k=function(e){return{"margin-left":e}},M=function(e){return{dragging:e}};function S(e,t){if(1&e&&(h.Nb(0,"div",39),h.Lb(1,"div",40),h.Lb(2,"div",41),h.Lb(3,"div",42),h.Mb()),2&e){var i=h.Zb(2);h.zb(1),h.fc("ngStyle",h.ic(4,y,i.round(i.track.buffered.end/i.track.duration*100)+"%")),h.zb(1),h.fc("ngStyle",h.ic(6,y,i.track.position/i.track.duration*100+"%")),h.zb(1),h.fc("ngStyle",h.ic(8,k,i.track.position/i.track.duration*100+"%"))("ngClass",h.ic(10,M,i.isDragging))}}function w(e,t){1&e&&h.Lb(0,"div",43)}function N(e,t){if(1&e&&(h.Nb(0,"span",44),h.sc(1),h.ac(2,"timeFormat"),h.Mb()),2&e){var i=h.Zb(2);h.zb(1),h.tc(h.bc(2,1,i.track.position))}}function I(e,t){if(1&e&&(h.Nb(0,"span",45),h.sc(1),h.ac(2,"timeFormat"),h.Mb()),2&e){var i=h.Zb(2);h.zb(1),h.tc(h.bc(2,1,i.track.duration))}}function L(e,t){1&e&&h.Lb(0,"i",46)}function P(e,t){1&e&&h.Lb(0,"i",47)}var T=function(e){return{active:e}};function E(e,t){if(1&e){var i=h.Ob();h.Nb(0,"button",48),h.Vb("click",(function(){return h.oc(i),h.Zb(2).toggleLoved()})),h.Lb(1,"i",49),h.Mb()}if(2&e){var n=h.Zb(2);h.fc("ngClass",h.ic(1,T,n.track.isLoved))}}var V=function(e,t,i){return{slided:e,"small-art":t,"no-focus":i}},C=function(e,t){return{"glyph-volume":e,"glyph-mute":t}};function z(e,t){if(1&e){var i=h.Ob();h.Nb(0,"div",2),h.Nb(1,"div",3),h.rc(2,v,5,3,"div",4),h.Nb(3,"div",5),h.Nb(4,"div",6),h.rc(5,S,4,12,"div",7),h.rc(6,w,1,0,"div",8),h.rc(7,N,3,3,"span",9),h.rc(8,I,3,3,"span",10),h.Nb(9,"div",11),h.Nb(10,"h4"),h.sc(11),h.Mb(),h.Nb(12,"h5"),h.Nb(13,"a",12),h.Vb("click",(function(){return h.oc(i),h.Zb().navigateToArtist()})),h.sc(14),h.Mb(),h.Nb(15,"span",13),h.sc(16," \u2022 "),h.Nb(17,"a",12),h.Vb("click",(function(){return h.oc(i),h.Zb().navigateToAlbum()})),h.sc(18),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(19,"div",14),h.Nb(20,"div",15),h.Nb(21,"button",16),h.Vb("click",(function(){return h.oc(i),h.Zb().prev()})),h.Lb(22,"i",17),h.Mb(),h.Nb(23,"button",16),h.Vb("click",(function(){return h.oc(i),h.Zb().togglePlayPause()})),h.rc(24,L,1,0,"i",18),h.rc(25,P,1,0,"i",19),h.Mb(),h.Nb(26,"button",16),h.Vb("click",(function(){return h.oc(i),h.Zb().next()})),h.Lb(27,"i",20),h.Mb(),h.rc(28,E,2,3,"button",21),h.Nb(29,"button",22),h.Vb("click",(function(e){return h.oc(i),h.Zb().toggleVolumeWindow(e)})),h.Lb(30,"span",23),h.Mb(),h.Nb(31,"button",24),h.Vb("click",(function(){return h.oc(i),h.Zb().toggleShuffle()})),h.Lb(32,"i",25),h.Mb(),h.Mb(),h.Nb(33,"div",26),h.Nb(34,"input",27),h.Vb("ngModelChange",(function(e){return h.oc(i),h.Zb().volume=e}))("input",(function(){return h.oc(i),h.Zb().setVolume()}))("change",(function(){return h.oc(i),h.Zb().setVolume()})),h.Mb(),h.Mb(),h.Nb(35,"div",15),h.Nb(36,"button",28),h.Vb("click",(function(){return h.oc(i),h.Zb().toggleSlide()})),h.Lb(37,"i",29),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(38,"div",30),h.Nb(39,"div",31),h.Nb(40,"div",32),h.Nb(41,"div",15),h.Lb(42,"mdb-tracklist",33),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb()}if(2&e){var n=h.Zb();h.fc("ngClass",h.kc(18,V,n.slided,n.smallArt,n.noFocus)),h.zb(2),h.fc("ngIf",!n.videoMode),h.zb(3),h.fc("ngIf",!n.videoMode),h.zb(1),h.fc("ngIf",!n.videoMode),h.zb(1),h.fc("ngIf",!n.videoMode),h.zb(1),h.fc("ngIf",!n.videoMode),h.zb(3),h.tc(n.track.title),h.zb(3),h.tc(n.track.trackArtist),h.zb(4),h.tc(n.track.album.name),h.zb(6),h.fc("ngIf",n.isPlaying),h.zb(1),h.fc("ngIf",n.isPaused),h.zb(3),h.fc("ngIf","mdb-skipped"!==n.lastfmusername),h.zb(1),h.fc("disabled",n.videoMode),h.zb(1),h.fc("ngClass",h.jc(22,C,n.volume>0,0==n.volume)),h.zb(1),h.fc("ngClass",h.ic(25,T,n.isShuffled)),h.zb(2),h.fc("hidden",!n.showVolumeWindow),h.zb(1),h.fc("ngModel",n.volume),h.zb(8),h.fc("playlist",n.playlist)}}function x(e,t){1&e&&(h.Nb(0,"div",50),h.Nb(1,"div",51),h.Nb(2,"div",31),h.Nb(3,"div",52),h.Nb(4,"div",15),h.Nb(5,"h3"),h.sc(6,"Nothing is playing"),h.Mb(),h.Nb(7,"p"),h.sc(8," This is where you'll see the song you're playing and songs that are coming up. "),h.Mb(),h.Nb(9,"p"),h.sc(10," Find an "),h.Nb(11,"a",53),h.Lb(12,"span",54),h.sc(13," artist"),h.Mb(),h.sc(14," or "),h.Nb(15,"a",55),h.Lb(16,"span",56),h.sc(17," album"),h.Mb(),h.sc(18," that you want to play; or setup a "),h.Nb(19,"a",57),h.Lb(20,"span",58),h.sc(21," playlist"),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb())}var Z,B,D=[{path:"",component:(Z=function(){function e(t,i,n,s,o,a,r){var c=this;_classCallCheck(this,e),this.pathService=t,this.coreService=i,this.playerService=n,this.router=s,this.lastFMService=o,this.animationService=a,this.http=r,this.previousTrack={},this.slided=!1,this.isPlaying=!1,this.isPaused=!1,this.isShuffled=!1,this.isDragging=!1,this.c=this,this.lastfmusername="",this.showVolumeWindow=!1,this.volume=100,this.showVisualisation=this.booleanState("visualisation-state"),this.preferVideo=this.booleanState("preferVideo-state"),this.smallArt=this.booleanState("small-art"),this.videoMode=!1,this.isEventBound=!1,this.noFocus=!1,this.timeoutTimer=null,this.timeoutTime=5e3,this.startDrag=function(e){c.isDragging=!0},this.drag=function(e){if(c.isDragging){var t=((e.clientX||e.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;t>=0&&t<=1&&c.setIndicatorPosition(t)}},this.stopDrag=function(e){if(c.isDragging){c.isDragging=!1;var t=((e.clientX||e.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;c.playerService.setPosition(c.track.duration/1e3*t)}};var l=this.playerService.getCurrentPlaylist();l&&(this.playlist=l.playlist,this.trackIndex=l.startIndex,this.isPaused=l.isPaused,this.isPlaying=l.isPlaying,this.isShuffled=l.isShuffled,this.volume=this.playerService.getVolume(),this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe((function(e){c.playlist=e.playlist,c.trackIndex=e.startIndex,c.isPaused=e.isPaused,c.isPlaying=e.isPlaying,c.isShuffled=e.isShuffled,c.setTrack()})),this.subscription2=this.playerService.volumeAnnounced.subscribe((function(e){c.volume=e})),this.subscription3=this.playerService.hideVolumeWindowAnnounced$.subscribe((function(){c.showVolumeWindow=!1})),this.pathService.announcePage("Now playing"),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].addEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].addEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].addEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].addEventListener("mouseup",this.stopDrag)),this.timeoutTimer=setTimeout((function(){c.onTimeout()}),this.timeoutTime)}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;setTimeout((function(){e.track&&("ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",e.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",e.startDrag),e.isEventBound=!0)}),250),this.lastfmusername=localStorage.getItem("lastfm-username")||""}},{key:"setTrack",value:function(){var e=this;this.track=this.playlist.tracks[this.trackIndex],this.currentTrack!==this.track&&(this.currentTrack=this.track,this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h4")),this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h5"))),this.isEventBound||setTimeout((function(){try{"ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",e.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",e.startDrag),e.isEventBound=!0}catch(t){console.error(t)}}),250)}},{key:"toggleSlide",value:function(){this.slided=!this.slided}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].removeEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].removeEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("mouseup",this.stopDrag)),clearTimeout(this.timeoutTime)}},{key:"navigateToArtist",value:function(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName])}},{key:"navigateToAlbum",value:function(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName,"album",this.track.album.sortName])}},{key:"next",value:function(){var e=this;this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout((function(){var t=document.querySelector(".previous-album-art");t.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,t.classList.remove("slideRightOut"),t.classList.remove("slideLeftOut"),e.animationService.requestAnimation("slideLeftOut",t,!1),e.trackIndex<e.playlist.tracks.length-1?(e.trackIndex++,e.playerService.next()):e.playlist.isContinues?(e.trackIndex=0,"random"===e.playlist.type||"radio"===e.playlist.type?e.playerService.nextPlaylist(e.playlist.type):e.playerService.nextAlbum(e.track.album)):e.playerService.stop()}))}},{key:"prev",value:function(){var e=this;this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout((function(){var t=document.querySelector(".previous-album-art");t.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,t.classList.remove("slideRightOut"),t.classList.remove("slideLeftOut"),e.animationService.requestAnimation("slideRightOut",t,!1),e.trackIndex>0&&(e.trackIndex--,e.playerService.prev())}))}},{key:"togglePlayPause",value:function(){this.videoMode?this.isPlaying?(this.player.pauseVideo(),this.isPlaying=!1,this.isPaused=!0):(this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1):this.playerService.togglePlayPause()}},{key:"toggleShuffle",value:function(){this.isShuffled=!this.isShuffled,this.playerService.shufflePlaylist(this.isShuffled)}},{key:"toggleLoved",value:function(){this.track.isLoved=!this.track.isLoved,this.lastFMService.toggleLoved(this.track).subscribe((function(e){console.info(e)}))}},{key:"setIndicatorPosition",value:function(e){document.getElementById("position-indicator").style.marginLeft=100*e+"%"}},{key:"toggleVolumeWindow",value:function(e){e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),this.showVolumeWindow=!this.showVolumeWindow}},{key:"setVolume",value:function(){this.playerService.setVolume(this.volume)}},{key:"round",value:function(e){return Math.floor(e)}},{key:"handleError",value:function(e){return Object(r.a)("no video")}},{key:"toggleVideo",value:function(){this.videoMode=!this.videoMode,this.videoMode?this.playerService.pause():this.playerService.togglePlayPause()}},{key:"savePlayer",value:function(e){this.player=e,this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1}},{key:"onStateChange",value:function(e){0===e.data&&(this.videoMode=!1,this.next())}},{key:"onTimeout",value:function(){this.slided||this.videoMode||(this.noFocus=!0)}},{key:"onMove",value:function(e){var t=this;clearTimeout(this.timeoutTimer),this.noFocus=!1,this.timeoutTimer=setTimeout((function(){t.onTimeout()}),this.timeoutTime)}},{key:"booleanState",value:function(e){var t=localStorage.getItem(e);return!(!t||"true"!==t)}}]),e}(),Z.\u0275fac=function(e){return new(e||Z)(h.Kb(b.a),h.Kb(u.a),h.Kb(c.a),h.Kb(a.c),h.Kb(d.a),h.Kb(l.a),h.Kb(g.a))},Z.\u0275cmp=h.Eb({type:Z,selectors:[["ng-component"]],hostBindings:function(e,t){1&e&&h.Vb("mousemove",(function(e){return t.onMove(e)}))},decls:2,vars:2,consts:[["class","container-fluid animated-page","id","nowPlaying",3,"ngClass",4,"ngIf"],["class","animated-page",4,"ngIf"],["id","nowPlaying",1,"container-fluid","animated-page",3,"ngClass"],[1,"top"],["class","image-wrapper",4,"ngIf"],[1,"control-wrapper-wrapper"],[1,"row","controls-wrapper"],["class","progress",4,"ngIf"],["id","progress-pusher",4,"ngIf"],["class","time start",4,"ngIf"],["class","time stop",4,"ngIf"],[1,"track-info"],[3,"click"],[1,"hidden-xs","color-type-secondary"],[1,"row","icons"],[1,"col-12"],[1,"btn","btn-link",3,"click"],[1,"glyph","glyph-previous"],["class","glyph glyph-pause",4,"ngIf"],["class","glyph glyph-play",4,"ngIf"],[1,"glyph","glyph-next"],["class","btn btn-link btn-love",3,"ngClass","click",4,"ngIf"],[1,"btn","btn-link","btn-volume","d-none","d-md-inline",3,"disabled","click"],[1,"glyph",3,"ngClass"],[1,"btn","btn-link","d-none","d-md-inline","btn-shuffle",3,"ngClass","click"],[1,"glyph","glyph-shuffle"],[1,"volume-control",3,"hidden"],["type","range","min","0","max","100",3,"ngModel","ngModelChange","input","change"],[1,"btn","btn-link","btn-updown",3,"click"],["id","upordown",1,"glyph","glyph-chevron-up"],[1,"bottom"],[1,"container"],[1,"row"],[3,"playlist"],[1,"image-wrapper"],[4,"ngIf"],[1,"current-album-art","always-replace",3,"swipeleft","swiperight"],["objectFit","contain",3,"artist","album"],[1,"previous-album-art",3,"swipeleft","swiperight"],[1,"progress"],["role","progressbar",1,"progress-bar","buffered-bar",3,"ngStyle"],[1,"progress-bar",3,"ngStyle"],["id","position-indicator",3,"ngStyle","ngClass"],["id","progress-pusher"],[1,"time","start"],[1,"time","stop"],[1,"glyph","glyph-pause"],[1,"glyph","glyph-play"],[1,"btn","btn-link","btn-love",3,"ngClass","click"],[1,"glyph","glyph-star-outline"],[1,"animated-page"],[1,"jumbotron","theme-light"],[1,"row","albumdetail"],["routerLink","/artists"],[1,"glyph","glyph-people"],["routerLink","/albums"],[1,"glyph","glyph-music-album"],["routerLink","/playlists"],[1,"glyph","glyph-music-info"]],template:function(e,t){1&e&&(h.rc(0,z,43,27,"div",0),h.rc(1,x,22,0,"div",1)),2&e&&(h.fc("ngIf",t.track),h.zb(1),h.fc("ngIf",!t.track))},directives:[n.k,n.i,s.i,s.a,s.c,s.f,m.a,n.l,a.d],pipes:[p.a],encapsulation:2}),Z)}],A=((B=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ib({type:B}),B.\u0275inj=h.Hb({factory:function(e){return new(e||B)},imports:[[a.e.forChild(D)],a.e]}),B);i.d(t,"NowPlayingModule",(function(){return F}));var O,F=((O=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ib({type:O}),O.\u0275inj=h.Hb({factory:function(e){return new(e||O)},imports:[[n.b,A,o.a,s.b]]}),O)}}]);