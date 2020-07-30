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
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _static_images_sobre_ilustracao_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/images/sobre/ilustracao.svg */ "./static/images/sobre/ilustracao.svg");
/* harmony import */ var _static_images_sobre_ilustracao_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_sobre_ilustracao_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_images_sobre_alex_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/images/sobre/alex.jpg */ "./static/images/sobre/alex.jpg");
/* harmony import */ var _static_images_sobre_alex_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_sobre_alex_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_styles_sass_sobre_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/styles/sass/sobre.scss */ "./static/styles/sass/sobre.scss");
/* harmony import */ var _static_styles_sass_sobre_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_styles_sass_sobre_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\pages\\sobre.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function sobre(props) {
  var pageTransition = {
    type: "tween",
    ease: 'anticipate',
    duration: 1
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Sobre",
    description: "Sem Descri\xE7\xE3o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "about container",
    style: {
      overflowX: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Sobre"), __jsx("div", {
    className: "about__content row align-items-center mt-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].section, {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    },
    transition: pageTransition,
    className: "col-xs-12 col-md-12 col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "img-fluid",
    src: _static_images_sobre_ilustracao_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Ilustra\xE7\xE3o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].section, {
    initial: {
      opacity: 0,
      x: "100vw",
      scale: 0.8
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      x: "-100vw",
      scale: 1.2
    },
    transition: pageTransition,
    className: "about__information col-xs-12 col-md-12 col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row align-items-center text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Alex Ricardo")), __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "img-fluid img-thumbnail",
    src: _static_images_sobre_alex_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Alex Ricardo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }))), __jsx("h5", {
    className: "text-center mt-4 fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, " Desenvolvedor Web"), __jsx("div", {
    className: "pt-4 fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "Meu nome \xE9 Alex Ricardo e eu desenvolvo/programo sites. Me considero um v\xEDciado e apaixonado por c\xF3digos! Eu venho projetando e codificando na web desde 2017."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, "Minha primeira experi\xEAncia com as tecnologias web apareceu quando eu estudava no Instituto Federal de educa\xE7\xE3o, ci\xEAncia e tecnologia de Pernambuco(IFPE) e estava cursando T\xE9cnico em inform\xE1tica para Internet."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "No decorrer da minha carreira da minha carreira profissional, descobrir novas maneiras de desenvolver funcionalidades na web. Eventualmente, isso me levou a construir websites elegantes, r\xE1pidos, responsivos e com usabilidade."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, "Aprimorei meus conhecimentos aprendendo diversas tecnologias atuais que s\xE3o utilizadas por diversas empresas(Facebook, Uber, Instagram, Spotify..) para auxiliar nas cria\xE7\xF5es dos websites, at\xE9 ent\xE3o construir alguns projetos e os mesmos podem ser encontrados no meu ", __jsx("a", {
    href: "https://github.com/Csalex123",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 293
    }
  }, "GitHub.")), __jsx("b", {
    className: "pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Algumas tecnologias que tenho conhecimento:"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 33
    }
  }, "Front-end: "), " Html 5 \u2022 Css3 \u2022 JavaScript "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, "Back-end: "), " Php 7 \u2022 Java \u2022 Node.JS \u2022 SQL"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }, "Frameworks/Bibliotecas:  "), " React Js \u2022 React Native \u2022 Boostrap \u2022 Materialize \u2022 Jquery \u2022 Material Design \u2022 Frame Motion \u2022 Express \u2022 Google Maps Api \u2022 Axios \u2022 Sass \u2022 Codeigniter 3 \u2022 MySql ")))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zb2JyZS5qcyJdLCJuYW1lcyI6WyJzb2JyZSIsInByb3BzIiwicGFnZVRyYW5zaXRpb24iLCJ0eXBlIiwiZWFzZSIsImR1cmF0aW9uIiwib3ZlcmZsb3dYIiwib3BhY2l0eSIsIngiLCJzY2FsZSIsIklsdXN0cmFjYW8iLCJGb3RvQWxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBRWxCLE1BQU1DLGNBQWMsR0FBRztBQUNuQkMsUUFBSSxFQUFFLE9BRGE7QUFFbkJDLFFBQUksRUFBRSxZQUZhO0FBR25CQyxZQUFRLEVBQUU7QUFIUyxHQUF2QjtBQVFBLFNBQ0ksbUVBQ0ksTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBQyxPQUFaO0FBQW9CLGVBQVcsRUFBQyxxQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFHQTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxvREFBRCxDQUFRLE9BQVI7QUFDSSxXQUFPLEVBQUU7QUFBRUMsYUFBTyxFQUFFLENBQVg7QUFBY0MsT0FBQyxFQUFFLFFBQWpCO0FBQTJCQyxXQUFLLEVBQUU7QUFBbEMsS0FEYjtBQUVJLFdBQU8sRUFBRTtBQUFFRixhQUFPLEVBQUUsQ0FBWDtBQUFjQyxPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLFdBQUssRUFBRTtBQUEzQixLQUZiO0FB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LENBUkosQ0FqQkosQ0FYSixDQUhBLENBRkosRUFzREEsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdERBLENBREo7QUEwREg7O0FBRWNYLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzb2JyZS5qcy45MGMyMmRjMTg4NmY3MDY4MzM5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuaW1wb3J0IElsdXN0cmFjYW8gZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9zb2JyZS9pbHVzdHJhY2FvLnN2Zyc7XHJcbmltcG9ydCBGb3RvQWxleCBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL3NvYnJlL2FsZXguanBnJztcclxuXHJcbmltcG9ydCAnLi4vc3RhdGljL3N0eWxlcy9zYXNzL3NvYnJlLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gc29icmUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBwYWdlVHJhbnNpdGlvbiA9IHtcclxuICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXHJcbiAgICAgICAgZWFzZTogJ2FudGljaXBhdGUnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZW51IHRpdGxlPVwiU29icmVcIiBkZXNjcmlwdGlvbj1cIlNlbSBEZXNjcmnDp8Ojb1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQgY29udGFpbmVyXCIgc3R5bGU9e3sgb3ZlcmZsb3dYOiBcImhpZGRlblwifX0+XHJcbiAgICAgICAgICAgIDxoMT5Tb2JyZTwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X19jb250ZW50IHJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtMiBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLnNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IFwiLTEwMHZ3XCIsIHNjYWxlOiAwLjggfX1cclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAsIHNjYWxlOiAxIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiBcIjEwMHZ3XCIsIHNjYWxlOiAxLjIgfX1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXtwYWdlVHJhbnNpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLW1kLTEyIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0lsdXN0cmFjYW99IGFsdD1cIklsdXN0cmHDp8Ojb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogXCIxMDB2d1wiLCBzY2FsZTogMC44IH19XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwLCBzY2FsZTogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogXCItMTAwdndcIiwgc2NhbGU6IDEuMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3BhZ2VUcmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFib3V0X19pbmZvcm1hdGlvbiBjb2wteHMtMTIgY29sLW1kLTEyIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmFkZUluXCI+QWxleCBSaWNhcmRvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctdGh1bWJuYWlsXCIgc3JjPXtGb3RvQWxleH0gYWx0PVwiQWxleCBSaWNhcmRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00IGZhZGVJblwiID4gRGVzZW52b2x2ZWRvciBXZWI8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgZmFkZUluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1ldSBub21lIMOpIEFsZXggUmljYXJkbyBlIGV1IGRlc2Vudm9sdm8vcHJvZ3JhbW8gc2l0ZXMuIE1lIGNvbnNpZGVybyB1bSB2w61jaWFkbyBlIGFwYWl4b25hZG8gcG9yIGPDs2RpZ29zISBFdSB2ZW5obyBwcm9qZXRhbmRvIGUgY29kaWZpY2FuZG8gbmEgd2ViIGRlc2RlIDIwMTcuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NaW5oYSBwcmltZWlyYSBleHBlcmnDqm5jaWEgY29tIGFzIHRlY25vbG9naWFzIHdlYiBhcGFyZWNldSBxdWFuZG8gZXUgZXN0dWRhdmEgbm8gSW5zdGl0dXRvIEZlZGVyYWwgZGUgZWR1Y2HDp8OjbywgY2nDqm5jaWEgZSB0ZWNub2xvZ2lhIGRlIFBlcm5hbWJ1Y28oSUZQRSkgZSBlc3RhdmEgY3Vyc2FuZG8gVMOpY25pY28gZW0gaW5mb3Jtw6F0aWNhIHBhcmEgSW50ZXJuZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5ObyBkZWNvcnJlciBkYSBtaW5oYSBjYXJyZWlyYSBkYSBtaW5oYSBjYXJyZWlyYSBwcm9maXNzaW9uYWwsIGRlc2NvYnJpciBub3ZhcyBtYW5laXJhcyBkZSBkZXNlbnZvbHZlciBmdW5jaW9uYWxpZGFkZXMgbmEgd2ViLiBFdmVudHVhbG1lbnRlLCBpc3NvIG1lIGxldm91IGEgY29uc3RydWlyIHdlYnNpdGVzIGVsZWdhbnRlcywgcsOhcGlkb3MsIHJlc3BvbnNpdm9zIGUgY29tIHVzYWJpbGlkYWRlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXByaW1vcmVpIG1ldXMgY29uaGVjaW1lbnRvcyBhcHJlbmRlbmRvIGRpdmVyc2FzIHRlY25vbG9naWFzIGF0dWFpcyBxdWUgc8OjbyB1dGlsaXphZGFzIHBvciBkaXZlcnNhcyBlbXByZXNhcyhGYWNlYm9vaywgVWJlciwgSW5zdGFncmFtLCBTcG90aWZ5Li4pIHBhcmEgYXV4aWxpYXIgbmFzIGNyaWHDp8O1ZXMgZG9zIHdlYnNpdGVzLCBhdMOpIGVudMOjbyBjb25zdHJ1aXIgYWxndW5zIHByb2pldG9zIGUgb3MgbWVzbW9zIHBvZGVtIHNlciBlbmNvbnRyYWRvcyBubyBtZXUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Dc2FsZXgxMjNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRIdWIuPC9hPjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cInB0LTVcIj5BbGd1bWFzIHRlY25vbG9naWFzIHF1ZSB0ZW5obyBjb25oZWNpbWVudG86PC9iPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPkZyb250LWVuZDogPC9iPiBIdG1sIDUg4oCiIENzczMg4oCiIEphdmFTY3JpcHQgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5CYWNrLWVuZDogPC9iPiBQaHAgNyDigKIgSmF2YSDigKIgTm9kZS5KUyDigKIgU1FMPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5GcmFtZXdvcmtzL0JpYmxpb3RlY2FzOiAgPC9iPiBSZWFjdCBKcyDigKIgUmVhY3QgTmF0aXZlIOKAoiBCb29zdHJhcCDigKIgTWF0ZXJpYWxpemUg4oCiIEpxdWVyeSDigKIgTWF0ZXJpYWwgRGVzaWduIOKAoiBGcmFtZSBNb3Rpb24g4oCiIEV4cHJlc3Mg4oCiIEdvb2dsZSBNYXBzIEFwaSDigKIgQXhpb3Mg4oCiIFNhc3Mg4oCiIENvZGVpZ25pdGVyIDMg4oCiIE15U3FsIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLnNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc29icmU7Il0sInNvdXJjZVJvb3QiOiIifQ==