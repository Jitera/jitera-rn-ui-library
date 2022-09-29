/// <reference types="react" />
import ThirdPartyAuthButton, { ThirdPartyAuthProvider, GoogleAuthResult, FacebookAuthResult, AppleAuthResult } from "./Component";
import type { ThirdPartyAuthButtonProps } from "./Component";
export { ThirdPartyAuthButton, ThirdPartyAuthProvider };
export type { ThirdPartyAuthButtonProps, GoogleAuthResult, FacebookAuthResult, AppleAuthResult };
declare const _default: import("react").FunctionComponent<Omit<ThirdPartyAuthButtonProps & {
    children?: import("react").ReactNode;
}, keyof import("../../../theme").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<ThirdPartyAuthButtonProps & {
    children?: import("react").ReactNode;
}>;
export default _default;
