"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _link = require("components/link");
var _polished = require("polished");
// /** @jsx jsx */

var FooterWidget = function FooterWidget(_ref) {
  var title = _ref.title,
    items = _ref.items;
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.footerWidget
  }, /*#__PURE__*/React.createElement(_themeUi.Heading, {
    as: "h4"
  }, title), /*#__PURE__*/React.createElement("ul", null, items.map(function (_ref2, i) {
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
  })));
};
var _default = exports["default"] = FooterWidget;
var styles = {
  footerWidget: {
    h4: {
      color: "heading",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: "heading"
    },
    ul: {
      listStyle: "none",
      margin: "28px 0 0",
      padding: 0,
      a: {
        color: (0, _polished.rgba)("#02073E", 0.8)
      }
    }
  }
};