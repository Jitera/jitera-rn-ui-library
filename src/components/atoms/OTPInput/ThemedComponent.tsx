import React from 'react';
import OTPInput, { OTPInputProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedOTPInput: RneFunctionComponent<Omit<OTPInputProps, 'ref'>> = (
  props
) => {
  const { theme, errorStyle } = props;
  return (
    <OTPInput
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
