import type { TextProps } from './Component';
import Text from './ThemedComponent';
import { withTheme } from '../../../theme';

export { Text };
export type { TextProps };
export default withTheme(Text, 'Text');
