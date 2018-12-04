if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/bschwa/Documents/sandbox/foosion-test/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/Components/Card.js":
/*!********************************!*\
  !*** ./src/Components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baseui/card */ "baseui/card");
/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baseui_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baseui/button */ "baseui/button");
/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baseui_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Actions_Increment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Actions/Increment.js */ "./src/Actions/Increment.js");
var _jsxFileName = "/Users/bschwa/Documents/sandbox/foosion-test/src/Components/Card.js";






const CardButton = ({
  increment,
  counter
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Sample Redux Counter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Current Count: ", counter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  onClick: () => increment(1),
  kind: baseui_button__WEBPACK_IMPORTED_MODULE_2__["KIND"].success,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Increment by one"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  onClick: () => increment(2),
  kind: baseui_button__WEBPACK_IMPORTED_MODULE_2__["KIND"].danger,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Increment by two"));

const CardComponent = props => {
  const {
    increment,
    counter
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseui_card__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    action: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardButton, {
      increment: increment,
      counter: counter,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }),
    counter: counter,
    title: "Card title goes here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("withThemeHOC", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, props.children));
};

const mapStateToProps = state => {
  console.log('mapStateToProps: ', state);
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = {
  increment: _Actions_Increment_js__WEBPACK_IMPORTED_MODULE_4__["increment"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(CardComponent));

/***/ })

};
//# sourceMappingURL=main.c051a819453cc5014c50.hot-update.js.map