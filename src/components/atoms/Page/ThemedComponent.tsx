import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { View } from 'react-native';

import Page, { PageProps } from './Component';
import type { ThemeProps } from '../../../theme';

const ThemedPage = React.forwardRef<
  View,
  PageProps & Partial<ThemeProps<PageProps>>
>(({ theme, children, backgroundColor, backgroundTop, ...props }, ref) => {
  return (
    <Page
      ref={ref}
      backgroundColor={backgroundColor || theme?.colors?.background}
      backgroundTop={backgroundTop || theme?.colors?.header}
      SafeAreaView={SafeAreaView}
    >
      {children}
    </Page>
  );
});

Page.displayName = 'Page';

export default ThemedPage;
