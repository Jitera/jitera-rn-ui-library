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
declare const WebView: React.ForwardRefExoticComponent<WebViewProps & React.RefAttributes<RNWebView<{}>>>;
export default WebView;
