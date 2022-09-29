"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Component = _interopRequireDefault(require("./Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ThemedHeader = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  var _theme$colors;

  let {
    theme,
    backgroundColor,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Component.default, _extends({}, props, {
    ref: ref,
    backgroundColor: backgroundColor || (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.header)
  }));
});

_Component.default.displayName = "Header";
var _default = ThemedHeader;
exports.default = _default;
//# sourceMappingURL=ThemedComponent.js.map