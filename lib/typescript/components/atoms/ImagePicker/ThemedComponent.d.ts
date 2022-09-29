import React from "react";
import { ImagePickerProps } from "./Component";
import type { TouchableOpacity } from "react-native";
import type { ThemeProps } from "../../../theme";
declare const ThemedImagePicker: React.ForwardRefExoticComponent<ImagePickerProps & Partial<ThemeProps<ImagePickerProps>> & React.RefAttributes<TouchableOpacity>>;
export default ThemedImagePicker;
