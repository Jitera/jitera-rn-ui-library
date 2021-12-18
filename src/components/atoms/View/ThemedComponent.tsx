import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import View, { ViewProps } from './Component';

const ThemedView: RneFunctionComponent<ViewProps> = (props) => {
  const { children } = props;
  return <View {...props}>{children}</View>;
};

export default ThemedView;
