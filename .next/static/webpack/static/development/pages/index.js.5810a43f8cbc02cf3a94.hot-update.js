webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _static_styles_sass_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/styles/sass/index.scss */ "./static/styles/sass/index.scss");
/* harmony import */ var _static_styles_sass_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_styles_sass_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_code_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/images/code.gif */ "./static/images/code.gif");
/* harmony import */ var _static_images_code_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_code_gif__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Alex Ricardo - Home",
    description: "Alex Ricardo desenvolvedor web",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "container-fluid home position-relative",
    style: {
      backgroundImage: "url(".concat(_static_images_code_gif__WEBPACK_IMPORTED_MODULE_3___default.a, ")")
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "home__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "home__title ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "Procurando um desenvolvedor web?")), __jsx("div", {
    className: "home__about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("svg", {
    width: "150px",
    height: "40px",
    viewBox: "0 0 180 60",
    className: "border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("polyline", {
    points: "179,1 179,59 1,59 1,1 179,1",
    className: "bg-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }), __jsx("polyline", {
    points: "179,1 179,59 1,59 1,1 179,1",
    className: "hl-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, "HOVER ME"))))));
}

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiYmFja2dyb3VuZEltYWdlIiwiR2lmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNsQixTQUNJLG1FQUNJLE1BQUMsd0RBQUQ7QUFBTSxTQUFLLEVBQUMscUJBQVo7QUFBa0MsZUFBVyxFQUFDLGdDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFHSTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUF3RCxTQUFLLEVBQUU7QUFBRUMscUJBQWUsZ0JBQVNDLDhEQUFUO0FBQWpCLEtBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQU0sZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FESixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFDLE9BQVg7QUFBbUIsVUFBTSxFQUFDLE1BQTFCO0FBQWlDLFdBQU8sRUFBQyxZQUF6QztBQUFzRCxhQUFTLEVBQUMsUUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVUsVUFBTSxFQUFDLDZCQUFqQjtBQUErQyxhQUFTLEVBQUMsU0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBVSxVQUFNLEVBQUMsNkJBQWpCO0FBQStDLGFBQVMsRUFBQyxTQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosQ0FESixDQUxKLENBRkosQ0FISixDQURKO0FBMEJIOztLQTNCUUgsSztBQTZCTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU4MTBhNDNmOGNiYzAyY2YzYTk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnO1xyXG5cclxuaW1wb3J0ICcuLi9zdGF0aWMvc3R5bGVzL3Nhc3MvaW5kZXguc2Nzcyc7XHJcbmltcG9ydCBHaWYgZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9jb2RlLmdpZic7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWVudSB0aXRsZT1cIkFsZXggUmljYXJkbyAtIEhvbWVcIiBkZXNjcmlwdGlvbj1cIkFsZXggUmljYXJkbyBkZXNlbnZvbHZlZG9yIHdlYlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBob21lIHBvc2l0aW9uLXJlbGF0aXZlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7R2lmfSlgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob21lX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lX190aXRsZSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlByb2N1cmFuZG8gdW0gZGVzZW52b2x2ZWRvciB3ZWI/PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lX19hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1MHB4XCIgaGVpZ2h0PVwiNDBweFwiIHZpZXdCb3g9XCIwIDAgMTgwIDYwXCIgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjE3OSwxIDE3OSw1OSAxLDU5IDEsMSAxNzksMVwiIGNsYXNzTmFtZT1cImJnLWxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxNzksMSAxNzksNTkgMSw1OSAxLDEgMTc5LDFcIiBjbGFzc05hbWU9XCJobC1saW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SE9WRVIgTUU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgY2xhc3M9XCJhYm91dF9fYnRuIGFib3V0X19hbmltYXRpb25cIj5TYWliYSBtYWlzPC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9