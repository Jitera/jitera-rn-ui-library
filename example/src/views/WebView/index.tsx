import React from 'react';
import {WebView} from '@jitera/jitera-rn-ui-library';
import {WebView as RNWebView} from 'react-native-webview';

const WebViewViews: React.FC = () => (
  <WebView
    Component={RNWebView}
    source={{uri: 'https://jitera.com/'}}
    style={{width: '100%', height: '100%'}}
  />
);

export default WebViewViews;
