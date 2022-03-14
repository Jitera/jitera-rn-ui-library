import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import ScrollView, { ScrollViewProps } from './Component';

const ThemedScrollView: RneFunctionComponent<Omit<ScrollViewProps, 'ref'>> = (props) => {
  const { children } = props;
  return <ScrollView {...props}>{children}</ScrollView>;
};

export default ThemedScrollView;
