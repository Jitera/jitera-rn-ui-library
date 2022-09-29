import React from "react";
import type { Image as RNImage } from "react-native";
import { ImageProps } from "./Component";
import type { ThemeProps } from "../../../theme";
declare const ThemedImage: React.ForwardRefExoticComponent<Pick<Omit<import("react-native").ImageProps, "source"> & {
    ImageComponent?: React.ElementType<any>;
    uri?: string;
    source: string | import("react-native").ImageSourcePropType;
} & import("../../../type").Ref<any> & Partial<ThemeProps<ImageProps>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "source" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "ImageComponent" | "uri" | keyof ThemeProps<ImageProps>> & React.RefAttributes<RNImage>>;
export default ThemedImage;
