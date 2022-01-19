import React, { forwardRef } from 'react';

import type { WebView as RNWebView } from 'react-native-webview';
import type { WebViewProps as RNWebViewProps } from 'react-native-webview';
import type { PropsWithRef } from '../../../type';

export type WebViewProps = PropsWithRef<
  {
    Component: typeof RNWebView;
  } & RNWebViewProps
>;

const WebView: React.FC<WebViewProps> = forwardRef<RNWebView, WebViewProps>(
  ({ Component, ...props }, ref) => <Component ref={ref} {...props} />
);

WebView.displayName = 'WebView';

export default WebView;
