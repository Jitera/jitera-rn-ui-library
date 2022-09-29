import React from "react";
import Button, { ButtonProps } from "./Component";

import type { TouchableOpacity } from "react-native";
import type { ThemeProps } from "../../../theme";

const ThemedButton = React.forwardRef<
  TouchableOpacity,
  ButtonProps & Partial<ThemeProps<ButtonProps>>
>(({ children, ...props }, ref) => {
  return (
    <Button ref={ref} {...props}>
      {children}
    </Button>
  );
});

export default ThemedButton;
