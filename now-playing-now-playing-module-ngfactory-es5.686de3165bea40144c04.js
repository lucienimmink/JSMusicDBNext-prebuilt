(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{wPTJ:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("pMnS"),s=u("Ip0R"),o=u("gIcY"),a=u("Z3YK"),r=u("Oz9T"),c=u("ufXC"),b=u("ZYCi"),p=u("cpgm"),d=u("XlPw"),g=(u("hR/0"),u("1gFc")),h=u("ktVm"),m=u("t083"),v=u("XtVx"),f=function(){function l(l,n,u,t,e,i,s){var o=this;this.pathService=l,this.coreService=n,this.playerService=u,this.router=t,this.lastFMService=e,this.animationService=i,this.http=s,this.previousTrack={},this.slided=!1,this.isPlaying=!1,this.isPaused=!1,this.isShuffled=!1,this.isDragging=!1,this.c=this,this.lastfmusername="",this.showVolumeWindow=!1,this.volume=100,this.showVisualisation=this.booleanState("visualisation-state"),this.preferVideo=this.booleanState("preferVideo-state"),this.smallArt=this.booleanState("small-art"),this.videoMode=!1,this.isEventBound=!1,this.noFocus=!1,this.timeoutTimer=null,this.timeoutTime=5e3,this.startDrag=function(l){o.isDragging=!0},this.drag=function(l){if(o.isDragging){var n=((l.clientX||l.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;n>=0&&n<=1&&o.setIndicatorPosition(n)}},this.stopDrag=function(l){if(o.isDragging){o.isDragging=!1;var n=((l.clientX||l.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;o.playerService.setPosition(o.track.duration/1e3*n)}};var a=this.playerService.getCurrentPlaylist();a&&(this.playlist=a.playlist,this.trackIndex=a.startIndex,this.isPaused=a.isPaused,this.isPlaying=a.isPlaying,this.isShuffled=a.isShuffled,this.volume=this.playerService.getVolume(),this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe(function(l){o.playlist=l.playlist,o.trackIndex=l.startIndex,o.isPaused=l.isPaused,o.isPlaying=l.isPlaying,o.isShuffled=l.isShuffled,o.setTrack()}),this.subscription2=this.playerService.volumeAnnounced.subscribe(function(l){o.volume=l}),this.subscription3=this.playerService.hideVolumeWindowAnnounced$.subscribe(function(){o.showVolumeWindow=!1}),this.pathService.announcePage("Now playing"),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].addEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].addEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].addEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].addEventListener("mouseup",this.stopDrag)),this.timeoutTimer=setTimeout(function(){o.onTimeout()},this.timeoutTime)}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(){l.track&&("ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",l.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",l.startDrag),l.isEventBound=!0)},250),this.lastfmusername=localStorage.getItem("lastfm-username")||""},l.prototype.setTrack=function(){var l=this;this.track=this.playlist.tracks[this.trackIndex],this.currentTrack!==this.track&&(this.currentTrack=this.track,this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h4")),this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h5"))),this.isEventBound||setTimeout(function(){try{"ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",l.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",l.startDrag),l.isEventBound=!0}catch(n){console.error(n)}},250)},l.prototype.toggleSlide=function(){this.slided=!this.slided},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].removeEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].removeEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("mouseup",this.stopDrag)),clearTimeout(this.timeoutTime)},l.prototype.navigateToArtist=function(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName])},l.prototype.navigateToAlbum=function(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName,"album",this.track.album.sortName])},l.prototype.next=function(){var l=this;this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout(function(){var n=document.querySelector(".previous-album-art");n.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,n.classList.remove("slideRightOut"),n.classList.remove("slideLeftOut"),l.animationService.requestAnimation("slideLeftOut",n,!1),l.trackIndex<l.playlist.tracks.length-1?(l.trackIndex++,l.playerService.next()):l.playlist.isContinues?(l.trackIndex=0,"random"===l.playlist.type||"radio"===l.playlist.type?l.playerService.nextPlaylist(l.playlist.type):l.playerService.nextAlbum(l.track.album)):l.playerService.stop()})},l.prototype.prev=function(){var l=this;this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout(function(){var n=document.querySelector(".previous-album-art");n.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,n.classList.remove("slideRightOut"),n.classList.remove("slideLeftOut"),l.animationService.requestAnimation("slideRightOut",n,!1),l.trackIndex>0&&(l.trackIndex--,l.playerService.prev())})},l.prototype.togglePlayPause=function(){this.videoMode?this.isPlaying?(this.player.pauseVideo(),this.isPlaying=!1,this.isPaused=!0):(this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1):this.playerService.togglePlayPause()},l.prototype.toggleShuffle=function(){this.isShuffled=!this.isShuffled,this.playerService.shufflePlaylist(this.isShuffled)},l.prototype.toggleLoved=function(){this.track.isLoved=!this.track.isLoved,this.lastFMService.toggleLoved(this.track).subscribe(function(l){console.info(l)})},l.prototype.setIndicatorPosition=function(l){document.getElementById("position-indicator").style.marginLeft=100*l+"%"},l.prototype.toggleVolumeWindow=function(l){l.stopPropagation(),l.stopImmediatePropagation(),l.preventDefault(),this.showVolumeWindow=!this.showVolumeWindow},l.prototype.setVolume=function(){this.playerService.setVolume(this.volume)},l.prototype.round=function(l){return Math.floor(l)},l.prototype.handleError=function(l){return Object(d.a)("no video")},l.prototype.toggleVideo=function(){this.videoMode=!this.videoMode,this.videoMode?this.playerService.pause():this.playerService.togglePlayPause()},l.prototype.savePlayer=function(l){this.player=l,this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1},l.prototype.onStateChange=function(l){0===l.data&&(this.videoMode=!1,this.next())},l.prototype.onTimeout=function(){this.slided||this.videoMode||(this.noFocus=!0)},l.prototype.onMove=function(l){var n=this;clearTimeout(this.timeoutTimer),this.noFocus=!1,this.timeoutTimer=setTimeout(function(){n.onTimeout()},this.timeoutTime)},l.prototype.booleanState=function(l){var n=localStorage.getItem(l);return!(!n||"true"!==n)},l}(),y=u("t/Na"),k=t.ob({encapsulation:2,styles:[],data:{}});function q(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,0,"canvas",[],null,null,null,null,null))],null,null)}function S(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,5,"div",[["class","image-wrapper"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,q)),t.pb(2,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(3,0,null,null,1,"div",[["class","current-album-art always-replace"]],null,[[null,"swipeleft"],[null,"swiperight"]],function(l,n,u){var t=!0,e=l.component;return"swipeleft"===n&&(t=!1!==e.next()&&t),"swiperight"===n&&(t=!1!==e.prev()&&t),t},null,null)),(l()(),t.qb(4,0,null,null,0,"album-art",[["objectFit","contain"]],[[8,"artist",0],[8,"album",0]],null,null,null,null)),(l()(),t.qb(5,0,null,null,0,"div",[["class","previous-album-art"]],null,[[null,"swipeleft"],[null,"swiperight"]],function(l,n,u){var t=!0,e=l.component;return"swipeleft"===n&&(t=!1!==e.next()&&t),"swiperight"===n&&(t=!1!==e.prev()&&t),t},null,null))],function(l,n){l(n,2,0,n.component.showVisualisation)},function(l,n){var u=n.component;l(n,4,0,u.track.trackArtist,u.track.album.name)})}function L(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,15,"div",[["class","progress"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,3,"div",[["class","progress-bar buffered-bar"],["role","progressbar"]],null,null,null,null,null)),t.Gb(512,null,s.w,s.x,[t.k,t.t,t.D]),t.pb(3,278528,null,0,s.n,[s.w],{ngStyle:[0,"ngStyle"]},null),t.Eb(4,{width:0}),(l()(),t.qb(5,0,null,null,3,"div",[["class","progress-bar"]],null,null,null,null,null)),t.Gb(512,null,s.w,s.x,[t.k,t.t,t.D]),t.pb(7,278528,null,0,s.n,[s.w],{ngStyle:[0,"ngStyle"]},null),t.Eb(8,{width:0}),(l()(),t.qb(9,0,null,null,6,"div",[["id","position-indicator"]],null,null,null,null,null)),t.Gb(512,null,s.u,s.v,[t.s,t.t,t.k,t.D]),t.pb(11,278528,null,0,s.i,[s.u],{ngClass:[0,"ngClass"]},null),t.Eb(12,{dragging:0}),t.Gb(512,null,s.w,s.x,[t.k,t.t,t.D]),t.pb(14,278528,null,0,s.n,[s.w],{ngStyle:[0,"ngStyle"]},null),t.Eb(15,{"margin-left":0})],function(l,n){var u=n.component,t=l(n,4,0,u.round(u.track.buffered.end/u.track.duration*100)+"%");l(n,3,0,t);var e=l(n,8,0,u.track.position/u.track.duration*100+"%");l(n,7,0,e);var i=l(n,12,0,u.isDragging);l(n,11,0,i);var s=l(n,15,0,u.track.position/u.track.duration*100+"%");l(n,14,0,s)},null)}function w(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,0,"div",[["id","progress-pusher"]],null,null,null,null,null))],null,null)}function C(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"span",[["class","time start"]],null,null,null,null,null)),(l()(),t.Jb(1,null,["",""])),t.Fb(2,1)],null,function(l,n){var u=n.component,e=t.Kb(n,1,0,l(n,2,0,t.Cb(n.parent.parent,0),u.track.position));l(n,1,0,e)})}function I(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"span",[["class","time stop"]],null,null,null,null,null)),(l()(),t.Jb(1,null,["",""])),t.Fb(2,1)],null,function(l,n){var u=n.component,e=t.Kb(n,1,0,l(n,2,0,t.Cb(n.parent.parent,0),u.track.duration));l(n,1,0,e)})}function E(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,0,"i",[["class","glyph glyph-pause"]],null,null,null,null,null))],null,null)}function T(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,0,"i",[["class","glyph glyph-play"]],null,null,null,null,null))],null,null)}function P(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,4,"button",[["class","btn btn-link btn-love"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleLoved()&&t),t},null,null)),t.Gb(512,null,s.u,s.v,[t.s,t.t,t.k,t.D]),t.pb(2,278528,null,0,s.i,[s.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(3,{active:0}),(l()(),t.qb(4,0,null,null,0,"i",[["class","glyph glyph-star-outline"]],null,null,null,null,null))],function(l,n){var u=l(n,3,0,n.component.track.isLoved);l(n,2,0,"btn btn-link btn-love",u)},null)}function D(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,66,"div",[["class","container-fluid animated-page"],["id","nowPlaying"]],null,null,null,null,null)),t.Gb(512,null,s.u,s.v,[t.s,t.t,t.k,t.D]),t.pb(2,278528,null,0,s.i,[s.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(3,{slided:0,"small-art":1,"no-focus":2}),(l()(),t.qb(4,0,null,null,56,"div",[["class","top"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,S)),t.pb(6,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(7,0,null,null,53,"div",[["class","control-wrapper-wrapper"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,18,"div",[["class","row controls-wrapper"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,L)),t.pb(10,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,w)),t.pb(12,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,C)),t.pb(14,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,I)),t.pb(16,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(17,0,null,null,9,"div",[["class","track-info"]],null,null,null,null,null)),(l()(),t.qb(18,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Jb(19,null,["",""])),(l()(),t.qb(20,0,null,null,6,"h5",[],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateToArtist()&&t),t},null,null)),(l()(),t.Jb(22,null,["",""])),(l()(),t.qb(23,0,null,null,3,"span",[["class","hidden-xs color-type-secondary"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" \u2022 "])),(l()(),t.qb(25,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateToAlbum()&&t),t},null,null)),(l()(),t.Jb(26,null,["",""])),(l()(),t.qb(27,0,null,null,33,"div",[["class","row icons"]],null,null,null,null,null)),(l()(),t.qb(28,0,null,null,21,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.qb(29,0,null,null,1,"button",[["class","btn btn-link"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.prev()&&t),t},null,null)),(l()(),t.qb(30,0,null,null,0,"i",[["class","glyph glyph-previous"]],null,null,null,null,null)),(l()(),t.qb(31,0,null,null,4,"button",[["class","btn btn-link"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.togglePlayPause()&&t),t},null,null)),(l()(),t.gb(16777216,null,null,1,null,E)),t.pb(33,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,T)),t.pb(35,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(36,0,null,null,1,"button",[["class","btn btn-link"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.next()&&t),t},null,null)),(l()(),t.qb(37,0,null,null,0,"i",[["class","glyph glyph-next"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,P)),t.pb(39,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(40,0,null,null,4,"button",[["class","btn btn-link btn-volume d-none d-md-inline"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleVolumeWindow(u)&&t),t},null,null)),(l()(),t.qb(41,0,null,null,3,"span",[["class","glyph"]],null,null,null,null,null)),t.Gb(512,null,s.u,s.v,[t.s,t.t,t.k,t.D]),t.pb(43,278528,null,0,s.i,[s.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(44,{"glyph-volume":0,"glyph-mute":1}),(l()(),t.qb(45,0,null,null,4,"button",[["class","btn btn-link d-none d-md-inline btn-shuffle"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleShuffle()&&t),t},null,null)),t.Gb(512,null,s.u,s.v,[t.s,t.t,t.k,t.D]),t.pb(47,278528,null,0,s.i,[s.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(48,{active:0}),(l()(),t.qb(49,0,null,null,0,"i",[["class","glyph glyph-shuffle"]],null,null,null,null,null)),(l()(),t.qb(50,0,null,null,7,"div",[["class","volume-control"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t.qb(51,0,null,null,6,"input",[["max","100"],["min","0"],["type","range"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"change"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.Cb(l,52)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,52).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,52)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,52)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Cb(l,53).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Cb(l,53).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,53).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(i.volume=u)&&e),"input"===n&&(e=!1!==i.setVolume()&&e),"change"===n&&(e=!1!==i.setVolume()&&e),e},null,null)),t.pb(52,16384,null,0,o.c,[t.D,t.k,[2,o.a]],null,null),t.pb(53,16384,null,0,o.n,[t.D,t.k],null,null),t.Gb(1024,null,o.f,function(l,n){return[l,n]},[o.c,o.n]),t.pb(55,671744,null,0,o.k,[[8,null],[8,null],[8,null],[6,o.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,o.g,null,[o.k]),t.pb(57,16384,null,0,o.h,[[4,o.g]],null,null),(l()(),t.qb(58,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.qb(59,0,null,null,1,"button",[["class","btn btn-link btn-updown"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleSlide()&&t),t},null,null)),(l()(),t.qb(60,0,null,null,0,"i",[["class","glyph glyph-chevron-up"],["id","upordown"]],null,null,null,null,null)),(l()(),t.qb(61,0,null,null,5,"div",[["class","bottom "]],null,null,null,null,null)),(l()(),t.qb(62,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(63,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.qb(64,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.qb(65,0,null,null,1,"mdb-tracklist",[],null,null,null,a.b,a.a)),t.pb(66,49152,null,0,r.a,[c.a],{playlist:[0,"playlist"]},null)],function(l,n){var u=n.component,t=l(n,3,0,u.slided,u.smallArt,u.noFocus);l(n,2,0,"container-fluid animated-page",t),l(n,6,0,!u.videoMode),l(n,10,0,!u.videoMode),l(n,12,0,!u.videoMode),l(n,14,0,!u.videoMode),l(n,16,0,!u.videoMode),l(n,33,0,u.isPlaying),l(n,35,0,u.isPaused),l(n,39,0,"mdb-skipped"!==u.lastfmusername);var e=l(n,44,0,u.volume>0,0==u.volume);l(n,43,0,"glyph",e);var i=l(n,48,0,u.isShuffled);l(n,47,0,"btn btn-link d-none d-md-inline btn-shuffle",i),l(n,55,0,u.volume),l(n,66,0,u.playlist)},function(l,n){var u=n.component;l(n,19,0,u.track.title),l(n,22,0,u.track.trackArtist),l(n,26,0,u.track.album.name),l(n,40,0,u.videoMode),l(n,50,0,!u.showVolumeWindow),l(n,51,0,t.Cb(n,57).ngClassUntouched,t.Cb(n,57).ngClassTouched,t.Cb(n,57).ngClassPristine,t.Cb(n,57).ngClassDirty,t.Cb(n,57).ngClassValid,t.Cb(n,57).ngClassInvalid,t.Cb(n,57).ngClassPending)})}function A(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,24,"div",[["class","animated-page"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,23,"div",[["class","jumbotron theme-light"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,22,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,21,"div",[["class","row albumdetail"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,20,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Nothing is playing"])),(l()(),t.qb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" This is where you'll see the song you're playing and songs that are coming up. "])),(l()(),t.qb(9,0,null,null,15,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Find an "])),(l()(),t.qb(11,0,null,null,3,"a",[["routerLink","/artists"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.pb(12,671744,null,0,b.l,[b.k,b.a,s.h],{routerLink:[0,"routerLink"]},null),(l()(),t.qb(13,0,null,null,0,"span",[["class","glyph glyph-people"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" artist"])),(l()(),t.Jb(-1,null,[" or "])),(l()(),t.qb(16,0,null,null,3,"a",[["routerLink","/albums"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,17).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.pb(17,671744,null,0,b.l,[b.k,b.a,s.h],{routerLink:[0,"routerLink"]},null),(l()(),t.qb(18,0,null,null,0,"span",[["class","glyph glyph-music-album"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" album"])),(l()(),t.Jb(-1,null,[" that you want to play; or setup a "])),(l()(),t.qb(21,0,null,null,3,"a",[["routerLink","/playlists"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,22).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.pb(22,671744,null,0,b.l,[b.k,b.a,s.h],{routerLink:[0,"routerLink"]},null),(l()(),t.qb(23,0,null,null,0,"span",[["class","glyph glyph-music-info"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" playlist"]))],function(l,n){l(n,12,0,"/artists"),l(n,17,0,"/albums"),l(n,22,0,"/playlists")},function(l,n){l(n,11,0,t.Cb(n,12).target,t.Cb(n,12).href),l(n,16,0,t.Cb(n,17).target,t.Cb(n,17).href),l(n,21,0,t.Cb(n,22).target,t.Cb(n,22).href)})}function M(l){return t.Lb(0,[t.Db(0,p.a,[]),(l()(),t.gb(16777216,null,null,1,null,D)),t.pb(2,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,A)),t.pb(4,16384,null,0,s.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.track),l(n,4,0,!u.track)},null)}function x(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"ng-component",[],null,[[null,"mousemove"]],function(l,n,u){var e=!0;return"mousemove"===n&&(e=!1!==t.Cb(l,1).onMove(u)&&e),e},M,k)),t.pb(1,245760,null,0,f,[v.a,h.a,c.a,b.k,m.a,g.a,y.c],null,null)],function(l,n){l(n,1,0)},null)}var V=t.mb("ng-component",f,x,{},{},[]),O=function(){return function(){}}(),B=u("hDf6");u.d(n,"NowPlayingModuleNgFactory",function(){return J});var J=t.nb(e,[],function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[i.a,V]],[3,t.j],t.x]),t.Ab(4608,s.m,s.l,[t.u,[2,s.z]]),t.Ab(4608,o.r,o.r,[]),t.Ab(1073742336,s.b,s.b,[]),t.Ab(1073742336,b.m,b.m,[[2,b.r],[2,b.k]]),t.Ab(1073742336,O,O,[]),t.Ab(1073742336,B.a,B.a,[]),t.Ab(1073742336,o.q,o.q,[]),t.Ab(1073742336,o.d,o.d,[]),t.Ab(1073742336,e,e,[]),t.Ab(256,t.u,"en-GB",[]),t.Ab(1024,b.i,function(){return[[{path:"",component:f}]]},[])])})}}]);