import React from "react";
import { View, ViewProps, NativeSyntheticEvent, TargetedEvent } from "react-native";
import { ImagePickerOptions, ImagePickerResult } from "expo-image-picker";
export declare enum LauncherTypeKind {
    DEFAULT = "default",
    CAMERA = "camera",
    IMAGE_LIBRARY = "image-library"
}
export interface ImagePickerProps extends ViewProps {
    launcherType?: LauncherTypeKind;
    options?: ImagePickerOptions;
    errorMessage?: string;
    value?: ImagePickerResult | string | undefined;
    onChange?: (imagePickerResult: ImagePickerResult) => void;
    onBlur?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
    isPreview?: boolean;
}
declare const ImagePicker: React.ForwardRefExoticComponent<ImagePickerProps & React.RefAttributes<View>>;
export default ImagePicker;
