import React from 'react';
import ThirdPartyAuthButton from './Component';

import type { ThirdPartyAuthButtonProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedWebView: RneFunctionComponent<
  Omit<ThirdPartyAuthButtonProps, 'ref'>
> = (props) => <ThirdPartyAuthButton {...props} />;

ThemedWebView.displayName = 'ThirdPartyAuthButton';

export default ThirdPartyAuthButton;
