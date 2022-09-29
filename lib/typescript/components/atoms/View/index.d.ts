/// <reference types="react" />
import View from "./ThemedComponent";
import type { ViewProps } from "./Component";
export { View };
export type { ViewProps };
declare const _default: import("react").ForwardRefExoticComponent<ViewProps & Partial<import("../../../theme").ThemeProps<ViewProps>> & import("react").RefAttributes<import("react-native").View>> | import("react").FunctionComponent<Omit<ViewProps & Partial<import("../../../theme").ThemeProps<ViewProps>> & import("react").RefAttributes<import("react-native").View>, keyof import("../../../theme").ThemeProps<T>>>;
export default _default;
