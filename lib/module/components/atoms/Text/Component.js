function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";
import { patchWebProps } from "../../../theme/helpers";

/** Text displays words and characters at various sizes. */
const Text = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    style = {},
    children = "",
    textColor,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(NativeText, _extends({
    ref: ref,
    style: StyleSheet.flatten([{
      color: textColor
    }, style])
  }, patchWebProps(rest)), children);
});
Text.displayName = "Text";
export default Text;
//# sourceMappingURL=Component.js.map