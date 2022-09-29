import React from "react";
import { View as NativeView, ViewProps as NativeViewProps } from "react-native";
export interface ViewProps extends NativeViewProps {
}
declare const View: React.ForwardRefExoticComponent<ViewProps & React.RefAttributes<NativeView>>;
export default View;
