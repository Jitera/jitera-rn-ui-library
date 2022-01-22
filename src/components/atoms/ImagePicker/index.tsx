import ImagePicker from './Component';
import { withTheme } from '../../../theme';

import type { ImagePickerProps, OpenPicker } from './Component';

export { ImagePicker };
export type { ImagePickerProps, OpenPicker };
export default withTheme(ImagePicker, 'ImagePicker');
