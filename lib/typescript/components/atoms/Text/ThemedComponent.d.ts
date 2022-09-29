import React from "react";
import type { Text as RNText } from "react-native";
import { TextProps } from "./Component";
import type { ThemeProps } from "../../../theme";
/** Text displays words and characters at various sizes. */
declare const ThemedText: React.ForwardRefExoticComponent<TextProps & Partial<ThemeProps<TextProps>> & React.RefAttributes<RNText>>;
export default ThemedText;
