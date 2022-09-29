import React from "react";
import { Image as RnImage, ImageProps as RnImageProps } from "react-native";
import type { PropsWithRef } from "../../../type";
export declare type ImageProps = PropsWithRef<Omit<RnImageProps, 'source'> & {
    ImageComponent?: React.ElementType<RnImageProps | any>;
    uri?: string;
    source: RnImageProps["source"] | string;
}>;
declare const Image: React.ForwardRefExoticComponent<Pick<ImageProps, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "source" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "ImageComponent" | "uri"> & React.RefAttributes<RnImage>>;
export default Image;
