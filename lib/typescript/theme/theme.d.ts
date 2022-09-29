import type { ButtonProps, ImageProps, InputProps, TextProps, ViewProps, IconProps, PageProps, DividerProps, WebViewProps } from '../';
import type { ModalProps, ToastProps, CommonLoadingProps } from '../components/widgets';
import type { SafeAreaSize } from './safeAreaSize';
import { Colors } from './colors';
import { Spacing } from './spacing';
import { FontSizes } from './fontSize';
import { FontTypes } from './fonts';
declare const _default: {
    fonts: FontTypes;
    colors: Colors;
    spacing: Spacing;
    fontSizes: FontSizes;
};
export default _default;
declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export interface FullTheme {
    brandingColors?: any;
    Toast: Partial<ToastProps>;
    CommonLoading: Partial<CommonLoadingProps>;
    Modal: Partial<ModalProps>;
    Button: Partial<ButtonProps>;
    Image: Partial<ImageProps>;
    Input: Partial<InputProps>;
    Text: Partial<TextProps>;
    View: Partial<ViewProps>;
    Icon: Partial<IconProps>;
    Page: Partial<PageProps>;
    colors: RecursivePartial<Colors>;
    spacing: Partial<Spacing>;
    fontSizes: Partial<FontSizes>;
    fonts: Partial<FontTypes>;
    safeArea: Partial<SafeAreaSize>;
    Divider: Partial<DividerProps>;
    WebView: Partial<WebViewProps>;
}
export declare type Theme<T = any> = Partial<FullTheme> & T;
export declare type UpdateTheme = (updates: RecursivePartial<FullTheme>) => void;
export declare type ReplaceTheme = (updates: RecursivePartial<FullTheme>) => void;
