function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2+yB":function(t,e,a){"use strict";a.r(e);var i=a("ofXK"),n=a("hDf6"),r=a("tyNb"),s=a("ktVm"),o=a("XtVx"),c=a("fXoL"),u=a("UrAU");function l(t,e){if(1&t&&(c.Ob(0,"div",2),c.Mb(1,"mdb-album",3),c.Nb()),2&t){var a=e.$implicit;c.zb(1),c.gc("album",a)}}var b,h,m=[{path:"",component:(b=function(){function t(e,a,i,n){var r=this;_classCallCheck(this,t),this.coreService=e,this.router=a,this.pathService=i,this.route=n,this.albums=[],this.sorting=[{name:"year",value:"year"},{name:"name",value:"sortName"}],this.artistName=decodeURIComponent(this.route.snapshot.params.artist),this.core=this.coreService.getCore(),this.subscription=this.core.coreParsed$.subscribe((function(t){r.ngOnInit()})),this.route.params.subscribe((function(t){r.artistName=decodeURIComponent(t.artist),r.ngOnInit()}))}return _createClass(t,[{key:"ngOnInit",value:function(){this.artist=this.core.artists[this.artistName],this.artist&&(this.pathService.announcePath({artist:this.artist,letter:this.artist.letter}),this.albums=this.artist.sortAndReturnAlbumsBy("year","asc"))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"onSelect",value:function(t){this.router.navigate(["Album",{letter:t.artist.letter.escapedLetter,artist:t.artist.sortName,album:t.sortName}])}},{key:"onSortChange",value:function(t,e){this.albums=this.artist.sortAndReturnAlbumsBy(e,"asc")}}]),t}(),b.\u0275fac=function(t){return new(t||b)(c.Lb(s.a),c.Lb(r.c),c.Lb(o.a),c.Lb(r.a))},b.\u0275cmp=c.Fb({type:b,selectors:[["app-artist-detail"]],decls:2,vars:1,consts:[[1,"media-container","animated-page"],["class","album-panel media-panel",4,"ngFor","ngForOf"],[1,"album-panel","media-panel"],[3,"album"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.xc(1,l,2,1,"div",1),c.Nb()),2&t&&(c.zb(1),c.gc("ngForOf",e.albums))},directives:[i.k,u.a],encapsulation:2}),b)}],p=((h=function t(){_classCallCheck(this,t)}).\u0275mod=c.Jb({type:h}),h.\u0275inj=c.Ib({factory:function(t){return new(t||h)},imports:[[r.e.forChild(m)],r.e]}),h);a.d(e,"ArtistDetailModule",(function(){return d}));var f,d=((f=function t(){_classCallCheck(this,t)}).\u0275mod=c.Jb({type:f}),f.\u0275inj=c.Ib({factory:function(t){return new(t||f)},imports:[[i.c,p,n.a]]}),f)}}]);