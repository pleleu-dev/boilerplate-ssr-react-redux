/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".index.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./manifest.js":
/*!*********************!*\
  !*** ./manifest.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({data : [{\"name\":\"chunk/Pokemon\",\"path\":\"chunk/Pokemon.cecb73d39b390fcb242f.bundle.js\"},{\"name\":\"main\",\"path\":\"main.7f5af894198dc7417a6a.js\"},{\"name\":\"vendor\",\"path\":\"vendor.1cdafa9d0aa0f813e144.bundle.js\"}]});\n\n//# sourceURL=webpack:///./manifest.js?");

/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header.js\");\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-reset */ \"styled-reset\");\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _static_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/fonts/Roboto-Regular.ttf */ \"./src/static/fonts/Roboto-Regular.ttf\");\n/* harmony import */ var _static_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\nvar baseStyles = function baseStyles() {\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"createGlobalStyle\"])(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n\\t\", \"\\n\\t@font-face {\\n\\t\\tfont-family: 'Roboto-Regular';\\n\\t\\tsrc: url(\", \");\\n\\t\\tfont-weight: normal;\\n\\t\\tfont-style: normal;\\n\\t}\\n\"])), styled_reset__WEBPACK_IMPORTED_MODULE_3___default.a, _static_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_5___default.a);\n};\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({\n  displayName: \"App__Wrapper\",\n  componentId: \"v8fqlk-0\"\n})([\"margin:0 5%;\"]);\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  baseStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_Homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Homepage */ \"./src/client/pages/Homepage.js\");\n/* harmony import */ var _pages_PokemonPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/PokemonPage */ \"./src/client/pages/PokemonPage.js\");\n/* harmony import */ var _pages_RedirectPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/RedirectPage */ \"./src/client/pages/RedirectPage.js\");\n/* harmony import */ var _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ErrorPage */ \"./src/client/pages/ErrorPage.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  component: _App__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  routes: [{\n    component: _pages_Homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    path: \"/\",\n    exact: true\n  }, _pages_PokemonPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    path: \"/redirect\",\n    component: _pages_RedirectPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    component: _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: FETCH_pokemon, ADD_Module, fetchPokemon, addToModuleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_pokemon\", function() { return FETCH_pokemon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_Module\", function() { return ADD_Module; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPokemon\", function() { return fetchPokemon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToModuleList\", function() { return addToModuleList; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n/* types */\n\nvar FETCH_pokemon = \"fetch_pokemon\";\nvar ADD_Module = \"add_module\";\n\nvar handleAjaxRequestError = function handleAjaxRequestError(error) {\n  if (error.response) {\n    console.error(\"error.response data :\", error.response.data);\n    console.error(\"error.response status :\", error.response.status);\n    console.log(\"error.response headers :\", error.response.headers);\n  } else if (error.request) {//console.error(\"error.request :\", error.request);\n  } else {\n    console.error(\"Error\", error.message);\n  }\n\n  return;\n};\n/* Actions creators */\n\n\nvar fetchPokemon = function fetchPokemon() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var rootPath, res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              rootPath = process.env.ROOTPATH || \"\";\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(rootPath, \"/api/pokemon/pikachu/\"))[\"catch\"](handleAjaxRequestError);\n\n            case 3:\n              res = _context.sent;\n\n              if (res) {\n                dispatch({\n                  type: FETCH_pokemon,\n                  payload: res\n                });\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar addToModuleList = function addToModuleList(mdl) {\n  return function (dispatch) {\n    dispatch({\n      type: ADD_Module,\n      payload: mdl\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _static_img_smallImage_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/img/smallImage.png */ \"./src/static/img/smallImage.png\");\n/* harmony import */ var _static_img_smallImage_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_img_smallImage_png__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"Header__Wrapper\",\n  componentId: \"rsabdd-0\"\n})([\"padding:1em;text-align:center;\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({\n  displayName: \"Header__Title\",\n  componentId: \"rsabdd-1\"\n})([\"color:grey;font-size:2em;font-family:\\\"Roboto-Regular\\\";font-weight:bold;text-transform:uppercase;\"]);\nvar TitleImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({\n  displayName: \"Header__TitleImage\",\n  componentId: \"rsabdd-2\"\n})([\"height:4em;width:auto;vertical-align:middle;\"]);\nvar StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"]).withConfig({\n  displayName: \"Header__StyledLink\",\n  componentId: \"rsabdd-3\"\n})([\"display:inline-block;color:palevioletred;font-weight:bold;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;text-decoration:none;font-family:\\\"Roboto-Regular\\\";\"]);\n\nvar Header = function Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleImage, {\n    src: _static_img_smallImage_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Title image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, \"POKEMON\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {\n    to: \"/pokemon/pikachu\"\n  }, \"Pikachu\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/context/SSRContext.js":
/*!******************************************!*\
  !*** ./src/client/context/SSRContext.js ***!
  \******************************************/
/*! exports provided: SrrProvider, SrrConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SrrProvider\", function() { return SrrProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SrrConsumer\", function() { return SrrConsumer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar srrContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});\nvar SrrProvider = srrContext.Provider;\nvar SrrConsumer = srrContext.Consumer;\n\n//# sourceURL=webpack:///./src/client/context/SSRContext.js?");

/***/ }),

/***/ "./src/client/hoc/SSRLoader.js":
/*!*************************************!*\
  !*** ./src/client/hoc/SSRLoader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_SSRContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SSRContext */ \"./src/client/context/SSRContext.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nvar SrrComponent = /*#__PURE__*/function (_Component) {\n  _inherits(SrrComponent, _Component);\n\n  var _super = _createSuper(SrrComponent);\n\n  function SrrComponent(props) {\n    var _this;\n\n    _classCallCheck(this, SrrComponent);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      module: null,\n      srrData: props.callback && props.callback(_this.props)\n    };\n    return _this;\n  }\n\n  _createClass(SrrComponent, [{\n    key: \"getComponent\",\n    value: function () {\n      var _getComponent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var _this2 = this;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.props.module().then(function (res) {\n                  _this2.setState({\n                    module: res\n                  });\n\n                  _this2.props.addToModuleList({\n                    id: _this2.props.webpackChunkName,\n                    component: res[\"default\"]\n                  });\n                })[\"catch\"](function (err) {\n                  console.log(\"err\", err);\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getComponent() {\n        return _getComponent.apply(this, arguments);\n      }\n\n      return getComponent;\n    }()\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this3 = this;\n\n      if (this.props.lazyload) {\n        setTimeout(function () {\n          _this3.initLazyLoad();\n        }, 500);\n        window.addEventListener(\"scroll\", this.debounce(this.initLazyLoad, 200).bind(this));\n      } else {\n        this.getComponent();\n      }\n    }\n  }, {\n    key: \"initLazyLoad\",\n    value: function initLazyLoad() {\n      if (this.state.module) {\n        window.removeEventListener(\"scroll\", function () {\n          console.log(\"Lazy component loaded\");\n        }, false);\n      } else {\n        var component = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__[\"findDOMNode\"])(this);\n\n        if (this.isInViewport(component, this.props.offset) && this.isVisible(component)) {\n          this.getComponent();\n        }\n      }\n    }\n  }, {\n    key: \"debounce\",\n    value: function debounce(fn, time) {\n      var timeout;\n      return function () {\n        var _arguments = arguments,\n            _this4 = this;\n\n        var functionCall = function functionCall() {\n          return fn.apply(_this4, _arguments);\n        };\n\n        clearTimeout(timeout);\n        timeout = setTimeout(functionCall, time);\n      };\n    }\n  }, {\n    key: \"isInViewport\",\n    value: function isInViewport(el) {\n      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var rect = el.getBoundingClientRect();\n      var windowHeight = window.innerHeight || document.documentElement.clientHeight;\n      var windowWidth = window.innerWidth || document.documentElement.clientWidth;\n      var vertInView = rect.top - offset <= windowHeight && rect.top + rect.height + offset >= 0;\n      var horInView = rect.left - offset <= windowWidth && rect.left + rect.width + offset >= 0;\n      return vertInView && horInView;\n    }\n  }, {\n    key: \"isVisible\",\n    value: function isVisible(el) {\n      return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);\n    }\n  }, {\n    key: \"hasComponent\",\n    value: function hasComponent(list, itemName) {\n      function isComponent(item) {\n        return item.id === itemName;\n      }\n\n      var comp = list.find(isComponent);\n      if (comp) return comp.component;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var cleanProps = _objectSpread({}, this.props);\n\n      delete cleanProps.webpackChunkName;\n      delete cleanProps.module;\n      delete cleanProps.callback;\n      delete cleanProps.ssr;\n      delete cleanProps.uniqueId;\n\n      var createMarkup = function createMarkup(id) {\n        if (typeof document === \"undefined\") return null;\n        return {\n          __html: document.getElementById(id) ? document.getElementById(id).innerHTML : null\n        };\n      };\n      /*server side*/\n\n\n      if (this.state.srrData) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"template\", null, this.state.srrData.webpackChunkName);\n      }\n      /*async*/\n\n\n      if (this.props.moduleList && this.props.moduleList.length) {\n        var AsyncComponent = this.hasComponent(this.props.moduleList, this.props.webpackChunkName);\n        if (AsyncComponent) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AsyncComponent, cleanProps);\n      }\n\n      if (this.state.module) {\n        var _AsyncComponent = this.state.module[\"default\"];\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncComponent, cleanProps);\n      }\n      /*sync first render*/\n\n\n      var markup = createMarkup(this.props.uniqueId);\n      if (markup.__html) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        source: markup.__html,\n        escapeHtml: false\n      });\n      /*lazyload*/\n\n      if (this.props.lazyload) {\n        return this.props.loadingMessage || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null);\n      }\n\n      return null;\n    }\n  }]);\n\n  return SrrComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Loader = /*#__PURE__*/function (_Component2) {\n  _inherits(Loader, _Component2);\n\n  var _super2 = _createSuper(Loader);\n\n  function Loader(props) {\n    _classCallCheck(this, Loader);\n\n    return _super2.call(this, props);\n  }\n\n  _createClass(Loader, [{\n    key: \"render\",\n    value: function render() {\n      var props = this.props;\n\n      if (this.props.ssr) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          id: props.uniqueId\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_SSRContext__WEBPACK_IMPORTED_MODULE_1__[\"SrrConsumer\"], null, function (_ref) {\n          var handleChange = _ref.handleChange;\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SrrComponent, _extends({\n            callback: handleChange\n          }, props));\n        }));\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SrrComponent, props);\n    }\n  }]);\n\n  return Loader;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction mapStateToProps(_ref2) {\n  var moduleList = _ref2.moduleList;\n  return {\n    moduleList: moduleList\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, {\n  addToModuleList: _actions__WEBPACK_IMPORTED_MODULE_5__[\"addToModuleList\"]\n})(Loader));\n\n//# sourceURL=webpack:///./src/client/hoc/SSRLoader.js?");

/***/ }),

/***/ "./src/client/pages/ErrorPage.js":
/*!***************************************!*\
  !*** ./src/client/pages/ErrorPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ErrorPage = function ErrorPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;\n  staticContext.notFound = true;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" Oups not found !\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorPage);\n\n//# sourceURL=webpack:///./src/client/pages/ErrorPage.js?");

/***/ }),

/***/ "./src/client/pages/Homepage.js":
/*!**************************************!*\
  !*** ./src/client/pages/Homepage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({\n  displayName: \"Homepage__SubTitle\",\n  componentId: \"po9flf-0\"\n})([\"color:pink;font-size:1.5em;padding:0.5em;font-family:\\\"Roboto-Regular\\\";\"]);\n\nvar HomePage = function HomePage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    property: \"og:title\",\n    content: \"Home\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, \"REACT SSR EXAMPLE\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/client/pages/Homepage.js?");

/***/ }),

/***/ "./src/client/pages/PokemonPage.js":
/*!*****************************************!*\
  !*** ./src/client/pages/PokemonPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hoc_SSRLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoc/SSRLoader */ \"./src/client/hoc/SSRLoader.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ \"./src/client/styles.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2.withConfig({\n  displayName: \"PokemonPage__SubTitle\",\n  componentId: \"sc-18xqne6-0\"\n})([\"color:burlywood;font-size:1.2em;padding:1em;font-family:\\\"Roboto-Regular\\\";font-weight:bold;text-transform:uppercase;\"]);\n\nvar PokemonModule = function PokemonModule() {\n  return __webpack_require__.e(/*! import() | chunk/Pokemon */ \"chunk/Pokemon\").then(__webpack_require__.bind(null, /*! ../containers/pokemon */ \"./src/client/containers/pokemon.js\"));\n};\n\nvar PokemonPage = /*#__PURE__*/function (_Component) {\n  _inherits(PokemonPage, _Component);\n\n  var _super = _createSuper(PokemonPage);\n\n  function PokemonPage() {\n    _classCallCheck(this, PokemonPage);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(PokemonPage, [{\n    key: \"head\",\n    value: function head() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        property: \"og:title\",\n        content: \"pokemon\"\n      }));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.head(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, \"POKEMON\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Wrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_SSRLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ssr: true,\n        module: PokemonModule,\n        webpackChunkName: \"chunkPokemon\",\n        uniqueId: \"chunkPokemon\",\n        lazyload: false,\n        id: this.props.match.params.id\n      })));\n    }\n  }]);\n\n  return PokemonPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nfunction loadPokemon(store) {\n  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__[\"fetchPokemon\"])());\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: PokemonPage,\n  path: \"/pokemon/:id\",\n  exact: true,\n  loadData: loadPokemon\n});\n\n//# sourceURL=webpack:///./src/client/pages/PokemonPage.js?");

/***/ }),

/***/ "./src/client/pages/RedirectPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/RedirectPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar RedirectPage = function RedirectPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    to: \"/\"\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RedirectPage);\n\n//# sourceURL=webpack:///./src/client/pages/RedirectPage.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pokemonReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemonReducer */ \"./src/client/reducers/pokemonReducer.js\");\n/* harmony import */ var _moduleReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleReducer */ \"./src/client/reducers/moduleReducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  pokemon: _pokemonReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  moduleList: _moduleReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/moduleReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/moduleReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var lodash_mapKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/mapKeys */ \"lodash/mapKeys\");\n/* harmony import */ var lodash_mapKeys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_mapKeys__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_Module\"]:\n      console.log(\"ADD_Module\", action.payload);\n      if (action.payload) state.push(action.payload);\n      return state;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/moduleReducer.js?");

/***/ }),

/***/ "./src/client/reducers/pokemonReducer.js":
/*!***********************************************!*\
  !*** ./src/client/reducers/pokemonReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_pokemon\"]:\n      if (action.payload.data) {\n        return action.payload.data;\n      }\n\n      return state;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/pokemonReducer.js?");

/***/ }),

/***/ "./src/client/styles.js":
/*!******************************!*\
  !*** ./src/client/styles.js ***!
  \******************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styles__Wrapper\",\n  componentId: \"zksy5h-0\"\n})([\"position:relative;color:grey;font-size:1em;font-family:\\\"Roboto-Regular\\\";font-weight:normal;\"]);\n\n//# sourceURL=webpack:///./src/client/styles.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n  return store;\n});\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var _manifest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../manifest */ \"./manifest.js\");\n/* harmony import */ var _client_context_SSRContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client/context/SSRContext */ \"./src/client/context/SSRContext.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, store, context) {\n    var sheet, staticLink, modules, CaptureSrr, content, styleTags, helmet, chunkScriptTag;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            sheet = new styled_components__WEBPACK_IMPORTED_MODULE_6__[\"ServerStyleSheet\"]();\n            staticLink = req.protocol + \"://\" + req.get(\"host\");\n            modules = [];\n\n            CaptureSrr = /*#__PURE__*/function (_React$Component) {\n              _inherits(CaptureSrr, _React$Component);\n\n              var _super = _createSuper(CaptureSrr);\n\n              function CaptureSrr() {\n                var _this;\n\n                _classCallCheck(this, CaptureSrr);\n\n                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n                  args[_key] = arguments[_key];\n                }\n\n                _this = _super.call.apply(_super, [this].concat(args));\n\n                _defineProperty(_assertThisInitialized(_this), \"handleContextChange\", function (loadable) {\n                  modules.push(loadable);\n                  return loadable;\n                });\n\n                return _this;\n              }\n\n              _createClass(CaptureSrr, [{\n                key: \"render\",\n                value: function render() {\n                  var contextValue = {\n                    handleChange: this.handleContextChange\n                  };\n                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n                    store: store\n                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_context_SSRContext__WEBPACK_IMPORTED_MODULE_10__[\"SrrProvider\"], {\n                    value: contextValue\n                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n                    context: context,\n                    location: req.path\n                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_6__[\"StyleSheetManager\"], {\n                    sheet: sheet.instance\n                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]))))));\n                }\n              }]);\n\n              return CaptureSrr;\n            }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n            content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CaptureSrr, null));\n            _context.next = 7;\n            return Promise.all(modules.map(function (i) {\n              return i.module();\n            })).then(function (mod) {\n              mod.forEach(function (item, index) {\n                if (item[\"default\"]) {\n                  var SrrComponent = item[\"default\"];\n\n                  var cleanProps = _objectSpread({}, modules[index]);\n\n                  delete cleanProps.webpackChunkName;\n                  delete cleanProps.module;\n                  delete cleanProps.callback;\n                  delete cleanProps.srr;\n                  var moduleToString = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n                    store: store\n                  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SrrComponent, cleanProps)));\n                  var regex = new RegExp(\"<template>\".concat(modules[index].webpackChunkName, \"</template>\"));\n                  content = content.replace(regex, moduleToString);\n                }\n              });\n            })[\"catch\"](function (err) {\n              console.log(\"Err\");\n            });\n\n          case 7:\n            styleTags = sheet.getStyleTags();\n            helmet = react_helmet__WEBPACK_IMPORTED_MODULE_7__[\"Helmet\"].renderStatic();\n            chunkScriptTag = \"\";\n            _manifest__WEBPACK_IMPORTED_MODULE_9__[\"default\"].data.forEach(function (element) {\n              if (!element.path.includes(\"chunk\")) {\n                chunkScriptTag += \"<script src=\\\"\".concat(staticLink, \"/public/\").concat(element.path, \"\\\"></script>\");\n              }\n            });\n            return _context.abrupt(\"return\", \"<html>\\n\\t\\t\\t\\t\\t<head>\\n\\t\\t\\t\\t\\t\\t\".concat(helmet.title.toString(), \"\\n\\t\\t\\t\\t\\t\\t\").concat(helmet.meta.toString(), \"\\n\\t\\t\\t\\t\\t\\t\").concat(styleTags, \"\\n\\t\\t\\t\\t\\t</head>\\n\\t\\t\\t\\t\\t<body>\\n\\t\\t\\t\\t\\t\\t<div id=\\\"root\\\">\").concat(content, \"</div>\\n\\t\\t\\t\\t\\t\\t<script>\\n\\t\\t\\t\\t\\t\\t\\twindow.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), \"\\n\\t\\t\\t\\t\\t\\t</script>\\n\\n\\t\\t\\t\\t\\t\\t\").concat(chunkScriptTag, \"\\n\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t</body>\\n\\t\\t\\t\\t</html>\\n\\t\\t\\t\\t\"));\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _routes_apiRoutes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/apiRoutes */ \"./src/routes/apiRoutes.js\");\n/* harmony import */ var _middlewares_authMiddleware__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./middlewares/authMiddleware */ \"./src/middlewares/authMiddleware.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n__webpack_require__(/*! dotenv */ \"dotenv\").load();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ENV_PRODUCTION =  false ? undefined : false;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\nvar server = http__WEBPACK_IMPORTED_MODULE_12___default.a.createServer(app);\nvar PORT = process.env.PORT || 3000;\nvar appDirectory = fs__WEBPACK_IMPORTED_MODULE_2___default.a.realpathSync(process.cwd());\n\nvar resolveApp = function resolveApp(relativePath) {\n  return path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(appDirectory, relativePath);\n};\n\nvar sess = {\n  secret: \"I can see dead people\"\n  /* a string to sign the session ID cookie */\n  ,\n  cookie: {\n    secure: ENV_PRODUCTION ? true : false,\n    maxAge: 7200000\n  },\n  resave: false,\n  saveUninitialized: false\n};\n/* MIDDLEWARES */\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_8___default()());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_11___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_9___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_9___default.a.urlencoded({\n  extended: false\n}));\n\nif (ENV_PRODUCTION) {\n  app.set(\"trust proxy\", 1);\n}\n\napp.use(express_session__WEBPACK_IMPORTED_MODULE_10___default()(sess));\n/* SERVING STATIC FILES */\n\nif (ENV_PRODUCTION) {\n  /* for production */\n  app.use(\"/public\", express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, \"./public\")));\n  app.use(\"/chunk\", express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, \"./public/chunk\")));\n} else {\n  /* for dev */\n  var resolvePath = {\n    \"public\": resolveApp(\"./public/\"),\n    chunk: resolveApp(\"./public/chunk\")\n  };\n  app.use(\"/public\", express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"](resolvePath[\"public\"]));\n  app.use(\"/chunk\", express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"](resolvePath.chunk));\n}\n/* SERVING ROUTES */\n\n/** API routes */\n\n\nObject(_routes_apiRoutes__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(app, server);\napp.get(\"*\", _middlewares_authMiddleware__WEBPACK_IMPORTED_MODULE_14__[\"default\"], function (req, res) {\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"matchRoutes\"])(_client_Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve)[\"catch\"](resolve);\n      });\n    }\n  });\n  Promise.all(promises).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var context, content;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            context = {};\n            _context.next = 3;\n            return Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req, store, context);\n\n          case 3:\n            content = _context.sent;\n\n            if (!context.url) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.redirect(301, context.url));\n\n          case 6:\n            if (context.notFound === true) {\n              res.status(404);\n            }\n\n            res.send(content);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })));\n});\nserver.listen(PORT, function () {\n  console.log(\"listening on port \".concat(PORT));\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middlewares/authMiddleware.js":
/*!*******************************************!*\
  !*** ./src/middlewares/authMiddleware.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  if (req.session.user || req.path === \"/login\") {\n    if (req.session.user && req.path === \"/login\") {\n      res.redirect(\"/\");\n    } else {\n      next();\n    }\n  } else {\n    var hasAuth = parseInt(process.env.AUTH, 10);\n\n    if (hasAuth) {\n      res.redirect(\"/login\");\n    } else {\n      next();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/middlewares/authMiddleware.js?");

/***/ }),

/***/ "./src/routes/apiRoutes.js":
/*!*********************************!*\
  !*** ./src/routes/apiRoutes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar catchError = function catchError(data) {\n  console.log(\"catchError\");\n\n  if (data && data.response) {\n    console.log(\"data.response\", data.response);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  var SERVICE_URL = process.env.SERVICE_URL;\n  app.get(\"/api/pokemon/:pokemonId/\", /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n      var response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(SERVICE_URL, \"pokemon/\").concat(req.params.pokemonId, \"/\"))[\"catch\"](function (err) {\n                catchError(data, res);\n              });\n\n            case 2:\n              response = _context.sent;\n\n              if (response) {\n                res.status(200);\n                res.contentType(\"json\");\n                res.send(JSON.stringify(response.data));\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n});\n\n//# sourceURL=webpack:///./src/routes/apiRoutes.js?");

/***/ }),

/***/ "./src/static/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/static/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"/public/fonts/Roboto-Regular.ttf\";\n\n//# sourceURL=webpack:///./src/static/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/static/img/smallImage.png":
/*!***************************************!*\
  !*** ./src/static/img/smallImage.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./src/static/img/smallImage.png?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "lodash/filter":
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/filter\");\n\n//# sourceURL=webpack:///external_%22lodash/filter%22?");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/map\");\n\n//# sourceURL=webpack:///external_%22lodash/map%22?");

/***/ }),

/***/ "lodash/mapKeys":
/*!*********************************!*\
  !*** external "lodash/mapKeys" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/mapKeys\");\n\n//# sourceURL=webpack:///external_%22lodash/mapKeys%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-markdown\");\n\n//# sourceURL=webpack:///external_%22react-markdown%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-reset\");\n\n//# sourceURL=webpack:///external_%22styled-reset%22?");

/***/ })

/******/ });