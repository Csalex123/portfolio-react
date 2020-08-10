module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_about_550x650_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/images/about/550x650.jpg */ "./static/images/about/550x650.jpg");
/* harmony import */ var _static_images_about_550x650_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_about_550x650_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_about_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/images/about/3.jpg */ "./static/images/about/3.jpg");
/* harmony import */ var _static_images_about_3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_about_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function about(props) {
  return __jsx("div", {
    className: "arlo_tm_section",
    id: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "arlo_tm_about_wrap_all",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "arlo_tm_about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "arlo_title_holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, "Informa\xE7\xE3o principal"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, "Sobre")), __jsx("div", {
    className: "about_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "leftbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "about_image_wrap parallax",
    "data-relative-input": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "image layer",
    "data-depth": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: _static_images_about_550x650_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "inner",
    "data-img-url": _static_images_about_3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "border layer",
    "data-depth": "0.2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "../static/images/about/550x650.jpg",
    alt: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "rightbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "about_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  }, "Meu nome \xE9 ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 51
    }
  }, "Alex Ricardo"), " e eu desenvolvo/programo sites. Me considero um v\xEDciado e apaixonado por c\xF3digos! Eu venho projetando e codificando na web desde 2017."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 37
    }
  }, "Minha primeira experi\xEAncia com as tecnologias web apareceu quando eu estudava no Instituto Federal de educa\xE7\xE3o, ci\xEAncia e tecnologia de Pernambuco(IFPE) e estava cursando T\xE9cnico em inform\xE1tica para Internet."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }, "No decorrer da minha carreira da minha carreira profissional, descobrir novas maneiras de desenvolver funcionalidades na web. Eventualmente, isso me levou a construir websites elegantes, r\xE1pidos, responsivos e com usabilidade."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 37
    }
  }, "Aprimorei meus conhecimentos aprendendo diversas tecnologias atuais que s\xE3o utilizadas por diversas empresas(Facebook, Uber, Instagram, Spotify..) para auxiliar nas cria\xE7\xF5es dos websites, at\xE9 ent\xE3o construir alguns projetos e os mesmos podem ser encontrados nesse portf\xF3lio ou no meu ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 324
    }
  }, __jsx("a", {
    style: {
      color: "#fff"
    },
    href: "https://github.com/Csalex123",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 330
    }
  }, "GitHub.")))), __jsx("div", {
    className: "buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "../static/pdf/alexricardo.pdf",
    download: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 45
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 95
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCloudDownloadAlt"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 101
    }
  }), " Baixar Curr\xEDculo"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 45
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 64
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaEnvelope"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 70
    }
  }), " Entrar em contato")))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./components/capa.js":
/*!****************************!*\
  !*** ./components/capa.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_slider_code_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/images/slider/code.gif */ "./static/images/slider/code.gif");
/* harmony import */ var _static_images_slider_code_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_slider_code_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_about_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/images/about/3.jpg */ "./static/images/about/3.jpg");
/* harmony import */ var _static_images_about_3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_about_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\capa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function capa(props) {
  return __jsx("div", {
    className: "arlo_tm_section",
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "arlo_tm_hero_header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "hero_image jarallax",
    "data-img-url": _static_images_slider_code_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
    "data-speed": 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "hero_content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "image_wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: _static_images_about_3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Alex Ricardo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "main",
    "data-img-url": _static_images_about_3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "name_holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "Alex ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 34
    }
  }, "Ricardo"))), __jsx("div", {
    className: "text_typing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, " ", __jsx("span", {
    style: {
      color: '#FF214F'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, "Procurando um "), __jsx("span", {
    className: "arlo_tm_animation_text_word",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 85
    }
  }), " "))), __jsx("div", {
    className: "arlo_tm_arrow_wrap bounce anchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaAngleDown"], {
    size: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 39
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (capa);

/***/ }),

/***/ "./components/contact.js":
/*!*******************************!*\
  !*** ./components/contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function contact(props) {
  const {
    0: nome,
    1: setNome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: mensagem,
    1: setMensagem
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const corIcon = {
    color: "#FF214F"
  };
  const button = {
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#ff214f",
    display: "inline-block",
    padding: "10px 45px",
    fontFamily: "Montserrat",
    position: "relative",
    overflow: "hidden"
  };

  function handleContato(e) {
    e.preventDefault();
    const data = {
      nome,
      email,
      mensagem
    };
    console.log(data);
  }

  return __jsx("div", {
    className: "arlo_tm_section",
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "arlo_tm_contact",
    style: {
      backgroundColor: "#101010"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "arlo_title_holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, "Alguma d\xFAvida? Entre em contato"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "Contato")), __jsx("div", {
    className: "contact_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "short_list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-map-marker-alt fa-2x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 41
    }
  }, "Localiza\xE7\xE3o"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 41
    }
  }, "Brasil - Pernambuco"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-envelope-open-text fa-2x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }, "Email"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, "alex.ricardo1999hotmail.com"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-whatsapp fa-2x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  }, " Whatsapp"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 41
    }
  }, "+55 (81) 98572-4176 "))))), __jsx("div", {
    className: "fields",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("form", {
    onSubmit: handleContato,
    className: "contact_form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "returnmessage",
    "data-success": "Your message has been received, We will contact you soon.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "empty_notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 63
    }
  }, "Please Fill Required Fields")), __jsx("div", {
    className: "first",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 41
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Nome",
    value: nome,
    onChange: e => setNome(e.target.value),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 45
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  }, __jsx("input", {
    type: "email",
    placeholder: "Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 45
    }
  })))), __jsx("div", {
    className: "last",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx("textarea", {
    placeholder: "Mensagem",
    value: mensagem,
    onChange: e => setMensagem(e.target.value),
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "arlo_tm_button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, __jsx("button", {
    type: "submit",
    style: button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, "Enviar Formul\xE1rio"))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (contact);

/***/ }),

/***/ "./components/experience.js":
/*!**********************************!*\
  !*** ./components/experience.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_svg_degree_5_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/images/svg/degree-5.svg */ "./static/images/svg/degree-5.svg");
/* harmony import */ var _static_images_svg_degree_5_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_svg_degree_5_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_svg_portfolio_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/images/svg/portfolio.svg */ "./static/images/svg/portfolio.svg");
/* harmony import */ var _static_images_svg_portfolio_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_svg_portfolio_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\experience.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function experience(props) {
  return __jsx("div", {
    className: "arlo_tm_section",
    id: "experience",
    style: {
      backgroundColor: "#191919"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "arlo_tm_timeline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "arlo_title_holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, "Experi\xEAncia")), __jsx("div", {
    className: "timeline_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "svg",
    src: _static_images_svg_degree_5_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Degree",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "year",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 41
    }
  }, "2019 - 2021"), __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 41
    }
  }, "Centro Universit\xE1rio Maur\xEDcio de Nassau"), __jsx("p", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 41
    }
  }, "Gradua\xE7\xE3o em an\xE1lise e Desenvolvimento de Software"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "svg",
    src: _static_images_svg_degree_5_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Degree",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "year",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 41
    }
  }, "2017 - 2018"), __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 41
    }
  }, "Instituto Federal de Educa\xE7\xE3o, Ci\xEAncia e Tecnologia de Pernambuco"), __jsx("p", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 41
    }
  }, "T\xE9cnico em Inform\xE1tica para Internet"))))), __jsx("div", {
    className: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, __jsx("img", {
    className: "svg",
    src: _static_images_svg_portfolio_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 41
    }
  }), __jsx("p", {
    className: "year",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }, "2019 - Atual"), __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 41
    }
  }, "Programador WEB"), __jsx("p", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }, "Atualmente trabalho em uma Ag\xEAncia de Marketing Digital(Berlim Digital) desenvolvendo Landing Pages, Websites e E-commercers ")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (experience);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function footer(props) {
  const currentYear = new Date().getFullYear();
  return __jsx("div", {
    className: "arlo_tm_footer",
    style: {
      backgroundColor: "#191919"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "copy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, "Copyright \xA9 ", currentYear, " -  Alex Ricardo")), __jsx("div", {
    className: "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "arlo_tm_totop",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./components/load.js":
/*!****************************!*\
  !*** ./components/load.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\load.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function load(props) {
  return __jsx("div", {
    className: "arlo_tm_preloader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "spinner_wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "spinner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (load);

/***/ }),

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_logo_mobile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/images/logo/mobile.png */ "./static/images/logo/mobile.png");
/* harmony import */ var _static_images_logo_mobile_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_mobile_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function menu(props) {
  const corIcon = {
    color: "#FF214F"
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "arlo_tm_popup_news scrollable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "closer",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Close"), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "news_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "arlo_tm_topbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "topbar_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "topbar_in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _static_images_logo_mobile_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 45
    }
  }))), __jsx("div", {
    className: "trigger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-bars",
    style: {
      fontSize: '32px !important'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 60
    }
  })), __jsx("span", {
    className: "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-times",
    style: {
      fontSize: '32px !important'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 61
    }
  }))))))), __jsx("div", {
    className: "dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "dropdown_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaHome"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 53
    }
  }), "Home")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaUserGraduate"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 54
    }
  }), " Sobre")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLaptopCode"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 57
    }
  }), " Tecnologias")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaNetworkWired"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 58
    }
  }), " Portf\xF3lio")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#experience",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClipboardCheck"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 59
    }
  }), " Experi\xEAncia")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaEnvelope"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 56
    }
  }), " Contato"))))))), __jsx("div", {
    className: "arlo_tm_leftpart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "dark",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "static/images/logo/logo.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 54
    }
  })), __jsx("a", {
    className: "light",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "static/images/logo/light.png",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 55
    }
  }))), __jsx("div", {
    className: "menu scrollable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaHome"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 49
    }
  }), " Home")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaUserGraduate"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 50
    }
  }), " Sobre")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLaptopCode"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 53
    }
  }), " Tecnologias")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaNetworkWired"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 54
    }
  }), " Portf\xF3lio")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#experience",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaClipboardCheck"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 55
    }
  }), " Experi\xEAncia")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaEnvelope"], {
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 52
    }
  }), " Contato")))), __jsx("div", {
    className: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "social",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebook"], {
    size: "22px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 49
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {
    size: "22px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 49
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
    size: "22px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 49
    }
  }))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
    size: "22px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 49
    }
  })))))), __jsx("div", {
    className: "resize",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./components/portfolio.js":
/*!*********************************!*\
  !*** ./components/portfolio.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\portfolio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function portfolio(props) {
  return __jsx("div", {
    className: "arlo_tm_section",
    id: "portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "arlo_tm_portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "arlo_title_holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 25
    }
  }, "Creative Works"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, "Portfolio")), __jsx("div", {
    className: "portfolio_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "arlo_tm_portfolio_titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "portfolio_filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    className: "current",
    "data-filter": "*",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 37
    }
  }, "All")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    "data-filter": ".video",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 37
    }
  }, "Video")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    "data-filter": ".animation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 37
    }
  }, "Animation")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "#",
    "data-filter": ".image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 37
    }
  }, "Image")))), __jsx("div", {
    className: "portfolio_list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "gallery_zoom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: "video",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry arlo_tm_portfolio_animation_wrap",
    "data-title": "Popup Video",
    "data-category": "Video",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "popup-youtube",
    href: "https://www.youtube.com/watch?v=ICr_bOuM9Zo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "img/portfolio/600x600.jpg",
    alt: "portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "main_image",
    "data-img-url": "img/portfolio/1.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 49
    }
  }))))), __jsx("li", {
    className: "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry arlo_tm_portfolio_animation_wrap",
    "data-title": "Popup Image",
    "data-category": "Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "zoom",
    href: "img/portfolio/2.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "img/portfolio/600x600.jpg",
    alt: "portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "main_image",
    "data-img-url": "img/portfolio/2.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 49
    }
  }))))), __jsx("li", {
    className: "animation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry arlo_tm_portfolio_animation_wrap",
    "data-title": "Animate Image",
    "data-category": "Animation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "zoom",
    href: "img/portfolio/8.webp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "img/portfolio/600x600.jpg",
    alt: "portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "main_image",
    "data-img-url": "img/portfolio/8.webp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 49
    }
  }))))), __jsx("li", {
    className: "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry arlo_tm_portfolio_animation_wrap",
    "data-title": "Popup Image",
    "data-category": "Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "zoom",
    href: "img/portfolio/4.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "img/portfolio/600x600.jpg",
    alt: "portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "main_image",
    "data-img-url": "img/portfolio/4.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 49
    }
  }))))), __jsx("li", {
    className: "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry arlo_tm_portfolio_animation_wrap",
    "data-title": "Popup Image",
    "data-category": "Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "zoom",
    href: "img/portfolio/5.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "img/portfolio/600x600.jpg",
    alt: "portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "main_image",
    "data-img-url": "img/portfolio/5.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 49
    }
  }))))), __jsx("li", {
    className: "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "entry arlo_tm_portfolio_animation_wrap",
    "data-title": "Popup Image",
    "data-category": "Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "zoom",
    href: "img/portfolio/6.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 45
    }
  }, __jsx("img", {
    src: "img/portfolio/600x600.jpg",
    alt: "portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "main_image",
    "data-img-url": "img/portfolio/6.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 49
    }
  })))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (portfolio);

/***/ }),

/***/ "./components/tecnologia.js":
/*!**********************************!*\
  !*** ./components/tecnologia.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\tecnologia.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function service(props) {
  const textCenter = {
    textAlign: "center"
  };
  const corIcon = {
    color: "#FF214F"
  };
  return __jsx("div", {
    className: "arlo_tm_section",
    id: "services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "arlo_tm_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "arlo_title_holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "Algumas tecnologias que tenho conhecimento"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "Tecnologias")), __jsx("div", {
    className: "service_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-html5 fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 41
    }
  }, "HTML 5")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-css3 fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  }, "CSS 3")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-js fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }, "JavaScript")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-react fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }, "React JS")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-react fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  }, "React Native")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-code fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }, "Jquery")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-sass fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 41
    }
  }, "Sass")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-bootstrap fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, "Boostrap")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-database fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  }, "SQL")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-node fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }, "Node.JS")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-php fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 41
    }
  }, "PHP")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-java fa-3x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 41
    }
  }, "Java")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (service);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/load */ "./components/load.js");
/* harmony import */ var _components_capa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/capa */ "./components/capa.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about */ "./components/about.js");
/* harmony import */ var _components_tecnologia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tecnologia */ "./components/tecnologia.js");
/* harmony import */ var _components_portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/portfolio */ "./components/portfolio.js");
/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/experience */ "./components/experience.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/contact */ "./components/contact.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Alex Ricardo")), __jsx("body", {
    className: "dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_components_load__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "arlo_tm_all_wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "wrapper_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "arlo_tm_rightpart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "rightpart_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx(_components_capa__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }), __jsx(_components_about__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }), __jsx(_components_tecnologia__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }), __jsx(_components_portfolio__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }), __jsx(_components_experience__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./static/images/about/3.jpg":
/*!***********************************!*\
  !*** ./static/images/about/3.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-887b234f18cb2a4ae2b4234240755ae4.jpg";

/***/ }),

/***/ "./static/images/about/550x650.jpg":
/*!*****************************************!*\
  !*** ./static/images/about/550x650.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAxAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNDVDMDlGQTRFMDcxMUU5QkY0NENEQjI0NDA2NzBBOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNDVDMDlGQjRFMDcxMUU5QkY0NENEQjI0NDA2NzBBOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE0NUMwOUY4NEUwNzExRTlCRjQ0Q0RCMjQ0MDY3MEE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE0NUMwOUY5NEUwNzExRTlCRjQ0Q0RCMjQ0MDY3MEE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQACAYGBgYGCAYGCAwIBwgMDgsICAsOEA0NDg0NEBEMDg4ODgwREBMUFRQTEBkZGxsZGSUkJCQlKSkpKSkpKSkpKQEJCAgJCgkLCgoLDgwODA4SDg4ODhIUDg4PDg4UGhIQEBAQEhoXGBUVFRgXHBwaGhwcIyMiIyMpKSkpKSkpKSkp/8AAEQgCigImAwEiAAIRAQMRAf/EAEsAAQEAAAAAAAAAAAAAAAAAAAAIAQEAAAAAAAAAAAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="

/***/ }),

/***/ "./static/images/logo/mobile.png":
/*!***************************************!*\
  !*** ./static/images/logo/mobile.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA/CAYAAAC/36X0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwMThFRTQ1MEI4RjExRUE4MkFBRjhFMzg1QzhEMUQ5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwMThFRTQ2MEI4RjExRUE4MkFBRjhFMzg1QzhEMUQ5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjAxOEVFNDMwQjhGMTFFQTgyQUFGOEUzODVDOEQxRDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjAxOEVFNDQwQjhGMTFFQTgyQUFGOEUzODVDOEQxRDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qWJ4KAAAEK0lEQVR42uSba0gUURSAb2qlidubxF5CmSJR9KBCwoy0hwVBT6JErDApIiKDIOiNgdSfCpSKokhKAitKLCryR+/3j94FRvajsoweJIumnYNnYVpm1rln5u7M7F74WFh2z73zzc49956ZFcJdbRKwIZwddnR0CLe1S0ALMCxaJeTgmIjKaJXwRCMBmRJtEtYECUCuRZOEJOCtjgRkUbRIKDMQgLwhSREtYQTwI4QEZHukSzjVhQDkOzAqUiVkmxCgPGU6LeGuhIR2YGKkSSiREBDgSiRJGAB8YEhAlkSKhDKmgEDK7O51CenANwsSkK1elhADVFkUgHwBhntVQo4NAgIc9qKEWOCejRJagQlek7DKRgEBar0koQ/QqEACMt8rEsoVCUBeAT3dLmEs4FcoAdnmdglVigUgn4WFwqxqCVPDICBAhVsl3A6jhN/cXaZKCauZB3MeOMb8bh3Qwy0S+jJTIi6ARgL9gE9MEQvcIoGbEqs1MXYxYzyX/TWokIBnsokxeLz1lqaJ0xtoYIoodVrCaebAd+jEKmTGagZSnZIwg2qBnFWfzyDmDaaIE05IiANuMgdcHCJuFjMmnozJ4ZawgjnYxybKZSeZsWvCKcFnoXA6z0T8VOZki+SHS8I+5gDPSfTBTZnPukqZdkgYQ0tWzsIoQyceXsezdN7vBbxjitioWkI1c2D7DeLVA0+pKBvcii3sMgeqkjDdwqCSdeJN03xmpUGf3DplpQoJCcAd5oDWGcR8oElvjbQHsWt7/gsYZ7eEIgspUa8ctlbzmTZ6LTfo+ziz74t2SkiykBIX6sRLAd7rfLbN4OzhhPqH2f9MuyTsZQ7guk6sGFrUhEpx8TaO4T7dA/lPQjdJAXgWHgKJstt2YDzN/NqGObyAZu+vQVkB+/grOp9maQ76XjLNIUMYJ3E9cMjKL6GGeQYOKKhblDDH0qRNmbIS8pi7RDzDgxWV8bgps4IroZ7Z4SaFxdw8qylTRgJ3l/iSaoYqG3fVegHnILMTo48OJkVycHjpLAfOBL2fCyzWTHzaTNFKG7IXEv2k06zvYwjMBwl1KgunV4Pi4MboLNUTba0YQ9vDHONrYFBXwTOBn4zgH4GhVHGaDVyWWODMZUjA2R6fkvdTP2bB/rbEmdjHJzEuA7yB0p9ec01+D7fkR0TnnSvZhmlvGa1jWiTWLvE0SYaceTl3lPG6fkTXu8y6Pls40EJlh0QLu0TZSnOBcLCFklCk+ODxyfadZiYlpyRgXm9QdPDttPQeLVzSjCTsViQAawlLhcuanoQ0E3lcFvy/wmbReX9ReEFCrbD/CZIM4eIWLGGOjQdfz1z0OCoBF023bDh4nFBLhYeaVkKhsP6Y7VERxr/32i0hk8pXVh6vzRIebSghjnZ3sZTCYkx+N4HW3AdpP+8XHm7/BBgAtlXefLG7J/QAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/images/slider/code.gif":
/*!***************************************!*\
  !*** ./static/images/slider/code.gif ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/code-472d6316bf604b6810c0b9af017364a6.gif";

/***/ }),

/***/ "./static/images/svg/degree-5.svg":
/*!****************************************!*\
  !*** ./static/images/svg/degree-5.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQ3LjM3NCw0Ni4xMjVjLTQuNDgyLTEuOTc1LTcuMDY4LTMuNjE0LTExLjc2OC01LjE2MmMtMC4zNTEtMC4xMTUtMC43Ny0wLjM0LTAuOTA5LTAuNjExCgkJYy0wLjM4Mi0wLjcyNS0wLjY1LTEuNDk2LTAuOTIyLTIuMjYyYy0wLjE3My0wLjQ4Ni0wLjMyNi0wLjk0NS0wLjk1LTEuMThjLTAuMTY3LTAuMDYyLTAuMzItMC4zNDQtMC4zMTYtMC41MjQKCQljMC4wMzItMS43NzItMC41OTgtMy4wNjEsMC4xOC0zLjc1N2MxLjQxNy0xLjI3MywxLjA5NS0yLjgzNCwxLjgwNC0zLjYwN2MwLjcwOC0wLjc3MiwyLjQ2Mi02LjI1MywyLjEyNi02Ljk1OAoJCWMtMC4zMzYtMC43MDItMS41MjEtMC4zNzMtMS4yNDUtMC43MTRjMS4wOS0xLjM0NCwxLjQyNi00LjA1OSwxLjM3LTYuMjg1YzAuMTk0LDAuNDAzLDAuMzAxLDAuODQxLDAuMzAxLDEuMzJ2MC40NjFsNi45MzctNC41MDgKCQlMMjUsMEw2LjAyMSwxMi4zMzZsMS43MTUsMS4xMTR2Mi40OTZjLTAuMzI5LDAuMDg0LTAuNTc4LDAuMzY4LTAuNTc4LDAuNzIzYzAsMC4yNzUsMC4xNTYsMC41MDksMC4zNzksMC42NDJMNi4wMiwyNS45NTVoMy43OTkKCQlMOC4zLDE3LjMxMWMwLjIyMi0wLjEzMiwwLjM3Ny0wLjM2NiwwLjM3Ny0wLjY0MmMwLTAuMzU1LTAuMjQ5LTAuNjM5LTAuNTc3LTAuNzIzdi0yLjI1OGw0Ljg1NiwzLjE1NnYtMC4zMDMKCQljMC4wMzYsMC40NTEsMC4xMDIsMC45MTYsMC4yMTIsMS4zOTljMC4zNzUsMS42NDQsMS4wOTgsMS41NDIsMS42ODQsMy40MDZjMC4wMDksMC4wMjgsMC4wMDEsMC4wNjUsMC4wMDEsMC4wOTh2MC4xCgkJYy0wLjA0NiwwLjIxMi0wLjIxNiwwLjQ1MS0wLjM1OSwwLjQ5Yy0wLjY5NywwLjE5My0wLjcxNCwwLjU3Ny0wLjYyLDEuMDc0YzAuMDY1LDAuMzQyLDAuNTk4LDIuODg0LDAuOTA2LDMuNzk0CgkJYzAuMjMyLDAuNjc3LDAuNjgxLDEuMzE1LDAuODA1LDIuMDA1YzAuMjUsMS4zNzYsMC44NDIsMi41NzMsMS45MjMsMy42MWMwLjE3OSwwLjE3NCwwLjMxMywwLjQ2MSwwLjI5MywwLjY4NgoJCWMtMC4wODQsMS4wNjEtMC4yMDksMi4xMi0wLjM3NiwzLjE3MWMtMC4wMzMsMC4yMDgtMC4yODYsMC41MTEtMC40OTEsMC41NDljLTAuODE5LDAuMTQ3LTAuOTQ2LDAuNjg4LTEuMTQxLDEuMjM3CgkJYy0wLjI1OSwwLjcyMy0wLjUzNSwxLjQ0NS0wLjg2LDIuMTQ1Yy0wLjEwMywwLjIxOS0wLjM1NiwwLjQ0NS0wLjYwNiwwLjU0MWMtMS40NTcsMC41NDctMi45NCwxLjA0Ny00LjQwOCwxLjU3NQoJCWMtMS41NjEsMC41NjctNS42OTcsMy4xMDMtNy4yMzMsMy44MWMtMC45MDMsMC40MTgtMC40LDMuNzctMC40LDMuNzdjMTcuODY1LDAsMjcuNDg0LDAsNDUuMzQ3LDAKCQlDNDcuNjMzLDUwLDQ4LjI3LDQ2LjUyMSw0Ny4zNzQsNDYuMTI1eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/images/svg/portfolio.svg":
/*!*****************************************!*\
  !*** ./static/images/svg/portfolio.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIC0zMSA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yMTEgMjQwaDkwdjMwaC05MHptMCAwIi8+PHBhdGggZD0ibTQxNS4zNzg5MDYgMjcwaC04NC4zNzg5MDZ2MTVjMCA4LjI4OTA2Mi02LjcxMDkzOCAxNS0xNSAxNWgtMTIwYy04LjI4OTA2MiAwLTE1LTYuNzEwOTM4LTE1LTE1di0xNWgtODQuMzc4OTA2Yy0xOS4zOTQ1MzIgMC0zNi41NDY4NzUtMTIuMzYzMjgxLTQyLjY4NzUtMzAuNzYxNzE5bC01My45MzM1OTQtMTYxLjgyODEyNXYzMjcuNTg5ODQ0YzAgMjQuODEyNSAyMC4xODc1IDQ1IDQ1IDQ1aDQyMmMyNC44MTI1IDAgNDUtMjAuMTg3NSA0NS00NXYtMzI3LjU3ODEyNWwtNTMuOTM3NSAxNjEuODE2NDA2Yy02LjEzNjcxOSAxOC4zOTg0MzgtMjMuMjg5MDYyIDMwLjc2MTcxOS00Mi42ODM1OTQgMzAuNzYxNzE5em0wIDAiLz48cGF0aCBkPSJtMzE2IDBoLTEyMGMtMjQuODEyNSAwLTQ1IDIwLjE4NzUtNDUgNDV2MTVoLTEyNS4xOTE0MDZsNTYuNTc0MjE4IDE2OS43NDYwOTRjMi4wNTA3ODIgNi4xMzY3MTggNy43NzczNDQgMTAuMjUzOTA2IDE0LjIzODI4MiAxMC4yNTM5MDZoODQuMzc4OTA2di0xNWMwLTguMjg5MDYyIDYuNzEwOTM4LTE1IDE1LTE1aDEyMGM4LjI4OTA2MiAwIDE1IDYuNzEwOTM4IDE1IDE1djE1aDg0LjM3ODkwNmM2LjQ2MDkzOCAwIDEyLjE4NzUtNC4xMTcxODggMTQuMjM4MjgyLTEwLjI1MzkwNmw1Ni41NzgxMjQtMTY5Ljc0NjA5NGgtMTI1LjE5NTMxMnYtMTVjMC0yNC44MTI1LTIwLjE4NzUtNDUtNDUtNDV6bS0xMzUgNjB2LTE1YzAtOC4yNzczNDQgNi43MjI2NTYtMTUgMTUtMTVoMTIwYzguMjc3MzQ0IDAgMTUgNi43MjI2NTYgMTUgMTV2MTV6bTAgMCIvPjwvc3ZnPg=="

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\nextjs\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9ydGZvbGlvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGVjbm9sb2dpYS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvaW1hZ2VzL2Fib3V0LzMuanBnIiwid2VicGFjazovLy8uL3N0YXRpYy9pbWFnZXMvYWJvdXQvNTUweDY1MC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ltYWdlcy9sb2dvL21vYmlsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ltYWdlcy9zbGlkZXIvY29kZS5naWYiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2ltYWdlcy9zdmcvZGVncmVlLTUuc3ZnIiwid2VicGFjazovLy8uL3N0YXRpYy9pbWFnZXMvc3ZnL3BvcnRmb2xpby5zdmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIl0sIm5hbWVzIjpbImFib3V0IiwicHJvcHMiLCJDYXJkIiwiSW1nQWJvdXQiLCJjb2xvciIsImNhcGEiLCJCYWNrZ3JvdW5kIiwiQWxleCIsImNvbnRhY3QiLCJub21lIiwic2V0Tm9tZSIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lbnNhZ2VtIiwic2V0TWVuc2FnZW0iLCJjb3JJY29uIiwiYnV0dG9uIiwiYm9yZGVyIiwib3V0bGluZSIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJoYW5kbGVDb250YXRvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QWxpZ24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImV4cGVyaWVuY2UiLCJkZUdyZWUiLCJQb3J0Zm9saW8iLCJmb290ZXIiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImxvYWQiLCJtZW51IiwiTG9nb01vYmlsZSIsImZvbnRTaXplIiwicG9ydGZvbGlvIiwic2VydmljZSIsInRleHRDZW50ZXIiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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Q0FBaUMsd2xGOzs7Ozs7Ozs7OztBQ0FqQyxrRjs7Ozs7Ozs7Ozs7QUNBQSxxQ0FBcUMsNG5GOzs7Ozs7Ozs7OztBQ0FyQyxxQ0FBcUMsZ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQyxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9hYm91dC81NTB4NjUwLmpwZyc7XHJcbmltcG9ydCBJbWdBYm91dCBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL2Fib3V0LzMuanBnJ1xyXG5cclxuaW1wb3J0IHsgRmFDbG91ZERvd25sb2FkQWx0LCBGYUVudmVsb3BlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuZnVuY3Rpb24gYWJvdXQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX3NlY3Rpb25cIiBpZD1cImFib3V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9hYm91dF93cmFwX2FsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RpdGxlX2hvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SW5mb3JtYcOnw6NvIHByaW5jaXBhbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Tb2JyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X2ltYWdlX3dyYXAgcGFyYWxsYXhcIiBkYXRhLXJlbGF0aXZlLWlucHV0PVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIGxheWVyXCIgZGF0YS1kZXB0aD1cIjAuMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0NhcmR9IGFsdD1cIkNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiIGRhdGEtaW1nLXVybD17SW1nQWJvdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBsYXllclwiIGRhdGEtZGVwdGg9XCIwLjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9hYm91dC81NTB4NjUwLmpwZ1wiIGFsdD1cImNhcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0Ym94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NZXUgbm9tZSDDqSA8c3Bhbj5BbGV4IFJpY2FyZG88L3NwYW4+IGUgZXUgZGVzZW52b2x2by9wcm9ncmFtbyBzaXRlcy4gTWUgY29uc2lkZXJvIHVtIHbDrWNpYWRvIGUgYXBhaXhvbmFkbyBwb3IgY8OzZGlnb3MhIEV1IHZlbmhvIHByb2pldGFuZG8gZSBjb2RpZmljYW5kbyBuYSB3ZWIgZGVzZGUgMjAxNy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1pbmhhIHByaW1laXJhIGV4cGVyacOqbmNpYSBjb20gYXMgdGVjbm9sb2dpYXMgd2ViIGFwYXJlY2V1IHF1YW5kbyBldSBlc3R1ZGF2YSBubyBJbnN0aXR1dG8gRmVkZXJhbCBkZSBlZHVjYcOnw6NvLCBjacOqbmNpYSBlIHRlY25vbG9naWEgZGUgUGVybmFtYnVjbyhJRlBFKSBlIGVzdGF2YSBjdXJzYW5kbyBUw6ljbmljbyBlbSBpbmZvcm3DoXRpY2EgcGFyYSBJbnRlcm5ldC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vIGRlY29ycmVyIGRhIG1pbmhhIGNhcnJlaXJhIGRhIG1pbmhhIGNhcnJlaXJhIHByb2Zpc3Npb25hbCwgZGVzY29icmlyIG5vdmFzIG1hbmVpcmFzIGRlIGRlc2Vudm9sdmVyIGZ1bmNpb25hbGlkYWRlcyBuYSB3ZWIuIEV2ZW50dWFsbWVudGUsIGlzc28gbWUgbGV2b3UgYSBjb25zdHJ1aXIgd2Vic2l0ZXMgZWxlZ2FudGVzLCByw6FwaWRvcywgcmVzcG9uc2l2b3MgZSBjb20gdXNhYmlsaWRhZGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BcHJpbW9yZWkgbWV1cyBjb25oZWNpbWVudG9zIGFwcmVuZGVuZG8gZGl2ZXJzYXMgdGVjbm9sb2dpYXMgYXR1YWlzIHF1ZSBzw6NvIHV0aWxpemFkYXMgcG9yIGRpdmVyc2FzIGVtcHJlc2FzKEZhY2Vib29rLCBVYmVyLCBJbnN0YWdyYW0sIFNwb3RpZnkuLikgcGFyYSBhdXhpbGlhciBuYXMgY3JpYcOnw7VlcyBkb3Mgd2Vic2l0ZXMsIGF0w6kgZW50w6NvIGNvbnN0cnVpciBhbGd1bnMgcHJvamV0b3MgZSBvcyBtZXNtb3MgcG9kZW0gc2VyIGVuY29udHJhZG9zIG5lc3NlIHBvcnRmw7NsaW8gb3Ugbm8gbWV1IDxzcGFuPjxhIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NzYWxleDEyM1wiIHRhcmdldD1cIl9ibGFua1wiPkdpdEh1Yi48L2E+PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLi4vc3RhdGljL3BkZi9hbGV4cmljYXJkby5wZGZcIiBkb3dubG9hZCA+PHNwYW4+PEZhQ2xvdWREb3dubG9hZEFsdCAvPiBCYWl4YXIgQ3VycsOtY3Vsbzwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2NvbnRhY3RcIj48c3Bhbj48RmFFbnZlbG9wZSAvPiBFbnRyYXIgZW0gY29udGF0bzwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL3NsaWRlci9jb2RlLmdpZic7XHJcbmltcG9ydCBBbGV4IGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvYWJvdXQvMy5qcGcnO1xyXG5cclxuaW1wb3J0IHsgRmFBbmdsZURvd24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5mdW5jdGlvbiBjYXBhKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9zZWN0aW9uXCIgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9oZXJvX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX2ltYWdlIGphcmFsbGF4XCIgZGF0YS1pbWctdXJsPXtCYWNrZ3JvdW5kfSBkYXRhLXNwZWVkPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBbGV4fSBhbHQ9XCJBbGV4IFJpY2FyZG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIiBkYXRhLWltZy11cmw9e0FsZXh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lX2hvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWxleCA8c3Bhbj5SaWNhcmRvPC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0X3R5cGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjRkYyMTRGJyB9fT5Qcm9jdXJhbmRvIHVtIDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJhcmxvX3RtX2FuaW1hdGlvbl90ZXh0X3dvcmRcIiAvPiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9hcnJvd193cmFwIGJvdW5jZSBhbmNob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCIgPjxGYUFuZ2xlRG93biBzaXplPXszMH0gLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FwYTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gY29udGFjdChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtub21lLCBzZXROb21lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgY29ySWNvbiA9IHtcclxuICAgICAgICBjb2xvcjogXCIjRkYyMTRGXCIsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0ge1xyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZjIxNGZcIixcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTBweCA0NXB4XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJNb250c2VycmF0XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDb250YXRvKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5vbWUsIGVtYWlsLCBtZW5zYWdlbVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdG1fc2VjdGlvblwiIGlkPVwiY29udGFjdFwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX2NvbnRhY3RcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzEwMTAxMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdGl0bGVfaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFsZ3VtYSBkw7p2aWRhPyBFbnRyZSBlbSBjb250YXRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGF0bzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnRfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHQgZmEtMnhcIiBzdHlsZT17Y29ySWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxvY2FsaXphw6fDo288L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QnJhc2lsIC0gUGVybmFtYnVjbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLW9wZW4tdGV4dCBmYS0yeFwiIHN0eWxlPXtjb3JJY29ufT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RW1haWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+YWxleC5yaWNhcmRvMTk5OWhvdG1haWwuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtd2hhdHNhcHAgZmEtMnhcIiBzdHlsZT17Y29ySWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiBXaGF0c2FwcDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+KzU1ICg4MSkgOTg1NzItNDE3NiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDb250YXRvfSBjbGFzc05hbWU9XCJjb250YWN0X2Zvcm1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXR1cm5tZXNzYWdlXCIgZGF0YS1zdWNjZXNzPVwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIHJlY2VpdmVkLCBXZSB3aWxsIGNvbnRhY3QgeW91IHNvb24uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5X25vdGljZVwiPjxzcGFuPlBsZWFzZSBGaWxsIFJlcXVpcmVkIEZpZWxkczwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbWVcIiB2YWx1ZT17bm9tZX0gb25DaGFuZ2U9e2UgPT4gc2V0Tm9tZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJNZW5zYWdlbVwiIHZhbHVlPXttZW5zYWdlbX0gb25DaGFuZ2U9e2UgPT4gc2V0TWVuc2FnZW0oZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3R5bGU9e2J1dHRvbn0+RW52aWFyIEZvcm11bMOhcmlvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBkZUdyZWUgZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9zdmcvZGVncmVlLTUuc3ZnJztcclxuaW1wb3J0IFBvcnRmb2xpbyBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL3N2Zy9wb3J0Zm9saW8uc3ZnJztcclxuXHJcbmZ1bmN0aW9uIGV4cGVyaWVuY2UocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX3NlY3Rpb25cIiBpZD1cImV4cGVyaWVuY2VcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvciA6IFwiIzE5MTkxOVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV90aW1lbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdGl0bGVfaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkV4cGVyacOqbmNpYTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZV9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnXCIgc3JjPXtkZUdyZWV9IGFsdD1cIkRlZ3JlZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ5ZWFyXCI+MjAxOSAtIDIwMjE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5DZW50cm8gVW5pdmVyc2l0w6FyaW8gTWF1csOtY2lvIGRlIE5hc3NhdTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+R3JhZHVhw6fDo28gZW0gYW7DoWxpc2UgZSBEZXNlbnZvbHZpbWVudG8gZGUgU29mdHdhcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInN2Z1wiIHNyYz17ZGVHcmVlfSBhbHQ9XCJEZWdyZWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieWVhclwiPjIwMTcgLSAyMDE4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+SW5zdGl0dXRvIEZlZGVyYWwgZGUgRWR1Y2HDp8OjbywgQ2nDqm5jaWEgZSBUZWNub2xvZ2lhIGRlIFBlcm5hbWJ1Y288L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlTDqWNuaWNvIGVtIEluZm9ybcOhdGljYSBwYXJhIEludGVybmV0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnXCIgc3JjPXtQb3J0Zm9saW99IGFsdD1cIlBvcnRmb2xpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ5ZWFyXCI+MjAxOSAtIEF0dWFsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+UHJvZ3JhbWFkb3IgV0VCPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5BdHVhbG1lbnRlIHRyYWJhbGhvIGVtIHVtYSBBZ8OqbmNpYSBkZSBNYXJrZXRpbmcgRGlnaXRhbChCZXJsaW0gRGlnaXRhbCkgZGVzZW52b2x2ZW5kbyBMYW5kaW5nIFBhZ2VzLCBXZWJzaXRlcyBlIEUtY29tbWVyY2VycyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHBlcmllbmNlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBmb290ZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX2Zvb3RlclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yIDogXCIjMTkxOTE5XCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvcHlyaWdodCDCqSB7Y3VycmVudFllYXJ9IC0gIEFsZXggUmljYXJkbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcmxvX3RtX3RvdG9wXCIgaHJlZj1cIiNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gbG9hZChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX3ByZWxvYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJfd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9nb01vYmlsZSBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL2xvZ28vbW9iaWxlLnBuZyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgRmFGYWNlYm9vayxcclxuICAgIEZhTGlua2VkaW4sXHJcbiAgICBGYUluc3RhZ3JhbSxcclxuICAgIEZhR2l0aHViLFxyXG4gICAgRmFIb21lLFxyXG4gICAgRmFVc2VyR3JhZHVhdGUsXHJcbiAgICBGYUxhcHRvcENvZGUsXHJcbiAgICBGYU5ldHdvcmtXaXJlZCxcclxuICAgIEZhRW52ZWxvcGUsXHJcbiAgICBGYUNsaXBib2FyZENoZWNrLFxyXG5cclxuXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG1lbnUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBjb3JJY29uID0ge1xyXG4gICAgICAgIGNvbG9yOiBcIiNGRjIxNEZcIixcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX3BvcHVwX25ld3Mgc2Nyb2xsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2xvc2VyXCIgaHJlZj1cIiNcIj5DbG9zZTwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX2lubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogVG9wYmFyICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdG1fdG9wYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGJhcl9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wYmFyX2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxpbWcgc3JjPXtMb2dvTW9iaWxlfSBhbHQ9XCJMb2dvXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpZ2dlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnMzJweCAhaW1wb3J0YW50JyB9fSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIiBzdHlsZT17eyBmb250U2l6ZTogJzMycHggIWltcG9ydGFudCcgfX0gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2hvbWVcIj48RmFIb21lIHN0eWxlPXtjb3JJY29ufSAvPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNhYm91dFwiPjxGYVVzZXJHcmFkdWF0ZSBzdHlsZT17Y29ySWNvbn0gLz4gU29icmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNzZXJ2aWNlc1wiPjxGYUxhcHRvcENvZGUgc3R5bGU9e2Nvckljb259IC8+IFRlY25vbG9naWFzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjcG9ydGZvbGlvXCI+PEZhTmV0d29ya1dpcmVkICBzdHlsZT17Y29ySWNvbn0vPiBQb3J0ZsOzbGlvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjZXhwZXJpZW5jZVwiPjxGYUNsaXBib2FyZENoZWNrICBzdHlsZT17Y29ySWNvbn0vPiBFeHBlcmnDqm5jaWE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNjb250YWN0XCI+PEZhRW52ZWxvcGUgc3R5bGU9e2Nvckljb259IC8+IENvbnRhdG88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogL1RvcGJhciAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiBMRUZUUEFSVCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX2xlZnRwYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRhcmtcIiBocmVmPVwiI1wiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9sb2dvL2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaWdodFwiIGhyZWY9XCIjXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2xvZ28vbGlnaHQucG5nXCIgYWx0PVwibG9nb1wiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBzY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2hvbWVcIj48RmFIb21lIHN0eWxlPXtjb3JJY29ufSAvPiBIb21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNhYm91dFwiPjxGYVVzZXJHcmFkdWF0ZSBzdHlsZT17Y29ySWNvbn0gLz4gU29icmU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3NlcnZpY2VzXCI+PEZhTGFwdG9wQ29kZSBzdHlsZT17Y29ySWNvbn0gLz4gVGVjbm9sb2dpYXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3BvcnRmb2xpb1wiPjxGYU5ldHdvcmtXaXJlZCAgc3R5bGU9e2Nvckljb259Lz4gUG9ydGbDs2xpbzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjZXhwZXJpZW5jZVwiPjxGYUNsaXBib2FyZENoZWNrICBzdHlsZT17Y29ySWNvbn0vPiBFeHBlcmnDqm5jaWE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2NvbnRhY3RcIj48RmFFbnZlbG9wZSBzdHlsZT17Y29ySWNvbn0gLz4gQ29udGF0bzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48RmFGYWNlYm9vayBzaXplPVwiMjJweFwiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PEZhTGlua2VkaW4gc2l6ZT1cIjIycHhcIiAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxGYUluc3RhZ3JhbSBzaXplPVwiMjJweFwiIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PEZhR2l0aHViIHNpemU9XCIyMnB4XCIgLz48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBwb3J0Zm9saW8ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX3NlY3Rpb25cIiBpZD1cInBvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdG1fcG9ydGZvbGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190aXRsZV9ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q3JlYXRpdmUgV29ya3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Qb3J0Zm9saW88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9wb3J0Zm9saW9fdGl0bGVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW9fZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY3VycmVudFwiIGRhdGEtZmlsdGVyPVwiKlwiPkFsbDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGRhdGEtZmlsdGVyPVwiLnZpZGVvXCI+VmlkZW88L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLWZpbHRlcj1cIi5hbmltYXRpb25cIj5BbmltYXRpb248L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLWZpbHRlcj1cIi5pbWFnZVwiPkltYWdlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdhbGxlcnlfem9vbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aWRlb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5IGFybG9fdG1fcG9ydGZvbGlvX2FuaW1hdGlvbl93cmFwXCIgZGF0YS10aXRsZT1cIlBvcHVwIFZpZGVvXCIgZGF0YS1jYXRlZ29yeT1cIlZpZGVvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9wdXAteW91dHViZVwiIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUlDcl9iT3VNOVpvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3BvcnRmb2xpby82MDB4NjAwLmpwZ1wiIGFsdD1cInBvcnRmb2xpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9pbWFnZVwiIGRhdGEtaW1nLXVybD1cImltZy9wb3J0Zm9saW8vMS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5IGFybG9fdG1fcG9ydGZvbGlvX2FuaW1hdGlvbl93cmFwXCIgZGF0YS10aXRsZT1cIlBvcHVwIEltYWdlXCIgZGF0YS1jYXRlZ29yeT1cIkltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiem9vbVwiIGhyZWY9XCJpbWcvcG9ydGZvbGlvLzIuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3BvcnRmb2xpby82MDB4NjAwLmpwZ1wiIGFsdD1cInBvcnRmb2xpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9pbWFnZVwiIGRhdGEtaW1nLXVybD1cImltZy9wb3J0Zm9saW8vMi5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeSBhcmxvX3RtX3BvcnRmb2xpb19hbmltYXRpb25fd3JhcFwiIGRhdGEtdGl0bGU9XCJBbmltYXRlIEltYWdlXCIgZGF0YS1jYXRlZ29yeT1cIkFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInpvb21cIiBocmVmPVwiaW1nL3BvcnRmb2xpby84LndlYnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcG9ydGZvbGlvLzYwMHg2MDAuanBnXCIgYWx0PVwicG9ydGZvbGlvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2ltYWdlXCIgZGF0YS1pbWctdXJsPVwiaW1nL3BvcnRmb2xpby84LndlYnBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5IGFybG9fdG1fcG9ydGZvbGlvX2FuaW1hdGlvbl93cmFwXCIgZGF0YS10aXRsZT1cIlBvcHVwIEltYWdlXCIgZGF0YS1jYXRlZ29yeT1cIkltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiem9vbVwiIGhyZWY9XCJpbWcvcG9ydGZvbGlvLzQuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3BvcnRmb2xpby82MDB4NjAwLmpwZ1wiIGFsdD1cInBvcnRmb2xpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9pbWFnZVwiIGRhdGEtaW1nLXVybD1cImltZy9wb3J0Zm9saW8vNC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5IGFybG9fdG1fcG9ydGZvbGlvX2FuaW1hdGlvbl93cmFwXCIgZGF0YS10aXRsZT1cIlBvcHVwIEltYWdlXCIgZGF0YS1jYXRlZ29yeT1cIkltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiem9vbVwiIGhyZWY9XCJpbWcvcG9ydGZvbGlvLzUuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3BvcnRmb2xpby82MDB4NjAwLmpwZ1wiIGFsdD1cInBvcnRmb2xpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9pbWFnZVwiIGRhdGEtaW1nLXVybD1cImltZy9wb3J0Zm9saW8vNS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5IGFybG9fdG1fcG9ydGZvbGlvX2FuaW1hdGlvbl93cmFwXCIgZGF0YS10aXRsZT1cIlBvcHVwIEltYWdlXCIgZGF0YS1jYXRlZ29yeT1cIkltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiem9vbVwiIGhyZWY9XCJpbWcvcG9ydGZvbGlvLzYuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3BvcnRmb2xpby82MDB4NjAwLmpwZ1wiIGFsdD1cInBvcnRmb2xpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9pbWFnZVwiIGRhdGEtaW1nLXVybD1cImltZy9wb3J0Zm9saW8vNi5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9ydGZvbGlvOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBGYVJlYWN0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuZnVuY3Rpb24gc2VydmljZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHRleHRDZW50ZXIgPSB7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ySWNvbiA9IHtcclxuICAgICAgICBjb2xvcjogXCIjRkYyMTRGXCIsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdG1fc2VjdGlvblwiIGlkPVwic2VydmljZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX3NlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190aXRsZV9ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWxndW1hcyB0ZWNub2xvZ2lhcyBxdWUgdGVuaG8gY29uaGVjaW1lbnRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+VGVjbm9sb2dpYXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZV9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0Q2VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1odG1sNSBmYS0zeFwiIHN0eWxlPXtjb3JJY29ufT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SFRNTCA1PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRDZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWNzczMgZmEtM3hcIiBzdHlsZT17Y29ySWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNTUyAzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRDZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWpzIGZhLTN4XCIgc3R5bGU9e2Nvckljb259PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5KYXZhU2NyaXB0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRDZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXJlYWN0IGZhLTN4XCIgc3R5bGU9e2Nvckljb259PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZWFjdCBKUzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0Q2VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1yZWFjdCBmYS0zeFwiIHN0eWxlPXtjb3JJY29ufT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UmVhY3QgTmF0aXZlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRDZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvZGUgZmEtM3hcIiBzdHlsZT17Y29ySWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkpxdWVyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0Q2VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1zYXNzIGZhLTN4XCIgc3R5bGU9e2Nvckljb259PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TYXNzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRDZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWJvb3RzdHJhcCBmYS0zeFwiIHN0eWxlPXtjb3JJY29ufT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Qm9vc3RyYXA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dENlbnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZGF0YWJhc2UgZmEtM3hcIiBzdHlsZT17Y29ySWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNRTDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dENlbnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbm9kZSBmYS0zeFwiIHN0eWxlPXtjb3JJY29ufT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Tm9kZS5KUzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0Q2VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1waHAgZmEtM3hcIiBzdHlsZT17Y29ySWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBIUDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0Q2VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1qYXZhIGZhLTN4XCIgc3R5bGU9e2Nvckljb259PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5KYXZhPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSc7XHJcbmltcG9ydCBMb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZCc7XHJcbmltcG9ydCBDYXBhIGZyb20gJy4uL2NvbXBvbmVudHMvY2FwYSc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0JztcclxuaW1wb3J0IFRlY25vbG9neSBmcm9tICcuLi9jb21wb25lbnRzL3RlY25vbG9naWEnO1xyXG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gJy4uL2NvbXBvbmVudHMvcG9ydGZvbGlvJztcclxuaW1wb3J0IEV4cGVyaWVuY2llIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpZW5jZSc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QWxleCBSaWNhcmRvPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPExvYWQgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdG1fYWxsX3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9yaWdodHBhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRwYXJ0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcGEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVjbm9sb2d5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcnRmb2xpbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBlcmllbmNpZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2JvZHk+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvMy04ODdiMjM0ZjE4Y2IyYTRhZTJiNDIzNDI0MDc1NWFlNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQXhBQUQvNFFNdmFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqWXRZekV6T0NBM09TNHhOVGs0TWpRc0lESXdNVFl2TURrdk1UUXRNREU2TURrNk1ERWdJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUF5TURFM0lDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEJORFZETURsR1FUUkZNRGN4TVVVNVFrWTBORU5FUWpJME5EQTJOekJCT1NJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwQk5EVkRNRGxHUWpSRk1EY3hNVVU1UWtZME5FTkVRakkwTkRBMk56QkJPU0krSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tFME5VTXdPVVk0TkVVd056RXhSVGxDUmpRMFEwUkNNalEwTURZM01FRTVJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa0UwTlVNd09VWTVORVV3TnpFeFJUbENSalEwUTBSQ01qUTBNRFkzTUVFNUlpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCsvKzRBRGtGa2IySmxBR1RBQUFBQUFmL2JBSVFBQ0FZR0JnWUdDQVlHQ0F3SUJ3Z01EZ3NJQ0FzT0VBME5EZzBORUJFTURnNE9EZ3dSRUJNVUZSUVRFQmtaR3hzWkdTVWtKQ1FsS1NrcEtTa3BLU2twS1FFSkNBZ0pDZ2tMQ2dvTERnd09EQTRTRGc0T0RoSVVEZzRQRGc0VUdoSVFFQkFRRWhvWEdCVVZGUmdYSEJ3YUdod2NJeU1pSXlNcEtTa3BLU2twS1NrcC84QUFFUWdDaWdJbUF3RWlBQUlSQVFNUkFmL0VBRXNBQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFJQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBRUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBRVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQURBTUJBQUlSQXhFQVB3Q2Z3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWYvMlE9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUVBQUFBL0NBWUFBQUMvMzZYMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRNNElEYzVMakUxT1RneU5Dd2dNakF4Tmk4d09TOHhOQzB3TVRvd09Ub3dNU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UY2dLRmRwYm1SdmQzTXBJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa0l3TVRoRlJUUTFNRUk0UmpFeFJVRTRNa0ZCUmpoRk16ZzFRemhFTVVRNUlpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rSXdNVGhGUlRRMk1FSTRSakV4UlVFNE1rRkJSamhGTXpnMVF6aEVNVVE1SWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlFqQXhPRVZGTkRNd1FqaEdNVEZGUVRneVFVRkdPRVV6T0RWRE9FUXhSRGtpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UWpBeE9FVkZORFF3UWpoR01URkZRVGd5UVVGR09FVXpPRFZET0VReFJEa2lMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejRxV0o0S0FBQUVLMGxFUVZSNDJ1U2JhMGdVVVJTQWIycWxpZHVieEY1Q21TSlI5S0JDd295MGh3VkJUNkpFckRBcElpS0RJT2lOZ2RTZkNwU0tva2hLQWl0S0xDcnlSKy8zajk0RlJ2YWpzb3dlSkl1bW5ZTm5ZVnBtMXJsbjV1N003Rjc0V0ZoMno3M3p6YzQ5OTU2WkZjSmRiUkt3SVp3ZGRuUjBDTGUxUzBBTE1DeGFKZVRnbUlqS2FKWHdSQ01CbVJKdEV0WUVDVUN1UlpPRUpPQ3RqZ1JrVWJSSUtETVFnTHdoU1JFdFlRVHdJNFFFWkh1a1N6alZoUURrT3pBcVVpVmtteENnUEdVNkxlR3VoSVIyWUdLa1NTaVJFQkRnU2lSSkdBQjhZRWhBbGtTS2hES21nRURLN081MUNlbkFOd3NTa0sxZWxoQURWRmtVZ0h3QmhudFZRbzROQWdJYzlxS0VXT0NlalJKYWdRbGVrN0RLUmdFQmFyMGtvUS9RcUVBQ010OHJFc29WQ1VCZUFUM2RMbUVzNEZjb0Fkbm1kZ2xWaWdVZ240V0Z3cXhxQ1ZQRElDQkFoVnNsM0E2amhOL2NYYVpLQ2F1WkIzTWVPTWI4YmgzUXd5MFMrakpUSWk2QVJnTDlnRTlNRVF2Y0lvR2JFcXMxTVhZeFl6eVgvVFdva0lCbnNva3hlTHoxbHFhSjB4dG9ZSW9vZFZyQ2FlYkFkK2pFS21UR2FnWlNuWkl3ZzJxQm5GV2Z6eURtRGFhSUUwNUlpQU51TWdkY0hDSnVGak1tbm96SjRaYXdnam5ZeHliS1pTZVpzV3ZDS2NGbm9YQTZ6MFQ4Vk9aa2krU0hTOEkrNWdEUFNmVEJUWm5QdWtxWmRrZ1lRMHRXenNJb1F5Y2VYc2V6ZE43dkJieGppdGlvV2tJMWMyRDdEZUxWQTArcEtCdmNpaTNzTWdlcWtqRGR3cUNTZGVKTjAzeG1wVUdmM0RwbHBRb0pDY0FkNW9EV0djUjhvRWx2amJRSHNXdDcvZ3NZWjdlRUlnc3BVYThjdGxiem1UWjZMVGZvK3ppejc0dDJTa2l5a0JJWDZzUkxBZDdyZkxiTjRPemhoUHFIMmY5TXV5VHNaUTdndWs2c0dGclVoRXB4OFRhTzRUN2RBL2xQUWpkSkFYZ1dIZ0tKc3R0MllEek4vTnFHT2J5QVp1K3ZRVmtCKy9nck9wOW1hUTc2WGpMTklVTVlKM0U5Y01qS0w2R0dlUVlPS0toYmxEREgwcVJObWJJUzhwaTdSRHpEZ3hXVjhiZ3BzNElyb1o3WjRTYUZ4ZHc4cXlsVFJnSjNsL2lTYW9ZcUczZlZlZ0huSUxNVG80OE9Ka1Z5Y0hqcExBZk9CTDJmQ3l6V1RIemFUTkZLRzdJWEV2MmswNnp2WXdqTUJ3bDFLZ3VuVjRQaTRNYm9MTlVUYmEwWVE5dkRIT05yWUZCWHdUT0JuNHpnSDRHaFZIR2FEVnlXV09ETVpVakEyUjZma3ZkVFAyYkIvcmJFbWRqSEp6RXVBN3lCMHA5ZWMwMStEN2ZrUjBUbm5TdlpobWx2R2ExaldpVFdMdkUwU1lhY2VUbDNsUEc2ZmtUWHU4eTZQbHM0MEVKbGgwUUx1MFRaU25PQmNMQ0ZrbENrK09EeHlmYWRaaVlscHlSZ1htOVFkUER0dFBRZUxWelNqQ1RzVmlRQWF3bExoY3Vhbm9RMEUzbGNGdnkvd21iUmVYOVJlRUZDcmJEL0NaSU00ZUlXTEdHT2pRZGZ6MXowT0NvQkYwMjNiRGg0bkZCTGhZZWFWa0toc1A2WTdWRVJ4ci8zMmkwaGs4cFhWaDZ2elJJZWJTZ2hqblozc1pUQ1lreCtONEhXM0FkcFArOFhIbTcvQkJnQXRsWGVmTEc3Si9RQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jb2RlLTQ3MmQ2MzE2YmY2MDRiNjgxMGMwYjlhZjAxNzM2NGE2LmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRZdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStDanh6ZG1jZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVEyRndZVjh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSUtDU0IzYVdSMGFEMGlOVEJ3ZUNJZ2FHVnBaMmgwUFNJMU1IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ05UQWdOVEFpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRFV3SURVd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4blBnb0pQSEJoZEdnZ1pEMGlUVFEzTGpNM05DdzBOaTR4TWpWakxUUXVORGd5TFRFdU9UYzFMVGN1TURZNExUTXVOakUwTFRFeExqYzJPQzAxTGpFMk1tTXRNQzR6TlRFdE1DNHhNVFV0TUM0M055MHdMak0wTFRBdU9UQTVMVEF1TmpFeENna0pZeTB3TGpNNE1pMHdMamN5TlMwd0xqWTFMVEV1TkRrMkxUQXVPVEl5TFRJdU1qWXlZeTB3TGpFM015MHdMalE0Tmkwd0xqTXlOaTB3TGprME5TMHdMamsxTFRFdU1UaGpMVEF1TVRZM0xUQXVNRFl5TFRBdU16SXRNQzR6TkRRdE1DNHpNVFl0TUM0MU1qUUtDUWxqTUM0d016SXRNUzQzTnpJdE1DNDFPVGd0TXk0d05qRXNNQzR4T0MwekxqYzFOMk14TGpReE55MHhMakkzTXl3eExqQTVOUzB5TGpnek5Dd3hMamd3TkMwekxqWXdOMk13TGpjd09DMHdMamMzTWl3eUxqUTJNaTAyTGpJMU15d3lMakV5TmkwMkxqazFPQW9KQ1dNdE1DNHpNell0TUM0M01ESXRNUzQxTWpFdE1DNHpOek10TVM0eU5EVXRNQzQzTVRSak1TNHdPUzB4TGpNME5Dd3hMalF5TmkwMExqQTFPU3d4TGpNM0xUWXVNamcxWXpBdU1UazBMREF1TkRBekxEQXVNekF4TERBdU9EUXhMREF1TXpBeExERXVNekoyTUM0ME5qRnNOaTQ1TXpjdE5DNDFNRGdLQ1FsTU1qVXNNRXcyTGpBeU1Td3hNaTR6TXpac01TNDNNVFVzTVM0eE1UUjJNaTQwT1RaakxUQXVNekk1TERBdU1EZzBMVEF1TlRjNExEQXVNelk0TFRBdU5UYzRMREF1TnpJell6QXNNQzR5TnpVc01DNHhOVFlzTUM0MU1Ea3NNQzR6Tnprc01DNDJOREpNTmk0d01pd3lOUzQ1TlRWb015NDNPVGtLQ1FsTU9DNHpMREUzTGpNeE1XTXdMakl5TWkwd0xqRXpNaXd3TGpNM055MHdMak0yTml3d0xqTTNOeTB3TGpZME1tTXdMVEF1TXpVMUxUQXVNalE1TFRBdU5qTTVMVEF1TlRjM0xUQXVOekl6ZGkweUxqSTFPR3cwTGpnMU5pd3pMakUxTm5ZdE1DNHpNRE1LQ1Fsak1DNHdNellzTUM0ME5URXNNQzR4TURJc01DNDVNVFlzTUM0eU1USXNNUzR6T1Rsak1DNHpOelVzTVM0Mk5EUXNNUzR3T1Rnc01TNDFORElzTVM0Mk9EUXNNeTQwTURaak1DNHdNRGtzTUM0d01qZ3NNQzR3TURFc01DNHdOalVzTUM0d01ERXNNQzR3T1RoMk1DNHhDZ2tKWXkwd0xqQTBOaXd3TGpJeE1pMHdMakl4Tml3d0xqUTFNUzB3TGpNMU9Td3dMalE1WXkwd0xqWTVOeXd3TGpFNU15MHdMamN4TkN3d0xqVTNOeTB3TGpZeUxERXVNRGMwWXpBdU1EWTFMREF1TXpReUxEQXVOVGs0TERJdU9EZzBMREF1T1RBMkxETXVOemswQ2drSll6QXVNak15TERBdU5qYzNMREF1TmpneExERXVNekUxTERBdU9EQTFMREl1TURBMVl6QXVNalVzTVM0ek56WXNNQzQ0TkRJc01pNDFOek1zTVM0NU1qTXNNeTQyTVdNd0xqRTNPU3d3TGpFM05Dd3dMak14TXl3d0xqUTJNU3d3TGpJNU15d3dMalk0TmdvSkNXTXRNQzR3T0RRc01TNHdOakV0TUM0eU1Ea3NNaTR4TWkwd0xqTTNOaXd6TGpFM01XTXRNQzR3TXpNc01DNHlNRGd0TUM0eU9EWXNNQzQxTVRFdE1DNDBPVEVzTUM0MU5EbGpMVEF1T0RFNUxEQXVNVFEzTFRBdU9UUTJMREF1TmpnNExURXVNVFF4TERFdU1qTTNDZ2tKWXkwd0xqSTFPU3d3TGpjeU15MHdMalV6TlN3eExqUTBOUzB3TGpnMkxESXVNVFExWXkwd0xqRXdNeXd3TGpJeE9TMHdMak0xTml3d0xqUTBOUzB3TGpZd05pd3dMalUwTVdNdE1TNDBOVGNzTUM0MU5EY3RNaTQ1TkN3eExqQTBOeTAwTGpRd09Dd3hMalUzTlFvSkNXTXRNUzQxTmpFc01DNDFOamN0TlM0Mk9UY3NNeTR4TURNdE55NHlNek1zTXk0NE1XTXRNQzQ1TURNc01DNDBNVGd0TUM0MExETXVOemN0TUM0MExETXVOemRqTVRjdU9EWTFMREFzTWpjdU5EZzBMREFzTkRVdU16UTNMREFLQ1FsRE5EY3VOak16TERVd0xEUTRMakkzTERRMkxqVXlNU3cwTnk0ek56UXNORFl1TVRJMWVpSXZQZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJhV1YzUW05NFBTSXdJQzB6TVNBMU1USWdOVEV5SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGp4d1lYUm9JR1E5SW0weU1URWdNalF3YURrd2RqTXdhQzA1TUhwdE1DQXdJaTgrUEhCaGRHZ2daRDBpYlRReE5TNHpOemc1TURZZ01qY3dhQzA0TkM0ek56ZzVNRFoyTVRWak1DQTRMakk0T1RBMk1pMDJMamN4TURrek9DQXhOUzB4TlNBeE5XZ3RNVEl3WXkwNExqSTRPVEEyTWlBd0xURTFMVFl1TnpFd09UTTRMVEUxTFRFMWRpMHhOV2d0T0RRdU16YzRPVEEyWXkweE9TNHpPVFExTXpJZ01DMHpOaTQxTkRZNE56VXRNVEl1TXpZek1qZ3hMVFF5TGpZNE56VXRNekF1TnpZeE56RTViQzAxTXk0NU16TTFPVFF0TVRZeExqZ3lPREV5TlhZek1qY3VOVGc1T0RRMFl6QWdNalF1T0RFeU5TQXlNQzR4T0RjMUlEUTFJRFExSURRMWFEUXlNbU15TkM0NE1USTFJREFnTkRVdE1qQXVNVGczTlNBME5TMDBOWFl0TXpJM0xqVTNPREV5Tld3dE5UTXVPVE0zTlNBeE5qRXVPREUyTkRBMll5MDJMakV6TmpjeE9TQXhPQzR6T1RnME16Z3RNak11TWpnNU1EWXlJRE13TGpjMk1UY3hPUzAwTWk0Mk9ETTFPVFFnTXpBdU56WXhOekU1ZW0wd0lEQWlMejQ4Y0dGMGFDQmtQU0p0TXpFMklEQm9MVEV5TUdNdE1qUXVPREV5TlNBd0xUUTFJREl3TGpFNE56VXRORFVnTkRWMk1UVm9MVEV5TlM0eE9URTBNRFpzTlRZdU5UYzBNakU0SURFMk9TNDNORFl3T1RSak1pNHdOVEEzT0RJZ05pNHhNelkzTVRnZ055NDNOemN6TkRRZ01UQXVNalV6T1RBMklERTBMakl6T0RJNE1pQXhNQzR5TlRNNU1EWm9PRFF1TXpjNE9UQTJkaTB4TldNd0xUZ3VNamc1TURZeUlEWXVOekV3T1RNNExURTFJREUxTFRFMWFERXlNR000TGpJNE9UQTJNaUF3SURFMUlEWXVOekV3T1RNNElERTFJREUxZGpFMWFEZzBMak0zT0Rrd05tTTJMalEyTURrek9DQXdJREV5TGpFNE56VXROQzR4TVRjeE9EZ2dNVFF1TWpNNE1qZ3lMVEV3TGpJMU16a3dObXcxTmk0MU56Z3hNalF0TVRZNUxqYzBOakE1TkdndE1USTFMakU1TlRNeE1uWXRNVFZqTUMweU5DNDRNVEkxTFRJd0xqRTROelV0TkRVdE5EVXRORFY2YlMweE16VWdOakIyTFRFMVl6QXRPQzR5Tnpjek5EUWdOaTQzTWpJMk5UWXRNVFVnTVRVdE1UVm9NVEl3WXpndU1qYzNNelEwSURBZ01UVWdOaTQzTWpJMk5UWWdNVFVnTVRWMk1UVjZiVEFnTUNJdlBqd3ZjM1puUGc9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=