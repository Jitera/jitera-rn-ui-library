import ImagePicker from './ThemedComponent'
import { LauncherTypeKind } from './Component';
import { withTheme } from '../../../theme';

import type { ImagePickerProps } from './Component';

export { ImagePicker, LauncherTypeKind };
export type { ImagePickerProps };
export default withTheme(ImagePicker, 'ImagePicker');
