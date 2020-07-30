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
  var pageVariants = {
    initial: {
      opacity: 0,
      y: "100vh",
      scale: 1
    },
    "in": {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: "100vh",
      scale: 1
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Sobre",
    description: "Sem Descri\xE7\xE3o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    initial: "initial",
    animate: "in",
    exit: "out",
    variants: pageVariants,
    transition: pageTransition,
    className: "about container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Sobre"), __jsx("div", {
    className: "about__content row align-items-center mt-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: "col-xs-12 col-md-12 col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "img-fluid",
    src: _static_images_sobre_ilustracao_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Ilustra\xE7\xE3o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  })), __jsx("section", {
    className: "about__information col-xs-12 col-md-12 col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row align-items-center text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("h2", {
    className: "fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, "Alex Ricardo")), __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("img", {
    className: "img-fluid img-thumbnail",
    src: _static_images_sobre_alex_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Alex Ricardo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }))), __jsx("h5", {
    className: "text-center mt-4 fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, " Desenvolvedor Web"), __jsx("div", {
    className: "pt-4 fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "Meu nome \xE9 Alex Ricardo e eu desenvolvo/programo sites. Me considero um v\xEDciado e apaixonado por c\xF3digos! Eu venho projetando e codificando na web desde 2017."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "Minha primeira experi\xEAncia com as tecnologias web apareceu quando eu estudava no Instituto Federal de educa\xE7\xE3o, ci\xEAncia e tecnologia de Pernambuco(IFPE) e estava cursando T\xE9cnico em inform\xE1tica para Internet."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, "No decorrer da minha carreira da minha carreira profissional, descobrir novas maneiras de desenvolver funcionalidades na web. Eventualmente, isso me levou a construir websites elegantes, r\xE1pidos, responsivos e com usabilidade."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, "Aprimorei meus conhecimentos aprendendo diversas tecnologias atuais que s\xE3o utilizadas por diversas empresas(Facebook, Uber, Instagram, Spotify..) para auxiliar nas cria\xE7\xF5es dos websites, at\xE9 ent\xE3o construir alguns projetos e os mesmos podem ser encontrados no meu ", __jsx("a", {
    href: "https://github.com/Csalex123",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 297
    }
  }, "GitHub.")), __jsx("b", {
    className: "pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Algumas tecnologias que tenho conhecimento:"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }, "Front-end: "), " Html 5 \u2022 Css3 \u2022 JavaScript "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }, "Back-end: "), " Php 7 \u2022 Java \u2022 Node.JS \u2022 SQL"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, "Frameworks/Bibliotecas:  "), " React Js \u2022 React Native \u2022 Boostrap \u2022 Materialize \u2022 Jquery \u2022 Material Design \u2022 Frame Motion \u2022 Express \u2022 Google Maps Api \u2022 Axios \u2022 Sass \u2022 Codeigniter 3 \u2022 MySql ")))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zb2JyZS5qcyJdLCJuYW1lcyI6WyJzb2JyZSIsInByb3BzIiwicGFnZVRyYW5zaXRpb24iLCJ0eXBlIiwiZWFzZSIsImR1cmF0aW9uIiwicGFnZVZhcmlhbnRzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwic2NhbGUiLCJ4Iiwib3V0IiwiSWx1c3RyYWNhbyIsIkZvdG9BbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFFbEIsTUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxRQUFJLEVBQUUsT0FEYTtBQUVuQkMsUUFBSSxFQUFFLFlBRmE7QUFHbkJDLFlBQVEsRUFBRTtBQUhTLEdBQXZCO0FBTUEsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxXQUFPLEVBQUU7QUFDTEMsYUFBTyxFQUFFLENBREo7QUFFTEMsT0FBQyxFQUFFLE9BRkU7QUFHTEMsV0FBSyxFQUFFO0FBSEYsS0FEUTtBQU1qQixVQUFJO0FBQ0FGLGFBQU8sRUFBRSxDQURUO0FBRUFHLE9BQUMsRUFBRSxDQUZIO0FBR0FELFdBQUssRUFBRTtBQUhQLEtBTmE7QUFXakJFLE9BQUcsRUFBRTtBQUNESixhQUFPLEVBQUUsQ0FEUjtBQUVEQyxPQUFDLEVBQUUsT0FGRjtBQUdEQyxXQUFLLEVBQUU7QUFITjtBQVhZLEdBQXJCO0FBa0JBLFNBQ0ksbUVBQ0ksTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBQyxPQUFaO0FBQW9CLGVBQVcsRUFBQyxxQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxXQUFPLEVBQUMsU0FBcEI7QUFBOEIsV0FBTyxFQUFDLElBQXRDO0FBQTJDLFFBQUksRUFBQyxLQUFoRDtBQUFzRCxZQUFRLEVBQUVKLFlBQWhFO0FBQThFLGNBQVUsRUFBRUosY0FBMUY7QUFBMEcsYUFBUyxFQUFDLGlCQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBR0k7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQVMsYUFBUyxFQUFDLDhCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixPQUFHLEVBQUVXLDBFQUFoQztBQUE0QyxPQUFHLEVBQUMsa0JBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLEVBTUk7QUFBUyxhQUFTLEVBQUMsaURBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQXlDLE9BQUcsRUFBRUMsb0VBQTlDO0FBQXdELE9BQUcsRUFBQyxjQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURKLEVBVUk7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFWSixFQVlJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0tBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBPQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2T0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaVNBQTRRO0FBQUcsUUFBSSxFQUFDLDhCQUFSO0FBQXVDLFVBQU0sRUFBQyxRQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTVRLENBSkosRUFNSTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBTkosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUosMkNBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSixpREFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFKLGdPQUhKLENBUkosQ0FaSixDQU5KLENBSEosQ0FGSixFQTRDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1Q0osQ0FESjtBQWdESDs7QUFFY2Qsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNvYnJlLmpzLjk3MzllNWQ5MThiNmRjOWZmMWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuXHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5pbXBvcnQgSWx1c3RyYWNhbyBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL3NvYnJlL2lsdXN0cmFjYW8uc3ZnJztcclxuaW1wb3J0IEZvdG9BbGV4IGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvc29icmUvYWxleC5qcGcnO1xyXG5cclxuaW1wb3J0ICcuLi9zdGF0aWMvc3R5bGVzL3Nhc3Mvc29icmUuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBzb2JyZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHBhZ2VUcmFuc2l0aW9uID0ge1xyXG4gICAgICAgIHR5cGU6IFwidHdlZW5cIixcclxuICAgICAgICBlYXNlOiAnYW50aWNpcGF0ZScsXHJcbiAgICAgICAgZHVyYXRpb246IDFcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYWdlVmFyaWFudHMgPSB7XHJcbiAgICAgICAgaW5pdGlhbDoge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICB5OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgIHNjYWxlOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW46IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdXQ6IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgeTogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWVudSB0aXRsZT1cIlNvYnJlXCIgZGVzY3JpcHRpb249XCJTZW0gRGVzY3Jpw6fDo29cIiAvPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaW5pdGlhbFwiIGFuaW1hdGU9XCJpblwiIGV4aXQ9XCJvdXRcIiB2YXJpYW50cz17cGFnZVZhcmlhbnRzfSB0cmFuc2l0aW9uPXtwYWdlVHJhbnNpdGlvbn0gY2xhc3NOYW1lPVwiYWJvdXQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+U29icmU8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2NvbnRlbnQgcm93IGFsaWduLWl0ZW1zLWNlbnRlciBtdC0yIFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLW1kLTEyIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtJbHVzdHJhY2FvfSBhbHQ9XCJJbHVzdHJhw6fDo29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXRfX2luZm9ybWF0aW9uIGNvbC14cy0xMiBjb2wtbWQtMTIgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmYWRlSW5cIj5BbGV4IFJpY2FyZG88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy10aHVtYm5haWxcIiBzcmM9e0ZvdG9BbGV4fSBhbHQ9XCJBbGV4IFJpY2FyZG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTQgZmFkZUluXCIgPiBEZXNlbnZvbHZlZG9yIFdlYjwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgZmFkZUluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NZXUgbm9tZSDDqSBBbGV4IFJpY2FyZG8gZSBldSBkZXNlbnZvbHZvL3Byb2dyYW1vIHNpdGVzLiBNZSBjb25zaWRlcm8gdW0gdsOtY2lhZG8gZSBhcGFpeG9uYWRvIHBvciBjw7NkaWdvcyEgRXUgdmVuaG8gcHJvamV0YW5kbyBlIGNvZGlmaWNhbmRvIG5hIHdlYiBkZXNkZSAyMDE3LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1pbmhhIHByaW1laXJhIGV4cGVyacOqbmNpYSBjb20gYXMgdGVjbm9sb2dpYXMgd2ViIGFwYXJlY2V1IHF1YW5kbyBldSBlc3R1ZGF2YSBubyBJbnN0aXR1dG8gRmVkZXJhbCBkZSBlZHVjYcOnw6NvLCBjacOqbmNpYSBlIHRlY25vbG9naWEgZGUgUGVybmFtYnVjbyhJRlBFKSBlIGVzdGF2YSBjdXJzYW5kbyBUw6ljbmljbyBlbSBpbmZvcm3DoXRpY2EgcGFyYSBJbnRlcm5ldC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ObyBkZWNvcnJlciBkYSBtaW5oYSBjYXJyZWlyYSBkYSBtaW5oYSBjYXJyZWlyYSBwcm9maXNzaW9uYWwsIGRlc2NvYnJpciBub3ZhcyBtYW5laXJhcyBkZSBkZXNlbnZvbHZlciBmdW5jaW9uYWxpZGFkZXMgbmEgd2ViLiBFdmVudHVhbG1lbnRlLCBpc3NvIG1lIGxldm91IGEgY29uc3RydWlyIHdlYnNpdGVzIGVsZWdhbnRlcywgcsOhcGlkb3MsIHJlc3BvbnNpdm9zIGUgY29tIHVzYWJpbGlkYWRlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFwcmltb3JlaSBtZXVzIGNvbmhlY2ltZW50b3MgYXByZW5kZW5kbyBkaXZlcnNhcyB0ZWNub2xvZ2lhcyBhdHVhaXMgcXVlIHPDo28gdXRpbGl6YWRhcyBwb3IgZGl2ZXJzYXMgZW1wcmVzYXMoRmFjZWJvb2ssIFViZXIsIEluc3RhZ3JhbSwgU3BvdGlmeS4uKSBwYXJhIGF1eGlsaWFyIG5hcyBjcmlhw6fDtWVzIGRvcyB3ZWJzaXRlcywgYXTDqSBlbnTDo28gY29uc3RydWlyIGFsZ3VucyBwcm9qZXRvcyBlIG9zIG1lc21vcyBwb2RlbSBzZXIgZW5jb250cmFkb3Mgbm8gbWV1IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ3NhbGV4MTIzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2l0SHViLjwvYT48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwicHQtNVwiPkFsZ3VtYXMgdGVjbm9sb2dpYXMgcXVlIHRlbmhvIGNvbmhlY2ltZW50bzo8L2I+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5Gcm9udC1lbmQ6IDwvYj4gSHRtbCA1IOKAoiBDc3MzIOKAoiBKYXZhU2NyaXB0IDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPkJhY2stZW5kOiA8L2I+IFBocCA3IOKAoiBKYXZhIOKAoiBOb2RlLkpTIOKAoiBTUUw8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5GcmFtZXdvcmtzL0JpYmxpb3RlY2FzOiAgPC9iPiBSZWFjdCBKcyDigKIgUmVhY3QgTmF0aXZlIOKAoiBCb29zdHJhcCDigKIgTWF0ZXJpYWxpemUg4oCiIEpxdWVyeSDigKIgTWF0ZXJpYWwgRGVzaWduIOKAoiBGcmFtZSBNb3Rpb24g4oCiIEV4cHJlc3Mg4oCiIEdvb2dsZSBNYXBzIEFwaSDigKIgQXhpb3Mg4oCiIFNhc3Mg4oCiIENvZGVpZ25pdGVyIDMg4oCiIE15U3FsIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc29icmU7Il0sInNvdXJjZVJvb3QiOiIifQ==