(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{wPTJ:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),s=u("SVse"),a=u("xOws"),o=u("IheW"),r=u("0/mZ"),c=u("s7LF"),m=u("Z3YK"),b=u("Oz9T"),h=u("ufXC"),d=u("iInd"),g=u("cpgm"),p=u("z6cu"),v=u("1gFc"),y=u("ktVm"),f=u("t083"),k=u("XtVx");class w{constructor(l,n,u,t,e,i,s){this.pathService=l,this.coreService=n,this.playerService=u,this.router=t,this.lastFMService=e,this.animationService=i,this.http=s,this.previousTrack={},this.slided=!1,this.isPlaying=!1,this.isPaused=!1,this.isShuffled=!1,this.isDragging=!1,this.c=this,this.lastfmusername="",this.showVolumeWindow=!1,this.volume=100,this.showVisualisation=this.booleanState("visualisation-state"),this.preferVideo=this.booleanState("preferVideo-state"),this.smallArt=this.booleanState("small-art"),this.videoMode=!1,this.isEventBound=!1,this.noFocus=!1,this.timeoutTimer=null,this.timeoutTime=5e3,this.startDrag=(l=>{this.isDragging=!0}),this.drag=(l=>{if(this.isDragging){const n=((l.clientX||l.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;n>=0&&n<=1&&this.setIndicatorPosition(n)}}),this.stopDrag=(l=>{if(this.isDragging){this.isDragging=!1;const n=((l.clientX||l.changedTouches[0].clientX)-60)/document.getElementById("progress-pusher").clientWidth;this.playerService.setPosition(this.track.duration/1e3*n)}});const a=this.playerService.getCurrentPlaylist();a&&(this.playlist=a.playlist,this.trackIndex=a.startIndex,this.isPaused=a.isPaused,this.isPlaying=a.isPlaying,this.isShuffled=a.isShuffled,this.volume=this.playerService.getVolume(),this.setTrack()),this.subscription=this.playerService.playlistAnnounced$.subscribe(l=>{this.playlist=l.playlist,this.trackIndex=l.startIndex,this.isPaused=l.isPaused,this.isPlaying=l.isPlaying,this.isShuffled=l.isShuffled,this.setTrack()}),this.subscription2=this.playerService.volumeAnnounced.subscribe(l=>{this.volume=l}),this.subscription3=this.playerService.hideVolumeWindowAnnounced$.subscribe(()=>{this.showVolumeWindow=!1}),this.pathService.announcePage("Now playing"),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].addEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].addEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].addEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].addEventListener("mouseup",this.stopDrag)),this.timeoutTimer=setTimeout(()=>{this.onTimeout()},this.timeoutTime)}ngOnInit(){setTimeout(()=>{this.track&&("ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",this.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",this.startDrag),this.isEventBound=!0)},250),this.lastfmusername=localStorage.getItem("lastfm-username")||""}setTrack(){setTimeout(()=>{this.albumart&&this.albumart.loadImage()}),this.track=this.playlist.tracks[this.trackIndex],this.currentTrack!==this.track&&(this.currentTrack=this.track,this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h4")),this.animationService.requestAnimation("enter",document.querySelector(".controls-wrapper h5"))),this.isEventBound||setTimeout(()=>{try{"ontouchstart"in document.documentElement?document.getElementById("progress-pusher").addEventListener("touchstart",this.startDrag):document.getElementById("progress-pusher").addEventListener("mousedown",this.startDrag),this.isEventBound=!0}catch(l){console.error(l)}},250)}toggleSlide(){this.slided=!this.slided}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),"ontouchstart"in document.documentElement?(document.getElementsByTagName("body")[0].removeEventListener("touchmove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("touchend",this.stopDrag)):(document.getElementsByTagName("body")[0].removeEventListener("mousemove",this.drag),document.getElementsByTagName("body")[0].removeEventListener("mouseup",this.stopDrag)),clearTimeout(this.timeoutTime)}navigateToArtist(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName])}navigateToAlbum(){this.router.navigate(["/letter",this.track.album.artist.letter.escapedLetter,"artist",this.track.album.artist.sortName,"album",this.track.album.sortName])}next(){this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout(()=>{const l=document.querySelector(".previous-album-art");l.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,l.classList.remove("slideRightOut"),l.classList.remove("slideLeftOut"),this.animationService.requestAnimation("slideLeftOut",l,!1),this.trackIndex<this.playlist.tracks.length-1?(this.trackIndex++,this.playerService.next()):this.playlist.isContinues?(this.trackIndex=0,"random"===this.playlist.type||"radio"===this.playlist.type?this.playerService.nextPlaylist(this.playlist.type):this.playerService.nextAlbum(this.track.album)):this.playerService.stop()})}prev(){this.videoMode&&this.playerService.resume(),this.videoMode=!1,setTimeout(()=>{const l=document.querySelector(".previous-album-art");l.style.backgroundImage=document.querySelector(".current-album-art").style.backgroundImage,l.classList.remove("slideRightOut"),l.classList.remove("slideLeftOut"),this.animationService.requestAnimation("slideRightOut",l,!1),this.trackIndex>0&&(this.trackIndex--,this.playerService.prev())})}togglePlayPause(){this.videoMode?this.isPlaying?(this.player.pauseVideo(),this.isPlaying=!1,this.isPaused=!0):(this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1):this.playerService.togglePlayPause()}toggleShuffle(){this.isShuffled=!this.isShuffled,this.playerService.shufflePlaylist(this.isShuffled)}toggleLoved(){this.track.isLoved=!this.track.isLoved,this.lastFMService.toggleLoved(this.track).subscribe(l=>{console.info(l)})}setIndicatorPosition(l){document.getElementById("position-indicator").style.marginLeft=100*l+"%"}toggleVolumeWindow(l){l.stopPropagation(),l.stopImmediatePropagation(),l.preventDefault(),this.showVolumeWindow=!this.showVolumeWindow}setVolume(){this.playerService.setVolume(this.volume)}round(l){return Math.floor(l)}handleError(l){return Object(p.a)("no video")}toggleVideo(){this.videoMode=!this.videoMode,this.videoMode?this.playerService.pause():this.playerService.togglePlayPause()}savePlayer(l){this.player=l,this.player.playVideo(),this.isPlaying=!0,this.isPaused=!1}onStateChange(l){0===l.data&&(this.videoMode=!1,this.next())}onTimeout(){this.slided||this.videoMode||(this.noFocus=!0)}onMove(l){clearTimeout(this.timeoutTimer),this.noFocus=!1,this.timeoutTimer=setTimeout(()=>{this.onTimeout()},this.timeoutTime)}booleanState(l){const n=localStorage.getItem(l);return!(!n||"true"!==n)}}var S=t.kb({encapsulation:2,styles:[],data:{}});function I(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,0,"canvas",[],null,null,null,null,null))],null,null)}function T(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,6,"div",[["class","image-wrapper"]],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,1,null,I)),t.lb(2,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.mb(3,0,null,null,2,"div",[["class","current-album-art always-replace"]],null,[[null,"swipeleft"],[null,"swiperight"]],function(l,n,u){var t=!0,e=l.component;return"swipeleft"===n&&(t=!1!==e.next()&&t),"swiperight"===n&&(t=!1!==e.prev()&&t),t},null,null)),t.Ab(512,null,a.a,a.a,[o.c]),t.lb(5,16384,[[1,4]],0,r.a,[t.k,a.a],{media:[0,"media"]},null),(l()(),t.mb(6,0,null,null,0,"div",[["class","previous-album-art"]],null,[[null,"swipeleft"],[null,"swiperight"]],function(l,n,u){var t=!0,e=l.component;return"swipeleft"===n&&(t=!1!==e.next()&&t),"swiperight"===n&&(t=!1!==e.prev()&&t),t},null,null))],function(l,n){var u=n.component;l(n,2,0,u.showVisualisation),l(n,5,0,u.track)},null)}function P(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,15,"div",[["class","progress"]],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,3,"div",[["class","progress-bar buffered-bar"],["role","progressbar"]],null,null,null,null,null)),t.Ab(512,null,s.w,s.x,[t.k,t.r,t.B]),t.lb(3,278528,null,0,s.n,[s.w],{ngStyle:[0,"ngStyle"]},null),t.yb(4,{width:0}),(l()(),t.mb(5,0,null,null,3,"div",[["class","progress-bar"]],null,null,null,null,null)),t.Ab(512,null,s.w,s.x,[t.k,t.r,t.B]),t.lb(7,278528,null,0,s.n,[s.w],{ngStyle:[0,"ngStyle"]},null),t.yb(8,{width:0}),(l()(),t.mb(9,0,null,null,6,"div",[["id","position-indicator"]],null,null,null,null,null)),t.Ab(512,null,s.u,s.v,[t.q,t.r,t.k,t.B]),t.lb(11,278528,null,0,s.i,[s.u],{ngClass:[0,"ngClass"]},null),t.yb(12,{dragging:0}),t.Ab(512,null,s.w,s.x,[t.k,t.r,t.B]),t.lb(14,278528,null,0,s.n,[s.w],{ngStyle:[0,"ngStyle"]},null),t.yb(15,{"margin-left":0})],function(l,n){var u=n.component,t=l(n,4,0,u.round(u.track.buffered.end/u.track.duration*100)+"%");l(n,3,0,t);var e=l(n,8,0,u.track.position/u.track.duration*100+"%");l(n,7,0,e);var i=l(n,12,0,u.isDragging);l(n,11,0,i);var s=l(n,15,0,u.track.position/u.track.duration*100+"%");l(n,14,0,s)},null)}function E(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,0,"div",[["id","progress-pusher"]],null,null,null,null,null))],null,null)}function L(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,2,"span",[["class","time start"]],null,null,null,null,null)),(l()(),t.Db(1,null,["",""])),t.zb(2,1)],null,function(l,n){var u=n.component,e=t.Eb(n,1,0,l(n,2,0,t.wb(n.parent.parent,0),u.track.position));l(n,1,0,e)})}function M(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,2,"span",[["class","time stop"]],null,null,null,null,null)),(l()(),t.Db(1,null,["",""])),t.zb(2,1)],null,function(l,n){var u=n.component,e=t.Eb(n,1,0,l(n,2,0,t.wb(n.parent.parent,0),u.track.duration));l(n,1,0,e)})}function D(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,0,"i",[["class","glyph glyph-pause"]],null,null,null,null,null))],null,null)}function B(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,0,"i",[["class","glyph glyph-play"]],null,null,null,null,null))],null,null)}function C(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,4,"button",[["class","btn btn-link btn-love"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleLoved()&&t),t},null,null)),t.Ab(512,null,s.u,s.v,[t.q,t.r,t.k,t.B]),t.lb(2,278528,null,0,s.i,[s.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.yb(3,{active:0}),(l()(),t.mb(4,0,null,null,0,"i",[["class","glyph glyph-star-outline"]],null,null,null,null,null))],function(l,n){var u=l(n,3,0,n.component.track.isLoved);l(n,2,0,"btn btn-link btn-love",u)},null)}function x(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,66,"div",[["class","container-fluid animated-page"],["id","nowPlaying"]],null,null,null,null,null)),t.Ab(512,null,s.u,s.v,[t.q,t.r,t.k,t.B]),t.lb(2,278528,null,0,s.i,[s.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.yb(3,{slided:0,"small-art":1,"no-focus":2}),(l()(),t.mb(4,0,null,null,56,"div",[["class","top"]],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,1,null,T)),t.lb(6,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.mb(7,0,null,null,53,"div",[["class","control-wrapper-wrapper"]],null,null,null,null,null)),(l()(),t.mb(8,0,null,null,18,"div",[["class","row controls-wrapper"]],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,1,null,P)),t.lb(10,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.cb(16777216,null,null,1,null,E)),t.lb(12,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.cb(16777216,null,null,1,null,L)),t.lb(14,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.cb(16777216,null,null,1,null,M)),t.lb(16,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.mb(17,0,null,null,9,"div",[["class","track-info"]],null,null,null,null,null)),(l()(),t.mb(18,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Db(19,null,["",""])),(l()(),t.mb(20,0,null,null,6,"h5",[],null,null,null,null,null)),(l()(),t.mb(21,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateToArtist()&&t),t},null,null)),(l()(),t.Db(22,null,["",""])),(l()(),t.mb(23,0,null,null,3,"span",[["class","hidden-xs color-type-secondary"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" \u2022 "])),(l()(),t.mb(25,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigateToAlbum()&&t),t},null,null)),(l()(),t.Db(26,null,["",""])),(l()(),t.mb(27,0,null,null,33,"div",[["class","row icons"]],null,null,null,null,null)),(l()(),t.mb(28,0,null,null,21,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.mb(29,0,null,null,1,"button",[["class","btn btn-link"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.prev()&&t),t},null,null)),(l()(),t.mb(30,0,null,null,0,"i",[["class","glyph glyph-previous"]],null,null,null,null,null)),(l()(),t.mb(31,0,null,null,4,"button",[["class","btn btn-link"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.togglePlayPause()&&t),t},null,null)),(l()(),t.cb(16777216,null,null,1,null,D)),t.lb(33,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.cb(16777216,null,null,1,null,B)),t.lb(35,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.mb(36,0,null,null,1,"button",[["class","btn btn-link"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.next()&&t),t},null,null)),(l()(),t.mb(37,0,null,null,0,"i",[["class","glyph glyph-next"]],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,1,null,C)),t.lb(39,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.mb(40,0,null,null,4,"button",[["class","btn btn-link btn-volume d-none d-md-inline"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleVolumeWindow(u)&&t),t},null,null)),(l()(),t.mb(41,0,null,null,3,"span",[["class","glyph"]],null,null,null,null,null)),t.Ab(512,null,s.u,s.v,[t.q,t.r,t.k,t.B]),t.lb(43,278528,null,0,s.i,[s.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.yb(44,{"glyph-volume":0,"glyph-mute":1}),(l()(),t.mb(45,0,null,null,4,"button",[["class","btn btn-link d-none d-md-inline btn-shuffle"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleShuffle()&&t),t},null,null)),t.Ab(512,null,s.u,s.v,[t.q,t.r,t.k,t.B]),t.lb(47,278528,null,0,s.i,[s.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.yb(48,{active:0}),(l()(),t.mb(49,0,null,null,0,"i",[["class","glyph glyph-shuffle"]],null,null,null,null,null)),(l()(),t.mb(50,0,null,null,7,"div",[["class","volume-control"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t.mb(51,0,null,null,6,"input",[["max","100"],["min","0"],["type","range"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"change"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t.wb(l,52)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.wb(l,52).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.wb(l,52)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.wb(l,52)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.wb(l,53).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.wb(l,53).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.wb(l,53).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(i.volume=u)&&e),"input"===n&&(e=!1!==i.setVolume()&&e),"change"===n&&(e=!1!==i.setVolume()&&e),e},null,null)),t.lb(52,16384,null,0,c.c,[t.B,t.k,[2,c.a]],null,null),t.lb(53,16384,null,0,c.n,[t.B,t.k],null,null),t.Ab(1024,null,c.f,function(l,n){return[l,n]},[c.c,c.n]),t.lb(55,671744,null,0,c.k,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ab(2048,null,c.g,null,[c.k]),t.lb(57,16384,null,0,c.h,[[4,c.g]],null,null),(l()(),t.mb(58,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.mb(59,0,null,null,1,"button",[["class","btn btn-link btn-updown"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleSlide()&&t),t},null,null)),(l()(),t.mb(60,0,null,null,0,"i",[["class","glyph glyph-chevron-up"],["id","upordown"]],null,null,null,null,null)),(l()(),t.mb(61,0,null,null,5,"div",[["class","bottom "]],null,null,null,null,null)),(l()(),t.mb(62,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.mb(63,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.mb(64,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.mb(65,0,null,null,1,"mdb-tracklist",[],null,null,null,m.b,m.a)),t.lb(66,49152,null,0,b.a,[h.a],{playlist:[0,"playlist"]},null)],function(l,n){var u=n.component,t=l(n,3,0,u.slided,u.smallArt,u.noFocus);l(n,2,0,"container-fluid animated-page",t),l(n,6,0,!u.videoMode),l(n,10,0,!u.videoMode),l(n,12,0,!u.videoMode),l(n,14,0,!u.videoMode),l(n,16,0,!u.videoMode),l(n,33,0,u.isPlaying),l(n,35,0,u.isPaused),l(n,39,0,"mdb-skipped"!==u.lastfmusername);var e=l(n,44,0,u.volume>0,0==u.volume);l(n,43,0,"glyph",e);var i=l(n,48,0,u.isShuffled);l(n,47,0,"btn btn-link d-none d-md-inline btn-shuffle",i),l(n,55,0,u.volume),l(n,66,0,u.playlist)},function(l,n){var u=n.component;l(n,19,0,u.track.title),l(n,22,0,u.track.trackArtist),l(n,26,0,u.track.album.name),l(n,40,0,u.videoMode),l(n,50,0,!u.showVolumeWindow),l(n,51,0,t.wb(n,57).ngClassUntouched,t.wb(n,57).ngClassTouched,t.wb(n,57).ngClassPristine,t.wb(n,57).ngClassDirty,t.wb(n,57).ngClassValid,t.wb(n,57).ngClassInvalid,t.wb(n,57).ngClassPending)})}function A(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,24,"div",[["class","animated-page"]],null,null,null,null,null)),(l()(),t.mb(1,0,null,null,23,"div",[["class","jumbotron theme-light"]],null,null,null,null,null)),(l()(),t.mb(2,0,null,null,22,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.mb(3,0,null,null,21,"div",[["class","row albumdetail"]],null,null,null,null,null)),(l()(),t.mb(4,0,null,null,20,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.mb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Nothing is playing"])),(l()(),t.mb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Db(-1,null,[" This is where you'll see the song you're playing and songs that are coming up. "])),(l()(),t.mb(9,0,null,null,15,"p",[],null,null,null,null,null)),(l()(),t.Db(-1,null,[" Find an "])),(l()(),t.mb(11,0,null,null,3,"a",[["routerLink","/artists"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.wb(l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.lb(12,671744,null,0,d.l,[d.k,d.a,s.h],{routerLink:[0,"routerLink"]},null),(l()(),t.mb(13,0,null,null,0,"span",[["class","glyph glyph-people"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" artist"])),(l()(),t.Db(-1,null,[" or "])),(l()(),t.mb(16,0,null,null,3,"a",[["routerLink","/albums"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.wb(l,17).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.lb(17,671744,null,0,d.l,[d.k,d.a,s.h],{routerLink:[0,"routerLink"]},null),(l()(),t.mb(18,0,null,null,0,"span",[["class","glyph glyph-music-album"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" album"])),(l()(),t.Db(-1,null,[" that you want to play; or setup a "])),(l()(),t.mb(21,0,null,null,3,"a",[["routerLink","/playlists"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.wb(l,22).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.lb(22,671744,null,0,d.l,[d.k,d.a,s.h],{routerLink:[0,"routerLink"]},null),(l()(),t.mb(23,0,null,null,0,"span",[["class","glyph glyph-music-info"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" playlist"]))],function(l,n){l(n,12,0,"/artists"),l(n,17,0,"/albums"),l(n,22,0,"/playlists")},function(l,n){l(n,11,0,t.wb(n,12).target,t.wb(n,12).href),l(n,16,0,t.wb(n,17).target,t.wb(n,17).href),l(n,21,0,t.wb(n,22).target,t.wb(n,22).href)})}function V(l){return t.Fb(0,[t.xb(0,g.a,[]),t.Bb(671088640,1,{albumart:0}),(l()(),t.cb(16777216,null,null,1,null,x)),t.lb(3,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.cb(16777216,null,null,1,null,A)),t.lb(5,16384,null,0,s.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.track),l(n,5,0,!u.track)},null)}function F(l){return t.Fb(0,[(l()(),t.mb(0,0,null,null,1,"ng-component",[],null,[[null,"mousemove"]],function(l,n,u){var e=!0;return"mousemove"===n&&(e=!1!==t.wb(l,1).onMove(u)&&e),e},V,S)),t.lb(1,245760,null,0,w,[k.a,y.a,h.a,d.k,f.a,v.a,o.c],null,null)],function(l,n){l(n,1,0)},null)}var q=t.ib("ng-component",w,F,{},{},[]);class J{}var N=u("hDf6");u.d(n,"NowPlayingModuleNgFactory",function(){return O});var O=t.jb(e,[],function(l){return t.tb([t.ub(512,t.j,t.X,[[8,[i.a,q]],[3,t.j],t.v]),t.ub(4608,s.m,s.l,[t.s,[2,s.z]]),t.ub(4608,c.r,c.r,[]),t.ub(1073742336,s.b,s.b,[]),t.ub(1073742336,d.m,d.m,[[2,d.r],[2,d.k]]),t.ub(1073742336,J,J,[]),t.ub(1073742336,N.a,N.a,[]),t.ub(1073742336,c.q,c.q,[]),t.ub(1073742336,c.d,c.d,[]),t.ub(1073742336,e,e,[]),t.ub(256,t.s,"en-GB",[]),t.ub(1024,d.i,function(){return[[{path:"",component:w}]]},[])])})}}]);