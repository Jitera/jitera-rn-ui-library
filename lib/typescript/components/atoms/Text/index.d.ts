/// <reference types="react" />
import Text from "./ThemedComponent";
import type { TextProps } from "./Component";
export { Text };
export type { TextProps };
declare const _default: import("react").ForwardRefExoticComponent<TextProps & Partial<import("../../../theme").ThemeProps<TextProps>> & import("react").RefAttributes<import("react-native").Text>> | import("react").FunctionComponent<Omit<TextProps & Partial<import("../../../theme").ThemeProps<TextProps>> & import("react").RefAttributes<import("react-native").Text>, keyof import("../../../theme").ThemeProps<T>>>;
export default _default;
