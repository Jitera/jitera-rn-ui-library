import React from "react";
import Header, { HeaderProps } from "./Component";
import type { View } from "react-native";
import type { ThemeProps } from "../../../theme";

const ThemedHeader = React.forwardRef<View, HeaderProps & Partial<ThemeProps<HeaderProps>>>(
  ({ theme, backgroundColor, ...props }, ref) => {
    return (
      <Header {...props} ref={ref} backgroundColor={backgroundColor || theme?.colors?.header} />
    );
  }
);

Header.displayName = "Header";

export default ThemedHeader;
