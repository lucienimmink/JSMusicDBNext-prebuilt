(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{jJnS:function(t,i,s){"use strict";s.r(i),s.d(i,"AlbumDetailModule",(function(){return A}));var n=s("ofXK"),c=s("hDf6"),a=s("tyNb"),e=(s("hR/0"),s("KI15")),b=s("ufXC"),o=s("OgP6"),r=s("ktVm"),l=s("XtVx"),u=s("fXoL"),p=s("cpgm");function m(t,i){if(1&t&&(u.Lb(0,"span"),u.pc(1),u.Kb()),2&t){const t=u.Wb(2);u.xb(1),u.rc("",t.album.year," \u2022 ")}}const h=function(t){return{"first-disc":t}};function d(t,i){if(1&t&&(u.Lb(0,"li",22),u.pc(1),u.Kb()),2&t){const t=u.Wb().$implicit;u.cc("ngClass",u.fc(2,h,1==t[0].disc)),u.xb(1),u.rc(" Disc ",t[0].disc," ")}}function g(t,i){if(1&t&&(u.Lb(0,"span"),u.pc(1),u.Kb()),2&t){const t=u.Wb().$implicit;u.xb(1),u.qc(t.number)}}function f(t,i){1&t&&(u.Lb(0,"span"),u.Jb(1,"span",29),u.Kb())}function y(t,i){1&t&&(u.Lb(0,"span"),u.Jb(1,"span",12),u.Kb())}function L(t,i){if(1&t&&(u.Lb(0,"span"),u.Jb(1,"br"),u.Lb(2,"span",27),u.pc(3),u.Kb(),u.Kb()),2&t){const t=u.Wb().$implicit;u.xb(3),u.qc(t.type)}}function K(t,i){if(1&t&&(u.Lb(0,"span"),u.Jb(1,"br"),u.Lb(2,"span",27),u.pc(3),u.Xb(4,"timeFormat"),u.Kb(),u.Kb()),2&t){const t=u.Wb().$implicit;u.xb(3),u.rc(" ",u.Yb(4,1,t.position)," \xa0 ")}}const S=function(t,i,s){return{active:t,showActions:i,hq:s}};function w(t,i){if(1&t){const t=u.Mb();u.Lb(0,"li",23),u.Lb(1,"div",24),u.Sb("click",(function(s){u.lc(t);const n=i.$implicit;return u.Wb(3).onSelect(n,s)})),u.Lb(2,"div",25),u.oc(3,g,2,1,"span",9),u.oc(4,f,2,0,"span",9),u.oc(5,y,2,0,"span",9),u.Kb(),u.Lb(6,"div",26),u.pc(7),u.Jb(8,"br"),u.Lb(9,"span",27),u.pc(10),u.Kb(),u.Kb(),u.Lb(11,"div",28),u.pc(12),u.Xb(13,"timeFormat"),u.oc(14,L,4,1,"span",9),u.oc(15,K,5,3,"span",9),u.Kb(),u.Kb(),u.Kb()}if(2&t){const t=i.$implicit,s=u.Wb(3);u.cc("ngClass",u.hc(11,S,t.isPlaying||t.isPaused,t.showActions,"flac"===t.type)),u.xb(3),u.cc("ngIf",!t.isPlaying&&!t.isPaused&&0!==t.number),u.xb(1),u.cc("ngIf",!t.isPlaying&&t.isPaused),u.xb(1),u.cc("ngIf",t.isPlaying&&!t.isPaused),u.xb(2),u.rc(" ",t.title," "),u.xb(3),u.rc(" ",t.trackArtist," "),u.xb(2),u.rc(" ",u.Yb(13,9,t.duration)," "),u.xb(2),u.cc("ngIf","mixed"===s.album.type&&!t.isPlaying),u.xb(1),u.cc("ngIf",t.isPlaying)}}function v(t,i){if(1&t&&(u.Lb(0,"ol",19),u.oc(1,d,2,4,"li",20),u.oc(2,w,16,15,"li",21),u.Kb()),2&t){const t=i.$implicit,s=u.Wb(2);u.xb(1),u.cc("ngIf",s.album.sortedDiscs.length>1),u.xb(1),u.cc("ngForOf",t)}}function x(t,i){1&t&&(u.Lb(0,"div"),u.Jb(1,"br"),u.Lb(2,"div",30),u.Lb(3,"strong"),u.pc(4,"Warning!"),u.Kb(),u.pc(5," This album cannot be played since FLAC support is lacking."),u.Kb(),u.Kb())}const k=function(t){return{shrunk:t}};function I(t,i){if(1&t){const t=u.Mb();u.Lb(0,"div",1),u.Lb(1,"div",2),u.Lb(2,"div",3),u.Lb(3,"div",4),u.Lb(4,"div",5),u.Jb(5,"album-art",6),u.Kb(),u.Lb(6,"div",7),u.Lb(7,"h2"),u.pc(8),u.Kb(),u.Lb(9,"h3",8),u.pc(10),u.Kb(),u.Lb(11,"h4"),u.oc(12,m,2,1,"span",9),u.pc(13),u.Lb(14,"span",10),u.pc(15),u.Xb(16,"timeFormat"),u.Kb(),u.Kb(),u.Lb(17,"h5"),u.Lb(18,"button",11),u.Sb("click",(function(){return u.lc(t),u.Wb().playAlbum()})),u.Jb(19,"span",12),u.pc(20," Play "),u.Lb(21,"span",13),u.pc(22,"album"),u.Kb(),u.Kb(),u.pc(23,"\xa0\xa0\xa0 "),u.Lb(24,"button",14),u.Sb("click",(function(){return u.lc(t),u.Wb().addToQueue()})),u.Jb(25,"span",15),u.pc(26," queue "),u.Lb(27,"span",13),u.pc(28,"album"),u.Kb(),u.Kb(),u.Kb(),u.Kb(),u.Kb(),u.Kb(),u.Kb(),u.Lb(29,"div",3),u.Lb(30,"div",16),u.Lb(31,"div",17),u.oc(32,v,3,2,"ol",18),u.oc(33,x,6,0,"div",9),u.Kb(),u.Kb(),u.Kb(),u.Kb()}if(2&t){const t=u.Wb();u.xb(1),u.cc("ngClass",u.fc(15,k,t.isShrunk)),u.xb(3),u.cc("ngClass",u.fc(17,k,t.isShrunk)),u.xb(1),u.cc("album",t.album.name)("artist",t.album.artist.albumArtist||t.album.artist.name),u.xb(1),u.cc("ngClass",u.fc(19,k,t.isShrunk)),u.xb(2),u.qc(t.album.name),u.xb(2),u.rc(" ",t.album.artist.albumArtist||t.album.artist.name," "),u.xb(2),u.cc("ngIf",t.album.year&&0!==t.album.year),u.xb(1),u.rc(" songs: ",t.album.tracks.length," "),u.xb(2),u.sc(" \u2022 ",u.Yb(16,13,t.totalRunningTime())," \u2022 ",t.album.type,""),u.xb(17),u.cc("ngForOf",t.album.sortedDiscs),u.xb(1),u.cc("ngIf","flac"===t.album.type&&!t.isFlacSupported)}}const C=[{path:"",component:(()=>{class t{constructor(t,i,s,n,c,a){this.coreService=t,this.router=i,this.pathService=s,this.playerService=n,this.route=c,this.configService=a,this.ownPlaylists=[],this.albumName="",this.artistName="",this.isSwiping=!1,this.isShrunk=!1,this.isFlacSupported=!0,this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(t=>{this.ngOnInit()}),this.artistName=decodeURIComponent(this.route.snapshot.params.artist),this.albumName=decodeURIComponent(this.route.snapshot.params.album),this.route.params.subscribe(t=>{this.artistName=decodeURIComponent(t.artist),this.albumName=decodeURIComponent(t.album),this.ngOnInit()}),this.theme=a.mode}ngOnInit(){if(this.album=this.core.albums[this.artistName+"|"+this.albumName],this.album){this.album.sortedDiscs=[];const t=Object.keys(this.album.discs);let i=[];t.forEach(t=>{const s=t.substring(5);i.push({nr:s,id:t})}),i=i.sort((t,i)=>t.nr<i.nr?-1:1),i.forEach(t=>{this.album.sortedDiscs.push(this.album.discs[t.id])}),this.pathService.announcePath({artist:this.album.artist,album:this.album,letter:this.album.artist.letter})}if(this.ownPlaylists=[],localStorage.getItem("customlisttest")){const t=JSON.parse(localStorage.getItem("customlisttest"));t&&t.forEach(t=>{const i=new e.a;i.isOwn=!0,i.name=t.name,i.tracks=t.tracks,this.ownPlaylists.push(i)})}const t=document.querySelector("audio").canPlayType("audio/flac");this.isFlacSupported="probably"===t||"maybe"===t}ngOnDestroy(){this.subscription.unsubscribe()}onSelect(t,i){this.isSwiping||this.playerService.doPlayAlbum(this.album,this.album.tracks.indexOf(t),!0,!1)}playAlbum(){this.isSwiping||this.playerService.doPlayAlbum(this.album,0,!0,!1)}addToQueue(){this.isSwiping||this.playerService.doQueueAlbum(this.album)}navigateToArtist(t){this.router.navigate(["Artist",{letter:t.letter.escapedLetter,artist:t.sortName}])}swipe(t,i,s){s.preventDefault(),this.isSwiping=!0,setTimeout(()=>{this.isSwiping=!1},5),t.showActions=i}totalRunningTime(){let t=0;return this.album.tracks.forEach(i=>{t+=i.duration}),t}onScroll(t){this.isShrunk=window.scrollY>50}}return t.\u0275fac=function(i){return new(i||t)(u.Ib(r.a),u.Ib(a.c),u.Ib(l.a),u.Ib(b.a),u.Ib(a.a),u.Ib(o.a))},t.\u0275cmp=u.Cb({type:t,selectors:[["app-album-detail"]],hostBindings:function(t,i){1&t&&u.Sb("scroll",(function(t){return i.onScroll(t)}),!1,u.kc)},decls:1,vars:1,consts:[["class","animated-page",4,"ngIf"],[1,"animated-page"],[1,"jumbotron","theme-light",3,"ngClass"],[1,"container"],[1,"row","albumdetail"],[1,"col-4","col-md-3","col-lg-2",3,"ngClass"],[3,"album","artist"],[1,"col-8","col-md-9","col-lg-10",3,"ngClass"],[1,"d-none","d-sm-block"],[4,"ngIf"],[1,"d-none","d-sm-inline"],[1,"btn","btn-primary",3,"click"],[1,"glyph","glyph-play"],[1,"d-none","d-md-inline"],[1,"btn","btn-secondary",3,"click"],[1,"glyph","glyph-music-info"],[1,"row"],[1,"col"],["class","list-group list-tracks",4,"ngFor","ngForOf"],[1,"list-group","list-tracks"],["class","list-items-row disc-row header-seperator",3,"ngClass",4,"ngIf"],["class","list-group-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"list-items-row","disc-row","header-seperator",3,"ngClass"],[1,"list-group-item",3,"ngClass"],[1,"details","row",3,"click"],[1,"col-2","col-sm-1"],[1,"col-7","col-sm-10"],[1,"small","muted","color-type-secondary"],[1,"col-3","col-sm-1","text-right"],[1,"glyph","glyph-pause"],[1,"alert","alert-warning"]],template:function(t,i){1&t&&u.oc(0,I,34,21,"div",0),2&t&&u.cc("ngIf",i.album)},directives:[n.k,n.i,n.j],pipes:[p.a],encapsulation:2}),t})()}];let P=(()=>{class t{}return t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({factory:function(i){return new(i||t)},imports:[[a.e.forChild(C)],a.e]}),t})(),A=(()=>{class t{}return t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({factory:function(i){return new(i||t)},imports:[[n.b,P,c.a]]}),t})()}}]);