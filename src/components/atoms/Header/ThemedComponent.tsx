import React from 'react';
import Header, { HeaderProps } from './Component';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import type { View } from 'react-native';
import type { ThemeProps } from '../../../theme';

const ThemedHeader = React.forwardRef<
  View,
  HeaderProps & Partial<ThemeProps<HeaderProps>>
>(({ theme, children, backgroundColor, ...props }, ref) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <Header
          {...props}
          ref={ref}
          backgroundColor={backgroundColor || theme?.colors?.header}
          safeAreaTop={insets.top}
        >
          {children}
        </Header>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
});

Header.displayName = 'Header';

export default ThemedHeader;
