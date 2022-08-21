module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/Card.js":
/*!**********************************!*\
  !*** ./pages/components/Card.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_AllOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AllOut */ "@material-ui/icons/AllOut");
/* harmony import */ var _material_ui_icons_AllOut__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AllOut__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Done */ "@material-ui/icons/Done");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Eco */ "@material-ui/icons/Eco");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Lock */ "@material-ui/icons/Lock");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Md Jamal Uddin\\Desktop\\ui-crypto-main\\pages\\components\\Card.js";





const Style = "text-white text-xs";
const arrayIcon = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AllOut__WEBPACK_IMPORTED_MODULE_2___default.a, {
  fontSize: "small",
  className: Style
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 20
}, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_3___default.a, {
  fontSize: "small",
  className: Style
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 71
}, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_4___default.a, {
  fontSize: "small",
  className: Style
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 120
}, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_5___default.a, {
  fontSize: "small",
  className: Style
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 168
}, undefined)];
const Color = ["from-indigo-500 to-blue-500", "from-blue-400 to-blue-300", "from-green-500 to-green-400", "from-yellow-600 to-yellow-500"];

const Card = props => {
  var balance = props.balance;
  balance = balance * 9.5;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `transform hover:scale-110 cursor-pointer transition delay-100 w-3/12  p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r ${Color[props.icon]}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " w-10  h-10 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30",
        children: arrayIcon[props.icon]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-gray-200 text-xs  ",
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-gray-50 text-lg  font-semibold  ",
      children: [props.balance, " EGLD"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-gray-300  text-sm ",
      children: ["$", balance]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./pages/components/Container.js":
/*!***************************************!*\
  !*** ./pages/components/Container.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./pages/components/Card.js");
/* harmony import */ var _Middle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Middle */ "./pages/components/Middle.js");
/* harmony import */ var _RightBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RightBar */ "./pages/components/RightBar.js");

var _jsxFileName = "C:\\Users\\Md Jamal Uddin\\Desktop\\ui-crypto-main\\pages\\components\\Container.js";





const Container = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: " bg-gradient-to-r from-gray-100 to-gray-50 h-full ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "  px-8 py-1 ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-500 text-lg",
        children: "Elrond"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-bold text-2xl transform -translate-y-2",
        children: "Hei!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex   p-4 space-x-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "TOTAL",
        balance: 409.0790,
        icon: 0
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "AVAILABLE",
        balance: 300.0790,
        icon: 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "CLAIMABLE REWARD",
        balance: 100.0790,
        icon: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "DELEGATED",
        balance: 339.0790,
        icon: 3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex  ml-3 mt-6 space-x-6  mr-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Middle__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RightBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CropLandscape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CropLandscape */ "@material-ui/icons/CropLandscape");
/* harmony import */ var _material_ui_icons_CropLandscape__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CropLandscape__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Apps */ "@material-ui/icons/Apps");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Md Jamal Uddin\\Desktop\\ui-crypto-main\\pages\\components\\Header.js";






const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex shadow-sm bg-gray-50  p-4 justify-between  ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex space-x-3  ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-400",
        children: "Adress "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "0xc14D1bdD7A28b12fa3e88FE2bE9e193Bdfdlk8bb940A6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CropLandscape__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "text-gray-300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "text-gray-300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex space-x-4 text-gray-400 mr-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-600 font-semibold",
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/components/Middle.js":
/*!************************************!*\
  !*** ./pages/components/Middle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Md Jamal Uddin\\Desktop\\ui-crypto-main\\pages\\components\\Middle.js";


const data = {
  labels: ['Sep 19', 'Sep 20', 'Sep 21', 'Sep 22', 'Sep 23', 'Sep24', 'Sep 25'],
  datasets: [{
    label: 'Elrond ',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(67, 56, 202)',
    borderColor: 'rgba(67, 56, 202)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(67, 56, 202)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(67, 56, 202)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    pointHitRadius: 10,
    data: [12, 10, 6, 6, 6, 7, 7, 8]
  }]
};

const Middle = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: " bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "border-b p-3 border-gray-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-semibold  ",
        children: "Elrond eGold "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Middle);

/***/ }),

/***/ "./pages/components/RightBar.js":
/*!**************************************!*\
  !*** ./pages/components/RightBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Md Jamal Uddin\\Desktop\\ui-crypto-main\\pages\\components\\RightBar.js";
 // import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [{
    data: [10, 100],
    backgroundColor: [' rgba(67, 56, 202)', 'rgba(229, 231, 235)'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB']
  }]
};

const RightBar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-white  w-4/12 rounded-xl border border-gray-100",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "border-b p-3 border-gray-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-semibold  ",
        children: "Delegation "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col items-center p-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "font-semibold text-lg text-gray-800",
        children: " 21 h 47 m 51s"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-600 text-sm",
        children: "until next rewards batch is distributed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-4  flex items-center justify-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center items-center     h-48 w-48   rounded-full",
        style: {
          borderWidth: "16px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-center items-center  border-gray-200 h-44 w-44 rounded-full ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " flex flex-col justify-center items-center shadow-2xl h-32 w-32 rounded-full  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-800 font-semibold",
              children: " 17.0216 EGLD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-blue-700 font-semibold text-sm",
              children: " Claim Now"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col items-center p-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-600 text-sm text-center",
        children: " These  are reards availbaleto be claimed right now."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RightBar);

/***/ }),

/***/ "./pages/components/sidebar.js":
/*!*************************************!*\
  !*** ./pages/components/sidebar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/DonutLarge */ "@material-ui/icons/DonutLarge");
/* harmony import */ var _material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ClearAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ClearAll */ "@material-ui/icons/ClearAll");
/* harmony import */ var _material_ui_icons_ClearAll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ClearAll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "@material-ui/icons/ArrowUpward");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "@material-ui/icons/ArrowDownward");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_SyncAlt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/SyncAlt */ "@material-ui/icons/SyncAlt");
/* harmony import */ var _material_ui_icons_SyncAlt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SyncAlt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Layers */ "@material-ui/icons/Layers");
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Lock */ "@material-ui/icons/Lock");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Eco */ "@material-ui/icons/Eco");
/* harmony import */ var _material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Md Jamal Uddin\\Desktop\\ui-crypto-main\\pages\\components\\sidebar.js";










const Sidebar = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "md:w-3/12 w-6/12 h-screen shadow-2xl",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " border-b py-3 mt-1 flex justify-around ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-xl  font-semibold",
        children: "elrond"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "|"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-gray-400 text-lg",
        children: "wallet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-4 space-y-14",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-gray-400",
          children: "Menu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_DonutLarge__WEBPACK_IMPORTED_MODULE_2___default.a, {
              className: " text-gray-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: " ",
              children: "Dashbord"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ClearAll__WEBPACK_IMPORTED_MODULE_3___default.a, {
              className: "text-gray-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-600  ",
              children: "Transaction"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4___default.a, {
              className: "text-gray-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-600  ",
              children: "Send"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default.a, {
              className: "text-gray-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-600  ",
              children: "Receive"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_SyncAlt__WEBPACK_IMPORTED_MODULE_6___default.a, {
              className: "text-gray-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-600  ",
              children: "Buy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-gray-400",
          children: "Delegation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_8___default.a, {
              className: "text-gray-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-600  ",
              children: "Delegate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Eco__WEBPACK_IMPORTED_MODULE_9___default.a, {
              className: "text-gray-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-600  ",
              children: "Claim Reward"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-gray-400",
          children: "taking    "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_7___default.a, {
              className: "text-gray-300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-600  ",
              children: "Validate"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar */ "./pages/components/sidebar.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Container */ "./pages/components/Container.js");

var _jsxFileName = "C:\\Users\\Md Jamal Uddin\\Desktop\\ui-crypto-main\\pages\\index.js";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex w-screen h-screen",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-screen ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@material-ui/icons/AllOut":
/*!********************************************!*\
  !*** external "@material-ui/icons/AllOut" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AllOut");

/***/ }),

/***/ "@material-ui/icons/Apps":
/*!******************************************!*\
  !*** external "@material-ui/icons/Apps" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "@material-ui/icons/ArrowDownward":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDownward" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

/***/ }),

/***/ "@material-ui/icons/ArrowUpward":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowUpward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "@material-ui/icons/ClearAll":
/*!**********************************************!*\
  !*** external "@material-ui/icons/ClearAll" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ClearAll");

/***/ }),

/***/ "@material-ui/icons/CropLandscape":
/*!***************************************************!*\
  !*** external "@material-ui/icons/CropLandscape" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CropLandscape");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "@material-ui/icons/DonutLarge":
/*!************************************************!*\
  !*** external "@material-ui/icons/DonutLarge" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DonutLarge");

/***/ }),

/***/ "@material-ui/icons/Eco":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Eco" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Eco");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/Layers":
/*!********************************************!*\
  !*** external "@material-ui/icons/Layers" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ "@material-ui/icons/Lock":
/*!******************************************!*\
  !*** external "@material-ui/icons/Lock" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Lock");

/***/ }),

/***/ "@material-ui/icons/SyncAlt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/SyncAlt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SyncAlt");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvTWlkZGxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvUmlnaHRCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BbGxPdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXBwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93VXB3YXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyQWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nyb3BMYW5kc2NhcGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RvbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRG9udXRMYXJnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FY29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xheWVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N5bmNBbHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNoYXJ0anMtMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlN0eWxlIiwiYXJyYXlJY29uIiwiQ29sb3IiLCJDYXJkIiwicHJvcHMiLCJiYWxhbmNlIiwiaWNvbiIsInRpdGxlIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsInBvaW50SGl0UmFkaXVzIiwiTWlkZGxlIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJSaWdodEJhciIsImJvcmRlcldpZHRoIiwiU2lkZWJhciIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNB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Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBbGxPdXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BbGxPdXQnO1xuaW1wb3J0IERvbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Eb25lJztcbmltcG9ydCBFY29JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FY28nO1xuaW1wb3J0IExvY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrJztcblxuXG5jb25zdCBTdHlsZSA9IFwidGV4dC13aGl0ZSB0ZXh0LXhzXCJcblxuY29uc3QgYXJyYXlJY29uID0gWzxBbGxPdXRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjbGFzc05hbWU9e1N0eWxlfSAvPiwgPERvbmVJY29uIGZvbnRTaXplPVwic21hbGxcIiBjbGFzc05hbWU9e1N0eWxlfSAvPiwgPEVjb0ljb24gZm9udFNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT17U3R5bGV9IC8+LCA8TG9ja0ljb24gZm9udFNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT17U3R5bGV9IC8+XVxuY29uc3QgQ29sb3IgPSBbXCJmcm9tLWluZGlnby01MDAgdG8tYmx1ZS01MDBcIiwgXCJmcm9tLWJsdWUtNDAwIHRvLWJsdWUtMzAwXCIsIFwiZnJvbS1ncmVlbi01MDAgdG8tZ3JlZW4tNDAwXCIsIFwiZnJvbS15ZWxsb3ctNjAwIHRvLXllbGxvdy01MDBcIl1cblxuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgdmFyIGJhbGFuY2UgPSBwcm9wcy5iYWxhbmNlXG4gICAgYmFsYW5jZSA9IGJhbGFuY2UgKiA5LjU7XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTEwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZGVsYXktMTAwIHctMy8xMiAgcC0yIHB5LTQgc2hhZG93LXhsICBib3JkZXIgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1yICR7Q29sb3JbcHJvcHMuaWNvbl19YH0gPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy0xMCAgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgYmctZ3JheS0zMDAgcm91bmRlZC14bCBtLTEgIGJnLW9wYWNpdHktMzBcIj5cbiAgICAgICAgICAgICAgICAgICAge2FycmF5SWNvbltwcm9wcy5pY29uXX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTIwMCB0ZXh0LXhzICBcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAgdGV4dC1sZyAgZm9udC1zZW1pYm9sZCAgXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmJhbGFuY2V9IEVHTERcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgIHRleHQtc20gXCI+XG4gICAgICAgICAgICAgICAgJHtiYWxhbmNlfVxuICAgICAgICAgICAgPC9wPlxuXG5cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xuaW1wb3J0IE1pZGRsZSBmcm9tICcuL01pZGRsZSdcbmltcG9ydCBSaWdodEJhciBmcm9tICcuL1JpZ2h0QmFyJ1xuXG5cblxuXG5cbmNvbnN0IENvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS0xMDAgdG8tZ3JheS01MCBoLWZ1bGwgXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIHB4LTggcHktMSBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgRWxyb25kXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICBIZWkhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgIHAtNCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT1cIlRPVEFMXCIgYmFsYW5jZT17NDA5LjA3OTB9IGljb249ezB9IC8+XG4gICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9XCJBVkFJTEFCTEVcIiBiYWxhbmNlPXszMDAuMDc5MH0gaWNvbj17MX0gLz5cbiAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT1cIkNMQUlNQUJMRSBSRVdBUkRcIiBiYWxhbmNlPXsxMDAuMDc5MH0gaWNvbj17Mn0gLz5cbiAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT1cIkRFTEVHQVRFRFwiIGJhbGFuY2U9ezMzOS4wNzkwfSBpY29uPXszfSAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgbWwtMyBtdC02IHNwYWNlLXgtNiAgbXItNFwiPlxuICAgICAgICAgICAgICAgIDxNaWRkbGUgLz5cbiAgICAgICAgICAgICAgICA8UmlnaHRCYXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZCc7XG5pbXBvcnQgQ3JvcExhbmRzY2FwZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nyb3BMYW5kc2NhcGUnO1xuaW1wb3J0IEFwcHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcHBzJztcbmltcG9ydCBFeGl0VG9BcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHAnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNoYWRvdy1zbSBiZy1ncmF5LTUwICBwLTQganVzdGlmeS1iZXR3ZWVuICBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTMgIFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5BZHJlc3MgPC9wPlxuICAgICAgICAgICAgICAgIDxwPjB4YzE0RDFiZEQ3QTI4YjEyZmEzZTg4RkUyYkU5ZTE5M0JkZmRsazhiYjk0MEE2PC9wPlxuICAgICAgICAgICAgICAgIDxDcm9wTGFuZHNjYXBlSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgICAgICA8RGFzaGJvYXJkSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCIgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IHRleHQtZ3JheS00MDAgbXItM1wiPlxuXG4gICAgICAgICAgICAgICAgPEFwcHNJY29uIC8+XG4gICAgICAgICAgICAgICAgPEV4aXRUb0FwcEljb24gLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtc2VtaWJvbGRcIj5DbG9zZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBbJ1NlcCAxOScsICdTZXAgMjAnLCAnU2VwIDIxJywgJ1NlcCAyMicsICdTZXAgMjMnLCAnU2VwMjQnLCAnU2VwIDI1J10sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdFbHJvbmQgJyxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNjcsIDU2LCAyMDIpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg2NywgNTYsIDIwMiknLFxuICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxuICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxuICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ3JnYmEoNjcsIDU2LCAyMDIpJyxcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDY3LCA1NiwgMjAyKScsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiA0LFxuICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgZGF0YTogWzEyLCAxMCwgNiwgNiwgNiwgNywgNywgOF1cbiAgICAgICAgfVxuICAgIF1cbn07XG5cbmNvbnN0IE1pZGRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy13aGl0ZSBtbC0yICAgc2hhZG93LXNtIHctOC8xMiBib3JkZXIgcm91bmRlZC14bCBib3JkZXItZ3JheS0xMDBcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBwLTMgYm9yZGVyLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCAgXCI+RWxyb25kIGVHb2xkIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlkZGxlXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbmNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBbXG5cbiAgICBdLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBkYXRhOiBbMTAsIDEwMF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICAgJyByZ2JhKDY3LCA1NiwgMjAyKScsXG4gICAgICAgICAgICAncmdiYSgyMjksIDIzMSwgMjM1KScsXG5cbiAgICAgICAgXSxcbiAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgICcjRkY2Mzg0JyxcbiAgICAgICAgICAgICcjMzZBMkVCJyxcblxuICAgICAgICBdXG4gICAgfV1cbn07XG5cblxuY29uc3QgUmlnaHRCYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSAgdy00LzEyIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBwLTMgYm9yZGVyLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCAgXCI+RGVsZWdhdGlvbiA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC0zXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIHRleHQtZ3JheS04MDBcIiA+IDIxIGggNDcgbSA1MXM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXCI+dW50aWwgbmV4dCByZXdhcmRzIGJhdGNoIGlzIGRpc3RyaWJ1dGVkPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00ICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgICAgaC00OCB3LTQ4ICAgcm91bmRlZC1mdWxsXCIgc3R5bGU9e3sgYm9yZGVyV2lkdGg6IFwiMTZweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgYm9yZGVyLWdyYXktMjAwIGgtNDQgdy00NCByb3VuZGVkLWZ1bGwgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzaGFkb3ctMnhsIGgtMzIgdy0zMiByb3VuZGVkLWZ1bGwgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgZm9udC1zZW1pYm9sZFwiPiAxNy4wMjE2IEVHTEQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIHRleHQtc21cIj4gQ2xhaW0gTm93PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC0zXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtY2VudGVyXCI+IFRoZXNlICBhcmUgcmVhcmRzIGF2YWlsYmFsZXRvIGJlIGNsYWltZWQgcmlnaHQgbm93LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0QmFyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRG9udXRMYXJnZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RvbnV0TGFyZ2UnO1xuaW1wb3J0IENsZWFyQWxsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJBbGwnO1xuaW1wb3J0IEFycm93VXB3YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dVcHdhcmQnO1xuaW1wb3J0IEFycm93RG93bndhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkJztcbmltcG9ydCBTeW5jQWx0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3luY0FsdCc7XG5pbXBvcnQgTGF5ZXJzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGF5ZXJzJztcbmltcG9ydCBMb2NrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jayc7XG5pbXBvcnQgRWNvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvJztcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMy8xMiB3LTYvMTIgaC1zY3JlZW4gc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYm9yZGVyLWIgcHktMyBtdC0xIGZsZXgganVzdGlmeS1hcm91bmQgXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCAgZm9udC1zZW1pYm9sZFwiPmVscm9uZDwvcD5cbiAgICAgICAgICAgICAgICA8cD58PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1sZ1wiPndhbGxldDwvcD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzcGFjZS15LTE0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+TWVudTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC0zIHRleHQtZ3JheS03MDAgIHNwYWNlLXgtNCAwIGhvdmVyOmJnLWdyYXktNTAgaG92ZXI6dGV4dC1ibHVlLTYwMCAgY3Vyc29yLXBvaW50ZXIgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb251dExhcmdlSWNvbiBjbGFzc05hbWU9XCIgdGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIFwiICA+RGFzaGJvcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC0zIHRleHQtZ3JheS03MDAgIHNwYWNlLXgtNCAwIGhvdmVyOmJnLWdyYXktNTAgaG92ZXI6dGV4dC1ibHVlLTYwMCAgY3Vyc29yLXBvaW50ZXIgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGVhckFsbEljb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCAgXCIgPlRyYW5zYWN0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMyB0ZXh0LWdyYXktNzAwICBzcGFjZS14LTQgMCBob3ZlcjpiZy1ncmF5LTUwIGhvdmVyOnRleHQtYmx1ZS02MDAgIGN1cnNvci1wb2ludGVyICBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dVcHdhcmRJY29uIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgIFwiID5TZW5kPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMyB0ZXh0LWdyYXktNzAwICBzcGFjZS14LTQgMCBob3ZlcjpiZy1ncmF5LTUwIGhvdmVyOnRleHQtYmx1ZS02MDAgIGN1cnNvci1wb2ludGVyICBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEb3dud2FyZEljb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCAgXCIgPlJlY2VpdmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC0zIHRleHQtZ3JheS03MDAgIHNwYWNlLXgtNCAwIGhvdmVyOmJnLWdyYXktNTAgaG92ZXI6dGV4dC1ibHVlLTYwMCAgY3Vyc29yLXBvaW50ZXIgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTeW5jQWx0SWNvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwICBcIiA+QnV5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+RGVsZWdhdGlvbjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC0zIHRleHQtZ3JheS03MDAgIHNwYWNlLXgtNCAwIGhvdmVyOmJnLWdyYXktNTAgaG92ZXI6dGV4dC1ibHVlLTYwMCAgY3Vyc29yLXBvaW50ZXIgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NrSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwICBcIiA+RGVsZWdhdGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC0zIHRleHQtZ3JheS03MDAgIHNwYWNlLXgtNCAwIGhvdmVyOmJnLWdyYXktNTAgaG92ZXI6dGV4dC1ibHVlLTYwMCAgY3Vyc29yLXBvaW50ZXIgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFY29JY29uIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgIFwiID5DbGFpbSBSZXdhcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiID5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj50YWtpbmcgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwLTMgdGV4dC1ncmF5LTcwMCAgc3BhY2UteC00IDAgaG92ZXI6YmctZ3JheS01MCBob3Zlcjp0ZXh0LWJsdWUtNjAwICBjdXJzb3ItcG9pbnRlciAgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyc0ljb24gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCAgXCIgPlZhbGlkYXRlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXInXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvbnRhaW5lcidcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1zY3JlZW4gaC1zY3JlZW5cIiA+XG4gICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxDb250YWluZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWxsT3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd1Vwd2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJBbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nyb3BMYW5kc2NhcGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRG9udXRMYXJnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWNvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeGl0VG9BcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xheWVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3luY0FsdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9