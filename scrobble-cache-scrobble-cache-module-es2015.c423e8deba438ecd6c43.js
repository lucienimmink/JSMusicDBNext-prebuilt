(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{BSpc:function(t,c,i){"use strict";i.r(c),i.d(c,"ScrobbleCacheModule",(function(){return S}));var s=i("ofXK"),b=i("hDf6"),n=i("tyNb"),e=i("ztCj"),o=i("MDLy"),l=i("ktVm"),r=i("t083"),a=i("XtVx"),u=i("fXoL");function m(t,c){if(1&t){const t=u.Ob();u.Nb(0,"li",10),u.Nb(1,"div",2),u.Nb(2,"div",11),u.sc(3),u.Mb(),u.Nb(4,"div",12),u.Nb(5,"span",13),u.sc(6),u.Mb(),u.Mb(),u.Nb(7,"div",14),u.sc(8),u.Mb(),u.Nb(9,"div",15),u.Nb(10,"span",13),u.sc(11),u.ac(12,"date"),u.ac(13,"date"),u.Mb(),u.Mb(),u.Nb(14,"div",16),u.Nb(15,"a",17),u.Vb("click",(function(){u.oc(t);const i=c.$implicit;return u.Zb(2).removeFromScrobbleList(i)})),u.Mb(),u.Mb(),u.Mb(),u.Mb()}if(2&t){const t=c.$implicit;u.zb(3),u.uc(" ",t.artist," "),u.zb(3),u.tc(t.album),u.zb(2),u.uc(" ",t.track," "),u.zb(3),u.vc("",u.cc(12,5,1e3*t.timestamp,"mediumDate")," ",u.cc(13,8,1e3*t.timestamp,"shortTime"),"")}}function h(t,c){if(1&t){const t=u.Ob();u.Nb(0,"button",18),u.Vb("click",(function(){return u.oc(t),u.Zb(2).scrobbleNow()})),u.sc(1,"Scrobble now"),u.Mb()}}function p(t,c){if(1&t){const t=u.Ob();u.Nb(0,"div",4),u.Nb(1,"h4"),u.sc(2," Tracks in scrobble cache "),u.Nb(3,"span",5),u.sc(4),u.Mb(),u.Nb(5,"a",6),u.Vb("click",(function(){return u.oc(t),u.Zb().scrobbleNow()})),u.sc(6,"Scrobble now"),u.Mb(),u.Mb(),u.Nb(7,"ol",7),u.rc(8,m,16,11,"li",8),u.Mb(),u.rc(9,h,2,0,"button",9),u.Mb()}if(2&t){const t=u.Zb();u.zb(4),u.uc("(",t.manualScrobblingList.length,")"),u.zb(4),u.fc("ngForOf",t.manualScrobblingList),u.zb(1),u.fc("ngIf",t.manualScrobblingList.length>0&&!t.isBusy)}}const g=[{path:"",component:(()=>{class t{constructor(t,c,i,s,b){this.pathService=t,this.coreService=c,this.lastFMService=i,this.collectionService=s,this.router=b,this.manualScrobbling=this.booleanState("manual-scrobble-state"),this.isReloading=!1,this.isBusy=!1,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.subscription2=this.lastFMService.manualScrobbleList$.subscribe(t=>{this.manualScrobblingList=t}),Object(e.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]})}ngOnInit(){this.pathService.announcePage("Scrobble cache"),Object(e.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[]})}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2.unsubscribe()}scrobbleNow(){this.isBusy=!0,Object(e.c)("manual-scrobble-list").then(t=>{this.manualScrobblingList=t||[];const c=this.manualScrobblingList.pop();this.lastFMService.scrobbleCachedTrack(c).subscribe(t=>{Object(e.d)("manual-scrobble-list",this.manualScrobblingList),this.lastFMService.updateManualScrobbleList(),this.manualScrobblingList.length>0?this.scrobbleNow():this.isBusy=!1})})}removeFromScrobbleList(t){Object(e.c)("manual-scrobble-list").then(c=>{this.manualScrobblingList=c||[];let i=-1;this.manualScrobblingList.forEach((c,s)=>{Object.is(c,t)&&(i=s)}),this.manualScrobblingList.splice(i,1),Object(e.d)("manual-scrobble-list",this.manualScrobblingList)})}booleanState(t){const c=localStorage.getItem(t);return!(!c||"true"!==c)}}return t.\u0275fac=function(c){return new(c||t)(u.Kb(a.a),u.Kb(l.a),u.Kb(r.a),u.Kb(o.a),u.Kb(n.c))},t.\u0275cmp=u.Eb({type:t,selectors:[["app-scrobble-cache"]],decls:4,vars:1,consts:[[1,"animated-page"],[1,"container"],[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"small","muted","color-type-secondary"],[1,"float-right","d-none","d-sm-inline",3,"click"],[1,"list-items","list-tracks"],["class","list-items-row list-tracks-no-hover",4,"ngFor","ngForOf"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"list-items-row","list-tracks-no-hover"],[1,"col-4","col-sm-3"],[1,"col-4","col-sm-3","d-none","d-sm-block"],[1,"small","muted"],[1,"col-8","col-sm-3"],[1,"col-6","col-sm-2"],[1,"col-6","col-sm-1","text-right"],[1,"glyph","glyph-delete",3,"click"],[1,"btn","btn-primary",3,"click"]],template:function(t,c){1&t&&(u.Nb(0,"div",0),u.Nb(1,"div",1),u.Nb(2,"div",2),u.rc(3,p,10,3,"div",3),u.Mb(),u.Mb(),u.Mb()),2&t&&(u.zb(3),u.fc("ngIf",c.manualScrobblingList&&c.manualScrobbling))},directives:[s.k,s.j],pipes:[s.d],encapsulation:2}),t})()}];let d=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(c){return new(c||t)},imports:[[n.e.forChild(g)],n.e]}),t})(),S=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(c){return new(c||t)},imports:[[s.b,d,b.a]]}),t})()}}]);