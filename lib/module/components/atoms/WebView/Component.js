function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { WebView as RNWebView } from "react-native-webview";
const WebView = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    Component,
    style,
    source,
    isPreview = false,
    ...props
  } = _ref;
  let newSource = source;

  if (typeof source === "string") {
    newSource = {
      uri: source
    };
  }

  let WebViewComponent = RNWebView;

  if (isPreview) {
    WebViewComponent = Component;
  }

  return /*#__PURE__*/React.createElement(WebViewComponent, _extends({
    ref: ref,
    containerStyle: style // for react-native-web-view
    ,
    style: style // for html preview

  }, props, {
    source: newSource
  }));
});
WebView.displayName = "WebView";
export default WebView;
//# sourceMappingURL=Component.js.map