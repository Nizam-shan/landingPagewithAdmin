"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _sectionHeading = _interopRequireDefault(require("components/section-heading"));
var _link = require("components/link");
var _image = _interopRequireDefault(require("components/image"));
var _widgets = _interopRequireDefault(require("assets/images/widgets.png"));
var _checkCircleFilled = _interopRequireDefault(require("assets/images/icons/check-circle-filled.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /** @jsx jsx */

var Widgets = function Widgets() {
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "section",
    id: "widgets",
    variant: "section.widgets"
  }, /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.contentWrapper
  }, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.leftContent
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: _widgets["default"],
    alt: "widgets"
  })), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.rightContent
  }, /*#__PURE__*/React.createElement(_sectionHeading["default"], {
    sx: styles.heading,
    title: "Ultimate widgets of collection that will be used anywhere",
    description: "Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
  }), /*#__PURE__*/React.createElement(_themeUi.Text, {
    sx: styles.listItem,
    as: "p"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: _checkCircleFilled["default"],
    alt: "check icon"
  }), "Unlimited design possibility"), /*#__PURE__*/React.createElement(_themeUi.Text, {
    sx: styles.listItem,
    as: "p"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: _checkCircleFilled["default"],
    alt: "check icon"
  }), "Completely responsive features"), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.explore
  }, /*#__PURE__*/React.createElement(_link.LearnMore, {
    path: "#!",
    label: "Explore More"
  }))))));
};
var _default = exports["default"] = Widgets;
var styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ["block", "block", "grid"],
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center"
  },
  heading: {
    textAlign: "left",
    mb: ["20px"],
    mt: [0, 0, 0, 0, "-70px"],
    h2: {
      fontSize: ["24px", "24px", "24px", "28px", "32px", "40px"],
      lineHeight: [1.45, 1.5],
      letterSpacing: "-1.5px"
    }
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: "flex",
    alignItems: "center",
    img: {
      mr: "10px"
    }
  },
  explore: {
    mt: ["20px", "20px", "20px", "20px", "40px"]
  }
};