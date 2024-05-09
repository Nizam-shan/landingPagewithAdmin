"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logPageView = exports.logException = exports.logEvent = exports.initGA = void 0;
var _reactGa = _interopRequireDefault(require("react-ga"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var initGA = exports.initGA = function initGA() {
  console.log("GA init");
  _reactGa["default"].initialize("UA-xxxxxxxxx-1");
};
var logPageView = exports.logPageView = function logPageView() {
  console.log("Logging pageview for ".concat(window.location.pathname));
  _reactGa["default"].set({
    page: window.location.pathname
  });
  _reactGa["default"].pageview(window.location.pathname);
};
var logEvent = exports.logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  if (category && action) {
    _reactGa["default"].event({
      category: category,
      action: action
    });
  }
};
var logException = exports.logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (description) {
    _reactGa["default"].exception({
      description: description,
      fatal: fatal
    });
  }
};