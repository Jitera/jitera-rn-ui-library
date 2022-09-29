import React from "react";
import type { Text as RNText } from "react-native";
import { IconProps } from "./Component";
import type { ThemeProps } from "../../../theme";
declare const ThemedIcon: React.ForwardRefExoticComponent<IconProps & Partial<ThemeProps<IconProps>> & React.RefAttributes<RNText>>;
export default ThemedIcon;
