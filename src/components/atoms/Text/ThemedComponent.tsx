import React from 'react';

import type { Text as RNText } from 'react-native';

import Text, { TextProps } from './Component';
import type { ThemeProps } from '../../../theme';

/** Text displays words and characters at various sizes. */
const ThemedText = React.forwardRef<
  RNText,
  TextProps & Partial<ThemeProps<TextProps>>
>(({ children, theme, ...props }) => {
  return (
    <Text {...props} textColor={theme?.colors?.text}>
      {children}
    </Text>
  );
});

Text.displayName = 'Text';

export default ThemedText;
