import type { TouchableOpacityProps } from './Component';
import { withTheme } from '../../../theme';
import TouchableOpacity from './ThemedComponent';

export { TouchableOpacity };
export type { TouchableOpacityProps };
export default withTheme(TouchableOpacity, 'TouchableOpacity');
