import React from 'react';
import Header, { HeaderProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const ThemedHeader: RneFunctionComponent<Omit<HeaderProps, 'ref'>> = (
  props
) => {
  const { theme, children, backgroundColor } = props;
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <Header
          {...props}
          backgroundColor={backgroundColor || theme?.colors?.header}
          safeAreaTop={insets.top}
        >
          {children}
        </Header>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

Header.displayName = 'Header';

export default ThemedHeader;
