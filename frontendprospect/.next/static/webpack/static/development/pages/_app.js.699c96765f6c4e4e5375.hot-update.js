webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Signout.js":
/*!*******************************!*\
  !*** ./components/Signout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.browser.umd.js\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/Signout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    mutation SIGN_OUT_MUTATION {\\n        signout {\\n            message\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar SIGN_OUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\n\nvar Signout = function Signout(props) {\n  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"Mutation\"], {\n    mutation: SIGN_OUT_MUTATION,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, function (signout) {\n    return __jsx(\"button\", {\n      onClick: signout,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 23\n      }\n    }, \"Sign Out\");\n  });\n};\n\n_c = Signout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Signout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZ25vdXQuanM/NDUyOCJdLCJuYW1lcyI6WyJTSUdOX09VVF9NVVRBVElPTiIsImdxbCIsIlNpZ25vdXQiLCJwcm9wcyIsInNpZ25vdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0Msa0RBQUgsbUJBQXZCOztBQVFBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEtBQUs7QUFBQSxTQUNqQixNQUFDLHFEQUFEO0FBQVUsWUFBUSxFQUFFSCxpQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLLFVBQUNJLE9BQUQ7QUFBQSxXQUFhO0FBQVEsYUFBTyxFQUFFQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFiO0FBQUEsR0FETCxDQURpQjtBQUFBLENBQXJCOztLQUFNRixPO0FBTVNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWdub3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcblxuY29uc3QgU0lHTl9PVVRfTVVUQVRJT04gPSBncWxgXG4gICAgbXV0YXRpb24gU0lHTl9PVVRfTVVUQVRJT04ge1xuICAgICAgICBzaWdub3V0IHtcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IFNpZ25vdXQgPSBwcm9wcyA9PiAoXG4gICAgPE11dGF0aW9uIG11dGF0aW9uPXtTSUdOX09VVF9NVVRBVElPTn0gPlxuICAgICAgICB7KHNpZ25vdXQpID0+IDxidXR0b24gb25DbGljaz17c2lnbm91dH0+U2lnbiBPdXQ8L2J1dHRvbj59XG4gICAgPC9NdXRhdGlvbj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2lnbm91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Signout.js\n");

/***/ })

})