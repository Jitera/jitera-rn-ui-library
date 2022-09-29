import React from "react";
import { DividerProps } from "./Component";
import type { TouchableOpacity } from "react-native";
import type { ThemeProps } from "../../../theme";
declare const ThemedDivider: React.ForwardRefExoticComponent<DividerProps & Partial<ThemeProps<DividerProps>> & React.RefAttributes<TouchableOpacity>>;
export default ThemedDivider;
