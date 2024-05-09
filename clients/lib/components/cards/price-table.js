"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _io = require("react-icons/io");
var _modal = _interopRequireWildcard(require("components/modal/modal"));
var _react = require("react");
var _job_seeker = _interopRequireDefault(require("components/forms/job_seeker"));
var _higherStudies = _interopRequireDefault(require("components/forms/higherStudies"));
var _sectioncform = _interopRequireDefault(require("components/forms/sectioncform"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // /** @jsx jsx */
var PriceTable = function PriceTable(_ref) {
  var _price$features;
  var price = _ref.price,
    isMonthly = _ref.isMonthly;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var handleClick = function handleClick() {
    setIsOpen(true);
  };
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.priceTable,
    className: "priceCard ".concat(price.isRecommended ? "recommended" : "")
  }, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.header
  }, /*#__PURE__*/React.createElement(_themeUi.Box, {
    className: "priceHeader"
  }, /*#__PURE__*/React.createElement(_themeUi.Heading, {
    as: "h3",
    sx: styles.title
  }, price.title), /*#__PURE__*/React.createElement(_themeUi.Text, {
    as: "p",
    sx: styles.subtitle
  }, price.subtitle))), /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "ul",
    sx: styles.list
  }, price === null || price === void 0 || (_price$features = price.features) === null || _price$features === void 0 ? void 0 : _price$features.map(function (feat) {
    return /*#__PURE__*/React.createElement("li", {
      key: feat.id,
      className: !feat.isAvailable ? "unavailable" : ""
    }, feat.isAvailable ? /*#__PURE__*/React.createElement(_io.IoMdCheckmarkCircle, {
      color: "#3FDBB1",
      size: "30px"
    }) : /*#__PURE__*/React.createElement(_io.IoIosCloseCircle, {
      color: "#CED7E1",
      size: "30px"
    }), /*#__PURE__*/React.createElement("span", null, feat.title));
  })), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: {
      textAlign: "center"
    },
    className: "priceButton"
  }, /*#__PURE__*/React.createElement(_themeUi.Button, {
    sx: styles.button,
    variant: "primaryMd",
    onClick: handleClick
  }, price.buttonText)), /*#__PURE__*/React.createElement(_modal["default"], {
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(_modal.CloseButton, {
    onClick: function onClick() {
      return setIsOpen(false);
    },
    size: "24px",
    color: "#fff"
  }), price.id === 3 ? /*#__PURE__*/React.createElement(_job_seeker["default"], {
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }) : price.id === 2 ? /*#__PURE__*/React.createElement(_higherStudies["default"], {
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }) : price.id === 1 ? /*#__PURE__*/React.createElement(_sectioncform["default"], {
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }) : ""));
};
var _default = exports["default"] = PriceTable;
var styles = {
  priceTable: {
    border: "1px solid #F3F4F5",
    borderRadius: 10,
    position: "relative",
    padding: ["30px 20px", null, null, "55px 20px", null],
    // "&.recommended": {
    backgroundColor: "#fff",
    borderColor: "primary",
    borderWidth: "2.5px",
    color: "text",
    "@media only screen and (max-width: 767px)": {
      pt: 65,
      // },
      footer: {
        backgroundColor: "#F0F0F5",
        borderRadius: "0 0 10px 10px",
        ".price-label": {
          color: "text"
        },
        ".price-value": {
          color: "primary"
        }
      }
    }
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1.31,
    letterSpacing: "-0.55px"
  },
  subtitle: {
    mt: "6px"
  },
  priceLabel: {},
  priceAmount: {
    color: "primary",
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: 1.39,
    textAlign: "right",
    letterSpacing: "heading"
  },
  recommended: {
    backgroundColor: "secondary",
    minHeight: "31px",
    alignItems: "center",
    display: "inline-flex",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 700,
    padding: "0 8px",
    letterSpacing: "-0.14px",
    borderRadius: "3px",
    position: "absolute",
    top: 17,
    left: [20, null, null, null, 40]
  },
  list: {
    listStyle: "none",
    padding: 0,
    mt: [35, null, null, 50],
    maxWidth: 340,
    li: {
      display: "flex",
      alignItems: "flex-start",
      fontSize: 16,
      lineHeight: 1.62,
      "+ li ": {
        mt: 30
      },
      svg: {
        mr: "13px",
        mt: "5px"
      }
    },
    ".unavailable": {
      opacity: 0.5
    }
  },
  button: {
    backgroundColor: "#FCF2E8",
    color: "secondary",
    paddingLeft: 45,
    paddingRight: 45,
    marginTop: [35, null, null, 70],
    ":hover": {
      backgroundColor: "secondary",
      color: "#fff"
    }
  }
};