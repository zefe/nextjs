webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\workspace\\cursos\\Nextjs\\components\\Users.js",
    _this = undefined;



var Users = function Users(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "list-group",
    children: props.users.map(function (user) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "list-group-item list-group-item-action d-flex justify-content-between align-items-center",
        onClick: function onClick(e) {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/users/[id]', "/users/".concat(user.id));
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: [user.first_name, " ", user.last_name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: user.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: user.avatar,
          alt: "avatar",
          style: {
            borderRadius: '50%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, _this)]
      }, user.id, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, _this);
};

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiZSIsIlJvdXRlciIsInB1c2giLCJpZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsImF2YXRhciIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDckIsc0JBQ0k7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBLGNBRVFBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUFDLElBQUk7QUFBQSwwQkFDaEI7QUFBSSxpQkFBUyxFQUFDLDBGQUFkO0FBQ2MsZUFBTyxFQUFFLGlCQUFBQyxDQUFDO0FBQUEsaUJBQUlDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLG1CQUFxQ0gsSUFBSSxDQUFDSSxFQUExQyxFQUFKO0FBQUEsU0FEeEI7QUFBQSxnQ0FFSTtBQUFBLGtDQUNJO0FBQUEsdUJBQUtKLElBQUksQ0FBQ0ssVUFBVixPQUF1QkwsSUFBSSxDQUFDTSxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLHNCQUFJTixJQUFJLENBQUNPO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFNSTtBQUFLLGFBQUcsRUFBRVAsSUFBSSxDQUFDUSxNQUFmO0FBQXVCLGFBQUcsRUFBQyxRQUEzQjtBQUFvQyxlQUFLLEVBQUU7QUFBQ0Msd0JBQVksRUFBRTtBQUFmO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQSxTQUNLVCxJQUFJLENBQUNJLEVBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQXBCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0JILENBakJEOztLQUFNUixLO0FBbUJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYjBmNTkyOTE1NTI3Mjk5ZTc3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgVXNlcnMgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj4gICAgICAgICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMudXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXt1c2VyLmlkfSBvbkNsaWNrPXtlID0+IFJvdXRlci5wdXNoKCcvdXNlcnMvW2lkXScsIGAvdXNlcnMvJHt1c2VyLmlkfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcn0gYWx0PVwiYXZhdGFyXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MCUnfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==