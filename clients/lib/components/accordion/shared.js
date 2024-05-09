"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionButton = void 0;
exports.AccordionContents = AccordionContents;
exports.single = exports.preventClose = exports.combineReducers = exports.AccordionItem = void 0;
var _themeUi = require("theme-ui");
var _framerMotion = require("framer-motion");
var _excluded = ["children"],
  _excluded2 = ["isOpen"],
  _excluded3 = ["isOpen", "children"]; // /** @jsx jsx */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AccordionButton = exports.AccordionButton = function AccordionButton(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", _extends({
    sx: styles.buttonToggle
  }, rest), children);
};
var styles = {
  buttonToggle: {
    display: "flex",
    color: "headingSecondary",
    cursor: "pointer",
    border: "none",
    fontSize: [16, 16, 16, 18, 20],
    fontWeight: 500,
    letterSpacing: -0.5,
    position: "relative",
    paddingLeft: ["33px", "45px"],
    lineHeight: [1.5, 1.8],
    "& > span": {
      position: "absolute",
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "primary",
      top: ["2px", "6px"],
      left: [0, "13px"],
      "&.open:after": {
        opacity: 0
      },
      "&::before": {
        position: "absolute",
        content: '""',
        height: "2px",
        width: 10,
        backgroundColor: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)"
      },
      "&::after": {
        position: "absolute",
        content: '""',
        height: 10,
        width: "2px",
        backgroundColor: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
        transition: "all 0.25s"
      }
    }
  }
};
var variants = {
  open: {
    height: "auto",
    marginTop: 12
  },
  closed: {
    height: 0,
    marginTop: 0
  }
};
function AccordionContents(_ref2) {
  var isOpen = _ref2.isOpen,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(_framerMotion.motion.div, _extends({
    initial: "closed",
    animate: isOpen ? "open" : "closed",
    variants: variants,
    sx: {
      overflowY: "hidden",
      fontSize: [1, 2],
      lineHeight: 2,
      color: "#343D48",
      paddingLeft: ["33px", "45px"],
      " > div ": {
        paddingBottom: [1, 2]
      }
    }
  }, props));
}
var AccordionItem = exports.AccordionItem = function AccordionItem(_ref3) {
  var isOpen = _ref3.isOpen,
    children = _ref3.children,
    rest = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement("div", _extends({
    css: {
      overflow: "hidden",
      padding: "17px 0",
      borderBottom: "1px solid #E5ECF4",
      "&:last-child": {
        borderBottom: "0px solid"
      }
    }
  }, rest), children);
};
var preventClose = exports.preventClose = function preventClose(state, changes) {
  return changes.type === "closing" && state.openIndexes.length < 2 ? _objectSpread(_objectSpread({}, changes), {}, {
    openIndexes: state.openIndexes
  }) : changes;
};
var single = exports.single = function single(state, changes) {
  return changes.type === "opening" ? _objectSpread(_objectSpread({}, changes), {}, {
    openIndexes: changes.openIndexes.slice(-1)
  }) : changes;
};
var combineReducers = exports.combineReducers = function combineReducers() {
  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }
  return function (state, changes) {
    return reducers.reduce(function (acc, reducer) {
      return reducer(state, acc);
    }, changes);
  };
};