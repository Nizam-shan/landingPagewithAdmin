"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SEO;
var _react = _interopRequireDefault(require("react"));
var _head = _interopRequireDefault(require("next/head"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function SEO(_ref) {
  var _ref$description = _ref.description,
    description = _ref$description === void 0 ? "IBS PVT LTD" : _ref$description,
    _ref$author = _ref.author,
    author = _ref$author === void 0 ? "Nizam" : _ref$author,
    meta = _ref.meta,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "IBS PVT LTD" : _ref$title;
  var metaData = [{
    name: "description",
    content: description
  }, {
    property: "og:title",
    content: title
  }, {
    property: "og:description",
    content: description
  }, {
    property: "og:type",
    content: "website"
  }, {
    name: "twitter:card",
    content: "summary"
  }, {
    name: "twitter:creator",
    content: author
  }, {
    name: "twitter:title",
    content: title
  }, {
    name: "twitter:description",
    content: description
  }].concat(meta);
  return /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, title), metaData.map(function (_ref2, i) {
    var name = _ref2.name,
      content = _ref2.content;
    return /*#__PURE__*/_react["default"].createElement("meta", {
      key: i,
      name: name,
      content: content
    });
  }));
}
SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: ""
};