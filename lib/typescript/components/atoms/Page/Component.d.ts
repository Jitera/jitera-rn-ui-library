import React from "react";
import { View, StyleProp, ViewStyle, KeyboardAvoidingView, KeyboardAvoidingViewProps, ViewProps } from "react-native";
import type { SafeAreaViewProps } from "react-native-safe-area-context";
export interface PageProps extends ViewProps, KeyboardAvoidingViewProps {
    children?: React.ReactNode;
    SafeAreaView?: React.ElementType<SafeAreaViewProps>;
    style?: StyleProp<ViewStyle>;
    backgroundColor?: string;
    statusBar?: "light-content" | "dark-content";
    unsafe?: boolean;
    hidden?: boolean;
    statusColor?: string;
    safeArea?: boolean;
    keyboardVerticalOffset?: number;
    /**
     * Enable to custom background color of inset bottom on Iphone
     * @default false
     */
    insetTop?: boolean;
    /**
     * Enable to custom background color of inset bottom on Iphone
     * @default false
     */
    insetBottom?: boolean;
    /**
     * Color of inset top when customInsetBottom set to true
     * @default #ffffff
     */
    backgroundTop?: string;
    /**
     * Color of inset bottom IPhone when customInsetBottom set to true
     * @default #ffffff
     */
    backgroundBottom?: string;
    /**
     * Keyboard will hide when tap outside
     * @default 0
     */
    hideKeyboardHandled?: boolean;
}
declare const Page: React.ForwardRefExoticComponent<PageProps & React.RefAttributes<View | KeyboardAvoidingView>>;
export default Page;
