import React from 'react';
import Input, { InputProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedOTPInput: RneFunctionComponent<Omit<InputProps, 'ref'>> = (
  props
) => {
  const { theme, inputStyle } = props;
  return (
    <Input
      {...props}
      inputStyle={
        inputStyle || {
          fontSize: theme?.fontSizes?.FONT_12,
          color: theme?.colors?.error,
        }
      }
    />
  );
};

export default ThemedOTPInput;
