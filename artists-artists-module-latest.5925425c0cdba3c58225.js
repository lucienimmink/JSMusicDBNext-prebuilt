(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3r4j":function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),c=i("fXoL"),r=i("hDf6"),n=i("tyNb"),o=i("ktVm"),a=i("XtVx"),l=i("Vmu9"),b=i("EAnT");const u=[1,"animated-page"],m=["imageLazyLoadArea","",1,"container","container-longlist"],g=[4,"vsFor","vsForSize","vsForScrollParent","vsForExcess"],p=[1,"jump-list",3,"ngClass"],h=[4,"ngFor","ngForOf"],f=["class","row",4,"ngFor","ngForOf"],d=[1,"row"],v=[1,"col"],T=[3,"id","click"],L=[3,"click",4,"ngFor","ngForOf"],w=[3,"click"],A=[1,"image-wrapper"],V=[3,"artist"],F=[1,"text-wrapper"],y=[1,"text"],J=[1,"small","muted","color-type-secondary"];function O(t,e){if(1&t){const t=c.Wb();c.Vb(0,"li",w),c.bc("click",function(i){c.xc(t);const s=e.$implicit;return c.gc(3).navigateToArtist(s)}),c.Vb(1,"div",A),c.Sb(2,"mdb-artist",V),c.Tb(),c.Vb(3,"div",F),c.Vb(4,"span",y),c.Jc(5),c.Tb(),c.Vb(6,"span",J),c.Jc(7),c.Tb(),c.Tb(),c.Tb()}if(2&t){const t=e.$implicit;c.Ac(2),c.mc("artist",t),c.Ac(5),c.Kc(t.albumArtist||t.name),c.Ac(7),c.Lc("Albums: ",t.albums.length,"")}}function S(t,e){if(1&t){const t=c.Wb();c.Vb(0,"div",d),c.Vb(1,"div",v),c.Vb(2,"h4"),c.Vb(3,"a",T),c.bc("click",function(e){return c.xc(t),c.gc(2).toggleJumpList()}),c.Jc(4),c.Tb(),c.Tb(),c.Vb(5,"ul"),c.Hc(6,O,8,3,"li",L),c.Tb(),c.Tb(),c.Tb()}if(2&t){const t=e.$implicit;c.Ac(3),c.oc("id","letter_",t.letter,""),c.Ac(4),c.Kc(t.letter),c.Ac(6),c.mc("ngForOf",t.artists)}}function k(t,e){if(1&t&&(c.Vb(0,"div"),c.Hc(1,S,7,3,"div",f),c.Tb()),2&t){const t=e.vsCollection;c.Ac(1),c.mc("ngForOf",t)}}function x(t,e){if(1&t){const t=c.Wb();c.Vb(0,"li"),c.Vb(1,"a",w),c.bc("click",function(i){c.xc(t);const s=e.$implicit;return c.gc().jumpToLetter(s)}),c.Jc(2),c.Tb(),c.Tb()}if(2&t){const t=e.$implicit;c.Ac(2),c.Kc(t.letter)}}const D=function(t){return{visible:t}},j=[{path:"",component:(()=>{class t{constructor(t,e,i){this.coreService=t,this.pathService=e,this.router=i,this.letters=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()})}ngOnInit(){this.pathService.announcePage("Artists"),this.letters=this.core.sortedLetters,this.letters.forEach((t,e)=>{const i=this.getSize(t,e);this.cummlativeLength[e]=e>0?this.cummlativeLength[e-1]+i:i,t.sortArtistsBy("sortName","asc")})}ngOnDestroy(){this.subscription.unsubscribe()}navigateToArtist(t){this.router.navigate(["/letter",t.letter.escapedLetter,"artist",t.sortName])}getSize(t,e){return 90*t.artists.length+49}toggleJumpList(){this.showJumpList=!this.showJumpList}jumpToLetter(t){this.showJumpList=!1;const e=this.letters.indexOf(t);window.scrollTo(0,this.cummlativeLength[e>0?e-1:0])}}return t.ngComponentDef=c.Lb({type:t,selectors:[["app-artists"]],factory:function(e){return new(e||t)(c.Rb(o.a),c.Rb(a.a),c.Rb(n.c))},consts:6,vars:8,template:function(t,e){1&t&&(c.Vb(0,"div",u),c.Vb(1,"div",m),c.Hc(2,k,2,1,"div",g),c.Tb(),c.Vb(3,"div",p),c.Vb(4,"ol"),c.Hc(5,x,3,1,"li",h),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Ac(2),c.mc("vsFor",e.letters)("vsForSize",e.getSize)("vsForScrollParent","body")("vsForExcess",2),c.Ac(3),c.mc("ngClass",c.pc(6,D,e.showJumpList)),c.Ac(5),c.mc("ngForOf",e.letters))},directives:[l.a,s.j,s.k,b.a],encapsulation:2}),t})()}];let C=(()=>{class t{}return t.ngModuleDef=c.Pb({type:t}),t.ngInjectorDef=c.Ob({factory:function(e){return new(e||t)},imports:[[n.e.forChild(j)],n.e]}),t.ngLocaleIdDef="en-GB",t})();n.e.forChild(j),i.d(e,"ArtistsModule",function(){return z});let z=(()=>{class t{}return t.ngModuleDef=c.Pb({type:t}),t.ngInjectorDef=c.Ob({factory:function(e){return new(e||t)},imports:[[s.c,C,r.a]]}),t.ngLocaleIdDef="en-GB",t})()}}]);