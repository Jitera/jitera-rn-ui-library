import type { StyleProp, ViewStyle } from 'react-native';

export interface TimerProps {
  description?: string;
  timesUpMessage?: string;
  format?: TimeFormat;
  onTimesup?: () => void;
  containerStyles?: StyleProp<ViewStyle>;
  descriptionStyles?: StyleProp<ViewStyle>;
  timmerStyles?: StyleProp<ViewStyle>;
}

export enum TimeFormat {
  HH_MM_SS = 'HH:MM:SS',
  MM_SS = 'MM:SS',
}
