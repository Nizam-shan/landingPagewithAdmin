"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomApp;
var _react = require("react");
var _router = _interopRequireDefault(require("next/router"));
require("typeface-dm-sans");
require("react-phone-number-input/style.css");
require("react-toastify/dist/ReactToastify.css");
require("react-phone-input-2/lib/style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import { initGA, logPageView } from 'analytics';
// import "components/modal/modal.css";

function CustomApp(_ref) {
  var Component = _ref.Component,
    pageProps = _ref.pageProps;
  // useEffect(() => {
  //   // initGA();
  //   // logPageView();
  //   Router.events.on('routeChangeComplete', logPageView);
  // }, []);

  return /*#__PURE__*/React.createElement(Component, pageProps);
}