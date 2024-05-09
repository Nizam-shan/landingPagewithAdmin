"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FileInput = function FileInput(_ref) {
  var id = _ref.id,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    id: id,
    onChange: onChange,
    accept: ".pdf,.doc,.docx" // Allow only PDF, DOC, and DOCX files
    ,
    maxFileSize: 20 * 1024 * 1024 // Maximum file size: 20 MB
  }));
};
var _default = exports["default"] = FileInput;