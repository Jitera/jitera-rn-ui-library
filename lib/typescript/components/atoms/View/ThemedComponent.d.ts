import React from "react";
import type { View as RNView } from "react-native";
import { ViewProps } from "./Component";
import type { ThemeProps } from "../../../theme";
declare const ThemedView: React.ForwardRefExoticComponent<ViewProps & Partial<ThemeProps<ViewProps>> & React.RefAttributes<RNView>>;
export default ThemedView;
