import React from "react";
import { HeaderProps } from "./Component";
import type { View } from "react-native";
import type { ThemeProps } from "../../../theme";
declare const ThemedHeader: React.ForwardRefExoticComponent<HeaderProps & Partial<ThemeProps<HeaderProps>> & React.RefAttributes<View>>;
export default ThemedHeader;
