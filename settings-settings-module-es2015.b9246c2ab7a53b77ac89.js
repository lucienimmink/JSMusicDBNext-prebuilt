(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7wo0":function(t,e,s){"use strict";s.r(e);var i=s("ofXK"),n=s("3Pt+"),a=s("hDf6"),c=s("tyNb"),o=s("ztCj"),b=s("MDLy"),r=s("+ooL"),l=s("OgP6"),g=s("ktVm"),u=s("t083"),m=s("XtVx");class h{}var d=s("XNvx"),p=s("fXoL"),f=s("cpgm");const v=["themeForm"];function M(t,e){if(1&t){const t=p.Ob();p.Nb(0,"div",3),p.Nb(1,"span",5),p.sc(2,"Connected to last.fm: "),p.Mb(),p.Nb(3,"span"),p.sc(4),p.Nb(5,"span",6),p.sc(6),p.Mb(),p.Mb(),p.Nb(7,"a",25),p.Vb("click",(function(){return p.oc(t),p.Zb().removeLastfm()})),p.sc(8," \xa0 "),p.Lb(9,"i",26),p.sc(10," remove token"),p.Mb(),p.Mb()}if(2&t){const t=p.Zb();p.zb(4),p.uc("",t.lastfmusername&&t.lastfmusername.length>0," "),p.zb(2),p.uc("(",t.lastfmusername,")")}}function N(t,e){if(1&t){const t=p.Ob();p.Nb(0,"div",3),p.Nb(1,"span",5),p.sc(2,"Local last played tracking: "),p.Mb(),p.Nb(3,"span"),p.sc(4,"true"),p.Mb(),p.Nb(5,"a",25),p.Vb("click",(function(){return p.oc(t),p.Zb().removeLastfm()})),p.sc(6," \xa0 "),p.Lb(7,"i",26),p.sc(8," remove token"),p.Mb(),p.Mb()}}function S(t,e){if(1&t){const t=p.Ob();p.Nb(0,"a",25),p.Vb("click",(function(){return p.oc(t),p.Zb().removeConnection()})),p.sc(1," \xa0 "),p.Lb(2,"i",26),p.sc(3," remove token"),p.Mb()}}function y(t,e){1&t&&(p.Nb(0,"a",27),p.sc(1," \xa0 "),p.Lb(2,"i",28),p.sc(3," login"),p.Mb())}function k(t,e){if(1&t){const t=p.Ob();p.Nb(0,"button",29),p.Vb("click",(function(){return p.oc(t),p.Zb().reloadCollection()})),p.Lb(1,"i",30),p.sc(2," now "),p.Mb()}if(2&t){const t=p.Zb();p.fc("disabled",t.isReloading)}}function C(t,e){1&t&&(p.Nb(0,"span",31),p.Nb(1,"div",32),p.Lb(2,"div",33),p.Lb(3,"div",33),p.Lb(4,"div",33),p.Lb(5,"div",33),p.Lb(6,"div",33),p.Mb(),p.Mb())}function w(t,e){if(1&t&&(p.Nb(0,"span"),p.sc(1),p.Mb()),2&t){const t=p.Zb();p.zb(1),p.uc(" ",t.scanperc,"% done")}}function D(t,e){if(1&t){const t=p.Ob();p.Nb(0,"div",35),p.Nb(1,"span",36),p.sc(2,"items in list:"),p.Mb(),p.sc(3),p.Lb(4,"br"),p.Nb(5,"a",25),p.Vb("click",(function(){return p.oc(t),p.Zb(2).scrobbleNow()})),p.sc(6,"Scrobble now"),p.Mb(),p.Lb(7,"br"),p.Nb(8,"a",25),p.Vb("click",(function(){return p.oc(t),p.Zb(2).viewList()})),p.sc(9,"View tracks in scrobble cache"),p.Mb(),p.Mb()}if(2&t){const t=p.Zb(2);p.zb(3),p.uc(" ",t.manualScrobblingList.length," ")}}const I=function(t,e){return{active:t,"theme-alt":e}};function z(t,e){if(1&t){const t=p.Ob();p.Nb(0,"div",3),p.Nb(1,"span",5),p.sc(2,"Manual scrobbling: "),p.Mb(),p.Nb(3,"div",12),p.Nb(4,"button",13),p.Vb("click",(function(){return p.oc(t),p.Zb().toggleManualScrobbling()})),p.Nb(5,"span",14),p.sc(6,"On"),p.Mb(),p.Nb(7,"span",15),p.sc(8,"Off"),p.Mb(),p.Mb(),p.Mb(),p.rc(9,D,10,1,"div",34),p.Mb()}if(2&t){const t=p.Zb();p.zb(4),p.fc("ngClass",p.jc(2,I,t.manualScrobbling,"dark"===t.mode)),p.zb(5),p.fc("ngIf",t.manualScrobblingList&&t.manualScrobblingList.length>0)}}function L(t,e){if(1&t){const t=p.Ob();p.Nb(0,"div",19),p.Nb(1,"span",5),p.sc(2,"Add a link to your homescreen/desktop: "),p.Mb(),p.sc(3,"\xa0 "),p.Nb(4,"button",37),p.Vb("click",(function(){return p.oc(t),p.Zb().doAddToHomescreen()})),p.sc(5," add "),p.Mb(),p.Mb()}}function O(t,e){if(1&t){const t=p.Ob();p.Nb(0,"div",19),p.Nb(1,"span",5),p.sc(2,"Show visualisation on now playing screen: "),p.Mb(),p.Nb(3,"div",12),p.sc(4," \xa0 "),p.Nb(5,"button",13),p.Vb("click",(function(){return p.oc(t),p.Zb().toggleVisualisation()})),p.Nb(6,"span",14),p.sc(7,"Yes"),p.Mb(),p.Nb(8,"span",15),p.sc(9,"No"),p.Mb(),p.Mb(),p.Mb(),p.Mb()}if(2&t){const t=p.Zb();p.zb(5),p.fc("ngClass",p.jc(1,I,t.visualisation,"dark"===t.mode))}}function j(t,e){if(1&t){const t=p.Ob();p.Nb(0,"div",19),p.Nb(1,"span",5),p.sc(2,"Show smaller album-art on now playing screen: "),p.Mb(),p.Nb(3,"div",12),p.sc(4," \xa0 "),p.Nb(5,"button",13),p.Vb("click",(function(){return p.oc(t),p.Zb().toggleSmallArt()})),p.Nb(6,"span",14),p.sc(7,"Yes"),p.Mb(),p.Nb(8,"span",15),p.sc(9,"No"),p.Mb(),p.Mb(),p.Mb(),p.Mb()}if(2&t){const t=p.Zb();p.zb(5),p.fc("ngClass",p.jc(1,I,t.smallArt,"dark"===t.mode))}}function V(t,e){if(1&t&&(p.Nb(0,"div",3),p.Nb(1,"span",5),p.sc(2,"Playing time: "),p.Mb(),p.Nb(3,"span"),p.sc(4),p.ac(5,"timeFormat"),p.Mb(),p.Mb()),2&t){const t=p.Zb();p.zb(4),p.tc(p.bc(5,1,t.totals.playingTime))}}function P(t,e){if(1&t&&(p.Nb(0,"div",3),p.Nb(1,"span",5),p.sc(2),p.Mb(),p.Nb(3,"span"),p.sc(4),p.Mb(),p.Mb()),2&t){const t=p.Zb();p.zb(2),p.uc("",t.connectiontype," version: "),p.zb(2),p.tc(t.connectionversion)}}const A=function(t){return{"theme-alt":t}},{version:T}=s("kiQV"),Z=[{path:"",component:(()=>{class t{constructor(t,e,s,i,n,a,c,b){this.pathService=t,this.coreService=e,this.lastFMService=s,this.collectionService=i,this.router=n,this.configService=a,this.colorService=c,this.loginService=b,this.connectiontype="node-mp3stream",this.connectiondetails="",this.connectionversion="",this.savePlaylistState=this.booleanState("save-playlist-state"),this.isContinuesplay=this.booleanState("continues-play"),this.hasDynamicAccentColor=this.booleanState("dynamic-accent-color"),this.isReloading=!1,this.scanperc=0,this.version="__dev__",this.lastParsed=Number(localStorage.getItem("lastParsed")),this.visualisation=this.booleanState("visualisation-state"),this.tracking=this.booleanState("tracking-state"),this.addToHomescreen=!1,this.isVisualCapable=-1===navigator.userAgent.indexOf("Mobi"),this.manualScrobbling=this.booleanState("manual-scrobble-state"),this.smallArt=this.booleanState("small-art"),this.hasBeenReloading=!1,this.settings=new h,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.subscription2=this.lastFMService.manualScrobbleList$.subscribe(t=>{this.manualScrobblingList=t}),this.subscription3=this.configService.theme$.subscribe(t=>{this.settings.theme=t,this.theme=t}),this.subscription4=this.configService.mode$.subscribe(t=>{this.mode=t}),this.settings.theme=this.configService.theme,this.theme=this.configService.theme,this.mode=this.configService.mode,this.poll(),this.version=T,Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]})}ngAfterViewChecked(){this.formChanged()}formChanged(){this.currentForm!==this.themeForm&&(this.themeForm=this.currentForm,this.themeForm&&this.themeForm.valueChanges.subscribe(t=>{t&&t.theme&&(this.configService.theme=t.theme,this.theme=t.theme)}))}ngOnInit(){this.pathService.announcePage("Settings"),this.totals=this.core.totals,this.lastfmusername=localStorage.getItem("lastfm-username")||"",this.connectiondetails=localStorage.getItem("dsm"),Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]}),this.lastParsed=Number(localStorage.getItem("lastParsed")),this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate,this.configService.geo$.subscribe(()=>{this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate}),window.deferredPrompt&&(this.addToHomescreen=!0),"node-mp3stream"===this.connectiontype&&this.loginService.versionCheck(this.connectiondetails).subscribe(t=>{this.connectionversion=t.version})}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),this.subscription4.unsubscribe()}removeLastfm(){localStorage.removeItem("lastfm-username"),localStorage.removeItem("lastfm-token"),this.ngOnInit()}removeConnection(){localStorage.removeItem("jwt"),localStorage.removeItem("dsm"),this.ngOnInit()}toggleSavePlaylistState(){this.savePlaylistState=!this.savePlaylistState,localStorage.setItem("save-playlist-state",this.savePlaylistState.toString())}toggleContinuesPlay(){this.isContinuesplay=!this.isContinuesplay,localStorage.setItem("continues-play",this.isContinuesplay.toString())}toggleManualScrobbling(){this.manualScrobbling=!this.manualScrobbling,localStorage.setItem("manual-scrobble-state",this.manualScrobbling.toString()),Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]})}toggleVisualisation(){this.visualisation=!this.visualisation,this.visualisation||(this.smallArt=!1,localStorage.setItem("small-art",this.smallArt.toString())),localStorage.setItem("visualisation-state",this.visualisation.toString())}toggleSmallArt(){this.smallArt=!this.smallArt,localStorage.setItem("small-art",this.smallArt.toString())}toggleDynamicAccentColor(){this.hasDynamicAccentColor=!this.hasDynamicAccentColor,localStorage.setItem("dynamic-accent-color",this.hasDynamicAccentColor.toString())}toggleTracking(){this.tracking=!this.tracking,localStorage.setItem("tracking-state",this.tracking.toString()),this.tracking?this.getLocation():(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())}scrobbleNow(){Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[];const e=this.manualScrobblingList.pop();this.lastFMService.scrobbleCachedTrack(e).subscribe(t=>{Object(o.d)("manual-scrobble-list",this.manualScrobblingList),this.manualScrobblingList.length>0&&this.scrobbleNow()})})}removeFromScrobbleList(t){Object(o.c)("manual-scrobble-list").then(e=>{this.manualScrobblingList=e||[];let s=-1;this.manualScrobblingList.forEach((e,i)=>{Object.is(e,t)&&(s=i)}),this.manualScrobblingList.splice(s,1),Object(o.d)("manual-scrobble-list",this.manualScrobblingList)})}reloadCollection(){this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstart")),this.collectionService.reload().subscribe(t=>{setTimeout(t=>{this.poll()},300)})}poll(){this.collectionService.poll().subscribe(t=>{this.scanperc=t.progress,"ready"!==t.status?(this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanning",{detail:{percentage:this.scanperc}})),setTimeout(t=>{this.poll()},5e3),this.hasBeenReloading=!0):(this.isReloading=!1,this.hasBeenReloading&&(document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstop")),this.getCollection()))})}getCollection(){this.collectionService.getCollection().subscribe(t=>this.fillCollection(t),t=>console.error(t))}fillCollection(t){this.hasBeenReloading=!1,this.coreService.getCore().parseSourceJson(t)}viewList(){this.router.navigate(["/scrobble-cache"])}doAddToHomescreen(){if(window.deferredPrompt){const t=window.deferredPrompt;t.prompt(),t.userChoice.then(t=>{Object(o.b)("defferedPrompt")})}}booleanState(t){const e=localStorage.getItem(t);return!(!e||"true"!==e)}getLocation(){navigator.geolocation.getCurrentPosition(t=>{t?this.configService.getSunriseInfo(t.coords.latitude,t.coords.longitude).subscribe(t=>{this.configService.startDate=new Date(t.results.sunset),this.configService.stopDate=new Date(t.results.sunrise),this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.geoSource.next(),this.configService.applyTheme()}):(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())})}}return t.\u0275fac=function(e){return new(e||t)(p.Kb(m.a),p.Kb(g.a),p.Kb(u.a),p.Kb(b.a),p.Kb(c.c),p.Kb(l.a),p.Kb(r.a),p.Kb(d.a))},t.\u0275cmp=p.Eb({type:t,selectors:[["app-settings"]],viewQuery:function(t,e){var s;1&t&&p.wc(v,!0),2&t&&p.lc(s=p.Wb())&&(e.currentForm=s.first)},decls:138,vars:53,consts:[[1,"animated-page","settings-page"],[1,"container"],[1,"setting-page-block"],[1,"settings-page-p"],["class","settings-page-p",4,"ngIf"],[1,""],[1,"small","muted"],[3,"click",4,"ngIf"],["routerLink","/login",4,"ngIf"],["class","btn btn-primary",3,"disabled","click",4,"ngIf"],["class","progress-wrapper",4,"ngIf"],[4,"ngIf"],[1,"btn-group"],["type","button","data-toggle","button","autocomplete","off","aria-pressed","false",1,"btn","btn-toggle-switch",3,"ngClass","click"],[1,"state-label","state-label-on"],[1,"state-label","state-label-off"],[3,"ngClass"],["themeForm","ngForm"],["class","form-group",4,"ngIf"],[1,"form-group"],[1,"radio"],["type","radio","name","theme","value","light","name","theme",3,"ngModel","ngModelChange"],["name","ngModel"],["type","radio","name","theme","value","dark","name","theme",3,"ngModel","ngModelChange"],["type","radio","name","theme","value","auto","name","theme",3,"ngModel","ngModelChange"],[3,"click"],[1,"glyph","glyph-delete"],["routerLink","/login"],[1,"glyph","glyph-admin"],[1,"btn","btn-primary",3,"disabled","click"],[1,"glyph","glyph-sync"],[1,"progress-wrapper"],[1,"progress-bar"],[1,"progress-circle"],["class","small",4,"ngIf"],[1,"small"],[1,"muted"],[1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(p.Nb(0,"div",0),p.Nb(1,"div",1),p.Nb(2,"div",2),p.Nb(3,"div",3),p.Nb(4,"h4"),p.sc(5,"User Information"),p.Mb(),p.rc(6,M,11,2,"div",4),p.rc(7,N,9,0,"div",4),p.Nb(8,"div",3),p.Nb(9,"span",5),p.sc(10,"Connected to: "),p.Mb(),p.Nb(11,"span"),p.sc(12),p.Nb(13,"span",6),p.sc(14),p.Mb(),p.Mb(),p.rc(15,S,4,0,"a",7),p.rc(16,y,4,0,"a",8),p.Mb(),p.Nb(17,"div",3),p.Nb(18,"span",5),p.sc(19,"Reload collection: "),p.Mb(),p.sc(20,"\xa0 "),p.rc(21,k,3,1,"button",9),p.rc(22,C,7,0,"span",10),p.rc(23,w,2,1,"span",11),p.Mb(),p.Mb(),p.Mb(),p.Nb(24,"div",2),p.Nb(25,"div",3),p.Nb(26,"h4"),p.sc(27,"Player settings"),p.Mb(),p.Nb(28,"div",3),p.Nb(29,"span",5),p.sc(30,"Save playliststate: "),p.Mb(),p.Nb(31,"div",12),p.Nb(32,"button",13),p.Vb("click",(function(){return e.toggleSavePlaylistState()})),p.Nb(33,"span",14),p.sc(34,"On"),p.Mb(),p.Nb(35,"span",15),p.sc(36,"Off"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.rc(37,z,10,5,"div",4),p.Nb(38,"div",3),p.Nb(39,"span",5),p.sc(40,"Continues play: "),p.Mb(),p.Nb(41,"div",12),p.Nb(42,"button",13),p.Vb("click",(function(){return e.toggleContinuesPlay()})),p.Nb(43,"span",14),p.sc(44,"On"),p.Mb(),p.Nb(45,"span",15),p.sc(46,"Off"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(47,"div",2),p.Nb(48,"div",3),p.Nb(49,"h4"),p.sc(50,"Interface settings"),p.Mb(),p.Nb(51,"div",3),p.Nb(52,"form",16,17),p.rc(54,L,6,0,"div",18),p.Nb(55,"div",19),p.Nb(56,"span",5),p.sc(57,"Dynamic accent color: "),p.Mb(),p.Nb(58,"div",12),p.sc(59," \xa0 "),p.Nb(60,"button",13),p.Vb("click",(function(){return e.toggleDynamicAccentColor()})),p.Nb(61,"span",14),p.sc(62,"Yes"),p.Mb(),p.Nb(63,"span",15),p.sc(64,"No"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(65,"div",19),p.Nb(66,"div",20),p.Nb(67,"label"),p.Nb(68,"input",21,22),p.Vb("ngModelChange",(function(t){return e.settings.theme=t})),p.Mb(),p.Nb(70,"span"),p.sc(71,"Light"),p.Mb(),p.Nb(72,"span",6),p.sc(73," theme"),p.Mb(),p.Mb(),p.Mb(),p.Nb(74,"div",20),p.Nb(75,"label"),p.Nb(76,"input",23,22),p.Vb("ngModelChange",(function(t){return e.settings.theme=t})),p.Mb(),p.Nb(78,"span"),p.sc(79,"Dark"),p.Mb(),p.Nb(80,"span",6),p.sc(81," theme"),p.Mb(),p.Mb(),p.Mb(),p.Nb(82,"div",20),p.Nb(83,"label"),p.Nb(84,"input",24,22),p.Vb("ngModelChange",(function(t){return e.settings.theme=t})),p.Mb(),p.Nb(86,"span"),p.sc(87,"Auto"),p.Mb(),p.Nb(88,"span",6),p.sc(89," theme"),p.Mb(),p.Nb(90,"span",6),p.sc(91),p.ac(92,"date"),p.ac(93,"date"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(94,"div",19),p.Nb(95,"span",5),p.sc(96,"Track location for more accurate theme switching: "),p.Mb(),p.Nb(97,"div",12),p.sc(98," \xa0 "),p.Nb(99,"button",13),p.Vb("click",(function(){return e.toggleTracking()})),p.Nb(100,"span",14),p.sc(101,"Yes"),p.Mb(),p.Nb(102,"span",15),p.sc(103,"No"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.rc(104,O,10,4,"div",18),p.rc(105,j,10,4,"div",18),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(106,"div",2),p.Nb(107,"div",3),p.Nb(108,"h4"),p.sc(109,"Information"),p.Mb(),p.Nb(110,"div",3),p.Nb(111,"span",5),p.sc(112,"Artists: "),p.Mb(),p.Nb(113,"span"),p.sc(114),p.Mb(),p.Mb(),p.Nb(115,"div",3),p.Nb(116,"span",5),p.sc(117,"Albums: "),p.Mb(),p.Nb(118,"span"),p.sc(119),p.Mb(),p.Mb(),p.Nb(120,"div",3),p.Nb(121,"span",5),p.sc(122,"Tracks: "),p.Mb(),p.Nb(123,"span"),p.sc(124),p.Mb(),p.Mb(),p.rc(125,V,6,3,"div",4),p.Nb(126,"div",3),p.Nb(127,"span",5),p.sc(128,"Last parsed: "),p.Mb(),p.Nb(129,"span"),p.sc(130),p.ac(131,"date"),p.Mb(),p.Mb(),p.Nb(132,"div",3),p.Nb(133,"span",5),p.sc(134,"Build version: "),p.Mb(),p.Nb(135,"span"),p.sc(136),p.Mb(),p.Mb(),p.rc(137,P,5,2,"div",4),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&t&&(p.zb(6),p.fc("ngIf",e.lastfmusername&&e.lastfmusername.length>0&&"mdb-skipped"!==e.lastfmusername),p.zb(1),p.fc("ngIf",e.lastfmusername&&"mdb-skipped"===e.lastfmusername),p.zb(5),p.uc("",e.connectiontype," "),p.zb(2),p.uc("(",e.connectiondetails,")"),p.zb(1),p.fc("ngIf",e.connectiondetails),p.zb(1),p.fc("ngIf",!e.connectiondetails),p.zb(5),p.fc("ngIf",!e.isReloading),p.zb(1),p.fc("ngIf",(!e.scanperc||100==e.scanperc)&&e.isReloading),p.zb(1),p.fc("ngIf",e.scanperc&&e.isReloading),p.zb(9),p.fc("ngClass",p.jc(39,I,e.savePlaylistState,"dark"===e.mode)),p.zb(5),p.fc("ngIf",e.lastfmusername&&e.lastfmusername.length>0&&"mdb-skipped"!==e.lastfmusername),p.zb(5),p.fc("ngClass",p.jc(42,I,e.isContinuesplay,"dark"===e.mode)),p.zb(10),p.fc("ngClass",p.ic(45,A,"dark"===e.mode)),p.zb(2),p.fc("ngIf",e.addToHomescreen),p.zb(6),p.fc("ngClass",p.jc(47,I,e.hasDynamicAccentColor,"dark"===e.mode)),p.zb(8),p.fc("ngModel",e.settings.theme),p.zb(8),p.fc("ngModel",e.settings.theme),p.zb(8),p.fc("ngModel",e.settings.theme),p.zb(7),p.vc(" (Dark mode between ",p.cc(92,30,e.startDate,"mediumTime")," and ",p.cc(93,33,e.stopDate,"mediumTime"),")"),p.zb(8),p.fc("ngClass",p.jc(50,I,e.tracking,"dark"===e.mode)),p.zb(5),p.fc("ngIf",e.isVisualCapable),p.zb(1),p.fc("ngIf",e.visualisation&&e.isVisualCapable),p.zb(9),p.tc(e.totals.artists),p.zb(5),p.tc(e.totals.albums),p.zb(5),p.tc(e.totals.tracks),p.zb(1),p.fc("ngIf",e.totals.playingTime),p.zb(5),p.tc(p.cc(131,36,e.lastParsed,"medium")),p.zb(6),p.tc(e.version),p.zb(1),p.fc("ngIf",e.connectionversion))},directives:[i.k,i.i,n.m,n.d,n.e,n.h,n.a,n.c,n.f,c.d],pipes:[i.d,f.a],encapsulation:2}),t})()}];let x=(()=>{class t{}return t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(Z)],c.e]}),t})();s.d(e,"SettingsModule",(function(){return F}));let F=(()=>{class t{}return t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({factory:function(e){return new(e||t)},imports:[[i.b,x,n.b,a.a]]}),t})()},kiQV:function(t){t.exports=JSON.parse('{"name":"jsmusicdb-next","version":"2.28.1","license":"MIT","scripts":{"ng":"ng","start":"npm run --silent sass:dark && ng serve --aot","dev":"npm run --silent start","sass":"node-sass","sass:dark":"node-sass --output-style compressed --omit-source-map-url ./src/sass/dark.scss > ./src/global/css/dark.css","build":"npm run --silent sass:dark && ng build --prod --i18n-locale=\\"en-GB\\"","report":"webpack-bundle-analyzer dist/stats-es2015.json","bundle-report":"ng build --prod --i18n-locale=\\"en-GB\\" --stats-json && npm run --silent report","lint":"tslint --fix --force -p .","postversion":"npm run --silent build && npm publish && git push && git push --tags"},"files":["dist"],"author":"Lucien Immink","description":"Web version of musicdb next","repository":{"type":"git","url":"git+https://github.com/lucienimmink/JSMusicDBNext"},"dependencies":{"@angular/animations":"^9.1.9","@angular/common":"^9.1.9","@angular/compiler":"^9.1.9","@angular/core":"^9.1.9","@angular/forms":"^9.1.9","@angular/localize":"^9.1.9","@angular/platform-browser":"^9.1.9","@angular/platform-browser-dynamic":"^9.1.9","@angular/router":"^9.1.9","@thebespokepixel/es-tinycolor":"^1.0.7","album-art-component":"^1.3.4","bootstrap":"^4.5.0","core-js":"^3.6.5","diacritics-normalizr":"^1.0.3","fast-average-color":"^5.2.1","fuse.js":"^3.4.6","hammerjs":"^2.0.8","idb-keyval":"^3.2.0","ngx-bootstrap":"^5.6.1","node-sass":"^4.14.1","rxjs":"^6.5.5","socket.io":"^2.3.0","tslib":"^1.13.0","winstrap":"^0.5.12","zone.js":"^0.10.3"},"devDependencies":{"@angular-builders/custom-webpack":"^8.4.1","@angular-devkit/build-angular":"^0.900.7","@angular/cli":"^9.1.6","@angular/compiler-cli":"^9.1.9","@angular/language-service":"^9.1.9","@types/node":"^12.12.41","copy-webpack-plugin":"^5.0.5","glob-all":"^3.2.1","purgecss-webpack-plugin":"^1.6.0","ts-node":"^8.10.1","tslint":"^5.20.1","tslint-config-prettier":"^1.18.0","typescript":"~3.7.5","webpack-bundle-analyzer":"^3.8.0"},"engines":{"npm":">= 6"}}')}}]);