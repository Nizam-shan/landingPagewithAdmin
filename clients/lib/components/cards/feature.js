"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _polished = require("polished");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // /** @jsx jsx */
var Feature = function Feature(_ref) {
  var feature = _ref.feature;
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.featureItem
  }, /*#__PURE__*/React.createElement(_themeUi.Text, {
    as: "p",
    sx: _objectSpread(_objectSpread({}, styles.value), {}, {
      fontSize: feature.value === "Expert counsilors" ? [20, 20, 20, 20, 30, 40, 40] : styles.value.fontSize
    }),
    style: {
      color: feature === null || feature === void 0 ? void 0 : feature.color
    }
  }, feature.value), /*#__PURE__*/React.createElement(_themeUi.Text, {
    as: "p",
    sx: styles.title
  }, feature.title));
};
var _default = exports["default"] = Feature;
var styles = {
  featureItem: {
    backgroundColor: "#fff",
    boxShadow: "0px 25px 100px rgba(69, 88, 157, 0.08)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // maxWidth: 300,
    flexDirection: "column",
    padding: ["0 5px", "0 18px", "0 18px", "0 12px", "0 20px", "0 25px", "0 59px"],
    textAlign: "center",
    minHeight: [150, 150, 150, 185, 240, 280, 320],
    width: ["auto", "auto", "auto", 177, 225, 258, 300]
  },
  value: {
    fontWeight: 700,
    fontSize: [30, 30, 30, 30, 50, 60, 72],
    lineHeight: [1.83, 0.76],
    letterSpacing: "-1.5px"
  },
  title: _defineProperty({
    fontSize: ["14px", "16px", "16px", "15px", "17px"],
    lineHeight: [1.62, 1.48],
    letterSpacing: "-0.2px",
    color: "heading",
    mt: ["1px", "20px"]
  }, "color", (0, _polished.rgba)("#0F2137", 0.7))
};