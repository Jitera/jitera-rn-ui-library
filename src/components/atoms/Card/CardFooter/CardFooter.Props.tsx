import type { StyleProp, ViewStyle } from 'react-native';

export interface CardFooterProps {
  footer: string | (() => JSX.Element);
  containerStyles?: StyleProp<ViewStyle>;
}
