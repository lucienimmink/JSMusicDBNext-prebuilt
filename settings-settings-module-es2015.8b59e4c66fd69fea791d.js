(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7wo0":function(t,e,s){"use strict";s.r(e);var i=s("ofXK"),n=s("3Pt+"),a=s("hDf6"),c=s("tyNb"),o=s("ztCj"),b=s("MDLy"),r=s("+ooL"),l=s("OgP6"),g=s("ktVm"),u=s("t083"),m=s("XtVx");class h{}var d=s("fXoL"),p=s("cpgm");const f=["themeForm"];function v(t,e){if(1&t){const t=d.Pb();d.Ob(0,"div",3),d.Ob(1,"span",5),d.zc(2,"Connected to last.fm: "),d.Nb(),d.Ob(3,"span"),d.zc(4),d.Ob(5,"span",6),d.zc(6),d.Nb(),d.Nb(),d.Ob(7,"a",24),d.Wb("click",(function(e){return d.rc(t),d.ac().removeLastfm()})),d.zc(8," \xa0 "),d.Mb(9,"i",25),d.zc(10," remove token"),d.Nb(),d.Nb()}if(2&t){const t=d.ac();d.zb(4),d.Bc("",t.lastfmusername&&t.lastfmusername.length>0," "),d.zb(2),d.Bc("(",t.lastfmusername,")")}}function O(t,e){if(1&t){const t=d.Pb();d.Ob(0,"div",3),d.Ob(1,"span",5),d.zc(2,"Local last played tracking: "),d.Nb(),d.Ob(3,"span"),d.zc(4,"true"),d.Nb(),d.Ob(5,"a",24),d.Wb("click",(function(e){return d.rc(t),d.ac().removeLastfm()})),d.zc(6," \xa0 "),d.Mb(7,"i",25),d.zc(8," remove token"),d.Nb(),d.Nb()}}function N(t,e){if(1&t){const t=d.Pb();d.Ob(0,"a",24),d.Wb("click",(function(e){return d.rc(t),d.ac().removeConnection()})),d.zc(1," \xa0 "),d.Mb(2,"i",25),d.zc(3," remove token"),d.Nb()}}function S(t,e){1&t&&(d.Ob(0,"a",26),d.zc(1," \xa0 "),d.Mb(2,"i",27),d.zc(3," login"),d.Nb())}function z(t,e){if(1&t){const t=d.Pb();d.Ob(0,"button",28),d.Wb("click",(function(e){return d.rc(t),d.ac().reloadCollection()})),d.Mb(1,"i",29),d.zc(2," now "),d.Nb()}if(2&t){const t=d.ac();d.gc("disabled",t.isReloading)}}function k(t,e){1&t&&(d.Ob(0,"span"),d.Ob(1,"div",30),d.Mb(2,"div",31),d.Mb(3,"div",31),d.Mb(4,"div",31),d.Mb(5,"div",31),d.Mb(6,"div",31),d.Nb(),d.Nb())}function y(t,e){if(1&t&&(d.Ob(0,"span"),d.zc(1),d.Nb()),2&t){const t=d.ac();d.zb(1),d.Bc(" ",t.scanperc,"% done")}}function C(t,e){if(1&t){const t=d.Pb();d.Ob(0,"div",33),d.Ob(1,"span",34),d.zc(2,"items in list:"),d.Nb(),d.zc(3),d.Mb(4,"br"),d.Ob(5,"a",24),d.Wb("click",(function(e){return d.rc(t),d.ac(2).scrobbleNow()})),d.zc(6,"Scrobble now"),d.Nb(),d.Mb(7,"br"),d.Ob(8,"a",24),d.Wb("click",(function(e){return d.rc(t),d.ac(2).viewList()})),d.zc(9,"View tracks in scrobble cache"),d.Nb(),d.Nb()}if(2&t){const t=d.ac(2);d.zb(3),d.Bc(" ",t.manualScrobblingList.length," ")}}const D=function(t,e){return{active:t,"theme-alt":e}};function w(t,e){if(1&t){const t=d.Pb();d.Ob(0,"div",3),d.Ob(1,"span",5),d.zc(2,"Manual scrobbling: "),d.Nb(),d.Ob(3,"div",11),d.Ob(4,"button",12),d.Wb("click",(function(e){return d.rc(t),d.ac().toggleManualScrobbling()})),d.Ob(5,"span",13),d.zc(6,"On"),d.Nb(),d.Ob(7,"span",14),d.zc(8,"Off"),d.Nb(),d.Nb(),d.Nb(),d.xc(9,C,10,1,"div",32),d.Nb()}if(2&t){const t=d.ac();d.zb(4),d.gc("ngClass",d.kc(2,D,t.manualScrobbling,"dark"===t.mode)),d.zb(5),d.gc("ngIf",t.manualScrobblingList&&t.manualScrobblingList.length>0)}}function I(t,e){if(1&t){const t=d.Pb();d.Ob(0,"div",18),d.Ob(1,"span",5),d.zc(2,"Add a link to your homescreen/desktop: "),d.Nb(),d.zc(3,"\xa0 "),d.Ob(4,"button",35),d.Wb("click",(function(e){return d.rc(t),d.ac().doAddToHomescreen()})),d.zc(5," add "),d.Nb(),d.Nb()}}function L(t,e){if(1&t){const t=d.Pb();d.Ob(0,"div",18),d.Ob(1,"span",5),d.zc(2,"Show visualisation on now playing screen: "),d.Nb(),d.Ob(3,"div",11),d.zc(4," \xa0 "),d.Ob(5,"button",12),d.Wb("click",(function(e){return d.rc(t),d.ac().toggleVisualisation()})),d.Ob(6,"span",13),d.zc(7,"Yes"),d.Nb(),d.Ob(8,"span",14),d.zc(9,"No"),d.Nb(),d.Nb(),d.Nb(),d.Nb()}if(2&t){const t=d.ac();d.zb(5),d.gc("ngClass",d.kc(1,D,t.visualisation,"dark"===t.mode))}}function M(t,e){if(1&t){const t=d.Pb();d.Ob(0,"div",18),d.Ob(1,"span",5),d.zc(2,"Show smaller album-art on now playing screen: "),d.Nb(),d.Ob(3,"div",11),d.zc(4," \xa0 "),d.Ob(5,"button",12),d.Wb("click",(function(e){return d.rc(t),d.ac().toggleSmallArt()})),d.Ob(6,"span",13),d.zc(7,"Yes"),d.Nb(),d.Ob(8,"span",14),d.zc(9,"No"),d.Nb(),d.Nb(),d.Nb(),d.Nb()}if(2&t){const t=d.ac();d.zb(5),d.gc("ngClass",d.kc(1,D,t.smallArt,"dark"===t.mode))}}function P(t,e){if(1&t&&(d.Ob(0,"div",3),d.Ob(1,"span",5),d.zc(2,"Playing time: "),d.Nb(),d.Ob(3,"span"),d.zc(4),d.bc(5,"timeFormat"),d.Nb(),d.Nb()),2&t){const t=d.ac();d.zb(4),d.Ac(d.cc(5,1,t.totals.playingTime))}}const x=function(t){return{"theme-alt":t}},{version:A}=s("kiQV"),j=[{path:"",component:(()=>{class t{constructor(t,e,s,i,n,a,c){this.pathService=t,this.coreService=e,this.lastFMService=s,this.collectionService=i,this.router=n,this.configService=a,this.colorService=c,this.connectiontype="node-mp3stream",this.connectiondetails="",this.savePlaylistState=this.booleanState("save-playlist-state"),this.isContinuesplay=this.booleanState("continues-play"),this.hasDynamicAccentColor=this.booleanState("dynamic-accent-color"),this.isReloading=!1,this.scanperc=0,this.version="__dev__",this.lastParsed=Number(localStorage.getItem("lastParsed")),this.visualisation=this.booleanState("visualisation-state"),this.tracking=this.booleanState("tracking-state"),this.addToHomescreen=!1,this.isVisualCapable=-1===navigator.userAgent.indexOf("Mobi"),this.manualScrobbling=this.booleanState("manual-scrobble-state"),this.smallArt=this.booleanState("small-art"),this.hasBeenReloading=!1,this.settings=new h,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.subscription2=this.lastFMService.manualScrobbleList$.subscribe(t=>{this.manualScrobblingList=t}),this.subscription3=this.configService.theme$.subscribe(t=>{this.settings.theme=t,this.theme=t}),this.subscription4=this.configService.mode$.subscribe(t=>{this.mode=t}),this.settings.theme=this.configService.theme,this.theme=this.configService.theme,this.mode=this.configService.mode,this.poll(),this.version=A,Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]})}ngAfterViewChecked(){this.formChanged()}formChanged(){this.currentForm!==this.themeForm&&(this.themeForm=this.currentForm,this.themeForm&&this.themeForm.valueChanges.subscribe(t=>{t&&t.theme&&(this.configService.theme=t.theme,this.theme=t.theme)}))}ngOnInit(){this.pathService.announcePage("Settings"),this.totals=this.core.totals,this.lastfmusername=localStorage.getItem("lastfm-username")||"",this.connectiondetails=localStorage.getItem("dsm"),Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]}),this.lastParsed=Number(localStorage.getItem("lastParsed")),this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate,this.configService.geo$.subscribe(()=>{this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate}),window.deferredPrompt&&(this.addToHomescreen=!0)}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),this.subscription4.unsubscribe()}removeLastfm(){localStorage.removeItem("lastfm-username"),localStorage.removeItem("lastfm-token"),this.ngOnInit()}removeConnection(){localStorage.removeItem("jwt"),localStorage.removeItem("dsm"),this.ngOnInit()}toggleSavePlaylistState(){this.savePlaylistState=!this.savePlaylistState,localStorage.setItem("save-playlist-state",this.savePlaylistState.toString())}toggleContinuesPlay(){this.isContinuesplay=!this.isContinuesplay,localStorage.setItem("continues-play",this.isContinuesplay.toString())}toggleManualScrobbling(){this.manualScrobbling=!this.manualScrobbling,localStorage.setItem("manual-scrobble-state",this.manualScrobbling.toString()),Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]})}toggleVisualisation(){this.visualisation=!this.visualisation,this.visualisation||(this.smallArt=!1,localStorage.setItem("small-art",this.smallArt.toString())),localStorage.setItem("visualisation-state",this.visualisation.toString())}toggleSmallArt(){this.smallArt=!this.smallArt,localStorage.setItem("small-art",this.smallArt.toString())}toggleDynamicAccentColor(){this.hasDynamicAccentColor=!this.hasDynamicAccentColor,localStorage.setItem("dynamic-accent-color",this.hasDynamicAccentColor.toString())}toggleTracking(){this.tracking=!this.tracking,localStorage.setItem("tracking-state",this.tracking.toString()),this.tracking?this.getLocation():(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())}scrobbleNow(){Object(o.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[];const e=this.manualScrobblingList.pop();this.lastFMService.scrobbleCachedTrack(e).subscribe(t=>{Object(o.d)("manual-scrobble-list",this.manualScrobblingList),this.manualScrobblingList.length>0&&this.scrobbleNow()})})}removeFromScrobbleList(t){Object(o.c)("manual-scrobble-list").then(e=>{this.manualScrobblingList=e||[];let s=-1;this.manualScrobblingList.forEach((e,i)=>{Object.is(e,t)&&(s=i)}),this.manualScrobblingList.splice(s,1),Object(o.d)("manual-scrobble-list",this.manualScrobblingList)})}reloadCollection(){this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstart")),this.collectionService.reload().subscribe(t=>{setTimeout(t=>{this.poll()},300)})}poll(){this.collectionService.poll().subscribe(t=>{this.scanperc=t.progress,"ready"!==t.status?(this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanning",{detail:{percentage:this.scanperc}})),setTimeout(t=>{this.poll()},5e3),this.hasBeenReloading=!0):(this.isReloading=!1,this.hasBeenReloading&&(document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstop")),this.getCollection()))})}getCollection(){this.collectionService.getCollection().subscribe(t=>this.fillCollection(t),t=>console.error(t))}fillCollection(t){this.hasBeenReloading=!1,this.coreService.getCore().parseSourceJson(t)}viewList(){this.router.navigate(["/scrobble-cache"])}doAddToHomescreen(){if(window.deferredPrompt){const t=window.deferredPrompt;t.prompt(),t.userChoice.then(t=>{Object(o.b)("defferedPrompt")})}}booleanState(t){const e=localStorage.getItem(t);return!(!e||"true"!==e)}getLocation(){navigator.geolocation.getCurrentPosition(t=>{t?this.configService.getSunriseInfo(t.coords.latitude,t.coords.longitude).subscribe(t=>{this.configService.startDate=new Date(t.results.sunset),this.configService.stopDate=new Date(t.results.sunrise),this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.geoSource.next(),this.configService.applyTheme()}):(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())})}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(m.a),d.Lb(g.a),d.Lb(u.a),d.Lb(b.a),d.Lb(c.c),d.Lb(l.a),d.Lb(r.a))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-settings"]],viewQuery:function(t,e){var s;1&t&&d.Dc(f,!0),2&t&&d.oc(s=d.Xb())&&(e.currentForm=s.first)},decls:137,vars:52,consts:[[1,"animated-page","settings-page"],[1,"container"],[1,"setting-page-block"],[1,"settings-page-p"],["class","settings-page-p",4,"ngIf"],[1,""],[1,"small","muted"],[3,"click",4,"ngIf"],["routerLink","/login",4,"ngIf"],["class","btn btn-primary",3,"disabled","click",4,"ngIf"],[4,"ngIf"],[1,"btn-group"],["type","button","data-toggle","button","autocomplete","off","aria-pressed","false",1,"btn","btn-toggle-switch",3,"ngClass","click"],[1,"state-label","state-label-on"],[1,"state-label","state-label-off"],[3,"ngClass"],["themeForm","ngForm"],["class","form-group",4,"ngIf"],[1,"form-group"],[1,"radio"],["type","radio","name","theme","value","light","name","theme",3,"ngModel","ngModelChange"],["name","ngModel"],["type","radio","name","theme","value","dark","name","theme",3,"ngModel","ngModelChange"],["type","radio","name","theme","value","auto","name","theme",3,"ngModel","ngModelChange"],[3,"click"],[1,"glyph","glyph-delete"],["routerLink","/login"],[1,"glyph","glyph-admin"],[1,"btn","btn-primary",3,"disabled","click"],[1,"glyph","glyph-sync"],[1,"progress-bar",2,"margin-left","100px"],[1,"progress-circle"],["class","small",4,"ngIf"],[1,"small"],[1,"muted"],[1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(d.Ob(0,"div",0),d.Ob(1,"div",1),d.Ob(2,"div",2),d.Ob(3,"div",3),d.Ob(4,"h4"),d.zc(5,"User Information"),d.Nb(),d.xc(6,v,11,2,"div",4),d.xc(7,O,9,0,"div",4),d.Ob(8,"div",3),d.Ob(9,"span",5),d.zc(10,"Connected to: "),d.Nb(),d.Ob(11,"span"),d.zc(12),d.Ob(13,"span",6),d.zc(14),d.Nb(),d.Nb(),d.xc(15,N,4,0,"a",7),d.xc(16,S,4,0,"a",8),d.Nb(),d.Ob(17,"div",3),d.Ob(18,"span",5),d.zc(19,"Reload collection: "),d.Nb(),d.zc(20,"\xa0 "),d.xc(21,z,3,1,"button",9),d.xc(22,k,7,0,"span",10),d.xc(23,y,2,1,"span",10),d.Nb(),d.Nb(),d.Nb(),d.Ob(24,"div",2),d.Ob(25,"div",3),d.Ob(26,"h4"),d.zc(27,"Player settings"),d.Nb(),d.Ob(28,"div",3),d.Ob(29,"span",5),d.zc(30,"Save playliststate: "),d.Nb(),d.Ob(31,"div",11),d.Ob(32,"button",12),d.Wb("click",(function(t){return e.toggleSavePlaylistState()})),d.Ob(33,"span",13),d.zc(34,"On"),d.Nb(),d.Ob(35,"span",14),d.zc(36,"Off"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.xc(37,w,10,5,"div",4),d.Ob(38,"div",3),d.Ob(39,"span",5),d.zc(40,"Continues play: "),d.Nb(),d.Ob(41,"div",11),d.Ob(42,"button",12),d.Wb("click",(function(t){return e.toggleContinuesPlay()})),d.Ob(43,"span",13),d.zc(44,"On"),d.Nb(),d.Ob(45,"span",14),d.zc(46,"Off"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(47,"div",2),d.Ob(48,"div",3),d.Ob(49,"h4"),d.zc(50,"Interface settings"),d.Nb(),d.Ob(51,"div",3),d.Ob(52,"form",15,16),d.xc(54,I,6,0,"div",17),d.Ob(55,"div",18),d.Ob(56,"span",5),d.zc(57,"Dynamic accent color: "),d.Nb(),d.Ob(58,"div",11),d.zc(59," \xa0 "),d.Ob(60,"button",12),d.Wb("click",(function(t){return e.toggleDynamicAccentColor()})),d.Ob(61,"span",13),d.zc(62,"Yes"),d.Nb(),d.Ob(63,"span",14),d.zc(64,"No"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(65,"div",18),d.Ob(66,"div",19),d.Ob(67,"label"),d.Ob(68,"input",20,21),d.Wb("ngModelChange",(function(t){return e.settings.theme=t})),d.Nb(),d.Ob(70,"span"),d.zc(71,"Light"),d.Nb(),d.Ob(72,"span",6),d.zc(73," theme"),d.Nb(),d.Nb(),d.Nb(),d.Ob(74,"div",19),d.Ob(75,"label"),d.Ob(76,"input",22,21),d.Wb("ngModelChange",(function(t){return e.settings.theme=t})),d.Nb(),d.Ob(78,"span"),d.zc(79,"Dark"),d.Nb(),d.Ob(80,"span",6),d.zc(81," theme"),d.Nb(),d.Nb(),d.Nb(),d.Ob(82,"div",19),d.Ob(83,"label"),d.Ob(84,"input",23,21),d.Wb("ngModelChange",(function(t){return e.settings.theme=t})),d.Nb(),d.Ob(86,"span"),d.zc(87,"Auto"),d.Nb(),d.Ob(88,"span",6),d.zc(89," theme"),d.Nb(),d.Ob(90,"span",6),d.zc(91),d.bc(92,"date"),d.bc(93,"date"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(94,"div",18),d.Ob(95,"span",5),d.zc(96,"Track location for more accurate theme switching: "),d.Nb(),d.Ob(97,"div",11),d.zc(98," \xa0 "),d.Ob(99,"button",12),d.Wb("click",(function(t){return e.toggleTracking()})),d.Ob(100,"span",13),d.zc(101,"Yes"),d.Nb(),d.Ob(102,"span",14),d.zc(103,"No"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.xc(104,L,10,4,"div",17),d.xc(105,M,10,4,"div",17),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(106,"div",2),d.Ob(107,"div",3),d.Ob(108,"h4"),d.zc(109,"Information"),d.Nb(),d.Ob(110,"div",3),d.Ob(111,"span",5),d.zc(112,"Artists: "),d.Nb(),d.Ob(113,"span"),d.zc(114),d.Nb(),d.Nb(),d.Ob(115,"div",3),d.Ob(116,"span",5),d.zc(117,"Albums: "),d.Nb(),d.Ob(118,"span"),d.zc(119),d.Nb(),d.Nb(),d.Ob(120,"div",3),d.Ob(121,"span",5),d.zc(122,"Tracks: "),d.Nb(),d.Ob(123,"span"),d.zc(124),d.Nb(),d.Nb(),d.xc(125,P,6,3,"div",4),d.Ob(126,"div",3),d.Ob(127,"span",5),d.zc(128,"Last parsed: "),d.Nb(),d.Ob(129,"span"),d.zc(130),d.bc(131,"date"),d.Nb(),d.Nb(),d.Ob(132,"div",3),d.Ob(133,"span",5),d.zc(134,"Build version: "),d.Nb(),d.Ob(135,"span"),d.zc(136),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb()),2&t&&(d.zb(6),d.gc("ngIf",e.lastfmusername&&e.lastfmusername.length>0&&"mdb-skipped"!==e.lastfmusername),d.zb(1),d.gc("ngIf",e.lastfmusername&&"mdb-skipped"===e.lastfmusername),d.zb(5),d.Bc("",e.connectiontype," "),d.zb(2),d.Bc("(",e.connectiondetails,")"),d.zb(1),d.gc("ngIf",e.connectiondetails),d.zb(1),d.gc("ngIf",!e.connectiondetails),d.zb(5),d.gc("ngIf",!e.isReloading),d.zb(1),d.gc("ngIf",!e.scanperc&&e.isReloading),d.zb(1),d.gc("ngIf",e.scanperc&&e.isReloading),d.zb(9),d.gc("ngClass",d.kc(38,D,e.savePlaylistState,"dark"===e.mode)),d.zb(5),d.gc("ngIf",e.lastfmusername&&e.lastfmusername.length>0&&"mdb-skipped"!==e.lastfmusername),d.zb(5),d.gc("ngClass",d.kc(41,D,e.isContinuesplay,"dark"===e.mode)),d.zb(10),d.gc("ngClass",d.jc(44,x,"dark"===e.mode)),d.zb(2),d.gc("ngIf",e.addToHomescreen),d.zb(6),d.gc("ngClass",d.kc(46,D,e.hasDynamicAccentColor,"dark"===e.mode)),d.zb(8),d.gc("ngModel",e.settings.theme),d.zb(8),d.gc("ngModel",e.settings.theme),d.zb(8),d.gc("ngModel",e.settings.theme),d.zb(7),d.Cc(" (Dark mode between ",d.dc(92,29,e.startDate,"mediumTime")," and ",d.dc(93,32,e.stopDate,"mediumTime"),")"),d.zb(8),d.gc("ngClass",d.kc(49,D,e.tracking,"dark"===e.mode)),d.zb(5),d.gc("ngIf",e.isVisualCapable),d.zb(1),d.gc("ngIf",e.visualisation&&e.isVisualCapable),d.zb(9),d.Ac(e.totals.artists),d.zb(5),d.Ac(e.totals.albums),d.zb(5),d.Ac(e.totals.tracks),d.zb(1),d.gc("ngIf",e.totals.playingTime),d.zb(5),d.Ac(d.dc(131,35,e.lastParsed,"medium")),d.zb(6),d.Ac(e.version))},directives:[i.l,i.j,n.p,n.g,n.h,n.k,n.a,n.f,n.i,c.d],pipes:[i.e,p.a],encapsulation:2}),t})()}];let T=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},imports:[[c.e.forChild(j)],c.e]}),t})();s.d(e,"SettingsModule",(function(){return W}));let W=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},imports:[[i.c,T,n.b,a.a]]}),t})()},kiQV:function(t){t.exports=JSON.parse('{"name":"jsmusicdb-next","version":"2.26.0","license":"MIT","scripts":{"ng":"ng","start":"npm run --silent sass:dark && ng serve --aot","dev":"npm run --silent start","sass":"node-sass","sass:dark":"node-sass --output-style compressed --omit-source-map-url ./src/sass/dark.scss > ./src/global/css/dark.css","build":"npm run --silent sass:dark && ng build --prod --i18n-locale=\\"en-GB\\"","report":"webpack-bundle-analyzer dist/stats-es2015.json","bundle-report":"ng build --prod --i18n-locale=\\"en-GB\\" --stats-json && npm run --silent report","lint":"tslint --fix --force -p .","postversion":"npm run --silent build && npm publish && git push && git push --tags"},"files":["dist"],"author":"Lucien Immink","description":"Web version of musicdb next","repository":{"type":"git","url":"git+https://github.com/lucienimmink/JSMusicDBNext"},"dependencies":{"@angular/animations":"^9.0.1","@angular/common":"^9.0.1","@angular/compiler":"^9.0.1","@angular/core":"^9.0.1","@angular/forms":"^9.0.1","@angular/localize":"^9.0.1","@angular/platform-browser":"^9.0.1","@angular/platform-browser-dynamic":"^9.0.1","@angular/router":"^9.0.1","@thebespokepixel/es-tinycolor":"^1.0.7","album-art-component":"^1.3.2","bootstrap":"^4.4.1","core-js":"^3.6.4","diacritics-normalizr":"^1.0.1","fast-average-color":"^5.2.1","fuse.js":"^3.4.6","hammerjs":"^2.0.8","idb-keyval":"^3.2.0","ngx-bootstrap":"^5.3.2","node-sass":"^4.13.1","rxjs":"^6.5.4","tslib":"^1.10.0","winstrap":"^0.5.12","zone.js":"~0.10.2"},"devDependencies":{"@angular-builders/custom-webpack":"^8.4.1","@angular-devkit/build-angular":"^0.900.2","@angular/cli":"9.0.1","@angular/compiler-cli":"^9.0.1","@angular/language-service":"^9.0.1","@types/node":"^12.12.27","copy-webpack-plugin":"^5.0.5","glob-all":"^3.1.0","node":"^12.16.0","purgecss-webpack-plugin":"^1.6.0","ts-node":"^8.6.2","tslint":"^5.20.1","tslint-config-prettier":"^1.18.0","typescript":"~3.7.5","webpack-bundle-analyzer":"^3.6.0"},"engines":{"npm":">= 6"}}')}}]);