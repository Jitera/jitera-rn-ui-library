function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import TouchableOpacity from "./Component";
const ThemedView = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({}, props, {
    ref: ref
  }), children);
});
export default ThemedView;
//# sourceMappingURL=ThemedComponent.js.map