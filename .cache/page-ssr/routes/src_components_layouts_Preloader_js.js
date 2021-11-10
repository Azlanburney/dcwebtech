"use strict";
exports.id = "src_components_layouts_Preloader_js";
exports.ids = ["src_components_layouts_Preloader_js"];
exports.modules = {

/***/ "./src/components/layouts/Preloader.js":
/*!*********************************************!*\
  !*** ./src/components/layouts/Preloader.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class Preloader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchSuccess: false
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({
        fetchSuccess: true
      });
    });
  }

  render() {
    const preloaderhidden = this.state.fetchSuccess ? 'd-none' : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "preloader",
      className: `${preloaderhidden}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);

/***/ })

};
;
//# sourceMappingURL=src_components_layouts_Preloader_js.js.map