function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{EAnT:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i("LNEh");var s=i("fXoL"),n=i("tyNb"),r=function(){var t=function(){function t(e){_classCallCheck(this,t),this.router=e}return _createClass(t,[{key:"select",value:function(){this.router.navigate(["letter",this.artist.letter.escapedLetter,"artist",this.artist.sortName])}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Lb(n.c))},t.\u0275cmp=s.Fb({type:t,selectors:[["mdb-artist"]],inputs:{artist:"artist"},decls:7,vars:3,consts:[[1,"panel","panel-background",3,"click"],[3,"artist"],[1,"panel-info","color-type-primary-alt"],[1,"small","muted"]],template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Wb("click",(function(){return e.select()})),s.Mb(1,"album-art",1),s.Ob(2,"div",2),s.Ob(3,"span"),s.zc(4),s.Nb(),s.Ob(5,"span",3),s.zc(6),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.zb(1),s.gc("artist",e.artist.albumArtist||e.artist.name),s.zb(3),s.Ac(e.artist.albumArtist||e.artist.name),s.zb(2),s.Bc("Albums: ",e.artist.albums.length,""))},encapsulation:2}),t}()},Oz9T:function(t,e,i){"use strict";i.d(e,"a",(function(){return v}));var s=i("KI15"),n=i("ufXC"),r=i("fXoL"),a=i("ofXK"),o=i("cpgm");function l(t,e){1&t&&(r.Ob(0,"span"),r.Mb(1,"span",7),r.Nb())}function c(t,e){1&t&&(r.Ob(0,"span"),r.Mb(1,"span",8),r.Nb())}function h(t,e){if(1&t&&(r.Ob(0,"span"),r.Ob(1,"span",5),r.zc(2),r.Nb(),r.Nb()),2&t){var i=r.ac().$implicit;r.zb(2),r.Ac(i.type)}}function u(t,e){if(1&t&&(r.Ob(0,"span"),r.Ob(1,"span",5),r.zc(2),r.bc(3,"timeFormat"),r.Nb(),r.Nb()),2&t){var i=r.ac().$implicit;r.zb(2),r.Bc("",r.cc(3,1,i.position)," \xa0")}}var f=function(t){return{active:t}};function d(t,e){if(1&t){var i=r.Pb();r.Ob(0,"li",2),r.Wb("click",(function(){r.rc(i);var t=e.$implicit;return r.ac().select(t)})),r.Ob(1,"div",3),r.xc(2,l,2,0,"span",4),r.xc(3,c,2,0,"span",4),r.zc(4),r.Mb(5,"br"),r.Ob(6,"span",5),r.zc(7),r.Nb(),r.Nb(),r.Ob(8,"div",6),r.zc(9),r.bc(10,"timeFormat"),r.Mb(11,"br"),r.xc(12,h,3,1,"span",4),r.xc(13,u,4,3,"span",4),r.Nb(),r.Nb()}if(2&t){var s=e.$implicit;r.gc("ngClass",r.jc(11,f,s.isPlaying||s.isPaused)),r.zb(2),r.gc("ngIf",!s.isPlaying&&s.isPaused),r.zb(1),r.gc("ngIf",s.isPlaying&&!s.isPaused),r.zb(1),r.Bc("",s.title," "),r.zb(3),r.Cc(" ",s.trackArtist," \u2022 ",s.album.name," "),r.zb(2),r.Bc(" ",r.cc(10,9,s.duration)," "),r.zb(3),r.gc("ngIf",!s.isPlaying),r.zb(1),r.gc("ngIf",s.isPlaying)}}var v=function(){var t=function(){function t(e){var i=this;if(_classCallCheck(this,t),this.playerservice=e,this.playlist={},this.isBusy=!1,this.ownPlaylists=[],localStorage.getItem("customlisttest")){var n=JSON.parse(localStorage.getItem("customlisttest"));n&&n.forEach((function(t){var e=new s.a;e.isOwn=!0,e.name=t.name,e.tracks=t.tracks,i.ownPlaylists.push(e)}))}}return _createClass(t,[{key:"select",value:function(t){this.isBusy||this.playerservice.doPlayAlbum(this.playlist,this.playlist.tracks.indexOf(t),!0)}},{key:"removeFromPlaylist",value:function(t,e){var i=this;this.isBusy=!0,setTimeout((function(){i.isBusy=!1}),5),this.ownPlaylists.forEach((function(i){if(t.name===i.name){var s=t.tracks.indexOf(e);t.tracks.splice(s,1),i.tracks.splice(s,1)}})),localStorage.setItem("customlisttest",JSON.stringify(this.ownPlaylists))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Lb(n.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["mdb-tracklist"]],inputs:{playlist:"playlist"},decls:2,vars:1,consts:[[1,"list-group","list-tracks"],["class","list-group-item row",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item","row",3,"ngClass","click"],[1,"col-8","col-md-10","track-info"],[4,"ngIf"],[1,"small","muted","color-type-secondary"],[1,"col","text-right"],[1,"glyph","glyph-pause"],[1,"glyph","glyph-play"]],template:function(t,e){1&t&&(r.Ob(0,"ol",0),r.xc(1,d,14,13,"li",1),r.Nb()),2&t&&(r.zb(1),r.gc("ngForOf",e.playlist.tracks))},directives:[a.k,a.j,a.l],pipes:[o.a],encapsulation:2}),t}()},UrAU:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i("hR/0"),i("/1T7");var s=i("fXoL"),n=i("tyNb"),r=i("ofXK");function a(t,e){if(1&t&&(s.Ob(0,"span"),s.zc(1),s.Nb()),2&t){var i=s.ac();s.zb(1),s.Bc("Year: ",i.album.year,"")}}var o=function(){var t=function(){function t(e){_classCallCheck(this,t),this.router=e}return _createClass(t,[{key:"select",value:function(){this.router.navigate(["letter",this.album.artist.letter.escapedLetter,"artist",this.album.artist.sortName,"album",this.album.sortName])}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Lb(n.c))},t.\u0275cmp=s.Fb({type:t,selectors:[["mdb-album"]],inputs:{album:"album"},decls:7,vars:4,consts:[[1,"panel","panel-background",3,"click"],[3,"album","artist"],[1,"panel-info","color-type-primary-alt"],[1,"small","muted"],[4,"ngIf"]],template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Wb("click",(function(){return e.select()})),s.Mb(1,"album-art",1),s.Ob(2,"div",2),s.Ob(3,"span"),s.zc(4),s.Nb(),s.Ob(5,"span",3),s.xc(6,a,2,1,"span",4),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.zb(1),s.gc("album",e.album.name)("artist",e.album.artist.albumArtist||e.album.artist.name),s.zb(3),s.Ac(e.album.name),s.zb(2),s.gc("ngIf",0!==e.album.year))},directives:[r.l],encapsulation:2}),t}()},Vmu9:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var s=i("fXoL"),n=document.documentElement,r=n.matches?"matches":n.matchesSelector?"matchesSelector":n.webkitMatches?"webkitMatches":n.webkitMatchesSelector?"webkitMatchesSelector":n.msMatches?"msMatches":n.msMatchesSelector?"msMatchesSelector":n.mozMatches?"mozMatches":n.mozMatchesSelector?"mozMatchesSelector":null;function a(){if("pageYOffset"in window)return{scrollTop:pageYOffset,scrollLeft:pageXOffset};var t,e=document,i=e.documentElement,s=e.body;return t=i.scrollLeft||s.scrollLeft||0,{scrollTop:i.scrollTop||s.scrollTop||0,scrollLeft:t}}function o(t,e){return t===window||t===document.querySelector("body")?"clientWidth"===e?window.innerWidth:window.innerHeight:t[e]}var l=function(){var t=function(){function t(e,i,s,n){var r,l=this;_classCallCheck(this,t),this._element=e,this._viewContainer=i,this._templateRef=s,this._ngZone=n,this.vsOffsetBefore=0,this.vsOffsetAfter=0,this.vsExcess=2,this.tagName="div",this.__horizontal=!1,this._originalCollection=[],this._slicedCollection=[],this.updateInnerCollection=function(){var t,e,i,s,n=(t=window,e=l.scrollPos,t===window?a()[e]:t[e]),r=o(l.scrollParent,l.clientSize),c=l.parent===l.scrollParent?0:(i=l.scrollParent,s=l.__horizontal,l.parent.getBoundingClientRect()[s?"left":"top"]-(i===window?0:i.getBoundingClientRect()[s?"left":"top"])+(i===window?a():i)[s?"scrollLeft":"scrollTop"]),h=l.startIndex,u=l.endIndex;if(void 0!==l.vsSize){for(h=0;l.sizesCumulative[h]<n-l.vsOffsetBefore;)h++;for(h>0&&h--,u=h=Math.max(Math.floor(h-l.vsExcess/2),0);l.sizesCumulative[u]<n-l.vsOffsetBefore+r;)u++;u=Math.min(Math.ceil(u+l.vsExcess/2),l.originalLength)}else h=Math.max(Math.floor((n-l.vsOffsetBefore-c)/l.elementSize)-l.vsExcess/2,0),u=Math.min(h+Math.ceil(r/l.elementSize)+l.vsExcess,l.originalLength);l._minStartIndex=Math.min(h,l._minStartIndex),l._maxEndIndex=Math.max(u,l._maxEndIndex),l.startIndex=l.__options.latch?l._minStartIndex:h,l.endIndex=l.__options.latch?l._maxEndIndex:u;var f=!1;if(null==l._prevStartIndex?f=!0:null==l._prevEndIndex&&(f=!0),f||(l.__options.hunked?Math.abs(l.startIndex-l._prevStartIndex)>=l.vsExcess/2||0===l.startIndex&&0!==l._prevStartIndex?f=!0:(Math.abs(l.endIndex-l._prevEndIndex)>=l.vsExcess/2||l.endIndex===l.originalLength&&l._prevEndIndex!==l.originalLength)&&(f=!0):f=l.startIndex!==l._prevStartIndex||l.endIndex!==l._prevEndIndex),f){l.slicedCollection=l.originalCollection.slice(l.startIndex,l.endIndex),l.view.context.vsStartIndex=l.startIndex,l._prevStartIndex=l.startIndex,l._prevEndIndex=l.endIndex;var d=l._getOffset(0),v=l._getOffset(l.slicedCollection.length),p=l.totalSize,m=l.__horizontal?"width":"height";l.before.style[m]=d+"px",l.after.style[m]=p-v+"px"}return f},this.onZone=this._ngZone.onStable.subscribe((function(){if(l.scrollParent){var t=o(l.scrollParent,l.clientSize);t!==r?(r=t,l._ngZone.run((function(){l.refresh()}))):r=t}}))}return _createClass(t,[{key:"ngOnChanges",value:function(){this.scrollParent?this.refresh():this.postDigest(this.refresh.bind(this))}},{key:"postDigest",value:function(t){var e=this._ngZone.onStable.subscribe((function(){t(),e.unsubscribe()}))}},{key:"initPlaceholders",value:function(){this.before=document.createElement(this.tagName),this.before.className="vsFor-before",this.after=document.createElement(this.tagName),this.after.className="vsFor-after",this.parent.insertBefore(this.before,this.parent.childNodes[0]),this.parent.appendChild(this.after),this.__horizontal?(this.before.style.height="100%",this.after.style.height="100%"):(this.before.style.width="100%",this.after.style.width="100%")}},{key:"ngOnInit",value:function(){var t=this;this.view=this._viewContainer.createEmbeddedView(this._templateRef),this.parent=this.view.rootNodes[0],this.initPlaceholders(),this.__horizontal=!1,this.__autoSize=!0,this.__options={},this.clientSize=this.__horizontal?"clientWidth":"clientHeight",this.offsetSize=this.__horizontal?"offsetWidth":"offsetHeight",this.scrollPos=this.__horizontal?"scrollLeft":"scrollTop",this.scrollParent=this.vsScrollParent?function(t,e){for(;t!==document.documentElement&&null!=t&&!t[r](e);)t=t.parentNode;return t&&t[r](e)?t:null}(this.parent,this.vsScrollParent):this.parent,this.elementSize=o(this.scrollParent,this.clientSize)||50,this.totalSize=0,void 0!==this.vsSize&&(this.sizesCumulative=[]),this.startIndex=0,this.endIndex=0,document.addEventListener("scroll",this.updateInnerCollection),this.onWindowResize=function(){t.vsAutoresize?(t.__autoSize=!0,t._ngZone.run((function(){t.setAutoSize()}))):t._ngZone.run((function(){t.updateInnerCollection()}))},window.addEventListener("resize",this.onWindowResize)}},{key:"ngOnDestroy",value:function(){window.removeEventListener("resize",this.onWindowResize),this.onZone&&this.onZone.unsubscribe(),document.removeEventListener("scroll",this.updateInnerCollection)}},{key:"refresh",value:function(){var t=this;if(!this.originalCollection||this.originalCollection.length<1)this.slicedCollection=[],this.originalLength=0,this.updateTotalSize(0),this.sizesCumulative=[0];else if(this.originalLength=this.originalCollection.length,void 0!==this.vsSize){this.sizes=this.originalCollection.map((function(e,i){return"function"==typeof t.vsSize?t.vsSize(e,i):+t.vsSize}));var e=0;this.sizesCumulative=this.sizes.map((function(t){var i=e;return e+=t,i})),this.sizesCumulative.push(e)}else this.__autoSize=!0,this.postDigest(this.setAutoSize.bind(this));this.reinitialize()}},{key:"updateTotalSize",value:function(t){this.totalSize=this.vsOffsetBefore+t+this.vsOffsetAfter}},{key:"reinitialize",value:function(){this._prevStartIndex=void 0,this._prevEndIndex=void 0,this._minStartIndex=this.originalLength,this._maxEndIndex=0,this.updateTotalSize(void 0!==this.vsSize?this.sizesCumulative[this.originalLength]:this.elementSize*this.originalLength),this.updateInnerCollection()}},{key:"setAutoSize",value:function(){var t=this;if(void 0!==this.vsSize)this._ngZone.run((function(){t.refresh()}));else if(this.__autoSize){var e=!1;if(this.parent.offsetHeight||this.parent.offsetWidth){var i=this.parent.children[1];i[this.offsetSize]&&(e=!0,this.elementSize=i[this.offsetSize])}e&&(this.__autoSize=!1,this._ngZone.run((function(){t.reinitialize()})))}}},{key:"_getOffset",value:function(t){return void 0!==this.vsSize?this.sizesCumulative[t+this.startIndex]+this.vsOffsetBefore:(t+this.startIndex)*this.elementSize+this.vsOffsetBefore}},{key:"originalCollection",set:function(t){this._originalCollection=t||[],this.scrollParent?this.refresh():this.postDigest(this.refresh.bind(this))},get:function(){return this._originalCollection}},{key:"slicedCollection",set:function(t){this._slicedCollection=t,this.view.context.vsCollection=this._slicedCollection},get:function(){return this._slicedCollection}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.l),s.Lb(s.N),s.Lb(s.K),s.Lb(s.z))},t.\u0275dir=s.Gb({type:t,selectors:[["","vsFor",""]],inputs:{vsSize:["vsForSize","vsSize"],vsOffsetBefore:["vsForOffsetBefore","vsOffsetBefore"],vsOffsetAfter:["vsForOffsetAfter","vsOffsetAfter"],vsExcess:["vsForExcess","vsExcess"],tagName:["vsForTagName","tagName"],__horizontal:["vsForHorizontal","__horizontal"],vsScrollParent:["vsForScrollParent","vsScrollParent"],vsAutoresize:["vsForAutoresize","vsAutoresize"],originalCollection:["vsFor","originalCollection"]},features:[s.xb()]}),t}()},cpgm:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i("fXoL"),n=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t,e){var i="",s=Math.floor(t/1e3),n=Math.floor(s/60);s%=60;var r=Math.floor(n/60);n%=60;var a=Math.floor(r/24);return a>0&&(i+=a+" days,"),(r%=24)>0&&(i+=this.prefixZero(r)+":"),i+=this.prefixZero(n)+":"+this.prefixZero(s)}},{key:"prefixZero",value:function(t){return t<10?"0"+t.toString():t.toString()}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Kb({name:"timeFormat",type:t,pure:!0}),t}()}}]);