(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{fX0g:function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),c=i("tyNb"),r=i("ktVm"),n=i("XtVx"),o=i("fXoL"),l=i("Vmu9"),a=i("UrAU");function b(t,e){if(1&t&&(o.Ob(0,"span",9),o.zc(1),o.Nb()),2&t){const t=o.ac().$implicit;o.zb(1),o.Bc("Year: ",t.year,"")}}function u(t,e){if(1&t){const t=o.Pb();o.Ob(0,"li",8),o.Wb("click",(function(){o.rc(t);const i=e.$implicit;return o.ac(3).navigateToAlbum(i)})),o.Ob(1,"div",11),o.Mb(2,"mdb-album",12),o.Nb(),o.Ob(3,"div",13),o.Ob(4,"span",14),o.zc(5),o.Nb(),o.xc(6,b,2,1,"span",15),o.Nb(),o.Nb()}if(2&t){const t=e.$implicit;o.zb(2),o.gc("album",t),o.zb(3),o.Ac(t.name),o.zb(1),o.gc("ngIf",t.year)}}function m(t,e){if(1&t){const t=o.Pb();o.Ob(0,"div",6),o.Ob(1,"div",7),o.Ob(2,"h4"),o.Ob(3,"a",8),o.Wb("click",(function(){return o.rc(t),o.ac(2).toggleJumpList()})),o.zc(4),o.Nb(),o.zc(5," \xa0 "),o.Ob(6,"span",9),o.zc(7),o.Nb(),o.Nb(),o.Ob(8,"ul"),o.xc(9,u,7,3,"li",10),o.Nb(),o.Nb(),o.Nb()}if(2&t){const t=e.$implicit;o.zb(4),o.Ac(t.albumArtist||t.name),o.zb(3),o.Bc("(",t.albums&&t.albums.length,")"),o.zb(2),o.gc("ngForOf",t.albums)}}function h(t,e){if(1&t&&(o.Ob(0,"div"),o.xc(1,m,10,3,"div",5),o.Nb()),2&t){const t=e.vsCollection;o.zb(1),o.gc("ngForOf",t)}}function p(t,e){if(1&t){const t=o.Pb();o.Ob(0,"li"),o.Ob(1,"a",8),o.Wb("click",(function(){o.rc(t);const i=e.$implicit;return o.ac().jumpToLetter(i)})),o.zc(2),o.Nb(),o.Nb()}if(2&t){const t=e.$implicit;o.zb(2),o.Ac(t.letter)}}const g=function(t){return{visible:t}},f=[{path:"",component:(()=>{class t{constructor(t,e,i){this.coreService=t,this.pathService=e,this.router=i,this.items=[],this.letters=[],this.showJumpList=!1,this.cummlativeLength=[],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()})}ngOnInit(){(new Date).getTime(),this.pathService.announcePage("Albums");const t=this.core.artists;this.letters=this.core.sortedLetters;const e=Object.keys(t).sort((t,e)=>t<e?-1:1),i=[];e.forEach(t=>{i.push(this.core.artists[t])}),this.items=i,this.items.forEach((t,e)=>{const i=this.getSize(t,e);this.cummlativeLength[e]=e>0?{l:this.cummlativeLength[e-1].l+i,letter:t.letter.letter}:{l:i,letter:t.letter.letter}})}ngOnDestroy(){this.subscription.unsubscribe()}navigateToAlbum(t){this.router.navigate(["/letter",t.artist.letter.escapedLetter,"artist",t.artist.sortName,"album",t.sortName])}getSize(t,e){return 90*t.albums.length+49}toggleJumpList(){this.showJumpList=!this.showJumpList}jumpToLetter(t){this.showJumpList=!1,this.items.some((e,i)=>{let s=!1;return e.letter.letter===t.letter&&(window.scrollTo(0,this.cummlativeLength[i>0?i-1:0].l),s=!0),s})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.a),o.Lb(n.a),o.Lb(c.c))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-albums-list"]],decls:6,vars:8,consts:[[1,"animated-page"],["imageLazyLoadArea","",1,"container","container-longlist"],[4,"vsFor","vsForSize","vsForScrollParent","vsForExcess"],[1,"jump-list",3,"ngClass"],[4,"ngFor","ngForOf"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[3,"click"],[1,"small","muted"],[3,"click",4,"ngFor","ngForOf"],[1,"image-wrapper"],[3,"album"],[1,"text-wrapper"],[1,"text"],["class","small muted",4,"ngIf"]],template:function(t,e){1&t&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.xc(2,h,2,1,"div",2),o.Nb(),o.Ob(3,"div",3),o.Ob(4,"ol"),o.xc(5,p,3,1,"li",4),o.Nb(),o.Nb(),o.Nb()),2&t&&(o.zb(2),o.gc("vsFor",e.items)("vsForSize",e.getSize)("vsForScrollParent","body")("vsForExcess",2),o.zb(1),o.gc("ngClass",o.jc(6,g,e.showJumpList)),o.zb(2),o.gc("ngForOf",e.letters))},directives:[l.a,s.j,s.k,a.a,s.l],encapsulation:2}),t})()}];let v=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[c.e.forChild(f)],c.e]}),t})();var d=i("hDf6");i.d(e,"AlbumsModule",(function(){return O}));let O=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[s.c,v,d.a]]}),t})()}}]);