"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _sectionHeading = _interopRequireDefault(require("components/section-heading"));
var _feature = _interopRequireDefault(require("components/cards/feature"));
var _link = require("components/link");
var _image = _interopRequireDefault(require("components/image"));
var _checkCircleFilled = _interopRequireDefault(require("assets/images/icons/check-circle-filled.png"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /** @jsx jsx */

var data = [{
  id: 1,
  color: "#28D1DC",
  value: "1000+",
  title: "Students"
}, {
  id: 2,
  color: "#FF753A",
  value: "150+",
  title: "National,international collaburations"
}, {
  id: 3,
  color: "#FA578E",
  value: "300+",
  title: "Top schools & college partnership across india"
}, {
  id: 4,
  color: "#28DCB2",
  value: "Expert counsilors",
  title: "Counseling in hindi,english,malayalam etc..."
}];
var Features = function Features() {
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "section",
    variant: "section.features"
  }, /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.contentWrapper
  }, /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.leftContent
  }, data === null || data === void 0 ? void 0 : data.map(function (item) {
    return /*#__PURE__*/React.createElement(_feature["default"], {
      key: item === null || item === void 0 ? void 0 : item.id,
      feature: item
    });
  })), /*#__PURE__*/React.createElement(_themeUi.Box, {
    sx: styles.rightContent
  }, /*#__PURE__*/React.createElement(_sectionHeading["default"], {
    sx: styles.heading,
    title: /*#__PURE__*/React.createElement(_react.Fragment, null, "We are trusted by"),
    description: "We are trusted by industry leaders worldwide for our exceptional expertise, dedication, and track record of delivering impactful solutions."
  }), /*#__PURE__*/React.createElement(_themeUi.Text, {
    sx: styles.listItem,
    as: "p"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: _checkCircleFilled["default"],
    alt: "check icon"
  }), "Global leaders trust our expertise."), /*#__PURE__*/React.createElement(_themeUi.Text, {
    sx: styles.listItem,
    as: "p"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: _checkCircleFilled["default"],
    alt: "check icon"
  }), "Proven expertise trusted by leaders")))));
};
var _default = exports["default"] = Features;
var styles = {
  contentWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ["flex", "flex", "grid"],
    flexDirection: ["column-reverse", "column-reverse", "unset"],
    gridTemplateColumns: ["1.2fr 0.8fr", "1.2fr 0.8fr", "1.2fr 0.8fr", "1.1fr 0.9fr", "1.1fr 0.9fr", "1.1fr 0.9fr", "1.2fr 0.8fr"],
    alignItems: "center"
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ["grid", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "flex-start",
    "> div": {
      ":first-of-type": {
        mt: ["65px"]
      },
      ":last-of-type": {
        mt: ["-65px"]
      }
    }
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: "left",
    mb: ["20px"],
    mt: [0, 0, "-70px"],
    h2: {
      fontSize: ["28px", "28px", "28px", "28px", "36px", "40px"],
      lineHeight: [1.25, 1.5],
      letterSpacing: "-1.5px",
      br: {
        display: ["none", "none", "none", "block"]
      }
    },
    p: {
      mt: ["15px", "10px"]
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