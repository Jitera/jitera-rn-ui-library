function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { TouchableOpacity as RNTouchableOpacity } from "react-native";
const TouchableOpacity = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    children = null,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(RNTouchableOpacity, _extends({
    ref: ref
  }, rest), children);
});
TouchableOpacity.displayName = "TouchableOpacity";
export default TouchableOpacity;
//# sourceMappingURL=Component.js.map