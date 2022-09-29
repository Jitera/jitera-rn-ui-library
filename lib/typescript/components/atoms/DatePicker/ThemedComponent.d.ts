import React from "react";
import { DatePickerProps } from "./Component";
import type { TouchableOpacity } from "react-native";
import type { ThemeProps } from "../../../theme";
declare const ThemedDatePicker: React.ForwardRefExoticComponent<DatePickerProps & Partial<ThemeProps<DatePickerProps>> & React.RefAttributes<TouchableOpacity>>;
export default ThemedDatePicker;
