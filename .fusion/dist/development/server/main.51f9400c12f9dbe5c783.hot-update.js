if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/bschwa/Documents/sandbox/foosion-test/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/Layout/Sidebar.js":
/*!*******************************!*\
  !*** ./src/Layout/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/icon/chevron-right */ "baseui/icon/chevron-right");
/* harmony import */ var baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Heading */ "./src/Components/Heading.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Layout/Sidebar.js";




const Aside = Object(baseui__WEBPACK_IMPORTED_MODULE_1__["styled"])('aside', {
  height: 'auto',
  padding: '1rem',
  backgroundColor: '#fff',
  border: '1px solid lightGray'
});
const StyledUl = Object(baseui__WEBPACK_IMPORTED_MODULE_1__["styled"])('ul', {
  listStyleType: 'none',
  margin: '0',
  padding: '0'
});
const StyledLink = Object(baseui__WEBPACK_IMPORTED_MODULE_1__["styled"])('li', {
  width: 'auto',
  height: 'auto',
  lineHeight: 1.5
});

const Sidebar = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Aside, {
    style: {
      gridArea: 'sidebar'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    message: props.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUl, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "First Project", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Second Project", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_icon_chevron_right__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

};
//# sourceMappingURL=main.51f9400c12f9dbe5c783.hot-update.js.map