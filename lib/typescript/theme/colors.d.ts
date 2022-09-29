interface PlatformColors {
    primary: string;
    secondary: string;
    background: string;
    grey: string;
    searchBg: string;
    success: string;
    error: string;
    warning: string;
}
export interface Colors {
    readonly primary: string;
    readonly secondary: string;
    readonly background: string;
    readonly header: string;
    readonly white: string;
    readonly black: string;
    readonly text: string;
    readonly grey0: string;
    readonly grey1: string;
    readonly grey2: string;
    readonly grey3: string;
    readonly grey4: string;
    readonly grey5: string;
    readonly greyOutline: string;
    readonly searchBg: string;
    readonly success: string;
    readonly warning: string;
    readonly error: string;
    readonly disabled: string;
    readonly divider: string;
    readonly googleLogin: string;
    readonly facebookLogin: string;
    readonly platform: {
        ios: PlatformColors;
        android: PlatformColors;
        web: PlatformColors;
        default: PlatformColors;
    };
}
declare const colors: Colors;
export default colors;
