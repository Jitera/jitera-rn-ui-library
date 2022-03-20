import React from 'react';
import { StyleSheet } from 'react-native';
import Input, { InputProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedInput: RneFunctionComponent<Omit<InputProps, 'ref'>> = (
  props
) => {
  const { theme, style } = props;
  return (
    <Input
      {...props}
      inputStyle={
        StyleSheet.flatten([
          {
            fontSize: theme?.fontSizes?.FONT_12
          },
          style,
        ])
      }
    />
  );
};

export default ThemedInput;
