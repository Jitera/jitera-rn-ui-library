function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Button from "./Component";
const ThemedButton = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Button, _extends({
    ref: ref
  }, props), children);
});
export default ThemedButton;
//# sourceMappingURL=ThemedComponent.js.map