function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7wo0":function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsModule",(function(){return V}));var i=n("ofXK"),s=n("3Pt+"),a=n("hDf6"),c=n("tyNb"),o=n("ztCj"),r=n("MDLy"),b=n("+ooL"),l=n("OgP6"),u=n("ktVm"),p=n("t083"),g=n("XtVx"),m=function e(){_classCallCheck(this,e)},d=n("XNvx"),h=n("fXoL"),f=n("cpgm"),v=["themeForm"];function L(e,t){if(1&e){var n=h.Mb();h.Lb(0,"div",3),h.Lb(1,"span",5),h.pc(2,"Connected to last.fm: "),h.Kb(),h.Lb(3,"span"),h.pc(4),h.Lb(5,"span",6),h.pc(6),h.Kb(),h.Kb(),h.Lb(7,"a",25),h.Sb("click",(function(){return h.lc(n),h.Wb().removeLastfm()})),h.pc(8," \xa0 "),h.Jb(9,"i",26),h.pc(10," remove token"),h.Kb(),h.Kb()}if(2&e){var i=h.Wb();h.xb(4),h.rc("",i.lastfmusername&&i.lastfmusername.length>0," "),h.xb(2),h.rc("(",i.lastfmusername,")")}}function S(e,t){if(1&e){var n=h.Mb();h.Lb(0,"div",3),h.Lb(1,"span",5),h.pc(2,"Local last played tracking: "),h.Kb(),h.Lb(3,"span"),h.pc(4,"true"),h.Kb(),h.Lb(5,"a",25),h.Sb("click",(function(){return h.lc(n),h.Wb().removeLastfm()})),h.pc(6," \xa0 "),h.Jb(7,"i",26),h.pc(8," remove token"),h.Kb(),h.Kb()}}function K(e,t){if(1&e){var n=h.Mb();h.Lb(0,"a",25),h.Sb("click",(function(){return h.lc(n),h.Wb().removeConnection()})),h.pc(1," \xa0 "),h.Jb(2,"i",26),h.pc(3," remove token"),h.Kb()}}function y(e,t){1&e&&(h.Lb(0,"a",27),h.pc(1," \xa0 "),h.Jb(2,"i",28),h.pc(3," login"),h.Kb())}function k(e,t){if(1&e){var n=h.Mb();h.Lb(0,"button",29),h.Sb("click",(function(){return h.lc(n),h.Wb().reloadCollection()})),h.Jb(1,"i",30),h.pc(2," now "),h.Kb()}if(2&e){var i=h.Wb();h.cc("disabled",i.isReloading)}}function C(e,t){1&e&&(h.Lb(0,"span",31),h.Lb(1,"div",32),h.Jb(2,"div",33),h.Jb(3,"div",33),h.Jb(4,"div",33),h.Jb(5,"div",33),h.Jb(6,"div",33),h.Kb(),h.Kb())}function w(e,t){if(1&e&&(h.Lb(0,"span"),h.pc(1),h.Kb()),2&e){var n=h.Wb();h.xb(1),h.rc(" ",n.scanperc,"% done")}}function x(e,t){if(1&e){var n=h.Mb();h.Lb(0,"div",35),h.Lb(1,"span",36),h.pc(2,"items in list:"),h.Kb(),h.pc(3),h.Jb(4,"br"),h.Lb(5,"a",25),h.Sb("click",(function(){return h.lc(n),h.Wb(2).scrobbleNow()})),h.pc(6,"Scrobble now"),h.Kb(),h.Jb(7,"br"),h.Lb(8,"a",25),h.Sb("click",(function(){return h.lc(n),h.Wb(2).viewList()})),h.pc(9,"View tracks in scrobble cache"),h.Kb(),h.Kb()}if(2&e){var i=h.Wb(2);h.xb(3),h.rc(" ",i.manualScrobblingList.length," ")}}var I=function(e,t){return{active:e,"theme-alt":t}};function D(e,t){if(1&e){var n=h.Mb();h.Lb(0,"div",3),h.Lb(1,"span",5),h.pc(2,"Manual scrobbling: "),h.Kb(),h.Lb(3,"div",12),h.Lb(4,"button",13),h.Sb("click",(function(){return h.lc(n),h.Wb().toggleManualScrobbling()})),h.Lb(5,"span",14),h.pc(6,"On"),h.Kb(),h.Lb(7,"span",15),h.pc(8,"Off"),h.Kb(),h.Kb(),h.Kb(),h.oc(9,x,10,1,"div",34),h.Kb()}if(2&e){var i=h.Wb();h.xb(4),h.cc("ngClass",h.gc(2,I,i.manualScrobbling,"dark"===i.mode)),h.xb(5),h.cc("ngIf",i.manualScrobblingList&&i.manualScrobblingList.length>0)}}function M(e,t){if(1&e){var n=h.Mb();h.Lb(0,"div",19),h.Lb(1,"span",5),h.pc(2,"Add a link to your homescreen/desktop: "),h.Kb(),h.pc(3,"\xa0 "),h.Lb(4,"button",37),h.Sb("click",(function(){return h.lc(n),h.Wb().doAddToHomescreen()})),h.pc(5," add "),h.Kb(),h.Kb()}}function P(e,t){if(1&e){var n=h.Mb();h.Lb(0,"div",19),h.Lb(1,"span",5),h.pc(2,"Show visualisation on now playing screen: "),h.Kb(),h.Lb(3,"div",12),h.pc(4," \xa0 "),h.Lb(5,"button",13),h.Sb("click",(function(){return h.lc(n),h.Wb().toggleVisualisation()})),h.Lb(6,"span",14),h.pc(7,"Yes"),h.Kb(),h.Lb(8,"span",15),h.pc(9,"No"),h.Kb(),h.Kb(),h.Kb(),h.Kb()}if(2&e){var i=h.Wb();h.xb(5),h.cc("ngClass",h.gc(1,I,i.visualisation,"dark"===i.mode))}}function A(e,t){if(1&e){var n=h.Mb();h.Lb(0,"div",19),h.Lb(1,"span",5),h.pc(2,"Show smaller album-art on now playing screen: "),h.Kb(),h.Lb(3,"div",12),h.pc(4," \xa0 "),h.Lb(5,"button",13),h.Sb("click",(function(){return h.lc(n),h.Wb().toggleSmallArt()})),h.Lb(6,"span",14),h.pc(7,"Yes"),h.Kb(),h.Lb(8,"span",15),h.pc(9,"No"),h.Kb(),h.Kb(),h.Kb(),h.Kb()}if(2&e){var i=h.Wb();h.xb(5),h.cc("ngClass",h.gc(1,I,i.smallArt,"dark"===i.mode))}}function O(e,t){if(1&e&&(h.Lb(0,"div",3),h.Lb(1,"span",5),h.pc(2,"Playing time: "),h.Kb(),h.Lb(3,"span"),h.pc(4),h.Xb(5,"timeFormat"),h.Kb(),h.Kb()),2&e){var n=h.Wb();h.xb(4),h.qc(h.Yb(5,1,n.totals.playingTime))}}function j(e,t){if(1&e&&(h.Lb(0,"div",3),h.Lb(1,"span",5),h.pc(2),h.Kb(),h.Lb(3,"span"),h.pc(4),h.Kb(),h.Kb()),2&e){var n=h.Wb();h.xb(2),h.rc("",n.connectiontype," version: "),h.xb(2),h.qc(n.connectionversion)}}var T,W,F,J=function(e){return{"theme-alt":e}},N=n("kiQV").version,_=[{path:"",component:(T=function(){function e(t,n,i,s,a,c,r,b){var l=this;_classCallCheck(this,e),this.pathService=t,this.coreService=n,this.lastFMService=i,this.collectionService=s,this.router=a,this.configService=c,this.colorService=r,this.loginService=b,this.connectiontype="Node-mp3stream",this.connectiondetails="",this.connectionversion="",this.savePlaylistState=this.booleanState("save-playlist-state"),this.isContinuesplay=this.booleanState("continues-play"),this.hasDynamicAccentColor=this.booleanState("dynamic-accent-color"),this.isReloading=!1,this.scanperc=0,this.version="__dev__",this.lastParsed=Number(localStorage.getItem("lastParsed")),this.visualisation=this.booleanState("visualisation-state"),this.tracking=this.booleanState("tracking-state"),this.addToHomescreen=!1,this.isVisualCapable=-1===navigator.userAgent.indexOf("Mobi"),this.manualScrobbling=this.booleanState("manual-scrobble-state"),this.smallArt=this.booleanState("small-art"),this.hasBeenReloading=!1,this.settings=new m,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(e){l.ngOnInit()})),this.subscription2=this.lastFMService.manualScrobbleList$.subscribe((function(e){l.manualScrobblingList=e})),this.subscription3=this.configService.theme$.subscribe((function(e){l.settings.theme=e,l.theme=e})),this.subscription4=this.configService.mode$.subscribe((function(e){l.mode=e})),this.settings.theme=this.configService.theme,this.theme=this.configService.theme,this.mode=this.configService.mode,this.poll(),this.version=N,Object(o.c)("manual-scrobble-list").then((function(e){l.manualScrobblingList=e||[]}))}return _createClass(e,[{key:"ngAfterViewChecked",value:function(){this.formChanged()}},{key:"formChanged",value:function(){var e=this;this.currentForm!==this.themeForm&&(this.themeForm=this.currentForm,this.themeForm&&this.themeForm.valueChanges.subscribe((function(t){t&&t.theme&&(e.configService.theme=t.theme,e.theme=t.theme)})))}},{key:"ngOnInit",value:function(){var e=this;this.pathService.announcePage("Settings"),this.totals=this.core.totals,this.lastfmusername=localStorage.getItem("lastfm-username")||"",this.connectiondetails=localStorage.getItem("dsm"),Object(o.c)("manual-scrobble-list").then((function(t){e.manualScrobblingList=t||[]})),this.lastParsed=Number(localStorage.getItem("lastParsed")),this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate,this.configService.geo$.subscribe((function(){e.startDate=e.configService.startDate,e.stopDate=e.configService.stopDate})),window.deferredPrompt&&(this.addToHomescreen=!0),"Node-mp3stream"===this.connectiontype&&this.loginService.versionCheck(this.connectiondetails).subscribe((function(t){e.connectionversion=t.version}))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),this.subscription4.unsubscribe()}},{key:"removeLastfm",value:function(){localStorage.removeItem("lastfm-username"),localStorage.removeItem("lastfm-token"),this.ngOnInit()}},{key:"removeConnection",value:function(){localStorage.removeItem("jwt"),localStorage.removeItem("dsm"),this.ngOnInit()}},{key:"toggleSavePlaylistState",value:function(){this.savePlaylistState=!this.savePlaylistState,localStorage.setItem("save-playlist-state",this.savePlaylistState.toString())}},{key:"toggleContinuesPlay",value:function(){this.isContinuesplay=!this.isContinuesplay,localStorage.setItem("continues-play",this.isContinuesplay.toString())}},{key:"toggleManualScrobbling",value:function(){var e=this;this.manualScrobbling=!this.manualScrobbling,localStorage.setItem("manual-scrobble-state",this.manualScrobbling.toString()),Object(o.c)("manual-scrobble-list").then((function(t){e.manualScrobblingList=t||[]}))}},{key:"toggleVisualisation",value:function(){this.visualisation=!this.visualisation,this.visualisation||(this.smallArt=!1,localStorage.setItem("small-art",this.smallArt.toString())),localStorage.setItem("visualisation-state",this.visualisation.toString())}},{key:"toggleSmallArt",value:function(){this.smallArt=!this.smallArt,localStorage.setItem("small-art",this.smallArt.toString())}},{key:"toggleDynamicAccentColor",value:function(){this.hasDynamicAccentColor=!this.hasDynamicAccentColor,localStorage.setItem("dynamic-accent-color",this.hasDynamicAccentColor.toString())}},{key:"toggleTracking",value:function(){this.tracking=!this.tracking,localStorage.setItem("tracking-state",this.tracking.toString()),this.tracking?this.getLocation():(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())}},{key:"scrobbleNow",value:function(){var e=this;Object(o.c)("manual-scrobble-list").then((function(t){e.manualScrobblingList=t||[];var n=e.manualScrobblingList.pop();e.lastFMService.scrobbleCachedTrack(n).subscribe((function(t){Object(o.d)("manual-scrobble-list",e.manualScrobblingList),e.manualScrobblingList.length>0&&e.scrobbleNow()}))}))}},{key:"removeFromScrobbleList",value:function(e){var t=this;Object(o.c)("manual-scrobble-list").then((function(n){t.manualScrobblingList=n||[];var i=-1;t.manualScrobblingList.forEach((function(t,n){Object.is(t,e)&&(i=n)})),t.manualScrobblingList.splice(i,1),Object(o.d)("manual-scrobble-list",t.manualScrobblingList)}))}},{key:"reloadCollection",value:function(){var e=this;this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstart")),this.collectionService.reload().subscribe((function(t){setTimeout((function(t){e.poll()}),300)}))}},{key:"poll",value:function(){var e=this;this.collectionService.poll().subscribe((function(t){e.scanperc=t.progress,"ready"!==t.status?(e.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanning",{detail:{percentage:e.scanperc}})),setTimeout((function(t){e.poll()}),5e3),e.hasBeenReloading=!0):(e.isReloading=!1,e.hasBeenReloading&&(document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstop")),e.getCollection()))}))}},{key:"getCollection",value:function(){var e=this;this.collectionService.getCollection().subscribe((function(t){return e.fillCollection(t)}),(function(e){return console.error(e)}))}},{key:"fillCollection",value:function(e){this.hasBeenReloading=!1,this.coreService.getCore().parseSourceJson(e)}},{key:"viewList",value:function(){this.router.navigate(["/scrobble-cache"])}},{key:"doAddToHomescreen",value:function(){if(window.deferredPrompt){var e=window.deferredPrompt;e.prompt(),e.userChoice.then((function(e){Object(o.b)("defferedPrompt")}))}}},{key:"booleanState",value:function(e){var t=localStorage.getItem(e);return!(!t||"true"!==t)}},{key:"getLocation",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){t?e.configService.getSunriseInfo(t.coords.latitude,t.coords.longitude).subscribe((function(t){e.configService.startDate=new Date(t.results.sunset),e.configService.stopDate=new Date(t.results.sunrise),e.configService.stopDate.setDate(e.configService.stopDate.getDate()+1),e.configService.geoSource.next(),e.configService.applyTheme()})):(e.configService.startDate=new Date,e.configService.startDate.setHours(21,0,0),e.configService.stopDate=new Date,e.configService.stopDate.setDate(e.configService.stopDate.getDate()+1),e.configService.stopDate.setHours(7,0,0),e.configService.geoSource.next(),e.configService.applyTheme())}))}}]),e}(),T.\u0275fac=function(e){return new(e||T)(h.Ib(g.a),h.Ib(u.a),h.Ib(p.a),h.Ib(r.a),h.Ib(c.c),h.Ib(l.a),h.Ib(b.a),h.Ib(d.a))},T.\u0275cmp=h.Cb({type:T,selectors:[["app-settings"]],viewQuery:function(e,t){var n;1&e&&h.tc(v,!0),2&e&&h.ic(n=h.Tb())&&(t.currentForm=n.first)},decls:138,vars:53,consts:[[1,"animated-page","settings-page"],[1,"container"],[1,"setting-page-block"],[1,"settings-page-p"],["class","settings-page-p",4,"ngIf"],[1,""],[1,"small","muted"],[3,"click",4,"ngIf"],["routerLink","/login",4,"ngIf"],["class","btn btn-primary",3,"disabled","click",4,"ngIf"],["class","progress-wrapper",4,"ngIf"],[4,"ngIf"],[1,"btn-group"],["type","button","data-toggle","button","autocomplete","off","aria-pressed","false",1,"btn","btn-toggle-switch",3,"ngClass","click"],[1,"state-label","state-label-on"],[1,"state-label","state-label-off"],[3,"ngClass"],["themeForm","ngForm"],["class","form-group",4,"ngIf"],[1,"form-group"],[1,"radio"],["type","radio","name","theme","value","light","name","theme",3,"ngModel","ngModelChange"],["name","ngModel"],["type","radio","name","theme","value","dark","name","theme",3,"ngModel","ngModelChange"],["type","radio","name","theme","value","auto","name","theme",3,"ngModel","ngModelChange"],[3,"click"],[1,"glyph","glyph-delete"],["routerLink","/login"],[1,"glyph","glyph-admin"],[1,"btn","btn-primary",3,"disabled","click"],[1,"glyph","glyph-sync"],[1,"progress-wrapper"],[1,"progress-bar"],[1,"progress-circle"],["class","small",4,"ngIf"],[1,"small"],[1,"muted"],[1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(h.Lb(0,"div",0),h.Lb(1,"div",1),h.Lb(2,"div",2),h.Lb(3,"div",3),h.Lb(4,"h4"),h.pc(5,"User Information"),h.Kb(),h.oc(6,L,11,2,"div",4),h.oc(7,S,9,0,"div",4),h.Lb(8,"div",3),h.Lb(9,"span",5),h.pc(10,"Connected to: "),h.Kb(),h.Lb(11,"span"),h.pc(12),h.Lb(13,"span",6),h.pc(14),h.Kb(),h.Kb(),h.oc(15,K,4,0,"a",7),h.oc(16,y,4,0,"a",8),h.Kb(),h.Lb(17,"div",3),h.Lb(18,"span",5),h.pc(19,"Reload collection: "),h.Kb(),h.pc(20,"\xa0 "),h.oc(21,k,3,1,"button",9),h.oc(22,C,7,0,"span",10),h.oc(23,w,2,1,"span",11),h.Kb(),h.Kb(),h.Kb(),h.Lb(24,"div",2),h.Lb(25,"div",3),h.Lb(26,"h4"),h.pc(27,"Player settings"),h.Kb(),h.Lb(28,"div",3),h.Lb(29,"span",5),h.pc(30,"Save playliststate: "),h.Kb(),h.Lb(31,"div",12),h.Lb(32,"button",13),h.Sb("click",(function(){return t.toggleSavePlaylistState()})),h.Lb(33,"span",14),h.pc(34,"On"),h.Kb(),h.Lb(35,"span",15),h.pc(36,"Off"),h.Kb(),h.Kb(),h.Kb(),h.Kb(),h.oc(37,D,10,5,"div",4),h.Lb(38,"div",3),h.Lb(39,"span",5),h.pc(40,"Continues play: "),h.Kb(),h.Lb(41,"div",12),h.Lb(42,"button",13),h.Sb("click",(function(){return t.toggleContinuesPlay()})),h.Lb(43,"span",14),h.pc(44,"On"),h.Kb(),h.Lb(45,"span",15),h.pc(46,"Off"),h.Kb(),h.Kb(),h.Kb(),h.Kb(),h.Kb(),h.Kb(),h.Lb(47,"div",2),h.Lb(48,"div",3),h.Lb(49,"h4"),h.pc(50,"Interface settings"),h.Kb(),h.Lb(51,"div",3),h.Lb(52,"form",16,17),h.oc(54,M,6,0,"div",18),h.Lb(55,"div",19),h.Lb(56,"span",5),h.pc(57,"Dynamic accent color: "),h.Kb(),h.Lb(58,"div",12),h.pc(59," \xa0 "),h.Lb(60,"button",13),h.Sb("click",(function(){return t.toggleDynamicAccentColor()})),h.Lb(61,"span",14),h.pc(62,"Yes"),h.Kb(),h.Lb(63,"span",15),h.pc(64,"No"),h.Kb(),h.Kb(),h.Kb(),h.Kb(),h.Lb(65,"div",19),h.Lb(66,"div",20),h.Lb(67,"label"),h.Lb(68,"input",21,22),h.Sb("ngModelChange",(function(e){return t.settings.theme=e})),h.Kb(),h.Lb(70,"span"),h.pc(71,"Light"),h.Kb(),h.Lb(72,"span",6),h.pc(73," theme"),h.Kb(),h.Kb(),h.Kb(),h.Lb(74,"div",20),h.Lb(75,"label"),h.Lb(76,"input",23,22),h.Sb("ngModelChange",(function(e){return t.settings.theme=e})),h.Kb(),h.Lb(78,"span"),h.pc(79,"Dark"),h.Kb(),h.Lb(80,"span",6),h.pc(81," theme"),h.Kb(),h.Kb(),h.Kb(),h.Lb(82,"div",20),h.Lb(83,"label"),h.Lb(84,"input",24,22),h.Sb("ngModelChange",(function(e){return t.settings.theme=e})),h.Kb(),h.Lb(86,"span"),h.pc(87,"Auto"),h.Kb(),h.Lb(88,"span",6),h.pc(89," theme"),h.Kb(),h.Lb(90,"span",6),h.pc(91),h.Xb(92,"date"),h.Xb(93,"date"),h.Kb(),h.Kb(),h.Kb(),h.Kb(),h.Lb(94,"div",19),h.Lb(95,"span",5),h.pc(96,"Track location for more accurate theme switching: "),h.Kb(),h.Lb(97,"div",12),h.pc(98," \xa0 "),h.Lb(99,"button",13),h.Sb("click",(function(){return t.toggleTracking()})),h.Lb(100,"span",14),h.pc(101,"Yes"),h.Kb(),h.Lb(102,"span",15),h.pc(103,"No"),h.Kb(),h.Kb(),h.Kb(),h.Kb(),h.oc(104,P,10,4,"div",18),h.oc(105,A,10,4,"div",18),h.Kb(),h.Kb(),h.Kb(),h.Kb(),h.Lb(106,"div",2),h.Lb(107,"div",3),h.Lb(108,"h4"),h.pc(109,"Information"),h.Kb(),h.Lb(110,"div",3),h.Lb(111,"span",5),h.pc(112,"Artists: "),h.Kb(),h.Lb(113,"span"),h.pc(114),h.Kb(),h.Kb(),h.Lb(115,"div",3),h.Lb(116,"span",5),h.pc(117,"Albums: "),h.Kb(),h.Lb(118,"span"),h.pc(119),h.Kb(),h.Kb(),h.Lb(120,"div",3),h.Lb(121,"span",5),h.pc(122,"Tracks: "),h.Kb(),h.Lb(123,"span"),h.pc(124),h.Kb(),h.Kb(),h.oc(125,O,6,3,"div",4),h.Lb(126,"div",3),h.Lb(127,"span",5),h.pc(128,"Last parsed: "),h.Kb(),h.Lb(129,"span"),h.pc(130),h.Xb(131,"date"),h.Kb(),h.Kb(),h.Lb(132,"div",3),h.Lb(133,"span",5),h.pc(134,"Build version: "),h.Kb(),h.Lb(135,"span"),h.pc(136),h.Kb(),h.Kb(),h.oc(137,j,5,2,"div",4),h.Kb(),h.Kb(),h.Kb(),h.Kb()),2&e&&(h.xb(6),h.cc("ngIf",t.lastfmusername&&t.lastfmusername.length>0&&"mdb-skipped"!==t.lastfmusername),h.xb(1),h.cc("ngIf",t.lastfmusername&&"mdb-skipped"===t.lastfmusername),h.xb(5),h.rc("",t.connectiontype," "),h.xb(2),h.rc("(",t.connectiondetails,")"),h.xb(1),h.cc("ngIf",t.connectiondetails),h.xb(1),h.cc("ngIf",!t.connectiondetails),h.xb(5),h.cc("ngIf",!t.isReloading),h.xb(1),h.cc("ngIf",(!t.scanperc||100==t.scanperc)&&t.isReloading),h.xb(1),h.cc("ngIf",t.scanperc&&t.isReloading),h.xb(9),h.cc("ngClass",h.gc(39,I,t.savePlaylistState,"dark"===t.mode)),h.xb(5),h.cc("ngIf",t.lastfmusername&&t.lastfmusername.length>0&&"mdb-skipped"!==t.lastfmusername),h.xb(5),h.cc("ngClass",h.gc(42,I,t.isContinuesplay,"dark"===t.mode)),h.xb(10),h.cc("ngClass",h.fc(45,J,"dark"===t.mode)),h.xb(2),h.cc("ngIf",t.addToHomescreen),h.xb(6),h.cc("ngClass",h.gc(47,I,t.hasDynamicAccentColor,"dark"===t.mode)),h.xb(8),h.cc("ngModel",t.settings.theme),h.xb(8),h.cc("ngModel",t.settings.theme),h.xb(8),h.cc("ngModel",t.settings.theme),h.xb(7),h.sc(" (Dark mode between ",h.Zb(92,30,t.startDate,"mediumTime")," and ",h.Zb(93,33,t.stopDate,"mediumTime"),")"),h.xb(8),h.cc("ngClass",h.gc(50,I,t.tracking,"dark"===t.mode)),h.xb(5),h.cc("ngIf",t.isVisualCapable),h.xb(1),h.cc("ngIf",t.visualisation&&t.isVisualCapable),h.xb(9),h.qc(t.totals.artists),h.xb(5),h.qc(t.totals.albums),h.xb(5),h.qc(t.totals.tracks),h.xb(1),h.cc("ngIf",t.totals.playingTime),h.xb(5),h.qc(h.Zb(131,36,t.lastParsed,"medium")),h.xb(6),h.qc(t.version),h.xb(1),h.cc("ngIf",t.connectionversion))},directives:[i.k,i.i,s.m,s.d,s.e,s.h,s.a,s.c,s.f,c.d],pipes:[i.d,f.a],encapsulation:2}),T)}],R=((F=function e(){_classCallCheck(this,e)}).\u0275mod=h.Gb({type:F}),F.\u0275inj=h.Fb({factory:function(e){return new(e||F)},imports:[[c.e.forChild(_)],c.e]}),F),V=((W=function e(){_classCallCheck(this,e)}).\u0275mod=h.Gb({type:W}),W.\u0275inj=h.Fb({factory:function(e){return new(e||W)},imports:[[i.b,R,s.b,a.a]]}),W)},kiQV:function(e){e.exports=JSON.parse('{"name":"jsmusicdb-next","version":"2.29.1","license":"MIT","scripts":{"ng":"ng","start":"npm run --silent sass:dark && ng serve --aot","dev":"npm run --silent start","sass":"node-sass","sass:dark":"node-sass --output-style compressed --omit-source-map-url ./src/sass/dark.scss > ./src/global/css/dark.css","build":"npm run --silent sass:dark && ng build --prod --i18n-locale=\\"en-GB\\"","report":"webpack-bundle-analyzer dist/stats-es2015.json","bundle-report":"ng build --prod --i18n-locale=\\"en-GB\\" --stats-json && npm run --silent report","lint":"tslint --fix --force -p .","postversion":"npm run --silent build && npm publish && git push && git push --tags"},"files":["dist"],"author":"Lucien Immink","description":"Web version of musicdb next","repository":{"type":"git","url":"git+https://github.com/lucienimmink/JSMusicDBNext"},"dependencies":{"@angular/animations":"^10.0.1","@angular/common":"^10.0.1","@angular/compiler":"^10.0.1","@angular/core":"^10.0.1","@angular/forms":"^10.0.1","@angular/localize":"^10.0.1","@angular/platform-browser":"^10.0.1","@angular/platform-browser-dynamic":"^10.0.1","@angular/router":"^10.0.1","@thebespokepixel/es-tinycolor":"^2.0.1","album-art-component":"^1.3.6","bootstrap":"^4.5.0","core-js":"^3.6.5","diacritics-normalizr":"^1.0.3","fast-average-color":"^6.0.2","fuse.js":"^6.3.1","hammerjs":"^2.0.8","idb-keyval":"^3.2.0","ngx-bootstrap":"^5.6.1","node-sass":"^4.14.1","rxjs":"^6.5.5","socket.io":"^2.3.0","tslib":"^2.0.0","winstrap":"^0.5.12","zone.js":"^0.10.3"},"devDependencies":{"@angular-builders/custom-webpack":"^8.4.1","@angular-devkit/build-angular":"^0.1000.0","@angular/cli":"^10.0.0","@angular/compiler-cli":"^10.0.1","@angular/language-service":"^10.0.1","@types/node":"^12.12.47","copy-webpack-plugin":"^6.0.2","glob-all":"^3.2.1","purgecss-webpack-plugin":"^2.3.0","ts-node":"^8.10.2","tslint":"~6.1.0","tslint-config-prettier":"^1.18.0","typescript":"~3.9.5","webpack-bundle-analyzer":"^3.8.0"},"engines":{"npm":">= 6"}}')}}]);