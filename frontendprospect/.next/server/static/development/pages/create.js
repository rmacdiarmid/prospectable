module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateItem.js":
/*!**********************************!*\
  !*** ./components/CreateItem.js ***!
  \**********************************/
/*! exports provided: default, CREATE_ITEM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ITEM_MUTATION", function() { return CREATE_ITEM_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/CreateItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const CREATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    mutation CREATE_ITEM_MUTATION (
        $title: String!
        $description: String!
        $amount: Int!
        $image: String
        $largeImage: String
    )   {
        createItem(
            title: $title
            description: $description
            amount: $amount
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    }
`;

class CreateItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      title: '122 Main St. Loomis, CA',
      description: 'Industrial Property with 8 units',
      image: 'property.jpg',
      largeImage: 'large_property.jpg',
      amount: 25000000
    });

    _defineProperty(this, "handleChange", e => {
      const {
        name,
        type,
        value
      } = e.target;
      const val = type === 'number' ? parseFloat(value) : value;
      this.setState({
        [name]: val
      });
    });
  }

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: CREATE_ITEM_MUTATION,
      variables: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, (createItem, {
      loading,
      error
    }) => __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onSubmit: e => {
        e.preventDefault();
        console.log(this.state);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      error: error,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }), __jsx("fieldset", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, "Title", __jsx("input", {
      type: "text",
      id: "title",
      name: "title",
      placeholder: "Title",
      required: true,
      value: this.state.title,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    })), __jsx("label", {
      htmlFor: "amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, "Amount", __jsx("input", {
      type: "number",
      id: "amount",
      name: "amount",
      placeholder: "Amount",
      required: true,
      value: this.state.amount,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    })), __jsx("label", {
      htmlFor: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, "Description", __jsx("textarea", {
      id: "description",
      name: "description",
      placeholder: "Enter A Description",
      required: true,
      value: this.state.description,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 25
      }
    })), __jsx("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, "Submit"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CreateItem);


/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/ErrorMessage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "dybxfu-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => __jsx(ErrorStyles, {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx("p", {
      "data-test": "graphql-error",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, "Shoot!"), error.message.replace('GraphQL error: ', ''))));
  }

  return __jsx(ErrorStyles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("p", {
    "data-test": "graphql-error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "aakh0r-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], props => props.theme.red, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreateItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateItem */ "./components/CreateItem.js");
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/pages/create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const create = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(_components_CreateItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (create);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/create.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/pages/create.js */"./pages/create.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQ1JFQVRFX0lURU1fTVVUQVRJT04iLCJncWwiLCJDcmVhdGVJdGVtIiwiQ29tcG9uZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibGFyZ2VJbWFnZSIsImFtb3VudCIsImUiLCJuYW1lIiwidHlwZSIsInZhbHVlIiwidGFyZ2V0IiwidmFsIiwicGFyc2VGbG9hdCIsInNldFN0YXRlIiwicmVuZGVyIiwic3RhdGUiLCJjcmVhdGVJdGVtIiwibG9hZGluZyIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiRXJyb3JTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJEaXNwbGF5RXJyb3IiLCJtZXNzYWdlIiwibmV0d29ya0Vycm9yIiwicmVzdWx0IiwiZXJyb3JzIiwibGVuZ3RoIiwibWFwIiwiaSIsInJlcGxhY2UiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJrZXlmcmFtZXMiLCJGb3JtIiwiZm9ybSIsInByb3BzIiwidGhlbWUiLCJyZWQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLG9CQUFvQixHQUFHQyxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWpDOztBQXFCQSxNQUFNQyxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUN2QjtBQUNKQyxXQUFLLEVBQUUseUJBREg7QUFFSkMsaUJBQVcsRUFBRSxrQ0FGVDtBQUdKQyxXQUFLLEVBQUUsY0FISDtBQUlKQyxn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cy9jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcblxuXG5jb25zdCBDUkVBVEVfSVRFTV9NVVRBVElPTiA9IGdxbGBcbiAgICBtdXRhdGlvbiBDUkVBVEVfSVRFTV9NVVRBVElPTiAoXG4gICAgICAgICR0aXRsZTogU3RyaW5nIVxuICAgICAgICAkZGVzY3JpcHRpb246IFN0cmluZyFcbiAgICAgICAgJGFtb3VudDogSW50IVxuICAgICAgICAkaW1hZ2U6IFN0cmluZ1xuICAgICAgICAkbGFyZ2VJbWFnZTogU3RyaW5nXG4gICAgKSAgIHtcbiAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgIHRpdGxlOiAkdGl0bGVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGFtb3VudDogJGFtb3VudFxuICAgICAgICAgICAgaW1hZ2U6ICRpbWFnZVxuICAgICAgICAgICAgbGFyZ2VJbWFnZTogJGxhcmdlSW1hZ2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgfVxuYDtcblxuXG5jbGFzcyBDcmVhdGVJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdGl0bGU6ICcxMjIgTWFpbiBTdC4gTG9vbWlzLCBDQScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSW5kdXN0cmlhbCBQcm9wZXJ0eSB3aXRoIDggdW5pdHMnLFxuICAgICAgICBpbWFnZTogJ3Byb3BlcnR5LmpwZycsXG4gICAgICAgIGxhcmdlSW1hZ2U6ICdsYXJnZV9wcm9wZXJ0eS5qcGcnLFxuICAgICAgICBhbW91bnQ6IDI1MDAwMDAwLFxuICAgIH07XG4gICAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCB2YWwgPSB0eXBlID09PSdudW1iZXInID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNdXRhdGlvbiBtdXRhdGlvbj17Q1JFQVRFX0lURU1fTVVUQVRJT059IHZhcmlhYmxlcz17dGhpcy5zdGF0ZX0+XG4gICAgICAgICAgICAgICAgeyhjcmVhdGVJdGVtLCB7IGxvYWRpbmcsIGVycm9yfSkgPT4gKFxuXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFtb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW1vdW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEEgRGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTXV0YXRpb24+XG4gICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlSXRlbTtcbmV4cG9ydCB7IENSRUFURV9JVEVNX01VVEFUSU9OIH07IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBFcnJvclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG4gIHN0cm9uZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBEaXNwbGF5RXJyb3IgPSAoeyBlcnJvciB9KSA9PiB7XG4gIGlmICghZXJyb3IgfHwgIWVycm9yLm1lc3NhZ2UpIHJldHVybiBudWxsO1xuICBpZiAoZXJyb3IubmV0d29ya0Vycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxuICAgICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRXJyb3JTdHlsZXM+XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JTdHlsZXM+XG4gICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cbiAgICAgIDwvcD5cbiAgICA8L0Vycm9yU3R5bGVzPlxuICApO1xufTtcblxuRGlzcGxheUVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IHt9LFxufTtcblxuRGlzcGxheUVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5RXJyb3I7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmVkfTtcbiAgICB9XG4gIH1cbiAgYnV0dG9uLFxuICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgfVxuICBmaWVsZHNldCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMDE5IDAlLCAjZTJiMDRhIDUwJSwgI2ZmMzAxOSAxMDAlKTtcbiAgICB9XG4gICAgJlthcmlhLWJ1c3k9J3RydWUnXTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIGF1dG87XG4gICAgICBhbmltYXRpb246ICR7bG9hZGluZ30gMC41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYW1vdW50KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgfTtcbiAgLy8gaWYgaXRzIGEgd2hvbGUsIGRvbGxhciBhbW91bnQsIGxlYXZlIG9mZiB0aGUgLjAwXG4gIGlmIChhbW91bnQgJSAxMDAgPT09IDApIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIG9wdGlvbnMpO1xuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xufVxuIiwiaW1wb3J0IENyZWF0ZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVJdGVtJztcblxuY29uc3QgY3JlYXRlID0gcHJvcHMgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxDcmVhdGVJdGVtIC8+XG4gICAgPC9kaXY+XG4pOyBcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==