"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _themeUi = require("theme-ui");
var _sectionHeading = _interopRequireDefault(require("components/section-heading"));
var _image = _interopRequireDefault(require("components/image"));
var _link = require("components/link");
var _video = _interopRequireDefault(require("assets/images/video.png"));
var _play = _interopRequireDefault(require("assets/images/icons/play.png"));
var _modal = _interopRequireWildcard(require("components/modal/modal"));
var _responsiveIframe = _interopRequireDefault(require("components/responsive-iframe"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } //** @jsx jsx */
var IntroVideo = function IntroVideo() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "section",
    sx: styles.section,
    variant: "section.introVideo"
  }, /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_sectionHeading["default"], {
    sx: styles.heading,
    title: "Leading companies trust us to develop most powerful software with our talent team",
    description: "Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
  }), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.explore
  }, /*#__PURE__*/React.createElement(_link.LearnMore, {
    path: "#!",
    label: "Explore More"
  })), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.videoWrapper
  }, /*#__PURE__*/React.createElement(_modal["default"], {
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(_modal.CloseButton, {
    onClick: function onClick() {
      return setIsOpen(false);
    },
    size: "24px",
    color: "#fff"
  }), /*#__PURE__*/React.createElement(_responsiveIframe["default"], {
    src: "https://player.vimeo.com/video/394343710?autoplay=1&color=28DDB2&title=0&byline=0&portrait=0",
    allow: "autoplay; fullscreen",
    allowFullScreen: true
  })), /*#__PURE__*/React.createElement(_image["default"], {
    src: _video["default"],
    className: "video-banner",
    alt: "video banner"
  }), /*#__PURE__*/React.createElement(_themeUi.Button, {
    variant: "text",
    sx: styles.playPause,
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: _play["default"],
    alt: "play"
  }), " Watch Full video"))));
};
var _default = exports["default"] = IntroVideo;
var styles = {
  heading: {
    maxWidth: "620px",
    mb: [5],
    h2: {
      letterSpacing: "heading"
    }
  },
  explore: {
    textAlign: ["center"],
    mb: [6]
  },
  videoWrapper: {
    textAlign: "center",
    position: "relative",
    ".video-banner": {
      maxWidth: ["100%", "100%", "100%", "100%", "100%", "80%", "100%"]
    }
  },
  playPause: {
    color: "white",
    fontWeight: 700,
    position: "absolute",
    padding: "0px",
    bottom: [40, 40, 40, 70, 100],
    left: "50%",
    transform: "translateX(-50%)",
    ":focus": {
      outline: 0
    },
    img: {
      mr: "16px"
    }
  }
};