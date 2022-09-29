function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Page from "./Component";
const ThemedPage = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var _theme$colors, _theme$colors2;

  let {
    theme,
    children,
    backgroundColor,
    backgroundTop,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Page, _extends({
    ref: ref,
    backgroundColor: backgroundColor || (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.background),
    backgroundTop: backgroundTop || (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.header),
    SafeAreaView: SafeAreaView
  }, props), children);
});
Page.displayName = "Page";
export default ThemedPage;
//# sourceMappingURL=ThemedComponent.js.map