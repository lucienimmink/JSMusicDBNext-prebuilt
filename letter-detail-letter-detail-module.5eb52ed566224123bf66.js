(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pJo8:function(t,e,n){"use strict";n.r(e);var r=n("Valr"),i=n("TYT/"),o=n("hDf6"),s=n("DUip"),a=n("ktVm"),c=n("XtVx"),u=n("EAnT"),p=[1,"media-container","animated-page"],l=["class","artist-panel media-panel",4,"ngFor","ngForOf"],f=[1,"artist-panel","media-panel"],h=[3,"artist"];function d(t,e){if(1&t&&(i.Tb(0,"div",f),i.Qb(1,"mdb-artist",h),i.Rb()),2&t){var n=e.$implicit;i.yc(1),i.kc("artist",n)}}var b=[{path:"",component:function(){function t(t,e,n,r){var i=this;this.coreService=t,this.router=e,this.pathService=n,this.route=r,this.artists=[],this.sorting=[{name:"name",value:"sortName"},{name:"albums",value:"albums"}],this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe(function(t){i.ngOnInit()}),this.letter=decodeURIComponent(this.route.snapshot.params.letter),this.route.params.subscribe(function(t){i.letter=decodeURIComponent(t.letter),i.ngOnInit()})}return t.prototype.ngOnInit=function(){this.coreletter=this.core.letters[this.letter],this.coreletter&&(this.pathService.announcePage("JSMusicDB Next",this.coreletter),this.artists=this.coreletter.sortAndReturnArtistsBy("sortName","asc"))},t.prototype.onSelect=function(t){this.router.navigate(["Artist",{letter:t.letter.escapedLetter,artist:t.sortName}])},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t.prototype.onSortChange=function(t,e){this.artists=this.coreletter.sortAndReturnArtistsBy(e,"asc")},t.ngComponentDef=i.Jb({type:t,selectors:[["app-letter-detail"]],factory:function(e){return new(e||t)(i.Pb(a.a),i.Pb(s.c),i.Pb(c.a),i.Pb(s.a))},consts:2,vars:1,template:function(t,e){1&t&&(i.Tb(0,"div",p),i.Ec(1,d,2,1,"div",l),i.Rb()),2&t&&(i.yc(1),i.kc("ngForOf",e.artists))},directives:[r.k,u.a],encapsulation:2}),t}()}],m=function(){function t(){}return t.ngModuleDef=i.Nb({type:t}),t.ngInjectorDef=i.Mb({factory:function(e){return new(e||t)},imports:[[s.e.forChild(b)],s.e]}),t.ngLocaleIdDef="en-GB",t}();s.e.forChild(b),n.d(e,"LetterDetailModule",function(){return g});var g=function(){function t(){}return t.ngModuleDef=i.Nb({type:t}),t.ngInjectorDef=i.Mb({factory:function(e){return new(e||t)},imports:[[r.c,m,o.a]]}),t.ngLocaleIdDef="en-GB",t}()}}]);