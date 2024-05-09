"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _excluded = ["title", "description"]; // /** @jsx jsx */
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SectionHeading = function SectionHeading(_ref) {
  var title = _ref.title,
    description = _ref.description,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_themeUi.Box, _extends({
    sx: styles.heading
  }, props), /*#__PURE__*/React.createElement(_themeUi.Heading, {
    sx: styles.title
  }, title), /*#__PURE__*/React.createElement(_themeUi.Text, {
    as: "p",
    sx: styles.description
  }, description));
};
var _default = exports["default"] = SectionHeading;
var styles = {
  heading: {
    textAlign: "center",
    maxWidth: 580,
    margin: "0 auto 60px"
  },
  title: {
    color: "heading",
    fontWeight: 500,
    fontSize: ["24px", "30px"],
    lineHeight: [1.25, 1.5],
    letterSpacing: "heading"
  },
  description: {
    color: "heading",
    fontSize: ["14px", "16px"],
    lineHeight: [1.85, 2.2],
    mt: "10px"
  }
};