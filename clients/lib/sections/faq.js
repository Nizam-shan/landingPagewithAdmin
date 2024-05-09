"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Faq;
var _themeUi = require("theme-ui");
var _sectionHeading = _interopRequireDefault(require("components/section-heading"));
var _accordion = _interopRequireDefault(require("components/accordion/accordion"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /** @jsx jsx */

var faqs = [{
  title: "Colleges in india",
  contents: ["Find colleges by specification", "Find colleges by course", "congdggd colleges"]
}, {
  title: "University in india",
  contents: ["Government university", "Private university", "Deemed-to-be-universities"]
}];
function Faq() {
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "section",
    id: "faq",
    variant: "section.faq"
  }, /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_sectionHeading["default"], {
    title: "College/University"
    // description="Our support team ready to help you, please contact with them"
  }), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: {
      display: "flex",
      width: ["100%", null, null, "650px", "745px"],
      flexDirection: "column",
      mx: "auto",
      my: -4
    }
  }, /*#__PURE__*/React.createElement(_accordion["default"], {
    items: faqs
  }))));
}