import React from "react";
import type { View } from "react-native";
import { InputProps } from "./Component";
import type { ThemeProps } from "../../../theme";
declare const ThemedInput: React.ForwardRefExoticComponent<InputProps & Partial<ThemeProps<InputProps>> & React.RefAttributes<View>>;
export default ThemedInput;
