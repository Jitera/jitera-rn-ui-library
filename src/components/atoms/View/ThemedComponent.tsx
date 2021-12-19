import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import View, { ViewProps } from './Component';

const ThemedView: RneFunctionComponent<Omit<ViewProps, 'ref'>> = (props) => {
  const { children } = props;
  return <View {...props}>{children}</View>;
};

export default ThemedView;
