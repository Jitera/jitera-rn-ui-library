import React, { forwardRef } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type {
  WebView as RNWebViewType,
  WebViewProps as RNWebViewProps,
} from 'react-native-webview';
import { WebView as RNWebView } from 'react-native-webview';
import type { WebViewSource } from 'react-native-webview/lib/WebViewTypes';
import type { PropsWithRef } from '../../../type';

export type WebViewProps = PropsWithRef<
  {
    Component: typeof RNWebViewType;
  } & Omit<RNWebViewProps, 'source'> & {
      style?: StyleProp<ViewStyle>;
      isPreview?: boolean;
      source?: string | WebViewSource;
    }
>;

const WebView: React.FC<WebViewProps> = forwardRef<any, WebViewProps>(
  ({ Component, style, source, isPreview = false, ...props }, ref) => {
    let newSource = source;

    if (typeof source === 'string') {
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

WebView.displayName = 'WebView';

export default WebView;
