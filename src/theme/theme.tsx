import type {
  ButtonProps,
  ImageProps,
  InputProps,
  TextProps,
  ViewProps,
  IconProps,
  PageProps,
  DividerProps,
} from '../';
import type {
  ModalProps,
  ToastProps,
  CommonLoadingProps,
} from '../components/widgets';

import type { SafeAreaSize } from './safeAreaSize';
import colors, { Colors } from './colors';
import spacing, { Spacing } from './spacing';
import fontSizes, { FontSizes } from './fontSize';
import fonts, { FontTypes } from './fonts';

export default {
  fonts,
  colors,
  spacing,
  fontSizes,
};

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

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
}

export type Theme<T = any> = Partial<FullTheme> & T;

export type UpdateTheme = (updates: RecursivePartial<FullTheme>) => void;

export type ReplaceTheme = (updates: RecursivePartial<FullTheme>) => void;
