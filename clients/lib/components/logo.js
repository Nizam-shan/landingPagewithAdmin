"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Logo;
var _themeUi = require("theme-ui");
var _link = require("components/link");
// /** @jsx jsx */

// import logo from "assets/images/logo.png";
// import logo from "../assets/images/logo.png";
// import logoWhite from "assets/images/logo-white.png";
// import logoWhite from "../assets/images/logo-white.png";

function Logo(_ref) {
  var isWhite = _ref.isWhite;
  var logo = "../assets/images/logo.png";
  var logoWhite = "../assets/images/logo-white.png";
  return /*#__PURE__*/React.createElement(_link.Link, {
    path: "/",
    sx: {
      variant: "links.logo"
    }
  }, /*#__PURE__*/React.createElement(_themeUi.Image, {
    src: isWhite ? logoWhite : logo,
    alt: "IBS PVT LTD"
  }));
}