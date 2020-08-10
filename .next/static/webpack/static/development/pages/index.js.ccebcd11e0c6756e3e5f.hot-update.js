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
    textDecoration: "none",
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
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "arlo_title_holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Alguma d\xFAvida? Entre em contato"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "Contato")), __jsx("div", {
    className: "contact_inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "short_list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-map-marker-alt fa-2x",
    style: corIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 41
    }
  }, "Localiza\xE7\xE3o"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 41
    }
  }, "Brasil - Pernambuco"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-envelope-open-text fa-2x",
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
  }, "Email"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 41
    }
  }, "alex.ricardo1999hotmail.com"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 41
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 41
    }
  }, " Whatsapp"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 41
    }
  }, "+55 (81) 98572-4176 "))))), __jsx("div", {
    className: "fields",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("form", {
    onSubmit: handleContato,
    className: "contact_form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "returnmessage",
    "data-success": "Your message has been received, We will contact you soon.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "empty_notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 63
    }
  }, "Please Fill Required Fields")), __jsx("div", {
    className: "first",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 45
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
      columnNumber: 45
    }
  })))), __jsx("div", {
    className: "last",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 85,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "arlo_tm_button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx("button", {
    type: "submit",
    style: button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QuanMiXSwibmFtZXMiOlsiY29udGFjdCIsInByb3BzIiwidXNlU3RhdGUiLCJub21lIiwic2V0Tm9tZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZW5zYWdlbSIsInNldE1lbnNhZ2VtIiwiY29ySWNvbiIsImNvbG9yIiwiYnV0dG9uIiwidGV4dERlY29yYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiaGFuZGxlQ29udGF0byIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGV4dEFsaWduIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUViQyxJQUZhO0FBQUEsTUFFUEMsT0FGTzs7QUFBQSxtQkFHTUYsc0RBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUdiRyxLQUhhO0FBQUEsTUFHTkMsUUFITTs7QUFBQSxtQkFJWUosc0RBQVEsQ0FBQyxFQUFELENBSnBCO0FBQUEsTUFJYkssUUFKYTtBQUFBLE1BSUhDLFdBSkc7O0FBTXBCLE1BQU1DLE9BQU8sR0FBRztBQUNaQyxTQUFLLEVBQUU7QUFESyxHQUFoQjtBQUlBLE1BQU1DLE1BQU0sR0FBRztBQUNYQyxrQkFBYyxFQUFFLE1BREw7QUFFWEYsU0FBSyxFQUFFLE1BRkk7QUFHWEcsbUJBQWUsRUFBRSxTQUhOO0FBSVhDLFdBQU8sRUFBRSxjQUpFO0FBS1hDLFdBQU8sRUFBRSxXQUxFO0FBTVhDLGNBQVUsRUFBRSxZQU5EO0FBT1hDLFlBQVEsRUFBRSxVQVBDO0FBUVhDLFlBQVEsRUFBRTtBQVJDLEdBQWY7O0FBV0EsV0FBU0Ms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O0FBQUEsSUFESixDQUpKLENBREosQ0FISixFQWFJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVUsTUFBRSxFQUFDLFNBQWI7QUFBdUIsZUFBVyxFQUFDLFVBQW5DO0FBQThDLFNBQUssRUFBRXBCLFFBQXJEO0FBQStELFlBQVEsRUFBRSxrQkFBQWEsQ0FBQztBQUFBLGFBQUlaLFdBQVcsQ0FBQ1ksQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLEtBQTFFO0FBQTJHLFlBQVEsTUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBYkosRUFnQkk7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsU0FBSyxFQUFFaEIsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixDQWhCSixDQURKLENBM0JKLENBTEosQ0FESixDQURKLENBREo7QUErREg7O0dBOUZRWCxPOztBQWdHTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmNjZWJjZDExZTBjNjc1NmUzZTVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gY29udGFjdChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtub21lLCBzZXROb21lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgY29ySWNvbiA9IHtcclxuICAgICAgICBjb2xvcjogXCIjRkYyMTRGXCIsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0ge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZjIxNGZcIixcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTBweCA0NXB4XCIsXHJcbiAgICAgICAgZm9udEZhbWlseTogXCJNb250c2VycmF0XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDb250YXRvKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5vbWUsIGVtYWlsLCBtZW5zYWdlbVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdG1fc2VjdGlvblwiIGlkPVwiY29udGFjdFwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcmxvX3RtX2NvbnRhY3RcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzEwMTAxMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFybG9fdGl0bGVfaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFsZ3VtYSBkw7p2aWRhPyBFbnRyZSBlbSBjb250YXRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGF0bzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnRfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHQgZmEtMnhcIiBzdHlsZT17Y29ySWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxvY2FsaXphw6fDo288L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QnJhc2lsIC0gUGVybmFtYnVjbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLW9wZW4tdGV4dCBmYS0yeFwiID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RW1haWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+YWxleC5yaWNhcmRvMTk5OWhvdG1haWwuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtd2hhdHNhcHAgZmEtMnhcIiBzdHlsZT17eyBjb2xvcjogXCIjODJDOTFFXCIgfX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiBXaGF0c2FwcDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+KzU1ICg4MSkgOTg1NzItNDE3NiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDb250YXRvfSBjbGFzc05hbWU9XCJjb250YWN0X2Zvcm1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXR1cm5tZXNzYWdlXCIgZGF0YS1zdWNjZXNzPVwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIHJlY2VpdmVkLCBXZSB3aWxsIGNvbnRhY3QgeW91IHNvb24uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5X25vdGljZVwiPjxzcGFuPlBsZWFzZSBGaWxsIFJlcXVpcmVkIEZpZWxkczwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbWVcIiB2YWx1ZT17bm9tZX0gb25DaGFuZ2U9e2UgPT4gc2V0Tm9tZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZW5zYWdlbVwiIHZhbHVlPXttZW5zYWdlbX0gb25DaGFuZ2U9e2UgPT4gc2V0TWVuc2FnZW0oZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJsb190bV9idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3R5bGU9e2J1dHRvbn0+RW52aWFyIEZvcm11bMOhcmlvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==