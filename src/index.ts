import Button, { ButtonProps } from './components/atoms/Button';
import Image, { ImageProps } from './components/atoms/Image';
import Input, { InputProps } from './components/atoms/Input';
import Text, { TextProps } from './components/atoms/Text';
import Page, { PageProps } from './components/atoms/Page';
import View, { ViewProps } from './components/atoms/View';
import Icon, { IconProps, IconType } from './components/atoms/Icon';
import Header, { HeaderProps } from './components/atoms/Header';
import OTPInput, { OTPInputProps } from './components/atoms/OTPInput';
import Divider, { DividerProps } from './components/atoms/Divider';
import WebView, { WebViewProps } from './components/atoms/WebView';
import ImagePicker, { ImagePickerProps, LauncherTypeKind } from './components/atoms/ImagePicker';
import ThirdPartyAuthButton, { ThirdPartyAuthButtonProps, ThirdPartyAuthProvider } from './components/atoms/ThirdPartyAuthButton';
import Carousel, { CarouselProps } from './components/molecules/Carousel';
import FlatList, { FlatListProps } from './components/molecules/FlatList';
import DateTimePicker, {
  DateTimePickerProps, DateMode,
} from './components/atoms/DateTimePicker';
import {
  CommonLoading,
  CommonLoadingProps,
} from './components/widgets/CommonLoading';
import { Modal, ModalProps } from './components/widgets/Modal';
import { Toast, ToastProps } from './components/widgets/Toast';
import {
  colors,
  colorsDark,
  normalize,
  defaultTheme,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  useTheme,
  makeStyles,
  Theme,
  ThemeProps,
  FullTheme,
  UpdateTheme,
  ReplaceTheme,
  Colors,
} from './theme';
import type { RneFunctionComponent } from './theme/helpers'
import components from './previewComponents';

// For theme
export {
  colors,
  normalize,
  colorsDark,
  defaultTheme,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  useTheme,
  makeStyles,
};
// For theme type
export type { Theme, FullTheme, UpdateTheme, ReplaceTheme, ThemeProps, Colors, RneFunctionComponent };
// Components exports
export {
  Button,
  Image,
  Input,
  Text,
  Page,
  View,
  Header,
  Icon,
  OTPInput,
  Divider,
  CommonLoading,
  Toast,
  Modal,
  WebView,
  ImagePicker,
  Carousel,
  DateTimePicker,
  FlatList,
  ThirdPartyAuthButton
};

// Atoms Components Props exports
export type {
  ButtonProps,
  ImageProps,
  InputProps,
  TextProps,
  PageProps,
  HeaderProps,
  ViewProps,
  IconProps,
  OTPInputProps,
  DividerProps,
  CommonLoadingProps,
  ToastProps,
  ModalProps,
  WebViewProps,
  ImagePickerProps,
  CarouselProps,
  DateTimePickerProps,
  FlatListProps,
  ThirdPartyAuthButtonProps
};

// Atoms Components Enum exports
export {
  IconType,
  LauncherTypeKind,
  ThirdPartyAuthProvider
}

export type {
  DateMode
}

export default components;
