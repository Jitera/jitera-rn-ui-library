import { Platform, Dimensions } from 'react-native';
import Color from '../../shared/color';
import renderNode from './renderNode';
import styleCache from './styleCache';
import normalizeText from './normalizeText';
const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';
export const patchWebProps = _ref => {
  let { ...rest
  } = _ref;
  return rest;
};
export { renderNode, normalizeText, ScreenWidth, ScreenHeight, styleCache, isIOS, Color };
//# sourceMappingURL=index.js.map