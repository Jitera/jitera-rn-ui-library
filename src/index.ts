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
import ImagePicker, { ImagePickerProps } from './components/atoms/ImagePicker';
import Carousel, { CarouselProps } from './components/molecules/Carousel';
import DateTimePicker, {
  DateTimePickerProps, DateMode,
} from './components/atoms/DateTimePicker';

import CommonLoading, {
  CommonLoadingProps,
} from './components/widgets/CommonLoading';
import Modal, { ModalProps } from './components/widgets/Modal';
import Toast, { ToastProps } from './components/widgets/Toast';
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
export type { Theme, FullTheme, UpdateTheme, ReplaceTheme, ThemeProps, Colors };
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
};

// Atoms Components Enum exports
export {
  IconType
}

export type {
  DateMode
}

export default components;
