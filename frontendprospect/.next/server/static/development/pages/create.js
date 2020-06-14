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
        lineNumber: 44,
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
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("fieldset", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
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
        lineNumber: 55,
        columnNumber: 25
      }
    })), __jsx("label", {
      htmlFor: "amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
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
        lineNumber: 68,
        columnNumber: 25
      }
    })), __jsx("label", {
      htmlFor: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
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
        lineNumber: 81,
        columnNumber: 25
      }
    })), __jsx("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, "Submit"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CreateItem);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDUkVBVEVfSVRFTV9NVVRBVElPTiIsImdxbCIsIkNyZWF0ZUl0ZW0iLCJDb21wb25lbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJsYXJnZUltYWdlIiwiYW1vdW50IiwiZSIsIm5hbWUiLCJ0eXBlIiwidmFsdWUiLCJ0YXJnZXQiLCJ2YWwiLCJwYXJzZUZsb2F0Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJzdGF0ZSIsImNyZWF0ZUl0ZW0iLCJsb2FkaW5nIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJrZXlmcmFtZXMiLCJGb3JtIiwic3R5bGVkIiwiZm9ybSIsInByb3BzIiwidGhlbWUiLCJyZWQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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c0IsT0FBdEIsRUFBK0JOLE9BQS9CLENBQWxCO0FBQ0EsU0FBT0ksU0FBUyxDQUFDRyxNQUFWLENBQWlCaEMsTUFBTSxHQUFHLEdBQTFCLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7O0FBRUEsTUFBTWlDLE1BQU0sR0FBR1gsS0FBSyxJQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREosQ0FESjs7QUFNZVcscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcblxuY29uc3QgQ1JFQVRFX0lURU1fTVVUQVRJT04gPSBncWxgXG4gICAgbXV0YXRpb24gQ1JFQVRFX0lURU1fTVVUQVRJT04gKFxuICAgICAgICAkdGl0bGU6IFN0cmluZyFcbiAgICAgICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchXG4gICAgICAgICRhbW91bnQ6IEludCFcbiAgICAgICAgJGltYWdlOiBTdHJpbmdcbiAgICAgICAgJGxhcmdlSW1hZ2U6IFN0cmluZ1xuICAgICkgICB7XG4gICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICB0aXRsZTogJHRpdGxlXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBhbW91bnQ6ICRhbW91bnRcbiAgICAgICAgICAgIGltYWdlOiAkaW1hZ2VcbiAgICAgICAgICAgIGxhcmdlSW1hZ2U6ICRsYXJnZUltYWdlXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cblxuY2xhc3MgQ3JlYXRlSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHRpdGxlOiAnMTIyIE1haW4gU3QuIExvb21pcywgQ0EnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0luZHVzdHJpYWwgUHJvcGVydHkgd2l0aCA4IHVuaXRzJyxcbiAgICAgICAgaW1hZ2U6ICdwcm9wZXJ0eS5qcGcnLFxuICAgICAgICBsYXJnZUltYWdlOiAnbGFyZ2VfcHJvcGVydHkuanBnJyxcbiAgICAgICAgYW1vdW50OiAyNTAwMDAwMCxcbiAgICB9O1xuICAgIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHR5cGUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgdmFsID0gdHlwZSA9PT0nbnVtYmVyJyA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbCB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXV0YXRpb24gbXV0YXRpb249e0NSRUFURV9JVEVNX01VVEFUSU9OfSB2YXJpYWJsZXM9e3RoaXMuc3RhdGV9PlxuICAgICAgICAgICAgICAgIHsoY3JlYXRlSXRlbSwgeyBsb2FkaW5nLCBlcnJvcn0pID0+IChcblxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQSBEZXNjcmlwdGlvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9NdXRhdGlvbj5cbiAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVJdGVtO1xuZXhwb3J0IHsgQ1JFQVRFX0lURU1fTVVUQVRJT04gfTsiLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmVkfTtcbiAgICB9XG4gIH1cbiAgYnV0dG9uLFxuICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgfVxuICBmaWVsZHNldCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMDE5IDAlLCAjZTJiMDRhIDUwJSwgI2ZmMzAxOSAxMDAlKTtcbiAgICB9XG4gICAgJlthcmlhLWJ1c3k9J3RydWUnXTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIGF1dG87XG4gICAgICBhbmltYXRpb246ICR7bG9hZGluZ30gMC41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYW1vdW50KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgfTtcbiAgLy8gaWYgaXRzIGEgd2hvbGUsIGRvbGxhciBhbW91bnQsIGxlYXZlIG9mZiB0aGUgLjAwXG4gIGlmIChhbW91bnQgJSAxMDAgPT09IDApIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIG9wdGlvbnMpO1xuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xufVxuIiwiaW1wb3J0IENyZWF0ZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVJdGVtJztcblxuY29uc3QgY3JlYXRlID0gcHJvcHMgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxDcmVhdGVJdGVtIC8+XG4gICAgPC9kaXY+XG4pOyBcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=