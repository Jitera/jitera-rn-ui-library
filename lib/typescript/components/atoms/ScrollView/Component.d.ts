import React from "react";
import { ScrollView as NativeScrollView, ScrollViewProps as NativeScrollViewProps } from "react-native";
export interface ScrollViewProps extends NativeScrollViewProps {
}
declare const ScrollView: React.ForwardRefExoticComponent<ScrollViewProps & React.RefAttributes<NativeScrollView>>;
export default ScrollView;
