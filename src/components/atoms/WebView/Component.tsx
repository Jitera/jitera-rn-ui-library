import React, { forwardRef } from 'react';

import type { WebView as RNWebView, WebViewProps as RNWebViewProps } from 'react-native-webview';
import type { WebViewSource } from 'react-native-webview/lib/WebViewTypes';
import type { PropsWithRef } from '../../../type';

export type WebViewProps = PropsWithRef<
  {
    Component: typeof RNWebView;
  } & Omit<RNWebViewProps, 'source'>
  & {
    source?: string | WebViewSource
  }
>;

const WebView: React.FC<WebViewProps> = forwardRef<RNWebView, WebViewProps>(
  ({ Component, source, ...props }, ref) => {
  let newSource = source

  if (typeof source === 'string') {
    newSource = {uri: source} 
  }

  return <Component ref={ref} {...props} source={newSource as WebViewSource} />
}
);

WebView.displayName = 'WebView';

export default WebView;
