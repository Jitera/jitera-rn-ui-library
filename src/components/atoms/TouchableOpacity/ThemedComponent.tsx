import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import TouchableOpacity, { TouchableOpacityProps } from './Component';

const ThemedView: RneFunctionComponent<Omit<TouchableOpacityProps, 'ref'>> = ({
  children,
  ...props
}) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};

export default ThemedView;
