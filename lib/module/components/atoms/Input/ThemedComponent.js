function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Input from "./Component";
const ThemedInput = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement(Input, _extends({}, props, {
    ref: ref
  }));
});
export default ThemedInput;
//# sourceMappingURL=ThemedComponent.js.map