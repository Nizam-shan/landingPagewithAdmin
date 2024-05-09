"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;
var _themeUi = require("theme-ui");
var _logo = _interopRequireDefault(require("components/logo"));
var _link = require("components/link");
var _footerWidget = _interopRequireDefault(require("components/footer-widget"));
var _footer = require("./footer.data");
var _polished = require("polished");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /** @jsx jsx */

function Footer() {
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "footer",
    variant: "layout.footer"
  }, /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.footerTopInner
  }, _footer.menuItems.map(function (_ref) {
    var id = _ref.id,
      title = _ref.title,
      items = _ref.items;
    return /*#__PURE__*/React.createElement(_footerWidget["default"], {
      key: id,
      title: title,
      items: items
    });
  }))), /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.footerInner
  }, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.copyright
  }, /*#__PURE__*/React.createElement(_logo["default"], null), /*#__PURE__*/React.createElement(_themeUi.Text, {
    as: "span"
  }, "Copyright by ", new Date().getFullYear(), " RedQ, Inc")), /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "ul",
    sx: styles.footerNav
  }, _footer.footerNav.map(function (_ref2, i) {
    var path = _ref2.path,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement(_link.Link, {
      path: path,
      key: i,
      label: label,
      variant: "footer"
    }));
  })))));
}
var styles = {
  footerTopInner: {
    gap: [50, null, null, null, 17, 50],
    mb: [50],
    display: ["grid"],
    gridTemplateColumns: ["repeat(2, 1fr)", null, null, "repeat(3, 1fr)", "repeat(5, 1fr)"]
  },
  footerInner: {
    borderTop: "1px solid #D9E0E7",
    display: ["block", null, "flex"],
    alignItems: "center",
    justifyContent: "space-between",
    padding: "35px 0 40px",
    "@media only screen and (max-width: 400px)": {
      pb: 10
    }
  },
  copyright: {
    display: ["flex"],
    alignItems: "center",
    flexDirection: ["column", null, null, null, "row"],
    span: {
      fontSize: "14px",
      lineHeight: 1.29,
      color: (0, _polished.rgba)("#0F2137", 0.6),
      mt: ["18px", "18px", "7px"]
    }
  },
  footerNav: {
    listStyle: "none",
    margin: ["15px 0 0", "15px 0 0", "0"],
    padding: 0,
    display: ["flex"],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, "flex-start"],
    "li + li": {
      ml: ["18px", "18px", "20px"],
      "@media only screen and (max-width: 400px)": {
        mb: "10px"
      }
    },
    a: {
      color: "textSecondary"
    }
  }
};