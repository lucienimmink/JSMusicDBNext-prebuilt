function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{YxDV:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),s=i("3Pt+"),a=i("hDf6"),o=i("tyNb"),r=i("z6cu"),c=(i("hR/0"),i("ufXC")),l=i("1gFc"),u=i("ktVm"),d=i("t083"),g=i("XtVx"),b=i("fXoL"),h=i("tk/3"),m=i("Oz9T"),p=i("cpgm");function v(e,t){1&e&&b.Mb(0,"canvas")}function f(e,t){if(1&e){var i=b.Pb();b.Ob(0,"div",34),b.xc(1,v,1,0,"canvas",35),b.Ob(2,"div",36),b.Wb("swipeleft",(function(e){return b.rc(i),b.ac(2).next()}))("swiperight",(function(e){return b.rc(i),b.ac(2).prev()})),b.Mb(3,"album-art",37),b.Nb(),b.Ob(4,"div",38),b.Wb("swipeleft",(function(e){return b.rc(i),b.ac(2).next()}))("swiperight",(function(e){return b.rc(i),b.ac(2).prev()})),b.Nb(),b.Nb()}if(2&e){var n=b.ac(2);b.zb(1),b.gc("ngIf",n.showVisualisation),b.zb(2),b.gc("artist",n.track.trackArtist)("album",n.track.album.name)}}var y=function(e){return{width:e}},k=function(e){return{"margin-left":e}},S=function(e){return{dragging:e}};function w(e,t){if(1&e&&(b.Ob(0,"div",39),b.Mb(1,"div",40),b.Mb(2,"div",41),b.Mb(3,"div",42),b.Nb()),2&e){var i=b.ac(2);b.zb(1),b.gc("ngStyle",b.jc(4,y,i.round(i.track.buffered.end/i.track.duration*100)+"%")),b.zb(1),b.gc("ngStyle",b.jc(6,y,i.track.position/i.track.duration*100+"%")),b.zb(1),b.gc("ngStyle",b.jc(8,k,i.track.position/i.track.duration*100+"%"))("ngClass",b.jc(10,S,i.isDragging))}}function N(e,t){1&e&&b.Mb(0,"div",43)}function O(e,t){if(1&e&&(b.Ob(0,"span",44),b.zc(1),b.bc(2,"timeFormat"),b.Nb()),2&e){var i=b.ac(2);b.zb(1),b.Ac(b.cc(2,1,i.track.position))}}function I(e,t){if(1&e&&(b.Ob(0,"span",45),b.zc(1),b.bc(2,"timeFormat"),b.Nb()),2&e){var i=b.ac(2);b.zb(1),b.Ac(b.cc(2,1,i.track.duration))}}function P(e,t){1&e&&b.Mb(0,"i",46)}function M(e,t){1&e&&b.Mb(0,"i",47)}var T=function(e){return{active:e}};function z(e,t){if(1&e){var i=b.Pb();b.Ob(0,"button",48),b.Wb("click",(function(e){return b.rc(i),b.ac(2).toggleLoved()})),b.Mb(1,"i",49),b.Nb()}if(2&e){var n=b.ac(2);b.gc("ngClass",b.jc(1,T,n.track.isLoved))}}var L=function(e,t,i){return{slided:e,"small-art":t,"no-focus":i}},E=function(e,t){return{"glyph-volume":e,"glyph-mute":t}};function x(e,t){if(1&e){var i=b.Pb();b.Ob(0,"div",2),b.Ob(1,"div",3),b.xc(2,f,5,3,"div",4),b.Ob(3,"div",5),b.Ob(4,"div",6),b.xc(5,w,4,12,"div",7),b.xc(6,N,1,0,"div",8),b.xc(7,O,3,3,"span",9),b.xc(8,I,3,3,"span",10),b.Ob(9,"div",11),b.Ob(10,"h4"),b.zc(11),b.Nb(),b.Ob(12,"h5"),b.Ob(13,"a",12),b.Wb("click",(function(e){return b.rc(i),b.ac().navigateToArtist()})),b.zc(14),b.Nb(),b.Ob(15,"span",13),b.zc(16," \u2022 "),b.Ob(17,"a",12),b.Wb("click",(function(e){return b.rc(i),b.ac().navigateToAlbum()})),b.zc(18),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(19,"div",14),b.Ob(20,"div",15),b.Ob(21,"button",16),b.Wb("click",(function(e){return b.rc(i),b.ac().prev()})),b.Mb(22,"i",17),b.Nb(),b.Ob(23,"button",16),b.Wb("click",(function(e){return b.rc(i),b.ac().togglePlayPause()})),b.xc(24,P,1,0,"i",18),b.xc(25,M,1,0,"i",19),b.Nb(),b.Ob(26,"button",16),b.Wb("click",(function(e){return b.rc(i),b.ac().next()})),b.Mb(27,"i",20),b.Nb(),b.xc(28,z,2,3,"button",21),b.Ob(29,"button",22),b.Wb("click",(function(e){return b.rc(i),b.ac().toggleVolumeWindow(e)})),b.Mb(30,"span",23),b.Nb(),b.Ob(31,"button",24),b.Wb("click",(function(e){return b.rc(i),b.ac().toggleShuffle()})),b.Mb(32,"i",25),b.Nb(),b.Nb(),b.Ob(33,"div",26),b.Ob(34,"input",27),b.Wb("ngModelChange",(function(e){return b.rc(i),b.ac().volume=e}))("input",(function(e){return b.rc(i),b.ac().setVolume()}))("change",(function(e){return b.rc(i),b.ac().setVolume()})),b.Nb(),b.Nb(),b.Ob(35,"div",15),b.Ob(36,"button",28),b.Wb("click",(function(e){return b.rc(i),b.ac().toggleSlide()})),b.Mb(37,"i",29),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(38,"div",30),b.Ob(39,"div",31),b.Ob(40,"div",32),b.Ob(41,"div",15),b.Mb(42,"mdb-tracklist",33),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()}if(2&e){var n=b.ac();b.gc("ngClass",b.lc(18,L,n.slided,n.smallArt,n.noFocus)),b.zb(2),b.gc("ngIf",!n.videoMode),b.zb(3),b.gc("ngIf",!n.videoMode),b.zb(1),b.gc("ngIf",!n.videoMode),b.zb(1),b.gc("ngIf",!n.videoMode),b.zb(1),b.gc("ngIf",!n.videoMode),b.zb(3),b.Ac(n.track.title),b.zb(3),b.Ac(n.track.trackArtist),b.zb(4),b.Ac(n.track.album.name),b.zb(6),b.gc("ngIf",n.isPlaying),b.zb(1),b.gc("ngIf",n.isPaused),b.zb(3),b.gc("ngIf","mdb-skipped"!==n.lastfmusername),b.zb(1),b.gc("disabled",n.videoMode),b.zb(1),b.gc("ngClass",b.kc(22,E,n.volume>0,0==n.volume)),b.zb(1),b.gc("ngClass",b.jc(25,T,n.isShuffled)),b.zb(2),b.gc("hidden",!n.showVolumeWindow),b.zb(1),b.gc("ngModel",n.volume),b.zb(8),b.gc("playlist",n.playlist)}}function C(e,t){1&e&&(b.Ob(0,"div",50),b.Ob(1,"div",51),b.Ob(2,"div",31),b.Ob(3,"div",52),b.Ob(4,"div",15),b.Ob(5,"h3"),b.zc(6,"Nothing is playing"),b.Nb(),b.Ob(7,"p"),b.zc(8," This is where you'll see the song you're playing and songs that are coming up. "),b.Nb(),b.Ob(9,"p"),b.zc(10," Find an "),b.Ob(11,"a",53),b.Mb(12,"span",54),b.zc(13," artist"),b.Nb(),b.zc(14," or "),b.Ob(15,"a",55),b.Mb(16,"span",56),b.zc(17," album"),b.Nb(),b.zc(18," that you want to play; or setup a "),b.Ob(19,"a",57),b.Mb(20,"span",58),b.zc(21," playlist"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb())}var V,W,A=[{path:"",component:(V=function(){function e(t,i,n,s,a,o,r){var c=this;_classCallCheck(this,e),this.pathService=t,this.coreService=i,this.playerService=n,this.router=s,this.lastFMService=a,this.animationService=o,this.http=r,this.previousTrack={},this.slided=!1,this.isPlaying=!1,this.isPaused=!1,this.isShuffled=!1,this.isDragging=!1,this.c=this,this.lastfmusername="",this.showVolumeWindow=!1,this.volume=100,this.showVisualisation=this.booleanState("visualisation-state"),this.preferVideo=this.booleanState("preferVideo-state"),this.smallArt=this.booleanState("small-art"),this.videoMode=!1,this.isEventBound=!1,this.noFocus=!1,this.timeoutTimer=null,this.timeoutTime=5e3,this.startDrag=function(e){c.isDragging=!0},this.drag=function(e){if(c.isDragging){var t=((e.clientX||e.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;t>=0&&t<=1&&c.setIndicatorPosition(t)}},this.stopDrag=function(e){if(c.isDragging){c.isDragging=!1;var t=((e.clientX||e.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;c.playerService.setPosition(c.track.duration/1e3*t)}};var l=this.playerService.getCurrentPlaylist();l&&(this.playlist=l.playlist,this.trackIndex=l.startIndex,this.isPaused=l.isPaused,this.isPlaying=l.isPlaying,this.isShuffled=l.isShuffled,this.volume=this.playerService.getVolume(),this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe((function(e){c.playlist=e.playlist,c.trackIndex=e.startIndex,c.isPaused=e.isPaused,c.isPlaying=e.isPlaying,c.isShuffled=e.isShuffled,c.setTrack()})),this.subscription2=this.playerService.volumeAnnounced.subscribe((function(e){c.volume=e})),this.subscription3=this.playerService.hideVolumeWindowAnnounced$.subscribe((function(){c.showVolumeWindow=!1})),this.pathService.announcePage("Now playing"),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].addEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].addEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].addEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].addEventListener("mouseup",this.stopDrag)),this.timeoutTimer=setTimeout((function(){c.onTimeout()}),this.timeoutTime)}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;setTimeout((function(){e.track&&("ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",e.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",e.startDrag),e.isEventBound=!0)}),250),this.lastfmusername=localStorage.getItem("lastfm-username")||""}},{key:"setTrack",value:function(){var e=this;this.track=this.playlist.tracks[this.trackIndex],this.currentTrack!==this.track&&(this.currentTrack=this.track,this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h4")),this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h5"))),this.isEventBound||setTimeout((function(){try{"ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",e.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",e.startDrag),e.isEventBound=!0}catch(t){console.error(t)}}),250)}},{key:"toggleSlide",value:function(){this.slided=!this.slided}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].removeEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].removeEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("mouseup",this.stopDrag)),clearTimeout(this.timeoutTime)}},{key:"navigateToArtist",value:function(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName])}},{key:"navigateToAlbum",value:function(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName,"album",this.track.album.sortName])}},{key:"next",value:function(){var e=this;this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout((function(){var t=document.querySelector(".previous-album-art");t.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,t.classList.remove("slideRightOut"),t.classList.remove("slideLeftOut"),e.animationService.requestAnimation("slideLeftOut",t,!1),e.trackIndex<e.playlist.tracks.length-1?(e.trackIndex++,e.playerService.next()):e.playlist.isContinues?(e.trackIndex=0,"random"===e.playlist.type||"radio"===e.playlist.type?e.playerService.nextPlaylist(e.playlist.type):e.playerService.nextAlbum(e.track.album)):e.playerService.stop()}))}},{key:"prev",value:function(){var e=this;this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout((function(){var t=document.querySelector(".previous-album-art");t.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,t.classList.remove("slideRightOut"),t.classList.remove("slideLeftOut"),e.animationService.requestAnimation("slideRightOut",t,!1),e.trackIndex>0&&(e.trackIndex--,e.playerService.prev())}))}},{key:"togglePlayPause",value:function(){this.videoMode?this.isPlaying?(this.player.pauseVideo(),this.isPlaying=!1,this.isPaused=!0):(this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1):this.playerService.togglePlayPause()}},{key:"toggleShuffle",value:function(){this.isShuffled=!this.isShuffled,this.playerService.shufflePlaylist(this.isShuffled)}},{key:"toggleLoved",value:function(){this.track.isLoved=!this.track.isLoved,this.lastFMService.toggleLoved(this.track).subscribe((function(e){console.info(e)}))}},{key:"setIndicatorPosition",value:function(e){document.getElementById("position-indicator").style.marginLeft=100*e+"%"}},{key:"toggleVolumeWindow",value:function(e){e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),this.showVolumeWindow=!this.showVolumeWindow}},{key:"setVolume",value:function(){this.playerService.setVolume(this.volume)}},{key:"round",value:function(e){return Math.floor(e)}},{key:"handleError",value:function(e){return Object(r.a)("no video")}},{key:"toggleVideo",value:function(){this.videoMode=!this.videoMode,this.videoMode?this.playerService.pause():this.playerService.togglePlayPause()}},{key:"savePlayer",value:function(e){this.player=e,this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1}},{key:"onStateChange",value:function(e){0===e.data&&(this.videoMode=!1,this.next())}},{key:"onTimeout",value:function(){this.slided||this.videoMode||(this.noFocus=!0)}},{key:"onMove",value:function(e){var t=this;clearTimeout(this.timeoutTimer),this.noFocus=!1,this.timeoutTimer=setTimeout((function(){t.onTimeout()}),this.timeoutTime)}},{key:"booleanState",value:function(e){var t=localStorage.getItem(e);return!(!t||"true"!==t)}}]),e}(),V.\u0275fac=function(e){return new(e||V)(b.Lb(g.a),b.Lb(u.a),b.Lb(c.a),b.Lb(o.c),b.Lb(d.a),b.Lb(l.a),b.Lb(h.a))},V.\u0275cmp=b.Fb({type:V,selectors:[["ng-component"]],hostBindings:function(e,t){1&e&&b.Wb("mousemove",(function(e){return t.onMove(e)}))},decls:2,vars:2,consts:[["class","container-fluid animated-page","id","nowPlaying",3,"ngClass",4,"ngIf"],["class","animated-page",4,"ngIf"],["id","nowPlaying",1,"container-fluid","animated-page",3,"ngClass"],[1,"top"],["class","image-wrapper",4,"ngIf"],[1,"control-wrapper-wrapper"],[1,"row","controls-wrapper"],["class","progress",4,"ngIf"],["id","progress-pusher",4,"ngIf"],["class","time start",4,"ngIf"],["class","time stop",4,"ngIf"],[1,"track-info"],[3,"click"],[1,"hidden-xs","color-type-secondary"],[1,"row","icons"],[1,"col-12"],[1,"btn","btn-link",3,"click"],[1,"glyph","glyph-previous"],["class","glyph glyph-pause",4,"ngIf"],["class","glyph glyph-play",4,"ngIf"],[1,"glyph","glyph-next"],["class","btn btn-link btn-love",3,"ngClass","click",4,"ngIf"],[1,"btn","btn-link","btn-volume","d-none","d-md-inline",3,"disabled","click"],[1,"glyph",3,"ngClass"],[1,"btn","btn-link","d-none","d-md-inline","btn-shuffle",3,"ngClass","click"],[1,"glyph","glyph-shuffle"],[1,"volume-control",3,"hidden"],["type","range","min","0","max","100",3,"ngModel","ngModelChange","input","change"],[1,"btn","btn-link","btn-updown",3,"click"],["id","upordown",1,"glyph","glyph-chevron-up"],[1,"bottom"],[1,"container"],[1,"row"],[3,"playlist"],[1,"image-wrapper"],[4,"ngIf"],[1,"current-album-art","always-replace",3,"swipeleft","swiperight"],["objectFit","contain",3,"artist","album"],[1,"previous-album-art",3,"swipeleft","swiperight"],[1,"progress"],["role","progressbar",1,"progress-bar","buffered-bar",3,"ngStyle"],[1,"progress-bar",3,"ngStyle"],["id","position-indicator",3,"ngStyle","ngClass"],["id","progress-pusher"],[1,"time","start"],[1,"time","stop"],[1,"glyph","glyph-pause"],[1,"glyph","glyph-play"],[1,"btn","btn-link","btn-love",3,"ngClass","click"],[1,"glyph","glyph-star-outline"],[1,"animated-page"],[1,"jumbotron","theme-light"],[1,"row","albumdetail"],["routerLink","/artists"],[1,"glyph","glyph-people"],["routerLink","/albums"],[1,"glyph","glyph-music-album"],["routerLink","/playlists"],[1,"glyph","glyph-music-info"]],template:function(e,t){1&e&&(b.xc(0,x,43,27,"div",0),b.xc(1,C,22,0,"div",1)),2&e&&(b.gc("ngIf",t.track),b.zb(1),b.gc("ngIf",!t.track))},directives:[n.l,n.j,s.l,s.a,s.f,s.i,m.a,n.m,o.d],pipes:[p.a],encapsulation:2}),V)}],B=((W=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:W}),W.\u0275inj=b.Ib({factory:function(e){return new(e||W)},imports:[[o.e.forChild(A)],o.e]}),W);i.d(t,"NowPlayingModule",(function(){return j}));var D,j=((D=function e(){_classCallCheck(this,e)}).\u0275mod=b.Jb({type:D}),D.\u0275inj=b.Ib({factory:function(e){return new(e||D)},imports:[[n.c,B,a.a,s.b]]}),D)}}]);