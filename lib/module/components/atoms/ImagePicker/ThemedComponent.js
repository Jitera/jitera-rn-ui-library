function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import ImagePicker from "./Component";
const ThemedImagePicker = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement(ImagePicker, _extends({
    ref: ref
  }, props));
});
export default ThemedImagePicker;
//# sourceMappingURL=ThemedComponent.js.map