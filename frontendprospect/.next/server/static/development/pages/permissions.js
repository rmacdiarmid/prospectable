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
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendPROSPECT/components/ErrorMessage.js";
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
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendPROSPECT/components/Permissions.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const possiblePermissions = ['ADMIN', 'USER', 'ITEMCREATE', 'ITEMUPDATE', 'ITEMDELETE', 'PERMISSIONUPDATE'];
const UPDATE_PERMISSIONS_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
    mutation updatePermissions($permissions: [Permission],
    $userId: ID!) {
        updatedPermissions(permissions: $permissions, userId: $userId) {
            id
            permissions
            name
            email
        }
    }
 `;
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
    lineNumber: 41,
    columnNumber: 5
  }
}, ({
  data,
  loading,
  error
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 13
  }
}, __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
  error: error,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 15
  }
}), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 15
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 19
  }
}, "Manage Permissions"), __jsx(_styles_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 19
  }
}, __jsx("thead", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 23
  }
}, __jsx("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 27
  }
}, __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 29
  }
}, "Name"), __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 29
  }
}, "Email"), possiblePermissions.map(permission => __jsx("th", {
  key: permission,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 68
  }
}, permission)), __jsx("th", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 29
  }
}, "\uD83D\uDC47\uD83C\uDFFB"))), __jsx("tbody", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 23
  }
}, data.users.map(user => __jsx(UserPermissions, {
  user: user,
  key: user.id,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 49
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
    return __jsx(Mutation, {
      mutation: UPDATE_PERMISSIONS_MUTATION,
      variables: {
        permissions: this.state.permissions,
        userId: this.props.user.id
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, (updatePermissions, {
      loading,
      error
    }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, error && __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 26
      }
    }, __jsx("td", {
      colspan: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 30
      }
    }, __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      error: error,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 46
      }
    }))), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }, user.name), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, user.email), possiblePermissions.map(permission => __jsx("td", {
      key: permission,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }, __jsx("label", {
      htmlFor: `${user.id}-permission-${permission}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 29
      }
    }, __jsx("input", {
      id: `${user.id}-permission-${permission}`,
      type: "checkbox",
      checked: this.state.permissions.includes(permission),
      value: permission,
      onChange: this.handlePermissionChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 33
      }
    })))), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }, __jsx(_styles_SickButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "button",
      disabled: loading,
      onClick: updatePermissions,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, "Updat", loading ? 'ing' : 'e')))));
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
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendPROSPECT/components/PleaseSignIn.js";

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
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendPROSPECT/components/Signin.js";
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
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendPROSPECT/components/User.js";

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
})(["border-spacing:0;width:100%;border:1px solid ", ";thead{font-size:10px;}td,th{border-bottom:1px solid ", ";border-right:1px solid ", ";padding:5px;position:relative;&:last-child{border-right:none;width:150px;button{width:100%;}}label{padding:10px 5px;display:block;}}tr{&:hover{background:", ";}}"], props => props.theme.offWhite, props => props.theme.offWhite, props => props.theme.offWhite, props => props.theme.offWhite);
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
var _jsxFileName = "/Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendPROSPECT/pages/permissions.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PermissionsPage = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(_components_Permissions__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (PermissionsPage);

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/permissions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanmacdiarmid/Dropbox (Personal)/_github/prospectable/frontendPROSPECT/pages/permissions.js */"./pages/permissions.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QZXJtaXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BsZWFzZVNpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9TaWNrQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzL1RhYmxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Blcm1pc3Npb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJFcnJvclN0eWxlcyIsInN0eWxlZCIsImRpdiIsIkRpc3BsYXlFcnJvciIsImVycm9yIiwibWVzc2FnZSIsIm5ldHdvcmtFcnJvciIsInJlc3VsdCIsImVycm9ycyIsImxlbmd0aCIsIm1hcCIsImkiLCJyZXBsYWNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwicG9zc2libGVQZXJtaXNzaW9ucyIsIlVQREFURV9QRVJNSVNTSU9OU19NVVRBVElPTiIsImdxbCIsIkFMTF9VU0VSU19RVUVSWSIsIlBlcm1pc3Npb25zIiwicHJvcHMiLCJkYXRhIiwibG9hZGluZyIsInBlcm1pc3Npb24iLCJ1c2VycyIsInVzZXIiLCJpZCIsIlVzZXJQZXJtaXNzaW9ucyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicGVybWlzc2lvbnMiLCJlIiwiY2hlY2tib3giLCJ0YXJnZXQiLCJ1cGRhdGVkUGVybWlzc2lvbnMiLCJzdGF0ZSIsImNoZWNrZWQiLCJwdXNoIiwidmFsdWUiLCJmaWx0ZXIiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJ1c2VySWQiLCJ1cGRhdGVQZXJtaXNzaW9ucyIsIm5hbWUiLCJlbWFpbCIsImluY2x1ZGVzIiwiaGFuZGxlUGVybWlzc2lvbkNoYW5nZSIsInNoYXBlIiwic3RyaW5nIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiUGxlYXNlU2lnbkluIiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwibWUiLCJjaGlsZHJlbiIsIlNJR05JTl9NVVRBVElPTiIsIlNpZ25pbiIsInBhc3N3b3JkIiwicXVlcnkiLCJzaWdudXAiLCJwcmV2ZW50RGVmYXVsdCIsInNhdmVUb1N0YXRlIiwiVXNlciIsInBheWxvYWQiLCJmdW5jIiwia2V5ZnJhbWVzIiwiRm9ybSIsImZvcm0iLCJ0aGVtZSIsInJlZCIsIlNpY2tCdXR0b24iLCJidXR0b24iLCJUYWJsZSIsInRhYmxlIiwib2ZmV2hpdGUiLCJQZXJtaXNzaW9uc1BhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixDQURGLENBREY7O0FBUWUwRCw4RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9wZXJtaXNzaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRXJyb3JTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgfVxuICBzdHJvbmcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgRGlzcGxheUVycm9yID0gKHsgZXJyb3IgfSkgPT4ge1xuICBpZiAoIWVycm9yIHx8ICFlcnJvci5tZXNzYWdlKSByZXR1cm4gbnVsbDtcbiAgaWYgKGVycm9yLm5ldHdvcmtFcnJvciAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0ICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5tYXAoKGVycm9yLCBpKSA9PiAoXG4gICAgICA8RXJyb3JTdHlsZXMga2V5PXtpfT5cbiAgICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxuICAgICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZSgnR3JhcGhRTCBlcnJvcjogJywgJycpfVxuICAgICAgICA8L3A+XG4gICAgICA8L0Vycm9yU3R5bGVzPlxuICAgICkpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEVycm9yU3R5bGVzPlxuICAgICAgPHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxuICAgICAgICA8c3Ryb25nPlNob290ITwvc3Ryb25nPlxuICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICA8L3A+XG4gICAgPC9FcnJvclN0eWxlcz5cbiAgKTtcbn07XG5cbkRpc3BsYXlFcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiB7fSxcbn07XG5cbkRpc3BsYXlFcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUVycm9yO1xuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vc3R5bGVzL1RhYmxlJztcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gJy4vc3R5bGVzL1NpY2tCdXR0b24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgcG9zc2libGVQZXJtaXNzaW9ucyA9IFtcbiAgICAnQURNSU4nLFxuICAgICdVU0VSJyxcbiAgICAnSVRFTUNSRUFURScsXG4gICAgJ0lURU1VUERBVEUnLFxuICAgICdJVEVNREVMRVRFJyxcbiAgICAnUEVSTUlTU0lPTlVQREFURScsXG5dO1xuXG5jb25zdCBVUERBVEVfUEVSTUlTU0lPTlNfTVVUQVRJT04gPSBncWxgXG4gICAgbXV0YXRpb24gdXBkYXRlUGVybWlzc2lvbnMoJHBlcm1pc3Npb25zOiBbUGVybWlzc2lvbl0sXG4gICAgJHVzZXJJZDogSUQhKSB7XG4gICAgICAgIHVwZGF0ZWRQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogJHBlcm1pc3Npb25zLCB1c2VySWQ6ICR1c2VySWQpIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBwZXJtaXNzaW9uc1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgfVxuICAgIH1cbiBgO1xuXG5jb25zdCBBTExfVVNFUlNfUVVFUlkgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgICB1c2VycyB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgIHBlcm1pc3Npb25zXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBQZXJtaXNzaW9ucyA9IHByb3BzID0+IChcbiAgICA8UXVlcnkgcXVlcnk9e0FMTF9VU0VSU19RVUVSWX0+XG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KSA9PiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgyPk1hbmFnZSBQZXJtaXNzaW9uczwvaDI+XG4gICAgICAgICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3NpYmxlUGVybWlzc2lvbnMubWFwKHBlcm1pc3Npb24gPT4gPHRoIGtleT17cGVybWlzc2lvbn0+e3Blcm1pc3Npb259PC90aD4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7wn5GH8J+PuzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS51c2Vycy5tYXAodXNlciA9PiA8VXNlclBlcm1pc3Npb25zIHVzZXI9e3VzZXJ9IGtleT17dXNlci5pZH0gLz4pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvUXVlcnk+XG4pO1xuXG5jbGFzcyBVc2VyUGVybWlzc2lvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHVzZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgIHBlcm1pc3Npb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgfTtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgcGVybWlzc2lvbnM6dGhpcy5wcm9wcy51c2VyLnBlcm1pc3Npb25zLFxuICAgIH07XG4gICAgaGFuZGxlUGVybWlzc2lvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZS50YXJnZXQ7XG4gICAgICAgIC8vdGFrZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgcGVybWlzc2lvbnNcbiAgICAgICAgbGV0IHVwZGF0ZWRQZXJtaXNzaW9ucyA9IFsuLi50aGlzLnN0YXRlLnBlcm1pc3Npb25zXTtcbiAgICAgICAgLy9maWd1cmUgb3V0IGlmIHdlIG5lZWQgdG8gcmVtb3ZlIG9yIGFkZCB0aGlzIHBlcm1pc3Npb25cbiAgICAgICAgaWYoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAvL2FkZCBpdCBpbiFcbiAgICAgICAgdXBkYXRlZFBlcm1pc3Npb25zLnB1c2goY2hlY2tib3gudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlZFBlcm1pc3Npb25zID0gdXBkYXRlZFBlcm1pc3Npb25zLmZpbHRlclxuICAgICAgICAgICAgKHBlcm1pc3Npb24gPT4gcGVybWlzc2lvbiAhPT0gY2hlY2tib3gudmFsdWUpOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGVybWlzc2lvbnM6IHVwZGF0ZWRQZXJtaXNzaW9ucyB9KTtcbiAgICAgICAgY29uc29sZS5sb2codXBkYXRlZFBlcm1pc3Npb25zKTtcbiAgICB9O1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNdXRhdGlvbiBtdXRhdGlvbj17VVBEQVRFX1BFUk1JU1NJT05TX01VVEFUSU9OfSB2YXJpYWJsZXM9e3tcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogdGhpcy5zdGF0ZS5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMucHJvcHMudXNlci5pZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHsodXBkYXRlUGVybWlzc2lvbnMsIHsgbG9hZGluZywgZXJyb3IgfSkgPT4gKFxuICAgICAgICAgICAgPD4gXG4gICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHRyPjx0ZCBjb2xzcGFuPVwiOFwiPjxFcnJvciBlcnJvcj17ZXJyb3J9IC8+PC90ZD48L3RyPn1cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7cG9zc2libGVQZXJtaXNzaW9ucy5tYXAocGVybWlzc2lvbiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtwZXJtaXNzaW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YCR7dXNlci5pZH0tcGVybWlzc2lvbi0ke3Blcm1pc3Npb259YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHt1c2VyLmlkfS1wZXJtaXNzaW9uLSR7cGVybWlzc2lvbn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnBlcm1pc3Npb25zLmluY2x1ZGVzKHBlcm1pc3Npb24pfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJtaXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGVybWlzc2lvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFNpY2tCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dXBkYXRlUGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICA+VXBkYXR7bG9hZGluZyA/ICdpbmcnIDogJ2UnfVxuICAgICAgICAgICAgICAgICAgICA8L1NpY2tCdXR0b24+XG4gICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9NdXRhdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcm1pc3Npb25zOyIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQgU2lnbmluIGZyb20gJy4vU2lnbmluJztcblxuY29uc3QgUGxlYXNlU2lnbkluID0gcHJvcHMgPT4gKFxuICAgIDxRdWVyeSBxdWVyeT17Q1VSUkVOVF9VU0VSX1FVRVJZfT5cbiAgICAgICAgeygge2RhdGEsIGxvYWRpbmd9ICkgPT4ge1xuICAgICAgICAgICAgaWYobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgICAgICAgICAgaWYoIWRhdGEubWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBTaWduIEluIGJlZm9yZSBDb250aW51aW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxTaWduaW4gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9fVxuICAgIDwvUXVlcnk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQbGVhc2VTaWduSW47ICIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XG5cbmNvbnN0IFNJR05JTl9NVVRBVElPTiA9IGdxbGBcbiAgICBtdXRhdGlvbiBTSUdOSU5fTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgICAgICAgc2lnbmluKGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuY2xhc3MgU2lnbmluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgIH07XG4gICAgc2F2ZVRvU3RhdGUgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxNdXRhdGlvbiBcbiAgICAgICAgICAgIG11dGF0aW9uPXtTSUdOSU5fTVVUQVRJT059IFxuICAgICAgICAgICAgdmFyaWFibGVzPXt0aGlzLnN0YXRlfVxuICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM9e1t7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV19XG4gICAgICAgID5cbiAgICAgICAgICAgIHsoc2lnbnVwLCB7IGVycm9yLCBsb2FkaW5nIH0pID0+IChcbiAgICAgICAgICAgIDxGb3JtIFxuICAgICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIiBcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzaWdudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IFwiXCIsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICA8aDI+U2lnbiBpbnRvIHlvdXIgYWNjb3VudDwvaDI+XG4gICAgICAgICAgICAgICAgPEVycm9yIGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XG4gICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBJbiE8L2J1dHRvbj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgPC9Gb3JtPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9NdXRhdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25pbjsiLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENVUlJFTlRfVVNFUl9RVUVSWSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIG1lIHtcbiAgICAgIGlkXG4gICAgICBlbWFpbFxuICAgICAgbmFtZVxuICAgICAgcGVybWlzc2lvbnNcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFVzZXIgPSBwcm9wcyA9PiAoXG4gIDxRdWVyeSB7Li4ucHJvcHN9IHF1ZXJ5PXtDVVJSRU5UX1VTRVJfUVVFUll9PlxuICAgIHtwYXlsb2FkID0+IGNvbnNvbGUubG9nKHBheWxvYWQpIHx8IHByb3BzLmNoaWxkcmVuKHBheWxvYWQpfVxuICA8L1F1ZXJ5PlxuKTtcblxuVXNlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbmV4cG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9OyIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBsb2FkaW5nID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgLyogcm90YXRlOiAwOyAqL1xuICB9XG5cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcbiAgICAvKiByb3RhdGU6IDM2MGRlZzsgKi9cbiAgfVxuYDtcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIGlucHV0LFxuICB0ZXh0YXJlYSxcbiAgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yZWR9O1xuICAgIH1cbiAgfVxuICBidXR0b24sXG4gIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICB9XG4gIGZpZWxkc2V0IHtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMwMTkgMCUsICNlMmIwNGEgNTAlLCAjZmYzMDE5IDEwMCUpO1xuICAgIH1cbiAgICAmW2FyaWEtYnVzeT0ndHJ1ZSddOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcbiAgICAgIGFuaW1hdGlvbjogJHtsb2FkaW5nfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU2lja0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcbiAgdHJhbnNmb3JtOiBza2V3KC0yZGVnKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgJltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2lja0J1dHRvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZWBcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLm9mZldoaXRlfTtcbiAgdGhlYWQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICB0ZCxcbiAgdGgge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLm9mZldoaXRlfTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLm9mZldoaXRlfTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgdHIge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5vZmZXaGl0ZX07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiIsImltcG9ydCBQbGVhc2VTaWduSW4gZnJvbSAnLi4vY29tcG9uZW50cy9QbGVhc2VTaWduSW4nO1xuaW1wb3J0IFBlcm1pc3Npb25zIGZyb20gJy4uL2NvbXBvbmVudHMvUGVybWlzc2lvbnMnO1xuXG5jb25zdCBQZXJtaXNzaW9uc1BhZ2UgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPFBsZWFzZVNpZ25Jbj5cbiAgICAgIDxQZXJtaXNzaW9ucyAvPlxuICAgIDwvUGxlYXNlU2lnbkluPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBlcm1pc3Npb25zUGFnZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=