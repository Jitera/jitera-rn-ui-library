import TouchableOpacity from './ThemedComponent';
import { withTheme } from '../../../theme';

import type { TouchableOpacityProps } from './Component';

export { TouchableOpacity };
export type { TouchableOpacityProps };
export default withTheme(TouchableOpacity, 'TouchableOpacity');
