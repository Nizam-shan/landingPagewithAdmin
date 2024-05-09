"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Accordion;
var _react = _interopRequireDefault(require("react"));
var _baseAccordion = require("./base-accordion");
var _shared = require("./shared");
var _excluded = ["items"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Accordion(_ref) {
  var items = _ref.items,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_baseAccordion.BaseAccordion, _extends({
    stateReducer: (0, _shared.combineReducers)(_shared.single, _shared.preventClose)
  }, props), function (_ref2) {
    var openIndexes = _ref2.openIndexes,
      handleItemClick = _ref2.handleItemClick;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, items.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement(_shared.AccordionItem, {
        key: item.title,
        isOpen: openIndexes.includes(index)
      }, /*#__PURE__*/_react["default"].createElement(_shared.AccordionButton, {
        onClick: function onClick() {
          return handleItemClick(index);
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: openIndexes.includes(index) ? "open" : "closed"
      }), item.title), /*#__PURE__*/_react["default"].createElement(_shared.AccordionContents, {
        isOpen: openIndexes.includes(index)
      }, /*#__PURE__*/_react["default"].createElement("ul", null, item.contents.map(function (point, pointIndex) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: pointIndex
        }, point);
      }))));
    }));
  });
}