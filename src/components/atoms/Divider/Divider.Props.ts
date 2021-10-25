import type { StyleProp, ViewStyle } from 'react-native';

export interface DividerProps {
  styles?: StyleProp<ViewStyle>;
  color?: string;
  size?: number;
  content?: string | (() => JSX.Element);
  contentPosition?: 'left' | 'center' | 'right';
  contentStyles?: StyleProp<ViewStyle>;
  containerStyles?: StyleProp<ViewStyle>;
}
