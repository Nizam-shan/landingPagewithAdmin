"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _themeUi = require("theme-ui");
var _sectionHeading = _interopRequireDefault(require("components/section-heading"));
var _ultimateFeature = _interopRequireDefault(require("components/cards/ultimate-feature"));
var _bulb = _interopRequireDefault(require("assets/images/icons/bulb.png"));
var _dart = _interopRequireDefault(require("assets/images/icons/dart.png"));
var _rocket = _interopRequireDefault(require("assets/images/icons/rocket.png"));
var _trophy = _interopRequireDefault(require("assets/images/icons/trophy.png"));
var _core = require("@material-ui/core");
var _checkCircleFilled = _interopRequireDefault(require("assets/images/icons/check-circle-filled.png"));
var _image = _interopRequireDefault(require("components/image"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// /** @jsx jsx */

var data = [{
  id: 1,
  icon: _bulb["default"],
  title: "Vision",
  description: "Strategic solutions tailored for your success: Our consultancy drives growth and innovation."
}, {
  id: 2,
  icon: _dart["default"],
  title: "Best Strategy",
  description: "Send money with three clicks by wire, check, or ACH."
}, {
  id: 3,
  icon: _rocket["default"],
  title: "Mission",
  description: "Empowering clients through insightful guidance and actionable strategies for sustainable success."
}, {
  id: 4,
  icon: _trophy["default"],
  title: "Associated and Recognized by",
  description: "Trusted by industry leaders for excellence and expertise in consultancy services."
}];
var feedback = [{
  id: 1,
  name: "Sharon joshi",
  message: "Innovative solutions, exceptional service; exceeded expectations, highly recommended consultancy.",
  img: "/static/images/avatar/1.jpg"
}, {
  id: 2,
  name: "Nizam",
  message: "Innovative solutions, exceptional service; exceeded expectations, highly recommended consultancy.",
  img: "/static/images/avatar/1.jpg"
}, {
  id: 3,
  name: "Sharon joshi",
  message: "Innovative solutions, exceptional service; exceeded expectations, highly recommended consultancy.",
  img: "/static/images/avatar/1.jpg"
}];
var UltimateFeatures = function UltimateFeatures() {
  return /*#__PURE__*/_react["default"].createElement(_themeUi.Box, {
    as: "section",
    id: "ultimate-feature",
    variant: "section.ultimateFeature"
  }, /*#__PURE__*/_react["default"].createElement(_themeUi.Container, null, /*#__PURE__*/_react["default"].createElement(_sectionHeading["default"], {
    sx: styles.heading,
    title: "About us",
    description: "Guided by expertise and driven by dedication, our consultancy delivers tailored strategies, empowering businesses to navigate challenges and seize opportunities for sustainable growth and success in dynamic markets."
  }), /*#__PURE__*/_react["default"].createElement(_themeUi.Box, {
    sx: styles.features
  }, data === null || data === void 0 ? void 0 : data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_ultimateFeature["default"], {
      key: item.id,
      data: item
    });
  })), /*#__PURE__*/_react["default"].createElement(_themeUi.Box, {
    sx: {
      display: "flex",
      justifyContent: "space-evenly",
      mt: 8
    }
  }, /*#__PURE__*/_react["default"].createElement(_themeUi.Box, null, /*#__PURE__*/_react["default"].createElement(_sectionHeading["default"], {
    sx: styles.heading,
    title: "Our Users"
    // description="Guided by expertise and driven by dedication, our consultancy delivers tailored strategies, empowering businesses to navigate challenges and seize opportunities for sustainable growth and success in dynamic markets."
  }), /*#__PURE__*/_react["default"].createElement(_core.List, {
    sx: {
      width: "100%",
      maxWidth: 460,
      bgcolor: "background.paper"
    }
  }, feedback.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
      alignItems: "flex-start"
    }, /*#__PURE__*/_react["default"].createElement(_core.ListItemAvatar, null, /*#__PURE__*/_react["default"].createElement(_core.Avatar, {
      alt: item.name,
      src: item.img
    })), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
      primary: item.name,
      secondary: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        sx: {
          display: "inline"
        },
        component: "span",
        variant: "body2",
        color: "text.primary"
      }, item.message))
    }));
  }))), /*#__PURE__*/_react["default"].createElement(_themeUi.Box, null, /*#__PURE__*/_react["default"].createElement(_sectionHeading["default"], {
    sx: styles.heading,
    title: "What carrier consultation in important"
    // description="Guided by expertise and driven by dedication, our consultancy delivers tailored strategies, empowering businesses to navigate challenges and seize opportunities for sustainable growth and success in dynamic markets."
  }), /*#__PURE__*/_react["default"].createElement(_core.List, {
    sx: {
      width: "100%",
      maxWidth: 460,
      bgcolor: "background.paper"
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: _checkCircleFilled["default"],
    alt: "check icon"
  })), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
    primary: "Know your strenght and interest unblie you"
  })), /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: _checkCircleFilled["default"],
    alt: "check icon"
  })), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
    primary: "Know your strenght and interest unblie you"
  })), /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: _checkCircleFilled["default"],
    alt: "check icon"
  })), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
    primary: "How can you bind your carrier path"
  })), /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: _checkCircleFilled["default"],
    alt: "check icon"
  })), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
    primary: "Make a carier decision"
  })))))));
};
var _default = exports["default"] = UltimateFeatures;
var styles = {
  heading: {
    marginBottom: [60, 60, 60, 80]
  },
  features: {
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    display: ["grid", "grid"],
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]
  },
  features1: {
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    display: ["grid", "grid"],
    gridTemplateColumns: ["repeat(2, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]
  }
};