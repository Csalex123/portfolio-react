(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9rYO":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sobre",function(){return n("T7al")}])},LtPk:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),s=o.a.createElement;t.default=function(e){return s("div",null,s("nav",null,s("li",null,s(a.a,{href:"/home"},s("a",null,"Home"))),s("li",null,s(a.a,{href:"/sobre"},s("a",null,"Sobre")))))}},T7al:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("LtPk"),a=o.a.createElement;t.default=function(e){return a("div",null,a(i.default,null),a("h1",null,"Sobre"))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var f=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var l,p=c(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=f(n("nOHt")),y=n("elyg");function w(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var m=new Map,g=window.IntersectionObserver,_={};function k(){return l||(g?l=new g((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){i(a,e);var t=u(a);function a(e){var n;return r(this,a),(n=t.call(this,e)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:(0,y.addBasePath)(w(e)),as:t?(0,y.addBasePath)(w(t)):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),s=s?(0,h.resolve)(u,s):a,e.preventDefault();var f=n.props.scroll;null==f&&(f=s.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return o(a,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),_[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),_[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,i=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),s={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(s.href=i||o);var u=n("P5f7").rewriteUrlForNextExport;return s.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=u(s.href)),p.default.cloneElement(a,s)}}]),a}(p.Component);t.default=E}},[["9rYO",0,2,1]]]);