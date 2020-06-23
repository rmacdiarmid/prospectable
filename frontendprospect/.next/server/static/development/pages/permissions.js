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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/Permissions.js":
/*!***********************************!*\
  !*** ./components/Permissions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Table */ "./components/styles/Table.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/components/Permissions.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const possiblePermissions = ['ADMIN', 'USER', 'ITEMCREATE', 'ITEMUPDATE', 'ITEMDELETE', 'PERMISSIONPUPDATE'];
const ALL_USERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
    query {
        users {
            id
            name
            email
            permissions
        }
    }
`;

const Permissions = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
  query: ALL_USERS_QUERY,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, ({
  data,
  loading,
  error
}) => console.log(data) || __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 13
  }
}, __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
  error: error,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 15
  }
}), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 15
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 19
  }
}, "Manage Permissions"), __jsx(_styles_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 19
  }
}, __jsx("thead", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 23
  }
}, __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 27
  }
}, __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 31
  }
}, "Name"), __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 31
  }
}, "Email"), possiblePermissions.map(permission => __jsx("th", {
  key: permission,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 31
  }
}, permission)), __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 31
  }
}, "\uD83D\uDC47"))), __jsx("tbody", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 23
  }
}, data.users.map(user => __jsx(UserPermissions, {
  user: user,
  key: user.id,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 47
  }
})))))));

class UserPermissions extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      permissions: this.props.user.permissions
    });

    _defineProperty(this, "handlePermissionChange", e => {
      const checkbox = e.target; //take a copy of the current permissions

      let updatedPermissions = [...this.state.permissions]; //figure out if we need to remove or add this permission

      if (checkbox.checked) {
        //add it in!
        updatedPermissions.push(checkbox.value);
      } else {
        updatedPermissions = updatedPermissions.filter(permission => permission !== checkbox.value);
      }

      this.setState({
        permissions: updatedPermissions
      });
      console.log(updatedPermissions);
    });
  }

  render() {
    const user = this.props.user;
    return __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, user.name), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, user.email), possiblePermissions.map(permission => __jsx("td", {
      key: permission,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, __jsx("label", {
      htmlFor: `${user.id}-permission-${permission}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "checkbox",
      checked: this.state.permissions.includes(permission),
      value: permission,
      onChange: this.handlePermissionChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    })))), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx(_styles_SickButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, "Update")));
  }

}

_defineProperty(UserPermissions, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    email: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    permissions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Permissions);

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
    lineNumber: 17,
    columnNumber: 3
  }
}), payload => console.log(payload) || props.children(payload));

User.propTypes = {
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

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "sc-17k9jf1-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./components/styles/Table.js":
/*!************************************!*\
  !*** ./components/styles/Table.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table.withConfig({
  displayName: "Table",
  componentId: "sc-12ognw7-0"
})(["border-spacing:0;width:100%;border:1px solid ", ";thead{font-size:10px;}td,th{border-bottom:1px solid ", ";border-right:1px solid ", ";padding:10px 5px;position:relative;&:last-child{border-right:none;width:150px;button{width:100%;}}}tr{&:hover{background:", ";}}"], props => props.theme.offWhite, props => props.theme.offWhite, props => props.theme.offWhite, props => props.theme.offWhite);
/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./pages/permissions.js":
/*!******************************!*\
  !*** ./pages/permissions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
/* harmony import */ var _components_Permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Permissions */ "./components/Permissions.js");
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/pages/permissions.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const permissionsPage = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx(_components_Permissions__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, "hey")));

/* harmony default export */ __webpack_exports__["default"] = (permissionsPage);

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/permissions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendprospect/pages/permissions.js */"./pages/permissions.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QZXJtaXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BsZWFzZVNpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9TaWNrQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzL1RhYmxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Blcm1pc3Npb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJFcnJvclN0eWxlcyIsInN0eWxlZCIsImRpdiIsIkRpc3BsYXlFcnJvciIsImVycm9yIiwibWVzc2FnZSIsIm5ldHdvcmtFcnJvciIsInJlc3VsdCIsImVycm9ycyIsImxlbmd0aCIsIm1hcCIsImkiLCJyZXBsYWNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwicG9zc2libGVQZXJtaXNzaW9ucyIsIkFMTF9VU0VSU19RVUVSWSIsImdxbCIsIlBlcm1pc3Npb25zIiwicHJvcHMiLCJkYXRhIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJwZXJtaXNzaW9uIiwidXNlcnMiLCJ1c2VyIiwiaWQiLCJVc2VyUGVybWlzc2lvbnMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBlcm1pc3Npb25zIiwiZSIsImNoZWNrYm94IiwidGFyZ2V0IiwidXBkYXRlZFBlcm1pc3Npb25zIiwic3RhdGUiLCJjaGVja2VkIiwicHVzaCIsInZhbHVlIiwiZmlsdGVyIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJuYW1lIiwiZW1haWwiLCJpbmNsdWRlcyIsImhhbmRsZVBlcm1pc3Npb25DaGFuZ2UiLCJzaGFwZSIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIlBsZWFzZVNpZ25JbiIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsIm1lIiwiY2hpbGRyZW4iLCJTSUdOSU5fTVVUQVRJT04iLCJTaWduaW4iLCJwYXNzd29yZCIsInF1ZXJ5Iiwic2lnbnVwIiwicHJldmVudERlZmF1bHQiLCJzYXZlVG9TdGF0ZSIsIlVzZXIiLCJwYXlsb2FkIiwiZnVuYyIsImtleWZyYW1lcyIsIkZvcm0iLCJmb3JtIiwidGhlbWUiLCJyZWQiLCJTaWNrQnV0dG9uIiwiYnV0dG9uIiwiVGFibGUiLCJ0YWJsZSIsIm9mZldoaXRlIiwicGVybWlzc2lvbnNQYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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aUQsS0FBTixDQUFZTSxRQXZCOUIsQ0FBWDtBQTRCZUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQSxNQUFNRyxlQUFlLEdBQUd4RCxLQUFLLElBQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixDQURGLENBREo7O0FBU2V3RCw4RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9wZXJtaXNzaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRXJyb3JTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgfVxuICBzdHJvbmcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgRGlzcGxheUVycm9yID0gKHsgZXJyb3IgfSkgPT4ge1xuICBpZiAoIWVycm9yIHx8ICFlcnJvci5tZXNzYWdlKSByZXR1cm4gbnVsbDtcbiAgaWYgKGVycm9yLm5ldHdvcmtFcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXG4gICAgICA8RXJyb3JTdHlsZXMga2V5PXtpfT5cbiAgICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxuICAgICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZSgnR3JhcGhRTCBlcnJvcjogJywgJycpfVxuICAgICAgICA8L3A+XG4gICAgICA8L0Vycm9yU3R5bGVzPlxuICAgICkpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEVycm9yU3R5bGVzPlxuICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxuICAgICAgICA8c3Ryb25nPlNob290ITwvc3Ryb25nPlxuICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICA8L3A+XG4gICAgPC9FcnJvclN0eWxlcz5cbiAgKTtcbn07XG5cbkRpc3BsYXlFcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiB7fSxcbn07XG5cbkRpc3BsYXlFcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUVycm9yO1xuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vc3R5bGVzL1RhYmxlJztcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gJy4vc3R5bGVzL1NpY2tCdXR0b24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgcG9zc2libGVQZXJtaXNzaW9ucyA9IFtcbiAgICAnQURNSU4nLFxuICAgICdVU0VSJyxcbiAgICAnSVRFTUNSRUFURScsXG4gICAgJ0lURU1VUERBVEUnLFxuICAgICdJVEVNREVMRVRFJyxcbiAgICAnUEVSTUlTU0lPTlBVUERBVEUnLFxuXTtcblxuY29uc3QgQUxMX1VTRVJTX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgICAgdXNlcnMge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgICBwZXJtaXNzaW9uc1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgUGVybWlzc2lvbnMgPSAocHJvcHMpID0+IChcbiAgICA8UXVlcnkgcXVlcnk9e0FMTF9VU0VSU19RVUVSWX0+XG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiBcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSkgfHwgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEVycm9yIGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMj5NYW5hZ2UgUGVybWlzc2lvbnM8L2gyPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3NzaWJsZVBlcm1pc3Npb25zLm1hcChwZXJtaXNzaW9uID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17cGVybWlzc2lvbn0+e3Blcm1pc3Npb259PC90aD4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPvCfkYc8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnVzZXJzLm1hcCh1c2VyID0+IDxVc2VyUGVybWlzc2lvbnMgdXNlcj17dXNlcn0ga2V5PXt1c2VyLmlkfSAvPil9XG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgPC9RdWVyeT5cbik7XG5cbmNsYXNzIFVzZXJQZXJtaXNzaW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgcGVybWlzc2lvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgfSkuaXNSZXF1aXJlZCxcbiAgICB9O1xuICAgIHN0YXRlID0ge1xuICAgICAgICBwZXJtaXNzaW9uczp0aGlzLnByb3BzLnVzZXIucGVybWlzc2lvbnMsXG4gICAgfTtcbiAgICBoYW5kbGVQZXJtaXNzaW9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZS50YXJnZXQ7XG4gICAgICAgIC8vdGFrZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgcGVybWlzc2lvbnNcbiAgICAgICAgbGV0IHVwZGF0ZWRQZXJtaXNzaW9ucyA9IFsuLi50aGlzLnN0YXRlLnBlcm1pc3Npb25zXTtcbiAgICAgICAgLy9maWd1cmUgb3V0IGlmIHdlIG5lZWQgdG8gcmVtb3ZlIG9yIGFkZCB0aGlzIHBlcm1pc3Npb25cbiAgICAgICAgaWYoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAvL2FkZCBpdCBpbiFcbiAgICAgICAgdXBkYXRlZFBlcm1pc3Npb25zLnB1c2goY2hlY2tib3gudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlZFBlcm1pc3Npb25zID0gdXBkYXRlZFBlcm1pc3Npb25zLmZpbHRlclxuICAgICAgICAgICAgKHBlcm1pc3Npb24gPT4gcGVybWlzc2lvbiE9PSBjaGVja2JveC52YWx1ZSk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJtaXNzaW9uczogdXBkYXRlZFBlcm1pc3Npb25zIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVkUGVybWlzc2lvbnMpO1xuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD57dXNlci5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt1c2VyLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAge3Bvc3NpYmxlUGVybWlzc2lvbnMubWFwKHBlcm1pc3Npb24gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtwZXJtaXNzaW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgJHt1c2VyLmlkfS1wZXJtaXNzaW9uLSR7cGVybWlzc2lvbn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5wZXJtaXNzaW9ucy5pbmNsdWRlcyhwZXJtaXNzaW9uKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQZXJtaXNzaW9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFNpY2tCdXR0b24+VXBkYXRlPC9TaWNrQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVybWlzc2lvbnM7IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBTaWduaW4gZnJvbSAnLi9TaWduaW4nO1xuXG5jb25zdCBQbGVhc2VTaWduSW4gPSBwcm9wcyA9PiAoXG4gICAgPFF1ZXJ5IHF1ZXJ5PXtDVVJSRU5UX1VTRVJfUVVFUll9PlxuICAgICAgICB7KCB7ZGF0YSwgbG9hZGluZ30gKSA9PiB7XG4gICAgICAgICAgICBpZihsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgICAgICAgICBpZighZGF0YS5tZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIFNpZ24gSW4gYmVmb3JlIENvbnRpbnVpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPFNpZ25pbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH19XG4gICAgPC9RdWVyeT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBsZWFzZVNpZ25JbjsgIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcblxuY29uc3QgU0lHTklOX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIFNJR05JTl9NVVRBVElPTigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICAgICAgICBzaWduaW4oZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jbGFzcyBTaWduaW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgfTtcbiAgICBzYXZlVG9TdGF0ZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9O1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPE11dGF0aW9uIFxuICAgICAgICAgICAgbXV0YXRpb249e1NJR05JTl9NVVRBVElPTn0gXG4gICAgICAgICAgICB2YXJpYWJsZXM9e3RoaXMuc3RhdGV9XG4gICAgICAgICAgICByZWZldGNoUXVlcmllcz17W3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XX1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyhzaWdudXAsIHsgZXJyb3IsIGxvYWRpbmcgfSkgPT4gKFxuICAgICAgICAgICAgPEZvcm0gXG4gICAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiIFxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNpZ251cCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogXCJcIiwgZW1haWw6ICcnLCBwYXNzd29yZDogJyd9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfSBhcmlhLWJ1c3k9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgIDxoMj5TaWduIGludG8geW91ciBhY2NvdW50PC9oMj5cbiAgICAgICAgICAgICAgICA8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cbiAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIEluITwvYnV0dG9uPlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICA8L0Zvcm0+KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L011dGF0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluOyIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ1VSUkVOVF9VU0VSX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgbWUge1xuICAgICAgaWRcbiAgICAgIGVtYWlsXG4gICAgICBuYW1lXG4gICAgICBwZXJtaXNzaW9uc1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVXNlciA9IHByb3BzID0+IChcbiAgPFF1ZXJ5IHsuLi5wcm9wc30gcXVlcnk9e0NVUlJFTlRfVVNFUl9RVUVSWX0+XG4gICAge3BheWxvYWQgPT4gY29uc29sZS5sb2cocGF5bG9hZCkgfHwgcHJvcHMuY2hpbGRyZW4ocGF5bG9hZCl9XG4gIDwvUXVlcnk+XG4pO1xuXG5Vc2VyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuZXhwb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH07IiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGxvYWRpbmcgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICAvKiByb3RhdGU6IDA7ICovXG4gIH1cblxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xuICAgIC8qIHJvdGF0ZTogMzYwZGVnOyAqL1xuICB9XG5gO1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgaW5wdXQsXG4gIHRleHRhcmVhLFxuICBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnJlZH07XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzAxOSAwJSwgI2UyYjA0YSA1MCUsICNmZjMwMTkgMTAwJSk7XG4gICAgfVxuICAgICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTaWNrQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xuICB0cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAmW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTaWNrQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUub2ZmV2hpdGV9O1xuICB0aGVhZCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIHRkLFxuICB0aCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUub2ZmV2hpdGV9O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUub2ZmV2hpdGV9O1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRyIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUub2ZmV2hpdGV9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCJpbXBvcnQgUGxlYXNlU2lnbkluIGZyb20gJy4uL2NvbXBvbmVudHMvUGxlYXNlU2lnbkluJztcbmltcG9ydCBQZXJtaXNzaW9ucyBmcm9tICcuLi9jb21wb25lbnRzL1Blcm1pc3Npb25zJztcblxuY29uc3QgcGVybWlzc2lvbnNQYWdlID0gcHJvcHMgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8UGxlYXNlU2lnbkluPlxuICAgICAgICA8UGVybWlzc2lvbnMgLz5cbiAgICAgICAgPHA+aGV5PC9wPlxuICAgICAgPC9QbGVhc2VTaWduSW4+XG4gICAgPC9kaXY+XG4pOyBcblxuZXhwb3J0IGRlZmF1bHQgcGVybWlzc2lvbnNQYWdlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==