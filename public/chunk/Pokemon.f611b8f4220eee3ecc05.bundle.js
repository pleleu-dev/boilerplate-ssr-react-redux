(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk/Pokemon"],{

/***/ "./src/client/containers/pokemon.js":
/*!******************************************!*\
  !*** ./src/client/containers/pokemon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Pokemon =
/*#__PURE__*/
function (_Component) {
  _inherits(Pokemon, _Component);

  function Pokemon(props) {
    _classCallCheck(this, Pokemon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pokemon).call(this, props));
  }

  _createClass(Pokemon, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.pokemon) this.props.fetchPokemon();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.pokemon) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.props.pokemon.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.pokemon.sprites.front_default
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.pokemon.sprites.front_female
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.pokemon.sprites.back_default
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.pokemon.sprites.back_female
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.pokemon.sprites.front_shiny
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.pokemon.sprites.front_shiny_female
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.pokemon.sprites.back_shiny
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.pokemon.sprites.back_shiny_female
      }));
    }
  }]);

  return Pokemon;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(_ref) {
  var pokemon = _ref.pokemon;
  return {
    pokemon: pokemon
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  fetchPokemon: _actions__WEBPACK_IMPORTED_MODULE_2__["fetchPokemon"]
})(Pokemon));

/***/ })

}]);
//# sourceMappingURL=Pokemon.f611b8f4220eee3ecc05.bundle.js.map