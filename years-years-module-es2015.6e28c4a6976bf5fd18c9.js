(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ZutQ:function(t,i,e){"use strict";e.r(i),e.d(i,"YearsModule",(function(){return v}));var s=e("ofXK"),r=e("hDf6"),c=e("tyNb"),n=e("ktVm"),o=e("XtVx"),a=e("fXoL"),b=e("Vmu9"),l=e("UrAU");function u(t,i){if(1&t){const t=a.Mb();a.Lb(0,"li",8),a.Sb("click",(function(){a.lc(t);const e=i.$implicit;return a.Wb(3).navigateToAlbum(e)})),a.Lb(1,"div",11),a.Jb(2,"mdb-album",12),a.Kb(),a.Lb(3,"div",13),a.Lb(4,"span",14),a.pc(5),a.Kb(),a.Lb(6,"span",9),a.pc(7),a.Kb(),a.Kb(),a.Kb()}if(2&t){const t=i.$implicit;a.xb(2),a.cc("album",t),a.xb(3),a.qc(t.name),a.xb(2),a.qc(t.artist.albumArtist||t.artist.name)}}function m(t,i){if(1&t){const t=a.Mb();a.Lb(0,"div",6),a.Lb(1,"div",7),a.Lb(2,"h4"),a.Lb(3,"a",8),a.Sb("click",(function(){return a.lc(t),a.Wb(2).toggleJumpList()})),a.pc(4),a.Kb(),a.pc(5," \xa0 "),a.Lb(6,"span",9),a.pc(7),a.Kb(),a.Kb(),a.Lb(8,"ul"),a.oc(9,u,8,3,"li",10),a.Kb(),a.Kb(),a.Kb()}if(2&t){const t=i.$implicit;a.xb(4),a.qc(t.year),a.xb(3),a.rc("(",t.albums&&t.albums.length,")"),a.xb(2),a.cc("ngForOf",t.albums)}}function p(t,i){if(1&t&&(a.Lb(0,"div"),a.oc(1,m,10,3,"div",5),a.Kb()),2&t){const t=i.vsCollection;a.xb(1),a.cc("ngForOf",t)}}function h(t,i){if(1&t){const t=a.Mb();a.Lb(0,"li"),a.Lb(1,"a",8),a.Sb("click",(function(){a.lc(t);const e=i.$implicit;return a.Wb().jumpToLetter(e)})),a.pc(2),a.Kb(),a.Kb()}if(2&t){const t=i.$implicit;a.xb(2),a.qc(t)}}const f=function(t){return{visible:t}},g=[{path:"",component:(()=>{class t{constructor(t,i,e){this.coreService=t,this.pathService=i,this.router=e,this.items=[],this.years=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()})}ngOnInit(){this.pathService.announcePage("Years");const t=Object.keys(this.core.years).sort((t,i)=>parseInt(t,10)<parseInt(i,10)?1:-1),i=[];t.forEach(t=>{"undefined"!==t&&(i.push(this.core.years[t]),this.years.push(t))}),this.items=i,this.items.forEach((t,i)=>{const e=this.getSize(t,i);this.cummlativeLength[i]=i>0?{l:this.cummlativeLength[i-1].l+e,year:t.year.year}:{l:e,year:t.year.year}})}ngOnDestroy(){this.subscription.unsubscribe()}navigateToAlbum(t){this.router.navigate(["/letter",t.artist.letter.escapedLetter,"artist",t.artist.sortName,"album",t.sortName])}getSize(t,i){return 90*t.albums.length+39}toggleJumpList(){this.showJumpList=!this.showJumpList}jumpToLetter(t){this.showJumpList=!1,this.items.some((i,e)=>{let s=!1;if(i.year===parseInt(t,10)){const t=e>0?e-1:0;0===t?window.scrollTo(0,0):window.scrollTo(0,this.cummlativeLength[t].l),s=!0}return s})}}return t.\u0275fac=function(i){return new(i||t)(a.Ib(n.a),a.Ib(o.a),a.Ib(c.c))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-years"]],decls:6,vars:8,consts:[[1,"animated-page"],["imageLazyLoadArea","",1,"container","container-longlist"],[4,"vsFor","vsForSize","vsForScrollParent","vsForExcess"],[1,"jump-list","jump-list-years",3,"ngClass"],[4,"ngFor","ngForOf"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[3,"click"],[1,"small","muted","color-type-secondary"],[3,"click",4,"ngFor","ngForOf"],[1,"image-wrapper"],[3,"album"],[1,"text-wrapper"],[1,"text"]],template:function(t,i){1&t&&(a.Lb(0,"div",0),a.Lb(1,"div",1),a.oc(2,p,2,1,"div",2),a.Kb(),a.Lb(3,"div",3),a.Lb(4,"ol"),a.oc(5,h,3,1,"li",4),a.Kb(),a.Kb(),a.Kb()),2&t&&(a.xb(2),a.cc("vsFor",i.items)("vsForSize",i.getSize)("vsForScrollParent","body")("vsForExcess",2),a.xb(1),a.cc("ngClass",a.fc(6,f,i.showJumpList)),a.xb(2),a.cc("ngForOf",i.years))},directives:[b.a,s.i,s.j,l.a],encapsulation:2}),t})()}];let L=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(i){return new(i||t)},imports:[[c.e.forChild(g)],c.e]}),t})(),v=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(i){return new(i||t)},imports:[[s.b,L,r.a]]}),t})()}}]);