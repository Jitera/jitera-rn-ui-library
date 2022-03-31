import React from 'react';
import type { View } from 'react-native';
import Input, { InputProps } from './Component';

import type { ThemeProps } from '../../../theme';

const ThemedInput = React.forwardRef<
  View,
  InputProps & Partial<ThemeProps<InputProps>>
>((props, ref) => {
  return <Input {...props} ref={ref} />;
});

export default ThemedInput;
