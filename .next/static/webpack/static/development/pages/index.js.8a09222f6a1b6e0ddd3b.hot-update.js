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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _static_images_code_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/images/code.gif */ "./static/images/code.gif");
/* harmony import */ var _static_images_code_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_code_gif__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_styles_sass_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/styles/sass/index.scss */ "./static/styles/sass/index.scss");
/* harmony import */ var _static_styles_sass_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_styles_sass_index_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Index(props) {
  var pageTransition = {
    type: "tween",
    ease: 'anticipate',
    duration: .5
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Alex Ricardo - Home",
    description: "Alex Ricardo desenvolvedor web",
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "container-fluid home position-relative",
    style: {
      backgroundImage: "url(".concat(_static_images_code_gif__WEBPACK_IMPORTED_MODULE_4___default.a, ")")
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "home__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "home__title ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].h1, {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "Procurando um desenvolvedor web?")), __jsx("div", {
    className: "home__about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].button, {
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
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "btn-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sobre",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, "Saiba Mais"))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwicGFnZVRyYW5zaXRpb24iLCJ0eXBlIiwiZWFzZSIsImR1cmF0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwiR2lmIiwib3BhY2l0eSIsIngiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBRWxCLE1BQU1DLGNBQWMsR0FBRztBQUNuQkMsUUFBSSxFQUFFLE9BRGE7QUFFbkJDLFFBQUksRUFBRSxZQUZhO0FBR25CQyxZQUFRLEVBQUU7QUFIUyxHQUF2QjtBQU1BLFNBQ0ksbUVBQ0ksTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBQyxxQkFBWjtBQUFrQyxlQUFXLEVBQUMsZ0NBQTlDO0FBQStFLFVBQU0sRUFBRSxJQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUF3RCxTQUFLLEVBQUU7QUFBRUMscUJBQWUsZ0JBQVNDLDhEQUFUO0FBQWpCLEtBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQU0sZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRCxDQUFRLEVBQVI7QUFDSSxXQUFPLEVBQUU7QUFBRUMsYUFBTyxFQUFFLENBQVg7QUFBY0MsT0FBQyxFQUFFLFFBQWpCO0FBQTJCQyxXQUFLLEVBQUU7QUFBbEMsS0FEYjtBQUVJLFdBQU8sRUFBRTtBQUFFRixhQUFPLEVBQUUsQ0FBWDtBQUFjQyxPQUFDLEVBQUUsQ0FBakI7QUFBb0JDLFdBQUssRUFBRTtBQUEzQixLQUZiO0FBR0ksUUFBSSxFQUFFO0FBQUVGLGFBQU8sRUFBRSxDQUFYO0FBQWNDLE9BQUMsRUFBRSxPQUFqQjtBQUEwQkMsV0FBSyxFQUFFO0FBQWpDLEtBSFY7QUFJSSxjQUFVLEVBQUVSLGNBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREosQ0FESixFQVVJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBUSxNQUFSO0FBQ0ksV0FBTyxFQUFFO0FBQUVNLGFBQU8sRUFBRSxDQUFYO0FBQWNDLE9BQUMsRUFBRSxPQUFqQjtBQUEwQkMsV0FBSyxFQUFFO0FBQWpDLEtBRGI7QUFFSSxXQUFPLEVBQUU7QUFBRUYsYUFBTyxFQUFFLENBQVg7QUFBY0MsT0FBQyxFQUFFLENBQWpCO0FBQW9CQyxXQUFLLEVBQUU7QUFBM0IsS0FGYjtBQUdJLFFBQUksRUFBRTtBQUFFRixhQUFPLEVBQUUsQ0FBWDtBQUFjQyxPQUFDLEVBQUUsUUFBakI7QUFBMkJDLFdBQUssRUFBRTtBQUFsQyxLQUhWO0FBSUksY0FBVSxFQUFFUixjQUpoQjtBQUtJLGFBQVMsRUFBQyxLQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLENBREosQ0FOSixDQURKLENBVkosQ0FGSixDQUZKLENBREo7QUFrQ0g7O0tBMUNRRixLO0FBNENNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOGEwOTIyMmY2YTFiNmUwZGRkM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuaW1wb3J0IEdpZiBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL2NvZGUuZ2lmJztcclxuaW1wb3J0ICcuLi9zdGF0aWMvc3R5bGVzL3Nhc3MvaW5kZXguc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHBhZ2VUcmFuc2l0aW9uID0ge1xyXG4gICAgICAgIHR5cGU6IFwidHdlZW5cIixcclxuICAgICAgICBlYXNlOiAnYW50aWNpcGF0ZScsXHJcbiAgICAgICAgZHVyYXRpb246IC41XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWVudSB0aXRsZT1cIkFsZXggUmljYXJkbyAtIEhvbWVcIiBkZXNjcmlwdGlvbj1cIkFsZXggUmljYXJkbyBkZXNlbnZvbHZlZG9yIHdlYlwiIGFjdGl2ZT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgaG9tZSBwb3NpdGlvbi1yZWxhdGl2ZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke0dpZn0pYCB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9fdGl0bGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogXCItMTAwdndcIiwgc2NhbGU6IDAuOCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwLCBzY2FsZTogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiBcIjEwMHZ3XCIsIHNjYWxlOiAxLjIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3BhZ2VUcmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+UHJvY3VyYW5kbyB1bSBkZXNlbnZvbHZlZG9yIHdlYj88L21vdGlvbi5oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lX19hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiBcIjEwMHZ3XCIsIHNjYWxlOiAwLjggfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCwgc2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogXCItMTAwdndcIiwgc2NhbGU6IDEuMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17cGFnZVRyYW5zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2JyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TYWliYSBNYWlzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=