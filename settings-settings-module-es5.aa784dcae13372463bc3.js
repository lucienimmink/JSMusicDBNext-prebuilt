function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7wo0":function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),a=n("3Pt+"),s=n("hDf6"),c=n("tyNb"),o=n("ztCj"),r=n("MDLy"),l=n("+ooL"),b=n("OgP6"),u=n("ktVm"),g=n("t083"),m=n("XtVx"),d=function e(){_classCallCheck(this,e)},p=n("fXoL"),h=n("cpgm"),f=["themeForm"];function v(e,t){if(1&e){var n=p.Pb();p.Ob(0,"div",3),p.Ob(1,"span",5),p.zc(2,"Connected to last.fm: "),p.Nb(),p.Ob(3,"span"),p.zc(4),p.Ob(5,"span",6),p.zc(6),p.Nb(),p.Nb(),p.Ob(7,"a",25),p.Wb("click",(function(){return p.rc(n),p.ac().removeLastfm()})),p.zc(8," \xa0 "),p.Mb(9,"i",26),p.zc(10," remove token"),p.Nb(),p.Nb()}if(2&e){var i=p.ac();p.zb(4),p.Bc("",i.lastfmusername&&i.lastfmusername.length>0," "),p.zb(2),p.Bc("(",i.lastfmusername,")")}}function O(e,t){if(1&e){var n=p.Pb();p.Ob(0,"div",3),p.Ob(1,"span",5),p.zc(2,"Local last played tracking: "),p.Nb(),p.Ob(3,"span"),p.zc(4,"true"),p.Nb(),p.Ob(5,"a",25),p.Wb("click",(function(){return p.rc(n),p.ac().removeLastfm()})),p.zc(6," \xa0 "),p.Mb(7,"i",26),p.zc(8," remove token"),p.Nb(),p.Nb()}}function N(e,t){if(1&e){var n=p.Pb();p.Ob(0,"a",25),p.Wb("click",(function(){return p.rc(n),p.ac().removeConnection()})),p.zc(1," \xa0 "),p.Mb(2,"i",26),p.zc(3," remove token"),p.Nb()}}function S(e,t){1&e&&(p.Ob(0,"a",27),p.zc(1," \xa0 "),p.Mb(2,"i",28),p.zc(3," login"),p.Nb())}function z(e,t){if(1&e){var n=p.Pb();p.Ob(0,"button",29),p.Wb("click",(function(){return p.rc(n),p.ac().reloadCollection()})),p.Mb(1,"i",30),p.zc(2," now "),p.Nb()}if(2&e){var i=p.ac();p.gc("disabled",i.isReloading)}}function k(e,t){1&e&&(p.Ob(0,"span",31),p.Ob(1,"div",32),p.Mb(2,"div",33),p.Mb(3,"div",33),p.Mb(4,"div",33),p.Mb(5,"div",33),p.Mb(6,"div",33),p.Nb(),p.Nb())}function y(e,t){if(1&e&&(p.Ob(0,"span"),p.zc(1),p.Nb()),2&e){var n=p.ac();p.zb(1),p.Bc(" ",n.scanperc,"% done")}}function C(e,t){if(1&e){var n=p.Pb();p.Ob(0,"div",35),p.Ob(1,"span",36),p.zc(2,"items in list:"),p.Nb(),p.zc(3),p.Mb(4,"br"),p.Ob(5,"a",25),p.Wb("click",(function(){return p.rc(n),p.ac(2).scrobbleNow()})),p.zc(6,"Scrobble now"),p.Nb(),p.Mb(7,"br"),p.Ob(8,"a",25),p.Wb("click",(function(){return p.rc(n),p.ac(2).viewList()})),p.zc(9,"View tracks in scrobble cache"),p.Nb(),p.Nb()}if(2&e){var i=p.ac(2);p.zb(3),p.Bc(" ",i.manualScrobblingList.length," ")}}var w=function(e,t){return{active:e,"theme-alt":t}};function D(e,t){if(1&e){var n=p.Pb();p.Ob(0,"div",3),p.Ob(1,"span",5),p.zc(2,"Manual scrobbling: "),p.Nb(),p.Ob(3,"div",12),p.Ob(4,"button",13),p.Wb("click",(function(){return p.rc(n),p.ac().toggleManualScrobbling()})),p.Ob(5,"span",14),p.zc(6,"On"),p.Nb(),p.Ob(7,"span",15),p.zc(8,"Off"),p.Nb(),p.Nb(),p.Nb(),p.xc(9,C,10,1,"div",34),p.Nb()}if(2&e){var i=p.ac();p.zb(4),p.gc("ngClass",p.kc(2,w,i.manualScrobbling,"dark"===i.mode)),p.zb(5),p.gc("ngIf",i.manualScrobblingList&&i.manualScrobblingList.length>0)}}function I(e,t){if(1&e){var n=p.Pb();p.Ob(0,"div",19),p.Ob(1,"span",5),p.zc(2,"Add a link to your homescreen/desktop: "),p.Nb(),p.zc(3,"\xa0 "),p.Ob(4,"button",37),p.Wb("click",(function(){return p.rc(n),p.ac().doAddToHomescreen()})),p.zc(5," add "),p.Nb(),p.Nb()}}function L(e,t){if(1&e){var n=p.Pb();p.Ob(0,"div",19),p.Ob(1,"span",5),p.zc(2,"Show visualisation on now playing screen: "),p.Nb(),p.Ob(3,"div",12),p.zc(4," \xa0 "),p.Ob(5,"button",13),p.Wb("click",(function(){return p.rc(n),p.ac().toggleVisualisation()})),p.Ob(6,"span",14),p.zc(7,"Yes"),p.Nb(),p.Ob(8,"span",15),p.zc(9,"No"),p.Nb(),p.Nb(),p.Nb(),p.Nb()}if(2&e){var i=p.ac();p.zb(5),p.gc("ngClass",p.kc(1,w,i.visualisation,"dark"===i.mode))}}function P(e,t){if(1&e){var n=p.Pb();p.Ob(0,"div",19),p.Ob(1,"span",5),p.zc(2,"Show smaller album-art on now playing screen: "),p.Nb(),p.Ob(3,"div",12),p.zc(4," \xa0 "),p.Ob(5,"button",13),p.Wb("click",(function(){return p.rc(n),p.ac().toggleSmallArt()})),p.Ob(6,"span",14),p.zc(7,"Yes"),p.Nb(),p.Ob(8,"span",15),p.zc(9,"No"),p.Nb(),p.Nb(),p.Nb(),p.Nb()}if(2&e){var i=p.ac();p.zb(5),p.gc("ngClass",p.kc(1,w,i.smallArt,"dark"===i.mode))}}function M(e,t){if(1&e&&(p.Ob(0,"div",3),p.Ob(1,"span",5),p.zc(2,"Playing time: "),p.Nb(),p.Ob(3,"span"),p.zc(4),p.bc(5,"timeFormat"),p.Nb(),p.Nb()),2&e){var n=p.ac();p.zb(4),p.Ac(p.cc(5,1,n.totals.playingTime))}}var A,x,j=function(e){return{"theme-alt":e}},T=n("kiQV").version,W=[{path:"",component:(A=function(){function e(t,n,i,a,s,c,r){var l=this;_classCallCheck(this,e),this.pathService=t,this.coreService=n,this.lastFMService=i,this.collectionService=a,this.router=s,this.configService=c,this.colorService=r,this.connectiontype="node-mp3stream",this.connectiondetails="",this.savePlaylistState=this.booleanState("save-playlist-state"),this.isContinuesplay=this.booleanState("continues-play"),this.hasDynamicAccentColor=this.booleanState("dynamic-accent-color"),this.isReloading=!1,this.scanperc=0,this.version="__dev__",this.lastParsed=Number(localStorage.getItem("lastParsed")),this.visualisation=this.booleanState("visualisation-state"),this.tracking=this.booleanState("tracking-state"),this.addToHomescreen=!1,this.isVisualCapable=-1===navigator.userAgent.indexOf("Mobi"),this.manualScrobbling=this.booleanState("manual-scrobble-state"),this.smallArt=this.booleanState("small-art"),this.hasBeenReloading=!1,this.settings=new d,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(e){l.ngOnInit()})),this.subscription2=this.lastFMService.manualScrobbleList$.subscribe((function(e){l.manualScrobblingList=e})),this.subscription3=this.configService.theme$.subscribe((function(e){l.settings.theme=e,l.theme=e})),this.subscription4=this.configService.mode$.subscribe((function(e){l.mode=e})),this.settings.theme=this.configService.theme,this.theme=this.configService.theme,this.mode=this.configService.mode,this.poll(),this.version=T,Object(o.c)("manual-scrobble-list").then((function(e){l.manualScrobblingList=e||[]}))}return _createClass(e,[{key:"ngAfterViewChecked",value:function(){this.formChanged()}},{key:"formChanged",value:function(){var e=this;this.currentForm!==this.themeForm&&(this.themeForm=this.currentForm,this.themeForm&&this.themeForm.valueChanges.subscribe((function(t){t&&t.theme&&(e.configService.theme=t.theme,e.theme=t.theme)})))}},{key:"ngOnInit",value:function(){var e=this;this.pathService.announcePage("Settings"),this.totals=this.core.totals,this.lastfmusername=localStorage.getItem("lastfm-username")||"",this.connectiondetails=localStorage.getItem("dsm"),Object(o.c)("manual-scrobble-list").then((function(t){e.manualScrobblingList=t||[]})),this.lastParsed=Number(localStorage.getItem("lastParsed")),this.startDate=this.configService.startDate,this.stopDate=this.configService.stopDate,this.configService.geo$.subscribe((function(){e.startDate=e.configService.startDate,e.stopDate=e.configService.stopDate})),window.deferredPrompt&&(this.addToHomescreen=!0)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe(),this.subscription2.unsubscribe(),this.subscription3.unsubscribe(),this.subscription4.unsubscribe()}},{key:"removeLastfm",value:function(){localStorage.removeItem("lastfm-username"),localStorage.removeItem("lastfm-token"),this.ngOnInit()}},{key:"removeConnection",value:function(){localStorage.removeItem("jwt"),localStorage.removeItem("dsm"),this.ngOnInit()}},{key:"toggleSavePlaylistState",value:function(){this.savePlaylistState=!this.savePlaylistState,localStorage.setItem("save-playlist-state",this.savePlaylistState.toString())}},{key:"toggleContinuesPlay",value:function(){this.isContinuesplay=!this.isContinuesplay,localStorage.setItem("continues-play",this.isContinuesplay.toString())}},{key:"toggleManualScrobbling",value:function(){var e=this;this.manualScrobbling=!this.manualScrobbling,localStorage.setItem("manual-scrobble-state",this.manualScrobbling.toString()),Object(o.c)("manual-scrobble-list").then((function(t){e.manualScrobblingList=t||[]}))}},{key:"toggleVisualisation",value:function(){this.visualisation=!this.visualisation,this.visualisation||(this.smallArt=!1,localStorage.setItem("small-art",this.smallArt.toString())),localStorage.setItem("visualisation-state",this.visualisation.toString())}},{key:"toggleSmallArt",value:function(){this.smallArt=!this.smallArt,localStorage.setItem("small-art",this.smallArt.toString())}},{key:"toggleDynamicAccentColor",value:function(){this.hasDynamicAccentColor=!this.hasDynamicAccentColor,localStorage.setItem("dynamic-accent-color",this.hasDynamicAccentColor.toString())}},{key:"toggleTracking",value:function(){this.tracking=!this.tracking,localStorage.setItem("tracking-state",this.tracking.toString()),this.tracking?this.getLocation():(this.configService.startDate=new Date,this.configService.startDate.setHours(21,0,0),this.configService.stopDate=new Date,this.configService.stopDate.setDate(this.configService.stopDate.getDate()+1),this.configService.stopDate.setHours(7,0,0),this.configService.geoSource.next(),this.configService.applyTheme())}},{key:"scrobbleNow",value:function(){var e=this;Object(o.c)("manual-scrobble-list").then((function(t){e.manualScrobblingList=t||[];var n=e.manualScrobblingList.pop();e.lastFMService.scrobbleCachedTrack(n).subscribe((function(t){Object(o.d)("manual-scrobble-list",e.manualScrobblingList),e.manualScrobblingList.length>0&&e.scrobbleNow()}))}))}},{key:"removeFromScrobbleList",value:function(e){var t=this;Object(o.c)("manual-scrobble-list").then((function(n){t.manualScrobblingList=n||[];var i=-1;t.manualScrobblingList.forEach((function(t,n){Object.is(t,e)&&(i=n)})),t.manualScrobblingList.splice(i,1),Object(o.d)("manual-scrobble-list",t.manualScrobblingList)}))}},{key:"reloadCollection",value:function(){var e=this;this.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstart")),this.collectionService.reload().subscribe((function(t){setTimeout((function(t){e.poll()}),300)}))}},{key:"poll",value:function(){var e=this;this.collectionService.poll().subscribe((function(t){e.scanperc=t.progress,"ready"!==t.status?(e.isReloading=!0,document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanning",{detail:{percentage:e.scanperc}})),setTimeout((function(t){e.poll()}),5e3),e.hasBeenReloading=!0):(e.isReloading=!1,e.hasBeenReloading&&(document.querySelector("mdb-player").dispatchEvent(new CustomEvent("external.mdbscanstop")),e.getCollection()))}))}},{key:"getCollection",value:function(){var e=this;this.collectionService.getCollection().subscribe((function(t){return e.fillCollection(t)}),(function(e){return console.error(e)}))}},{key:"fillCollection",value:function(e){this.hasBeenReloading=!1,this.coreService.getCore().parseSourceJson(e)}},{key:"viewList",value:function(){this.router.navigate(["/scrobble-cache"])}},{key:"doAddToHomescreen",value:function(){if(window.deferredPrompt){var e=window.deferredPrompt;e.prompt(),e.userChoice.then((function(e){Object(o.b)("defferedPrompt")}))}}},{key:"booleanState",value:function(e){var t=localStorage.getItem(e);return!(!t||"true"!==t)}},{key:"getLocation",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){t?e.configService.getSunriseInfo(t.coords.latitude,t.coords.longitude).subscribe((function(t){e.configService.startDate=new Date(t.results.sunset),e.configService.stopDate=new Date(t.results.sunrise),e.configService.stopDate.setDate(e.configService.stopDate.getDate()+1),e.configService.geoSource.next(),e.configService.applyTheme()})):(e.configService.startDate=new Date,e.configService.startDate.setHours(21,0,0),e.configService.stopDate=new Date,e.configService.stopDate.setDate(e.configService.stopDate.getDate()+1),e.configService.stopDate.setHours(7,0,0),e.configService.geoSource.next(),e.configService.applyTheme())}))}}]),e}(),A.\u0275fac=function(e){return new(e||A)(p.Lb(m.a),p.Lb(u.a),p.Lb(g.a),p.Lb(r.a),p.Lb(c.c),p.Lb(b.a),p.Lb(l.a))},A.\u0275cmp=p.Fb({type:A,selectors:[["app-settings"]],viewQuery:function(e,t){var n;1&e&&p.Dc(f,!0),2&e&&p.oc(n=p.Xb())&&(t.currentForm=n.first)},decls:137,vars:52,consts:[[1,"animated-page","settings-page"],[1,"container"],[1,"setting-page-block"],[1,"settings-page-p"],["class","settings-page-p",4,"ngIf"],[1,""],[1,"small","muted"],[3,"click",4,"ngIf"],["routerLink","/login",4,"ngIf"],["class","btn btn-primary",3,"disabled","click",4,"ngIf"],["class","progress-wrapper",4,"ngIf"],[4,"ngIf"],[1,"btn-group"],["type","button","data-toggle","button","autocomplete","off","aria-pressed","false",1,"btn","btn-toggle-switch",3,"ngClass","click"],[1,"state-label","state-label-on"],[1,"state-label","state-label-off"],[3,"ngClass"],["themeForm","ngForm"],["class","form-group",4,"ngIf"],[1,"form-group"],[1,"radio"],["type","radio","name","theme","value","light","name","theme",3,"ngModel","ngModelChange"],["name","ngModel"],["type","radio","name","theme","value","dark","name","theme",3,"ngModel","ngModelChange"],["type","radio","name","theme","value","auto","name","theme",3,"ngModel","ngModelChange"],[3,"click"],[1,"glyph","glyph-delete"],["routerLink","/login"],[1,"glyph","glyph-admin"],[1,"btn","btn-primary",3,"disabled","click"],[1,"glyph","glyph-sync"],[1,"progress-wrapper"],[1,"progress-bar"],[1,"progress-circle"],["class","small",4,"ngIf"],[1,"small"],[1,"muted"],[1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(p.Ob(0,"div",0),p.Ob(1,"div",1),p.Ob(2,"div",2),p.Ob(3,"div",3),p.Ob(4,"h4"),p.zc(5,"User Information"),p.Nb(),p.xc(6,v,11,2,"div",4),p.xc(7,O,9,0,"div",4),p.Ob(8,"div",3),p.Ob(9,"span",5),p.zc(10,"Connected to: "),p.Nb(),p.Ob(11,"span"),p.zc(12),p.Ob(13,"span",6),p.zc(14),p.Nb(),p.Nb(),p.xc(15,N,4,0,"a",7),p.xc(16,S,4,0,"a",8),p.Nb(),p.Ob(17,"div",3),p.Ob(18,"span",5),p.zc(19,"Reload collection: "),p.Nb(),p.zc(20,"\xa0 "),p.xc(21,z,3,1,"button",9),p.xc(22,k,7,0,"span",10),p.xc(23,y,2,1,"span",11),p.Nb(),p.Nb(),p.Nb(),p.Ob(24,"div",2),p.Ob(25,"div",3),p.Ob(26,"h4"),p.zc(27,"Player settings"),p.Nb(),p.Ob(28,"div",3),p.Ob(29,"span",5),p.zc(30,"Save playliststate: "),p.Nb(),p.Ob(31,"div",12),p.Ob(32,"button",13),p.Wb("click",(function(){return t.toggleSavePlaylistState()})),p.Ob(33,"span",14),p.zc(34,"On"),p.Nb(),p.Ob(35,"span",15),p.zc(36,"Off"),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.xc(37,D,10,5,"div",4),p.Ob(38,"div",3),p.Ob(39,"span",5),p.zc(40,"Continues play: "),p.Nb(),p.Ob(41,"div",12),p.Ob(42,"button",13),p.Wb("click",(function(){return t.toggleContinuesPlay()})),p.Ob(43,"span",14),p.zc(44,"On"),p.Nb(),p.Ob(45,"span",15),p.zc(46,"Off"),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(47,"div",2),p.Ob(48,"div",3),p.Ob(49,"h4"),p.zc(50,"Interface settings"),p.Nb(),p.Ob(51,"div",3),p.Ob(52,"form",16,17),p.xc(54,I,6,0,"div",18),p.Ob(55,"div",19),p.Ob(56,"span",5),p.zc(57,"Dynamic accent color: "),p.Nb(),p.Ob(58,"div",12),p.zc(59," \xa0 "),p.Ob(60,"button",13),p.Wb("click",(function(){return t.toggleDynamicAccentColor()})),p.Ob(61,"span",14),p.zc(62,"Yes"),p.Nb(),p.Ob(63,"span",15),p.zc(64,"No"),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(65,"div",19),p.Ob(66,"div",20),p.Ob(67,"label"),p.Ob(68,"input",21,22),p.Wb("ngModelChange",(function(e){return t.settings.theme=e})),p.Nb(),p.Ob(70,"span"),p.zc(71,"Light"),p.Nb(),p.Ob(72,"span",6),p.zc(73," theme"),p.Nb(),p.Nb(),p.Nb(),p.Ob(74,"div",20),p.Ob(75,"label"),p.Ob(76,"input",23,22),p.Wb("ngModelChange",(function(e){return t.settings.theme=e})),p.Nb(),p.Ob(78,"span"),p.zc(79,"Dark"),p.Nb(),p.Ob(80,"span",6),p.zc(81," theme"),p.Nb(),p.Nb(),p.Nb(),p.Ob(82,"div",20),p.Ob(83,"label"),p.Ob(84,"input",24,22),p.Wb("ngModelChange",(function(e){return t.settings.theme=e})),p.Nb(),p.Ob(86,"span"),p.zc(87,"Auto"),p.Nb(),p.Ob(88,"span",6),p.zc(89," theme"),p.Nb(),p.Ob(90,"span",6),p.zc(91),p.bc(92,"date"),p.bc(93,"date"),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(94,"div",19),p.Ob(95,"span",5),p.zc(96,"Track location for more accurate theme switching: "),p.Nb(),p.Ob(97,"div",12),p.zc(98," \xa0 "),p.Ob(99,"button",13),p.Wb("click",(function(){return t.toggleTracking()})),p.Ob(100,"span",14),p.zc(101,"Yes"),p.Nb(),p.Ob(102,"span",15),p.zc(103,"No"),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.xc(104,L,10,4,"div",18),p.xc(105,P,10,4,"div",18),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(106,"div",2),p.Ob(107,"div",3),p.Ob(108,"h4"),p.zc(109,"Information"),p.Nb(),p.Ob(110,"div",3),p.Ob(111,"span",5),p.zc(112,"Artists: "),p.Nb(),p.Ob(113,"span"),p.zc(114),p.Nb(),p.Nb(),p.Ob(115,"div",3),p.Ob(116,"span",5),p.zc(117,"Albums: "),p.Nb(),p.Ob(118,"span"),p.zc(119),p.Nb(),p.Nb(),p.Ob(120,"div",3),p.Ob(121,"span",5),p.zc(122,"Tracks: "),p.Nb(),p.Ob(123,"span"),p.zc(124),p.Nb(),p.Nb(),p.xc(125,M,6,3,"div",4),p.Ob(126,"div",3),p.Ob(127,"span",5),p.zc(128,"Last parsed: "),p.Nb(),p.Ob(129,"span"),p.zc(130),p.bc(131,"date"),p.Nb(),p.Nb(),p.Ob(132,"div",3),p.Ob(133,"span",5),p.zc(134,"Build version: "),p.Nb(),p.Ob(135,"span"),p.zc(136),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb()),2&e&&(p.zb(6),p.gc("ngIf",t.lastfmusername&&t.lastfmusername.length>0&&"mdb-skipped"!==t.lastfmusername),p.zb(1),p.gc("ngIf",t.lastfmusername&&"mdb-skipped"===t.lastfmusername),p.zb(5),p.Bc("",t.connectiontype," "),p.zb(2),p.Bc("(",t.connectiondetails,")"),p.zb(1),p.gc("ngIf",t.connectiondetails),p.zb(1),p.gc("ngIf",!t.connectiondetails),p.zb(5),p.gc("ngIf",!t.isReloading),p.zb(1),p.gc("ngIf",(!t.scanperc||100==t.scanperc)&&t.isReloading),p.zb(1),p.gc("ngIf",t.scanperc&&t.isReloading),p.zb(9),p.gc("ngClass",p.kc(38,w,t.savePlaylistState,"dark"===t.mode)),p.zb(5),p.gc("ngIf",t.lastfmusername&&t.lastfmusername.length>0&&"mdb-skipped"!==t.lastfmusername),p.zb(5),p.gc("ngClass",p.kc(41,w,t.isContinuesplay,"dark"===t.mode)),p.zb(10),p.gc("ngClass",p.jc(44,j,"dark"===t.mode)),p.zb(2),p.gc("ngIf",t.addToHomescreen),p.zb(6),p.gc("ngClass",p.kc(46,w,t.hasDynamicAccentColor,"dark"===t.mode)),p.zb(8),p.gc("ngModel",t.settings.theme),p.zb(8),p.gc("ngModel",t.settings.theme),p.zb(8),p.gc("ngModel",t.settings.theme),p.zb(7),p.Cc(" (Dark mode between ",p.dc(92,29,t.startDate,"mediumTime")," and ",p.dc(93,32,t.stopDate,"mediumTime"),")"),p.zb(8),p.gc("ngClass",p.kc(49,w,t.tracking,"dark"===t.mode)),p.zb(5),p.gc("ngIf",t.isVisualCapable),p.zb(1),p.gc("ngIf",t.visualisation&&t.isVisualCapable),p.zb(9),p.Ac(t.totals.artists),p.zb(5),p.Ac(t.totals.albums),p.zb(5),p.Ac(t.totals.tracks),p.zb(1),p.gc("ngIf",t.totals.playingTime),p.zb(5),p.Ac(p.dc(131,35,t.lastParsed,"medium")),p.zb(6),p.Ac(t.version))},directives:[i.l,i.j,a.p,a.g,a.h,a.k,a.a,a.f,a.i,c.d],pipes:[i.e,h.a],encapsulation:2}),A)}],F=((x=function e(){_classCallCheck(this,e)}).\u0275mod=p.Jb({type:x}),x.\u0275inj=p.Ib({factory:function(e){return new(e||x)},imports:[[c.e.forChild(W)],c.e]}),x);n.d(t,"SettingsModule",(function(){return _}));var B,_=((B=function e(){_classCallCheck(this,e)}).\u0275mod=p.Jb({type:B}),B.\u0275inj=p.Ib({factory:function(e){return new(e||B)},imports:[[i.c,F,a.b,s.a]]}),B)},kiQV:function(e){e.exports=JSON.parse('{"name":"jsmusicdb-next","version":"2.25.2","license":"MIT","scripts":{"ng":"ng","start":"npm run --silent sass:dark && ng serve --aot","dev":"npm run --silent start","sass":"node-sass","sass:dark":"node-sass --output-style compressed --omit-source-map-url ./src/sass/dark.scss > ./src/global/css/dark.css","build":"npm run --silent sass:dark && ng build --prod --i18n-locale=\\"en-GB\\"","report":"webpack-bundle-analyzer dist/stats-es2015.json","bundle-report":"ng build --prod --i18n-locale=\\"en-GB\\" --stats-json && npm run --silent report","lint":"tslint --fix --force -p .","postversion":"npm run --silent build && npm publish && git push && git push --tags"},"files":["dist"],"author":"Lucien Immink","description":"Web version of musicdb next","repository":{"type":"git","url":"git+https://github.com/lucienimmink/JSMusicDBNext"},"dependencies":{"@angular/animations":"^9.0.5","@angular/common":"^9.0.5","@angular/compiler":"^9.0.5","@angular/core":"^9.0.5","@angular/forms":"^9.0.5","@angular/localize":"^9.0.5","@angular/platform-browser":"^9.0.5","@angular/platform-browser-dynamic":"^9.0.5","@angular/router":"^9.0.5","@thebespokepixel/es-tinycolor":"^1.0.7","album-art-component":"^1.3.2","bootstrap":"^4.4.1","core-js":"^3.6.4","diacritics-normalizr":"^1.0.2","fast-average-color":"^5.2.1","fuse.js":"^3.4.6","hammerjs":"^2.0.8","idb-keyval":"^3.2.0","ngx-bootstrap":"^5.5.0","node-sass":"^4.13.1","rxjs":"^6.5.4","tslib":"^1.11.0","winstrap":"^0.5.12","zone.js":"~0.10.2"},"devDependencies":{"@angular-builders/custom-webpack":"^8.4.1","@angular-devkit/build-angular":"^0.900.5","@angular/cli":"9.0.1","@angular/compiler-cli":"^9.0.5","@angular/language-service":"^9.0.5","@types/node":"^12.12.29","copy-webpack-plugin":"^5.0.5","glob-all":"^3.1.0","node":"^12.16.1","purgecss-webpack-plugin":"^1.6.0","ts-node":"^8.6.2","tslint":"^5.20.1","tslint-config-prettier":"^1.18.0","typescript":"~3.7.5","webpack-bundle-analyzer":"^3.6.0"},"engines":{"npm":">= 6"}}')}}]);