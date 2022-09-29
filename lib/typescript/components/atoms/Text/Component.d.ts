import React from "react";
import { Text as NativeText, TextProps as RNTextProps, TextStyle, StyleProp } from "react-native";
export interface TextProps extends RNTextProps {
    style?: StyleProp<TextStyle>;
    textColor?: string;
}
/** Text displays words and characters at various sizes. */
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<NativeText>>;
export default Text;
