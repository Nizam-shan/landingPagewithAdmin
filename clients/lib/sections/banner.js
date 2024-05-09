"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _reactScroll = require("react-scroll");
var _paypal = _interopRequireDefault(require("assets/images/paypal.png"));
var _google = _interopRequireDefault(require("assets/images/google.png"));
var _dropbox = _interopRequireDefault(require("assets/images/dropbox.png"));
var _modal = _interopRequireWildcard(require("components/modal/modal"));
var _react = require("react");
var _core = require("@material-ui/core");
var _link = _interopRequireDefault(require("next/link"));
var _link2 = require("components/link");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // /** @jsx jsx */
// import banner from "assets/images/banner.png";
// import banner from "assets/images/banner.png";
var Banner = function Banner() {
  var banner = "/static/banner.png";
  console.log("ban", banner);
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    id: "home",
    as: "section",
    variant: "section.banner"
  }, /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.contentWrapper
  }, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.content
  }, /*#__PURE__*/React.createElement(_themeUi.Heading, {
    sx: styles.title
  }, "Professional Communication For Your Team"), /*#__PURE__*/React.createElement(_themeUi.Text, {
    as: "p",
    sx: styles.text
  }, "Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.")), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.illustration
  }, /*#__PURE__*/React.createElement(_themeUi.Image, {
    src: banner,
    alt: "banner"
  })))), /*#__PURE__*/React.createElement(_modal["default"], {
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(_modal.CloseButton, {
    onClick: function onClick() {
      return setIsOpen(false);
    },
    size: "24px",
    color: "#fff"
  }), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: {
      display: "block",
      justifyContent: "center",
      textAlign: "center",
      p: 3
    }
  }, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: {
      p: 3
    }
  }, /*#__PURE__*/React.createElement(_core.Typography, {
    variant: "h3",
    sx: {
      fontWeight: "bold"
    }
  }, "Welcome!"), /*#__PURE__*/React.createElement(_core.Typography, null, "New to IBS PVT LTD ", /*#__PURE__*/React.createElement("br", null), "Register here...")), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: {
      p: 3
    }
  }, /*#__PURE__*/React.createElement(_reactScroll.Link, {
    to: "pricing",
    spy: true,
    offset: -70,
    smooth: true,
    duration: 500,
    className: "nav-item",
    activeClass: "active"
    // {...rest}
  }, /*#__PURE__*/React.createElement(_themeUi.Button, {
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "Register"))))));
};
var _default = exports["default"] = Banner;
var styles = {
  contentWrapper: {
    display: [null, null, null, "flex", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    justifyContent: "center",
    minHeight: [null, null, null, null, null, "100vh"],
    pt: [100, null, null, 120, 130, 120, 0]
  },
  content: {
    maxWidth: [507, null, null, 324, 450]
  },
  title: {
    fontWeight: "bold",
    fontSize: ["30px", null, null, null, "42px", "40px", "60px"],
    lineHeight: 1.33,
    letterSpacing: "-1px",
    color: "textSecondary"
  },
  text: {
    fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: "textSecondary",
    mt: ["14px", "19px"]
  },
  button: {
    display: ["none", "flex"],
    mt: [45, 45, 45, 25, 25]
  },
  clients: {
    display: "flex",
    alignItems: "center",
    mt: ["20px", "45px", "45px", "30px", "45px"],
    img: {
      maxWidth: ["80px", "100%", "100%", "100%"],
      "+ img": {
        ml: ["14px", "28px", "28px", "20px"]
      }
    }
  },
  illustration: {
    display: ["block", "block"],
    mt: ["30px", "30px", 0],
    mb: ["60px", "60px", 0],
    img: {
      maxWidth: ["100%", "100%", "100%", "100%", "90%", "90%", "100%"]
    }
  }
};