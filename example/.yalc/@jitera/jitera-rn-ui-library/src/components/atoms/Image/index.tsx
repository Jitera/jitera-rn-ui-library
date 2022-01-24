import { withTheme } from '../../../theme';
import type { ImageProps } from './Component';
import Image from './ThemedComponent';

export { Image };
export type { ImageProps };
export default withTheme(Image, 'Image');
