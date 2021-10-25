import Button, { ButtonProps } from './components/atoms/Button';
import Image, { ImageProps } from './components/atoms/Image';
import Input, { InputProps } from './components/atoms/Input';
import Text, { TextProps } from './components/atoms/Text';
import Page, { PageProps } from './components/atoms/Page';
import View, { ViewProps } from './components/atoms/View';
import Icon, { IconProps } from './components/atoms/Icon';
import Header, { HeaderProps } from './components/atoms/Header';
import OTPInput, { OTPInputProps } from './components/atoms/OTPInput';
import Card, { CardProps } from './components/atoms/Card';
import Divider, { DividerProps } from './components/atoms/Divider';
import ActionsModal, {
  ActionsModalProps,
} from './components/atoms/ActionsModal';
import ImagePicker, { ImagePickerProps } from './components/atoms/ImagePicker';
import DateTimePicker, {
  DateTimePickerProps,
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
  Card,
  Divider,
  ActionsModal,
  ImagePicker,
  DateTimePicker,
  CommonLoading,
  Toast,
  Modal,
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
  CardProps,
  DividerProps,
  ActionsModalProps,
  ImagePickerProps,
  DateTimePickerProps,
  CommonLoadingProps,
  ToastProps,
  ModalProps,
};
