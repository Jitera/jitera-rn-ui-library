import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { WebView as RNWebView, WebViewProps as RNWebViewProps } from "react-native-webview";

import type { WebViewSource } from "react-native-webview/lib/WebViewTypes";
import type { PreviewProps } from "../../../type";

export interface WebViewProps extends PreviewProps, Omit<RNWebViewProps, "source"> {
  Component: typeof RNWebView;
  style?: StyleProp<ViewStyle>;
  source?: string | WebViewSource;
}

const WebView = React.forwardRef<RNWebView, WebViewProps>(
  ({ Component, style, source, isPreview = false, ...props }, ref) => {
    let newSource = source;

    if (typeof source === "string") {
      newSource = { uri: source };
    }

    let WebViewComponent = RNWebView;

    if (isPreview) {
      WebViewComponent = Component;
    }

    return (
      <WebViewComponent
        ref={ref}
        containerStyle={style} // for react-native-web-view
        style={style} // for html preview
        {...props}
        source={newSource as WebViewSource}
      />
    );
  }
);

WebView.displayName = "WebView";

export default WebView;
