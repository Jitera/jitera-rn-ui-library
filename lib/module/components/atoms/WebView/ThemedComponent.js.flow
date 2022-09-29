import React from "react";

import type { WebView as RNWebView } from "react-native-webview";

import WebView, { WebViewProps } from "./Component";
import type { ThemeProps } from "../../../theme";

const ThemedWebView = React.forwardRef<RNWebView, WebViewProps & Partial<ThemeProps<WebViewProps>>>(
  (props) => <WebView {...props} />
);

ThemedWebView.displayName = "WebView";

export default WebView;
