import React from "react";
import { TextInput, ColorValue, NativeSyntheticEvent, StyleProp, TextInputEndEditingEventData, TextInputProps, TextStyle, View, ViewStyle } from "react-native";
import { TextProps } from "../Text";
import { IconProps } from "../Icon";
import type { ViewProps } from "../View";
export interface InputProps extends Omit<TextInputProps, "onChangeText" | "onChange" | "onBlur" | "multiline" | "style"> {
    title?: string | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    onChange?: ((text: string) => void) | undefined;
    onBlur?: ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void) | undefined;
    errorMessage?: string | undefined;
    isPreview?: boolean | undefined;
    showCharacterCounter?: boolean | undefined;
    maxLength?: number | undefined;
    inputRef?: React.MutableRefObject<TextInput | null> | undefined;
    inputStyle?: StyleProp<TextStyle> | undefined;
    labelStyle?: StyleProp<TextStyle> | undefined;
    labelProps?: Omit<TextProps, "style"> | undefined;
    showClearText?: boolean | undefined;
    clearIconColor?: ColorValue | undefined;
    clearIconProps?: IconProps | undefined;
    showSecureEye?: boolean | undefined;
    secureEyeIconColor?: ColorValue | undefined;
    secureEyeIconProps?: IconProps | undefined;
    errorMessageStyle?: StyleProp<TextStyle> | undefined;
    errorMessageProps?: Omit<TextProps, "style"> | undefined;
    characterCounterStyle?: StyleProp<TextStyle> | undefined;
    characterCounterProps?: Omit<TextProps, "style"> | undefined;
    onClear?: (() => void) | undefined;
}
export interface LabelProps extends TextProps {
    text?: string | undefined;
    onTap?: (() => void) | undefined;
}
export interface FloatingIconProps extends ViewProps {
    containerStyle?: StyleProp<ViewStyle>;
    icon?: React.ReactElement;
    onTap?: (() => void) | undefined;
}
export interface ErrorMessageProps extends TextProps {
    errorMessage?: string | undefined;
}
export interface CharacterCounterProps extends TextProps {
    text?: string | undefined;
    maxLength?: number | undefined;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<View>>;
export default Input;
