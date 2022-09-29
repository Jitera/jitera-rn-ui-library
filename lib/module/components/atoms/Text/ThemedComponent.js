function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Text from "./Component";

/** Text displays words and characters at various sizes. */
const ThemedText = /*#__PURE__*/React.forwardRef(_ref => {
  var _theme$colors;

  let {
    children,
    theme,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, _extends({}, props, {
    textColor: theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.text
  }), children);
});
Text.displayName = "Text";
export default ThemedText;
//# sourceMappingURL=ThemedComponent.js.map