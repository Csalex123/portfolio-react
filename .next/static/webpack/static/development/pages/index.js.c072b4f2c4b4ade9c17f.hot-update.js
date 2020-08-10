webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/contact.js":
/*!*******************************!*\
  !*** ./components/contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\nextjs\\components\\contact.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function contact(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      nome = _useState[0],
      setNome = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      mensagem = _useState3[0],
      setMensagem = _useState3[1];

  var corIcon = {
    color: "#FF214F"
  };
  var button = {
    border: "none",
    outline: "none",
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
    var data = {
      nome: nome,
      email: email,
      mensagem: mensagem
    };
    console.log(data);
  }

  return __jsx("div", {
    className: "arlo_tm_section",
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "arlo_title_holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "Alguma d\xFAvida? Entre em contato"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, "Contato")), __jsx("div", {
    className: "contact_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "short_list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-map-marker-alt fa-2x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 41
    }
  }, "Localiza\xE7\xE3o"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 41
    }
  }, "Brasil - Pernambuco"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-envelope-open-text fa-2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 41
    }
  }, "Email"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 41
    }
  }, "alex.ricardo1999hotmail.com"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-whatsapp fa-2x",
    style: {
      color: "#82C91E"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, " Whatsapp"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  }, "+55 (81) 98572-4176 "))))), __jsx("div", {
    className: "fields",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("form", {
    onSubmit: handleContato,
    className: "contact_form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "returnmessage",
    "data-success": "Your message has been received, We will contact you soon.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "empty_notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 63
    }
  }, "Please Fill Required Fields")), __jsx("div", {
    className: "first",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }, __jsx("input", {
    id: "name",
    type: "text",
    placeholder: "Nome",
    value: nome,
    onChange: function onChange(e) {
      return setNome(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 45
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }, __jsx("input", {
    id: "email",
    type: "text",
    placeholder: "Email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 45
    }
  })))), __jsx("div", {
    className: "last",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, __jsx("textarea", {
    id: "message",
    placeholder: "Mensagem",
    value: mensagem,
    onChange: function onChange(e) {
      return setMensagem(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "arlo_tm_button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, __jsx("button", {
    type: "submit",
    style: button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }, "Enviar Formul\xE1rio"))))))));
}

_s(contact, "R0AWRi6+YR3InLT6fxnMqQJIHEI=");

/* harmony default export */ __webpack_exports__["default"] = (contact);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiY29udGFjdCIsInByb3BzIiwidXNlU3RhdGUiLCJub21lIiwic2V0Tm9tZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZW5zYWdlbSIsInNldE1lbnNhZ2VtIiwiY29ySWNvbiIsImNvbG9yIiwiYnV0dG9uIiwiYm9yZGVyIiwib3V0bGluZSIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJoYW5kbGVDb250YXRvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QWxpZ24iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWJDLElBRmE7QUFBQSxNQUVQQyxPQUZPOztBQUFBLG1CQUdNRixzREFBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR2JHLEtBSGE7QUFBQSxNQUdOQyxRQUhNOztBQUFBLG1CQUlZSixzREFBUSxDQUFDLEVBQUQsQ0FKcEI7QUFBQSxNQUliSyxRQUphO0FBQUEsTUFJSEMsV0FKRzs7QUFNcEIsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFNBQUssRUFBRTtBQURLLEdBQWhCO0FBSUEsTUFBTUMsTUFBTSxHQUFHO0FBQ1hDLFVBQU0sRUFBRSxNQURHO0FBRVhDLFdBQU8sRUFBRSxNQUZFO0FBR1hILFNBQUssRUFBRSxNQUhJO0FBSVhJLG1CQUFlLEVBQUUsU0FKTjtBQUtYQyxXQUFPLEVBQUUsY0FMRTtBQU1YQyxXQUFPLEVBQUUsV0FORTtBQU9YQyxjQUFVLEVBQUUsWUFQRDtBQVFYQyxZQUFRLEVBQUUsVUFSQztBQVNYQyxZQUFRLEVBQUU7QUFUQyxHQUFmOztBQVlBLFdBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxJQUFJLEdBQUc7QUFDVHBCLFVBQUksRUFBSkEsSUFEUztBQUNIRSxXQUFLLEVBQUxBLEtBREc7QUFDSUUsY0FBUSxFQUFSQTtBQURKLEtBQWI7QUFJQWlCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0g7O0FBRUQsU0FDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFpQyxNQUFFLEVBQUMsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUssRUFBRTtBQUFFVCxxQkFBZSxFQUFFO0FBQW5CLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFWSxlQUFTLEVBQUU7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyw2QkFBYjtBQUEyQyxTQUFLLEVBQUVqQixPQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFISixDQURKLENBREosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRWlCLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGlDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBSEosQ0FESixDQVJKLEVBZUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVBLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLHVCQUFiO0FBQXFDLFNBQUssRUFBRTtBQUFFaEIsV0FBSyxFQUFFO0FBQVQsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSkosQ0FESixDQWZKLENBREosQ0FESixFQTJCSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLFlBQVEsRUFBRVUsYUFBaEI7QUFBK0IsYUFBUyxFQUFDLGNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLG9CQUFhLDJEQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBOUIsQ0FGSixFQUdJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxNQUFFLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsTUFBdEI7QUFBNkIsZUFBVyxFQUFDLE1BQXpDO0FBQWdELFNBQUssRUFBRWpCLElBQXZEO0FBQTZELFlBQVEsRUFBRSxrQkFBQWtCLENBQUM7QUFBQSxhQUFJakIsT0FBTyxDQUFDaUIsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUFBLEtBQXhFO0FBQXFHLFlBQVEsTUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxNQUFFLEVBQUMsT0FBVjtBQUFrQixRQUFJLEVBQUMsTUFBdkI7QUFBOEIsZUFBVyxFQUFDLE9BQTFDO0FBQWtELFNBQUssRUFBRXZCLEtBQXpEO0FBQWdFLFlBQVEsRUFBRSxrQkFBQWdCLENBQUM7QUFBQSxhQUFJZixRQUFRLENBQUNlLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBQSxLQUEzRTtBQUF5RyxZQUFRLE1BQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLENBREosQ0FISixFQWFJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVUsTUFBRSxFQUFDLFNBQWI7QUFBdUIsZUFBVyxFQUFDLFVBQW5DO0FBQThDLFNBQUssRUFBRXJCLFFBQXJEO0FBQStELFlBQVEsRUFBRSxrQkFBQWMsQ0FBQztBQUFBLGFBQUliLFdBQVcsQ0FBQ2EsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLEtBQTFFO0FBQTJHLFlBQVEsTUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBYkosRUFnQkk7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsU0FBSyxFQUFFakIsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixDQWhCSixDQURKLENBM0JKLENBTEosQ0FESixDQURKLENBREo7QUErREg7O0dBL0ZRWCxPOztBQWlHTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmMwNzJiNGYyYzRiNGFkZTljMTdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gY29udGFjdChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtub21lLCBzZXROb21lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgY29ySWNvbiA9IHtcclxuICAgICAgICBjb2xvcjogXCIjRkYyMTRGXCIsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0ge1xyXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmYyMTRmXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjEwcHggNDVweFwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiTW9udHNlcnJhdFwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGF0byhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBub21lLCBlbWFpbCwgbWVuc2FnZW1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX3NlY3Rpb25cIiBpZD1cImNvbnRhY3RcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9jb250YWN0XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxMDEwMTBcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RpdGxlX2hvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbGd1bWEgZMO6dmlkYT8gRW50cmUgZW0gY29udGF0bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNvbnRhdG88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0X2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0IGZhLTJ4XCIgc3R5bGU9e2Nvckljb259PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Mb2NhbGl6YcOnw6NvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJyYXNpbCAtIFBlcm5hbWJ1Y288L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZS1vcGVuLXRleHQgZmEtMnhcIiA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkVtYWlsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmFsZXgucmljYXJkbzE5OTlob3RtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXdoYXRzYXBwIGZhLTJ4XCIgc3R5bGU9e3sgY29sb3I6IFwiIzgyQzkxRVwiIH19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4gV2hhdHNhcHA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPis1NSAoODEpIDk4NTcyLTQxNzYgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ29udGF0b30gY2xhc3NOYW1lPVwiY29udGFjdF9mb3JtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV0dXJubWVzc2FnZVwiIGRhdGEtc3VjY2Vzcz1cIllvdXIgbWVzc2FnZSBoYXMgYmVlbiByZWNlaXZlZCwgV2Ugd2lsbCBjb250YWN0IHlvdSBzb29uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eV9ub3RpY2VcIj48c3Bhbj5QbGVhc2UgRmlsbCBSZXF1aXJlZCBGaWVsZHM8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb21lXCIgdmFsdWU9e25vbWV9IG9uQ2hhbmdlPXtlID0+IHNldE5vbWUoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiTWVuc2FnZW1cIiB2YWx1ZT17bWVuc2FnZW19IG9uQ2hhbmdlPXtlID0+IHNldE1lbnNhZ2VtKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdG1fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXtidXR0b259PkVudmlhciBGb3JtdWzDoXJpbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyJdLCJzb3VyY2VSb290IjoiIn0=