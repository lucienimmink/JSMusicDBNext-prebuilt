(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{fX0g:function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),r=i("tyNb"),c=i("ktVm"),n=i("XtVx"),o=i("fXoL"),b=i("Vmu9"),l=i("UrAU");function a(t,e){if(1&t&&(o.Nb(0,"span",9),o.sc(1),o.Mb()),2&t){const t=o.Zb().$implicit;o.zb(1),o.uc("Year: ",t.year,"")}}function u(t,e){if(1&t){const t=o.Ob();o.Nb(0,"li",8),o.Vb("click",(function(){o.oc(t);const i=e.$implicit;return o.Zb(3).navigateToAlbum(i)})),o.Nb(1,"div",11),o.Lb(2,"mdb-album",12),o.Mb(),o.Nb(3,"div",13),o.Nb(4,"span",14),o.sc(5),o.Mb(),o.rc(6,a,2,1,"span",15),o.Mb(),o.Mb()}if(2&t){const t=e.$implicit;o.zb(2),o.fc("album",t),o.zb(3),o.tc(t.name),o.zb(1),o.fc("ngIf",t.year)}}function m(t,e){if(1&t){const t=o.Ob();o.Nb(0,"div",6),o.Nb(1,"div",7),o.Nb(2,"h4"),o.Nb(3,"a",8),o.Vb("click",(function(){return o.oc(t),o.Zb(2).toggleJumpList()})),o.sc(4),o.Mb(),o.sc(5," \xa0 "),o.Nb(6,"span",9),o.sc(7),o.Mb(),o.Mb(),o.Nb(8,"ul"),o.rc(9,u,7,3,"li",10),o.Mb(),o.Mb(),o.Mb()}if(2&t){const t=e.$implicit;o.zb(4),o.tc(t.albumArtist||t.name),o.zb(3),o.uc("(",t.albums&&t.albums.length,")"),o.zb(2),o.fc("ngForOf",t.albums)}}function h(t,e){if(1&t&&(o.Nb(0,"div"),o.rc(1,m,10,3,"div",5),o.Mb()),2&t){const t=e.vsCollection;o.zb(1),o.fc("ngForOf",t)}}function f(t,e){if(1&t){const t=o.Ob();o.Nb(0,"li"),o.Nb(1,"a",8),o.Vb("click",(function(){o.oc(t);const i=e.$implicit;return o.Zb().jumpToLetter(i)})),o.sc(2),o.Mb(),o.Mb()}if(2&t){const t=e.$implicit;o.zb(2),o.tc(t.letter)}}const p=function(t){return{visible:t}},g=[{path:"",component:(()=>{class t{constructor(t,e,i){this.coreService=t,this.pathService=e,this.router=i,this.items=[],this.letters=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()})}ngOnInit(){(new Date).getTime(),this.pathService.announcePage("Albums");const t=this.core.artists;this.letters=this.core.sortedLetters;const e=Object.keys(t).sort((t,e)=>t<e?-1:1),i=[];e.forEach(t=>{i.push(this.core.artists[t])}),this.items=i,this.items.forEach((t,e)=>{const i=this.getSize(t,e);this.cummlativeLength[e]=e>0?{l:this.cummlativeLength[e-1].l+i,letter:t.letter.letter}:{l:i,letter:t.letter.letter}})}ngOnDestroy(){this.subscription.unsubscribe()}navigateToAlbum(t){this.router.navigate(["/letter",t.artist.letter.escapedLetter,"artist",t.artist.sortName,"album",t.sortName])}getSize(t,e){return 90*t.albums.length+49}toggleJumpList(){this.showJumpList=!this.showJumpList}jumpToLetter(t){this.showJumpList=!1,this.items.some((e,i)=>{let s=!1;return e.letter.letter===t.letter&&(window.scrollTo(0,this.cummlativeLength[i>0?i-1:0].l),s=!0),s})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(c.a),o.Kb(n.a),o.Kb(r.c))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-albums-list"]],decls:6,vars:8,consts:[[1,"animated-page"],["imageLazyLoadArea","",1,"container","container-longlist"],[4,"vsFor","vsForSize","vsForScrollParent","vsForExcess"],[1,"jump-list",3,"ngClass"],[4,"ngFor","ngForOf"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[3,"click"],[1,"small","muted"],[3,"click",4,"ngFor","ngForOf"],[1,"image-wrapper"],[3,"album"],[1,"text-wrapper"],[1,"text"],["class","small muted",4,"ngIf"]],template:function(t,e){1&t&&(o.Nb(0,"div",0),o.Nb(1,"div",1),o.rc(2,h,2,1,"div",2),o.Mb(),o.Nb(3,"div",3),o.Nb(4,"ol"),o.rc(5,f,3,1,"li",4),o.Mb(),o.Mb(),o.Mb()),2&t&&(o.zb(2),o.fc("vsFor",e.items)("vsForSize",e.getSize)("vsForScrollParent","body")("vsForExcess",2),o.zb(1),o.fc("ngClass",o.ic(6,p,e.showJumpList)),o.zb(2),o.fc("ngForOf",e.letters))},directives:[b.a,s.i,s.j,l.a,s.k],encapsulation:2}),t})()}];let v=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[r.e.forChild(g)],r.e]}),t})();var d=i("hDf6");i.d(e,"AlbumsModule",(function(){return w}));let w=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[s.b,v,d.a]]}),t})()}}]);