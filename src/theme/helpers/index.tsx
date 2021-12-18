import { Platform, Dimensions } from 'react-native';
import Color from '../../shared/color';
import renderNode from './renderNode';
import styleCache from './styleCache';
import normalizeText from './normalizeText';
import type { ThemeProps } from '../index';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';

export type RneFunctionComponent<T> = React.FunctionComponent<
  T & Partial<ThemeProps<T>> & { ref?: any }
>;

export const patchWebProps = <T extends Record<any, any>>({ ...rest }: T) => {
  return rest;
};

export {
  renderNode,
  normalizeText,
  ScreenWidth,
  ScreenHeight,
  styleCache,
  isIOS,
  Color,
};
