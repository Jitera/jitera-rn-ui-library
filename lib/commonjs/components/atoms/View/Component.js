"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const View = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    children = null,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    ref: ref
  }, props), children);
});

View.displayName = "View";
var _default = View;
exports.default = _default;
//# sourceMappingURL=Component.js.map