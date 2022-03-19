import React from 'react';
import { StyleSheet } from 'react-native';
import Input, { InputProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedOTPInput: RneFunctionComponent<Omit<InputProps, 'ref'>> = (
  props
) => {
  const { theme, style } = props;
  return (
    <Input
      {...props}
      style={
        StyleSheet.flatten([
          style,
          {
            fontSize: theme?.fontSizes?.FONT_12,
            color: theme?.colors?.error,
          }
        ])
      }
    />
  );
};

export default ThemedOTPInput;
