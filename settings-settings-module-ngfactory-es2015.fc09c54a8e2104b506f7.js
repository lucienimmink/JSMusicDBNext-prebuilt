(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3F3D":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var s=u("pMnS"),a=u("iInd"),o=u("SVse"),i=u("cpgm"),c=u("s7LF"),r=u("ztCj"),b=u("MDLy"),g=u("+ooL"),m=u("OgP6"),p=u("ktVm"),h=u("t083"),d=u("XtVx");class v{}const{version:f}=u("kiQV");class k{constructor(l,n,u,t,e,s,a){this.pathService=l,this.coreService=n,this.lastFMService=u,this.collectionService=t,this.router=e,this.configService=s,this.colorService=a,this.connectiontype="node-mp3stream",this.connectiondetails="",this.savePlaylistState=this.booleanState("save-playlist-state"),this.isContinuesplay=this.booleanState("continues-play"),this.hasDynamicAccentColor=this.booleanState("dynamic-accent-color"),this.isReloading=!1,this.scanperc=0,this.version="__dev__",this.lastParsed=Number(localStorage.getItem("lastParsed")),this.visualisation=this.booleanState("visualisation-state"),this.tracking=this.booleanState("tracking-state"),this.addToHomescreen=!1,this.isVisualCapable=-1===navigator.userAgent.indexOf("Mobi"),this.manualScrobbling=this.booleanState("manual-scrobble-state"),this.smallArt=this.booleanState("small-art"),this.hasBeenReloading=!1,this.settings=new v,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(l=>{this.ngOnInit()}),this.subscription2=this.lastFMService.manualScrobbleList$.subscribe(l=>{this.manualScrobblingList=l}),this.subscription3=this.configService.theme$.subscribe(l=>{this.settings.theme=l,this.theme=l}),this.subscription4=this.configService.mode$.subscribe(l=>{this.mode=l}),this.settings.theme=this.configService.theme,this.theme=this.configService.theme,this.mode=this.configService.mode,this.poll(),this.version=f,Object(r.c)("manual-scrobble-list").then(l=>{this.manualScrobblingList=l||[]})}ngAfterViewChecked(){this.formChanged()}formChanged(){this.currentForm!==this.themeForm&&(this.themeForm=this.currentForm,this.themeForm&&this.themeForm.valueChanges.subscribe(l=>{l&&l.theme&&(this.configService.theme=l.theme,this.theme=l.theme)}))}ngOnInit(){this.pathService.announcePage("Settings"),this.totals=this.core.totals,this.lastfmusername=localStorage.getItem("lastfm-username")||"",this.connectiondetails=localStorage.getItem("dsm"),Object(r.c)("manual-scrobble-list").then(l=>{this.manualScrobblingList=l||[]}),this.lastParsed=Number(localStorage.getItem("lastParsed")),this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate,this.configService.geo$.subscribe(()=>{this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate}),window.deferredPrompt&&(this.addToHomescreen=!0)}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),this.subscription4.unsubscribe()}removeLastfm(){localStorage.removeItem("lastfm-username"),localStorage.removeItem("lastfm-token"),this.ngOnInit()}removeConnection(){localStorage.removeItem("jwt"),localStorage.removeItem("dsm"),this.ngOnInit()}toggleSavePlaylistState(){this.savePlaylistState=!this.savePlaylistState,localStorage.setItem("save-playlist-state",this.savePlaylistState.toString())}toggleContinuesPlay(){this.isContinuesplay=!this.isContinuesplay,localStorage.setItem("continues-play",this.isContinuesplay.toString())}toggleManualScrobbling(){this.manualScrobbling=!this.manualScrobbling,localStorage.setItem("manual-scrobble-state",this.manualScrobbling.toString()),Object(r.c)("manual-scrobble-list").then(l=>{this.manualScrobblingList=l||[]})}toggleVisualisation(){this.visualisation=!this.visualisation,this.visualisation||(this.smallArt=!1,localStorage.setItem("small-art",this.smallArt.toString())),localStorage.setItem("visualisation-state",this.visualisation.toString())}toggleSmallArt(){this.smallArt=!this.smallArt,localStorage.setItem("small-art",this.smallArt.toString())}toggleDynamicAccentColor(){this.hasDynamicAccentColor=!this.hasDynamicAccentColor,localStorage.setItem("dynamic-accent-color",this.hasDynamicAccentColor.toString())}toggleTracking(){this.tracking=!this.tracking,localStorage.setItem("tracking-state",this.tracking.toString()),this.tracking?this.getLocation():(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())}scrobbleNow(){Object(r.c)("manual-scrobble-list").then(l=>{this.manualScrobblingList=l||[];const n=this.manualScrobblingList.pop();this.lastFMService.scrobbleCachedTrack(n).subscribe(l=>{Object(r.d)("manual-scrobble-list",this.manualScrobblingList),this.manualScrobblingList.length>0&&this.scrobbleNow()})})}removeFromScrobbleList(l){Object(r.c)("manual-scrobble-list").then(n=>{this.manualScrobblingList=n||[];let u=-1;this.manualScrobblingList.forEach((n,t)=>{Object.is(n,l)&&(u=t)}),this.manualScrobblingList.splice(u,1),Object(r.d)("manual-scrobble-list",this.manualScrobblingList)})}reloadCollection(){this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstart")),this.collectionService.reload().subscribe(l=>{setTimeout(l=>{this.poll()},300)})}poll(){this.collectionService.poll().subscribe(l=>{this.scanperc=l.progress,"ready"!==l.status?(this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanning",{detail:{percentage:this.scanperc}})),setTimeout(l=>{this.poll()},5e3),this.hasBeenReloading=!0):(this.isReloading=!1,this.hasBeenReloading&&(document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstop")),this.getCollection()))})}getCollection(){this.collectionService.getCollection().subscribe(l=>this.fillCollection(l),l=>console.error(l))}fillCollection(l){this.hasBeenReloading=!1,this.coreService.getCore().parseSourceJson(l)}viewList(){this.router.navigate(["/scrobble-cache"])}doAddToHomescreen(){if(window.deferredPrompt){const l=window.deferredPrompt;l.prompt(),l.userChoice.then(l=>{Object(r.b)("defferedPrompt")})}}booleanState(l){const n=localStorage.getItem(l);return!(!n||"true"!==n)}getLocation(){navigator.geolocation.getCurrentPosition(l=>{l?this.configService.getSunriseInfo(l.coords.latitude,l.coords.longitude).subscribe(l=>{this.configService.startDate=new Date(l.results.sunset),this.configService.stopDate=new Date(l.results.sunrise),this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.geoSource.next(),this.configService.applyTheme()}):(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())})}}var S=t.mb({encapsulation:2,styles:[],data:{}});function y(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,10,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Connected to last.fm: "])),(l()(),t.ob(3,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.Hb(4,null,[""," "])),(l()(),t.ob(5,0,null,null,1,"span",[["class","small muted"]],null,null,null,null,null)),(l()(),t.Hb(6,null,["(",")"])),(l()(),t.ob(7,0,null,null,3,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.removeLastfm()&&t),t}),null,null)),(l()(),t.Hb(-1,null,[" \xa0 "])),(l()(),t.ob(9,0,null,null,0,"i",[["class","glyph glyph-delete"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" remove token"]))],null,(function(l,n){var u=n.component;l(n,4,0,u.lastfmusername&&u.lastfmusername.length>0),l(n,6,0,u.lastfmusername)}))}function C(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,8,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Local last played tracking: "])),(l()(),t.ob(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["true"])),(l()(),t.ob(5,0,null,null,3,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.removeLastfm()&&t),t}),null,null)),(l()(),t.Hb(-1,null,[" \xa0 "])),(l()(),t.ob(7,0,null,null,0,"i",[["class","glyph glyph-delete"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" remove token"]))],null,null)}function H(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,3,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.removeConnection()&&t),t}),null,null)),(l()(),t.Hb(-1,null,[" \xa0 "])),(l()(),t.ob(2,0,null,null,0,"i",[["class","glyph glyph-delete"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" remove token"]))],null,null)}function A(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,4,"a",[["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.nb(1,671744,null,0,a.l,[a.k,a.a,o.h],{routerLink:[0,"routerLink"]},null),(l()(),t.Hb(-1,null,[" \xa0 "])),(l()(),t.ob(3,0,null,null,0,"i",[["class","glyph glyph-admin"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" login"]))],(function(l,n){l(n,1,0,"/login")}),(function(l,n){l(n,0,0,t.Ab(n,1).target,t.Ab(n,1).href)}))}function I(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,2,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.reloadCollection()&&t),t}),null,null)),(l()(),t.ob(1,0,null,null,0,"i",[["class","glyph glyph-sync"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" now "]))],null,(function(l,n){l(n,0,0,n.component.isReloading)}))}function D(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,6,"span",[],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,5,"div",[["class","progress-bar"],["style","margin-left: 100px;"]],null,null,null,null,null)),(l()(),t.ob(2,0,null,null,0,"div",[["class","progress-circle"]],null,null,null,null,null)),(l()(),t.ob(3,0,null,null,0,"div",[["class","progress-circle"]],null,null,null,null,null)),(l()(),t.ob(4,0,null,null,0,"div",[["class","progress-circle"]],null,null,null,null,null)),(l()(),t.ob(5,0,null,null,0,"div",[["class","progress-circle"]],null,null,null,null,null)),(l()(),t.ob(6,0,null,null,0,"div",[["class","progress-circle"]],null,null,null,null,null))],null,null)}function w(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(1,null,[" ","% done"]))],null,(function(l,n){l(n,1,0,n.component.scanperc)}))}function J(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,9,"div",[["class","small"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"span",[["class","muted"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["items in list:"])),(l()(),t.Hb(3,null,[" "," "])),(l()(),t.ob(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ob(5,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scrobbleNow()&&t),t}),null,null)),(l()(),t.Hb(-1,null,["Scrobble now"])),(l()(),t.ob(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ob(8,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewList()&&t),t}),null,null)),(l()(),t.Hb(-1,null,["View tracks in scrobble cache"]))],null,(function(l,n){l(n,3,0,n.component.manualScrobblingList.length)}))}function L(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,13,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Manual scrobbling: "])),(l()(),t.ob(3,0,null,null,8,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.ob(4,0,null,null,7,"button",[["aria-pressed","false"],["autocomplete","off"],["class","btn btn-toggle-switch"],["data-toggle","button"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleManualScrobbling()&&t),t}),null,null)),t.Eb(512,null,o.u,o.v,[t.q,t.r,t.k,t.B]),t.nb(6,278528,null,0,o.i,[o.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(7,{active:0,"theme-alt":1}),(l()(),t.ob(8,0,null,null,1,"span",[["class","state-label state-label-on"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["On"])),(l()(),t.ob(10,0,null,null,1,"span",[["class","state-label state-label-off"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Off"])),(l()(),t.eb(16777216,null,null,1,null,J)),t.nb(13,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component,t=l(n,7,0,u.manualScrobbling,"dark"===u.mode);l(n,6,0,"btn btn-toggle-switch",t),l(n,13,0,u.manualScrobblingList&&u.manualScrobblingList.length>0)}),null)}function M(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Add a link to your homescreen/desktop: "])),(l()(),t.Hb(-1,null,["\xa0 "])),(l()(),t.ob(4,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.doAddToHomescreen()&&t),t}),null,null)),(l()(),t.Hb(-1,null,[" add "]))],null,null)}function P(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Show visualisation on now playing screen: "])),(l()(),t.ob(3,0,null,null,9,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" \xa0 "])),(l()(),t.ob(5,0,null,null,7,"button",[["aria-pressed","false"],["autocomplete","off"],["class","btn btn-toggle-switch"],["data-toggle","button"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleVisualisation()&&t),t}),null,null)),t.Eb(512,null,o.u,o.v,[t.q,t.r,t.k,t.B]),t.nb(7,278528,null,0,o.i,[o.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(8,{active:0,"theme-alt":1}),(l()(),t.ob(9,0,null,null,1,"span",[["class","state-label state-label-on"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Yes"])),(l()(),t.ob(11,0,null,null,1,"span",[["class","state-label state-label-off"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["No"]))],(function(l,n){var u=n.component,t=l(n,8,0,u.visualisation,"dark"===u.mode);l(n,7,0,"btn btn-toggle-switch",t)}),null)}function T(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Show smaller album-art on now playing screen: "])),(l()(),t.ob(3,0,null,null,9,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" \xa0 "])),(l()(),t.ob(5,0,null,null,7,"button",[["aria-pressed","false"],["autocomplete","off"],["class","btn btn-toggle-switch"],["data-toggle","button"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleSmallArt()&&t),t}),null,null)),t.Eb(512,null,o.u,o.v,[t.q,t.r,t.k,t.B]),t.nb(7,278528,null,0,o.i,[o.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(8,{active:0,"theme-alt":1}),(l()(),t.ob(9,0,null,null,1,"span",[["class","state-label state-label-on"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Yes"])),(l()(),t.ob(11,0,null,null,1,"span",[["class","state-label state-label-off"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["No"]))],(function(l,n){var u=n.component,t=l(n,8,0,u.smallArt,"dark"===u.mode);l(n,7,0,"btn btn-toggle-switch",t)}),null)}function B(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,5,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(1,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Playing time: "])),(l()(),t.ob(3,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Hb(4,null,["",""])),t.Db(5,1)],null,(function(l,n){var u=n.component,e=t.Ib(n,4,0,l(n,5,0,t.Ab(n.parent,1),u.totals.playingTime));l(n,4,0,e)}))}function E(l){return t.Jb(0,[t.Bb(0,o.d,[t.s]),t.Bb(0,i.a,[]),t.Fb(671088640,1,{currentForm:0}),(l()(),t.ob(3,0,null,null,181,"div",[["class","animated-page settings-page"]],null,null,null,null,null)),(l()(),t.ob(4,0,null,null,180,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.ob(5,0,null,null,28,"div",[["class","setting-page-block"]],null,null,null,null,null)),(l()(),t.ob(6,0,null,null,27,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(7,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["User Information"])),(l()(),t.eb(16777216,null,null,1,null,y)),t.nb(10,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,C)),t.nb(12,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(13,0,null,null,10,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(14,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Connected to: "])),(l()(),t.ob(16,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.Hb(17,null,[""," "])),(l()(),t.ob(18,0,null,null,1,"span",[["class","small muted"]],null,null,null,null,null)),(l()(),t.Hb(19,null,["(",")"])),(l()(),t.eb(16777216,null,null,1,null,H)),t.nb(21,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,A)),t.nb(23,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(24,0,null,null,9,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(25,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Reload collection: "])),(l()(),t.Hb(-1,null,["\xa0 "])),(l()(),t.eb(16777216,null,null,1,null,I)),t.nb(29,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,D)),t.nb(31,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,w)),t.nb(33,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(34,0,null,null,29,"div",[["class","setting-page-block"]],null,null,null,null,null)),(l()(),t.ob(35,0,null,null,28,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(36,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Player settings"])),(l()(),t.ob(38,0,null,null,11,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(39,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Save playliststate: "])),(l()(),t.ob(41,0,null,null,8,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.ob(42,0,null,null,7,"button",[["aria-pressed","false"],["autocomplete","off"],["class","btn btn-toggle-switch"],["data-toggle","button"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleSavePlaylistState()&&t),t}),null,null)),t.Eb(512,null,o.u,o.v,[t.q,t.r,t.k,t.B]),t.nb(44,278528,null,0,o.i,[o.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(45,{active:0,"theme-alt":1}),(l()(),t.ob(46,0,null,null,1,"span",[["class","state-label state-label-on"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["On"])),(l()(),t.ob(48,0,null,null,1,"span",[["class","state-label state-label-off"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Off"])),(l()(),t.eb(16777216,null,null,1,null,L)),t.nb(51,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(52,0,null,null,11,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(53,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Continues play: "])),(l()(),t.ob(55,0,null,null,8,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.ob(56,0,null,null,7,"button",[["aria-pressed","false"],["autocomplete","off"],["class","btn btn-toggle-switch"],["data-toggle","button"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleContinuesPlay()&&t),t}),null,null)),t.Eb(512,null,o.u,o.v,[t.q,t.r,t.k,t.B]),t.nb(58,278528,null,0,o.i,[o.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(59,{active:0,"theme-alt":1}),(l()(),t.ob(60,0,null,null,1,"span",[["class","state-label state-label-on"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["On"])),(l()(),t.ob(62,0,null,null,1,"span",[["class","state-label state-label-off"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Off"])),(l()(),t.ob(64,0,null,null,88,"div",[["class","setting-page-block"]],null,null,null,null,null)),(l()(),t.ob(65,0,null,null,87,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(66,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Interface settings"])),(l()(),t.ob(68,0,null,null,84,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(69,0,null,null,83,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Ab(l,74).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Ab(l,74).onReset()&&e),e}),null,null)),t.Eb(512,null,o.u,o.v,[t.q,t.r,t.k,t.B]),t.nb(71,278528,null,0,o.i,[o.u],{ngClass:[0,"ngClass"]},null),t.Cb(72,{"theme-alt":0}),t.nb(73,16384,null,0,c.t,[],null,null),t.nb(74,4210688,[[1,4],["themeForm",4]],0,c.j,[[8,null],[8,null]],null,null),t.Eb(2048,null,c.b,null,[c.j]),t.nb(76,16384,null,0,c.i,[[4,c.b]],null,null),(l()(),t.eb(16777216,null,null,1,null,M)),t.nb(78,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(79,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.ob(80,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Dynamic accent color: "])),(l()(),t.ob(82,0,null,null,9,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" \xa0 "])),(l()(),t.ob(84,0,null,null,7,"button",[["aria-pressed","false"],["autocomplete","off"],["class","btn btn-toggle-switch"],["data-toggle","button"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleDynamicAccentColor()&&t),t}),null,null)),t.Eb(512,null,o.u,o.v,[t.q,t.r,t.k,t.B]),t.nb(86,278528,null,0,o.i,[o.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(87,{active:0,"theme-alt":1}),(l()(),t.ob(88,0,null,null,1,"span",[["class","state-label state-label-on"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Yes"])),(l()(),t.ob(90,0,null,null,1,"span",[["class","state-label state-label-off"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["No"])),(l()(),t.ob(92,0,null,null,43,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.ob(93,0,null,null,12,"div",[["class","radio"]],null,null,null,null,null)),(l()(),t.ob(94,0,null,null,11,"label",[],null,null,null,null,null)),(l()(),t.ob(95,0,null,null,6,"input",[["name","theme"],["type","radio"],["value","light"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,s=l.component;return"input"===n&&(e=!1!==t.Ab(l,96)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,96).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,96)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,96)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ab(l,97).onChange()&&e),"blur"===n&&(e=!1!==t.Ab(l,97).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(s.settings.theme=u)&&e),e}),null,null)),t.nb(96,16384,null,0,c.c,[t.B,t.k,[2,c.a]],null,null),t.nb(97,212992,null,0,c.m,[t.B,t.k,c.r,t.p],{name:[0,"name"],value:[1,"value"]},null),t.Eb(1024,null,c.f,(function(l,n){return[l,n]}),[c.c,c.m]),t.nb(99,671744,[["name",4]],0,c.k,[[2,c.b],[8,null],[8,null],[6,c.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,c.g,null,[c.k]),t.nb(101,16384,null,0,c.h,[[4,c.g]],null,null),(l()(),t.ob(102,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Light"])),(l()(),t.ob(104,0,null,null,1,"span",[["class","small muted"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" theme"])),(l()(),t.ob(106,0,null,null,12,"div",[["class","radio"]],null,null,null,null,null)),(l()(),t.ob(107,0,null,null,11,"label",[],null,null,null,null,null)),(l()(),t.ob(108,0,null,null,6,"input",[["name","theme"],["type","radio"],["value","dark"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,s=l.component;return"input"===n&&(e=!1!==t.Ab(l,109)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,109).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,109)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,109)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ab(l,110).onChange()&&e),"blur"===n&&(e=!1!==t.Ab(l,110).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(s.settings.theme=u)&&e),e}),null,null)),t.nb(109,16384,null,0,c.c,[t.B,t.k,[2,c.a]],null,null),t.nb(110,212992,null,0,c.m,[t.B,t.k,c.r,t.p],{name:[0,"name"],value:[1,"value"]},null),t.Eb(1024,null,c.f,(function(l,n){return[l,n]}),[c.c,c.m]),t.nb(112,671744,[["name",4]],0,c.k,[[2,c.b],[8,null],[8,null],[6,c.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,c.g,null,[c.k]),t.nb(114,16384,null,0,c.h,[[4,c.g]],null,null),(l()(),t.ob(115,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Dark"])),(l()(),t.ob(117,0,null,null,1,"span",[["class","small muted"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" theme"])),(l()(),t.ob(119,0,null,null,16,"div",[["class","radio"]],null,null,null,null,null)),(l()(),t.ob(120,0,null,null,15,"label",[],null,null,null,null,null)),(l()(),t.ob(121,0,null,null,6,"input",[["name","theme"],["type","radio"],["value","auto"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,u){var e=!0,s=l.component;return"input"===n&&(e=!1!==t.Ab(l,122)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,122).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,122)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,122)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Ab(l,123).onChange()&&e),"blur"===n&&(e=!1!==t.Ab(l,123).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(s.settings.theme=u)&&e),e}),null,null)),t.nb(122,16384,null,0,c.c,[t.B,t.k,[2,c.a]],null,null),t.nb(123,212992,null,0,c.m,[t.B,t.k,c.r,t.p],{name:[0,"name"],value:[1,"value"]},null),t.Eb(1024,null,c.f,(function(l,n){return[l,n]}),[c.c,c.m]),t.nb(125,671744,[["name",4]],0,c.k,[[2,c.b],[8,null],[8,null],[6,c.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,c.g,null,[c.k]),t.nb(127,16384,null,0,c.h,[[4,c.g]],null,null),(l()(),t.ob(128,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Auto"])),(l()(),t.ob(130,0,null,null,1,"span",[["class","small muted"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" theme"])),(l()(),t.ob(132,0,null,null,3,"span",[["class","small muted"]],null,null,null,null,null)),(l()(),t.Hb(133,null,[" (Dark mode between "," and ",")"])),t.Db(134,2),t.Db(135,2),(l()(),t.ob(136,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.ob(137,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Track location for more accurate theme switching: "])),(l()(),t.ob(139,0,null,null,9,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" \xa0 "])),(l()(),t.ob(141,0,null,null,7,"button",[["aria-pressed","false"],["autocomplete","off"],["class","btn btn-toggle-switch"],["data-toggle","button"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleTracking()&&t),t}),null,null)),t.Eb(512,null,o.u,o.v,[t.q,t.r,t.k,t.B]),t.nb(143,278528,null,0,o.i,[o.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Cb(144,{active:0,"theme-alt":1}),(l()(),t.ob(145,0,null,null,1,"span",[["class","state-label state-label-on"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Yes"])),(l()(),t.ob(147,0,null,null,1,"span",[["class","state-label state-label-off"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["No"])),(l()(),t.eb(16777216,null,null,1,null,P)),t.nb(150,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,T)),t.nb(152,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(153,0,null,null,31,"div",[["class","setting-page-block"]],null,null,null,null,null)),(l()(),t.ob(154,0,null,null,30,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(155,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Information"])),(l()(),t.ob(157,0,null,null,4,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(158,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Artists: "])),(l()(),t.ob(160,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(161,null,["",""])),(l()(),t.ob(162,0,null,null,4,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(163,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Albums: "])),(l()(),t.ob(165,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(166,null,["",""])),(l()(),t.ob(167,0,null,null,4,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(168,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Tracks: "])),(l()(),t.ob(170,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(171,null,["",""])),(l()(),t.eb(16777216,null,null,1,null,B)),t.nb(173,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(174,0,null,null,5,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(175,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Last parsed: "])),(l()(),t.ob(177,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Hb(178,null,["",""])),t.Db(179,2),(l()(),t.ob(180,0,null,null,4,"div",[["class","settings-page-p"]],null,null,null,null,null)),(l()(),t.ob(181,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Build version: "])),(l()(),t.ob(183,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(184,null,["",""]))],(function(l,n){var u=n.component;l(n,10,0,u.lastfmusername&&u.lastfmusername.length>0&&"mdb-skipped"!==u.lastfmusername),l(n,12,0,u.lastfmusername&&"mdb-skipped"===u.lastfmusername),l(n,21,0,u.connectiondetails),l(n,23,0,!u.connectiondetails),l(n,29,0,!u.isReloading),l(n,31,0,!u.scanperc&&u.isReloading),l(n,33,0,u.scanperc&&u.isReloading);var t=l(n,45,0,u.savePlaylistState,"dark"===u.mode);l(n,44,0,"btn btn-toggle-switch",t),l(n,51,0,u.lastfmusername&&u.lastfmusername.length>0&&"mdb-skipped"!==u.lastfmusername);var e=l(n,59,0,u.isContinuesplay,"dark"===u.mode);l(n,58,0,"btn btn-toggle-switch",e);var s=l(n,72,0,"dark"===u.mode);l(n,71,0,s),l(n,78,0,u.addToHomescreen);var a=l(n,87,0,u.hasDynamicAccentColor,"dark"===u.mode);l(n,86,0,"btn btn-toggle-switch",a),l(n,97,0,"theme","light"),l(n,99,0,"theme",u.settings.theme),l(n,110,0,"theme","dark"),l(n,112,0,"theme",u.settings.theme),l(n,123,0,"theme","auto"),l(n,125,0,"theme",u.settings.theme);var o=l(n,144,0,u.tracking,"dark"===u.mode);l(n,143,0,"btn btn-toggle-switch",o),l(n,150,0,u.isVisualCapable),l(n,152,0,u.visualisation&&u.isVisualCapable),l(n,173,0,u.totals.playingTime)}),(function(l,n){var u=n.component;l(n,17,0,u.connectiontype),l(n,19,0,u.connectiondetails),l(n,69,0,t.Ab(n,76).ngClassUntouched,t.Ab(n,76).ngClassTouched,t.Ab(n,76).ngClassPristine,t.Ab(n,76).ngClassDirty,t.Ab(n,76).ngClassValid,t.Ab(n,76).ngClassInvalid,t.Ab(n,76).ngClassPending),l(n,95,0,t.Ab(n,101).ngClassUntouched,t.Ab(n,101).ngClassTouched,t.Ab(n,101).ngClassPristine,t.Ab(n,101).ngClassDirty,t.Ab(n,101).ngClassValid,t.Ab(n,101).ngClassInvalid,t.Ab(n,101).ngClassPending),l(n,108,0,t.Ab(n,114).ngClassUntouched,t.Ab(n,114).ngClassTouched,t.Ab(n,114).ngClassPristine,t.Ab(n,114).ngClassDirty,t.Ab(n,114).ngClassValid,t.Ab(n,114).ngClassInvalid,t.Ab(n,114).ngClassPending),l(n,121,0,t.Ab(n,127).ngClassUntouched,t.Ab(n,127).ngClassTouched,t.Ab(n,127).ngClassPristine,t.Ab(n,127).ngClassDirty,t.Ab(n,127).ngClassValid,t.Ab(n,127).ngClassInvalid,t.Ab(n,127).ngClassPending);var e=t.Ib(n,133,0,l(n,134,0,t.Ab(n,0),u.startDate,"mediumTime")),s=t.Ib(n,133,1,l(n,135,0,t.Ab(n,0),u.stopDate,"mediumTime"));l(n,133,0,e,s),l(n,161,0,u.totals.artists),l(n,166,0,u.totals.albums),l(n,171,0,u.totals.tracks);var a=t.Ib(n,178,0,l(n,179,0,t.Ab(n,0),u.lastParsed,"medium"));l(n,178,0,a),l(n,184,0,u.version)}))}function j(l){return t.Jb(0,[(l()(),t.ob(0,0,null,null,1,"app-settings",[],null,null,null,E,S)),t.nb(1,8634368,null,0,k,[d.a,p.a,h.a,b.a,a.k,m.a,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.kb("app-settings",k,j,{},{},[]);class x{}var F=u("hDf6");u.d(n,"SettingsModuleNgFactory",(function(){return V}));var V=t.lb(e,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[s.a,O]],[3,t.j],t.v]),t.yb(4608,o.m,o.l,[t.s,[2,o.z]]),t.yb(4608,c.r,c.r,[]),t.yb(1073742336,o.b,o.b,[]),t.yb(1073742336,a.m,a.m,[[2,a.r],[2,a.k]]),t.yb(1073742336,x,x,[]),t.yb(1073742336,c.q,c.q,[]),t.yb(1073742336,c.d,c.d,[]),t.yb(1073742336,F.a,F.a,[]),t.yb(1073742336,e,e,[]),t.yb(256,t.s,"en-GB",[]),t.yb(1024,a.i,(function(){return[[{path:"",component:k}]]}),[])])}))},kiQV:function(l){l.exports=JSON.parse('{"name":"jsmusicdb-next","version":"2.23.0","license":"MIT","scripts":{"ng":"ng","start":"npm run --silent sass:dark && ng serve --aot","sass":"node-sass","sass:dark":"node-sass --output-style compressed --omit-source-map-url ./src/sass/dark.scss > ./src/global/css/dark.css","build":"npm run --silent sass:dark && ng build --prod --i18n-locale=\\"en-GB\\"","report":"webpack-bundle-analyzer dist/stats-latest.json","bundle-report":"ng build --prod --i18n-locale=\\"en-GB\\" --stats-json && npm run --silent report","lint":"tslint --fix --force -p .","postversion":"npm run --silent build && npm publish && git push && git push --tags"},"files":["dist"],"author":"Lucien Immink","description":"Web version of musicdb next","repository":{"type":"git","url":"git+https://github.com/lucienimmink/JSMusicDBNext"},"dependencies":{"@angular/animations":"^8.2.14","@angular/common":"^8.2.14","@angular/compiler":"^8.2.14","@angular/core":"^8.2.14","@angular/forms":"^8.2.14","@angular/platform-browser":"^8.2.14","@angular/platform-browser-dynamic":"^8.2.14","@angular/router":"^8.2.14","@thebespokepixel/es-tinycolor":"^1.0.7","album-art-component":"^1.3.2","bootstrap":"^4.4.1","core-js":"^3.6.4","fast-average-color":"^5.2.1","fuse.js":"^3.4.6","hammerjs":"^2.0.8","idb-keyval":"^3.2.0","ngx-bootstrap":"^5.3.2","node-sass":"^4.13.1","rxjs":"^6.5.4","winstrap":"^0.5.12","zone.js":"^0.9.1"},"devDependencies":{"@angular-builders/custom-webpack":"^8.4.1","@angular-devkit/build-angular":"^0.803.23","@angular/cli":"8.3.20","@angular/compiler-cli":"^8.2.14","@angular/language-service":"^8.2.14","@types/node":"^11.15.4","copy-webpack-plugin":"^5.0.5","glob-all":"^3.1.0","node":"^12.14.1","purgecss-webpack-plugin":"^1.6.0","ts-node":"^8.6.2","tslint":"^5.20.1","tslint-config-prettier":"^1.18.0","typescript":"~3.4.5","webpack-bundle-analyzer":"^3.6.0"},"engines":{"npm":">= 6"}}')}}]);