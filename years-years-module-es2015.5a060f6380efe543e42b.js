(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ZutQ:function(t,s,i){"use strict";i.r(s),i.d(s,"YearsModule",(function(){return d}));var e=i("ofXK"),r=i("hDf6"),n=i("tyNb"),c=i("ktVm"),o=i("XtVx"),a=i("fXoL"),b=i("Vmu9"),l=i("UrAU");function u(t,s){if(1&t){const t=a.Ob();a.Nb(0,"li",8),a.Vb("click",(function(){a.oc(t);const i=s.$implicit;return a.Zb(3).navigateToAlbum(i)})),a.Nb(1,"div",11),a.Lb(2,"mdb-album",12),a.Mb(),a.Nb(3,"div",13),a.Nb(4,"span",14),a.sc(5),a.Mb(),a.Nb(6,"span",9),a.sc(7),a.Mb(),a.Mb(),a.Mb()}if(2&t){const t=s.$implicit;a.zb(2),a.fc("album",t),a.zb(3),a.tc(t.name),a.zb(2),a.tc(t.artist.albumArtist||t.artist.name)}}function m(t,s){if(1&t){const t=a.Ob();a.Nb(0,"div",6),a.Nb(1,"div",7),a.Nb(2,"h4"),a.Nb(3,"a",8),a.Vb("click",(function(){return a.oc(t),a.Zb(2).toggleJumpList()})),a.sc(4),a.Mb(),a.sc(5," \xa0 "),a.Nb(6,"span",9),a.sc(7),a.Mb(),a.Mb(),a.Nb(8,"ul"),a.rc(9,u,8,3,"li",10),a.Mb(),a.Mb(),a.Mb()}if(2&t){const t=s.$implicit;a.zb(4),a.tc(t.year),a.zb(3),a.uc("(",t.albums&&t.albums.length,")"),a.zb(2),a.fc("ngForOf",t.albums)}}function p(t,s){if(1&t&&(a.Nb(0,"div"),a.rc(1,m,10,3,"div",5),a.Mb()),2&t){const t=s.vsCollection;a.zb(1),a.fc("ngForOf",t)}}function h(t,s){if(1&t){const t=a.Ob();a.Nb(0,"li"),a.Nb(1,"a",8),a.Vb("click",(function(){a.oc(t);const i=s.$implicit;return a.Zb().jumpToLetter(i)})),a.sc(2),a.Mb(),a.Mb()}if(2&t){const t=s.$implicit;a.zb(2),a.tc(t)}}const f=function(t){return{visible:t}},g=[{path:"",component:(()=>{class t{constructor(t,s,i){this.coreService=t,this.pathService=s,this.router=i,this.items=[],this.years=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()})}ngOnInit(){this.pathService.announcePage("Years");const t=Object.keys(this.core.years).sort((t,s)=>parseInt(t,10)<parseInt(s,10)?1:-1),s=[];t.forEach(t=>{"undefined"!==t&&(s.push(this.core.years[t]),this.years.push(t))}),this.items=s,this.items.forEach((t,s)=>{const i=this.getSize(t,s);this.cummlativeLength[s]=s>0?{l:this.cummlativeLength[s-1].l+i,year:t.year.year}:{l:i,year:t.year.year}})}ngOnDestroy(){this.subscription.unsubscribe()}navigateToAlbum(t){this.router.navigate(["/letter",t.artist.letter.escapedLetter,"artist",t.artist.sortName,"album",t.sortName])}getSize(t,s){return 90*t.albums.length+39}toggleJumpList(){this.showJumpList=!this.showJumpList}jumpToLetter(t){this.showJumpList=!1,this.items.some((s,i)=>{let e=!1;if(s.year===parseInt(t,10)){const t=i>0?i-1:0;0===t?window.scrollTo(0,0):window.scrollTo(0,this.cummlativeLength[t].l),e=!0}return e})}}return t.\u0275fac=function(s){return new(s||t)(a.Kb(c.a),a.Kb(o.a),a.Kb(n.c))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-years"]],decls:6,vars:8,consts:[[1,"animated-page"],["imageLazyLoadArea","",1,"container","container-longlist"],[4,"vsFor","vsForSize","vsForScrollParent","vsForExcess"],[1,"jump-list","jump-list-years",3,"ngClass"],[4,"ngFor","ngForOf"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[3,"click"],[1,"small","muted","color-type-secondary"],[3,"click",4,"ngFor","ngForOf"],[1,"image-wrapper"],[3,"album"],[1,"text-wrapper"],[1,"text"]],template:function(t,s){1&t&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.rc(2,p,2,1,"div",2),a.Mb(),a.Nb(3,"div",3),a.Nb(4,"ol"),a.rc(5,h,3,1,"li",4),a.Mb(),a.Mb(),a.Mb()),2&t&&(a.zb(2),a.fc("vsFor",s.items)("vsForSize",s.getSize)("vsForScrollParent","body")("vsForExcess",2),a.zb(1),a.fc("ngClass",a.ic(6,f,s.showJumpList)),a.zb(2),a.fc("ngForOf",s.years))},directives:[b.a,e.i,e.j,l.a],encapsulation:2}),t})()}];let v=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(s){return new(s||t)},imports:[[n.e.forChild(g)],n.e]}),t})(),d=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(s){return new(s||t)},imports:[[e.b,v,r.a]]}),t})()}}]);