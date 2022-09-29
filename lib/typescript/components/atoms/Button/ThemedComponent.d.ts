import React from "react";
import { ButtonProps } from "./Component";
import type { TouchableOpacity } from "react-native";
import type { ThemeProps } from "../../../theme";
declare const ThemedButton: React.ForwardRefExoticComponent<ButtonProps & Partial<ThemeProps<ButtonProps>> & React.RefAttributes<TouchableOpacity>>;
export default ThemedButton;
