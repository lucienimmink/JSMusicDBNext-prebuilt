(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{BZiF:function(t,l,n){"use strict";n.d(l,"a",function(){return i}),n.d(l,"b",function(){return s});var e=n("8Y7J"),i=(n("EAnT"),n("iInd"),e.mb({encapsulation:2,styles:[],data:{}}));function s(t){return e.Jb(0,[e.Fb(671088640,1,{backgroundArt:0}),(t()(),e.ob(1,0,null,null,6,"div",[["class","panel panel-background"]],null,[[null,"click"]],function(t,l,n){var e=!0;return"click"===l&&(e=!1!==t.component.select()&&e),e},null,null)),(t()(),e.ob(2,0,null,null,0,"album-art",[],[[8,"artist",0]],null,null,null,null)),(t()(),e.ob(3,0,null,null,4,"div",[["class","panel-info color-type-primary-alt"]],null,null,null,null,null)),(t()(),e.ob(4,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),e.Hb(5,null,["",""])),(t()(),e.ob(6,0,null,null,1,"span",[["class","small muted"]],null,null,null,null,null)),(t()(),e.Hb(7,null,["Albums: ",""]))],null,function(t,l){var n=l.component;t(l,2,0,n.artist.albumArtist||n.artist.name),t(l,5,0,n.artist.albumArtist||n.artist.name),t(l,7,0,n.artist.albums.length)})}},EAnT:function(t,l,n){"use strict";n.d(l,"a",function(){return e}),n("LNEh"),n("0/mZ");class e{constructor(t){this.router=t}select(){this.router.navigate(["letter",this.artist.letter.escapedLetter,"artist",this.artist.sortName])}}},Oz9T:function(t,l,n){"use strict";n.d(l,"a",function(){return i});var e=n("KI15");n("ufXC");class i{constructor(t){if(this.playerservice=t,this.playlist={},this.isBusy=!1,this.ownPlaylists=[],localStorage.getItem("customlisttest")){const t=JSON.parse(localStorage.getItem("customlisttest"));t&&t.forEach(t=>{const l=new e.a;l.isOwn=!0,l.name=t.name,l.tracks=t.tracks,this.ownPlaylists.push(l)})}}select(t){this.isBusy||this.playerservice.doPlayAlbum(this.playlist,this.playlist.tracks.indexOf(t),!0)}removeFromPlaylist(t,l){this.isBusy=!0,setTimeout(()=>{this.isBusy=!1},5),this.ownPlaylists.forEach(n=>{if(t.name===n.name){const e=t.tracks.indexOf(l);t.tracks.splice(e,1),n.tracks.splice(e,1)}}),localStorage.setItem("customlisttest",JSON.stringify(this.ownPlaylists))}}},Vmu9:function(t,l,n){"use strict";n.d(l,"a",function(){return r});const e=document.documentElement,i=e.matches?"matches":e.matchesSelector?"matchesSelector":e.webkitMatches?"webkitMatches":e.webkitMatchesSelector?"webkitMatchesSelector":e.msMatches?"msMatches":e.msMatchesSelector?"msMatchesSelector":e.mozMatches?"mozMatches":e.mozMatchesSelector?"mozMatchesSelector":null;function s(){if("pageYOffset"in window)return{scrollTop:pageYOffset,scrollLeft:pageXOffset};{let t,l;const n=document,e=n.documentElement,i=n.body;return{scrollTop:l=e.scrollTop||i.scrollTop||0,scrollLeft:t=e.scrollLeft||i.scrollLeft||0}}}function o(t,l){return t===window||t===document.querySelector("body")?"clientWidth"===l?window.innerWidth:window.innerHeight:t[l]}class r{constructor(t,l,n,e){let i;this._element=t,this._viewContainer=l,this._templateRef=n,this._ngZone=e,this.vsOffsetBefore=0,this.vsOffsetAfter=0,this.vsExcess=2,this.tagName="div",this.__horizontal=!1,this._originalCollection=[],this._slicedCollection=[],this.updateInnerCollection=()=>{const t=function(t,l){return t===window?s()[l]:t[l]}(window,this.scrollPos),l=o(this.scrollParent,this.clientSize),n=this.parent===this.scrollParent?0:function(t,l,n){return t.getBoundingClientRect()[n?"left":"top"]-(l===window?0:l.getBoundingClientRect()[n?"left":"top"])+(l===window?s():l)[n?"scrollLeft":"scrollTop"]}(this.parent,this.scrollParent,this.__horizontal);let e=this.startIndex,i=this.endIndex;if(void 0!==this.vsSize){for(e=0;this.sizesCumulative[e]<t-this.vsOffsetBefore;)e++;for(e>0&&e--,i=e=Math.max(Math.floor(e-this.vsExcess/2),0);this.sizesCumulative[i]<t-this.vsOffsetBefore+l;)i++;i=Math.min(Math.ceil(i+this.vsExcess/2),this.originalLength)}else e=Math.max(Math.floor((t-this.vsOffsetBefore-n)/this.elementSize)-this.vsExcess/2,0),i=Math.min(e+Math.ceil(l/this.elementSize)+this.vsExcess,this.originalLength);this._minStartIndex=Math.min(e,this._minStartIndex),this._maxEndIndex=Math.max(i,this._maxEndIndex),this.startIndex=this.__options.latch?this._minStartIndex:e,this.endIndex=this.__options.latch?this._maxEndIndex:i;let r=!1;if(null==this._prevStartIndex?r=!0:null==this._prevEndIndex&&(r=!0),r||(this.__options.hunked?Math.abs(this.startIndex-this._prevStartIndex)>=this.vsExcess/2||0===this.startIndex&&0!==this._prevStartIndex?r=!0:(Math.abs(this.endIndex-this._prevEndIndex)>=this.vsExcess/2||this.endIndex===this.originalLength&&this._prevEndIndex!==this.originalLength)&&(r=!0):r=this.startIndex!==this._prevStartIndex||this.endIndex!==this._prevEndIndex),r){this.slicedCollection=this.originalCollection.slice(this.startIndex,this.endIndex),this.view.context.vsStartIndex=this.startIndex,this._prevStartIndex=this.startIndex,this._prevEndIndex=this.endIndex;const t=this._getOffset(0),l=this._getOffset(this.slicedCollection.length),n=this.totalSize,e=this.__horizontal?"width":"height";this.before.style[e]=t+"px",this.after.style[e]=n-l+"px"}return r},this.onZone=this._ngZone.onStable.subscribe(()=>{if(!this.scrollParent)return;const t=o(this.scrollParent,this.clientSize);t!==i?(i=t,this._ngZone.run(()=>{this.refresh()})):i=t})}set originalCollection(t){this._originalCollection=t||[],this.scrollParent?this.refresh():this.postDigest(this.refresh.bind(this))}get originalCollection(){return this._originalCollection}set slicedCollection(t){this._slicedCollection=t,this.view.context.vsCollection=this._slicedCollection}get slicedCollection(){return this._slicedCollection}ngOnChanges(){this.scrollParent?this.refresh():this.postDigest(this.refresh.bind(this))}postDigest(t){const l=this._ngZone.onStable.subscribe(()=>{t(),l.unsubscribe()})}initPlaceholders(){this.before=document.createElement(this.tagName),this.before.className="vsFor-before",this.after=document.createElement(this.tagName),this.after.className="vsFor-after",this.parent.insertBefore(this.before,this.parent.childNodes[0]),this.parent.appendChild(this.after),this.__horizontal?(this.before.style.height="100%",this.after.style.height="100%"):(this.before.style.width="100%",this.after.style.width="100%")}ngOnInit(){this.view=this._viewContainer.createEmbeddedView(this._templateRef),this.parent=this.view.rootNodes[0],this.initPlaceholders(),this.__horizontal=!1,this.__autoSize=!0,this.__options={},this.clientSize=this.__horizontal?"clientWidth":"clientHeight",this.offsetSize=this.__horizontal?"offsetWidth":"offsetHeight",this.scrollPos=this.__horizontal?"scrollLeft":"scrollTop",this.scrollParent=this.vsScrollParent?function(t,l){for(;t!==document.documentElement&&null!=t&&!t[i](l);)t=t.parentNode;return t&&t[i](l)?t:null}(this.parent,this.vsScrollParent):this.parent,this.elementSize=o(this.scrollParent,this.clientSize)||50,this.totalSize=0,void 0!==this.vsSize&&(this.sizesCumulative=[]),this.startIndex=0,this.endIndex=0,document.addEventListener("scroll",this.updateInnerCollection),this.onWindowResize=()=>{this.vsAutoresize?(this.__autoSize=!0,this._ngZone.run(()=>{this.setAutoSize()})):this._ngZone.run(()=>{this.updateInnerCollection()})},window.addEventListener("resize",this.onWindowResize)}ngOnDestroy(){window.removeEventListener("resize",this.onWindowResize),this.onZone&&this.onZone.unsubscribe(),document.removeEventListener("scroll",this.updateInnerCollection)}refresh(){if(!this.originalCollection||this.originalCollection.length<1)this.slicedCollection=[],this.originalLength=0,this.updateTotalSize(0),this.sizesCumulative=[0];else if(this.originalLength=this.originalCollection.length,void 0!==this.vsSize){this.sizes=this.originalCollection.map((t,l)=>"function"==typeof this.vsSize?this.vsSize(t,l):+this.vsSize);let t=0;this.sizesCumulative=this.sizes.map(l=>{const n=t;return t+=l,n}),this.sizesCumulative.push(t)}else this.__autoSize=!0,this.postDigest(this.setAutoSize.bind(this));this.reinitialize()}updateTotalSize(t){this.totalSize=this.vsOffsetBefore+t+this.vsOffsetAfter}reinitialize(){this._prevStartIndex=void 0,this._prevEndIndex=void 0,this._minStartIndex=this.originalLength,this._maxEndIndex=0,this.updateTotalSize(void 0!==this.vsSize?this.sizesCumulative[this.originalLength]:this.elementSize*this.originalLength),this.updateInnerCollection()}setAutoSize(){if(void 0!==this.vsSize)this._ngZone.run(()=>{this.refresh()});else if(this.__autoSize){let t=!1;if(this.parent.offsetHeight||this.parent.offsetWidth){const l=this.parent.children[1];l[this.offsetSize]&&(t=!0,this.elementSize=l[this.offsetSize])}t&&(this.__autoSize=!1,this._ngZone.run(()=>{this.reinitialize()}))}}_getOffset(t){return void 0!==this.vsSize?this.sizesCumulative[t+this.startIndex]+this.vsOffsetBefore:(t+this.startIndex)*this.elementSize+this.vsOffsetBefore}}},Z3YK:function(t,l,n){"use strict";n.d(l,"a",function(){return o}),n.d(l,"b",function(){return d});var e=n("8Y7J"),i=n("SVse"),s=n("cpgm"),o=(n("Oz9T"),n("ufXC"),e.mb({encapsulation:2,styles:[],data:{}}));function r(t){return e.Jb(0,[(t()(),e.ob(0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),e.ob(1,0,null,null,0,"span",[["class","glyph glyph-pause"]],null,null,null,null,null))],null,null)}function u(t){return e.Jb(0,[(t()(),e.ob(0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),e.ob(1,0,null,null,0,"span",[["class","glyph glyph-play"]],null,null,null,null,null))],null,null)}function h(t){return e.Jb(0,[(t()(),e.ob(0,0,null,null,2,"span",[],null,null,null,null,null)),(t()(),e.ob(1,0,null,null,1,"span",[["class","small muted color-type-secondary"]],null,null,null,null,null)),(t()(),e.Hb(2,null,["",""]))],null,function(t,l){t(l,2,0,l.parent.context.$implicit.type)})}function a(t){return e.Jb(0,[(t()(),e.ob(0,0,null,null,3,"span",[],null,null,null,null,null)),(t()(),e.ob(1,0,null,null,2,"span",[["class","small muted color-type-secondary"]],null,null,null,null,null)),(t()(),e.Hb(2,null,[""," \xa0"])),e.Db(3,1)],null,function(t,l){var n=e.Ib(l,2,0,t(l,3,0,e.Ab(l.parent.parent,0),l.parent.context.$implicit.position));t(l,2,0,n)})}function c(t){return e.Jb(0,[(t()(),e.ob(0,0,null,null,20,"li",[["class","list-group-item row"]],null,[[null,"click"]],function(t,l,n){var e=!0;return"click"===l&&(e=!1!==t.component.select(t.context.$implicit)&&e),e},null,null)),e.Eb(512,null,i.u,i.v,[e.q,e.r,e.k,e.B]),e.nb(2,278528,null,0,i.i,[i.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Cb(3,{active:0}),(t()(),e.ob(4,0,null,null,8,"div",[["class","col-8 col-md-10 track-info"]],null,null,null,null,null)),(t()(),e.eb(16777216,null,null,1,null,r)),e.nb(6,16384,null,0,i.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.eb(16777216,null,null,1,null,u)),e.nb(8,16384,null,0,i.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.Hb(9,null,[""," "])),(t()(),e.ob(10,0,null,null,0,"br",[],null,null,null,null,null)),(t()(),e.ob(11,0,null,null,1,"span",[["class","small muted color-type-secondary"]],null,null,null,null,null)),(t()(),e.Hb(12,null,[" "," \u2022 "," "])),(t()(),e.ob(13,0,null,null,7,"div",[["class","col text-right"]],null,null,null,null,null)),(t()(),e.Hb(14,null,[" "," "])),e.Db(15,1),(t()(),e.ob(16,0,null,null,0,"br",[],null,null,null,null,null)),(t()(),e.eb(16777216,null,null,1,null,h)),e.nb(18,16384,null,0,i.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.eb(16777216,null,null,1,null,a)),e.nb(20,16384,null,0,i.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],function(t,l){var n=t(l,3,0,l.context.$implicit.isPlaying||l.context.$implicit.isPaused);t(l,2,0,"list-group-item row",n),t(l,6,0,!l.context.$implicit.isPlaying&&l.context.$implicit.isPaused),t(l,8,0,l.context.$implicit.isPlaying&&!l.context.$implicit.isPaused),t(l,18,0,!l.context.$implicit.isPlaying),t(l,20,0,l.context.$implicit.isPlaying)},function(t,l){t(l,9,0,l.context.$implicit.title),t(l,12,0,l.context.$implicit.trackArtist,l.context.$implicit.album.name);var n=e.Ib(l,14,0,t(l,15,0,e.Ab(l.parent,0),l.context.$implicit.duration));t(l,14,0,n)})}function d(t){return e.Jb(0,[e.Bb(0,s.a,[]),(t()(),e.ob(1,0,null,null,2,"ol",[["class","list-group list-tracks"]],null,null,null,null,null)),(t()(),e.eb(16777216,null,null,1,null,c)),e.nb(3,278528,null,0,i.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],function(t,l){t(l,3,0,l.component.playlist.tracks)},null)}},cpgm:function(t,l,n){"use strict";n.d(l,"a",function(){return e});class e{transform(t,l){let n="",e=Math.floor(t/1e3),i=Math.floor(e/60);e%=60;let s=Math.floor(i/60);i%=60;const o=Math.floor(s/24);return o>0&&(n+=o+" days,"),(s%=24)>0&&(n+=this.prefixZero(s)+":"),n+(this.prefixZero(i)+":")+this.prefixZero(e)}prefixZero(t){return t<10?"0"+t.toString():t.toString()}}}}]);