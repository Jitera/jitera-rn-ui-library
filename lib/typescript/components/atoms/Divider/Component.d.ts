import React from "react";
import { View as RNView, StyleProp, ViewStyle } from "react-native";
import type { ViewProps } from "react-native";
export interface DividerProps extends ViewProps {
    color?: string;
    size?: number;
    content?: string | (() => JSX.Element);
    contentPosition?: "left" | "center" | "right";
    contentStyles?: StyleProp<ViewStyle>;
    containerStyles?: StyleProp<ViewStyle>;
}
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<RNView>>;
export default Divider;
