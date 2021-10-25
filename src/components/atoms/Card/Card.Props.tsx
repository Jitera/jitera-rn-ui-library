import type { StyleProp, ViewStyle } from 'react-native';

export interface CardProps {
  header: string | (() => JSX.Element);
  footer?: string | (() => JSX.Element);
  containerStyles?: StyleProp<ViewStyle>;
  headerStyles?: StyleProp<ViewStyle>;
  footerStyles?: StyleProp<ViewStyle>;
  contentStyles?: StyleProp<ViewStyle>;
  renderContent: () => JSX.Element;
}
