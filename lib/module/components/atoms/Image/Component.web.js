function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Image as RnImage } from "react-native";
const Image = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    style,
    resizeMode,
    uri,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(RnImage, _extends({
    ref: ref,
    style: style,
    source: {
      uri
    },
    resizeMode: resizeMode
  }, props));
});
Image.displayName = "Image";
export default Image;
//# sourceMappingURL=Component.web.js.map