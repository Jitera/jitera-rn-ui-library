function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Header from "./Component";
const ThemedHeader = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var _theme$colors;

  let {
    theme,
    backgroundColor,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Header, _extends({}, props, {
    ref: ref,
    backgroundColor: backgroundColor || (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.header)
  }));
});
Header.displayName = "Header";
export default ThemedHeader;
//# sourceMappingURL=ThemedComponent.js.map