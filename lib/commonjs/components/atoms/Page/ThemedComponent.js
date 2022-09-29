"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _Component = _interopRequireDefault(require("./Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ThemedPage = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  var _theme$colors, _theme$colors2;

  let {
    theme,
    children,
    backgroundColor,
    backgroundTop,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Component.default, _extends({
    ref: ref,
    backgroundColor: backgroundColor || (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.background),
    backgroundTop: backgroundTop || (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.header),
    SafeAreaView: _reactNativeSafeAreaContext.SafeAreaView
  }, props), children);
});

_Component.default.displayName = "Page";
var _default = ThemedPage;
exports.default = _default;
//# sourceMappingURL=ThemedComponent.js.map