(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7wo0":function(t,e,s){"use strict";s.r(e),s.d(e,"SettingsModule",(function(){return N}));var i=s("ofXK"),n=s("3Pt+"),a=s("hDf6"),c=s("tyNb"),o=s("ztCj"),b=s("MDLy"),r=s("+ooL"),l=s("OgP6"),p=s("ktVm"),g=s("t083"),u=s("XtVx");class m{}var h=s("XNvx"),d=s("fXoL"),f=s("cpgm");const v=["themeForm"];function L(t,e){if(1&t){const t=d.Mb();d.Lb(0,"div",3),d.Lb(1,"span",5),d.pc(2,"Connected to last.fm: "),d.Kb(),d.Lb(3,"span"),d.pc(4),d.Lb(5,"span",6),d.pc(6),d.Kb(),d.Kb(),d.Lb(7,"a",25),d.Sb("click",(function(){return d.lc(t),d.Wb().removeLastfm()})),d.pc(8," \xa0 "),d.Jb(9,"i",26),d.pc(10," remove token"),d.Kb(),d.Kb()}if(2&t){const t=d.Wb();d.xb(4),d.rc("",t.lastfmusername&&t.lastfmusername.length>0," "),d.xb(2),d.rc("(",t.lastfmusername,")")}}function S(t,e){if(1&t){const t=d.Mb();d.Lb(0,"div",3),d.Lb(1,"span",5),d.pc(2,"Local last played tracking: "),d.Kb(),d.Lb(3,"span"),d.pc(4,"true"),d.Kb(),d.Lb(5,"a",25),d.Sb("click",(function(){return d.lc(t),d.Wb().removeLastfm()})),d.pc(6," \xa0 "),d.Jb(7,"i",26),d.pc(8," remove token"),d.Kb(),d.Kb()}}function K(t,e){if(1&t){const t=d.Mb();d.Lb(0,"a",25),d.Sb("click",(function(){return d.lc(t),d.Wb().removeConnection()})),d.pc(1," \xa0 "),d.Jb(2,"i",26),d.pc(3," remove token"),d.Kb()}}function y(t,e){1&t&&(d.Lb(0,"a",27),d.pc(1," \xa0 "),d.Jb(2,"i",28),d.pc(3," login"),d.Kb())}function k(t,e){if(1&t){const t=d.Mb();d.Lb(0,"button",29),d.Sb("click",(function(){return d.lc(t),d.Wb().reloadCollection()})),d.Jb(1,"i",30),d.pc(2," now "),d.Kb()}if(2&t){const t=d.Wb();d.cc("disabled",t.isReloading)}}function C(t,e){1&t&&(d.Lb(0,"span",31),d.Lb(1,"div",32),d.Jb(2,"div",33),d.Jb(3,"div",33),d.Jb(4,"div",33),d.Jb(5,"div",33),d.Jb(6,"div",33),d.Kb(),d.Kb())}function x(t,e){if(1&t&&(d.Lb(0,"span"),d.pc(1),d.Kb()),2&t){const t=d.Wb();d.xb(1),d.rc(" ",t.scanperc,"% done")}}function I(t,e){if(1&t){const t=d.Mb();d.Lb(0,"div",35),d.Lb(1,"span",36),d.pc(2,"items in list:"),d.Kb(),d.pc(3),d.Jb(4,"br"),d.Lb(5,"a",25),d.Sb("click",(function(){return d.lc(t),d.Wb(2).scrobbleNow()})),d.pc(6,"Scrobble now"),d.Kb(),d.Jb(7,"br"),d.Lb(8,"a",25),d.Sb("click",(function(){return d.lc(t),d.Wb(2).viewList()})),d.pc(9,"View tracks in scrobble cache"),d.Kb(),d.Kb()}if(2&t){const t=d.Wb(2);d.xb(3),d.rc(" ",t.manualScrobblingList.length," ")}}const w=function(t,e){return{active:t,"theme-alt":e}};function D(t,e){if(1&t){const t=d.Mb();d.Lb(0,"div",3),d.Lb(1,"span",5),d.pc(2,"Manual scrobbling: "),d.Kb(),d.Lb(3,"div",12),d.Lb(4,"button",13),d.Sb("click",(function(){return d.lc(t),d.Wb().toggleManualScrobbling()})),d.Lb(5,"span",14),d.pc(6,"On"),d.Kb(),d.Lb(7,"span",15),d.pc(8,"Off"),d.Kb(),d.Kb(),d.Kb(),d.oc(9,I,10,1,"div",34),d.Kb()}if(2&t){const t=d.Wb();d.xb(4),d.cc("ngClass",d.gc(2,w,t.manualScrobbling,"dark"===t.mode)),d.xb(5),d.cc("ngIf",t.manualScrobblingList&&t.manualScrobblingList.length>0)}}function M(t,e){if(1&t){const t=d.Mb();d.Lb(0,"div",19),d.Lb(1,"span",5),d.pc(2,"Add a link to your homescreen/desktop: "),d.Kb(),d.pc(3,"\xa0 "),d.Lb(4,"button",37),d.Sb("click",(function(){return d.lc(t),d.Wb().doAddToHomescreen()})),d.pc(5," add "),d.Kb(),d.Kb()}}function P(t,e){if(1&t){const t=d.Mb();d.Lb(0,"div",19),d.Lb(1,"span",5),d.pc(2,"Show visualisation on now playing screen: "),d.Kb(),d.Lb(3,"div",12),d.pc(4," \xa0 "),d.Lb(5,"button",13),d.Sb("click",(function(){return d.lc(t),d.Wb().toggleVisualisation()})),d.Lb(6,"span",14),d.pc(7,"Yes"),d.Kb(),d.Lb(8,"span",15),d.pc(9,"No"),d.Kb(),d.Kb(),d.Kb(),d.Kb()}if(2&t){const t=d.Wb();d.xb(5),d.cc("ngClass",d.gc(1,w,t.visualisation,"dark"===t.mode))}}function A(t,e){if(1&t){const t=d.Mb();d.Lb(0,"div",19),d.Lb(1,"span",5),d.pc(2,"Show smaller album-art on now playing screen: "),d.Kb(),d.Lb(3,"div",12),d.pc(4," \xa0 "),d.Lb(5,"button",13),d.Sb("click",(function(){return d.lc(t),d.Wb().toggleSmallArt()})),d.Lb(6,"span",14),d.pc(7,"Yes"),d.Kb(),d.Lb(8,"span",15),d.pc(9,"No"),d.Kb(),d.Kb(),d.Kb(),d.Kb()}if(2&t){const t=d.Wb();d.xb(5),d.cc("ngClass",d.gc(1,w,t.smallArt,"dark"===t.mode))}}function O(t,e){if(1&t&&(d.Lb(0,"div",3),d.Lb(1,"span",5),d.pc(2,"Playing time: "),d.Kb(),d.Lb(3,"span"),d.pc(4),d.Xb(5,"timeFormat"),d.Kb(),d.Kb()),2&t){const t=d.Wb();d.xb(4),d.qc(d.Yb(5,1,t.totals.playingTime))}}function j(t,e){if(1&t&&(d.Lb(0,"div",3),d.Lb(1,"span",5),d.pc(2),d.Kb(),d.Lb(3,"span"),d.pc(4),d.Kb(),d.Kb()),2&t){const t=d.Wb();d.xb(2),d.rc("",t.connectiontype," version: "),d.xb(2),d.qc(t.connectionversion)}}const T=function(t){return{"theme-alt":t}},{version:W}=s("kiQV"),F=[{path:"",component:(()=>{class t{constructor(t,e,s,i,n,a,c,b){this.pathService=t,this.coreService=e,this.lastFMService=s,this.collectionService=i,this.router=n,this.configService=a,this.colorService=c,this.loginService=b,this.connectiontype="Node-mp3stream",this.connectiondetails="",this.connectionversion="",this.savePlaylistState=this.booleanState("save-playlist-state"),this.isContinuesplay=this.booleanState("continues-play"),this.hasDynamicAccentColor=this.booleanState("dynamic-accent-color"),this.isReloading=!1,this.scanperc=0,this.version="__dev__",this.lastParsed=Number(localStorage.getItem("lastParsed")),this.visualisation=this.booleanState("visualisation-state"),this.tracking=this.booleanState("tracking-state"),this.addToHomescreen=!1,this.isVisualCapable=-1===navigator.userAgent.indexOf("Mobi"),this.manualScrobbling=this.booleanState("manual-scrobble-state"),this.smallArt=this.booleanState("small-art"),this.hasBeenReloading=!1,this.settings=new m,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.subscription2=this.lastFMService.manualScrobbleList$.subscribe(t=>{this.manualScrobblingList=t}),this.subscription3=this.configService.theme$.subscribe(t=>{this.settings.theme=t,this.theme=t}),this.subscription4=this.configService.mode$.subscribe(t=>{this.mode=t}),this.settings.theme=this.configService.theme,this.theme=this.configService.theme,this.mode=this.configService.mode,this.poll(),this.version=W,Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]})}ngAfterViewChecked(){this.formChanged()}formChanged(){this.currentForm!==this.themeForm&&(this.themeForm=this.currentForm,this.themeForm&&this.themeForm.valueChanges.subscribe(t=>{t&&t.theme&&(this.configService.theme=t.theme,this.theme=t.theme)}))}ngOnInit(){this.pathService.announcePage("Settings"),this.totals=this.core.totals,this.lastfmusername=localStorage.getItem("lastfm-username")||"",this.connectiondetails=localStorage.getItem("dsm"),Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]}),this.lastParsed=Number(localStorage.getItem("lastParsed")),this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate,this.configService.geo$.subscribe(()=>{this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate}),window.deferredPrompt&&(this.addToHomescreen=!0),"Node-mp3stream"===this.connectiontype&&this.loginService.versionCheck(this.connectiondetails).subscribe(t=>{this.connectionversion=t.version})}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),this.subscription4.unsubscribe()}removeLastfm(){localStorage.removeItem("lastfm-username"),localStorage.removeItem("lastfm-token"),this.ngOnInit()}removeConnection(){localStorage.removeItem("jwt"),localStorage.removeItem("dsm"),this.ngOnInit()}toggleSavePlaylistState(){this.savePlaylistState=!this.savePlaylistState,localStorage.setItem("save-playlist-state",this.savePlaylistState.toString())}toggleContinuesPlay(){this.isContinuesplay=!this.isContinuesplay,localStorage.setItem("continues-play",this.isContinuesplay.toString())}toggleManualScrobbling(){this.manualScrobbling=!this.manualScrobbling,localStorage.setItem("manual-scrobble-state",this.manualScrobbling.toString()),Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]})}toggleVisualisation(){this.visualisation=!this.visualisation,this.visualisation||(this.smallArt=!1,localStorage.setItem("small-art",this.smallArt.toString())),localStorage.setItem("visualisation-state",this.visualisation.toString())}toggleSmallArt(){this.smallArt=!this.smallArt,localStorage.setItem("small-art",this.smallArt.toString())}toggleDynamicAccentColor(){this.hasDynamicAccentColor=!this.hasDynamicAccentColor,localStorage.setItem("dynamic-accent-color",this.hasDynamicAccentColor.toString())}toggleTracking(){this.tracking=!this.tracking,localStorage.setItem("tracking-state",this.tracking.toString()),this.tracking?this.getLocation():(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())}scrobbleNow(){Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[];const e=this.manualScrobblingList.pop();this.lastFMService.scrobbleCachedTrack(e).subscribe(t=>{Object(o.d)("manual-scrobble-list",this.manualScrobblingList),this.manualScrobblingList.length>0&&this.scrobbleNow()})})}removeFromScrobbleList(t){Object(o.c)("manual-scrobble-list").then(e=>{this.manualScrobblingList=e||[];let s=-1;this.manualScrobblingList.forEach((e,i)=>{Object.is(e,t)&&(s=i)}),this.manualScrobblingList.splice(s,1),Object(o.d)("manual-scrobble-list",this.manualScrobblingList)})}reloadCollection(){this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstart")),this.collectionService.reload().subscribe(t=>{setTimeout(t=>{this.poll()},300)})}poll(){this.collectionService.poll().subscribe(t=>{this.scanperc=t.progress,"ready"!==t.status?(this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanning",{detail:{percentage:this.scanperc}})),setTimeout(t=>{this.poll()},5e3),this.hasBeenReloading=!0):(this.isReloading=!1,this.hasBeenReloading&&(document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstop")),this.getCollection()))})}getCollection(){this.collectionService.getCollection().subscribe(t=>this.fillCollection(t),t=>console.error(t))}fillCollection(t){this.hasBeenReloading=!1,this.coreService.getCore().parseSourceJson(t)}viewList(){this.router.navigate(["/scrobble-cache"])}doAddToHomescreen(){if(window.deferredPrompt){const t=window.deferredPrompt;t.prompt(),t.userChoice.then(t=>{Object(o.b)("defferedPrompt")})}}booleanState(t){const e=localStorage.getItem(t);return!(!e||"true"!==e)}getLocation(){navigator.geolocation.getCurrentPosition(t=>{t?this.configService.getSunriseInfo(t.coords.latitude,t.coords.longitude).subscribe(t=>{this.configService.startDate=new Date(t.results.sunset),this.configService.stopDate=new Date(t.results.sunrise),this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.geoSource.next(),this.configService.applyTheme()}):(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())})}}return t.\u0275fac=function(e){return new(e||t)(d.Ib(u.a),d.Ib(p.a),d.Ib(g.a),d.Ib(b.a),d.Ib(c.c),d.Ib(l.a),d.Ib(r.a),d.Ib(h.a))},t.\u0275cmp=d.Cb({type:t,selectors:[["app-settings"]],viewQuery:function(t,e){var s;1&t&&d.tc(v,!0),2&t&&d.ic(s=d.Tb())&&(e.currentForm=s.first)},decls:138,vars:53,consts:[[1,"animated-page","settings-page"],[1,"container"],[1,"setting-page-block"],[1,"settings-page-p"],["class","settings-page-p",4,"ngIf"],[1,""],[1,"small","muted"],[3,"click",4,"ngIf"],["routerLink","/login",4,"ngIf"],["class","btn btn-primary",3,"disabled","click",4,"ngIf"],["class","progress-wrapper",4,"ngIf"],[4,"ngIf"],[1,"btn-group"],["type","button","data-toggle","button","autocomplete","off","aria-pressed","false",1,"btn","btn-toggle-switch",3,"ngClass","click"],[1,"state-label","state-label-on"],[1,"state-label","state-label-off"],[3,"ngClass"],["themeForm","ngForm"],["class","form-group",4,"ngIf"],[1,"form-group"],[1,"radio"],["type","radio","name","theme","value","light","name","theme",3,"ngModel","ngModelChange"],["name","ngModel"],["type","radio","name","theme","value","dark","name","theme",3,"ngModel","ngModelChange"],["type","radio","name","theme","value","auto","name","theme",3,"ngModel","ngModelChange"],[3,"click"],[1,"glyph","glyph-delete"],["routerLink","/login"],[1,"glyph","glyph-admin"],[1,"btn","btn-primary",3,"disabled","click"],[1,"glyph","glyph-sync"],[1,"progress-wrapper"],[1,"progress-bar"],[1,"progress-circle"],["class","small",4,"ngIf"],[1,"small"],[1,"muted"],[1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(d.Lb(0,"div",0),d.Lb(1,"div",1),d.Lb(2,"div",2),d.Lb(3,"div",3),d.Lb(4,"h4"),d.pc(5,"User Information"),d.Kb(),d.oc(6,L,11,2,"div",4),d.oc(7,S,9,0,"div",4),d.Lb(8,"div",3),d.Lb(9,"span",5),d.pc(10,"Connected to: "),d.Kb(),d.Lb(11,"span"),d.pc(12),d.Lb(13,"span",6),d.pc(14),d.Kb(),d.Kb(),d.oc(15,K,4,0,"a",7),d.oc(16,y,4,0,"a",8),d.Kb(),d.Lb(17,"div",3),d.Lb(18,"span",5),d.pc(19,"Reload collection: "),d.Kb(),d.pc(20,"\xa0 "),d.oc(21,k,3,1,"button",9),d.oc(22,C,7,0,"span",10),d.oc(23,x,2,1,"span",11),d.Kb(),d.Kb(),d.Kb(),d.Lb(24,"div",2),d.Lb(25,"div",3),d.Lb(26,"h4"),d.pc(27,"Player settings"),d.Kb(),d.Lb(28,"div",3),d.Lb(29,"span",5),d.pc(30,"Save playliststate: "),d.Kb(),d.Lb(31,"div",12),d.Lb(32,"button",13),d.Sb("click",(function(){return e.toggleSavePlaylistState()})),d.Lb(33,"span",14),d.pc(34,"On"),d.Kb(),d.Lb(35,"span",15),d.pc(36,"Off"),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.oc(37,D,10,5,"div",4),d.Lb(38,"div",3),d.Lb(39,"span",5),d.pc(40,"Continues play: "),d.Kb(),d.Lb(41,"div",12),d.Lb(42,"button",13),d.Sb("click",(function(){return e.toggleContinuesPlay()})),d.Lb(43,"span",14),d.pc(44,"On"),d.Kb(),d.Lb(45,"span",15),d.pc(46,"Off"),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Lb(47,"div",2),d.Lb(48,"div",3),d.Lb(49,"h4"),d.pc(50,"Interface settings"),d.Kb(),d.Lb(51,"div",3),d.Lb(52,"form",16,17),d.oc(54,M,6,0,"div",18),d.Lb(55,"div",19),d.Lb(56,"span",5),d.pc(57,"Dynamic accent color: "),d.Kb(),d.Lb(58,"div",12),d.pc(59," \xa0 "),d.Lb(60,"button",13),d.Sb("click",(function(){return e.toggleDynamicAccentColor()})),d.Lb(61,"span",14),d.pc(62,"Yes"),d.Kb(),d.Lb(63,"span",15),d.pc(64,"No"),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Lb(65,"div",19),d.Lb(66,"div",20),d.Lb(67,"label"),d.Lb(68,"input",21,22),d.Sb("ngModelChange",(function(t){return e.settings.theme=t})),d.Kb(),d.Lb(70,"span"),d.pc(71,"Light"),d.Kb(),d.Lb(72,"span",6),d.pc(73," theme"),d.Kb(),d.Kb(),d.Kb(),d.Lb(74,"div",20),d.Lb(75,"label"),d.Lb(76,"input",23,22),d.Sb("ngModelChange",(function(t){return e.settings.theme=t})),d.Kb(),d.Lb(78,"span"),d.pc(79,"Dark"),d.Kb(),d.Lb(80,"span",6),d.pc(81," theme"),d.Kb(),d.Kb(),d.Kb(),d.Lb(82,"div",20),d.Lb(83,"label"),d.Lb(84,"input",24,22),d.Sb("ngModelChange",(function(t){return e.settings.theme=t})),d.Kb(),d.Lb(86,"span"),d.pc(87,"Auto"),d.Kb(),d.Lb(88,"span",6),d.pc(89," theme"),d.Kb(),d.Lb(90,"span",6),d.pc(91),d.Xb(92,"date"),d.Xb(93,"date"),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Lb(94,"div",19),d.Lb(95,"span",5),d.pc(96,"Track location for more accurate theme switching: "),d.Kb(),d.Lb(97,"div",12),d.pc(98," \xa0 "),d.Lb(99,"button",13),d.Sb("click",(function(){return e.toggleTracking()})),d.Lb(100,"span",14),d.pc(101,"Yes"),d.Kb(),d.Lb(102,"span",15),d.pc(103,"No"),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.oc(104,P,10,4,"div",18),d.oc(105,A,10,4,"div",18),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Lb(106,"div",2),d.Lb(107,"div",3),d.Lb(108,"h4"),d.pc(109,"Information"),d.Kb(),d.Lb(110,"div",3),d.Lb(111,"span",5),d.pc(112,"Artists: "),d.Kb(),d.Lb(113,"span"),d.pc(114),d.Kb(),d.Kb(),d.Lb(115,"div",3),d.Lb(116,"span",5),d.pc(117,"Albums: "),d.Kb(),d.Lb(118,"span"),d.pc(119),d.Kb(),d.Kb(),d.Lb(120,"div",3),d.Lb(121,"span",5),d.pc(122,"Tracks: "),d.Kb(),d.Lb(123,"span"),d.pc(124),d.Kb(),d.Kb(),d.oc(125,O,6,3,"div",4),d.Lb(126,"div",3),d.Lb(127,"span",5),d.pc(128,"Last parsed: "),d.Kb(),d.Lb(129,"span"),d.pc(130),d.Xb(131,"date"),d.Kb(),d.Kb(),d.Lb(132,"div",3),d.Lb(133,"span",5),d.pc(134,"Build version: "),d.Kb(),d.Lb(135,"span"),d.pc(136),d.Kb(),d.Kb(),d.oc(137,j,5,2,"div",4),d.Kb(),d.Kb(),d.Kb(),d.Kb()),2&t&&(d.xb(6),d.cc("ngIf",e.lastfmusername&&e.lastfmusername.length>0&&"mdb-skipped"!==e.lastfmusername),d.xb(1),d.cc("ngIf",e.lastfmusername&&"mdb-skipped"===e.lastfmusername),d.xb(5),d.rc("",e.connectiontype," "),d.xb(2),d.rc("(",e.connectiondetails,")"),d.xb(1),d.cc("ngIf",e.connectiondetails),d.xb(1),d.cc("ngIf",!e.connectiondetails),d.xb(5),d.cc("ngIf",!e.isReloading),d.xb(1),d.cc("ngIf",(!e.scanperc||100==e.scanperc)&&e.isReloading),d.xb(1),d.cc("ngIf",e.scanperc&&e.isReloading),d.xb(9),d.cc("ngClass",d.gc(39,w,e.savePlaylistState,"dark"===e.mode)),d.xb(5),d.cc("ngIf",e.lastfmusername&&e.lastfmusername.length>0&&"mdb-skipped"!==e.lastfmusername),d.xb(5),d.cc("ngClass",d.gc(42,w,e.isContinuesplay,"dark"===e.mode)),d.xb(10),d.cc("ngClass",d.fc(45,T,"dark"===e.mode)),d.xb(2),d.cc("ngIf",e.addToHomescreen),d.xb(6),d.cc("ngClass",d.gc(47,w,e.hasDynamicAccentColor,"dark"===e.mode)),d.xb(8),d.cc("ngModel",e.settings.theme),d.xb(8),d.cc("ngModel",e.settings.theme),d.xb(8),d.cc("ngModel",e.settings.theme),d.xb(7),d.sc(" (Dark mode between ",d.Zb(92,30,e.startDate,"mediumTime")," and ",d.Zb(93,33,e.stopDate,"mediumTime"),")"),d.xb(8),d.cc("ngClass",d.gc(50,w,e.tracking,"dark"===e.mode)),d.xb(5),d.cc("ngIf",e.isVisualCapable),d.xb(1),d.cc("ngIf",e.visualisation&&e.isVisualCapable),d.xb(9),d.qc(e.totals.artists),d.xb(5),d.qc(e.totals.albums),d.xb(5),d.qc(e.totals.tracks),d.xb(1),d.cc("ngIf",e.totals.playingTime),d.xb(5),d.qc(d.Zb(131,36,e.lastParsed,"medium")),d.xb(6),d.qc(e.version),d.xb(1),d.cc("ngIf",e.connectionversion))},directives:[i.k,i.i,n.m,n.d,n.e,n.h,n.a,n.c,n.f,c.d],pipes:[i.d,f.a],encapsulation:2}),t})()}];let J=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(F)],c.e]}),t})(),N=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(e){return new(e||t)},imports:[[i.b,J,n.b,a.a]]}),t})()},kiQV:function(t){t.exports=JSON.parse('{"name":"jsmusicdb-next","version":"2.29.1","license":"MIT","scripts":{"ng":"ng","start":"npm run --silent sass:dark && ng serve --aot","dev":"npm run --silent start","sass":"node-sass","sass:dark":"node-sass --output-style compressed --omit-source-map-url ./src/sass/dark.scss > ./src/global/css/dark.css","build":"npm run --silent sass:dark && ng build --prod --i18n-locale=\\"en-GB\\"","report":"webpack-bundle-analyzer dist/stats-es2015.json","bundle-report":"ng build --prod --i18n-locale=\\"en-GB\\" --stats-json && npm run --silent report","lint":"tslint --fix --force -p .","postversion":"npm run --silent build && npm publish && git push && git push --tags"},"files":["dist"],"author":"Lucien Immink","description":"Web version of musicdb next","repository":{"type":"git","url":"git+https://github.com/lucienimmink/JSMusicDBNext"},"dependencies":{"@angular/animations":"^10.0.1","@angular/common":"^10.0.1","@angular/compiler":"^10.0.1","@angular/core":"^10.0.1","@angular/forms":"^10.0.1","@angular/localize":"^10.0.1","@angular/platform-browser":"^10.0.1","@angular/platform-browser-dynamic":"^10.0.1","@angular/router":"^10.0.1","@thebespokepixel/es-tinycolor":"^2.0.1","album-art-component":"^1.3.6","bootstrap":"^4.5.0","core-js":"^3.6.5","diacritics-normalizr":"^1.0.3","fast-average-color":"^6.0.2","fuse.js":"^6.3.1","hammerjs":"^2.0.8","idb-keyval":"^3.2.0","ngx-bootstrap":"^5.6.1","node-sass":"^4.14.1","rxjs":"^6.5.5","socket.io":"^2.3.0","tslib":"^2.0.0","winstrap":"^0.5.12","zone.js":"^0.10.3"},"devDependencies":{"@angular-builders/custom-webpack":"^8.4.1","@angular-devkit/build-angular":"^0.1000.0","@angular/cli":"^10.0.0","@angular/compiler-cli":"^10.0.1","@angular/language-service":"^10.0.1","@types/node":"^12.12.47","copy-webpack-plugin":"^6.0.2","glob-all":"^3.2.1","purgecss-webpack-plugin":"^2.3.0","ts-node":"^8.10.2","tslint":"~6.1.0","tslint-config-prettier":"^1.18.0","typescript":"~3.9.5","webpack-bundle-analyzer":"^3.8.0"},"engines":{"npm":">= 6"}}')}}]);