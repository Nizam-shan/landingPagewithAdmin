"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LearnMore = LearnMore;
exports.Link = Link;
exports.NavLink = NavLink;
var _themeUi = require("theme-ui");
var _reactScroll = require("react-scroll");
var _link = _interopRequireDefault(require("next/link"));
var _hi = require("react-icons/hi");
var _excluded = ["path", "label", "children"],
  _excluded2 = ["path", "label", "children"],
  _excluded3 = ["path", "label", "children"]; // /** @jsx jsx */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function NavLink(_ref) {
  var path = _ref.path,
    label = _ref.label,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_reactScroll.Link, _extends({
    to: path,
    spy: true,
    offset: -70,
    smooth: true,
    duration: 500,
    className: "nav-item",
    activeClass: "active"
  }, rest), label);
}
function Link(_ref2) {
  var path = _ref2.path,
    label = _ref2.label,
    children = _ref2.children,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(_link["default"], {
    href: path
  }, /*#__PURE__*/React.createElement(_themeUi.Link, rest, children ? children : label));
}
function LearnMore(_ref3) {
  var path = _ref3.path,
    label = _ref3.label,
    children = _ref3.children,
    rest = _objectWithoutProperties(_ref3, _excluded3);
  return (
    // <NextLink href={path}>
    //   <A sx={styles.learnMore} {...rest}>
    //     {label ?? "Learn More"} <HiOutlineChevronRight />
    //   </A>
    // </NextLink>
    ""
  );
}
var styles = {
  learnMore: {
    color: "link",
    cursor: "pointer",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    svg: {
      transition: "margin-left 0.3s ease-in-out 0s",
      ml: "3px"
    },
    ":hover": {
      svg: {
        ml: "8px"
      }
    }
  }
};