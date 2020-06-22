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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/CreateItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const CREATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    mutation CREATE_ITEM_MUTATION (
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    )   {
        createItem(
            title: $title
            description: $description
            price: $price
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
      price: 25000000
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

    _defineProperty(this, "uploadFile", async e => {
      console.log('uploading file...');
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'prospectable');
      const res = await fetch('https://api.cloudinary.com/v1_1/macdiarmid-enterprises/image/upload', {
        method: 'POST',
        body: data
      });
      const file = await res.json();
      console.log(file);
      this.setState({
        image: file.secure_url,
        largeImage: file.eager[0].secure_url
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
        lineNumber: 69,
        columnNumber: 13
      }
    }, (createItem, {
      loading,
      error
    }) => __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSubmit: async e => {
        //Stop the form from submitting
        e.preventDefault(); // call the mutation

        const res = await createItem(); // change them to the single item page

        console.log(res);
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: '/item',
          query: {
            id: res.data.createItem.id
          }
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: error,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }), __jsx("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "file",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, "Image", __jsx("input", {
      type: "file",
      id: "file",
      name: "file",
      placeholder: "Upload an image",
      required: true,
      value: this.state.file,
      onChange: this.uploadFile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }), this.state.image && __jsx("img", {
      width: "200",
      src: this.state.image,
      alt: "Upload Preview",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 46
      }
    })), __jsx("label", {
      htmlFor: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
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
        lineNumber: 103,
        columnNumber: 25
      }
    })), __jsx("label", {
      htmlFor: "price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }, "Amount", __jsx("input", {
      type: "number",
      id: "price",
      name: "price",
      placeholder: "price",
      required: true,
      value: this.state.price,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 25
      }
    })), __jsx("label", {
      htmlFor: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
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
        lineNumber: 129,
        columnNumber: 25
      }
    })), __jsx("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
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

/***/ "./components/PleaseSignIn.js":
/*!************************************!*\
  !*** ./components/PleaseSignIn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Signin */ "./components/Signin.js");
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/PleaseSignIn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PleaseSignIn = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
  query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, ({
  data,
  loading
}) => {
  if (loading) return __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 32
    }
  }, "Loading...");

  if (!data.me) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }, "Please Sign In before Continuing"), __jsx(_Signin__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 23
      }
    }));
  }

  return props.children;
});

/* harmony default export */ __webpack_exports__["default"] = (PleaseSignIn);

/***/ }),

/***/ "./components/Signin.js":
/*!******************************!*\
  !*** ./components/Signin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/Signin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        signin(email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

class Signin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      name: '',
      password: '',
      email: ''
    });

    _defineProperty(this, "saveToState", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
  }

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: SIGNIN_MUTATION,
      variables: this.state,
      refetchQueries: [{
        query: _User__WEBPACK_IMPORTED_MODULE_5__["CURRENT_USER_QUERY"]
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, (signup, {
      error,
      loading
    }) => __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
      method: "post",
      onSubmit: async e => {
        e.preventDefault();
        await signup();
        this.setState({
          name: "",
          email: '',
          password: ''
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, "Sign into your account"), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      error: error,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }), __jsx("label", {
      htmlFor: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, "Email", __jsx("input", {
      type: "email",
      name: "email",
      placeholder: "email",
      value: this.state.email,
      onChange: this.saveToState,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 18
      }
    })), __jsx("label", {
      htmlFor: "password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, "Password", __jsx("input", {
      type: "password",
      name: "password",
      placeholder: "password",
      value: this.state.password,
      onChange: this.saveToState,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    })), __jsx("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, "Sign In!"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/User.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    query {
        me {
            id
            email
            name
            permissions
        }
    }
`;

const User = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
  query: CURRENT_USER_QUERY,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 1
  }
}), payload => props.children(payload));

User.PropTyes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);


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
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/pages/create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const create = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, __jsx(_components_CreateItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (create);

/***/ }),

/***/ 5:
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGxlYXNlU2lnbkluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lnbmluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2xpYi9mb3JtYXRNb25leS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQ1JFQVRFX0lURU1fTVVUQVRJT04iLCJncWwiLCJDcmVhdGVJdGVtIiwiQ29tcG9uZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibGFyZ2VJbWFnZSIsInByaWNlIiwiZSIsIm5hbWUiLCJ0eXBlIiwidmFsdWUiLCJ0YXJnZXQiLCJ2YWwiLCJwYXJzZUZsb2F0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJmaWxlIiwianNvbiIsInNlY3VyZV91cmwiLCJlYWdlciIsInJlbmRlciIsInN0YXRlIiwiY3JlYXRlSXRlbSIsImxvYWRpbmciLCJlcnJvciIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCIsInVwbG9hZEZpbGUiLCJoYW5kbGVDaGFuZ2UiLCJFcnJvclN0eWxlcyIsInN0eWxlZCIsImRpdiIsIkRpc3BsYXlFcnJvciIsIm1lc3NhZ2UiLCJuZXR3b3JrRXJyb3IiLCJyZXN1bHQiLCJlcnJvcnMiLCJsZW5ndGgiLCJtYXAiLCJpIiwicmVwbGFjZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIlBsZWFzZVNpZ25JbiIsInByb3BzIiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwibWUiLCJjaGlsZHJlbiIsIlNJR05JTl9NVVRBVElPTiIsIlNpZ25pbiIsInBhc3N3b3JkIiwiZW1haWwiLCJzaWdudXAiLCJzYXZlVG9TdGF0ZSIsIlVzZXIiLCJwYXlsb2FkIiwiUHJvcFR5ZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImtleWZyYW1lcyIsIkZvcm0iLCJmb3JtIiwidGhlbWUiLCJyZWQiLCJhbW91bnQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7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LG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFlLHlFQUFTSSxNQUFULEVBQWlCO0FBQzlCLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxTQUFLLEVBQUUsVUFETztBQUVkQyxZQUFRLEVBQUUsS0FGSTtBQUdkQyx5QkFBcUIsRUFBRTtBQUhULEdBQWhCLENBRDhCLENBTTlCOztBQUNBLE1BQUlKLE1BQU0sR0FBRyxHQUFULEtBQWlCLENBQXJCLEVBQXdCQyxPQUFPLENBQUNHLHFCQUFSLEdBQWdDLENBQWhDO0FBQ3hCLFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0JOLE9BQS9CLENBQWxCO0FBQ0EsU0FBT0ksU0FBUyxDQUFDRyxNQUFWLENBQWlCUixNQUFNLEdBQUcsR0FBMUIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7QUFDQTs7QUFHQSxNQUFNUyxNQUFNLEdBQUc3QixLQUFLLElBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLENBREo7O0FBUWU2QixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuXG5cbmNvbnN0IENSRUFURV9JVEVNX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIENSRUFURV9JVEVNX01VVEFUSU9OIChcbiAgICAgICAgJHRpdGxlOiBTdHJpbmchXG4gICAgICAgICRkZXNjcmlwdGlvbjogU3RyaW5nIVxuICAgICAgICAkcHJpY2U6IEludCFcbiAgICAgICAgJGltYWdlOiBTdHJpbmdcbiAgICAgICAgJGxhcmdlSW1hZ2U6IFN0cmluZ1xuICAgICkgICB7XG4gICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICB0aXRsZTogJHRpdGxlXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwcmljZTogJHByaWNlXG4gICAgICAgICAgICBpbWFnZTogJGltYWdlXG4gICAgICAgICAgICBsYXJnZUltYWdlOiAkbGFyZ2VJbWFnZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmNsYXNzIENyZWF0ZUl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB0aXRsZTogJzEyMiBNYWluIFN0LiBMb29taXMsIENBJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdJbmR1c3RyaWFsIFByb3BlcnR5IHdpdGggOCB1bml0cycsXG4gICAgICAgIGltYWdlOiAncHJvcGVydHkuanBnJyxcbiAgICAgICAgbGFyZ2VJbWFnZTogJ2xhcmdlX3Byb3BlcnR5LmpwZycsXG4gICAgICAgIHByaWNlOiAyNTAwMDAwMCxcbiAgICB9O1xuICAgIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHR5cGUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgdmFsID0gdHlwZSA9PT0nbnVtYmVyJyA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbCB9KTtcbiAgICB9XG5cbiAgICB1cGxvYWRGaWxlID0gYXN5bmMgZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgZmlsZS4uLicpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbMF0pO1xuICAgICAgICBkYXRhLmFwcGVuZCgndXBsb2FkX3ByZXNldCcsICdwcm9zcGVjdGFibGUnKTtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFxuICAgICAgICAoJ2h0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvbWFjZGlhcm1pZC1lbnRlcnByaXNlcy9pbWFnZS91cGxvYWQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbWFnZTogZmlsZS5zZWN1cmVfdXJsLFxuICAgICAgICAgICAgbGFyZ2VJbWFnZTogZmlsZS5lYWdlclswXS5zZWN1cmVfdXJsXG5cbiAgICAgICAgfSlcbiAgICB9O1xuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXV0YXRpb24gbXV0YXRpb249e0NSRUFURV9JVEVNX01VVEFUSU9OfSB2YXJpYWJsZXM9e3RoaXMuc3RhdGV9PlxuICAgICAgICAgICAgICAgIHsoY3JlYXRlSXRlbSwgeyBsb2FkaW5nLCBlcnJvciB9KSA9PiAoXG5cbiAgICAgICAgICAgIDxGb3JtIFxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9TdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgdGhlIG11dGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIHRoZW0gdG8gdGhlIHNpbmdsZSBpdGVtIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBpZDogcmVzLmRhdGEuY3JlYXRlSXRlbS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVcGxvYWQgYW4gaW1hZ2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwbG9hZEZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW1hZ2UgJiYgPGltZyB3aWR0aD1cIjIwMFwiIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX0gYWx0PVwiVXBsb2FkIFByZXZpZXdcIi8+fVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByaWNlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcmljZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEEgRGVzY3JpcHRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTXV0YXRpb24+XG4gICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlSXRlbTtcbmV4cG9ydCB7IENSRUFURV9JVEVNX01VVEFUSU9OIH07IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBFcnJvclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG4gIHN0cm9uZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5gO1xuXG5jb25zdCBEaXNwbGF5RXJyb3IgPSAoeyBlcnJvciB9KSA9PiB7XG4gIGlmICghZXJyb3IgfHwgIWVycm9yLm1lc3NhZ2UpIHJldHVybiBudWxsO1xuICBpZiAoZXJyb3IubmV0d29ya0Vycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxuICAgICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRXJyb3JTdHlsZXM+XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JTdHlsZXM+XG4gICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cbiAgICAgIDwvcD5cbiAgICA8L0Vycm9yU3R5bGVzPlxuICApO1xufTtcblxuRGlzcGxheUVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IHt9LFxufTtcblxuRGlzcGxheUVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5RXJyb3I7XG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IFNpZ25pbiAgZnJvbSAnLi9TaWduaW4nO1xuXG5jb25zdCBQbGVhc2VTaWduSW4gPSAocHJvcHMpID0+IChcbiAgICA8UXVlcnkgcXVlcnk9IHtDVVJSRU5UX1VTRVJfUVVFUll9PlxuICAgICAgICB7KCB7ZGF0YSwgbG9hZGluZ30gKSA9PiB7XG4gICAgICAgICAgICBpZihsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICAgIGlmKCFkYXRhLm1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UgU2lnbiBJbiBiZWZvcmUgQ29udGludWluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8U2lnbmluIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGxlYXNlU2lnbkluOyAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcbmltcG9ydCBFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xuXG5jb25zdCBTSUdOSU5fTVVUQVRJT04gPSBncWxgXG4gICAgbXV0YXRpb24gU0lHTklOX01VVEFUSU9OKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gICAgICAgIHNpZ25pbihlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNsYXNzIFNpZ25pbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICB9O1xuICAgIHNhdmVUb1N0YXRlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8TXV0YXRpb24gXG4gICAgICAgICAgICBtdXRhdGlvbj17U0lHTklOX01VVEFUSU9OfSBcbiAgICAgICAgICAgIHZhcmlhYmxlcz17dGhpcy5zdGF0ZX1cbiAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzPXtbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dfVxuICAgICAgICA+XG4gICAgICAgICAgICB7KHNpZ251cCwgeyBlcnJvciwgbG9hZGluZyB9KSA9PiAoXG4gICAgICAgICAgICA8Rm9ybSBcbiAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCIgXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2lnbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBcIlwiLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJ30pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XG4gICAgICAgICAgICAgICAgPGgyPlNpZ24gaW50byB5b3VyIGFjY291bnQ8L2gyPlxuICAgICAgICAgICAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxuICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gSW4hPC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDwvRm9ybT4pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvTXV0YXRpb24+XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluOyIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ1VSUkVOVF9VU0VSX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgICAgbWUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwZXJtaXNzaW9uc1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgVXNlciA9IHByb3BzID0+IChcblxuPFF1ZXJ5IHsuLi5wcm9wc30gcXVlcnk9e0NVUlJFTlRfVVNFUl9RVUVSWX0+XG4gICAge3BheWxvYWQgPT4gcHJvcHMuY2hpbGRyZW4ocGF5bG9hZCl9XG48L1F1ZXJ5PlxuKTtcblxuVXNlci5Qcm9wVHllcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7IFxuZXhwb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH07XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmVkfTtcbiAgICB9XG4gIH1cbiAgYnV0dG9uLFxuICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgfVxuICBmaWVsZHNldCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgICY6OmJlZm9yZSB7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMDE5IDAlLCAjZTJiMDRhIDUwJSwgI2ZmMzAxOSAxMDAlKTtcbiAgICB9XG4gICAgJlthcmlhLWJ1c3k9J3RydWUnXTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIGF1dG87XG4gICAgICBhbmltYXRpb246ICR7bG9hZGluZ30gMC41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYW1vdW50KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgfTtcbiAgLy8gaWYgaXRzIGEgd2hvbGUsIGRvbGxhciBhbW91bnQsIGxlYXZlIG9mZiB0aGUgLjAwXG4gIGlmIChhbW91bnQgJSAxMDAgPT09IDApIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIG9wdGlvbnMpO1xuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xufVxuIiwiaW1wb3J0IENyZWF0ZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVJdGVtJztcbmltcG9ydCBQbGVhc2VTaWduSW4gZnJvbSAnLi4vY29tcG9uZW50cy9QbGVhc2VTaWduSW4nO1xuXG5cbmNvbnN0IGNyZWF0ZSA9IHByb3BzID0+IChcbiAgICA8ZGl2PlxuICAgICAgPFBsZWFzZVNpZ25Jbj5cbiAgICAgICAgPENyZWF0ZUl0ZW0gLz5cbiAgICAgIDwvUGxlYXNlU2lnbkluPlxuICAgIDwvZGl2PlxuKTsgXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=