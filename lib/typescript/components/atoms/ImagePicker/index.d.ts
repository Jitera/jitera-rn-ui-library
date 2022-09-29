/// <reference types="react" />
import ImagePicker from "./ThemedComponent";
import { LauncherTypeKind } from "./Component";
import type { ImagePickerProps } from "./Component";
export { ImagePicker, LauncherTypeKind };
export type { ImagePickerProps };
declare const _default: import("react").ForwardRefExoticComponent<ImagePickerProps & Partial<import("../../../theme").ThemeProps<ImagePickerProps>> & import("react").RefAttributes<import("react-native").TouchableOpacity>> | import("react").FunctionComponent<Omit<ImagePickerProps & Partial<import("../../../theme").ThemeProps<ImagePickerProps>> & import("react").RefAttributes<import("react-native").TouchableOpacity>, keyof import("../../../theme").ThemeProps<T>>>;
export default _default;
