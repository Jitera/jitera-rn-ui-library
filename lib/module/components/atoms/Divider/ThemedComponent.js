function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Divider from "./Component";
const ThemedDivider = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    theme,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Divider, _extends({
    color: theme.colors.primary,
    ref: ref
  }, props), children);
});
export default ThemedDivider;
//# sourceMappingURL=ThemedComponent.js.map