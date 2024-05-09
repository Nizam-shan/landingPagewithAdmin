"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _sectionHeading = _interopRequireDefault(require("components/section-heading"));
var _ultimateFeature = _interopRequireDefault(require("components/cards/ultimate-feature"));
var _bulb = _interopRequireDefault(require("assets/images/icons/bulb-2.png"));
var _diamond = _interopRequireDefault(require("assets/images/icons/diamond.png"));
var _help = _interopRequireDefault(require("assets/images/icons/help.png"));
var _award = _interopRequireDefault(require("assets/images/icons/award.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /** @jsx jsx */

var data = [{
  id: 1,
  icon: _bulb["default"],
  title: "Fast Performance",
  description: "Let\u2019s just get this out of the way - there will always be a kit version of Eduflow. Built by educators, we believe in equating education for all. Paid subscriptions allow us to continue helping learners around the world."
}, {
  id: 2,
  icon: _diamond["default"],
  title: "Pro Subscription",
  description: "We believe it\u2019s important for everyone to have access to software \u2013 especially when it comes to digital learning tools. Eduflow is built with WCAG standards in mind and can easily be navigated by keyboard and screen readers."
}, {
  id: 3,
  icon: _help["default"],
  title: "Partnership deal",
  description: "Let\u2019s just get this out of the way - there will always be a kit version of Eduflow. Built by educators, we believe in equating education for all. Paid subscriptions allow us to continue helping learners around the world."
}, {
  id: 4,
  icon: _award["default"],
  title: "Customer Support",
  description: "We believe it\u2019s important for everyone to have access to software \u2013 especially when it comes to digital learning tools. Eduflow is built with WCAG standards in mind and can easily be navigated by keyboard and screen readers."
}];
var UsefulFeatures = function UsefulFeatures() {
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "section",
    id: "useful-features",
    variant: "section.usefulFeatures"
  }, /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_sectionHeading["default"], {
    sx: styles.heading,
    title: "Amazing useful features",
    description: "Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
  }), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.features
  }, data === null || data === void 0 ? void 0 : data.map(function (item) {
    return /*#__PURE__*/React.createElement(_ultimateFeature["default"], {
      key: item.id,
      data: item,
      className: "feature-item"
    });
  }))));
};
var _default = exports["default"] = UsefulFeatures;
var styles = {
  heading: {
    marginBottom: 80
  },
  features: {
    gap: 60,
    display: ["grid"],
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"],
    ".feature-item": {
      display: ["block", "block", "block", "block", "flex"],
      px: ["15px", 0],
      maxWidth: ["none"],
      figure: {
        minWidth: "90px",
        m: ["0 auto 30px", "0 auto 30px", "0 auto 30px", "0 auto 30px", "0 26px 0 0"]
      }
    }
  }
};