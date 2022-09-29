import React from "react";
import type { TouchableOpacity as RNTouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "./Component";
import type { ThemeProps } from "../../../theme";
declare const ThemedView: React.ForwardRefExoticComponent<TouchableOpacityProps & Partial<ThemeProps<TouchableOpacityProps>> & React.RefAttributes<RNTouchableOpacity>>;
export default ThemedView;
