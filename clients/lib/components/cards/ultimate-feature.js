"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _excluded = ["data"]; // /** @jsx jsx */
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var UltimateFeature = function UltimateFeature(_ref) {
  var data = _ref.data,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_themeUi.Box, _extends({
    sx: styles.feature
  }, props), /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement(_themeUi.Image, {
    src: data === null || data === void 0 ? void 0 : data.icon,
    alt: data === null || data === void 0 ? void 0 : data.title
  })), /*#__PURE__*/React.createElement(_themeUi.Box, null, /*#__PURE__*/React.createElement(_themeUi.Heading, {
    as: "h4"
  }, data === null || data === void 0 ? void 0 : data.title), /*#__PURE__*/React.createElement(_themeUi.Text, {
    as: "p"
  }, data === null || data === void 0 ? void 0 : data.description)));
};
var _default = exports["default"] = UltimateFeature;
var styles = {
  feature: {
    textAlign: ["center", "center", "center", "center", "left"],
    maxWidth: [230, 230, 230, 230, "none"],
    margin: "0 auto",
    figure: {
      backgroundColor: "white",
      boxShadow: "0px 8px 24px rgba(53, 95, 158, 0.1)",
      height: "90px",
      margin: ["0 auto 30px", "0 auto 30px", "0 auto 30px", "0 auto 30px", "0 0 40px"],
      width: "90px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%"
    },
    h4: {
      fontSize: "18px",
      lineHeight: 1.28,
      color: "heading",
      marginBottom: "20px"
    },
    p: {
      fontSize: 16,
      lineHeight: [1.6, 1.6, 1.6, 1.88],
      color: "text"
    }
  }
};