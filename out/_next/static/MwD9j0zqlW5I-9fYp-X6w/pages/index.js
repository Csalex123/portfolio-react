(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(A,e,a){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(l.default.useContext(n.AmpStateContext))};var t,l=(t=a("q1tI"))&&t.__esModule?t:{default:t},n=a("lwAK");function i(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=A.ampFirst,a=void 0!==e&&e,t=A.hybrid,l=void 0!==t&&t,n=A.hasQuery;return a||l&&(void 0!==n&&n)}},"7W2i":function(A,e,a){var t=a("SksO");A.exports=function(A,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&t(A,e)}},"8Kt/":function(A,e,a){"use strict";e.__esModule=!0,e.defaultHead=o,e.default=void 0;var t=s(a("q1tI")),l=s(a("Xuae")),n=a("lwAK"),i=a("FYa8"),r=a("/0+H");function s(A){return A&&A.__esModule?A:{default:A}}function o(){var A=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[t.default.createElement("meta",{charSet:"utf-8"})];return A||e.push(t.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function c(A,e){return"string"===typeof e||"number"===typeof e?A:e.type===t.default.Fragment?A.concat(t.default.Children.toArray(e.props.children).reduce((function(A,e){return"string"===typeof e||"number"===typeof e?A:A.concat(e)}),[])):A.concat(e)}var u=["name","httpEquiv","charSet","itemProp"];function m(A,e){return A.reduce((function(A,e){var a=t.default.Children.toArray(e.props.children);return A.concat(a)}),[]).reduce(c,[]).reverse().concat(o(e.inAmpMode)).filter(function(){var A=new Set,e=new Set,a=new Set,t={};return function(l){var n=!0;if(l.key&&"number"!==typeof l.key&&l.key.indexOf("$")>0){var i=l.key.slice(l.key.indexOf("$")+1);A.has(i)?n=!1:A.add(i)}switch(l.type){case"title":case"base":e.has(l.type)?n=!1:e.add(l.type);break;case"meta":for(var r=0,s=u.length;r<s;r++){var o=u[r];if(l.props.hasOwnProperty(o))if("charSet"===o)a.has(o)?n=!1:a.add(o);else{var c=l.props[o],m=t[o]||new Set;m.has(c)?n=!1:(m.add(c),t[o]=m)}}}return n}}()).reverse().map((function(A,e){var a=A.key||e;return t.default.cloneElement(A,{key:a})}))}var d=(0,l.default)();function M(A){var e=A.children;return(t.default.createElement(n.AmpStateContext.Consumer,null,(function(A){return t.default.createElement(i.HeadManagerContext.Consumer,null,(function(a){return t.default.createElement(d,{reduceComponentsToState:m,handleStateChange:a,inAmpMode:(0,r.isInAmpMode)(A)},e)}))})))}M.rewind=d.rewind;var N=M;e.default=N},Bnag:function(A,e){A.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(A,e){A.exports=function(A){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(A))return Array.from(A)}},FYa8:function(A,e,a){"use strict";var t;e.__esModule=!0,e.HeadManagerContext=void 0;var l=((t=a("q1tI"))&&t.__esModule?t:{default:t}).default.createContext(null);e.HeadManagerContext=l},Gpsl:function(A,e){A.exports="/_next/static/images/3-887b234f18cb2a4ae2b4234240755ae4.jpg"},Ijbi:function(A,e,a){var t=a("WkPL");A.exports=function(A){if(Array.isArray(A))return t(A)}},LeFl:function(A,e){A.exports="/_next/static/images/code-472d6316bf604b6810c0b9af017364a6.gif"},LirA:function(A,e){A.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQ3LjM3NCw0Ni4xMjVjLTQuNDgyLTEuOTc1LTcuMDY4LTMuNjE0LTExLjc2OC01LjE2MmMtMC4zNTEtMC4xMTUtMC43Ny0wLjM0LTAuOTA5LTAuNjExCgkJYy0wLjM4Mi0wLjcyNS0wLjY1LTEuNDk2LTAuOTIyLTIuMjYyYy0wLjE3My0wLjQ4Ni0wLjMyNi0wLjk0NS0wLjk1LTEuMThjLTAuMTY3LTAuMDYyLTAuMzItMC4zNDQtMC4zMTYtMC41MjQKCQljMC4wMzItMS43NzItMC41OTgtMy4wNjEsMC4xOC0zLjc1N2MxLjQxNy0xLjI3MywxLjA5NS0yLjgzNCwxLjgwNC0zLjYwN2MwLjcwOC0wLjc3MiwyLjQ2Mi02LjI1MywyLjEyNi02Ljk1OAoJCWMtMC4zMzYtMC43MDItMS41MjEtMC4zNzMtMS4yNDUtMC43MTRjMS4wOS0xLjM0NCwxLjQyNi00LjA1OSwxLjM3LTYuMjg1YzAuMTk0LDAuNDAzLDAuMzAxLDAuODQxLDAuMzAxLDEuMzJ2MC40NjFsNi45MzctNC41MDgKCQlMMjUsMEw2LjAyMSwxMi4zMzZsMS43MTUsMS4xMTR2Mi40OTZjLTAuMzI5LDAuMDg0LTAuNTc4LDAuMzY4LTAuNTc4LDAuNzIzYzAsMC4yNzUsMC4xNTYsMC41MDksMC4zNzksMC42NDJMNi4wMiwyNS45NTVoMy43OTkKCQlMOC4zLDE3LjMxMWMwLjIyMi0wLjEzMiwwLjM3Ny0wLjM2NiwwLjM3Ny0wLjY0MmMwLTAuMzU1LTAuMjQ5LTAuNjM5LTAuNTc3LTAuNzIzdi0yLjI1OGw0Ljg1NiwzLjE1NnYtMC4zMDMKCQljMC4wMzYsMC40NTEsMC4xMDIsMC45MTYsMC4yMTIsMS4zOTljMC4zNzUsMS42NDQsMS4wOTgsMS41NDIsMS42ODQsMy40MDZjMC4wMDksMC4wMjgsMC4wMDEsMC4wNjUsMC4wMDEsMC4wOTh2MC4xCgkJYy0wLjA0NiwwLjIxMi0wLjIxNiwwLjQ1MS0wLjM1OSwwLjQ5Yy0wLjY5NywwLjE5My0wLjcxNCwwLjU3Ny0wLjYyLDEuMDc0YzAuMDY1LDAuMzQyLDAuNTk4LDIuODg0LDAuOTA2LDMuNzk0CgkJYzAuMjMyLDAuNjc3LDAuNjgxLDEuMzE1LDAuODA1LDIuMDA1YzAuMjUsMS4zNzYsMC44NDIsMi41NzMsMS45MjMsMy42MWMwLjE3OSwwLjE3NCwwLjMxMywwLjQ2MSwwLjI5MywwLjY4NgoJCWMtMC4wODQsMS4wNjEtMC4yMDksMi4xMi0wLjM3NiwzLjE3MWMtMC4wMzMsMC4yMDgtMC4yODYsMC41MTEtMC40OTEsMC41NDljLTAuODE5LDAuMTQ3LTAuOTQ2LDAuNjg4LTEuMTQxLDEuMjM3CgkJYy0wLjI1OSwwLjcyMy0wLjUzNSwxLjQ0NS0wLjg2LDIuMTQ1Yy0wLjEwMywwLjIxOS0wLjM1NiwwLjQ0NS0wLjYwNiwwLjU0MWMtMS40NTcsMC41NDctMi45NCwxLjA0Ny00LjQwOCwxLjU3NQoJCWMtMS41NjEsMC41NjctNS42OTcsMy4xMDMtNy4yMzMsMy44MWMtMC45MDMsMC40MTgtMC40LDMuNzctMC40LDMuNzdjMTcuODY1LDAsMjcuNDg0LDAsNDUuMzQ3LDAKCQlDNDcuNjMzLDUwLDQ4LjI3LDQ2LjUyMSw0Ny4zNzQsNDYuMTI1eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="},Lnxd:function(A,e,a){"use strict";a.d(e,"a",(function(){return s}));var t=a("q1tI"),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=t.createContext&&t.createContext(l),i=function(){return(i=Object.assign||function(A){for(var e,a=1,t=arguments.length;a<t;a++)for(var l in e=arguments[a])Object.prototype.hasOwnProperty.call(e,l)&&(A[l]=e[l]);return A}).apply(this,arguments)},r=function(A,e){var a={};for(var t in A)Object.prototype.hasOwnProperty.call(A,t)&&e.indexOf(t)<0&&(a[t]=A[t]);if(null!=A&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(A);l<t.length;l++)e.indexOf(t[l])<0&&(a[t[l]]=A[t[l]])}return a};function s(A){return function(e){return t.createElement(o,i({attr:i({},A.attr)},e),function A(e){return e&&e.map((function(e,a){return t.createElement(e.tag,i({key:a},e.attr),A(e.child))}))}(A.child))}}function o(A){var e=function(e){var a,l=A.size||e.size||"1em";e.className&&(a=e.className),A.className&&(a=(a?a+" ":"")+A.className);var n=A.attr,s=A.title,o=r(A,["attr","title"]);return t.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,o,{className:a,style:i({color:A.color||e.color},e.style,A.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&t.createElement("title",null,s),A.children)};return void 0!==n?t.createElement(n.Consumer,null,(function(A){return e(A)})):e(l)}},Nsbk:function(A,e){function a(e){return A.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)},a(e)}A.exports=a},PJYZ:function(A,e){A.exports=function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}},QYFz:function(A,e){A.exports="/_next/static/images/2-8ad7e228f7fca18681041d8193489ff9.jpg"},Qetd:function(A,e,a){"use strict";var t=Object.assign.bind(Object);A.exports=t,A.exports.default=A.exports},RIqP:function(A,e,a){var t=a("Ijbi"),l=a("EbDI"),n=a("ZhPi"),i=a("Bnag");A.exports=function(A){return t(A)||l(A)||n(A)||i()}},RNiq:function(A,e,a){"use strict";a.r(e);var t=a("q1tI"),l=a.n(t),n=a("8Kt/"),i=a.n(n),r=a("Z9ss"),s=a.n(r),o=a("ma3e"),c=l.a.createElement;var u=function(A){var e={color:"#FF214F"};return c(l.a.Fragment,null,c("div",{className:"arlo_tm_popup_news scrollable"},c("a",{className:"closer",href:"#"},"Close"),c("div",{className:"container"},c("div",{className:"news_inner"}))),c("div",{className:"arlo_tm_topbar"},c("div",{className:"topbar_inner"},c("div",{className:"container"},c("div",{className:"topbar_in"},c("div",{className:"logo"},c("a",{href:"/"},c("img",{src:s.a,alt:"Logo"}))),c("div",{className:"trigger"},c("a",{href:"#"},c("span",{className:"menu"},c("i",{className:"fas fa-bars",style:{fontSize:"32px !important"}})),c("span",{className:"close"},c("i",{className:"fas fa-times",style:{fontSize:"32px !important"}}))))))),c("div",{className:"dropdown"},c("div",{className:"container"},c("div",{className:"dropdown_inner"},c("ul",null,c("li",null,c("a",{href:"#home"},c(o.g,{style:e}),"Home")),c("li",null,c("a",{href:"#about"},c(o.l,{style:e})," Sobre")),c("li",null,c("a",{href:"#services"},c(o.i,{style:e})," Tecnologias")),c("li",null,c("a",{href:"#portfolio"},c(o.k,{style:e})," Portf\xf3lio")),c("li",null,c("a",{href:"#experience"},c(o.b,{style:e})," Experi\xeancia")),c("li",null,c("a",{href:"#contact"},c(o.d,{style:e})," Contato"))))))),c("div",{className:"arlo_tm_leftpart"},c("div",{className:"inner"},c("div",{className:"logo"},c("a",{className:"dark",href:"#"},c("img",{src:"static/images/logo/logo.png",alt:"logo"})),c("a",{className:"light",href:"#"},c("img",{src:"static/images/logo/light.png",alt:"logo"}))),c("div",{className:"menu scrollable"},c("ul",null,c("li",null,c("a",{href:"#home"},c(o.g,{style:e})," Home")),c("li",null,c("a",{href:"#about"},c(o.l,{style:e})," Sobre")),c("li",null,c("a",{href:"#services"},c(o.i,{style:e})," Tecnologias")),c("li",null,c("a",{href:"#portfolio"},c(o.k,{style:e})," Portf\xf3lio")),c("li",null,c("a",{href:"#experience"},c(o.b,{style:e})," Experi\xeancia")),c("li",null,c("a",{href:"#contact"},c(o.d,{style:e})," Contato")))),c("div",{className:"bottom"},c("div",{className:"social"},c("ul",null,c("li",null,c("a",{href:"#"},c(o.e,{size:"22px"}))),c("li",null,c("a",{href:"#"},c(o.j,{size:"22px"}))),c("li",null,c("a",{href:"#"},c(o.h,{size:"22px"}))),c("li",null,c("a",{href:"#"},c(o.f,{size:"22px"})))))),c("div",{className:"resize"},c("a",{href:"#"},c("span",null))))))},m=l.a.createElement;var d=function(A){return m("div",{className:"arlo_tm_preloader"},m("div",{className:"spinner_wrap"},m("div",{className:"spinner"})))},M=a("LeFl"),N=a.n(M),g=a("Gpsl"),f=a.n(g),v=l.a.createElement;var p=function(A){return v("div",{className:"arlo_tm_section",id:"home"},v("div",{className:"arlo_tm_hero_header"},v("div",{className:"hero_image jarallax","data-img-url":N.a,"data-speed":0}),v("div",{className:"overlay"}),v("div",{className:"hero_content"},v("div",{className:"image_wrap"},v("img",{src:f.a,alt:"Alex Ricardo"}),v("div",{className:"main","data-img-url":f.a})),v("div",{className:"name_holder"},v("h3",null,"Alex ",v("span",null,"Ricardo"))),v("div",{className:"text_typing"},v("p",null," ",v("span",{style:{color:"#FF214F"}},"Procurando um "),v("span",{className:"arlo_tm_animation_text_word"})," "))),v("div",{className:"arlo_tm_arrow_wrap bounce anchor"},v("a",{href:"#about"},v(o.a,{size:30})))))},y=a("x7jv"),w=a.n(y),j=l.a.createElement;var L=function(A){return j("div",{className:"arlo_tm_section",id:"about"},j("div",{className:"arlo_tm_about_wrap_all"},j("div",{className:"arlo_tm_about"},j("div",{className:"container"},j("div",{className:"arlo_title_holder"},j("span",null,"Informa\xe7\xe3o principal"),j("h3",null,"Sobre")),j("div",{className:"about_inner"},j("div",{className:"leftbox"},j("div",{className:"about_image_wrap parallax","data-relative-input":"true"},j("div",{className:"image layer","data-depth":"0.1"},j("img",{src:w.a,alt:"Card"}),j("div",{className:"inner","data-img-url":f.a})),j("div",{className:"border layer","data-depth":"0.2"},j("img",{src:"../static/images/about/550x650.jpg",alt:"card"}),j("div",{className:"inner"})))),j("div",{className:"rightbox"},j("div",{className:"about_title"}),j("div",{className:"text"},j("p",null,"Meu nome \xe9 ",j("span",null,"Alex Ricardo")," e eu desenvolvo/programo sites. Me considero um v\xedciado e apaixonado por c\xf3digos! Eu venho projetando e codificando na web desde 2017."),j("p",null,"Minha primeira experi\xeancia com as tecnologias web apareceu quando eu estudava no Instituto Federal de educa\xe7\xe3o, ci\xeancia e tecnologia de Pernambuco(IFPE) e estava cursando T\xe9cnico em inform\xe1tica para Internet."),j("p",null,"No decorrer da minha carreira da minha carreira profissional, descobrir novas maneiras de desenvolver funcionalidades na web. Eventualmente, isso me levou a construir websites elegantes, r\xe1pidos, responsivos e com usabilidade."),j("p",null,"Aprimorei meus conhecimentos aprendendo diversas tecnologias atuais que s\xe3o utilizadas por diversas empresas(Facebook, Uber, Instagram, Spotify..) para auxiliar nas cria\xe7\xf5es dos websites, at\xe9 ent\xe3o construir alguns projetos e os mesmos podem ser encontrados nesse portf\xf3lio ou no meu ",j("span",null,j("a",{style:{color:"#fff"},href:"https://github.com/Csalex123",target:"_blank"},"GitHub.")))),j("div",{className:"buttons"},j("ul",null,j("li",null,j("a",{href:"../static/pdf/alexricardo.pdf",download:!0},j("span",null,j(o.c,null)," Baixar Curr\xedculo"))),j("li",null,j("a",{href:"#contact"},j("span",null,j(o.d,null)," Entrar em contato")))))))))))},h=l.a.createElement;var D=function(A){var e={textAlign:"center"},a={color:"#FF214F"};return h("div",{className:"arlo_tm_section",id:"services"},h("div",{className:"arlo_tm_services"},h("div",{className:"container"},h("div",{className:"arlo_title_holder"},h("span",null,"Algumas tecnologias que tenho conhecimento"),h("h3",null,"Tecnologias")),h("div",{className:"service_inner"},h("ul",null,h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fab fa-html5 fa-3x",style:a}),h("h3",null,"HTML 5")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fab fa-css3 fa-3x",style:a}),h("h3",null,"CSS 3")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fab fa-js fa-3x",style:a}),h("h3",null,"JavaScript")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fab fa-react fa-3x",style:a}),h("h3",null,"React JS")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fas fa-file-code fa-3x",style:a}),h("h3",null,"NEXT.js")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fas fa-code fa-3x",style:a}),h("h3",null,"Jquery")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fab fa-sass fa-3x",style:a}),h("h3",null,"Sass")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fab fa-bootstrap fa-3x",style:a}),h("h3",null,"Bootstrap")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fas fa-database fa-3x",style:a}),h("h3",null,"SQL")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fab fa-node fa-3x",style:a}),h("h3",null,"Node.JS")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fab fa-php fa-3x",style:a}),h("h3",null,"PHP")))),h("li",null,h("div",{className:"inner"},h("div",{style:e},h("i",{className:"fab fa-java fa-3x",style:a}),h("h3",null,"Java")))))))))},b=l.a.createElement;var C=function(A){var e=A.nameClass,a=A.category,t=A.title,n=A.img;return b(l.a.Fragment,null,b("li",{className:e},b("div",{className:"inner"},b("div",{className:"entry arlo_tm_portfolio_animation_wrap","data-title":t,"data-category":a},b("a",{className:"zoom",href:n},b("img",{src:n,alt:t}),b("div",{className:"main_image","data-img-url":n}))))))},I=a("QYFz"),E=a.n(I),x=l.a.createElement;var T=function(A){return x("div",{className:"arlo_tm_section",id:"portfolio"},x("div",{className:"arlo_tm_portfolio"},x("div",{className:"container"},x("div",{className:"arlo_title_holder"},x("span",null,"Alguns projetos que j\xe1 desenvolvi"),x("h3",null,"Portf\xf3lio")),x("div",{className:"portfolio_inner"},x("div",{className:"arlo_tm_portfolio_titles"}),x("div",{className:"portfolio_filter"},x("ul",null,x("li",null,x("a",{href:"#","data-filter":".berlim_plus"},"Berlim Plus")),x("li",null,x("a",{href:"#","data-filter":".bresults"},"Bresults")),x("li",null,x("a",{href:"#","data-filter":".coudelaria"},"Coudelaria")),x("li",null,x("a",{href:"#","data-filter":".pedras"},"Pedras do Patacho")),x("li",null,x("a",{href:"#","data-filter":".segsat"},"Segsat")),x("li",null,x("a",{href:"#","data-filter":".horttas"},"Horttas")),x("li",null,x("a",{href:"#","data-filter":".living"},"Living")))),x("div",{className:"portfolio_list"},x("ul",{className:"gallery_zoom"},x(C,{nameClass:"berlim_plus",category:"Educa\xe7\xe3o",title:"Berlim Plus",img:E.a}),x(C,{nameClass:"bresults",category:"Marketing Digital",title:"Bresults",img:E.a}),x(C,{nameClass:"coudelaria",category:"Eventos",title:"Coudelaria",img:E.a}),x(C,{nameClass:"pedras",category:"Hotel",title:"Pedras do Patacho",img:E.a}),x(C,{nameClass:"segsat",category:"Segsat Plus",title:"Seguro para autom\xf3veis ",img:E.a}),x(C,{nameClass:"horttas",category:"Ecologia",title:"Horttas ",img:E.a}),x(C,{nameClass:"living",category:"E-commerce",title:"Living ",img:E.a})))))))},z=a("LirA"),S=a.n(z),O=a("nImj"),Y=a.n(O),Q=l.a.createElement;var k=function(A){return Q("div",{className:"arlo_tm_section",id:"experience",style:{backgroundColor:"#191919"}},Q("div",{className:"arlo_tm_timeline"},Q("div",{className:"container"},Q("div",{className:"arlo_title_holder"},Q("span",null),Q("h3",null,"Experi\xeancia")),Q("div",{className:"timeline_inner"},Q("div",{className:"left"},Q("ul",null,Q("li",null,Q("div",{className:"inner"},Q("img",{className:"svg",src:S.a,alt:"Degree"}),Q("p",{className:"year"},"2019 - 2021"),Q("h3",{className:"title"},"Centro Universit\xe1rio Maur\xedcio de Nassau"),Q("p",{className:"text"},"Gradua\xe7\xe3o em an\xe1lise e Desenvolvimento de Software"))),Q("li",null,Q("div",{className:"inner"},Q("img",{className:"svg",src:S.a,alt:"Degree"}),Q("p",{className:"year"},"2017 - 2018"),Q("h3",{className:"title"},"Instituto Federal de Educa\xe7\xe3o, Ci\xeancia e Tecnologia de Pernambuco"),Q("p",{className:"text"},"T\xe9cnico em Inform\xe1tica para Internet"))))),Q("div",{className:"right"},Q("ul",null,Q("li",null,Q("div",{className:"inner"},Q("img",{className:"svg",src:Y.a,alt:"Portfolio"}),Q("p",{className:"year"},"2019 - Atual"),Q("h3",{className:"title"},"Programador WEB"),Q("p",{className:"text"},"Atualmente trabalho em uma Ag\xeancia de Marketing Digital(Berlim Digital) desenvolvendo Landing Pages, Websites e E-commercers ")))))))))},R=l.a.createElement;var _=function(A){var e=Object(t.useState)(""),a=e[0],l=e[1],n=Object(t.useState)(""),i=n[0],r=n[1],s=Object(t.useState)(""),o=s[0],c=s[1],u={color:"#FF214F"};return R("div",{className:"arlo_tm_section",id:"contact"},R("div",{className:"arlo_tm_contact",style:{backgroundColor:"#101010"}},R("div",{className:"container"},R("div",{className:"arlo_title_holder"},R("span",null,"Alguma d\xfavida? Entre em contato"),R("h3",null,"Contato")),R("div",{className:"contact_inner"},R("div",{className:"short_list"},R("ul",null,R("li",null,R("div",{style:{textAlign:"center"}},R("i",{className:"fas fa-map-marker-alt fa-2x",style:u}),R("h3",null,"Localiza\xe7\xe3o"),R("p",null,"Brasil - Pernambuco"))),R("li",null,R("div",{style:{textAlign:"center"}},R("i",{className:"fas fa-envelope-open-text fa-2x",style:u}),R("h3",null,"Email"),R("p",null,"alex.ricardo1999hotmail.com"))),R("li",null,R("div",{style:{textAlign:"center"}},R("i",{className:"fab fa-whatsapp fa-2x",style:u}),R("h3",null," Whatsapp"),R("p",null,"+55 (81) 98572-4176 "))))),R("div",{className:"fields"},R("form",{onSubmit:function(A){A.preventDefault();var e={nome:a,email:i,mensagem:o};console.log(e)},className:"contact_form"},R("div",{className:"returnmessage","data-success":"Your message has been received, We will contact you soon."}),R("div",{className:"empty_notice"},R("span",null,"Please Fill Required Fields")),R("div",{className:"first"},R("ul",null,R("li",null,R("input",{type:"text",placeholder:"Nome",value:a,onChange:function(A){return l(A.target.value)},required:!0})),R("li",null,R("input",{type:"email",placeholder:"Email",value:i,onChange:function(A){return r(A.target.value)},required:!0})))),R("div",{className:"last"},R("textarea",{placeholder:"Mensagem",value:o,onChange:function(A){return c(A.target.value)},required:!0})),R("div",{className:"arlo_tm_button"},R("button",{type:"submit",style:{border:"none",outline:"none",cursor:"pointer",color:"#fff",backgroundColor:"#ff214f",display:"inline-block",padding:"10px 45px",fontFamily:"Montserrat",position:"relative",overflow:"hidden"}},"Enviar Formul\xe1rio"))))))))},P=l.a.createElement;var Z=function(A){var e=(new Date).getFullYear();return P("div",{className:"arlo_tm_footer",style:{backgroundColor:"#191919"}},P("div",{className:"container"},P("div",{className:"footer_inner"},P("div",{className:"copy"},P("p",null,"Copyright \xa9 ",e," -  Alex Ricardo")),P("div",{className:"top"},P("a",{className:"arlo_tm_totop",href:"#"})))))},B=l.a.createElement;e.default=function(A){return B(l.a.Fragment,null,B(i.a,null,B("title",null,"Alex Ricardo")),B("body",{className:"dark"},B(d,null),B("div",{className:"arlo_tm_all_wrap"},B("div",{className:"wrapper_inner"},B(u,null),B("div",{className:"arlo_tm_rightpart"},B("div",{className:"rightpart_inner"},B(p,null),B(L,null),B(D,null),B(T,null),B(k,null),B(_,null),B(Z,null)))))))}},SksO:function(A,e){function a(e,t){return A.exports=a=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A},a(e,t)}A.exports=a},W8MJ:function(A,e){function a(A,e){for(var a=0;a<e.length;a++){var t=e[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(A,t.key,t)}}A.exports=function(A,e,t){return e&&a(A.prototype,e),t&&a(A,t),A}},WkPL:function(A,e){A.exports=function(A,e){(null==e||e>A.length)&&(e=A.length);for(var a=0,t=new Array(e);a<e;a++)t[a]=A[a];return t}},Xuae:function(A,e,a){"use strict";var t=a("lwsE"),l=a("PJYZ"),n=a("W8MJ"),i=a("7W2i"),r=a("a1gu"),s=a("Nsbk"),o=a("RIqP");function c(A){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(A){return!1}}();return function(){var a,t=s(A);if(e){var l=s(this).constructor;a=Reflect.construct(t,arguments,l)}else a=t.apply(this,arguments);return r(this,a)}}e.__esModule=!0,e.default=void 0;var u=a("q1tI"),m=!1;e.default=function(){var A,e=new Set;function a(a){A=a.props.reduceComponentsToState(o(e),a.props),a.props.handleStateChange&&a.props.handleStateChange(A)}return(function(r){i(o,r);var s=c(o);function o(A){var n;return t(this,o),n=s.call(this,A),m&&(e.add(l(n)),a(l(n))),n}return n(o,null,[{key:"rewind",value:function(){var a=A;return A=void 0,e.clear(),a}}]),n(o,[{key:"componentDidMount",value:function(){e.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),a(this)}},{key:"render",value:function(){return null}}]),o}(u.Component))}},Z9ss:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA/CAYAAAC/36X0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwMThFRTQ1MEI4RjExRUE4MkFBRjhFMzg1QzhEMUQ5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwMThFRTQ2MEI4RjExRUE4MkFBRjhFMzg1QzhEMUQ5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjAxOEVFNDMwQjhGMTFFQTgyQUFGOEUzODVDOEQxRDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjAxOEVFNDQwQjhGMTFFQTgyQUFGOEUzODVDOEQxRDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qWJ4KAAAEK0lEQVR42uSba0gUURSAb2qlidubxF5CmSJR9KBCwoy0hwVBT6JErDApIiKDIOiNgdSfCpSKokhKAitKLCryR+/3j94FRvajsoweJIumnYNnYVpm1rln5u7M7F74WFh2z73zzc49956ZFcJdbRKwIZwddnR0CLe1S0ALMCxaJeTgmIjKaJXwRCMBmRJtEtYECUCuRZOEJOCtjgRkUbRIKDMQgLwhSREtYQTwI4QEZHukSzjVhQDkOzAqUiVkmxCgPGU6LeGuhIR2YGKkSSiREBDgSiRJGAB8YEhAlkSKhDKmgEDK7O51CenANwsSkK1elhADVFkUgHwBhntVQo4NAgIc9qKEWOCejRJagQlek7DKRgEBar0koQ/QqEACMt8rEsoVCUBeAT3dLmEs4FcoAdnmdglVigUgn4WFwqxqCVPDICBAhVsl3A6jhN/cXaZKCauZB3MeOMb8bh3Qwy0S+jJTIi6ARgL9gE9MEQvcIoGbEqs1MXYxYzyX/TWokIBnsokxeLz1lqaJ0xtoYIoodVrCaebAd+jEKmTGagZSnZIwg2qBnFWfzyDmDaaIE05IiANuMgdcHCJuFjMmnozJ4ZawgjnYxybKZSeZsWvCKcFnoXA6z0T8VOZki+SHS8I+5gDPSfTBTZnPukqZdkgYQ0tWzsIoQyceXsezdN7vBbxjitioWkI1c2D7DeLVA0+pKBvcii3sMgeqkjDdwqCSdeJN03xmpUGf3DplpQoJCcAd5oDWGcR8oElvjbQHsWt7/gsYZ7eEIgspUa8ctlbzmTZ6LTfo+ziz74t2SkiykBIX6sRLAd7rfLbN4OzhhPqH2f9MuyTsZQ7guk6sGFrUhEpx8TaO4T7dA/lPQjdJAXgWHgKJstt2YDzN/NqGObyAZu+vQVkB+/grOp9maQ76XjLNIUMYJ3E9cMjKL6GGeQYOKKhblDDH0qRNmbIS8pi7RDzDgxWV8bgps4IroZ7Z4SaFxdw8qylTRgJ3l/iSaoYqG3fVegHnILMTo48OJkVycHjpLAfOBL2fCyzWTHzaTNFKG7IXEv2k06zvYwjMBwl1KgunV4Pi4MboLNUTba0YQ9vDHONrYFBXwTOBn4zgH4GhVHGaDVyWWODMZUjA2R6fkvdTP2bB/rbEmdjHJzEuA7yB0p9ec01+D7fkR0TnnSvZhmlvGa1jWiTWLvE0SYaceTl3lPG6fkTXu8y6Pls40EJlh0QLu0TZSnOBcLCFklCk+ODxyfadZiYlpyRgXm9QdPDttPQeLVzSjCTsViQAawlLhcuanoQ0E3lcFvy/wmbReX9ReEFCrbD/CZIM4eIWLGGOjQdfz1z0OCoBF023bDh4nFBLhYeaVkKhsP6Y7VERxr/32i0hk8pXVh6vzRIebSghjnZ3sZTCYkx+N4HW3AdpP+8XHm7/BBgAtlXefLG7J/QAAAAASUVORK5CYII="},ZhPi:function(A,e,a){var t=a("WkPL");A.exports=function(A,e){if(A){if("string"===typeof A)return t(A,e);var a=Object.prototype.toString.call(A).slice(8,-1);return"Object"===a&&A.constructor&&(a=A.constructor.name),"Map"===a||"Set"===a?Array.from(A):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(A,e):void 0}}},a1gu:function(A,e,a){var t=a("cDf5"),l=a("PJYZ");A.exports=function(A,e){return!e||"object"!==t(e)&&"function"!==typeof e?l(A):e}},cDf5:function(A,e){function a(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?A.exports=a=function(A){return typeof A}:A.exports=a=function(A){return A&&"function"===typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},a(e)}A.exports=a},lwAK:function(A,e,a){"use strict";var t;e.__esModule=!0,e.AmpStateContext=void 0;var l=((t=a("q1tI"))&&t.__esModule?t:{default:t}).default.createContext({});e.AmpStateContext=l},lwsE:function(A,e){A.exports=function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}},nImj:function(A,e){A.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIC0zMSA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yMTEgMjQwaDkwdjMwaC05MHptMCAwIi8+PHBhdGggZD0ibTQxNS4zNzg5MDYgMjcwaC04NC4zNzg5MDZ2MTVjMCA4LjI4OTA2Mi02LjcxMDkzOCAxNS0xNSAxNWgtMTIwYy04LjI4OTA2MiAwLTE1LTYuNzEwOTM4LTE1LTE1di0xNWgtODQuMzc4OTA2Yy0xOS4zOTQ1MzIgMC0zNi41NDY4NzUtMTIuMzYzMjgxLTQyLjY4NzUtMzAuNzYxNzE5bC01My45MzM1OTQtMTYxLjgyODEyNXYzMjcuNTg5ODQ0YzAgMjQuODEyNSAyMC4xODc1IDQ1IDQ1IDQ1aDQyMmMyNC44MTI1IDAgNDUtMjAuMTg3NSA0NS00NXYtMzI3LjU3ODEyNWwtNTMuOTM3NSAxNjEuODE2NDA2Yy02LjEzNjcxOSAxOC4zOTg0MzgtMjMuMjg5MDYyIDMwLjc2MTcxOS00Mi42ODM1OTQgMzAuNzYxNzE5em0wIDAiLz48cGF0aCBkPSJtMzE2IDBoLTEyMGMtMjQuODEyNSAwLTQ1IDIwLjE4NzUtNDUgNDV2MTVoLTEyNS4xOTE0MDZsNTYuNTc0MjE4IDE2OS43NDYwOTRjMi4wNTA3ODIgNi4xMzY3MTggNy43NzczNDQgMTAuMjUzOTA2IDE0LjIzODI4MiAxMC4yNTM5MDZoODQuMzc4OTA2di0xNWMwLTguMjg5MDYyIDYuNzEwOTM4LTE1IDE1LTE1aDEyMGM4LjI4OTA2MiAwIDE1IDYuNzEwOTM4IDE1IDE1djE1aDg0LjM3ODkwNmM2LjQ2MDkzOCAwIDEyLjE4NzUtNC4xMTcxODggMTQuMjM4MjgyLTEwLjI1MzkwNmw1Ni41NzgxMjQtMTY5Ljc0NjA5NGgtMTI1LjE5NTMxMnYtMTVjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMzUgNjB2LTE1YzAtOC4yNzczNDQgNi43MjI2NTYtMTUgMTUtMTVoMTIwYzguMjc3MzQ0IDAgMTUgNi43MjI2NTYgMTUgMTV2MTV6bTAgMCIvPjwvc3ZnPg=="},vlRD:function(A,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])},x7jv:function(A,e){A.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAxAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNDVDMDlGQTRFMDcxMUU5QkY0NENEQjI0NDA2NzBBOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNDVDMDlGQjRFMDcxMUU5QkY0NENEQjI0NDA2NzBBOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE0NUMwOUY4NEUwNzExRTlCRjQ0Q0RCMjQ0MDY3MEE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE0NUMwOUY5NEUwNzExRTlCRjQ0Q0RCMjQ0MDY3MEE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQACAYGBgYGCAYGCAwIBwgMDgsICAsOEA0NDg0NEBEMDg4ODgwREBMUFRQTEBkZGxsZGSUkJCQlKSkpKSkpKSkpKQEJCAgJCgkLCgoLDgwODA4SDg4ODhIUDg4PDg4UGhIQEBAQEhoXGBUVFRgXHBwaGhwcIyMiIyMpKSkpKSkpKSkp/8AAEQgCigImAwEiAAIRAQMRAf/EAEsAAQEAAAAAAAAAAAAAAAAAAAAIAQEAAAAAAAAAAAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="}},[["vlRD",0,1,3]]]);