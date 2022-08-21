import React from "react";
import Divider, { DividerProps } from "./Component";

import type { TouchableOpacity } from "react-native";
import type { ThemeProps } from "../../../theme";

const ThemedDivider = React.forwardRef<
  TouchableOpacity,
  DividerProps & Partial<ThemeProps<DividerProps>>
>(({ children, theme, ...props }, ref) => {
  return (
    <Divider color={theme.colors.primary} ref={ref} {...props}>
      {children}
    </Divider>
  );
});

export default ThemedDivider;
