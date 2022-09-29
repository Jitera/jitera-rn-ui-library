function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo } from "react";
import { Image as RnImage } from "react-native";
const Image = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    resizeMode = "cover",
    source,
    ImageComponent = RnImage,
    uri,
    ...props
  } = _ref;
  const newSource = useMemo(() => {
    if (uri) {
      return {
        uri
      };
    }

    if (typeof source === "string") {
      return {
        uri: source
      };
    }

    return source;
  }, [uri, source]);
  return /*#__PURE__*/React.createElement(ImageComponent, _extends({
    ref: ref,
    source: newSource,
    resizeMode: resizeMode
  }, props));
});
Image.displayName = "Image";
export default Image;
//# sourceMappingURL=Component.js.map