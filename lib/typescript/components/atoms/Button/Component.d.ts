import React from "react";
import type { TouchableOpacityProps } from "react-native";
import { StyleProp, TextStyle, TouchableOpacity } from "react-native";
export interface ButtonProps extends TouchableOpacityProps {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<TouchableOpacity>>;
export default Button;
