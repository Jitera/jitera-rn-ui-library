import React from 'react';
import type { View } from 'react-native';
import SimpleInput, { SimpleInputProps } from './Component';

import type { ThemeProps } from '../../../theme';

const ThemedInput = React.forwardRef<
  View,
  SimpleInputProps & Partial<ThemeProps<SimpleInputProps>>
>((props, ref) => {
  return <SimpleInput {...props} ref={ref} />;
});

export default ThemedInput;
