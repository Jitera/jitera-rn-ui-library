import React from "react";

import type { ScrollView as RNScrollView } from "react-native";

import ScrollView, { ScrollViewProps } from "./Component";
import type { ThemeProps } from "../../../theme";

const ThemedScrollView = React.forwardRef<
  RNScrollView,
  ScrollViewProps & Partial<ThemeProps<ScrollViewProps>>
>(({ children, ...props }) => {
  return <ScrollView {...props}>{children}</ScrollView>;
});

export default ThemedScrollView;
