"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = IndexPage;
var _react = _interopRequireDefault(require("react"));
var _themeUi = require("theme-ui");
var _theme = _interopRequireDefault(require("theme"));
var _seo = _interopRequireDefault(require("components/seo"));
var _layout = _interopRequireDefault(require("components/layout"));
var _banner = _interopRequireDefault(require("sections/banner"));
var _ultimateFeatures = _interopRequireDefault(require("sections/ultimate-features"));
var _features = _interopRequireDefault(require("sections/features"));
var _introVideo = _interopRequireDefault(require("sections/intro-video"));
var _usefulFeatures = _interopRequireDefault(require("sections/useful-features"));
var _widgets = _interopRequireDefault(require("sections/widgets"));
var _pricing = _interopRequireDefault(require("sections/pricing"));
var _faq = _interopRequireDefault(require("sections/faq"));
var _reactToastify = require("react-toastify");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function IndexPage() {
  return /*#__PURE__*/_react["default"].createElement(_themeUi.ThemeProvider, {
    theme: _theme["default"]
  }, /*#__PURE__*/_react["default"].createElement(_layout["default"], null, /*#__PURE__*/_react["default"].createElement(_seo["default"], {
    title: "IBS PVT LTD"
  }), /*#__PURE__*/_react["default"].createElement(_banner["default"], null), /*#__PURE__*/_react["default"].createElement(_pricing["default"], null), /*#__PURE__*/_react["default"].createElement(_ultimateFeatures["default"], null), /*#__PURE__*/_react["default"].createElement(_features["default"], null), /*#__PURE__*/_react["default"].createElement(_usefulFeatures["default"], null), /*#__PURE__*/_react["default"].createElement(_reactToastify.ToastContainer, null), /*#__PURE__*/_react["default"].createElement(_widgets["default"], null), /*#__PURE__*/_react["default"].createElement(_faq["default"], null)));
}