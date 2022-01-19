import React from 'react';
import WebView from './Component';

import type { WebViewProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedWebView: RneFunctionComponent<Omit<WebViewProps, 'ref'>> = (
  props
) => <WebView {...props} />;

ThemedWebView.displayName = 'WebView';

export default WebView;
