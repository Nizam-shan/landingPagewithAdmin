"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CloseButton = void 0;
var _themeUi = require("theme-ui");
var _react = require("react");
var _gr = require("react-icons/gr");
var _reactModal = _interopRequireDefault(require("react-modal"));
var _excluded = ["isOpen", "closeModal", "children"],
  _excluded2 = ["onClick", "size", "color"]; // /** @jsx jsx */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// import './modal.module.css';

var customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
    zIndex: 100
  },
  content: {
    border: 0,
    padding: 0,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    overflow: "unset",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%"
  }
};
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    closeModal = _ref.closeModal,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  (0, _react.useEffect)(function () {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return function () {
      return document.body.style.overflow = "unset";
    };
  });
  return /*#__PURE__*/React.createElement(_reactModal["default"], _extends({
    isOpen: isOpen,
    ariaHideApp: false,
    style: customStyles
    // closeTimeoutMS={2000}
    ,
    onRequestClose: closeModal
  }, props), children);
}
var _default = exports["default"] = Modal;
var CloseButton = exports.CloseButton = function CloseButton(_ref2) {
  var onClick = _ref2.onClick,
    size = _ref2.size,
    color = _ref2.color,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement("button", _extends({
    sx: styles.button,
    onClick: onClick
  }, props), /*#__PURE__*/React.createElement(_gr.GrClose, {
    size: size !== null && size !== void 0 ? size : "24px",
    color: color !== null && color !== void 0 ? color : color
  }));
};
var styles = {
  button: {
    padding: 0,
    border: 0,
    backgroundColor: "transparent",
    marginLeft: "auto",
    display: "inline-flex",
    cursor: "pointer",
    position: "absolute",
    right: 0,
    top: "-40px",
    path: {
      stroke: "#fff"
    }
  }
};