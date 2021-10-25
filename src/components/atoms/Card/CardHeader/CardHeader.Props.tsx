import type { StyleProp, ViewStyle } from 'react-native';

export interface CardHeaderProps {
  header: string | (() => JSX.Element);
  containerStyles?: StyleProp<ViewStyle>;
}
