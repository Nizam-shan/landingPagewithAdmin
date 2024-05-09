"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _core = require("@emotion/core");
var _themeUi = require("theme-ui");
var _sectionHeading = _interopRequireDefault(require("components/section-heading"));
var _priceTable = _interopRequireDefault(require("components/cards/price-table"));
var _polished = require("polished");
var _core2 = require("@material-ui/core");
var _templateObject, _templateObject2; // /** @jsx jsx */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var annual = [{
  id: 1,
  title: "Section C",
  subtitle: "For Small teams or office",
  amount: 0,
  isRecommended: false,
  buttonText: "Submit",
  features: [{
    id: 1,
    isAvailable: true,
    title: "Ultimate access to all course, exercises and assessments"
  }, {
    id: 2,
    isAvailable: true,
    title: "Free access for all kind of exercise corrections with downloads."
  }, {
    id: 3,
    isAvailable: true,
    title: "Total assessment corrections with free download access system"
  }, {
    id: 4,
    isAvailable: false,
    title: "Unlimited download of courses on the mobile app contents"
  }, {
    id: 5,
    isAvailable: false,
    title: "Download and print courses and exercises in PDF"
  }]
}, {
  id: 2,
  title: "Higher Studies",
  subtitle: "For startup enterprise",
  // amount: 89.99 * 12 - 10,
  isRecommended: false,
  buttonText: "Register",
  features: [{
    id: 1,
    isAvailable: true,
    title: "Interactive Learning Resources"
  }, {
    id: 2,
    isAvailable: true,
    title: "Expert Mentorship & Guidance."
  }, {
    id: 3,
    isAvailable: true,
    title: "Supportive Learning Community && Educational Support Services"
  }, {
    id: 4,
    isAvailable: true,
    title: "Continuous Platform Enhancement & Updates"
  }, {
    id: 5,
    isAvailable: true,
    title: "Comprehensive Research Opportunities & Collaborative Study Projects"
  }]
}, {
  id: 3,
  title: "Job Seeker",
  subtitle: "For Small teams or office",
  amount: 0,
  isRecommended: false,
  buttonText: "Register",
  features: [{
    id: 1,
    isAvailable: true,
    title: "Industry-Recognized Certificates"
  }, {
    id: 2,
    isAvailable: true,
    title: "Ongoing Platform Improvement and Updates"
  }, {
    id: 3,
    isAvailable: true,
    title: "Expert Guidance & Coaching"
  }, {
    id: 4,
    isAvailable: true,
    title: "Accessible Anytime, Anywhere"
  }, {
    id: 5,
    isAvailable: true,
    title: "Job Search Assistance Resources"
  }]
}];
var Pricing = function Pricing() {
  // const [plan, setPlan] = useState({
  //   active: "monthly",
  //   pricingPlan: monthly,
  // });

  // const handlePlan = (plan) => {
  //   if (plan === "monthly") {
  //     setPlan({
  //       ...plan,
  //       active: "monthly",
  //       pricingPlan: monthly,
  //     });
  //   }
  //   if (plan === "annual") {
  //     setPlan({
  //       ...plan,
  //       active: "annual",
  //       pricingPlan: annual,
  //     });
  //   }
  // };
  return /*#__PURE__*/React.createElement(_themeUi.Box, {
    as: "section",
    id: "pricing",
    sx: styles.section,
    variant: "section.pricing"
  }, /*#__PURE__*/React.createElement(_themeUi.Container, null, /*#__PURE__*/React.createElement(_sectionHeading["default"], {
    sx: styles.heading,
    title: "Services we offfers",
    description: "Experience top-notch services tailored to your needs. From consulting to development, we provide solutions that exceed expectations."
  }), /*#__PURE__*/React.createElement(_themeUi.Grid, {
    sx: styles.priceWrapper
  }, annual.map(function (price, index) {
    return /*#__PURE__*/React.createElement(_priceTable["default"], {
      price: price,
      key: "".concat(index)
    });
  }))));
};
var _default = exports["default"] = Pricing;
var fadeIn = (0, _core.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var fadeIn2 = (0, _core.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  from {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"])));
var styles = {
  heading: {
    mb: [60, null, null, 50]
  },
  priceSwitcher: {
    backgroundColor: "#F7F8FB",
    borderRadius: "5px",
    border: "1px solid ".concat((0, _polished.rgba)("#fff", 0.2)),
    margin: ["0 auto 40px", null, null, "0 auto 50px"],
    maxWidth: 300,
    position: "relative",
    p: 2,
    ".discount": {
      position: "absolute",
      backgroundColor: "primary",
      color: "#fff",
      minHeight: 25,
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      fontSize: 13,
      fontWeight: 700,
      textTransform: "unset",
      borderRadius: 25,
      right: 38,
      top: "-17px"
    },
    button: {
      minHeight: "48px",
      px: "25px",
      fontWeight: 500,
      "&.active": {
        backgroundColor: "#fff",
        color: "text"
      },
      ":focus": {
        outline: "0 none"
      }
    }
  },
  priceWrapper: {
    gap: 30,
    display: "grid",
    gridTemplateColumns: ["repeat(1, 340px)", "repeat(1, 340px)", "repeat(1, 340px)", "repeat(3,1fr)", "repeat(3, 400px)", "repeat(3, 400px)", "repeat(3, 400px)"],
    justifyContent: "center",
    ".priceCard": {
      ".priceHeader": {
        animation: "".concat(fadeIn, " 0.8s linear")
      },
      "ul > li": {
        animation: "".concat(fadeIn2, " 0.7s linear")
      },
      ".priceAmount": {
        animation: "".concat(fadeIn, " 0.9s linear")
      },
      ".priceButton": {
        animation: "".concat(fadeIn2, " 0.7s linear")
      }
    }
  }
};