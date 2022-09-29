import React from "react";
import { TouchableOpacity as RNTouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from "react-native";
export interface TouchableOpacityProps extends RNTouchableOpacityProps {
}
declare const TouchableOpacity: React.ForwardRefExoticComponent<TouchableOpacityProps & React.RefAttributes<RNTouchableOpacity>>;
export default TouchableOpacity;
