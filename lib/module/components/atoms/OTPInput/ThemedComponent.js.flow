import React from "react";
import type { View } from "react-native";

import OTPInput, { OTPInputProps } from "./Component";
import type { ThemeProps } from "../../../theme";

const ThemedOTPInput = React.forwardRef<View, OTPInputProps & Partial<ThemeProps<OTPInputProps>>>(
  ({ theme, errorStyle, ...props }) => {
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
  }
);

export default ThemedOTPInput;
