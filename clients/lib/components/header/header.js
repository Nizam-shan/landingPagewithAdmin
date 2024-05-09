"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;
var _themeUi = require("theme-ui");
var _react = require("react");
var _gr = require("react-icons/gr");
var _reactStickynode = _interopRequireDefault(require("react-stickynode"));
var _logo = _interopRequireDefault(require("components/logo"));
var _link = require("components/link");
var _header = _interopRequireDefault(require("./header.data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Header() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    mobileMenu = _useState2[0],
    setMobileMenu = _useState2[1];
  var openMobileMenu = function openMobileMenu() {
    setMobileMenu(true);
  };
  var closeMobileMenu = function closeMobileMenu() {
    setMobileMenu(false);
  };
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.headerWrapper
  }, /*#__PURE__*/React.createElement(_reactStickynode["default"], {
    enabled: true,
    top: 0,
    activeClass: "is-sticky",
    innerZ: 10
  }, /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "header",
    variant: "layout.header",
    className: mobileMenu ? "is-mobile-menu" : ""
  }, /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.headerInner
  }, /*#__PURE__*/React.createElement(_logo["default"], {
    isWhite: mobileMenu
  }), /*#__PURE__*/React.createElement(_themeUi.Flex, {
    as: "nav",
    sx: styles.navbar,
    className: mobileMenu ? "navbar active" : "navbar"
  }, /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "ul",
    sx: styles.navList,
    className: mobileMenu ? "active" : ""
  }, _header["default"].map(function (_ref, i) {
    var path = _ref.path,
      label = _ref.label;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement(_link.NavLink, {
      path: path,
      label: label,
      onClick: closeMobileMenu
    }));
  }))), mobileMenu ? /*#__PURE__*/React.createElement(_themeUi.Button, {
    variant: "text",
    sx: styles.closeButton
  }, /*#__PURE__*/React.createElement(_gr.GrClose, {
    onClick: closeMobileMenu,
    color: "white",
    size: "20px"
  })) : /*#__PURE__*/React.createElement(_themeUi.MenuButton, {
    "aria-label": "Toggle Menu",
    onClick: openMobileMenu
  }))))));
}
var styles = {
  headerWrapper: {
    backgroundColor: "transparent",
    transition: "0.3s ease-in-out 0s",
    ".is-sticky": {
      header: {
        backgroundColor: "#fff",
        boxShadow: "0 6px 13px rgba(38, 78, 118, 0.1)",
        py: [12],
        "&.is-mobile-menu": {
          backgroundColor: "text"
        }
      }
    }
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media only screen and (max-width: 768px)": {
      ".navbar": {
        position: "absolute",
        top: "100%",
        backgroundColor: "text",
        width: "100%",
        left: 0,
        p: "20px 30px",
        display: "block",
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
        opacity: 0,
        visibility: "hidden",
        minHeight: "calc(100vh - 77px)",
        transition: "all 0.3s ease-in-out 0s",
        "&.active": {
          opacity: 1,
          visibility: "visible"
        },
        ul: {
          display: "block",
          "li + li": {
            marginTop: 5
          },
          a: {
            color: "white"
          }
        }
      }
    }
  },
  navbar: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  navList: {
    display: ["flex"],
    listStyle: "none",
    marginLeft: "auto",
    p: 0,
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: "0 20px"
    },
    ".active": {
      color: "primary"
    }
  },
  explore: {
    display: ["block", "block", "block", "block", "none"],
    position: "absolute",
    bottom: 40,
    left: "50%",
    transform: "translateX(-50%)"
  },
  closeButton: {
    height: "32px",
    padding: "4px",
    minHeight: "auto",
    width: "32px",
    ml: "3px",
    path: {
      stroke: "#fff"
    }
  }
};