(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{YxDV:function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),n=i("3Pt+"),o=i("hDf6"),r=i("tyNb"),a=i("z6cu"),c=(i("hR/0"),i("ufXC")),l=i("1gFc"),u=i("ktVm"),d=i("t083"),h=i("XtVx"),g=i("fXoL"),b=i("tk/3"),m=i("Oz9T"),p=i("cpgm");function v(t,e){1&t&&g.Mb(0,"canvas")}function y(t,e){if(1&t){const t=g.Pb();g.Ob(0,"div",34),g.xc(1,v,1,0,"canvas",35),g.Ob(2,"div",36),g.Wb("swipeleft",(function(e){return g.rc(t),g.ac(2).next()}))("swiperight",(function(e){return g.rc(t),g.ac(2).prev()})),g.Mb(3,"album-art",37),g.Nb(),g.Ob(4,"div",38),g.Wb("swipeleft",(function(e){return g.rc(t),g.ac(2).next()}))("swiperight",(function(e){return g.rc(t),g.ac(2).prev()})),g.Nb(),g.Nb()}if(2&t){const t=g.ac(2);g.zb(1),g.gc("ngIf",t.showVisualisation),g.zb(2),g.gc("artist",t.track.trackArtist)("album",t.track.album.name)}}const f=function(t){return{width:t}},k=function(t){return{"margin-left":t}},S=function(t){return{dragging:t}};function N(t,e){if(1&t&&(g.Ob(0,"div",39),g.Mb(1,"div",40),g.Mb(2,"div",41),g.Mb(3,"div",42),g.Nb()),2&t){const t=g.ac(2);g.zb(1),g.gc("ngStyle",g.jc(4,f,t.round(t.track.buffered.end/t.track.duration*100)+"%")),g.zb(1),g.gc("ngStyle",g.jc(6,f,t.track.position/t.track.duration*100+"%")),g.zb(1),g.gc("ngStyle",g.jc(8,k,t.track.position/t.track.duration*100+"%"))("ngClass",g.jc(10,S,t.isDragging))}}function w(t,e){1&t&&g.Mb(0,"div",43)}function O(t,e){if(1&t&&(g.Ob(0,"span",44),g.zc(1),g.bc(2,"timeFormat"),g.Nb()),2&t){const t=g.ac(2);g.zb(1),g.Ac(g.cc(2,1,t.track.position))}}function I(t,e){if(1&t&&(g.Ob(0,"span",45),g.zc(1),g.bc(2,"timeFormat"),g.Nb()),2&t){const t=g.ac(2);g.zb(1),g.Ac(g.cc(2,1,t.track.duration))}}function M(t,e){1&t&&g.Mb(0,"i",46)}function P(t,e){1&t&&g.Mb(0,"i",47)}const z=function(t){return{active:t}};function T(t,e){if(1&t){const t=g.Pb();g.Ob(0,"button",48),g.Wb("click",(function(e){return g.rc(t),g.ac(2).toggleLoved()})),g.Mb(1,"i",49),g.Nb()}if(2&t){const t=g.ac(2);g.gc("ngClass",g.jc(1,z,t.track.isLoved))}}const L=function(t,e,i){return{slided:t,"small-art":e,"no-focus":i}},E=function(t,e){return{"glyph-volume":t,"glyph-mute":e}};function x(t,e){if(1&t){const t=g.Pb();g.Ob(0,"div",2),g.Ob(1,"div",3),g.xc(2,y,5,3,"div",4),g.Ob(3,"div",5),g.Ob(4,"div",6),g.xc(5,N,4,12,"div",7),g.xc(6,w,1,0,"div",8),g.xc(7,O,3,3,"span",9),g.xc(8,I,3,3,"span",10),g.Ob(9,"div",11),g.Ob(10,"h4"),g.zc(11),g.Nb(),g.Ob(12,"h5"),g.Ob(13,"a",12),g.Wb("click",(function(e){return g.rc(t),g.ac().navigateToArtist()})),g.zc(14),g.Nb(),g.Ob(15,"span",13),g.zc(16," \u2022 "),g.Ob(17,"a",12),g.Wb("click",(function(e){return g.rc(t),g.ac().navigateToAlbum()})),g.zc(18),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Ob(19,"div",14),g.Ob(20,"div",15),g.Ob(21,"button",16),g.Wb("click",(function(e){return g.rc(t),g.ac().prev()})),g.Mb(22,"i",17),g.Nb(),g.Ob(23,"button",16),g.Wb("click",(function(e){return g.rc(t),g.ac().togglePlayPause()})),g.xc(24,M,1,0,"i",18),g.xc(25,P,1,0,"i",19),g.Nb(),g.Ob(26,"button",16),g.Wb("click",(function(e){return g.rc(t),g.ac().next()})),g.Mb(27,"i",20),g.Nb(),g.xc(28,T,2,3,"button",21),g.Ob(29,"button",22),g.Wb("click",(function(e){return g.rc(t),g.ac().toggleVolumeWindow(e)})),g.Mb(30,"span",23),g.Nb(),g.Ob(31,"button",24),g.Wb("click",(function(e){return g.rc(t),g.ac().toggleShuffle()})),g.Mb(32,"i",25),g.Nb(),g.Nb(),g.Ob(33,"div",26),g.Ob(34,"input",27),g.Wb("ngModelChange",(function(e){return g.rc(t),g.ac().volume=e}))("input",(function(e){return g.rc(t),g.ac().setVolume()}))("change",(function(e){return g.rc(t),g.ac().setVolume()})),g.Nb(),g.Nb(),g.Ob(35,"div",15),g.Ob(36,"button",28),g.Wb("click",(function(e){return g.rc(t),g.ac().toggleSlide()})),g.Mb(37,"i",29),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Ob(38,"div",30),g.Ob(39,"div",31),g.Ob(40,"div",32),g.Ob(41,"div",15),g.Mb(42,"mdb-tracklist",33),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Nb()}if(2&t){const t=g.ac();g.gc("ngClass",g.lc(18,L,t.slided,t.smallArt,t.noFocus)),g.zb(2),g.gc("ngIf",!t.videoMode),g.zb(3),g.gc("ngIf",!t.videoMode),g.zb(1),g.gc("ngIf",!t.videoMode),g.zb(1),g.gc("ngIf",!t.videoMode),g.zb(1),g.gc("ngIf",!t.videoMode),g.zb(3),g.Ac(t.track.title),g.zb(3),g.Ac(t.track.trackArtist),g.zb(4),g.Ac(t.track.album.name),g.zb(6),g.gc("ngIf",t.isPlaying),g.zb(1),g.gc("ngIf",t.isPaused),g.zb(3),g.gc("ngIf","mdb-skipped"!==t.lastfmusername),g.zb(1),g.gc("disabled",t.videoMode),g.zb(1),g.gc("ngClass",g.kc(22,E,t.volume>0,0==t.volume)),g.zb(1),g.gc("ngClass",g.jc(25,z,t.isShuffled)),g.zb(2),g.gc("hidden",!t.showVolumeWindow),g.zb(1),g.gc("ngModel",t.volume),g.zb(8),g.gc("playlist",t.playlist)}}function V(t,e){1&t&&(g.Ob(0,"div",50),g.Ob(1,"div",51),g.Ob(2,"div",31),g.Ob(3,"div",52),g.Ob(4,"div",15),g.Ob(5,"h3"),g.zc(6,"Nothing is playing"),g.Nb(),g.Ob(7,"p"),g.zc(8," This is where you'll see the song you're playing and songs that are coming up. "),g.Nb(),g.Ob(9,"p"),g.zc(10," Find an "),g.Ob(11,"a",53),g.Mb(12,"span",54),g.zc(13," artist"),g.Nb(),g.zc(14," or "),g.Ob(15,"a",55),g.Mb(16,"span",56),g.zc(17," album"),g.Nb(),g.zc(18," that you want to play; or setup a "),g.Ob(19,"a",57),g.Mb(20,"span",58),g.zc(21," playlist"),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Nb(),g.Nb())}const W=[{path:"",component:(()=>{class t{constructor(t,e,i,s,n,o,r){this.pathService=t,this.coreService=e,this.playerService=i,this.router=s,this.lastFMService=n,this.animationService=o,this.http=r,this.previousTrack={},this.slided=!1,this.isPlaying=!1,this.isPaused=!1,this.isShuffled=!1,this.isDragging=!1,this.c=this,this.lastfmusername="",this.showVolumeWindow=!1,this.volume=100,this.showVisualisation=this.booleanState("visualisation-state"),this.preferVideo=this.booleanState("preferVideo-state"),this.smallArt=this.booleanState("small-art"),this.videoMode=!1,this.isEventBound=!1,this.noFocus=!1,this.timeoutTimer=null,this.timeoutTime=5e3,this.startDrag=t=>{this.isDragging=!0},this.drag=t=>{if(this.isDragging){const e=((t.clientX||t.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;e>=0&&e<=1&&this.setIndicatorPosition(e)}},this.stopDrag=t=>{if(this.isDragging){this.isDragging=!1;const e=((t.clientX||t.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;this.playerService.setPosition(this.track.duration/1e3*e)}};const a=this.playerService.getCurrentPlaylist();a&&(this.playlist=a.playlist,this.trackIndex=a.startIndex,this.isPaused=a.isPaused,this.isPlaying=a.isPlaying,this.isShuffled=a.isShuffled,this.volume=this.playerService.getVolume(),this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe(t=>{this.playlist=t.playlist,this.trackIndex=t.startIndex,this.isPaused=t.isPaused,this.isPlaying=t.isPlaying,this.isShuffled=t.isShuffled,this.setTrack()}),this.subscription2=this.playerService.volumeAnnounced.subscribe(t=>{this.volume=t}),this.subscription3=this.playerService.hideVolumeWindowAnnounced$.subscribe(()=>{this.showVolumeWindow=!1}),this.pathService.announcePage("Now playing"),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].addEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].addEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].addEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].addEventListener("mouseup",this.stopDrag)),this.timeoutTimer=setTimeout(()=>{this.onTimeout()},this.timeoutTime)}ngOnInit(){setTimeout(()=>{this.track&&("ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",this.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",this.startDrag),this.isEventBound=!0)},250),this.lastfmusername=localStorage.getItem("lastfm-username")||""}setTrack(){this.track=this.playlist.tracks[this.trackIndex],this.currentTrack!==this.track&&(this.currentTrack=this.track,this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h4")),this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h5"))),this.isEventBound||setTimeout(()=>{try{"ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",this.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",this.startDrag),this.isEventBound=!0}catch(t){console.error(t)}},250)}toggleSlide(){this.slided=!this.slided}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].removeEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].removeEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("mouseup",this.stopDrag)),clearTimeout(this.timeoutTime)}navigateToArtist(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName])}navigateToAlbum(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName,"album",this.track.album.sortName])}next(){this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout(()=>{const t=document.querySelector(".previous-album-art");t.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,t.classList.remove("slideRightOut"),t.classList.remove("slideLeftOut"),this.animationService.requestAnimation("slideLeftOut",t,!1),this.trackIndex<this.playlist.tracks.length-1?(this.trackIndex++,this.playerService.next()):this.playlist.isContinues?(this.trackIndex=0,"random"===this.playlist.type||"radio"===this.playlist.type?this.playerService.nextPlaylist(this.playlist.type):this.playerService.nextAlbum(this.track.album)):this.playerService.stop()})}prev(){this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout(()=>{const t=document.querySelector(".previous-album-art");t.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,t.classList.remove("slideRightOut"),t.classList.remove("slideLeftOut"),this.animationService.requestAnimation("slideRightOut",t,!1),this.trackIndex>0&&(this.trackIndex--,this.playerService.prev())})}togglePlayPause(){this.videoMode?this.isPlaying?(this.player.pauseVideo(),this.isPlaying=!1,this.isPaused=!0):(this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1):this.playerService.togglePlayPause()}toggleShuffle(){this.isShuffled=!this.isShuffled,this.playerService.shufflePlaylist(this.isShuffled)}toggleLoved(){this.track.isLoved=!this.track.isLoved,this.lastFMService.toggleLoved(this.track).subscribe(t=>{console.info(t)})}setIndicatorPosition(t){document.getElementById("position-indicator").style.marginLeft=100*t+"%"}toggleVolumeWindow(t){t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault(),this.showVolumeWindow=!this.showVolumeWindow}setVolume(){this.playerService.setVolume(this.volume)}round(t){return Math.floor(t)}handleError(t){return Object(a.a)("no video")}toggleVideo(){this.videoMode=!this.videoMode,this.videoMode?this.playerService.pause():this.playerService.togglePlayPause()}savePlayer(t){this.player=t,this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1}onStateChange(t){0===t.data&&(this.videoMode=!1,this.next())}onTimeout(){this.slided||this.videoMode||(this.noFocus=!0)}onMove(t){clearTimeout(this.timeoutTimer),this.noFocus=!1,this.timeoutTimer=setTimeout(()=>{this.onTimeout()},this.timeoutTime)}booleanState(t){const e=localStorage.getItem(t);return!(!e||"true"!==e)}}return t.\u0275fac=function(e){return new(e||t)(g.Lb(h.a),g.Lb(u.a),g.Lb(c.a),g.Lb(r.c),g.Lb(d.a),g.Lb(l.a),g.Lb(b.a))},t.\u0275cmp=g.Fb({type:t,selectors:[["ng-component"]],hostBindings:function(t,e){1&t&&g.Wb("mousemove",(function(t){return e.onMove(t)}))},decls:2,vars:2,consts:[["class","container-fluid animated-page","id","nowPlaying",3,"ngClass",4,"ngIf"],["class","animated-page",4,"ngIf"],["id","nowPlaying",1,"container-fluid","animated-page",3,"ngClass"],[1,"top"],["class","image-wrapper",4,"ngIf"],[1,"control-wrapper-wrapper"],[1,"row","controls-wrapper"],["class","progress",4,"ngIf"],["id","progress-pusher",4,"ngIf"],["class","time start",4,"ngIf"],["class","time stop",4,"ngIf"],[1,"track-info"],[3,"click"],[1,"hidden-xs","color-type-secondary"],[1,"row","icons"],[1,"col-12"],[1,"btn","btn-link",3,"click"],[1,"glyph","glyph-previous"],["class","glyph glyph-pause",4,"ngIf"],["class","glyph glyph-play",4,"ngIf"],[1,"glyph","glyph-next"],["class","btn btn-link btn-love",3,"ngClass","click",4,"ngIf"],[1,"btn","btn-link","btn-volume","d-none","d-md-inline",3,"disabled","click"],[1,"glyph",3,"ngClass"],[1,"btn","btn-link","d-none","d-md-inline","btn-shuffle",3,"ngClass","click"],[1,"glyph","glyph-shuffle"],[1,"volume-control",3,"hidden"],["type","range","min","0","max","100",3,"ngModel","ngModelChange","input","change"],[1,"btn","btn-link","btn-updown",3,"click"],["id","upordown",1,"glyph","glyph-chevron-up"],[1,"bottom"],[1,"container"],[1,"row"],[3,"playlist"],[1,"image-wrapper"],[4,"ngIf"],[1,"current-album-art","always-replace",3,"swipeleft","swiperight"],["objectFit","contain",3,"artist","album"],[1,"previous-album-art",3,"swipeleft","swiperight"],[1,"progress"],["role","progressbar",1,"progress-bar","buffered-bar",3,"ngStyle"],[1,"progress-bar",3,"ngStyle"],["id","position-indicator",3,"ngStyle","ngClass"],["id","progress-pusher"],[1,"time","start"],[1,"time","stop"],[1,"glyph","glyph-pause"],[1,"glyph","glyph-play"],[1,"btn","btn-link","btn-love",3,"ngClass","click"],[1,"glyph","glyph-star-outline"],[1,"animated-page"],[1,"jumbotron","theme-light"],[1,"row","albumdetail"],["routerLink","/artists"],[1,"glyph","glyph-people"],["routerLink","/albums"],[1,"glyph","glyph-music-album"],["routerLink","/playlists"],[1,"glyph","glyph-music-info"]],template:function(t,e){1&t&&(g.xc(0,x,43,27,"div",0),g.xc(1,V,22,0,"div",1)),2&t&&(g.gc("ngIf",e.track),g.zb(1),g.gc("ngIf",!e.track))},directives:[s.l,s.j,n.l,n.a,n.f,n.i,m.a,s.m,r.d],pipes:[p.a],encapsulation:2}),t})()}];let A=(()=>{class t{}return t.\u0275mod=g.Jb({type:t}),t.\u0275inj=g.Ib({factory:function(e){return new(e||t)},imports:[[r.e.forChild(W)],r.e]}),t})();i.d(e,"NowPlayingModule",(function(){return B}));let B=(()=>{class t{}return t.\u0275mod=g.Jb({type:t}),t.\u0275inj=g.Ib({factory:function(e){return new(e||t)},imports:[[s.c,A,o.a,n.b]]}),t})()}}]);