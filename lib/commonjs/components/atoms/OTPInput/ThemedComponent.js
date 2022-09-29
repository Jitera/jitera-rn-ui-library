"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Component = _interopRequireDefault(require("./Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ThemedOTPInput = /*#__PURE__*/_react.default.forwardRef(_ref => {
  var _theme$spacing, _theme$fontSizes, _theme$colors;

  let {
    theme,
    errorStyle,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Component.default, _extends({}, props, {
    errorStyle: errorStyle || {
      marginTop: theme === null || theme === void 0 ? void 0 : (_theme$spacing = theme.spacing) === null || _theme$spacing === void 0 ? void 0 : _theme$spacing.SPACING_5,
      fontSize: theme === null || theme === void 0 ? void 0 : (_theme$fontSizes = theme.fontSizes) === null || _theme$fontSizes === void 0 ? void 0 : _theme$fontSizes.FONT_12,
      color: theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.error
    }
  }));
});

var _default = ThemedOTPInput;
exports.default = _default;
//# sourceMappingURL=ThemedComponent.js.map