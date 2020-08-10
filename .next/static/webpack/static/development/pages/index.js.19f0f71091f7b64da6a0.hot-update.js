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
    style: {
      color: "#82C91E"
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiY29udGFjdCIsInByb3BzIiwidXNlU3RhdGUiLCJub21lIiwic2V0Tm9tZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZW5zYWdlbSIsInNldE1lbnNhZ2VtIiwiY29ySWNvbiIsImNvbG9yIiwiYnV0dG9uIiwiYm9yZGVyIiwib3V0bGluZSIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJoYW5kbGVDb250YXRvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QWxpZ24iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUFBLGtCQUVJQyxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWJDLElBRmE7QUFBQSxNQUVQQyxPQUZPOztBQUFBLG1CQUdNRixzREFBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR2JHLEtBSGE7QUFBQSxNQUdOQyxRQUhNOztBQUFBLG1CQUlZSixzREFBUSxDQUFDLEVBQUQsQ0FKcEI7QUFBQSxNQUliSyxRQUphO0FBQUEsTUFJSEMsV0FKRzs7QUFNcEIsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFNBQUssRUFBRTtBQURLLEdBQWhCO0FBSUEsTUFBTUMsTUFBTSxHQUFHO0FBQ1hDLFVBQU0sRUFBRSxNQURHO0FBRVhDLFdBQU8sRUFBRSxNQUZFO0FBR1hDLFVBQU0sRUFBRSxTQUhHO0FBSVhKLFNBQUssRUFBRSxNQUpJO0FBS1hLLG1CQUFlLEVBQUUsU0FMTjtBQU1YQyxXQUFPLEVBQUUsY0FORTtBQU9YQyxXQUFPLEVBQUUsV0FQRTtBQVFYQyxjQUFVLEVBQUUsWUFSRDtBQVNYQyxZ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QUFBLEtBQTNFO0FBQXlHLFlBQVEsTUFBakg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FESixDQUhKLEVBYUk7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBVSxNQUFFLEVBQUMsU0FBYjtBQUF1QixlQUFXLEVBQUMsVUFBbkM7QUFBOEMsU0FBSyxFQUFFdEIsUUFBckQ7QUFBK0QsWUFBUSxFQUFFLGtCQUFBZSxDQUFDO0FBQUEsYUFBSWQsV0FBVyxDQUFDYyxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsS0FBMUU7QUFBMkcsWUFBUSxNQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FiSixFQWdCSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixTQUFLLEVBQUVsQixNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLENBaEJKLENBREosQ0EzQkosQ0FMSixDQURKLENBREosQ0FESjtBQStESDs7R0FoR1FYLE87O0FBa0dNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTlmMGY3MTA5MWY3YjY0ZGE2YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBjb250YWN0KHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW25vbWUsIHNldE5vbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBjb3JJY29uID0ge1xyXG4gICAgICAgIGNvbG9yOiBcIiNGRjIxNEZcIixcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b24gPSB7XHJcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmMjE0ZlwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIxMHB4IDQ1cHhcIixcclxuICAgICAgICBmb250RmFtaWx5OiBcIk1vbnRzZXJyYXRcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbnRhdG8oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgbm9tZSwgZW1haWwsIG1lbnNhZ2VtXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9zZWN0aW9uXCIgaWQ9XCJjb250YWN0XCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdG1fY29udGFjdFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMTAxMDEwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190aXRsZV9ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWxndW1hIGTDunZpZGE/IEVudHJlIGVtIGNvbnRhdG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db250YXRvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9ydF9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdCBmYS0yeFwiIHN0eWxlPXtjb3JJY29ufT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TG9jYWxpemHDp8OjbzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CcmFzaWwgLSBQZXJuYW1idWNvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGUtb3Blbi10ZXh0IGZhLTJ4XCIgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5FbWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5hbGV4LnJpY2FyZG8xOTk5aG90bWFpbC5jb208L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS13aGF0c2FwcCBmYS0yeFwiIHN0eWxlPXt7IGNvbG9yOiBcIiM4MkM5MUVcIiB9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+IFdoYXRzYXBwPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rNTUgKDgxKSA5ODU3Mi00MTc2IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUNvbnRhdG99IGNsYXNzTmFtZT1cImNvbnRhY3RfZm9ybVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldHVybm1lc3NhZ2VcIiBkYXRhLXN1Y2Nlc3M9XCJZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gcmVjZWl2ZWQsIFdlIHdpbGwgY29udGFjdCB5b3Ugc29vbi5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlfbm90aWNlXCI+PHNwYW4+UGxlYXNlIEZpbGwgUmVxdWlyZWQgRmllbGRzPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tZVwiIHZhbHVlPXtub21lfSBvbkNoYW5nZT17ZSA9PiBzZXROb21lKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIk1lbnNhZ2VtXCIgdmFsdWU9e21lbnNhZ2VtfSBvbkNoYW5nZT17ZSA9PiBzZXRNZW5zYWdlbShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17YnV0dG9ufT5FbnZpYXIgRm9ybXVsw6FyaW88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiXSwic291cmNlUm9vdCI6IiJ9