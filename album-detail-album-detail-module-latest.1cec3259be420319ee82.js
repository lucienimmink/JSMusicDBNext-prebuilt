(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{jJnS:function(t,s,i){"use strict";i.r(s);var c=i("ofXK"),n=i("fXoL"),a=i("hDf6"),e=i("tyNb"),o=(i("hR/0"),i("KI15")),l=i("ufXC"),r=i("OgP6"),b=i("ktVm"),u=i("XtVx"),m=i("cpgm");const p=["class","animated-page",4,"ngIf"],h=[1,"animated-page"],g=[1,"jumbotron","theme-light",3,"ngClass"],d=[1,"container"],f=[1,"row","albumdetail"],y=[1,"col-4","col-md-3","col-lg-2",3,"ngClass"],T=[3,"album","artist"],A=[1,"col-8","col-md-9","col-lg-10",3,"ngClass"],S=[1,"d-none","d-sm-block"],V=[4,"ngIf"],w=[1,"d-none","d-sm-inline"],v=[1,"btn","btn-primary",3,"click"],k=[1,"glyph","glyph-play"],I=[1,"d-none","d-md-inline"],J=[1,"btn","btn-secondary",3,"click"],C=[1,"glyph","glyph-music-info"],P=[1,"row"],D=[1,"col"],O=["class","list-group list-tracks",4,"ngFor","ngForOf"];function L(t,s){if(1&t&&(n.Vb(0,"span"),n.Jc(1),n.Tb()),2&t){const t=n.gc(2);n.Ac(1),n.Lc("",t.album.year," \u2022 ")}}const F=[1,"list-group","list-tracks"],R=["class","list-items-row disc-row header-seperator",3,"ngClass",4,"ngIf"],H=["class","list-group-item",3,"ngClass",4,"ngFor","ngForOf"],N=[1,"list-items-row","disc-row","header-seperator",3,"ngClass"],$=function(t){return{"first-disc":t}};function x(t,s){if(1&t&&(n.Vb(0,"li",N),n.Jc(1),n.Tb()),2&t){const t=n.gc().$implicit;n.mc("ngClass",n.pc(2,$,1==t[0].disc)),n.Ac(1),n.Lc(" Disc ",t[0].disc," ")}}const j=[1,"list-group-item",3,"ngClass"],K=[1,"details","row",3,"click"],E=[1,"col-2","col-sm-1"],M=[1,"col-7","col-sm-10"],U=[1,"small","muted","color-type-secondary"],X=[1,"col-3","col-sm-1","text-right"];function q(t,s){if(1&t&&(n.Vb(0,"span"),n.Jc(1),n.Tb()),2&t){const t=n.gc().$implicit;n.Ac(1),n.Kc(t.number)}}const B=[1,"glyph","glyph-pause"];function Q(t,s){1&t&&(n.Vb(0,"span"),n.Sb(1,"span",B),n.Tb())}function W(t,s){1&t&&(n.Vb(0,"span"),n.Sb(1,"span",k),n.Tb())}function G(t,s){if(1&t&&(n.Vb(0,"span"),n.Sb(1,"br"),n.Vb(2,"span",U),n.Jc(3),n.Tb(),n.Tb()),2&t){const t=n.gc().$implicit;n.Ac(3),n.Kc(t.type)}}function Y(t,s){if(1&t&&(n.Vb(0,"span"),n.Sb(1,"br"),n.Vb(2,"span",U),n.Jc(3),n.hc(4,"timeFormat"),n.Tb(),n.Tb()),2&t){const t=n.gc().$implicit;n.Ac(3),n.Lc(" ",n.ic(4,1,t.position)," \xa0 ")}}const z=function(t,s,i){return{active:t,showActions:s,hq:i}};function Z(t,s){if(1&t){const t=n.Wb();n.Vb(0,"li",j),n.Vb(1,"div",K),n.bc("click",function(i){n.xc(t);const c=s.$implicit;return n.gc(3).onSelect(c,i)}),n.Vb(2,"div",E),n.Hc(3,q,2,1,"span",V),n.Hc(4,Q,2,0,"span",V),n.Hc(5,W,2,0,"span",V),n.Tb(),n.Vb(6,"div",M),n.Jc(7),n.Sb(8,"br"),n.Vb(9,"span",U),n.Jc(10),n.Tb(),n.Tb(),n.Vb(11,"div",X),n.Jc(12),n.hc(13,"timeFormat"),n.Hc(14,G,4,1,"span",V),n.Hc(15,Y,5,3,"span",V),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=s.$implicit,i=n.gc(3);n.mc("ngClass",n.rc(11,z,t.isPlaying||t.isPaused,t.showActions,"flac"===t.type)),n.Ac(3),n.mc("ngIf",!t.isPlaying&&!t.isPaused&&0!==t.number),n.Ac(4),n.mc("ngIf",!t.isPlaying&&t.isPaused),n.Ac(5),n.mc("ngIf",t.isPlaying&&!t.isPaused),n.Ac(7),n.Lc(" ",t.title," "),n.Ac(10),n.Lc(" ",t.trackArtist," "),n.Ac(12),n.Lc(" ",n.ic(13,9,t.duration)," "),n.Ac(14),n.mc("ngIf","mixed"===i.album.type&&!t.isPlaying),n.Ac(15),n.mc("ngIf",t.isPlaying)}}function _(t,s){if(1&t&&(n.Vb(0,"ol",F),n.Hc(1,x,2,4,"li",R),n.Hc(2,Z,16,15,"li",H),n.Tb()),2&t){const t=s.$implicit,i=n.gc(2);n.Ac(1),n.mc("ngIf",i.album.sortedDiscs.length>1),n.Ac(2),n.mc("ngForOf",t)}}const tt=[1,"alert","alert-warning"];function st(t,s){1&t&&(n.Vb(0,"div"),n.Sb(1,"br"),n.Vb(2,"div",tt),n.Vb(3,"strong"),n.Jc(4,"Warning!"),n.Tb(),n.Jc(5," This album cannot be played since FLAC support is lacking."),n.Tb(),n.Tb())}const it=function(t){return{shrunk:t}};function ct(t,s){if(1&t){const t=n.Wb();n.Vb(0,"div",h),n.Vb(1,"div",g),n.Vb(2,"div",d),n.Vb(3,"div",f),n.Vb(4,"div",y),n.Sb(5,"album-art",T),n.Tb(),n.Vb(6,"div",A),n.Vb(7,"h2"),n.Jc(8),n.Tb(),n.Vb(9,"h3",S),n.Jc(10),n.Tb(),n.Vb(11,"h4"),n.Hc(12,L,2,1,"span",V),n.Jc(13),n.Vb(14,"span",w),n.Jc(15),n.hc(16,"timeFormat"),n.Tb(),n.Tb(),n.Vb(17,"h5"),n.Vb(18,"button",v),n.bc("click",function(s){return n.xc(t),n.gc().playAlbum()}),n.Sb(19,"span",k),n.Jc(20," Play "),n.Vb(21,"span",I),n.Jc(22,"album"),n.Tb(),n.Tb(),n.Jc(23,"\xa0\xa0\xa0 "),n.Vb(24,"button",J),n.bc("click",function(s){return n.xc(t),n.gc().addToQueue()}),n.Sb(25,"span",C),n.Jc(26," queue "),n.Vb(27,"span",I),n.Jc(28,"album"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Vb(29,"div",d),n.Vb(30,"div",P),n.Vb(31,"div",D),n.Hc(32,_,3,2,"ol",O),n.Hc(33,st,6,0,"div",V),n.Tb(),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=n.gc();n.Ac(1),n.mc("ngClass",n.pc(15,it,t.isShrunk)),n.Ac(4),n.mc("ngClass",n.pc(17,it,t.isShrunk)),n.Ac(5),n.mc("album",t.album.name)("artist",t.album.artist.albumArtist||t.album.artist.name),n.Ac(6),n.mc("ngClass",n.pc(19,it,t.isShrunk)),n.Ac(8),n.Kc(t.album.name),n.Ac(10),n.Lc(" ",t.album.artist.albumArtist||t.album.artist.name," "),n.Ac(12),n.mc("ngIf",t.album.year&&0!==t.album.year),n.Ac(13),n.Lc(" songs: ",t.album.tracks.length," "),n.Ac(15),n.Mc(" \u2022 ",n.ic(16,13,t.totalRunningTime())," \u2022 ",t.album.type,""),n.Ac(32),n.mc("ngForOf",t.album.sortedDiscs),n.Ac(33),n.mc("ngIf","flac"===t.album.type&&!t.isFlacSupported)}}const nt=[{path:"",component:(()=>{class t{constructor(t,s,i,c,n,a){this.coreService=t,this.router=s,this.pathService=i,this.playerService=c,this.route=n,this.configService=a,this.ownPlaylists=[],this.albumName="",this.artistName="",this.isSwiping=!1,this.isShrunk=!1,this.isFlacSupported=!0,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.artistName=decodeURIComponent(this.route.snapshot.params.artist),this.albumName=decodeURIComponent(this.route.snapshot.params.album),this.route.params.subscribe(t=>{this.artistName=decodeURIComponent(t.artist),this.albumName=decodeURIComponent(t.album),this.ngOnInit()}),this.theme=a.mode}ngOnInit(){if(this.album=this.core.albums[this.artistName+"|"+this.albumName],this.album){this.album.sortedDiscs=[];const t=Object.keys(this.album.discs);let s=[];t.forEach(t=>{const i=t.substring(5);s.push({nr:i,id:t})}),(s=s.sort((t,s)=>t.nr<s.nr?-1:1)).forEach(t=>{this.album.sortedDiscs.push(this.album.discs[t.id])}),this.pathService.announcePath({artist:this.album.artist,album:this.album,letter:this.album.artist.letter})}if(this.ownPlaylists=[],localStorage.getItem("customlisttest")){const t=JSON.parse(localStorage.getItem("customlisttest"));t&&t.forEach(t=>{const s=new o.a;s.isOwn=!0,s.name=t.name,s.tracks=t.tracks,this.ownPlaylists.push(s)})}const t=document.querySelector("audio").canPlayType("audio/flac");this.isFlacSupported="probably"===t||"maybe"===t}ngOnDestroy(){this.subscription.unsubscribe()}onSelect(t,s){this.isSwiping||this.playerService.doPlayAlbum(this.album,this.album.tracks.indexOf(t),!0,!1)}playAlbum(){this.isSwiping||this.playerService.doPlayAlbum(this.album,0,!0,!1)}addToQueue(){this.isSwiping||this.playerService.doQueueAlbum(this.album)}navigateToArtist(t){this.router.navigate(["Artist",{letter:t.letter.escapedLetter,artist:t.sortName}])}swipe(t,s,i){i.preventDefault(),this.isSwiping=!0,setTimeout(()=>{this.isSwiping=!1},5),t.showActions=s}totalRunningTime(){let t=0;return this.album.tracks.forEach(s=>{t+=s.duration}),t}onScroll(t){this.isShrunk=window.scrollY>50}}return t.ngComponentDef=n.Lb({type:t,selectors:[["app-album-detail"]],factory:function(s){return new(s||t)(n.Rb(b.a),n.Rb(e.c),n.Rb(u.a),n.Rb(l.a),n.Rb(e.a),n.Rb(r.a))},hostBindings:function(t,s,i){1&t&&n.bc("scroll",function(t){return s.onScroll(t)},!1,n.wc)},consts:1,vars:1,template:function(t,s){1&t&&n.Hc(0,ct,34,21,"div",p),2&t&&n.mc("ngIf",s.album)},directives:[c.l,c.j,c.k],pipes:[m.a],encapsulation:2}),t})()}];let at=(()=>{class t{}return t.ngModuleDef=n.Pb({type:t}),t.ngInjectorDef=n.Ob({factory:function(s){return new(s||t)},imports:[[e.e.forChild(nt)],e.e]}),t.ngLocaleIdDef="en-GB",t})();e.e.forChild(nt),i.d(s,"AlbumDetailModule",function(){return et});let et=(()=>{class t{}return t.ngModuleDef=n.Pb({type:t}),t.ngInjectorDef=n.Ob({factory:function(s){return new(s||t)},imports:[[c.c,at,a.a]]}),t.ngLocaleIdDef="en-GB",t})()}}]);