import React from 'react';

import type { View as RNView } from 'react-native';

import View, { ViewProps } from './Component';
import type { ThemeProps } from '../../../theme';

const ThemedView = React.forwardRef<
  RNView,
  ViewProps & Partial<ThemeProps<ViewProps>>
>(({ children, ...props }, ref) => {
  return (
    <View {...props} ref={ref}>
      {children}
    </View>
  );
});

export default ThemedView;
