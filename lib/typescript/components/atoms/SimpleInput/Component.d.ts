import React from 'react';
import { TextInput, ColorValue, NativeSyntheticEvent, StyleProp, TextInputEndEditingEventData, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { IconProps } from '../Icon';
import type { ViewProps } from '../View';
export interface SimpleInputProps extends Omit<TextInputProps, 'onChangeText' | 'onChange' | 'onBlur' | 'multiline' | 'style'> {
    style?: StyleProp<ViewStyle> | undefined;
    onChange?: ((text: string) => void) | undefined;
    onBlur?: ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void) | undefined;
    isPreview?: boolean | undefined;
    maxLength?: number | undefined;
    inputRef?: React.MutableRefObject<TextInput | null> | undefined;
    inputStyle?: StyleProp<TextStyle> | undefined;
    showClearText?: boolean | undefined;
    clearIconColor?: ColorValue | undefined;
    clearIconProps?: IconProps | undefined;
    showSecureEye?: boolean | undefined;
    secureEyeIconColor?: ColorValue | undefined;
    secureEyeIconProps?: IconProps | undefined;
    onClear?: (() => void) | undefined;
}
export interface FloatingIconProps extends ViewProps {
    containerStyle?: StyleProp<ViewStyle>;
    icon?: React.ReactElement;
    onTap?: (() => void) | undefined;
}
declare const SimpleInput: React.ForwardRefExoticComponent<SimpleInputProps & React.RefAttributes<View>>;
export default SimpleInput;
