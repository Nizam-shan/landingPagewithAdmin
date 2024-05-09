"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _excluded = ["src", "children"]; // /** @jsx jsx */
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ResponsiveIframe = function ResponsiveIframe(_ref) {
  var src = _ref.src,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.videoContainer
  }, children ? children : /*#__PURE__*/React.createElement("iframe", _extends({
    src: src
  }, props)));
};
var _default = exports["default"] = ResponsiveIframe;
var styles = {
  videoContainer: {
    overflow: "hidden",
    paddingTop: "56.25%",
    position: "relative",
    iframe: {
      border: 0,
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }
  }
};