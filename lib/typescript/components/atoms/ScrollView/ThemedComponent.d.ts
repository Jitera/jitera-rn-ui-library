import React from "react";
import type { ScrollView as RNScrollView } from "react-native";
import { ScrollViewProps } from "./Component";
import type { ThemeProps } from "../../../theme";
declare const ThemedScrollView: React.ForwardRefExoticComponent<ScrollViewProps & Partial<ThemeProps<ScrollViewProps>> & React.RefAttributes<RNScrollView>>;
export default ThemedScrollView;
