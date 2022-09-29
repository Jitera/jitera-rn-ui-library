import React from "react";
import type { View } from "react-native";
import { PageProps } from "./Component";
import type { ThemeProps } from "../../../theme";
declare const ThemedPage: React.ForwardRefExoticComponent<PageProps & Partial<ThemeProps<PageProps>> & React.RefAttributes<View>>;
export default ThemedPage;
