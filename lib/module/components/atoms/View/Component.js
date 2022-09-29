function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { View as NativeView } from "react-native";
const View = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children = null,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(NativeView, _extends({
    ref: ref
  }, props), children);
});
View.displayName = "View";
export default View;
//# sourceMappingURL=Component.js.map