/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"chunk/Pokemon":"chunk/Pokemon"}[chunkId]||chunkId) + "." + {"chunk/Pokemon":"f611b8f4220eee3ecc05"}[chunkId] + ".bundle.js"
/******/ 	}
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
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/es/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./src/client/components/Header.js");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-reset */ "./node_modules/styled-reset/lib/index.js");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/fonts/Roboto-Regular.ttf */ "./src/static/fonts/Roboto-Regular.ttf");
/* harmony import */ var _static_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\t@font-face {\n\t\tfont-family: 'Roboto-Regular';\n\t\tsrc: url(", ");\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var baseStyles = function baseStyles() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject(), styled_reset__WEBPACK_IMPORTED_MODULE_3___default.a, _static_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_5___default.a);
};

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "App__Wrapper",
  componentId: "fk48yn-0"
})(["margin:0 5%;"]);

var App = function App(_ref) {
  var route = _ref.route;
  baseStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Homepage */ "./src/client/pages/Homepage.js");
/* harmony import */ var _pages_PokemonPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/PokemonPage */ "./src/client/pages/PokemonPage.js");
/* harmony import */ var _pages_RedirectPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/RedirectPage */ "./src/client/pages/RedirectPage.js");
/* harmony import */ var _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ErrorPage */ "./src/client/pages/ErrorPage.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/client/App.js");





/* harmony default export */ __webpack_exports__["default"] = ([{
  component: _App__WEBPACK_IMPORTED_MODULE_4__["default"],
  routes: [{
    component: _pages_Homepage__WEBPACK_IMPORTED_MODULE_0__["default"],
    path: "/",
    exact: true
  }, _pages_PokemonPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    path: "/redirect",
    component: _pages_RedirectPage__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    component: _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_3__["default"]
  }]
}]);

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: FETCH_pokemon, ADD_Module, fetchPokemon, addToModuleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_pokemon", function() { return FETCH_pokemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_Module", function() { return ADD_Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPokemon", function() { return fetchPokemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToModuleList", function() { return addToModuleList; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* types */

var FETCH_pokemon = "fetch_pokemon";
var ADD_Module = "add_module";

var handleAjaxRequestError = function handleAjaxRequestError(error) {
  if (error.response) {
    console.error("error.response data :", error.response.data);
    console.error("error.response status :", error.response.status);
    console.log("error.response headers :", error.response.headers);
  } else if (error.request) {//console.error("error.request :", error.request);
  } else {
    console.error("Error", error.message);
  }

  return;
};
/* Actions creators */


var fetchPokemon = function fetchPokemon() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var rootPath, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rootPath = process.env.ROOTPATH || "";
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(rootPath, "/api/pokemon/pikachu/")).catch(handleAjaxRequestError);

              case 3:
                res = _context.sent;

                if (res) {
                  dispatch({
                    type: FETCH_pokemon,
                    payload: res
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var addToModuleList = function addToModuleList(mdl) {
  return function (dispatch) {
    dispatch({
      type: ADD_Module,
      payload: mdl
    });
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _static_img_smallImage_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/img/smallImage.png */ "./src/static/img/smallImage.png");
/* harmony import */ var _static_img_smallImage_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_img_smallImage_png__WEBPACK_IMPORTED_MODULE_3__);




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-13h1eyp-0"
})(["padding:1em;text-align:center;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Header__Title",
  componentId: "sc-13h1eyp-1"
})(["color:grey;font-size:2em;font-family:\"Roboto-Regular\";font-weight:bold;text-transform:uppercase;"]);
var TitleImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Header__TitleImage",
  componentId: "sc-13h1eyp-2"
})(["height:4em;width:auto;vertical-align:middle;"]);
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"]).withConfig({
  displayName: "Header__StyledLink",
  componentId: "sc-13h1eyp-3"
})(["display:inline-block;color:palevioletred;font-weight:bold;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;text-decoration:none;font-family:\"Roboto-Regular\";"]);

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleImage, {
    src: _static_img_smallImage_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Title image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, "POKEMON"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    to: "/pokemon/pikachu"
  }, "Pikachu"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/client/context/SSRContext.js":
/*!******************************************!*\
  !*** ./src/client/context/SSRContext.js ***!
  \******************************************/
/*! exports provided: SrrProvider, SrrConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrrProvider", function() { return SrrProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrrConsumer", function() { return SrrConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var srrContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var SrrProvider = srrContext.Provider;
var SrrConsumer = srrContext.Consumer;

/***/ }),

/***/ "./src/client/hoc/SSRLoader.js":
/*!*************************************!*\
  !*** ./src/client/hoc/SSRLoader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SSRContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SSRContext */ "./src/client/context/SSRContext.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var SrrComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(SrrComponent, _Component);

  function SrrComponent(props) {
    var _this;

    _classCallCheck(this, SrrComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SrrComponent).call(this, props));
    _this.state = {
      module: null,
      srrData: props.callback && props.callback(_this.props)
    };
    return _this;
  }

  _createClass(SrrComponent, [{
    key: "getComponent",
    value: function () {
      var _getComponent = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.module().then(function (res) {
                  _this2.setState({
                    module: res
                  });

                  _this2.props.addToModuleList({
                    id: _this2.props.webpackChunkName,
                    component: res.default
                  });
                }).catch(function (err) {
                  console.log("err", err);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getComponent() {
        return _getComponent.apply(this, arguments);
      };
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.lazyload) {
        setTimeout(function () {
          _this3.initLazyLoad();
        }, 500);
        window.addEventListener("scroll", this.debounce(this.initLazyLoad, 200).bind(this));
      } else {
        this.getComponent();
      }
    }
  }, {
    key: "initLazyLoad",
    value: function initLazyLoad() {
      if (this.state.module) {
        window.removeEventListener("scroll", function () {
          console.log("Lazy component loaded");
        }, false);
      } else {
        var component = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this);

        if (this.isInViewport(component, this.props.offset) && this.isVisible(component)) {
          this.getComponent();
        }
      }
    }
  }, {
    key: "debounce",
    value: function debounce(fn, time) {
      var timeout;
      return function () {
        var _this4 = this,
            _arguments = arguments;

        var functionCall = function functionCall() {
          return fn.apply(_this4, _arguments);
        };

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
      };
    }
  }, {
    key: "isInViewport",
    value: function isInViewport(el) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var rect = el.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth;
      var vertInView = rect.top - offset <= windowHeight && rect.top + rect.height + offset >= 0;
      var horInView = rect.left - offset <= windowWidth && rect.left + rect.width + offset >= 0;
      return vertInView && horInView;
    }
  }, {
    key: "isVisible",
    value: function isVisible(el) {
      return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    }
  }, {
    key: "hasComponent",
    value: function hasComponent(list, itemName) {
      function isComponent(item) {
        return item.id === itemName;
      }

      var comp = list.find(isComponent);
      if (comp) return comp.component;
    }
  }, {
    key: "render",
    value: function render() {
      var cleanProps = _objectSpread({}, this.props);

      delete cleanProps.webpackChunkName;
      delete cleanProps.module;
      delete cleanProps.callback;
      delete cleanProps.ssr;
      delete cleanProps.uniqueId;

      var createMarkup = function createMarkup(id) {
        if (typeof document === "undefined") return null;
        return {
          __html: document.getElementById(id) ? document.getElementById(id).innerHTML : null
        };
      };
      /*server side*/


      if (this.state.srrData) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("template", null, this.state.srrData.webpackChunkName);
      }
      /*async*/


      if (this.props.moduleList && this.props.moduleList.length) {
        var AsyncComponent = this.hasComponent(this.props.moduleList, this.props.webpackChunkName);
        if (AsyncComponent) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AsyncComponent, cleanProps);
      }

      if (this.state.module) {
        var _AsyncComponent = this.state.module.default;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsyncComponent, cleanProps);
      }
      /*sync first render*/


      var markup = createMarkup(this.props.uniqueId);
      if (markup.__html) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
        source: markup.__html,
        escapeHtml: false
      });
      /*lazyload*/

      if (this.props.lazyload) {
        return this.props.loadingMessage || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
      }

      return null;
    }
  }]);

  return SrrComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Loader =
/*#__PURE__*/
function (_Component2) {
  _inherits(Loader, _Component2);

  function Loader(props) {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loader).call(this, props));
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if (this.props.ssr) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: props.uniqueId
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_SSRContext__WEBPACK_IMPORTED_MODULE_1__["SrrConsumer"], null, function (_ref) {
          var handleChange = _ref.handleChange;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SrrComponent, _extends({
            callback: handleChange
          }, props));
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SrrComponent, props);
    }
  }]);

  return Loader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(_ref2) {
  var moduleList = _ref2.moduleList;
  return {
    moduleList: moduleList
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  addToModuleList: _actions__WEBPACK_IMPORTED_MODULE_5__["addToModuleList"]
})(Loader));

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Routes */ "./src/client/Routes.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers */ "./src/client/reducers/index.js");
// Starting point for the client side application











var store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["default"], window.INITIAL_STATE, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7__["default"])));
Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__["renderRoutes"])(_Routes__WEBPACK_IMPORTED_MODULE_9__["default"])))), document.querySelector("#root"));

/***/ }),

/***/ "./src/client/pages/ErrorPage.js":
/*!***************************************!*\
  !*** ./src/client/pages/ErrorPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ErrorPage = function ErrorPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  staticContext.notFound = true;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " Oups not found !");
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

/***/ }),

/***/ "./src/client/pages/Homepage.js":
/*!**************************************!*\
  !*** ./src/client/pages/Homepage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Homepage__SubTitle",
  componentId: "sc-14fwnev-0"
})(["color:pink;font-size:1.5em;padding:0.5em;font-family:\"Roboto-Regular\";"]);

var HomePage = function HomePage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Home Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "Home"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, "REACT SSR EXAMPLE"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/client/pages/PokemonPage.js":
/*!*****************************************!*\
  !*** ./src/client/pages/PokemonPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_SSRLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoc/SSRLoader */ "./src/client/hoc/SSRLoader.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "./src/client/styles.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2.withConfig({
  displayName: "PokemonPage__SubTitle",
  componentId: "sc-3cyvgj-0"
})(["color:burlywood;font-size:1.2em;padding:1em;font-family:\"Roboto-Regular\";font-weight:bold;text-transform:uppercase;"]);

var PokemonModule = function PokemonModule() {
  return Promise.all(/*! import() | chunk/Pokemon */[__webpack_require__.e("vendor"), __webpack_require__.e("chunk/Pokemon")]).then(__webpack_require__.bind(null, /*! ../containers/pokemon */ "./src/client/containers/pokemon.js"));
};

var PokemonPage =
/*#__PURE__*/
function (_Component) {
  _inherits(PokemonPage, _Component);

  function PokemonPage() {
    _classCallCheck(this, PokemonPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(PokemonPage).apply(this, arguments));
  }

  _createClass(PokemonPage, [{
    key: "head",
    value: function head() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        property: "og:title",
        content: "pokemon"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.head(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, null, "POKEMON"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_SSRLoader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ssr: true,
        module: PokemonModule,
        webpackChunkName: "chunkPokemon",
        uniqueId: "chunkPokemon",
        lazyload: false,
        id: this.props.match.params.id
      })));
    }
  }]);

  return PokemonPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function loadPokemon(store) {
  return store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_5__["fetchPokemon"])());
}

/* harmony default export */ __webpack_exports__["default"] = ({
  component: PokemonPage,
  path: "/pokemon/:id",
  exact: true,
  loadData: loadPokemon
});

/***/ }),

/***/ "./src/client/pages/RedirectPage.js":
/*!******************************************!*\
  !*** ./src/client/pages/RedirectPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");



var RedirectPage = function RedirectPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectPage);

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _pokemonReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemonReducer */ "./src/client/reducers/pokemonReducer.js");
/* harmony import */ var _moduleReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleReducer */ "./src/client/reducers/moduleReducer.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  pokemon: _pokemonReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  moduleList: _moduleReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/client/reducers/moduleReducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/moduleReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");
/* harmony import */ var lodash_mapKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/mapKeys */ "./node_modules/lodash/mapKeys.js");
/* harmony import */ var lodash_mapKeys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_mapKeys__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_Module"]:
      console.log("ADD_Module", action.payload);
      if (action.payload) state.push(action.payload);
      return state;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/client/reducers/pokemonReducer.js":
/*!***********************************************!*\
  !*** ./src/client/reducers/pokemonReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_pokemon"]:
      if (action.payload.data) {
        return action.payload.data;
      }

      return state;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/client/styles.js":
/*!******************************!*\
  !*** ./src/client/styles.js ***!
  \******************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1qrz753-0"
})(["position:relative;color:grey;font-size:1em;font-family:\"Roboto-Regular\";font-weight:normal;"]);

/***/ }),

/***/ "./src/static/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/static/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/public/fonts/Roboto-Regular.ttf";

/***/ }),

/***/ "./src/static/img/smallImage.png":
/*!***************************************!*\
  !*** ./src/static/img/smallImage.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

/******/ });
//# sourceMappingURL=main.2a6a23eadc4b6e14f2ea.js.map