import React from 'react';
import Page, { HeaderProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';
import { SafeAreaView } from 'react-native-safe-area-context';

const ThemedHeader: RneFunctionComponent<HeaderProps> = (props) => {
  const { theme, children, backgroundColor } = props;
  return (
    <Page
      {...props}
      SafeAreaView={SafeAreaView}
      safeAreaTop={theme?.safeArea?.top}
      backgroundColor={backgroundColor || theme?.colors?.header}
    >
      {children}
    </Page>
  );
};

Page.displayName = 'Header';

export default ThemedHeader;
