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
  }); // const fadeIn = element => {
  //     gsap.to(element, 1, {
  //         opacity: 1,
  //         y: -60,
  //         ease: 'power4.out',
  //         stagger: {
  //             amount: 0.3
  //         }
  //     });
  // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zb2JyZS5qcyJdLCJuYW1lcyI6WyJzb2JyZSIsInByb3BzIiwic2VjdGlvblJlZiIsInVzZVJlZiIsImludGVyc2VjdGlvbiIsInVzZUludGVyc2VjdGlvbiIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiZmFkZU91dCIsImVsZW1lbnQiLCJnc2FwIiwidG8iLCJvcGFjaXR5IiwieSIsImVhc2UiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImZhZGVJbiIsIklsdXN0cmFjYW8iLCJGb3RvQWxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbEIsTUFBTUMsVUFBVSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBekI7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLGlFQUFlLENBQUNILFVBQUQsRUFBYTtBQUM3Q0ksUUFBSSxFQUFFLElBRHVDO0FBRTdDQyxjQUFVLEVBQUUsS0FGaUM7QUFHN0NDLGFBQVMsRUFBRTtBQUhrQyxHQUFiLENBQXBDLENBSGtCLENBU2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLE9BQU8sRUFBSTtBQUN2QkMsZ0RBQUksQ0FBQ0MsRUFBTCxDQUFRRixPQUFSLEVBQWlCLENBQWpCLEVBQW9CO0FBQ2hCRyxhQUFPLEVBQUUsQ0FETztBQUVoQkMsT0FBQyxFQUFFLENBQUMsRUFGWTtBQUdoQkMsVUFBSSxFQUFFO0FBSFUsS0FBcEI7QUFLSCxHQU5EOztBQVNBWCxjQUFZLElBQUlBLFlBQVksQ0FBQ1ksaUJBQWIsR0FBaUMsR0FBakQsR0FBdURQLE9BQU8sQ0FBQyxVQUFELENBQTlELEdBQTZFUSxNQUFNLENBQUMs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eUQ7OztBQThFVkwsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNvYnJlLmpzLmQ5NWI5MGJjODMwYjQwZTcxNGIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tIFwicmVhY3QtdXNlXCI7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuaW1wb3J0IElsdXN0cmFjYW8gZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9zb2JyZS9pbHVzdHJhY2FvLnN2Zyc7XHJcbmltcG9ydCBGb3RvQWxleCBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL3NvYnJlL2FsZXguanBnJztcclxuXHJcbmltcG9ydCAnLi4vc3RhdGljL3N0eWxlcy9zYXNzL3NvYnJlLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gc29icmUocHJvcHMpIHtcclxuICAgIGNvbnN0IHNlY3Rpb25SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uKHNlY3Rpb25SZWYsIHtcclxuICAgICAgICByb290OiBudWxsLFxyXG4gICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXHJcbiAgICAgICAgdGhyZXNob2xkOiAwLjVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IGZhZGVJbiA9IGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgIGdzYXAudG8oZWxlbWVudCwgMSwge1xyXG4gICAgLy8gICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgLy8gICAgICAgICB5OiAtNjAsXHJcbiAgICAvLyAgICAgICAgIGVhc2U6ICdwb3dlcjQub3V0JyxcclxuICAgIC8vICAgICAgICAgc3RhZ2dlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgYW1vdW50OiAwLjNcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGZhZGVPdXQgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICBnc2FwLnRvKGVsZW1lbnQsIDEsIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgeTogLTIwLFxyXG4gICAgICAgICAgICBlYXNlOiAncG93ZXI0Lm91dCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGludGVyc2VjdGlvbiAmJiBpbnRlcnNlY3Rpb24uaW50ZXJzZWN0aW9uUmF0aW8gPCAwLjUgPyBmYWRlT3V0KCcuZmFkZU91dCcpIDogZmFkZUluKCcuZmFkZU91dCcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1lbnUgdGl0bGU9XCJTb2JyZVwiIGRlc2NyaXB0aW9uPVwiU2VtIERlc2NyacOnw6NvXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Tb2JyZTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9fY29udGVudCByb3cgYWxpZ24taXRlbXMtY2VudGVyIG10LTIgXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtMTIgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0lsdXN0cmFjYW99IGFsdD1cIklsdXN0cmHDp8Ojb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhYm91dF9faW5mb3JtYXRpb24gY29sLXhzLTEyIGNvbC1tZC0xMiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZhZGVJblwiPkFsZXggUmljYXJkbzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXRodW1ibmFpbFwiIHNyYz17Rm90b0FsZXh9IGFsdD1cIkFsZXggUmljYXJkb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNCBmYWRlSW5cIiA+IERlc2Vudm9sdmVkb3IgV2ViPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBmYWRlSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1ldSBub21lIMOpIEFsZXggUmljYXJkbyBlIGV1IGRlc2Vudm9sdm8vcHJvZ3JhbW8gc2l0ZXMuIE1lIGNvbnNpZGVybyB1bSB2w61jaWFkbyBlIGFwYWl4b25hZG8gcG9yIGPDs2RpZ29zISBFdSB2ZW5obyBwcm9qZXRhbmRvIGUgY29kaWZpY2FuZG8gbmEgd2ViIGRlc2RlIDIwMTcuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWluaGEgcHJpbWVpcmEgZXhwZXJpw6puY2lhIGNvbSBhcyB0ZWNub2xvZ2lhcyB3ZWIgYXBhcmVjZXUgcXVhbmRvIGV1IGVzdHVkYXZhIG5vIEluc3RpdHV0byBGZWRlcmFsIGRlIGVkdWNhw6fDo28sIGNpw6puY2lhIGUgdGVjbm9sb2dpYSBkZSBQZXJuYW1idWNvKElGUEUpIGUgZXN0YXZhIGN1cnNhbmRvIFTDqWNuaWNvIGVtIGluZm9ybcOhdGljYSBwYXJhIEludGVybmV0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vIGRlY29ycmVyIGRhIG1pbmhhIGNhcnJlaXJhIGRhIG1pbmhhIGNhcnJlaXJhIHByb2Zpc3Npb25hbCwgZGVzY29icmlyIG5vdmFzIG1hbmVpcmFzIGRlIGRlc2Vudm9sdmVyIGZ1bmNpb25hbGlkYWRlcyBuYSB3ZWIuIEV2ZW50dWFsbWVudGUsIGlzc28gbWUgbGV2b3UgYSBjb25zdHJ1aXIgd2Vic2l0ZXMgZWxlZ2FudGVzLCByw6FwaWRvcywgcmVzcG9uc2l2b3MgZSBjb20gdXNhYmlsaWRhZGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXByaW1vcmVpIG1ldXMgY29uaGVjaW1lbnRvcyBhcHJlbmRlbmRvIGRpdmVyc2FzIHRlY25vbG9naWFzIGF0dWFpcyBxdWUgc8OjbyB1dGlsaXphZGFzIHBvciBkaXZlcnNhcyBlbXByZXNhcyhGYWNlYm9vaywgVWJlciwgSW5zdGFncmFtLCBTcG90aWZ5Li4pIHBhcmEgYXV4aWxpYXIgbmFzIGNyaWHDp8O1ZXMgZG9zIHdlYnNpdGVzLCBhdMOpIGVudMOjbyBjb25zdHJ1aXIgYWxndW5zIHByb2pldG9zIGUgb3MgbWVzbW9zIHBvZGVtIHNlciBlbmNvbnRyYWRvcyBubyBtZXUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Dc2FsZXgxMjNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRIdWIuPC9hPjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJwdC01XCI+QWxndW1hcyB0ZWNub2xvZ2lhcyBxdWUgdGVuaG8gY29uaGVjaW1lbnRvOjwvYj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPkZyb250LWVuZDogPC9iPiBIdG1sIDUg4oCiIENzczMg4oCiIEphdmFTY3JpcHQgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGI+QmFjay1lbmQ6IDwvYj4gUGhwIDcg4oCiIEphdmEg4oCiIE5vZGUuSlMg4oCiIFNRTDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPkZyYW1ld29ya3MvQmlibGlvdGVjYXM6ICA8L2I+IFJlYWN0IEpzIOKAoiBSZWFjdCBOYXRpdmUg4oCiIEJvb3N0cmFwIOKAoiBNYXRlcmlhbGl6ZSDigKIgSnF1ZXJ5IOKAoiBNYXRlcmlhbCBEZXNpZ24g4oCiIEZyYW1lIE1vdGlvbiDigKIgRXhwcmVzcyDigKIgR29vZ2xlIE1hcHMgQXBpIOKAoiBBeGlvcyDigKIgU2FzcyDigKIgQ29kZWlnbml0ZXIgMyDigKIgTXlTcWwgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvYnJlOyJdLCJzb3VyY2VSb290IjoiIn0=