import React from "react";

import type { TouchableOpacity as RNTouchableOpacity } from "react-native";

import TouchableOpacity, { TouchableOpacityProps } from "./Component";
import type { ThemeProps } from "../../../theme";

const ThemedView = React.forwardRef<
  RNTouchableOpacity,
  TouchableOpacityProps & Partial<ThemeProps<TouchableOpacityProps>>
>(({ children, ...props }, ref) => {
  return (
    <TouchableOpacity {...props} ref={ref}>
      {children}
    </TouchableOpacity>
  );
});

export default ThemedView;
