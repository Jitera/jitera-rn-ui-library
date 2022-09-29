import React from "react";
import { TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native";
import type { PreviewProps } from "../../../type";
/**
 * DatePicker support date/time select on iOS and Android and built on top of react-native-datetimepicker
 * Reference: https://github.com/react-native-datetimepicker/datetimepicker
 **/
export declare type DateMode = "date" | "time" | "datetime";
export interface DatePickerProps extends PreviewProps {
    value?: Date;
    dateMode?: DateMode;
    confirmText?: string;
    cancelText?: string;
    onChange?: (date: any) => void;
    onBlur?: any;
    style?: ViewStyle;
    disabled?: boolean;
    cancelButtonStyle?: TextStyle;
    confirmButtonStyle?: TextStyle;
    display?: "default" | "compact" | "inline" | "spinner" | "clock" | "calendar";
    errorStyle?: StyleProp<TextStyle>;
    errorMessage?: string;
}
declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<TouchableOpacity>>;
export default DatePicker;
