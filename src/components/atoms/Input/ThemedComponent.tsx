import React from 'react';
import Input, { InputProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedOTPInput: RneFunctionComponent<InputProps> = (props) => {
  const { theme, errorStyle } = props;
  return (
    <Input
      {...props}
      errorStyle={
        errorStyle || {
          marginTop: theme?.spacing?.SPACING_5,
          fontSize: theme?.fontSizes?.FONT_12,
          color: theme?.colors?.error,
        }
      }
    />
  );
};

export default ThemedOTPInput;
