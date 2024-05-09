"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layout;
var _themeUi = require("theme-ui");
var _react = _interopRequireDefault(require("react"));
var _header = _interopRequireDefault(require("./header/header"));
var _footer = _interopRequireDefault(require("./footer/footer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /** @jsx jsx */

function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_header["default"], null), /*#__PURE__*/_react["default"].createElement("main", {
    sx: {
      variant: "layout.main"
    }
  }, children), /*#__PURE__*/_react["default"].createElement(_footer["default"], null));
}