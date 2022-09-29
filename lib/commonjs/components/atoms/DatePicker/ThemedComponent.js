"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Component = _interopRequireDefault(require("./Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ThemedDatePicker = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/_react.default.createElement(_Component.default, _extends({
    ref: ref
  }, props));
});

var _default = ThemedDatePicker;
exports.default = _default;
//# sourceMappingURL=ThemedComponent.js.map