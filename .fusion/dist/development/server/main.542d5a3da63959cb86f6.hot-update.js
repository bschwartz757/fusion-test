if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/bschwa/Documents/sandbox/foosion-test/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/Layout/Shared/Header.js":
/*!*************************************!*\
  !*** ./src/Layout/Shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baseui_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/avatar */ "baseui/avatar");
/* harmony import */ var baseui_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baseui_avatar__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Layout/Shared/Header.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const HeaderElement = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('header', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 1fr',
  gridTemplateRows: '1fr',
  height: 'auto',
  backgroundColor: 'black',
  gridTemplateAreas: `
			"brand . nav"
		`
});
const Brand = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('div', {
  height: 'auto',
  color: '#fff'
});
const Nav = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('nav', {
  height: 'auto'
});
const StyledUl = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('ul', {
  listStyleType: 'none',
  margin: '0',
  padding: '0'
});
const Centered = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: '1.5rem'
});
const StyledLink = Object(baseui__WEBPACK_IMPORTED_MODULE_3__["styled"])('li', {
  display: 'inline',
  width: '20%',
  paddingLeft: '2rem'
});
const linkStyle = {
  textDecoration: 'none',
  color: 'white'
};

class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderElement, {
      style: {
        gridArea: 'header'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Centered, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_avatar__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      name: "Logo",
      size: "scale1000",
      src: Object(fusion_core__WEBPACK_IMPORTED_MODULE_2__["assetUrl"])(__webpack_require__(/*! __SECRET_FILE_LOADER__?assetUrl=true!../../Assets/img/coconut.png */ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/Assets/img/coconut.png")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), " Coconut")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
      style: {
        gridArea: 'nav'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Centered, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUl, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      style: linkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/project",
      style: linkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Project")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/service",
      style: linkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Service"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

};
//# sourceMappingURL=main.542d5a3da63959cb86f6.hot-update.js.map