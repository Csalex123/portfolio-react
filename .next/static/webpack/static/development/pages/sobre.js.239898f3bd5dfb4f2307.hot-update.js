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

  intersection && intersection.intersectionRatio < 0.5 ? fadeOut('.fadeOut') : fadeIn('.fadeOut');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zb2JyZS5qcyJdLCJuYW1lcyI6WyJzb2JyZSIsInByb3BzIiwic2VjdGlvblJlZiIsInVzZVJlZiIsImludGVyc2VjdGlvbiIsInVzZUludGVyc2VjdGlvbiIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiZmFkZUluIiwiZWxlbWVudCIsImdzYXAiLCJ0byIsIm9wYWNpdHkiLCJ5IiwiZWFzZSIsInN0YWdnZXIiLCJhbW91bnQiLCJmYWRlT3V0IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJJbHVzdHJhY2FvIiwiRm90b0FsZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ2xCLE1BQU1DLFVBQVUsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXpCO0FBRUEsTUFBTUMsWUFBWSxHQUFHQyxpRUFBZSxDQUFDSCxVQUFELEVBQWE7QUFDN0NJLFFBQUksRUFBRSxJQUR1QztBQUU3Q0MsY0FBVSxFQUFFLEtBRmlDO0FBRzdDQyxhQUFTLEVBQUU7QUFIa0MsR0FBYixDQUFwQzs7QUFNQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxPQUFPLEVBQUk7QUFDdEJDLGdEQUFJLENBQUNDLEVBQUwsQ0FBUUYsT0FBUixFQUFpQixDQUFqQixFQUFvQjtBQUNoQkcsYUFBTyxFQUFFLENBRE87QUFFaEJDLE9BQUMsRUFBRSxDQUFDLEVBRlk7QUFHaEJDLFVBQUksRUFBRSxZQUhVO0FBSWhCQyxhQUFPLEVBQUU7QUFDTEMsY0FBTSxFQUFFO0FBREg7QUFKTyxLQUFwQjtBQVFILEdBVEQ7O0FBV0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQVIsT0FBTyxFQUFJO0FBQ3ZCQyxnREFBSSxDQUFDQyxFQUFMLENBQVFGLE9BQVIsRUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFKLGdPQUhKLENBUkosQ0FaSixDQU5KLENBSEosQ0FGSixFQTRDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1Q0osQ0FESjtBQWdESDs7R0EvRVFyQixLO1VBR2dCSyx5RDs7O0FBOEVWTCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc29icmUuanMuMjM5ODk4ZjNiZDVkZmI0ZjIzMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gXCJyZWFjdC11c2VcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcblxyXG5pbXBvcnQgSWx1c3RyYWNhbyBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL3NvYnJlL2lsdXN0cmFjYW8uc3ZnJztcclxuaW1wb3J0IEZvdG9BbGV4IGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvc29icmUvYWxleC5qcGcnO1xyXG5cclxuaW1wb3J0ICcuLi9zdGF0aWMvc3R5bGVzL3Nhc3Mvc29icmUuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBzb2JyZShwcm9wcykge1xyXG4gICAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb24oc2VjdGlvblJlZiwge1xyXG4gICAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuNVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmFkZUluID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhlbGVtZW50LCAxLCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHk6IC02MCxcclxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnLFxyXG4gICAgICAgICAgICBzdGFnZ2VyOiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAuM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmFkZU91dCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oZWxlbWVudCwgMSwge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICB5OiAtMjAsXHJcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjQub3V0JyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaW50ZXJzZWN0aW9uICYmIGludGVyc2VjdGlvbi5pbnRlcnNlY3Rpb25SYXRpbyA8IDAuNSA/IGZhZGVPdXQoJy5mYWRlT3V0JykgOiBmYWRlSW4oJy5mYWRlT3V0Jyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWVudSB0aXRsZT1cIlNvYnJlXCIgZGVzY3JpcHRpb249XCJTZW0gRGVzY3Jpw6fDo29cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlNvYnJlPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19jb250ZW50IHJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtMiBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC0xMiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17SWx1c3RyYWNhb30gYWx0PVwiSWx1c3RyYcOnw6NvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFib3V0X19pbmZvcm1hdGlvbiBjb2wteHMtMTIgY29sLW1kLTEyIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmFkZUluXCI+QWxleCBSaWNhcmRvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctdGh1bWJuYWlsXCIgc3JjPXtGb3RvQWxleH0gYWx0PVwiQWxleCBSaWNhcmRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00IGZhZGVJblwiID4gRGVzZW52b2x2ZWRvciBXZWI8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGZhZGVJblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWV1IG5vbWUgw6kgQWxleCBSaWNhcmRvIGUgZXUgZGVzZW52b2x2by9wcm9ncmFtbyBzaXRlcy4gTWUgY29uc2lkZXJvIHVtIHbDrWNpYWRvIGUgYXBhaXhvbmFkbyBwb3IgY8OzZGlnb3MhIEV1IHZlbmhvIHByb2pldGFuZG8gZSBjb2RpZmljYW5kbyBuYSB3ZWIgZGVzZGUgMjAxNy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NaW5oYSBwcmltZWlyYSBleHBlcmnDqm5jaWEgY29tIGFzIHRlY25vbG9naWFzIHdlYiBhcGFyZWNldSBxdWFuZG8gZXUgZXN0dWRhdmEgbm8gSW5zdGl0dXRvIEZlZGVyYWwgZGUgZWR1Y2HDp8OjbywgY2nDqm5jaWEgZSB0ZWNub2xvZ2lhIGRlIFBlcm5hbWJ1Y28oSUZQRSkgZSBlc3RhdmEgY3Vyc2FuZG8gVMOpY25pY28gZW0gaW5mb3Jtw6F0aWNhIHBhcmEgSW50ZXJuZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gZGVjb3JyZXIgZGEgbWluaGEgY2FycmVpcmEgZGEgbWluaGEgY2FycmVpcmEgcHJvZmlzc2lvbmFsLCBkZXNjb2JyaXIgbm92YXMgbWFuZWlyYXMgZGUgZGVzZW52b2x2ZXIgZnVuY2lvbmFsaWRhZGVzIG5hIHdlYi4gRXZlbnR1YWxtZW50ZSwgaXNzbyBtZSBsZXZvdSBhIGNvbnN0cnVpciB3ZWJzaXRlcyBlbGVnYW50ZXMsIHLDoXBpZG9zLCByZXNwb25zaXZvcyBlIGNvbSB1c2FiaWxpZGFkZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BcHJpbW9yZWkgbWV1cyBjb25oZWNpbWVudG9zIGFwcmVuZGVuZG8gZGl2ZXJzYXMgdGVjbm9sb2dpYXMgYXR1YWlzIHF1ZSBzw6NvIHV0aWxpemFkYXMgcG9yIGRpdmVyc2FzIGVtcHJlc2FzKEZhY2Vib29rLCBVYmVyLCBJbnN0YWdyYW0sIFNwb3RpZnkuLikgcGFyYSBhdXhpbGlhciBuYXMgY3JpYcOnw7VlcyBkb3Mgd2Vic2l0ZXMsIGF0w6kgZW50w6NvIGNvbnN0cnVpciBhbGd1bnMgcHJvamV0b3MgZSBvcyBtZXNtb3MgcG9kZW0gc2VyIGVuY29udHJhZG9zIG5vIG1ldSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NzYWxleDEyM1wiIHRhcmdldD1cIl9ibGFua1wiPkdpdEh1Yi48L2E+PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cInB0LTVcIj5BbGd1bWFzIHRlY25vbG9naWFzIHF1ZSB0ZW5obyBjb25oZWNpbWVudG86PC9iPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGI+RnJvbnQtZW5kOiA8L2I+IEh0bWwgNSDigKIgQ3NzMyDigKIgSmF2YVNjcmlwdCA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5CYWNrLWVuZDogPC9iPiBQaHAgNyDigKIgSmF2YSDigKIgTm9kZS5KUyDigKIgU1FMPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGI+RnJhbWV3b3Jrcy9CaWJsaW90ZWNhczogIDwvYj4gUmVhY3QgSnMg4oCiIFJlYWN0IE5hdGl2ZSDigKIgQm9vc3RyYXAg4oCiIE1hdGVyaWFsaXplIOKAoiBKcXVlcnkg4oCiIE1hdGVyaWFsIERlc2lnbiDigKIgRnJhbWUgTW90aW9uIOKAoiBFeHByZXNzIOKAoiBHb29nbGUgTWFwcyBBcGkg4oCiIEF4aW9zIOKAoiBTYXNzIOKAoiBDb2RlaWduaXRlciAzIOKAoiBNeVNxbCA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc29icmU7Il0sInNvdXJjZVJvb3QiOiIifQ==