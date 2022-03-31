import React from 'react';
import type { Text as RNText } from 'react-native';

import Icon, { IconProps } from './Component';
import type { ThemeProps } from '../../../theme';

const ThemedIcon = React.forwardRef<
  RNText,
  IconProps & Partial<ThemeProps<IconProps>>
>((props, ref) => {
  return <Icon {...props} ref={ref} />;
});

ThemedIcon.displayName = 'Icon';

export default ThemedIcon;
