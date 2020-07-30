webpackHotUpdate("static\\development\\pages\\sobre.js",{

/***/ "./pages/sobre.js":
/*!************************!*\
  !*** ./pages/sobre.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _static_images_sobre_ilustracao_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/images/sobre/ilustracao.svg */ "./static/images/sobre/ilustracao.svg");
/* harmony import */ var _static_images_sobre_ilustracao_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_sobre_ilustracao_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_sobre_alex_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/sobre/alex.jpg */ "./static/images/sobre/alex.jpg");
/* harmony import */ var _static_images_sobre_alex_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_sobre_alex_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_styles_sass_sobre_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/styles/sass/sobre.scss */ "./static/styles/sass/sobre.scss");
/* harmony import */ var _static_styles_sass_sobre_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_styles_sass_sobre_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\pages\\sobre.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function sobre(props) {
  _s();

  var sectionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var intersection = Object(react_use__WEBPACK_IMPORTED_MODULE_1__["useIntersection"])(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  var fadeIn = function fadeIn(element) {
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: 0.3
      }
    });
  };

  var fadeOut = function fadeOut(element) {
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out'
    });
  };

  intersection && intersection.intersectionRatio < 0.5 ? fadeOut('.fadeIn') : fadeIn('.fadeIn');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Sobre",
    description: "Sem Descri\xE7\xE3o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "about container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Sobre"), __jsx("div", {
    className: "about__content row align-items-center mt-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: "col-xs-12 col-md-12 col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "img-fluid",
    src: _static_images_sobre_ilustracao_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Ilustra\xE7\xE3o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  })), __jsx("section", {
    className: "about__information col-xs-12 col-md-12 col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row align-items-center text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx("h2", {
    className: "fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, "Alex Ricardo")), __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx("img", {
    className: "img-fluid img-thumbnail",
    src: _static_images_sobre_alex_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Alex Ricardo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }))), __jsx("h5", {
    className: "text-center mt-4 fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, " Desenvolvedor Web"), __jsx("div", {
    className: "pt-4 fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Meu nome \xE9 Alex Ricardo e eu desenvolvo/programo sites. Me considero um v\xEDciado e apaixonado por c\xF3digos! Eu venho projetando e codificando na web desde 2017."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, "Minha primeira experi\xEAncia com as tecnologias web apareceu quando eu estudava no Instituto Federal de educa\xE7\xE3o, ci\xEAncia e tecnologia de Pernambuco(IFPE) e estava cursando T\xE9cnico em inform\xE1tica para Internet."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, "No decorrer da minha carreira da minha carreira profissional, descobrir novas maneiras de desenvolver funcionalidades na web. Eventualmente, isso me levou a construir websites elegantes, r\xE1pidos, responsivos e com usabilidade."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, "Aprimorei meus conhecimentos aprendendo diversas tecnologias atuais que s\xE3o utilizadas por diversas empresas(Facebook, Uber, Instagram, Spotify..) para auxiliar nas cria\xE7\xF5es dos websites, at\xE9 ent\xE3o construir alguns projetos e os mesmos podem ser encontrados no meu ", __jsx("a", {
    href: "https://github.com/Csalex123",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 297
    }
  }, "GitHub.")), __jsx("b", {
    className: "pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "Algumas tecnologias que tenho conhecimento:"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, "Front-end: "), " Html 5 \u2022 Css3 \u2022 JavaScript "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, "Back-end: "), " Php 7 \u2022 Java \u2022 Node.JS \u2022 SQL"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, "Frameworks/Bibliotecas:  "), " React Js \u2022 React Native \u2022 Boostrap \u2022 Materialize \u2022 Jquery \u2022 Material Design \u2022 Frame Motion \u2022 Express \u2022 Google Maps Api \u2022 Axios \u2022 Sass \u2022 Codeigniter 3 \u2022 MySql ")))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }));
}

_s(sobre, "vKXZAA8puW+WbOxaCOOfZ8AOm+E=", false, function () {
  return [react_use__WEBPACK_IMPORTED_MODULE_1__["useIntersection"]];
});

/* harmony default export */ __webpack_exports__["default"] = (sobre);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zb2JyZS5qcyJdLCJuYW1lcyI6WyJzb2JyZSIsInByb3BzIiwic2VjdGlvblJlZiIsInVzZVJlZiIsImludGVyc2VjdGlvbiIsInVzZUludGVyc2VjdGlvbiIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiZmFkZUluIiwiZWxlbWVudCIsImdzYXAiLCJ0byIsIm9wYWNpdHkiLCJ5IiwiZWFzZSIsInN0YWdnZXIiLCJhbW91bnQiLCJmYWRlT3V0IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJJbHVzdHJhY2FvIiwiRm90b0FsZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ2xCLE1BQU1DLFVBQVUsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXpCO0FBRUEsTUFBTUMsWUFBWSxHQUFHQyxpRUFBZSxDQUFDSCxVQUFELEVBQWE7QUFDN0NJLFFBQUksRUFBRSxJQUR1QztBQUU3Q0MsY0FBVSxFQUFFLEtBRmlDO0FBRzdDQyxhQUFTLEVBQUU7QUFIa0MsR0FBYixDQUFwQzs7QUFNQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxPQUFPLEVBQUk7QUFDdEJDLGdEQUFJLENBQUNDLEVBQUwsQ0FBUUYsT0FBUixFQUFpQixDQUFqQixFQUFvQjtBQUNoQkcsYUFBTyxFQUFFLENBRE87QUFFaEJDLE9BQUMsRUFBRSxDQUFDLEVBRlk7QUFHaEJDLFVBQUksRUFBRSxZQUhVO0FBSWhCQyxhQUFPLEVBQUU7QUFDTEMsY0FBTSxFQUFFO0FBREg7QUFKTyxLQUFwQjtBQVFILEdBVEQ7O0FBV0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQVIsT0FBTyxFQUFJO0FBQ3ZCQyxnREFBSSxDQUFDQyxFQUFMLENBQVFGLE9BQVIsRUFBaUIsQ0FBakIsRUFBb0I7QUFDaEJHLGFBQU8sRUFBRSxDQURPO0FBRWhCQyxPQUFDLEVBQUUsQ0FBQyxFQUZZO0FBR2hCQyxVQUFJLEVBQUU7QUFIVSxLQUFwQjtBQUtILEdBTkQ7O0FBU0FYLGNBQVksSUFBSUEsWUFBWSxDQUFDZSxpQkFBYixHQUFpQyxHQUFqRCxHQUF1REQsT0FBTyxDQUFDLFNBQUQsQ0FBOUQsR0FBNEVULE1BQU0sQ0FBQyxTQUFELENBQWxGO0FBRUEsU0FDSSxtRUFDSSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFDLE9BQVo7QUFBb0IsZUFBVyxFQUFDLHFCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBR0k7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQVMsYUFBUyxFQUFDLDhCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixPQUFHLEVBQUVXLDBFQUFoQztBQUE0QyxPQUFHLEVBQUMsa0JBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLEVBTUk7QUFBUyxhQUFTLEVBQUMsaURBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQXlDLE9BQUcsRUFBRUMsb0VBQTlDO0FBQXdELE9BQUcsRUFBQyxjQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURKLEVBVUk7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFWSixFQVlJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0tBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBPQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2T0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaVNBQTRRO0FBQUcsUUFBSSxFQUFDLDhCQUFSO0FBQXVDLFVBQU0sRUFBQyxRQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTVRLENBSkosRUFNSTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBTkosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUosMkNBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSixpREFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFKLGdPQUhKLENBUkosQ0FaSixDQU5KLENBSEosQ0FGSixFQTRDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1Q0osQ0FESjtBQWdESDs7R0EvRVFyQixLO1VBR2dCSyx5RDs7O0FBOEVWTCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc29icmUuanMuMDY4MTgyZTMyMzkzNmExMjQwOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gXCJyZWFjdC11c2VcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcblxyXG5pbXBvcnQgSWx1c3RyYWNhbyBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL3NvYnJlL2lsdXN0cmFjYW8uc3ZnJztcclxuaW1wb3J0IEZvdG9BbGV4IGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvc29icmUvYWxleC5qcGcnO1xyXG5cclxuaW1wb3J0ICcuLi9zdGF0aWMvc3R5bGVzL3Nhc3Mvc29icmUuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBzb2JyZShwcm9wcykge1xyXG4gICAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb24oc2VjdGlvblJlZiwge1xyXG4gICAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuNVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmFkZUluID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhlbGVtZW50LCAxLCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHk6IC02MCxcclxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnLFxyXG4gICAgICAgICAgICBzdGFnZ2VyOiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAuM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmFkZU91dCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oZWxlbWVudCwgMSwge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICB5OiAtMjAsXHJcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjQub3V0JyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaW50ZXJzZWN0aW9uICYmIGludGVyc2VjdGlvbi5pbnRlcnNlY3Rpb25SYXRpbyA8IDAuNSA/IGZhZGVPdXQoJy5mYWRlSW4nKSA6IGZhZGVJbignLmZhZGVJbicpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1lbnUgdGl0bGU9XCJTb2JyZVwiIGRlc2NyaXB0aW9uPVwiU2VtIERlc2NyacOnw6NvXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Tb2JyZTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9fY29udGVudCByb3cgYWxpZ24taXRlbXMtY2VudGVyIG10LTIgXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtMTIgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0lsdXN0cmFjYW99IGFsdD1cIklsdXN0cmHDp8Ojb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhYm91dF9faW5mb3JtYXRpb24gY29sLXhzLTEyIGNvbC1tZC0xMiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhZGVJblwiPkFsZXggUmljYXJkbzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXRodW1ibmFpbFwiIHNyYz17Rm90b0FsZXh9IGFsdD1cIkFsZXggUmljYXJkb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNCBmYWRlSW5cIiA+IERlc2Vudm9sdmVkb3IgV2ViPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBmYWRlSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1ldSBub21lIMOpIEFsZXggUmljYXJkbyBlIGV1IGRlc2Vudm9sdm8vcHJvZ3JhbW8gc2l0ZXMuIE1lIGNvbnNpZGVybyB1bSB2w61jaWFkbyBlIGFwYWl4b25hZG8gcG9yIGPDs2RpZ29zISBFdSB2ZW5obyBwcm9qZXRhbmRvIGUgY29kaWZpY2FuZG8gbmEgd2ViIGRlc2RlIDIwMTcuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWluaGEgcHJpbWVpcmEgZXhwZXJpw6puY2lhIGNvbSBhcyB0ZWNub2xvZ2lhcyB3ZWIgYXBhcmVjZXUgcXVhbmRvIGV1IGVzdHVkYXZhIG5vIEluc3RpdHV0byBGZWRlcmFsIGRlIGVkdWNhw6fDo28sIGNpw6puY2lhIGUgdGVjbm9sb2dpYSBkZSBQZXJuYW1idWNvKElGUEUpIGUgZXN0YXZhIGN1cnNhbmRvIFTDqWNuaWNvIGVtIGluZm9ybcOhdGljYSBwYXJhIEludGVybmV0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vIGRlY29ycmVyIGRhIG1pbmhhIGNhcnJlaXJhIGRhIG1pbmhhIGNhcnJlaXJhIHByb2Zpc3Npb25hbCwgZGVzY29icmlyIG5vdmFzIG1hbmVpcmFzIGRlIGRlc2Vudm9sdmVyIGZ1bmNpb25hbGlkYWRlcyBuYSB3ZWIuIEV2ZW50dWFsbWVudGUsIGlzc28gbWUgbGV2b3UgYSBjb25zdHJ1aXIgd2Vic2l0ZXMgZWxlZ2FudGVzLCByw6FwaWRvcywgcmVzcG9uc2l2b3MgZSBjb20gdXNhYmlsaWRhZGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXByaW1vcmVpIG1ldXMgY29uaGVjaW1lbnRvcyBhcHJlbmRlbmRvIGRpdmVyc2FzIHRlY25vbG9naWFzIGF0dWFpcyBxdWUgc8OjbyB1dGlsaXphZGFzIHBvciBkaXZlcnNhcyBlbXByZXNhcyhGYWNlYm9vaywgVWJlciwgSW5zdGFncmFtLCBTcG90aWZ5Li4pIHBhcmEgYXV4aWxpYXIgbmFzIGNyaWHDp8O1ZXMgZG9zIHdlYnNpdGVzLCBhdMOpIGVudMOjbyBjb25zdHJ1aXIgYWxndW5zIHByb2pldG9zIGUgb3MgbWVzbW9zIHBvZGVtIHNlciBlbmNvbnRyYWRvcyBubyBtZXUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Dc2FsZXgxMjNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRIdWIuPC9hPjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJwdC01XCI+QWxndW1hcyB0ZWNub2xvZ2lhcyBxdWUgdGVuaG8gY29uaGVjaW1lbnRvOjwvYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPkZyb250LWVuZDogPC9iPiBIdG1sIDUg4oCiIENzczMg4oCiIEphdmFTY3JpcHQgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGI+QmFjay1lbmQ6IDwvYj4gUGhwIDcg4oCiIEphdmEg4oCiIE5vZGUuSlMg4oCiIFNRTDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPkZyYW1ld29ya3MvQmlibGlvdGVjYXM6ICA8L2I+IFJlYWN0IEpzIOKAoiBSZWFjdCBOYXRpdmUg4oCiIEJvb3N0cmFwIOKAoiBNYXRlcmlhbGl6ZSDigKIgSnF1ZXJ5IOKAoiBNYXRlcmlhbCBEZXNpZ24g4oCiIEZyYW1lIE1vdGlvbiDigKIgRXhwcmVzcyDigKIgR29vZ2xlIE1hcHMgQXBpIOKAoiBBeGlvcyDigKIgU2FzcyDigKIgQ29kZWlnbml0ZXIgMyDigKIgTXlTcWwgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvYnJlOyJdLCJzb3VyY2VSb290IjoiIn0=