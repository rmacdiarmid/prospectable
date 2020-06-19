webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/PaginationStyles */ \"./components/styles/PaginationStyles.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.browser.umd.js\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/Pagination.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    query PAGINATION_QUERY {\\n        itemsConnection {\\n            aggregate {\\n                count\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\n\nvar Pagination = function Pagination(props) {\n  return __jsx(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__[\"Query\"], {\n    query: PAGINATION_QUERY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, function (_ref) {\n    var data = _ref.data,\n        loading = _ref.loading,\n        error = _ref.error;\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 44\n      }\n    }, \"Hi I'm the Pagination!!!\");\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"Hi I'm the Pagination\"));\n};\n\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanM/MmIzMyJdLCJuYW1lcyI6WyJQQUdJTkFUSU9OX1FVRVJZIiwiZ3FsIiwiUGFnaW5hdGlvbiIsInByb3BzIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQyxrREFBSCxtQkFBdEI7O0FBVUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQ3BCLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBTyxTQUFLLEVBQUdILGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFBLFFBQUdJLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNDLE9BQVQsUUFBU0EsT0FBVDtBQUFBLFFBQWtCQyxLQUFsQixRQUFrQkEsS0FBbEI7QUFBQSxXQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUE5QjtBQUFBLEdBREwsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkosQ0FEb0I7QUFBQSxDQUF4Qjs7S0FBTUosVTtBQVNTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tICcuL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5jb25zdCBQQUdJTkFUSU9OX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IFBBR0lOQVRJT05fUVVFUlkge1xuICAgICAgICBpdGVtc0Nvbm5lY3Rpb24ge1xuICAgICAgICAgICAgYWdncmVnYXRlIHtcbiAgICAgICAgICAgICAgICBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgUGFnaW5hdGlvbiA9IHByb3BzID0+IChcbiAgICA8UGFnaW5hdGlvblN0eWxlcz5cbiAgICAgICAgPFF1ZXJ5IHF1ZXJ5PSB7UEFHSU5BVElPTl9RVUVSWX0+XG4gICAgICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSkgPT4gPHA+SGkgSSdtIHRoZSBQYWdpbmF0aW9uISEhPC9wPn1cbiAgICAgICAgPC9RdWVyeT5cbiAgICAgICAgPHA+SGkgSSdtIHRoZSBQYWdpbmF0aW9uPC9wPlxuICAgIDwvUGFnaW5hdGlvblN0eWxlcz5cbilcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pagination.js\n");

/***/ }),

/***/ "./node_modules/deprecated-decorator/bld/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/SchemaError.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/chainResolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/decorateWithLogger.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/forEachField.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/implementsAbstractType.js":
false,

/***/ "./node_modules/graphql-tools/dist/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/isEmptyObject.js":
false,

/***/ "./node_modules/graphql-tools/dist/isSpecifiedScalarType.js":
false,

/***/ "./node_modules/graphql-tools/dist/makeExecutableSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/mergeDeep.js":
false,

/***/ "./node_modules/graphql-tools/dist/mock.js":
false,

/***/ "./node_modules/graphql-tools/dist/schemaVisitor.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/delegateToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/errors.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/introspectSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/linkToFetcher.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/mergeSchemas.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/resolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/typeFromAST.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ExtractField.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/RenameRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/RenameTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/TransformRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/WrapQuery.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/transformSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/transforms.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/visitSchema.js":
false,

/***/ "./node_modules/graphql/execution/execute.mjs":
false,

/***/ "./node_modules/graphql/execution/index.mjs":
false,

/***/ "./node_modules/graphql/execution/values.mjs":
false,

/***/ "./node_modules/graphql/graphql.mjs":
false,

/***/ "./node_modules/graphql/index.mjs":
false,

/***/ "./node_modules/graphql/jsutils/defineToJSON.mjs":
false,

/***/ "./node_modules/graphql/jsutils/find.mjs":
false,

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isFinite.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isInteger.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isInvalid.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isNullish.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isPromise.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/memoize3.mjs":
false,

/***/ "./node_modules/graphql/jsutils/objectValues.mjs":
false,

/***/ "./node_modules/graphql/jsutils/orList.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseForObject.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseReduce.mjs":
false,

/***/ "./node_modules/graphql/jsutils/quotedOrList.mjs":
false,

/***/ "./node_modules/graphql/jsutils/suggestionList.mjs":
false,

/***/ "./node_modules/graphql/language/index.mjs":
false,

/***/ "./node_modules/graphql/language/predicates.mjs":
false,

/***/ "./node_modules/graphql/subscription/index.mjs":
false,

/***/ "./node_modules/graphql/subscription/mapAsyncIterator.mjs":
false,

/***/ "./node_modules/graphql/subscription/subscribe.mjs":
false,

/***/ "./node_modules/graphql/type/definition.mjs":
false,

/***/ "./node_modules/graphql/type/directives.mjs":
false,

/***/ "./node_modules/graphql/type/index.mjs":
false,

/***/ "./node_modules/graphql/type/introspection.mjs":
false,

/***/ "./node_modules/graphql/type/scalars.mjs":
false,

/***/ "./node_modules/graphql/type/schema.mjs":
false,

/***/ "./node_modules/graphql/type/validate.mjs":
false,

/***/ "./node_modules/graphql/utilities/TypeInfo.mjs":
false,

/***/ "./node_modules/graphql/utilities/assertValidName.mjs":
false,

/***/ "./node_modules/graphql/utilities/astFromValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildASTSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildClientSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/coerceValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/concatAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/extendSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/findBreakingChanges.mjs":
false,

/***/ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationRootType.mjs":
false,

/***/ "./node_modules/graphql/utilities/index.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionFromSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionQuery.mjs":
false,

/***/ "./node_modules/graphql/utilities/isValidJSValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/isValidLiteralValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/schemaPrinter.mjs":
false,

/***/ "./node_modules/graphql/utilities/separateOperations.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
false,

/***/ "./node_modules/graphql/validation/ValidationContext.mjs":
false,

/***/ "./node_modules/graphql/validation/index.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ExecutableDefinitions.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FieldsOnCorrectType.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypes.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownArgumentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownDirectives.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownFragmentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownTypeNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneAnonymousOperation.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneSchemaDefinition.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoFragmentCycles.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUndefinedVariables.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedFragments.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedVariables.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ProvidedRequiredArguments.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ScalarLeafs.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/SingleFieldSubscriptions.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueArgumentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocation.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueFragmentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueInputFieldNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueOperationNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueVariableNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesAreInputTypes.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesInAllowedPosition.mjs":
false,

/***/ "./node_modules/graphql/validation/specifiedRules.mjs":
false,

/***/ "./node_modules/graphql/validation/validate.mjs":
false,

/***/ "./node_modules/iterall/index.mjs":
false,

/***/ "./node_modules/uuid/index.js":
false,

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
false,

/***/ "./node_modules/uuid/lib/rng-browser.js":
false,

/***/ "./node_modules/uuid/v1.js":
false,

/***/ "./node_modules/uuid/v4.js":
false

})