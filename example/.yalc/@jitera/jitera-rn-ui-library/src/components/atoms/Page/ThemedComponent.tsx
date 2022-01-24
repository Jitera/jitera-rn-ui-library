import React from 'react';
import Page, { PageProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';
import { SafeAreaView } from 'react-native-safe-area-context';

const ThemedPage: RneFunctionComponent<PageProps> = (props) => {
  const { theme, children, backgroundColor, backgroundTop } = props;
  return (
    <Page
      {...props}
      backgroundColor={backgroundColor || theme?.colors?.background}
      backgroundTop={backgroundTop || theme?.colors?.header}
      SafeAreaView={SafeAreaView}
    >
      {children}
    </Page>
  );
};

Page.displayName = 'Page';

export default ThemedPage;
