import Text from './ThemedComponent';
import { withTheme } from '../../../theme';

import type { TextProps } from './Component';

export { Text };
export type { TextProps };
export default withTheme(Text, 'Text');
